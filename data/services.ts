export type ServiceSlug =
  | "ai-voice"
  | "ai-agents"
  | "ai-chat"
  | "ai-transformation"
  | "marketing-automation"
  | "managed-ai-operations"
  | "custom-ai-software";

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
    title: "AI Operations Strategy",
    shortTitle: "AI Strategy",
    metaTitle: "AI Workflow Automation and Strategy | Automate4U",
    metaDescription:
      "Workflow automation planning and implementation for teams that want to reduce manual work, connect systems, and measure AI value.",
    positioning: "core",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "marketing-automation",
    href: "/core-services/marketing-automation",
    title: "Marketing Automation and Content Agents",
    shortTitle: "Marketing Automation",
    metaTitle: "Marketing Automation and Content Agents | Automate4U",
    metaDescription:
      "AI marketing automation for content production, approvals, scheduling, campaign workflows, CRM follow-up, reporting, and content operations.",
    positioning: "supporting",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "managed-ai-operations",
    href: "/core-services/managed-ai-operations",
    title: "Managed AI Operations",
    shortTitle: "Managed AI Ops",
    metaTitle: "Managed AI Operations | Automate4U",
    metaDescription:
      "Managed AI operations for monitoring, prompt and workflow tuning, governance reviews, integration health, KPI reporting, and continuous improvement.",
    positioning: "supporting",
    primaryCtaLabel: "Get Free Assessment",
  },
  {
    slug: "custom-ai-software",
    href: "/core-services/custom-ai-software",
    title: "Custom AI Software",
    shortTitle: "Custom AI Software",
    metaTitle: "Custom AI Software for Business Workflows | Automate4U",
    metaDescription:
      "Purpose-built AI tools, portals, dashboards, internal systems, and workflow software for teams that need more than off-the-shelf automation.",
    positioning: "supporting",
    primaryCtaLabel: "Get Free Assessment",
  },
];
