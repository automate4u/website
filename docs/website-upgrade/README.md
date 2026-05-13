# Automate4U Website Upgrade Docs

This folder is the source of truth for the Automate4U website upgrade.

The docs are now separated by owner:

- `for-team-review/`: business, strategy, proof, pricing, legal, and production setup docs for the Automate4U team.
- `for-codex-implementation/`: technical roadmap, execution contracts, remediation, and implementation guardrails for Codex.

Use this README as the entry point.

## Current Direction

Core positioning:

> We automate the conversations and workflows that slow your business down.

Key decisions:

- Primary audience: SMB and mid-market owners/operators.
- Main CTA offer: **Free AI Workflow Assessment**.
- Primary CTA button label: **Get Free Assessment**.
- Proof model: anonymous, sanitized, or representative proof until real client approval exists.
- Positioning: automation-led, with AI Voice as the flagship wedge.
- Scope: voice is prominent, but Automate4U also sells chat, email, marketing, operational, integration, and custom AI automation.
- Creative direction: trustworthy professional services plus precise AI operations interfaces.
- Lead routing: HubSpot as source of truth, with email notifications to Johnny, Michael, and hello@automate4u.ca.
- V1 free tools: Resend Free, Calendly Free, and PostHog Free where appropriate.
- Pricing transparency: show ranges and cost drivers without reducing Automate4U to raw API resale.

## Read First

For the team:

- `for-team-review/README.md`
- `for-team-review/19-team-handoff-status.md`
- `for-team-review/20-production-lead-routing-setup.md`
- `for-team-review/15-proof-inventory-checklist.md`

For Codex:

- `for-codex-implementation/README.md`
- `for-codex-implementation/04-implementation-roadmap.md`
- `for-codex-implementation/08-execution-contracts.md`
- `for-codex-implementation/06-technical-remediation.md`

## Team Review Docs

Use `for-team-review/` for docs that need business review, approval, account setup, or proof collection.

This includes:

- Positioning and strategy.
- Site architecture and offers.
- Services vs How We Build taxonomy.
- CTA, pricing, spend confidence, and labor-savings messaging.
- Creative direction and expertise demonstration.
- Governance, customer journey, and production lead routing.
- Proof inventory and NDA-safe case study rules.
- Team handoff/status.

The team-owned folder is intentionally written so non-developers can review the business decisions without reading implementation details first.

## Codex Implementation Docs

Use `for-codex-implementation/` for docs that guide code changes.

This includes:

- Current-site audit.
- Active implementation roadmap.
- Technical remediation plan.
- Execution contracts for content, components, forms, analytics, and tests.
- Tool-stack taxonomy for integration names and reusable data.

Codex should use these docs as the active build instructions and should not invent a new implementation plan in chat unless the team changes direction.

## Ownership Guide

### Codex Can Implement

- React/Next.js page work.
- Shared components and data models.
- Server Actions and form handling.
- HubSpot/Resend/PostHog/Calendly integration code once credentials and field decisions are available.
- Sitemap, metadata, schema, redirects, analytics events, and tests.
- Visual QA and responsive polish.
- Documentation updates that keep the roadmap current.

### Team Must Provide Or Review

- HubSpot private app token and object model decisions.
- Resend account, verified sender/domain, and API key.
- Final Calendly booking link.
- PostHog project key.
- Real team photos and approved brand/process imagery.
- Proof inventory, approved metrics, and NDA-safe case study permissions.
- Legal review for Privacy and Terms.
- Cofounder review of the AI Voice flagship page before major flow changes.

## Current Implementation Status

For the latest snapshot, read:

- `for-team-review/19-team-handoff-status.md`

Current high-level status:

- Lint, production build, and Playwright conversion-path tests pass.
- Homepage, AI Voice, service pages, industry pages, How We Build pages, About pages, and legal basics have been substantially rebuilt.
- Representative proof stories have been added and placed across the site.
- Production lead routing code exists at a basic v1 level, but final production setup still needs real credentials and field decisions.

## What Must Not Get Lost

- AI Voice is the flagship wedge, not the whole business.
- The site must support chat, email, marketing, operational, integration, and custom AI automations.
- The design should feel premium, professional, and engineered, not like a generic AI template.
- The design should include real people, process, collaboration, and professional-services trust cues, not only dashboards and abstract AI visuals.
- Proof must be concrete, truthful, and tied to real workflows.
- Public case studies must be anonymous, sanitized, or representative enough to protect client identity unless explicit client approval exists.
- SMB buyers fear spend, so the site must show a staged path: start small, prove value, then expand.
- Labor savings should be framed as automating repetitive hours and redeploying humans to higher-value work, not careless employee replacement.
- Governance and human handoff are part of the sales story.
- Direct services should be easy to find. How We Build should prove how Automate4U builds safely, securely, and reliably.
- A broken assessment form is a deployment blocker.

## Anti-Overbuild Rule

The docs are deep enough. New planning should only be added if it prevents a concrete implementation mistake.

Build from `for-codex-implementation/04-implementation-roadmap.md`, using `for-codex-implementation/08-execution-contracts.md` and `for-team-review/11-creative-experience-direction.md` as guardrails.
