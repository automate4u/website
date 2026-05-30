import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { notificationLine, redactedSummary } from "@/lib/elevenlabs/format";
import { createContactNote, lookupContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { serverError } from "@/lib/elevenlabs/request";
import { requireElevenLabsAuth } from "@/lib/elevenlabs/auth";
import { asRecord, booleanField, optionalString, stringField, type JsonObject, type Priority } from "@/lib/elevenlabs/types";

export const runtime = "nodejs";

type ParsedPostCallPayload =
  | { data: JsonObject; authMethod: "bearer" | "hmac" }
  | { error: NextResponse };

const SIGNATURE_TOLERANCE_SECS = 30 * 60;

function webhookSecret() {
  return (
    process.env.ELEVENLABS_WEBHOOK_SECRET ||
    process.env.A4U_ELEVENLABS_WEBHOOK_SECRET ||
    process.env.WEBHOOK_SECRET ||
    ""
  ).trim();
}

function parseJson(rawBody: string) {
  try {
    return asRecord(JSON.parse(rawBody));
  } catch {
    return null;
  }
}

function signatureParts(signatureHeader: string) {
  const parts = new Map<string, string[]>();

  for (const part of signatureHeader.split(",")) {
    const [key, ...valueParts] = part.trim().split("=");
    const value = valueParts.join("=").trim();
    if (!key || !value) continue;
    parts.set(key, [...(parts.get(key) ?? []), value]);
  }

  return {
    timestamp: parts.get("t")?.[0] ?? "",
    signatures: parts.get("v0") ?? [],
  };
}

function safeEqualHex(left: string, right: string) {
  if (!left || !right) return false;

  const leftBuffer = Buffer.from(left, "hex");
  const rightBuffer = Buffer.from(right, "hex");
  if (leftBuffer.length !== rightBuffer.length) return false;

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function verifyElevenLabsSignature(rawBody: string, signatureHeader: string): NextResponse | null {
  const secret = webhookSecret();
  if (!secret) {
    return NextResponse.json({ error: "ElevenLabs webhook signature secret is not configured" }, { status: 503 });
  }

  const { timestamp, signatures } = signatureParts(signatureHeader);
  const timestampNumber = Number(timestamp);

  if (!timestamp || signatures.length === 0 || !Number.isFinite(timestampNumber)) {
    return NextResponse.json({ error: "Invalid ElevenLabs signature header" }, { status: 401 });
  }

  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestampNumber) > SIGNATURE_TOLERANCE_SECS) {
    return NextResponse.json({ error: "Stale ElevenLabs webhook signature" }, { status: 401 });
  }

  const expected = createHmac("sha256", secret).update(`${timestamp}.${rawBody}`).digest("hex");
  if (!signatures.some((signature) => safeEqualHex(signature, expected))) {
    return NextResponse.json({ error: "Invalid ElevenLabs webhook signature" }, { status: 401 });
  }

  return null;
}

async function parsePostCallPayload(request: Request): Promise<ParsedPostCallPayload> {
  const rawBody = await request.text();
  const signatureHeader = request.headers.get("elevenlabs-signature");

  if (signatureHeader) {
    const signatureError = verifyElevenLabsSignature(rawBody, signatureHeader);
    if (signatureError) return { error: signatureError };

    const data = parseJson(rawBody);
    if (!data) return { error: NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 }) };
    return { data: normalizePostCallPayload(data), authMethod: "hmac" };
  }

  const authError = requireElevenLabsAuth(request);
  if (authError) return { error: authError };

  const data = parseJson(rawBody);
  if (!data) return { error: NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 }) };

  return { data: normalizePostCallPayload(data), authMethod: "bearer" };
}

function recordField(data: JsonObject, key: string): JsonObject {
  return asRecord(data[key]);
}

function firstString(...values: unknown[]) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
  }
  return "";
}

function firstBoolean(...values: unknown[]) {
  for (const value of values) {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (normalized === "true") return true;
      if (normalized === "false") return false;
    }
  }
  return false;
}

function normalizePostCallPayload(payload: JsonObject): JsonObject {
  const webhookType = stringField(payload, "type");
  const eventData = recordField(payload, "data");

  if (!webhookType || Object.keys(eventData).length === 0) {
    return payload;
  }

  const metadata = recordField(eventData, "metadata");
  const metadataBody = recordField(metadata, "body");
  const analysis = recordField(eventData, "analysis");
  const initiationData = recordField(eventData, "conversation_initiation_client_data");
  const dynamicVariables = recordField(initiationData, "dynamic_variables");

  return {
    ...payload,
    ...eventData,
    webhook_event_type: webhookType,
    event_timestamp: payload.event_timestamp,
    summary: firstString(
      payload.summary,
      payload.conversation_summary,
      analysis.transcript_summary,
      eventData.summary,
      webhookType === "call_initiation_failure" ? `Call initiation failed: ${firstString(eventData.failure_reason)}` : ""
    ),
    conversation_id: firstString(eventData.conversation_id, payload.conversation_id),
    agent_id: firstString(eventData.agent_id, payload.agent_id),
    agent_name: firstString(eventData.agent_name, payload.agent_name),
    status: firstString(eventData.status, payload.status),
    entry_mode: firstString(dynamicVariables.entry_mode, payload.entry_mode),
    source_page: firstString(dynamicVariables.source_page, payload.source_page),
    cta_location: firstString(dynamicVariables.cta_location, payload.cta_location),
    intent_route: firstString(dynamicVariables.intent_route, payload.intent_route),
    action_taken: firstString(dynamicVariables.action_taken, payload.action_taken),
    hubspot_contact_id: firstString(dynamicVariables.hubspot_contact_id, payload.hubspot_contact_id),
    contact_email: firstString(dynamicVariables.contact_email, dynamicVariables.email, payload.contact_email, payload.email),
    caller_phone: firstString(
      dynamicVariables.caller_phone,
      dynamicVariables.phone,
      payload.caller_phone,
      payload.phone,
      metadata.from_number,
      metadata.caller_id,
      metadataBody.From,
      metadataBody.Caller
    ),
    company: firstString(dynamicVariables.company, payload.company),
    call_duration_secs: firstString(metadata.call_duration_secs, payload.call_duration_secs),
    call_successful: firstString(analysis.call_successful, payload.call_successful),
    failure_reason: firstString(eventData.failure_reason, payload.failure_reason),
    human_escalation: firstBoolean(dynamicVariables.human_escalation, payload.human_escalation),
  };
}

