import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  {
    title: "Calls arrive when the team is already moving",
    text: "Dispatchers, owners, technicians, and office staff are often balancing jobs in progress, urgent calls, customer questions, and schedule changes at the same time.",
  },
  {
    title: "Missed calls turn into missed revenue",
    text: "Home service customers often call the next company if they cannot get a quick answer, especially for HVAC, plumbing, electrical, restoration, or urgent repair work.",
  },
  {
    title: "The answer depends on operational context",
    text: "The right next step depends on service area, technician availability, job type, customer history, warranty status, calendar rules, and escalation priority.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Answer or recover the call",
    text: "AI handles live calls, missed-call follow-up, after-hours intake, or website inquiries and captures the issue, location, urgency, and contact details.",
  },
  {
    step: "02",
    title: "Apply service rules",
    text: "The workflow checks approved scripts, service areas, job categories, booking windows, emergency rules, membership notes, or customer records.",
  },
  {
    step: "03",
    title: "Create the next action",
    text: "The system books the appointment, creates a dispatch task, sends a quote follow-up, notifies the right person, or routes the case for human review.",
  },
  {
    step: "04",
    title: "Close the loop",
    text: "Customers receive confirmation, CRM notes are logged, staff see the context, and KPI events track calls handled, jobs booked, and escalations.",
  },
];

const valuePatterns = [
  {
    label: "Missed-call recovery",
    outcome: "Respond quickly when staff are on another call, in the field, or after hours so more high-intent leads turn into booked appointments.",
  },
  {
    label: "Booking and dispatch intake",
    outcome: "Collect the right job details, service location, urgency, equipment notes, and preferred times before staff or technicians step in.",
  },
  {
    label: "Quote and estimate follow-up",
    outcome: "Keep open estimates moving with timely follow-up, customer questions, reminders, CRM updates, and human handoff when pricing needs review.",
  },
];

const servicePaths = [
  {
    title: "AI Voice for inbound calls",
    description: "A voice-led starting point for answering routine calls, qualifying service requests, recovering missed calls, and routing urgent issues.",
    href: "/services/ai-voice",
    cta: "Explore AI Voice",
  },
  {
    title: "Dispatch workflow agent",
    description: "A focused workflow pattern for job intake, calendar checks, technician handoff, customer confirmation, and operational logging.",
    cta: "Discuss this path",
  },
  {
    title: "Sales follow-up agent",
    description: "A follow-up workflow for open estimates, maintenance plans, abandoned forms, financing questions, and review or referral requests.",
    cta: "Discuss this path",
  },
];

const sectorShifts = [
  {
    title: "Speed to response is becoming a sales advantage",
    text: "Customers usually do not want to wait for a callback when a repair, replacement, or urgent service need is active. Fast response can protect revenue before the quote process starts.",
  },
  {
    title: "Owners need more leverage without adding admin headcount",
    text: "A well-designed agent can absorb routine intake and follow-up while office staff focus on exceptions, customer relationships, scheduling decisions, and technician support.",
  },
  {
    title: "Trust depends on handoff quality",
    text: "The agent should not guess at pricing, emergency commitments, or technician availability. It should collect context and route decisions with clear ownership.",
  },
];

const systemGroups = [
  { title: "Customer channels", items: ["Phone", "Missed calls", "Website forms", "SMS", "Chat"] },
  { title: "Operating systems", items: ["CRM", "Job management", "Calendar", "Dispatch board", "Estimate tracker"] },
  { title: "Team workflow", items: ["Booking task", "Technician note", "Owner alert", "Customer confirmation", "KPI reporting"] },
];

const controls = [
  "Emergency, safety, warranty, pricing, and unusual customer situations can route to staff instead of being handled automatically.",
  "Approved scripts keep responses aligned with your service area, brand, booking rules, and escalation standards.",
  "Dispatch and calendar logic can respect technician availability, service categories, locations, and business-hour constraints.",
  "Every automated interaction can log the customer, request, source, action, handoff owner, and final outcome for review.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one high-volume workflow, such as missed-call recovery, after-hours intake, or booking requests for a specific service line."],
  ["Pilot", "Run real calls with staff review, track booked jobs, response speed, escalation rate, and customer experience quality."],
  ["Expand", "Add estimate follow-up, maintenance plan outreach, technician handoffs, review requests, or additional service locations."],
];

const confidenceNotes = [
  "Start with a bounded call or follow-up workflow before automating broader dispatch decisions.",
  "Measure booked appointments, recovered leads, response time, and staff interruptions avoided.",
  "Keep human approval for pricing, emergency commitments, edge cases, and sensitive customer situations.",
];

export default function HomeServicesPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Home services"
      title="AI voice and workflow automation for calls, booking, dispatch, and follow-up."
      description="We help HVAC, plumbing, electrical, cleaning, landscaping, restoration, and other home service teams recover missed demand, route service requests, and reduce front-office admin without losing control of customer experience."
      primaryCta={{ label: "Explore AI Voice", href: "/services/ai-voice" }}
      image={{ src: "/images/industries/home-services.avif", alt: "Home services team coordinating calls, booking, and dispatch work" }}
      typicalRequest="Can someone come today, and can you text me the earliest appointment?"
      diagnosisTitle="Home service teams lose margin when routine communication pulls skilled people away from the work only they can do."
      frictionAreas={frictionAreas}
      workflowTitle="The best home services agent does not just answer. It books, routes, confirms, and documents."
      workflowDescription="Voice is often the right entry point, but the value comes when every call connects to the calendar, CRM, dispatch process, staff notification, customer follow-up, and KPI reporting."
      workflowPath={workflowPath}
      valueTitle="Start where response speed and follow-up directly affect revenue."
      valueDescription="Home service automation should prove value quickly. The strongest first workflows are usually tied to recovered leads, booked appointments, cleaner handoffs, or reduced front-office interruption."
      valuePatterns={valuePatterns}
      serviceTitle="Start with the first workflow that can pay for itself."
      serviceDescription="A home services deployment can begin with voice, dispatch intake, or follow-up automation, then expand once booked jobs, response time, and staff capacity improve."
      servicePaths={servicePaths}
      sectorTitle="Customer expectations are getting faster while office capacity stays limited."
      sectorDescription="The useful shift is not replacing your team. It is giving them a reliable support layer for intake, routing, follow-up, and exception handling."
      sectorShifts={sectorShifts}
      systemsTitle="The agent should work inside the tools that already run the day."
      systemsDescription="The first workflow can connect calls and messages to your CRM, calendar, dispatch board, job management system, notifications, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Keep pricing, dispatch judgment, and urgent exceptions under human control."
      controlsDescription="Home service workflows affect revenue, customer trust, technician time, and safety. Automation should support the team with clear boundaries and traceable handoffs."
      controls={controls}
      rolloutTitle="A practical rollout helps cautious owners see value before expanding."
      rolloutDescription="The first milestone should be narrow enough to launch quickly, measurable enough to justify spend, and clear enough that staff trust when the agent should act or escalate."
      rollout={rollout}
      confidenceTitle="The first project should connect cost to real call volume and business impact."
      confidenceDescription="Voice automation costs depend on handled minutes, workflow complexity, model choices, integrations, monitoring, and support. We recommend exposing the cost drivers clearly while tying the first pilot to recovered leads and booked work."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["home-services-dispatch", "managed-ai-operations-rhythm"]}
      sourcePage="/industries/home-services"
      ctaLocation="home_services_assessment"
    />
  );
}
