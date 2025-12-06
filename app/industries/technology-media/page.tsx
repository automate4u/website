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
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-industry="technology-media-telecom">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">Technology, Media & Telecom</h1>
                    <p class="hs-lead">
                        Technology and media companies face rapid scaling demands, evolving customer expectations, and pressure to deliver personalized experiences at scale.
                        We help teams automate customer support, streamline content operations, and enhance user engagement through intelligent automation and data-driven decision support.
                    </p>
                    <ul class="hs-meta-list" aria-label="Sector coverage">
                        <li>SaaS & Cloud</li>
                        <li>Media & Entertainment</li>
                        <li>Telecommunications</li>
                        <li>Gaming</li>
                        <li>Content Platforms</li>
                        <li>Tech Services</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="http://automate4u.co/wp-content/uploads/2025/11/tech.jpg"
                        alt="Technology, media and telecom illustration" />
                </div>
            </div>
        </div>
    </section>

    <!-- ================= SECTOR DYNAMICS ================= -->
    <section class="hs-dynamics" aria-labelledby="hs-dyn-title">
        <div class="hs-container">
            <div class="hs-columns">
                <article class="hs-panel">
                    <h3 class="hs-h3">Operational realities</h3>
                    <ul class="hs-list">
                        <li>High-volume support requests strain teams and impact response times during product launches.</li>
                        <li>Content moderation, metadata tagging, and quality assurance require significant manual effort.</li>
                        <li>Subscriber churn and engagement metrics demand proactive, personalized interventions.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Customer expectations</h3>
                    <ul class="hs-list">
                        <li>Instant support across multiple channels with context-aware responses.</li>
                        <li>Personalized content recommendations and seamless cross-platform experiences.</li>
                        <li>Transparent billing, rapid issue resolution, and self-service capabilities.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Technology enablers</h3>
                    <ul class="hs-list">
                        <li>AI-powered support with intelligent routing and sentiment analysis.</li>
                        <li>Automated content processing, tagging, and quality control workflows.</li>
                        <li>Predictive analytics for churn prevention and engagement optimization.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">Capabilities tailored to technology & media</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Customer support automation</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Handle technical inquiries, account issues, and product questions across chat, email, and voice with intelligent routing and escalation.</p>
                        <ul class="hs-bullets">
                            <li>24/7 multi-channel support with context preservation</li>
                            <li>Automated troubleshooting and knowledge base integration</li>
                            <li>Sentiment analysis and priority routing for critical issues</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Content operations</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Automate content moderation, metadata generation, and quality assurance workflows to scale operations efficiently.</p>
                        <ul class="hs-bullets">
                            <li>Automated content tagging and categorization</li>
                            <li>Policy-based moderation with human review escalation</li>
                            <li>Multi-language transcription and translation</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">User engagement & retention</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Identify at-risk users, deliver personalized interventions, and optimize engagement through data-driven automation.</p>
                        <ul class="hs-bullets">
                            <li>Churn prediction and proactive outreach</li>
                            <li>Personalized onboarding and feature adoption campaigns</li>
                            <li>Usage analytics and engagement scoring</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Billing & subscription management</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Streamline billing inquiries, payment failures, and subscription changes with automated workflows and clear communication.</p>
                        <ul class="hs-bullets">
                            <li>Automated dunning and payment recovery</li>
                            <li>Self-service plan changes and upgrades</li>
                            <li>Billing dispute resolution and refund processing</li>
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
                    <h3 class="hs-h4">SaaS Platform — 200K users</h3>
                    <ul class="hs-list">
                        <li>Automated tier-1 support across chat and email</li>
                        <li>Response time reduced from 4 hours to 8 minutes</li>
                        <li>Support team capacity freed for complex escalations</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Media Company — Content operations</h3>
                    <ul class="hs-list">
                        <li>Automated content tagging and moderation workflows</li>
                        <li>Processing time reduced 58%</li>
                        <li>Improved content discoverability and compliance</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Telecom Provider — Subscriber retention</h3>
                    <ul class="hs-list">
                        <li>Churn prediction and proactive engagement campaigns</li>
                        <li>Retention rate improved 23%</li>
                        <li>Billing dispute resolution automated</li>
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
                support, CMS, analytics, and billing platforms.</p>

            <div class="hs-tech-categories">
                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Support & Communication</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Zendesk</span>
                        <span class="hs-logo">Intercom</span>
                        <span class="hs-logo">Freshdesk</span>
                        <span class="hs-logo">Slack</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Content & Media</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Contentful</span>
                        <span class="hs-logo">WordPress</span>
                        <span class="hs-logo">Cloudinary</span>
                        <span class="hs-logo">Vimeo</span>
                    </div>
                </div>

                <div class="hs-tech-category">
                    <h3 class="hs-tech-cat-title">Analytics & Billing</h3>
                    <div class="hs-logo-group">
                        <span class="hs-logo">Mixpanel</span>
                        <span class="hs-logo">Amplitude</span>
                        <span class="hs-logo">Stripe</span>
                        <span class="hs-logo">Chargebee</span>
                    </div>
                </div>
            </div>

            <details class="hs-arch">
                <summary>How integration works</summary>
                <div class="hs-arch-content">
                    <p class="hs-p">Our integration approach follows a layered architecture designed for scalability and
                        reliability:</p>
                    <ul class="hs-arch-list">
                        <li><strong>Customer support:</strong> Multi-channel support requests are processed through intelligent routing that considers context, sentiment, and priority before escalating to specialized teams or resolving automatically.</li>
                        <li><strong>Content workflows:</strong> Automated pipelines handle content ingestion, moderation, tagging, and distribution across platforms while maintaining quality standards and compliance requirements.</li>
                        <li><strong>Engagement automation:</strong> Event-driven systems monitor user behavior, trigger personalized interventions, and coordinate retention campaigns across email, in-app, and push channels.</li>
                        <li><strong>Data synchronization:</strong> Real-time bi-directional sync ensures user profiles, subscription status, and engagement metrics remain consistent across all connected platforms.</li>
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
                    <h3 class="hs-h3">Data protection</h3>
                    <p class="hs-p">GDPR and CCPA compliance with data minimization, user consent management, and automated deletion workflows. End-to-end encryption for sensitive data.</p>
                </article>
                <article class="hs-panel">
                    <h3 class="hs-h3">Content safety</h3>
                    <p class="hs-p">Policy-based moderation with human review escalation. Audit trails for all content decisions and transparent appeals processes.</p>
                </article>
                <article class="hs-panel">
                    <h3 class="hs-h3">Operational controls</h3>
                    <p class="hs-p">Role-based access, approval workflows for high-impact actions, and comprehensive monitoring with anomaly detection.</p>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= INSIGHTS (PLACEHOLDER LINKS) ================= -->
    <section class="hs-insights" aria-labelledby="hs-insights-title">
        <div class="hs-container">
            <h2 id="hs-insights-title" class="hs-h2">Insights & tools</h2>

            <ul class="hs-insight-list">
                <li><a href="#0">Scaling customer support without scaling headcount</a></li>
                <li><a href="#0">Building trust in AI-powered content moderation</a></li>
                <li><a href="#0">Reducing churn through predictive engagement</a></li>
            </ul>
        </div>
    </section>

    <!-- ================= CONTACT (DISCREET CTA) ================= -->
    <section id="hs-contact" class="hs-contact" aria-labelledby="hs-contact-title">
        <div class="hs-container">
            <h2 id="hs-contact-title" class="hs-h2">Discuss your platform</h2>

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
                        <span class="hs-label">Sector</span>
                        <select name="sector" required>
                            <option value="" disabled selected>Select</option>
                            <option>SaaS & Cloud</option>
                            <option>Media & Entertainment</option>
                            <option>Telecommunications</option>
                            <option>Gaming</option>
                            <option>Content Platforms</option>
                            <option>Tech Services</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label class="hs-field hs-field--full">
                        <span class="hs-label">Focus areas</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., customer support automation; content moderation; user retention; billing"></textarea>
                    </label>
                    <input type="hidden" name="industry" value="Technology, Media & Telecom">
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
                Automate4U — Technology, Media & Telecom
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
