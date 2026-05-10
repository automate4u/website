import SectionHeader from "@/components/sections/SectionHeader";

const stages = [
  {
    name: "Manual",
    description: "Calls, inboxes, spreadsheets, and staff memory hold the process together.",
  },
  {
    name: "Digitized",
    description: "Software exists, but people still copy, chase, check, and re-enter information.",
  },
  {
    name: "Automated",
    description: "Repeatable workflows trigger updates, follow-ups, handoffs, and reporting.",
  },
  {
    name: "AI-Native",
    description: "AI agents coordinate conversations and operations with monitoring and human control.",
  },
];

export default function MaturityCurve() {
  return (
    <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="maturity-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Start where you are"
          title="A practical maturity path, not a giant transformation pitch."
          description="Most teams do not need a huge AI program on day one. They need the first workflow that saves time, proves value, and teaches the team how to operate the system safely."
          align="center"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stages.map((stage, index) => (
            <article key={stage.name} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f9f3] text-sm font-extrabold text-[#169b78]">
                {index + 1}
              </div>
              <h3 className="text-xl font-extrabold text-ink">{stage.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{stage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
