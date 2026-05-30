import { NextResponse } from "next/server";
import { requireElevenLabsAuth } from "@/lib/elevenlabs/auth";
import { assessmentMeetingUrl } from "@/lib/elevenlabs/format";

export async function GET(request: Request) {
  const authError = requireElevenLabsAuth(request);
  if (authError) return authError;

  return NextResponse.json({
    meeting_url: assessmentMeetingUrl,
  });
}
