import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import {
  AI_FRONT_DESK_GROWTH_MONTHLY,
  IN_HOUSE_MONTHLY,
  WORKFLOW_STARTER_MONTHLY,
  annualMonthly,
  formatMoney,
  timeSavings,
} from "@/lib/pricing";

export default function SavingsSection({ variant }: { variant: "ai-front-desk" | "workflow-agents" }) {
  if (variant === "workflow-agents") {
    const startingMonthly = annualMonthly(WORKFLOW_STARTER_MONTHLY);

    return (
      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="What it costs"
            title="Workflow agents are priced by complexity, with a fixed proposal before any build."
            description="No usage meters and no surprise hourly billing. You get a scoped proposal for your workflows, then a fixed monthly fee."
            inverse
          />
          <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-6 text-center md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Workflow Automation Agents</p>
            <p className="mt-3 text-[40px] font-extrabold leading-none md:text-[56px]">From {formatMoney(startingMonthly)}/mo</p>
            <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-white/74 md:text-base">
              Billed annually (15% off monthly, setup fee waived). Most teams start with one bounded workflow, like the one on this page, before expanding to a broader AI workforce.
            </p>
            <Link
              href="/pricing#workflow-agents"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover"
            >
              See full pricing & packages
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const aiFrontDeskMonthly = annualMonthly(AI_FRONT_DESK_GROWTH_MONTHLY);
  const inHouseAnnual = IN_HOUSE_MONTHLY * 12;
  const aiFrontDeskAnnual = aiFrontDeskMonthly * 12;
  const annualSavings = inHouseAnnual - aiFrontDeskAnnual;

  return (
    <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Why it pays for itself"
          title="See how this compares to an in-house hire."
          description="Based on the AI Front Desk Growth plan with annual billing, which most teams on this page start with."
          inverse
        />
        <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-6 text-center md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Estimated annual savings</p>
          <p className="mt-3 text-[40px] font-extrabold leading-none md:text-[56px]">~{formatMoney(annualSavings)}/year</p>
          <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-white/74 md:text-base">
            That is roughly {formatMoney(annualSavings)} in annual savings, plus coverage on evenings, weekends, and holidays your in-house team is not working.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/50">In-house front desk</p>
            <p className="mt-3 text-3xl font-extrabold">{formatMoney(inHouseAnnual)}+/year</p>
            <p className="mt-1 text-sm text-white/70">~{formatMoney(IN_HOUSE_MONTHLY)}/mo &middot; 1 staff member, weekdays only</p>
          </div>
          <div className="rounded-lg border border-accent/40 bg-accent/10 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">AI Front Desk (Growth)</p>
            <p className="mt-3 text-3xl font-extrabold">~{formatMoney(aiFrontDeskAnnual)}/year</p>
            <p className="mt-1 text-sm text-white/70">~{formatMoney(aiFrontDeskMonthly)}/mo &middot; 24/7 across calls, chat, and SMS</p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {timeSavings.map((item) => (
            <div key={item.task} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm font-bold text-white">{item.task}</p>
              <p className="mt-2 text-xs font-semibold text-[#7df0d1]">{item.hours}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pricing#ai-front-desk"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover"
          >
            See full pricing & savings breakdown
          </Link>
          <p className="mt-4 text-xs leading-5 text-white/60">
            Estimated time ranges based on typical SMB operations. Your numbers will depend on call volume, team size, and how many workflows you automate.
          </p>
        </div>
      </div>
    </section>
  );
}
