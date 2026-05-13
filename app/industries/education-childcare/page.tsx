import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Communication arrives from every direction",
    text: "Families, parents, learners, and prospective students reach out through calls, email, forms, text, chat, and staff-specific threads.",
  },
  {
    title: "The right answer depends on program context",
    text: "Age group, location, enrollment status, schedule, policies, staff availability, and sensitivity level all affect what should happen next.",
  },
  {
    title: "Staff lose focus to repeatable admin",
    text: "Teams answer the same questions, chase missing details, route messages, schedule tours, confirm absences, and document exceptions throughout the day.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Capture the request",
    text: "AI handles the first interaction across voice, chat, email, or form intake and collects the learner, family, program, location, urgency, and next-step details.",
  },
  {
    step: "02",
    title: "Apply the right context",
    text: "The workflow references approved information such as program availability, tour process, calendar rules, attendance policies, or location-specific instructions.",
  },
  {
    step: "03",
    title: "Route with clear ownership",
    text: "The system creates the right staff handoff, calendar task, enrollment follow-up, classroom note, or admin ticket with the context already attached.",
  },
  {
    step: "04",
    title: "Keep sensitive cases human-led",
    text: "Pickup changes, custody-sensitive issues, health concerns, payment disputes, and unclear cases are documented and escalated to authorized staff.",
  },
];

const valuePatterns = [
  {
    label: "Daycare and childcare",
    outcome: "Support parent calls, enrollment inquiries, tour scheduling, absence notices, and policy-based escalation while staff stay focused on children and families.",
  },
  {
    label: "Private and prep schools",
    outcome: "Route admissions questions, parent communication, attendance updates, program inquiries, and staff follow-up with more consistent handoffs.",
  },
  {
    label: "Tutoring and adult learning",
    outcome: "Respond to prospective learners, schedule consultations or assessments, answer program questions, and keep enrollment follow-up moving.",
  },
];

const solutionCards = [
  {
    title: "Daycare Voice Agent",
    description:
      "A focused front desk voice assistant for enrollment inquiries, tour requests, parent call routing, absence reporting, and multi-location communication workflows.",
    href: "/solutions/daycare-voice-agent",
    cta: "View solution",
  },
  {
    title: "Enrollment Follow-Up Agent",
    description:
      "A future solution pattern for prospective families, learners, and students who need timely next steps after forms, calls, open houses, or inquiries.",
    cta: "Planned pattern",
  },
  {
    title: "Message Triage Agent",
    description:
      "A future solution pattern for shared inboxes, parent messages, student questions, staff routing, approvals, and documented escalation.",
    cta: "Planned pattern",
  },
];

const sectorShifts = [
  {
    title: "Response expectations are rising",
    text: "Families and learners expect quick acknowledgement, clear next steps, and fewer handoff loops when asking about enrollment, schedules, programs, or policies.",
  },
  {
    title: "Staffing pressure makes interruptions expensive",
    text: "Routine communication can pull administrators, front desk teams, admissions staff, and educators away from work that requires human presence and judgment.",
  },
  {
    title: "Trust depends on control",
    text: "Education and childcare automation needs approved language, documented handoffs, location-specific rules, and clear escalation for sensitive situations.",
  },
];

const systemGroups = [
  {
    title: "Communication channels",
    items: ["Phone", "Email", "Website forms", "Chat", "SMS or WhatsApp"],
  },
  {
    title: "Operations data",
    items: ["Calendar", "Enrollment CRM", "Classroom platform", "Program availability", "Policy documents"],
  },
  {
    title: "Team workflow",
    items: ["Admissions tasks", "Staff handoff", "Parent follow-up", "Audit log", "KPI reporting"],
  },
];

const controls = [
  "Approved responses keep the system aligned with your policies, program details, and communication standards.",
  "Location-specific workflows can support different centers, campuses, schedules, programs, and staff responsibilities.",
  "Sensitive cases can be flagged and routed instead of answered automatically.",
  "Audit logs can preserve the request, source, routing, staff owner, and final outcome for review.",
];

