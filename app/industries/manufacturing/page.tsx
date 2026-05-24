import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "RFQs and customer questions arrive in too many places", text: "Parts, pricing, lead time, order status, and quote requests often arrive through phone, shared inboxes, website forms, rep-specific threads, and distributor channels." },
  { title: "The answer lives outside the conversation", text: "Staff have to check ERP, inventory files, quote trackers, order notes, customer history, margin rules, and internal knowledge before they can respond confidently." },
  { title: "Slow response creates hidden revenue drag", text: "Missed RFQs, delayed quote follow-up, unclear ownership, and slow response SLAs can cost opportunities before a salesperson ever gets to the real relationship work." },
];

const workflowPath = [
  { step: "01", title: "Capture the request", text: "AI handles the first conversation across voice, chat, email, or form intake and collects part numbers, quantities, drawings or specs, urgency, account context, and missing details." },
  { step: "02", title: "Check approved sources", text: "The system references only the data sources you approve: ERP, inventory, CRM, knowledge base, quote tracker, order status, margin rules, or internal process rules." },
  { step: "03", title: "Route with context", text: "Clean summaries, source links, confidence notes, SLA priority, and required next actions are sent to the right owner instead of dropping a vague message into an inbox." },
  { step: "04", title: "Close the loop", text: "Customers receive the right follow-up, CRM activity is logged, KPI events are tracked, and pricing, lead-time, substitution, or margin exceptions stay with a human before commitments are made." },
];

const valuePatterns = [
  { label: "RFQ and quote intake", outcome: "Collect part numbers, quantities, deadlines, specs, customer context, and missing details before sales review so reps can reduce quote cycle time." },
  { label: "SLA and missed-RFQ recovery", outcome: "Track inbound requests, prioritize urgent opportunities, alert owners, and reduce the chance that high-intent quote requests sit unanswered." },
  { label: "Order follow-up", outcome: "Turn routine status questions into structured updates with order context, ownership, and escalation when the answer is not clear." },
  { label: "Margin-protected response drafting", outcome: "Draft customer-ready responses from approved data while keeping pricing, substitutions, delivery commitments, and margin-sensitive decisions under human review." },
  { label: "ERP and CRM handoff", outcome: "Connect the customer conversation to CRM activity, ERP/order context, quote tasks, and reporting without forcing the team to replace systems they already trust." },
];

const servicePaths = [
  { title: "Manufacturing Quote & Order Response Agent", description: "A focused solution for RFQ intake, parts availability, quote follow-up, ERP/CRM handoff, response SLA, and human pricing review.", href: "/solutions/manufacturing-quote-order-agent", cta: "View solution" },
  { title: "AI Agents for response workflows", description: "Agents that classify requests, check approved sources, create tasks, draft replies, and route unclear cases to sales or operations.", href: "/services/ai-agents", cta: "Explore AI Agents" },
  { title: "AI Chat for customer questions", description: "Customer-facing chat for product questions, order status, parts availability, quote intake, and human handoff.", href: "/services/ai-chat", cta: "Explore AI Chat" },
];

const sectorShifts = [
  { title: "Customers expect faster answers", text: "Industrial customers may tolerate complex products, but they still expect quick acknowledgement, clear next steps, and fewer follow-up loops." },
  { title: "Quote speed affects revenue and margin", text: "Faster RFQ handling can protect opportunities, but pricing, substitutions, lead times, and account commitments still need the right review before a final answer goes out." },
  { title: "Operating data is scattered", text: "ERP, inventory, quote, CRM, and order data can support better service, but staff often bridge those systems manually during customer conversations." },
  { title: "AI is moving into daily workflows", text: "The useful shift is not a standalone chatbot. It is an agent that captures the request, checks approved data, routes work, and keeps the team informed." },
];

const systemGroups = [
  { title: "Customer channels", items: ["Phone", "Website chat", "Shared inbox", "Contact forms", "SMS follow-up"] },
  { title: "Systems of record", items: ["ERP", "Inventory data", "CRM", "Order status", "Quote tracker", "Product docs"] },
  { title: "Team workflow", items: ["RFQ task", "Sales handoff", "Ops handoff", "Pricing review", "Audit logs", "KPI reporting"] },
];

