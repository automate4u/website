import Link from "next/link";
import Image from "next/image";
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
    text: "The information needed to respond often sits in a CRM, calendar, inbox, quote tracker, inventory sheet, document folder, or staff memory.",
  },
  {
    title: "Follow-up depends on manual effort",
    text: "Staff copy notes, chase missing details, update records, route tasks, send reminders, and try to remember what still needs action.",
  },
];

const launchModel = [
  {
    week: "Week 1",
    title: "Map the workflow",
    text: "Confirm the target workflow, source systems, risk boundaries, handoffs, and the metric that will prove value.",
  },
  {
    week: "Week 2",
    title: "Build the working pilot",
    text: "Configure the agent, knowledge/RAG layer, prompts, tools, integrations, and first operational actions.",
  },
  {
    week: "Week 3",
    title: "Test controls and edge cases",
    text: "Review real scenarios, escalation rules, logging, fallback behavior, staff handoff, and sensitive-case boundaries.",
  },
  {
    week: "Week 4",
    title: "Launch and monitor",
    text: "Deploy the bounded workflow, train the team, monitor outcomes, tune the system, and decide what should expand next.",
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
    text: "Agents are designed with validation, retries, fallbacks, logging, and escalation paths so they can operate reliably after launch.",
  },
  {
    title: "RAG and document systems",
    text: "Knowledge workflows are built around source grounding, retrieval quality, review loops, and clear handling for unsupported answers.",
  },
  {
    title: "Enterprise and SMB integrations",
    text: "Workflows can connect across CRMs, calendars, inboxes, messaging tools, APIs, permissions, dashboards, and custom operating software.",
  },
  {
    title: "Sensitive workflow judgment",
    text: "Sensitive requests are designed around approvals, audit trails, escalation rules, and human review where judgment or risk matters.",
  },
];

const technologyLogos = [
  { name: "OpenAI", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
  { name: "ElevenLabs", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elevenlabs.svg" },
  { name: "Twilio", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg" },
  { name: "HubSpot", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg" },
  { name: "Google", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg" },
  { name: "Slack", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg" },
  { name: "Calendly", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/calendly.svg" },
  { name: "QuickBooks", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg" },
  { name: "Salesforce", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg" },
  { name: "Make", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/make.svg" },
  { name: "n8n", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg" },
  { name: "Zapier", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="home-hero-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h1 id="home-hero-title" className="max-w-[720px] text-[36px] font-extrabold leading-[1.08] text-ink md:text-[48px] xl:text-[52px]">
              AI automation that works inside the tools you already run.
            </h1>
            <p className="mt-5 max-w-[650px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U builds production-ready voice assistants, agents, and RAG workflows that qualify requests, search approved knowledge, update systems, route handoffs, and prove measurable value in 2-4 weeks.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AssessmentTrigger
                sourcePage="/"
                ctaLocation="homepage_hero"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_30px_rgba(29,185,147,0.25)] hover:bg-btn-hover"
              >
                Request AI Workflow Assessment
              </AssessmentTrigger>
              <Link href="/services/ai-voice#voice-demo" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#169b78]">
                Try Voice Demo
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              Start with one bounded workflow, validate the controls, then expand when the numbers make sense.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_20px_60px_rgba(15,23,32,0.10)]">
            <Image
              src="/images/home/hero-bg.webp"
              alt="Automate4U reviewing workflow opportunities with a business team"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051C2C]/38 via-transparent to-white/8" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/18 bg-white/88 p-4 shadow-[0_16px_38px_rgba(15,23,32,0.16)] backdrop-blur">
              <p className="text-sm font-extrabold text-ink">Workflow assessment, then implementation.</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-muted">
                We map the real intake, handoff, CRM, calendar, and follow-up process before deciding what the agent should automate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-8" aria-label="Technology Automate4U builds with and integrates">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-lg font-extrabold leading-7 text-ink md:text-xl">Built around the systems your team already uses</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              We connect AI workflows to the tools that handle calls, CRM, calendars, documents, messages, reporting, and follow-up.
            </p>
          </div>
          <div className="mt-5 border-y border-card-border bg-white/70 px-4 py-4">
            <div className="grid grid-cols-3 items-center gap-x-4 gap-y-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
              {technologyLogos.map((technology) => (
                <div key={technology.name} className="group grid min-h-12 place-items-center gap-1 text-center" title={technology.name}>
                  <span
                    aria-hidden="true"
                    className="block h-5 w-full bg-ink/50 opacity-65 transition group-hover:opacity-85"
                    style={{
                      WebkitMaskImage: `url(${technology.iconUrl})`,
                      maskImage: `url(${technology.iconUrl})`,
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                  <span className="text-[10px] font-bold leading-none text-muted/75">{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-white px-4 py-12 md:py-16" aria-labelledby="home-credibility-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 id="home-credibility-title" className="text-[30px] font-extrabold leading-tight text-ink md:text-[42px]">
              Built by operators and engineers who understand the work.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              We have been small business owners ourselves, and we started building automation to make our own companies easier to run. That same practical mindset shapes how we build AI systems for real teams.
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

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="home-diagnosis-title">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[780px]">
            <p className="text-xs font-bold uppercase text-[#169b78]">Operational diagnosis</p>
            <h2 id="home-diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight text-ink md:text-[38px]">
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

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="home-launch-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Controlled launch model"
            title="A practical path from workflow map to production pilot."
            description="High-value AI work should not start as a vague transformation program. Start with one workflow, wire it into the right systems, prove the controls, and measure whether it is worth expanding."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {launchModel.map((item) => (
              <article key={item.week} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-extrabold uppercase text-[#169b78]">{item.week}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 max-w-[820px] text-sm leading-6 text-muted">
            Timeline depends on integration complexity, data access, security requirements, and how quickly your team can review workflow decisions.
          </p>
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
                  <p className="text-sm font-extrabold uppercase text-[#169b78]">
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

      <section className="border-y border-card-border bg-white px-4 py-14 md:py-20" aria-labelledby="fit-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 id="fit-title" className="text-[28px] font-extrabold leading-tight text-ink md:text-[40px]">
              Best fit for teams with real operational volume.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The strongest projects usually come from companies where repeated calls, emails, intake, quotes, scheduling, support, documents, or system updates already consume meaningful staff time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
              <h3 className="text-xl font-extrabold text-ink">Strong fit</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                <li>Multi-location or growing teams with repeated operational workflows.</li>
                <li>Customer, parent, patient, quote, booking, or support volume that affects revenue or service quality.</li>
                <li>Existing tools that need AI connected into the workflow, not another disconnected chatbot.</li>
                <li>Budget and urgency for a paid pilot if the workflow case is strong.</li>
              </ul>
            </article>
            <article className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
              <h3 className="text-xl font-extrabold text-ink">Not the right starting point</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                <li>One-off prompt help or a generic AI subscription.</li>
                <li>Automations with no measurable workflow value.</li>
                <li>Projects where sensitive decisions should be automated without human review.</li>
                <li>Teams not ready to provide workflow access, examples, or timely review.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <ProofStorySection
        filterable
        compact
        storySlugs={[
          "manufacturing-response-agent",
          "daycare-front-desk-voice",
          "home-services-dispatch",
          "professional-services-intake",
          "healthcare-front-desk",
          "hospitality-guest-response",
          "custom-operations-workbench",
          "managed-ai-operations-rhythm",
          "ai-roadmap-value-realization",
        ]}
      />

      <AssessmentCTA sourcePage="/" ctaLocation="homepage_assessment_section" />
    </div>
  );
}
