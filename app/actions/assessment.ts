"use server";

const notificationRecipients = [
  "johnny@automate4u.ca",
  "michael@automate4u.ca",
  "hello@automate4u.ca",
];

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

async function submitToHubSpot(data: Record<string, string>) {
  if (process.env.A4U_E2E_TEST_MODE === "1") return;

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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "hello@automate4u.ca";
  if (!apiKey) return;

  const subject = `New AI workflow assessment request from ${data.company || data.email || "website"}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Website: ${data.website}`,
    `Industry: ${data.industry}`,
    `Workflow pain: ${data.workflowPain || data.goals}`,
    `Tools: ${data.tools}`,
    `Team size: ${data.team_size}`,
    `Current channels: ${data.channels}`,
    `Use case: ${data.use_case}`,
    `Objective: ${data.objective}`,
    `Sensitivity: ${data.sensitivity}`,
    `Budget: ${data.budget}`,
    `Volume: ${data.volume}`,
    `Timeline: ${data.timeline}`,
    `Service interest: ${data.serviceInterest}`,
    `Accelerator interest: ${data.acceleratorInterest}`,
    `Workflow interest: ${data.workflowInterest}`,
    `Source page: ${data.sourcePage}`,
    `CTA location: ${data.ctaLocation}`,
    `Landing page: ${data.landingPage}`,
    `Referrer: ${data.referrer}`,
    `UTM source: ${data.utmSource}`,
    `UTM medium: ${data.utmMedium}`,
    `UTM campaign: ${data.utmCampaign}`,
    `UTM term: ${data.utmTerm}`,
    `UTM content: ${data.utmContent}`,
  ].join("\n");

  await fetch("https://api.resend.com/emails", {
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
}

export async function submitAssessmentLead(formData: FormData) {
  const data = formDataToObject(formData);

  if (!getField(formData, "email")) {
    throw new Error("Email is required.");
  }

  const results = await Promise.allSettled([
    submitToHubSpot(data),
    sendNotification(data),
  ]);

  const failed = results.filter((result) => result.status === "rejected");
  if (failed.length === results.length) {
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
      message: "Something went wrong. Please try again or email hello@automate4u.ca.",
    };
  }
}
