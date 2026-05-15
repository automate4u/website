import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const riskConcerns = [
  {
    title: "The AI answers something it should not",
    text: "Approved response boundaries, fallback language, retrieval limits, and human escalation keep uncertain or sensitive situations from being handled blindly.",
  },
  {
    title: "The AI touches the wrong data",
    text: "We define what systems the automation can read, what it can write, what needs approval, and what should remain outside the workflow.",
  },
  {
    title: "No one knows what happened",
    text: "Important workflows should create records: call summaries, ticket notes, CRM activity, internal notifications, timestamps, and audit trails.",
  },
  {
    title: "The system works on launch day, then drifts",
    text: "Monitoring, review points, prompt/model checks, and Managed AI Operations keep the system aligned as volumes, policies, tools, and models change.",
  },
];

const controlLayers = [
  {
    label: "Policy boundaries",
    controls: [
      "Approved answer sources",
      "Sensitive-topic limits",
      "Do-not-answer rules",
      "Escalation language",
    ],
  },
  {
    label: "Access boundaries",
    controls: [
      "Read/write separation",
      "Least-privilege assumptions",
      "System-of-record discipline",
      "Restricted workflow scopes",
    ],
  },
  {
    label: "Human review",
    controls: [
      "Approval checkpoints",
      "Confidence-based handoff",
      "Sensitive-case routing",
      "Staff override paths",
    ],
  },
  {
    label: "Observability",
    controls: [
      "Transcript and action logs",
      "Failed-sync alerts",
      "Escalation reports",
      "Monthly review signals",
    ],
  },
];

const workflowMatrix = [
  {
    workflow: "Routine customer question",
    automation: "Answer from approved knowledge and log the interaction.",
    human: "Escalate when confidence is low or the customer asks for judgment.",
  },
  {
    workflow: "Appointment or call booking",
    automation: "Check availability, collect details, create the booking, and send confirmation.",
    human: "Route conflicts, unusual requests, or VIP cases to staff.",
  },
  {
    workflow: "Quote, order, or parts question",
    automation: "Collect structured details, check approved data, create a follow-up task, and notify the right team.",
    human: "Review pricing, exceptions, substitutions, or sensitive commercial decisions.",
  },
  {
    workflow: "Childcare, healthcare, or financial edge case",
    automation: "Identify, document, summarize, and route the request with context.",
    human: "Make the final decision until policy, data accuracy, and legal requirements are validated.",
  },
];

const clientArtifacts = [
  "Risk and workflow boundary map",
  "Approved response and escalation rules",
  "Integration permission assumptions",
  "Human-in-the-loop review points",
  "Testing checklist for sensitive cases",
  "Monitoring and optimization plan",
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/security-monitoring-ai-safety"
);

export default function SecurityMonitoringAISafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Build AI systems your team can control, inspect, and trust.
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-white/74 md:text-[17px]">
              Automation should not mean blind autonomy. We design AI workflows with approved boundaries, human handoffs, monitoring, auditability, and practical safeguards around the decisions that matter.
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
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Control model</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Define", "What the AI can answer, access, create, update, and escalate."],
                ["Constrain", "Where approvals, fallback language, and restricted actions are required."],
                ["Observe", "What gets logged, monitored, reviewed, and improved after launch."],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{text}</p>
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
            title="The real risk is not AI itself. It is unclear boundaries."
            description="Most SMB and mid-market buyers do not want a system that makes uncontrolled decisions. They want useful automation with clear limits, evidence, and a path back to a person."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {riskConcerns.map((concern) => (
              <article key={concern.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{concern.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{concern.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Controls we design"
            title="Safety is built into the workflow, not added after launch."
            description="The right controls depend on the workflow, data sensitivity, systems involved, and the decisions the AI is allowed to support."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {controlLayers.map((layer) => (
              <article key={layer.label} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-lg font-extrabold text-ink">{layer.label}</h2>
                <ul className="mt-5 grid gap-3">
                  {layer.controls.map((control) => (
                    <li key={control} className="rounded-md bg-[#f8fbfa] px-3 py-2 text-sm font-semibold leading-5 text-muted">
                      {control}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Automation boundaries"
            title="Decide what the AI can do, what it can draft, and what it must hand off."
            description="This is especially important for childcare, healthcare, financial services, regulated workflows, customer commitments, pricing, identity, safety, and any situation that requires judgment."
          />
          <div className="mt-8 overflow-hidden rounded-lg border border-card-border bg-white shadow-[0_12px_36px_rgba(15,23,32,0.05)]">
            <div className="hidden grid-cols-[0.85fr_1.1fr_1.1fr] gap-0 border-b border-card-border bg-[#051C2C] text-sm font-extrabold text-white md:grid">
              <div className="p-4">Workflow</div>
              <div className="border-l border-white/10 p-4">Good automation fit</div>
              <div className="border-l border-white/10 p-4">Human control</div>
            </div>
            <div className="divide-y divide-card-border">
              {workflowMatrix.map((row) => (
                <div key={row.workflow} className="grid gap-0 md:grid-cols-[0.85fr_1.1fr_1.1fr]">
                  <div className="bg-[#f8fbfa] p-4 text-sm font-extrabold leading-6 text-ink">{row.workflow}</div>
                  <div className="border-card-border p-4 text-sm leading-6 text-muted md:border-l">{row.automation}</div>
                  <div className="border-card-border p-4 text-sm leading-6 text-muted md:border-l">{row.human}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 max-w-[860px] text-sm leading-6 text-muted">
            For high-risk workflows, the first version should identify, document, summarize, and route the situation. Final approval should remain with authorized staff until the workflow, data, and policy requirements are validated.
          </p>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Implementation evidence</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">
              Clients should be able to see the control system.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Trust improves when safety is visible. During assessment, blueprint, pilot, or launch work, the client should understand the boundaries and review points before the system touches important operations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {clientArtifacts.map((artifact) => (
              <p key={artifact} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {artifact}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Where this matters"
            title="Security and AI safety should appear inside every service, not only on this page."
            description="The safeguards should be right-sized to the workflow. A marketing draft agent needs different controls than a voice agent handling pickup changes, medical admin, financial requests, or customer commitments."
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
            title="Safety works best with integrations, measurement, training, and ongoing operations."
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

      <AssessmentCTA sourcePage="/capabilities/security-monitoring-ai-safety" ctaLocation="security_safety_assessment" />
    </div>
  );
}
