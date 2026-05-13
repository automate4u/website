import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

export default function HospitalityPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Hospitality"
      title="AI guest response and operations workflows for hospitality teams."
      description="We help hotels, venues, restaurants, short-term rental operators, and guest-service teams answer routine questions, route requests, support bookings, and keep staff focused on the moments where hospitality needs a human touch."
      primaryCta={{ label: "Explore AI Voice", href: "/core-services/ai-voice" }}
      image={{ src: "/images/industries/hospitality.jpg", alt: "Hospitality team supporting guest communication and service workflow" }}
      typicalRequest="Can I change my reservation, and is early check-in available?"
      diagnosisTitle="Hospitality teams need fast response without making the guest experience feel automated."
      frictionAreas={[
        { title: "Guest questions arrive around the clock", text: "Booking changes, hours, amenities, directions, policies, special requests, and event details often arrive before, during, and after the stay or visit." },
        { title: "Staff attention is already stretched", text: "Front desk, reservations, managers, and service teams juggle guests in person while also handling calls, messages, reviews, and internal requests." },
        { title: "The right answer depends on context", text: "Availability, booking source, guest status, property rules, event details, location, timing, and service level all change the right next step." },
      ]}
      workflowTitle="The system should answer routine questions and route service requests with context."
      workflowDescription="A useful hospitality automation captures the guest request, checks approved information, creates the right staff handoff, and preserves warmth where people should step in."
      workflowPath={[
        { step: "01", title: "Capture the guest request", text: "AI handles calls, chat, forms, email, or SMS and identifies booking changes, common questions, service needs, or escalation moments." },
        { step: "02", title: "Check approved information", text: "The workflow references property details, policies, event information, booking rules, hours, amenities, and service instructions." },
        { step: "03", title: "Route the action", text: "The system sends confirmations, creates staff tasks, routes urgent requests, updates notes, or prepares a human handoff." },
        { step: "04", title: "Track service quality", text: "Request type, response time, staff owner, guest outcome, and recurring friction can feed operations and improvement reporting." },
      ]}
      valueTitle="Start where quick answers improve guest experience and reduce interruptions."
      valueDescription="The first useful automation is usually a routine guest communication workflow where response speed and clear handoff improve service without removing human warmth."
      valuePatterns={[
        { label: "Reservation and booking support", outcome: "Answer routine booking questions, capture change requests, route availability questions, and hand off exceptions to staff." },
        { label: "Guest request routing", outcome: "Turn service requests into staff tasks with room, property, timing, urgency, and guest context already attached." },
        { label: "Reviews and follow-up", outcome: "Draft review responses, flag issues, route recovery moments, and support post-visit follow-up with approval." },
      ]}
      serviceTitle="Connect guest communication to the team workflow behind it."
      serviceDescription="Hospitality automation can start with voice, chat, follow-up, or staff routing depending on where the team feels the most pressure."
      servicePaths={[
        { title: "AI Voice for guest calls", description: "Voice workflows for routine calls, booking questions, directions, policy questions, and after-hours request capture.", href: "/core-services/ai-voice", cta: "Explore AI Voice" },
        { title: "AI Chat for guest questions", description: "Chat and message workflows for amenities, hours, policies, reservation support, and staff handoff.", href: "/core-services/ai-chat", cta: "Explore AI Chat" },
        { title: "AI Agents for operations", description: "Agents that create tasks, route service requests, update notes, send follow-up, and report recurring issues.", href: "/core-services/ai-agents", cta: "Explore AI Agents" },
      ]}
      sectorTitle="Hospitality automation has to feel helpful, not cold."
      sectorDescription="The winning pattern is fast routine support paired with clear human escalation for emotional, VIP, urgent, or service-recovery moments."
      sectorShifts={[
        { title: "Guests expect immediate answers", text: "Travel, events, and dining decisions often happen in the moment, so slow response can affect bookings and satisfaction." },
        { title: "Operational consistency is hard across shifts", text: "Different staff, properties, venues, and service windows can create inconsistent answers unless workflows are standardized." },
        { title: "Recovery moments need people", text: "Complaints, VIP guests, special accommodations, and emotional situations should route to staff with context." },
      ]}
      systemsTitle="The agent should work across booking, guest messaging, and staff tasking."
      systemsDescription="The first workflow can connect guest channels to booking systems, knowledge bases, staff notifications, service tasks, and reporting."
      systemGroups={[
        { title: "Guest channels", items: ["Phone", "Website chat", "Email", "SMS", "Review platforms"] },
        { title: "Operating systems", items: ["Booking system", "Guest profile", "Knowledge base", "Event calendar", "Property notes"] },
        { title: "Team workflow", items: ["Staff task", "Manager alert", "Guest follow-up", "Service log", "KPI reporting"] },
      ]}
      controlsTitle="Keep service recovery, VIP handling, and exceptions with staff."
      controlsDescription="Hospitality automation should reduce routine load while protecting brand tone, guest empathy, and service judgment."
      controls={[
        "Complaints, refunds, VIP guests, special accommodations, and safety concerns should route to staff.",
        "Approved responses can reflect property-specific policies, hours, amenities, and service standards.",
        "Human review can be required for public review responses or sensitive guest follow-up.",
        "Every request can preserve guest context, source, staff owner, action taken, and final outcome.",
      ]}
      rolloutTitle="Start with one guest communication workflow."
      rolloutDescription="The first milestone should reduce repeated questions or request routing pressure while preserving the guest experience."
      rollout={[
        ["Start", "Choose routine calls, booking questions, guest request routing, or review-response drafting as the first workflow."],
        ["Pilot", "Run real interactions with staff review, measure response time, escalation rate, guest experience, and staff interruption reduction."],
        ["Expand", "Add more locations, channels, review workflows, event support, or managed operations after the first workflow is trusted."],
      ]}
      confidenceTitle="Costs should reflect guest volume, channels, and service risk."
      confidenceDescription="Hospitality buyers need an automation path that starts practically, protects service quality, and expands only after staff trust the handoffs."
      confidenceNotes={[
        "Start with routine guest questions or request routing before service recovery automation.",
        "Measure response time, requests routed, staff interruptions reduced, guest satisfaction signals, and escalation quality.",
        "Keep emotional, VIP, refund, and safety-related cases under human control.",
      ]}
      proofStorySlugs={["hospitality-guest-response", "managed-ai-operations-rhythm"]}
      sourcePage="/industries/hospitality"
      ctaLocation="hospitality_assessment"
    />
  );
}
