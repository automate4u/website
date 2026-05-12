export type CapabilityPillar = {
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  proofPoints: string[];
  priority: "featured" | "core";
};

export const howWeBuildPillars: CapabilityPillar[] = [
  {
    title: "Security, Monitoring & AI Safety",
    shortTitle: "Security & Safety",
    href: "/capabilities/security-monitoring-ai-safety",
    description:
      "Guardrails, human review, audit trails, monitoring, escalation, and sensitive-data boundaries for AI systems that touch real operations.",
    proofPoints: [
      "Human-in-the-loop approval rules",
      "Audit logs and escalation paths",
      "Sensitive workflow boundaries",
    ],
    priority: "featured",
  },
  {
    title: "Data & Integrations",
    shortTitle: "Data & Integrations",
    href: "/capabilities/data-integrations-infrastructure",
    description:
      "Connect AI to the tools that run the business: CRM, calendars, email, documents, databases, helpdesks, ecommerce, ERP, and reporting systems.",
    proofPoints: [
      "System-of-record discipline",
      "Retry and failure handling",
      "Integration maps and data flows",
    ],
    priority: "core",
  },
  {
    title: "Operational Intelligence & Value Realization",
    shortTitle: "Operational Intelligence",
    href: "/capabilities/operational-intelligence-analytics",
    description:
      "KPI tracking, dashboards, value reviews, and reporting that connect automation work to cycle time, response time, cost, and conversion outcomes.",
    proofPoints: [
      "30/60/90-day value review",
      "KPI dashboards",
      "Cost and workload reporting",
    ],
    priority: "core",
  },
  {
    title: "Workflow & Systems Architecture",
    shortTitle: "Workflow Architecture",
    href: "/capabilities/custom-software-ai-solutions",
    description:
      "Workflow design, system boundaries, internal tools, data movement, handoffs, and architecture decisions for AI systems that need more than a simple automation recipe.",
    proofPoints: [
      "Workflow maps",
      "System boundaries",
      "Handoff architecture",
    ],
    priority: "core",
  },
  {
    title: "Staff Training & Adoption",
    shortTitle: "Training & Adoption",
    href: "/capabilities/training-prompting-ai-mastery",
    description:
      "Training, SOP updates, escalation practice, and role-specific adoption support so teams understand when to trust the AI and when to step in.",
    proofPoints: [
      "Staff enablement",
      "Escalation playbooks",
      "Adoption support",
    ],
    priority: "core",
  },
  {
    title: "Technology Strategy & Enablement",
    shortTitle: "Strategy & Enablement",
    href: "/capabilities/technology-strategy-ai-enablement",
    description:
      "Opportunity assessment, AI maturity planning, build-versus-buy guidance, governance planning, and implementation sequencing.",
    proofPoints: [
      "AI maturity assessment",
      "Roadmap and prioritization",
      "Governance planning",
    ],
    priority: "core",
  },
];
