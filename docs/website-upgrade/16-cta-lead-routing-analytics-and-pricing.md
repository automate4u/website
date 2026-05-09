# CTA, Lead Routing, Analytics, And Pricing

This document locks the final conversion decisions before implementation. It should prevent drift between copy, forms, analytics, CRM routing, and pricing pages.

## Primary CTA Decision

Use this primary CTA label across the header, hero, sticky mobile CTA, and final page CTA:

**Get Free Assessment**

Why this is the best default:

- Short enough to work like "Start Free Trial."
- Clearer than "Start Free," which sounds like a software trial.
- Less commitment-heavy than "Book Now."
- More valuable than "Contact Us."
- Does not imply Automate4U is giving away a complete unpaid audit.

Use "Free AI Workflow Assessment" as the offer name in surrounding copy, headings, form labels, and confirmation states.

## CTA Label System

Use a small, consistent CTA vocabulary:

- **Get Free Assessment:** primary sitewide CTA.
- **Request My Assessment:** form submit button.
- **Assess This Workflow:** workflow-card CTA when a visitor selects a specific automation idea.
- **Try Voice Demo:** secondary CTA on homepage and AI Voice page.
- **See AI In Action:** secondary CTA when the destination is a workflow demo or simulator.
- **Plan My AI Blueprint:** paid next-step CTA after the free assessment or on deeper process pages.

Avoid:

- "Start Free" because it sounds like a SaaS trial.
- "Book Now" because it feels generic and high pressure.
- "Free Audit" because it implies a deeper deliverable than Automate4U should provide for free.
- "Schedule Consultation" as the main CTA because it sounds less differentiated.

## Free Assessment Scope

The free assessment is a consultation and fit assessment, not a full implementation audit.

Included:

- 20-30 minute consultation.
- Quick workflow and AI-fit assessment.
- One or two likely automation opportunities.
- High-level first-step recommendation.
- Rough KPI or value direction.
- Recommendation for the smallest useful first workflow.

Not included:

- Detailed workflow mapping.
- Technical architecture.
- Vendor comparison.
- Prompt design.
- Integration plan.
- Full ROI model.
- Written implementation blueprint.
- Custom demo.

Paid follow-ons:

- **AI Blueprint Sprint:** paid discovery, workflow mapping, architecture, KPI baseline, risk plan, and implementation estimate.
- **Pilot Project / Voice Launch Sprint:** controlled first implementation for one high-value workflow.
- **AI Operations Accelerator:** broader multi-agent, multi-workflow implementation after the first value case is clear.
- **Managed AI Operations:** ongoing monitoring, optimization, governance, and support.

## Four Proof Pillars

Every primary page should prove these four things quickly.

### 1. Automate4U Understands Operational Pain

Use concrete pains:

- Missed calls.
- Slow quotes.
- Parts availability questions.
- Support backlog.
- Content bottlenecks.
- CRM mess.
- Inbox chaos.
- Manual follow-up.
- Disconnected tools.

### 2. Automate4U Builds Connected Systems

Every demo should show AI plus downstream action:

- CRM update.
- Calendar booking.
- Quote task.
- SMS or email follow-up.
- Internal notification.
- Human handoff.
- KPI event.
- Audit log.

### 3. Automate4U Reduces Repetitive Labor Cost

Use proof and examples such as:

- Admin hours saved.
- Requests handled.
- Response time reduced.
- Quote cycle time reduced.
- Cost per request lowered.
- Manual steps removed.
- Follow-ups completed automatically.

When claiming financial savings, include assumptions or frame the number as an estimate.

### 4. Humans Stay In Control

Show:

- Human-in-the-loop approvals.
- Escalation paths.
- Monitoring.
- Audit logs.
- Clear handoffs.
- Permission boundaries.
- High-risk workflow safeguards.

## Lead Destination Decision

Route assessment leads to HubSpot as the primary source of truth.

Required destinations:

- Create or update a HubSpot contact.
- Create a HubSpot deal or ticket when appropriate.
- Store page source, CTA location, service interest, workflow interest, industry interest, and UTM fields.
- Send email notifications to:
  - `johnny@automate4u.ca`
  - `michael@automate4u.ca`
  - `hello@automate4u.ca`

Recommended implementation:

- Use a Next.js Server Action as the form submission boundary.
- Server Action posts to HubSpot first.
- Server Action sends notification email through a transactional email provider or a reliable automation webhook.
- Server Action optionally posts to a fallback webhook or logs non-sensitive failure details.
- Never expose HubSpot private app tokens or email provider keys client-side.

Fallback behavior:

- If HubSpot submission fails but email succeeds, show a success state and log the CRM failure for manual reconciliation.
- If both fail, show a clear error state and preserve the form data in the browser so the user can retry.

