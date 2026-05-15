import Image from "next/image";
import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Front desk teams absorb constant interruptions",
    text: "Appointment requests, reminders, directions, forms, billing questions, referral status, and routine follow-up often compete with in-person patient support.",
  },
  {
    title: "Simple requests still need the right context",
    text: "The next step can depend on provider availability, appointment type, intake status, location, policy, patient record context, and whether the issue needs clinical review.",
  },
  {
    title: "Sensitive situations cannot be guessed",
    text: "Healthcare automation needs clear boundaries, escalation, auditability, and human review for symptoms, urgent issues, clinical judgment, privacy, and exceptions.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Capture the request",
    text: "AI handles routine calls, forms, chat, or email and identifies appointment requests, reminders, administrative questions, referral follow-up, or staff escalation needs.",
  },
  {
    step: "02",
    title: "Apply approved rules",
    text: "The workflow references approved non-clinical information such as hours, location, appointment types, intake instructions, reminder rules, and routing criteria.",
  },
  {
    step: "03",
    title: "Route with context",
    text: "The system creates the right task, booking handoff, intake follow-up, reminder, staff notification, or escalation with a concise summary attached.",
  },
  {
    step: "04",
    title: "Escalate sensitive cases",
    text: "Urgent, clinical, emotional, privacy-sensitive, or unclear situations are handed to authorized staff instead of being resolved automatically.",
  },
];

const valuePatterns = [
  {
    label: "Appointment and reminder support",
    outcome: "Reduce routine scheduling pressure, reminder calls, no-show follow-up, cancellation handling, and appointment-prep questions.",
  },
  {
    label: "Administrative intake",
    outcome: "Collect missing forms, contact details, reason for visit, location preferences, insurance or referral notes, and other non-clinical intake context.",
  },
  {
    label: "Patient question routing",
    outcome: "Answer approved administrative questions and route clinical, urgent, billing, privacy, or uncertain requests to the right staff member.",
  },
];

const servicePaths = [
  {
    title: "AI Voice for front desk support",
    description:
      "A voice-led starting point for routine calls, appointment requests, reminders, directions, and administrative intake with staff handoff.",
    href: "/core-services/ai-voice",
    cta: "Explore AI Voice",
  },
  {
    title: "AI Agents for routing and follow-up",
    description:
      "Workflow agents that turn calls, forms, emails, and messages into tasks, reminders, summaries, handoffs, and operational reporting.",
    href: "/core-services/ai-agents",
    cta: "Explore AI Agents",
  },
  {
    title: "Security and monitoring",
    description:
      "Controls for escalation, audit logs, monitoring, human review, and implementation practices that respect sensitive workflows.",
    href: "/capabilities/security-monitoring-ai-safety",
    cta: "Explore Safety Controls",
  },
];

const sectorShifts = [
  {
    title: "Patient expectations are becoming more immediate",
    text: "People expect quick acknowledgement, clear next steps, and fewer phone loops for routine administrative needs, even when clinic staff are busy.",
  },
  {
    title: "Administrative load affects patient experience",
    text: "When staff are buried in repetitive calls and follow-up, it becomes harder to give focused attention to people in the office and cases that need judgment.",
  },
  {
    title: "Trust depends on restraint",
    text: "The right healthcare automation does less guessing, not more. It uses approved information, clear handoffs, and careful monitoring around sensitive cases.",
  },
];

const systemGroups = [
  {
    title: "Patient channels",
    items: ["Phone", "Forms", "Email", "Chat", "SMS reminders"],
  },
  {
    title: "Clinic systems",
    items: ["Calendar", "Practice system", "CRM", "Forms", "Referral tracker"],
  },
  {
    title: "Team workflow",
    items: ["Staff task", "Reminder queue", "Escalation note", "Audit log", "KPI reporting"],
  },
];

const controls = [
  "The agent should not provide medical advice, diagnosis, treatment decisions, or emergency judgment.",
  "Urgent symptoms, unclear requests, privacy-sensitive issues, complaints, and clinical questions should escalate to authorized staff.",
  "Approved responses can be limited to administrative information such as hours, location, appointment preparation, routing, and next-step instructions.",
  "Audit logs can preserve request source, routing, staff owner, escalation reason, and final outcome for review.",
];

const rollout = [
  ["Start", "Choose one low-risk workflow, such as appointment reminders, administrative intake, directions, or non-clinical appointment request routing."],
  ["Pilot", "Run real requests with staff review, approved responses, escalation rules, privacy checks, and patient-experience monitoring."],
  ["Expand", "Add adjacent administrative workflows, channels, provider-specific routing, and reporting only after the first workflow is trusted."],
];

