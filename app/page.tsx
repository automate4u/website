import Image from "next/image";
import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import ProofStorySection from "@/components/proof/ProofStorySection";
import SectionHeader from "@/components/sections/SectionHeader";
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

const serviceLabels: Record<string, string> = {
  "ai-voice": "Strong starting point",
  "ai-agents": "Operations layer",
  "ai-chat": "Customer support",
  "ai-transformation": "Strategic roadmap",
};

const credibilitySignals = [
  {
    title: "Production AI systems",
    text: "Agent workflows need validation, retries, fallbacks, logging, and human escalation paths before they can be trusted with real customers.",
  },
  {
    title: "Grounded knowledge agents",
    text: "Document and knowledge agents should answer from approved source material, identify uncertainty, and route unsupported questions to people.",
  },
  {
    title: "Connected business tools",
    text: "Useful automation updates the CRM, books the calendar, creates the task, sends the notification, logs the outcome, and shows what happened.",
  },
  {
    title: "Operational software depth",
    text: "Custom dashboards, portals, permissions, payments, search, reporting, and review queues all shape whether AI actually fits the business.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="home-hero-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h1 id="home-hero-title" className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ink md:text-[54px]">
              We automate the conversations and workflows that slow your business down.
            </h1>
            <p className="mt-5 max-w-[650px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U designs AI voice agents, chat and email agents, marketing workflows, and operations automations that connect to the systems your team already uses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AssessmentTrigger
                sourcePage="/"
                ctaLocation="homepage_hero"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_30px_rgba(29,185,147,0.25)] hover:bg-btn-hover"
              >
                Get Free Assessment
              </AssessmentTrigger>
              <Link href="/services/ai-voice#voice-demo" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#169b78]">
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

      <section className="border-y border-card-border bg-white px-4 py-14 md:py-20" aria-labelledby="home-credibility-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 id="home-credibility-title" className="text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              Built by people who understand production systems, not just AI demos.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The hard part is not making AI say something impressive once. The hard part is making it work with real data, real tools, real approvals, and real customers day after day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {credibilitySignals.map((item) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-lg font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            title="Choose the first workflow worth improving."
            description="Start with the place where response time, repetitive admin, missed follow-up, or disconnected systems create the most friction. Voice is often the first practical starting point; agents, chat, marketing, custom software, and managed operations expand the system when the first workflow proves value."
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

      <ProofStorySection filterable compact />

      <AssessmentCTA sourcePage="/" ctaLocation="homepage_assessment_section" />
    </div>
  );
}
