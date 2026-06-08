import type { HubSpotContact, JsonObject } from "./types";
import { compactObject } from "./types";

type ContactInput = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  industry?: string;
  contactType?: string;
  conversationId?: string;
  source?: string;
};

type HubSpotObjectResult = {
  configured: boolean;
  skipped?: string;
};

type HubSpotDealResult = HubSpotObjectResult & {
  dealId?: string;
  associatedContactId?: string;
};

type HubSpotTicketResult = HubSpotObjectResult & {
  ticketId?: string;
  associatedContactId?: string;
};

type HubSpotMeetingAvailability = {
  startMillisUtc: number;
  endMillisUtc: number;
  startIso: string;
  endIso: string;
  durationMillis: number;
};

type HubSpotMeetingBookingResult = HubSpotObjectResult & {
  booking?: JsonObject;
  status?: "created" | "failed" | "not_configured";
  error?: string;
  statusCode?: number;
  hubspotResponse?: JsonObject;
};

function hubSpotHeaders() {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;

  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

function splitName(name?: string) {
  const trimmed = name?.trim();
  if (!trimmed) return {};
  const [first, ...rest] = trimmed.split(/\s+/);
  return {
    firstname: first,
    lastname: rest.join(" "),
  };
}

function contactProperties(input: ContactInput): Record<string, string> {
  return compactObject({
    email: input.email,
    phone: input.phone,
    company: input.company,
    website: input.website,
    industry: input.industry,
    ...splitName(input.name),
  }) as Record<string, string>;
}

async function hubSpotFetch(path: string, init: RequestInit) {
  const headers = hubSpotHeaders();
  if (!headers) return { configured: false as const };

  const response = await fetch(`https://api.hubapi.com${path}`, {
    ...init,
    headers: {
      ...headers,
      ...(init.headers ?? {}),
    },
  });

  return { configured: true as const, response };
}

async function hubSpotSchedulerFetch(path: string, init: RequestInit = {}) {
  const headers = hubSpotHeaders();
  if (!headers) return { configured: false as const };

  const response = await fetch(`https://api.hubapi.com${path}`, {
    ...init,
    headers: {
      ...headers,
      ...(init.headers ?? {}),
    },
  });

  const raw = await response.text();
  let data: JsonObject;
  try {
    data = raw ? (JSON.parse(raw) as JsonObject) : {};
  } catch {
    data = { raw };
  }

  return { configured: true as const, response, data };
}

function optionalPipelineConfig(pipelineEnv: string, stageEnv: string) {
  const pipelineId = process.env[pipelineEnv];
  const stageId = process.env[stageEnv];

  if (!pipelineId || !stageId) {
    return {
      configured: false as const,
      skipped: `${pipelineEnv} and ${stageEnv} are required`,
    };
  }

  return { configured: true as const, pipelineId, stageId };
}

async function associateHubSpotObject(args: {
  fromObjectType: string;
  fromObjectId?: string;
  toObjectType: string;
  toObjectId?: string;
}) {
  if (!args.fromObjectId || !args.toObjectId) return { configured: true, skipped: "missing_object_id" };

  const associationResult = await hubSpotFetch(
    `/crm/v4/objects/${encodeURIComponent(args.fromObjectType)}/${encodeURIComponent(
      args.fromObjectId
    )}/associations/default/${encodeURIComponent(args.toObjectType)}/${encodeURIComponent(args.toObjectId)}`,
    { method: "PUT" }
  );

  if (!associationResult.configured) return { configured: false, skipped: "missing_hubspot_token" };
  if (!associationResult.response.ok) {
    throw new Error(`HubSpot ${args.fromObjectType} association failed: ${associationResult.response.status}`);
  }

  return { configured: true };
}

export async function findContactByEmail(email: string): Promise<HubSpotContact | null> {
  if (!email) return null;

  const result = await hubSpotFetch(
    `/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email&properties=email,firstname,lastname,company,phone,website,industry,lifecyclestage`,
    { method: "GET" }
  );

  if (!result.configured) return null;
  if (result.response.status === 404) return null;
  if (!result.response.ok) {
    throw new Error(`HubSpot contact lookup by email failed: ${result.response.status}`);
  }

  return (await result.response.json()) as HubSpotContact;
}

export async function searchContactsByProperty(propertyName: string, value: string): Promise<HubSpotContact[]> {
  if (!value) return [];

  const result = await hubSpotFetch("/crm/v3/objects/contacts/search", {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName,
              operator: "EQ",
              value,
            },
          ],
        },
      ],
      properties: ["email", "firstname", "lastname", "company", "phone", "website", "industry", "lifecyclestage"],
      limit: 3,
    }),
  });

  if (!result.configured) return [];
  if (!result.response.ok) {
    throw new Error(`HubSpot contact search failed: ${result.response.status}`);
  }

  const data = (await result.response.json()) as { results?: HubSpotContact[] };
  return data.results ?? [];
}

