import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Map the workflow",
    text: "We identify the current process, tools, handoffs, bottlenecks, risks, staff roles, and decision points before recommending technology.",
  },
  {
    step: "02",
    title: "Choose the first useful move",
    text: "We narrow the opportunity to a workflow that has enough volume, enough value, and clear enough boundaries to prove safely.",
  },
  {
    step: "03",
    title: "Design controls and integrations",
    text: "We define approved sources, system actions, escalation rules, human approvals, logging, reporting, and support expectations.",
  },
  {
    step: "04",
    title: "Build, test, and launch",
    text: "We implement the workflow, test important scenarios, train the team, monitor usage, and refine based on real evidence.",
  },
];

const artifacts = [
  "Workflow map",
  "System and integration plan",
  "Human handoff rules",
  "Pilot scope and budget drivers",
  "Success metrics",
  "Launch and support plan",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              How we work
            </p>
            <h1 className="max-w-[760px] text-[38px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[58px]">
              We start with the workflow, then build the AI system around it.
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/74 md:text-[18px]">
              A strong automation project is not just a model or a chatbot. It is a controlled operating workflow with systems, data, people, measurement, and support working together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/capabilities" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                See Trust Layer
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Project artifacts</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {artifacts.map((item) => (
                <p key={item} className="rounded-lg border border-white/10 bg-[#0d1720]/70 px-4 py-3 text-sm font-semibold leading-6 text-white/82">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Implementation path"
            title="A practical rollout process for AI automation."
            description="We keep the first milestone focused so the business can inspect quality, reduce risk, and decide whether to expand based on real value."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold text-[#167f65]">{item.step}</p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">After launch</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              We treat AI systems as operations that need review, tuning, and ownership.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "Monitor quality, escalations, failures, usage, and cost drivers.",
              "Tune prompts, knowledge sources, handoffs, and workflow rules.",
              "Review metrics such as response time, hours saved, cycle time, and cost per request.",
              "Expand only after the first workflow proves useful and controlled.",
            ].map((item) => (
              <p key={item} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/about/how-we-work" ctaLocation="how_we_work_assessment" />
    </main>
  );
}
