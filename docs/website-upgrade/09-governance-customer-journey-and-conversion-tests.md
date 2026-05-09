# Governance, Customer Journey, And Conversion Tests

This document adds the final trust and operations layer for the website upgrade: AI safety, the first 7 days after a lead submits the assessment form, and automated testing for critical conversion paths.

## AI Safety And Governance Manifesto

Automate4U should make trust visible before the sales call. The website should communicate that the team treats AI systems as business infrastructure, not novelty tools.

### Public Trust Principles

Use clear public-facing principles:

- Client data is handled with care and used only for the agreed business purpose.
- Client data should not be used to train public models unless a client explicitly approves that use in writing.
- AI systems should have human handoff paths for uncertain, sensitive, or high-impact situations.
- Automations should be monitored after launch.
- Access should follow least-privilege principles.
- Sensitive workflows should include review, logging, and escalation.
- Automate4U will be honest when AI is not the right fit for a workflow.

### Governance Themes To Include On The Site

Add plain-language trust content around:

- Data privacy.
- Model and vendor selection.
- Human-in-the-loop safeguards.
- Permission boundaries.
- Audit logs and monitoring.
- Hallucination and error handling.
- Escalation rules.
- Compliance pathways.

### Compliance Pathway Language

Do not claim certifications or compliance guarantees that Automate4U does not currently hold.

Safe wording:

- "We can design workflows with SOC 2, HIPAA, and industry-specific compliance requirements in mind."
- "For regulated workflows, we define data access, retention, human review, and audit requirements before implementation."
- "We help clients choose vendors and architectures that match their security and compliance needs."

Avoid:

- "SOC 2 compliant" unless verified.
- "HIPAA compliant" unless the full implementation, vendors, agreements, and processes support the claim.
- Any blanket guarantee that AI outputs will always be correct.

### Human-In-The-Loop Defaults

For higher-risk workflows, default to:

- AI drafts, human approves.
- AI triages, human decides.
- AI answers low-risk questions, human handles exceptions.
- AI collects information, human confirms final commitments.
- AI escalates when confidence is low, data is missing, or the request is sensitive.

### Where This Should Appear

Add governance messaging to:

- Homepage trust section.
- AI Voice page.
- Managed AI Operations section.
- Industry Accelerator pages for healthcare, finance, manufacturing, and professional services.
- FAQ.
- Free AI Workflow Assessment success/follow-up flow.

## First 7 Days Customer Journey

The website experience should connect to a reliable offline sales and delivery process. A high-converting form only matters if the follow-up is fast, specific, and valuable.

### Journey Contract

Use this as the default post-submit operating model.

#### T+0: Immediate Confirmation

Trigger:

- Visitor submits the Free AI Workflow Assessment form.

Actions:

- Show the assessment-preview success state on the website.
- Send an automatic confirmation email if email infrastructure is available.
- Create or update the lead in HubSpot.
- Send internal notifications to `johnny@automate4u.ca`, `michael@automate4u.ca`, and `hello@automate4u.ca`.
- Include what happens next and expected response time.
- Preserve page source, UTM data, selected service, selected workflow, and message context.

#### T+24h: Human Review

Actions:

- Automate4U reviews the submission.
- Identify likely workflow category: voice, chat/email, marketing, operations, integration, or strategy.
- Review client website and any submitted tools/systems.
- Decide whether the lead is qualified and what the first recommended automation might be.

#### T+72h: Preliminary Assessment Snapshot

Actions:

- Send a short preliminary assessment snapshot before or alongside scheduling.
- Include:
  - Observed workflow pain.
  - Likely first automation opportunity.
  - Systems that may need to connect.
  - Questions to resolve on the strategy call.
  - One or two likely KPIs to measure.

This creates immediate value and makes the strategy call feel specific.

#### T+7 Days: Strategy Call Or Clear Next Step

Actions:

- Complete the strategy call or send a clear next step.
- Confirm:
  - Target workflow.
  - Baseline metrics needed.
  - Feasibility concerns.
  - Suggested first project: Voice Launch Sprint, AI Operations Accelerator, or Managed AI Operations path.

### Internal Lead Routing

Each lead should be tagged by:

- HubSpot contact/deal/ticket ID when available.
- Source page.
- CTA location.
- Service interest.
- Workflow interest.
- Industry accelerator interest.
- Urgency/timeline.
- Estimated fit.

### Website Copy Alignment

The form success state and assessment CTA should not overpromise a full consulting report instantly. Promise a high-quality review process and a practical first recommendation.

Use "Get Free Assessment" as the primary button label and "Free AI Workflow Assessment" as the offer name.

## Conversion-Path Automated Testing

Critical conversion flows should have Playwright coverage before major redesign work is considered complete.

### Required E2E Tests

Add Playwright tests for:

- Homepage loads and primary Free AI Workflow Assessment CTA is visible.
- Assessment form can be opened or reached from the homepage.
- Assessment form required-field validation works.
- Assessment form can be submitted successfully in a mocked or test-safe environment.
- Assessment form success state displays the next steps and preview assessment focus.
- AI Voice page loads.
- Voice demo CTA is visible.
- Voice demo handles microphone denial or mocked failure gracefully.
- Header navigation can reach AI Voice, AI Agents, Industry Accelerators, and Free AI Assessment.

### Test Safety

Do not send real production leads during tests.

Recommended approach:

- Use a test mode or mocked Server Action result.
- Gate real submission destinations behind environment variables.
- In CI, use a fake form destination or mocked network route.

### Release Gate

Before deployment:

- `npm run lint`
- `npm run build`
- Playwright conversion-path test suite

The form and primary CTAs are revenue-critical. A deploy should fail if the assessment form cannot be reached or submitted in the test environment.

## Related Documents

- `02-positioning-strategy.md`: trust and operating model positioning.
- `05-content-proof-and-wow-factor.md`: where governance and first-7-days content should appear.
- `06-technical-remediation.md`: technical testing requirements.
- `08-execution-contracts.md`: form and analytics contracts.
- `16-cta-lead-routing-analytics-and-pricing.md`: CTA and lead-routing decisions.