export async function lookupContact({ email, phone, company }: { email?: string; phone?: string; company?: string }) {
  if (email) {
    const contact = await findContactByEmail(email);
    if (contact) return contact;
  }

  if (phone) {
    const [contact] = await searchContactsByProperty("phone", phone);
    if (contact) return contact;
  }

  if (company) {
    const [contact] = await searchContactsByProperty("company", company);
    if (contact) return contact;
  }

  return null;
}

export async function createOrUpdateContact(input: ContactInput) {
  const properties = contactProperties(input);
  if (!Object.keys(properties).length) {
    return { configured: Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN), contactId: undefined, skipped: "no_properties" };
  }

  if (input.email) {
    const updateResult = await hubSpotFetch(
      `/crm/v3/objects/contacts/${encodeURIComponent(input.email)}?idProperty=email`,
      {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      }
    );

    if (!updateResult.configured) return { configured: false, contactId: undefined };
    if (updateResult.response.ok) {
      const data = (await updateResult.response.json()) as HubSpotContact;
      return { configured: true, contactId: data.id };
    }
    if (updateResult.response.status !== 404) {
      throw new Error(`HubSpot contact update failed: ${updateResult.response.status}`);
    }
  }

  const createResult = await hubSpotFetch("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (!createResult.configured) return { configured: false, contactId: undefined };
  if (!createResult.response.ok && createResult.response.status !== 409) {
    throw new Error(`HubSpot contact creation failed: ${createResult.response.status}`);
  }

  if (createResult.response.status === 409 && input.email) {
    const contact = await findContactByEmail(input.email);
    return { configured: true, contactId: contact?.id };
  }

  const data = (await createResult.response.json()) as HubSpotContact;
  return { configured: true, contactId: data.id };
}

export async function createContactNote(args: { contactId?: string; body: string; timestamp?: string }) {
  if (!args.contactId) {
    return { configured: Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN), noteId: undefined, skipped: "no_contact_id" };
  }

  const trimmedBody = args.body.trim();
  if (!trimmedBody) {
    return { configured: Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN), noteId: undefined, skipped: "empty_note" };
  }

  const createResult = await hubSpotFetch("/crm/v3/objects/notes", {
    method: "POST",
    body: JSON.stringify({
      properties: {
        hs_note_body: trimmedBody.slice(0, 60000),
        hs_timestamp: args.timestamp ?? new Date().toISOString(),
      },
    }),
  });

  if (!createResult.configured) return { configured: false, noteId: undefined };
  if (!createResult.response.ok) {
    throw new Error(`HubSpot note creation failed: ${createResult.response.status}`);
  }

  const note = (await createResult.response.json()) as { id?: string };
  if (!note.id) return { configured: true, noteId: undefined, skipped: "missing_note_id" };

  const associationResult = await hubSpotFetch(
    `/crm/v4/objects/note/${encodeURIComponent(note.id)}/associations/default/contact/${encodeURIComponent(args.contactId)}`,
    { method: "PUT" }
  );

  if (!associationResult.configured) return { configured: false, noteId: note.id };
  if (!associationResult.response.ok) {
    throw new Error(`HubSpot note association failed: ${associationResult.response.status}`);
  }

  return { configured: true, noteId: note.id, associatedContactId: args.contactId };
}

