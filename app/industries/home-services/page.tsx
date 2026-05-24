import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  {
    title: "Calls arrive when the team is already moving",
    text: "Dispatchers, owners, technicians, estimators, and office staff are often balancing jobs in progress, urgent calls, customer questions, property-manager requests, and schedule changes at the same time.",
  },
  {
    title: "Missed calls turn into missed revenue",
    text: "Home service customers often call the next company if they cannot get a quick answer, especially for HVAC, plumbing, electrical, restoration, roofing, pest control, garage doors, or urgent repair work.",
  },
  {
    title: "The answer depends on operational context",
    text: "The right next step depends on service area, technician availability, job type, customer history, warranty status, membership plan, property access, calendar rules, and escalation priority.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Answer or recover the call",
    text: "AI handles live calls, missed-call follow-up, after-hours intake, website inquiries, or property-manager requests and captures the issue, location, urgency, and contact details.",
  },
  {
    step: "02",
    title: "Apply service rules",
    text: "The workflow checks approved scripts, service areas, job categories, booking windows, emergency rules, membership notes, property access notes, warranty status, or customer records.",
  },
  {
    step: "03",
    title: "Create the next action",
    text: "The system books the appointment, creates a dispatch task, sends an estimate follow-up, notifies the right person, or routes the case for human review.",
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
  {
    label: "Property maintenance requests",
    outcome: "Capture tenant, owner, building, access, urgency, and photo/document context before routing maintenance requests to the right coordinator or technician.",
  },
  {
    label: "Maintenance plans and repeat customers",
    outcome: "Support reminders, renewals, seasonal outreach, review requests, and service-history follow-up without relying on manual staff memory.",
  },
];

const servicePaths = [
  {
    title: "Missed-Call & Dispatch Agent",
    description: "A focused solution for missed-call recovery, after-hours intake, booking handoff, dispatch notes, estimate follow-up, and staff escalation.",
    href: "/solutions/home-services-missed-call-dispatch-agent",
    cta: "View solution",
  },
  {
    title: "AI Voice for inbound calls",
    description: "A voice-led starting point for answering routine calls, qualifying service requests, recovering missed calls, and routing urgent issues.",
    href: "/services/ai-voice",
    cta: "Explore AI Voice",
  },
  {
    title: "Sales follow-up agent",
    description: "A follow-up workflow for open estimates, maintenance plans, abandoned forms, financing questions, and review or referral requests.",
    cta: "Discuss this path",
  },
  {
    title: "Custom operations layer",
    description: "A stronger fit for larger operators that need intake queues, location rules, approvals, franchise reporting, or property-maintenance workflows in one place.",
    href: "/services/custom-ai-software",
    cta: "Explore Custom Software",
  },
];

const sectorShifts = [
  {
    title: "Speed to response is becoming a sales advantage",
    text: "Customers usually do not want to wait for a callback when a repair, replacement, or urgent service need is active. Fast response can protect revenue before the quote process starts.",
  },
  {
    title: "Owners need more leverage without adding admin headcount",
    text: "A well-designed agent can absorb routine intake and follow-up while office staff focus on exceptions, customer relationships, scheduling decisions, estimates, and technician support.",
  },
  {
    title: "Trust depends on handoff quality",
    text: "The agent should not guess at pricing, emergency commitments, access constraints, warranties, or technician availability. It should collect context and route decisions with clear ownership.",
  },
];

const systemGroups = [
  { title: "Customer channels", items: ["Phone", "Missed calls", "Website forms", "SMS", "Chat"] },
  { title: "Operating systems", items: ["CRM", "Job management", "Calendar", "Dispatch board", "Estimate tracker", "Property notes"] },
  { title: "Team workflow", items: ["Booking task", "Technician note", "Owner alert", "Estimate follow-up", "Customer confirmation", "KPI reporting"] },
];

const controls = [
  "Emergency, safety, warranty, pricing, access, insurance, and unusual customer situations can route to staff instead of being handled automatically.",
  "Approved scripts keep responses aligned with your service area, brand, booking rules, financing language, and escalation standards.",
  "Dispatch and calendar logic can respect technician availability, service categories, locations, after-hours rules, memberships, and business-hour constraints.",
  "Every automated interaction can log the customer, request, source, action, handoff owner, and final outcome for review.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one high-volume workflow, such as missed-call recovery, after-hours intake, booking requests, property-maintenance intake, or estimate follow-up for a specific service line."],
  ["Pilot", "Run real calls with staff review, track booked jobs, response speed, escalation rate, and customer experience quality."],
  ["Expand", "Add estimate follow-up, maintenance plan outreach, technician handoffs, property-manager workflows, review requests, or additional service locations."],
];

const confidenceNotes = [
  "Start with a bounded call or follow-up workflow before automating broader dispatch decisions.",
  "Measure booked appointments, recovered leads, response time, estimate follow-up completion, and staff interruptions avoided.",
  "Keep human approval for pricing, emergency commitments, property access exceptions, edge cases, and sensitive customer situations.",
];

export default function HomeServicesPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Home services"
      title="AI voice and workflow automation for high-value home service teams."
      description="We help HVAC, plumbing, electrical, restoration, roofing, pest control, cleaning, landscaping, property maintenance, and multi-location service teams recover missed demand, route service requests, follow up on estimates, and reduce front-office admin without losing control of customer experience."
      primaryCta={{ label: "Explore AI Voice", href: "/services/ai-voice" }}
      image={{ src: "/images/industries/home-services.avif", alt: "Home services team coordinating calls, booking, and dispatch work" }}
      typicalRequest="Can someone come today, and can you text me the earliest appointment?"
      diagnosisTitle="Home service teams lose margin when routine communication pulls skilled people away from booked work, estimates, and customer decisions."
      frictionAreas={frictionAreas}
      workflowTitle="The best home services agent does not just answer. It books, routes, confirms, and documents."
      workflowDescription="Voice is often the right entry point, but the value comes when every call connects to the calendar, CRM, dispatch process, property notes, staff notification, customer follow-up, and KPI reporting."
      workflowPath={workflowPath}
      valueTitle="Start where response speed and follow-up directly affect revenue."
      valueDescription="Home service automation should prove value quickly. The strongest first workflows are usually tied to recovered leads, booked appointments, estimate follow-up, maintenance requests, cleaner handoffs, or reduced front-office interruption."
      valuePatterns={valuePatterns}
      serviceTitle="Start with the first workflow that can pay for itself."
      serviceDescription="A home services deployment can begin with voice, dispatch intake, property-maintenance intake, or follow-up automation, then expand once booked jobs, response time, and staff capacity improve."
      servicePaths={servicePaths}
      sectorTitle="Customer expectations are getting faster while office capacity stays limited."
      sectorDescription="The useful shift is not replacing your team. It is giving them a reliable support layer for intake, routing, follow-up, and exception handling."
      sectorShifts={sectorShifts}
      systemsTitle="The agent should work inside the tools that already run the day."
      systemsDescription="The first workflow can connect calls and messages to your CRM, calendar, dispatch board, job management system, estimate tracker, property notes, notifications, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Keep pricing, dispatch judgment, access issues, and urgent exceptions under human control."
      controlsDescription="Home service workflows affect revenue, customer trust, technician time, property access, and safety. Automation should support the team with clear boundaries and traceable handoffs."
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
