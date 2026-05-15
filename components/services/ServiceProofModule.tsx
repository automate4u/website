"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const agentExamples = [
  { name: "AI Sales Rep", category: "Sales", type: "Chat + CRM", stack: ["HubSpot", "Calendly"], text: "Qualifies inbound leads, drafts follow-up, books meetings, and updates CRM." },
  { name: "Manufacturing Response Agent", category: "Operations", type: "Email + Chat", stack: ["ERP", "CRM"], text: "Answers parts, availability, quote, ordering, and timeline questions from approved sources." },
  { name: "Support Triage Agent", category: "Support", type: "Helpdesk", stack: ["Zendesk", "Gorgias"], text: "Classifies tickets, drafts responses, routes escalations, and summarizes customer history." },
  { name: "Admin Intake Agent", category: "Operations", type: "Workflow", stack: ["Forms", "Sheets"], text: "Turns form, email, and call requests into structured tasks with owner, urgency, and next step." },
  { name: "Finance Inbox Agent", category: "Finance", type: "Document", stack: ["QuickBooks", "Email"], text: "Extracts invoice details, prepares review notes, and flags exceptions for approval." },
  { name: "Marketing Content Agent", category: "Marketing", type: "Content", stack: ["Drive", "CRM"], text: "Drafts posts, emails, and campaign assets from approved topics and routes them for review." },
];

const readinessChecks = [
  "We know which workflow is slowing the team down.",
  "The workflow has enough volume to justify automation.",
  "The current process has a clear owner.",
  "The data or knowledge source is reasonably reliable.",
  "Sensitive decisions can be escalated to a person.",
  "We can measure time saved, response time, cycle time, or conversion.",
];

const aiChatDemoUrl = "https://app.livechatai.com/aibot-iframe/cmgdycnrf0001jx042rasimwz";

