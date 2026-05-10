import Image from "next/image";
import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import IndustryAcceleratorPreview from "@/components/sections/IndustryAcceleratorPreview";
import MaturityCurve from "@/components/sections/MaturityCurve";
import SectionHeader from "@/components/sections/SectionHeader";
import ValueRealizationRoadmap from "@/components/sections/ValueRealizationRoadmap";
import WorkflowMap from "@/components/sections/WorkflowMap";
import { services } from "@/data/services";

const diagnosisPoints = [
  {
    title: "Requests arrive everywhere",
    text: "Calls, emails, website forms, chat messages, texts, and social replies compete for attention across the same small team.",
  },
  {
    title: "Answers live in separate systems",
    text: "The information needed to respond often sits in a CRM, calendar, inbox, quote tracker, inventory sheet, document folder, or someone’s memory.",
  },
  {
    title: "Follow-up depends on manual effort",
    text: "Staff copy notes, chase missing details, update records, route tasks, send reminders, and try to remember what still needs action.",
  },
];

const operatingModel = [
  {
    title: "Diagnose the workflow",
    text: "We map the requests, systems, owners, handoffs, risks, and success metrics before recommending what to automate first.",
  },
  {
    title: "Build the agent",
    text: "We create voice, chat, email, marketing, or operations agents that understand the workflow and know when to ask for help.",
  },
  {
    title: "Connect the systems",
    text: "We tie the agent to the tools your team already uses so conversations become bookings, CRM updates, quote tasks, follow-ups, and reports.",
  },
  {
    title: "Operate and improve",
    text: "We monitor performance, review handoffs, tune prompts, support staff adoption, and expand only when the first workflow proves value.",
  },
];

const valueProof = [
  {
    title: "Stop losing time to routine requests",
    text: "Calls, emails, quotes, appointments, customer questions, content tasks, and admin follow-up should not pull your team away from higher-value work all day.",
  },
  {
    title: "Turn conversations into completed actions",
    text: "A useful AI system updates the CRM, books the calendar, creates the task, sends the follow-up, and records the outcome without extra copying.",
  },
  {
    title: "Lower the cost of repetitive work",
    text: "Automate routine handling so your team can respond faster, reduce manual touches, and spend more time on the work that still needs human judgment.",
  },
  {
    title: "Keep people in control when it matters",
    text: "Sensitive or uncertain cases can use approvals, escalation rules, monitoring, and audit logs instead of handing important decisions to automation blindly.",
  },
];

const thinkingNotes = [
  {
    title: "Voice is strongest when it triggers action",
    text: "A call-answering agent becomes much more valuable when it can book, qualify, summarize, update systems, notify staff, and log outcomes.",
  },
  {
    title: "Small pilots reduce spending fear",
    text: "Most small and mid-sized teams do not need a huge AI transformation on day one. A bounded workflow with clear metrics is easier to approve and easier to trust.",
  },
  {
    title: "The biggest gains are usually operational",
    text: "The savings often come from fewer manual touches, faster response, cleaner routing, and less repetitive admin work across the team.",
  },
];

const serviceLabels: Record<string, string> = {
  "ai-voice": "Strong starting point",
  "ai-agents": "Operations layer",
  "ai-chat": "Customer support",
  "ai-transformation": "Strategic roadmap",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="home-hero-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">
              AI voice, agents, and workflow automation
            </p>
            <h1 id="home-hero-title" className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink md:text-[54px]">
              We automate the conversations and workflows that slow your business down.
            </h1>
            <p className="mt-5 max-w-[650px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U designs AI voice agents, chat and email agents, marketing workflows, and operations automations that connect to the systems your team already uses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_30px_rgba(29,185,147,0.25)] hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/core-services/ai-voice#voice-demo" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#169b78]">
                Try Voice Demo
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              Start small, prove value, then expand into Managed AI Operations when the numbers make sense.
            </p>
          </div>

          <div className="relative rounded-lg border border-card-border bg-[#f8fbfa] p-4 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/home/hero-bg.webp"
              alt="AI automation dashboard and workflow interface"
              width={900}
              height={700}
              priority
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-white/60 bg-white/92 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">Live workflow example</p>
              <div className="mt-3 grid gap-2 text-sm font-semibold text-ink sm:grid-cols-3">
                <span className="rounded-md bg-[#f8fbfa] px-3 py-2">Call qualified</span>
                <span className="rounded-md bg-[#f8fbfa] px-3 py-2">CRM updated</span>
                <span className="rounded-md bg-[#f8fbfa] px-3 py-2">Follow-up sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="home-diagnosis-title">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[780px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">Operational diagnosis</p>
            <h2 id="home-diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Most businesses do not have one automation problem. They have scattered conversations, manual handoffs, and disconnected systems.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {diagnosisPoints.map((point) => (
              <article key={point.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WorkflowMap />

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="method-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="How Automate4U helps"
              title="A practical implementation path from first workflow to managed AI operations."
              description="We help you find the highest-friction workflow, build the first useful agent, connect the right systems, and improve it with your team before expanding into a larger roadmap."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {operatingModel.map((step) => (
                <article key={step.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <h3 className="text-lg font-extrabold leading-6 text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/home/how-it-works.jpg"
              alt="Team reviewing charts and planning an automation workflow"
              width={980}
              height={620}
              className="aspect-[1.18] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">Human-led implementation</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                AI works best when the workflow, staff handoff, data access, and success metrics are designed together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="proof-pillars-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="What changes"
            title="The right automation gives your team time, speed, and control back."
            description="The goal is not to add more software for people to babysit. The goal is fewer manual touches, faster follow-up, clearer ownership, and safer escalation when a human should decide."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueProof.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Core systems"
            title="Start with voice when calls hurt. Expand into operations when the first workflow proves value."
            description="Many clients start with voice because calls are visible and painful. The bigger value usually comes when voice, chat, email, marketing, CRM, calendars, and reporting work together."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={service.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,32,0.08)]">
                <article>
                  <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#169b78]">
                    {serviceLabels[service.slug] ?? "Core capability"}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-ink">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted">{service.metaDescription}</p>
                  <p className="mt-6 text-sm font-extrabold text-[#169b78]">Learn more</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MaturityCurve />
      <ValueRealizationRoadmap />
      <IndustryAcceleratorPreview />

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="thinking-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="What we are seeing"
            title="AI operations are becoming practical when they are tied to real workflows, real data, and real human oversight."
            description="The opportunity is not hype. It is the steady removal of repetitive work from the places where customers wait, staff copy information, and follow-up falls through the cracks."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {thinkingNotes.map((note) => (
              <article key={note.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{note.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="managed-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Managed AI Operations"
            title="Keep the system monitored, governed, and improving after launch."
            description="Ongoing AI work needs monitoring, prompt and workflow updates, model-change review, security checks, staff training, and continuous improvement."
            inverse
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Governance and risk controls", "Human-in-the-loop approvals", "Model and prompt monitoring", "Staff adoption and training"].map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/[0.07] p-5 text-base font-bold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-white px-4 py-14 md:py-20" aria-labelledby="brand-line-title">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">Automate4U</p>
          <h2 id="brand-line-title" className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[44px]">
            We automate the work that slows you down.
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-8 text-muted">
            Calls, emails, workflows, admin, sales follow-up, support, marketing, reporting, and operations. Built with clear handoffs, connected systems, and people in control.
          </p>
        </div>
      </section>

      <AssessmentCTA sourcePage="/" ctaLocation="homepage_assessment_section" />
    </div>
  );
}
