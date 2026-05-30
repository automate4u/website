import { NextResponse } from "next/server";

export function requireElevenLabsAuth(request: Request): NextResponse | null {
  const configuredToken = process.env.A4U_ELEVENLABS_WEBHOOK_TOKEN;

  if (process.env.A4U_E2E_TEST_MODE === "1") {
    return null;
  }

  if (!configuredToken) {
    return NextResponse.json({ error: "ElevenLabs webhook auth is not configured" }, { status: 503 });
  }

  const authorization = request.headers.get("authorization") ?? "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice("Bearer ".length).trim() : "";

  if (!token || token !== configuredToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
