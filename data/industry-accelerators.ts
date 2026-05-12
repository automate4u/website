export type IndustryAcceleratorSlug =
  | "home-services"
  | "education-childcare"
  | "manufacturing"
  | "retail-ecommerce"
  | "professional-services"
  | "healthcare"
  | "real-estate"
  | "financial-services"
  | "hospitality"
  | "technology-media";

export interface IndustryAcceleratorSummary {
  slug: IndustryAcceleratorSlug;
  href: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKpi: string;
  commonWorkflows: string[];
}

export const industryAccelerators: IndustryAcceleratorSummary[] = [
  {
    slug: "home-services",
    href: "/industries/home-services",
    title: "Home Services Dispatch Engine",
    metaTitle: "AI Automation for Home Services and HVAC | Automate4U",
    metaDescription:
      "AI voice, dispatch, booking, follow-up, and CRM workflows for home service and HVAC businesses.",
    primaryKpi: "Missed calls recovered and booked jobs increased",
    commonWorkflows: ["Missed-call recovery", "Booking", "Dispatch notification", "Quote follow-up"],
  },
  {
    slug: "education-childcare",
    href: "/industries/education-childcare",
    title: "Education & Childcare Operations",
    metaTitle: "AI Automation for Education and Childcare | Automate4U",
    metaDescription:
      "AI voice and workflow automation for childcare, daycare, prep school, and education teams managing parent communication and admin work.",
    primaryKpi: "Admin interruptions reduced",
    commonWorkflows: ["Parent calls", "Enrollment inquiries", "Tour scheduling", "Staff handoff"],
  },
  {
    slug: "manufacturing",
    href: "/industries/manufacturing",
    title: "Manufacturing Customer Response Accelerator",
    metaTitle: "AI Agents for Manufacturing Customer Response | Automate4U",
    metaDescription:
      "AI chat and email agents for parts availability, quoting, order status, timelines, and sales handoff.",
    primaryKpi: "Quote response time reduced",
    commonWorkflows: ["Parts availability", "Quote triage", "Order status", "Sales handoff"],
  },
  {
    slug: "retail-ecommerce",
    href: "/industries/retail-ecommerce",
    title: "Retail AI Support Accelerator",
    metaTitle: "AI Support Automation for Retail Ecommerce | Automate4U",
    metaDescription:
      "AI support workflows for ecommerce product questions, order status, returns, marketing content, and escalations.",
    primaryKpi: "Cost per request lowered",
    commonWorkflows: ["Product questions", "Order status", "Returns triage", "Support escalation"],
  },
  {
    slug: "professional-services",
    href: "/industries/professional-services",
    title: "Professional Services Intake Engine",
    metaTitle: "AI Intake Automation for Professional Services | Automate4U",
    metaDescription:
      "AI intake, scheduling, document collection, reminders, and follow-up workflows for professional services teams.",
    primaryKpi: "Intake cycle time reduced",
    commonWorkflows: ["Intake", "Scheduling", "Document checklist", "Follow-up"],
  },
  {
    slug: "healthcare",
    href: "/industries/healthcare",
    title: "Healthcare Front Desk Automation Accelerator",
    metaTitle: "AI Front Desk Automation for Clinics | Automate4U",
    metaDescription:
      "AI front desk workflows for appointment requests, patient questions, reminders, routing, and human handoff.",
    primaryKpi: "Front desk interruptions reduced",
    commonWorkflows: ["Appointment requests", "Reminder calls", "Routing", "Human handoff"],
  },
  {
    slug: "real-estate",
    href: "/industries/real-estate",
    title: "Real Estate Lead Response Engine",
    metaTitle: "AI Lead Response for Real Estate | Automate4U",
    metaDescription:
      "AI voice, chat, and follow-up workflows for real estate lead response, qualification, booking, and CRM updates.",
    primaryKpi: "Speed to lead improved",
    commonWorkflows: ["Lead qualification", "Showing booking", "CRM update", "Follow-up"],
  },
  {
    slug: "financial-services",
    href: "/industries/financial-services",
    title: "Financial Services Operations",
    metaTitle: "AI Intake Automation for Financial Services | Automate4U",
    metaDescription:
      "AI-assisted intake, document workflows, support routing, human review, and traceable escalation for financial service teams.",
    primaryKpi: "Intake and support cycle time reduced",
    commonWorkflows: ["Client intake", "Document follow-up", "Support routing", "Advisor handoff"],
  },
  {
    slug: "hospitality",
    href: "/industries/hospitality",
    title: "Hospitality Guest Response",
    metaTitle: "AI Guest Response Automation for Hospitality | Automate4U",
    metaDescription:
      "AI voice, chat, booking support, guest response, request routing, review workflows, and operations automation for hospitality teams.",
    primaryKpi: "Guest response speed improved",
    commonWorkflows: ["Booking questions", "Guest requests", "Review follow-up", "Staff routing"],
  },
  {
    slug: "technology-media",
    href: "/industries/technology-media",
    title: "Technology & Media Operations",
    metaTitle: "AI Workflow Automation for Technology and Media | Automate4U",
    metaDescription:
      "AI workflow automation for support triage, content operations, customer response, reporting, and internal routing for technology and media teams.",
    primaryKpi: "Content and support backlog reduced",
    commonWorkflows: ["Support triage", "Content workflow", "Customer updates", "Reporting"],
  },
];
