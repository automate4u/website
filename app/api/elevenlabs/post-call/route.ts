import { NextResponse } from "next/server";
import { notificationLine, redactedSummary } from "@/lib/elevenlabs/format";
import { createContactNote, lookupContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, serverError } from "@/lib/elevenlabs/request";
import { booleanField, optionalString, stringField, type Priority } from "@/lib/elevenlabs/types";

function reviewPriority(data: Record<string, unknown>): Priority {
  if (booleanField(data, "human_escalation")) return "high";
  const route = stringField(data, "intent_route");
  if (route === "legal_compliance" || route === "existing_client_support") return "high";
  return "normal";
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  try {
    const priority = reviewPriority(parsed.data);
    const summary = redactedSummary(stringField(parsed.data, "summary") || stringField(parsed.data, "conversation_summary"));
    const conversationId = stringField(parsed.data, "conversation_id");
    const suppliedContactId = stringField(parsed.data, "hubspot_contact_id");

    console.info("[ElevenLabs Post Call]", {
      conversation_id: conversationId,
      agent_id: stringField(parsed.data, "agent_id"),
      entry_mode: stringField(parsed.data, "entry_mode"),
      intent_route: stringField(parsed.data, "intent_route"),
      action_taken: stringField(parsed.data, "action_taken"),
      human_escalation: booleanField(parsed.data, "human_escalation"),
    });

    const matchedContact = suppliedContactId
      ? null
      : await lookupContact({
          email: optionalString(stringField(parsed.data, "contact_email") || stringField(parsed.data, "email")),
          phone: optionalString(stringField(parsed.data, "caller_phone") || stringField(parsed.data, "phone")),
          company: optionalString(stringField(parsed.data, "company")),
        });

    const note = await createContactNote({
      contactId: suppliedContactId || matchedContact?.id,
      body: [
        "Automate4U Ava post-call summary",
        "",
        notificationLine("Conversation ID", conversationId),
        notificationLine("Agent ID", stringField(parsed.data, "agent_id")),
        notificationLine("Entry mode", stringField(parsed.data, "entry_mode")),
        notificationLine("Intent route", stringField(parsed.data, "intent_route")),
        notificationLine("Action taken", stringField(parsed.data, "action_taken")),
        notificationLine("Human escalation", String(booleanField(parsed.data, "human_escalation"))),
        notificationLine("Summary", summary),
      ].join("\n"),
    });

    let notification: Awaited<ReturnType<typeof sendInternalNotification>> | undefined;

    if (priority === "high") {
      const body = [
        "ElevenLabs post-call review required",
        "",
        notificationLine("Conversation ID", conversationId),
        notificationLine("Agent ID", stringField(parsed.data, "agent_id")),
        notificationLine("Entry mode", stringField(parsed.data, "entry_mode")),
        notificationLine("Intent route", stringField(parsed.data, "intent_route")),
        notificationLine("Action taken", stringField(parsed.data, "action_taken")),
        notificationLine("Human escalation", String(booleanField(parsed.data, "human_escalation"))),
        notificationLine("Summary", summary),
      ].join("\n");

      notification = await sendInternalNotification({
        subject: "Ava post-call review required",
        body,
        priority,
      });
    }

    return NextResponse.json({ ok: true, note, notification });
  } catch (error) {
    return serverError("[ElevenLabs Post Call] failed", error);
  }
}
