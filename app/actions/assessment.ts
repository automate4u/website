"use server";

const notificationRecipients = [
  "johnny@automate4u.co",
  "michael@automate4u.co",
  "hello@automate4u.co",
];
const assessmentMeetingUrl =
  process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ?? "https://meetings-na3.hubspot.com/jzhang";

const requiredAssessmentFields = [
  ["email", "Work email"],
  ["company", "Company"],
  ["industry", "Industry"],
  ["workflowPain", "Biggest workflow pain"],
  ["tools", "Tools currently used"],
  ["timeline", "Timeline"],
  ["budget", "Budget range"],
] as const;

export type AssessmentLeadState = {
  ok: boolean;
  message: string;
};

function getField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function formDataToObject(formData: FormData): Record<string, string> {
  const data: Record<string, string> = {};

  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      data[key] = value.trim();
    }
  }

  return data;
}

function present(value: string | undefined): string {
  return value && value.trim() ? value.trim() : "Not provided";
}

function notificationLine(label: string, value: string | undefined): string {
  return `${label}: ${present(value)}`;
}

function isInternalTestSubmission(data: Record<string, string>): boolean {
  const email = data.email?.toLowerCase();
  const emailDomain = email?.split("@").at(1);
  const reservedTestDomains = new Set(["example.com", "example.org", "example.net", "example.invalid"]);

  return (
    Boolean(emailDomain && reservedTestDomains.has(emailDomain)) ||
    email === "test@example.com" ||
    email === "voice-test@example.com" ||
    data.utmSource === "e2e" ||
    data.utmMedium === "test" ||
    data.utmCampaign === "conversion_path"
  );
}

async function submitToHubSpot(data: Record<string, string>) {
  if (process.env.A4U_E2E_TEST_MODE === "1") return;
  if (isInternalTestSubmission(data)) return;

  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token || !data.email) return;

  const properties = {
    email: data.email,
    firstname: data.name,
    company: data.company,
    website: data.website,
    industry: data.industry,
  };

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const updateResponse = await fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
    {
      method: "PATCH",
      headers,
      body: JSON.stringify({ properties }),
    }
  );

  if (updateResponse.ok) return;
  if (updateResponse.status !== 404) {
    throw new Error("HubSpot contact update failed.");
  }

  const createResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({ properties }),
  });

  if (!createResponse.ok && createResponse.status !== 409) {
    throw new Error("HubSpot contact creation failed.");
  }
}

async function sendNotification(data: Record<string, string>) {
  if (process.env.A4U_E2E_TEST_MODE === "1") return;
  if (isInternalTestSubmission(data)) return;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "hello@automate4u.co";
  if (!apiKey) return;

  const subject = `New AI workflow assessment request from ${data.company || data.email || "website"}`;
  const body = [
    notificationLine("Name", data.name),
    notificationLine("Email", data.email),
    notificationLine("Company", data.company),
    notificationLine("Website", data.website),
    notificationLine("Industry", data.industry),
    notificationLine("Workflow pain", data.workflowPain || data.goals),
    notificationLine("Tools", data.tools),
    notificationLine("Team size", data.team_size),
    notificationLine("Current channels", data.channels),
    notificationLine("Use case", data.use_case),
    notificationLine("Objective", data.objective),
    notificationLine("Sensitivity", data.sensitivity),
    notificationLine("Budget", data.budget),
    notificationLine("Volume", data.volume),
    notificationLine("Timeline", data.timeline),
    notificationLine("Service interest", data.serviceInterest),
    notificationLine("Accelerator interest", data.acceleratorInterest),
    notificationLine("Workflow interest", data.workflowInterest),
    notificationLine("Source page", data.sourcePage),
    notificationLine("CTA location", data.ctaLocation),
    notificationLine("Landing page", data.landingPage),
    notificationLine("Referrer", data.referrer),
    notificationLine("UTM source", data.utmSource),
    notificationLine("UTM medium", data.utmMedium),
    notificationLine("UTM campaign", data.utmCampaign),
    notificationLine("UTM term", data.utmTerm),
    notificationLine("UTM content", data.utmContent),
    notificationLine("HubSpot assessment meeting link", assessmentMeetingUrl),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: notificationRecipients,
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Assessment notification email failed: ${response.status} ${errorText}`);
  }
}

export async function submitAssessmentLead(formData: FormData) {
  const data = formDataToObject(formData);

  const missingFields = requiredAssessmentFields.filter(([field]) => !getField(formData, field));
  if (missingFields.length > 0) {
    throw new Error(`${missingFields.map(([, label]) => label).join(", ")} required.`);
  }

  if (
    process.env.NODE_ENV === "production" &&
    process.env.A4U_E2E_TEST_MODE !== "1" &&
    !process.env.HUBSPOT_PRIVATE_APP_TOKEN &&
    !process.env.RESEND_API_KEY
  ) {
    throw new Error("No assessment lead destination is configured.");
  }

  const destinations = [
    {
      name: "HubSpot",
      configured: Boolean(process.env.HUBSPOT_PRIVATE_APP_TOKEN),
      promise: submitToHubSpot(data),
    },
    {
      name: "Resend",
      configured: Boolean(process.env.RESEND_API_KEY),
      promise: sendNotification(data),
    },
  ];

  const results = await Promise.allSettled(destinations.map((destination) => destination.promise));
  const configuredResults = results.filter((_, index) => destinations[index].configured);
  const failedConfigured = configuredResults.filter((result) => result.status === "rejected");

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`${destinations[index].name} assessment routing failed:`, result.reason);
    }
  });

  if (configuredResults.length > 0 && failedConfigured.length === configuredResults.length) {
    throw new Error("Assessment submission failed.");
  }
}

export async function submitAssessmentLeadWithState(
  _previousState: AssessmentLeadState,
  formData: FormData
): Promise<AssessmentLeadState> {
  try {
    await submitAssessmentLead(formData);
    return {
      ok: true,
      message: "Assessment request received. We will review your workflow and follow up with next steps.",
    };
  } catch {
    return {
      ok: false,
      message: "Please complete the required fields and try again, or email hello@automate4u.co.",
    };
  }
}