function ProofShell({
  eyebrow,
  title,
  description,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-[#051C2C] text-white" : "bg-white text-ink"} px-4 py-14 md:py-20`}>
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[820px]">
          <p className={`text-xs font-bold uppercase tracking-[0.08em] ${dark ? "text-[#7df0d1]" : "text-[#167f65]"}`}>{eyebrow}</p>
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">{title}</h2>
          <p className={`mt-4 text-base leading-8 ${dark ? "text-white/72" : "text-muted"}`}>{description}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function AIChatProof() {
  const [demoActive, setDemoActive] = useState(false);
  const [demoLoaded, setDemoLoaded] = useState(false);

  return (
    <ProofShell
      eyebrow="Chat demo"
      title="Try the front-end experience, then see what should happen behind it."
      description="A chat assistant should not stop at answering a question. The business value comes from capture, qualification, routing, booking, ticketing, CRM updates, and human handoff."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold text-ink">Basic FAQ chatbot example</p>
          <div className="relative h-[560px] overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            {!demoActive ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#f8fbfa] p-5">
                <div className="w-full max-w-[420px] rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_34px_rgba(15,23,32,0.08)]">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Demo preview</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">A simple chatbot surface is available to try.</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    The live demo is served by an external provider, so we load it only when requested. A production build connects this surface to approved knowledge, CRM or ticketing, staff handoff, and reporting.
                  </p>
                  <div className="mt-5 grid gap-2 text-sm font-semibold text-ink">
                    <span className="rounded-md bg-[#f8fbfa] px-3 py-2">Approved answer boundaries</span>
                    <span className="rounded-md bg-[#f8fbfa] px-3 py-2">Lead or support intent captured</span>
                    <span className="rounded-md bg-[#f8fbfa] px-3 py-2">Human handoff with transcript</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setDemoActive(true);
                        trackEvent("site_chat_demo_started", { page: "/core-services/ai-chat", ctaLocation: "chat_demo_preview" });
                      }}
                      className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-white hover:bg-btn-hover"
                    >
                      Load live demo
                    </button>
                    <a
                      href={aiChatDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-card-border bg-white px-4 py-2 text-sm font-extrabold text-ink hover:border-[#1db993]/50"
                    >
                      Open in new tab
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
            {demoActive ? (
              <>
                {!demoLoaded ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#f8fbfa] p-5">
                    <div className="rounded-lg border border-card-border bg-white px-5 py-4 text-sm font-bold text-ink shadow-[0_12px_34px_rgba(15,23,32,0.08)]">
                      Loading live demo...
                    </div>
                  </div>
                ) : null}
                <iframe
                  src={aiChatDemoUrl}
                  title="AI chatbot demo"
                  allow="microphone"
                  loading="lazy"
                  className={`h-[590px] w-full border-0 transition-opacity duration-300 ${demoLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => {
                    setDemoLoaded(true);
                    trackEvent("site_chat_demo_viewed", { page: "/core-services/ai-chat", ctaLocation: "chat_demo_iframe" });
                  }}
                />
              </>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">This is a simple demo surface. A production implementation connects to approved knowledge, business systems, reporting, and staff handoff.</p>
        </div>
        <div className="grid gap-4">
          {[
            ["Visitor asks", "The assistant answers from approved FAQs, product/service context, or policies."],
            ["Intent captured", "Lead, booking, support, product question, return, order status, or escalation."],
            ["System updated", "CRM record, ticket, booking, task, transcript, or follow-up is created."],
            ["Human handoff", "Sensitive, frustrated, uncertain, or high-value conversations route to staff with context."],
          ].map(([title, text], index) => (
            <article key={title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <p className="text-sm font-extrabold text-[#167f65]">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </ProofShell>
  );
}

function AIChatScenarioProof() {
  const scenarios = [
    ["Lead qualification", "Collects budget, timeline, service fit, and contact details before routing to HubSpot or a sales task."],
    ["Support intake", "Captures the issue, checks approved FAQs, creates a ticket, and escalates with transcript context."],
    ["Booking request", "Answers availability questions, offers booking paths, and hands off when schedule rules are unclear."],
    ["Product or service guidance", "Uses approved knowledge to narrow options, recommend next steps, and flag uncertain answers."],
  ];

  return (
    <ProofShell
      eyebrow="Conversation paths"
      title="Different chats need different controls, handoffs, and outcomes."
      description="A useful messaging assistant should be designed around the type of conversation, the systems it updates, and the point where a person should step in."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {scenarios.map(([title, text]) => (
          <article key={title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <h3 className="text-xl font-extrabold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

function AIAgentsProof() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(agentExamples.map((agent) => agent.category)))];
  const filtered = useMemo(() => {
    const search = query.toLowerCase();
    return agentExamples.filter((agent) => {
      const categoryMatch = category === "All" || agent.category === category;
      const searchMatch = [agent.name, agent.category, agent.type, agent.text, ...agent.stack].join(" ").toLowerCase().includes(search);
      return categoryMatch && searchMatch;
    });
  }, [category, query]);

  return (
    <ProofShell
      eyebrow="Agent library"
      title="Browse agent patterns your team may recognize in your own operations."
      description="Concrete examples make the offer easier to understand. The right agent is usually a tailored version of a repeatable pattern."
    >
      <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_12px_36px_rgba(15,23,32,0.05)]">
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by role, task, or tool..."
            className="rounded-full border border-card-border bg-white px-4 py-3 text-base outline-none focus:border-[#1db993]"
            aria-label="Search agent examples"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-bold ${category === item ? "border-[#1db993] bg-[#e9f9f3] text-[#167f65]" : "border-card-border bg-white text-muted"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((agent) => (
            <article key={agent.name} className="rounded-lg border border-card-border bg-white p-5">
              <h3 className="text-lg font-extrabold text-ink">{agent.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{agent.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#ecfbf6] px-3 py-1 text-xs font-bold text-[#167f65]">{agent.type}</span>
                {agent.stack.map((tool) => (
                  <span key={tool} className="rounded-full border border-card-border px-3 py-1 text-xs font-semibold text-muted">{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </ProofShell>
  );
}

function AIAgentOperatingLoopProof() {
  return (
    <ProofShell
      eyebrow="Operating loop"
      title="Agents need a defined job, not an open-ended instruction."
      description="The strongest agent workflows define inputs, permissions, tools, review rules, and evidence so the team can trust what happened."
      dark
    >
      <div className="grid gap-4 md:grid-cols-5">
        {[
          ["Trigger", "A lead, email, ticket, call, document, form, or CRM change starts the workflow."],
          ["Context", "The agent checks approved sources, customer history, rules, and current system data."],
          ["Action", "It drafts, classifies, routes, updates, schedules, extracts, or prepares the next step."],
          ["Review", "Sensitive, uncertain, high-value, or policy-bound work is escalated for approval."],
          ["Record", "The system logs the action, source, owner, status, KPI, and follow-up trail."],
        ].map(([title, text], index) => (
          <article key={title} className="rounded-lg border border-white/12 bg-white/[0.07] p-5">
            <p className="text-sm font-extrabold text-[#7df0d1]">0{index + 1}</p>
            <h3 className="mt-2 text-lg font-extrabold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

function StrategyProof() {
  const [checked, setChecked] = useState<boolean[]>(() => readinessChecks.map(() => false));
  const score = checked.filter(Boolean).length;
  const recommendation = score <= 2
    ? "Start with workflow discovery and a tightly bounded pilot."
    : score <= 4
      ? "Move into a paid blueprint or pilot design."
      : "You may be ready for a pilot plus operating model.";

  return (
    <ProofShell
      eyebrow="Readiness check"
      title="See which next step fits before committing to a build."
      description="A simple self-assessment helps leadership see whether they need discovery, a blueprint, a pilot, or a broader operating roadmap."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-3">
          {readinessChecks.map((item, index) => (
            <label key={item} className={`flex cursor-pointer gap-3 rounded-lg border p-4 text-sm font-semibold leading-6 ${checked[index] ? "border-[#1db993] bg-[#ecfbf6] text-ink" : "border-card-border bg-white text-muted"}`}>
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))}
                className="mt-1"
              />
              {item}
            </label>
          ))}
        </div>
        <aside className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Readiness score</p>
          <div className="mt-3 text-[56px] font-extrabold leading-none text-ink">{score}/6</div>
          <p className="mt-4 text-xl font-extrabold leading-tight text-ink">{recommendation}</p>
          <p className="mt-4 text-sm leading-6 text-muted">The assessment call should validate the workflow, business case, risks, and first milestone rather than jump straight to a large build.</p>
        </aside>
      </div>
    </ProofShell>
  );
}

function StrategyValueRoadmapProof() {
  return (
    <ProofShell
      eyebrow="Value roadmap"
      title="The strategy should make spend easier to approve."
      description="A practical AI roadmap connects each initiative to a workflow, measurable KPI, operating risk, and next investment decision."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["30 days", "Map workflows, identify spend drivers, rank opportunities, and choose a first pilot with clear boundaries."],
          ["60 days", "Build or configure the pilot, test human handoffs, define reporting, and prepare staff for controlled use."],
          ["90 days", "Review measured impact, tighten prompts and processes, decide whether to expand, pause, or rebuild the next workflow."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <h3 className="text-2xl font-extrabold text-ink">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

function MarketingProof() {
  return (
    <ProofShell
      eyebrow="Workflow preview"
      title="Show the path from one idea to approved content and follow-up."
      description="Marketing automation needs to protect brand quality while reducing the coordination work that keeps small teams from publishing consistently."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {[
          ["Input", "Offer, customer question, promotion, review, product note, or campaign idea."],
          ["Draft", "AI prepares post, email, caption, FAQ, landing copy, or campaign variant."],
          ["Review", "Owner checks brand voice, claims, compliance, audience, and offer."],
          ["Schedule", "Approved asset is queued for email, social, CRM nurture, or sales follow-up."],
          ["Report", "Workflow logs output, engagement, lead movement, and next content opportunities."],
        ].map(([title, text], index) => (
          <article key={title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <p className="text-sm font-extrabold text-[#167f65]">0{index + 1}</p>
            <h3 className="mt-2 text-lg font-extrabold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

function MarketingApprovalProof() {
  return (
    <ProofShell
      eyebrow="Approval control"
      title="Content automation should make publishing safer, not noisier."
      description="AI can speed up marketing without weakening brand voice, offer accuracy, claims, or final approval when the workflow is designed around review."
      dark
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-lg border border-white/12 bg-white/[0.07] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Review queue</p>
          <div className="mt-5 grid gap-3">
            {["LinkedIn post needs founder approval", "Campaign email needs offer check", "Product FAQ needs compliance review", "Customer story needs anonymization"].map((item) => (
              <p key={item} className="rounded-lg bg-[#0d1720]/70 px-4 py-3 text-sm font-semibold leading-6 text-white/82">{item}</p>
            ))}
          </div>
        </aside>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Brand rules", "Tone, terms, claims, excluded phrases, approval requirements, and publishing boundaries."],
            ["Source material", "Past posts, offers, service pages, call notes, reviews, product info, and campaign briefs."],
            ["Human approvals", "Final publishing, sensitive claims, offers, regulated language, and high-visibility assets stay with people."],
            ["Performance loop", "Reporting feeds the next content ideas, nurture segments, and campaign improvements."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-white/12 bg-white/[0.07] p-5">
              <h3 className="text-lg font-extrabold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </ProofShell>
  );
}

function ManagedOpsProof() {
  const rows = [
    ["Voice agent", "98.7%", "3 escalations", "Healthy"],
    ["Chat support", "94.2%", "7 low-confidence", "Review"],
    ["CRM sync", "99.1%", "1 retry queue", "Healthy"],
    ["Email triage", "91.8%", "12 drafts pending", "Tune"],
  ];

  return (
    <ProofShell
      eyebrow="Operations dashboard"
      title="Make ongoing support feel tangible, not vague."
      description="Managed AI Operations makes clear what gets watched, reviewed, fixed, and improved after launch."
      dark
    >
      <div className="overflow-hidden rounded-lg border border-white/14 bg-white/[0.06]">
        <div className="hidden grid-cols-4 gap-0 border-b border-white/14 bg-white/10 px-4 py-3 text-sm font-extrabold text-white md:grid">
          <span>Workflow</span>
          <span>Success</span>
          <span>Needs review</span>
          <span>Status</span>
        </div>
        {rows.map(([workflow, success, review, status]) => (
          <div key={workflow} className="grid gap-2 border-b border-white/10 px-4 py-4 text-sm text-white/78 last:border-b-0 md:grid-cols-4 md:gap-0">
            <span className="font-bold text-white">{workflow}</span>
            <span><span className="font-bold text-white/55 md:hidden">Success: </span>{success}</span>
            <span><span className="font-bold text-white/55 md:hidden">Needs review: </span>{review}</span>
            <span className={status === "Healthy" ? "font-bold text-[#7df0d1]" : "font-bold text-[#ffd166]"}>
              <span className="font-bold text-white/55 md:hidden">Status: </span>{status}
            </span>
          </div>
        ))}
      </div>
    </ProofShell>
  );
}

function ManagedOpsReportProof() {
  return (
    <ProofShell
      eyebrow="Monthly operating review"
      title="Buyers need to know what happens after launch."
      description="Managed operations should include a regular review of quality, usage, costs, escalations, workflow changes, and the next improvement priorities."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Quality", "Low-confidence answers, customer friction, staff overrides, missed intents, and prompt updates."],
          ["Reliability", "Integration failures, retry queues, latency, downtime, model changes, and incident notes."],
          ["Cost", "Voice minutes, message volume, vendor usage, workflow volume, and cost-per-request trends."],
          ["Value", "Hours saved, response time, deflection, booking conversion, backlog reduction, and next workflow candidates."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <h3 className="text-xl font-extrabold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

function CustomSoftwareProof() {
  return (
    <ProofShell
      eyebrow="Interface snapshot"
      title="Custom AI software should feel like an operating surface."
      description="Your team should be able to picture the system they will actually use: queues, approvals, system data, AI summaries, actions, and audit trails."
    >
      <div className="grid gap-6 rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_12px_36px_rgba(15,23,32,0.05)] lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-lg bg-[#051C2C] p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Operations console</p>
          <h3 className="mt-3 text-2xl font-extrabold">Request review queue</h3>
          <div className="mt-5 grid gap-3">
            {["Quote request needs pricing approval", "Customer update drafted from order notes", "Pickup change flagged for staff review"].map((item) => (
              <p key={item} className="rounded-lg border border-white/12 bg-white/[0.07] px-4 py-3 text-sm font-semibold leading-6 text-white/82">{item}</p>
            ))}
          </div>
        </aside>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["AI summary", "Concise context from calls, emails, CRM, documents, and prior actions."],
            ["Staff action", "Approve, edit, assign, request more info, or escalate from one place."],
            ["System update", "CRM, calendar, ticket, dashboard, notification, or database action."],
            ["Audit trail", "Who approved, what changed, what source was used, and what happened next."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-card-border bg-white p-5">
              <h3 className="text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </ProofShell>
  );
}

function CustomArchitectureProof() {
  return (
    <ProofShell
      eyebrow="Build architecture"
      title="The proof is not only the screen. It is the system behind it."
      description="Custom AI software should show how data, tools, permissions, AI actions, human approvals, and reporting fit together before a larger build begins."
      dark
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Sources", "CRM, ERP, documents, email, calendar, database, forms, spreadsheets, and approved knowledge."],
          ["AI layer", "Classification, extraction, summarization, drafting, recommendations, and workflow decisions."],
          ["Human layer", "Review queues, permissions, approvals, assignments, overrides, and escalation paths."],
          ["Systems layer", "Tasks, tickets, records, notifications, dashboards, logs, and reporting outputs."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-white/12 bg-white/[0.07] p-5">
            <h3 className="text-lg font-extrabold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </ProofShell>
  );
}

export default function ServiceProofModules({ slug }: { slug: string }) {
  if (slug === "ai-chat") {
    return (
      <>
        <AIChatProof />
        <AIChatScenarioProof />
      </>
    );
  }

  if (slug === "ai-agents") {
    return (
      <>
        <AIAgentsProof />
        <AIAgentOperatingLoopProof />
      </>
    );
  }

  if (slug === "ai-transformation") {
    return (
      <>
        <StrategyProof />
        <StrategyValueRoadmapProof />
      </>
    );
  }

  if (slug === "marketing-automation") {
    return (
      <>
        <MarketingProof />
        <MarketingApprovalProof />
      </>
    );
  }

  if (slug === "managed-ai-operations") {
    return (
      <>
        <ManagedOpsProof />
        <ManagedOpsReportProof />
      </>
    );
  }

  if (slug === "custom-ai-software") {
    return (
      <>
        <CustomSoftwareProof />
        <CustomArchitectureProof />
      </>
    );
  }

  return null;
}