## Analytics Recommendation

Use **PostHog as the primary analytics tool** for v1.

Reasons:

- Free tier is strong enough for an early-stage website.
- Supports product-style event analytics, funnels, session replay, feature flags, surveys, and LLM analytics if needed later.
- Better fit than simple pageview analytics for tracking the assessment funnel, voice demo, automation simulator, and workflow-card engagement.
- Official pricing says the free tier includes monthly allowances such as 1M analytics events and 5K session replay recordings, with usage-based pricing after the free tier.

Reference:

- PostHog pricing: `https://posthog.com/pricing`

Optional:

- Add Google Analytics 4 later if Google Ads, Google Search Console reporting, or agency reporting workflows require it.
- Do not add multiple analytics tools on day one unless there is a clear reason.

Rules:

- Track only business-relevant events.
- Do not send sensitive free-text form content to analytics.
- Keep HubSpot as the CRM source of truth and PostHog as behavior analytics.

## Public Pricing Guidance

The website should show pricing ranges, but not raw vendor/API micro-costs.

Why:

- SMB buyers fear spend and need realistic expectations.
- Transparent ranges filter out buyers expecting enterprise-grade production AI for a personal-subscription budget.
- Publishing raw API costs makes the work look like commodity markup instead of systems design, monitoring, reliability, risk management, and support.

Recommended public pricing sections:

### Paid Blueprint

Use when the buyer needs clarity before implementation.

Suggested public framing:

> Paid strategy and implementation planning for teams that want a clear scope, workflow map, KPI baseline, and build estimate before committing to development.

Pricing can be shown as a range after the team confirms its preferred floor.

### Pilot / First Workflow Launch

Use for the first bounded implementation.

Suggested public framing:

> Start with one high-value workflow, launch it safely, measure the result, and expand only when the value is clear.

Example range to consider publishing:

- Starting pilots from roughly `$3,000-$5,000/month` for platform, support, monitoring, and a defined usage allowance.
- Additional voice usage billed by handled call minute when volume exceeds the included allowance.
- Additional completed workflows billed by completed action when appropriate.

### Production AI Operations

Use when the system handles meaningful operational volume.

Example range to consider publishing:

- Production systems commonly start around `$5,000/month` plus usage.
- Heavy usage or near-full frontline/admin replacement systems may require `$7,500-$10,000+/month` plus usage, depending on volume, risk, integrations, and support needs.

### Usage-Based Components

Use simple public language:

- Platform and support fee covers hosting, monitoring, integrations, security maintenance, AI tuning, workflow updates, and staff support.
- Voice usage is based on handled call minutes.
- Completed workflow fees may apply when calls trigger summaries, CRM updates, notifications, audit logs, or confirmations.
- High-risk workflows require extra safeguards and may be priced separately.
- SMS, WhatsApp, and similar messaging fees may be pass-through or included up to a fair monthly limit.

Suggested public ranges to validate before publishing:

- Voice AI usage: `$1.00-$1.50` per handled call minute.
- Completed call workflow: `$1.00-$2.00` per completed call or workflow.
- High-risk workflow: `$10-$25` per workflow.

## High-Risk Workflow Disclaimer

Use this principle in education, childcare, healthcare-adjacent, legal, finance, identity, and safety-related workflows:

> The system can identify, flag, document, and route sensitive requests, but final approval should remain with authorized staff until the process, data accuracy, and legal requirements are fully validated.

Examples:

- Pickup authorization changes.
- Custody-sensitive requests.
- Identity verification.
- Medication, allergy, or health-sensitive messages.
- Payment or refund exceptions.
- Legal or regulated decisions.

## Pricing Copy Guardrails

Do:

- Show that pricing scales with usage, risk, and integration depth.
- Explain that production voice AI is priced by minutes because call duration changes cost and support load.
- Tie price to business outcomes and reliability.
- Offer a staged path from assessment to blueprint or pilot.
- Reassure buyers that the first workflow can be bounded.

Do not:

- Publish internal raw vendor-cost estimates.
- Promise guaranteed savings without evidence.
- Make exact claims using vendor prices unless current pricing has been verified.
- Position production systems as comparable to a `$20-$200/month` AI subscription.
- Let pricing pages make the team look like a low-cost commodity automation shop.

## Related Documents

- `03-site-architecture-and-offers.md`: offer ladder and page structure.
- `06-technical-remediation.md`: Server Action, CRM, analytics, and test requirements.
- `08-execution-contracts.md`: form props, success states, and analytics event names.
- `13-smb-spend-confidence-strategy.md`: spend anxiety and staged buying path.
- `14-labor-efficiency-and-human-redeployment.md`: labor-efficiency messaging.
- `15-proof-inventory-checklist.md`: NDA-safe proof requirements.
