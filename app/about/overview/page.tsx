import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const principles = [
  {
    title: "Builder-led, not buzzword-led",
    text: "We care about systems that actually run: calls answered, requests routed, records updated, staff notified, reports created, and exceptions escalated.",
  },
  {
    title: "AI connected to operations",
    text: "The value is not the model by itself. The value is the workflow around it: integrations, source data, approvals, handoffs, monitoring, and measurable outcomes.",
  },
  {
    title: "Small first, then expand",
    text: "We help teams start with a workflow that is narrow enough to control and valuable enough to prove before expanding spend.",
  },
  {
    title: "Humans stay responsible",
    text: "Sensitive or high-value decisions need clear rules, audit trails, approvals, and escalation paths instead of blind automation.",
  },
];

const strengths = [
  "AI voice agents for frontline calls and intake",
  "Chat, email, and workflow agents connected to business systems",
  "Custom AI software, dashboards, portals, and review queues",
  "Security, monitoring, integrations, reporting, and staff adoption",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              About Automate4U
            </p>
            <h1 className="max-w-[760px] text-[38px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[58px]">
              We build AI systems for the work that slows businesses down.
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/74 md:text-[18px]">
              Automate4U is a builder-led AI automation team focused on practical workflows: calls, inboxes, quotes, scheduling, customer questions, admin tasks, reporting, and the systems behind them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/about/how-we-work" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                See How We Work
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">What we build</p>
            <div className="mt-5 grid gap-3">
              {strengths.map((item, index) => (
                <div key={item} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <p className="self-center text-sm font-semibold leading-6 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Our point of view"
            title="AI should make operations easier to run, not harder to supervise."
            description="The strongest projects combine useful automation with clear ownership, clean integrations, staff adoption, and a practical value case."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Why clients talk to us</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              We help teams move from AI curiosity to a controlled first workflow.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Many teams know AI can help, but they do not want an expensive experiment or a tool their staff will not use. We help identify the first workflow worth automating, define the controls, connect the systems, and measure whether it worked.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "Missed calls and slow response times",
              "Manual quote, intake, support, or admin workflows",
              "Disconnected CRM, calendar, inbox, and reporting processes",
              "Need for AI safety, monitoring, and human approvals",
            ].map((item) => (
              <p key={item} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/about/overview" ctaLocation="about_overview_assessment" />
    </main>
  );
}
