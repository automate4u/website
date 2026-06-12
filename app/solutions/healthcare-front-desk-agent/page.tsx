import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";
import SavingsSection from "@/components/solutions/SavingsSection";

const operatingReality = [
  {
    label: "01",
    title: "Routine calls interrupt patient support",
    text: "Appointment requests, reminders, directions, intake forms, referral status, and billing questions often arrive while staff are helping people in person.",
  },
  {
    label: "02",
    title: "Simple requests still need context",
    text: "The right next step can depend on appointment type, provider availability, forms, location, referral status, reminder rules, and clinic policy.",
  },
  {
    label: "03",
    title: "Sensitive cases need restraint",
    text: "Symptoms, urgent language, complaints, privacy-sensitive questions, and unclear requests should be escalated rather than answered automatically.",
  },
  {
    label: "04",
    title: "Trust depends on handoff quality",
    text: "The assistant should capture the request, prepare context, route it to authorized staff, and preserve the reason for escalation.",
  },
];

const handles = [
  {
    title: "Appointment request intake",
    text: "Capture appointment type, preferred times, location, contact details, and staff follow-up needs without making clinical decisions.",
  },
  {
    title: "Reminder and no-show follow-up",
    text: "Support routine reminders, rescheduling, appointment-prep instructions, and missed-appointment follow-up from approved rules.",
  },
  {
    title: "Forms and administrative questions",
    text: "Guide patients toward approved non-clinical information such as hours, location, forms, preparation steps, and office policies.",
  },
  {
    title: "Sensitive escalation routing",
    text: "Route urgent, clinical, private, emotional, complaint, billing, or uncertain requests to authorized staff with context attached.",
  },
];

const buyerPriorities = [
  {
    title: "Reduce routine front-desk pressure",
    text: "Handle appointment requests, reminders, forms, directions, and approved administrative questions so staff can focus on patients and exceptions.",
  },
  {
    title: "Protect patient trust",
    text: "Use conservative boundaries for clinical, urgent, private, emotional, complaint, or unclear requests instead of letting AI guess.",
  },
  {
    title: "Make handoffs easier to supervise",
    text: "Give staff the request summary, source channel, escalation reason, and next action so sensitive cases are easier to review.",
  },
];

const workflowPreview = [
  ["Inbound request", "Phone, form, email, chat, or reminder response"],
  ["Request type detected", "Appointment, reminder, form, referral, billing, urgent, clinical, or uncertain"],
  ["Approved context checked", "Hours, location, intake instructions, reminder rules, staff routing, forms"],
  ["Action prepared", "Staff task, booking handoff, reminder queue, intake follow-up, escalation note"],
  ["Human handoff", "Clinical, urgent, private, complaint, or uncertain requests route to staff"],
  ["KPI logged", "Response time, interruptions reduced, reminder completion, escalation quality"],
];

const neverItems = [
  {
    title: "No diagnosis or treatment advice",
    text: "The assistant does not diagnose symptoms, recommend treatment, interpret medical details, or replace practitioner judgment.",
  },
  {
    title: "No emergency triage",
    text: "Urgent symptoms, emergency language, safety concerns, or unclear clinical situations route to authorized staff or approved emergency instructions.",
  },
  {
    title: "No clinical decisions",
    text: "The workflow supports administrative intake, routing, reminders, and handoffs. It does not decide care pathways, eligibility, medication, or treatment next steps.",
  },
  {
    title: "No independent privacy-sensitive resolution",
    text: "Requests involving identity, records, complaints, billing disputes, private details, or uncertainty escalate instead of being resolved automatically.",
  },
  {
    title: "No replacement for authorized staff",
    text: "AI can prepare context, summarize, route, and remind. Staff remain responsible for sensitive judgment, approvals, exceptions, and patient experience.",
  },
];

const controlItems = [
  {
    title: "Approved response boundaries",
    text: "Limit responses to non-clinical information such as hours, location, appointment preparation, form instructions, and routing.",
  },
  {
    title: "Escalation by design",
    text: "Urgency, clinical uncertainty, complaints, privacy-sensitive details, and emotional situations route to authorized staff.",
  },
  {
    title: "Traceable handoffs",
    text: "Preserve the request, source, routing decision, staff owner, escalation reason, and final outcome for review.",
  },
  {
    title: "Staff-reviewed launch",
    text: "Start with narrow administrative workflows and review real interactions before expanding channels or scenarios.",
  },
];

const rollout = [
  {
    step: "Week 1",
    title: "Map the front-desk workflow",
    text: "Confirm the first administrative workflow, approved information, escalation rules, staff owners, privacy boundaries, and KPI baseline.",
  },
  {
    step: "Week 2",
    title: "Build the controlled pilot",
    text: "Configure request classification, approved responses, reminder/intake actions, staff tasks, and escalation paths.",
  },
  {
    step: "Week 3",
    title: "Test sensitive scenarios",
    text: "Review urgent language, clinical uncertainty, privacy-sensitive requests, complaints, billing edge cases, and handoff quality with staff.",
  },
  {
    step: "Week 4",
    title: "Launch and monitor",
    text: "Deploy the bounded workflow, monitor patient experience, review escalations, tune routing, and decide what should expand next.",
  },
];

