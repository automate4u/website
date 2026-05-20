import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "Intake takes longer than the actual first step", text: "Teams lose time collecting contact details, service needs, appointment preferences, eligibility notes, documents, forms, and missing context before a professional can help." },
  { title: "Follow-up depends on busy staff remembering", text: "Prospects, clients, patients, or members may need reminders, next steps, document requests, booking links, payment prompts, or post-visit follow-up at the right moment." },
  { title: "Sensitive requests need clean escalation", text: "Some questions need a licensed professional, manager, practitioner, or office lead. Automation should identify those moments and hand off with context." },
];

const workflowPath = [
  { step: "01", title: "Capture the inquiry", text: "AI handles calls, forms, chat, or email and collects the service need, urgency, preferred appointment time, contact details, and missing intake information." },
  { step: "02", title: "Check approved rules", text: "The workflow references approved service descriptions, booking rules, eligibility questions, document checklists, reminders, and escalation criteria." },
  { step: "03", title: "Prepare the handoff", text: "The system books or routes the request, creates the right task, sends the next-step message, and gives staff a concise summary before they respond." },
  { step: "04", title: "Keep the record clean", text: "CRM notes, appointment context, document status, follow-up actions, and KPI events are logged so the team can see what happened and what remains." },
];

const valuePatterns = [
  { label: "Client and patient intake", outcome: "Collect the details staff ask for repeatedly, route requests to the right person, and reduce back-and-forth before the first appointment or consultation." },
  { label: "Appointment scheduling", outcome: "Support booking, rescheduling, reminders, confirmations, cancellation handling, and follow-up while respecting staff availability and office rules." },
  { label: "Document and next-step follow-up", outcome: "Request missing forms, send instructions, remind clients of next steps, and escalate unanswered or sensitive cases before they stall." },
];

const servicePaths = [
  { title: "AI Voice intake", description: "A voice-led starting point for routine appointment calls, service questions, intake capture, and front-office routing.", href: "/services/ai-voice", cta: "Explore AI Voice" },
  { title: "AI Agents for workflow routing", description: "Agents that turn calls, emails, forms, and chat into CRM updates, booking tasks, document requests, reminders, and staff handoffs.", href: "/services/ai-agents", cta: "Explore AI Agents" },
  { title: "Document follow-up agent", description: "A focused workflow for recurring paperwork, intake forms, reminders, approvals, and client-status visibility.", cta: "Discuss this path" },
];

const sectorShifts = [
  { title: "Clients expect faster response", text: "Appointment-driven businesses can lose trust before the first visit if inquiries, booking requests, or follow-up messages sit unanswered." },
  { title: "Admin work is hard to scale", text: "Adding more clients often creates more scheduling, reminders, intake, documentation, billing questions, and status updates for the same small team." },
  { title: "Professional judgment must stay protected", text: "Automation should not make regulated, clinical, legal, financial, or sensitive decisions. It should collect context and route the right case to the right person." },
];

const systemGroups = [
  { title: "Client channels", items: ["Phone", "Email", "Website forms", "Chat", "SMS reminders"] },
  { title: "Practice systems", items: ["CRM", "Calendar", "Booking tools", "Forms", "Payment links"] },
  { title: "Team workflow", items: ["Intake task", "Document request", "Staff handoff", "Follow-up queue", "KPI reporting"] },
];

const controls = [
  "Approved response rules keep the agent aligned with your services, policies, appointment rules, and communication standards.",
  "Sensitive, regulated, urgent, or unclear situations can route to a human instead of being answered automatically.",
  "Role-based handoffs can separate front desk, practitioner, manager, sales, and administrative responsibilities.",
  "Audit logs can preserve the inquiry, source, routing decision, owner, follow-up, and final outcome.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one repeatable workflow, such as new client intake, appointment requests, document collection, or follow-up reminders."],
  ["Pilot", "Run real inquiries with staff review, measure response time, booking completion, missing-info reduction, and escalation quality."],
  ["Expand", "Add more channels, follow-up workflows, document reminders, reporting, or specialized routing once the first workflow is trusted."],
];

const confidenceNotes = [
  "Start with operational support before automating sensitive advice or professional judgment.",
  "Measure appointment conversion, response time, admin touches reduced, and follow-up completion.",
  "Keep clear handoff rules for anything urgent, regulated, emotional, financial, clinical, or legally sensitive.",
];

export default function ProfessionalServicesPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Professional services"
      title="AI intake and follow-up systems for appointment-driven service teams."
      description="We help professional practices, clinics, wellness teams, advisory firms, and client-service businesses reduce repetitive intake, scheduling, document follow-up, and front-office routing while keeping judgment with the right people."
      primaryCta={{ label: "Explore AI Agents", href: "/services/ai-agents" }}
      image={{ src: "/images/home/how-it-works.jpg", alt: "Professional services team reviewing client intake and workflow information" }}
      typicalRequest="Can I book an appointment, and what information do you need from me first?"
      diagnosisTitle="Professional service teams lose capacity when every inquiry needs manual intake, routing, and follow-up."
      frictionAreas={frictionAreas}
      workflowTitle="Intake should become a booked next step, clean handoff, or documented follow-up."
      workflowDescription="A useful professional services automation captures context, applies approved rules, routes the request, and keeps sensitive cases with people who are qualified to decide."
      workflowPath={workflowPath}
      valueTitle="Start with the repetitive admin work that slows the client experience."
      valueDescription="The first useful automation is usually a narrow intake, scheduling, or follow-up workflow where better consistency can save staff time and improve conversion."
      valuePatterns={valuePatterns}
      serviceTitle="Connect the first client touchpoint to the workflow that follows."
      serviceDescription="Professional services automation often starts with intake and then expands into scheduling, documents, reminders, reporting, and managed operations."
      servicePaths={servicePaths}
      sectorTitle="Service quality now depends on how quickly the team can move from inquiry to next step."
      sectorDescription="The useful shift is not replacing professionals. It is creating a reliable support layer around the administrative work that surrounds their expertise."
      sectorShifts={sectorShifts}
      systemsTitle="The agent should support the tools your staff already uses."
      systemsDescription="The first workflow can connect intake channels to CRM records, calendars, booking tools, forms, payment links, reminders, staff tasks, and reporting."
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
      proofStorySlugs={["professional-services-intake", "healthcare-front-desk"]}
      sourcePage="/industries/professional-services"
      ctaLocation="professional_services_assessment"
    />
  );
}
