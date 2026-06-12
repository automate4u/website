import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";

const operatingReality = [
  {
    label: "01",
    title: "High-intent calls are easy to miss",
    text: "Customers call while staff are dispatching technicians, helping another customer, working after hours, or handling a job already in progress.",
  },
  {
    label: "02",
    title: "The next company is one call away",
    text: "For HVAC, plumbing, electrical, restoration, roofing, pest control, garage doors, and urgent repair work, slow response can lose the job before the estimate starts.",
  },
  {
    label: "03",
    title: "Dispatch needs the right details",
    text: "The useful handoff includes location, issue type, urgency, access notes, equipment details, customer history, warranty context, and preferred appointment times.",
  },
  {
    label: "04",
    title: "Owners need control over commitments",
    text: "Pricing, emergency promises, technician availability, warranties, access issues, and unusual requests should route to staff instead of being guessed.",
  },
];

const handles = [
  {
    title: "Missed-call recovery",
    text: "Respond quickly when a call is missed, capture the request, qualify urgency, and move the customer toward the right next step.",
  },
  {
    title: "After-hours intake",
    text: "Collect customer, location, job type, safety, access, and preferred callback details while staff are offline or already booked.",
  },
  {
    title: "Booking and dispatch handoff",
    text: "Prepare booking tasks, technician notes, calendar handoffs, customer confirmations, and owner alerts from approved service rules.",
  },
  {
    title: "Estimate follow-up",
    text: "Follow up on open estimates, answer approved questions, update the CRM, and route pricing or scope concerns to staff.",
  },
];

const buyerPriorities = [
  {
    title: "Recover high-intent demand",
    text: "Respond when staff are busy, after hours, or in the field so more urgent repair, replacement, maintenance, and estimate requests become real opportunities.",
  },
  {
    title: "Protect dispatch focus",
    text: "Capture service area, job type, urgency, access notes, equipment details, customer history, and preferred times before staff step in.",
  },
  {
    title: "Keep owner decisions human-led",
    text: "Escalate pricing, emergency commitments, warranties, access issues, insurance, and unusual requests instead of making risky promises automatically.",
  },
];

const workflowPreview = [
  ["Call or lead arrives", "Live call, missed call, form, SMS, chat, after-hours request, or property-manager message"],
  ["Job type classified", "Emergency, repair, replacement, estimate, warranty, maintenance, property access, or follow-up"],
  ["Approved context checked", "Service area, calendar rules, dispatch notes, membership, warranty, estimate status, property notes"],
  ["Action prepared", "Booking task, callback, dispatch note, estimate follow-up, customer confirmation, or staff alert"],
  ["Human handoff", "Pricing, emergency commitments, warranty exceptions, access issues, or unusual requests route to staff"],
  ["KPI logged", "Recovered leads, booked jobs, response time, estimate follow-up, escalations, and staff interruptions avoided"],
];

const controlItems = [
  {
    title: "Booking rules stay defined",
    text: "The agent follows approved service areas, job categories, appointment windows, after-hours rules, and escalation paths.",
  },
  {
    title: "Urgent work stays careful",
    text: "Emergency, safety, insurance, warranty, property access, and unusual situations can route to staff before commitments are made.",
  },
  {
    title: "Pricing stays human-led",
    text: "The agent can collect context and prepare follow-up, but quotes, discounts, financing details, and margin-sensitive responses can require approval.",
  },
  {
    title: "Every handoff is visible",
    text: "The workflow can log source, customer, job type, urgency, action taken, staff owner, and outcome for review.",
  },
];

const rollout = [
  {
    step: "Week 1",
    title: "Choose the revenue workflow",
    text: "Pick the first call or follow-up workflow, define job categories, service rules, escalation paths, and the metric that proves value.",
  },
  {
    step: "Week 2",
    title: "Build the controlled pilot",
    text: "Configure intake, missed-call response, approved scripts, booking or callback tasks, staff alerts, and CRM or dispatch handoff.",
  },
  {
    step: "Week 3",
    title: "Test real scenarios",
    text: "Review emergency language, pricing questions, warranty cases, property access issues, technician availability, and customer experience.",
  },
  {
    step: "Week 4",
    title: "Launch and measure",
    text: "Track recovered leads, booked jobs, response time, estimate follow-up, escalation quality, and what should expand next.",
  },
];

const faqs = [
  {
    question: "Can this answer calls after hours?",
    answer: "Yes. A strong first workflow is after-hours intake or missed-call recovery that captures the request, qualifies urgency, and routes the next step to staff.",
  },
  {
    question: "Can it book jobs directly?",
    answer: "It can support booking or booking handoff based on your service area, calendar rules, job type, and approval requirements. Many teams start with task creation and staff review before direct booking.",
  },
  {
    question: "What if the customer has an emergency?",
    answer: "Emergency, safety, insurance, access, and urgent commitment scenarios should follow approved escalation rules and route to staff when judgment is needed.",
  },
  {
    question: "Can it follow up on estimates?",
    answer: "Yes. It can send approved follow-up, capture objections, answer routine questions, update the CRM, and route pricing or scope questions to the right person.",
  },
  {
    question: "What should the first pilot measure?",
    answer: "Common metrics include recovered missed calls, booked appointments, response speed, estimate follow-up completion, staff interruptions avoided, and escalation quality.",
  },
];

export default function HomeServicesMissedCallDispatchAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="home-services-solution-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="home-services-solution-title" className="max-w-[820px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              Home services missed-call and dispatch agent.
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              A focused AI workflow for missed-call recovery, after-hours intake, booking handoff, dispatch notes, estimate follow-up, and staff escalation for high-value service businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AssessmentTrigger
                sourcePage="/solutions/home-services-missed-call-dispatch-agent"
                ctaLocation="home_services_solution_hero"
                serviceInterest="ai-voice"
                workflowInterest="home services missed-call and dispatch agent"
                modalTitle="Request A Home Services Workflow Assessment"
                modalDescription="Tell us how calls, missed leads, dispatch intake, estimate follow-up, booking handoff, and escalation work today. We will look for a bounded first workflow worth piloting."
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover"
              >
                Request Workflow Assessment
              </AssessmentTrigger>
              <Link href="#workflow-preview" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                See Workflow Preview
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
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Dispatch queue</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">Recovered service opportunities</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Staff control on</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Missed HVAC call", "Urgent repair", "Callback task created"],
                  ["After-hours plumbing", "Service area confirmed", "Owner alert sent"],
                  ["Open roof estimate", "Follow-up due", "CRM note updated"],
                  ["Warranty question", "Exception detected", "Escalated to staff"],
                ].map(([request, context, action]) => (
                  <div key={request} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{request}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">Designed to recover demand while keeping dispatch judgment, pricing, and urgent commitments with your team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="home-services-buyer-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">For service owners and operators</p>
              <h2 id="home-services-buyer-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
                The business case is recovered jobs, cleaner handoffs, and fewer missed opportunities.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                This is most useful when calls, after-hours requests, dispatch intake, estimate follow-up, or property-maintenance messages are already costing booked work or office capacity.
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

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="home-services-reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">Home services response reality</p>
            <h2 id="home-services-reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Missed calls and slow follow-up are not just admin problems. They are revenue leaks.
            </h2>
            <p className="mx-auto mt-4 max-w-[660px] text-sm leading-7 text-white/66 md:text-base">
              The first useful workflow should answer or recover demand quickly, collect the details staff need, and escalate the moments where judgment matters.
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
            title="Start where response speed turns into booked work."
            description="The first pilot should focus on a workflow where faster response, cleaner intake, and better follow-up can be measured quickly."
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

      <section id="workflow-preview" className="scroll-mt-28 border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="preview-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Workflow preview"
            title="From missed demand to controlled next action."
            description="A useful home services agent does not just answer. It qualifies, checks rules, creates the next action, and escalates the moments where your team must decide."
          />
          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)]">
            <div className="grid gap-3">
              {workflowPreview.map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[64px_1fr]">
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
          <div className="max-w-[840px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">Human control</p>
            <h2 id="controls-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Keep dispatch judgment, pricing, and urgent commitments with your team.
            </h2>
            <p className="mt-5 max-w-[780px] text-base leading-8 text-white/66 md:text-[18px]">
              The agent can capture demand and prepare the next action, but staff define when the system should book, follow up, notify, or escalate.
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
            title="A bounded first workflow makes the value easier to prove."
            description="Timeline depends on call volume, dispatch complexity, system access, booking rules, escalation requirements, and how quickly your team can review real scenarios."
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

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Questions home service owners ask"
            title="Reduce uncertainty before the first call workflow goes live."
            description="The first build should prove faster response and cleaner handoff without weakening customer trust, dispatch control, or margin discipline."
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
              Find the first home services workflow worth piloting.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              We will review call volume, missed demand, dispatch intake, estimate follow-up, system access, escalation rules, and the metric that would prove the pilot is worth expanding.
            </p>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Request a home services workflow assessment.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              Share your missed-call, after-hours, booking, dispatch, estimate, or property-maintenance workflow. We will look for a bounded pilot tied to recovered leads and booked work.
            </p>
            <AssessmentTrigger
              sourcePage="/solutions/home-services-missed-call-dispatch-agent"
              ctaLocation="home_services_solution_final_cta"
              serviceInterest="ai-voice"
              workflowInterest="home services missed-call and dispatch agent"
              modalTitle="Request A Home Services Workflow Assessment"
              modalDescription="Tell us how calls, missed leads, dispatch intake, estimate follow-up, booking handoff, and escalation work today. We will look for a bounded first workflow worth piloting."
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
