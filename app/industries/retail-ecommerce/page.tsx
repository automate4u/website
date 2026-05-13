import Image from "next/image";
import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Customers ask the same questions across every channel",
    text: "Product fit, order status, returns, delivery timing, sizing, availability, discounts, warranty, and post-purchase questions arrive through chat, email, forms, social, and phone.",
  },
  {
    title: "Support and marketing pull from the same limited team",
    text: "The same people often respond to customers, update product information, create content, schedule campaigns, handle reviews, and chase follow-up work.",
  },
  {
    title: "The answer depends on connected context",
    text: "Useful responses often require ecommerce order data, product catalog details, return rules, inventory, CRM notes, shipping status, and campaign context.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Capture the request",
    text: "AI handles chat, email, forms, social messages, or calls and identifies product questions, order status, returns, complaints, or sales opportunities.",
  },
  {
    step: "02",
    title: "Check approved sources",
    text: "The workflow references approved product data, order records, shipping information, return policies, inventory, promotions, and customer history.",
  },
  {
    step: "03",
    title: "Take the next action",
    text: "The system drafts or sends the response, creates a support task, starts a return workflow, updates CRM, tags the issue, or routes to a person.",
  },
  {
    step: "04",
    title: "Learn what is slowing growth",
    text: "Recurring questions, return reasons, product gaps, campaign questions, and support volume can feed reporting and content ideas.",
  },
];

const valuePatterns = [
  {
    label: "Customer support automation",
    outcome: "Answer routine product, order, shipping, return, and policy questions while escalating refunds, complaints, VIP customers, and unusual cases.",
  },
  {
    label: "Product and sales guidance",
    outcome: "Help shoppers compare products, understand fit, choose options, and get answers that support purchase decisions without waiting for staff.",
  },
  {
    label: "Marketing content operations",
    outcome: "Turn product knowledge, promotions, reviews, and recurring support questions into draft emails, social posts, FAQs, and campaign tasks for approval.",
  },
];

const servicePaths = [
  {
    title: "AI Chat and support agents",
    description:
      "Customer-facing chat and email workflows for product questions, order status, returns, support triage, and human handoff.",
    href: "/core-services/ai-chat",
    cta: "Explore AI Chat",
  },
  {
    title: "Marketing automation",
    description:
      "Content, campaign, review, approval, and reporting workflows that help small teams publish and follow up more consistently.",
    href: "/core-services/marketing-automation",
    cta: "Explore Marketing Automation",
  },
  {
    title: "Operations workflow agents",
    description:
      "Back-office agents that connect support conversations to CRM updates, order notes, fulfillment tasks, escalation queues, and KPI reporting.",
    href: "/core-services/ai-agents",
    cta: "Explore AI Agents",
  },
];

const sectorShifts = [
  {
    title: "Service expectations keep rising",
    text: "Customers expect fast answers before and after purchase, even when the team is small and questions arrive outside business hours.",
  },
  {
    title: "Content and support are connected",
    text: "The questions customers ask every week are often the same questions that should shape FAQs, product pages, email campaigns, and social content.",
  },
  {
    title: "Automation needs brand control",
    text: "Retail automation should follow approved tone, policies, product facts, and escalation rules so the brand stays consistent while the workload drops.",
  },
];

const systemGroups = [
  {
    title: "Customer channels",
    items: ["Website chat", "Email", "Contact forms", "Social messages", "Phone"],
  },
  {
    title: "Commerce systems",
    items: ["Shopify", "WooCommerce", "Order data", "Product catalog", "Inventory"],
  },
  {
    title: "Team workflow",
    items: ["Support queue", "CRM", "Return task", "Content calendar", "KPI reporting"],
  },
];

const controls = [
  "Approved product facts, return policies, shipping rules, and brand tone keep responses consistent.",
  "Refunds, complaints, chargebacks, legal threats, VIP customers, and low-confidence answers can route to staff.",
  "Marketing drafts can require human approval before publication or scheduling.",
  "Audit logs can preserve the customer request, source data, response, action taken, owner, and final outcome.",
];

