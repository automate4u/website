"use client";

import React, { useState } from "react";
import Image from "next/image";

// ─── Sub-components ──────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item${open ? " faq-item-open" : ""}`} style={{ backgroundColor: open ? "#fff" : "#f7faf9" }}>
            <button className="faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                {q}
                <span className="faq-icon" aria-hidden="true" style={{ fontSize: "1.2rem", color: "var(--accent)", flexShrink: 0 }}>
                    {open ? "−" : "+"}
                </span>
            </button>
            {open && (
                <div className="faq-a" style={{ display: "block" }}>
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
}

function QualifyForm() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        const data = new FormData(e.currentTarget);
        try {
            await fetch("https://formspree.io/f/mwprqbyv", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="ch-form-success" role="status" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "48px 20px", background: "var(--card)", borderRadius: 16 }}>
                <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e9f9f3" /><path d="M8 12l3 3 5-5" stroke="#1db993" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                <h4 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800, color: "var(--ink)" }}>Request Sent!</h4>
                <p style={{ margin: 0, color: "var(--muted)", maxWidth: 400 }}>Your information has been received. Our team will review your details and be in touch to schedule your enablement consult.</p>
            </div>
        );
    }

    return (
        <form className="q-form" onSubmit={handleSubmit}>
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
                        <option>1–10</option>
                        <option>11–50</option>
                        <option>51–200</option>
                        <option>200+</option>
                    </select>
                </label>
                <label className="q-field">
                    <span className="q-label">Primary objectives</span>
                    <select name="objective" required defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>Faster customer response</option>
                        <option>Lead capture &amp; routing</option>
                        <option>Ops automation (docs, data, finance)</option>
                        <option>Knowledge &amp; internal copilots</option>
                    </select>
                </label>
                <label className="q-field">
                    <span className="q-label">Key tools to integrate</span>
                    <input type="text" name="tools" placeholder="Salesforce, HubSpot, Zendesk, Slack, Notion, ERP…" />
                </label>
                <label className="q-field">
                    <span className="q-label">Data sensitivity</span>
                    <select name="sensitivity" required defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>Low (no PII)</option>
                        <option>Moderate (some PII)</option>
                        <option>High (PII/PHI/financial)</option>
                    </select>
                </label>
                <label className="q-field">
                    <span className="q-label">Monthly budget (USD)</span>
                    <select name="budget" required defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>$1k–$3k</option>
                        <option>$3k–$7k</option>
                        <option>$7k–$15k</option>
                        <option>$15k+</option>
                    </select>
                </label>
                <label className="q-field">
                    <span className="q-label">Timeline</span>
                    <select name="timeline" required defaultValue="">
                        <option value="" disabled>Select</option>
                        <option>ASAP (this month)</option>
                        <option>1–2 months</option>
                        <option>Quarter</option>
                        <option>Exploring</option>
                    </select>
                </label>
                <label className="q-field q-field--full">
                    <span className="q-label">What does success look like?</span>
                    <textarea name="goals" rows={4} placeholder="e.g., 60% ticket deflection, instant lead booking, weekly invoice automation, internal copilot…" />
                </label>
            </div>

            <div className="q-actions" role="group" aria-label="Primary calls to action">
                <button className="q-btn q-primary" type="submit" disabled={submitting}>
                    {submitting ? (
                        <>
                            <svg className="q-spinner" viewBox="0 0 50 50" aria-hidden="true" style={{ width: 18, height: 18, overflow: 'visible' }}>
                                <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        <>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 7V3h2v4H8Zm4 0V3h2v4h-2Zm4 0V3h2v4h-2ZM4 21V9h16v12H4Zm2-2h12V11H6v8Z" fill="currentColor" />
                            </svg>
                            Request Meeting
                        </>
                    )}

                </button>
            </div>
            <p className="q-note">We respect your privacy. We never sell data.</p>
        </form>
    )
}

