import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const measurementProblems = [
  {
    title: "Automation value is hard to prove",
    text: "If hours saved, response time, cost per request, handoff quality, and conversion impact are not tracked, buyers are left guessing whether the system is worth expanding.",
  },
  {
    title: "Reports lag behind operations",
    text: "Manual reporting often arrives after the problem has already affected customers, staff, or revenue.",
  },
  {
    title: "Different teams use different definitions",
    text: "A lead, ticket, completed workflow, escalation, or saved hour needs a shared definition before dashboards can guide decisions.",
  },
  {
    title: "AI activity is not connected to business outcomes",
    text: "Call minutes, chats, and agent actions only matter when they connect to operational KPIs and financial outcomes.",
  },
];

const valueLayers = [
  {
    label: "Baseline",
    detail: "Define current volume, time spent, response speed, handoffs, cost per request, and operational bottlenecks.",
  },
  {
    label: "Instrument",
    detail: "Log workflow events such as calls handled, tasks created, escalations, bookings, follow-ups, and failed actions.",
  },
  {
    label: "Review",
    detail: "Use 30/60/90-day value reviews to compare performance against the baseline and decide what should expand.",
  },
  {
    label: "Optimize",
    detail: "Tune workflows, prompts, handoff rules, integrations, and staffing practices based on real operating data.",
  },
];

const kpiGroups = [
  {
    title: "Customer response",
    metrics: ["Response time", "Missed-call recovery", "First-contact resolution", "Follow-up completion"],
  },
  {
    title: "Operational workload",
    metrics: ["Manual touches avoided", "Admin hours reduced", "Escalation rate", "Backlog volume"],
  },
  {
    title: "Revenue workflow",
    metrics: ["Qualified leads captured", "Bookings created", "Quote cycle time", "Pipeline tasks completed"],
  },
  {
    title: "Quality and control",
    metrics: ["Handoff quality", "Exception rate", "Audit completeness", "Staff review outcomes"],
  },
];

const roadmap = [
  {
    period: "First 30 days",
    title: "Establish the baseline",
    text: "Confirm what is being measured, capture early workflow events, and review where the system is reducing manual work or creating friction.",
  },
  {
    period: "First 60 days",
    title: "Tune the workflow",
    text: "Refine handoffs, prompts, routing, integrations, staff process, and reporting based on real usage patterns.",
  },
  {
    period: "First 90 days",
    title: "Decide the expansion path",
    text: "Compare value against the baseline and decide whether to add channels, workflows, reporting, or Managed AI Operations.",
  },
];

const deliverables = [
  "KPI baseline and measurement plan",
  "Workflow event taxonomy",
  "Dashboard or reporting view",
  "30/60/90-day review cadence",
  "Automation value summary",
  "Expansion recommendation",
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/operational-intelligence-analytics"
);

export default function OperationalIntelligenceAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Measure whether AI automation is actually improving the business.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-white/74 md:text-[17px]">
              A useful AI system should make work easier to see, not harder to inspect. We connect automation activity to KPIs, workflow events, dashboards, and review rhythms so clients can decide what to keep, tune, or expand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/capabilities" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                How We Build
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Value realization model</p>
            <div className="mt-5 grid gap-3">
              {valueLayers.map((layer, index) => (
                <div key={layer.label} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{layer.label}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Buyer concerns"
            title="AI spend feels risky when value is not measured."
            description="The safest way to reduce spend anxiety is to start with a clear baseline, track the first workflow honestly, and expand only when the operating data supports it."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {measurementProblems.map((problem) => (
              <article key={problem.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{problem.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Measurement design"
            title="The right dashboard starts with the right operating questions."
            description="We do not start by adding charts everywhere. We decide which actions, handoffs, and outcomes matter for the first workflow."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {kpiGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-lg font-extrabold text-ink">{group.title}</h2>
                <div className="mt-5 grid gap-2">
                  {group.metrics.map((metric) => (
                    <span key={metric} className="rounded-md bg-[#f8fbfa] px-3 py-2 text-sm font-semibold leading-5 text-muted">
                      {metric}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="30 / 60 / 90"
            title="Value realization should be reviewed, not assumed."
            description="A practical review cadence gives buyers confidence that the first workflow is being measured before they commit to more automation."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.period} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{item.period}</p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Implementation evidence</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">
              Clients should see what is working, what needs tuning, and what should happen next.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Reporting should make the next decision easier: keep the workflow, tune it, pause it, or expand into adjacent work with clearer confidence.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((deliverable) => (
              <p key={deliverable} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {deliverable}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Where this matters"
            title="Every service should be tied to measurable business outcomes."
            description="Measurement helps buyers understand whether voice, agents, chat, marketing automation, strategy, or custom software are reducing repetitive work and improving the workflows that matter."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {serviceOffers.slice(0, 6).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45 hover:shadow-[0_16px_38px_rgba(15,23,32,0.08)]"
              >
                <h2 className="text-xl font-extrabold leading-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-extrabold text-[#167f65]">
                  View service <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Related capabilities"
            title="Value realization depends on integrations, safety, adoption, and ongoing operations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedPillars.slice(0, 5).map((pillar) => (
              <Link key={pillar.href} href={pillar.href} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <h2 className="text-lg font-extrabold leading-tight text-ink">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/capabilities/operational-intelligence-analytics" ctaLocation="operational_intelligence_assessment" />
    </div>
  );
}
