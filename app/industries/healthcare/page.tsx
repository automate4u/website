import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "Front desk teams absorb constant interruptions", text: "Appointment requests, reminders, directions, forms, billing questions, referral status, and routine follow-up often compete with in-person patient support." },
  { title: "Simple requests still need the right context", text: "The next step can depend on provider availability, appointment type, intake status, location, policy, patient record context, and whether the issue needs clinical review." },
  { title: "Sensitive situations cannot be guessed", text: "Healthcare automation needs clear boundaries, escalation, auditability, and human review for symptoms, urgent issues, clinical judgment, privacy, and exceptions." },
];

const workflowPath = [
  { step: "01", title: "Capture the request", text: "AI handles routine calls, forms, chat, or email and identifies appointment requests, reminders, administrative questions, referral follow-up, or staff escalation needs." },
  { step: "02", title: "Apply approved rules", text: "The workflow references approved non-clinical information such as hours, location, appointment types, intake instructions, reminder rules, and routing criteria." },
  { step: "03", title: "Route with context", text: "The system creates the right task, booking handoff, intake follow-up, reminder, staff notification, or escalation with a concise summary attached." },
  { step: "04", title: "Escalate sensitive cases", text: "Urgent, clinical, emotional, privacy-sensitive, or unclear situations are handed to authorized staff instead of being resolved automatically." },
];

const valuePatterns = [
  { label: "Appointment and reminder support", outcome: "Reduce routine scheduling pressure, reminder calls, no-show follow-up, cancellation handling, and appointment-prep questions." },
  { label: "Administrative intake", outcome: "Collect missing forms, contact details, reason for visit, location preferences, insurance or referral notes, and other non-clinical intake context." },
  { label: "Patient question routing", outcome: "Answer approved administrative questions and route clinical, urgent, billing, privacy, or uncertain requests to the right staff member." },
];

const servicePaths = [
  { title: "AI Voice for front desk support", description: "A voice-led starting point for routine calls, appointment requests, reminders, directions, and administrative intake with staff handoff.", href: "/services/ai-voice", cta: "Explore AI Voice" },
  { title: "AI Agents for routing and follow-up", description: "Workflow agents that turn calls, forms, emails, and messages into tasks, reminders, summaries, handoffs, and operational reporting.", href: "/services/ai-agents", cta: "Explore AI Agents" },
  { title: "Security and monitoring", description: "Controls for escalation, audit logs, monitoring, human review, and implementation practices that respect sensitive workflows.", href: "/capabilities/security-monitoring-ai-safety", cta: "Explore Safety Controls" },
];

const sectorShifts = [
  { title: "Patient expectations are becoming more immediate", text: "People expect quick acknowledgement, clear next steps, and fewer phone loops for routine administrative needs, even when clinic staff are busy." },
  { title: "Administrative load affects patient experience", text: "When staff are buried in repetitive calls and follow-up, it becomes harder to give focused attention to people in the office and cases that need judgment." },
  { title: "Trust depends on restraint", text: "The right healthcare automation does less guessing, not more. It uses approved information, clear handoffs, and careful monitoring around sensitive cases." },
];

const systemGroups = [
  { title: "Patient channels", items: ["Phone", "Forms", "Email", "Chat", "SMS reminders"] },
  { title: "Clinic systems", items: ["Calendar", "Practice system", "CRM", "Forms", "Referral tracker"] },
  { title: "Team workflow", items: ["Staff task", "Reminder queue", "Escalation note", "Audit log", "KPI reporting"] },
];

const controls = [
  "The agent should not provide medical advice, diagnosis, treatment decisions, or emergency judgment.",
  "Urgent symptoms, unclear requests, privacy-sensitive issues, complaints, and clinical questions should escalate to authorized staff.",
  "Approved responses can be limited to administrative information such as hours, location, appointment preparation, routing, and next-step instructions.",
  "Audit logs can preserve request source, routing, staff owner, escalation reason, and final outcome for review.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one low-risk workflow, such as appointment reminders, administrative intake, directions, or non-clinical appointment request routing."],
  ["Pilot", "Run real requests with staff review, approved responses, escalation rules, privacy checks, and patient-experience monitoring."],
  ["Expand", "Add adjacent administrative workflows, channels, provider-specific routing, and reporting only after the first workflow is trusted."],
];

const confidenceNotes = [
  "Start with administrative support, not clinical decision-making.",
  "Measure response time, call interruptions reduced, reminder completion, no-show follow-up, and staff handoff quality.",
  "Treat privacy, security, audit logging, and human escalation as core requirements rather than optional add-ons.",
];

export default function HealthcarePage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Healthcare & wellness clinics"
      title="AI front desk support for healthcare, wellness, and clinic admin workflows."
      description="We help clinics, wellness practices, therapy offices, dental teams, osteopathy, massage, and healthcare-adjacent service providers reduce repetitive administrative communication while keeping clinical judgment, sensitive situations, and exceptions with staff."
      primaryCta={{ label: "Explore AI Voice", href: "/services/ai-voice" }}
      image={{ src: "/images/industries/healthcare.jpg", alt: "Healthcare staff supporting patient communication and administrative workflow" }}
      typicalRequest="Can I reschedule my appointment, and do I need to bring anything with me?"
      diagnosisTitle="Healthcare teams need automation that reduces repetitive admin without weakening patient trust."
      frictionAreas={frictionAreas}
      workflowTitle="The system should support the front desk, not practice medicine."
      workflowDescription="A useful healthcare automation captures administrative requests, applies approved information, creates the right staff handoff, and escalates anything sensitive or clinical."
      workflowPath={workflowPath}
      valueTitle="Start with low-risk administrative workflows before expanding."
      valueDescription="The first useful automation should reduce routine front-desk pressure while keeping staff in control of anything clinical, urgent, private, or unclear."
      valuePatterns={valuePatterns}
      serviceTitle="Healthcare automation should begin with supportable workflows and clear boundaries."
      serviceDescription="The strongest starting points are non-clinical workflows where approved information, staff handoff, and auditability can be designed from the beginning."
      servicePaths={servicePaths}
      sectorTitle="Patient experience depends on speed, clarity, and knowing when a human must step in."
      sectorDescription="Healthcare automation wins trust when it reduces repetitive friction while being conservative around privacy, urgency, and clinical uncertainty."
      sectorShifts={sectorShifts}
      systemsTitle="The first workflow should fit the tools your clinic already uses."
      systemsDescription="The implementation can connect routine communication to calendars, practice systems, forms, reminders, staff tasking, audit logs, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Build the guardrails before the automation expands."
      controlsDescription="Healthcare and wellness workflows require conservative escalation, privacy-aware implementation, and traceable decisions. Those controls should be part of the first build, not added later."
      controls={controls}
      rolloutTitle="A careful rollout protects patients, staff, and the business case."
      rolloutDescription="The first milestone should be narrow, non-clinical, staff-reviewed, and measurable. Expansion should only happen after workflow quality and escalation rules are trusted."
      rollout={rollout}
      confidenceTitle="The first project should be narrow, reviewed, and easy to evaluate."
      confidenceDescription="Healthcare-adjacent workflows should prove operational value without pushing automation into clinical decisions or sensitive judgment too early."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["healthcare-front-desk", "professional-services-intake"]}
      sourcePage="/industries/healthcare"
      ctaLocation="healthcare_assessment"
    />
  );
}
