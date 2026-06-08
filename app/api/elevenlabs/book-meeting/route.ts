import { NextResponse } from "next/server";
import { assessmentMeetingSlug, assessmentMeetingUrl, notificationLine, redactedSummary } from "@/lib/elevenlabs/format";
import { bookMeeting, createContactNote, createOrUpdateContact } from "@/lib/elevenlabs/hubspot";
import { sendInternalNotification } from "@/lib/elevenlabs/notifications";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { optionalString, stringField } from "@/lib/elevenlabs/types";

function numberField(data: Record<string, unknown>, key: string): number | undefined {
  const value = data[key];
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() && Number.isFinite(Number(value))) return Number(value);
  return undefined;
}

function parseGuestEmails(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string" && item.includes("@"));
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const meetingType = stringField(parsed.data, "meeting_type") || "free_ai_workflow_assessment";
  if (meetingType !== "free_ai_workflow_assessment") return badRequest("Unsupported meeting_type.");

  const email = stringField(parsed.data, "email");
  const timezone = stringField(parsed.data, "timezone") || "America/Toronto";
  const startTimeMillis = numberField(parsed.data, "start_time_millis");
  const durationMillis = numberField(parsed.data, "duration_millis") ?? 1800000;

  if (!email) return badRequest("email is required.");
  if (!startTimeMillis) return badRequest("start_time_millis is required.");
  if (!durationMillis) return badRequest("duration_millis is required.");

  try {
    const booking = await bookMeeting({
      slug: assessmentMeetingSlug(),
      timezone,
      startTimeMillis,
      durationMillis,
      name: optionalString(stringField(parsed.data, "name")),
      email,
      guestEmails: parseGuestEmails(parsed.data.guest_emails),
    });

    const hubspot = await createOrUpdateContact({
      name: optionalString(stringField(parsed.data, "name")),
      email,
      phone: optionalString(stringField(parsed.data, "phone")),
      company: optionalString(stringField(parsed.data, "company")),
      website: optionalString(stringField(parsed.data, "website")),
      industry: optionalString(stringField(parsed.data, "industry")),
      contactType: "prospect",
      conversationId: optionalString(stringField(parsed.data, "conversation_id")),
      source: "elevenlabs_meeting_booking",
    });

    const body = [
      "Ava assessment meeting booking",
      "",
      notificationLine("Name", stringField(parsed.data, "name")),
      notificationLine("Email", email),
      notificationLine("Phone", stringField(parsed.data, "phone")),
      notificationLine("Company", stringField(parsed.data, "company")),
      notificationLine("Meeting type", meetingType),
      notificationLine("Meeting URL", assessmentMeetingUrl),
      notificationLine("Start", new Date(startTimeMillis).toISOString()),
      notificationLine("Duration minutes", Math.round(durationMillis / 60000)),
      notificationLine("Timezone", timezone),
      notificationLine("Conversation ID", stringField(parsed.data, "conversation_id")),
      notificationLine("Conversation summary", redactedSummary(stringField(parsed.data, "conversation_summary"))),
      notificationLine("HubSpot booking", booking.booking ? "Created" : booking.skipped ?? "Not configured"),
    ].join("\n");

    const note = await createContactNote({
      contactId: hubspot.contactId,
      body,
    });

    const notification = await sendInternalNotification({
      subject: `Ava booked assessment meeting: ${stringField(parsed.data, "company") || email}`,
      body,
      priority: "normal",
    });

    return NextResponse.json({
      ok: Boolean(booking.booking),
      meeting_type: meetingType,
      meeting_url: assessmentMeetingUrl,
      start_time_millis: startTimeMillis,
      start_time_iso: new Date(startTimeMillis).toISOString(),
      duration_millis: durationMillis,
      timezone,
      booking,
      hubspot,
      note,
      notification,
    });
  } catch (error) {
    return serverError("[ElevenLabs Book Meeting] failed", error);
  }
}
