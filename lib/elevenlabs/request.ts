import { NextResponse } from "next/server";
import { requireElevenLabsAuth } from "./auth";
import { asRecord, hasCredentialLikeText, stringField } from "./types";

export async function authorizedJson(request: Request) {
  const authError = requireElevenLabsAuth(request);
  if (authError) return { error: authError };

  try {
    const payload: unknown = await request.json();
    const data = asRecord(payload);
    const serialized = JSON.stringify(data);

    if (hasCredentialLikeText(serialized)) {
      return {
        error: NextResponse.json(
          { error: "Do not send credentials, API keys, tokens, or passwords through this endpoint." },
          { status: 400 }
        ),
      };
    }

    return { data };
  } catch {
    return { error: NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 }) };
  }
}

export function missingFields(data: Record<string, unknown>, fields: string[]) {
  return fields.filter((field) => !stringField(data, field));
}

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export function serverError(label: string, error: unknown) {
  console.error(label, error);
  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}
