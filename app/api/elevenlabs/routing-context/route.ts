import { NextResponse } from "next/server";
import { lookupContact, safeContactProperties } from "@/lib/elevenlabs/hubspot";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { inferRoutingContext } from "@/lib/elevenlabs/routing";
import { optionalString, stringField } from "@/lib/elevenlabs/types";

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const email = stringField(parsed.data, "email");
  const phone = stringField(parsed.data, "phone");
  const company = stringField(parsed.data, "company");
  const conversationId = stringField(parsed.data, "conversation_id");

  if (!email && !phone && !company && !conversationId) {
    return badRequest("phone, email, company, or conversation_id is required.");
  }

  try {
    const contact = await lookupContact({
      email: optionalString(email),
      phone: optionalString(phone),
      company: optionalString(company),
    });
    const context = inferRoutingContext({
      contact,
      callerIntent: stringField(parsed.data, "caller_stated_intent"),
      entryMode: stringField(parsed.data, "entry_mode"),
      company: optionalString(company),
    });

    return NextResponse.json({
      ...context,
      contact: safeContactProperties(contact),
    });
  } catch (error) {
    return serverError("[ElevenLabs Routing Context] failed", error);
  }
}
