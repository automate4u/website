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

    .hs-pro-scope .hs-eyebrow {
        display: inline-block;
        padding: .35rem .6rem;
        border-radius: 999px;
        background: var(--pill);
        color: #167f65;
        font-weight: 600;
        font-size: .72rem;
        letter-spacing: .06em;
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

    /* Impact */
    .hs-pro-scope .hs-impact {
        background: #fff;
        padding: 22px 0 10px;
        text-align: center;
    }

    .hs-pro-scope .hs-kpi-rail {
        display: grid;
        gap: 10px;
        margin-top: 10px;
    }

    .hs-pro-scope .hs-kpi {
        background: linear-gradient(180deg, #fbfdfc 0%, #f5fbf8 100%);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 16px;
    }

    .hs-pro-scope .hs-kpi-num {
        font-size: 28px;
        font-weight: 700;
        color: #0f1b25;
    }

    .hs-pro-scope .hs-kpi-lbl {
        color: #415467;
        margin-top: 6px;
    }

    .hs-pro-scope .hs-method-note {
        margin: 10px auto 0;
        max-width: 70ch;
        text-align: left;
    }

    .hs-pro-scope .hs-method-note summary {
        cursor: pointer;
        font-weight: 600;
    }

    @media (min-width:880px) {
        .hs-pro-scope .hs-kpi-rail {
            grid-template-columns: repeat(3, 1fr);
        }
    }

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

    /* Approach */
    .hs-pro-scope .hs-approach {
        background: #fff;
        padding: 26px 0;
    }

    .hs-pro-scope .hs-approach-intro {
        color: var(--muted);
        max-width: 75ch;
        margin: 8px 0 24px;
    }

    .hs-pro-scope .hs-approach-grid {
        display: grid;
        gap: 48px;
        align-items: start;
        margin-top: 24px;
    }

    .hs-pro-scope .hs-approach-image {
        display: none;
    }

    .hs-pro-scope .hs-approach-image img {
        width: 100%;
        height: auto;
        border-radius: var(--radius);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        position: sticky;
        top: 20px;
    }

    @media (min-width: 920px) {
        .hs-pro-scope .hs-approach-grid {
            grid-template-columns: 1.2fr 1fr;
        }

        .hs-pro-scope .hs-approach-image {
            display: block;
        }
    }

    .hs-pro-scope .hs-steps-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .hs-pro-scope .hs-step {
        display: flex;
        gap: 20px;
        align-items: start;
    }

    .hs-pro-scope .hs-step-number {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--accent), var(--accent-2));
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: 0 4px 12px rgba(29, 185, 147, 0.2);
    }

    .hs-pro-scope .hs-step-content {
        flex: 1;
        padding-top: 4px;
    }

    .hs-pro-scope .hs-step-content .hs-h3 {
        margin-bottom: 8px;
    }

    .hs-pro-scope .hs-step-content .hs-p {
        color: var(--muted);
        line-height: 1.6;
    }

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
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-industry="hospitality">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">Restaurants & Hospitality</h1>
                    <p class="hs-lead">
                        Hospitality operators face high-volume guest interactions, tight margins, and constant pressure
                        on service quality.
                        We help teams streamline reservations, improve guest communications, and automate back-office
                        operations
                        through intelligent workflow orchestration and decision support.
                    </p>
                    <ul class="hs-meta-list" aria-label="Sector coverage">
                        <li>Full-Service Restaurants</li>
                        <li>Quick Service</li>
                        <li>Hotels & Resorts</li>
                        <li>Catering</li>
                        <li>Event Venues</li>
                        <li>Fine Dining</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="http://automate4u.co/wp-content/uploads/2025/11/rh4.jpg"
                        alt="Home services illustration" />
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
                        <li>Peak-hour call volume and online inquiries overwhelm front-of-house staff.</li>
                        <li>No-shows and last-minute cancellations impact revenue and table utilization.</li>
                        <li>Manual reservation management, waitlist coordination, and guest follow-up consume valuable
                            time.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Guest expectations</h3>
                    <ul class="hs-list">
                        <li>Instant booking confirmation across phone, web, and social channels.</li>
                        <li>Proactive updates on table readiness, wait times, and special requests.</li>
                        <li>Seamless handling of dietary restrictions, allergies, and preferences.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Technology enablers</h3>
                    <ul class="hs-list">
                        <li>Voice and chat reception with reservation system integration.</li>
                        <li>Automated waitlist management and guest notification workflows.</li>
                        <li>Review monitoring, response generation, and reputation management.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">Capabilities tailored to restaurants & hospitality</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Reservation & guest management</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Handle reservation requests across phone, web, and social channels; manage
                            waitlists; and coordinate table assignments with real-time availability.</p>
                        <ul class="hs-bullets">
                            <li>Multi-channel booking with instant confirmation</li>
                            <li>Waitlist automation and SMS notifications</li>
                            <li>Special occasion tracking and VIP guest recognition</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Guest communications</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Send confirmation messages, table-ready alerts, and post-visit follow-ups;
                            capture dietary restrictions and preferences automatically.</p>
                        <ul class="hs-bullets">
                            <li>Automated reservation confirmations and reminders</li>
                            <li>Real-time wait time updates</li>
                            <li>Post-visit review requests and feedback collection</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Event & catering coordination</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Manage private dining inquiries, generate event proposals, coordinate menu
                            selections, and track deposit payments and final invoicing.</p>
                        <ul class="hs-bullets">
                            <li>Automated proposal generation from templates</li>
                            <li>Menu customization and dietary accommodation tracking</li>
                            <li>Payment reminders and invoice delivery</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Reputation management</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Monitor reviews across platforms, generate response drafts, and route negative
                            feedback to management for immediate attention.</p>
                        <ul class="hs-bullets">
                            <li>Multi-platform review aggregation</li>
                            <li>AI-assisted response generation</li>
                            <li>Sentiment analysis and escalation workflows</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ================= IMPACT METRICS ================= -->
    <!-- <section class="hs-impact" aria-labelledby="hs-impact-title">
        <div class="hs-container">
            <p class="hs-eyebrow">Measured results</p>
            <h2 id="hs-impact-title" class="hs-h2">Typical impact ranges</h2>

            <div class="hs-kpi-rail">
                <div class="hs-kpi">
                    <div class="hs-kpi-num">+20–45%</div>
                    <div class="hs-kpi-lbl">increase in booked jobs from recovered calls</div>
                </div>
                <div class="hs-kpi">
                    <div class="hs-kpi-num">−30–60%</div>
                    <div class="hs-kpi-lbl">reduction in office phone and admin time</div>
                </div>
                <div class="hs-kpi">
                    <div class="hs-kpi-num">+10–25%</div>
                    <div class="hs-kpi-lbl">improvement in first-time-fix and on-time arrival</div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- ================= CASE SNAPSHOTS ================= -->
    <section class="hs-cases" aria-labelledby="hs-cases-title">
        <div class="hs-container">
            <h2 id="hs-cases-title" class="hs-h2">Previous engagements</h2>

            <div class="hs-case-grid">
                <article class="hs-case">
                    <h3 class="hs-h4">Full-service restaurant — 120 seats</h3>
                    <ul class="hs-list">
                        <li>Automated reservation handling during peak hours</li>
                        <li>Phone staff time reduced 38%, redeployed to floor service</li>
                        <li>No-show rate decreased 15% via confirmation reminders</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Hotel restaurant — 80 seats</h3>
                    <ul class="hs-list">
                        <li>Integrated guest preference tracking with PMS</li>
                        <li>Review response time improved from 3 days to 4 hours</li>
                        <li>Average rating increased from 4.2★ to 4.7★</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Catering company — 15 events/month</h3>
                    <ul class="hs-list">
                        <li>Automated proposal generation and follow-up sequences</li>
                        <li>Quote turnaround reduced from 48 hours to 6 hours</li>
                        <li>Booking conversion rate improved 24%</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= APPROACH ================= -->
    <!-- <section class="hs-approach" aria-labelledby="hs-approach-title">
        <div class="hs-container">
            <h2 id="hs-approach-title" class="hs-h2">Our implementation approach</h2>
            <p class="hs-approach-intro">We follow a phased methodology that minimizes disruption while delivering
                measurable results quickly.</p>

            <div class="hs-approach-grid">
                <div class="hs-steps-wrapper">
                    <div class="hs-step">
                        <div class="hs-step-number">01</div>
                        <div class="hs-step-content">
                            <h3 class="hs-h3">Discovery & Assessment</h3>
                            <p class="hs-p">We start by understanding your current operations, identifying bottlenecks,
                                and quantifying opportunities. This includes analyzing missed-call rates, schedule
                                utilization, and operational pain points to establish clear success metrics and
                                implementation guardrails.</p>
                        </div>
                    </div>

                    <div class="hs-step">
                        <div class="hs-step-number">02</div>
                        <div class="hs-step-content">
                            <h3 class="hs-h3">Design & Configuration</h3>
                            <p class="hs-p">Our team configures workflows tailored to your business rules, including
                                call and chat flows, approval processes, and data access policies. We map integrations
                                with your existing FSM, CRM, and finance systems to ensure seamless data flow.</p>
                        </div>
                    </div>

                    <div class="hs-step">
                        <div class="hs-step-number">03</div>
                        <div class="hs-step-content">
                            <h3 class="hs-h3">Pilot & Optimization</h3>
                            <p class="hs-p">We launch with a focused use case—typically after-hours reception or
                                dispatch support—allowing us to measure outcomes and refine the system. Once validated,
                                we systematically extend automation to additional workflows and back-office operations.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="hs-approach-image">
                    <img src="https://plus.unsplash.com/premium_photo-1661301073759-763be51674f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                        alt="Implementation workflow" />
                </div>
            </div>
        </div>
    </section> -->

    <!-- ================= TECHNOLOGY & INTEGRATIONS ================= -->
    <section class="hs-tech" aria-labelledby="hs-tech-title">
        <div class="hs-container">
            <h2 id="hs-tech-title" class="hs-h2">Platforms we commonly integrate</h2>
            <p class="hs-tech-intro">We connect with the tools you already use, creating seamless workflows across your
                reservation systems, POS platforms, property management, and guest communication channels.</p>

            <div class="hs-tech-categories">
                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Reservation & POS Systems</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">OpenTable</span>
                        <span class="hs-logo">Resy</span>
                        <span class="hs-logo">Toast</span>
                        <span class="hs-logo">Square</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Property & Guest Management</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Opera PMS</span>
                        <span class="hs-logo">Mews</span>
                        <span class="hs-logo">Salesforce</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Communications & Reviews</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Twilio</span>
                        <span class="hs-logo">Yelp</span>
                        <span class="hs-logo">Google Reviews</span>
                        <span class="hs-logo">TripAdvisor</span>
                    </div>
                </div>
            </div>

            <details class="hs-arch">
                <summary>How integration works</summary>
                <div class="hs-arch-content">
                    <p class="hs-p">Our integration approach follows a layered architecture designed for reliability and
                        maintainability:</p>
                    <ul class="hs-arch-list">
                        <li><strong>Guest touchpoints:</strong> Inbound calls, web forms, and social messages are
                            processed through
                            availability engines that check table capacity before confirming reservations in your POS or
                            reservation system.</li>
                        <li><strong>Waitlist orchestration:</strong> Real-time table status triggers automated guest
                            notifications,
                            coordinating SMS alerts with host stand workflows to optimize seating efficiency.</li>
                        <li><strong>Event-driven communications:</strong> A central event bus coordinates reservation
                            confirmations,
                            table-ready alerts, post-visit surveys, and review requests across SMS, email, and messaging
                            platforms.</li>
                        <li><strong>Data synchronization:</strong> Bi-directional sync ensures guest profiles,
                            preferences, dietary restrictions,
                            and visit history remain consistent across reservation, POS, and CRM platforms.</li>
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
                    <p class="hs-p">Data minimization, retention policies, and encryption in transit and at rest aligned
                        to platform capabilities.</p>
                </article>
                <article class="hs-panel">
                    <h3 class="hs-h3">Change management</h3>
                    <p class="hs-p">Structured roll-out plans, staff training, and clear ownership for operations and
                        exceptions.</p>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= INSIGHTS (PLACEHOLDER LINKS) ================= -->
    <section class="hs-insights" aria-labelledby="hs-insights-title">
        <div class="hs-container">
            <h2 id="hs-insights-title" class="hs-h2">Insights & tools</h2>

            <ul class="hs-insight-list">
                <li><a href="#0">No-show economics: quantifying the cost of empty tables</a></li>
                <li><a href="#0">Optimizing reservation confirmation workflows for peak hours</a></li>
                <li><a href="#0">Review response strategies that improve ratings and guest loyalty</a></li>
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
                        <input type="email" name="email" required placeholder="you@company.com" autocomplete="email">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Company</span>
                        <input type="text" name="company" required placeholder="Company Inc.">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Business type</span>
                        <select name="trade" required>
                            <option value="" disabled selected>Select</option>
                            <option>Full-Service Restaurant</option>
                            <option>Quick Service / Fast Casual</option>
                            <option>Hotel / Resort</option>
                            <option>Catering</option>
                            <option>Event Venue</option>
                            <option>Fine Dining / Other</option>
                        </select>
                    </label>
                    <label class="hs-field hs-field--full">
                        <span class="hs-label">Focus areas</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., reservation management; waitlist automation; guest communications; review response"></textarea>
                    </label>
                    <input type="hidden" name="industry" value="Restaurants & Hospitality">
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
                Automate4U — Restaurants & Hospitality
            </span>
        </div>
    </section>
</div> <!-- /hs-pro-scope -->

<!-- =========================
  SCOPED STYLES (NEUTRAL)
========================= -->
` }} />
    </>
  );
}
