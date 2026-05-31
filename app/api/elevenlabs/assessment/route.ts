import { NextResponse } from "next/server";
import { assessmentMeetingUrl, notificationLine, payloadLines, redactedSummary } from "@/lib/elevenlabs/format";
import { createAssessmentDeal, createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, missingFields, serverError } from "@/lib/elevenlabs/request";
import { optionalString, stringField } from "@/lib/elevenlabs/types";

const requiredFields = ["email", "company", "industry", "workflow_pain", "tools", "timeline", "budget"];

const assessmentFields: Array<[string, string]> = [
  ["Name", "name"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Company", "company"],
  ["Website", "website"],
  ["Industry", "industry"],
  ["Workflow pain", "workflow_pain"],
  ["Tools", "tools"],
  ["Timeline", "timeline"],
  ["Budget", "budget"],
  ["Service interest", "service_interest"],
  ["Workflow interest", "workflow_interest"],
  ["Source page", "source_page"],
  ["CTA location", "cta_location"],
  ["UTM source", "utm_source"],
  ["UTM medium", "utm_medium"],
  ["UTM campaign", "utm_campaign"],
  ["UTM term", "utm_term"],
  ["UTM content", "utm_content"],
  ["Landing page", "landing_page"],
  ["Referrer", "referrer"],
  ["Conversation ID", "conversation_id"],
];

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const missing = missingFields(parsed.data, requiredFields);
  if (missing.length > 0) return badRequest(`${missing.join(", ")} required.`);

  try {
    const hubspot = await createOrUpdateContact({
      name: optionalString(stringField(parsed.data, "name")),
      email: optionalString(stringField(parsed.data, "email")),
      phone: optionalString(stringField(parsed.data, "phone")),
      company: optionalString(stringField(parsed.data, "company")),
      website: optionalString(stringField(parsed.data, "website")),
      industry: optionalString(stringField(parsed.data, "industry")),
      contactType: "prospect",
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: "elevenlabs_assessment",
    });

    const deal = await createAssessmentDeal({
      contactId: hubspot.contactId,
      name: optionalString(stringField(parsed.data, "name")),
      company: optionalString(stringField(parsed.data, "company")),
      workflowPain: optionalString(stringField(parsed.data, "workflow_pain")),
      serviceInterest: optionalString(stringField(parsed.data, "service_interest")),
      timeline: optionalString(stringField(parsed.data, "timeline")),
      budget: optionalString(stringField(parsed.data, "budget")),
      sourcePage: optionalString(stringField(parsed.data, "source_page")),
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      conversationSummary: optionalString(redactedSummary(stringField(parsed.data, "conversation_summary"))),
    }).catch((error) => {
      console.error("[ElevenLabs Assessment] optional HubSpot deal creation failed", error);
      return { configured: true, dealId: undefined, skipped: "hubspot_deal_creation_failed" };
    });

    const body = [
      "New AI workflow assessment request from Ava",
      "",
      ...payloadLines(parsed.data, assessmentFields),
      notificationLine("Conversation summary", redactedSummary(stringField(parsed.data, "conversation_summary"))),
      notificationLine("HubSpot assessment meeting link", assessmentMeetingUrl),
      notificationLine("HubSpot deal", deal.dealId ?? deal.skipped ?? "Not configured"),
    ].join("\n");

    const note = await createContactNote({
      contactId: hubspot.contactId,
      body,
    });

    const notification = await sendInternalNotification({
      subject: `New Ava assessment request from ${stringField(parsed.data, "company")}`,
      body,
      priority: "normal",
    });

    return NextResponse.json({
      ok: true,
      hubspot,
      deal,
      note,
      notification,
      meeting_url: assessmentMeetingUrl,
    });
  } catch (error) {
    return serverError("[ElevenLabs Assessment] failed", error);
  }
}
