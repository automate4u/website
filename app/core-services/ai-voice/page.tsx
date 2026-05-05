"use client";

import React, { useState, useEffect, useRef } from "react";
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

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        const data = new FormData(e.currentTarget);
        try {
            await fetch("https://formspree.io/f/xzzjvgkw", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    if (!open) return null;
    return (
        <div className="popup-overlay active" role="dialog" aria-modal="true" aria-labelledby="popup-title"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="popup-container">
                <div className="popup-header">
                    <h3 id="popup-title">Start Your Chatbot Project</h3>
                    <button onClick={() => { onClose(); setSubmitted(false); }} className="popup-close" aria-label="Close">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
                <div className="popup-content">
                    <div className="form-container">
                        {submitted ? (
                            <div className="ch-form-success" role="status" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "32px 20px" }}>
                                <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#e9f9f3" /><path d="M8 12l3 3 5-5" stroke="#1db993" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                                <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 800, color: "var(--ink)" }}>We&apos;ll be in touch within 1 business day!</h4>
                                <p style={{ margin: 0, color: "var(--muted)" }}>Thanks for reaching out. Our team will review your needs and propose a tailored chatbot solution.</p>
                                <button className="popup-submit-btn" onClick={() => { onClose(); setSubmitted(false); }} style={{ marginTop: 8 }}>Close</button>
                            </div>
                        ) : (
                            <>
                                <p className="form-intro">
                                    Ready to automate your customer interactions? Tell us about your needs and we&apos;ll create a tailored solution for you.
                                </p>
                                <form className="popup-form" onSubmit={handleSubmit} noValidate>
                                    <div className="form-grid" style={{ display: "grid", gap: 14 }}>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Work email *</span>
                                            <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
                                        </label>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Company *</span>
                                            <input type="text" name="company" required placeholder="Company Inc." />
                                        </label>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Team size</span>
                                            <select name="team_size" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["1–10", "11–50", "51–200", "200+"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Current channels</span>
                                            <select name="channels" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["Website only", "Website + SMS", "Website + WhatsApp", "Multiple channels"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Monthly budget (USD)</span>
                                            <select name="budget" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["Under $300", "$300–$399", "$400–$800", "$800+"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="form-field">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>Timeline</span>
                                            <select name="timeline" defaultValue="">
                                                <option value="" disabled>Select</option>
                                                {["ASAP (this month)", "1–2 months", "Quarter", "Exploring"].map(o => <option key={o}>{o}</option>)}
                                            </select>
                                        </label>
                                        <label className="form-field form-field-full">
                                            <span style={{ fontWeight: 600, fontSize: ".88rem", color: "var(--ink)" }}>What does success look like?</span>
                                            <textarea name="goals" rows={3} placeholder="e.g., answer FAQs 24/7, book more demos, reduce support tickets by 50%…" />
                                        </label>
                                    </div>
                                    <div style={{ marginTop: 18 }}>
                                        <button type="submit" className="popup-submit-btn" disabled={submitting}>
                                            {submitting ? (
                                                <><svg className="ch-spin" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="40 20" /></svg> Submitting…</>
                                            ) : (
                                                <>Submit Request</>
                                            )}
                                        </button>
                                    </div>
                                    <p className="form-note">We never sell your data. By submitting you agree we may contact you about this request.</p>
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
export default function AIVoicePage() {
    const [modalOpen, setModalOpen] = useState(false);

    // Retell state
    const retellClientRef = useRef<any>(null);
    const [callActive, setCallActive] = useState(false);
    const [callStarting, setCallStarting] = useState(false);

    useEffect(() => {
        import('retell-client-js-sdk').then(({ RetellWebClient }) => {
            const client = new RetellWebClient();
            retellClientRef.current = client;

            client.on('call_started', () => {
                setCallActive(true);
                setCallStarting(false);
            });
            client.on('call_ended', () => {
                setCallActive(false);
                setCallStarting(false);
            });
            client.on('error', (error) => {
                console.error('Retell error:', error);
                setCallActive(false);
                setCallStarting(false);
            });
        }).catch(err => console.error("Could not load SDK", err));

        return () => {
            if (retellClientRef.current) {
                try { retellClientRef.current.stopCall(); } catch (e) { }
            }
        };
    }, []);

    const launchRetellVoice = async () => {
        if (!retellClientRef.current) return;
        if (callActive) {
            retellClientRef.current.stopCall();
            return;
        }

        try {
            setCallStarting(true);
            await navigator.mediaDevices.getUserMedia({ audio: true });

            const req = await fetch('/api/retell/web-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ metadata: { source: 'website-voice-btn' } })
            });

            const data = await req.json();
            if (!req.ok || !data.access_token) {
                throw new Error(data.error || 'Failed to start call');
            }

            await retellClientRef.current.startCall({
                accessToken: data.access_token
            });
        } catch (e: any) {
            console.error(e);
            alert("Sorry—couldn't start the voice session. (" + e.message + ")");
            setCallStarting(false);
        }
    };

    // ROI calculator state
    const [volume, setVolume] = useState(1500);
    const [deflect, setDeflect] = useState(40);
    const [cost, setCost] = useState(12);

    const monthlySavings = volume * (deflect / 100) * cost;

    return (
        <>
            <style>{`
        /* ── Tokens ── */
        .ch-scope {
            --ink: #0f1720;
            --muted: #6b7b8d;
            --accent: #1db993;
            --accent-hover: #169b78;
            --accent-ink: #179c79;
            --line: #d7efe7;
            --pill-bg: #e9f9f3;
            --panel: #f8fbfa;
            --card: #ffffff;
            --border: #E7EDF2;
            --soft: #f6f8fb;
            --radius: 999px;
            display: block;
        }

        .ch-scope * { box-sizing: border-box; }

        /* Container */
        .ch-scope .ch-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 18px;
        }

        /* HERO */
        .ch-scope .ch-hero {
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/services/voice_agent.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
            padding: 44px 0;
            text-align: center;
            z-index: 1;
            background-color: #111;
        }

        .ch-scope .ch-pill {
            display: inline-block;
            background: var(--pill-bg);
            color: #169b78;
            padding: .4rem .7rem;
            border-radius: 999px;
            font-weight: 700;
            letter-spacing: .05em;
            font-size: .72rem;
            white-space: nowrap;
        }

        .ch-scope .ch-title {
            margin: 12px auto 8px;
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -.01em;
            font-size: 32px;
        }

        .ch-scope .ch-br { display: none; }

        .ch-scope .ch-sub {
            margin: 0 auto 16px;
            max-width: 70ch;
            color: rgba(255, 255, 255, 0.9);
            font-size: .98rem;
        }

        .ch-scope .ch-btn {
            display: inline-flex;
            align-items: center;
            gap: .55rem;
            background: var(--accent);
            color: #fff;
            text-decoration: none;
            padding: .8rem 1.1rem;
            border-radius: 999px;
            font-weight: 800;
            box-shadow: 0 10px 26px rgba(29, 185, 147, .28);
            border: none;
            cursor: pointer;
        }

        .ch-scope .ch-btn:hover { background: var(--accent-hover); }

        @media (min-width:768px) {
            .ch-scope .ch-hero { padding: 64px 0; }
            .ch-scope .ch-title { font-size: 48px; }
            .ch-scope .ch-sub { font-size: 1.05rem; }
        }

        @media (min-width:1200px) {
            .ch-scope .ch-title { font-size: 60px; }
            .ch-scope .ch-br { display: inline; }
        }

        /* INTRO TEXT */
        .ch-scope .ch-intro-text { 
            background: #fff;
            color: var(--ink);
            padding: 28px 0;
            text-align: center;
        }

        .ch-scope .ch-intro-text p {
            max-width: 80ch;
            margin: 0 auto 1em;
            text-align: left;
            line-height: 1.6;
            color: var(--ink);
            font-size: 1.05rem;
        }

        /* PROBLEM */
        .ch-scope .ch-problem {
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            background: #f8fafc;
            color: var(--ink);
            padding: 40px 0;
            text-align: center;
            overflow: hidden;
        }

        .ch-scope .eyebrow {
            display: inline-block;
            padding: .35rem .6rem;
            border-radius: 999px;
            background: var(--pill-bg);
            color: var(--accent-ink);
            font-weight: 700;
            font-size: .72rem;
            letter-spacing: .06em;
        }

        .ch-scope .ch-h2 {
            font-size: clamp(32px, 4vw, 42px);
            line-height: 1.15;
            letter-spacing: -.02em;
            margin: 10px 0 6px;
            font-weight: 800;
            text-wrap: balance;
            text-align: center;
        }

        .ch-scope .ch-sub2 {
            color: var(--muted);
            margin: 0 auto 18px;
            max-width: 70ch;
        }

        .ch-scope .pr-grid {
            display: grid;
            gap: clamp(16px, 2vw, 32px);
            width: 100%;
            margin: 0;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            align-items: stretch;
            max-width: 1100px;
            margin-inline: auto;
        }

        .ch-scope .pr-visual {
            margin-inline: auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .ch-scope .pr-card {
            background: var(--card);
            border: none;
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
            text-align: left;
        }

        .ch-scope .pr-title {
            margin: 0 0 10px;
            font-size: 1.05rem;
        }

        .ch-scope .pr-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 10px;
        }

        .ch-scope .pr-list--check li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--ink);
            font-weight: 500;
            font-size: .95rem;
        }

        .ch-scope .pr-list--check li::before {
            content: "";
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%231db993" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>');
            background-size: contain;
            background-repeat: no-repeat;
        }

        @media (min-width:900px) {
            .ch-scope .pr-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 40px;
                align-items: center;
            }
        }
        
        /* ROI */
        .ch-scope .ch-roi {      
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            color: var(--ink);
            padding: 40px 0;
            text-align: center;
            overflow: hidden;
            background: #fff;
        }
        
        .ch-scope .roi-main-grid {
            display: grid;
            gap: 24px;
            text-align: left;      
            align-items: center;
            flex-grow: 1;
        }

        .ch-scope .roi-card {
            background: var(--card);
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
            margin-top: 24px;
            max-width: 900px;
            margin-inline: auto;
        }

        .ch-scope .roi-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            margin: 0;
            text-align: left;
        }

        .ch-scope .roi-item {
            display: grid;
            gap: 4px;
            background: #fff;
            border: 1px solid #eef3f6;
            border-radius: 8px;
            padding: 12px;
        }

        .ch-scope .roi-label { font-weight: 600; font-size: .9rem; color: var(--ink); }
        .ch-scope input[type="range"] { width: 100%; accent-color: var(--accent); }
        .ch-scope output { font-weight: 700; color: var(--accent); }

        .ch-scope .roi-result {
            display: grid;
            gap: 4px;
            grid-template-columns: 1fr;
            max-width: 760px;
            margin: 0;
            background: linear-gradient(180deg, #fbfdfc 0%, #f5fbf8 100%);
            border: 2px solid rgba(23, 156, 121, 0.3);
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(23, 156, 121, 0.15);
            padding: 20px;
            text-align: center;
        }

        .ch-scope .rr-kicker {
            display: block;
            color: #167f65;
            font-weight: 600;
            font-size: 0.85rem;
            margin-bottom: 4px;
        }

        .ch-scope .rr-value {
            font-size: 2rem;
            font-weight: 800;
        }

        @media (min-width:900px) {
            .ch-scope .roi-main-grid { grid-template-columns: 2fr 1fr; }
            .ch-scope .roi-result { grid-template-columns: 1fr; }
            .ch-scope .rr-value { font-size: 2.4rem; }
        }

        /* PRICING */
        .ch-scope .ch-pricing {
            background: #fff;
            color: var(--ink);
            padding: 64px 0 48px;
            text-align: center;
        }

        .ch-scope .cp-heading { max-width: 720px; margin: 0 auto 40px; }
        .ch-scope .cp-heading h2 { font-size: clamp(28px, 4vw, 42px); font-weight: 800; margin: 0 0 10px; }
        .ch-scope .cp-heading p { color: var(--muted); font-size: 1rem; line-height: 1.6; margin: 0; }

        .ch-scope .cp-cards {
            max-width: 985px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            text-align: left;
        }

        .ch-scope .cp-card {
            background: var(--card);
            border-radius: 18px;
            box-shadow: 0 10px 25px rgba(15, 23, 42, .06);
            padding: 36px 28px 28px;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .ch-scope .cp-premium {
            background: linear-gradient(180deg, rgba(29, 185, 147, 0.08), rgba(29, 185, 147, 0.02)), var(--card);
            border: 1px solid rgba(29, 185, 147, 0.18);
        }

        .ch-scope .cp-title { font-size: 22px; font-weight: 800; margin: 0 0 16px; }
        .ch-scope .cp-sub { color: var(--muted); font-size: .92rem; margin: 0 0 14px; }
        .ch-scope .cp-sub strong { color: var(--ink); }

        .ch-scope .cp-features {
            list-style: none;
            margin: 0 0 24px;
            padding: 0;
            display: grid;
            gap: 10px;
            font-size: .92rem;
        }

        .ch-scope .cp-features li {
            display: grid;
            grid-template-columns: 18px 1fr;
            align-items: start;
            gap: 10px;
            color: var(--ink);
        }

        .ch-scope .cp-i { width: 16px; height: 16px; display: inline-block; margin-top:2px; }
        .ch-scope .cp-i--check { background: center/contain no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M4.3 9.5c-.23 0-.45-.09-.62-.26L.46 6.02a.88.88 0 0 1 0-1.24.88.88 0 0 1 1.24 0l2.6 2.6L10.3 1.4a.88.88 0 0 1 1.24 0 .88.88 0 0 1 0 1.24L4.92 9.24c-.17.17-.39.26-.62.26Z" fill="%231db993"/></svg>'); }
        .ch-scope .cp-i--plus { background: center/contain no-repeat url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10.8 6.9H1.2a.9.9 0 1 1 0-1.8h9.6a.9.9 0 1 1 0 1.8Z" fill="%23169b78"/><path d="M6.9 10.8V1.2a.9.9 0 1 0-1.8 0v9.6a.9.9 0 1 0 1.8 0Z" fill="%23169b78"/></svg>'); }

        .ch-scope .cp-price {
            margin-top: auto;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
            padding-top: 16px;
            text-align: center;
        }

        .ch-scope .cp-starting, .ch-scope .cp-per {
            color: var(--muted);
            font-size: .82rem;
            margin: 0 0 4px;
        }

        .ch-scope .cp-now {
            font-size: clamp(28px, 4vw, 38px);
            font-weight: 800;
            line-height: 1;
            margin: 4px 0;
            display: inline-block;
        }

        .ch-scope .cp-btn {
            display: inline-block;
            margin-top: 12px;
            background: var(--accent);
            color: #fff;
            padding: 11px 20px;
            border-radius: 12px;
            font-weight: 800;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 18px rgba(29, 185, 147, 0.22);
            transition: transform .1s, background .15s;
        }

        .ch-scope .cp-btn:hover { background: var(--accent-hover); transform: translateY(-1px); }

        @media (max-width:880px) { .ch-scope .cp-cards { grid-template-columns: 1fr; } }

        /* STEPS */
        .ch-scope .ch-steps {
            width: 100vw;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            color: var(--ink);
            padding: 44px 0;
            overflow: hidden;
        }

        .ch-scope .sv-pill {
            display: inline-block;
            padding: .38rem .65rem;
            border-radius: 999px;
            background: var(--pill-bg);
            color: #169b78;
            font-weight: 700;
            font-size: .72rem;
            letter-spacing: .06em;
        }

        .ch-scope .sv-grid {
            list-style: none;
            margin: 24px auto 0;
            padding: 0;
            display: grid;
            gap: 20px;
            max-width: 1100px;
        }

        .ch-scope .sv-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            text-align: left;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .ch-scope .sv-card-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
        }

        .ch-scope .sv-h3 {
            margin: 0 0 8px;
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--ink);
        }

        .ch-scope .sv-text {
            margin: 0;
            font-size: 0.9rem;
            color: var(--muted);
            line-height: 1.55;
        }

        .ch-scope .sv-step-content {
            flex: 1;
            padding: 20px;
        }

        .ch-scope .sv-steps-column {
            list-style: none;
            display: grid;
            gap: 20px;
            padding: 0;
        }

        @media (min-width:900px) {
            .ch-scope .sv-steps-column {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        /* FAQ */
        .ch-scope .ch-faq {
            background: #fff;
            color: var(--ink);
            padding: 48px 0;
            text-align: center;
        }

        .ch-scope .faq-pill {
            display: inline-block;
            padding: .36rem .7rem;
            border-radius: 999px;
            background: var(--pill-bg);
            color: var(--accent-ink);
            font-weight: 700;
            font-size: .72rem;
            letter-spacing: .06em;
        }

        .ch-scope .faq-list {
            max-width: 880px;
            margin: 20px auto 0;
            display: grid;
            gap: 12px;
            text-align: left;
        }

        .ch-scope .faq-item {
            border: 1px solid var(--border);
            border-radius: 14px;
            background: #f7faf9;
            transition: background .2s ease;
        }

        .ch-scope .faq-item-open {
            background: #fff;
        }

        .ch-scope .faq-q {
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
            color: var(--ink);
        }

        .ch-scope .faq-a {
            overflow: hidden;
            display: block;   
        }

        .ch-scope .faq-a > p {
            padding: 2px 16px 14px;
            margin: 0;
            color: var(--muted);
            border-top: 1px solid var(--border);
        }

        /* CTA */
        .ch-scope .cf-actions {
            display: flex;
            justify-content: center;
        }
        .ch-scope .cf-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            border-radius: 999px;
            font-weight: 800;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        .ch-scope .cf-primary {
            background: var(--accent);
            color: #fff;
            box-shadow: 0 8px 24px rgba(29, 185, 147, .22);
            transition: background .15s;
        }
        .ch-scope .cf-primary:hover { background: var(--accent-hover); }

        .va-btn {
            display: inline-flex;
            align-items: center;
            gap: .55rem;
            background: #000;
            color: #fff;
            padding: .8rem 1.1rem;
            border-radius: 999px;
            font-weight: 800;
            box-shadow: 0 10px 26px rgba(0,0,0,.28);
            border: none;
            cursor: pointer;
            transition: transform .1s;
        }
        .va-btn:hover { transform: translateY(-1px); }

        /* Animation */
        @keyframes ch-spin { to { transform:rotate(360deg); } }
        .ch-spin { animation: ch-spin 1s linear infinite; }
        
        /* Modal native styles built into react inline component scope below... */
        .popup-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
            z-index: 1000; display: flex; justify-content: flex-end; align-items: center;
        }
        .popup-container {
            width: 800px; height: 85vh; background: #fff;
            border-radius: 16px 0 0 16px; box-shadow: -10px 0 30px rgba(0,0,0,0.2);
            display: flex; flex-direction: column;
            animation: slideInRight .3s ease-out;
        }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .popup-header {
            display: flex; justify-content: space-between; align-items: center;
            padding: 20px; border-bottom: 1px solid #eef3f6;
        }
        .popup-header h3 { margin: 0; font-size: 1.25rem; font-weight: 800; color: var(--ink); }
        .popup-close { background: none; border: none; cursor: pointer; padding: 8px; border-radius: 8px; color: var(--muted); }
        .popup-close:hover { background: #f5f5f5; color: var(--ink); }
        .popup-content { flex: 1; overflow: hidden; }
        .form-container { padding: 20px; height: 100%; overflow-y: auto; text-align: left; }
        .form-intro { color: var(--muted); margin: 0 0 20px 0; font-size: .95rem; line-height: 1.5; text-align: center; }
        .popup-form { display: flex; flex-direction: column; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 5px; }
        .form-field-full { grid-column: 1/-1; }
        .form-field input, .form-field select, .form-field textarea {
            padding: 10px 12px; border: 1px solid var(--border); border-radius: 10px;
            font-size: .95rem; background: #fff; color: var(--ink); outline: 0;
        }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(29,185,147,.12); }
        .popup-submit-btn {
            display: inline-flex; align-items: center; justify-content: center; gap: 8px;
            padding: 12px 24px; background: var(--accent); color: white; border: none; border-radius: 999px;
            font-weight: 800; cursor: pointer; transition: background-color .2s ease;
        }
        .popup-submit-btn:hover:not(:disabled) { background: var(--accent-hover); }
        .popup-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-note { text-align: center; color: var(--muted); font-size: .85rem; margin: 8px 0 0 0; }
        @media (max-width:768px) { .popup-container { width: 100%; height: 100vh; border-radius: 0; } .popup-overlay { justify-content: center; } }
      `}</style>

            <div className="ch-scope">

                {/* ============== HERO ============== */}
                <section className="ch-hero" aria-labelledby="ch-hero-title">
                    <div className="ch-container">
                        <span className="ch-pill">AI VOICE AGENT</span>
                        <h1 id="ch-hero-title" className="ch-title">
                            Boost Your Revenue <br className="ch-br" />with AI Voice Agents
                        </h1>
                        <p className="ch-sub">
                            Never miss a customer again!<br />
                            Capture leads, qualify prospects, and secure more sales opportunities automatically
                        </p>
                        <button onClick={() => setModalOpen(true)} className="ch-btn" aria-label="Book a demo">
                            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8a1 1 0 0 1 1.1-.22c1.2.48 2.5.74 3.8.74a1 1 0 0 1 1 1v2.9a1 1 0 0 1-1 1C11.7 20.8 3.2 12.3 3.2 1.9a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1c0 1.3.25 2.6.74 3.8a1 1 0 0 1-.22 1.1l-1.8 1.8Z" fill="currentColor" />
                            </svg>
                            Book a Demo
                        </button>
                    </div>
                </section>

                {/* ============== INTRO TEXT ============== */}
                <section className="ch-intro-text">
                    <div className="ch-container">
                        <span className="sv-pill">INSIGHTS &amp; VALUE</span>
                        <br /><br />
                        <p>
                            As businesses increasingly recognize AI chatbots as an operational necessity rather than a discretionary innovation, many continue to face challenges in scaling beyond initial pilots. Research from McKinsey, Deloitte, and BCG highlights a persistent gap between ambition and execution—leading to delayed returns and higher costs than anticipated.
                            These challenges often stem from rushed deployment, insufficient AI design and training, and limited institutional AI expertise. In many cases, businesses are tempted by &quot;quick ROI&quot; promises that fail to deliver sustainable impact.
                        </p>
                        <p>
                            Automate4u partners with businesses to close this gap—guiding teams from concept to implementation and capability building. Our collaborative approach ensures AI solutions are strategically aligned, technically sound, and embedded for long-term value creation.
                        </p>
                    </div>
                </section>

                {/* ============== PROCESS ============== */}
                <section className="ch-steps" aria-labelledby="steps-title">
                    <div className="ch-container" style={{ textAlign: "center" }}>
                        <span className="sv-pill">HOW IT WORKS</span>
                        <h2 id="steps-title" className="ch-h2">How We Help Clients</h2>
                        <div className="sv-grid">
                            <ol className="sv-steps-column">
                                <li className="sv-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="sv-card-img" src="/images/services/discoveryphase.jpg" alt="Illustration of the chatbot implementation process." />
                                    <div className="sv-step-content">
                                        <h3 className="sv-h3">Discover</h3>
                                        <p className="sv-text">We help businesses assess their AI readiness and capability to execute transformation at scale. We begin by mapping key business intents—whether to improve conversion, elevate customer satisfaction, or extend support coverage. Alongside, we conduct structured requirements-gathering sessions to capture functional, technical, and compliance needs that will guide design decisions. We also assess the existing tech stack, integration landscape, and governance practices to ensure your solution is both scalable and sustainable.</p>
                                    </div>
                                </li>
                                <li className="sv-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="sv-card-img" src="/images/services/voiceagents1.webp" alt="Illustration of the chatbot implementation process." />
                                    <div className="sv-step-content">
                                        <h3 className="sv-h3">Development &amp; Design</h3>
                                        <p className="sv-text">We translate strategic objectives and requirements into a scalable AI framework. Our approach includes architecting optimal conversational flows, enabling seamless integrations, and prioritizing user experience and compliance. A key focus during this phase is the rigorous training of AI models, leveraging curated datasets and ongoing refinement processes to ensure the agent delivers consistent, accurate, and adaptive responses over time. By validating design decisions through iterative prototyping, we build solutions that are resilient.</p>
                                    </div>
                                </li>
                                <li className="sv-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img className="sv-card-img" src="/images/services/voiceag.png" alt="Illustration of the chatbot implementation process." />
                                    <div className="sv-step-content">
                                        <h3 className="sv-h3">Deploy &amp; Improve</h3>
                                        <p className="sv-text">We focus on seamless rollout and operational stabilization. Our team executes a rigorous deployment plan, including end-to-end integration, quality assurance, and user acceptance testing to minimize disruption and maximize adoption. Post-launch, our warranty program offers proactive support and ongoing performance monitoring to address any issues promptly. Equally important is our commitment to capability building—equipping your teams with best practices, troubleshooting skills, and upgrade paths to sustain efficacy.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* ============== DEMO ============== */}
                <section className="ch-problem" aria-labelledby="prob-title">
                    <div className="ch-container">
                        <p className="eyebrow">VOICE AGENT DEMO</p>
                        <h2 id="prob-title" className="ch-h2">Test out our basic AI Voice Agent that you could have for your business</h2>
                        <br />

                        <div className="pr-grid">
                            <div className="pr-visual">
                                <button className="va-btn" type="button" onClick={launchRetellVoice} disabled={callStarting} style={{ backgroundColor: callActive ? '#dc2626' : '#000' }}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                                        <path fill="currentColor" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3h2a7 7 0 0 1-14 0h2a5 5 0 0 0 10 0Zm-7 6h4v2h-4v-2Z" />
                                    </svg>
                                    {callStarting ? 'Connecting...' : callActive ? 'End Call' : 'Try now (Call Demo)'}
                                </button>
                            </div>
                            <div className="pr-cards-stack">
                                <div className="pr-card">
                                    <div className="pr-content-section">
                                        <h3 className="pr-title">Our Core Capabilities</h3>
                                        <div className="pr-body">
                                            <ul className="pr-list pr-list--check">
                                                <li>24/7 functioning - no after hour leads missed</li>
                                                <li>Smart call routing - keeping sales moving</li>
                                                <li>Positive demeanor — builds convenience with every caller</li>
                                                <li>Automated reminders - more appointments to revenue</li>
                                                <li>Seamless CRM &amp; Calendar integration</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cf-actions" style={{ marginTop: 32 }}>
                            <button className="cf-btn cf-primary" onClick={() => setModalOpen(true)}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                                    <path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8a1 1 0 0 1 1.1-.22c1.2.48 2.5.74 3.8.74a1 1 0 0 1 1 1v2.9a1 1 0 0 1-1 1C11.7 20.8 3.2 12.3 3.2 1.9a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1c0 1.3.25 2.6.74 3.8a1 1 0 0 1-.22 1.1l-1.8 1.8Z" fill="currentColor" />
                                </svg>
                                Add your own voice agent today
                            </button>
                        </div>
                    </div>
                </section>

                {/* ============== ROI CALCULATOR ============== */}
                <section className="ch-roi" aria-labelledby="roi-title">
                    <div className="ch-container">
                        <p className="eyebrow">VOICE ROI</p>
                        <h2 id="roi-title" className="ch-h2">How Much Could AI Voice Agent Save You?</h2>
                        <p className="ch-sub2">Use our calculator to estimate your potential monthly savings by deflecting repetitive support calls with AI.</p>
                        <div className="roi-card">
                            <div className="roi-main-grid">
                                <div className="roi-grid" aria-describedby="roi-note">
                                    <label className="roi-item">
                                        <span className="roi-label">Tickets / Calls per month</span>
                                        <input type="range" min="200" max="10000" value={volume} step="100" aria-label="Monthly volume" onChange={(e) => setVolume(Number(e.target.value))} />
                                        <output>{volume.toLocaleString()}</output>
                                    </label>
                                    <label className="roi-item">
                                        <span className="roi-label">Deflection rate</span>
                                        <input type="range" min="10" max="80" value={deflect} step="5" aria-label="Deflection rate" onChange={(e) => setDeflect(Number(e.target.value))} />
                                        <output>{deflect}%</output>
                                    </label>
                                    <label className="roi-item">
                                        <span className="roi-label">Cost per human ticket (USD)</span>
                                        <input type="range" min="4" max="40" value={cost} step="1" aria-label="Cost per ticket" onChange={(e) => setCost(Number(e.target.value))} />
                                        <output>${cost}</output>
                                    </label>
                                </div>
                                <div className="roi-result" role="status" aria-live="polite">
                                    <span className="rr-kicker">Projected Monthly Savings</span>
                                    <div className="rr-value">
                                        {monthlySavings.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============== PRICING ============== */}
                <section className="ch-pricing" aria-labelledby="pricing-title">
                    <div className="ch-container">
                        <p className="eyebrow">PRICING</p>
                        <div className="cp-heading">
                            <h2 id="pricing-title">What Your Investment Will Be</h2>
                            <p>Understanding that the first chatbot implementation is a pivotal decision point, we provide differentiated solutions designed to minimize upfront commitments while maximizing flexibility.</p>
                        </div>

                        <div className="cp-cards">
                            <article className="cp-card">
                                <h3 className="cp-title">Standard</h3>
                                <ul className="cp-features">
                                    <li><span className="cp-i cp-i--check" aria-hidden="true" />Agent assigned local phone number</li>
                                    <li><span className="cp-i cp-i--check" />Instant response to FAQs and common requests</li>
                                    <li><span className="cp-i cp-i--check" />Lead capture with name, email, and phone</li>
                                    <li><span className="cp-i cp-i--check" />Business hours routing &amp; away message</li>
                                    <li><span className="cp-i cp-i--check" />Basic integration (Google Sheets, Webhooks)</li>
                                    <li><span className="cp-i cp-i--check" />Analytics dashboard (conversations, leads)</li>
                                    <li><span className="cp-i cp-i--check" />SMS & Email transcript delivery</li>
                                </ul>
                                <div className="cp-price">
                                    <p className="cp-starting">Starting at</p>
                                    <div className="cp-price-row">
                                        <span className="cp-now">$300</span>
                                    </div>
                                    <p className="cp-per">per site, per month</p>
                                    <button onClick={() => setModalOpen(true)} className="cp-btn">Book a Demo</button>
                                </div>
                            </article>

                            <article className="cp-card cp-premium">
                                <h3 className="cp-title">Premium</h3>
                                <p className="cp-sub">Everything in <strong>Standard</strong>, plus:</p>
                                <ul className="cp-features">
                                    <li><span className="cp-i cp-i--plus" />Outbound calling capabilities</li>
                                    <li><span className="cp-i cp-i--plus" />Calendar &amp; booking integration</li>
                                    <li><span className="cp-i cp-i--plus" />CRM sync (HubSpot, Pipedrive, Zapier)</li>
                                    <li><span className="cp-i cp-i--plus" />Advanced routing &amp; conditional workflows</li>
                                    <li><span className="cp-i cp-i--plus" />Smart handoff with chat history &amp; transcript</li>
                                    <li><span className="cp-i cp-i--plus" />Sentiment detection &amp; escalation rules</li>
                                    <li><span className="cp-i cp-i--plus" />API access &amp; custom actions</li>
                                    <li><span className="cp-i cp-i--plus" />Priority support &amp; optimization reviews</li>
                                </ul>
                                <div className="cp-price">
                                    <p className="cp-starting">Starting at</p>
                                    <div className="cp-price-row">
                                        <span className="cp-now">$399</span>
                                    </div>
                                    <p className="cp-per">per site, per month</p>
                                    <button onClick={() => setModalOpen(true)} className="cp-btn">Book a Demo</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* ============== FAQ ============== */}
                <section className="ch-faq" aria-labelledby="faq-title">
                    <div className="ch-container">
                        <span className="faq-pill">FAQ</span>
                        <h2 id="faq-title" className="ch-h2">Key Information for Informed Decision Making</h2>

                        <div className="faq-list">
                            <FaqItem q="Do your AI Voice Agents integrate with my CRM & Booking System?" a="Yes. Our AI Voice Agents are designed to integrate seamlessly with hundreds of popular CRMs, calendars, and booking systems like Salesforce, HubSpot, Calendly, and more. We handle the connection so your data flows exactly where it needs to go." />
                            <FaqItem q="Does it Sound Human-Like?" a="Absolutely. We use state-of-the-art, low-latency voice technology that sounds remarkably human. The agents have natural pacing, intonation, and can even understand and respond to interruptions, ensuring a smooth and positive experience for your customers." />
                            <FaqItem q="Can You Trust The AI?" a="Yes. We build our agents with strict 'guardrails' to ensure they stick to their script, follow your business rules, and only perform the tasks they are designed for. All conversations are logged, and we can implement fallback flows to transfer to a human agent if needed." />
                            <FaqItem q="How Long Does Development Take?" a="Most of our AI Voice Agent solutions are designed and launched in under 3 weeks. We prioritize a fast, iterative process so you can start seeing results and a return on your investment as quickly as possible." />
                            <FaqItem q="Do You Offer Support?" a="Yes, we provide ongoing support and optimization for all our agents. We monitor performance, make adjustments based on real-world data, and are available to help you scale or modify your agent's capabilities as your business grows." />
                            <FaqItem q="Can You Make Edits to the Agents?" a="Definitely. Your business needs can change, and your agent should adapt. We can easily update scripts, change workflows, or adjust integrations. Most changes can be deployed quickly without any downtime." />
                            <FaqItem q="How Much Does Development Cost?" a="Pricing depends on the complexity of the agent and the call volume. We offer transparent, flexible pricing with a clear breakdown for the initial build and ongoing service. Contact us for a free consultation and a detailed quote tailored to your needs." />
                        </div>
                    </div>
                </section>
            </div>

            <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
