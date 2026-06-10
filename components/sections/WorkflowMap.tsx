import AgentOperationsConsole from "@/components/sections/AgentOperationsConsole";
import SectionHeader from "@/components/sections/SectionHeader";

export default function WorkflowMap() {
  return (
    <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="workflow-map-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeader
            eyebrow="Connected AI operations"
            title="The best AI does more than answer. It moves work forward."
            description="Every useful automation connects a conversation to the business system behind it: the CRM, calendar, inbox, quote process, support queue, approval path, and dashboard."
            inverse
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Monitored", "Calls, email, CRM"],
              ["Controlled", "Review and approval"],
              ["Measured", "Logs and outcomes"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <p className="text-[11px] font-extrabold uppercase text-[#7df0d1]">{label}</p>
                <p className="mt-2 text-sm font-bold leading-5 text-white/78">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <AgentOperationsConsole wide />
        </div>
      </div>
    </section>
  );
}
