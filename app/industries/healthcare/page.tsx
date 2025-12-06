import React from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
    .hs-pro-scope {
        display: block;
    }

    .hs-pro-scope * {
        box-sizing: border-box;
    }

    /* Tokens */
    .hs-pro-scope {
        --ink: #0e1520;
        --muted: #6a7786;
        --accent: #1db993;
        --accent-2: #159a78;
        --bg: #ffffff;
        --panel: #f7f9fb;
        --border: #e5edf2;
        --pill: #e9f9f3;
        --radius: 18px;
    }

    /* Layout */
    .hs-pro-scope .hs-container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Type */
    .hs-pro-scope .hs-h1 {
        margin: 8px 0 8px;
        font-size: 40px;
        line-height: 1.08;
        letter-spacing: -.01em;
        font-weight: 700;
    }

    .hs-pro-scope .hs-h2 {
        margin: 10px 0 6px;
        font-size: 28px;
        line-height: 1.15;
        letter-spacing: -.01em;
        font-weight: 700;
    }

    .hs-pro-scope .hs-h3 {
        margin: 0 0 6px;
        font-size: 1.05rem;
        font-weight: 600;
    }

    .hs-pro-scope .hs-h4 {
        margin: 0 0 6px;
        font-size: 1rem;
        font-weight: 600;
    }

    .hs-pro-scope .hs-p {
        margin: 0 0 8px;
        color: var(--ink);
    }

    .hs-pro-scope .hs-lead {
        color: var(--muted);
        max-width: 75ch;
        margin: 0 0 12px;
    }

    /* Buttons */
    .hs-pro-scope .hs-btn {
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        padding: .7rem 1rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
        border: 1px solid transparent;
    }

    .hs-pro-scope .hs-primary {
        background: linear-gradient(180deg, var(--accent), var(--accent-2));
        color: #fff;
        box-shadow: 0 8px 22px rgba(29, 185, 147, .18);
    }

    .hs-pro-scope .hs-primary:hover {
        filter: brightness(.98);
    }

    /* Header */
    .hs-pro-scope .hs-head {
        background: var(--bg);
        padding: 48px 0 28px;
    }

    .hs-pro-scope .hs-head-grid {
        display: grid;
        gap: 40px;
        align-items: center;
    }

    .hs-pro-scope .hs-head-content {
        max-width: 100%;
    }

    .hs-pro-scope .hs-head-image {
        display: none;
    }

    .hs-pro-scope .hs-head-image img {
        width: 100%;
        height: auto;
        border-radius: var(--radius);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    @media (min-width: 920px) {
        .hs-pro-scope .hs-head-grid {
            grid-template-columns: 1fr 1fr;
        }

        .hs-pro-scope .hs-head-image {
            display: block;
        }
    }

    .hs-pro-scope .hs-meta-list {
        display: flex;
        gap: 10px 12px;
        flex-wrap: wrap;
        margin: 12px 0 0;
        padding: 0;
        list-style: none;
    }

    .hs-pro-scope .hs-meta-list li {
        background: #eef5f8;
        color: #415467;
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: .28rem .6rem;
        font-weight: 600;
        font-size: .8rem;
    }

    /* Dynamics */
    .hs-pro-scope .hs-dynamics {
        background: #fff;
        padding: 22px 0 14px;
    }

    .hs-pro-scope .hs-columns {
        display: grid;
        gap: 24px;
        margin-top: 16px;
    }

    .hs-pro-scope .hs-panel {
        background: transparent;
        border: none;
        padding: 0;
    }

    .hs-pro-scope .hs-list {
        margin: 8px 0 0;
        padding-left: 20px;
        color: var(--ink);
        list-style: disc;
    }

    .hs-pro-scope .hs-list li {
        margin: 8px 0;
        line-height: 1.5;
    }

    @media (min-width:880px) {
        .hs-pro-scope .hs-columns {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* Capabilities */
    .hs-pro-scope .hs-capabilities {
        background: #fff;
        padding: 28px 0;
    }

    .hs-pro-scope .hs-cap-accordion {
        margin-top: 16px;
        border-top: 1px solid var(--border);
    }

    .hs-pro-scope .hs-cap-detail {
        border-bottom: 1px solid var(--border);
    }

    .hs-pro-scope .hs-cap-summary {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 0;
        cursor: pointer;
        list-style: none;
        user-select: none;
    }

    .hs-pro-scope .hs-cap-summary::-webkit-details-marker {
        display: none;
    }

    .hs-pro-scope .hs-cap-title {
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--ink);
    }

    .hs-pro-scope .hs-cap-icon {
        width: 24px;
        height: 24px;
        position: relative;
        flex-shrink: 0;
    }

    .hs-pro-scope .hs-cap-icon::before,
    .hs-pro-scope .hs-cap-icon::after {
        content: '';
        position: absolute;
        background: var(--ink);
        transition: transform 0.3s ease;
    }

    .hs-pro-scope .hs-cap-icon::before {
        width: 16px;
        height: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .hs-pro-scope .hs-cap-icon::after {
        width: 2px;
        height: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .hs-pro-scope .hs-cap-detail[open] .hs-cap-icon::after {
        transform: translate(-50%, -50%) rotate(90deg);
        opacity: 0;
    }

    .hs-pro-scope .hs-cap-content {
        padding: 0 0 24px 0;
        max-width: 900px;
    }

    .hs-pro-scope .hs-bullets {
        margin: 12px 0 0;
        padding-left: 20px;
        color: var(--ink);
        list-style: disc;
    }

    .hs-pro-scope .hs-bullets li {
        margin: 8px 0;
        line-height: 1.5;
    }

    @media (min-width:880px) {
        .hs-pro-scope .hs-cap-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* Impact (optional section kept for parity but not displayed) */

    /* Cases */
    .hs-pro-scope .hs-cases {
        background: #fff;
        padding: 26px 0;
    }

    .hs-pro-scope .hs-case-grid {
        display: grid;
        gap: 24px;
        margin-top: 16px;
    }

    .hs-pro-scope .hs-case {
        background: transparent;
        border: none;
        padding: 0;
    }

    @media (min-width:880px) {
        .hs-pro-scope .hs-case-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* Approach (omitted to keep page concise; can be re-enabled if desired) */

    /* Tech */
    .hs-pro-scope .hs-tech {
        background: #fff;
        padding: 28px 0;
    }

    .hs-pro-scope .hs-tech-intro {
        color: var(--muted);
        max-width: 75ch;
        margin: 8px 0 24px;
    }

    .hs-pro-scope .hs-tech-categories {
        display: grid;
        gap: 24px;
        margin-top: 20px;
    }

    @media (min-width: 768px) {
        .hs-pro-scope .hs-tech-categories {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .hs-pro-scope .hs-tech-category {
        background: var(--panel);
        border-radius: 12px;
        padding: 20px;
    }

    .hs-pro-scope .hs-tech-cat-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0 0 12px;
    }

    .hs-pro-scope .hs-logo-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .hs-pro-scope .hs-logo {
        color: var(--ink);
        font-size: .95rem;
        padding: 10px 14px;
        border: 1px solid var(--border);
        border-radius: 8px;
        background: #fff;
        text-align: left;
        font-weight: 500;
    }

    .hs-pro-scope .hs-arch {
        margin: 32px 0 0;
        padding: 20px;
        background: var(--panel);
        border-radius: 12px;
        border: 1px solid var(--border);
    }

    .hs-pro-scope .hs-arch summary {
        cursor: pointer;
        font-weight: 600;
        font-size: 1.05rem;
        color: var(--ink);
        list-style: none;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .hs-pro-scope .hs-arch summary::-webkit-details-marker {
        display: none;
    }

    .hs-pro-scope .hs-arch summary::before {
        content: '+';
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--accent);
        line-height: 1;
    }

    .hs-pro-scope .hs-arch[open] summary::before {
        content: '−';
    }

    .hs-pro-scope .hs-arch-content {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--border);
    }

    .hs-pro-scope .hs-arch-list {
        margin: 12px 0 0;
        padding-left: 20px;
        list-style: none;
    }

    .hs-pro-scope .hs-arch-list li {
        margin: 12px 0;
        line-height: 1.6;
        position: relative;
        padding-left: 0;
    }

    .hs-pro-scope .hs-arch-list li strong {
        color: var(--accent-2);
        font-weight: 600;
    }

    /* Governance */
    .hs-pro-scope .hs-governance {
        background: #fff;
        padding: 24px 0;
    }

    .hs-pro-scope .hs-governance .hs-columns {
        gap: 24px;
    }

    .hs-pro-scope .hs-governance .hs-panel {
        margin-bottom: 0;
    }

    /* Insights */
    .hs-pro-scope .hs-insights {
        background: #fff;
        padding: 24px 0;
    }

    .hs-pro-scope .hs-insight-list {
        margin: 16px 0 0;
        padding-left: 20px;
        list-style: disc;
    }

    .hs-pro-scope .hs-insight-list li {
        margin: 10px 0;
        line-height: 1.5;
    }

    /* Contact */
    .hs-pro-scope .hs-contact {
        background: #fff;
        padding: 26px 0 34px;
    }

    .hs-pro-scope .hs-form {
        max-width: 880px;
        margin: 10px auto 0;
    }

    .hs-pro-scope .hs-form-grid {
        display: grid;
        gap: 12px;
    }

    .hs-pro-scope .hs-field {
        display: grid;
        gap: 6px;
    }

    .hs-pro-scope .hs-field--full {
        grid-column: 1/-1;
    }

    .hs-pro-scope .hs-label {
        font-weight: 600;
        color: #16212b;
    }

    .hs-pro-scope input,
    .hs-pro-scope select,
    .hs-pro-scope textarea {
        width: 100%;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--border);
        background: #fff;
        color: #0f1520;
    }

    .hs-pro-scope .hs-actions {
        margin-top: 12px;
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .hs-pro-scope .hs-small {
        margin: 0;
        color: var(--muted);
        font-size: .9rem;
    }

    /* Footer tag */
    .hs-pro-scope .hs-foot {
        background: #fff;
        padding: 12px 0 36px;
        text-align: center;
    }

    .hs-pro-scope .hs-mark {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #365160;
        background: var(--pill);
        padding: .36rem .62rem;
        border-radius: 999px;
        font-weight: 600;
        font-size: .84rem;
    }

    /* Responsive headings */
    @media (min-width:920px) {
        .hs-pro-scope .hs-h1 {
            font-size: 48px;
        }

        .hs-pro-scope .hs-h2 {
            font-size: 32px;
        }
    }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-industry="clinics-healthcare">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">Clinics & Healthcare</h1>
                    <p class="hs-lead">
                        Outpatient providers face rising patient expectations, staffing constraints, and complex payer
                        policies.
                        We help clinics improve patient access, reduce no-shows, and streamline clinical and revenue
                        workflows
                        through targeted automation, integrations, and decision support.
                    </p>
                    <ul class="hs-meta-list" aria-label="Sector coverage">
                        <li>Primary Care</li>
                        <li>Dental</li>
                        <li>Dermatology</li>
                        <li>Physiotherapy</li>
                        <li>Mental Health</li>
                        <li>Optometry</li>
                        <li>Imaging / Labs</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="http://automate4u.co/wp-content/uploads/2025/11/healthcare.jpg"
                        alt="Modern outpatient clinic reception desk" />
                </div>
            </div>
        </div>
    </section>

    <!-- ================= SECTOR DYNAMICS ================= -->
    <section class="hs-dynamics" aria-labelledby="hs-dyn-title">
        <div class="hs-container">
            <h2 id="hs-dyn-title" class="hs-h2">What’s shaping the sector</h2>

            <div class="hs-columns">
                <article class="hs-panel">
                    <h3 class="hs-h3">Operational realities</h3>
                    <ul class="hs-list">
                        <li>Peaks in inbound calls and messages lead to long hold times and missed appointments.</li>
                        <li>No-shows and late cancellations disrupt provider utilization and access.</li>
                        <li>Manual pre-visit intake, prior auth, and referrals slow clinical throughput.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Patient expectations</h3>
                    <ul class="hs-list">
                        <li>Immediate acknowledgement, online self-scheduling, and transparent wait times.</li>
                        <li>Clear prep instructions, coordinated referrals, and status updates in plain language.</li>
                        <li>Frictionless digital forms, e-signature, payments, and feedback capture.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Technology enablers</h3>
                    <ul class="hs-list">
                        <li>Voice/chat reception with eligibility checks and scheduling guardrails.</li>
                        <li>Workflow orchestration across EHR/PM, RCM, and communication platforms.</li>
                        <li>Document automation for intake, referrals, prior auth, and superbills.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">Capabilities tailored to clinics</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Patient access & scheduling</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Answer calls and chats, qualify requests, propose appointment windows, and place
                            bookings directly on the practice schedule with payer and specialty guardrails.</p>
                        <ul class="hs-bullets">
                            <li>After-hours coverage with escalation to on-call</li>
                            <li>Missed-call rescue + SMS self-scheduling links</li>
                            <li>Eligibility prompts, visit reason routing, and location matching</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Care coordination & triage</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Structured pre-visit intake and evidence-based triage; surface allergies, meds,
                            prior visits, and referral status to clinicians.</p>
                        <ul class="hs-bullets">
                            <li>Pre/post-visit checklists and secure document capture</li>
                            <li>Clinical prompts (red-flags, prep instructions, contraindications)</li>
                            <li>Referral tracking and closed-loop status updates</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Revenue cycle operations</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Automate prior auth preparation, charge capture support, and claim follow-up to
                            accelerate cash and reduce rework.</p>
                        <ul class="hs-bullets">
                            <li>Intake → superbill data extraction</li>
                            <li>Authorization checklists and attachment packages</li>
                            <li>Balance reminders, payment links, and denials worklists</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Patient communications & retention</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Status updates, prep instructions, and outcome surveys with clear opt-in/opt-out
                            controls.</p>
                        <ul class="hs-bullets">
                            <li>Multi-channel reminders and digital forms</li>
                            <li>Waitlist automation to backfill cancellations</li>
                            <li>Review prompts and care-plan follow-ups</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ================= CASE SNAPSHOTS ================= -->
    <section class="hs-cases" aria-labelledby="hs-cases-title">
        <div class="hs-container">
            <h2 id="hs-cases-title" class="hs-h2">Previous engagements</h2>

            <div class="hs-case-grid">
                <article class="hs-case">
                    <h3 class="hs-h4">Primary Care — 5 providers</h3>
                    <ul class="hs-list">
                        <li>After-hours reception + missed-call rescue deployed</li>
                        <li>New appointment capture +18% in eight weeks</li>
                        <li>No-show rate down 22% via SMS forms and reminders</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Dental — 3 locations</h3>
                    <ul class="hs-list">
                        <li>Voice/chat triage with insurance eligibility prompts</li>
                        <li>Front-desk call time reduced 37%</li>
                        <li>Hygiene reactivation raised recall bookings by 24%</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Physiotherapy — 12 clinicians</h3>
                    <ul class="hs-list">
                        <li>Online self-scheduling with waitlist backfill</li>
                        <li>3× faster intake processing with e-forms</li>
                        <li>Plan of care adherence up 15% through follow-ups</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= TECHNOLOGY & INTEGRATIONS ================= -->
    <section class="hs-tech" aria-labelledby="hs-tech-title">
        <div class="hs-container">
            <h2 id="hs-tech-title" class="hs-h2">Platforms we commonly integrate</h2>
            <p class="hs-tech-intro">We connect with the tools you already use, creating seamless workflows across your
                EHR/PM, RCM, and patient communication stack.</p>

            <div class="hs-tech-categories">
                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">EHR & Practice Management</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">athenahealth</span>
                        <span class="hs-logo">eClinicalWorks</span>
                        <span class="hs-logo">Kareo / Tebra</span>
                        <span class="hs-logo">DrChrono</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">RCM & CRM</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">AdvancedMD</span>
                        <span class="hs-logo">Waystar</span>
                        <span class="hs-logo">QuickBooks</span>
                        <span class="hs-logo">HubSpot</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Communications & Automation</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Twilio</span>
                        <span class="hs-logo">Spruce / OhMD</span>
                        <span class="hs-logo">Zapier</span>
                        <span class="hs-logo">Make / n8n</span>
                    </div>
                </div>
            </div>

            <details class="hs-arch">
                <summary>How integration works</summary>
                <div class="hs-arch-content">
                    <p class="hs-p">Our approach uses a layered architecture designed for reliability and compliance:
                    </p>
                    <ul class="hs-arch-list">
                        <li><strong>Patient touchpoints:</strong> Calls and chats flow through policy engines to enforce
                            scheduling rules, payer eligibility prompts, and visit-type routing before booking.</li>
                        <li><strong>Document workflows:</strong> Automated pipelines transform intake and clinical notes
                            into structured data, generate referrals and prior-auth packets, and post to the EHR/PM.
                        </li>
                        <li><strong>Event-driven notifications:</strong> A central event bus coordinates reminders,
                            prep instructions, waitlist fills, survey requests, and payment nudges across channels.</li>
                        <li><strong>Data synchronization:</strong> Bi-directional sync keeps demographics, appointments,
                            and balances current across connected platforms.</li>
                    </ul>
                </div>
            </details>
        </div>
    </section>

    <!-- ================= GOVERNANCE ================= -->
    <section class="hs-governance" aria-labelledby="hs-gov-title">
        <div class="hs-container">
            <h2 id="hs-gov-title" class="hs-h2">Controls by design</h2>
            <div class="hs-columns">
                <article class="hs-panel">
                    <h3 class="hs-h3">Guardrails</h3>
                    <p class="hs-p">Role-based actions, approval thresholds, and audit trails. Sensitive steps can
                        remain human-in-the-loop.</p>
                </article>
                <article class="hs-panel">
                    <h3 class="hs-h3">Privacy</h3>
                    <p class="hs-p">Data minimization and encryption in transit and at rest; workflows aligned to
                        regulatory obligations (e.g., HIPAA/PHIPA) and platform capabilities.</p>
                </article>
                <article class="hs-panel">
                    <h3 class="hs-h3">Change management</h3>
                    <p class="hs-p">Phased rollouts, staff training, and clear ownership for operations and exceptions.
                    </p>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= INSIGHTS (PLACEHOLDER LINKS) ================= -->
    <section class="hs-insights" aria-labelledby="hs-insights-title">
        <div class="hs-container">
            <h2 id="hs-insights-title" class="hs-h2">Insights & tools</h2>

            <ul class="hs-insight-list">
                <li><a href="#0">Reducing no-shows: reminder timing, channels, and scripts</a></li>
                <li><a href="#0">Designing safe after-hours triage with escalation policies</a></li>
                <li><a href="#0">From intake to superbill: eliminating re-keying across EHR/PM</a></li>
            </ul>
        </div>
    </section>

    <!-- ================= CONTACT (DISCREET CTA) ================= -->
    <section id="hs-contact" class="hs-contact" aria-labelledby="hs-contact-title">
        <div class="hs-container">
            <h2 id="hs-contact-title" class="hs-h2">Discuss your operation</h2>

            <form class="hs-form" action="https://formspree.io/f/xzzjvgkw" method="post">
                <div class="hs-form-grid">
                    <label class="hs-field">
                        <span class="hs-label">Work email</span>
                        <input type="email" name="email" required placeholder="you@clinic.com" autocomplete="email">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Organization</span>
                        <input type="text" name="company" required placeholder="Clinic or Group Name">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Specialty</span>
                        <select name="specialty" required>
                            <option value="" disabled selected>Select</option>
                            <option>Primary Care</option>
                            <option>Dental</option>
                            <option>Dermatology</option>
                            <option>Physiotherapy</option>
                            <option>Mental Health</option>
                            <option>Optometry</option>
                            <option>Imaging / Lab</option>
                            <option>Clinic Network / Other</option>
                        </select>
                    </label>
                    <label class="hs-field hs-field--full">
                        <span class="hs-label">Focus areas</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., after-hours reception; self-scheduling; intake e-forms; prior auth; recalls & reviews; payments"></textarea>
                    </label>
                    <input type="hidden" name="industry" value="Clinics & Healthcare">
                </div>
                <div class="hs-actions">
                    <button class="hs-btn hs-primary" type="submit" id="hs-submit">
                        Submit
                    </button>
                    <p class="hs-small">We’ll reply with a short agenda and proposed next steps.</p>
                </div>
            </form>
        </div>
    </section>

    <!-- ================= FOOTER TAG ================= -->
    <section class="hs-foot" aria-hidden="true">
        <div class="hs-container">
            <span class="hs-mark">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="#1db993" />
                </svg>
                Automate4U — Clinics & Healthcare
            </span>
        </div>
    </section>
</div> <!-- /hs-pro-scope -->

<!-- =========================
  SCOPED STYLES (NEUTRAL)
  (unchanged from Home Services)
========================= -->
` }} />
    </>
  );
}
