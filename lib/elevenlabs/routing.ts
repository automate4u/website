import type { ContactType, HubSpotContact, IntentRoute, Priority, RoutingContext, SpecialistAgent } from "./types";

function inferContactType(contact: HubSpotContact | null): ContactType {
  const lifecycleStage = contact?.properties?.lifecyclestage?.toLowerCase() ?? "";

  if (["customer", "evangelist"].includes(lifecycleStage)) return "client";
  if (["lead", "marketingqualifiedlead", "salesqualifiedlead", "opportunity"].includes(lifecycleStage)) {
    return "prospect";
  }

  return contact ? "prospect" : "unknown";
}

export function inferRoutingContext(args: {
  contact: HubSpotContact | null;
  callerIntent?: string;
  entryMode?: string;
  company?: string;
}): RoutingContext {
  const intent = args.callerIntent?.toLowerCase() ?? "";
  const contactType = inferContactType(args.contact);

  let intentRoute: IntentRoute = "unknown_sensitive";
  let specialist: SpecialistAgent = "none";
  let priority: Priority = "normal";
  let nextBestAction = "Ask a clarifying question, then route to the safest next step.";

  if (intent.includes("return") || intent.includes("follow") || intent.includes("email") || intent.includes("called")) {
    intentRoute = "sales_follow_up";
    specialist = "sales_outreach";
    nextBestAction = "Confirm prior context, continue qualification, and offer the HubSpot Meetings link.";
  } else if (
    intent.includes("partner") ||
    intent.includes("partnership") ||
    intent.includes("refer") ||
    intent.includes("referral") ||
    intent.includes("bring you clients") ||
    intent.includes("bring clients") ||
    intent.includes("agency partner")
  ) {
    intentRoute = "partner_referral";
    specialist = "none";
    nextBestAction = "Answer service questions, capture referral fit, and log partner intake if they want follow-up.";
  } else if (intent.includes("support") || intent.includes("broken") || intent.includes("not working") || intent.includes("outage")) {
    intentRoute = "existing_client_support";
    specialist = "support";
    priority = intent.includes("outage") || intent.includes("urgent") ? "urgent" : "high";
    nextBestAction = "Capture affected workflow, severity, customer impact, and notify the team.";
  } else if (intent.includes("invoice") || intent.includes("billing") || intent.includes("refund")) {
    intentRoute = "billing";
    specialist = "billing_admin";
    priority = "high";
    nextBestAction = "Collect billing context and route to a human owner without making commitments.";
  } else if (
    intent.includes("contract") ||
    intent.includes("hipaa") ||
    intent.includes("soc 2") ||
    intent.includes("gdpr") ||
    intent.includes("legal") ||
    intent.includes("baa")
  ) {
    intentRoute = "legal_compliance";
    specialist = "human";
    priority = "high";
    nextBestAction = "Collect a short summary and route to the Automate4U team.";
  } else if (intent.includes("change") || intent.includes("add") || intent.includes("expand") || intent.includes("usage")) {
    intentRoute = contactType === "client" ? "client_success" : "new_sales_assessment";
    specialist = contactType === "client" ? "client_success" : "sales_assessment";
    nextBestAction =
      contactType === "client"
        ? "Capture requested change, business reason, urgency, and scope risk."
        : "Qualify the workflow and offer a Free AI Workflow Assessment.";
  } else if (intent.includes("demo") || args.entryMode === "website_demo") {
    intentRoute = "website_demo";
    specialist = "sales_assessment";
    nextBestAction = "Show downstream workflow actions and offer to capture an assessment request.";
  } else if (intent || contactType === "prospect") {
    intentRoute = "new_sales_assessment";
    specialist = "sales_assessment";
    nextBestAction = "Collect workflow pain, tools, timeline, budget, and offer the HubSpot Meetings link.";
  }

  return {
    known_contact: Boolean(args.contact),
    contact_type: contactType,
    hubspot_contact_id: args.contact?.id,
    intent_route: intentRoute,
    recommended_specialist_agent: specialist,
    priority,
    summary: args.contact
      ? `Known ${contactType} matched in HubSpot${args.company ? ` for ${args.company}` : ""}.`
      : "No matching HubSpot contact found.",
    next_best_action: nextBestAction,
  };
}
