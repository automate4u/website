import { NextResponse } from "next/server";
import { authorizedJson, serverError } from "@/lib/elevenlabs/request";
import { booleanField, stringField } from "@/lib/elevenlabs/types";

export async function POST(request: Request) {
  const parsed = await authorizedJson(request);
  if (parsed.error) return parsed.error;

  try {
    const event = {
      event_name: stringField(parsed.data, "event_name") || "elevenlabs_agent_event",
      entry_mode: stringField(parsed.data, "entry_mode"),
      route: stringField(parsed.data, "route"),
      recommended_owner: stringField(parsed.data, "recommended_owner"),
      recommended_specialist_agent: stringField(parsed.data, "recommended_specialist_agent"),
      action_taken: stringField(parsed.data, "action_taken"),
      human_escalation: booleanField(parsed.data, "human_escalation"),
      follow_up_required: booleanField(parsed.data, "follow_up_required"),
      conversation_id: stringField(parsed.data, "conversation_id"),
    };

    console.info("[ElevenLabs Agent Event]", event);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return serverError("[ElevenLabs Event] failed", error);
  }
}
