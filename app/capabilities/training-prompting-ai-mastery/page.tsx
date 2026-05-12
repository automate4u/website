import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const adoptionConcerns = [
  {
    title: "Staff worry the AI will replace them",
    text: "Adoption improves when the system is framed as operational support: it handles repetitive work, creates cleaner handoffs, and keeps humans responsible for judgment-heavy cases.",
  },
  {
    title: "People do not know when to trust it",
    text: "Teams need practical rules for when the AI can answer, when it drafts, when it escalates, and when staff should review before action.",
  },
  {
    title: "New workflows fail because nobody owns them",
    text: "A workflow needs clear roles: who reviews exceptions, who updates approved answers, who watches reports, and who decides what expands next.",
  },
  {
    title: "Training is too generic to change behavior",
    text: "Staff need scenarios from their real work: customer calls, quote requests, parent communication, support tickets, scheduling, content review, and internal handoffs.",
  },
];

const adoptionLayers = [
  {
    label: "Role clarity",
    detail: "Define what the AI handles, what staff approve, and who owns follow-up when exceptions occur.",
  },
  {
    label: "Workflow practice",
    detail: "Train the team on realistic scenarios, escalation paths, approved responses, and handoff expectations.",
  },
  {
    label: "Feedback loop",
    detail: "Collect staff feedback after launch so prompts, policies, automations, and handoffs can be tuned.",
  },
  {
    label: "Operating rhythm",
    detail: "Use review meetings, reporting, and Managed AI Operations to keep adoption from fading after go-live.",
  },
];

const trainingModules = [
  {
    title: "Frontline staff",
    topics: ["How calls/messages are handled", "What gets escalated", "How to review summaries", "How to correct issues"],
  },
  {
    title: "Managers",
    topics: ["Workflow ownership", "Exception review", "KPI interpretation", "Approved-answer updates"],
  },
  {
    title: "Operations teams",
    topics: ["System handoffs", "Failed-sync review", "Data quality", "Process changes"],
  },
  {
    title: "Leadership",
    topics: ["Spend confidence", "Value review", "Expansion decisions", "Governance expectations"],
  },
];

const rollout = [
  {
    step: "Before launch",
    title: "Prepare the team",
    text: "Introduce the workflow, explain what stays human, and review the first escalation and approval rules.",
  },
  {
    step: "Launch period",
    title: "Practice real scenarios",
    text: "Walk through common and edge cases so staff know how to interpret summaries, handoffs, alerts, and review tasks.",
  },
  {
    step: "After launch",
    title: "Tune with feedback",
    text: "Review staff feedback, customer outcomes, handoff quality, KPI signals, and policy changes before expanding the workflow.",
  },
];

const deliverables = [
  "Role and handoff guide",
  "Staff scenario training",
  "Escalation playbook",
  "Approved-answer update process",
  "Launch feedback loop",
  "Adoption review cadence",
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/training-prompting-ai-mastery"
);

export default function TrainingPromptingAIMasteryPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              Staff Training & Adoption
            </p>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Help your team use AI workflows with confidence.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-white/74 md:text-[17px]">
              AI implementation succeeds when people understand the workflow around it. We help teams learn what the system handles, what stays human, how exceptions are reviewed, and how the process improves after launch.
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
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Adoption model</p>
            <div className="mt-5 grid gap-3">
              {adoptionLayers.map((layer, index) => (
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
            title="AI adoption is a people and process problem as much as a technology problem."
            description="The best automation still fails if staff do not understand it, trust it, or know how to operate around it."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {adoptionConcerns.map((concern) => (
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
            eyebrow="Training by role"
            title="Different teams need different guidance."
            description="Training should match what each person actually does in the workflow, not a generic AI presentation."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trainingModules.map((module) => (
              <article key={module.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-lg font-extrabold text-ink">{module.title}</h2>
                <div className="mt-5 grid gap-2">
                  {module.topics.map((topic) => (
                    <span key={topic} className="rounded-md bg-[#f8fbfa] px-3 py-2 text-sm font-semibold leading-5 text-muted">
                      {topic}
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
            eyebrow="Rollout support"
            title="Adoption should be designed before launch and improved after launch."
            description="We treat adoption as part of the operating system: training, role clarity, feedback, reporting, and workflow tuning."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{item.step}</p>
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
              Clients should know how the team will operate with the AI after launch.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Training should leave behind practical guidance: who reviews exceptions, how approved answers change, when staff intervene, and how feedback turns into better automation.
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
            title="Every service needs adoption support when the workflow changes how staff work."
            description="Voice, agents, chat, marketing automation, strategy, and custom software all work better when staff understand the new operating model."
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
            title="Adoption depends on safety, integrations, measurement, and a clear strategy."
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

      <AssessmentCTA sourcePage="/capabilities/training-prompting-ai-mastery" ctaLocation="training_adoption_assessment" />
    </div>
  );
}