export async function getMeetingAvailability(args: {
  slug: string;
  timezone: string;
  monthOffset?: number;
  durationMillis?: number;
  limit?: number;
}): Promise<{
  configured: boolean;
  slug: string;
  timezone: string;
  durationMillis?: number;
  availabilities: HubSpotMeetingAvailability[];
  hasMore?: boolean;
  skipped?: string;
  error?: string;
}> {
  if (!process.env.HUBSPOT_PRIVATE_APP_TOKEN) {
    return {
      configured: false,
      slug: args.slug,
      timezone: args.timezone,
      availabilities: [],
      skipped: "missing_hubspot_token",
    };
  }

  const query = new URLSearchParams({ timezone: args.timezone });
  if (args.monthOffset !== undefined) query.set("monthOffset", String(args.monthOffset));

  const result = await hubSpotSchedulerFetch(
    `/scheduler/v3/meetings/meeting-links/book/availability-page/${encodeURIComponent(args.slug)}?${query.toString()}`
  );

  if (!result.configured) {
    return {
      configured: false,
      slug: args.slug,
      timezone: args.timezone,
      availabilities: [],
      skipped: "missing_hubspot_token",
    };
  }

  if (!result.response.ok) {
    return {
      configured: true,
      slug: args.slug,
      timezone: args.timezone,
      availabilities: [],
      error: `HubSpot scheduler availability failed: ${result.response.status}`,
      skipped: typeof result.data.message === "string" ? result.data.message : "hubspot_scheduler_availability_failed",
    };
  }

  const linkAvailability = result.data.linkAvailability as JsonObject | undefined;
  const byDuration = (linkAvailability?.linkAvailabilityByDuration ?? {}) as Record<string, JsonObject>;
  const durationKeys = Object.keys(byDuration).sort((a, b) => Number(a) - Number(b));
  const preferredKey =
    args.durationMillis && byDuration[String(args.durationMillis)]
      ? String(args.durationMillis)
      : durationKeys.find((key) => Number(key) === 1800000) ?? durationKeys[0];

  const selected = preferredKey ? byDuration[preferredKey] : undefined;
  const durationMillis = Number((selected?.meetingDurationMillis as number | undefined) ?? preferredKey ?? args.durationMillis);
  const rawAvailabilities = Array.isArray(selected?.availabilities) ? (selected.availabilities as JsonObject[]) : [];
  const limit = Math.max(1, Math.min(args.limit ?? 5, 10));

  return {
    configured: true,
    slug: args.slug,
    timezone: args.timezone,
    durationMillis: Number.isFinite(durationMillis) ? durationMillis : undefined,
    hasMore: Boolean(linkAvailability?.hasMore),
    availabilities: rawAvailabilities
      .map((slot) => {
        const startMillisUtc = Number(slot.startMillisUtc);
        const endMillisUtc = Number(slot.endMillisUtc);
        return {
          startMillisUtc,
          endMillisUtc,
          startIso: new Date(startMillisUtc).toISOString(),
          endIso: new Date(endMillisUtc).toISOString(),
          durationMillis: Number.isFinite(durationMillis) ? durationMillis : endMillisUtc - startMillisUtc,
        };
      })
      .filter((slot) => Number.isFinite(slot.startMillisUtc) && Number.isFinite(slot.endMillisUtc))
      .slice(0, limit),
  };
}

export async function bookMeeting(args: {
  slug: string;
  timezone: string;
  startTimeMillis: number;
  durationMillis: number;
  name?: string;
  email: string;
  guestEmails?: string[];
}): Promise<HubSpotMeetingBookingResult> {
  if (!process.env.HUBSPOT_PRIVATE_APP_TOKEN) {
    return { configured: false, status: "not_configured", skipped: "missing_hubspot_token" };
  }

  const { firstname, lastname } = splitName(args.name || args.email.split("@")[0]);
  const result = await hubSpotSchedulerFetch(
    `/scheduler/v3/meetings/meeting-links/book?${new URLSearchParams({ timezone: args.timezone }).toString()}`,
    {
      method: "POST",
      body: JSON.stringify({
        slug: args.slug,
        firstName: firstname || args.email.split("@")[0],
        lastName: lastname || "",
        email: args.email,
        startTime: args.startTimeMillis,
        duration: args.durationMillis,
        guestEmails: args.guestEmails ?? [],
        timezone: args.timezone,
        locale: "en-us",
        likelyAvailableUserIds: [],
      }),
    }
  );

  if (!result.configured) return { configured: false, status: "not_configured", skipped: "missing_hubspot_token" };
  if (!result.response.ok) {
    const message = typeof result.data.message === "string" ? result.data.message : "hubspot_scheduler_booking_failed";
    return {
      configured: true,
      status: "failed",
      skipped: message,
      error: message,
      statusCode: result.response.status,
      hubspotResponse: result.data,
    };
  }

  return {
    configured: true,
    status: "created",
    booking: result.data,
  };
}

