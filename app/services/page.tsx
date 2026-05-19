import type { Metadata } from "next";
import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { serviceOffers } from "@/data/service-offers";
import { metadataForPath } from "@/lib/route-metadata";

export const metadata: Metadata = metadataForPath("/services");

const serviceFit = [
  {
    label: "Start with AI Voice",
    title: "When calls interrupt the team or revenue is being missed.",
    text: "Best for front desk, intake, booking, quote routing, service calls, enrollment inquiries, and routine phone workflows that need clean escalation.",
    href: "/services/ai-voice",
  },
  {
    label: "Start with AI Agents",
    title: "When inboxes, CRM queues, documents, or admin workflows repeat every day.",
    text: "Best for email response, support triage, quote intake, CRM updates, finance inboxes, reporting, and operations tasks.",
    href: "/services/ai-agents",
  },
  {
    label: "Start with Strategy",
    title: "When the opportunity is real but the first move is unclear.",
    text: "Best when leadership wants spend confidence, workflow prioritization, risk boundaries, a pilot scope, and a measurable roadmap.",
    href: "/services/ai-transformation",
  },
];

export default function CoreServicesPage() {
  const primary = serviceOffers.find((service) => service.status === "primary");
  const remaining = serviceOffers.filter((service) => service.status !== "primary");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-[84px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h1 className="max-w-[760px] text-[38px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[58px]">
              Build AI automation around your calls, messages, admin work, and business systems.
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/74 md:text-[18px]">
              Automate4U helps SMB and mid-market teams reduce repetitive labor, respond faster, connect business systems, and keep people in control where judgment matters.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/services/ai-voice" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                Explore AI Voice
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">How the services fit together</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Frontline", "Voice, chat, email, and messaging agents handle routine conversations and capture context."],
                ["Operations", "Workflow agents update systems, route work, create tasks, and prepare approvals."],
                ["Control", "Security, monitoring, human handoffs, audit logs, and reporting keep the system trustworthy."],
                ["Expansion", "Managed AI Operations keeps workflows tuned as volume, tools, policies, and teams change."],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {primary ? (
        <section className="border-b border-card-border bg-white px-4 py-12 md:py-16">
          <div className="mx-auto grid max-w-[1180px] gap-8 rounded-lg border border-card-border bg-[#f8fbfa] p-6 shadow-[0_12px_36px_rgba(15,23,32,0.05)] md:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Strong starting point</p>
              <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
                Use AI Voice when calls are the clearest pain.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                Voice is prominent because missed calls, intake, booking, and routing are easy for teams to feel immediately. The strongest implementations then connect voice to chat, email, CRM, operations, reporting, and human review.
              </p>
            </div>
            <Link href={primary.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
              <h3 className="text-2xl font-extrabold text-ink">{primary.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{primary.description}</p>
              <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                Explore AI Voice <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
              </span>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Service map"
            title="Choose the offer based on the workflow you need to improve first."
            description="The right starting point is usually the workflow with enough volume, enough business value, clear ownership, and safe boundaries for a first pilot."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remaining.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{service.shortTitle}</p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  Explore service <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Where to start"
            title="A strong first engagement should prove value without asking you to bet the whole operation."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serviceFit.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{item.label}</p>
                <h2 className="mt-3 text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  See this path <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/services" ctaLocation="services_overview_assessment" />
    </div>
  );
}
