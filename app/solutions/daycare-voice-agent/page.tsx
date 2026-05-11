import Link from "next/link";
import AssessmentLeadForm from "@/components/AssessmentLeadForm";
import SectionHeader from "@/components/sections/SectionHeader";

const frontDeskReality = [
  {
    label: "01",
    title: "Enrollment inquiries during transitions",
    text: "Inbound enrollment and program questions arrive precisely when staff are managing classroom transitions and supporting teachers.",
  },
  {
    label: "02",
    title: "Juggling calls while supporting children",
    text: "Staff are expected to stay present for children and families while simultaneously managing phone volume and parent inquiries.",
  },
  {
    label: "03",
    title: "Repetitive questions every day",
    text: "Hours of front desk time are consumed answering the same questions about hours, programs, tuition, availability, tours, and next steps.",
  },
  {
    label: "04",
    title: "Inconsistent handling across locations",
    text: "Without a shared system, different centers can respond to identical inquiries in different ways, creating uneven parent experiences.",
  },
  {
    label: "05",
    title: "Missed details at peak hours",
    text: "During high-volume periods, important caller information can be missed, logged inconsistently, or left without a clear follow-up owner.",
  },
  {
    label: "06",
    title: "Constant administrative interruptions",
    text: "Routine calls pull staff away from higher-value work such as enrollment conversations, parent relationships, and team support.",
  },
];

const supportCards = [
  {
    title: "Enrollment & tour inquiry handling",
    text: "Help parents receive immediate responses for enrollment questions, program availability, and tour requests.",
  },
  {
    title: "Parent call routing & intake",
    text: "Capture important information and direct inquiries to the appropriate team, location, or staff workflow.",
  },
  {
    title: "Repetitive question handling",
    text: "Reduce interruptions caused by common administrative questions and routine parent inquiries.",
  },
  {
    title: "Multi-location consistency",
    text: "Create a more consistent communication experience across centers, teams, and approved location-specific policies.",
  },
];

const callScenarios = [
  {
    scenario: "Scenario 01",
    title: "Enrollment inquiry",
    duration: "1:24",
    details: "A parent asks about age groups, availability, waitlist process, and what happens after submitting an inquiry.",
  },
  {
    scenario: "Scenario 02",
    title: "Tour scheduling",
    duration: "1:07",
    details: "The assistant gathers parent details, preferred timing, child age, and routes the request to the right location.",
  },
  {
    scenario: "Scenario 03",
    title: "Absence reporting",
    duration: "0:52",
    details: "A parent reports an absence and the assistant captures the details for the right classroom or admin team.",
  },
  {
    scenario: "Scenario 04",
    title: "Pickup authorization notice",
    duration: "1:01",
    details: "Routine pickup updates can be documented and routed, while sensitive exceptions stay with authorized staff.",
  },
  {
    scenario: "Scenario 05",
    title: "Program availability",
    duration: "1:18",
    details: "Parents can get approved guidance on program options, location availability, and next steps without waiting for a callback.",
  },
];

const controls = [
  {
    title: "Configure approved responses",
    text: "Define exactly what the assistant says, captures, and routes so messaging stays aligned with your organization.",
  },
  {
    title: "Escalate sensitive situations",
    text: "Route nuanced, emotional, urgent, or policy-sensitive calls to the right staff member immediately.",
  },
  {
    title: "Customize handling by location",
    text: "Each center can have its own workflows, hours, availability rules, intake details, and handoff paths.",
  },
  {
    title: "Align responses with existing policies",
    text: "Keep answers tied to approved program details, communication standards, and staff-defined boundaries.",
  },
  {
    title: "Adjust as operations evolve",
    text: "Update workflows as programs, policies, staffing, seasons, and parent communication needs change.",
  },
];

const rollout = [
  {
    step: "01",
    title: "Operational discovery",
    text: "We learn your locations, parent communication workflows, common call scenarios, escalation rules, and sensitive situations.",
  },
  {
    step: "02",
    title: "Configuration & testing",
    text: "Conversation flows are customized around your organization’s policies, approved responses, routing logic, and staff review points.",
  },
  {
    step: "03",
    title: "Launch & optimization",
    text: "We monitor performance, review call outcomes, refine workflows with your team, and expand only when the first use case is working well.",
  },
];

