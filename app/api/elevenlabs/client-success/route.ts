import { NextResponse } from "next/server";
import { notificationLine, payloadLines, redactedSummary } from "@/lib/elevenlabs/format";
import { createClientSuccessTicket, createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { booleanField, optionalString, stringField } from "@/lib/elevenlabs/types";

const clientSuccessFields: Array<[string, string]> = [
  ["Name", "name"],
  ["Email", "email"],
  ["Company", "company"],
  ["Current workflow", "current_workflow"],
  ["Requested change", "requested_change"],
  ["Business reason", "business_reason"],
  ["Urgency", "urgency"],
  ["Scope or pricing risk", "scope_or_pricing_risk"],
  ["Conversation ID", "conversation_id"],
];

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const company = stringField(parsed.data, "company");
  const requestedChange = stringField(parsed.data, "requested_change");

  if (!company) return badRequest("company is required.");
  if (!requestedChange) return badRequest("requested_change is required.");

  try {
    const hubspot = await createOrUpdateContact({
      name: optionalString(stringField(parsed.data, "name")),
      email: optionalString(stringField(parsed.data, "email")),
      company,
      contactType: "client",
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: "elevenlabs_client_success",
    });

    const scopeRisk = booleanField(parsed.data, "scope_or_pricing_risk");
    const ticket = await createClientSuccessTicket({
      contactId: hubspot.contactId,
      company,
      requestedChange,
      currentWorkflow: optionalString(stringField(parsed.data, "current_workflow")),
      businessReason: optionalString(stringField(parsed.data, "business_reason")),
      urgency: optionalString(stringField(parsed.data, "urgency")),
      scopeOrPricingRisk: scopeRisk,
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      conversationSummary: optionalString(redactedSummary(stringField(parsed.data, "conversation_summary"))),
    }).catch((error) => {
      console.error("[ElevenLabs Client Success] optional HubSpot ticket creation failed", error);
      return { configured: true, ticketId: undefined, skipped: "hubspot_ticket_creation_failed" };
    });

    const body = [
      "Automate4U client success request from Ava",
      "",
      ...payloadLines(parsed.data, clientSuccessFields),
      notificationLine("Conversation summary", redactedSummary(stringField(parsed.data, "conversation_summary"))),
      notificationLine("HubSpot ticket", ticket.ticketId ?? ticket.skipped ?? "Not configured"),
    ].join("\n");

    const note = await createContactNote({
      contactId: hubspot.contactId,
      body,
    });

    const notification = await sendInternalNotification({
      subject: `Ava client success request: ${company}`,
      body,
      priority: scopeRisk ? "high" : "normal",
    });

    return NextResponse.json({
      ok: true,
      scope_or_pricing_risk: scopeRisk,
      hubspot,
      ticket,
      note,
      notification,
    });
  } catch (error) {
    return serverError("[ElevenLabs Client Success] failed", error);
  }
}
