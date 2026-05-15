import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { solutions } from "@/data/solutions";

const solutionCategories = [
  {
    title: "Frontline conversation systems",
    text: "Voice, chat, and email agents that capture demand, answer approved questions, route exceptions, and keep the customer experience calm.",
  },
  {
    title: "Back-office workflow agents",
    text: "Automation that turns conversations into tasks, CRM updates, calendar bookings, quote handoffs, audit logs, and KPI events.",
  },
  {
    title: "Managed AI operations",
    text: "Monitoring, tuning, governance, staff enablement, and continuous improvement after launch so the system keeps earning trust.",
  },
];

const buyerQuestions = [
  "What conversation or admin task is consuming the most staff time?",
  "Which systems need to be checked before the AI can answer or act?",
  "Where should the AI stop and hand off to a person?",
  "Which result would make the first pilot clearly worth continuing?",
];

const plannedSolutions = [
  "Manufacturing parts availability and quote response agent",
  "Home services missed-call recovery and dispatch assistant",
  "Professional services intake and appointment routing agent",
  "Retail ecommerce support, returns, and product-question agent",
  "Marketing content production and approval workflow agent",
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white px-4 py-12 md:py-[72px]" aria-labelledby="solutions-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="solutions-title" className="max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              Focused AI implementations for the workflows your team already handles every day.
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-muted md:text-[17px]">
              Solutions are narrower than industry pages. They show the exact operational pattern: the scenario, the conversation, the downstream action, the human controls, and the rollout path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/industries" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Browse Industries
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.07)] md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Solution design filter</p>
            <div className="mt-5 grid gap-3">
              {buyerQuestions.map((question) => (
                <p key={question} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                  {question}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="solution-types-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">What a solution includes</p>
            <h2 id="solution-types-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              A useful AI solution is more than a prompt or a bot. It is a controlled workflow.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {solutionCategories.map((category) => (
              <article key={category.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{category.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="available-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Available solution pages"
            title="Start with a focused implementation."
            description="Explore practical solution pages that show how Automate4U applies AI voice, agents, messaging, and workflow automation to a specific operating problem."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45 hover:shadow-[0_16px_38px_rgba(15,23,32,0.08)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Voice solution</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{solution.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{solution.metaDescription}</p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  {solution.primaryCtaLabel} <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="roadmap-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#87e6ce]">Solution paths</p>
            <h2 id="roadmap-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Focused solutions make one specific workflow easier to trust, buy, and deploy.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Each solution explains what the agent does, what systems it touches, what it costs, what stays human, and how the first pilot proves value.
            </p>
          </div>
          <div className="grid gap-3">
            {plannedSolutions.map((solution) => (
              <p key={solution} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {solution}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/solutions" ctaLocation="solutions_index_assessment" />
    </div>
  );
}
