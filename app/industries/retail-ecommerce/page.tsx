import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

const frictionAreas = [
  { title: "Customers ask the same questions across every channel", text: "Product fit, order status, returns, delivery timing, sizing, availability, discounts, warranty, and post-purchase questions arrive through chat, email, forms, social, and phone." },
  { title: "Support and marketing pull from the same limited team", text: "The same people often respond to customers, update product information, create content, schedule campaigns, handle reviews, and chase follow-up work." },
  { title: "The answer depends on connected context", text: "Useful responses often require ecommerce order data, product catalog details, return rules, inventory, CRM notes, shipping status, and campaign context." },
];

const workflowPath = [
  { step: "01", title: "Capture the request", text: "AI handles chat, email, forms, social messages, or calls and identifies product questions, order status, returns, complaints, or sales opportunities." },
  { step: "02", title: "Check approved sources", text: "The workflow references approved product data, order records, shipping information, return policies, inventory, promotions, and customer history." },
  { step: "03", title: "Take the next action", text: "The system drafts or sends the response, creates a support task, starts a return workflow, updates CRM, tags the issue, or routes to a person." },
  { step: "04", title: "Learn what is slowing growth", text: "Recurring questions, return reasons, product gaps, campaign questions, and support volume can feed reporting and content ideas." },
];

const valuePatterns = [
  { label: "Customer support automation", outcome: "Answer routine product, order, shipping, return, and policy questions while escalating refunds, complaints, VIP customers, and unusual cases." },
  { label: "Product and sales guidance", outcome: "Help shoppers compare products, understand fit, choose options, and get answers that support purchase decisions without waiting for staff." },
  { label: "Marketing content operations", outcome: "Turn product knowledge, promotions, reviews, and recurring support questions into draft emails, social posts, FAQs, and campaign tasks for approval." },
];

const servicePaths = [
  { title: "AI Chat and support agents", description: "Customer-facing chat and email workflows for product questions, order status, returns, support triage, and human handoff.", href: "/services/ai-chat", cta: "Explore AI Chat" },
  { title: "Marketing automation", description: "Content, campaign, review, approval, and reporting workflows that help small teams publish and follow up more consistently.", href: "/services/marketing-automation", cta: "Explore Marketing Automation" },
  { title: "Operations workflow agents", description: "Back-office agents that connect support conversations to CRM updates, order notes, fulfillment tasks, escalation queues, and KPI reporting.", href: "/services/ai-agents", cta: "Explore AI Agents" },
];

const sectorShifts = [
  { title: "Service expectations keep rising", text: "Customers expect fast answers before and after purchase, even when the team is small and questions arrive outside business hours." },
  { title: "Content and support are connected", text: "The questions customers ask every week are often the same questions that should shape FAQs, product pages, email campaigns, and social content." },
  { title: "Automation needs brand control", text: "Retail automation should follow approved tone, policies, product facts, and escalation rules so the brand stays consistent while the workload drops." },
];

const systemGroups = [
  { title: "Customer channels", items: ["Website chat", "Email", "Contact forms", "Social messages", "Phone"] },
  { title: "Commerce systems", items: ["Shopify", "WooCommerce", "Order data", "Product catalog", "Inventory"] },
  { title: "Team workflow", items: ["Support queue", "CRM", "Return task", "Content calendar", "KPI reporting"] },
];

const controls = [
  "Approved product facts, return policies, shipping rules, and brand tone keep responses consistent.",
  "Refunds, complaints, chargebacks, legal threats, VIP customers, and low-confidence answers can route to staff.",
  "Marketing drafts can require human approval before publication or scheduling.",
  "Audit logs can preserve the customer request, source data, response, action taken, owner, and final outcome.",
];

const rollout: [string, string][] = [
  ["Start", "Choose one high-volume workflow, such as order status, returns triage, product questions, or content drafting for a specific channel."],
  ["Pilot", "Run real requests with staff review, track response time, escalation rate, support touches, sales assist rate, and customer satisfaction signals."],
  ["Expand", "Add more channels, product data, marketing workflows, review requests, post-purchase follow-up, or campaign reporting once the first use case proves value."],
];

const confidenceNotes = [
  "Start with routine support or content workflows before automating refunds, complaints, or brand-sensitive publishing.",
  "Measure response time, cost per request, support backlog, manual touches reduced, and conversion or retention signals.",
  "Keep clear approval rules for refunds, discounts, sensitive customers, legal issues, and public-facing marketing content.",
];

export default function RetailEcommercePage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Retail and ecommerce"
      title="AI support, product guidance, and marketing workflows for growing retail teams."
      description="We help ecommerce and retail teams reduce repetitive customer questions, improve follow-up, connect support to operations, and create marketing workflows that keep humans in control of brand, refunds, and sensitive decisions."
      primaryCta={{ label: "Explore AI Chat", href: "/services/ai-chat" }}
      image={{ src: "/images/industries/retail.jpg", alt: "Retail ecommerce team reviewing customer support and product workflow" }}
      typicalRequest="Where is my order, and can I exchange this for a different size?"
      diagnosisTitle="Retail teams lose time when support, sales guidance, and content work compete for the same attention."
      frictionAreas={frictionAreas}
      workflowTitle="Support automation should answer the customer and improve the operation behind the question."
      workflowDescription="A useful retail agent captures the request, checks approved sources, takes the right next action, and turns repeated customer questions into better support, product, and marketing intelligence."
      workflowPath={workflowPath}
      valueTitle="Start with the customer questions that create the most repeat work."
      valueDescription="The first useful automation is usually a routine support, product guidance, return triage, or content workflow where brand rules and escalation can be clearly supervised."
      valuePatterns={valuePatterns}
      serviceTitle="Retail automation should connect customer support, operations, and marketing."
      serviceDescription="The strongest ecommerce deployments often start with support, then expand into product content, campaign workflows, post-purchase follow-up, and operational reporting."
      servicePaths={servicePaths}
      sectorTitle="The best retail teams use every customer question as both a service moment and an operating signal."
      sectorDescription="Automation can reduce repetitive support work while revealing what customers need to know before buying, after buying, and before they churn."
      sectorShifts={sectorShifts}
      systemsTitle="The agent should respect product data, order status, brand rules, and team workflow."
      systemsDescription="The first workflow can connect customer channels to ecommerce platforms, order data, support queues, CRM, content calendars, and reporting."
      systemGroups={systemGroups}
      controlsTitle="Keep brand voice, refunds, complaints, and public content under the right level of review."
      controlsDescription="Retail automation touches customer trust and public brand perception. The system should be fast for routine work and careful where money, reputation, or policy exceptions are involved."
      controls={controls}
      rolloutTitle="A practical rollout reduces support load before expanding into more sensitive workflows."
      rolloutDescription="The first milestone should be easy to measure, safe to supervise, and valuable enough that the team can see how AI improves the customer experience."
      rollout={rollout}
      confidenceTitle="The first project should prove response quality before expanding scope."
      confidenceDescription="Start with a bounded support or marketing workflow, track workload reduction and customer signals, then expand once the team trusts the approval and escalation rules."
      confidenceNotes={confidenceNotes}
      proofStorySlugs={["retail-support-order-agent", "marketing-content-workflow"]}
      sourcePage="/industries/retail-ecommerce"
      ctaLocation="retail_ecommerce_assessment"
    />
  );
}