export async function createAssessmentDeal(args: {
  contactId?: string;
  name?: string;
  company?: string;
  workflowPain?: string;
  serviceInterest?: string;
  timeline?: string;
  budget?: string;
  sourcePage?: string;
  conversationId?: string;
  conversationSummary?: string;
}): Promise<HubSpotDealResult> {
  if (!process.env.HUBSPOT_PRIVATE_APP_TOKEN) return { configured: false, skipped: "missing_hubspot_token" };

  const config = optionalPipelineConfig("HUBSPOT_ASSESSMENT_DEAL_PIPELINE_ID", "HUBSPOT_ASSESSMENT_DEAL_STAGE_ID");
  if (!config.configured) return { configured: false, skipped: config.skipped };

  const dealName = [args.company || args.name || "Unknown prospect", "AI Workflow Assessment"].join(" - ");
  const amount = process.env.HUBSPOT_ASSESSMENT_DEAL_AMOUNT;
  const properties = compactObject({
    dealname: dealName,
    pipeline: config.pipelineId,
    dealstage: config.stageId,
    amount,
    description: [
      args.workflowPain ? `Workflow pain: ${args.workflowPain}` : "",
      args.serviceInterest ? `Service interest: ${args.serviceInterest}` : "",
      args.timeline ? `Timeline: ${args.timeline}` : "",
      args.budget ? `Budget: ${args.budget}` : "",
      args.sourcePage ? `Source page: ${args.sourcePage}` : "",
      args.conversationId ? `Conversation ID: ${args.conversationId}` : "",
      args.conversationSummary ? `Summary: ${args.conversationSummary}` : "",
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 4000),
  }) as Record<string, string>;

  const createResult = await hubSpotFetch("/crm/v3/objects/deals", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (!createResult.configured) return { configured: false, skipped: "missing_hubspot_token" };
  if (!createResult.response.ok) {
    throw new Error(`HubSpot assessment deal creation failed: ${createResult.response.status}`);
  }

  const deal = (await createResult.response.json()) as { id?: string };
  if (!deal.id) return { configured: true, skipped: "missing_deal_id" };

  const association = await associateHubSpotObject({
    fromObjectType: "deal",
    fromObjectId: deal.id,
    toObjectType: "contact",
    toObjectId: args.contactId,
  });

  return {
    configured: true,
    dealId: deal.id,
    associatedContactId: association.configured && !association.skipped ? args.contactId : undefined,
  };
}

function ticketPriority(value?: string) {
  if (value === "P0" || value === "urgent") return "HIGH";
  if (value === "P1" || value === "high") return "HIGH";
  if (value === "low" || value === "P3") return "LOW";
  return "MEDIUM";
}

export async function createSupportTicket(args: {
  contactId?: string;
  company?: string;
  issueSummary: string;
  severity?: string;
  affectedWorkflow?: string;
  customerImpact?: string;
  startedAt?: string;
  conversationId?: string;
  conversationSummary?: string;
}): Promise<HubSpotTicketResult> {
  if (!process.env.HUBSPOT_PRIVATE_APP_TOKEN) return { configured: false, skipped: "missing_hubspot_token" };

  const config = optionalPipelineConfig("HUBSPOT_SUPPORT_TICKET_PIPELINE_ID", "HUBSPOT_SUPPORT_TICKET_STAGE_ID");
  if (!config.configured) return { configured: false, skipped: config.skipped };

  const properties = compactObject({
    subject: `Ava support intake${args.company ? ` - ${args.company}` : ""}`,
    content: [
      args.issueSummary,
      args.affectedWorkflow ? `Affected workflow: ${args.affectedWorkflow}` : "",
      args.customerImpact ? `Customer impact: ${args.customerImpact}` : "",
      args.startedAt ? `Started at: ${args.startedAt}` : "",
      args.conversationId ? `Conversation ID: ${args.conversationId}` : "",
      args.conversationSummary ? `Summary: ${args.conversationSummary}` : "",
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 4000),
    hs_pipeline: config.pipelineId,
    hs_pipeline_stage: config.stageId,
    hs_ticket_priority: ticketPriority(args.severity),
  }) as Record<string, string>;

  const createResult = await hubSpotFetch("/crm/v3/objects/tickets", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (!createResult.configured) return { configured: false, skipped: "missing_hubspot_token" };
  if (!createResult.response.ok) {
    throw new Error(`HubSpot support ticket creation failed: ${createResult.response.status}`);
  }

  const ticket = (await createResult.response.json()) as { id?: string };
  if (!ticket.id) return { configured: true, skipped: "missing_ticket_id" };

  const association = await associateHubSpotObject({
    fromObjectType: "ticket",
    fromObjectId: ticket.id,
    toObjectType: "contact",
    toObjectId: args.contactId,
  });

  return {
    configured: true,
    ticketId: ticket.id,
    associatedContactId: association.configured && !association.skipped ? args.contactId : undefined,
  };
}

export async function createClientSuccessTicket(args: {
  contactId?: string;
  company?: string;
  requestedChange: string;
  currentWorkflow?: string;
  businessReason?: string;
  urgency?: string;
  scopeOrPricingRisk?: boolean;
  conversationId?: string;
  conversationSummary?: string;
}): Promise<HubSpotTicketResult> {
  if (!process.env.HUBSPOT_PRIVATE_APP_TOKEN) return { configured: false, skipped: "missing_hubspot_token" };

  const pipelineId =
    process.env.HUBSPOT_CLIENT_SUCCESS_TICKET_PIPELINE_ID ?? process.env.HUBSPOT_SUPPORT_TICKET_PIPELINE_ID;
  const stageId = process.env.HUBSPOT_CLIENT_SUCCESS_TICKET_STAGE_ID ?? process.env.HUBSPOT_SUPPORT_TICKET_STAGE_ID;

  if (!pipelineId || !stageId) {
    return {
      configured: false,
      skipped:
        "HUBSPOT_CLIENT_SUCCESS_TICKET_PIPELINE_ID/HUBSPOT_CLIENT_SUCCESS_TICKET_STAGE_ID or support ticket pipeline env vars are required",
    };
  }

  const properties = compactObject({
    subject: `Ava client success request${args.company ? ` - ${args.company}` : ""}`,
    content: [
      args.requestedChange,
      args.currentWorkflow ? `Current workflow: ${args.currentWorkflow}` : "",
      args.businessReason ? `Business reason: ${args.businessReason}` : "",
      args.urgency ? `Urgency: ${args.urgency}` : "",
      args.scopeOrPricingRisk ? "Scope or pricing risk: yes" : "",
      args.conversationId ? `Conversation ID: ${args.conversationId}` : "",
      args.conversationSummary ? `Summary: ${args.conversationSummary}` : "",
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 4000),
    hs_pipeline: pipelineId,
    hs_pipeline_stage: stageId,
    hs_ticket_priority: args.scopeOrPricingRisk ? "HIGH" : ticketPriority(args.urgency),
  }) as Record<string, string>;

  const createResult = await hubSpotFetch("/crm/v3/objects/tickets", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (!createResult.configured) return { configured: false, skipped: "missing_hubspot_token" };
  if (!createResult.response.ok) {
    throw new Error(`HubSpot client success ticket creation failed: ${createResult.response.status}`);
  }

  const ticket = (await createResult.response.json()) as { id?: string };
  if (!ticket.id) return { configured: true, skipped: "missing_ticket_id" };

  const association = await associateHubSpotObject({
    fromObjectType: "ticket",
    fromObjectId: ticket.id,
    toObjectType: "contact",
    toObjectId: args.contactId,
  });

  return {
    configured: true,
    ticketId: ticket.id,
    associatedContactId: association.configured && !association.skipped ? args.contactId : undefined,
  };
}

export function contactDisplayName(contact: HubSpotContact | null) {
  const properties = contact?.properties ?? {};
  const name = [properties.firstname, properties.lastname].filter(Boolean).join(" ").trim();
  return name || properties.email || properties.company || "";
}

export function safeContactProperties(contact: HubSpotContact | null): JsonObject {
  if (!contact) return {};
  const properties = contact.properties ?? {};
  return {
    email: properties.email ?? "",
    name: contactDisplayName(contact),
    company: properties.company ?? "",
    phone: properties.phone ?? "",
    website: properties.website ?? "",
    industry: properties.industry ?? "",
    lifecyclestage: properties.lifecyclestage ?? "",
  };
}
