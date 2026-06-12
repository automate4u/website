import type { Metadata } from "next";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import JsonLd from "@/components/JsonLd";
import PricingPlans from "@/components/pricing/PricingPlans";
import { metadataForPath } from "@/lib/route-metadata";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = metadataForPath("/pricing");

const trustPoints = [
  "Month-to-month plans",
  "Fixed setup quote before you start",
  "Keep your existing phone number",
  "U.S. & Canada-based support team",
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
    q: "Is there a discount for annual billing?",
    a: "Yes, paying annually saves 15% on the recurring AI Front Desk or Workflow Agent fee compared to monthly billing, and we waive the one-time setup fee entirely for annual-billing customers.",
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
          <div className="mx-auto mt-8 grid max-w-[760px] grid-cols-2 gap-3 text-sm font-semibold text-white/80 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-lg border border-white/12 bg-white/[0.06] px-3 py-3">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPlans />

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <JsonLd data={faqSchema(faqs)} />
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
