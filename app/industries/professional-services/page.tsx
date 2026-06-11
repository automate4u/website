import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "High-value inquiries still start as admin work", text: "New leads, client questions, referral requests, document follow-up, showing requests, appointment preferences, and proposal questions often arrive before a professional has enough context to respond well." },
  { title: "Follow-up depends on busy staff remembering", text: "Prospects, clients, applicants, tenants, members, or referral partners may need reminders, next steps, document requests, booking links, payment prompts, or post-meeting follow-up at the right moment." },
  { title: "Sensitive requests need clean escalation", text: "Some questions need a licensed professional, advisor, manager, practitioner, agent, or office lead. Automation should identify those moments and hand off with context." },
];

const workflowPath = [
  { step: "01", title: "Capture the inquiry", text: "AI handles calls, forms, chat, or email and collects the service need, urgency, timeline, preferred appointment time, contact details, and missing intake information." },
  { step: "02", title: "Check approved rules", text: "The workflow references approved service descriptions, booking rules, qualification questions, document checklists, disclosure language, reminders, and escalation criteria." },
  { step: "03", title: "Prepare the handoff", text: "The system books or routes the request, creates the right CRM task, sends the next-step message, and gives staff a concise summary before they respond." },
  { step: "04", title: "Keep the record clean", text: "CRM notes, appointment context, document status, lead source, follow-up actions, and KPI events are logged so the team can see what happened and what remains." },
];

const valuePatterns = [
  { label: "Client and prospect intake", outcome: "Collect the details staff ask for repeatedly, route requests to the right person, and reduce back-and-forth before the first appointment, consultation, or sales conversation." },
  { label: "Appointment scheduling", outcome: "Support booking, rescheduling, reminders, confirmations, cancellation handling, and follow-up while respecting staff availability and office rules." },
  { label: "Document and next-step follow-up", outcome: "Request missing forms, send instructions, remind clients of next steps, and escalate unanswered or sensitive cases before they stall." },
  { label: "Advisor and financial intake", outcome: "Capture service interest, document status, timeline, account or application context, and route anything advice-related or approval-sensitive to the right professional." },
  { label: "Real estate and property lead response", outcome: "Respond quickly to listing, showing, rental, buyer, seller, or property-management inquiries while creating CRM tasks and routing high-intent opportunities." },
  { label: "Legal, accounting, and consulting follow-up", outcome: "Turn routine questions, missing-information requests, proposal follow-up, and meeting prep into clear tasks and client-ready next steps." },
];

const servicePaths = [
  { title: "Law Firms", description: "Live intake demo for new client calls, conflict-check capture, consultation scheduling, document follow-up, and attorney routing.", href: "/solutions/law-firm-intake-agent", cta: "Try the Law Firm Demo" },
  { title: "Accounting & Tax Firms", description: "Live intake demo for new client calls, document checklist capture, appointment scheduling, and urgent notice escalation.", href: "/solutions/accounting-firm-intake-agent", cta: "Try the Accounting Demo" },
  { title: "Wealth Management & Financial Advisors", description: "Live intake demo for prospective client calls, advisor consultation scheduling, and compliance-aware service routing.", href: "/solutions/wealth-management-intake-agent", cta: "Try the Wealth Management Demo" },
];

const sectorShifts = [
  { title: "Clients expect faster response", text: "Service firms can lose trust before the first conversation if inquiries, booking requests, showing requests, document questions, or follow-up messages sit unanswered." },
  { title: "Admin work is hard to scale", text: "Adding more clients often creates more scheduling, reminders, intake, documentation, billing questions, CRM updates, and status updates for the same small team." },
  { title: "Professional judgment must stay protected", text: "Automation should not make regulated, clinical, legal, financial, or sensitive decisions. It should collect context and route the right case to the right person." },
];

const systemGroups = [
  { title: "Client channels", items: ["Phone", "Email", "Website forms", "Chat", "SMS reminders"] },
  { title: "Business systems", items: ["CRM", "Calendar", "Booking tools", "Forms", "Document portal", "Payment links"] },
  { title: "Team workflow", items: ["Lead task", "Intake task", "Document request", "Staff handoff", "Follow-up queue", "KPI reporting"] },
];

