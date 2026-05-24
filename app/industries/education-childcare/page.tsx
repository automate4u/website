import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "Communication arrives from every direction", text: "Families, parents, learners, and prospective students reach out through calls, email, forms, text, chat, and staff-specific threads." },
  { title: "The right answer depends on program context", text: "Age group, location, enrollment status, schedule, policies, staff availability, and sensitivity level all affect what should happen next." },
  { title: "Staff lose focus to repeatable admin", text: "Teams answer the same questions, chase missing details, route messages, schedule tours, confirm absences, and document exceptions throughout the day. Across multiple locations, that repetition multiplies quickly." },
];

const workflowPath = [
  { step: "01", title: "Capture the request", text: "AI handles the first interaction across voice, chat, email, or form intake and collects the learner, family, program, location, urgency, and next-step details." },
  { step: "02", title: "Apply the right context", text: "The workflow references approved information such as program availability, tour process, calendar rules, attendance policies, or location-specific instructions." },
  { step: "03", title: "Route with clear ownership", text: "The system creates the right staff handoff, calendar task, enrollment follow-up, classroom note, or admin ticket with the context already attached." },
  { step: "04", title: "Keep sensitive cases human-led", text: "Pickup changes, custody-sensitive issues, health concerns, payment disputes, and unclear cases are documented and escalated to authorized staff." },
];

const valuePatterns = [
  { label: "Daycare and childcare", outcome: "Support parent calls, enrollment inquiries, tour scheduling, absence notices, and policy-based escalation while staff stay focused on children and families." },
  { label: "Private and prep schools", outcome: "Route admissions questions, parent communication, attendance updates, program inquiries, and staff follow-up with more consistent handoffs." },
  { label: "Tutoring and adult learning", outcome: "Respond to prospective learners, schedule consultations or assessments, answer program questions, and keep enrollment follow-up moving." },
  { label: "Multi-location operating model", outcome: "Standardize enrollment response, tour routing, absence intake, policy handoffs, and staff notifications across centers or campuses while still respecting local rules." },
  { label: "Enrollment and tour conversion", outcome: "Reduce delay between inquiry and next step so more prospective families or learners receive clear follow-up before they lose momentum." },
];

const servicePaths = [
  { title: "Daycare Voice Agent", description: "A focused front desk voice assistant for enrollment inquiries, tour requests, parent call routing, absence reporting, and multi-location communication workflows.", href: "/solutions/daycare-voice-agent", cta: "View solution" },
  { title: "Enrollment Follow-Up Agent", description: "A common starting point for prospective families, learners, and students who need timely next steps after forms, calls, open houses, or inquiries.", cta: "Discuss this path" },
  { title: "Message Triage Agent", description: "A practical workflow for shared inboxes, parent messages, student questions, staff routing, approvals, and documented escalation.", cta: "Discuss this path" },
  { title: "Multi-location rollout", description: "A controlled path for center groups, campuses, and networks that need consistent workflows, location-specific rules, and leadership visibility.", cta: "Discuss this path" },
];

const sectorShifts = [
  { title: "Families expect faster responses", text: "Parents, caregivers, and learners expect quick acknowledgement, clear next steps, and fewer handoff loops when asking about enrollment, schedules, programs, or policies." },
  { title: "Staff attention is already stretched", text: "Routine communication pulls administrators, front desk teams, admissions staff, and educators away from work that requires human presence and judgment." },
  { title: "Growth exposes inconsistent process", text: "As organizations add centers, programs, or campuses, small differences in intake, tour follow-up, parent routing, and documentation can turn into lost enrollment and uneven family experience." },
  { title: "Trust depends on control", text: "Education and childcare automation needs approved language, documented handoffs, location-specific rules, and clear escalation for sensitive situations." },
];

const systemGroups = [
  { title: "Communication channels", items: ["Phone", "Email", "Website forms", "Chat", "SMS or WhatsApp"] },
  { title: "Operations data", items: ["Calendar", "Enrollment CRM", "Classroom platform", "Program availability", "Policy documents", "Location rules"] },
  { title: "Team workflow", items: ["Admissions tasks", "Tour follow-up", "Staff handoff", "Parent follow-up", "Audit log", "KPI reporting"] },
];

