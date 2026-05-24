export type IndustryAcceleratorSlug =
  | "home-services"
  | "education-childcare"
  | "manufacturing"
  | "professional-services"
  | "healthcare"
  | "hospitality";

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
    metaTitle: "AI Automation for Home Services, HVAC, and Property Maintenance | Automate4U",
    metaDescription:
      "AI voice, dispatch, booking, estimate follow-up, property maintenance intake, and CRM workflows for high-value home service businesses.",
    primaryKpi: "Missed calls recovered and booked jobs increased",
    commonWorkflows: ["Missed-call recovery", "Booking", "Dispatch notification", "Estimate follow-up"],
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
    title: "Healthcare & Wellness Clinic Operations",
    metaTitle: "AI Front Desk Automation for Healthcare and Wellness Clinics | Automate4U",
    metaDescription:
      "AI front desk workflows for clinics, dental teams, wellness practices, appointment requests, reminders, routing, and human handoff.",
    primaryKpi: "Front desk interruptions reduced",
    commonWorkflows: ["Appointment requests", "Reminder calls", "Routing", "Human handoff"],
  },
  {
    slug: "hospitality",
    href: "/industries/hospitality",
    title: "Guest Services & Hospitality",
    metaTitle: "AI Guest Response Automation for Hospitality | Automate4U",
    metaDescription:
      "AI voice, chat, booking support, guest response, request routing, review workflows, and operations automation for hospitality and guest-service teams.",
    primaryKpi: "Guest response speed improved",
    commonWorkflows: ["Booking questions", "Guest requests", "Review follow-up", "Staff routing"],
  },
];

export const coreIndustryAcceleratorSlugs: IndustryAcceleratorSlug[] = [
  "home-services",
  "education-childcare",
  "manufacturing",
  "professional-services",
  "healthcare",
  "hospitality",
];

export const coreIndustryAccelerators = industryAccelerators.filter((industry) =>
  coreIndustryAcceleratorSlugs.includes(industry.slug),
);
