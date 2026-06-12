import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";

const operatingReality = [
  {
    label: "01",
    title: "RFQs arrive incomplete",
    text: "Part numbers, quantities, drawings, specs, due dates, delivery needs, and account context often arrive across email, forms, calls, and rep-specific threads.",
  },
  {
    label: "02",
    title: "Answers sit in separate systems",
    text: "Sales and operations need ERP, CRM, inventory, product docs, order history, quote trackers, and internal rules before they can respond with confidence.",
  },
  {
    label: "03",
    title: "Quote speed affects revenue",
    text: "Delayed acknowledgement, unclear ownership, missed RFQs, and slow quote follow-up can cost opportunities before the team reaches the real sales conversation.",
  },
  {
    label: "04",
    title: "Pricing needs review",
    text: "AI can prepare context and draft next steps, but pricing, substitutions, delivery commitments, and margin-sensitive responses need human approval.",
  },
];

const handles = [
  {
    title: "RFQ intake and missing-detail capture",
    text: "Collect part numbers, quantities, specs, drawings, deadlines, account context, and missing information before sales review.",
  },
  {
    title: "Parts availability and order status",
    text: "Check approved context and prepare structured responses or staff handoffs when availability, lead time, or order status is requested.",
  },
  {
    title: "Quote follow-up and CRM tasks",
    text: "Create CRM activity, quote follow-up tasks, owner alerts, and next-step reminders so opportunities do not sit unnoticed.",
  },
  {
    title: "Human pricing and commitment review",
    text: "Route pricing exceptions, substitutions, delivery promises, and margin-sensitive answers to authorized staff before customer commitment.",
  },
];

const buyerPriorities = [
  {
    title: "Recover RFQs before they stall",
    text: "Give customers a fast acknowledgement, capture missing details, and assign ownership before the opportunity disappears into inboxes and rep-specific threads.",
  },
  {
    title: "Shorten quote cycle time",
    text: "Prepare the context sales and operations need: part numbers, quantities, drawings, account history, inventory, lead time, and source notes.",
  },
  {
    title: "Protect margin and commitments",
    text: "Keep pricing, substitutions, delivery promises, and account exceptions under human review while the agent handles intake and follow-up work.",
  },
];

const workflowPreview = [
  ["Inbound RFQ", "Email, form, chat, call, or distributor request"],
  ["AI classification", "Part, quote, availability, order, technical, or escalation"],
  ["Data check", "ERP, CRM, inventory, quote tracker, product docs, order context"],
  ["Action prepared", "CRM update, quote task, draft response, owner alert"],
  ["Human review", "Pricing, substitution, delivery, margin, or account exception"],
  ["KPI logged", "Response SLA, quote cycle time, handoff quality, follow-up completion"],
];

const controlItems = [
  {
    title: "Approved source boundaries",
    text: "The agent uses only approved sources and can show where a draft answer or handoff came from.",
  },
  {
    title: "Pricing review gates",
    text: "Pricing, substitutions, margin-sensitive language, and delivery commitments can require staff approval.",
  },
  {
    title: "Escalation for uncertainty",
    text: "Stale data, conflicting records, low confidence, or unusual account requests route to a human instead of being guessed.",
  },
  {
    title: "Traceable handoffs",
    text: "Every request can preserve the source, owner, system context, decision, follow-up, and outcome for review.",
  },
];

const rollout = [
  {
    step: "Week 1",
    title: "Map the response workflow",
    text: "Confirm the first RFQ or order-response workflow, source systems, approval rules, handoff owners, and the KPI baseline.",
  },
  {
    step: "Week 2",
    title: "Build the working pilot",
    text: "Configure classification, approved knowledge, ERP/CRM handoff patterns, response drafts, and quote or follow-up tasks.",
  },
  {
    step: "Week 3",
    title: "Test edge cases and controls",
    text: "Review real examples, pricing exceptions, stale data, substitutions, delivery commitments, and escalation behavior with staff.",
  },
  {
    step: "Week 4",
    title: "Launch, monitor, and tune",
    text: "Deploy the bounded workflow, track response SLA and quote cycle impact, review handoffs, and decide what should expand next.",
  },
];

const faqs = [
  {
    question: "Does the agent send final quotes automatically?",
    answer: "Not by default. The safer starting point is to collect context, prepare drafts, create quote tasks, and route pricing or margin-sensitive responses to authorized staff.",
  },
  {
    question: "Can it connect to our ERP or CRM?",
    answer: "Yes, if the system exposes the right API, export, database, webhook, or integration path. The first step is mapping which fields are safe and useful for the workflow.",
  },
  {
    question: "What if the product or inventory data is unclear?",
    answer: "The agent should not guess. It can flag the uncertainty, show the source context, and route the request to sales, parts, or operations with a concise summary.",
  },
  {
    question: "Can it support distributor or key-account workflows?",
    answer: "Yes. Routing, response rules, account context, and escalation paths can differ by customer type, territory, product line, or internal owner.",
  },
  {
    question: "What should the first pilot measure?",
    answer: "Common metrics include first response time, quote cycle time, missed RFQs recovered, manual triage avoided, CRM follow-up completion, and escalation quality.",
  },
];

export default function ManufacturingQuoteOrderAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="manufacturing-solution-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="manufacturing-solution-title" className="max-w-[800px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              Manufacturing quote and order response agent.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              A focused AI workflow for RFQ intake, parts availability, quote follow-up, order questions, ERP/CRM handoff, and human pricing review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AssessmentTrigger
                sourcePage="/solutions/manufacturing-quote-order-agent"
                ctaLocation="manufacturing_solution_hero"
                serviceInterest="ai-agents"
                workflowInterest="manufacturing quote and order response agent"
                modalTitle="Request A Manufacturing Workflow Assessment"
                modalDescription="Tell us how RFQs, quote follow-up, order questions, ERP/CRM handoffs, and pricing reviews work today. We will look for a bounded first workflow worth piloting."
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover"
              >
                Request Workflow Assessment
              </AssessmentTrigger>
              <Link href="#workflow-preview" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                See Workflow Preview
              </Link>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted">
              Curious about cost?{" "}
              <Link href="/pricing#workflow-agents" className="font-extrabold text-[#167f65] hover:underline">
                View Workflow Agent pricing
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Response workbench</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Inbound request queue</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Staff review on</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["RFQ received", "Missing specs", "Sales task created"],
                  ["Availability question", "ERP context checked", "Draft response ready"],
                  ["Quote follow-up", "CRM note updated", "Owner alerted"],
                  ["Substitution request", "Margin review required", "Escalated"],
                ].map(([request, context, action]) => (
                  <div key={request} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{request}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed to shorten response cycles while keeping pricing and commitments human-led.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="manufacturing-buyer-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">For sales and operations leaders</p>
              <h2 id="manufacturing-buyer-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
                The business case is faster response without weaker control.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                This is most useful when quote speed, missed RFQs, order questions, manual follow-up, or ERP/CRM handoffs are already affecting revenue or staff capacity.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {buyerPriorities.map((item) => (
                <article key={item.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <h3 className="text-lg font-extrabold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="manufacturing-reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Manufacturing response reality</p>
            <h2 id="manufacturing-reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Quote and order response work depends on systems outside the message.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-white/66 md:text-base">
              The value comes from connecting the incoming request to approved data, the right owner, and the right human decision point.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {operatingReality.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="mb-6 grid h-9 w-9 place-items-center rounded-lg border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                  {item.label}
                </div>
                <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="handles-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What the agent handles"
            title="Built for response workflows where speed, context, and control all matter."
            description="The first pilot should focus on the request types that slow sales and operations down every week."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {handles.map((card) => (
              <article key={card.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow-preview" className="scroll-mt-28 border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="preview-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Workflow preview"
            title="From inbound request to controlled next action."
            description="A useful agent does not just answer. It classifies, checks approved data, prepares the next action, and escalates the moments where people must decide."
          />
          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)]">
            <div className="grid gap-3">
              {workflowPreview.map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[64px_1fr]">
                  <p className="text-sm font-extrabold text-[#167f65]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-base font-extrabold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071112] px-4 py-14 text-white md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">Human control</p>
            <h2 id="controls-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Keep pricing, commitments, substitutions, and exceptions with the right people.
            </h2>
            <p className="mt-5 max-w-[780px] text-base leading-8 text-white/66 md:text-[18px]">
              The agent can prepare context and action, but staff define what is safe to answer, what needs approval, and what must be escalated.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {controlItems.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/62">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="2-4 week launch sprint"
            title="A bounded first workflow makes the project easier to evaluate."
            description="Timeline depends on integration complexity, data access, security requirements, and how quickly your team can review workflow decisions."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Questions manufacturing leaders ask"
            title="Reduce uncertainty before the first response workflow goes live."
            description="The first build should prove faster response and cleaner handoff without weakening pricing control, margin protection, or customer commitments."
          />
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-card-border bg-[#f8fbfa] p-5">
                <summary className="cursor-pointer text-base font-extrabold leading-6 text-ink marker:text-[#167f65]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="assessment-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Workflow assessment</p>
            <h2 id="assessment-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Find the first manufacturing response workflow worth piloting.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              We will review where RFQs and customer questions enter today, which systems need to be checked, where humans must approve, and which metric would prove the pilot is worth expanding.
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Request a manufacturing workflow assessment.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Share the current RFQ, quote, order, ERP, CRM, or inbox workflow. We will look for a bounded pilot that can prove response speed, handoff quality, and value.
            </p>
            <AssessmentTrigger
              sourcePage="/solutions/manufacturing-quote-order-agent"
              ctaLocation="manufacturing_solution_final_cta"
              serviceInterest="ai-agents"
              workflowInterest="manufacturing quote and order response agent"
              modalTitle="Request A Manufacturing Workflow Assessment"
              modalDescription="Tell us how RFQs, quote follow-up, order questions, ERP/CRM handoffs, and pricing reviews work today. We will look for a bounded first workflow worth piloting."
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
            >
              Request Workflow Assessment
            </AssessmentTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