const faqs = [
  {
    question: "What happens if the assistant does not know the answer?",
    answer: "The assistant should not guess. It can capture the question, explain that staff will review it, and route the details to the right person or location.",
  },
  {
    question: "Can calls be escalated to staff?",
    answer: "Yes. Escalation rules can be configured for sensitive topics, uncertain answers, urgent situations, specific locations, or calls that need a human decision.",
  },
  {
    question: "Can each location have different workflows?",
    answer: "Yes. Multi-location organizations can use shared standards while still customizing routing, availability, approved wording, and escalation paths by center.",
  },
  {
    question: "Will this replace our front desk team?",
    answer: "The goal is staff support, not blind replacement. The assistant handles repetitive intake and routine questions so staff can focus on children, families, exceptions, and higher-value work.",
  },
  {
    question: "How are sensitive situations handled?",
    answer: "Sensitive situations should be documented and escalated to authorized staff. The assistant can identify and route these cases without making final decisions on high-risk matters.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "A practical first workflow can often be scoped quickly after discovery. Timing depends on locations, policies, integrations, call scenarios, and review requirements.",
  },
];

export default function DaycareVoiceAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="daycare-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              Daycare Voice Agent
            </p>
            <h1 id="daycare-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              A smarter front desk experience for growing daycare organizations.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-muted md:text-[17px]">
              Automate4U’s voice assistant helps daycare organizations manage repetitive calls, enrollment inquiries, and parent communication workflows while keeping staff focused on children and families.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#walkthrough" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Schedule a Walkthrough
              </Link>
              <Link href="#call-examples" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Hear Call Examples
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Communication dashboard</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Today’s parent calls</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Live routing</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Enrollment inquiry", "Program availability", "Route to admissions"],
                  ["Tour request", "Preferred location", "Create follow-up task"],
                  ["Absence report", "Classroom note", "Notify staff"],
                  ["Pickup notice", "Policy check", "Escalate if sensitive"],
                ].map(([call, context, action]) => (
                  <div key={call} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{call}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed for calm, parent-friendly conversations with clear staff handoff when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Daycare front desk reality</p>
            <h2 id="reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Daycare front desks are handling more than just phone calls.
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-white/66 md:text-base">
              For multi-location organizations, the communication burden compounds across every center, every day.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frontDeskReality.map((item) => (
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
            description="The assistant handles repetitive intake and routine parent questions while staff remain responsible for relationships, sensitive situations, exceptions, and final decisions."
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
              Designed to sound professional, patient, and parent-friendly during real daycare communication scenarios.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[1040px] gap-5 md:grid-cols-3">
            {callScenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">{scenario.scenario}</p>
                <h3 className="mt-3 text-base font-extrabold leading-6 text-white">{scenario.title}</h3>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#24d6aa] text-sm font-extrabold text-[#051C2C]" aria-hidden="true">
                    ▶
                  </span>
                  <div className="flex h-8 flex-1 items-center gap-1" aria-hidden="true">
                    {[12, 18, 9, 22, 14, 26, 11, 19, 15, 24, 10, 17, 13, 21].map((height, index) => (
                      <span
                        key={`${scenario.title}-${index}`}
                        className="w-1.5 rounded-full bg-[#1db993]/55"
                        style={{ height }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-white/42">{scenario.duration}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/64">{scenario.details}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-6 text-white/42">
            Demo scenario previews are shown for planning. Approved audio examples can be reviewed during an operational walkthrough.
          </p>
        </div>
      </section>

      <section className="bg-[#071112] px-4 py-14 text-white md:py-20" aria-labelledby="control-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">You stay in control</p>
            <h2 id="control-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Built around your existing policies and workflows.
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
            title="A practical rollout process for busy organizations."
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
            eyebrow="Questions daycare leaders ask"
            title="Reduce uncertainty before the first workflow goes live."
            description="AI voice should support communication without weakening parent experience, staff control, or sensitive decision-making."
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
              Explore whether it fits your operations.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              See real workflows, review example call scenarios, and explore how voice automation could support your daycare teams and parent communication processes.
            </p>
            <div className="mt-6 rounded-lg border border-card-border bg-white p-5">
              <p className="text-sm font-bold text-ink">This is a consultative, low-pressure walkthrough.</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                We will focus on the policies, locations, parent scenarios, and handoff rules that matter before recommending a rollout path.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <AssessmentLeadForm
              sourcePage="/solutions/daycare-voice-agent"
              ctaLocation="daycare_voice_operational_walkthrough"
              serviceInterest="ai-voice"
              workflowInterest="daycare front desk voice assistant"
              submitLabel="Schedule Operational Walkthrough"
            />
            <p className="mt-4 text-sm leading-6 text-muted">
              We respect your privacy. Sensitive daycare workflows should keep staff approval until policies, data accuracy, and escalation rules are validated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
