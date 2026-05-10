"use client";

import React, { useActionState, useState } from "react";
import Image from "next/image";
import { submitAssessmentLeadWithState } from "@/app/actions/assessment";
import AttributionFields from "@/components/AttributionFields";
import { trackEvent } from "@/lib/analytics";

// ─── Sub-components ──────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`ch-faq-item${open ? " ch-faq-item--open" : ""}`}>
            <button className="ch-faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                {q}
                <span className="ch-faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            {open && (
                <div className="ch-faq-a">
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [state, formAction, pending] = useActionState(submitAssessmentLeadWithState, {
        ok: false,
        message: "",
    });
    const submitted = state.ok;

    React.useEffect(() => {
        if (!state.message) return;

        trackEvent(state.ok ? "site_assessment_form_submitted" : "site_assessment_form_failed", {
            page: "/core-services/ai-chat",
            ctaLocation: "ai_chat_modal",
            serviceInterest: "ai-chat",
        });
    }, [state.message, state.ok]);

    if (!open) return null;
    return (
        <div className="ch-popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="ch-popup-container">
                <div className="ch-popup-header">
                    <h3 id="popup-title">Request Your AI Chat Assessment</h3>
                    <button onClick={onClose} className="ch-popup-close" aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className="ch-popup-content">
                    <div className="ch-form-container">
                        {submitted ? (
                            <div className="ch-form-success" role="status">
                                <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e9f9f3" /><path d="M8 12l3 3 5-5" stroke="#1db993" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                                <h4>We&apos;ll review your workflow within 1 business day.</h4>
                                <p>{state.message}</p>
                                <button className="ch-form-close-btn" onClick={onClose}>Close</button>
                            </div>
                        ) : (
                            <>
                                <p className="ch-form-intro">
                                    Tell us where chat and messaging slow your team down. We&apos;ll assess the workflow, likely savings, guardrails, and the best next step.
                                </p>
                                <form className="ch-native-form" action={formAction} noValidate>
                                    <input type="hidden" name="sourcePage" value="/core-services/ai-chat" />
                                    <input type="hidden" name="ctaLocation" value="ai_chat_modal" />
                                    <input type="hidden" name="serviceInterest" value="ai-chat" />
                                    <AttributionFields />
                                    <div className="ch-form-grid">
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Work email *</span>
                                            <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
                                        </label>
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Company *</span>
                                            <input type="text" name="company" required placeholder="Company Inc." />
                                        </label>
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Team size</span>
                                            <select name="team_size" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["1–10", "11–50", "51–200", "200+"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Current channels</span>
                                            <select name="channels" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["Website only", "Website + SMS", "Website + WhatsApp", "Multiple channels"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Monthly budget (USD)</span>
                                            <select name="budget" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["Under $300", "$300–$399", "$400–$800", "$800+"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="ch-form-field">
                                            <span className="ch-form-label">Timeline</span>
                                            <select name="timeline" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["ASAP (this month)", "1–2 months", "Quarter", "Exploring"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="ch-form-field ch-form-field--full">
                                            <span className="ch-form-label">What does success look like?</span>
                                            <textarea name="workflowPain" rows={3} placeholder="e.g., faster answers, fewer support tickets, better handoffs, more booked leads..." />
                                        </label>
                                    </div>
                                    {state.message && !state.ok ? <p className="ch-form-note" role="alert">{state.message}</p> : null}
                                    <div className="ch-form-actions">
                                        <button
                                            type="submit"
                                            className="ch-form-submit"
                                            disabled={pending}
                                            onClick={() => trackEvent("site_assessment_cta_clicked", {
                                                page: "/core-services/ai-chat",
                                                ctaLocation: "ai_chat_modal",
                                                serviceInterest: "ai-chat",
                                            })}
                                        >
                                            {pending ? (
                                                <><svg className="ch-spin" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" /></svg> Submitting…</>
                                            ) : (
                                                <>Request My Assessment</>
                                            )}
                                        </button>
                                    </div>
                                    <p className="ch-form-note">We never sell your data. By submitting you agree we may contact you about this request.</p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AIChatPage() {
    const [modalOpen, setModalOpen] = useState(false);

    // ROI calculator state
    const [volume, setVolume] = useState(1500);
    const [deflect, setDeflect] = useState(40);
    const [cost, setCost] = useState(12);

    const monthlySavings = volume * (deflect / 100) * cost;

    return (
        <>
            <style>{`
        /* ── Tokens ── */
        .ch { --ink:#0f1720; --muted:#6b7b8d; --accent:#1db993; --accent-hover:#169b78; --accent-ink:#179c79; --pill-bg:#e9f9f3; --card:#ffffff; --border:#E7EDF2; }
        .ch * { box-sizing:border-box; }
        .ch-wrap { max-width:1280px; margin:0 auto; padding:0 18px; }

        /* ── Pills / eyebrows ── */
        .ch-pill, .ch-sv-pill, .ch-eyebrow {
          display:inline-block; background:var(--pill-bg); color:#169b78;
          padding:.4rem .7rem; border-radius:999px; font-weight:700;
          letter-spacing:.05em; font-size:.72rem; white-space:nowrap;
        }

        /* ── Hero ── */
        .ch-hero {
          background-image:linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),
            url('/images/services/chatbot.jpg');
          background-size:cover; background-position:center;
          color:#fff; padding:56px 0; text-align:center;
        }
        .ch-title { margin:12px auto 8px; font-weight:800; line-height:1.08; letter-spacing:-.01em; font-size:32px; }
        .ch-sub { margin:0 auto 18px; max-width:70ch; color:rgba(255,255,255,.9); font-size:.98rem; }
        .ch-hero-btn {
          display:inline-flex; align-items:center; gap:.55rem;
          background:var(--accent); color:#fff; border:none; cursor:pointer;
          padding:.8rem 1.2rem; border-radius:999px; font-weight:800; font-size:1rem;
          box-shadow:0 10px 26px rgba(29,185,147,.28);
        }
        .ch-hero-btn:hover { background:var(--accent-hover); }
        @media(min-width:768px){ .ch-hero{ padding:80px 0; } .ch-title{ font-size:48px; } }
        @media(min-width:1200px){ .ch-title{ font-size:60px; } }

        /* ── Intro text ── */
        .ch-intro { background:#fff; padding:40px 0; text-align:center; }
        .ch-intro p { max-width:80ch; margin:0 auto 1em; text-align:left; line-height:1.6; color:var(--ink); font-size:1.05rem; }

        /* ── Steps ── */
        .ch-steps { background:#fff; padding:48px 0; }
        .ch-h2 { font-size:clamp(26px,4vw,42px); line-height:1.15; letter-spacing:-.02em; margin:10px 0 8px; font-weight:800; text-align:center; }
        .ch-steps-grid { display:grid; gap:20px; margin:24px auto 0; max-width:1100px; }
        .ch-step-card { background:#fff; border:1px solid var(--border); border-radius:16px; overflow:hidden; display:flex; flex-direction:column; }
        .ch-step-img { width:100%; height:180px; object-fit:cover; display:block; }
        .ch-step-body { padding:20px; flex:1; }
        .ch-step-h3 { margin:0 0 8px; font-size:1.1rem; font-weight:700; color:var(--ink); }
        .ch-step-text { margin:0; font-size:.9rem; color:var(--muted); line-height:1.55; }
        @media(min-width:900px){ .ch-steps-grid{ grid-template-columns:repeat(3,1fr); } }

        /* ── Problem / Demo ── */
        .ch-demo { background:#f8fafc; padding:48px 0; text-align:center; }
        .ch-demo-grid { display:grid; gap:clamp(16px,2vw,32px); max-width:1200px; margin:24px auto 0; align-items:start; }
        .ch-iframe-label { margin:0 0 12px; font-size:1.05rem; font-weight:600; color:var(--ink); text-align:center; }
        .ch-iframe-wrap { position:relative; height:550px; overflow:hidden; border:2px solid rgba(23,156,121,.3); border-radius:12px; box-shadow:0 0 20px rgba(23,156,121,.15); }
        .ch-iframe-wrap iframe { width:100%; height:580px; border:none; border-radius:12px; }
        .ch-demo-card { background:#fff; border-radius:16px; padding:28px; box-shadow:0 8px 24px rgba(15,23,42,.06); text-align:left; }
        .ch-demo-card-title { margin:0 0 10px; font-size:1.1rem; font-weight:700; }
        .ch-check-list { list-style:none; margin:0; padding:0; display:grid; gap:10px; }
        .ch-check-list li { display:flex; align-items:flex-start; gap:12px; color:var(--ink); font-weight:500; font-size:.95rem; }
        .ch-check-list li::before {
          content:""; flex:0 0 20px; width:20px; height:20px; margin-top:2px;
          background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231db993" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>');
          background-size:contain; background-repeat:no-repeat;
        }
        .ch-demo-cta { margin-top:28px; }
        .ch-cta-btn {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--accent); color:#fff; border:none; cursor:pointer;
          padding:12px 20px; border-radius:999px; font-weight:800; font-size:1rem;
          box-shadow:0 8px 24px rgba(29,185,147,.22);
        }
        .ch-cta-btn:hover { background:var(--accent-hover); }
        @media(min-width:900px){ .ch-demo-grid{ grid-template-columns:1fr 1fr; } }

        /* ── ROI ── */
        .ch-roi { background:#fff; padding:48px 0; text-align:center; }
        .ch-sub2 { color:var(--muted); margin:0 auto 18px; max-width:70ch; }
        .ch-roi-card { background:#fff; border-radius:16px; padding:28px; box-shadow:0 8px 24px rgba(15,23,42,.06); margin:24px auto 0; max-width:900px; }
        .ch-roi-inner { display:grid; gap:24px; align-items:center; }
        .ch-roi-form { display:grid; gap:10px; }
        .ch-roi-item { display:grid; gap:4px; background:#fff; border:1px solid #eef3f6; border-radius:8px; padding:12px; text-align:left; }
        .ch-roi-label { font-weight:600; font-size:.9rem; color:var(--ink); }
        .ch-roi-item input[type=range] { width:100%; accent-color:var(--accent); }
        .ch-roi-out { font-weight:700; color:var(--accent); }
        .ch-roi-result { background:linear-gradient(180deg,#fbfdfc,#f5fbf8); border:2px solid rgba(23,156,121,.3); border-radius:12px; box-shadow:0 0 20px rgba(23,156,121,.15); padding:20px; text-align:center; }
        .ch-rr-kicker { display:block; color:#167f65; font-weight:600; font-size:.85rem; margin-bottom:4px; }
        .ch-rr-value { font-size:2rem; font-weight:800; color:var(--ink); }
        @media(min-width:900px){ .ch-roi-inner{ grid-template-columns:2fr 1fr; } .ch-rr-value{ font-size:2.4rem; } }

        /* ── Pricing ── */
        .ch-pricing { background:#fff; padding:64px 0 48px; text-align:center; }
        .ch-pricing-head { max-width:720px; margin:0 auto 40px; }
        .ch-pricing-head h2 { font-size:clamp(28px,4vw,42px); font-weight:800; margin:0 0 10px; }
        .ch-pricing-head p { color:var(--muted); font-size:1rem; line-height:1.6; margin:0; }
        .ch-cards { max-width:985px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:28px; text-align:left; }
        .ch-pcard { background:var(--card); border-radius:18px; box-shadow:0 10px 25px rgba(15,23,42,.06); padding:36px 28px 28px; display:flex; flex-direction:column; border:1px solid rgba(0,0,0,.04); }
        .ch-pcard--premium { background:linear-gradient(180deg,rgba(29,185,147,.08),rgba(29,185,147,.02)),var(--card); border:1px solid rgba(29,185,147,.18); }
        .ch-pcard-title { font-size:22px; font-weight:800; margin:0 0 16px; }
        .ch-pcard-sub { color:var(--muted); font-size:.92rem; margin:0 0 14px; }
        .ch-pcard-sub strong { color:var(--ink); }
        .ch-feat-list { list-style:none; margin:0 0 24px; padding:0; display:grid; gap:10px; font-size:.92rem; }
        .ch-feat-list li { display:grid; grid-template-columns:18px 1fr; align-items:start; gap:10px; color:var(--ink); }
        .ch-feat-icon--check {
          width:16px; height:16px; display:inline-block; margin-top:2px;
          background:center/contain no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10"><path d="M4.3 9.5c-.23 0-.45-.09-.62-.26L.46 6.02a.88.88 0 0 1 0-1.24.88.88 0 0 1 1.24 0l2.6 2.6L10.3 1.4a.88.88 0 0 1 1.24 0 .88.88 0 0 1 0 1.24L4.92 9.24c-.17.17-.39.26-.62.26Z" fill="%231db993"/></svg>');
        }
        .ch-feat-icon--plus {
          width:16px; height:16px; display:inline-block; margin-top:2px;
          background:center/contain no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="M10.8 6.9H1.2a.9.9 0 1 1 0-1.8h9.6a.9.9 0 1 1 0 1.8Z" fill="%23169b78"/><path d="M6.9 10.8V1.2a.9.9 0 1 0-1.8 0v9.6a.9.9 0 1 0 1.8 0Z" fill="%23169b78"/></svg>');
        }
        .ch-price-footer { margin-top:auto; border-top:1px solid rgba(0,0,0,.06); padding-top:16px; text-align:center; }
        .ch-price-note { color:var(--muted); font-size:.82rem; margin:0 0 4px; }
        .ch-price-val { font-size:clamp(28px,4vw,38px); font-weight:800; line-height:1; margin:4px 0; }
        .ch-price-per { color:var(--muted); font-size:.82rem; margin:0 0 12px; }
        .ch-price-btn {
          display:inline-block; background:var(--accent); color:#fff; border:none; cursor:pointer;
          padding:11px 20px; border-radius:12px; font-weight:800; font-size:.95rem;
          box-shadow:0 8px 18px rgba(29,185,147,.22); transition:transform .1s,background .15s;
        }
        .ch-price-btn:hover { background:var(--accent-hover); transform:translateY(-1px); }
        @media(max-width:880px){ .ch-cards{ grid-template-columns:1fr; } }

        /* ── FAQ ── */
        .ch-faq { background:#fff; padding:48px 0; text-align:center; }
        .ch-faq-list { max-width:880px; margin:20px auto 0; display:grid; gap:12px; text-align:left; }
        .ch-faq-item { border:1px solid var(--border); border-radius:14px; background:#f7faf9; }
        .ch-faq-item--open { background:#fff; }
        .ch-faq-q { width:100%; display:flex; align-items:center; justify-content:space-between; gap:10px; background:transparent; border:none; border-radius:14px; padding:14px 16px; font:inherit; text-align:left; font-weight:600; cursor:pointer; color:var(--ink); font-size:1rem; }
        .ch-faq-icon { font-size:1.2rem; color:var(--accent); flex-shrink:0; }
        .ch-faq-a { padding:4px 16px 14px; border-top:1px solid var(--border); }
        .ch-faq-a p { margin:8px 0 0; color:var(--muted); }

        /* ── Modal ── */
        .ch-popup-overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); backdrop-filter:blur(4px); display:flex; justify-content:flex-end; align-items:center; z-index:9999; }
        .ch-popup-container { width:min(800px,100%); height:85vh; background:#fff; border-radius:16px 0 0 16px; box-shadow:-10px 0 30px rgba(0,0,0,.2); display:flex; flex-direction:column; animation:slideIn .3s ease-out; }
        @keyframes slideIn { from{ transform:translateX(100%); } to{ transform:translateX(0); } }
        .ch-popup-header { display:flex; justify-content:space-between; align-items:center; padding:20px; border-bottom:1px solid #eef3f6; }
        .ch-popup-header h3 { margin:0; font-size:1.2rem; font-weight:800; color:var(--ink); }
        .ch-popup-close { background:none; border:none; cursor:pointer; padding:8px; border-radius:8px; color:var(--muted); }
        .ch-popup-close:hover { background:#f5f5f5; color:var(--ink); }
        .ch-popup-close svg { width:20px; height:20px; display:block; }
        .ch-popup-content { flex:1; overflow:hidden; }
        .ch-form-container { padding:20px; height:100%; overflow-y:auto; }
        .ch-form-intro { color:var(--muted); margin:0 0 16px; font-size:.93rem; line-height:1.5; text-align:center; }
        /* Native form styles */
        .ch-native-form { display:flex; flex-direction:column; gap:0; }
        .ch-form-grid { display:grid; gap:14px; }
        .ch-form-field { display:grid; gap:5px; text-align:left; }
        .ch-form-field--full { grid-column:1/-1; }
        .ch-form-label { font-weight:600; font-size:.88rem; color:var(--ink); }
        .ch-form-field input, .ch-form-field select, .ch-form-field textarea {
          width:100%; padding:10px 12px; border:1px solid var(--border); border-radius:10px;
          background:#fff; color:var(--ink); font-size:.95rem; outline:0;
          transition:border-color .15s,box-shadow .15s;
        }
        .ch-form-field input:focus,.ch-form-field select:focus,.ch-form-field textarea:focus {
          border-color:var(--accent); box-shadow:0 0 0 3px rgba(29,185,147,.12);
        }
        .ch-form-actions { margin-top:18px; text-align:left; }
        .ch-form-submit {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--accent); color:#fff; border:none; cursor:pointer;
          padding:12px 24px; border-radius:999px; font-weight:800; font-size:1rem;
          box-shadow:0 6px 18px rgba(29,185,147,.24); transition:background .15s;
        }
        .ch-form-submit:hover:not(:disabled) { background:var(--accent-hover); }
        .ch-form-submit:disabled { opacity:.6; cursor:not-allowed; }
        .ch-form-note { margin:10px 0 0; color:var(--muted); font-size:.82rem; text-align:left; }
        .ch-form-success { display:flex; flex-direction:column; align-items:center; text-align:center; gap:10px; padding:32px 20px; }
        .ch-form-success h4 { margin:0; font-size:1.1rem; font-weight:800; color:var(--ink); }
        .ch-form-success p { margin:0; color:var(--muted); }
        .ch-form-close-btn { margin-top:8px; background:var(--accent); color:#fff; border:none; cursor:pointer; padding:10px 22px; border-radius:999px; font-weight:800; }
        @keyframes ch-spin { to { transform:rotate(360deg); } }
        .ch-spin { animation:ch-spin 1s linear infinite; }
        @media(min-width:600px){ .ch-form-grid{ grid-template-columns:1fr 1fr; } }
        @media(max-width:768px){ .ch-popup-container{ width:100%; height:100vh; border-radius:0; } }
      `}</style>

            <div className="ch">

                {/* ═══ HERO ══════════════════════════════════════════════════════ */}
                <section className="ch-hero" aria-labelledby="ch-hero-title">
                    <div className="ch-wrap">
                        <span className="ch-pill">AI CHATBOT</span>
                        <h1 id="ch-hero-title" className="ch-title">
                            Turn Sales &amp; Support 24/7<br />with AI Chatbots
                        </h1>
                        <p className="ch-sub">Answer customers instantly, book more leads, and save your team&apos;s time</p>
                        <button className="ch-hero-btn" onClick={() => setModalOpen(true)} aria-label="Book a demo">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" />
                            </svg>
                            Get Free Assessment
                        </button>
                    </div>
                </section>

                {/* ═══ INTRO TEXT ════════════════════════════════════════════════ */}
                <section className="ch-intro">
                    <div className="ch-wrap">
                        <span className="ch-sv-pill">INSIGHTS &amp; VALUE</span>
                        <br /><br />
                        <p>
                            As businesses increasingly recognize AI chatbots as an operational necessity rather than a discretionary innovation, many continue to face challenges in scaling beyond initial pilots. Research from McKinsey, Deloitte, and BCG highlights a persistent gap between ambition and execution—leading to delayed returns and higher costs than anticipated. These challenges often stem from rushed deployment, insufficient AI design and training, and limited institutional AI expertise.
                        </p>
                        <p>
                            Automate4u partners with businesses to close this gap—guiding teams from concept to implementation and capability building. Our collaborative approach ensures AI chatbot solutions are strategically aligned, technically sound, and embedded for long-term value creation.
                        </p>
                    </div>
                </section>

                {/* ═══ PROCESS STEPS ═════════════════════════════════════════════ */}
                <section className="ch-steps" aria-labelledby="ch-steps-title">
                    <div className="ch-wrap" style={{ textAlign: "center" }}>
                        <span className="ch-sv-pill">HOW IT WORKS</span>
                        <h2 id="ch-steps-title" className="ch-h2">How We Help Clients</h2>
                        <div className="ch-steps-grid">
                            {[
                                {
                                    img: "/images/services/discoveryphase.jpg",
                                    title: "Discover",
                                    text: "We help businesses assess their AI chatbot readiness and capability to execute transformation at scale. We begin by mapping key business intents—whether to improve conversion, elevate customer satisfaction, or extend support coverage. Alongside, we conduct structured requirements-gathering sessions to capture functional, technical, and compliance needs. This phase concludes with clear success metrics, defined KPIs, and actionable insights.",
                                },
                                {
                                    img: "/images/services/chatdevelopment.jpg",
                                    title: "Development & Design",
                                    text: "We translate strategic objectives into a scalable AI chatbot framework. Our approach includes architecting optimal conversational flows, enabling seamless integrations, and prioritizing user experience and compliance. A key focus is the rigorous training of AI models, leveraging curated datasets to ensure consistent, accurate, and adaptive responses over time.",
                                },
                                {
                                    img: "/images/services/chatbotimpl.jpg",
                                    title: "Deploy & Improve",
                                    text: "We focus on seamless rollout and operational stabilization of the AI chatbot solution. Our team executes a rigorous deployment plan including end-to-end integration, quality assurance, and user acceptance testing. Post-launch, our warranty program offers proactive support and ongoing performance monitoring. We equip your teams with best practices and upgrade paths to sustain chatbot efficacy beyond initial deployment.",
                                },
                            ].map((s) => (
                                <article key={s.title} className="ch-step-card">
                                    <Image src={s.img} alt={`${s.title} phase illustration`} width={420} height={260} className="ch-step-img" />
                                    <div className="ch-step-body">
                                        <h3 className="ch-step-h3">{s.title}</h3>
                                        <p className="ch-step-text">{s.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ CHATBOT DEMO ══════════════════════════════════════════════ */}
                <section className="ch-demo" aria-labelledby="ch-demo-title">
                    <div className="ch-wrap">
                        <span className="ch-eyebrow">CHATBOT DEMO</span>
                        <h2 id="ch-demo-title" className="ch-h2">Let our AI Chatbots handle your repetitive work</h2>
                        <div className="ch-demo-grid">
                            {/* Live demo iframe */}
                            <div>
                                <p className="ch-iframe-label">Test out our basic FAQ chatbot that you could have on your own site</p>
                                <div className="ch-iframe-wrap">
                                    <iframe
                                        src="https://app.livechatai.com/aibot-iframe/cmgdycnrf0001jx042rasimwz"
                                        allow="microphone"
                                        title="AI chatbot demo"
                                    />
                                </div>
                            </div>

                            {/* Capabilities */}
                            <div className="ch-demo-card">
                                <h3 className="ch-demo-card-title">Our Core Capabilities</h3>
                                <ul className="ch-check-list">
                                    {[
                                        "Integrations to Website | SMS | WhatsApp & CRMs",
                                        "Calendar bookings",
                                        "Email follow-ups",
                                        "API access & custom actions",
                                        "Answers customer questions using your knowledge base and site info",
                                        "Lead capture & qualification with smart questions",
                                        "Tracks statistics to help view performance",
                                    ].map((item) => <li key={item}>{item}</li>)}
                                </ul>
                                <div className="ch-demo-cta">
                                    <button className="ch-cta-btn" onClick={() => setModalOpen(true)}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" />
                                        </svg>
                                        Add your own chatbot today
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ ROI CALCULATOR ════════════════════════════════════════════ */}
                <section className="ch-roi" aria-labelledby="ch-roi-title">
                    <div className="ch-wrap">
                        <span className="ch-eyebrow">CHATBOT ROI</span>
                        <h2 id="ch-roi-title" className="ch-h2">How Much Could AI Chatbot Save You?</h2>
                        <p className="ch-sub2">Estimate your potential monthly savings by deflecting repetitive customer inquiries with an AI chatbot.</p>
                        <div className="ch-roi-card">
                            <div className="ch-roi-inner">
                                <div className="ch-roi-form">
                                    <label className="ch-roi-item">
                                        <span className="ch-roi-label">Tickets / chats per month</span>
                                        <input type="range" min={200} max={10000} step={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))} aria-label="Monthly volume" />
                                        <span className="ch-roi-out">{volume.toLocaleString()}</span>
                                    </label>
                                    <label className="ch-roi-item">
                                        <span className="ch-roi-label">Deflection rate</span>
                                        <input type="range" min={10} max={80} step={5} value={deflect} onChange={(e) => setDeflect(Number(e.target.value))} aria-label="Deflection rate" />
                                        <span className="ch-roi-out">{deflect}%</span>
                                    </label>
                                    <label className="ch-roi-item">
                                        <span className="ch-roi-label">Cost per human ticket (USD)</span>
                                        <input type="range" min={4} max={40} step={1} value={cost} onChange={(e) => setCost(Number(e.target.value))} aria-label="Cost per ticket" />
                                        <span className="ch-roi-out">${cost}</span>
                                    </label>
                                </div>
                                <div className="ch-roi-result" role="status" aria-live="polite">
                                    <span className="ch-rr-kicker">Projected Monthly Savings</span>
                                    <div className="ch-rr-value">
                                        {monthlySavings.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ PRICING ═══════════════════════════════════════════════════ */}
                <section className="ch-pricing" aria-labelledby="ch-pricing-title">
                    <div className="ch-wrap">
                        <span className="ch-eyebrow">PRICING</span>
                        <div className="ch-pricing-head">
                            <h2 id="ch-pricing-title">What Your Investment Will Be</h2>
                            <p>
                                Understanding that the first chatbot implementation is a pivotal decision point, we provide differentiated solutions designed to minimize upfront commitments while maximizing flexibility. Our dual-tier framework supports clients in launching efficiently, while building confidence to scale with proven results.
                            </p>
                        </div>

                        <div className="ch-cards">
                            {/* Standard */}
                            <article className="ch-pcard">
                                <h3 className="ch-pcard-title">Standard</h3>
                                <ul className="ch-feat-list">
                                    {[
                                        "Website chat widget (desktop & mobile)",
                                        "Instant response to FAQs and common requests",
                                        "Lead capture with name, email, and phone",
                                        "Business hours routing & away message",
                                        "Basic integration (Google Sheets, Webhooks)",
                                        "Voice interaction functionality",
                                        "Analytics dashboard (conversations, leads)",
                                        "Email transcript delivery",
                                        "De-escalating customer complaints",
                                    ].map((f) => (
                                        <li key={f}><span className="ch-feat-icon--check" aria-hidden="true" />{f}</li>
                                    ))}
                                </ul>
                                <div className="ch-price-footer">
                                    <p className="ch-price-note">Starting at</p>
                                    <p className="ch-price-val">$300</p>
                                    <p className="ch-price-per">per site, per month</p>
                                    <button className="ch-price-btn" onClick={() => setModalOpen(true)}>Get Free Assessment</button>
                                </div>
                            </article>

                            {/* Premium */}
                            <article className="ch-pcard ch-pcard--premium">
                                <h3 className="ch-pcard-title">Premium</h3>
                                <p className="ch-pcard-sub">Everything in <strong>Standard</strong>, plus:</p>
                                <ul className="ch-feat-list">
                                    {[
                                        "Multi-channel: Web, WhatsApp, Facebook, Instagram",
                                        "Calendar & booking integration",
                                        "CRM sync (HubSpot, Pipedrive, Zapier)",
                                        "Advanced routing & conditional workflows",
                                        "Smart handoff with chat history & transcript",
                                        "Sentiment detection & escalation rules",
                                        "AI text summary of every conversation",
                                        "API access & custom actions",
                                        "Priority support & optimization reviews",
                                    ].map((f) => (
                                        <li key={f}><span className="ch-feat-icon--plus" aria-hidden="true" />{f}</li>
                                    ))}
                                </ul>
                                <div className="ch-price-footer">
                                    <p className="ch-price-note">Starting at</p>
                                    <p className="ch-price-val">$399</p>
                                    <p className="ch-price-per">per site, per month</p>
                                    <button className="ch-price-btn" onClick={() => setModalOpen(true)}>Get Free Assessment</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ═══ FAQ ═══════════════════════════════════════════════════════ */}
                <section className="ch-faq" aria-labelledby="ch-faq-title">
                    <div className="ch-wrap">
                        <span className="ch-pill">FAQ</span>
                        <h2 id="ch-faq-title" className="ch-h2">Key Information for Informed Decision Making</h2>
                        <div className="ch-faq-list">
                            <FaqItem q="Can the bot cite sources or link to docs?" a="Yes—answers can include citations to your Help Center, PDFs, and internal docs, with safe excerpts only." />
                            <FaqItem q="Does it integrate with our CRM/helpdesk?" a="We connect to HubSpot, Salesforce, Zendesk, Intercom, and more. We can also use secure webhooks or your APIs." />
                            <FaqItem q="How do you keep it safe?" a="RBAC/SSO, redaction for PII, policy guardrails, minimum confidence thresholds, and human approval for sensitive replies." />
                            <FaqItem q="What's a typical launch time?" a="Most pilots launch in 2–3 weeks depending on scope and integrations." />
                        </div>
                    </div>
                </section>

            </div>

            {/* ═══ CONTACT MODAL ═════════════════════════════════════════════ */}
            <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
