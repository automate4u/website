import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import UnifiedVoiceDemo from "@/components/UnifiedVoiceDemo";
import { elevenLabsAgents } from "@/data/elevenlabs";
import SectionHeader from "@/components/sections/SectionHeader";

const intakeReality = [
  {
    label: "01",
    title: "Tax season floods the phone lines",
    text: "New client calls, document drop-offs, and status questions all spike at once when staff are buried in returns.",
  },
  {
    label: "02",
    title: "Document checklists take time to explain",
    text: "Every new engagement needs the right list of slips, receipts, and statements explained clearly before work can start.",
  },
  {
    label: "03",
    title: "Urgent notices need same-day attention",
    text: "A CRA or IRS letter can't wait in a general voicemail box — it needs to reach an accountant quickly.",
  },
  {
    label: "04",
    title: "Scheduling spans multiple staff",
    text: "Routing an appointment depends on service type, which accountant or bookkeeper handles it, and who has availability.",
  },
  {
    label: "05",
    title: "Document follow-up adds up",
    text: "Missing T4s, receipts, or signed engagement letters all need reminders that are easy to lose track of during busy season.",
  },
  {
    label: "06",
    title: "Confidential financial details",
    text: "Every intake call touches financial information that needs to be handled carefully, even before someone becomes a client.",
  },
];

const supportCards = [
  {
    title: "New client intake & document checklist",
    text: "Collect caller name, contact details, service interest, and complexity, then prepare the right document checklist.",
  },
  {
    title: "Appointment & tax-season scheduling",
    text: "Route appointment requests to the right accountant or bookkeeper based on service type and availability.",
  },
  {
    title: "Urgent notice escalation",
    text: "Flag CRA, IRS, or audit notices as urgent and route them directly to an accountant the same day.",
  },
  {
    title: "Document follow-up & routing",
    text: "Send reminders for missing slips, receipts, and signed documents so engagements don't stall.",
  },
];

const controls = [
  {
    title: "Configure approved responses",
    text: "Define exactly what the assistant says about services, fees, and intake steps so messaging stays consistent with your firm.",
  },
  {
    title: "Escalate urgent notices immediately",
    text: "Route CRA, IRS, audit, or deadline-driven calls to an accountant the same day instead of holding them in a queue.",
  },
  {
    title: "Customize handling by service line",
    text: "Tax prep, bookkeeping, payroll, and financial statements can each have their own intake questions and routing rules.",
  },
  {
    title: "Protect confidential financial details",
    text: "Keep intake conversations aligned with your firm's confidentiality requirements from the first call.",
  },
  {
    title: "Adjust as the firm grows",
    text: "Update workflows as staff, services, document checklists, and busy-season volume change.",
  },
];

const rollout = [
  {
    step: "01",
    title: "Operational discovery",
    text: "We learn your service lines, document checklists, scheduling rules, urgent-notice process, and staff availability.",
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
    question: "Will this assistant give tax or accounting advice?",
    answer: "No. The assistant captures intake information, prepares document checklists, and routes requests. It does not interpret tax law, financial statements, or notices.",
  },
  {
    question: "Can it handle a CRA or IRS letter?",
    answer: "It can capture the caller's name, the type of notice, and mark it urgent so an accountant can call back quickly. It does not review or interpret the letter itself.",
  },
  {
    question: "Can different services have different workflows?",
    answer: "Yes. Tax prep, bookkeeping, payroll, and financial statements can each use their own intake questions, document checklists, and routing rules while sharing firm-wide standards.",
  },
  {
    question: "Will this replace our front desk staff?",
    answer: "The goal is staff support, not replacement. The assistant handles repetitive intake and routing so staff can focus on client work, especially during busy season.",
  },
  {
    question: "Can it handle the volume spike during tax season?",
    answer: "Yes. The assistant can take the same number of calls during peak season as any other time, capturing details consistently when staff are stretched thin.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "A practical first workflow can often be scoped quickly after discovery. Timing depends on service lines, document checklists, scheduling tools, and review requirements.",
  },
];

