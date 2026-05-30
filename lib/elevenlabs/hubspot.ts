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
