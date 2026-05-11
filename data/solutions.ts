export type SolutionSlug = "daycare-voice-agent";

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
    relatedServiceHref: "/core-services/ai-voice",
  },
];
