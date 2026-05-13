import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

export default function RealEstatePage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Real Estate"
      title="AI lead response and follow-up systems for real estate teams."
      description="We help real estate agents, brokerages, property managers, and leasing teams respond faster, qualify inquiries, book showings, update CRM records, and keep people in control of high-value conversations."
      primaryCta={{ label: "Explore AI Voice", href: "/core-services/ai-voice" }}
      image={{ src: "/images/industries/real_estate.jpg", alt: "Real estate team coordinating lead response and property inquiry workflow" }}
      typicalRequest="Is this property still available, and can I book a showing this week?"
      diagnosisTitle="Real estate teams lose opportunities when lead response, qualification, and follow-up are inconsistent."
      frictionAreas={[
        {
          title: "Speed to lead matters",
          text: "Buyers, sellers, renters, and investors often contact multiple teams. Delayed response can lose the conversation before an agent speaks to them.",
        },
        {
          title: "Inquiries arrive from scattered channels",
          text: "Website forms, listing portals, calls, text messages, social DMs, email, and referrals create fragmented follow-up work.",
        },
        {
          title: "Good handoff needs context",
          text: "Agents need property interest, budget, timeline, location, financing status, intent, and urgency before deciding the next move.",
        },
      ]}
      workflowTitle="Every inquiry should become a qualified next step, not a loose notification."
      workflowDescription="A useful real estate agent captures the lead, qualifies intent, books or routes the next step, updates the CRM, and keeps human judgment in the sales conversation."
      workflowPath={[
        { step: "01", title: "Capture the inquiry", text: "AI answers calls, forms, texts, or chats and collects property interest, timeline, contact details, buying or leasing intent, and preferred next step." },
        { step: "02", title: "Qualify with approved questions", text: "The workflow uses approved intake logic for budget, location, financing, availability, showing preference, seller intent, or property management needs." },
        { step: "03", title: "Book or route", text: "The system books a showing, creates a CRM task, sends a follow-up message, alerts the right agent, or routes the request to property management." },
        { step: "04", title: "Track the outcome", text: "Lead source, response time, qualification notes, booking status, handoff owner, and follow-up events are logged for visibility." },
      ]}
      valueTitle="Start where response speed and follow-up discipline create immediate value."
      valueDescription="The first useful automation is usually a high-intent inquiry flow where faster acknowledgement, cleaner qualification, and better follow-up can protect revenue."
      valuePatterns={[
        { label: "Listing inquiry response", outcome: "Respond to property questions, capture buyer or renter context, book showings, and route serious inquiries with clean summaries." },
        { label: "Seller or valuation intake", outcome: "Collect property details, timeline, motivation, location, and next-step preferences before agent review." },
        { label: "Property management requests", outcome: "Triage tenant, owner, maintenance, leasing, and availability questions while escalating sensitive cases to staff." },
      ]}
      serviceTitle="Connect fast response to the sales and service workflow behind it."
      serviceDescription="Real estate automation can start with voice, chat, CRM routing, or follow-up agents depending on where leads currently fall through."
      servicePaths={[
        { title: "AI Voice lead capture", description: "Voice agents for missed calls, listing inquiries, showing requests, intake, and after-hours lead response.", href: "/core-services/ai-voice", cta: "Explore AI Voice" },
        { title: "AI Agents for CRM follow-up", description: "Agents that create tasks, update CRM fields, send next-step messages, and keep lead nurture moving.", href: "/core-services/ai-agents", cta: "Explore AI Agents" },
        { title: "AI Chat for property questions", description: "Chat workflows for availability, location, showing requests, qualification, and human handoff.", href: "/core-services/ai-chat", cta: "Explore AI Chat" },
      ]}
      sectorTitle="Real estate conversion depends on speed, context, and persistent follow-up."
      sectorDescription="AI is most valuable when it helps agents spend less time chasing routine details and more time advising, negotiating, and closing."
      sectorShifts={[
        { title: "Lead expectations are immediate", text: "Prospects expect quick confirmation, clear next steps, and fewer delays between interest and showing." },
        { title: "CRM discipline is hard to maintain", text: "Busy agents often lose visibility when notes, source, status, and follow-up actions are not captured consistently." },
        { title: "Human trust still closes the deal", text: "Automation should qualify and organize the opportunity, while negotiation, advice, pricing, and relationship-building stay human-led." },
      ]}
      systemsTitle="The agent should work across listing sources, CRM, calendar, and team handoff."
      systemsDescription="The first workflow can connect inbound channels to CRM updates, showing calendars, SMS/email follow-up, task queues, and reporting."
      systemGroups={[
        { title: "Lead channels", items: ["Phone", "Website forms", "Listing portals", "Chat", "SMS"] },
        { title: "Sales systems", items: ["CRM", "Calendar", "Listings", "Email", "Lead source data"] },
        { title: "Team workflow", items: ["Agent task", "Showing request", "Follow-up queue", "Pipeline update", "KPI reporting"] },
      ]}
      controlsTitle="Keep pricing, negotiation, representation, and sensitive decisions human-led."
      controlsDescription="Real estate automation should improve response and routing without pretending to replace licensed judgment, negotiation, or relationship trust."
      controls={[
        "Pricing guidance, negotiation, representation advice, and contractual questions should route to a licensed professional.",
        "Low-confidence property data, unavailable listings, or unusual requests should escalate instead of being guessed.",
        "Lead routing can respect territory, listing ownership, agent availability, and brokerage rules.",
        "Every automated interaction can preserve source, qualification details, handoff owner, and final outcome.",
      ]}
      rolloutTitle="Start with one measurable lead response workflow."
      rolloutDescription="The first milestone should reduce response delay and improve follow-up visibility before expanding into broader lead nurture or property management workflows."
      rollout={[
        ["Start", "Choose one lead source or inquiry type, such as missed calls, listing forms, or showing requests."],
        ["Pilot", "Track speed to lead, booking rate, handoff quality, CRM completeness, and agent feedback."],
        ["Expand", "Add more lead sources, nurture sequences, showing workflows, property management routing, or reporting."],
      ]}
      confidenceTitle="Costs should be tied to lead volume and measurable conversion lift."
      confidenceDescription="Real estate buyers need to see that automation is not another CRM chore. Start with the workflow most likely to recover missed opportunities or reduce manual follow-up."
      confidenceNotes={[
        "Start with lead capture and follow-up before automating complex advisory workflows.",
        "Measure response time, booked showings, CRM completeness, recovered leads, and follow-up completion.",
        "Keep licensed advice, negotiation, pricing, and contract-related decisions with agents.",
      ]}
      proofStorySlugs={["real-estate-lead-response", "managed-ai-operations-rhythm"]}
      sourcePage="/industries/real-estate"
      ctaLocation="real_estate_assessment"
    />
  );
}
