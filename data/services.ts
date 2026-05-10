export type ServiceSlug =
  | "ai-voice"
  | "ai-agents"
  | "ai-chat"
  | "ai-transformation";

export interface ServiceSummary {
  slug: ServiceSlug;
  href: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  positioning: "flagship" | "core" | "supporting";
  primaryCtaLabel: string;
}

export const services: ServiceSummary[] = [
  {
    slug: "ai-voice",
    href: "/core-services/ai-voice",
    title: "AI Voice Agents",
    shortTitle: "AI Voice",
    metaTitle: "AI Voice Agents for Business Operations | Automate4U",
    metaDescription:
      "AI voice agents that answer calls, qualify requests, book appointments, update systems, and hand off to humans when needed.",
    positioning: "flagship",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "ai-agents",
    href: "/core-services/ai-agents",
    title: "AI Agents",
    shortTitle: "AI Agents",
    metaTitle: "AI Agents for Sales, Support, and Operations | Automate4U",
    metaDescription:
      "AI agents for chat, email, CRM updates, operations, reporting, support triage, and business workflow automation.",
    positioning: "core",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "ai-chat",
    href: "/core-services/ai-chat",
    title: "AI Chatbots",
    shortTitle: "AI Chat",
    metaTitle: "AI Chatbots Connected to Business Workflows | Automate4U",
    metaDescription:
      "AI chatbots that answer questions, qualify leads, route support requests, and connect to CRM, helpdesk, and workflow systems.",
    positioning: "core",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "ai-transformation",
    href: "/core-services/ai-transformation",
    title: "AI Workflow Automation",
    shortTitle: "AI Automation",
    metaTitle: "AI Workflow Automation and Strategy | Automate4U",
    metaDescription:
      "Workflow automation planning and implementation for teams that want to reduce manual work, connect systems, and measure AI value.",
    positioning: "core",
    primaryCtaLabel: "Get Free Assessment",
  },
];
