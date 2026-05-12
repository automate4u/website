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
- Creative direction: trustworthy professional-services credibility plus precise AI operations interfaces.
- Strategic layer: Digital Workforce, Value Realization, AI maturity, Managed AI Operations.
- Technical layer: typed content, Server Actions, lazy third-party scripts, Playwright conversion tests.
- Trust layer: governance, human-in-the-loop safeguards, first-7-days follow-up journey.
- Lead routing: HubSpot as source of truth, with email notifications to Johnny, Michael, and hello@automate4u.ca.
- HubSpot v1 model: basic contact plus assessment context; deal/ticket modeling deferred until setup.
- V1 free tools: Resend Free for notification emails, Calendly Free for the assessment booking link, PostHog Free for analytics.
- Pricing transparency: show ranges and explain variable vendor-cost drivers without reducing Automate4U to raw API resale.

## How To Use These Docs

Use this README as the entry point and `04-implementation-roadmap.md` as the build sequence.

The numbered files are not a strict build order. They are grouped by purpose:

### 1. Decisions And Current State

Read these first before implementation:

1. `00-context-and-decisions.md`
2. `01-current-site-audit.md`
3. `07-refinement-notes.md`

Purpose:

- Understand what was decided.
- Preserve the current-site audit.
- Avoid re-litigating settled strategy.

### 2. Market, Offer, And Conversion Strategy

Use these to shape pages, copy, CTAs, pricing, and proof:

1. `02-positioning-strategy.md`
2. `03-site-architecture-and-offers.md`
3. `18-services-and-capabilities-plan.md`
4. `13-smb-spend-confidence-strategy.md`
5. `14-labor-efficiency-and-human-redeployment.md`
6. `16-cta-lead-routing-analytics-and-pricing.md`
7. `17-pricing-transparency-and-cost-model.md`

Purpose:

- Keep AI Voice prominent without making the company voice-only.
- Keep Services, Industries, and How We Build clearly separated.
- Keep security and trust capabilities visible without confusing them with direct offers.
- Keep the offer ladder clear.
- Make spend feel staged, transparent, and practical.
- Keep CTA, lead routing, analytics, scheduling, and pricing consistent.

### 3. Visitor Experience, Trust, And Proof

Use these when designing the homepage, AI Voice page, Industry Accelerators, and proof sections:

1. `05-content-proof-and-wow-factor.md`
2. `09-governance-customer-journey-and-conversion-tests.md`
3. `11-creative-experience-direction.md`
4. `12-expertise-demonstration-experiences.md`
5. `15-proof-inventory-checklist.md`

Purpose:

- Make the site feel like trustworthy professional services plus excellent AI systems work.
- Show real operational pain, connected systems, measurable value, and human control.
- Keep anonymous/representative case studies credible and NDA-safe.

### 4. Engineering Contracts

Use these while coding:

1. `04-implementation-roadmap.md`
2. `06-technical-remediation.md`
3. `08-execution-contracts.md`
4. `10-strategic-tool-stack-taxonomy.md`

Purpose:

- Define build phases.
- Keep content data, metadata, forms, analytics, scripts, and components consistent.
- Avoid one-off page implementations.

## Implementation Flow

Follow this practical sequence:

1. Current-state code audit against `01-current-site-audit.md`.
2. Phase 1 foundation from `04-implementation-roadmap.md` and `06-technical-remediation.md`.
3. Shared data/component contracts from `08-execution-contracts.md`.
4. Homepage and AI Voice rebuild using `02`, `03`, `05`, `11`, `12`, and `16`.
5. First Industry Accelerator and proof modules using `10`, `15`, and `17`.
6. Services and capabilities taxonomy/rebuild using `03`, `04`, `08`, `11`, and `18`.
7. Conversion tracking, HubSpot/Resend/Calendly, and Playwright tests using `06`, `08`, `09`, and `16`.
8. Incremental migration of remaining pages.

## First Implementation Milestone

Do not try to rebuild the entire site at once.

Codex implementation note:

- These docs are the implementation source of truth for the upgrade project.
- Code implementation began after explicit approval in this conversation.
- Keep app changes aligned with these docs instead of inventing a new plan in chat.

Current implementation status:

- Technical foundation fixes are in progress.
- Lint and production build are currently passing.
- Metadata helper, route metadata layouts, sitemap, and robots have been added.
- A shared Free AI Workflow Assessment Server Action and form component have been added.
- Contact and core service lead flows now use the shared assessment path where practical.

Milestone 1 should ship:

- Technical foundation fixes: lint/build, metadata helper, sitemap, robots.
- Typed content source of truth for core services, workflows, accelerators, and case studies.
- Shared Free AI Workflow Assessment form using a Server Action where practical.
- HubSpot lead routing plus email notifications.
- Basic HubSpot contact model, Resend notification emails, and Calendly assessment booking link.
- PostHog event analytics for assessment, demo, and workflow engagement.
- Homepage rebuilt around the new positioning.
- AI Voice flagship page rebuilt enough to show the voice-to-operations story.
- One high-quality Industry Accelerator page.
- Playwright conversion-path tests for the assessment form and voice demo path.

## What Must Not Get Lost

- AI Voice is the flagship wedge, not the whole business.
- The site must support chat, email, marketing, operational, and integration automations.
- The design should feel premium and engineered, not like a generic AI template.
- The design should include real people, process, collaboration, and professional-services trust cues, not only dashboards and abstract AI visuals.
- The homepage should demonstrate expertise through interactive systems, especially the Automation Simulator, Voice Demo plus Back-Office Event Log, and Automation Ideas Library.
- Proof must be concrete, truthful, and tied to real workflows.
- Under NDA constraints, public case studies must be anonymous, sanitized, or representative enough to protect client identity while staying truthful.
- Case studies and proof modules should not be written until the proof inventory is collected.
- SMB buyers fear spend itself, so the site must show a staged path: start small, prove value, then expand.
- The site can explain raw cost drivers transparently, but pricing must stay tied to reliability, workflow design, monitoring, risk, and support.
- The CTA is "Get Free Assessment"; the offer is "Free AI Workflow Assessment"; paid follow-ons are the AI Blueprint Sprint or pilot project.
- Labor savings should be framed as automating repetitive hours and redeploying humans to higher-value work, not careless employee replacement.
- Governance and human handoff are part of the sales story.
- Direct services should be easy to find. Capabilities should prove how Automate4U builds safely, securely, and reliably.
- A broken assessment form is a deployment blocker.

## Anti-Overbuild Rule

The docs are now deep enough. New planning should only be added if it prevents a concrete implementation mistake.

Start building from `04-implementation-roadmap.md`, using `08-execution-contracts.md` and `11-creative-experience-direction.md` as guardrails.
