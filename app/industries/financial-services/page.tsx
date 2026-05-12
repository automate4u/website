import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

export default function FinancialServicesPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Financial Services"
      title="AI intake, document, and support workflows for financial service teams."
      description="We help advisory, insurance, lending, bookkeeping, accounting, and financial service teams reduce repetitive intake, document follow-up, routing, and support work while keeping advice, approvals, and sensitive decisions human-led."
      primaryCta={{ label: "Explore AI Agents", href: "/core-services/ai-agents" }}
      image={{ src: "/images/industries/financialServices.jpg", alt: "Financial services team reviewing client intake and workflow information" }}
      typicalRequest="Can someone confirm what documents you need and where my application stands?"
      diagnosisTitle="Financial service teams need speed and consistency without weakening trust, compliance, or review."
      frictionAreas={[
        { title: "Intake often starts incomplete", text: "Prospects and clients submit partial details, missing documents, unclear goals, or questions that require staff to chase context." },
        { title: "Routine support absorbs senior attention", text: "Status checks, document reminders, appointment prep, policy questions, and routing work can interrupt people needed for advisory and review." },
        { title: "Sensitive decisions need guardrails", text: "Financial advice, approvals, eligibility, pricing, underwriting, and compliance-sensitive questions require human review and traceability." },
      ]}
      workflowTitle="The system should collect, route, and document work before a specialist steps in."
      workflowDescription="A useful financial automation captures context, checks approved process rules, requests missing information, routes the case, and keeps regulated or judgment-heavy decisions with people."
      workflowPath={[
        { step: "01", title: "Capture the request", text: "AI handles calls, forms, email, or chat and collects contact details, service interest, timeline, missing documents, and next-step needs." },
        { step: "02", title: "Check approved process rules", text: "The workflow references approved checklists, appointment requirements, document lists, routing criteria, and status categories." },
        { step: "03", title: "Create the handoff", text: "The system creates CRM tasks, document reminders, advisor handoffs, application notes, or client follow-up messages." },
        { step: "04", title: "Preserve traceability", text: "Source, request type, documents requested, owner, status, escalation reason, and final outcome are logged." },
      ]}
      valueTitle="Start with the admin work around the advice, not the advice itself."
      valueDescription="The first useful automation is usually a workflow that improves completeness, routing, response speed, and follow-up without automating judgment."
      valuePatterns={[
        { label: "Client intake", outcome: "Collect goals, service needs, contact details, timeline, and missing information before a human consultation or review." },
        { label: "Document follow-up", outcome: "Request missing documents, send reminders, update status, and route exceptions before cases stall." },
        { label: "Support routing", outcome: "Classify routine questions, status checks, billing or policy inquiries, and route sensitive cases to the right owner." },
      ]}
      serviceTitle="Build around intake, workflow routing, and staff review."
      serviceDescription="Financial services automation should start with operational support and expand only after controls, approvals, and data boundaries are clear."
      servicePaths={[
        { title: "AI Agents for intake", description: "Agents that collect context, classify requests, create CRM tasks, and route cases with summaries.", href: "/core-services/ai-agents", cta: "Explore AI Agents" },
        { title: "Data and integrations", description: "Connect approved forms, CRM fields, document status, calendars, and reporting without replacing core review systems.", href: "/capabilities/data-integrations-infrastructure", cta: "Explore Integrations" },
        { title: "Security and monitoring", description: "Design audit logs, escalation rules, monitoring, and human review around sensitive workflows.", href: "/capabilities/security-monitoring-ai-safety", cta: "Explore Safety Controls" },
      ]}
      sectorTitle="Financial automation earns trust when it is conservative, traceable, and useful."
      sectorDescription="The best starting point is rarely an autonomous advisor. It is an operations layer that helps the team respond faster with cleaner context."
      sectorShifts={[
        { title: "Clients expect clear next steps", text: "People want quick acknowledgement, status visibility, and less back-and-forth around documents and appointments." },
        { title: "Staff capacity is constrained by admin", text: "Advisors and specialists lose time when routine intake and follow-up are not structured." },
        { title: "Control is part of the value", text: "Financial workflows need approved responses, escalation, review, and audit trails before automation expands." },
      ]}
      systemsTitle="The agent should respect your CRM, documents, calendars, and approval process."
      systemsDescription="The first workflow can connect intake channels to CRM, document lists, calendars, task queues, client messaging, and reporting."
      systemGroups={[
        { title: "Client channels", items: ["Phone", "Email", "Forms", "Chat", "SMS reminders"] },
        { title: "Operating systems", items: ["CRM", "Calendar", "Document checklist", "Application status", "Secure forms"] },
        { title: "Team workflow", items: ["Advisor task", "Review queue", "Document request", "Audit log", "KPI reporting"] },
      ]}
      controlsTitle="Keep advice, approvals, eligibility, and compliance-sensitive decisions human-led."
      controlsDescription="Automation should improve preparation and routing while protecting the judgment and accountability required in financial workflows."
      controls={[
        "Financial advice, suitability, eligibility, approvals, and underwriting should route to qualified humans.",
        "Approved responses can be limited to intake, document checklists, scheduling, and process-status language.",
        "Sensitive cases can escalate based on keywords, low confidence, customer status, or compliance rules.",
        "Audit logs can preserve request source, data collected, routing decision, owner, and final outcome.",
      ]}
      rolloutTitle="Start with one low-risk operational workflow."
      rolloutDescription="The first milestone should improve intake completeness, response time, or document follow-up before expanding into more sensitive workflows."
      rollout={[
        ["Start", "Choose intake, document follow-up, appointment prep, or status routing as the first workflow."],
        ["Pilot", "Run real cases with staff review, approved responses, audit logging, and escalation checks."],
        ["Expand", "Add more channels, document types, CRM fields, reporting, or managed operations once controls are trusted."],
      ]}
      confidenceTitle="Spend should map to workflow volume, risk, and review requirements."
      confidenceDescription="Financial service buyers need clarity on what is automated, what remains human, and how the first workflow saves time without increasing risk."
      confidenceNotes={[
        "Start with operational preparation, not autonomous financial advice.",
        "Measure intake completeness, document turnaround, response time, staff touches reduced, and escalation quality.",
        "Treat review, auditability, privacy, and escalation as part of the system cost.",
      ]}
      sourcePage="/industries/financial-services"
      ctaLocation="financial_services_assessment"
    />
  );
}
