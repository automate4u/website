import SectionHeader from "@/components/sections/SectionHeader";

const milestones = [
  {
    period: "Days 1-30",
    title: "Find the first measurable win",
    details: "Map the workflow, estimate volume, define risk controls, and launch the smallest useful pilot.",
  },
  {
    period: "Days 31-60",
    title: "Connect the system",
    details: "Add integrations, handoffs, audit logs, team feedback, and KPI tracking around the pilot.",
  },
  {
    period: "Days 61-90",
    title: "Scale what proves value",
    details: "Expand into adjacent channels or workflows once response time, hours saved, or cost per request improves.",
  },
];

export default function ValueRealizationRoadmap() {
  return (
    <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="value-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Value realization"
          title="We tie AI work to operational KPIs."
          description="Every project should connect back to business outcomes your team can recognize: response time, admin hours saved, quote cycle time, requests handled, cost per request, and escalation quality."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {milestones.map((milestone) => (
            <article key={milestone.period} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#169b78]">{milestone.period}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{milestone.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{milestone.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
