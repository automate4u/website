# Automate4U Website Upgrade Docs

This folder is the source of truth for the Automate4U website upgrade.

The docs are split into two practical folders:

- `team-review/`: short, human-readable docs for team review, production setup, proof collection, pricing, positioning, and approval decisions. Files here use plain names instead of numbered planning names.
- `implementation-reference/`: deeper working docs for Codex and Michael to stay aligned while implementing. These can keep numbered names because they are roadmap/reference material, not team review packets.

## Start Here

For the Automate4U team:

- `team-review/current-status-and-review-checklist.md`
- `team-review/production-lead-routing-setup.md`
- `team-review/proof-inventory-checklist.md`
- `team-review/services-and-how-we-build-taxonomy.md`
- `team-review/project-decisions-summary.md`

For Codex and implementation planning:

- `implementation-reference/04-implementation-roadmap.md`
- `implementation-reference/08-execution-contracts.md`
- `implementation-reference/06-technical-remediation.md`
- `implementation-reference/01-current-site-audit.md`

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

## Team Review Folder

Use `team-review/` when the team needs to review, approve, configure, or provide business inputs.

Team-owned work includes:

- Production credentials and setup decisions.
- HubSpot object model and custom fields.
- Proof inventory and NDA-safe case study approvals.
- Pricing and cost-model comfort.
- Positioning, service taxonomy, claims, and tone.
- Cofounder review of AI Voice before major flow changes.
- Legal review of Privacy and Terms.
- Real team/process imagery when available.

## Implementation Reference Folder

Use `implementation-reference/` for build sequencing, technical decisions, and long-form planning context.

Codex-owned work includes:

- React/Next.js page work.
- Shared components and data models.
- Server Actions and form handling.
- HubSpot/Resend/PostHog/Calendly integration code once credentials and field decisions are available.
- Sitemap, metadata, schema, redirects, analytics events, and tests.
- Visual QA and responsive polish.
- Documentation updates that keep implementation status accurate.

## Current Implementation Status

For the latest snapshot, read:

- `team-review/current-status-and-review-checklist.md`

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

Build from `implementation-reference/04-implementation-roadmap.md`, using `implementation-reference/08-execution-contracts.md` and `team-review/creative-experience-direction.md` as guardrails.
