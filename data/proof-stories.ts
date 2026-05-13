export type ProofStory = {
  slug: string;
  label: string;
  title: string;
  context: string;
  workflow: string;
  connectedActions: string[];
  humanControls: string[];
  metrics: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const proofStories: ProofStory[] = [
  {
    slug: "manufacturing-response-agent",
    label: "Representative manufacturing workflow",
    title: "Parts, availability, quoting, and order-response agent",
    context:
      "Industrial teams often receive repetitive customer questions about part availability, quote status, order timing, and next steps while sales and operations staff are already busy.",
    workflow:
      "An email or chat request is classified, checked against approved inventory/order context, summarized, routed to the right owner, and prepared for reply or quote follow-up.",
    connectedActions: [
      "Look up approved product, inventory, or order context",
      "Create or update CRM activity",
      "Draft response or quote follow-up",
      "Create a task for sales, parts, or operations",
    ],
    humanControls: [
      "Human review for pricing, substitutions, delivery commitments, or unusual requests",
      "Escalation when source data conflicts or the answer is uncertain",
      "Audit trail for source context and staff approval",
    ],
    metrics: [
      "First response time",
      "Quote cycle time",
      "Requests routed without manual triage",
      "CRM follow-up completion",
    ],
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "AI Agents", href: "/core-services/ai-agents" },
    ],
  },
  {
    slug: "daycare-front-desk-voice",
    label: "Representative education workflow",
    title: "Daycare front-desk voice assistant with staff-controlled escalation",
    context:
      "Childcare teams field repetitive calls about enrollment, tours, absences, pickup notices, hours, program availability, and policy questions during already busy parts of the day.",
    workflow:
      "A voice assistant answers approved routine questions, captures parent context, routes notices to the right location or classroom, and escalates sensitive or policy-bound cases to staff.",
    connectedActions: [
      "Capture caller, child, location, request type, and urgency",
      "Route enrollment or tour inquiries",
      "Notify staff of routine absence or pickup notices",
      "Log the call summary and next step",
    ],
    humanControls: [
      "Staff approval for pickup authorization, custody-sensitive issues, health concerns, or identity verification",
      "Location-specific policies and approved responses",
      "Escalation when caller details do not match the expected record",
    ],
    metrics: [
      "Routine calls handled",
      "Missed calls reduced",
      "Staff interruptions reduced",
      "Sensitive escalations logged",
    ],
    links: [
      { label: "Daycare Voice Agent", href: "/solutions/daycare-voice-agent" },
      { label: "Education & Childcare", href: "/industries/education-childcare" },
    ],
  },
  {
    slug: "home-services-dispatch",
    label: "Representative home services workflow",
    title: "Missed-call recovery, booking, dispatch intake, and quote follow-up",
    context:
      "Home service teams lose opportunities when calls arrive after hours, while staff are on another call, or when technicians and office teams are coordinating urgent requests.",
    workflow:
      "A voice or chat workflow captures job details, service location, urgency, preferred times, and equipment notes, then creates the booking path, dispatch task, or quote follow-up.",
    connectedActions: [
      "Qualify service need and urgency",
      "Create calendar, CRM, or dispatch task",
      "Send customer confirmation or follow-up",
      "Notify office staff or technician owner",
    ],
    humanControls: [
      "Human review for pricing, emergency promises, warranty questions, or edge cases",
      "Clear escalation when scheduling rules are unavailable",
      "Manual override for dispatch and priority decisions",
    ],
    metrics: [
      "Booked appointments",
      "Response time",
      "After-hours leads recovered",
      "Quote follow-up completion",
    ],
    links: [
      { label: "Home Services", href: "/industries/home-services" },
      { label: "AI Voice", href: "/core-services/ai-voice" },
    ],
  },
  {
    slug: "marketing-content-operations",
    label: "Representative marketing workflow",
    title: "Content drafting, approval queue, scheduling, and reporting",
    context:
      "Small teams often have enough ideas but not enough time to turn them into reviewed posts, emails, nurture sequences, campaign assets, and follow-up tasks.",
    workflow:
      "Approved source material is turned into drafts, routed through brand or owner review, scheduled only after approval, and reported against output and lead movement.",
    connectedActions: [
      "Draft posts, emails, captions, FAQs, or campaign variants",
      "Create review tasks and approval queues",
      "Schedule approved assets",
      "Log output, engagement, and follow-up opportunities",
    ],
    humanControls: [
      "Human approval before public publishing",
      "Brand, claims, offer, and audience rules",
      "Review for sensitive, regulated, or high-visibility content",
    ],
    metrics: [
      "Approved content shipped",
      "Manual drafting hours reduced",
      "Follow-up tasks created",
      "Campaign reporting cadence",
    ],
    links: [
      { label: "Marketing Automation", href: "/core-services/marketing-automation" },
      { label: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
    ],
  },
  {
    slug: "retail-support-order-agent",
    label: "Representative retail workflow",
    title: "Product questions, order status, returns, and support triage",
    context:
      "Retail and ecommerce teams often answer the same product, sizing, order, return, delivery, and promo questions across chat, email, social, and support queues.",
    workflow:
      "A customer message is matched to approved product and policy context, routed by intent, summarized for staff when needed, and logged against support or CRM records.",
    connectedActions: [
      "Answer from approved FAQs, product data, and policy rules",
      "Create or update support ticket context",
      "Route refund, complaint, or exception cases",
      "Trigger follow-up or review request when appropriate",
    ],
    humanControls: [
      "Human review for refunds, complaints, high-value customers, or unusual policy requests",
      "Brand and claims rules for public-facing responses",
      "Transcript review to improve answer quality over time",
    ],
    metrics: [
      "First response time",
      "Tickets deflected or triaged",
      "Cost per request",
      "Escalation quality",
    ],
    links: [
      { label: "AI Chat", href: "/core-services/ai-chat" },
      { label: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
    ],
  },
  {
    slug: "professional-services-intake",
    label: "Representative professional services workflow",
    title: "Intake, booking, document follow-up, and staff handoff",
    context:
      "Appointment-driven teams lose capacity when every inquiry requires manual intake, scheduling coordination, missing-information follow-up, and staff routing.",
    workflow:
      "A voice, chat, form, or email intake flow captures the request, applies approved booking and eligibility rules, creates next-step tasks, and routes sensitive cases to the right person.",
    connectedActions: [
      "Capture service need, urgency, availability, and missing details",
      "Create booking, CRM, or follow-up task",
      "Send approved reminder or document request",
      "Summarize context for practitioner, office, or advisor review",
    ],
    humanControls: [
      "Human handoff for regulated, clinical, legal, financial, or emotional requests",
      "Approved service descriptions and intake boundaries",
      "Audit trail for routing, reminders, and staff ownership",
    ],
    metrics: [
      "Intake completion rate",
      "Appointment conversion",
      "Manual follow-up reduced",
      "Cycle time to booked next step",
    ],
    links: [
      { label: "Professional Services", href: "/industries/professional-services" },
      { label: "AI Agents", href: "/core-services/ai-agents" },
    ],
  },
  {
    slug: "healthcare-front-desk",
    label: "Representative healthcare workflow",
    title: "Front-desk automation with conservative escalation",
    context:
      "Clinics and wellness teams need faster handling for appointment requests, reminders, forms, and routine questions while protecting privacy and clinical judgment.",
    workflow:
      "A front-desk assistant captures routine requests, checks approved non-clinical rules, creates the right follow-up, and escalates urgent, private, or clinical cases to staff.",
    connectedActions: [
      "Capture appointment, reminder, intake, or routing request",
      "Create staff task or calendar follow-up",
      "Send approved non-clinical next-step message",
      "Log the interaction and escalation reason",
    ],
    humanControls: [
      "No autonomous clinical, legal, or emergency decisions",
      "Privacy-aware routing and limited approved context",
      "Escalation for urgency, uncertainty, or sensitive patient details",
    ],
    metrics: [
      "Front-desk interruptions reduced",
      "Appointment request response time",
      "Reminder completion",
      "Escalations documented",
    ],
    links: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "AI Voice", href: "/core-services/ai-voice" },
    ],
  },
  {
    slug: "custom-operations-workbench",
    label: "Representative custom software workflow",
    title: "AI-enabled workbench for review, approvals, and operating visibility",
    context:
      "Some workflows need more than automations behind the scenes. Staff need a clear interface for queues, summaries, approvals, exceptions, and operational visibility.",
    workflow:
      "A custom operating surface brings requests, AI summaries, source context, approvals, audit logs, and next actions into one purpose-built place for staff.",
    connectedActions: [
      "Show queue status, owner, priority, and source context",
      "Present AI summaries and recommended next actions",
      "Capture approvals, overrides, and staff decisions",
      "Report volume, cycle time, errors, and value metrics",
    ],
    humanControls: [
      "Role-based permissions for sensitive queues and actions",
      "Approval records for AI-supported decisions",
      "Manual override and exception handling built into the interface",
    ],
    metrics: [
      "Manual steps removed",
      "Review cycle time",
      "Queue visibility",
      "Decision traceability",
    ],
    links: [
      { label: "Custom AI Software", href: "/core-services/custom-ai-software" },
      { label: "How We Build", href: "/capabilities" },
    ],
  },
  {
    slug: "managed-ai-operations-rhythm",
    label: "Representative managed operations workflow",
    title: "Monitoring, review, tuning, and monthly value reporting",
    context:
      "Once AI touches customer communication, revenue follow-up, or operational handoffs, the system needs ownership after launch.",
    workflow:
      "Usage, failures, escalations, integration health, costs, answer quality, and business outcomes are reviewed on a recurring operating rhythm.",
    connectedActions: [
      "Monitor workflow usage, failures, retries, and escalations",
      "Review transcripts, source quality, and low-confidence cases",
      "Tune prompts, rules, knowledge, and handoffs",
      "Report value against the agreed KPI baseline",
    ],
    humanControls: [
      "Defined owner for errors, drift, changes, and exceptions",
      "Review cadence for sensitive workflows",
      "Change log for rules, prompts, integrations, and knowledge updates",
    ],
    metrics: [
      "Workflow reliability",
      "Escalation rate",
      "Cost per handled request",
      "Monthly value realized",
    ],
    links: [
      { label: "Managed AI Operations", href: "/core-services/managed-ai-operations" },
      { label: "AI Safety", href: "/capabilities/security-monitoring-ai-safety" },
    ],
  },
  {
    slug: "ai-roadmap-value-realization",
    label: "Representative strategy workflow",
    title: "Workflow assessment, pilot selection, and 30/60/90-day value roadmap",
    context:
      "Many teams know they should explore AI but are cautious about spend, operational risk, and choosing the wrong first workflow.",
    workflow:
      "A focused assessment ranks workflows by value, feasibility, risk, adoption effort, and measurable business outcome before recommending a paid blueprint or pilot.",
    connectedActions: [
      "Inventory repetitive work, systems, handoffs, and pain points",
      "Score opportunities by value, risk, and readiness",
      "Define pilot scope, controls, budget drivers, and KPI baseline",
      "Sequence the next 30, 60, and 90 days",
    ],
    humanControls: [
      "Leadership approval before paid implementation",
      "Clear decision on what not to automate yet",
      "Staff adoption plan for the first workflow",
    ],
    metrics: [
      "Workflow priority score",
      "Estimated hours at stake",
      "Pilot feasibility",
      "Value realization milestones",
    ],
    links: [
      { label: "AI Operations Strategy", href: "/core-services/ai-transformation" },
      { label: "Spend Confidence", href: "/core-services" },
    ],
  },
  {
    slug: "real-estate-lead-response",
    label: "Representative real estate workflow",
    title: "Speed-to-lead, showing request, CRM update, and agent handoff",
    context:
      "Real estate teams lose opportunities when listing inquiries, missed calls, portal leads, and showing requests sit without fast qualification and follow-up.",
    workflow:
      "An inbound lead is captured, qualified with approved questions, routed to the right agent or property workflow, and logged with next-step reminders.",
    connectedActions: [
      "Capture property interest, timeline, budget, and contact details",
      "Create CRM task, lead note, or showing request",
      "Send approved confirmation or follow-up",
      "Notify the agent with a concise lead summary",
    ],
    humanControls: [
      "Licensed advice, pricing, negotiation, and contract questions stay human-led",
      "Routing rules for territory, listing ownership, and agent availability",
      "Escalation for unusual requests or unclear listing data",
    ],
    metrics: [
      "Speed to lead",
      "Booked showings",
      "CRM completeness",
      "Follow-up completion",
    ],
    links: [
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "AI Voice", href: "/core-services/ai-voice" },
    ],
  },
  {
    slug: "hospitality-guest-response",
    label: "Representative hospitality workflow",
    title: "Guest questions, booking support, request routing, and service recovery",
    context:
      "Hospitality teams field questions before, during, and after a visit while staff are also supporting guests in person.",
    workflow:
      "A guest message or call is answered from approved property context, routed when action is needed, and escalated for VIP, emotional, refund, or service-recovery moments.",
    connectedActions: [
      "Answer routine questions about hours, policies, amenities, or booking details",
      "Create staff task or manager alert",
      "Send approved confirmation or next-step message",
      "Track recurring request types and response times",
    ],
    humanControls: [
      "Human handoff for complaints, refunds, VIP guests, safety, or special accommodations",
      "Property-specific approved response rules",
      "Review queue for public review responses or sensitive follow-up",
    ],
    metrics: [
      "Guest response speed",
      "Requests routed",
      "Staff interruptions reduced",
      "Service recovery escalations",
    ],
    links: [
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "AI Chat", href: "/core-services/ai-chat" },
    ],
  },
  {
    slug: "technology-media-workflow",
    label: "Representative technology and media workflow",
    title: "Support triage, content workflow, customer update, and reporting",
    context:
      "Technology and media teams often need to turn messy inputs into clear tickets, briefs, summaries, drafts, tasks, and status reports without lowering quality.",
    workflow:
      "Inbound support, content, or internal requests are classified, summarized, connected to approved context, routed for review, and reported against backlog or output metrics.",
    connectedActions: [
      "Summarize support messages, transcripts, briefs, or campaign requests",
      "Create ticket, content task, customer update, or review queue item",
      "Route technical, editorial, or customer-sensitive work to owners",
      "Report themes, backlog, draft acceptance, and workflow volume",
    ],
    humanControls: [
      "Expert review for technical claims, public content, and customer commitments",
      "Approved product docs, briefs, and knowledge boundaries",
      "Audit trail for generated drafts, routing, and published actions",
    ],
    metrics: [
      "Backlog reduced",
      "Routing accuracy",
      "Draft acceptance",
      "Reporting visibility",
    ],
    links: [
      { label: "Technology & Media", href: "/industries/technology-media" },
      { label: "Marketing Automation", href: "/core-services/marketing-automation" },
    ],
  },
  {
    slug: "financial-document-intake",
    label: "Representative financial services workflow",
    title: "Client intake, document follow-up, status routing, and advisor handoff",
    context:
      "Financial service teams often need to chase documents, clarify intake details, answer process questions, and route cases without automating regulated judgment.",
    workflow:
      "A client request is captured, checked against approved process rules, routed with missing-document context, and escalated when advice, approval, or compliance review is required.",
    connectedActions: [
      "Capture service interest, timeline, status question, and missing details",
      "Create CRM task or document follow-up",
      "Send approved checklist or appointment-prep message",
      "Route advice, approval, or compliance-sensitive cases to staff",
    ],
    humanControls: [
      "No autonomous financial advice, suitability, approval, or underwriting decisions",
      "Approved intake, checklist, and scheduling language only",
      "Traceable handoff for sensitive or regulated requests",
    ],
    metrics: [
      "Intake completeness",
      "Document turnaround",
      "Staff touches reduced",
      "Review handoff quality",
    ],
    links: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "AI Agents", href: "/core-services/ai-agents" },
    ],
  },
];
