export type ServiceOffer = {
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  status: "primary" | "active" | "planned-route";
};

export const serviceOffers: ServiceOffer[] = [
  {
    title: "AI Voice Agents",
    shortTitle: "AI Voice",
    href: "/core-services/ai-voice",
    description:
      "Voice agents that answer calls, capture intent, trigger follow-up, update systems, and hand off sensitive work to people.",
    status: "primary",
  },
  {
    title: "AI Agents & Workflow Automation",
    shortTitle: "AI Agents",
    href: "/core-services/ai-agents",
    description:
      "Agents for inboxes, CRM updates, operations, support triage, quoting, reporting, and repeatable admin workflows.",
    status: "active",
  },
  {
    title: "AI Chat & Customer Messaging",
    shortTitle: "AI Chat",
    href: "/core-services/ai-chat",
    description:
      "Chat and messaging systems that answer approved questions, qualify demand, route support, and create downstream actions.",
    status: "active",
  },
  {
    title: "AI Operations Strategy",
    shortTitle: "AI Strategy",
    href: "/core-services/ai-transformation",
    description:
      "Workflow assessment, automation roadmap, pilot planning, governance, and value realization for AI operations.",
    status: "active",
  },
  {
    title: "Marketing Automation & Content Agents",
    shortTitle: "Marketing Automation",
    href: "/core-services/marketing-automation",
    description:
      "Content, approval, campaign, CRM, lead nurturing, follow-up, and reporting workflows for teams that need more output with control.",
    status: "active",
  },
  {
    title: "Managed AI Operations",
    shortTitle: "Managed AI Ops",
    href: "/core-services/managed-ai-operations",
    description:
      "Ongoing monitoring, tuning, issue response, KPI reporting, governance reviews, and continuous improvement for deployed AI systems.",
    status: "active",
  },
  {
    title: "Custom AI Software",
    shortTitle: "Custom AI Software",
    href: "/core-services/custom-ai-software",
    description:
      "Purpose-built AI tools, portals, dashboards, internal systems, and workflow software when off-the-shelf tools do not fit.",
    status: "active",
  },
];
