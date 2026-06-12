import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import UnifiedVoiceDemo from "@/components/UnifiedVoiceDemo";
import { elevenLabsAgents } from "@/data/elevenlabs";
import SectionHeader from "@/components/sections/SectionHeader";
import SavingsSection from "@/components/solutions/SavingsSection";

const intakeReality = [
  {
    label: "01",
    title: "New client calls arrive at the worst times",
    text: "Prospective clients often call during depositions, court appearances, or client meetings, when no one is available to capture the details.",
  },
  {
    label: "02",
    title: "Conflict checks need consistent intake",
    text: "Every new matter needs names, opposing parties, and case context captured accurately before a conflict check can even begin.",
  },
  {
    label: "03",
    title: "Consultation scheduling spans practice areas",
    text: "Routing a call to the right attorney depends on practice area, urgency, and which calendars actually have openings.",
  },
  {
    label: "04",
    title: "Urgent matters need fast escalation",
    text: "Calls involving deadlines, court dates, or active legal emergencies need to reach a person quickly, not sit in a queue.",
  },
  {
    label: "05",
    title: "Document follow-up adds up",
    text: "Engagement letters, intake forms, and signed documents all need follow-up reminders that are easy to lose track of.",
  },
  {
    label: "06",
    title: "Confidentiality has to hold up",
    text: "Every intake conversation involves information that must be handled carefully, even before someone becomes a client.",
  },
];

const supportCards = [
  {
    title: "New client intake & conflict-check capture",
    text: "Collect caller name, contact details, opposing parties, and a summary of the matter so a conflict check can start immediately.",
  },
  {
    title: "Consultation scheduling",
    text: "Route consultation requests to the right attorney by practice area, urgency, and availability, and confirm next steps.",
  },
  {
    title: "Document & engagement follow-up",
    text: "Send reminders for engagement letters, intake forms, and signed documents so nothing stalls before a matter opens.",
  },
  {
    title: "Attorney & staff routing",
    text: "Direct existing-client calls, urgent matters, and general questions to the right attorney, paralegal, or admin staff.",
  },
];

const controls = [
  {
    title: "Configure approved responses",
    text: "Define exactly what the assistant says about practice areas, fees, and intake steps so messaging stays consistent with your firm.",
  },
  {
    title: "Escalate urgent and sensitive matters",
    text: "Route deadline-driven, emotional, or high-stakes calls to an attorney or paralegal immediately instead of holding them in a queue.",
  },
  {
    title: "Customize handling by practice area",
    text: "Each practice area can have its own intake questions, routing rules, attorney assignments, and escalation paths.",
  },
  {
    title: "Protect confidentiality",
    text: "Keep intake conversations aligned with your firm's confidentiality and conflict-check requirements from the first call.",
  },
  {
    title: "Adjust as the firm grows",
    text: "Update workflows as attorneys, practice areas, intake forms, and staffing change.",
  },
];

const rollout = [
  {
    step: "01",
    title: "Operational discovery",
    text: "We learn your practice areas, intake process, conflict-check requirements, attorney availability, and escalation rules.",
  },
  {
    step: "02",
    title: "Configuration & testing",
    text: "Conversation flows are customized around your firm's intake script, approved responses, routing logic, and staff review points.",
  },
  {
    step: "03",
    title: "Launch & optimization",
    text: "We monitor performance, review call outcomes with your team, refine routing, and expand only when the first use case is working well.",
  },
];

const faqs = [
  {
    question: "Will this assistant give legal advice?",
    answer: "No. The assistant captures intake information, schedules consultations, and routes requests. It does not interpret law, evaluate a case, or give legal advice.",
  },
  {
    question: "How are conflict checks handled?",
    answer: "The assistant captures the caller's name, opposing parties, and a summary of the matter so your team can run the conflict check using your existing process. It does not clear conflicts itself.",
  },
  {
    question: "Can urgent matters be escalated immediately?",
    answer: "Yes. Calls involving deadlines, court dates, or other time-sensitive language can be flagged and routed to an attorney or paralegal right away.",
  },
  {
    question: "Can different practice areas have different workflows?",
    answer: "Yes. Each practice area can use its own intake questions, routing rules, approved responses, and attorney assignments while sharing firm-wide standards.",
  },
  {
    question: "Will this replace our intake staff?",
    answer: "The goal is staff support, not replacement. The assistant handles repetitive intake and routing so staff can focus on clients, conflicts review, and higher-judgment work.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "A practical first workflow can often be scoped quickly after discovery. Timing depends on practice areas, intake forms, calendars, and review requirements.",
  },
];

const lawFirmVoiceProvider = [
  {
    id: "law-firm-demo",
    provider: "elevenlabs" as const,
    label: "Law Firm Intake Assistant",
    agentId: elevenLabsAgents.lawFirmDemo,
    title: "Law Firm Intake Assistant",
    subtitle: "New client intake, conflict-check capture, and attorney routing",
    description: "Speak naturally about a new matter, a consultation request, or a follow-up on an existing case.",
    tags: ["New client intake", "Conflict-check capture", "Consultation scheduling", "Attorney routing"],
    agentLine: "Thanks for calling Harlow & Pierce Law, this is Mia. How can I help you today?",
    callerLine: "I'd like to ask about scheduling a consultation for a contract dispute.",
  },
];

