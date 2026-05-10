"use client";

import React, { useActionState, useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { submitAssessmentLeadWithState } from "@/app/actions/assessment";
import AttributionFields from "@/components/AttributionFields";
import { trackEvent } from "@/lib/analytics";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Agent {
    name: string;
    category: string;
    type: string;
    stack: string[];
    blurb: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const AGENTS: Agent[] = [
    { name: "AI Sales Rep", category: "Sales", type: "Chat Agent", stack: ["OpenAI", "HubSpot", "Calendly"], blurb: "Captures leads from chat/email, qualifies, and books meetings automatically." },
    { name: "Outbound SDR Autopilot", category: "Sales", type: "Workflow", stack: ["OpenAI", "Apollo", "Gmail"], blurb: "Personalizes cold emails, sequences follow-ups, and updates CRM." },
    { name: "Customer Success Companion", category: "Support", type: "Chat Agent", stack: ["OpenAI", "Zendesk"], blurb: "Answers FAQs and triages tickets; escalates with full context." },
    { name: "Voice Receptionist", category: "Support", type: "Voice Agent", stack: ["OpenAI", "Twilio", "Google Calendar"], blurb: "Answers calls, qualifies, and books appointments." },
    { name: "RMA & Returns Bot", category: "Support", type: "Workflow", stack: ["Shopify", "Gorgias"], blurb: "Automates returns authorizations and shipping labels." },
    { name: "Invoice Generator", category: "Operations", type: "Workflow", stack: ["QuickBooks", "Zapier"], blurb: "Creates invoices/POs from emails or form submissions." },
    { name: "CRM Data Cleaner", category: "Operations", type: "RPA", stack: ["Salesforce", "n8n"], blurb: "Deduplicates, enriches, and standardizes CRM records nightly." },
    { name: "HR Onboarding Guide", category: "HR", type: "Chat Agent", stack: ["Notion", "Google Drive"], blurb: "Answers policy questions and guides new hires through onboarding." },
    { name: "Recruiting Screener", category: "HR", type: "Workflow", stack: ["Greenhouse", "OpenAI"], blurb: "Screens resumes and drafts structured scorecards." },
    { name: "AP Inbox Triage", category: "Finance", type: "Workflow", stack: ["Gmail", "QuickBooks"], blurb: "Parses vendor emails, extracts totals, and drafts bills." },
    { name: "Collections Nudge", category: "Finance", type: "Workflow", stack: ["QuickBooks", "HubSpot"], blurb: "Sends friendly, staged reminders for overdue invoices." },
    { name: "Ops Integrator", category: "Operations", type: "Integrator", stack: ["Zapier", "Make", "n8n"], blurb: "Keeps data in sync across your tools with guardrails." },
];

const CATEGORY_OPTIONS = ["Sales", "Support", "Operations", "HR", "Finance"];
const TYPE_OPTIONS = ["Chat Agent", "Voice Agent", "Workflow", "RPA", "Integrator"];
const USE_CASE_MAP: Record<string, string> = {
    Sales: "Sales (lead capture & booking)",
    Support: "Support (ticket deflection & triage)",
    Operations: "Operations (docs, data, finance)",
    HR: "Custom workflow",
    Finance: "Custom workflow",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function AgentCard({ agent, onRequest }: { agent: Agent; onRequest: (a: Agent) => void }) {
    return (
        <article className="ac-card">
            <h3 className="ac-name">{agent.name}</h3>
            <p className="ac-blurb">{agent.blurb}</p>
            <div className="ac-meta-row">
                <span className="ac-badge">{agent.category}</span>
                <span className="ac-badge">{agent.type}</span>
                {agent.stack.map((s) => (
                    <span key={s} className="ac-badge">{s}</span>
                ))}
            </div>
            <div className="ac-actions">
                <button className="ac-btn ac-primary" onClick={() => onRequest(agent)}>
                    Request this agent
                </button>
            </div>
        </article>
    );
}

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item${open ? " faq-item--open" : ""}`}>
            <button
                className="faq-q"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
            >
                {q}
                <span className="faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div className="faq-a">
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AIAgentsPage() {
    // Catalog state
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    const filtered = AGENTS.filter((a) => {
        const hay = [a.name, a.category, a.type, ...a.stack, a.blurb].join(" ").toLowerCase();
        return (
            (!search || hay.includes(search.toLowerCase())) &&
            (!category || a.category === category) &&
            (!type || a.type === type)
        );
    });

    // ROI calculator state
    const [hours, setHours] = useState(40);
    const [rate, setRate] = useState(45);
    const [coverage, setCoverage] = useState(50);

    const monthly = hours * 4.3 * rate * (coverage / 100);
    const payback = monthly > 0 ? 6000 / monthly : 0;
    const paybackStr = payback < 0.95 ? "~<1 month" : `~${payback.toFixed(1)} months`;

    // Form state
    const formRef = useRef<HTMLFormElement>(null);
    const [leadState, formAction, pending] = useActionState(submitAssessmentLeadWithState, {
        ok: false,
        message: "",
    });
    const submitted = leadState.ok;
    const [formUseCase, setFormUseCase] = useState("");
    const [formGoals, setFormGoals] = useState("");

    useEffect(() => {
        if (!leadState.message) return;

        trackEvent(leadState.ok ? "site_assessment_form_submitted" : "site_assessment_form_failed", {
            page: "/core-services/ai-agents",
            ctaLocation: "ai_agents_inline_form",
            serviceInterest: "ai-agents",
        });
    }, [leadState.message, leadState.ok]);

    const handleRequestAgent = useCallback((agent: Agent) => {
        setFormUseCase(USE_CASE_MAP[agent.category] ?? "Custom workflow");
        if (!formGoals) {
            setFormGoals(`Interested in: ${agent.name}. Success = measurable time saved and SLA improvements.`);
        }
        const form = document.getElementById("demo");
        if (form) {
            const offset = 20;
            const top = form.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }, [formGoals, setFormGoals, setFormUseCase]);

    const scrollToDemo = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById("demo");
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <>
            <style>{`
        /* ── Tokens ── */
        .ag { --ink:#0f1720; --muted:#6b7b8d; --accent:#1db993; --accent-hover:#169b78; --accent-ink:#179c79; --pill-bg:#e9f9f3; --card:#ffffff; --border:#E7EDF2; --radius:22px; display:block; }
        .ag *{ box-sizing:border-box; }
        .ag-wrap{ max-width:1280px; margin:0 auto; padding:0 18px; }

        /* ── Hero ── */
        .ag-hero{ background:#fff; color:var(--ink); padding:44px 0; text-align:center; }
        .ag-pill, .sv-pill, .q-pill, .faq-pill, .eyebrow {
          display:inline-block; background:var(--pill-bg); color:#169b78; padding:.4rem .7rem;
          border-radius:999px; font-weight:700; letter-spacing:.05em; font-size:.72rem;
          white-space:nowrap; margin-bottom:4px;
        }
        .ag-title{ margin:16px auto 12px; font-weight:800; line-height:1.08; letter-spacing:-.01em; font-size:32px; }
        .ag-sub{ margin:0 auto 24px; max-width:70ch; color:var(--muted); font-size:.98rem; }
        .ag-btn{
          display:inline-flex; align-items:center; gap:.55rem; background:var(--accent); color:#fff;
          text-decoration:none; padding:.8rem 1.2rem; border-radius:999px; font-weight:800;
          box-shadow:0 10px 26px rgba(29,185,147,.28); border:none; cursor:pointer;
        }
        .ag-btn:hover{ background:var(--accent-hover); }
        .ag-note{ margin:10px 0 0; color:var(--muted); font-size:.85rem; }
        @media(min-width:768px){ .ag-hero{ padding:64px 0; } .ag-title{ font-size:48px; } }
        @media(min-width:1200px){ .ag-title{ font-size:60px; } }

        /* ── KPIs ── */
        .ag-kpis{ background:#fff; padding:28px 0; }
        .kpi-rail{ display:flex; align-items:center; gap:28px; justify-content:center; text-align:center; flex-wrap:wrap; }
        .kpi{ flex:1; min-width:120px; }
        .kpi-num{ display:block; font-weight:800; font-size:clamp(1.25rem,3.6vw,1.9rem); color:var(--accent); }
        .kpi-label{ display:block; margin-top:8px; font-size:clamp(.9rem,2.1vw,1rem); color:var(--ink); }
        .kpi-div{ flex:0 0 auto; width:2px; height:46px; border-radius:2px; background:linear-gradient(180deg,transparent 0%,rgba(160,170,180,.9) 50%,transparent 100%); }
        .ag-partners-note{ margin:24px 0 16px; text-align:center; color:var(--muted); font-size:.92rem; }
        .ag-logos{ display:flex; flex-wrap:wrap; gap:18px 26px; align-items:center; justify-content:center; }
        .logo-chip{ color:#8da0b1; font-size:.95rem; padding:6px 10px; border:1px dashed #d7e1ea; border-radius:10px; background:#fff; min-width:86px; text-align:center; }

        /* ── Problem ── */
        .ag-problem{ background:#F0F0F0; color:var(--ink); padding:48px 0; text-align:center; }
        .ag-h2{ font-size:28px; line-height:1.15; letter-spacing:-.02em; margin:12px 0 8px; font-weight:800; }
        .ag-sub2{ color:var(--muted); margin:0 auto 24px; max-width:70ch; }
        .pr-grid{ display:grid; gap:16px; max-width:1100px; margin-inline:auto; }
        .ph{ border-radius:18px; overflow:hidden; background:#fff; }
        .ph img{ width:100%; height:auto; object-fit:contain; display:block; }
        .pr-card{ background:#fff; border:1px solid var(--border); border-radius:20px; padding:24px; text-align:left; }
        .pr-title{ margin:0 0 12px; font-size:1.05rem; font-weight:700; }
        .pr-list{ list-style:none; margin:0; padding:0; display:grid; gap:12px; }
        .pr-list li{ display:flex; align-items:flex-start; gap:12px; color:var(--ink); font-weight:500; font-size:.95rem; }
        .pr-list li::before{ content:"✓"; display:grid; place-items:center; flex:0 0 24px; width:24px; height:24px; border-radius:999px; background:var(--pill-bg); color:var(--accent); font-weight:900; font-size:.8rem; }
        .hint{ margin:1rem 0 0; color:var(--muted); font-size:.9rem; }
        @media(min-width:900px){ .pr-grid{ grid-template-columns:1fr 1fr; gap:22px; align-items:center; } }

        /* ── Catalog ── */
        .ag-catalog{ background:#fff; padding:56px 0; text-align:center; }
        .ac-panel{ background:#fff; border:1px solid var(--border); border-radius:18px; box-shadow:0 6px 18px rgba(15,23,32,.05); padding:16px; margin:18px auto; }
        .ac-search{ width:100%; padding:14px 16px; border:1px solid var(--border); border-radius:999px; background:#fff; font-size:1rem; outline:0; transition:border-color .15s,box-shadow .15s; }
        .ac-search:focus{ border-color:var(--accent); box-shadow:0 0 0 4px rgba(29,185,147,.14); }
        .ac-toolbar{ display:flex; align-items:center; justify-content:space-between; gap:12px 16px; flex-wrap:wrap; margin-top:12px; padding-top:12px; border-top:1px solid var(--border); }
        .ac-filters{ display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; }
        .ac-filter{ display:flex; align-items:center; gap:10px; }
        .ac-filter-label{ margin:0; font-weight:600; font-size:.9rem; color:#7a8a9a; }
        .ac-filter select{ padding:10px 14px; border:1px solid var(--border); border-radius:999px; background:#fff; font-size:.9rem; }
        .ac-count{ margin-left:auto; color:#7a8a9a; font-size:.9rem; white-space:nowrap; }
        .ac-grid{ display:grid; gap:16px; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); margin-top:16px; }
        .ac-card{ background:#fff; border:1px solid var(--border); border-radius:16px; padding:16px; box-shadow:0 3px 12px rgba(15,23,32,.04); display:grid; gap:8px; text-align:left; transition:transform .12s,box-shadow .12s,border-color .12s; }
        .ac-card:hover{ transform:translateY(-2px); box-shadow:0 10px 24px rgba(15,23,32,.08); border-color:#dfe7ee; }
        .ac-name{ margin:0; font-weight:800; font-size:1.05rem; }
        .ac-blurb{ margin:0; color:#5f6f81; line-height:1.45; font-size:.95rem; }
        .ac-meta-row{ display:flex; flex-wrap:wrap; gap:8px 10px; }
        .ac-badge{ display:inline-block; padding:.3rem .6rem; border-radius:999px; background:#eef7f3; color:#167f65; font-weight:700; font-size:.75rem; white-space:nowrap; }
        .ac-actions{ margin-top:6px; }
        .ac-btn.ac-primary{ display:inline-flex; align-items:center; gap:8px; padding:8px 14px; font-size:.9rem; font-weight:800; border-radius:12px; border:1px solid var(--accent); background:linear-gradient(180deg,#1db993,#17a882); color:#fff; cursor:pointer; }
        .ac-btn.ac-primary:hover{ filter:brightness(.98); }
        .ac-note{ text-align:center; margin:18px auto 0; max-width:70ch; color:var(--muted); font-size:.9rem; }
        .ac-note a{ color:var(--accent-ink); font-weight:700; text-decoration:underline; }
        .ac-empty{ padding:24px; text-align:center; color:var(--muted); }
        @media(max-width:720px){ .ac-grid{ grid-template-columns:1fr; } }

        /* ── ROI ── */
        .ag-roi{ background:#fff; padding:44px 0; text-align:center; }
        .roi-grid{ display:grid; gap:16px; max-width:760px; margin:10px auto 24px; text-align:left; }
        .roi-item{ display:grid; gap:6px; background:#fff; border:1px solid var(--border); border-radius:16px; padding:14px; }
        .roi-label{ font-weight:600; font-size:.95rem; }
        .roi-item input[type=range]{ width:100%; accent-color:var(--accent); }
        .roi-out{ font-weight:700; color:var(--accent); font-size:1rem; }
        .roi-result{ display:grid; gap:12px; grid-template-columns:1fr; max-width:760px; margin:0 auto; }
        .rr-card{ background:linear-gradient(180deg,#fbfdfc 0%,#f5fbf8 100%); border:1px solid var(--border); border-radius:16px; padding:20px; text-align:center; }
        .rr-kicker{ display:block; color:#167f65; font-weight:700; margin-bottom:6px; font-size:.9rem; }
        .rr-value{ font-size:32px; font-weight:800; color:var(--ink); }
        .rr-foot{ margin:8px 0 0; color:var(--muted); font-size:.85rem; }
        @media(min-width:900px){ .roi-result{ grid-template-columns:1fr 1fr; } .rr-value{ font-size:38px; } }

        /* ── Steps ── */
        .ag-steps{ background:#fff; padding:44px 0; text-align:center; }
        .sv-grid{ display:grid; gap:14px; text-align:left; margin-top:20px; }
        .sv-card{ background:linear-gradient(180deg,#fbfdfc 0%,#f5fbf8 100%); border:1px solid var(--border); border-radius:24px; padding:22px 20px; }
        .sv-num{ font-size:42px; line-height:1; font-weight:800; letter-spacing:-.02em; margin-bottom:8px; color:var(--accent); }
        .sv-h3{ margin:0 0 6px; font-size:1.12rem; font-weight:700; }
        .sv-text{ margin:0; color:var(--muted); }
        @media(min-width:900px){ .sv-grid{ grid-template-columns:1fr 1fr 1fr; gap:18px; } .sv-num{ font-size:56px; } }

        /* ── Qualify ── */
        .ag-qualify{ background:#fff; padding:48px 0; text-align:center; }
        .qual-form{ max-width:960px; margin:16px auto 0; text-align:left; }
        .q-grid{ display:grid; gap:16px; }
        .q-field{ display:grid; gap:6px; }
        .q-field--full{ grid-column:1/-1; }
        .q-label{ font-weight:600; font-size:.95rem; }
        .q-field input, .q-field select, .q-field textarea{
          width:100%; padding:12px; border-radius:12px; border:1px solid var(--border); background:#fff;
          color:var(--ink); font-size:1rem; outline:0; transition:border-color .15s,box-shadow .15s;
        }
        .q-field input:focus,.q-field select:focus,.q-field textarea:focus{ border-color:var(--accent); box-shadow:0 0 0 4px rgba(29,185,147,.14); }
        .q-actions{ margin-top:24px; }
        .q-btn{ display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; font-weight:800; font-size:1rem; border:none; cursor:pointer; white-space:nowrap; }
        .q-btn svg{ width:18px; height:18px; flex-shrink:0; }
        .q-primary{ background:var(--accent); color:#fff; box-shadow:0 8px 24px rgba(29,185,147,.22); }
        .q-primary:hover:not(:disabled){ background:var(--accent-hover); }
        .q-primary:disabled{ opacity:.6; cursor:not-allowed; }
        .q-note{ margin:1rem 0 0; color:var(--muted); font-size:.88rem; }
        .q-success{ padding:24px; border:1px solid var(--accent); border-radius:16px; background:var(--pill-bg); color:#167f65; font-weight:700; text-align:center; margin-top:16px; }
        @media(min-width:780px){ .q-grid{ grid-template-columns:1fr 1fr; gap:18px; } }

        /* ── FAQ ── */
        .ag-faq{ background:#fff; padding:44px 0; text-align:center; }
        .faq-list{ max-width:880px; margin:20px auto 0; display:grid; gap:12px; text-align:left; }
        .faq-item{ border:1px solid var(--border); border-radius:14px; background:#f7faf9; }
        .faq-item--open{ background:#fff; }
        .faq-q{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:10px; background:transparent; border:none; border-radius:14px; padding:14px 16px; font:inherit; text-align:left; font-weight:600; cursor:pointer; color:var(--ink); font-size:1rem; }
        .faq-icon{ font-size:1.2rem; color:var(--accent); flex-shrink:0; }
        .faq-a{ padding:4px 16px 14px; border-top:1px solid var(--border); }
        .faq-a p{ margin:8px 0 0; color:var(--muted); }

        /* ── Final CTA ── */
        .ag-cta{ background:#fff; padding:48px 0; text-align:center; }
        .cf-brand{ display:inline-flex; align-items:center; gap:8px; padding:.38rem .70rem; border-radius:999px; background:var(--pill-bg); color:#167f65; font-weight:700; font-size:.82rem; margin:0 auto 12px; }
        .cf-title{ margin:0 0 28px; font-weight:800; letter-spacing:-.01em; line-height:1.1; font-size:28px; }
        .cf-actions{ display:flex; flex-wrap:wrap; gap:16px; justify-content:center; align-items:flex-start; }
        .cf-col{ display:flex; flex-direction:column; align-items:center; gap:6px; }
        .cf-btn{ display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; font-weight:800; text-decoration:none; white-space:nowrap; font-size:1rem; }
        .cf-btn svg{ width:18px; height:18px; }
        .cf-primary{ background:var(--accent); color:#fff; box-shadow:0 8px 24px rgba(29,185,147,.22); }
        .cf-primary:hover{ background:var(--accent-hover); }
        .cf-secondary{ background:#121416; color:#fff; box-shadow:0 8px 24px rgba(0,0,0,.18); }
        .cf-secondary:hover{ background:#0f1113; }
        .cf-note{ margin:0; color:var(--muted); font-size:.9rem; }
        @media(min-width:780px){ .cf-title{ font-size:44px; margin-bottom:32px; } }
        @media(min-width:1200px){ .cf-title{ font-size:50px; } }

        /* ── Spinner ── */
        @keyframes spin { to { transform:rotate(360deg); } }
        .spinner{ animation:spin 1s linear infinite; }
      `}</style>

            <div className="ag">

                {/* ═══ HERO ══════════════════════════════════════════════════════ */}
                <section className="ag-hero" aria-labelledby="ag-hero-title">
                    <div className="ag-wrap">
                        <span className="ag-pill">Trusted by 50+ companies</span>
                        <h1 id="ag-hero-title" className="ag-title">
                            Get more done without adding<br /> headcount with AI Agents
                        </h1>
                        <p className="ag-sub">
                            We design and integrate quick-ROI agents (Email, Chat, Voice, Follow-ups) that plug into your tools,
                            handle repetitive work, and make more sales — without extra hiring.
                        </p>
                        <a href="#demo" className="ag-btn" onClick={scrollToDemo} aria-label="Book a demo">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" />
                            </svg>
                            Get Free Assessment
                        </a>
                        <p className="ag-note">35+ booked this month</p>
                    </div>
                </section>

                {/* ═══ KPIs ══════════════════════════════════════════════════════ */}
                <section className="ag-kpis" aria-label="Key results">
                    <div className="ag-wrap">
                        <div className="kpi-rail">
                            <div className="kpi">
                                <strong className="kpi-num">30–70%</strong>
                                <span className="kpi-label">less time on admin</span>
                            </div>
                            <span className="kpi-div" aria-hidden="true" />
                            <div className="kpi">
                                <strong className="kpi-num">2–5×</strong>
                                <span className="kpi-label">more work done with the same team</span>
                            </div>
                            <span className="kpi-div" aria-hidden="true" />
                            <div className="kpi">
                                <strong className="kpi-num">60–90%</strong>
                                <span className="kpi-label">faster replies to customers</span>
                            </div>
                        </div>
                        <p className="ag-partners-note">We implement with best-in-class partners and your existing stack</p>
                        <div className="ag-logos" aria-label="Partner technologies">
                            {["ChatGPT", "Claude", "Microsoft", "AWS", "Salesforce", "HubSpot", "Zapier", "Make"].map((l) => (
                                <span key={l} className="logo-chip">{l}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ PROBLEM / SOLUTION ════════════════════════════════════════ */}
                <section className="ag-problem" aria-labelledby="ag-problem-title">
                    <div className="ag-wrap">
                        <span className="eyebrow">Automation that actually ships</span>
                        <h2 id="ag-problem-title" className="ag-h2">Your team is drowning in admin. Let AI Agents handle it.</h2>
                        <p className="ag-sub2">
                            Too much of your team&apos;s time is spent on repetitive tasks — updating spreadsheets, replying to the same
                            questions, entering data, and chasing follow-ups.<br />
                            Our AI Agents take care of that automatically, so your people can focus on sales, customers, and growth.
                        </p>
                        <div className="pr-grid">
                            <div className="pr-visual">
                                <div className="ph">
                                    <Image
                                        src="/images/services/AI-Agent-Team-03.png"
                                        alt="Systems connected by AI agents"
                                        width={760}
                                        height={480}
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                    />
                                </div>
                            </div>
                            <div className="pr-card">
                                <h3 className="pr-title">Where Agents Help Most</h3>
                                <ul className="pr-list">
                                    {[
                                        "Capture and qualify leads automatically — never miss an opportunity",
                                        "Instantly respond to customer questions and support tickets",
                                        "Update your CRM, send emails, and log data without human effort",
                                        "Generate invoices, reports, and proposals in seconds",
                                        "Keep all your tools connected and in sync — 24/7",
                                    ].map((item) => <li key={item}>{item}</li>)}
                                </ul>
                                <p className="hint">Fully autonomous or <strong>human-in-the-loop</strong> for sensitive steps.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ AGENT CATALOG ═════════════════════════════════════════════ */}
                <section className="ag-catalog" id="agent-use-cases" aria-labelledby="ag-catalog-title">
                    <div className="ag-wrap">
                        <span className="eyebrow">Popular Agent Examples</span>
                        <h2 id="ag-catalog-title" className="ag-h2">Find your agent. We&apos;ll build it to fit.</h2>

                        <div className="ac-panel">
                            {/* Search */}
                            <input
                                className="ac-search"
                                type="search"
                                placeholder="Search by role, task, or tool… (e.g., HubSpot, invoices, CS)"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                aria-label="Search agents"
                            />

                            {/* Toolbar: filters + count */}
                            <div className="ac-toolbar">
                                <div className="ac-filters">
                                    <label className="ac-filter">
                                        <span className="ac-filter-label">Category</span>
                                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                            <option value="">All</option>
                                            {CATEGORY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                    <label className="ac-filter">
                                        <span className="ac-filter-label">Type</span>
                                        <select value={type} onChange={(e) => setType(e.target.value)}>
                                            <option value="">All</option>
                                            {TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                </div>
                                <span className="ac-count" aria-live="polite">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
                            </div>

                            {/* Grid */}
                            <div className="ac-grid">
                                {filtered.length > 0
                                    ? filtered.map((a) => <AgentCard key={a.name} agent={a} onRequest={handleRequestAgent} />)
                                    : <div className="ac-empty">No results. Try a different term or filter.</div>
                                }
                            </div>
                        </div>

                        <p className="ac-note">
                            Can&apos;t find the exact fit?{" "}
                            <a href="#demo" onClick={scrollToDemo}>Tell us your workflow</a> — we&apos;ll tailor an agent for it.
                        </p>
                    </div>
                </section>

                {/* ═══ ROI CALCULATOR ════════════════════════════════════════════ */}
                <section className="ag-roi" aria-labelledby="ag-roi-title">
                    <div className="ag-wrap">
                        <span className="eyebrow">Estimate your ROI</span>
                        <h2 id="ag-roi-title" className="ag-h2">What could an AI Agent save you each month?</h2>
                        <p className="ag-sub2">Adjust the sliders to see conservative savings. Share this with your team to align on value.</p>

                        <div className="roi-grid">
                            <label className="roi-item">
                                <span className="roi-label">Repetitive hours per week</span>
                                <input type="range" min={5} max={200} step={5} value={hours} onChange={(e) => setHours(Number(e.target.value))} aria-label="Repetitive hours per week" />
                                <span className="roi-out">{hours} hrs</span>
                            </label>
                            <label className="roi-item">
                                <span className="roi-label">Blended hourly cost (USD)</span>
                                <input type="range" min={15} max={150} step={5} value={rate} onChange={(e) => setRate(Number(e.target.value))} aria-label="Blended hourly cost" />
                                <span className="roi-out">${rate}</span>
                            </label>
                            <label className="roi-item">
                                <span className="roi-label">Automation coverage</span>
                                <input type="range" min={10} max={90} step={5} value={coverage} onChange={(e) => setCoverage(Number(e.target.value))} aria-label="Automation coverage percent" />
                                <span className="roi-out">{coverage}%</span>
                            </label>
                        </div>

                        <div className="roi-result" role="status" aria-live="polite">
                            <div className="rr-card">
                                <span className="rr-kicker">Projected monthly savings</span>
                                <div className="rr-value">{monthly.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}</div>
                                <p className="rr-foot">Based on hours × rate × coverage × 4.3 weeks.</p>
                            </div>
                            <div className="rr-card">
                                <span className="rr-kicker">Payback period (est.)</span>
                                <div className="rr-value">{paybackStr}</div>
                                <p className="rr-foot">Assumes a mid-tier build &amp; support plan.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ STEPS ═════════════════════════════════════════════════════ */}
                <section className="ag-steps" aria-labelledby="ag-steps-title">
                    <div className="ag-wrap">
                        <span className="sv-pill">How it works</span>
                        <h2 id="ag-steps-title" className="ag-h2">From pilot to scale in 3 steps</h2>
                        <div className="sv-grid">
                            {[
                                { num: "1", title: "Discover", text: "We map workflows, quantify ROI, and select the best stack for your use case." },
                                { num: "2", title: "Design", text: "We configure agent behavior, data access, guardrails, and integrations." },
                                { num: "3", title: "Deploy & Improve", text: "Pilot, measure, and iterate. Human-in-the-loop where needed." },
                            ].map((s) => (
                                <article key={s.num} className="sv-card">
                                    <div className="sv-num">{s.num}</div>
                                    <h3 className="sv-h3">{s.title}</h3>
                                    <p className="sv-text">{s.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ LEAD QUAL FORM ════════════════════════════════════════════ */}
                <section className="ag-qualify" aria-labelledby="ag-qual-title">
                    <div className="ag-wrap">
                        <span className="q-pill">Get a tailored plan</span>
                        <h2 id="ag-qual-title" className="ag-h2">Tell us about your workflow — we&apos;ll propose the right agent</h2>

                        {submitted ? (
                            <div className="q-success" role="status">
                                ✓ {leadState.message}
                            </div>
                        ) : (
                            <form id="demo" ref={formRef} className="qual-form" action={formAction} noValidate>
                                <input type="hidden" name="sourcePage" value="/core-services/ai-agents" />
                                <input type="hidden" name="ctaLocation" value="ai_agents_inline_form" />
                                <input type="hidden" name="serviceInterest" value="ai-agents" />
                                <AttributionFields />
                                <div className="q-grid">
                                    <label className="q-field">
                                        <span className="q-label">Work email</span>
                                        <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
                                    </label>
                                    <label className="q-field">
                                        <span className="q-label">Company</span>
                                        <input type="text" name="company" required placeholder="Company Inc." />
                                    </label>
                                    <label className="q-field">
                                        <span className="q-label">Team size</span>
                                        <select name="team_size" required defaultValue="">
                                            <option value="" disabled>Select</option>
                                            {["1–10", "11–50", "51–200", "200+"].map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                    <label className="q-field">
                                        <span className="q-label">Primary use case</span>
                                        <select name="use_case" required value={formUseCase} onChange={(e) => setFormUseCase(e.target.value)}>
                                            <option value="" disabled>Select</option>
                                            {["Sales (lead capture & booking)", "Support (ticket deflection & triage)", "Operations (docs, data, finance)", "Custom workflow"].map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                    <label className="q-field">
                                        <span className="q-label">Monthly budget (USD)</span>
                                        <select name="budget" required defaultValue="">
                                            <option value="" disabled>Select</option>
                                            {["$1k–$3k", "$3k–$7k", "$7k–$15k", "$15k+"].map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                    <label className="q-field">
                                        <span className="q-label">Timeline</span>
                                        <select name="timeline" required defaultValue="">
                                            <option value="" disabled>Select</option>
                                            {["ASAP (this month)", "1–2 months", "Quarter", "Exploring"].map((o) => <option key={o}>{o}</option>)}
                                        </select>
                                    </label>
                                    <label className="q-field q-field--full">
                                        <span className="q-label">What does success look like?</span>
                                        <textarea
                                            name="workflowPain"
                                            rows={4}
                                            placeholder="e.g., 50% fewer tickets, instant lead booking, weekly invoice automation…"
                                            value={formGoals}
                                            onChange={(e) => setFormGoals(e.target.value)}
                                        />
                                    </label>
                                </div>
                                {leadState.message && !leadState.ok ? <p className="q-note" role="alert">{leadState.message}</p> : null}
                                <div className="q-actions">
                                    <button
                                        className="q-btn q-primary"
                                        type="submit"
                                        disabled={pending}
                                        onClick={() => trackEvent("site_assessment_cta_clicked", {
                                            page: "/core-services/ai-agents",
                                            ctaLocation: "ai_agents_inline_form",
                                            serviceInterest: "ai-agents",
                                        })}
                                    >
                                        {pending ? (
                                            <>
                                                <svg className="spinner" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" />
                                                </svg>
                                                Submitting…
                                            </>
                                        ) : (
                                            <>
                                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7V3h2v4H8Zm4 0V3h2v4h-2Zm4 0V3h2v4h-2ZM4 21V9h16v12H4Zm2-2h12V11H6v8Z" fill="currentColor" /></svg>
                                                Request My Assessment
                                            </>
                                        )}
                                    </button>
                                </div>
                                <p className="q-note">By submitting, you agree we may contact you about this request. We never sell data.</p>
                            </form>
                        )}
                    </div>
                </section>

                {/* ═══ FAQ ═══════════════════════════════════════════════════════ */}
                <section className="ag-faq" aria-labelledby="faq-title">
                    <div className="ag-wrap">
                        <span className="faq-pill">FAQ</span>
                        <h2 id="faq-title" className="ag-h2">Everything you need to know</h2>
                        <p className="ag-sub2">From safety to integrations to pricing.</p>
                        <div className="faq-list">
                            <FaqItem q="Can agents run fully on their own?" a="Yes. You can choose autonomous execution or require human approval for specific steps (human-in-the-loop)." />
                            <FaqItem q="Do you integrate with our tools?" a="We connect to your CRM, helpdesk, calendar, data sources, and internal APIs for seamless workflows." />
                            <FaqItem q="How fast can we launch?" a="Most pilots launch in 2–3 weeks depending on scope and integrations." />
                            <FaqItem q="How do you keep responses safe?" a="We implement guardrails, role permissions, audit logs, and fallback to humans when confidence is low." />
                        </div>
                    </div>
                </section>

                {/* ═══ FINAL CTA ═════════════════════════════════════════════════ */}
                <section className="ag-cta" aria-labelledby="ag-cta-title">
                    <div className="ag-wrap">
                        <span className="cf-brand">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#1db993" /></svg>
                            Automate4U Agents
                        </span>
                        <h2 id="ag-cta-title" className="cf-title">Ready to ship your first AI Agent?</h2>
                        <div className="cf-actions">
                            <div className="cf-col">
                                <a className="cf-btn cf-primary" href="#demo" onClick={scrollToDemo}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" /></svg>
                                    Get Free Assessment
                                </a>
                                <p className="cf-note">35+ booked this month</p>
                            </div>
                            <div className="cf-col">
                                <a className="cf-btn cf-secondary" href="#agent-use-cases">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
                                    See Examples
                                </a>
                                <p className="cf-note">Show your team what&apos;s possible</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
