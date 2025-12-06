import React from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.hs-pro-scope{display:block}.hs-pro-scope *{box-sizing:border-box}.hs-pro-scope{--ink:#0e1520;--muted:#6a7786;--accent:#1db993;--accent-2:#159a78;--bg:#fff;--panel:#f7f9fb;--border:#e5edf2;--pill:#e9f9f3;--radius:18px}.hs-pro-scope .hs-container{max-width:1120px;margin:0 auto;padding:0 20px}.hs-pro-scope .hs-h1{margin:8px 0;font-size:40px;line-height:1.08;letter-spacing:-.01em;font-weight:700}.hs-pro-scope .hs-h2{margin:10px 0 6px;font-size:28px;line-height:1.15;letter-spacing:-.01em;font-weight:700}.hs-pro-scope .hs-h3{margin:0 0 6px;font-size:1.05rem;font-weight:600}.hs-pro-scope .hs-h4{margin:0 0 6px;font-size:1rem;font-weight:600}.hs-pro-scope .hs-p{margin:0 0 8px;color:var(--ink)}.hs-pro-scope .hs-lead{color:var(--muted);max-width:75ch;margin:0 0 12px}.hs-pro-scope .hs-btn{display:inline-flex;align-items:center;gap:.55rem;padding:.7rem 1rem;border-radius:999px;font-weight:600;text-decoration:none;border:1px solid transparent}.hs-pro-scope .hs-primary{background:linear-gradient(180deg,var(--accent),var(--accent-2));color:#fff;box-shadow:0 8px 22px rgba(29,185,147,.18)}.hs-pro-scope .hs-primary:hover{filter:brightness(.98)}.hs-pro-scope .hs-head{background:var(--bg);padding:48px 0 28px}.hs-pro-scope .hs-head-grid{display:grid;gap:40px;align-items:center}.hs-pro-scope .hs-head-content{max-width:100%}.hs-pro-scope .hs-head-image{display:none}.hs-pro-scope .hs-head-image img{width:100%;height:auto;border-radius:var(--radius);box-shadow:0 4px 20px rgba(0,0,0,.08)}@media (min-width:920px){.hs-pro-scope .hs-head-grid{grid-template-columns:1fr 1fr}.hs-pro-scope .hs-head-image{display:block}.hs-pro-scope .hs-h1{font-size:48px}.hs-pro-scope .hs-h2{font-size:32px}}.hs-pro-scope .hs-meta-list{display:flex;gap:10px 12px;flex-wrap:wrap;margin:12px 0 0;padding:0;list-style:none}.hs-pro-scope .hs-meta-list li{background:#eef5f8;color:#415467;border:1px solid var(--border);border-radius:999px;padding:.28rem .6rem;font-weight:600;font-size:.8rem}.hs-pro-scope .hs-dynamics{background:#fff;padding:22px 0 14px}.hs-pro-scope .hs-columns{display:grid;gap:24px;margin-top:16px}.hs-pro-scope .hs-panel{background:transparent;border:none;padding:0}.hs-pro-scope .hs-list{margin:8px 0 0;padding-left:20px;color:var(--ink);list-style:disc}.hs-pro-scope .hs-list li{margin:8px 0;line-height:1.5}@media (min-width:880px){.hs-pro-scope .hs-columns{grid-template-columns:repeat(3,1fr)}.hs-pro-scope .hs-case-grid{grid-template-columns:repeat(3,1fr)}}
.hs-pro-scope .hs-capabilities{background:#fff;padding:28px 0}.hs-pro-scope .hs-cap-accordion{margin-top:16px;border-top:1px solid var(--border)}.hs-pro-scope .hs-cap-detail{border-bottom:1px solid var(--border)}.hs-pro-scope .hs-cap-summary{display:flex;align-items:center;gap:16px;padding:20px 0;cursor:pointer;list-style:none;user-select:none}.hs-pro-scope .hs-cap-summary::-webkit-details-marker{display:none}.hs-pro-scope .hs-cap-title{font-size:1.15rem;font-weight:600;color:var(--ink)}.hs-pro-scope .hs-cap-icon{width:24px;height:24px;position:relative;flex-shrink:0}.hs-pro-scope .hs-cap-icon::before,.hs-pro-scope .hs-cap-icon::after{content:'';position:absolute;background:var(--ink);transition:transform .3s ease}.hs-pro-scope .hs-cap-icon::before{width:16px;height:2px;top:50%;left:50%;transform:translate(-50%,-50%)}.hs-pro-scope .hs-cap-icon::after{width:2px;height:16px;top:50%;left:50%;transform:translate(-50%,-50%)}.hs-pro-scope .hs-cap-detail[open] .hs-cap-icon::after{transform:translate(-50%,-50%) rotate(90deg);opacity:0}.hs-pro-scope .hs-cap-content{padding:0 0 24px;max-width:900px}.hs-pro-scope .hs-bullets{margin:12px 0 0;padding-left:20px;color:var(--ink);list-style:disc}.hs-pro-scope .hs-bullets li{margin:8px 0;line-height:1.5}.hs-pro-scope .hs-cases{background:#fff;padding:26px 0}.hs-pro-scope .hs-case-grid{display:grid;gap:24px;margin-top:16px}.hs-pro-scope .hs-case{background:transparent;border:none;padding:0}.hs-pro-scope .hs-contact{background:#fff;padding:26px 0 34px}.hs-pro-scope .hs-form{max-width:880px;margin:10px auto 0}.hs-pro-scope .hs-form-grid{display:grid;gap:12px}.hs-pro-scope .hs-field{display:grid;gap:6px}.hs-pro-scope .hs-field--full{grid-column:1/-1}.hs-pro-scope .hs-label{font-weight:600;color:#16212b}.hs-pro-scope input,.hs-pro-scope select,.hs-pro-scope textarea{width:100%;padding:12px;border-radius:12px;border:1px solid var(--border);background:#fff;color:#0f1520}.hs-pro-scope .hs-actions{margin-top:12px;display:flex;gap:12px;align-items:center}.hs-pro-scope .hs-small{margin:0;color:var(--muted);font-size:.9rem}.hs-pro-scope .hs-foot{background:#fff;padding:12px 0 36px;text-align:center}.hs-pro-scope .hs-mark{display:inline-flex;align-items:center;gap:8px;color:#365160;background:var(--pill);padding:.36rem .62rem;border-radius:999px;font-weight:600;font-size:.84rem}
` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-capability="data-integrations">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">Data, Integrations & Infrastructure</h1>
                    <p class="hs-lead">
                        We make your tools and data work together so AI can do its job.
                        From data migration to API orchestration, we connect disconnected systems
                        and build the infrastructure that makes automation and AI possible.
                    </p>
                    <ul class="hs-meta-list" aria-label="What we connect">
                        <li>Data Migration</li>
                        <li>API Integration</li>
                        <li>Platform Connections</li>
                        <li>AI Infrastructure</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="http://automate4u.co/wp-content/uploads/2025/11/integrations.jpg"
                        alt="Data integrations and infrastructure" />
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
                    <h3 class="hs-h3">Data silos</h3>
                    <ul class="hs-list">
                        <li>Data living in multiple tools without a single source of truth.</li>
                        <li>Manual exporting/importing between systems (CSV hell).</li>
                        <li>Inconsistent data across platforms.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Integration bottlenecks</h3>
                    <ul class="hs-list">
                        <li>APIs that are underused, misconfigured, or not documented.</li>
                        <li>No clear integration strategy or architecture.</li>
                        <li>Integration work blocking AI and automation projects.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Infrastructure gaps</h3>
                    <ul class="hs-list">
                        <li>No reliable deployment pipeline for AI systems.</li>
                        <li>Performance and reliability concerns.</li>
                        <li>Lack of observability and monitoring.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">What we deliver</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Data Migration & Preparation</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Data cleansing, normalization, transformation, and migration for one-time moves or ongoing sync.</p>
                        <ul class="hs-bullets">
                            <li>Data cleansing and quality improvement</li>
                            <li>Format transformation and normalization</li>
                            <li>One-time migrations and ongoing synchronization</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">API & Integration Expertise</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Designing, consuming, and orchestrating APIs with event-based and scheduled integrations.</p>
                        <ul class="hs-bullets">
                            <li>RESTful and GraphQL API design and implementation</li>
                            <li>Event-driven architecture and webhooks</li>
                            <li>Scheduled sync and batch processing</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Platform Integrations</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Deep expertise connecting CRMs, ERPs, HRIS, cloud platforms, communication tools, and AI services.</p>
                        <ul class="hs-bullets">
                            <li>CRMs: Salesforce, HubSpot, Pipedrive</li>
                            <li>ERPs & HRIS: SAP, PeopleSoft, Workday</li>
                            <li>Cloud: AWS, GCP, Firebase, Vercel, Render</li>
                            <li>Comms: Slack, Twilio, SendGrid, Microsoft Teams</li>
                            <li>AI: OpenAI, Anthropic, Amazon Connect, ElevenLabs</li>
                            <li>Payments: Stripe, PayPal</li>
                            <li>Monitoring: Sentry, Skylight, Datadog</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Infrastructure for AI & Automation</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Deployment pipelines, observability, logging, and performance tuning for AI systems.</p>
                        <ul class="hs-bullets">
                            <li>CI/CD pipelines and environment management</li>
                            <li>Containerization with Docker and Kubernetes</li>
                            <li>Monitoring, logging, and alerting</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ================= EXAMPLE INTEGRATIONS ================= -->
    <section class="hs-cases" aria-labelledby="hs-cases-title">
        <div class="hs-container">
            <h2 id="hs-cases-title" class="hs-h2">Example integration stories</h2>

            <div class="hs-case-grid">
                <article class="hs-case">
                    <h3 class="hs-h4">CRM + Phone + Calendar</h3>
                    <ul class="hs-list">
                        <li>AI voice agent answers calls and qualifies leads</li>
                        <li>Creates CRM records and books calendar appointments</li>
                        <li>Sends confirmation emails and SMS reminders</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">ERP + Document Processing</h3>
                    <ul class="hs-list">
                        <li>Invoices extracted from email and PDFs</li>
                        <li>Data validated and posted to ERP</li>
                        <li>Exceptions routed to accounting team</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Multi-Platform Data Sync</h3>
                    <ul class="hs-list">
                        <li>Customer data synced across CRM, support, and billing</li>
                        <li>Real-time updates via webhooks</li>
                        <li>Conflict resolution and audit logging</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section id="hs-contact" class="hs-contact" aria-labelledby="hs-contact-title">
        <div class="hs-container">
            <h2 id="hs-contact-title" class="hs-h2">Review your integrations with us</h2>

            <form class="hs-form" action="https://formspree.io/f/xzzjvgkw" method="post">
                <div class="hs-form-grid">
                    <label class="hs-field">
                        <span class="hs-label">Work email</span>
                        <input type="email" name="email" required placeholder="you@company.com"
                            autocomplete="email">
                    </label>
                    <label class="hs-field">
                        <span class="hs-label">Company</span>
                        <input type="text" name="company" required placeholder="Your company name">
                    </label>
                    <label class="hs-field hs-field--full">
                        <span class="hs-label">What systems need to connect?</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., CRM + phone system; ERP + document processing; data migration from legacy system"></textarea>
                    </label>
                    <input type="hidden" name="capability" value="Data, Integrations & Infrastructure">
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
                Automate4U — Data, Integrations & Infrastructure
            </span>
        </div>
    </section>
</div>


` }} />
    </>
  );
}