const confidenceNotes = [
  "Start with administrative support, not clinical decision-making.",
  "Measure response time, call interruptions reduced, reminder completion, no-show follow-up, and staff handoff quality.",
  "Treat privacy, security, audit logging, and human escalation as core requirements rather than optional add-ons.",
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="healthcare-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="healthcare-title" className="max-w-[790px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI front desk support for routine healthcare communication and admin workflows.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              We help clinics, wellness practices, therapy offices, dental teams, and healthcare-adjacent service providers reduce repetitive administrative communication while keeping clinical judgment, sensitive situations, and exceptions with staff.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/core-services/ai-voice" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Explore AI Voice
              </Link>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Get Free Assessment
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/industries/healthcare.jpg"
              alt="Healthcare staff supporting patient communication and administrative workflow"
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;Can I reschedule my appointment, and do I need to bring anything with me?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Healthcare teams need automation that reduces repetitive admin without weakening patient trust.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {frictionAreas.map((area) => (
              <article key={area.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-28 bg-white px-4 py-14 md:py-20" aria-labelledby="workflow-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Connected workflow"
            title="The system should support the front desk, not practice medicine."
            description="A useful healthcare automation captures administrative requests, applies approved information, creates the right staff handoff, and escalates anything sensitive or clinical."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowPath.map((item) => (
              <article key={item.step} className="relative rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-extrabold tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="value-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#87e6ce]">Where value usually starts</p>
            <h2 id="value-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Start with low-risk administrative workflows before expanding.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The first useful automation is usually a routine front-desk workflow where faster response, cleaner handoff, and better documentation can save staff time without touching clinical decisions.
            </p>
          </div>
          <div className="grid gap-4">
            {valuePatterns.map((pattern) => (
              <article key={pattern.label} className="rounded-lg border border-white/14 bg-white/[0.06] p-5">
                <p className="text-sm font-bold text-[#87e6ce]">{pattern.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/82">{pattern.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Relevant service paths"
            title="Healthcare automation should begin with supportable workflows and clear boundaries."
            description="The strongest starting points are non-clinical workflows where approved information, staff handoff, and auditability can be designed from the beginning."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{path.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{path.description}</p>
                <Link href={path.href} className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="sector-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What is shaping the sector"
            title="Patient experience depends on speed, clarity, and knowing when a human must step in."
            description="Healthcare automation wins trust when it reduces repetitive friction while being conservative around privacy, urgency, and clinical uncertainty."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sectorShifts.map((shift) => (
              <article key={shift.title} className="rounded-lg border border-card-border bg-white p-6">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{shift.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{shift.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="systems-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Systems we connect"
            title="The first workflow should fit the tools your clinic already uses."
            description="The implementation can connect routine communication to calendars, practice systems, forms, reminders, staff tasking, audit logs, and reporting."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {systemGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-lg font-extrabold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-card-border bg-white px-3 py-1.5 text-sm font-semibold text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Controls by design"
            title="Build the guardrails before the automation expands."
            description="Healthcare and wellness workflows require conservative escalation, privacy-aware implementation, and traceable decisions. Those controls should be part of the first build, not added later."
          />
          <div className="rounded-lg border border-card-border bg-white p-6 shadow-[0_10px_30px_rgba(15,23,32,0.04)]">
            <div className="grid gap-5">
              {controls.map((item) => (
                <div key={item} className="flex gap-4 border-b border-card-border pb-5 last:border-b-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1db993]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Start small, prove value"
              title="A careful rollout protects patients, staff, and the business case."
              description="The first milestone should be narrow, non-clinical, staff-reviewed, and measurable. Expansion should only happen after workflow quality and escalation rules are trusted."
            />
            <div className="mt-8 grid gap-4">
              {rollout.map(([title, text]) => (
                <article key={title} className="grid gap-2 rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] sm:grid-cols-[110px_1fr]">
                  <h3 className="text-lg font-extrabold text-[#167f65]">{title}</h3>
                  <p className="text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Spend confidence</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">Healthcare automation should price the safeguards, not hide them.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Costs can vary based on call volume, channels, integrations, privacy requirements, review workflows, monitoring, and escalation depth. A practical first milestone keeps scope narrow and quality visible.
            </p>
            <div className="mt-5 grid gap-3">
              {confidenceNotes.map((note) => (
                <p key={note} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                  {note}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <ProofStorySection
        storySlugs={["healthcare-front-desk", "managed-ai-operations-rhythm"]}
        eyebrow="Workflow examples"
        title="Healthcare proof should show conservative automation with clear escalation."
        description="These examples focus on routine front-desk support, privacy-aware routing, staff review, and the operating metrics that help teams expand only when quality is trusted."
        compact
        className="border-y border-card-border bg-[#f8fbfa]"
      />

      <AssessmentCTA sourcePage="/industries/healthcare" ctaLocation="healthcare_assessment" />
    </div>
  );
}
