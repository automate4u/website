import type { Metadata } from "next";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata: Metadata = metadataForPath("/pricing");

const trustPoints = [
  "Month-to-month plans",
  "Fixed setup quote before you start",
  "Keep your existing phone number",
  "U.S.-based support team",
];

const systemCards = [
  {
    eyebrow: "AI Front Desk",
    price: "From $249/mo",
    title: "Calls, texts, emails, DMs, and website chat, answered and routed 24/7.",
    href: "#ai-front-desk",
    cta: "View Front Desk plans",
  },
  {
    eyebrow: "Workflow Automation Agents",
    price: "From $999/mo",
    title: "CRM updates, follow-ups, reporting, and back-office work running in the background.",
    href: "#workflow-agents",
    cta: "View workflow packages",
  },
  {
    eyebrow: "Custom AI Operations",
    price: "Custom",
    title: "Multi-agent systems coordinating work across your entire operation.",
    href: "#workflow-agents",
    cta: "See custom builds",
  },
];

type ChannelStatus = "included" | "addon";

type FrontDeskTier = {
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period?: string;
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
    price: "$249",
    period: "/mo",
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
    price: "$449",
    period: "/mo",
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
    price: "$999",
    period: "/mo",
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
    price: "Custom",
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
  price: string;
  setup: string;
  examples: string[];
  cta: string;
  workflowInterest: string;
};