function ReadinessCheck() {
    const [checkedState, setCheckedState] = useState([false, false, false, false, false, false]);

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    const score = checkedState.filter(Boolean).length;
    let nextStepMessage = "Scale program with quarterly governance reviews";
    if (score <= 2) {
        nextStepMessage = "Start with a focused pilot and governance baseline";
    } else if (score <= 4) {
        nextStepMessage = "Pilot + enablement sprint (training & guardrails)";
    }

    const checks = [
        "Clear business goals for AI (e.g., faster response, fewer tickets)",
        "Documented processes or SOPs to automate",
        "Systems with APIs or integration options",
        "Policy stance on data usage & privacy",
        "Stakeholders assigned for approvals & oversight",
        "Budget for pilot & iteration"
    ];

    return (
        <>
            <form className="rd-grid" aria-describedby="rd-note">
                {checks.map((text, i) => (
                    <label key={i} className="rd-item" style={checkedState[i] ? { borderColor: 'var(--accent)', background: 'var(--pill-bg)', fontWeight: 600 } : {}}>
                        <input type="checkbox" checked={checkedState[i]} onChange={() => handleOnChange(i)} aria-label={text} />
                        {text}
                    </label>
                ))}
            </form>

            <div className="rd-result" role="status" aria-live="polite">
                <div className="rr-card">
                    <span className="rr-kicker">Readiness score</span>
                    <div className="rr-value"><span>{score}</span>/6</div>
                    <p className="rr-foot" id="rd-note">We recommend starting with a 2–3 week pilot targeting one measurable win.</p>
                </div>
                <div className="rr-card">
                    <span className="rr-kicker">Suggested next step</span>
                    <div className="rr-value" style={{ fontSize: "1.45rem", lineHeight: 1.2 }}>{nextStepMessage}</div>
                    <p className="rr-foot">Includes roadmap, risk review, and pilot plan.</p>
                </div>
            </div>
        </>
    )
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AITransformationPage() {
    return (
        <>
            <style>{`
  .en-scope {
    display: block
  }

  .en-scope * {
    box-sizing: border-box
  }

  /* Tokens */
  .en-scope {
    --ink: #0f1720;
    --muted: #6b7b8d;
    --accent: #1db993;
    --accent-hover: #169b78;
    --accent-ink: #179c79;
    --pill-bg: #e9f9f3;
    --panel: #f8fbfa;
    --card: #ffffff;
    --border: #E7EDF2;
    --soft: #f6f8fb;
    --radius: 22px;
  }

  /* Container */
  .en-scope .en-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 18px
  }

  /* HERO */
  .en-scope .en-hero {
    background: #fff;
    color: var(--ink);
    padding: 44px 0;
    text-align: center
  }

  .en-scope .en-pill {
    display: inline-block;
    background: var(--pill-bg);
    color: #169b78;
    padding: .4rem .7rem;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: .05em;
    font-size: .72rem;
    white-space: nowrap
  }

  .en-scope .en-title {
    margin: 12px auto 8px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -.01em;
    font-size: 32px
  }

  .en-scope .en-br {
    display: none
  }

  .en-scope .en-sub {
    margin: 0 auto 16px;
    max-width: 70ch;
    color: var(--muted);
    font-size: .98rem
  }

  .en-scope .en-btn {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    padding: .8rem 1.1rem;
    border-radius: 999px;
    font-weight: 800;
    box-shadow: 0 10px 26px rgba(29, 185, 147, .28)
  }

  .en-scope .en-btn:hover {
    background: var(--accent-hover)
  }

  .en-scope .en-note {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: .85rem
  }

  @media (min-width:768px) {
    .en-scope .en-hero {
      padding: 64px 0
    }

    .en-scope .en-title {
      font-size: 48px
    }

    .en-scope .en-sub {
      font-size: 1.05rem
    }
  }

  @media (min-width:1200px) {
    .en-scope .en-title {
      font-size: 60px
    }

    .en-scope .en-br {
      display: inline
    }
  }

  /* PILLARS */
  .en-scope .en-pillars {
    background: #fff;
    color: var(--ink);
    padding: 80px 0;
    text-align: center;
  }

  .en-scope .eyebrow {
    display: inline-block;
    padding: .35rem .6rem;
    border-radius: 999px;
    background: var(--pill-bg);
    color: var(--accent-ink);
    font-weight: 700;
    font-size: .72rem;
    letter-spacing: .06em
  }

  .en-scope .en-h2 {
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -.02em;
    margin: 10px 0 6px;
    font-weight: 800;
    text-wrap: balance
  }

  .en-scope .pi-grid {
    display: grid;
    gap: 14px;
    margin-top: 14px;
    text-align: left
  }

  .en-scope .pi-card {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 28px 24px;
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 16px;
    align-items: start;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .en-scope .pi-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), #4fd1c7);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .en-scope .pi-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .en-scope .pi-card:hover::before {
    opacity: 1;
  }

  .en-scope .pi-ico {
    width: 48px;
    height: 48px;
    border-radius: 16px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--accent), #4fd1c7);
    color: #fff;
    grid-row: 1 / span 2;
    box-shadow: 0 4px 16px rgba(29, 185, 147, 0.25);
    transition: all 0.3s ease;
  }

  .en-scope .pi-card:hover .pi-ico {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 20px rgba(29, 185, 147, 0.35);
  }

  .en-scope .pi-title {
    margin: 2px 0 8px;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ink);
  }

  .en-scope .pi-text {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .en-scope .partners-note {
    margin: 14px 0 10px;
    text-align: center;
    color: var(--muted);
    font-size: .92rem
  }

  .en-scope .logo-rail {
    display: flex;
    flex-wrap: wrap;
    gap: 18px 26px;
    align-items: center;
    justify-content: center;
    padding-top: 4px
  }

  .en-scope .logo {
    color: #8da0b1;
    font-size: .95rem;
    padding: 6px 10px;
    border: 1px dashed #d7e1ea;
    border-radius: 10px;
    background: #fff;
    min-width: 86px;
    text-align: center
  }

  @media (min-width:900px) {
    .en-scope .pi-grid {
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }

  @media (min-width:1200px) {
    .en-scope .pi-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 28px;
    }
  }

  /* GOVERNANCE */
  .en-scope .en-govern {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: #000000;
    color: var(--ink);
    padding: 80px 0;
    text-align: center;
    overflow: hidden;
  }

  .en-scope .gov-grid {
    display: grid;
    gap: 14px;
    max-width: 1100px;
    margin-inline: auto
  }

  .en-scope .gov-visual img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #fff;
    border-radius: 18px
  }

  .en-scope .gov-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 24px;
    text-align: left;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .en-scope .gov-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px
  }

  .en-scope .gov-list--check li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    font-size: .95rem
  }

  .en-scope .gov-list--check li::before {
    content: "✓";
    display: grid;
    place-items: center;
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    background: var(--accent);
    color: #fff;
    font-weight: 900;
    box-shadow: 0 2px 8px rgba(29, 185, 147, 0.3);
  }

  .en-scope .hint {
    margin: .8rem 0 0;
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }

  @media (min-width:900px) {
    .en-scope .gov-grid {
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      align-items: center;
    }

    .en-scope .gov-card {
      margin-top: 0;
    }
  }

  /* STEPS */
  .en-scope .en-steps {
    background: #fff;
    color: var(--ink);
    padding: 80px 0;
    text-align: center
  }

  .en-scope .sv-pill {
    display: inline-block;
    padding: .38rem .65rem;
    border-radius: 999px;
    background: var(--pill-bg);
    color: #169b78;
    font-weight: 700;
    font-size: .72rem;
    letter-spacing: .06em
  }

  .en-scope .sv-grid {
    display: grid;
    gap: 14px;
    text-align: left
  }

  .en-scope .sv-card {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 28px 24px;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .en-scope .sv-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), #4fd1c7);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .en-scope .sv-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .en-scope .sv-card:hover::before {
    opacity: 1;
  }

  .en-scope .sv-card--seam {
    position: relative;
    overflow: hidden
  }

  .en-scope .sv-num {
    font-size: 42px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -.02em;
    margin-bottom: 12px;
    background: linear-gradient(135deg, var(--accent), #4fd1c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .en-scope .sv-h3 {
    margin: 0 0 8px;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ink);
  }

  .en-scope .sv-text {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (min-width:900px) {
    .en-scope .sv-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px
    }

    .en-scope .sv-card {
      padding: 32px 28px
    }

    .en-scope .sv-num {
      font-size: 56px
    }
  }

  /* READINESS */
  .en-scope .en-readiness {
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: #F0F0F0;
    color: var(--ink);
    padding: 40px 0;
    text-align: center;
    overflow: hidden;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23eef2f5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .en-scope .en-sub2 {
    color: var(--muted);
    margin: 0 auto 18px;
    max-width: 70ch
  }

  .en-scope .rd-grid {
    display: grid;
    gap: 10px;
    max-width: 760px;
    margin: 14px auto;
    text-align: left
  }

  .en-scope .rd-item {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 12px 14px;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease;
  }

  .en-scope .rd-item:has(input:checked) {
    border-color: var(--accent);
    background: var(--pill-bg);
    font-weight: 600;
  }

  .en-scope .rd-result {
    display: grid;
    gap: 12px;
    max-width: 760px;
    margin: 24px auto 0
  }

  .en-scope .rr-card {
    background: linear-gradient(180deg, #fbfdfc 0%, #f5fbf8 100%);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px
  }

  .en-scope .rr-kicker {
    display: block;
    color: #167f65;
    font-weight: 700;
    margin-bottom: 6px
  }

  .en-scope .rr-value {
    font-size: 32px;
    font-weight: 800
  }

  .en-scope .rr-foot {
    margin: 6px 0 0;
    color: var(--muted)
  }

  .en-scope .rd-actions {
    display: grid;
    gap: 12px;
    justify-content: center;
    margin-top: 24px
  }

  .en-scope .rd-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none
  }

  .en-scope .rd-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 8px 24px rgba(29, 185, 147, .22)
  }

  .en-scope .rd-primary:hover {
    background: var(--accent-hover)
  }

  .en-scope .rd-secondary {
    background: #121416;
    color: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .18)
  }

  .en-scope .rd-secondary:hover {
    background: #0f1113
  }

  @media (min-width:900px) {
    .en-scope .rd-result {
      grid-template-columns: 1fr 1fr
    }

    .en-scope .rr-value {
      font-size: 38px
    }

    .en-scope .rd-actions {
      grid-template-columns: auto auto;
    }
  }

  /* QUALIFY */
  .en-scope .en-qualify {
    background: #fff;
    color: var(--ink);
    padding: 48px 0;
    text-align: center
  }

  .en-scope .q-pill {
    display: inline-block;
    background: var(--pill-bg);
    color: #167f65;
    padding: .38rem .7rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: .72rem;
    letter-spacing: .06em
  }

  .en-scope .q-form {
    max-width: 960px;
    margin: 14px auto 0;
    text-align: left
  }

  .en-scope .q-grid {
    display: grid;
    gap: 12px
  }

  .en-scope .q-field {
    display: grid;
    gap: 6px
  }

  .en-scope .q-field--full {
    grid-column: 1/-1
  }

  .en-scope .q-label {
    font-weight: 600
  }

  .en-scope input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),
  .en-scope select,
  .en-scope textarea {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--ink);
  }

  .en-scope .q-actions {
    margin-top: 12px;
    display: grid;
    gap: 12px;
    justify-content: start
  }

  .en-scope .q-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  .en-scope .q-btn svg {
    width: 18px;
    height: 18px
  }

  .en-scope .q-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 8px 24px rgba(29, 185, 147, .22)
  }

  .en-scope .q-primary:hover {
    background: var(--accent-hover)
  }

  .en-scope .q-secondary {
    background: #121416;
    color: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .18)
  }

  .en-scope .q-secondary:hover {
    background: #0f1113
  }

  .en-scope .q-note {
    margin: .4rem 0 0;
    color: var(--muted);
    font-size: .9rem
  }

  .en-scope .q-spinner {
    animation: q-spin 1s linear infinite;
  }

  .en-scope .q-spinner circle {
    stroke: currentColor;
    stroke-linecap: round;
    animation: q-dash 1.5s ease-in-out infinite;
  }

  @keyframes q-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes q-dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @media (min-width:780px) {
    .en-scope .q-grid {
      grid-template-columns: 1fr 1fr;
      gap: 14px
    }

    .en-scope .q-actions {
      grid-template-columns: auto auto
    }
  }

  /* FAQ */
  .en-scope .en-faq {
    background: #fff;
    color: var(--ink);
    padding: 44px 0;
    text-align: center
  }

  .en-scope .faq-pill {
    display: inline-block;
    padding: .36rem .6rem;
    border-radius: 999px;
    background: var(--pill-bg);
    color: var(--accent-ink);
    font-weight: 700;
    font-size: .72rem;
    letter-spacing: .06em
  }

  .en-scope .faq-list {
    max-width: 880px;
    margin: 0 auto;
    display: grid;
    gap: 12px;
    text-align: left
  }

  .en-scope .faq-item {
    border: 1px solid var(--border);
    border-radius: 14px;
    background: #f7faf9;
    transition: background .2s ease
  }

  .en-scope .faq-item-open {
    background: #fff
  }

  .en-scope .faq-q {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: transparent;
    border: none;
    border-radius: 14px;
    padding: 14px 16px;
    font: inherit;
    text-align: left;
    font-weight: 600;
    cursor: pointer;
    color: var(--ink)
  }

  .en-scope .faq-a {
    overflow: hidden;
    display: block;   
  }

  .en-scope .faq-a > p {
    padding: 2px 16px 14px;
    margin: 0;
    color: var(--muted);
    border-top: 1px solid var(--border)
  }

  /* FINAL CTA */
  .en-scope .en-cta {
    background: #fff;
    color: var(--ink);
    padding: 48px 0;
    text-align: center
  }

  .en-scope .cf-brand {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: .38rem .70rem;
    border-radius: 999px;
    background: var(--pill-bg);
    color: #167f65;
    font-weight: 700;
    font-size: .82rem;
    margin: 0 auto 10px
  }

  .en-scope .cf-title {
    margin: 0 0 28px;
    font-weight: 800;
    letter-spacing: -.01em;
    line-height: 1.1;
    font-size: 28px
  }

  .en-scope .cf-actions {
    display: grid;
    gap: 12px;
    justify-content: center
  }

  .en-scope .cf-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px
  }

  .en-scope .cf-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none
  }

  .en-scope .cf-btn svg {
    width: 18px;
    height: 18px
  }

  .en-scope .cf-primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 8px 24px rgba(29, 185, 147, .22)
  }

  .en-scope .cf-primary:hover {
    background: var(--accent-hover)
  }

  .en-scope .cf-secondary {
    background: #121416;
    color: #fff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .18)
  }

  .en-scope .cf-secondary:hover {
    background: #0f1113
  }

  .en-scope .cf-note {
    margin: 0;
    color: var(--muted);
    font-size: .9rem
  }

  @media (min-width:780px) {
    .en-scope .cf-actions {
      grid-template-columns: auto auto;
      gap: 18px
    }

    .en-scope .cf-title {
      font-size: 44px;
      margin-bottom: 32px
    }
  }

  @media (min-width:1200px) {
    .en-scope .cf-title {
      font-size: 50px;
      margin-bottom: 34px
    }
  }
      `}</style>
            <div className="en-scope">

                {/* ============== HERO ============== */}
                <section className="en-hero" aria-labelledby="en-hero-title">
                    <div className="en-container">
                        <span className="en-pill">Your AI &amp; Automation Transformation Partner</span>
                        <h1 id="en-hero-title" className="en-title">
                            AI Enablement: From Idea to Impact<br className="en-br" /> — Safely, Quickly, and at Scale
                        </h1>
                        <p className="en-sub">
                            We partner with your team to evaluate, integrate, and operationalize the best AI tools for your workflows.
                            Governance-first, security-forward, and designed for real adoption.
                        </p>
                        <a href="#qualify" className="en-btn" aria-label="Book an enablement consult">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" />
                            </svg>
                            Book an Enablement Consult
                        </a>
                        <p className="en-note">Includes roadmap &amp; quick-win plan</p>
                    </div>
                </section>

                {/* ============== PILLARS ============== */}
                <section className="en-pillars" aria-labelledby="pillars-title">
                    <div className="en-container">
                        <p className="eyebrow">What we do</p>
                        <h2 id="pillars-title" className="en-h2">Enablement Pillars</h2>
                        <div className="pi-grid">

                            <article className="pi-card">
                                <div className="pi-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M4 12a8 8 0 1 0 16 0A8 8 0 0 0 4 12Zm9-5h-2v5l4 2 .8-1.6-2.8-1.4V7Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pi-title">Strategy &amp; Roadmap</h3>
                                    <p className="pi-text">Identify high-ROI use cases, stack selection, guardrails, and a 90-day execution plan.</p>
                                </div>
                            </article>

                            <article className="pi-card">
                                <div className="pi-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M4 4h16v6H4V4Zm0 10h10v6H4v-6Zm12 0h4v6h-4v-6Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pi-title">Integrations &amp; Agents</h3>
                                    <p className="pi-text">Connect CRMs, helpdesks, ERPs, docs, and data. Human-in-the-loop where needed.</p>
                                </div>
                            </article>

                            <article className="pi-card">
                                <div className="pi-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M5 3h14v4H5V3Zm0 6h14v4H5V9Zm0 6h10v4H5v-4Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pi-title">Governance &amp; Security</h3>
                                    <p className="pi-text">Access control, audit logs, PII handling, prompt/response policies, and risk management.</p>
                                </div>
                            </article>

                            <article className="pi-card">
                                <div className="pi-ico" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M12 3l9 4-9 4-9-4 9-4Zm0 7l9 4-9 4-9-4 9-4Zm0 7l9 4-9 4-9-4 9-4Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="pi-title">Training &amp; Change</h3>
                                    <p className="pi-text">Team workshops, SOP updates, success metrics, and continuous improvement program.</p>
                                </div>
                            </article>

                        </div>

                        <p className="partners-note">We implement alongside your stack</p>
                        <div className="logo-rail" aria-label="Partner logos">
                            <span className="logo">Microsoft</span>
                            <span className="logo">Google</span>
                            <span className="logo">AWS</span>
                            <span className="logo">Salesforce</span>
                            <span className="logo">HubSpot</span>
                            <span className="logo">Slack</span>
                            <span className="logo">Notion</span>
                            <span className="logo">Zapier</span>
                        </div>
                    </div>
                </section>

                {/* ============== ENABLEMENT FLOW ============== */}
                <section className="en-steps" aria-labelledby="steps-title">
                    <div className="en-container">
                        <span className="sv-pill">How it works</span>
                        <h2 id="steps-title" className="en-h2">Your partner through a 3-step AI Transformation</h2>
                        <div className="sv-grid">
                            <article className="sv-card">
                                <div className="sv-num">1</div>
                                <h3 className="sv-h3">Identify</h3>
                                <p className="sv-text">Audit, assessment, discovery, interviews.</p>
                            </article>
                            <article className="sv-card sv-card--seam">
                                <div className="sv-num">2</div>
                                <h3 className="sv-h3">Educate</h3>
                                <p className="sv-text">Training, roadmap, opportunities.</p>
                            </article>
                            <article className="sv-card">
                                <div className="sv-num">3</div>
                                <h3 className="sv-h3">Develop</h3>
                                <p className="sv-text">Integrate new systems, update old systems, custom automations.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ============== GOVERNANCE / SECURITY ============== */}
                <section className="en-govern" aria-labelledby="govern-title">
                    <div className="en-container">
                        <p className="eyebrow">Secure by design</p>
                        <h2 id="govern-title" className="en-h2" style={{ color: "white" }}>Governance, Risk &amp; Compliance</h2>
                        <div className="gov-grid">
                            <figure className="gov-visual" role="img" aria-label="Policy & access control illustration">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/services/Screenshot-2025-11-01-214703-1.jpg" alt="Access control and audit visualization" />
                            </figure>
                            <div className="gov-card">
                                <ul className="gov-list gov-list--check">
                                    <li>Role-based access (RBAC), SSO/Okta, least-privilege</li>
                                    <li>Redaction &amp; masking for PII/PHI &amp; confidential data</li>
                                    <li>Environment isolation, API scoping, secrets management</li>
                                    <li>Prompt/response policies, jailbreak protection &amp; guardrails</li>
                                    <li>Logging, audit trails, human-in-the-loop approvals</li>
                                    <li>Data residency options &amp; vendor due diligence</li>
                                </ul>
                                <p className="hint">We align with your internal policies and industry standards to minimize risk while maximizing impact.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============== READINESS SELF-CHECK (LEAD MAGNET) ============== */}
                <section className="en-readiness" aria-labelledby="ready-title">
                    <div className="en-container">
                        <p className="eyebrow">Quick self-check</p>
                        <h2 id="ready-title" className="en-h2">Is your organization ready to enable AI?</h2>
                        <p className="en-sub2">Check what applies. We&apos;ll estimate your enablement readiness and highlight next steps.</p>

                        <ReadinessCheck />

                        <div className="rd-actions">
                            <a href="#qualify" className="rd-btn rd-primary">Book an Enablement Consult</a>
                            <a href="#faq" className="rd-btn rd-secondary">Review FAQs</a>
                        </div>
                    </div>
                </section>

                {/* ============== QUALIFY FORM (STRONG CTA) ============== */}
                <section id="qualify" className="en-qualify" aria-labelledby="qualify-title">
                    <div className="en-container">
                        <span className="q-pill">Get your 90-day plan</span>
                        <h2 id="qualify-title" className="en-h2">Tell us about your stack and goals</h2>

                        <QualifyForm />

                    </div>
                </section>

                {/* ============== FAQ ============== */}
                <section id="faq" className="en-faq" aria-labelledby="faq-title">
                    <div className="en-container">
                        <span className="faq-pill">FAQ</span>
                        <h2 id="faq-title" className="en-h2">Enablement: common questions</h2>
                        <p className="en-sub2">From security to change management to measurable ROI.</p>

                        <div className="faq-list">
                            <FaqItem q="How is “AI Enablement” different from building a single agent?" a="Enablement is an end-to-end program: prioritize use cases, set guardrails, integrate tools, train staff, and establish ongoing governance and metrics." />
                            <FaqItem q="Can we keep humans in the loop?" a="Yes. We design hybrid workflows with approvals, review queues, and confidence thresholds so sensitive steps get human sign-off." />
                            <FaqItem q="Do you align with our security needs?" a="We follow your policies for access, logging, data handling, and vendor selection. Options for SSO/Okta, RBAC, redaction, and data residency are available." />
                            <FaqItem q="What’s a typical timeline?" a="Assessment: 1–2 weeks. Pilot: 2–3 weeks. Scale & govern: ongoing cadence with quarterly reviews." />
                            <FaqItem q="How do we measure ROI?" a="We set baseline metrics (time, throughput, accuracy, latency) and track improvements over 30/60/90 days with shared dashboards." />
                        </div>
                    </div>
                </section>

                {/* ============== FINAL CTA ============== */}
                <section className="en-cta" aria-labelledby="cta-title">
                    <div className="en-container">
                        <span className="cf-brand">
                            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                                <circle cx="12" cy="12" r="9" fill="#1db993" />
                            </svg>
                            <span>Automate4U Enablement</span>
                        </span>
                        <h2 id="cta-title" className="cf-title">Ready to enable AI across your org?</h2>
                        <div className="cf-actions" role="group" aria-label="Primary calls to action">
                            <div className="cf-col">
                                <a className="cf-btn cf-primary" href="#qualify" role="button">
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 6h-2v5l4 2 .9-1.7-2.9-1.6V8Z" fill="currentColor" />
                                    </svg>
                                    Book an Enablement Consult
                                </a>
                                <p className="cf-note">Roadmap &amp; quick wins</p>
                            </div>
                            <div className="cf-col">
                                <a className="cf-btn cf-secondary" href="#ready-title" role="button">
                                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                        <path d="M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 0v6h6" fill="currentColor" />
                                    </svg>
                                    Take the Readiness Check
                                </a>
                                <p className="cf-note">Share with your team</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
