import { elevenLabsAgents } from "@/data/elevenlabs";
import type { SolutionSlug } from "@/data/solutions";

export interface RealityItem {
  label: string;
  title: string;
  text: string;
}

export interface SupportCard {
  title: string;
  text: string;
}

export interface ControlItem {
  title: string;
  text: string;
}

export interface RolloutStep {
  step: string;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DemoProvider {
  id: string;
  agentId: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  agentLine: string;
  callerLine: string;
}

export interface TradeVariant {
  slug: SolutionSlug;
  heroTitle: string;
  heroDescription: string;
  dashboardTitle: string;
  dashboardRows: [string, string, string][];
  dashboardNote: string;
  realityEyebrow: string;
  realityTitle: string;
  realityDescription: string;
  realityItems: RealityItem[];
  supportTitle: string;
  supportDescription: string;
  supportCards: SupportCard[];
  demoTitle: string;
  demoDescription: string;
  demoNote: string;
  demoProvider: DemoProvider;
  controlDescription: string;
  controls: ControlItem[];
  rolloutDescription: string;
  rollout: RolloutStep[];
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqs: FaqItem[];
  walkthroughDescription: string;
  ctaWorkflowInterest: string;
  ctaModalDescription: string;
  ctaPrivacyNote: string;
}

export const tradeVariants: TradeVariant[] = [
  {
    slug: "hvac-service-call-agent",
    heroTitle: "Never lose another HVAC service call to voicemail.",
    heroDescription:
      "Automate4U's voice agent answers HVAC service calls day and night, captures the issue, system details, and address, and gets emergency no-heat or no-cool calls to a technician fast.",
    dashboardTitle: "Today's HVAC service calls",
    dashboardRows: [
      ["No heat - furnace down", "Emergency, address captured", "Dispatch on-call tech"],
      ["AC tune-up request", "Existing customer, unit model", "Schedule maintenance visit"],
      ["New install estimate", "Home size, system type", "Create sales follow-up task"],
      ["Maintenance plan question", "Plan details, billing date", "Route to office"],
    ],
    dashboardNote: "Designed to triage urgency first, so emergency comfort calls never sit in a queue.",
    realityEyebrow: "HVAC dispatch reality",
    realityTitle: "HVAC calls are urgent, seasonal, and constant.",
    realityDescription:
      "Every call can be a no-heat emergency, a maintenance reschedule, or a new install lead, and techs in the field can't always pick up.",
    realityItems: [
      { label: "01", title: "Comfort emergencies can't wait", text: "No-heat and no-cool calls need fast triage so dispatch can get a technician moving the same day." },
      { label: "02", title: "Techs are in the field, not at a desk", text: "Calls often go to voicemail during peak season because the team is on roofs, in attics, and on job sites." },
      { label: "03", title: "Maintenance plans need consistent follow-up", text: "Seasonal tune-ups, filter reminders, and plan renewals are easy to lose track of without a reliable intake process." },
      { label: "04", title: "New install leads need fast response", text: "System replacement and new install inquiries often go to whichever company calls back first." },
    ],
    supportTitle: "Designed to support dispatch, not replace it.",
    supportDescription: "The agent handles intake and triage so your office and field teams can focus on diagnosing problems and getting to the next job.",
    supportCards: [
      { title: "Emergency triage & dispatch", text: "Identify no-heat, no-cool, and safety-related calls and route them for immediate scheduling or technician dispatch." },
      { title: "Maintenance & tune-up scheduling", text: "Book seasonal maintenance, filter replacements, and plan renewals around your existing calendar and service areas." },
      { title: "New install & estimate intake", text: "Capture system age, home size, and project details so sales can follow up with a useful first conversation." },
      { title: "After-hours & overflow coverage", text: "Answer calls during peak season, after hours, and when every line is busy, so leads and emergencies don't go to voicemail." },
    ],
    demoTitle: "Hear how an HVAC dispatch call actually sounds.",
    demoDescription: "Designed to sound calm and capable during real no-heat, no-cool, and maintenance scheduling calls.",
    demoNote: "During a walkthrough, we can review approved examples and map the call scenarios that matter most to your service area.",
    demoProvider: {
      id: "hvac-demo",
      agentId: elevenLabsAgents.homeServicesDemo,
      label: "HVAC Dispatch Assistant",
      title: "HVAC Dispatch Assistant",
      subtitle: "Emergency triage, maintenance scheduling, and dispatch handoff",
      description: "Speak naturally about a no-heat emergency, a maintenance tune-up, or a new system estimate.",
      tags: ["Emergency triage", "Maintenance scheduling", "New install intake", "Dispatch handoff"],
      agentLine: "Thanks for calling Summit Home Services. I can help with heating and cooling issues, schedule a maintenance visit, or get an estimate started. What's going on today?",
      callerLine: "Our furnace stopped working this morning and it's getting cold in here. Can someone come out today?",
    },
    controlDescription: "The agent operates inside the triage rules, service area, and pricing guardrails you set, and hands off anything that needs a dispatcher's judgment.",
    controls: [
      { title: "Configure emergency triage rules", text: "Define what counts as a no-heat, no-cool, or safety emergency and how those calls get escalated." },
      { title: "Set service area & scheduling rules", text: "Keep bookings inside your service area, crew availability, and appointment windows." },
      { title: "Protect pricing conversations", text: "Estimate ranges and pricing-sensitive questions can route to your sales or office team instead of being quoted automatically." },
      { title: "Adjust by season", text: "Update scripts and triage priorities as call volume shifts between heating season, cooling season, and maintenance campaigns." },
    ],
    rolloutDescription: "We start with the call type that creates the most missed-revenue risk, usually emergency triage or after-hours intake, and expand from there.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your dispatch process, service area, crew scheduling, and what counts as an emergency versus routine call." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your triage rules, scheduling system, and approved pricing language, then tested against real call scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor call outcomes, review dispatch accuracy with your team, and expand to maintenance, sales, or after-hours coverage once it's working well." },
    ],
    faqEyebrow: "Questions HVAC owners ask",
    faqTitle: "Make sure emergency calls are handled the way you want.",
    faqDescription: "Comfort emergencies and dispatch decisions should stay reliable. The agent should support your office, not create new risk.",
    faqs: [
      { question: "What happens with a true emergency call?", answer: "The agent identifies no-heat, no-cool, gas smell, or other urgent situations using your rules and routes them for immediate dispatch or a callback from your team." },
      { question: "Can it give pricing over the phone?", answer: "Only if you want it to. Most teams keep estimates and pricing conversations with staff, while the agent captures the details needed to follow up." },
      { question: "Will it work during our busiest season?", answer: "Yes. It's built to handle overflow and after-hours volume during heating and cooling season without missing emergency calls." },
      { question: "How does it hand off to dispatch?", answer: "Call details, urgency level, and customer information are captured and routed to your dispatch board or office team based on rules you define." },
    ],
    walkthroughDescription: "See real call scenarios and explore how a dispatch agent could cover after-hours and overflow calls for your team.",
    ctaWorkflowInterest: "HVAC dispatch and emergency triage voice agent",
    ctaModalDescription: "Tell us about your service area, crew scheduling, and how you currently triage emergency calls. We'll review whether a dispatch agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Emergency triage rules and pricing language stay under your team's review until they're validated.",
  },
  {
    slug: "plumbing-service-call-agent",
    heroTitle: "Answer every plumbing call, especially the emergencies.",
    heroDescription:
      "Automate4U's voice agent answers plumbing calls around the clock, captures the issue and address, and flags burst pipes, active leaks, and no-water emergencies for immediate dispatch.",
    dashboardTitle: "Today's plumbing service calls",
    dashboardRows: [
      ["Burst pipe - active leak", "Emergency, water shutoff confirmed", "Dispatch on-call plumber"],
      ["Clogged drain", "Existing customer, unit address", "Schedule next-day visit"],
      ["Water heater replacement", "Age and type captured", "Create sales follow-up task"],
      ["Billing question", "Invoice number provided", "Route to office"],
    ],
    dashboardNote: "Designed to confirm whether water is shut off before anything else, then route accordingly.",
    realityEyebrow: "Plumbing dispatch reality",
    realityTitle: "Plumbing emergencies don't wait for office hours.",
    realityDescription:
      "A burst pipe at 11pm and a routine drain cleaning request need very different handling, and both often arrive while your team is on another job.",
    realityItems: [
      { label: "01", title: "Water emergencies need immediate triage", text: "Burst pipes, active leaks, and no-water situations need fast questions about shutoff valves and immediate dispatch." },
      { label: "02", title: "Routine requests still need accurate intake", text: "Clogs, fixture installs, and inspections need the right address, access details, and scheduling preferences captured correctly." },
      { label: "03", title: "After-hours calls are common", text: "Plumbing emergencies happen nights and weekends, when office staff usually aren't available to answer." },
      { label: "04", title: "Estimate requests need follow-up", text: "Water heater replacements and repipe jobs need details captured so estimators can follow up with useful context." },
    ],
    supportTitle: "Designed to support your office, not replace it.",
    supportDescription: "The agent handles intake and emergency triage so your team can focus on the job in front of them and the next dispatch.",
    supportCards: [
      { title: "Emergency leak & shutoff triage", text: "Ask the right safety questions for active leaks and burst pipes, then route for immediate dispatch." },
      { title: "Routine service scheduling", text: "Book drain cleaning, fixture repairs, and inspections around your service area and crew availability." },
      { title: "Replacement & repipe estimate intake", text: "Capture water heater age, fixture counts, and project scope so estimators can follow up efficiently." },
      { title: "After-hours & overflow coverage", text: "Cover nights, weekends, and busy periods so emergencies and new leads don't go to voicemail." },
    ],
    demoTitle: "Hear how a plumbing emergency call actually sounds.",
    demoDescription: "Designed to stay calm and ask the right safety questions during burst pipe, leak, and no-water emergencies.",
    demoNote: "During a walkthrough, we can review approved examples and map the emergency scenarios specific to your team.",
    demoProvider: {
      id: "plumbing-demo",
      agentId: elevenLabsAgents.homeServicesDemo,
      label: "Plumbing Dispatch Assistant",
      title: "Plumbing Dispatch Assistant",
      subtitle: "Emergency leak triage, scheduling, and dispatch handoff",
      description: "Speak naturally about a burst pipe, a clogged drain, or a water heater replacement.",
      tags: ["Emergency leak triage", "Service scheduling", "Replacement estimate intake", "Dispatch handoff"],
      agentLine: "Thanks for calling Summit Home Services. I can help with a plumbing issue, schedule a repair, or get a replacement estimate started. What's going on?",
      callerLine: "We have water leaking from under the kitchen sink and it's getting worse. Can someone come out as soon as possible?",
    },
    controlDescription: "The agent follows the safety triage and scheduling rules you define and hands sensitive or pricing-related questions to your team.",
    controls: [
      { title: "Configure leak & emergency triage", text: "Define the shutoff and safety questions the agent should ask for active leaks and water emergencies." },
      { title: "Set service area & scheduling rules", text: "Keep bookings inside your coverage area and aligned with crew availability and travel time." },
      { title: "Protect estimate & pricing conversations", text: "Replacement and repipe pricing can stay with your estimators while the agent captures project details." },
      { title: "Adjust for seasonal demand", text: "Update triage priorities and scheduling windows during freeze events or high-volume periods." },
    ],
    rolloutDescription: "We typically start with after-hours emergency triage, since that's where missed calls carry the most risk, then expand to scheduling and estimates.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your dispatch process, service area, on-call rotation, and what counts as an emergency." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your safety questions, scheduling system, and pricing guardrails, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor outcomes, review dispatch accuracy with your team, and expand to estimates and routine scheduling once it's proven." },
    ],
    faqEyebrow: "Questions plumbing owners ask",
    faqTitle: "Make sure emergency calls get handled correctly.",
    faqDescription: "Water emergencies need fast, accurate triage. The agent should support that process without adding risk.",
    faqs: [
      { question: "What if the caller doesn't know how to shut off the water?", answer: "The agent can walk through basic shutoff guidance you approve, then flag the call for immediate dispatch regardless." },
      { question: "Can it tell the difference between an emergency and a routine call?", answer: "Yes. Triage rules you define determine which calls get flagged for immediate dispatch versus normal scheduling." },
      { question: "Does it give repair pricing?", answer: "Only if you want it to. Most teams keep pricing for repairs and replacements with staff, while the agent captures the details." },
      { question: "How fast does dispatch get notified for emergencies?", answer: "Emergency calls are flagged and routed to your on-call process immediately, based on the rules and contacts you provide." },
    ],
    walkthroughDescription: "See real call scenarios and explore how an emergency-aware dispatch agent could cover your after-hours and overflow calls.",
    ctaWorkflowInterest: "Plumbing dispatch and emergency triage voice agent",
    ctaModalDescription: "Tell us about your on-call process, service area, and how emergency calls are currently handled. We'll review whether a dispatch agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Emergency triage steps and pricing language stay under your team's review until they're validated.",
  },
  {
    slug: "electrical-service-call-agent",
    heroTitle: "Capture every electrical service call safely and accurately.",
    heroDescription:
      "Automate4U's voice agent answers electrical service calls, asks the right safety questions for outages and hazards, and gets panel, wiring, and installation requests to the right technician.",
    dashboardTitle: "Today's electrical service calls",
    dashboardRows: [
      ["No power - partial outage", "Safety questions confirmed", "Dispatch on-call electrician"],
      ["Outlet not working", "Existing customer, address", "Schedule service visit"],
      ["Panel upgrade inquiry", "Home age, panel size", "Create sales follow-up task"],
      ["EV charger install question", "Vehicle and panel details", "Route to estimator"],
    ],
    dashboardNote: "Designed to ask safety-first questions before anything else for power loss and hazard calls.",
    realityEyebrow: "Electrical dispatch reality",
    realityTitle: "Electrical calls range from routine to genuinely dangerous.",
    realityDescription:
      "A flickering outlet and a burning smell from a panel both come in as 'my power isn't working,' and the response needs to match the risk.",
    realityItems: [
      { label: "01", title: "Safety hazards need immediate identification", text: "Burning smells, sparking outlets, and partial outages need fast safety questions and urgent routing." },
      { label: "02", title: "Routine requests still need full details", text: "Outlet repairs, fixture installs, and panel questions need address, access, and scope captured accurately." },
      { label: "03", title: "Upgrade projects need qualifying detail", text: "Panel upgrades and EV charger installs need home age, panel size, and project scope before an estimate is useful." },
      { label: "04", title: "Calls often arrive while techs are on-site elsewhere", text: "Electricians can't always step away from an active job to take a new call." },
    ],
    supportTitle: "Designed to support dispatch and safety triage.",
    supportDescription: "The agent handles intake and safety screening so your team can focus on diagnosing issues and completing jobs safely.",
    supportCards: [
      { title: "Safety hazard triage", text: "Ask approved safety questions for outages, sparking, or burning smells and flag urgent calls for immediate routing." },
      { title: "Service & repair scheduling", text: "Book outlet repairs, fixture installs, and troubleshooting visits around your service area and availability." },
      { title: "Panel & EV charger project intake", text: "Capture home age, panel size, and project scope so estimators can follow up with useful context." },
      { title: "After-hours & overflow coverage", text: "Cover nights, weekends, and busy periods so safety calls and new leads don't go to voicemail." },
    ],
    demoTitle: "Hear how an electrical safety call actually sounds.",
    demoDescription: "Designed to ask calm, approved safety questions during outage, hazard, and project inquiry calls.",
    demoNote: "During a walkthrough, we can review approved safety scripts and map the call scenarios specific to your team.",
    demoProvider: {
      id: "electrical-demo",
      agentId: elevenLabsAgents.homeServicesDemo,
      label: "Electrical Dispatch Assistant",
      title: "Electrical Dispatch Assistant",
      subtitle: "Safety triage, scheduling, and project intake",
      description: "Speak naturally about a power issue, an outlet repair, or a panel upgrade project.",
      tags: ["Safety hazard triage", "Service scheduling", "Panel & EV project intake", "Dispatch handoff"],
      agentLine: "Thanks for calling Summit Home Services. I can help with an electrical issue, schedule a repair, or get a project estimate started. What's going on?",
      callerLine: "Half of our outlets stopped working and one of them has a burning smell. Is that something you can look at today?",
    },
    controlDescription: "The agent follows the safety screening and scheduling rules you define and routes anything hazardous or pricing-related to your team.",
    controls: [
      { title: "Configure safety screening rules", text: "Define the questions and red flags that trigger urgent routing for outages, sparking, or burning smells." },
      { title: "Set service area & scheduling rules", text: "Keep bookings inside your coverage area and aligned with technician availability." },
      { title: "Protect estimate & pricing conversations", text: "Panel upgrade and EV charger pricing can stay with your estimators while the agent captures project scope." },
      { title: "Adjust as codes & offerings change", text: "Update intake questions as service offerings, code requirements, or seasonal demand change." },
    ],
    rolloutDescription: "We typically start with safety triage and after-hours intake, since that's where missed calls carry the most risk, then expand to project intake.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your dispatch process, service area, on-call rotation, and the safety questions your team relies on." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your safety screening, scheduling system, and pricing guardrails, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor outcomes, review safety triage accuracy with your team, and expand to project intake once it's proven." },
    ],
    faqEyebrow: "Questions electrical contractors ask",
    faqTitle: "Make sure hazard calls are screened correctly.",
    faqDescription: "Electrical safety questions need to be accurate and consistent. The agent should support that, not improvise it.",
    faqs: [
      { question: "Who decides what counts as a safety hazard?", answer: "You do. Safety screening questions and escalation triggers are built from your team's existing protocols." },
      { question: "Can it tell someone to shut off their breaker?", answer: "Only with guidance you've approved in advance. Otherwise it focuses on capturing details and routing for urgent dispatch." },
      { question: "Does it quote panel upgrade or EV charger pricing?", answer: "Only if you want it to. Most teams keep project pricing with estimators while the agent captures scope details." },
      { question: "How are urgent calls routed?", answer: "Calls flagged as hazards are routed to your on-call process immediately, based on rules and contacts you provide." },
    ],
    walkthroughDescription: "See real call scenarios and explore how a safety-aware dispatch agent could cover your after-hours and overflow calls.",
    ctaWorkflowInterest: "Electrical dispatch and safety triage voice agent",
    ctaModalDescription: "Tell us about your safety protocols, service area, and how calls are currently triaged. We'll review whether a dispatch agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Safety screening steps and pricing language stay under your team's review until they're validated.",
  },
  {
    slug: "chiropractic-pt-front-desk-agent",
    heroTitle: "Keep your chiropractic or PT schedule full without overloading the front desk.",
    heroDescription:
      "Automate4U's voice agent answers calls for new patient inquiries, reschedules, and insurance questions, so your front desk can focus on patients in the office.",
    dashboardTitle: "Today's patient calls",
    dashboardRows: [
      ["New patient inquiry", "Insurance and injury type", "Schedule new patient exam"],
      ["Reschedule request", "Existing appointment found", "Update calendar"],
      ["Insurance question", "Plan details captured", "Route to billing"],
      ["Referral from physician", "Referral source noted", "Create intake task"],
    ],
    dashboardNote: "Designed to keep new patient intake moving without interrupting care in progress.",
    realityEyebrow: "Chiropractic & PT front desk reality",
    realityTitle: "Front desk staff are juggling patients in the office and patients on the phone.",
    realityDescription:
      "New patient calls, reschedules, and insurance questions often arrive while staff are checking patients in or assisting during treatment.",
    realityItems: [
      { label: "01", title: "New patient calls need consistent intake", text: "Injury type, referral source, and insurance information need to be captured accurately before the first visit can be scheduled." },
      { label: "02", title: "Reschedules happen constantly", text: "Patients call to move appointments around work, pain levels, and availability, often multiple times per week." },
      { label: "03", title: "Insurance questions take time to research", text: "Coverage and billing questions often require staff to step away from patients to check plan details." },
      { label: "04", title: "Calls arrive during treatment hours", text: "The front desk is often short-staffed exactly when patients are calling, because they're also checking patients in and out." },
    ],
    supportTitle: "Designed to support your front desk, not replace it.",
    supportDescription: "The agent handles routine scheduling and intake so your team can stay focused on patients who are in the office.",
    supportCards: [
      { title: "New patient intake & scheduling", text: "Capture injury type, referral source, and insurance details, then schedule the first visit around your availability." },
      { title: "Reschedule & cancellation handling", text: "Let patients reschedule or cancel without tying up staff, while keeping your calendar accurate." },
      { title: "Insurance & billing question routing", text: "Capture plan details and route coverage or billing questions to the right person." },
      { title: "After-hours & overflow coverage", text: "Answer calls during busy treatment blocks, lunch, and after hours so patients aren't sent to voicemail." },
    ],
    demoTitle: "Hear how a new patient call actually sounds.",
    demoDescription: "Designed to sound warm and professional while collecting the details your front desk needs.",
    demoNote: "During a walkthrough, we can review approved examples and map the call scenarios that matter most to your practice.",
    demoProvider: {
      id: "chiropractic-pt-demo",
      agentId: elevenLabsAgents.healthcareWellnessDemo,
      label: "Chiropractic & PT Front Desk Assistant",
      title: "Chiropractic & PT Front Desk Assistant",
      subtitle: "New patient intake, scheduling, and insurance routing",
      description: "Speak naturally about a new patient inquiry, a reschedule, or an insurance question.",
      tags: ["New patient intake", "Scheduling & reschedules", "Insurance routing", "Staff handoff"],
      agentLine: "Thanks for calling Willow Creek Wellness. I can help schedule a visit, reschedule an appointment, or answer general questions about our practice. How can I help?",
      callerLine: "My doctor referred me for lower back pain and I'd like to schedule a first visit. Do you take my insurance?",
    },
    controlDescription: "The agent follows the intake and scheduling rules you define and routes clinical or billing-sensitive questions to your staff.",
    controls: [
      { title: "Configure new patient intake", text: "Define the questions asked for new patients, including injury type, referral source, and insurance information." },
      { title: "Set scheduling & provider rules", text: "Keep bookings aligned with provider availability, visit types, and appointment lengths." },
      { title: "Protect clinical questions", text: "Questions about diagnosis, treatment plans, or symptoms can route to clinical staff instead of being answered by the agent." },
      { title: "Adjust by location or provider", text: "Multi-location or multi-provider practices can use shared standards while customizing scheduling and routing." },
    ],
    rolloutDescription: "We typically start with new patient intake and reschedules, since those are the highest-volume calls, then expand to insurance and billing routing.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your scheduling system, intake questions, provider availability, and escalation rules." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your intake process, scheduling rules, and approved language, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor outcomes, review scheduling accuracy with your team, and expand to insurance and billing routing once it's proven." },
    ],
    faqEyebrow: "Questions practice owners ask",
    faqTitle: "Keep patient experience and clinical boundaries protected.",
    faqDescription: "Scheduling and intake should be smoother, but clinical judgment always stays with your providers.",
    faqs: [
      { question: "Will it answer questions about treatment or diagnosis?", answer: "No. Clinical questions are routed to your staff. The agent focuses on scheduling, intake, and administrative questions." },
      { question: "Can it verify insurance coverage?", answer: "It can capture plan details and route them to billing for verification, depending on how you'd like that handled." },
      { question: "What if a patient describes a medical emergency?", answer: "Calls describing urgent or emergency symptoms are flagged for immediate staff attention based on rules you define." },
      { question: "Can each provider have different scheduling rules?", answer: "Yes. Visit types, durations, and availability can be configured per provider or location." },
    ],
    walkthroughDescription: "See real call scenarios and explore how a front desk agent could support new patient intake and scheduling for your practice.",
    ctaWorkflowInterest: "Chiropractic and physical therapy front desk voice agent",
    ctaModalDescription: "Tell us about your scheduling system, intake process, and how new patient calls are currently handled. We'll review whether a front desk agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Clinical and billing-sensitive workflows stay under staff review until policies and escalation rules are validated.",
  },
  {
    slug: "med-spa-front-desk-agent",
    heroTitle: "Turn more med spa inquiries into booked appointments.",
    heroDescription:
      "Automate4U's voice agent answers calls about treatments, pricing ranges, and availability, books consultations, and routes clinical questions to your providers.",
    dashboardTitle: "Today's med spa calls",
    dashboardRows: [
      ["Botox pricing question", "General pricing range given", "Schedule consultation"],
      ["Reschedule request", "Existing appointment found", "Update calendar"],
      ["New treatment inquiry", "Treatment interest captured", "Create follow-up task"],
      ["Membership question", "Plan details captured", "Route to front desk"],
    ],
    dashboardNote: "Designed to convert pricing and treatment questions into booked consultations.",
    realityEyebrow: "Med spa front desk reality",
    realityTitle: "Every missed call is a missed booking.",
    realityDescription:
      "Med spa calls are often pricing and availability questions from new clients who will simply call the next spa if no one answers.",
    realityItems: [
      { label: "01", title: "New client calls are time-sensitive", text: "Prospective clients calling about treatments and pricing often book with whichever spa responds first." },
      { label: "02", title: "Pricing questions need consistent answers", text: "Treatment pricing ranges, packages, and promotions need to be communicated accurately and consistently." },
      { label: "03", title: "Reschedules and cancellations are constant", text: "Clients frequently call to move appointments around their schedules, which takes front desk time." },
      { label: "04", title: "Clinical questions need provider review", text: "Questions about suitability, contraindications, or results expectations need a provider, not a front desk answer." },
    ],
    supportTitle: "Designed to support bookings, not clinical decisions.",
    supportDescription: "The agent handles pricing, scheduling, and intake so your front desk and providers can focus on the client in front of them.",
    supportCards: [
      { title: "Treatment & pricing inquiries", text: "Share approved pricing ranges and treatment information, then move interested callers toward a consultation booking." },
      { title: "Consultation & appointment scheduling", text: "Book consultations and treatments around provider availability and appointment types." },
      { title: "Reschedule & cancellation handling", text: "Let clients reschedule or cancel without tying up front desk staff." },
      { title: "Membership & promotion routing", text: "Capture membership and promotion questions and route them to the right person for follow-up." },
    ],
    demoTitle: "Hear how a med spa booking call actually sounds.",
    demoDescription: "Designed to sound friendly and informative while moving pricing questions toward a booked consultation.",
    demoNote: "During a walkthrough, we can review approved pricing language and map the call scenarios specific to your spa.",
    demoProvider: {
      id: "med-spa-demo",
      agentId: elevenLabsAgents.healthcareWellnessDemo,
      label: "Med Spa Front Desk Assistant",
      title: "Med Spa Front Desk Assistant",
      subtitle: "Treatment inquiries, pricing, and consultation booking",
      description: "Speak naturally about a treatment you're interested in, pricing, or scheduling a consultation.",
      tags: ["Treatment inquiries", "Pricing guidance", "Consultation booking", "Provider routing"],
      agentLine: "Thanks for calling Willow Creek Wellness. I can share information about our treatments, pricing, and availability, or get you scheduled for a consultation. What are you interested in?",
      callerLine: "I'm curious about Botox pricing and whether you have any openings this week for a consultation.",
    },
    controlDescription: "The agent shares only pricing and treatment information you approve, and routes clinical or suitability questions to providers.",
    controls: [
      { title: "Configure approved pricing & treatment info", text: "Define the pricing ranges, packages, and treatment descriptions the agent can share." },
      { title: "Set scheduling & provider rules", text: "Keep consultation and treatment bookings aligned with provider availability and appointment types." },
      { title: "Protect clinical & suitability questions", text: "Questions about candidacy, contraindications, or results expectations route to providers." },
      { title: "Update for promotions & seasonality", text: "Refresh approved language as promotions, seasonal offers, and treatment menus change." },
    ],
    rolloutDescription: "We typically start with new client inquiries and consultation booking, since that's where missed calls cost the most, then expand to memberships and promotions.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your treatment menu, pricing approach, scheduling system, and provider availability." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your approved pricing language and booking rules, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor booking outcomes, review call quality with your team, and expand to memberships and promotions once it's proven." },
    ],
    faqEyebrow: "Questions med spa owners ask",
    faqTitle: "Keep pricing accurate and clinical decisions with providers.",
    faqDescription: "Booking should get easier without the agent making clinical claims or promises.",
    faqs: [
      { question: "Will it make claims about treatment results?", answer: "No. The agent shares approved descriptions and pricing ranges only, and avoids making outcome promises." },
      { question: "Can it tell a client if they're a good candidate for a treatment?", answer: "No. Suitability questions are routed to a provider for a proper consultation." },
      { question: "How does it handle pricing for customized packages?", answer: "Standard pricing ranges can be shared, while custom package pricing routes to your team." },
      { question: "Can it promote current specials?", answer: "Yes, if you provide approved promotion details, the agent can mention them and help book related appointments." },
    ],
    walkthroughDescription: "See real call scenarios and explore how a booking-focused agent could help convert more inquiries for your spa.",
    ctaWorkflowInterest: "Med spa front desk voice agent",
    ctaModalDescription: "Tell us about your treatment menu, pricing approach, and how booking calls are currently handled. We'll review whether a front desk agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Pricing language and clinical boundaries stay under your team's review until they're validated.",
  },
  {
    slug: "mental-health-counseling-intake-agent",
    heroTitle: "A calmer first call for new therapy clients.",
    heroDescription:
      "Automate4U's voice agent handles new client intake calls with care, captures insurance and scheduling preferences, and immediately escalates anything that sounds like a crisis to your team.",
    dashboardTitle: "Today's intake calls",
    dashboardRows: [
      ["New client inquiry", "Insurance and availability captured", "Match with therapist"],
      ["Reschedule request", "Existing appointment found", "Update calendar"],
      ["Insurance question", "Plan details captured", "Route to billing"],
      ["Crisis language detected", "Immediate escalation", "Notify on-call clinician"],
    ],
    dashboardNote: "Designed to prioritize crisis recognition and warm handoff above everything else.",
    realityEyebrow: "Counseling intake reality",
    realityTitle: "The first call sets the tone, and it has to be handled carefully.",
    realityDescription:
      "New client calls often involve sensitive disclosures, insurance complexity, and a need for the right therapist match, all on a call that may be someone's first step toward getting help.",
    realityItems: [
      { label: "01", title: "First calls can be emotionally difficult", text: "New clients may be calling during a hard moment, and the tone of that first conversation matters." },
      { label: "02", title: "Crisis situations need immediate escalation", text: "Some calls describe situations that need a clinician's attention right away, not a scheduling conversation." },
      { label: "03", title: "Insurance and intake forms take time", text: "Verifying insurance, explaining intake paperwork, and matching clients to the right therapist all take staff time." },
      { label: "04", title: "Therapist matching depends on specifics", text: "Specialty, availability, modality, and client preferences all factor into a good first match." },
    ],
    supportTitle: "Designed with care, and with clear boundaries.",
    supportDescription: "The agent handles scheduling and intake logistics. Anything clinical, urgent, or sensitive is escalated to your team immediately.",
    supportCards: [
      { title: "Warm new client intake", text: "Collect basic information, insurance details, and scheduling preferences in a calm, supportive tone." },
      { title: "Crisis recognition & escalation", text: "Recognize language that suggests a crisis and immediately escalate to your on-call process, every time." },
      { title: "Therapist matching support", text: "Capture preferences around specialty, availability, and modality to support a good first match." },
      { title: "Insurance & scheduling logistics", text: "Handle routine scheduling, reschedules, and insurance questions so clinical staff can focus on clients." },
    ],
    demoTitle: "Hear how a new client intake call actually sounds.",
    demoDescription: "Designed to sound calm, patient, and supportive while collecting the information your intake team needs.",
    demoNote: "During a walkthrough, we'll review your crisis escalation protocol closely before anything goes live.",
    demoProvider: {
      id: "mental-health-demo",
      agentId: elevenLabsAgents.healthcareWellnessDemo,
      label: "Counseling Intake Assistant",
      title: "Counseling Intake Assistant",
      subtitle: "New client intake, scheduling, and crisis-aware escalation",
      description: "Speak naturally about scheduling a first appointment, insurance questions, or rescheduling.",
      tags: ["New client intake", "Therapist matching support", "Crisis escalation", "Insurance routing"],
      agentLine: "Thanks for calling Willow Creek Wellness. I can help schedule a first appointment, answer questions about insurance, or help you reschedule. How can I help today?",
      callerLine: "I've been thinking about starting therapy and I'm not sure where to begin. Can you help me find someone to talk to?",
    },
    controlDescription: "Crisis escalation rules are defined entirely by your clinical team and reviewed before launch. The agent never attempts to provide counseling.",
    controls: [
      { title: "Define crisis escalation language and steps", text: "Your clinical team defines exactly what language triggers escalation and what happens next, reviewed and tested before launch." },
      { title: "Set therapist matching preferences", text: "Configure the specialties, modalities, and availability information used to support matching." },
      { title: "Protect all clinical conversations", text: "The agent never discusses symptoms, diagnoses, or treatment. It focuses on logistics and escalates anything clinical." },
      { title: "Review insurance & intake language", text: "Insurance verification steps and intake paperwork explanations are configured to match your practice's process." },
    ],
    rolloutDescription: "Crisis escalation protocols are reviewed and tested first, before any scheduling or intake workflow goes live.",
    rollout: [
      { step: "01", title: "Clinical & operational discovery", text: "We review your crisis protocol, intake process, insurance handling, and therapist matching criteria with your clinical lead." },
      { step: "02", title: "Configuration & testing", text: "Crisis escalation paths are configured and tested first, then scheduling and intake flows are built and reviewed." },
      { step: "03", title: "Launch & optimization", text: "We monitor outcomes closely, review escalation accuracy with your clinical team, and expand scope only when trusted." },
    ],
    faqEyebrow: "Questions practice owners ask",
    faqTitle: "Crisis safety comes first, always.",
    faqDescription: "This workflow is only appropriate when crisis escalation is reviewed and approved by your clinical team before launch.",
    faqs: [
      { question: "What happens if someone describes a crisis?", answer: "The call is immediately escalated according to your clinical team's protocol. The agent does not attempt to handle the situation itself." },
      { question: "Does the agent ever discuss symptoms or treatment?", answer: "No. It focuses only on scheduling, insurance, and intake logistics, and escalates clinical conversations to your team." },
      { question: "Who reviews the crisis escalation rules?", answer: "Your clinical team defines and approves these rules before anything goes live, and they can be updated at any time." },
      { question: "Can it match clients to specific therapists?", answer: "It can capture preferences around specialty, modality, and availability to support your team's matching process." },
    ],
    walkthroughDescription: "We'll start with a conversation about your crisis protocol and intake process before discussing anything else.",
    ctaWorkflowInterest: "Mental health and counseling intake voice agent",
    ctaModalDescription: "Tell us about your intake process and crisis escalation protocol. We'll review whether a carefully scoped intake agent is appropriate for your practice.",
    ctaPrivacyNote: "We respect your privacy. This workflow only proceeds with your clinical team's review and approval of all escalation rules.",
  },
  {
    slug: "montessori-preschool-voice-agent",
    heroTitle: "Help more families discover your Montessori program.",
    heroDescription:
      "Automate4U's voice assistant answers calls about enrollment, philosophy questions, and tour requests, so your director and lead teachers can stay focused on the classroom.",
    dashboardTitle: "Today's admissions calls",
    dashboardRows: [
      ["Enrollment inquiry", "Age group and start date", "Schedule a tour"],
      ["Tuition question", "Program and schedule type", "Send program guide"],
      ["Tour request", "Preferred times captured", "Add to director's calendar"],
      ["Waitlist question", "Age group, current status", "Route to admissions"],
    ],
    dashboardNote: "Designed to move enrollment questions toward a scheduled tour with the director.",
    realityEyebrow: "Montessori admissions reality",
    realityTitle: "Admissions calls often need a philosophy conversation, not just a schedule.",
    realityDescription:
      "Families calling about Montessori or preschool programs usually have questions about approach, classroom structure, and fit, in addition to availability and pricing.",
    realityItems: [
      { label: "01", title: "Families ask about philosophy and approach", text: "Many calls include questions about Montessori method, classroom structure, and daily routines that go beyond a simple schedule." },
      { label: "02", title: "Tours need to go on the director's calendar", text: "Tour requests need to be matched to the director's or admissions lead's availability, not just any open slot." },
      { label: "03", title: "Waitlist and capacity questions are common", text: "Families often want to know about waitlist position, age group openings, and timing, which changes throughout the year." },
      { label: "04", title: "Tuition and program structure vary by track", text: "Half-day, full-day, and extended care options each have different pricing and schedules to explain accurately." },
    ],
    supportTitle: "Designed to support admissions, not replace your director.",
    supportDescription: "The agent handles routine inquiries and tour scheduling so your director and teachers can focus on prospective families during visits, not phone calls during the day.",
    supportCards: [
      { title: "Enrollment & philosophy inquiries", text: "Share approved information about your program, philosophy, and age groups, and identify families ready for a tour." },
      { title: "Tour scheduling", text: "Book tours on the director's or admissions lead's calendar based on availability and preferred times." },
      { title: "Tuition & program structure questions", text: "Explain approved pricing for half-day, full-day, and extended care options, or send a program guide." },
      { title: "Waitlist & capacity routing", text: "Capture age group and timing details and route waitlist questions to admissions." },
    ],
    demoTitle: "Hear how an admissions call actually sounds.",
    demoDescription: "Designed to sound warm and knowledgeable while answering program questions and booking tours.",
    demoNote: "During a walkthrough, we can review approved program descriptions and map the call scenarios specific to your school.",
    demoProvider: {
      id: "montessori-demo",
      agentId: elevenLabsAgents.daycareDemo,
      label: "Montessori Admissions Assistant",
      title: "Montessori Admissions Assistant",
      subtitle: "Enrollment inquiries, program questions, and tour scheduling",
      description: "Speak naturally about enrollment, program philosophy, tuition, or scheduling a tour.",
      tags: ["Enrollment inquiries", "Program & philosophy questions", "Tour scheduling", "Waitlist routing"],
      agentLine: "Thanks for calling Blue Hippo Montessori. I can answer questions about our program, share tuition information, or schedule a tour with our director. How can I help?",
      callerLine: "We're looking for a Montessori program for our three-year-old starting in the fall. Can you tell me about your program and set up a tour?",
    },
    controlDescription: "The agent shares only program information you approve and keeps tour scheduling aligned with your director's calendar.",
    controls: [
      { title: "Configure approved program descriptions", text: "Define how the agent describes your philosophy, classrooms, age groups, and daily schedule." },
      { title: "Set tour scheduling rules", text: "Keep tour bookings aligned with your director's or admissions lead's availability and preferred time slots." },
      { title: "Set tuition & enrollment information", text: "Define approved pricing, schedule options, and enrollment steps the agent can share." },
      { title: "Adjust by location or program", text: "Multi-location schools can use shared standards while customizing program details and availability by site." },
    ],
    rolloutDescription: "We typically start with tour scheduling and program inquiries, since those drive enrollment, then expand to waitlist and tuition questions.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We learn your program structure, philosophy talking points, tour process, and director's calendar workflow." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your approved program descriptions and scheduling rules, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor tour booking outcomes, review call quality with your team, and expand to waitlist and tuition routing once proven." },
    ],
    faqEyebrow: "Questions program directors ask",
    faqTitle: "Keep your program's voice consistent and accurate.",
    faqDescription: "Admissions conversations should reflect your program's philosophy accurately, every time.",
    faqs: [
      { question: "Can it really explain our philosophy and approach?", answer: "It can share descriptions you've approved. For deeper philosophy conversations, it can move the family toward a tour with your director." },
      { question: "What if a family asks something we haven't covered?", answer: "The agent can capture the question and make sure it's followed up on, rather than guessing at an answer." },
      { question: "Can it manage our waitlist directly?", answer: "It can capture waitlist inquiries and route them to admissions, working alongside however you currently manage your waitlist." },
      { question: "Will tours go straight onto our director's calendar?", answer: "Yes, based on the availability and scheduling rules you provide." },
    ],
    walkthroughDescription: "See real call scenarios and explore how an admissions agent could support tour scheduling and enrollment inquiries for your program.",
    ctaWorkflowInterest: "Montessori and preschool admissions voice agent",
    ctaModalDescription: "Tell us about your program, tour process, and how admissions calls are currently handled. We'll review whether an admissions agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Program descriptions and tuition information stay under your team's review until they're validated.",
  },
  {
    slug: "tutoring-learning-center-agent",
    heroTitle: "Respond to every tutoring inquiry before families call someone else.",
    heroDescription:
      "Automate4U's voice assistant answers calls about subjects, schedules, and pricing, books assessments or trial sessions, and routes academic questions to your director.",
    dashboardTitle: "Today's enrollment calls",
    dashboardRows: [
      ["New student inquiry", "Subject and grade level", "Schedule assessment"],
      ["Schedule change request", "Existing student found", "Update session calendar"],
      ["Pricing & package question", "Program type captured", "Send pricing guide"],
      ["Tutor preference question", "Subject and availability", "Route to director"],
    ],
    dashboardNote: "Designed to move new inquiries toward a booked assessment or trial session quickly.",
    realityEyebrow: "Tutoring center admissions reality",
    realityTitle: "Families calling about tutoring usually want to start soon.",
    realityDescription:
      "Parents often call several centers around the same time, looking for the right subject match, schedule fit, and pricing, and they tend to go with whoever responds first.",
    realityItems: [
      { label: "01", title: "Speed matters for new inquiries", text: "Families comparing tutoring options often choose based on who answers and schedules an assessment first." },
      { label: "02", title: "Scheduling changes are frequent", text: "Students reschedule sessions around school activities, sports, and exams throughout the term." },
      { label: "03", title: "Pricing varies by subject and package", text: "Hourly rates, package pricing, and group versus individual sessions all need to be explained accurately." },
      { label: "04", title: "Subject and tutor matching needs detail", text: "Grade level, subject, and learning goals all factor into matching a student with the right tutor or program." },
    ],
    supportTitle: "Designed to support enrollment, not replace your director.",
    supportDescription: "The agent handles routine scheduling and inquiry response so your director and tutors can focus on instruction.",
    supportCards: [
      { title: "New student inquiry response", text: "Capture subject, grade level, and goals, then move families toward a booked assessment or trial session." },
      { title: "Schedule changes & session booking", text: "Handle reschedules and recurring session bookings around tutor and room availability." },
      { title: "Pricing & package information", text: "Explain approved pricing for hourly sessions, packages, and group programs, or send a pricing guide." },
      { title: "Tutor matching & academic routing", text: "Capture subject and learning goal details and route academic-fit questions to your director." },
    ],
    demoTitle: "Hear how a new enrollment call actually sounds.",
    demoDescription: "Designed to sound friendly and efficient while moving new inquiries toward a booked assessment.",
    demoNote: "During a walkthrough, we can review approved pricing and program details and map the call scenarios specific to your center.",
    demoProvider: {
      id: "tutoring-demo",
      agentId: elevenLabsAgents.daycareDemo,
      label: "Tutoring Center Assistant",
      title: "Tutoring Center Assistant",
      subtitle: "New student inquiries, scheduling, and pricing",
      description: "Speak naturally about a subject you need help with, scheduling, or pricing for tutoring programs.",
      tags: ["New student inquiries", "Scheduling & reschedules", "Pricing information", "Tutor matching"],
      agentLine: "Thanks for calling Blue Hippo Learning Center. I can answer questions about our programs, share pricing, or schedule an assessment. What subject are you looking for help with?",
      callerLine: "My son is struggling with algebra and we'd like to set up an assessment to see what kind of tutoring would help.",
    },
    controlDescription: "The agent shares only pricing and program information you approve and routes academic-fit questions to your director.",
    controls: [
      { title: "Configure approved program & pricing info", text: "Define how the agent describes subjects offered, session formats, and pricing." },
      { title: "Set scheduling rules", text: "Keep assessment, trial, and recurring session bookings aligned with tutor and room availability." },
      { title: "Protect academic-fit decisions", text: "Questions about which tutor or program is the right fit can route to your director." },
      { title: "Adjust by season", text: "Update availability and messaging for school-year scheduling versus summer programs." },
    ],
    rolloutDescription: "We typically start with new inquiry response and assessment scheduling, since that's where families decide where to enroll, then expand to recurring scheduling.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We learn your programs, pricing structure, scheduling process, and how new inquiries are currently handled." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your approved program and pricing information, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor enrollment outcomes, review call quality with your team, and expand to recurring scheduling once proven." },
    ],
    faqEyebrow: "Questions center directors ask",
    faqTitle: "Keep enrollment information accurate and consistent.",
    faqDescription: "Pricing and program details should be communicated consistently, while academic decisions stay with your team.",
    faqs: [
      { question: "Can it recommend a specific tutor or program?", answer: "It can capture subject and goal information and route the recommendation to your director, who knows your tutors best." },
      { question: "Does it handle recurring session scheduling?", answer: "Yes, based on the scheduling rules and availability you provide for tutors and rooms." },
      { question: "How does it explain pricing for packages?", answer: "It shares the pricing structure you approve, including hourly rates, packages, and group options." },
      { question: "What happens with a family that wants to enroll right away?", answer: "The agent can move them directly toward a booked assessment or trial session based on your availability." },
    ],
    walkthroughDescription: "See real call scenarios and explore how an enrollment agent could help your center respond faster to new inquiries.",
    ctaWorkflowInterest: "Tutoring and learning center enrollment voice agent",
    ctaModalDescription: "Tell us about your programs, pricing, and how new inquiry calls are currently handled. We'll review whether an enrollment agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Pricing and program information stays under your team's review until it's validated.",
  },
  {
    slug: "wholesale-distribution-order-agent",
    heroTitle: "Handle order and availability calls without pulling staff off the floor.",
    heroDescription:
      "Automate4U's voice agent answers calls about stock availability, order status, and reorders, captures account and item details, and routes pricing or account-specific questions to your sales team.",
    dashboardTitle: "Today's order calls",
    dashboardRows: [
      ["Stock availability check", "Item numbers captured", "Check inventory system"],
      ["Order status inquiry", "Order number provided", "Provide status update"],
      ["Reorder request", "Account and items captured", "Create order in ERP"],
      ["New account pricing question", "Account details captured", "Route to sales rep"],
    ],
    dashboardNote: "Designed to handle routine order and availability questions so your team can focus on fulfillment.",
    realityEyebrow: "Wholesale & distribution call reality",
    realityTitle: "The same order and availability questions come in all day.",
    realityDescription:
      "Customers calling about stock, order status, and reorders often need quick answers, but staff are busy picking, packing, and shipping.",
    realityItems: [
      { label: "01", title: "Availability questions are constant", text: "Customers call to check stock on specific items before placing or confirming an order." },
      { label: "02", title: "Order status calls take time to research", text: "Looking up order status in the ERP or warehouse system pulls staff away from fulfillment work." },
      { label: "03", title: "Reorders follow predictable patterns", text: "Many customers reorder the same items regularly, which is a good fit for a guided intake conversation." },
      { label: "04", title: "New account questions need sales follow-up", text: "Pricing and account setup for new customers needs a sales rep, not a generic answer." },
    ],
    supportTitle: "Designed to support order desk staff, not replace them.",
    supportDescription: "The agent handles routine availability and order questions so your team can stay focused on fulfillment and account management.",
    supportCards: [
      { title: "Stock availability lookups", text: "Capture item numbers or descriptions and check availability against your inventory system." },
      { title: "Order status updates", text: "Look up order status using order or PO numbers and relay updates to customers." },
      { title: "Reorder intake", text: "Capture account, item, and quantity details for reorders and create the order in your system." },
      { title: "New account & pricing routing", text: "Route new account, pricing, and credit questions to the right sales rep with context captured." },
    ],
    demoTitle: "Hear how an order desk call actually sounds.",
    demoDescription: "Designed to sound efficient and accurate while handling availability, status, and reorder calls.",
    demoNote: "During a walkthrough, we can review your inventory and ERP integration options and map the call scenarios specific to your operation.",
    demoProvider: {
      id: "wholesale-demo",
      agentId: elevenLabsAgents.manufacturingDemo,
      label: "Order Desk Assistant",
      title: "Order Desk Assistant",
      subtitle: "Stock availability, order status, and reorder intake",
      description: "Speak naturally about checking stock, an order status, or placing a reorder.",
      tags: ["Stock availability", "Order status", "Reorder intake", "Sales routing"],
      agentLine: "Thanks for calling Atlas Components. I can check stock availability, look up an order status, or help with a reorder. What can I help with?",
      callerLine: "I need to check if you have part number 4471-B in stock and place a reorder for our usual quantity if so.",
    },
    controlDescription: "The agent works within your inventory and account rules and routes pricing or credit-sensitive conversations to sales.",
    controls: [
      { title: "Configure inventory & order lookups", text: "Connect approved inventory and order status sources so answers reflect real-time information." },
      { title: "Set reorder intake rules", text: "Define what information is captured for reorders and how orders are created in your ERP." },
      { title: "Protect pricing & credit conversations", text: "New account pricing, credit terms, and account-specific discounts route to sales reps." },
      { title: "Adjust by product line or account type", text: "Different product lines or account tiers can have different intake rules and routing." },
    ],
    rolloutDescription: "We typically start with availability and order status calls, since those are highest volume, then expand to reorder intake.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your inventory systems, order process, account types, and how order desk calls are currently handled." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your inventory lookups, order rules, and routing logic, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor accuracy with your team, review order outcomes, and expand to reorder intake and account routing once proven." },
    ],
    faqEyebrow: "Questions distributors ask",
    faqTitle: "Keep inventory and order data accurate.",
    faqDescription: "Order and availability answers should reflect real data, not guesses.",
    faqs: [
      { question: "Does it have access to real-time inventory?", answer: "It can connect to your inventory or ERP system so availability answers reflect current data, depending on your integration setup." },
      { question: "Can it actually place orders?", answer: "It can capture reorder details and create draft orders in your system for staff review, or place them directly if you prefer." },
      { question: "What about new customer pricing?", answer: "New account and pricing questions route to your sales team, since those usually require account-specific terms." },
      { question: "Can it handle multiple product lines?", answer: "Yes, intake and routing rules can be configured separately for different product lines or account types." },
    ],
    walkthroughDescription: "See real call scenarios and explore how an order desk agent could reduce phone interruptions for your fulfillment team.",
    ctaWorkflowInterest: "Wholesale and distribution order desk voice agent",
    ctaModalDescription: "Tell us about your inventory systems, order process, and how order desk calls are currently handled. We'll review whether an order desk agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Inventory and order integrations stay under your team's review until they're validated.",
  },
  {
    slug: "industrial-supplier-order-agent",
    heroTitle: "Keep parts and supply orders moving without tying up your counter staff.",
    heroDescription:
      "Automate4U's voice agent answers calls about part numbers, availability, and will-call pickups, captures account and order details, and routes spec or pricing questions to your team.",
    dashboardTitle: "Today's supply calls",
    dashboardRows: [
      ["Part number availability", "Item and quantity captured", "Check inventory system"],
      ["Will-call pickup confirmation", "Order number provided", "Confirm ready for pickup"],
      ["Spec or cross-reference question", "Part details captured", "Route to technical sales"],
      ["Account reorder", "Account and items captured", "Create order in ERP"],
    ],
    dashboardNote: "Designed to handle routine availability and pickup calls so counter staff can stay with walk-in customers.",
    realityEyebrow: "Industrial supply call reality",
    realityTitle: "Counter staff are split between phone calls and walk-in customers.",
    realityDescription:
      "Calls about part availability, will-call pickups, and reorders compete with the customers standing at the counter, and both matter.",
    realityItems: [
      { label: "01", title: "Availability calls happen constantly", text: "Contractors and maintenance teams call ahead to check whether parts are in stock before making a trip." },
      { label: "02", title: "Will-call pickups need quick confirmation", text: "Customers calling to confirm an order is ready want a fast answer so they can plan their stop." },
      { label: "03", title: "Spec and cross-reference questions need expertise", text: "Finding the right part by spec or cross-reference often needs a knowledgeable team member, not a guess." },
      { label: "04", title: "Reorders follow account history", text: "Regular customers often reorder the same parts and supplies on a recurring basis." },
    ],
    supportTitle: "Designed to support counter staff, not replace them.",
    supportDescription: "The agent handles availability and pickup calls so counter staff can stay focused on the customers in front of them.",
    supportCards: [
      { title: "Part availability checks", text: "Capture part numbers and quantities and check availability against your inventory system." },
      { title: "Will-call pickup confirmation", text: "Confirm order status and pickup readiness using order numbers." },
      { title: "Reorder intake for account customers", text: "Capture account and item details for recurring orders and create the order in your system." },
      { title: "Spec & technical question routing", text: "Route cross-reference and specification questions to technical sales with context captured." },
    ],
    demoTitle: "Hear how a parts availability call actually sounds.",
    demoDescription: "Designed to sound efficient and accurate while handling availability, pickup, and reorder calls.",
    demoNote: "During a walkthrough, we can review your inventory system options and map the call scenarios specific to your counter.",
    demoProvider: {
      id: "industrial-supplier-demo",
      agentId: elevenLabsAgents.manufacturingDemo,
      label: "Parts Counter Assistant",
      title: "Parts Counter Assistant",
      subtitle: "Availability checks, will-call confirmation, and reorders",
      description: "Speak naturally about checking part availability, confirming a will-call pickup, or placing a reorder.",
      tags: ["Part availability", "Will-call confirmation", "Reorder intake", "Technical routing"],
      agentLine: "Thanks for calling Atlas Components. I can check part availability, confirm a will-call pickup, or help with a reorder. What do you need?",
      callerLine: "I'm calling to check if order number 58213 is ready for pickup, and I also need to check availability on a few bearings.",
    },
    controlDescription: "The agent works within your inventory and account rules and routes spec or pricing-sensitive conversations to your team.",
    controls: [
      { title: "Configure inventory & order lookups", text: "Connect approved inventory and order status sources so availability and pickup answers reflect real-time data." },
      { title: "Set reorder intake rules", text: "Define what information is captured for account reorders and how orders are created in your ERP." },
      { title: "Protect spec & pricing conversations", text: "Cross-reference, specification, and pricing questions route to technical sales staff." },
      { title: "Adjust by product category", text: "Different product categories can have different intake rules and routing to specialized staff." },
    ],
    rolloutDescription: "We typically start with availability and will-call confirmation calls, since those are highest volume at the counter, then expand to reorder intake.",
    rollout: [
      { step: "01", title: "Operational discovery", text: "We map your inventory systems, will-call process, account types, and how counter calls are currently handled." },
      { step: "02", title: "Configuration & testing", text: "Conversation flows are built around your inventory lookups, order rules, and routing logic, then tested against real scenarios." },
      { step: "03", title: "Launch & optimization", text: "We monitor accuracy with your team, review call outcomes, and expand to reorder intake and technical routing once proven." },
    ],
    faqEyebrow: "Questions suppliers ask",
    faqTitle: "Keep availability and pickup answers accurate.",
    faqDescription: "Counter calls should reflect real inventory and order data, with technical questions going to the right person.",
    faqs: [
      { question: "Does it know real-time inventory levels?", answer: "It can connect to your inventory system so availability answers reflect current stock, depending on your integration." },
      { question: "Can it confirm will-call pickups?", answer: "Yes, using order numbers it can check and confirm pickup status against your order system." },
      { question: "What about cross-reference or spec questions?", answer: "These route to your technical sales team, since they often require product expertise." },
      { question: "Can regular account customers reorder by phone?", answer: "Yes, the agent can capture account and item details and create the order in your system for review or processing." },
    ],
    walkthroughDescription: "See real call scenarios and explore how a parts counter agent could reduce phone interruptions for your team.",
    ctaWorkflowInterest: "Industrial supplier parts counter voice agent",
    ctaModalDescription: "Tell us about your inventory systems, will-call process, and how counter calls are currently handled. We'll review whether a parts counter agent is a good fit.",
    ctaPrivacyNote: "We respect your privacy. Inventory and order integrations stay under your team's review until they're validated.",
  },
];

export function getTradeVariant(slug: string): TradeVariant | undefined {
  return tradeVariants.find((variant) => variant.slug === slug);
}
