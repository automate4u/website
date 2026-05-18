import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "Customer questions arrive in too many places", text: "Parts, pricing, lead time, order status, and quote requests often arrive through phone, shared inboxes, website forms, and rep-specific threads." },
  { title: "The answer lives outside the conversation", text: "Staff have to check ERP, inventory files, quote trackers, order notes, customer history, and internal knowledge before they can respond confidently." },
  { title: "Sales loses time before the real sale begins", text: "High-value people spend hours collecting missing details, routing requests, rewriting status updates, and logging notes after the fact." },
];

const workflowPath = [
  { step: "01", title: "Capture the request", text: "AI handles the first conversation across voice, chat, email, or form intake and collects part numbers, quantities, urgency, account context, and missing details." },
  { step: "02", title: "Check approved sources", text: "The system references only the data sources you approve: inventory, ERP, CRM, knowledge base, quote tracker, order status, or internal process rules." },
  { step: "03", title: "Route with context", text: "Clean summaries, source links, confidence notes, and required next actions are sent to the right owner instead of dropping a vague message into an inbox." },
  { step: "04", title: "Close the loop", text: "Customers receive the right follow-up, CRM activity is logged, KPI events are tracked, and exceptions stay with a human before commitments are made." },
];

const valuePatterns = [
  { label: "Quote intake", outcome: "Collect part numbers, quantities, deadlines, and missing details before sales review so reps can move faster with cleaner context." },
  { label: "Order follow-up", outcome: "Turn routine status questions into structured updates with order context, ownership, and escalation when the answer is not clear." },
  { label: "Product questions", outcome: "Route common technical and availability questions through approved knowledge sources, with human review for pricing or commitments." },
];

const servicePaths = [
  { title: "AI Agents for response workflows", description: "Agents that classify requests, check approved sources, create tasks, draft replies, and route unclear cases to sales or operations.", href: "/services/ai-agents", cta: "Explore AI Agents" },
  { title: "AI Chat for customer questions", description: "Customer-facing chat for product questions, order status, parts availability, quote intake, and human handoff.", href: "/services/ai-chat", cta: "Explore AI Chat" },
  { title: "Custom AI Software", description: "Purpose-built portals, dashboards, approval queues, or workbenches when off-the-shelf tools cannot support the workflow.", href: "/services/custom-ai-software", cta: "Explore Custom Software" },
];

const sectorShifts = [
  { title: "Customers expect faster answers", text: "Industrial buyers may tolerate complex products, but they still expect quick acknowledgement, clear next steps, and fewer follow-up loops." },
  { title: "Operating data is scattered", text: "ERP, inventory, quote, CRM, and order data can support better service, but staff often bridge those systems manually during customer conversations." },
  { title: "AI is moving into daily workflows", text: "The useful shift is not a standalone chatbot. It is an agent that captures the request, checks approved data, routes work, and keeps the team informed." },
];

const systemGroups = [
  { title: "Customer channels", items: ["Phone", "Website chat", "Shared inbox", "Contact forms", "SMS follow-up"] },
  { title: "Systems of record", items: ["ERP", "Inventory data", "CRM", "Order status", "Quote tracker"] },
  { title: "Team workflow", items: ["Sales tasks", "Ops handoff", "Approval queues", "Audit logs", "KPI reporting"] },
];

const controls = [
  "Pricing, lead-time commitments, and custom quotes can require staff approval before the customer sees a final answer.",
  "Low-confidence answers, stale data, or mismatched customer records are escalated instead of guessed.",
  "Every automated response can retain the request, source data, owner, timestamp, and final action for review.",
  "Access rules can separate customer service, sales, operations, and leadership views of sensitive account data.",
];

const rollout: [string, string][] = [
  ["Start", "Pick one high-volume workflow with clear boundaries, such as parts availability, quote intake, or order status updates."],
  ["Pilot", "Run real requests with staff review, measure response speed, handoff quality, escalation rate, and time saved."],
  ["Expand", "Add more channels, more data sources, and more workflow actions once the first use case proves value."],
];

const confidenceNotes = [
  "Voice usage is usually planned by handled call minutes, not just call count.",
  "Email and message AI costs are often low; the real value is safe routing, data access, and workflow execution.",
  "Sensitive actions, such as pricing exceptions or account commitments, should be treated differently from routine responses.",
];

export default function ManufacturingAcceleratorPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Manufacturing"
      title="AI agents for manufacturing customer response, quote intake, and order follow-up."
      description="Give customers faster answers without asking your sales and operations teams to dig through the same systems all day. We start with one valuable workflow, connect the right data, and keep people in control where commitments matter."
      primaryCta={{ label: "Get Free Assessment", href: "#contact" }}
      secondaryCta={{ label: "See The Workflow", href: "#workflow" }}
      image={{ src: "/images/industries/manufacturing.jpg", alt: "Manufacturing team reviewing operations and customer response data" }}
      typicalRequest="Can you confirm availability, lead time, and quote next steps for this part number?"
      diagnosisTitle="Response delays rarely come from one bad tool. They come from scattered conversations and disconnected operating data."
      frictionAreas={frictionAreas}
      workflowTitle="The agent should not just answer. It should move the request through the business."
      workflowDescription="A useful manufacturing automation captures context, checks approved sources, creates the right handoff, and gives customers a timely next step without removing human judgment from sensitive decisions."
      workflowPath={workflowPath}
      valueTitle="Start with the requests that slow your team down every week."
      valueDescription="The first useful automation is usually not a giant replacement project. It is a repeatable customer workflow where better intake, cleaner routing, and faster follow-up can save meaningful staff time."
      valuePatterns={valuePatterns}
      serviceTitle="Choose the service path that fits the first customer-response bottleneck."
      serviceDescription="Manufacturing teams usually start with response agents, customer chat, or a custom operations surface depending on where the workflow breaks today."
      servicePaths={servicePaths}
      sectorTitle="Manufacturing customer operations are becoming faster, more connected, and more data-dependent."
      sectorDescription="The advantage is not novelty. It is using AI to make everyday customer work faster, more consistent, and easier to supervise."
      sectorShifts={sectorShifts}
      systemsTitle="Manufacturing AI works best when it respects your existing systems of record."
      systemsDescription="We do not need to replace everything to create value. The first accelerator usually connects the customer conversation to the tools your team already trusts."
      systemGroups={systemGroups}
      controlsTitle="Keep pricing, commitments, and exceptions under human oversight."
      controlsDescription="Manufacturing workflows often touch availability, lead times, specifications, account relationships, and margin. Those areas need clear rules and traceability."
      controls={controls}
      rolloutTitle="A practical rollout lowers risk for teams that are cautious about spend."
      rolloutDescription="The first milestone should be narrow enough to launch, valuable enough to measure, and clear enough that staff trust how the agent behaves."
      rollout={rollout}
      confidenceTitle="Costs should be tied to real usage and managed system value."
      confidenceDescription="We can expose the raw vendor-cost logic where it helps buyers understand the economics, while making clear that production pricing also includes hosting, monitoring, support, security, integrations, tuning, and staff adoption."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["manufacturing-response-agent", "custom-operations-workbench"]}
      sourcePage="/industries/manufacturing"
      ctaLocation="manufacturing_accelerator_assessment"
    />
  );
}
