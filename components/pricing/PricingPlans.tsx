"use client";

import { useEffect, useState } from "react";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";

type ChannelStatus = "included" | "addon";

type FrontDeskTier = {
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number | null;
  setup: string;
  usage: string[];
  overage: string[];
  channels: { name: string; status: ChannelStatus }[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  workflowInterest: string;
};

const frontDeskTiers: FrontDeskTier[] = [
  {
    name: "Starter",
    tagline: "Phone and website chat coverage for small teams getting started with AI.",
    monthlyPrice: 249,
    setup: "$599 one-time setup",
    usage: ["150 voice minutes included", "200 digital conversations included"],
    overage: ["$0.85/min after that", "$0.50 per conversation after that"],
    channels: [
      { name: "Calls", status: "included" },
      { name: "AI Chat", status: "included" },
      { name: "SMS", status: "addon" },
      { name: "Email", status: "addon" },
      { name: "Social DMs", status: "addon" },
    ],
    cta: "Get Started",
    ctaVariant: "secondary",
    workflowInterest: "ai_front_desk_starter",
  },
  {
    name: "Growth",
    badge: "Most Popular",
    tagline: "Add text messaging, the most common follow-up channel for service businesses.",
    monthlyPrice: 449,
    setup: "$899 one-time setup",
    usage: ["450 voice minutes included", "500 digital conversations included"],
    overage: ["$0.75/min after that", "$0.40 per conversation after that"],
    channels: [
      { name: "Calls", status: "included" },
      { name: "AI Chat", status: "included" },
      { name: "SMS", status: "included" },
      { name: "Email", status: "addon" },
      { name: "Social DMs", status: "addon" },
    ],
    cta: "Get Started",
    ctaVariant: "primary",
    workflowInterest: "ai_front_desk_growth",
  },
  {
    name: "Business",
    tagline: "Every channel covered for higher-volume or multi-location teams.",
    monthlyPrice: 999,
    setup: "$1,499 one-time setup",
    usage: ["1,500 voice minutes included", "1,500 digital conversations included"],
    overage: ["$0.65/min after that", "$0.30 per conversation after that"],
    channels: [
      { name: "Calls", status: "included" },
      { name: "AI Chat", status: "included" },
      { name: "SMS", status: "included" },
      { name: "Email", status: "included" },
      { name: "Social DMs", status: "included" },
    ],
    cta: "Get Started",
    ctaVariant: "secondary",
    workflowInterest: "ai_front_desk_business",
  },
  {
    name: "Enterprise",
    tagline: "Multi-location rollouts, custom integrations, and dedicated support.",
    monthlyPrice: null,
    setup: "Setup scoped to your rollout",
    usage: ["Custom usage allotments", "Volume-based pricing"],
    overage: [],
    channels: [
      { name: "Calls", status: "included" },
      { name: "AI Chat", status: "included" },
      { name: "SMS", status: "included" },
      { name: "Email", status: "included" },
      { name: "Social DMs", status: "included" },
    ],
    cta: "Talk to Sales",
    ctaVariant: "secondary",
    workflowInterest: "ai_front_desk_enterprise",
  },
];

const addOnNote = "Channels marked with a price can be added to that plan individually for $49/mo each, or included automatically by upgrading to a higher tier.";

const coreFeatures = [
  {
    title: "24/7 coverage on every channel you turn on",
    text: "Calls, chat, SMS, email, and DMs are answered around the clock, including evenings, weekends, and holidays.",
  },
  {
    title: "Lead qualification & custom intake questions",
    text: "Capture and qualify leads against your criteria, with up to 10 business-specific intake questions per workflow.",
  },
  {
    title: "Appointment scheduling",
    text: "Books directly into Google Calendar, Outlook, Calendly, or your practice management software.",
  },
  {
    title: "Recordings, transcripts & summaries",
    text: "Every call and conversation is recorded, transcribed, and summarized, with PII masking available.",
  },
  {
    title: "Custom Q&A knowledge base",
    text: "Add your own Q&A pairs so callers and chatters get accurate, business-specific answers.",
  },
  {
    title: "Human handoff & escalation rules",
    text: "Set transfer destinations and escalation rules for pricing, emergencies, or anything that needs a person.",
  },
  {
    title: "Dedicated phone number",
    text: "Get a local or toll-free number, or port your existing business number at no charge.",
  },
  {
    title: "Instant notifications",
    text: "Summaries land where your team already works: email, Slack, or Microsoft Teams.",
  },
];

type WorkflowPackage = {
  name: string;
  tagline: string;
  monthlyPriceFrom: number | null;
  setup: string;
  examples: string[];
  cta: string;
  workflowInterest: string;
};

const workflowPackages: WorkflowPackage[] = [
  {
    name: "Workflow Starter",
    tagline: "One clearly defined workflow with light integrations.",
    monthlyPriceFrom: 999,
    setup: "From $2,500 setup",
    examples: [
      "Lead capture, qualification, CRM update, and follow-up",
      "Missed call to SMS response, booking link, and notification",
      "Form submission to AI summary and task creation",
    ],
    cta: "Discuss This Workflow",
    workflowInterest: "workflow_starter_package",
  },
  {
    name: "Workflow Pro",
    tagline: "2-4 connected workflows across the tools your team already uses.",
    monthlyPriceFrom: 2500,
    setup: "From $5,000 setup",
    examples: [
      "CRM updates across multiple pipelines or stages",
      "Email and SMS follow-up sequences",
      "Calendar scheduling with multi-step logic",
      "Weekly reporting with human approval steps",
    ],
    cta: "Discuss These Workflows",
    workflowInterest: "workflow_pro_package",
  },
  {
    name: "Operations AI",
    tagline: "Complex, multi-step workflows running across your operation.",
    monthlyPriceFrom: 5000,
    setup: "From $10,000 setup",
    examples: [
      "Multi-step workflows across ERP, CRM, and finance tools",
      "Custom dashboards and reporting",
      "Approval logic and error recovery",
      "Priority support and ongoing optimization",
    ],
    cta: "Discuss Operations AI",
    workflowInterest: "operations_ai_package",
  },
  {
    name: "Custom AI Workforce",
    tagline: "Multi-agent systems coordinating work across your entire business.",
    monthlyPriceFrom: null,
    setup: "Scoped after a workflow review",
    examples: [
      "Multiple specialized agents working together",
      "Custom integrations across every system you run",
      "Dedicated account team and SLA",
      "Ongoing roadmap and optimization",
    ],
    cta: "Talk to Sales",
    workflowInterest: "custom_ai_workforce_package",
  },
];

const addOns = [
  { name: "Additional phone number", price: "$10/mo" },
  { name: "Additional language", price: "$25/mo" },
  { name: "Additional location", price: "From $49/mo" },
  { name: "Extra channel on Starter or Growth", price: "$49/mo per channel" },
  { name: "CRM or practice management integration", price: "From $500 one-time" },
  { name: "Custom reporting dashboard", price: "From $1,500 one-time" },
  { name: "Priority support / SLA", price: "Custom" },
];

const timeSavings = [
  { task: "Missed call follow-up", hours: "5-10 hrs/mo" },
  { task: "Lead intake & qualification", hours: "10-20 hrs/mo" },
  { task: "Appointment reminders & confirmations", hours: "5-15 hrs/mo" },
  { task: "CRM updates & data entry", hours: "10-30 hrs/mo" },
  { task: "Weekly reporting", hours: "5-10 hrs/mo" },
];

const ANNUAL_DISCOUNT = 0.15;
const IN_HOUSE_MONTHLY = 4000;

function annualMonthly(monthly: number): number {
  return Math.round(monthly * (1 - ANNUAL_DISCOUNT));
}

function formatMoney(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

function hasFixedSetupFee(setup: string): boolean {
  return setup.includes("$");
}

function tierAssessmentCopy(tier: FrontDeskTier, billing: "monthly" | "annual"): { title: string; description: string } {
  if (tier.monthlyPrice === null) {
    return {
      title: `Talk to Sales — AI Front Desk ${tier.name}`,
      description: `Tell us about your locations, integrations, and rollout timeline so we can scope your ${tier.name} AI Front Desk and pricing.`,
    };
  }
  const price = billing === "annual" ? annualMonthly(tier.monthlyPrice) : tier.monthlyPrice;
  const billingNote = billing === "annual"
    ? `${formatMoney(price)}/mo billed annually, with the one-time setup fee waived`
    : `${formatMoney(price)}/mo, plus a one-time setup fee`;
  return {
    title: `Get Started with AI Front Desk — ${tier.name}`,
    description: `You selected the ${tier.name} plan (${billingNote}). Tell us a bit about your business so we can get your AI Front Desk live.`,
  };
}

function pkgAssessmentCopy(pkg: WorkflowPackage, billing: "monthly" | "annual"): { title: string; description: string } {
  if (pkg.monthlyPriceFrom === null) {
    return {
      title: `Talk to Sales — ${pkg.name}`,
      description: "Tell us about the systems and processes you want a multi-agent AI workforce to run, so we can scope a custom engagement.",
    };
  }
  const price = billing === "annual" ? annualMonthly(pkg.monthlyPriceFrom) : pkg.monthlyPriceFrom;
  const billingNote = billing === "annual"
    ? `from ${formatMoney(price)}/mo billed annually, with the setup fee waived`
    : `from ${formatMoney(price)}/mo, plus a one-time setup fee`;
  return {
    title: `Get Started with ${pkg.name}`,
    description: `You're interested in ${pkg.name} (${billingNote}). Tell us about the workflows you want automated so we can scope a fixed proposal.`,
  };
}

function BillingToggle({ billing, setBilling }: { billing: "monthly" | "annual"; setBilling: (value: "monthly" | "annual") => void }) {
  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <div className="inline-flex items-center rounded-full border border-card-border p-1">
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          aria-pressed={billing === "monthly"}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${billing === "monthly" ? "bg-accent text-white" : "text-muted hover:text-ink"}`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling("annual")}
          aria-pressed={billing === "annual"}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${billing === "annual" ? "bg-accent text-white" : "text-muted hover:text-ink"}`}
        >
          Annual
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${billing === "annual" ? "bg-white/20 text-white" : "bg-[#1db993]/10 text-[#167f65]"}`}>
            Save 15%
          </span>
        </button>
      </div>
      {billing === "annual" ? (
        <p className="text-xs leading-5 text-muted">Annual billing applies a 15% discount to recurring fees, and we waive the one-time setup fee.</p>
      ) : null}
    </div>
  );
}

export default function PricingPlans() {
  const [system, setSystem] = useState<"front-desk" | "workflow">("front-desk");
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === "#workflow-agents") setSystem("workflow");
      else if (window.location.hash === "#ai-front-desk") setSystem("front-desk");
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const growthTier = frontDeskTiers.find((tier) => tier.name === "Growth")!;
  const aiFrontDeskMonthly = billing === "annual" ? annualMonthly(growthTier.monthlyPrice!) : growthTier.monthlyPrice!;
  const inHouseAnnual = IN_HOUSE_MONTHLY * 12;
  const aiFrontDeskAnnual = aiFrontDeskMonthly * 12;
  const annualSavings = inHouseAnnual - aiFrontDeskAnnual;

  return (
    <>
      <section className="relative scroll-mt-24 bg-white px-4 py-14 md:py-20">
        <span id="ai-front-desk" className="absolute -top-24" aria-hidden="true" />
        <span id="workflow-agents" className="absolute -top-24" aria-hidden="true" />
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Choose your system"
            title="Two ways to put AI to work in your business."
            description="Most teams start with an AI Front Desk to cover the conversations that come in every day, then add Workflow Automation Agents for the operational work that happens behind the scenes."
            align="center"
          />

          <div className="mx-auto mt-8 grid max-w-[760px] gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setSystem("front-desk")}
              aria-pressed={system === "front-desk"}
              className={`rounded-lg border p-6 text-left transition-all duration-200 ${system === "front-desk" ? "border-accent shadow-[0_14px_40px_rgba(29,185,147,0.18)]" : "border-card-border hover:border-[#1db993]/45"}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">AI Front Desk</p>
              <p className="mt-3 text-2xl font-extrabold text-ink">From $249/mo</p>
              <p className="mt-2 text-sm leading-6 text-muted">Calls, texts, emails, DMs, and website chat, answered and routed 24/7.</p>
            </button>
            <button
              type="button"
              onClick={() => setSystem("workflow")}
              aria-pressed={system === "workflow"}
              className={`rounded-lg border p-6 text-left transition-all duration-200 ${system === "workflow" ? "border-accent shadow-[0_14px_40px_rgba(29,185,147,0.18)]" : "border-card-border hover:border-[#1db993]/45"}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Workflow Automation Agents</p>
              <p className="mt-3 text-2xl font-extrabold text-ink">From $999/mo</p>
              <p className="mt-2 text-sm leading-6 text-muted">CRM updates, follow-ups, reporting, back-office work, and custom multi-agent builds, all scoped with a fixed proposal.</p>
            </button>
          </div>
        </div>
      </section>

      {system === "front-desk" ? (
        <>
          <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
            <div className="mx-auto max-w-[1280px]">
              <SectionHeader
                eyebrow="AI Front Desk"
                title="One system for every way customers reach you."
                description="Pricing is based on two simple usage meters: voice minutes for phone calls, and digital conversations covering website chat, SMS, email, and Instagram or Facebook DMs combined. Every plan includes a one-time setup fee for configuration and channel connections."
              />
              <BillingToggle billing={billing} setBilling={setBilling} />
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {frontDeskTiers.map((tier) => {
                  const assessmentCopy = tierAssessmentCopy(tier, billing);
                  return (
                  <div
                    key={tier.name}
                    className={`relative flex flex-col rounded-lg border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] ${tier.badge ? "border-accent shadow-[0_14px_40px_rgba(29,185,147,0.18)]" : "border-card-border"}`}
                  >
                    {tier.badge ? (
                      <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                        {tier.badge}
                      </span>
                    ) : null}
                    <h3 className="text-xl font-extrabold text-ink">{tier.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{tier.tagline}</p>
                    {tier.monthlyPrice !== null ? (
                      <>
                        <p className="mt-4">
                          <span className="text-3xl font-extrabold text-ink">
                            {formatMoney(billing === "annual" ? annualMonthly(tier.monthlyPrice) : tier.monthlyPrice)}
                          </span>
                          <span className="text-sm font-semibold text-muted">/mo</span>
                        </p>
                        {billing === "annual" ? (
                          <p className="mt-1 text-xs font-bold text-[#167f65]">
                            Billed annually at {formatMoney(annualMonthly(tier.monthlyPrice) * 12)}/yr
                          </p>
                        ) : null}
                      </>
                    ) : (
                      <p className="mt-4 text-3xl font-extrabold text-ink">Custom</p>
                    )}
                    <p className="mt-1 text-xs font-semibold text-muted">
                      {billing === "annual" && hasFixedSetupFee(tier.setup) ? (
                        <>
                          <span className="line-through text-muted/50">{tier.setup}</span>{" "}
                          <span className="font-extrabold text-[#167f65]">Waived with annual billing</span>
                        </>
                      ) : (
                        tier.setup
                      )}
                    </p>
                    <div className="mt-4 grid gap-1.5">
                      {tier.usage.map((u) => (
                        <p key={u} className="text-sm font-semibold text-ink">{u}</p>
                      ))}
                      {tier.overage.map((o) => (
                        <p key={o} className="text-xs leading-5 text-muted">{o}</p>
                      ))}
                    </div>
                    <div className="mt-4 grid gap-1.5 border-t border-card-border pt-4 text-sm">
                      {tier.channels.map((ch) => (
                        <div key={ch.name} className="flex items-center justify-between">
                          <span className="text-ink">{ch.name}</span>
                          {ch.status === "included" ? (
                            <span className="font-bold text-[#1db993]" aria-label="Included">&#10003;</span>
                          ) : (
                            <span className="text-xs font-semibold text-muted">+$49/mo</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <AssessmentTrigger
                      sourcePage="/pricing"
                      ctaLocation={`pricing_${tier.workflowInterest}`}
                      serviceInterest="ai-voice"
                      workflowInterest={tier.workflowInterest}
                      modalTitle={assessmentCopy.title}
                      modalDescription={assessmentCopy.description}
                      className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-extrabold transition-colors ${tier.ctaVariant === "primary" ? "bg-accent text-white hover:bg-btn-hover" : "border border-card-border text-ink hover:border-accent"}`}
                    >
                      {tier.cta}
                    </AssessmentTrigger>
                  </div>
                  );
                })}
              </div>
              <p className="mt-6 text-xs leading-5 text-muted">{addOnNote}</p>
            </div>
          </section>

          <section className="bg-white px-4 py-14 md:py-20">
            <div className="mx-auto max-w-[1280px]">
              <SectionHeader
                eyebrow="Included in every plan"
                title="Core AI Front Desk features, no matter your tier."
                description="Every plan includes the full feature set below. Higher tiers add channels and usage, not extra features."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {coreFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                    <h3 className="font-extrabold leading-snug text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
            <div className="mx-auto max-w-[1280px]">
              <SectionHeader
                eyebrow="Add-ons"
                title="Optional extras when you need them."
                description="Most teams never need these on day one. They are here for when you do."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {addOns.map((addOn) => (
                  <div key={addOn.name} className="flex items-center justify-between gap-4 rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1db993]/10 text-base font-extrabold text-[#167f65]" aria-hidden="true">+</span>
                      <span className="text-sm font-semibold text-ink">{addOn.name}</span>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#1db993]/10 px-3 py-1 text-xs font-extrabold text-[#167f65]">{addOn.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20">
            <div className="mx-auto max-w-[1280px]">
              <SectionHeader
                eyebrow="Why it pays for itself"
                title="Lower cost, broader coverage than an in-house front desk."
                inverse
              />
              <div className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-6 text-center md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Estimated annual savings</p>
                <p className="mt-3 text-[40px] font-extrabold leading-none md:text-[56px]">~{formatMoney(annualSavings)}/year</p>
                <p className="mx-auto mt-4 max-w-[640px] text-sm leading-7 text-white/74 md:text-base">
                  Switching from an in-house front desk to AI Front Desk (Growth) saves roughly this much every year, plus coverage on evenings, weekends, and holidays your in-house team is not working.
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
              <p className="mt-4 text-xs leading-5 text-white/60">
                Estimated time ranges based on typical SMB operations. Your numbers will depend on call volume, team size, and how many workflows you automate.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeader
              eyebrow="Workflow Automation Agents"
              title="For custom workflows, pricing depends on complexity, not just usage."
              description="Every workflow agent engagement gets a fixed proposal scoped to your processes before we build. No surprise hourly billing."
            />
            <BillingToggle billing={billing} setBilling={setBilling} />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {workflowPackages.map((pkg) => {
                const assessmentCopy = pkgAssessmentCopy(pkg, billing);
                return (
                <div key={pkg.name} className="flex flex-col rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <h3 className="text-xl font-extrabold text-ink">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{pkg.tagline}</p>
                  {pkg.monthlyPriceFrom !== null ? (
                    <>
                      <p className="mt-4 text-2xl font-extrabold text-ink">
                        From {formatMoney(billing === "annual" ? annualMonthly(pkg.monthlyPriceFrom) : pkg.monthlyPriceFrom)}/mo
                      </p>
                      {billing === "annual" ? (
                        <p className="mt-1 text-xs font-bold text-[#167f65]">Billed annually</p>
                      ) : null}
                    </>
                  ) : (
                    <p className="mt-4 text-2xl font-extrabold text-ink">Custom</p>
                  )}
                  <p className="mt-1 text-xs font-semibold text-muted">
                    {billing === "annual" && hasFixedSetupFee(pkg.setup) ? (
                      <>
                        <span className="line-through text-muted/50">{pkg.setup}</span>{" "}
                        <span className="font-extrabold text-[#167f65]">Waived with annual billing</span>
                      </>
                    ) : (
                      pkg.setup
                    )}
                  </p>
                  <div className="mt-4 grid gap-2 border-t border-card-border pt-4 text-sm leading-6 text-muted">
                    {pkg.examples.map((example) => (
                      <div key={example} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1db993]" aria-hidden="true" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                  <AssessmentTrigger
                    sourcePage="/pricing"
                    ctaLocation={`pricing_${pkg.workflowInterest}`}
                    serviceInterest="ai-agents"
                    workflowInterest={pkg.workflowInterest}
                    modalTitle={assessmentCopy.title}
                    modalDescription={assessmentCopy.description}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-card-border px-6 text-sm font-extrabold text-ink transition-colors hover:border-accent"
                  >
                    {pkg.cta}
                  </AssessmentTrigger>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
