import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import ServiceProofModules from "@/components/services/ServiceProofModule";
import { howWeBuildPillars } from "@/data/how-we-build";
import type { ServicePageData } from "@/data/service-pages";

type ServiceOfferPageProps = {
  service: ServicePageData;
};

type ServicePresentation = {
  secondaryCta: string;
  scenario: {
    eyebrow: string;
    title: string;
    text: string;
    signals: string[];
  };
  pilotProof: Array<{
    label: string;
    title: string;
    text: string;
  }>;
  sections: {
    workflowTitle: string;
    workflowDescription: string;
    systemsTitle: string;
    systemsDescription: string;
    controlTitle: string;
    controlDescription: string;
    rolloutTitle: string;
    rolloutDescription: string;
    trustTitle: string;
    trustDescription: string;
  };
};

const presentationBySlug: Record<string, ServicePresentation> = {
  "ai-agents": {
    secondaryCta: "View Agent Workflows",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start where the team repeats the same decision dozens of times a week.",
      text: "AI agents work best when there is a clear queue, a known set of actions, and a human owner for exceptions.",
      signals: ["Inbox or CRM queue", "Repeatable classification", "Downstream task or update", "Human review for exceptions"],
    },
    pilotProof: [
      { label: "Reduce", title: "Manual touches", text: "Measure how many routine classifications, drafts, routes, and record updates no longer require staff effort." },
      { label: "Improve", title: "Queue speed", text: "Track how quickly requests move from intake to owner, task, reply draft, or completed workflow." },
      { label: "Protect", title: "Exception control", text: "Show that sensitive, uncertain, and high-value work routes to people with useful context." },
    ],
    sections: {
      workflowTitle: "Agents should remove manual touches, not create another place to check.",
      workflowDescription: "The strongest agent workflows classify, draft, route, update systems, and leave a clear trail for the person who owns the outcome.",
      systemsTitle: "Agent work should land inside the tools where the team already works.",
      systemsDescription: "We connect the agent to approved inputs, systems of record, and team notification channels so the automation becomes part of operations.",
      controlTitle: "Give agents a job description, permissions, and escalation rules.",
      controlDescription: "The agent should know what it can complete, what it can draft, what it should ask for, and what must go to a person.",
      rolloutTitle: "Launch one agent around one valuable queue.",
      rolloutDescription: "A focused first workflow makes quality easier to inspect and gives the team confidence before expanding into more channels or decisions.",
      trustTitle: "Reliable agents depend on integrations, safety, measurement, and adoption.",
      trustDescription: "The trust layer keeps agent work connected, reviewable, measurable, and understandable to the staff who use it.",
    },
  },
  "ai-chat": {
    secondaryCta: "See Messaging Flows",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start where customers ask the same questions before anyone is available.",
      text: "Messaging automation is strongest when answers can be approved, context can be captured, and the next step can be routed cleanly.",
      signals: ["High-volume FAQs", "Lead qualification", "Support intake", "CRM or ticket handoff"],
    },
    pilotProof: [
      { label: "Answer", title: "Common questions", text: "Deflect repeat questions with approved responses while keeping risky or uncertain topics out of scope." },
      { label: "Capture", title: "Useful context", text: "Collect fit, urgency, contact details, booking needs, support category, and transcript history." },
      { label: "Route", title: "Next action", text: "Create the CRM record, ticket, booking path, staff alert, or follow-up task instead of ending at the chat." },
    ],
    sections: {
      workflowTitle: "A useful chat experience does something after the answer.",
      workflowDescription: "The conversation should qualify, book, route, create a record, open a ticket, or prepare a clean handoff instead of ending at a message bubble.",
      systemsTitle: "Customer messages need approved knowledge and real routing.",
      systemsDescription: "We connect chat to the sources and tools that keep answers accurate and make follow-up visible.",
      controlTitle: "Keep public answers inside approved boundaries.",
      controlDescription: "Messaging systems need stricter guardrails around claims, pricing, policies, support advice, and frustrated customers.",
      rolloutTitle: "Launch the first messaging path where speed and consistency matter.",
      rolloutDescription: "Start with lead qualification, booking, FAQ support, or ticket intake before expanding to more channels.",
      trustTitle: "Safe messaging depends on knowledge quality, handoffs, and transcript review.",
      trustDescription: "The supporting capability layer keeps the assistant useful without letting it invent answers or hide context from staff.",
    },
  },
  "ai-transformation": {
    secondaryCta: "See Roadmap Work",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start when leadership knows AI matters but does not know what should come first.",
      text: "Strategy work should create a ranked first move, not a vague transformation deck or an oversized implementation plan.",
      signals: ["Workflow inventory", "Value and risk ranking", "Pilot scope", "30/60/90-day measurement"],
    },
    pilotProof: [
      { label: "Clarify", title: "First workflow", text: "Identify the workflow with the best mix of volume, value, feasibility, and risk control." },
      { label: "Scope", title: "Paid next step", text: "Define whether the right follow-on is a paid blueprint, pilot, build sprint, or operational cleanup." },
      { label: "Measure", title: "Value case", text: "Tie the initiative to response time, cycle time, labor hours, conversion, cost per request, or escalation rate." },
    ],
    sections: {
      workflowTitle: "Strategy should turn AI interest into specific pilot decisions.",
      workflowDescription: "The output should identify the workflow, budget drivers, controls, systems, staff roles, and value metrics behind the first useful build.",
      systemsTitle: "A roadmap has to respect the systems already running the business.",
      systemsDescription: "We map the current tools, data quality, handoffs, and operational constraints before recommending technology.",
      controlTitle: "The roadmap should define what not to automate yet.",
      controlDescription: "Good strategy protects the business from automating sensitive, unclear, or low-value work too early.",
      rolloutTitle: "Move from assessment to a bounded paid blueprint or pilot.",
      rolloutDescription: "The path should make spend easier to approve by tying the next step to risk, value, and measurable outcomes.",
      trustTitle: "Strategy only matters if it makes implementation safer and clearer.",
      trustDescription: "The How We Build layer turns the roadmap into controls, measurement, adoption, and system architecture.",
    },
  },
  "marketing-automation": {
    secondaryCta: "See Content Workflows",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start where content, approval, and follow-up keep slipping.",
      text: "Marketing automation works best when AI speeds up drafting and coordination while people keep control of brand, claims, and final publishing.",
      signals: ["Content calendar backlog", "Approval queue", "Lead nurture", "Campaign reporting"],
    },
    pilotProof: [
      { label: "Speed", title: "Draft production", text: "Turn approved ideas, offers, FAQs, and campaign notes into drafts without starting from a blank page." },
      { label: "Control", title: "Approval flow", text: "Keep brand, claims, offers, regulated language, and publishing decisions under human review." },
      { label: "Follow", title: "Lead movement", text: "Connect content and campaigns to CRM follow-up, nurture paths, and reporting." },
    ],
    sections: {
      workflowTitle: "Marketing agents should create approved output, not random content volume.",
      workflowDescription: "The useful workflow turns source material into drafts, routes review, schedules approved work, triggers follow-up, and reports what happened.",
      systemsTitle: "Marketing automation should connect content, CRM, and reporting.",
      systemsDescription: "We connect the creative workflow to the places where campaigns are planned, approved, published, measured, and followed up.",
      controlTitle: "Brand control stays with people.",
      controlDescription: "AI can draft and organize, but public claims, offers, sensitive messages, and final publishing should follow approved review rules.",
      rolloutTitle: "Start with one content lane or nurture path.",
      rolloutDescription: "A narrow first workflow proves quality and saves time before expanding to more campaigns, channels, or audiences.",
      trustTitle: "Marketing automation needs adoption, integrations, analytics, and safety.",
      trustDescription: "The trust layer helps teams publish more consistently without lowering quality or losing visibility.",
    },
  },
  "managed-ai-operations": {
    secondaryCta: "See Operating Model",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start when an AI workflow is important enough that someone must own reliability.",
      text: "Managed operations is for systems that touch customers, revenue, staff workload, sensitive data, or business-critical follow-up.",
      signals: ["Live workflows", "Escalation review", "Integration health", "Monthly value reporting"],
    },
    pilotProof: [
      { label: "Watch", title: "Workflow health", text: "Track usage, failures, retries, escalations, low-confidence answers, and unusual patterns." },
      { label: "Own", title: "Issue response", text: "Make it clear who reviews errors, tunes workflows, updates knowledge, and fixes broken handoffs." },
      { label: "Report", title: "Operating value", text: "Connect ongoing support to volume handled, hours saved, response time, cost, and next improvements." },
    ],
    sections: {
      workflowTitle: "Managed AI Operations turns launch into an operating rhythm.",
      workflowDescription: "The work is monitoring, tuning, reviewing, fixing, reporting, and deciding what should improve next.",
      systemsTitle: "Operating AI means watching workflow signals, not just uptime.",
      systemsDescription: "We connect monitoring to usage, failures, escalations, costs, quality, staff feedback, and business outcomes.",
      controlTitle: "Long-term trust comes from review and ownership.",
      controlDescription: "AI workflows need clear responsibility for drift, errors, sensitive cases, integration failures, and improvement decisions.",
      rolloutTitle: "Define the support model before the system becomes business-critical.",
      rolloutDescription: "The operating model should clarify monitoring, response, reporting, governance, and continuous improvement expectations.",
      trustTitle: "Managed operations is where safety, analytics, integrations, and adoption meet.",
      trustDescription: "This service depends on the full delivery capability layer because real systems change after launch.",
    },
  },
  "custom-ai-software": {
    secondaryCta: "See Build Patterns",
    scenario: {
      eyebrow: "Best starting point",
      title: "Start when the workflow needs a real interface, not another workaround.",
      text: "Custom AI software makes sense when staff need a purpose-built place to review, approve, manage, or act on AI-supported work.",
      signals: ["Internal console", "Review queue", "Custom portal", "AI-enabled dashboard"],
    },
    pilotProof: [
      { label: "Unify", title: "The work surface", text: "Give staff one place to review queues, AI summaries, customer context, approvals, and next actions." },
      { label: "Connect", title: "System data", text: "Pull the right records, documents, messages, tasks, and status updates into the workflow." },
      { label: "Govern", title: "Actions and access", text: "Build permissions, approvals, audit logs, and support expectations into the product from the start." },
    ],
    sections: {
      workflowTitle: "Custom software should make a complex workflow easier to operate.",
      workflowDescription: "The strongest builds give people the right interface, data, permissions, AI support, and action path in one focused system.",
      systemsTitle: "Custom AI software has to sit cleanly on top of existing systems.",
      systemsDescription: "We map source systems, permissions, data movement, AI features, and support expectations before choosing the build path.",
      controlTitle: "A custom build needs product discipline and operational guardrails.",
      controlDescription: "Permissions, approvals, audit logs, support boundaries, and human review need to be designed into the product surface.",
      rolloutTitle: "Prototype the smallest useful operating surface first.",
      rolloutDescription: "A narrow prototype proves the interface and workflow before the business commits to a larger software build.",
      trustTitle: "Custom software depends heavily on architecture, integrations, safety, and measurement.",
      trustDescription: "The How We Build layer is what prevents a custom AI tool from becoming an expensive one-off.",
    },
  },
};

