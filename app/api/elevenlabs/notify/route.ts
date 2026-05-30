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
  ["Requested action", "requested_action"],
  ["Conversation ID", "conversation_id"],
];

function asPriority(value: string): Priority {
  return value === "urgent" || value === "high" || value === "low" ? value : "normal";
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const summary = redactedSummary(stringField(parsed.data, "summary"));
  if (!summary) return badRequest("summary is required.");

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

    return NextResponse.json({ ok: true, notification: result });
  } catch (error) {
    return serverError("[ElevenLabs Notify] failed", error);
  }
}
