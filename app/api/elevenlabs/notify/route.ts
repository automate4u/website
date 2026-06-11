import { NextResponse } from "next/server";
import { notificationLine, payloadLines, redactedSummary } from "@/lib/elevenlabs/format";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { stringField, type Priority } from "@/lib/elevenlabs/types";

const notificationFields: Array<[string, string]> = [
  ["Notification type", "notification_type"],
  ["Priority", "priority"],
  ["Name", "name"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Company", "company"],
  ["Preferred callback window", "preferred_callback_window"],
  ["Urgency", "urgency"],
  ["Source page", "source_page"],
  ["CTA location", "cta_location"],
  ["Requested action", "requested_action"],
  ["Conversation ID", "conversation_id"],
];

function asPriority(value: string): Priority {
  return value === "urgent" || value === "high" || value === "low" ? value : "normal";
}

function isPhoneCallbackRequest(data: Record<string, unknown>) {
  const combined = [
    stringField(data, "notification_type"),
    stringField(data, "requested_action"),
    stringField(data, "summary"),
    stringField(data, "preferred_callback_window"),
  ]
    .join(" ")
    .toLowerCase();

  return /\b(call|callback|call\s*back|phone)\b/.test(combined);
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const summary = redactedSummary(stringField(parsed.data, "summary"));
  if (!summary) return badRequest("summary is required.");
  if (isPhoneCallbackRequest(parsed.data) && !stringField(parsed.data, "phone")) {
    return badRequest("phone is required for phone callback requests.");
  }
  if (isPhoneCallbackRequest(parsed.data) && !stringField(parsed.data, "preferred_callback_window")) {
    return badRequest("preferred_callback_window is required for phone callback requests.");
  }

  try {
    const priority = asPriority(stringField(parsed.data, "priority"));
    const notificationType = stringField(parsed.data, "notification_type") || "human_escalation";
    const body = [
      "Automate4U ElevenLabs agent notification",
      "",
      ...payloadLines(parsed.data, notificationFields),
      notificationLine("Summary", summary),
    ].join("\n");

    const result = await sendInternalNotification({
      subject: `Ava routed ${notificationType.replaceAll("_", " ")}`,
      body,
      priority,
    });

    const delivered = result.sent ? true : result.skipped === "e2e_test_mode";
    return NextResponse.json({ ok: delivered, notification: result });
  } catch (error) {
    return serverError("[ElevenLabs Notify] failed", error);
  }
}