const proofStoriesByServiceSlug: Record<string, string[]> = {
  "ai-agents": ["manufacturing-response-agent", "professional-services-intake"],
  "ai-chat": ["retail-support-order-agent", "manufacturing-response-agent"],
  "ai-transformation": ["ai-roadmap-value-realization"],
  "marketing-automation": ["marketing-content-operations", "retail-support-order-agent"],
  "managed-ai-operations": ["managed-ai-operations-rhythm", "daycare-front-desk-voice"],
  "custom-ai-software": ["custom-operations-workbench", "manufacturing-response-agent"],
};

export default function ServiceOfferPage({ service }: ServiceOfferPageProps) {
  const presentation = presentationBySlug[service.slug] ?? presentationBySlug["ai-agents"];
  const relatedCapabilities = service.capabilityHrefs
    .map((href) => howWeBuildPillars.find((pillar) => pillar.href === href))
    .filter((pillar): pillar is NonNullable<typeof pillar> => Boolean(pillar));

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-white/74 md:text-[17px]">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="#workflows" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                {presentation.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">{service.heroModel.label}</p>
            <div className="mt-5 grid gap-3">
              {service.heroModel.steps.map((step, index) => (
                <div key={step.title} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-white px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-[1180px] gap-6 rounded-lg border border-card-border bg-[#f8fbfa] p-6 shadow-[0_12px_36px_rgba(15,23,32,0.05)] md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{presentation.scenario.eyebrow}</p>
            <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[34px]">
              {presentation.scenario.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{presentation.scenario.text}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {presentation.scenario.signals.map((signal) => (
              <p key={signal} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                {signal}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-card-border bg-[#f8fbfa] px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-3">
          {presentation.pilotProof.map((item) => (
            <article key={`${item.label}-${item.title}`} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{item.label}</p>
              <h2 className="mt-2 text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceProofModules slug={service.slug} />

      <ProofStorySection
        storySlugs={proofStoriesByServiceSlug[service.slug]}
        eyebrow="Workflow examples"
        title="How this service turns into measurable operating work."
        description="These examples show the kind of workflow design, system connection, human control, and measurement we bring into assessment and pilot work."
        compact
        className="border-y border-card-border bg-white"
      />

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Operational reality"
            title={service.operationalReality.title}
            description={service.operationalReality.description}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {service.operationalReality.points.map((point) => (
              <article key={point.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{point.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Workflow examples"
            title={presentation.sections.workflowTitle}
            description={presentation.sections.workflowDescription}
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {service.workflows.map((workflow) => (
              <article key={workflow.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{workflow.title}</h2>
                <div className="mt-5 grid gap-3">
                  <p className="rounded-lg bg-[#f8fbfa] p-4 text-sm leading-6 text-muted">
                    <span className="block text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">Trigger</span>
                    {workflow.trigger}
                  </p>
                  <p className="rounded-lg bg-[#f8fbfa] p-4 text-sm leading-6 text-muted">
                    <span className="block text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">Automation</span>
                    {workflow.action}
                  </p>
                  <p className="rounded-lg bg-[#ecfbf6] p-4 text-sm font-semibold leading-6 text-ink">
                    <span className="block text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">Outcome</span>
                    {workflow.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Connected systems"
            title={presentation.sections.systemsTitle}
            description={presentation.sections.systemsDescription}
          />
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {service.systems.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h2 className="text-lg font-extrabold text-ink">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
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

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Human control</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">
              {presentation.sections.controlTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              {presentation.sections.controlDescription}
            </p>
          </div>
          <div className="grid gap-3">
            {service.controls.map((control) => (
              <p key={control} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {control}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Implementation"
            title={presentation.sections.rolloutTitle}
            description={presentation.sections.rolloutDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold text-[#167f65]">{item.step}</p>
                <h2 className="mt-3 text-lg font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Budget confidence</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              {service.budget.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">{service.budget.text}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.budget.drivers.map((driver) => (
              <p key={driver} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                {driver}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Trust layer"
            title={presentation.sections.trustTitle}
            description={presentation.sections.trustDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedCapabilities.map((pillar) => (
              <Link key={pillar.href} href={pillar.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <h2 className="text-lg font-extrabold leading-tight text-ink">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.description}</p>
                <span className="mt-5 inline-flex text-sm font-extrabold text-[#167f65]">
                  Learn more <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <SectionHeader eyebrow="FAQ" title="Common questions before starting." />
          <div className="mt-8 grid gap-4">
            {service.faq.map((item) => (
              <details key={item.q} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <summary className="cursor-pointer text-base font-extrabold text-ink">{item.q}</summary>
                <p className="mt-4 text-sm leading-6 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage={service.href} ctaLocation={`${service.slug}_service_assessment`} />
    </div>
  );
}