const accountingVoiceProvider = [
  {
    id: "accounting-firm-demo",
    provider: "elevenlabs" as const,
    label: "Accounting Firm Intake Assistant",
    agentId: elevenLabsAgents.accountingFirmDemo,
    title: "Accounting Firm Intake Assistant",
    subtitle: "New client intake, document checklists, and accountant routing",
    description: "Speak naturally about a new tax return, a bookkeeping engagement, or following up on documents.",
    tags: ["New client intake", "Document checklist capture", "Appointment scheduling", "Urgent notice routing"],
    agentLine: "Thanks for calling Bramwell & Co. Accounting, this is Dana. How can I help you today?",
    callerLine: "I'd like to ask about getting my small business taxes done this year.",
  },
];

export default function AccountingFirmIntakeAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="accounting-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="accounting-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              A smarter intake experience for growing accounting firms.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U&apos;s voice assistant helps accounting and tax firms manage new client calls, document checklists, appointment scheduling, and urgent notice routing — even during the busiest weeks of tax season.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#call-examples" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Try the Demo
              </Link>
              <Link href="#walkthrough" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Schedule a Walkthrough
              </Link>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted">
              Curious about cost?{" "}
              <Link href="/pricing#ai-front-desk" className="font-extrabold text-[#167f65] hover:underline">
                View AI Front Desk pricing
              </Link>
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Intake queue</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Today&apos;s client calls</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Live routing</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["New client inquiry", "Tax prep, business", "Document checklist sent"],
                  ["Appointment request", "Bookkeeping setup", "Scheduled with accountant"],
                  ["Document follow-up", "Missing T4 slips", "Reminder queued"],
                  ["Urgent notice", "CRA letter received", "Escalated same day"],
                ].map(([call, context, action]) => (
                  <div key={call} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{call}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed for calm, practical conversations with same-day escalation for urgent notices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Accounting firm intake reality</p>
            <h2 id="reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Tax season multiplies every routine intake task at once.
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-white/66 md:text-base">
              Every call often creates follow-up work across document checklists, calendars, and accountant handoffs.
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
            description="The assistant handles repetitive intake and routine scheduling questions while accountants and bookkeepers remain responsible for tax judgment, client relationships, and final review."
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
              Designed to sound polished, calm, and practical during real accounting firm intake scenarios.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <UnifiedVoiceDemo
              providers={accountingVoiceProvider}
              sourcePage="/solutions/accounting-firm-intake-agent"
              ctaLocation="accounting_firm_voice_unified_demo"
              variant="dark"
              defaultProvider="accounting-firm-demo"
            />
          </div>

          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-6 text-white/42">
            During a walkthrough, we can review approved examples and map the call scenarios that matter most to your service lines.
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Questions firm leaders ask"
            title="Reduce uncertainty before the first workflow goes live."
            description="AI voice should support intake without weakening client experience, confidentiality, or accountant judgment."
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
              See real workflows, review example call scenarios, and explore how voice automation could support intake, scheduling, and document follow-up at your firm — especially during busy season.
            </p>
            <div className="mt-6 rounded-lg border border-card-border bg-white p-5">
              <p className="text-sm font-bold text-ink">This is a consultative, low-pressure walkthrough.</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                We will focus on the service lines, document checklists, and confidentiality requirements that matter before recommending a rollout path.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Schedule an operational walkthrough.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Open the assessment form when you are ready. We will focus on intake scenarios, document checklists, scheduling, and accountant handoffs before recommending a rollout path.
            </p>
            <AssessmentTrigger
              sourcePage="/solutions/accounting-firm-intake-agent"
              ctaLocation="accounting_firm_operational_walkthrough"
              serviceInterest="ai-voice"
              workflowInterest="accounting firm intake voice assistant"
              modalTitle="Schedule an Operational Walkthrough"
              modalDescription="Tell us how your firm handles new client calls, document checklists, appointment scheduling, and urgent notices. We will review whether voice automation is a practical fit."
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
            >
              Schedule Operational Walkthrough
            </AssessmentTrigger>
            <p className="mt-4 text-sm leading-6 text-muted">
              We respect your privacy. Sensitive intake workflows should keep accountant approval until policies, document accuracy, and escalation rules are validated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
