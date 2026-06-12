export type SolutionSlug =
  | "daycare-voice-agent"
  | "manufacturing-quote-order-agent"
  | "healthcare-front-desk-agent"
  | "home-services-missed-call-dispatch-agent"
  | "law-firm-intake-agent"
  | "accounting-firm-intake-agent"
  | "wealth-management-intake-agent"
  | "hvac-service-call-agent"
  | "plumbing-service-call-agent"
  | "electrical-service-call-agent"
  | "chiropractic-pt-front-desk-agent"
  | "med-spa-front-desk-agent"
  | "mental-health-counseling-intake-agent"
  | "montessori-preschool-voice-agent"
  | "tutoring-learning-center-agent"
  | "wholesale-distribution-order-agent"
  | "industrial-supplier-order-agent";

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
  {
    slug: "law-firm-intake-agent",
    href: "/solutions/law-firm-intake-agent",
    title: "Law Firm Intake Agent",
    metaTitle: "Law Firm Intake Agent for New Client Calls | Automate4U",
    metaDescription:
      "AI voice workflow for law firm intake calls, conflict-check capture, consultation scheduling, document follow-up, and attorney routing.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/professional-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "accounting-firm-intake-agent",
    href: "/solutions/accounting-firm-intake-agent",
    title: "Accounting Firm Intake Agent",
    metaTitle: "Accounting Firm Intake Agent for Client Calls | Automate4U",
    metaDescription:
      "AI voice workflow for accounting and tax firm intake calls, document checklist capture, appointment scheduling, and accountant routing.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/professional-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "wealth-management-intake-agent",
    href: "/solutions/wealth-management-intake-agent",
    title: "Wealth Management Intake Agent",
    metaTitle: "Wealth Management Intake Agent for Client Calls | Automate4U",
    metaDescription:
      "AI voice workflow for wealth management intake calls, advisor consultation scheduling, service-request routing, and compliance-aware handoff.",
    primaryCtaLabel: "Request Workflow Assessment",
    relatedIndustryHref: "/industries/professional-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "hvac-service-call-agent",
    href: "/solutions/hvac-service-call-agent",
    title: "HVAC Dispatch & Service Call Agent",
    metaTitle: "HVAC Dispatch & Service Call Agent | Automate4U",
    metaDescription:
      "AI voice agent for HVAC companies that triages no-heat and no-cool emergencies, schedules maintenance, and captures new install estimate requests.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/home-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "plumbing-service-call-agent",
    href: "/solutions/plumbing-service-call-agent",
    title: "Plumbing Dispatch & Emergency Call Agent",
    metaTitle: "Plumbing Dispatch & Emergency Call Agent | Automate4U",
    metaDescription:
      "AI voice agent for plumbing companies that triages burst pipe and leak emergencies, schedules service calls, and captures replacement estimate requests.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/home-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "electrical-service-call-agent",
    href: "/solutions/electrical-service-call-agent",
    title: "Electrical Dispatch & Safety Triage Agent",
    metaTitle: "Electrical Dispatch & Safety Triage Agent | Automate4U",
    metaDescription:
      "AI voice agent for electrical contractors that screens safety hazards, schedules service calls, and captures panel and EV charger project details.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/home-services",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "chiropractic-pt-front-desk-agent",
    href: "/solutions/chiropractic-pt-front-desk-agent",
    title: "Chiropractic & Physical Therapy Front Desk Agent",
    metaTitle: "Chiropractic & Physical Therapy Front Desk Agent | Automate4U",
    metaDescription:
      "AI voice agent for chiropractic and physical therapy practices that handles new patient intake, scheduling, reschedules, and insurance question routing.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/healthcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "med-spa-front-desk-agent",
    href: "/solutions/med-spa-front-desk-agent",
    title: "Med Spa Front Desk & Booking Agent",
    metaTitle: "Med Spa Front Desk & Booking Agent | Automate4U",
    metaDescription:
      "AI voice agent for med spas that answers treatment and pricing questions, books consultations, and routes clinical questions to providers.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/healthcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "mental-health-counseling-intake-agent",
    href: "/solutions/mental-health-counseling-intake-agent",
    title: "Mental Health & Counseling Intake Agent",
    metaTitle: "Mental Health & Counseling Intake Agent | Automate4U",
    metaDescription:
      "AI voice agent for therapy and counseling practices that handles new client intake and scheduling with crisis-aware escalation reviewed by clinical staff.",
    primaryCtaLabel: "Request a Clinical Review",
    relatedIndustryHref: "/industries/healthcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "montessori-preschool-voice-agent",
    href: "/solutions/montessori-preschool-voice-agent",
    title: "Montessori & Preschool Admissions Agent",
    metaTitle: "Montessori & Preschool Admissions Agent | Automate4U",
    metaDescription:
      "AI voice agent for Montessori schools and preschools that answers enrollment and program questions and schedules tours with your director.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/education-childcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "tutoring-learning-center-agent",
    href: "/solutions/tutoring-learning-center-agent",
    title: "Tutoring & Learning Center Enrollment Agent",
    metaTitle: "Tutoring & Learning Center Enrollment Agent | Automate4U",
    metaDescription:
      "AI voice agent for tutoring and learning centers that answers new student inquiries, schedules assessments, and shares program pricing.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/education-childcare",
    relatedServiceHref: "/services/ai-voice",
  },
  {
    slug: "wholesale-distribution-order-agent",
    href: "/solutions/wholesale-distribution-order-agent",
    title: "Wholesale & Distribution Order Desk Agent",
    metaTitle: "Wholesale & Distribution Order Desk Agent | Automate4U",
    metaDescription:
      "AI voice agent for wholesale distributors that handles stock availability, order status, and reorder intake while routing pricing questions to sales.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/manufacturing",
    relatedServiceHref: "/services/ai-agents",
  },
  {
    slug: "industrial-supplier-order-agent",
    href: "/solutions/industrial-supplier-order-agent",
    title: "Industrial Supplier Parts Counter Agent",
    metaTitle: "Industrial Supplier Parts Counter Agent | Automate4U",
    metaDescription:
      "AI voice agent for industrial suppliers that handles part availability, will-call pickup confirmation, and account reorder intake.",
    primaryCtaLabel: "Request a Workflow Review",
    relatedIndustryHref: "/industries/manufacturing",
    relatedServiceHref: "/services/ai-agents",
  },
];
