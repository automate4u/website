import AgentOperationsConsole from "@/components/sections/AgentOperationsConsole";
import SectionHeader from "@/components/sections/SectionHeader";

export default function WorkflowMap() {
  return (
    <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="workflow-map-title">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <SectionHeader
          eyebrow="Connected AI operations"
          title="The best AI does more than answer. It moves work forward."
          description="Every useful automation connects a conversation to the business system behind it: the CRM, calendar, inbox, quote process, support queue, approval path, and dashboard."
          inverse
        />

        <AgentOperationsConsole />
      </div>
    </section>
  );
}
