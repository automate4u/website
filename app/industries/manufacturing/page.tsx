import Image from "next/image";
import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Customer questions arrive in too many places",
    text: "Parts, pricing, lead time, order status, and quote requests often arrive through phone, shared inboxes, website forms, and rep-specific threads.",
  },
  {
    title: "The answer lives outside the conversation",
    text: "Staff have to check ERP, inventory files, quote trackers, order notes, customer history, and internal knowledge before they can respond confidently.",
  },
  {
    title: "Sales loses time before the real sale begins",
    text: "High-value people spend hours collecting missing details, routing requests, rewriting status updates, and logging notes after the fact.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Capture the request",
    text: "AI handles the first conversation across voice, chat, email, or form intake and collects part numbers, quantities, urgency, account context, and missing details.",
  },
  {
    step: "02",
    title: "Check approved sources",
    text: "The system references only the data sources you approve: inventory, ERP, CRM, knowledge base, quote tracker, order status, or internal process rules.",
  },
  {
    step: "03",
    title: "Route with context",
    text: "Clean summaries, source links, confidence notes, and required next actions are sent to the right owner instead of dropping a vague message into an inbox.",
  },
  {
    step: "04",
    title: "Close the loop",
    text: "Customers receive the right follow-up, CRM activity is logged, KPI events are tracked, and exceptions stay with a human before commitments are made.",
  },
];

const valuePatterns = [
  {
    label: "Quote intake",
    outcome: "Collect part numbers, quantities, deadlines, and missing details before sales review so reps can move faster with cleaner context.",
  },
  {
    label: "Order follow-up",
    outcome: "Turn routine status questions into structured updates with order context, ownership, and escalation when the answer is not clear.",
  },
  {
    label: "Product questions",
    outcome: "Route common technical and availability questions through approved knowledge sources, with human review for pricing or commitments.",
  },
];

const sectorShifts = [
  {
    title: "Customers expect faster answers",
    text: "Industrial buyers may tolerate complex products, but they still expect quick acknowledgement, clear next steps, and fewer follow-up loops.",
  },
  {
    title: "Good data is trapped in operating systems",
    text: "ERP, inventory, quote, CRM, and order data can support better service, but staff often need to manually bridge those systems during every conversation.",
  },
  {
    title: "AI agents are becoming the front door",
    text: "The useful shift is not a standalone chatbot. It is an agent that captures the request, checks approved data, routes work, and keeps the team informed.",
  },
];

const platformGroups = [
  {
    title: "Customer channels",
    items: ["Phone", "Website chat", "Shared inbox", "Contact forms", "SMS follow-up"],
  },
  {
    title: "Systems of record",
    items: ["ERP", "Inventory data", "CRM", "Order status", "Quote tracker"],
  },
  {
    title: "Team workflow",
    items: ["Sales tasks", "Ops handoff", "Approval queues", "Audit logs", "KPI reporting"],
  },
];

const controls = [
  "Pricing, lead-time commitments, and custom quotes can require staff approval before the customer sees a final answer.",
  "Low-confidence answers, stale data, or mismatched customer records are escalated instead of guessed.",
  "Every automated response can retain the request, source data, owner, timestamp, and final action for review.",
  "Access rules can separate customer service, sales, operations, and leadership views of sensitive account data.",
];

const rollout = [
  ["Start", "Pick one high-volume workflow with clear boundaries, such as parts availability, quote intake, or order status updates."],
  ["Pilot", "Run real requests with staff review, measure response speed, handoff quality, escalation rate, and time saved."],
  ["Expand", "Add more channels, more data sources, and more workflow actions once the first use case proves value."],
];

const pricingNotes = [
  "Voice usage is usually planned by handled call minutes, not just call count.",
  "Email and message AI costs are often low; the real value is safe routing, data access, and workflow execution.",
  "Sensitive actions, such as pricing exceptions or account commitments, should be treated differently from routine responses.",
];

export default function ManufacturingAcceleratorPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="manufacturing-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              Manufacturing AI Accelerator
            </p>
            <h1 id="manufacturing-title" className="max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI agents for manufacturing customer response, quote intake, and order follow-up.
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-muted md:text-[17px]">
              Give customers faster answers without asking your sales and operations teams to dig through the same systems all day. We start with one valuable workflow, connect the right data, and keep people in control where commitments matter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="#workflow" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                See The Workflow
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/industries/manufacturing.jpg"
              alt="Manufacturing team reviewing operations and customer response data"
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;Can you confirm availability, lead time, and quote next steps for this part number?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Response delays rarely come from one bad tool. They come from scattered conversations and disconnected operating data.
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
            title="The agent should not just answer. It should move the request through the business."
            description="A useful manufacturing automation captures context, checks approved sources, creates the right handoff, and gives customers a timely next step without removing human judgment from sensitive decisions."
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
              Start with the requests that slow your team down every week.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The first useful automation is usually not a giant replacement project. It is a repeatable customer workflow where better intake, cleaner routing, and faster follow-up can save meaningful staff time.
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="thinking-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What is shaping the sector"
            title="Manufacturing customer operations are becoming more connected, more immediate, and more data-dependent."
            description="The companies that benefit most from AI agents are not chasing novelty. They are using automation to make everyday customer work faster, more consistent, and easier to supervise."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sectorShifts.map((shift) => (
              <article key={shift.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{shift.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{shift.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="platforms-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Systems we connect"
            title="Manufacturing AI works best when it respects your existing systems of record."
            description="We do not need to replace everything to create value. The first accelerator usually connects the customer conversation to the tools your team already trusts."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {platformGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-white p-6">
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Controls by design"
            title="Keep pricing, commitments, and exceptions under human oversight."
            description="Manufacturing workflows often touch availability, lead times, specifications, account relationships, and margin. Those areas need clear rules and traceability."
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="adoption-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Start small, prove value"
              title="A practical rollout lowers risk for buyers who are cautious about spend."
              description="The first milestone should be narrow enough to launch, valuable enough to measure, and clear enough that staff trust how the agent behaves."
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
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Pricing clarity</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">Costs should be tied to real usage and managed system value.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              We can expose the raw vendor-cost logic where it helps the buyer understand the economics, while making clear that production pricing also includes hosting, monitoring, support, security, integrations, tuning, and staff adoption.
            </p>
            <div className="mt-5 grid gap-3">
              {pricingNotes.map((note) => (
                <p key={note} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                  {note}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <ProofStorySection
        storySlugs={["manufacturing-response-agent", "custom-operations-workbench"]}
        eyebrow="Representative proof patterns"
        title="Manufacturing proof should show faster response without risky commitments."
        description="These examples show the type of workflow evidence we validate during assessment: what gets captured, which systems are checked, where humans approve, and which operating metrics improve."
        compact
        className="border-y border-card-border bg-[#f8fbfa]"
      />

      <AssessmentCTA sourcePage="/industries/manufacturing" ctaLocation="manufacturing_accelerator_assessment" />
    </div>
  );
}
