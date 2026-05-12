import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

const integrationProblems = [
  {
    title: "The answer lives outside the conversation",
    text: "Customers ask simple questions, but the useful answer may sit in a CRM, calendar, ERP, inventory file, order tracker, document folder, or internal spreadsheet.",
  },
  {
    title: "Staff bridge systems by hand",
    text: "Teams waste time copying details between inboxes, forms, calendars, CRMs, spreadsheets, and task systems just to keep operations moving.",
  },
  {
    title: "AI cannot act without context",
    text: "A voice, chat, or email agent becomes much more useful when it can read approved data, create records, trigger workflows, and route exceptions.",
  },
  {
    title: "Failed syncs create silent risk",
    text: "Good automation needs retries, error handling, fallback paths, and visibility when a downstream system does not accept an update.",
  },
];

const connectionLayers = [
  {
    label: "Approved sources",
    detail: "CRM, calendar, email, forms, documents, ERP, inventory, ecommerce, helpdesk, database, or policy records.",
  },
  {
    label: "Structured action",
    detail: "Create a lead, book an appointment, update a ticket, draft a quote task, send a follow-up, or log a KPI event.",
  },
  {
    label: "System of record",
    detail: "Decide where each field belongs so automation strengthens the source of truth instead of creating another data silo.",
  },
  {
    label: "Failure handling",
    detail: "Retries, alerts, human review, conflict resolution, and manual fallback paths when an integration fails.",
  },
];

const integrationPatterns = [
  {
    title: "Voice to CRM and calendar",
    flow: ["Call captured", "Intent classified", "CRM record updated", "Calendar booking created", "Confirmation sent"],
  },
  {
    title: "Email to quote workflow",
    flow: ["Email parsed", "Customer matched", "Parts or service details extracted", "Quote task created", "Sales team notified"],
  },
  {
    title: "Support chat to helpdesk",
    flow: ["Question answered", "Exception detected", "Ticket created", "Transcript attached", "SLA event logged"],
  },
  {
    title: "Ecommerce support to operations",
    flow: ["Order checked", "Return or product question routed", "Customer follow-up sent", "Issue tagged", "Report updated"],
  },
];

const deliverables = [
  "Current-system inventory",
  "Integration and data-flow map",
  "System-of-record decisions",
  "Field mapping and transformation notes",
  "Retry and failure-handling plan",
  "Launch monitoring checklist",
];

const systems = [
  {
    title: "Customer systems",
    items: ["HubSpot", "Salesforce", "Pipedrive", "GoHighLevel", "Helpdesks", "Support inboxes"],
  },
  {
    title: "Operations systems",
    items: ["Calendars", "Forms", "Spreadsheets", "ERPs", "Inventory data", "Databases"],
  },
  {
    title: "Communication systems",
    items: ["Email", "SMS", "WhatsApp", "Voice platforms", "Team notifications", "Internal task tools"],
  },
  {
    title: "AI and automation layer",
    items: ["Retell", "Botpress", "OpenAI", "Make", "n8n", "Custom APIs"],
  },
];

const relatedPillars = howWeBuildPillars.filter(
  (pillar) => pillar.href !== "/capabilities/data-integrations-infrastructure"
);

export default function DataIntegrationsInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-12 text-white md:py-[72px]">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              Data & Integrations
            </p>
            <h1 className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              Connect AI to the systems that actually run the business.
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-white/74 md:text-[17px]">
              Useful AI needs approved context and reliable handoffs. We connect voice, chat, email, and workflow agents to CRMs, calendars, documents, databases, reporting, and operational systems so automation can create real business outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/capabilities" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                How We Build
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Integration model</p>
            <div className="mt-5 grid gap-3">
              {connectionLayers.map((layer, index) => (
                <div key={layer.label} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{layer.label}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Buyer concerns"
            title="AI projects stall when the systems underneath are disconnected."
            description="The hard part is rarely just generating a response. The real value comes when the right information is read, the right record is updated, and the right person is notified when the workflow needs judgment."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {integrationProblems.map((problem) => (
              <article key={problem.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{problem.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Common patterns"
            title="Every integration should turn an AI interaction into a clean operational handoff."
            description="The first version does not need to connect every system. It should connect the minimum systems required to make one workflow useful, measurable, and safe."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {integrationPatterns.map((pattern) => (
              <article key={pattern.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{pattern.title}</h2>
                <div className="mt-5 grid gap-3">
                  {pattern.flow.map((step, index) => (
                    <div key={step} className="grid gap-3 rounded-lg bg-[#f8fbfa] px-4 py-3 sm:grid-cols-[auto_1fr] sm:items-center">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1db993] text-xs font-extrabold text-[#05251d]">{index + 1}</span>
                      <span className="text-sm font-semibold leading-6 text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="System map"
            title="We design around the tools your team already depends on."
            description="A good integration plan names the approved systems, the direction of data flow, the fields that matter, the failure cases, and the source of truth for each workflow."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {systems.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-lg font-extrabold text-ink">{group.title}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Implementation evidence</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">
              Clients should know where data comes from, where it goes, and what happens when it fails.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              This is how AI moves from impressive demo to operational system. We define the handoff points, field mappings, source-of-truth decisions, monitoring signals, and failure paths before expanding automation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((deliverable) => (
              <p key={deliverable} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {deliverable}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Where this matters"
            title="Every service becomes stronger when the integration path is clear."
            description="Voice, chat, agents, marketing workflows, strategy, and custom software all depend on approved data sources and reliable operational handoffs."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {serviceOffers.slice(0, 6).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45 hover:shadow-[0_16px_38px_rgba(15,23,32,0.08)]"
              >
                <h2 className="text-xl font-extrabold leading-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-extrabold text-[#167f65]">
                  View service <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Related capabilities"
            title="Reliable integrations need safety, measurement, adoption, and ongoing operations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedPillars.slice(0, 5).map((pillar) => (
              <Link key={pillar.href} href={pillar.href} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45">
                <h2 className="text-lg font-extrabold leading-tight text-ink">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/capabilities/data-integrations-infrastructure" ctaLocation="data_integrations_assessment" />
    </div>
  );
}
