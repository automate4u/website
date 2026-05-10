import SectionHeader from "@/components/sections/SectionHeader";

const inputs = ["Calls", "Chat", "Email", "Forms", "Spreadsheets"];
const actions = ["CRM update", "Calendar booking", "Quote task", "SMS follow-up", "Human handoff", "KPI event"];

export default function WorkflowMap() {
  return (
    <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="workflow-map-title">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader
          eyebrow="Connected AI operations"
          title="The best AI does more than answer. It moves work forward."
          description="Every useful automation connects a conversation to the business system behind it: the CRM, calendar, inbox, quote process, support queue, approval path, and dashboard."
          inverse
        />

        <div className="rounded-lg border border-white/14 bg-white/[0.05] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur md:p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_0.85fr_1fr] md:items-center">
            <div className="grid gap-3">
              {inputs.map((item) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white/88">
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-[#1db993]/40 bg-[#1db993]/12 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7df0d1]">AI operating layer</p>
              <p className="mt-3 text-2xl font-extrabold leading-tight">Voice + agents + workflows</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Rules, context, integrations, guardrails, and human approval.</p>
            </div>

            <div className="grid gap-3">
              {actions.map((item) => (
                <div key={item} className="rounded-lg border border-white/12 bg-white px-4 py-3 text-sm font-bold text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