export default function LawFirmIntakeAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="law-firm-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="law-firm-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              A smarter intake experience for growing law firms.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U&apos;s voice assistant helps law firms manage new client calls, conflict-check capture, consultation scheduling, and document follow-up while keeping confidentiality and attorney judgment protected.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#call-examples" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Try the Demo
              </Link>
              <Link href="#walkthrough" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Schedule a Walkthrough
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Intake queue</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Today&apos;s new client calls</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Live routing</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["New matter inquiry", "Conflict-check details", "Route to intake review"],
                  ["Consultation request", "Practice area & urgency", "Schedule with attorney"],
                  ["Document follow-up", "Engagement letter", "Reminder queued"],
                  ["Urgent deadline", "Time-sensitive matter", "Escalated to attorney"],
                ].map(([call, context, action]) => (
                  <div key={call} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{call}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed for confidential, professional conversations with clear attorney handoff when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Law firm intake reality</p>
            <h2 id="reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              New client calls compete with court dates and client meetings every day.
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-white/66 md:text-base">
              Every call often creates follow-up work across conflict checks, calendars, intake forms, and attorney handoffs.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {intakeReality.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="mb-6 grid h-9 w-9 place-items-center rounded-lg border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                  {item.label}
                </div>
                <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="support-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Staff support"
            title="Designed to support staff, not replace them."
            description="The assistant handles repetitive intake and routine scheduling questions while attorneys and staff remain responsible for legal judgment, conflicts review, and client relationships."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="call-examples" className="scroll-mt-28 bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="calls-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="inline-flex rounded-full border border-[#1db993]/25 bg-[#1db993]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">
              Real conversations
            </p>
            <h2 id="calls-title" className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Hear how conversations actually sound.
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-white/66">
              Designed to sound professional, calm, and discreet during real law firm intake scenarios.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <UnifiedVoiceDemo
              providers={lawFirmVoiceProvider}
              sourcePage="/solutions/law-firm-intake-agent"
              ctaLocation="law_firm_voice_unified_demo"
              variant="dark"
              defaultProvider="law-firm-demo"
            />
          </div>

          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-6 text-white/42">
            During a walkthrough, we can review approved examples and map the call scenarios that matter most to your practice areas.
          </p>
        </div>
      </section>

      <section className="bg-[#071112] px-4 py-14 text-white md:py-20" aria-labelledby="control-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">You stay in control</p>
            <h2 id="control-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Built around your existing intake process and policies.
            </h2>
            <p className="mt-5 max-w-[780px] text-base leading-8 text-white/66 md:text-[18px]">
              The assistant operates inside guardrails you define, never outside them. You decide what is answered, what is captured, and what is handed off.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {controls.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/62">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Implementation process"
            title="A practical rollout process for busy firms."
            description="Implementation should feel guided, structured, and low-risk. We start with the workflows that are clear enough to configure and valuable enough to measure."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SavingsSection variant="ai-front-desk" />

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Questions firm leaders ask"
            title="Reduce uncertainty before the first workflow goes live."
            description="AI voice should support intake without weakening client experience, confidentiality, or attorney judgment."
          />
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-card-border bg-[#f8fbfa] p-5">
                <summary className="cursor-pointer text-base font-extrabold leading-6 text-ink marker:text-[#167f65]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="walkthrough" className="scroll-mt-28 bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="walkthrough-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational walkthrough</p>
            <h2 id="walkthrough-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Explore whether it fits your firm.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              See real workflows, review example call scenarios, and explore how voice automation could support intake, scheduling, and document follow-up at your firm.
            </p>
            <div className="mt-6 rounded-lg border border-card-border bg-white p-5">
              <p className="text-sm font-bold text-ink">This is a consultative, low-pressure walkthrough.</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                We will focus on the practice areas, intake forms, and confidentiality requirements that matter before recommending a rollout path.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Schedule an operational walkthrough.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Open the assessment form when you are ready. We will focus on intake scenarios, conflict-check requirements, scheduling, and attorney handoffs before recommending a rollout path.
            </p>
            <AssessmentTrigger
              sourcePage="/solutions/law-firm-intake-agent"
              ctaLocation="law_firm_operational_walkthrough"
              serviceInterest="ai-voice"
              workflowInterest="law firm intake voice assistant"
              modalTitle="Schedule an Operational Walkthrough"
              modalDescription="Tell us how your firm handles new client calls, conflict checks, consultation scheduling, and document follow-up. We will review whether voice automation is a practical fit."
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
            >
              Schedule Operational Walkthrough
            </AssessmentTrigger>
            <p className="mt-4 text-sm leading-6 text-muted">
              We respect your privacy. Sensitive intake workflows should keep attorney approval until policies, conflict-check accuracy, and escalation rules are validated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