const controls = [
  "Pricing, lead-time commitments, substitutions, margin exceptions, and custom quotes can require staff approval before the customer sees a final answer.",
  "Low-confidence answers, stale data, or mismatched customer records are escalated instead of guessed.",
  "Every automated response can retain the request, source data, owner, timestamp, and final action for review.",
  "Access rules can separate customer service, sales, operations, and leadership views of sensitive account data.",
];

const rollout: [string, string][] = [
  ["Start", "Pick one high-volume workflow with clear boundaries, such as parts availability, RFQ intake, quote follow-up, or order status updates."],
  ["Pilot", "Run real requests with staff review, measure response SLA, quote cycle time, handoff quality, escalation rate, and time saved."],
  ["Expand", "Add more channels, more data sources, more product lines, and more workflow actions once the first use case proves value."],
];

const confidenceNotes = [
  "Start where response speed affects revenue: RFQs, quote follow-up, parts availability, order status, or distributor/customer intake.",
  "Measure quote cycle time, response SLA, missed RFQs recovered, CRM follow-up completion, and manual triage avoided.",
  "Keep pricing exceptions, substitutions, margin-sensitive responses, delivery commitments, and account commitments under human review.",
];

export default function ManufacturingAcceleratorPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Manufacturing"
      title="AI agents for RFQ intake, quote follow-up, and manufacturing customer response."
      description="Give customers faster answers without asking sales and operations to dig through the same ERP, CRM, inventory, and quote systems all day. Start with one revenue-relevant workflow, connect the right data, and keep people in control where pricing, lead times, and margin matter."
      primaryCta={{ label: "Get Free Assessment", href: "#contact" }}
      secondaryCta={{ label: "See The Workflow", href: "#workflow" }}
      image={{ src: "/images/industries/manufacturing.jpg", alt: "Manufacturing team reviewing operations and customer response data" }}
      typicalRequest="Can you confirm availability, lead time, and quote next steps for this part number?"
      diagnosisTitle="Manufacturing response delays create revenue drag when RFQs, parts questions, and order updates wait on manual system checks."
      frictionAreas={frictionAreas}
      workflowTitle="The agent should not just answer. It should move the request through the business."
      workflowDescription="A useful manufacturing automation captures context, checks approved sources, creates the right handoff, and gives customers a timely next step without removing human judgment from sensitive decisions."
      workflowPath={workflowPath}
      valueTitle="Start where response speed, quote quality, and margin protection matter."
      valueDescription="The first useful automation is usually not a giant replacement project. It is a repeatable customer workflow where better intake, cleaner routing, faster follow-up, and human pricing review can protect revenue while saving staff time."
      valuePatterns={valuePatterns}
      serviceTitle="Choose the service path that fits the first customer-response bottleneck."
      serviceDescription="Manufacturing teams usually start with response agents, customer chat, or a custom operations surface depending on where the workflow breaks today."
      servicePaths={servicePaths}
      sectorTitle="Industrial buyers expect speed, but manufacturing teams still need control."
      sectorDescription="The advantage is not novelty. It is using AI to shorten response cycles while keeping pricing, commitments, substitutions, and margin-sensitive decisions traceable and human-led."
      sectorShifts={sectorShifts}
      systemsTitle="Manufacturing AI works best when it respects your existing systems of record."
      systemsDescription="We do not need to replace everything to create value. The first accelerator usually connects the customer conversation to ERP, CRM, quote trackers, inventory data, order status, and product knowledge your team already trusts."
      systemGroups={systemGroups}
      controlsTitle="Keep pricing, commitments, and exceptions under human oversight."
      controlsDescription="Manufacturing workflows often touch availability, lead times, specifications, account relationships, pricing, and margin. Those areas need clear rules and traceability."
      controls={controls}
      rolloutTitle="A practical rollout lowers risk for teams that are cautious about spend."
      rolloutDescription="The first milestone should be narrow enough to launch, valuable enough to measure, and clear enough that staff trust how the agent behaves."
      rollout={rollout}
      confidenceTitle="The business case should connect to response speed and quote throughput."
      confidenceDescription="A manufacturing pilot should show whether the workflow reduces manual triage, improves response SLA, shortens quote cycle time, increases CRM follow-up completion, or helps sales protect higher-value opportunities."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["manufacturing-response-agent", "custom-operations-workbench"]}
      sourcePage="/industries/manufacturing"
      ctaLocation="manufacturing_accelerator_assessment"
    />
  );
}