const rollout = [
  ["Start", "Choose one frequent communication workflow, such as enrollment inquiry handling, tour scheduling, or absence reporting."],
  ["Pilot", "Run real conversations with staff review, approved responses, escalation rules, and clear parent or learner experience checks."],
  ["Expand", "Add adjacent workflows, locations, channels, or integrations once the first workflow saves time and earns staff trust."],
];

const confidenceNotes = [
  "Start with a bounded workflow instead of a broad automation program.",
  "Validate communication quality before expanding to more sensitive scenarios.",
  "Keep staff approval for exceptions until policies, data, and escalation rules are proven.",
];

export default function EducationChildcarePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="education-childcare-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              Education & Childcare
            </p>
            <h1 id="education-childcare-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI operations support for families, learners, enrollment, and admin workflows.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              We help childcare centers, private schools, tutoring programs, youth education providers, and enrollment-driven learning organizations reduce routine communication work while keeping sensitive decisions under staff control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/solutions/daycare-voice-agent" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                View Daycare Voice Agent
              </Link>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Get Free Assessment
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-start justify-between gap-4 border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Example communication flow</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Inquiry routed with context</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Human review</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["New inquiry", "Program and location captured"],
                  ["Approved info", "Tour, availability, and policy checked"],
                  ["Staff handoff", "Task created with complete context"],
                  ["Sensitive case", "Escalated to authorized staff"],
                ].map(([label, detail]) => (
                  <div key={label} className="rounded-lg border border-card-border bg-[#f8fbfa] p-4">
                    <p className="text-sm font-extrabold text-ink">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[800px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Education and childcare teams need automation that understands families, learners, policies, and staff capacity.
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
            title="The system should turn communication into the right next step, not just another message."
            description="A useful education or childcare automation captures context, applies approved information, routes the request, and keeps sensitive cases with people who are authorized to decide."
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
              Start with the communication workflows your team handles every day.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The first useful automation is usually a frequent, structured workflow where better intake, faster routing, and clear escalation can reduce staff interruptions without weakening trust.
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="solutions-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Relevant solutions"
            title="Use the industry page to choose the right workflow, then go deeper into the specific solution."
            description="Education and childcare organizations can share similar operational pressure while needing different solution entry points by age group, program type, and communication model."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {solutionCards.map((solution) => (
              <article key={solution.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{solution.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{solution.description}</p>
                {solution.href ? (
                  <Link href={solution.href} className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                    {solution.cta}
                  </Link>
                ) : (
                  <p className="mt-6 text-sm font-extrabold text-muted">{solution.cta}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="sector-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="What is shaping the sector"
            title="Communication expectations are rising while staff attention remains limited."
            description="The useful shift is not replacing staff. It is giving teams a reliable support layer for intake, routing, follow-up, and escalation."
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
            title="Automation should fit the tools and channels your team already uses."
            description="The first workflow can connect communication intake to calendars, enrollment tools, classroom platforms, CRM records, staff notifications, and reporting."
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
            title="Keep policies, sensitive cases, and final decisions under human oversight."
            description="Education and childcare workflows need operational control, flexible policies, and careful escalation. Automation should support trust, not weaken it."
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
              title="A practical rollout lowers risk for teams that are cautious about parent, learner, or staff experience."
              description="The first milestone should be narrow enough to launch, valuable enough to measure, and clear enough that staff trust the system before it expands."
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
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">The first project should be specific enough to price, test, and trust.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              We recommend starting with a defined communication workflow before expanding into more channels, more locations, or more sensitive scenarios.
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
        storySlugs={["daycare-front-desk-voice", "ai-roadmap-value-realization"]}
        eyebrow="Representative proof patterns"
        title="Education and childcare automation should prove safety, clarity, and staff control."
        description="These examples focus on routine communication, approved responses, sensitive handoffs, and the measurable operating signals that make cautious rollout easier."
        compact
        className="border-y border-card-border bg-[#f8fbfa]"
      />

      <AssessmentCTA sourcePage="/industries/education-childcare" ctaLocation="education_childcare_assessment" />
    </div>
  );
}