const controls = [
  "Approved responses keep the system aligned with your policies, program details, and communication standards.",
  "Location-specific workflows can support different centers, campuses, schedules, programs, and staff responsibilities.",
  "Sensitive cases can be flagged and routed instead of answered automatically.",
  "Audit logs can preserve the request, source, routing, staff owner, and final outcome for review.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one frequent communication workflow, such as enrollment inquiry handling, tour scheduling, or absence reporting."],
  ["Pilot", "Run real conversations with staff review, approved responses, escalation rules, and parent or learner experience checks. Track inquiry response time, tour follow-up, staff touches, and escalation quality."],
  ["Expand", "Add adjacent workflows, locations, channels, or integrations once the first workflow saves time and earns staff trust. Rollout can happen center by center or program by program."],
];

const confidenceNotes = [
  "Start with a bounded workflow instead of a broad automation program.",
  "Measure missed calls reduced, enrollment response time, tour follow-up completion, and staff hours saved per center.",
  "Validate communication quality before expanding to more sensitive scenarios or more locations.",
  "Keep staff approval for exceptions until policies, data, and escalation rules are proven.",
];

export default function EducationChildcarePage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Education and childcare"
      title="AI operations support for enrollment, family communication, and multi-location admin workflows."
      description="We help childcare centers, private schools, tutoring programs, youth education providers, and enrollment-driven learning organizations reduce routine communication work, improve inquiry response, and standardize handoffs while keeping sensitive decisions under staff control."
      primaryCta={{ label: "View Daycare Voice Agent", href: "/solutions/daycare-voice-agent" }}
      image={{ src: "/images/home/how-it-works.jpg", alt: "Education team reviewing enrollment and communication workflows" }}
      typicalRequest="Can I schedule a tour, check availability, and confirm what information you need next?"
      diagnosisTitle="Education and childcare teams need automation that understands families, learners, policies, and staff capacity."
      frictionAreas={frictionAreas}
      workflowTitle="The system should turn communication into the right next step, not just another message."
      workflowDescription="A useful education or childcare automation captures context, applies approved information, routes the request, and keeps sensitive cases with people who are authorized to decide."
      workflowPath={workflowPath}
      valueTitle="Start with the communication workflows your team handles every day."
      valueDescription="The first useful automation is usually a frequent, structured workflow where better intake, faster routing, and clear escalation can reduce staff interruptions, improve enrollment follow-up, and make performance easier to measure across locations."
      valuePatterns={valuePatterns}
      serviceTitle="Choose the right workflow first, then explore the focused solution."
      serviceDescription="Education and childcare organizations can share similar operational pressure while needing different solution entry points by age group, program type, and communication model."
      servicePaths={servicePaths}
      sectorTitle="Communication expectations are rising while leaders need cleaner operating visibility."
      sectorDescription="The useful shift is not replacing staff. It is giving teams a reliable support layer for intake, routing, follow-up, escalation, and location-level visibility."
      sectorShifts={sectorShifts}
      systemsTitle="Automation should fit the tools and channels your team already uses."
      systemsDescription="The first workflow can connect communication intake to calendars, enrollment tools, classroom platforms, CRM records, location rules, staff notifications, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Keep policies, sensitive cases, and final decisions under human oversight."
      controlsDescription="Education and childcare workflows need operational control, flexible policies, and careful escalation. Automation should support trust, not weaken it."
      controls={controls}
      rolloutTitle="A practical rollout lowers risk for teams that are cautious about parent, learner, or staff experience."
      rolloutDescription="The first milestone should be narrow enough to launch, valuable enough to measure, and clear enough that staff trust the system before it expands."
      rollout={rollout}
      confidenceTitle="The first project should make the enrollment and admin value visible."
      confidenceDescription="We recommend starting with a defined communication workflow and measuring response speed, tour follow-up, staff time saved, escalation quality, and whether the rollout model can scale across locations."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["daycare-front-desk-voice", "ai-roadmap-value-realization"]}
      sourcePage="/industries/education-childcare"
      ctaLocation="education_childcare_assessment"
    />
  );
}
