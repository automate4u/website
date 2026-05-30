import { notificationRecipients, priorityPrefix } from "./format";
import type { Priority } from "./types";

type InternalNotification = {
  subject: string;
  body: string;
  priority?: Priority;
};

export async function sendInternalNotification({ subject, body, priority = "normal" }: InternalNotification) {
  if (process.env.A4U_E2E_TEST_MODE === "1") {
    return { sent: false, skipped: "e2e_test_mode" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "hello@automate4u.co";

  if (!apiKey) {
    return { sent: false, skipped: "resend_not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: notificationRecipients,
      subject: `${priorityPrefix(priority)}${subject}`,
      text: body,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Internal notification failed: ${response.status} ${errorText}`);
  }

  return { sent: true };
}
