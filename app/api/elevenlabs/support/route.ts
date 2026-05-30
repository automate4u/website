import { NextResponse } from "next/server";
import { notificationLine, payloadLines, redactedSummary } from "@/lib/elevenlabs/format";
import { createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { optionalString, stringField, type Priority } from "@/lib/elevenlabs/types";

const supportFields: Array<[string, string]> = [
  ["Name", "name"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Company", "company"],
  ["Affected workflow", "affected_workflow"],
  ["Issue summary", "issue_summary"],
  ["Severity", "severity"],
  ["Customer impact", "customer_impact"],
  ["Started at", "started_at"],
  ["Conversation ID", "conversation_id"],
];

function priorityFromSeverity(severity: string): Priority {
  if (severity === "P0") return "urgent";
  if (severity === "P1") return "high";
  return "normal";
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const company = stringField(parsed.data, "company");
  const issueSummary = stringField(parsed.data, "issue_summary");
  const severity = stringField(parsed.data, "severity") || "unknown";

  if (!company) return badRequest("company is required.");
  if (!issueSummary) return badRequest("issue_summary is required.");

  try {
    const hubspot = await createOrUpdateContact({
      name: optionalString(stringField(parsed.data, "name")),
      email: optionalString(stringField(parsed.data, "email")),
      phone: optionalString(stringField(parsed.data, "phone")),
      company,
      contactType: "client",
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: "elevenlabs_support",
    });

    const priority = priorityFromSeverity(severity);
    const body = [
      "Automate4U support intake from Ava",
      "",
      ...payloadLines(parsed.data, supportFields),
      notificationLine("Conversation summary", redactedSummary(stringField(parsed.data, "conversation_summary"))),
    ].join("\n");

    const note = await createContactNote({
      contactId: hubspot.contactId,
      body,
    });

    const notification = await sendInternalNotification({
      subject: `Ava support intake: ${company} (${severity})`,
      body,
      priority,
    });

    return NextResponse.json({
      ok: true,
      priority,
      human_escalation_recommended: severity === "P0" || severity === "P1",
      hubspot,
      note,
      notification,
    });
  } catch (error) {
    return serverError("[ElevenLabs Support] failed", error);
  }
}
