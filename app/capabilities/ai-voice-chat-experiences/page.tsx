import React from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
    .hs-pro-scope {
        display: block
    }

    .hs-pro-scope * {
        box-sizing: border-box
    }

    .hs-pro-scope {
        --ink: #0e1520;
        --muted: #6a7786;
        --accent: #1db993;
        --accent-2: #159a78;
        --bg: #fff;
        --panel: #f7f9fb;
        --border: #e5edf2;
        --pill: #e9f9f3;
        --radius: 18px
    }

    .hs-pro-scope .hs-container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 20px
    }

    .hs-pro-scope .hs-h1 {
        margin: 8px 0;
        font-size: 40px;
        line-height: 1.08;
        letter-spacing: -.01em;
        font-weight: 700
    }

    .hs-pro-scope .hs-h2 {
        margin: 10px 0 6px;
        font-size: 28px;
        line-height: 1.15;
        letter-spacing: -.01em;
        font-weight: 700
    }

    .hs-pro-scope .hs-h3 {
        margin: 0 0 6px;
        font-size: 1.05rem;
        font-weight: 600
    }

    .hs-pro-scope .hs-h4 {
        margin: 0 0 6px;
        font-size: 1rem;
        font-weight: 600
    }

    .hs-pro-scope .hs-p {
        margin: 0 0 8px;
        color: var(--ink)
    }

    .hs-pro-scope .hs-lead {
        color: var(--muted);
        max-width: 75ch;
        margin: 0 0 12px
    }

    .hs-pro-scope .hs-btn {
        display: inline-flex;
        align-items: center;
        gap: .55rem;
        padding: .7rem 1rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
        border: 1px solid transparent
    }

    .hs-pro-scope .hs-primary {
        background: linear-gradient(180deg, var(--accent), var(--accent-2));
        color: #fff;
        box-shadow: 0 8px 22px rgba(29, 185, 147, .18)
    }

    .hs-pro-scope .hs-primary:hover {
        filter: brightness(.98)
    }

    .hs-pro-scope .hs-head {
        background: var(--bg);
        padding: 48px 0 28px
    }

    .hs-pro-scope .hs-head-grid {
        display: grid;
        gap: 40px;
        align-items: center
    }

    .hs-pro-scope .hs-head-content {
        max-width: 100%
    }

    .hs-pro-scope .hs-head-image {
        display: none
    }

    .hs-pro-scope .hs-head-image img {
        width: 100%;
        height: auto;
        border-radius: var(--radius);
        box-shadow: 0 4px 20px rgba(0, 0, 0, .08)
    }

    @media (min-width:920px) {
        .hs-pro-scope .hs-head-grid {
            grid-template-columns: 1fr 1fr
        }

        .hs-pro-scope .hs-head-image {
            display: block
        }

        .hs-pro-scope .hs-h1 {
            font-size: 48px
        }

        .hs-pro-scope .hs-h2 {
            font-size: 32px
        }
    }

    .hs-pro-scope .hs-meta-list {
        display: flex;
        gap: 10px 12px;
        flex-wrap: wrap;
        margin: 12px 0 0;
        padding: 0;
        list-style: none
    }

    .hs-pro-scope .hs-meta-list li {
        background: #eef5f8;
        color: #415467;
        border: 1px solid var(--border);
        border-radius: 999px;
        padding: .28rem .6rem;
        font-weight: 600;
        font-size: .8rem
    }

    .hs-pro-scope .hs-dynamics {
        background: #fff;
        padding: 22px 0 14px
    }

    .hs-pro-scope .hs-columns {
        display: grid;
        gap: 24px;
        margin-top: 16px
    }

    .hs-pro-scope .hs-panel {
        background: transparent;
        border: none;
        padding: 0
    }

    .hs-pro-scope .hs-list {
        margin: 8px 0 0;
        padding-left: 20px;
        color: var(--ink);
        list-style: disc
    }

    .hs-pro-scope .hs-list li {
        margin: 8px 0;
        line-height: 1.5
    }

    @media (min-width:880px) {
        .hs-pro-scope .hs-columns {
            grid-template-columns: repeat(3, 1fr)
        }

        .hs-pro-scope .hs-case-grid {
            grid-template-columns: repeat(3, 1fr)
        }
    }

    .hs-pro-scope .hs-capabilities {
        background: #fff;
        padding: 28px 0
    }

    .hs-pro-scope .hs-cap-accordion {
        margin-top: 16px;
        border-top: 1px solid var(--border)
    }

    .hs-pro-scope .hs-cap-detail {
        border-bottom: 1px solid var(--border)
    }

    .hs-pro-scope .hs-cap-summary {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px 0;
        cursor: pointer;
        list-style: none;
        user-select: none
    }

    .hs-pro-scope .hs-cap-summary::-webkit-details-marker {
        display: none
    }

    .hs-pro-scope .hs-cap-title {
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--ink)
    }

    .hs-pro-scope .hs-cap-icon {
        width: 24px;
        height: 24px;
        position: relative;
        flex-shrink: 0
    }

    .hs-pro-scope .hs-cap-icon::before,
    .hs-pro-scope .hs-cap-icon::after {
        content: '';
        position: absolute;
        background: var(--ink);
        transition: transform .3s ease
    }

    .hs-pro-scope .hs-cap-icon::before {
        width: 16px;
        height: 2px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .hs-pro-scope .hs-cap-icon::after {
        width: 2px;
        height: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .hs-pro-scope .hs-cap-detail[open] .hs-cap-icon::after {
        transform: translate(-50%, -50%) rotate(90deg);
        opacity: 0
    }

    .hs-pro-scope .hs-cap-content {
        padding: 0 0 24px;
        max-width: 900px
    }

    .hs-pro-scope .hs-bullets {
        margin: 12px 0 0;
        padding-left: 20px;
        color: var(--ink);
        list-style: disc
    }

    .hs-pro-scope .hs-bullets li {
        margin: 8px 0;
        line-height: 1.5
    }

    .hs-pro-scope .hs-cases {
        background: #fff;
        padding: 26px 0
    }

    .hs-pro-scope .hs-case-grid {
        display: grid;
        gap: 24px;
        margin-top: 16px
    }

    .hs-pro-scope .hs-case {
        background: transparent;
        border: none;
        padding: 0
    }

    .hs-pro-scope .hs-contact {
        background: #fff;
        padding: 26px 0 34px
    }

    .hs-pro-scope .hs-form {
        max-width: 880px;
        margin: 10px auto 0
    }

    .hs-pro-scope .hs-form-grid {
        display: grid;
        gap: 12px
    }

    .hs-pro-scope .hs-field {
        display: grid;
        gap: 6px
    }

    .hs-pro-scope .hs-field--full {
        grid-column: 1/-1
    }

    .hs-pro-scope .hs-label {
        font-weight: 600;
        color: #16212b
    }

    .hs-pro-scope input,
    .hs-pro-scope select,
    .hs-pro-scope textarea {
        width: 100%;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--border);
        background: #fff;
        color: #0f1520
    }

    .hs-pro-scope .hs-actions {
        margin-top: 12px;
        display: flex;
        gap: 12px;
        align-items: center
    }

    .hs-pro-scope .hs-small {
        margin: 0;
        color: var(--muted);
        font-size: .9rem
    }

    .hs-pro-scope .hs-foot {
        background: #fff;
        padding: 12px 0 36px;
        text-align: center
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
        font-size: .84rem
    }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-capability="voice-chat">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">AI Voice & Chat Experiences</h1>
                    <p class="hs-lead">
                        AI voice and chat that actually gets work done, not just answers FAQs.
                        We build conversational AI that talks to customers and teams, handles real tasks,
                        and seamlessly hands off to humans when needed.
                    </p>
                    <ul class="hs-meta-list" aria-label="What we build">
                        <li>AI Chatbots</li>
                        <li>AI Voice Agents</li>
                        <li>24/7 Coverage</li>
                        <li>Workflow Integration</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="http://automate4u.co/wp-content/uploads/2025/11/voice-chat.jpg"
                        alt="AI voice and chat experiences" />
                </div>
            </div>
        </div>
    </section>

    <!-- ================= PROBLEMS WE SOLVE ================= -->
    <section class="hs-dynamics" aria-labelledby="hs-dyn-title">
        <div class="hs-container">
            <h2 id="hs-dyn-title" class="hs-h2">Problems we solve</h2>

            <div class="hs-columns">
                <article class="hs-panel">
                    <h3 class="hs-h3">Missed opportunities</h3>
                    <ul class="hs-list">
                        <li>Missed calls, especially after hours or during peak times.</li>
                        <li>Slow or inconsistent responses to website chat inquiries.</li>
                        <li>Lost leads due to delayed follow-up.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Overwhelmed teams</h3>
                    <ul class="hs-list">
                        <li>Support teams buried by repetitive questions.</li>
                        <li>High call volume with limited staff.</li>
                        <li>No 24/7 coverage without hiring overnight shifts.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Inconsistent experience</h3>
                    <ul class="hs-list">
                        <li>Variable quality depending on who answers.</li>
                        <li>Long wait times and frustrated customers.</li>
                        <li>No clear path from conversation to action.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">What we build</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">AI Chatbots</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Website or in-app chat for lead capture, FAQs, intake, triage, and internal
                            employee support.</p>
                        <ul class="hs-bullets">
                            <li>Customer-facing chat for sales and support</li>
                            <li>Internal chat tools for HR, IT, and knowledge lookup</li>
                            <li>Embedded chat in mobile apps and portals</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">AI Voice Agents</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Phone agents that answer calls, route callers, handle simple requests, and
                            provide after-hours coverage.</p>
                        <ul class="hs-bullets">
                            <li>Appointment booking for healthcare, home services, professional services</li>
                            <li>Call routing and qualification</li>
                            <li>After-hours and overflow handling</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Digital Avatars & Video AI</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">AI-powered digital avatars for video presentations, training, customer
                            engagement, and personalized communications.</p>
                        <ul class="hs-bullets">
                            <li>Realistic digital avatars for video content and presentations</li>
                            <li>Personalized video messages at scale</li>
                            <li>Interactive avatar experiences for websites and kiosks</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Conversation + Workflow</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Chat and voice agents that trigger workflows, create tickets, update CRMs, book
                            appointments, and hand off to humans seamlessly.</p>
                        <ul class="hs-bullets">
                            <li>CRM and ticketing system integration</li>
                            <li>Calendar and scheduling automation</li>
                            <li>Smart handoff with full context transfer</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Channels & Platforms</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Deploy across phone systems, websites, mobile apps, and internal tools like
                            Slack and Teams.</p>
                        <ul class="hs-bullets">
                            <li>Phone systems, IVR, and contact centers</li>
                            <li>Website widgets and mobile app chat</li>
                            <li>Slack, Teams, and internal chat platforms</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ================= EXAMPLE IMPLEMENTATIONS ================= -->
    <section class="hs-cases" aria-labelledby="hs-cases-title">
        <div class="hs-container">
            <h2 id="hs-cases-title" class="hs-h2">Before vs after</h2>

            <div class="hs-case-grid">
                <article class="hs-case">
                    <h3 class="hs-h4">Healthcare Clinic</h3>
                    <ul class="hs-list">
                        <li>Before: 40% of calls went to voicemail after hours</li>
                        <li>After: AI voice agent books appointments 24/7</li>
                        <li>Result: 3× more bookings, zero missed calls</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Home Services Company</h3>
                    <ul class="hs-list">
                        <li>Before: 15-minute average wait time during peak</li>
                        <li>After: AI handles qualification and scheduling</li>
                        <li>Result: 80% calls resolved without human agent</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">SaaS Support Team</h3>
                    <ul class="hs-list">
                        <li>Before: 200+ repetitive questions per week</li>
                        <li>After: AI chat handles tier-1 support</li>
                        <li>Result: Team focuses on complex issues only</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section id="hs-contact" class="hs-contact" aria-labelledby="hs-contact-title">
        <div class="hs-container">
            <h2 id="hs-contact-title" class="hs-h2">See an AI voice/chat demo</h2>

            <form class="hs-form" action="https://formspree.io/f/xzzjvgkw" method="post">
                <div class="hs-form-grid">
                    <label class="hs-field">
                        <span class="hs-label">Work email</span>
                        <input type="email" name="email" required placeholder="you@company.com" autocomplete="email">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Company</span>
                        <input type="text" name="company" required placeholder="Your company name">
                    </label>
                    <label class="hs-field hs-field--full">
                        <span class="hs-label">What are you looking to improve?</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., missed calls; after-hours coverage; appointment booking; support chat; lead qualification"></textarea>
                    </label>
                    <input type="hidden" name="capability" value="AI Voice & Chat Experiences">
                </div>
                <div class="hs-actions">
                    <button class="hs-btn hs-primary" type="submit">
                        Submit
                    </button>
                    <p class="hs-small">We'll reply with a short agenda and proposed next steps.</p>
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
                Automate4U — AI Voice & Chat Experiences
            </span>
        </div>
    </section>
</div>


` }} />
    </>
  );
}
