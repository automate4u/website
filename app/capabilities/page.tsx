import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const reliabilityLayers = [
  {
    label: "Frontline AI",
    detail: "Voice, chat, email, and workflow agents capture demand and structure the request.",
  },
  {
    label: "Business context",
    detail: "The system checks approved sources such as CRM, calendars, documents, inventory, or policy records.",
  },
  {
    label: "Workflow action",
    detail: "Tasks, bookings, notes, follow-ups, alerts, and KPI events are created in the right systems.",
  },
  {
    label: "Human control",
    detail: "Sensitive, uncertain, or high-value decisions route to staff with context and audit history.",
  },
];

const clientArtifacts = [
  "Workflow and handoff map",
  "Integration and data-flow map",
  "Escalation and approval rules",
  "Testing checklist",
  "Launch monitoring plan",
  "KPI and value-realization view",
];

const operatingControls = [
  "Approved-response boundaries",
  "Sensitive-workflow escalation",
  "Role-based access assumptions",
  "Audit logs and review points",
  "Retry and failed-sync handling",
  "Monthly optimization path",
];

export default function CapabilitiesPage() {
  const featuredPillar = howWeBuildPillars.find((pillar) => pillar.priority === "featured");
  const supportingPillars = howWeBuildPillars.filter((pillar) => pillar.priority !== "featured");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]" aria-labelledby="how-build-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              How We Build
            </p>
            <h1 id="how-build-title" className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Reliable AI automation needs more than a good demo.
            </h1>
            <p className="mt-5 max-w-[670px] text-base leading-8 text-white/74 md:text-[17px]">
              Before you trust AI with calls, emails, customer questions, quotes, bookings, or operational workflows, you need to know how it is connected, monitored, measured, and controlled.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/capabilities/security-monitoring-ai-safety" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                Review Safety Controls
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Operating model</p>
            <div className="mt-5 grid gap-3">
              {reliabilityLayers.map((layer, index) => (
                <div key={layer.label} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-white">{layer.label}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="trust-pillars-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Trust pillars"
            title="The capabilities behind safe, useful AI systems."
            description="Services are what you buy. These are the delivery disciplines that make those services reliable enough to use in real operations."
          />

          {featuredPillar ? (
            <Link
              href={featuredPillar.href}
              className="mt-8 grid gap-8 rounded-lg border border-[#1db993]/30 bg-[#e9f9f3] p-6 shadow-[0_14px_42px_rgba(15,23,32,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(15,23,32,0.09)] md:p-8 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Featured first</p>
                <h2 id="trust-pillars-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
                  {featuredPillar.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">{featuredPillar.description}</p>
                <span className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  See safety approach <span className="ml-1" aria-hidden="true">-&gt;</span>
                </span>
              </div>
              <div className="grid gap-3">
                {featuredPillar.proofPoints.map((point) => (
                  <p key={point} className="rounded-lg border border-[#1db993]/20 bg-white px-4 py-3 text-sm font-bold leading-6 text-ink">
                    {point}
                  </p>
                ))}
              </div>
            </Link>
          ) : null}

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportingPillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex h-full flex-col rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45 hover:shadow-[0_16px_38px_rgba(15,23,32,0.08)]"
              >
                <h3 className="text-xl font-extrabold leading-tight text-ink">{pillar.title}</h3>
                <p className="mt-4 grow text-sm leading-6 text-muted">{pillar.description}</p>
                <div className="mt-5 grid gap-2">
                  {pillar.proofPoints.slice(0, 2).map((point) => (
                    <span key={point} className="rounded-md bg-[#f8fbfa] px-3 py-2 text-xs font-bold text-[#405365]">
                      {point}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex text-sm font-extrabold text-[#167f65]">
                  Learn more <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Services depend on controls"
            title="Each offer should come with the right safety, integration, adoption, and reporting foundation."
            description="This is how we keep AI Voice, agents, chat, marketing, strategy, and custom software from becoming disconnected tools."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {serviceOffers.slice(0, 6).map((service) => (
              <article key={service.href} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Security", "Integrations", "Monitoring", "Adoption"].map((tag) => (
                    <span key={tag} className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={service.href} className="mt-5 inline-flex text-sm font-extrabold text-[#167f65]">
                  View service <span className="ml-1" aria-hidden="true">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="artifacts-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">What clients should see</p>
            <h2 id="artifacts-title" className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[42px]">
              Trust comes from visible operating discipline.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Buyers do not only need to hear that an AI system works. They need to see how the workflow is mapped, where the system connects, what happens when something fails, and how success will be measured after launch.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
              <h3 className="text-xl font-extrabold text-ink">Client artifacts</h3>
              <ul className="mt-5 grid gap-3">
                {clientArtifacts.map((artifact) => (
                  <li key={artifact} className="text-sm font-semibold leading-6 text-muted">{artifact}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
              <h3 className="text-xl font-extrabold text-ink">Operating controls</h3>
              <ul className="mt-5 grid gap-3">
                {operatingControls.map((control) => (
                  <li key={control} className="text-sm font-semibold leading-6 text-muted">{control}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/capabilities" ctaLocation="how_we_build_assessment" />
    </div>
  );
}
