import type { JsonObject, Priority } from "./types";
import { hasCredentialLikeText } from "./types";

export const notificationRecipients = ["johnny@automate4u.co", "michael@automate4u.co", "hello@automate4u.co"];

export const assessmentMeetingUrl =
  process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ?? "https://meetings-na3.hubspot.com/jzhang";

export function present(value: unknown): string {
  return typeof value === "string" && value.trim() ? value.trim() : "Not provided";
}

export function notificationLine(label: string, value: unknown): string {
  return `${label}: ${present(value)}`;
}

export function payloadLines(data: JsonObject, fields: Array<[string, string]>): string[] {
  return fields.map(([label, key]) => notificationLine(label, data[key]));
}

export function redactedSummary(value: string): string {
  if (!value) return "";
  if (hasCredentialLikeText(value)) {
    return "[Redacted because the message appears to mention credentials or private access details.]";
  }
  return value.slice(0, 4000);
}

export function priorityPrefix(priority: Priority): string {
  if (priority === "urgent") return "[URGENT] ";
  if (priority === "high") return "[High priority] ";
  return "";
}
