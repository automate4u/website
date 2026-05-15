import Image from "next/image";
import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const frictionAreas = [
  {
    title: "Calls arrive when the team is already moving",
    text: "Dispatchers, owners, technicians, and office staff are often balancing jobs in progress, urgent calls, customer questions, and schedule changes at the same time.",
  },
  {
    title: "Missed calls turn into missed revenue",
    text: "Home service buyers often call the next company if they cannot get a quick answer, especially for HVAC, plumbing, electrical, restoration, or urgent repair work.",
  },
  {
    title: "The answer depends on operational context",
    text: "The right next step depends on service area, technician availability, job type, customer history, warranty status, calendar rules, and escalation priority.",
  },
];

const workflowPath = [
  {
    step: "01",
    title: "Answer or recover the call",
    text: "AI handles live calls, missed-call follow-up, after-hours intake, or website inquiries and captures the issue, location, urgency, and contact details.",
  },
  {
    step: "02",
    title: "Apply service rules",
    text: "The workflow checks approved scripts, service areas, job categories, booking windows, emergency rules, membership notes, or customer records.",
  },
  {
    step: "03",
    title: "Create the next action",
    text: "The system books the appointment, creates a dispatch task, sends a quote follow-up, notifies the right person, or routes the case for human review.",
  },
  {
    step: "04",
    title: "Close the loop",
    text: "Customers receive confirmation, CRM notes are logged, staff see the context, and KPI events track calls handled, jobs booked, and escalations.",
  },
];

const valuePatterns = [
  {
    label: "Missed-call recovery",
    outcome: "Respond quickly when staff are on another call, in the field, or after hours so more high-intent leads turn into booked appointments.",
  },
  {
    label: "Booking and dispatch intake",
    outcome: "Collect the right job details, service location, urgency, equipment notes, and preferred times before staff or technicians step in.",
  },
  {
    label: "Quote and estimate follow-up",
    outcome: "Keep open estimates moving with timely follow-up, customer questions, reminders, CRM updates, and human handoff when pricing needs review.",
  },
];

const servicePaths = [
  {
    title: "AI Voice for inbound calls",
    description:
      "A voice-led starting point for answering routine calls, qualifying service requests, recovering missed calls, and routing urgent issues.",
    href: "/core-services/ai-voice",
    cta: "Explore AI Voice",
  },
  {
    title: "Dispatch workflow agent",
    description:
      "A focused workflow pattern for job intake, calendar checks, technician handoff, customer confirmation, and operational logging.",
    cta: "Discuss this path",
  },
  {
    title: "Sales follow-up agent",
    description:
      "A follow-up workflow for open estimates, maintenance plans, abandoned forms, financing questions, and review or referral requests.",
    cta: "Discuss this path",
  },
];

const sectorShifts = [
  {
    title: "Speed to response is becoming a sales advantage",
    text: "Customers usually do not want to wait for a callback when a repair, replacement, or urgent service need is active. Fast response can protect revenue before the quote process starts.",
  },
  {
    title: "Owners need more leverage without adding admin headcount",
    text: "A well-designed agent can absorb routine intake and follow-up while office staff focus on exceptions, customer relationships, scheduling decisions, and technician support.",
  },
  {
    title: "Trust depends on handoff quality",
    text: "The agent should not guess at pricing, emergency commitments, or technician availability. It should collect context and route decisions with clear ownership.",
  },
];

const systemGroups = [
  {
    title: "Customer channels",
    items: ["Phone", "Missed calls", "Website forms", "SMS", "Chat"],
  },
  {
    title: "Operating systems",
    items: ["CRM", "Job management", "Calendar", "Dispatch board", "Estimate tracker"],
  },
  {
    title: "Team workflow",
    items: ["Booking task", "Technician note", "Owner alert", "Customer confirmation", "KPI reporting"],
  },
];

const controls = [
  "Emergency, safety, warranty, pricing, and unusual customer situations can route to staff instead of being handled automatically.",
  "Approved scripts keep responses aligned with your service area, brand, booking rules, and escalation standards.",
  "Dispatch and calendar logic can respect technician availability, service categories, locations, and business-hour constraints.",
  "Every automated interaction can log the customer, request, source, action, handoff owner, and final outcome for review.",
];

const rollout = [
  ["Start", "Choose one high-volume workflow, such as missed-call recovery, after-hours intake, or booking requests for a specific service line."],
  ["Pilot", "Run real calls with staff review, track booked jobs, response speed, escalation rate, and customer experience quality."],
  ["Expand", "Add estimate follow-up, maintenance plan outreach, technician handoffs, review requests, or additional service locations."],
];

const confidenceNotes = [
  "Start with a bounded call or follow-up workflow before automating broader dispatch decisions.",
  "Measure booked appointments, recovered leads, response time, and staff interruptions avoided.",
  "Keep human approval for pricing, emergency commitments, edge cases, and sensitive customer situations.",
];

export default function HomeServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="home-services-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="home-services-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI voice and workflow automation for calls, booking, dispatch, and follow-up.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              We help HVAC, plumbing, electrical, cleaning, landscaping, restoration, and other home service teams recover missed demand, route service requests, and reduce front-office admin without losing control of customer experience.
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
              src="/images/industries/home-services.avif"
              alt="Home services team coordinating calls, booking, and dispatch work"
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;Can someone come today, and can you text me the earliest appointment?&quot;
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
              Home service teams lose margin when routine communication pulls skilled people away from the work only they can do.
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
            title="The best home services agent does not just answer. It books, routes, confirms, and documents."
            description="Voice is often the right entry point, but the value comes when every call connects to the calendar, CRM, dispatch process, staff notification, customer follow-up, and KPI reporting."
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
              Start where response speed and follow-up directly affect revenue.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Home service automation should prove value quickly. The strongest first workflows are usually tied to recovered leads, booked appointments, cleaner handoffs, or reduced front-office interruption.
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
            title="Start with the first workflow that can pay for itself."
            description="A home services deployment can begin with voice, dispatch intake, or follow-up automation, then expand once booked jobs, response time, and staff capacity improve."
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
            title="Customer expectations are getting faster while office capacity stays limited."
            description="The useful shift is not replacing your team. It is giving them a reliable support layer for intake, routing, follow-up, and exception handling."
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
            title="The agent should work inside the tools that already run the day."
            description="The first workflow can connect calls and messages to your CRM, calendar, dispatch board, job management system, notifications, and reporting."
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
            title="Keep pricing, dispatch judgment, and urgent exceptions under human control."
            description="Home service workflows affect revenue, customer trust, technician time, and safety. Automation should support the team with clear boundaries and traceable handoffs."
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
              title="A practical rollout helps cautious owners see value before expanding."
              description="The first milestone should be narrow enough to launch quickly, measurable enough to justify spend, and clear enough that staff trust when the agent should act or escalate."
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
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">The first project should connect cost to real call volume and business impact.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Voice automation costs depend on handled minutes, workflow complexity, model choices, integrations, monitoring, and support. We recommend exposing the cost drivers clearly while tying the first pilot to recovered leads and booked work.
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
        storySlugs={["home-services-dispatch", "managed-ai-operations-rhythm"]}
        eyebrow="Workflow examples"
        title="Home services proof should tie fast response to booked work and cleaner dispatch."
        description="These examples show how voice, chat, CRM, calendar, dispatch, follow-up, and human review can work together without over-automating pricing or emergency decisions."
        compact
        className="border-y border-card-border bg-[#f8fbfa]"
      />

      <AssessmentCTA sourcePage="/industries/home-services" ctaLocation="home_services_assessment" />
    </div>
  );
}
