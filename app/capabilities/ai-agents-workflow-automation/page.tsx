import React from 'react';

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
.hs-pro-scope{display:block}.hs-pro-scope *{box-sizing:border-box}.hs-pro-scope{--ink:#0e1520;--muted:#6a7786;--accent:#1db993;--accent-2:#159a78;--bg:#fff;--panel:#f7f9fb;--border:#e5edf2;--pill:#e9f9f3;--radius:18px}.hs-pro-scope .hs-container{max-width:1120px;margin:0 auto;padding:0 20px}.hs-pro-scope .hs-h1{margin:8px 0;font-size:40px;line-height:1.08;letter-spacing:-.01em;font-weight:700}.hs-pro-scope .hs-h2{margin:10px 0 6px;font-size:28px;line-height:1.15;letter-spacing:-.01em;font-weight:700}.hs-pro-scope .hs-h3{margin:0 0 6px;font-size:1.05rem;font-weight:600}.hs-pro-scope .hs-h4{margin:0 0 6px;font-size:1rem;font-weight:600}.hs-pro-scope .hs-p{margin:0 0 8px;color:var(--ink)}.hs-pro-scope .hs-lead{color:var(--muted);max-width:75ch;margin:0 0 12px}.hs-pro-scope .hs-btn{display:inline-flex;align-items:center;gap:.55rem;padding:.7rem 1rem;border-radius:999px;font-weight:600;text-decoration:none;border:1px solid transparent}.hs-pro-scope .hs-primary{background:linear-gradient(180deg,var(--accent),var(--accent-2));color:#fff;box-shadow:0 8px 22px rgba(29,185,147,.18)}.hs-pro-scope .hs-primary:hover{filter:brightness(.98)}.hs-pro-scope .hs-head{background:var(--bg);padding:48px 0 28px}.hs-pro-scope .hs-head-grid{display:grid;gap:40px;align-items:center}.hs-pro-scope .hs-head-content{max-width:100%}.hs-pro-scope .hs-head-image{display:none}.hs-pro-scope .hs-head-image img{width:100%;height:auto;border-radius:var(--radius);box-shadow:0 4px 20px rgba(0,0,0,.08)}@media (min-width:920px){.hs-pro-scope .hs-head-grid{grid-template-columns:1fr 1fr}.hs-pro-scope .hs-head-image{display:block}.hs-pro-scope .hs-h1{font-size:48px}.hs-pro-scope .hs-h2{font-size:32px}}.hs-pro-scope .hs-meta-list{display:flex;gap:10px 12px;flex-wrap:wrap;margin:12px 0 0;padding:0;list-style:none}.hs-pro-scope .hs-meta-list li{background:#eef5f8;color:#415467;border:1px solid var(--border);border-radius:999px;padding:.28rem .6rem;font-weight:600;font-size:.8rem}.hs-pro-scope .hs-dynamics{background:#fff;padding:22px 0 14px}.hs-pro-scope .hs-columns{display:grid;gap:24px;margin-top:16px}.hs-pro-scope .hs-panel{background:transparent;border:none;padding:0}.hs-pro-scope .hs-list{margin:8px 0 0;padding-left:20px;color:var(--ink);list-style:disc}.hs-pro-scope .hs-list li{margin:8px 0;line-height:1.5}@media (min-width:880px){.hs-pro-scope .hs-columns{grid-template-columns:repeat(3,1fr)}.hs-pro-scope .hs-case-grid{grid-template-columns:repeat(3,1fr)}}.hs-pro-scope .hs-capabilities{background:#fff;padding:28px 0}.hs-pro-scope .hs-cap-accordion{margin-top:16px;border-top:1px solid var(--border)}.hs-pro-scope .hs-cap-detail{border-bottom:1px solid var(--border)}.hs-pro-scope .hs-cap-summary{display:flex;align-items:center;gap:16px;padding:20px 0;cursor:pointer;list-style:none;user-select:none}.hs-pro-scope .hs-cap-summary::-webkit-details-marker{display:none}.hs-pro-scope .hs-cap-title{font-size:1.15rem;font-weight:600;color:var(--ink)}.hs-pro-scope .hs-cap-icon{width:24px;height:24px;position:relative;flex-shrink:0}.hs-pro-scope .hs-cap-icon::before,.hs-pro-scope .hs-cap-icon::after{content:'';position:absolute;background:var(--ink);transition:transform .3s ease}.hs-pro-scope .hs-cap-icon::before{width:16px;height:2px;top:50%;left:50%;transform:translate(-50%,-50%)}.hs-pro-scope .hs-cap-icon::after{width:2px;height:16px;top:50%;left:50%;transform:translate(-50%,-50%)}.hs-pro-scope .hs-cap-detail[open] .hs-cap-icon::after{transform:translate(-50%,-50%) rotate(90deg);opacity:0}.hs-pro-scope .hs-cap-content{padding:0 0 24px;max-width:900px}.hs-pro-scope .hs-bullets{margin:12px 0 0;padding-left:20px;color:var(--ink);list-style:disc}.hs-pro-scope .hs-bullets li{margin:8px 0;line-height:1.5}.hs-pro-scope .hs-cases{background:#fff;padding:26px 0}.hs-pro-scope .hs-case-grid{display:grid;gap:24px;margin-top:16px}.hs-pro-scope .hs-case{background:transparent;border:none;padding:0}.hs-pro-scope .hs-contact{background:#fff;padding:26px 0 34px}.hs-pro-scope .hs-form{max-width:880px;margin:10px auto 0}.hs-pro-scope .hs-form-grid{display:grid;gap:12px}.hs-pro-scope .hs-field{display:grid;gap:6px}.hs-pro-scope .hs-field--full{grid-column:1/-1}.hs-pro-scope .hs-label{font-weight:600;color:#16212b}.hs-pro-scope input,.hs-pro-scope select,.hs-pro-scope textarea{width:100%;padding:12px;border-radius:12px;border:1px solid var(--border);background:#fff;color:#0f1520}.hs-pro-scope .hs-actions{margin-top:12px;display:flex;gap:12px;align-items:center}.hs-pro-scope .hs-small{margin:0;color:var(--muted);font-size:.9rem}.hs-pro-scope .hs-foot{background:#fff;padding:12px 0 36px;text-align:center}.hs-pro-scope .hs-mark{display:inline-flex;align-items:center;gap:8px;color:#365160;background:var(--pill);padding:.36rem .62rem;border-radius:999px;font-weight:600;font-size:.84rem}
` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="hs-pro-scope" data-capability="ai-agents">

    <!-- ================= HEADER / OVERVIEW ================= -->
    <section class="hs-head" aria-labelledby="hs-head-title">
        <div class="hs-container">
            <div class="hs-head-grid">
                <div class="hs-head-content">
                    <h1 id="hs-head-title" class="hs-h1">AI Agents & Workflow Automation</h1>
                    <p class="hs-lead">
                        Turn repetitive work into automated workflows and AI agents.
                        We eliminate manual, repetitive tasks using AI agents and automation platforms
                        that work behind the scenes, not just in a chat window.
                    </p>
                    <ul class="hs-meta-list" aria-label="What we automate">
                        <li>AI Agents</li>
                        <li>Workflow Automation</li>
                        <li>Marketing Operations</li>
                        <li>Back-Office Tasks</li>
                    </ul>
                </div>
                <div class="hs-head-image">
                    <img src="/images/capabilities/ai_agents.jpg"
                        alt="AI agents and workflow automation" />
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
                    <h3 class="hs-h3">Manual, repetitive work</h3>
                    <ul class="hs-list">
                        <li>Manual data entry and updates across tools.</li>
                        <li>Copy-paste work between systems.</li>
                        <li>Repetitive reporting and status updates.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Slow response times</h3>
                    <ul class="hs-list">
                        <li>Delayed responses to leads, requests, and routine tickets.</li>
                        <li>Bottlenecks waiting for human handoffs.</li>
                        <li>Missed follow-ups and dropped tasks.</li>
                    </ul>
                </article>

                <article class="hs-panel">
                    <h3 class="hs-h3">Disconnected workflows</h3>
                    <ul class="hs-list">
                        <li>Processes that require constant human babysitting.</li>
                        <li>Tools that don't talk to each other.</li>
                        <li>No visibility into workflow status or bottlenecks.</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CAPABILITIES ================= -->
    <section class="hs-capabilities" aria-labelledby="hs-cap-title">
        <div class="hs-container">
            <h2 id="hs-cap-title" class="hs-h2">What we automate</h2>

            <div class="hs-cap-accordion">
                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">AI Agents (Digital Teammates)</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Custom-built agents tailored to specific processes that follow multi-step workflows across multiple systems.</p>
                        <ul class="hs-bullets">
                            <li>OpenAI Agent Builder, Power Automate, n8n, Zapier implementations</li>
                            <li>Agents that handle intake, processing, and notifications</li>
                            <li>Human-in-the-loop patterns for approval and oversight</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Workflow Automation</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">End-to-end process automation from intake to completion with automated reminders, follow-ups, and escalations.</p>
                        <ul class="hs-bullets">
                            <li>Approval flows and routing logic</li>
                            <li>Scheduled tasks and event-driven triggers</li>
                            <li>Cross-system data sync and updates</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">Automation Use Cases</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Specific automation implementations that eliminate manual work across departments.</p>
                        <ul class="hs-bullets">
                            <li>Web scraping for data collection and monitoring</li>
                            <li>Automatic report generation and summaries</li>
                            <li>Email drafting, summarization, and follow-up</li>
                            <li>Invoice drafting and reconciliation support</li>
                        </ul>
                    </div>
                </details>

                <details class="hs-cap-detail">
                    <summary class="hs-cap-summary">
                        <span class="hs-cap-icon" aria-hidden="true"></span>
                        <span class="hs-cap-title">AI-Driven Marketing Operations</span>
                    </summary>
                    <div class="hs-cap-content">
                        <p class="hs-p">Automated campaign workflows, personalized content assembly, and lead management tied to your CRM.</p>
                        <ul class="hs-bullets">
                            <li>Lead scoring and nurture automations</li>
                            <li>Personalized content generation and assembly</li>
                            <li>Campaign performance tracking and reporting</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- ================= EXAMPLE AUTOMATIONS ================= -->
    <section class="hs-cases" aria-labelledby="hs-cases-title">
        <div class="hs-container">
            <h2 id="hs-cases-title" class="hs-h2">Example automations</h2>

            <div class="hs-case-grid">
                <article class="hs-case">
                    <h3 class="hs-h4">Lead Routing & Follow-Up</h3>
                    <ul class="hs-list">
                        <li>Automatic lead qualification and routing</li>
                        <li>Personalized follow-up sequences</li>
                        <li>CRM updates and task creation</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Document Processing Agent</h3>
                    <ul class="hs-list">
                        <li>Automatic extraction and classification</li>
                        <li>Data entry across multiple systems</li>
                        <li>Exception handling and human escalation</li>
                    </ul>
                </article>

                <article class="hs-case">
                    <h3 class="hs-h4">Support Ticket Triage</h3>
                    <ul class="hs-list">
                        <li>Automatic categorization and priority assignment</li>
                        <li>Routing to appropriate team members</li>
                        <li>Status updates and customer notifications</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section id="hs-contact" class="hs-contact" aria-labelledby="hs-contact-title">
        <div class="hs-container">
            <h2 id="hs-contact-title" class="hs-h2">Identify workflows to automate</h2>

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
                        <span class="hs-label">What workflows are slowing you down?</span>
                        <textarea name="focus" rows="4"
                            placeholder="e.g., manual data entry; lead follow-up; report generation; document processing"></textarea>
                    </label>
                    <input type="hidden" name="capability" value="AI Agents & Workflow Automation">
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
                Automate4U — AI Agents & Workflow Automation
            </span>
        </div>
    </section>
</div>


` }} />
    </>
  );
}