const workflowPackages: WorkflowPackage[] = [
  {
    name: "Workflow Starter",
    tagline: "One clearly defined workflow with light integrations.",
    price: "From $999/mo",
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
    price: "From $2,500/mo",
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
    price: "From $5,000/mo",
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
    price: "Custom",
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

const roiComparison = {
  inHouse: {
    label: "In-house front desk",
    price: "$4,000/mo",
    note: "1 staff member, weekdays only",
    annual: "$48,000+/year",
  },
  aiFrontDesk: {
    label: "AI Front Desk (Growth)",
    price: "$449/mo",
    note: "24/7 across calls, chat, and SMS",
    annual: "~$5,400/year",
  },
  savingsNote:
    "That is roughly $42,000 in annual savings, plus coverage on evenings, weekends, and holidays your in-house team is not working.",
};

const timeSavings = [
  { task: "Missed call follow-up", hours: "5-10 hrs/mo" },
  { task: "Lead intake & qualification", hours: "10-20 hrs/mo" },
  { task: "Appointment reminders & confirmations", hours: "5-15 hrs/mo" },
  { task: "CRM updates & data entry", hours: "10-30 hrs/mo" },
  { task: "Weekly reporting", hours: "5-10 hrs/mo" },
];

const faqs = [
  {
    q: "How does the two-meter usage pricing work?",
    a: "Each AI Front Desk plan includes a monthly allotment of voice minutes for phone calls, plus a separate allotment of digital conversations covering website chat, SMS, email threads, and Instagram or Facebook DMs combined. If you go over either allotment, overage applies only to that meter.",
  },
  {
    q: "What counts as one digital conversation?",
    a: "A conversation is one back-and-forth exchange with a customer on a single channel and topic, for example one chat session, one SMS thread, one email exchange, or one DM conversation, regardless of how many messages it takes to resolve.",
  },
  {
    q: "Can I add channels later without switching plans?",
    a: "Yes. SMS, email, and social DMs can be added to the Starter or Growth plans for $49/mo per channel, or you can move to a tier that already includes them.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "AI Front Desk plans are month-to-month. The one-time setup fee covers initial configuration, and you can change tiers or cancel going forward at any time.",
  },
  {
    q: "What is included in the one-time setup fee?",
    a: "Phone number setup or porting, channel connections such as your chat widget, SMS line, shared inbox, and ManyChat DM flows, knowledge base and Q&A configuration, calendar or CRM connection, and testing before launch.",
  },
  {
    q: "How does pricing work for Workflow Automation Agents?",
    a: "Workflow agents are priced by complexity rather than usage alone, based on how many workflows, integrations, and how much of the process the agent can complete on its own. You will always receive a fixed proposal scoped to your workflows before any build work begins.",
  },
  {
    q: "Can I change plans anytime?",
    a: "Yes. You can move between AI Front Desk tiers, add or remove channels, or add a Workflow Automation Agent package as your needs change.",
  },
  {
    q: "What if my workflow does not fit neatly into a package?",
    a: "Most businesses start with the closest package and we adjust scope after a workflow review. If a project needs a different structure entirely, we will scope it as a Custom AI Workforce engagement.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-14 text-center text-white md:py-20">
        <div className="mx-auto max-w-[860px]">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Pricing</p>
          <h1 className="mt-3 text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] md:text-[52px]">
            Simple pricing for AI agents, from 24/7 reception to custom workflow automation.
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-white/74 md:text-lg">
            Start with an AI Front Desk that answers calls, texts, emails, DMs, and website chat, or build custom workflow agents for the operations work behind the scenes. Transparent monthly plans, clear usage pricing, and a fixed proposal before any custom build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#ai-front-desk" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
              View AI Front Desk Plans
            </a>
            <a href="#workflow-agents" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
              View Workflow Agent Plans
            </a>
          </div>
          <div className="mx-auto mt-8 grid max-w-[760px] grid-cols-2 gap-3 text-sm font-semibold text-white/80 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-lg border border-white/12 bg-white/[0.06] px-3 py-3">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Choose your system"
            title="Two ways to put AI to work in your business."
            description="Most teams start with an AI Front Desk to cover the conversations that come in every day, then add Workflow Automation Agents for the operational work that happens behind the scenes."
            align="center"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {systemCards.map((card) => (
              <a key={card.eyebrow} href={card.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{card.eyebrow}</p>
                <p className="mt-3 text-2xl font-extrabold text-ink">{card.price}</p>
                <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{card.title}</h2>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  {card.cta} <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-front-desk" className="scroll-mt-24 border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="AI Front Desk"
            title="One system for every way customers reach you."
            description="Pricing is based on two simple usage meters: voice minutes for phone calls, and digital conversations covering website chat, SMS, email, and Instagram or Facebook DMs combined. Every plan includes a one-time setup fee for configuration and channel connections."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {frontDeskTiers.map((tier) => (
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
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-ink">{tier.price}</span>
                  {tier.period ? <span className="text-sm font-semibold text-muted">{tier.period}</span> : null}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted">{tier.setup}</p>
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
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-extrabold transition-colors ${tier.ctaVariant === "primary" ? "bg-accent text-white hover:bg-btn-hover" : "border border-card-border text-ink hover:border-accent"}`}
                >
                  {tier.cta}
                </AssessmentTrigger>
              </div>
            ))}
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="flex items-center justify-between rounded-lg border border-card-border bg-white px-4 py-3">
                <span className="text-sm font-semibold text-ink">{addOn.name}</span>
                <span className="text-sm font-extrabold text-[#167f65]">{addOn.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow-agents" className="scroll-mt-24 bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Workflow Automation Agents"
            title="For custom workflows, pricing depends on complexity, not just usage."
            description="Every workflow agent engagement gets a fixed proposal scoped to your processes before we build. No surprise hourly billing."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workflowPackages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold text-ink">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{pkg.tagline}</p>
                <p className="mt-4 text-2xl font-extrabold text-ink">{pkg.price}</p>
                <p className="mt-1 text-xs font-semibold text-muted">{pkg.setup}</p>
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
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-card-border px-6 text-sm font-extrabold text-ink transition-colors hover:border-accent"
                >
                  {pkg.cta}
                </AssessmentTrigger>
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
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-white/12 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/50">{roiComparison.inHouse.label}</p>
              <p className="mt-3 text-3xl font-extrabold">{roiComparison.inHouse.price}</p>
              <p className="mt-1 text-sm text-white/70">{roiComparison.inHouse.note}</p>
              <p className="mt-4 text-sm font-semibold text-white/80">Annual cost: {roiComparison.inHouse.annual}</p>
            </div>
            <div className="rounded-lg border border-accent/40 bg-accent/10 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">{roiComparison.aiFrontDesk.label}</p>
              <p className="mt-3 text-3xl font-extrabold">{roiComparison.aiFrontDesk.price}</p>
              <p className="mt-1 text-sm text-white/70">{roiComparison.aiFrontDesk.note}</p>
              <p className="mt-4 text-sm font-semibold text-white/80">Annual cost: {roiComparison.aiFrontDesk.annual}</p>
            </div>
          </div>
          <p className="mt-6 max-w-[820px] text-sm leading-7 text-white/74">{roiComparison.savingsNote}</p>

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

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader eyebrow="Pricing FAQ" title="Common questions about how pricing works." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="font-extrabold text-ink">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/pricing" ctaLocation="pricing_page_assessment" />
    </div>
  );
}