const faqs = [
  {
    question: "Will this assistant answer medical questions?",
    answer: "No. The safer starting point is administrative support. Clinical, urgent, private, emotional, or unclear requests should route to authorized staff.",
  },
  {
    question: "Can it book or change appointments?",
    answer: "It can support appointment request intake, reminders, and booking handoff based on your rules. Final configuration depends on your scheduling system, policies, and review requirements.",
  },
  {
    question: "Can it handle multiple providers or locations?",
    answer: "Yes. Routing, hours, appointment types, forms, reminders, and escalation rules can differ by provider, location, or workflow.",
  },
  {
    question: "What happens if the assistant is unsure?",
    answer: "It should not guess. It can capture the request, mark the uncertainty, and route the details to staff with context and an escalation reason.",
  },
  {
    question: "What should the first pilot measure?",
    answer: "Common metrics include response time, front-desk interruptions reduced, reminder completion, no-show follow-up, staff handoff quality, and escalation accuracy.",
  },
];

export default function HealthcareFrontDeskAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="healthcare-solution-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="healthcare-solution-title" className="max-w-[800px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              Healthcare front desk agent for administrative calls, reminders, and staff handoff.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              A controlled AI workflow for appointment requests, reminder follow-up, forms, routine administrative questions, and conservative escalation when staff judgment is needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AssessmentTrigger
                sourcePage="/solutions/healthcare-front-desk-agent"
                ctaLocation="healthcare_solution_hero"
                serviceInterest="ai-voice"
                workflowInterest="healthcare front desk agent"
                modalTitle="Request A Healthcare Workflow Assessment"
                modalDescription="Tell us how front-desk calls, reminders, appointment requests, forms, privacy-sensitive handoffs, and staff escalation work today. We will look for a bounded administrative workflow worth piloting."
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover"
              >
                Request Workflow Assessment
              </AssessmentTrigger>
              <Link href="#boundaries" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Review Safety Boundaries
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Front desk queue</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Current administrative requests</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Escalation ready</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Appointment request", "Location and provider", "Booking handoff"],
                  ["Reminder response", "Prep instructions", "Follow-up queued"],
                  ["Form question", "Approved admin info", "Instructions sent"],
                  ["Clinical concern", "Sensitive request", "Escalated to staff"],
                ].map(([request, context, action]) => (
                  <div key={request} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{request}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed for administrative support with conservative escalation for anything clinical, urgent, private, or uncertain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="healthcare-buyer-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">For clinic owners and operators</p>
              <h2 id="healthcare-buyer-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
                The value is administrative relief without clinical risk.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                This is most useful when routine calls, reminder follow-up, intake forms, and staff routing are pulling attention away from patients and higher-judgment work.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {buyerPriorities.map((item) => (
                <article key={item.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <h3 className="text-lg font-extrabold leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="healthcare-reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Healthcare front desk reality</p>
            <h2 id="healthcare-reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Routine admin work competes with patient attention every day.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-white/66 md:text-base">
              The goal is not clinical automation. The goal is to reduce repetitive administrative load while making the right human handoff easier.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {operatingReality.map((item) => (
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="handles-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What the agent handles"
            title="Start with administrative workflows that are useful and supportable."
            description="The first pilot should reduce front-desk pressure without pushing automation into clinical decisions or sensitive judgment."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {handles.map((card) => (
              <article key={card.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="boundaries" className="scroll-mt-28 border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="never-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Clear boundaries"
            title="What the AI will never do."
            description="The system should support administration, routing, reminders, and handoffs while keeping clinical and privacy-sensitive decisions with authorized people."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {neverItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-white p-5">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="workflow-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Workflow preview"
            title="From request to safe staff handoff."
            description="A useful healthcare agent classifies the request, checks approved administrative context, prepares the next action, and escalates sensitive moments."
          />
          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)]">
            <div className="grid gap-3">
              {workflowPreview.map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-card-border bg-white p-4 sm:grid-cols-[64px_1fr]">
                  <p className="text-sm font-extrabold text-[#167f65]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-base font-extrabold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071112] px-4 py-14 text-white md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">Human control</p>
            <h2 id="controls-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Built for conservative escalation and traceable handoff.
            </h2>
            <p className="mt-5 max-w-[780px] text-base leading-8 text-white/66 md:text-[18px]">
              The agent can reduce administrative pressure, but staff define the boundaries, review sensitive situations, and own final decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {controlItems.map((item, index) => (
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
            eyebrow="2-4 week launch sprint"
            title="A narrow administrative pilot keeps risk controlled."
            description="Timeline depends on system access, privacy requirements, scheduling tools, review speed, and the sensitivity of the first workflow."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}</h3>
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
            eyebrow="Questions clinic leaders ask"
            title="Reduce uncertainty before a front-desk workflow goes live."
            description="The first build should reduce administrative load while keeping patient experience, privacy, and clinical boundaries protected."
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

      <section className="scroll-mt-28 bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="assessment-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Workflow assessment</p>
            <h2 id="assessment-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Find the first front-desk workflow worth piloting.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              We will review where routine requests arrive, what your staff can safely approve, which tools need to be connected, and which clinical or privacy-sensitive cases must escalate.
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Request a healthcare workflow assessment.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Share your front-desk, reminder, scheduling, intake, or staff handoff process. We will look for a bounded administrative workflow that can be tested safely.
            </p>
            <AssessmentTrigger
              sourcePage="/solutions/healthcare-front-desk-agent"
              ctaLocation="healthcare_solution_final_cta"
              serviceInterest="ai-voice"
              workflowInterest="healthcare front desk agent"
              modalTitle="Request A Healthcare Workflow Assessment"
              modalDescription="Tell us how front-desk calls, reminders, appointment requests, forms, privacy-sensitive handoffs, and staff escalation work today. We will look for a bounded administrative workflow worth piloting."
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
            >
              Request Workflow Assessment
            </AssessmentTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
