import { NextResponse } from "next/server";
import { notificationLine, payloadLines, redactedSummary } from "@/lib/elevenlabs/format";
import { createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { optionalString, stringField } from "@/lib/elevenlabs/types";

const partnerFields: Array<[string, string]> = [
  ["Name", "name"],
  ["Email", "email"],
  ["Phone", "phone"],
  ["Organization", "company"],
  ["Website", "website"],
  ["Industry", "industry"],
  ["Partner type", "partner_type"],
  ["Partnership model requested", "partnership_model"],
  ["Audience or network", "audience_or_network"],
  ["Referral fit", "referral_fit"],
  ["Services of interest", "services_of_interest"],
  ["Requested next step", "requested_next_step"],
  ["Preferred callback window", "preferred_callback_window"],
  ["Source page", "source_page"],
  ["CTA location", "cta_location"],
  ["Conversation ID", "conversation_id"],
];

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const email = stringField(parsed.data, "email");
  const phone = stringField(parsed.data, "phone");
  const name = stringField(parsed.data, "name");
  const company = stringField(parsed.data, "company");
  const partnershipModel = stringField(parsed.data, "partnership_model");
  const referralFit = stringField(parsed.data, "referral_fit");
  const requestedNextStep = stringField(parsed.data, "requested_next_step");

  if (!email && !phone) return badRequest("email or phone is required.");
  if (!name && !company) return badRequest("name or organization is required.");
  if (!partnershipModel) return badRequest("partnership_model is required.");
  if (!referralFit) return badRequest("referral_fit is required.");
  if (!requestedNextStep) return badRequest("requested_next_step is required.");

  try {
    const hubspot = await createOrUpdateContact({
      name: optionalString(name),
      email: optionalString(email),
      phone: optionalString(phone),
      company: optionalString(company),
      website: optionalString(stringField(parsed.data, "website")),
      industry: optionalString(stringField(parsed.data, "industry")),
      contactType: "partner",
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: "elevenlabs_partner_intake",
    });

    const body = [
      "Automate4U partner intake from Ava",
      "",
      ...payloadLines(parsed.data, partnerFields),
      notificationLine("Contact type", "partner"),
      notificationLine("Conversation summary", redactedSummary(stringField(parsed.data, "conversation_summary"))),
    ].join("\n");

    const note = await createContactNote({
      contactId: hubspot.contactId,
      body,
    });

    const notification = await sendInternalNotification({
      subject: `Ava partner intake${company ? `: ${company}` : ""}`,
      body,
      priority: "normal",
    });

    return NextResponse.json({
      ok: true,
      contact_type: "partner",
      hubspot,
      note,
      notification,
    });
  } catch (error) {
    return serverError("[ElevenLabs Partner] failed", error);
  }
}
