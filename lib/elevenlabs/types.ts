export type JsonObject = Record<string, unknown>;

export type ContactType = "prospect" | "client" | "vendor" | "partner" | "candidate" | "internal" | "unknown";

export type IntentRoute =
  | "new_sales_assessment"
  | "sales_follow_up"
  | "website_demo"
  | "existing_client_support"
  | "client_success"
  | "internal_admin"
  | "billing"
  | "pricing"
  | "legal_compliance"
  | "vendor_partner_media_hiring"
  | "unknown_sensitive";

export type Priority = "low" | "normal" | "high" | "urgent";

export type SpecialistAgent =
  | "none"
  | "sales_assessment"
  | "sales_outreach"
  | "support"
  | "client_success"
  | "billing_admin"
  | "human";

export type SupportSeverity = "P0" | "P1" | "P2" | "P3" | "unknown";

export type HubSpotContact = {
  id: string;
  properties?: Record<string, string | null | undefined>;
};

export type RoutingContext = {
  known_contact: boolean;
  contact_type: ContactType;
  hubspot_contact_id?: string;
  hubspot_deal_id?: string;
  hubspot_ticket_id?: string;
  intent_route: IntentRoute;
  recommended_specialist_agent: SpecialistAgent;
  priority: Priority;
  summary: string;
  next_best_action: string;
};

export function asRecord(value: unknown): JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? (value as JsonObject) : {};
}

export function stringField(data: JsonObject, key: string): string {
  const value = data[key];
  return typeof value === "string" ? value.trim() : "";
}

export function booleanField(data: JsonObject, key: string): boolean {
  return data[key] === true;
}

export function optionalString(value: string): string | undefined {
  return value ? value : undefined;
}

export function hasCredentialLikeText(value: string): boolean {
  const normalized = value.toLowerCase();
  return [
    "api key",
    "apikey",
    "auth token",
    "bearer ",
    "password",
    "private key",
    "secret key",
    "access token",
    "refresh token",
  ].some((pattern) => normalized.includes(pattern));
}

export function compactObject<T extends Record<string, unknown>>(value: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined && item !== null && item !== "")
  ) as Partial<T>;
}
