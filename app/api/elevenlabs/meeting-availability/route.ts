import { NextResponse } from "next/server";
import { assessmentMeetingSlug, assessmentMeetingUrl } from "@/lib/elevenlabs/format";
import { getMeetingAvailability } from "@/lib/elevenlabs/hubspot";
import { authorizedJson, badRequest, serverError } from "@/lib/elevenlabs/request";
import { stringField } from "@/lib/elevenlabs/types";

function numberField(data: Record<string, unknown>, key: string): number | undefined {
  const value = data[key];
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() && Number.isFinite(Number(value))) return Number(value);
  return undefined;
}

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  const timezone = stringField(parsed.data, "timezone") || "America/Toronto";
  const meetingType = stringField(parsed.data, "meeting_type") || "free_ai_workflow_assessment";
  if (meetingType !== "free_ai_workflow_assessment") return badRequest("Unsupported meeting_type.");

  try {
    const availability = await getMeetingAvailability({
      slug: assessmentMeetingSlug(),
      timezone,
      monthOffset: numberField(parsed.data, "month_offset"),
      durationMillis: numberField(parsed.data, "duration_millis"),
      limit: numberField(parsed.data, "limit"),
    });

    return NextResponse.json({
      ok: true,
      meeting_type: meetingType,
      meeting_url: assessmentMeetingUrl,
      ...availability,
    });
  } catch (error) {
    return serverError("[ElevenLabs Meeting Availability] failed", error);
  }
}
