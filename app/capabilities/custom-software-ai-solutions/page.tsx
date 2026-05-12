import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const architectureProblems = [
  {
    title: "The workflow is more complex than a simple automation",
    text: "Some processes need multiple systems, human decisions, custom interfaces, approvals, and exception handling before AI can be useful.",
  },
  {
    title: "The team needs a system, not another tool",
    text: "When off-the-shelf software does not fit the work, the right answer may be a designed workflow layer that connects people, AI, and business systems.",
  },
  {
    title: "Handoffs are unclear",
    text: "Automation breaks down when nobody knows where data goes, who reviews exceptions, or what happens after an AI agent takes an action.",
  },
  {
    title: "Custom builds can sprawl without architecture",
    text: "A custom system needs boundaries, interfaces, data ownership, support expectations, and a realistic path from pilot to production.",
  },
];

const architectureLayers = [
  {
    label: "Map",
    detail: "Define the workflow, actors, systems, decision points, data movement, and failure states.",
  },
  {
    label: "Design",
    detail: "Choose the interface, automation boundaries, integration points, handoffs, and human review model.",
  },
  {
    label: "Build",
    detail: "Implement the workflow layer, internal tool, dashboard, agent control surface, or custom software component.",
  },
  {
    label: "Operate",
    detail: "Monitor usage, resolve issues, tune workflows, and decide what should expand after the first release.",
  },
];

const architectureArtifacts = [
  "Workflow architecture map",
  "System boundary diagram",
  "Data and integration assumptions",
  "Human handoff model",
  "Interface and user-role plan",
  "Pilot-to-production path",
];

const buildPatterns = [
  {
    title: "Internal operations console",
    text: "A focused interface where staff can review AI summaries, approve exceptions, update statuses, and see workflow context.",
  },
  {
    title: "Agent control surface",
    text: "A place to manage approved answers, escalation rules, workflow settings, logs, and reporting around AI agents.",
  },
  {
    title: "Workflow orchestration layer",
    text: "Backend logic that connects forms, calls, emails, CRM records, calendars, notifications, and human review.",
  },
  {
    title: "Custom client or staff portal",
    text: "A tailored portal when existing tools cannot present the right data, actions, or approval flow cleanly.",
  },
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/custom-software-ai-solutions"
);

export default function WorkflowSystemsArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              Workflow & Systems Architecture
            </p>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Design the operating system around the automation.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-white/74 md:text-[17px]">
              Custom AI software is a service. Workflow architecture is the discipline behind it: mapping how people, data, systems, interfaces, approvals, and AI agents work together without creating a fragile mess.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/capabilities" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                Explore How We Build
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Architecture model</p>
            <div className="mt-5 grid gap-3">
              {architectureLayers.map((layer, index) => (
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
            title="Complex automation needs architecture before code."
            description="The more systems and people a workflow touches, the more important it is to define boundaries, handoffs, data movement, and support expectations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {architectureProblems.map((problem) => (
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
            eyebrow="Build patterns"
            title="Architecture turns custom work into a system people can operate."
            description="Before anything is built, we clarify the workflow, the interface, the handoffs, and the support model so the finished system fits real operations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {buildPatterns.map((pattern) => (
              <article key={pattern.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-lg font-extrabold text-ink">{pattern.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{pattern.text}</p>
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
              Clients should understand the workflow before the build begins.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Architecture work should create enough clarity to build safely: where data comes from, which system owns it, who approves exceptions, and how the workflow will be supported.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {architectureArtifacts.map((artifact) => (
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
            title="Workflow architecture supports every service when the process is complex."
            description="It is especially important when voice, agents, chat, marketing, custom software, and managed operations all need to connect to one operating model."
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
            title="Architecture depends on strategy, integrations, safety, measurement, and adoption."
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

      <AssessmentCTA sourcePage="/capabilities/custom-software-ai-solutions" ctaLocation="workflow_systems_architecture_assessment" />
    </div>
  );
}