function reviewPriority(data: Record<string, unknown>): Priority {
  const webhookType = stringField(data, "webhook_event_type");
  if (webhookType === "call_initiation_failure") return "high";
  if (webhookType === "post_call_audio") return "low";
  if (booleanField(data, "human_escalation")) return "high";
  const route = stringField(data, "intent_route");
  if (route === "legal_compliance" || route === "existing_client_support") return "high";
  return "normal";
}

export async function POST(request: Request) {
  const parsed = await parsePostCallPayload(request);
  if ("error" in parsed) return parsed.error;

  try {
    const priority = reviewPriority(parsed.data);
    const summary = redactedSummary(stringField(parsed.data, "summary") || stringField(parsed.data, "conversation_summary"));
    const conversationId = stringField(parsed.data, "conversation_id");
    const suppliedContactId = stringField(parsed.data, "hubspot_contact_id");

    console.info("[ElevenLabs Post Call]", {
      conversation_id: conversationId,
      agent_id: stringField(parsed.data, "agent_id"),
      webhook_event_type: stringField(parsed.data, "webhook_event_type"),
      auth_method: parsed.authMethod,
      entry_mode: stringField(parsed.data, "entry_mode"),
      intent_route: stringField(parsed.data, "intent_route"),
      action_taken: stringField(parsed.data, "action_taken"),
      human_escalation: booleanField(parsed.data, "human_escalation"),
    });

    let matchedContact: Awaited<ReturnType<typeof lookupContact>> = null;
    if (!suppliedContactId) {
      try {
        matchedContact = await lookupContact({
          email: optionalString(stringField(parsed.data, "contact_email") || stringField(parsed.data, "email")),
          phone: optionalString(stringField(parsed.data, "caller_phone") || stringField(parsed.data, "phone")),
          company: optionalString(stringField(parsed.data, "company")),
        });
      } catch (error) {
        console.error("[ElevenLabs Post Call] contact lookup failed", error);
      }
    }

    let note: unknown;
    try {
      note = await createContactNote({
        contactId: suppliedContactId || matchedContact?.id,
        body: [
          "Automate4U Ava post-call summary",
          "",
          notificationLine("Conversation ID", conversationId),
          notificationLine("Agent ID", stringField(parsed.data, "agent_id")),
          notificationLine("Agent name", stringField(parsed.data, "agent_name")),
          notificationLine("Webhook event", stringField(parsed.data, "webhook_event_type")),
          notificationLine("Status", stringField(parsed.data, "status")),
          notificationLine("Call successful", stringField(parsed.data, "call_successful")),
          notificationLine("Call duration seconds", stringField(parsed.data, "call_duration_secs")),
          notificationLine("Failure reason", stringField(parsed.data, "failure_reason")),
          notificationLine("Entry mode", stringField(parsed.data, "entry_mode")),
          notificationLine("Source page", stringField(parsed.data, "source_page")),
          notificationLine("CTA location", stringField(parsed.data, "cta_location")),
          notificationLine("Intent route", stringField(parsed.data, "intent_route")),
          notificationLine("Action taken", stringField(parsed.data, "action_taken")),
          notificationLine("Human escalation", String(booleanField(parsed.data, "human_escalation"))),
          notificationLine("Summary", summary),
        ].join("\n"),
      });
    } catch (error) {
      console.error("[ElevenLabs Post Call] note creation failed", error);
      note = { error: "note_creation_failed" };
    }

    let notification: Awaited<ReturnType<typeof sendInternalNotification>> | { error: string } | undefined;

    if (priority === "high") {
      const body = [
        "ElevenLabs post-call review required",
        "",
        notificationLine("Conversation ID", conversationId),
        notificationLine("Agent ID", stringField(parsed.data, "agent_id")),
        notificationLine("Agent name", stringField(parsed.data, "agent_name")),
        notificationLine("Webhook event", stringField(parsed.data, "webhook_event_type")),
        notificationLine("Status", stringField(parsed.data, "status")),
        notificationLine("Failure reason", stringField(parsed.data, "failure_reason")),
        notificationLine("Entry mode", stringField(parsed.data, "entry_mode")),
        notificationLine("Source page", stringField(parsed.data, "source_page")),
        notificationLine("Intent route", stringField(parsed.data, "intent_route")),
        notificationLine("Action taken", stringField(parsed.data, "action_taken")),
        notificationLine("Human escalation", String(booleanField(parsed.data, "human_escalation"))),
        notificationLine("Summary", summary),
      ].join("\n");

      try {
        notification = await sendInternalNotification({
          subject: "Ava post-call review required",
          body,
          priority,
        });
      } catch (error) {
        console.error("[ElevenLabs Post Call] notification failed", error);
        notification = { error: "notification_failed" };
      }
    }

    return NextResponse.json({ ok: true, note, notification });
  } catch (error) {
    return serverError("[ElevenLabs Post Call] failed", error);
  }
}
