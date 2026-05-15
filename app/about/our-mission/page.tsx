import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const commitments = [
  {
    title: "Reduce repetitive work",
    text: "Calls, emails, content tasks, admin follow-up, CRM updates, quoting, scheduling, and support triage should not consume the best hours of the team.",
  },
  {
    title: "Improve the customer experience",
    text: "Faster answers, cleaner routing, better handoffs, and consistent follow-up make the business feel more responsive without overloading staff.",
  },
  {
    title: "Keep people in control",
    text: "The system should escalate sensitive situations, preserve audit trails, and make it clear what the AI did and what a person still owns.",
  },
  {
    title: "Tie automation to measurable value",
    text: "Response time, hours saved, cost per request, cycle time, conversion, and workload reduction should guide what gets built next.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-[38px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[58px]">
            Help businesses automate repetitive work so people can focus on higher-value work.
          </h1>
          <p className="mt-6 max-w-[760px] text-base leading-8 text-white/74 md:text-[18px]">
            We believe AI should make companies easier to run, easier to serve, and easier to grow. That means practical systems, safe handoffs, connected workflows, and measurable operating improvement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/core-services" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
              Explore Services
            </Link>
            <Link href="/capabilities" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
              See How We Build
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="What we protect"
            title="Automation should save time without weakening trust."
            description="We want clients to feel confident that the system is useful, understandable, monitored, and aligned with how their team actually works."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operating belief</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              The best AI systems feel less like magic and more like a well-run process.
            </h2>
          </div>
          <p className="text-base leading-8 text-muted">
            They know which source to trust, which action to take, which person to notify, when to stop, and how to explain what happened. Our mission is to build those systems for teams that want real operating leverage without losing control.
          </p>
        </div>
      </section>

      <AssessmentCTA sourcePage="/about/our-mission" ctaLocation="mission_assessment" />
    </main>
  );
}
