import Image from "next/image";
import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Intake takes longer than the actual first step",
    text: "Teams lose time collecting contact details, service needs, appointment preferences, eligibility notes, documents, forms, and missing context before a professional can help.",
  },
  {
    title: "Follow-up depends on busy staff remembering",
    text: "Prospects, clients, patients, or members may need reminders, next steps, document requests, booking links, payment prompts, or post-visit follow-up at the right moment.",
  },
  {
    title: "Sensitive requests need clean escalation",
    text: "Some questions need a licensed professional, manager, practitioner, or office lead. Automation should identify those moments and hand off with context.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Capture the inquiry",
    text: "AI handles calls, forms, chat, or email and collects the service need, urgency, preferred appointment time, contact details, and missing intake information.",
  },
  {
    step: "02",
    title: "Check approved rules",
    text: "The workflow references approved service descriptions, booking rules, eligibility questions, document checklists, reminders, and escalation criteria.",
  },
  {
    step: "03",
    title: "Prepare the handoff",
    text: "The system books or routes the request, creates the right task, sends the next-step message, and gives staff a concise summary before they respond.",
  },
  {
    step: "04",
    title: "Keep the record clean",
    text: "CRM notes, appointment context, document status, follow-up actions, and KPI events are logged so the team can see what happened and what remains.",
  },
];

const valuePatterns = [
  {
    label: "Client and patient intake",
    outcome: "Collect the details staff ask for repeatedly, route requests to the right person, and reduce back-and-forth before the first appointment or consultation.",
  },
  {
    label: "Appointment scheduling",
    outcome: "Support booking, rescheduling, reminders, confirmations, cancellation handling, and follow-up while respecting staff availability and office rules.",
  },
  {
    label: "Document and next-step follow-up",
    outcome: "Request missing forms, send instructions, remind clients of next steps, and escalate unanswered or sensitive cases before they stall.",
  },
];

const servicePaths = [
  {
    title: "AI Voice intake",
    description:
      "A voice-led starting point for routine appointment calls, service questions, intake capture, and front-office routing.",
    href: "/core-services/ai-voice",
    cta: "Explore AI Voice",
  },
  {
    title: "AI Agents for workflow routing",
    description:
      "Agents that turn calls, emails, forms, and chat into CRM updates, booking tasks, document requests, reminders, and staff handoffs.",
    href: "/core-services/ai-agents",
    cta: "Explore AI Agents",
  },
  {
    title: "Document follow-up agent",
    description:
      "A future solution pattern for recurring paperwork, intake forms, reminders, approvals, and client-status visibility.",
    cta: "Planned solution pattern",
  },
];

const sectorShifts = [
  {
    title: "Clients expect faster response",
    text: "Appointment-driven businesses can lose trust before the first visit if inquiries, booking requests, or follow-up messages sit unanswered.",
  },
  {
    title: "Admin work is hard to scale",
    text: "Adding more clients often creates more scheduling, reminders, intake, documentation, billing questions, and status updates for the same small team.",
  },
  {
    title: "Professional judgment must stay protected",
    text: "Automation should not make regulated, clinical, legal, financial, or sensitive decisions. It should collect context and route the right case to the right person.",
  },
];

const systemGroups = [
  {
    title: "Client channels",
    items: ["Phone", "Email", "Website forms", "Chat", "SMS reminders"],
  },
  {
    title: "Practice systems",
    items: ["CRM", "Calendar", "Booking tools", "Forms", "Payment links"],
  },
  {
    title: "Team workflow",
    items: ["Intake task", "Document request", "Staff handoff", "Follow-up queue", "KPI reporting"],
  },
];

const controls = [
  "Approved response rules keep the agent aligned with your services, policies, appointment rules, and communication standards.",
  "Sensitive, regulated, urgent, or unclear situations can route to a human instead of being answered automatically.",
  "Role-based handoffs can separate front desk, practitioner, manager, sales, and administrative responsibilities.",
  "Audit logs can preserve the inquiry, source, routing decision, owner, follow-up, and final outcome.",
];

const rollout = [
  ["Start", "Choose one repeatable workflow, such as new client intake, appointment requests, document collection, or follow-up reminders."],
  ["Pilot", "Run real inquiries with staff review, measure response time, booking completion, missing-info reduction, and escalation quality."],
  ["Expand", "Add more channels, follow-up workflows, document reminders, reporting, or specialized routing once the first workflow is trusted."],
];

const confidenceNotes = [
  "Start with operational support before automating sensitive advice or professional judgment.",
  "Measure appointment conversion, response time, admin touches reduced, and follow-up completion.",
  "Keep clear handoff rules for anything urgent, regulated, emotional, financial, clinical, or legally sensitive.",
];

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="professional-services-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              Professional Services
            </p>
            <h1 id="professional-services-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI intake and follow-up systems for appointment-driven service teams.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              We help professional practices, clinics, wellness teams, advisory firms, and client-service businesses reduce repetitive intake, scheduling, document follow-up, and front-office routing while keeping judgment with the right people.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/core-services/ai-agents" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Explore AI Agents
              </Link>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                Get Free Assessment
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src="/images/home/how-it-works.jpg"
              alt="Professional services team reviewing client intake and workflow information"
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;Can I book an appointment, and what information do you need from me first?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[800px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Professional service teams lose capacity when every inquiry needs manual intake, routing, and follow-up.
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
            title="Intake should become a booked next step, clean handoff, or documented follow-up."
            description="A useful professional services automation captures context, applies approved rules, routes the request, and keeps sensitive cases with people who are qualified to decide."
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
              Start with the repetitive admin work that slows the client experience.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The first useful automation is usually a narrow intake, scheduling, or follow-up workflow where better consistency can save staff time and improve conversion.
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
            title="Connect the first client touchpoint to the workflow that follows."
            description="Professional services automation often starts with intake and then expands into scheduling, documents, reminders, reporting, and managed operations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{path.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{path.description}</p>
                {path.href ? (
                  <Link href={path.href} className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                    {path.cta}
                  </Link>
                ) : (
                  <p className="mt-6 text-sm font-extrabold text-muted">{path.cta}</p>
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
            title="Service quality now depends on how quickly the team can move from inquiry to next step."
            description="The useful shift is not replacing professionals. It is creating a reliable support layer around the administrative work that surrounds their expertise."
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
            title="The agent should support the tools your staff already uses."
            description="The first workflow can connect intake channels to CRM records, calendars, booking tools, forms, payment links, reminders, staff tasks, and reporting."
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
            title="Keep advice, judgment, and sensitive decisions with the right people."
            description="Professional services workflows often involve trust, privacy, expectations, and sometimes regulation. Automation should reduce admin load while protecting boundaries."
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
              title="A practical rollout protects client experience while reducing admin load."
              description="The first milestone should be narrow enough to review closely, valuable enough to measure, and clear enough that staff know when the system acts or escalates."
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
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">The first project should make the buying decision easier, not bigger.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              We recommend starting with one intake or follow-up workflow, tracking staff time saved and conversion impact, then expanding after the system earns trust.
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
        storySlugs={["professional-services-intake", "healthcare-front-desk"]}
        eyebrow="Representative proof patterns"
        title="Professional services proof should show faster intake with judgment protected."
        description="These examples focus on appointment-driven workflows where AI captures context, prepares the handoff, and keeps regulated or sensitive decisions with qualified people."
        compact
        className="border-y border-card-border bg-[#f8fbfa]"
      />

      <AssessmentCTA sourcePage="/industries/professional-services" ctaLocation="professional_services_assessment" />
    </div>
  );
}