const rollout = [
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
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="retail-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              Retail & Ecommerce
            </p>
            <h1 id="retail-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI support, product guidance, and marketing workflows for growing retail teams.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              We help ecommerce and retail teams reduce repetitive customer questions, improve follow-up, connect support to operations, and create marketing workflows that keep humans in control of brand, refunds, and sensitive decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/core-services/ai-chat" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Explore AI Chat
              </Link>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Get Free Assessment
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/industries/retail.jpg"
              alt="Retail ecommerce team reviewing customer support and product workflow"
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;Where is my order, and can I exchange this for a different size?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Retail teams lose time when support, sales guidance, and content work compete for the same attention.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {frictionAreas.map((area) => (
              <article key={area.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-28 bg-white px-4 py-14 md:py-20" aria-labelledby="workflow-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Connected workflow"
            title="Support automation should answer the customer and improve the operation behind the question."
            description="A useful retail agent captures the request, checks approved sources, takes the right next action, and turns repeated customer questions into better support, product, and marketing intelligence."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowPath.map((item) => (
              <article key={item.step} className="relative rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-extrabold tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="value-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#87e6ce]">Where value usually starts</p>
            <h2 id="value-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Start where customer questions are frequent, repeatable, and measurable.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The first useful automation is usually a high-volume support or content workflow where faster response and better routing can lower cost per request without weakening brand control.
            </p>
          </div>
          <div className="grid gap-4">
            {valuePatterns.map((pattern) => (
              <article key={pattern.label} className="rounded-lg border border-white/14 bg-white/[0.06] p-5">
                <p className="text-sm font-bold text-[#87e6ce]">{pattern.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/82">{pattern.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Relevant service paths"
            title="Retail automation should connect customer support, operations, and marketing."
            description="The strongest ecommerce deployments often start with support, then expand into product content, campaign workflows, post-purchase follow-up, and operational reporting."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{path.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{path.description}</p>
                <Link href={path.href} className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="sector-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What is shaping the sector"
            title="The best retail teams use every customer question as both a service moment and an operating signal."
            description="Automation can reduce repetitive support work while revealing what customers need to know before buying, after buying, and before they churn."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sectorShifts.map((shift) => (
              <article key={shift.title} className="rounded-lg border border-card-border bg-white p-6">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{shift.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{shift.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="systems-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Systems we connect"
            title="The agent should respect product data, order status, brand rules, and team workflow."
            description="The first workflow can connect customer channels to ecommerce platforms, order data, support queues, CRM, content calendars, and reporting."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {systemGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-lg font-extrabold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-card-border bg-white px-3 py-1.5 text-sm font-semibold text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Controls by design"
            title="Keep brand voice, refunds, complaints, and public content under the right level of review."
            description="Retail automation touches customer trust and public brand perception. The system should be fast for routine work and careful where money, reputation, or policy exceptions are involved."
          />
          <div className="rounded-lg border border-card-border bg-white p-6 shadow-[0_10px_30px_rgba(15,23,32,0.04)]">
            <div className="grid gap-5">
              {controls.map((item) => (
                <div key={item} className="flex gap-4 border-b border-card-border pb-5 last:border-b-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1db993]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Start small, prove value"
              title="A practical rollout reduces support load before expanding into more sensitive workflows."
              description="The first milestone should be easy to measure, safe to supervise, and valuable enough that the team can see how AI improves the customer experience."
            />
            <div className="mt-8 grid gap-4">
              {rollout.map(([title, text]) => (
                <article key={title} className="grid gap-2 rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] sm:grid-cols-[110px_1fr]">
                  <h3 className="text-lg font-extrabold text-[#167f65]">{title}</h3>
                  <p className="text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Spend confidence</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">Costs should be tied to request volume, workflow risk, and measurable support value.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Support and content workflows can often start smaller than voice-heavy systems. The real cost driver is safe integration, quality control, monitoring, and the number of actions the system can reliably complete.
            </p>
            <div className="mt-5 grid gap-3">
              {confidenceNotes.map((note) => (
                <p key={note} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                  {note}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <AssessmentCTA sourcePage="/industries/retail-ecommerce" ctaLocation="retail_ecommerce_assessment" />
    </div>
  );
}
