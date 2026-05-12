import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const strategyProblems = [
  {
    title: "Too many possible AI projects",
    text: "Teams see dozens of automation opportunities but need a practical way to decide what should happen first, what should wait, and what should not be automated yet.",
  },
  {
    title: "Tools are chosen before workflows are understood",
    text: "AI strategy works best when it starts with operating pain, systems, people, risk, and value instead of chasing whichever platform is loudest this month.",
  },
  {
    title: "Leadership needs spend confidence",
    text: "A roadmap should show the smallest useful first step, what value it should prove, and what expansion should depend on.",
  },
  {
    title: "Governance arrives too late",
    text: "Data access, approval rules, sensitive workflows, monitoring, and staff adoption should be planned before pilots become production systems.",
  },
];

const strategyLayers = [
  {
    label: "Diagnose",
    detail: "Map workflow pain, manual effort, systems, data quality, risk, and places where customers or staff wait too long.",
  },
  {
    label: "Prioritize",
    detail: "Rank opportunities by business value, complexity, risk, adoption effort, and speed to a useful pilot.",
  },
  {
    label: "Design",
    detail: "Define the pilot scope, success metric, handoffs, integrations, safety controls, and implementation path.",
  },
  {
    label: "Scale",
    detail: "Use results from the first workflow to decide whether to expand into adjacent workflows or Managed AI Operations.",
  },
];

const maturityStages = [
  {
    stage: "Manual",
    description: "Work depends on people copying, checking, replying, and routing across disconnected tools.",
  },
  {
    stage: "Digitized",
    description: "Core data is in systems, but staff still bridge gaps between inboxes, CRMs, spreadsheets, calendars, and documents.",
  },
  {
    stage: "Automated",
    description: "Routine actions are triggered consistently, with human review for exceptions and sensitive decisions.",
  },
  {
    stage: "AI-Native",
    description: "AI agents support frontline and back-office workflows, with measurement, governance, adoption, and continuous improvement.",
  },
];

const roadmapArtifacts = [
  "AI opportunity inventory",
  "Workflow value and risk ranking",
  "Pilot scope recommendation",
  "Build-versus-buy guidance",
  "Integration and data assumptions",
  "Governance and adoption plan",
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/technology-strategy-ai-enablement"
);

export default function TechnologyStrategyAIEnablementPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              Technology Strategy & Enablement
            </p>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Turn AI interest into a practical operating roadmap.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-white/74 md:text-[17px]">
              The right AI strategy is not a giant transformation deck. It is a clear sequence of useful workflows, safe pilots, measurable outcomes, adoption steps, and expansion decisions.
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
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Strategy model</p>
            <div className="mt-5 grid gap-3">
              {strategyLayers.map((layer, index) => (
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
            title="A good AI roadmap protects the team from scattered experiments."
            description="Strategy should make the next build easier to approve, easier to measure, and safer to launch."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {strategyProblems.map((problem) => (
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
            eyebrow="AI maturity"
            title="Meet the business where it is, then move one level at a time."
            description="Most SMB and mid-market teams do not need to become AI-native overnight. They need the right next workflow."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {maturityStages.map((stage, index) => (
              <article key={stage.stage} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">{index + 1}</span>
                <h2 className="mt-5 text-lg font-extrabold text-ink">{stage.stage}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{stage.description}</p>
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
              The roadmap should produce a buildable next step, not just recommendations.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Strategy work should clarify what to build first, what value it should prove, what risks need controls, and what expansion depends on.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roadmapArtifacts.map((artifact) => (
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
            title="Strategy should point directly into the services buyers can act on."
            description="The goal is to identify the right starting point: voice, agents, chat, marketing automation, custom software, or managed operations."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {serviceOffers.slice(0, 6).map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
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
            title="Strategy depends on safety, integrations, measurement, architecture, and adoption."
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

      <AssessmentCTA sourcePage="/capabilities/technology-strategy-ai-enablement" ctaLocation="technology_strategy_assessment" />
    </div>
  );
}
