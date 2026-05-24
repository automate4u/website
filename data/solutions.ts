export type SolutionSlug =
  | "daycare-voice-agent"
  | "manufacturing-quote-order-agent"
  | "healthcare-front-desk-agent"
  | "home-services-missed-call-dispatch-agent";

export interface SolutionSummary {
  slug: SolutionSlug;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryCtaLabel: string;
  relatedIndustryHref?: string;
  relatedServiceHref?: string;
}

export const solutions: SolutionSummary[] = [
  {
    slug: "daycare-voice-agent",
    href: "/solutions/daycare-voice-agent",
    title: "Daycare Voice Agent",
    metaTitle: "Daycare Voice Agent for Front Desk Teams | Automate4U",
    metaDescription:
      "AI voice assistant for daycare enrollment inquiries, parent call routing, tour requests, absence reporting, and multi-location communication workflows.",
    primaryCtaLabel: "Schedule a Walkthrough",
    relatedIndustryHref: "/industries/education-childcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "manufacturing-quote-order-agent",
    href: "/solutions/manufacturing-quote-order-agent",
    title: "Manufacturing Quote & Order Response Agent",
    metaTitle: "Manufacturing Quote and Order Response Agent | Automate4U",
    metaDescription:
      "AI workflow for RFQ intake, parts availability, quote follow-up, order questions, ERP/CRM handoff, and human pricing review.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/manufacturing",
    relatedServiceHref: "/services/ai-agents",
  },
  {
    slug: "healthcare-front-desk-agent",
    href: "/solutions/healthcare-front-desk-agent",
    title: "Healthcare Front Desk Agent",
    metaTitle: "Healthcare Front Desk Agent for Clinic Admin Workflows | Automate4U",
    metaDescription:
      "AI workflow for healthcare and wellness clinic appointment requests, reminders, forms, administrative questions, staff handoff, and conservative escalation.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/healthcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "home-services-missed-call-dispatch-agent",
    href: "/solutions/home-services-missed-call-dispatch-agent",
    title: "Home Services Missed-Call & Dispatch Agent",
    metaTitle: "Home Services Missed-Call and Dispatch Agent | Automate4U",
    metaDescription:
      "AI workflow for missed-call recovery, after-hours intake, booking handoff, dispatch notes, estimate follow-up, and staff escalation for home service teams.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/home-services",
    relatedServiceHref: "/services/ai-voice",
  },
];