const controls = [
  "Approved response rules keep the agent aligned with your services, policies, appointment rules, and communication standards.",
  "Sensitive, regulated, urgent, advice-related, pricing-related, or unclear situations can route to a human instead of being answered automatically.",
  "Role-based handoffs can separate front desk, advisor, practitioner, agent, manager, sales, and administrative responsibilities.",
  "Audit logs can preserve the inquiry, source, routing decision, owner, follow-up, and final outcome.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one repeatable workflow, such as new client intake, missed-call response, appointment requests, document collection, or lead follow-up."],
  ["Pilot", "Run real inquiries with staff review, measure response time, booking completion, lead handoff speed, missing-info reduction, and escalation quality."],
  ["Expand", "Add more channels, follow-up workflows, document reminders, property or advisor routing, reporting, or specialized handoffs once the first workflow is trusted."],
];

const confidenceNotes = [
  "Start with operational support before automating sensitive advice or professional judgment.",
  "Measure appointment conversion, lead response time, admin touches reduced, document turnaround, and follow-up completion.",
  "Keep clear handoff rules for anything urgent, regulated, emotional, financial, clinical, or legally sensitive.",
];

export default function ProfessionalServicesPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Professional services"
      title="AI intake, lead response, and follow-up systems for relationship-driven service teams."
      description="We help advisory firms, real estate teams, legal and accounting offices, consultants, agencies, and client-service businesses respond faster, reduce repetitive intake, keep CRM and document follow-up cleaner, and route sensitive work to the right people."
      primaryCta={{ label: "Explore AI Agents", href: "/services/ai-agents" }}
      image={{ src: "/images/home/how-it-works.jpg", alt: "Professional services team reviewing client intake and workflow information" }}
      typicalRequest="Can I speak with someone, and what information do you need from me first?"
      diagnosisTitle="Professional service teams lose capacity when every inquiry needs manual intake, routing, qualification, and follow-up."
      frictionAreas={frictionAreas}
      workflowTitle="Intake should become a booked next step, clean handoff, or documented follow-up."
      workflowDescription="A useful professional services automation captures context, applies approved rules, routes the request, and keeps sensitive cases with people who are qualified to decide."
      workflowPath={workflowPath}
      valueTitle="Start with the repetitive admin work that slows the client experience."
      valueDescription="The first useful automation is usually a narrow intake, lead-response, scheduling, document, or follow-up workflow where better consistency can save staff time and improve conversion."
      valuePatterns={valuePatterns}
      serviceTitle="Hear how this sounds for your type of practice."
      serviceDescription="Each practice type has its own live intake demo, built around the questions, routing, and boundaries that matter for that kind of firm."
      servicePaths={servicePaths}
      sectorTitle="Service quality now depends on how quickly the team can move from inquiry to next step."
      sectorDescription="The useful shift is not replacing professionals. It is creating a reliable support layer around the administrative work that surrounds their expertise."
      sectorShifts={sectorShifts}
      systemsTitle="The agent should support the tools your staff already uses."
      systemsDescription="The first workflow can connect intake channels to CRM records, calendars, booking tools, document portals, forms, payment links, reminders, staff tasks, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Keep advice, judgment, and sensitive decisions with the right people."
      controlsDescription="Professional services workflows often involve trust, privacy, expectations, and sometimes regulation. Automation should reduce admin load while protecting boundaries."
      controls={controls}
      rolloutTitle="A practical rollout protects client experience while reducing admin load."
      rolloutDescription="The first milestone should be narrow enough to review closely, valuable enough to measure, and clear enough that staff know when the system acts or escalates."
      rollout={rollout}
      confidenceTitle="The first project should make the buying decision easier, not bigger."
      confidenceDescription="We recommend starting with one intake or follow-up workflow, tracking staff time saved and conversion impact, then expanding after the system earns trust."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["professional-services-intake", "professional-services-document-intake"]}
      sourcePage="/industries/professional-services"
      ctaLocation="professional_services_assessment"
    />
  );
}
