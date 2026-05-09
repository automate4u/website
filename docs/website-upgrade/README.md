# Automate4U Website Upgrade Docs

This folder is the source of truth for the Automate4U website upgrade.

The plan is intentionally both strategic and technical: the site should sell Automate4U as a small expert team that designs and builds AI operations systems, with AI Voice as the flagship wedge and broader automation as the long-term value.

## Current Direction

Core positioning:

> We automate the conversations and workflows that slow your business down.

Key decisions:

- Primary audience: SMB and mid-market owners/operators.
- Main CTA: Free AI Workflow Assessment.
- Primary CTA button label: Get Free Assessment.
- Proof model: anonymous case studies with concrete metrics.
- Positioning: automation-led, with AI Voice as the flagship demo and sales wedge.
- Strategic layer: Digital Workforce, Value Realization, AI maturity, Managed AI Operations.
- Technical layer: typed content, Server Actions, lazy third-party scripts, Playwright conversion tests.
- Trust layer: governance, human-in-the-loop safeguards, first-7-days follow-up journey.
- Lead routing: HubSpot as source of truth, with email notifications to Johnny, Michael, and hello@automate4u.ca.

## Recommended Reading Order

1. `00-context-and-decisions.md`
2. `01-current-site-audit.md`
3. `02-positioning-strategy.md`
4. `03-site-architecture-and-offers.md`
5. `04-implementation-roadmap.md`
6. `08-execution-contracts.md`
7. `11-creative-experience-direction.md`
8. `06-technical-remediation.md`
9. `09-governance-customer-journey-and-conversion-tests.md`
10. `10-strategic-tool-stack-taxonomy.md`
11. `14-labor-efficiency-and-human-redeployment.md`
12. `15-proof-inventory-checklist.md`
13. `16-cta-lead-routing-analytics-and-pricing.md`

Use the other docs as supporting references:

- `05-content-proof-and-wow-factor.md`
- `07-refinement-notes.md`

## First Implementation Milestone

Do not try to rebuild the entire site at once.

Milestone 1 should ship:

- Technical foundation fixes: lint/build, metadata helper, sitemap, robots.
- Typed content source of truth for core services, workflows, accelerators, and case studies.
- Shared Free AI Workflow Assessment form using a Server Action where practical.
- HubSpot lead routing plus email notifications.
- PostHog event analytics for assessment, demo, and workflow engagement.
- Homepage rebuilt around the new positioning.
- AI Voice flagship page rebuilt enough to show the voice-to-operations story.
- One high-quality Industry Accelerator page.
- Playwright conversion-path tests for the assessment form and voice demo path.

## What Must Not Get Lost

- AI Voice is the flagship wedge, not the whole business.
- The site must support chat, email, marketing, operational, and integration automations.
- The design should feel premium and engineered, not like a generic AI template.
- The homepage should demonstrate expertise through interactive systems, especially the Automation Simulator, Voice Demo plus Back-Office Event Log, and Automation Ideas Library.
- Proof must be concrete, truthful, and tied to real workflows.
- Under NDA constraints, public case studies must be anonymous, sanitized, or representative enough to protect client identity while staying truthful.
- Case studies and proof modules should not be written until the proof inventory is collected.
- SMB buyers fear spend itself, so the site must show a staged path: start small, prove value, then expand.
- The CTA is "Get Free Assessment"; the offer is "Free AI Workflow Assessment"; paid follow-ons are the AI Blueprint Sprint or pilot project.
- Labor savings should be framed as automating repetitive hours and redeploying humans to higher-value work, not careless employee replacement.
- Governance and human handoff are part of the sales story.
- A broken assessment form is a deployment blocker.

## Anti-Overbuild Rule

The docs are now deep enough. New planning should only be added if it prevents a concrete implementation mistake.

Start building from `04-implementation-roadmap.md`, using `08-execution-contracts.md` and `11-creative-experience-direction.md` as guardrails.
