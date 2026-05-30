import { NextResponse } from "next/server";
import { createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { notificationLine, redactedSummary } from "@/lib/elevenlabs/format";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { optionalString, stringField } from "@/lib/elevenlabs/types";

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const email = stringField(parsed.data, "email");
  const phone = stringField(parsed.data, "phone");
  const name = stringField(parsed.data, "name");
  const company = stringField(parsed.data, "company");

  if (!email && !phone) return badRequest("email or phone is required.");
  if (!name && !company) return badRequest("name or company is required.");

  try {
    const result = await createOrUpdateContact({
      name: optionalString(name),
      email: optionalString(email),
      phone: optionalString(phone),
      company: optionalString(company),
      website: optionalString(stringField(parsed.data, "website")),
      industry: optionalString(stringField(parsed.data, "industry")),
      contactType: optionalString(stringField(parsed.data, "contact_type")),
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: optionalString(stringField(parsed.data, "source")),
    });

    const summary = redactedSummary(stringField(parsed.data, "conversation_summary"));
    const note = summary
      ? await createContactNote({
          contactId: result.contactId,
          body: [
            "Automate4U Ava contact update",
            "",
            notificationLine("Conversation ID", stringField(parsed.data, "conversation_id")),
            notificationLine("Source", stringField(parsed.data, "source")),
            notificationLine("Contact type", stringField(parsed.data, "contact_type")),
            notificationLine("Summary", summary),
          ].join("\n"),
        })
      : undefined;

    return NextResponse.json({ ok: true, hubspot: result, note });
  } catch (error) {
    return serverError("[ElevenLabs Contact] failed", error);
  }
}
