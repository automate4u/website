# Active Execution Checklist

This is the single checklist to work from now. Older roadmap docs remain useful context, but this file is the active queue.

## Current Sprint: Authority And High-Budget Conversion

### 1. Homepage Authority Pass

Status: Completed in code. Needs human review.

Goal: make the homepage immediately communicate production readiness, senior engineering credibility, existing-tool integration, and a bounded path to launch.

Tasks:

- [x] Rewrite hero around production-ready AI agents, voice assistants, RAG, and existing-tool integration.
- [x] Add proof/authority immediately after the hero.
- [x] Add a compact 2-4 week bounded delivery model.
- [x] Add best-fit filtering for higher-value buyers.
- [x] Keep claims truthful: 2-4 weeks means a bounded first workflow, pilot, or launch sprint, not every possible project.

### 2. Premium CTA Decision And Test

Status: Started on homepage only.

Decision needed:

- Keep `Get Free Assessment` everywhere.
- Or use a premium above-fold CTA such as `Request AI Workflow Assessment`.
- Or use a direct sales CTA such as `Book a Technical Strategy Call`.

Recommended starting point:

- Use `Request AI Workflow Assessment` above the fold.
- Keep `Free AI Workflow Assessment` as the offer name in supporting copy.
- Keep budget range in the form to protect lead quality.

Current implementation:

- Homepage hero now uses `Request AI Workflow Assessment`.
- Other global CTAs still use the previous language until the team approves a broader replacement.

### 3. Education & Childcare ROI Pass

Status: Completed in code. Needs human review.

Tasks:

- [x] Add multi-location ROI framing.
- [x] Mention enrollment response time, tour conversion/follow-up, staff hours saved per center, missed calls reduced, and rollout across locations.
- [x] Keep the page calm and safety-aware.

### 4. Manufacturing Financial/RFQ Pass

Status: Completed in code. Needs human review.

Tasks:

- [x] Add sharper financial framing around quote cycle time, missed RFQs, response SLA, margin protection, ERP/CRM integration, and human pricing review.
- [x] Keep this as an industrial/trade services proof path.

### 5. Healthcare Trust Pass

Status: Completed in code. Needs human review.

Tasks:

- [x] Add `What AI will never do`.
- [x] State no diagnosis, no emergency triage, no clinical decisions, no independent privacy-sensitive resolution, and no replacement for authorized staff judgment.
- [x] Keep front-desk/admin value clear.

### 6. Productized Solution Pages

Status: Completed in code. Needs human review.

Recommended order:

- [x] Manufacturing Quote & Order Response Agent.
- [x] Healthcare Front Desk Agent.
- [x] Home Services Missed-Call & Dispatch Agent.

Use Daycare Voice Agent as the model: operational reality, what the agent handles, demo/workflow preview, human controls, rollout, FAQ, and CTA.

### 7. Founder/Team Authority

Status: Completed in code. Needs human review.

Tasks:

- [x] Add senior credibility to About/Team.
- [x] Add concise founder/team proof strip on homepage or trust page.
- [x] Mention years of experience, production systems, integrations, industries, RAG/voice/agent experience, and enterprise/government/SMB exposure where approved.

### 8. Contact Form Lead Quality

Status: Completed in code. Needs human review.

Decision:

- Require the fields needed to qualify fit, urgency, and implementation context.

Required fields now:

- Work email.
- Company.
- Industry.
- Biggest workflow pain.
- Tools used.
- Timeline.
- Budget range.

### 9. Proof Inventory And Legal Review

Status: Team-owned ongoing work.

Tasks:

- [ ] Approve sanitized proof stories and result ranges.
- [ ] Replace representative proof where stronger approved proof exists.
- [ ] Legal review Privacy and Terms.
- [ ] Replace generated/sourced imagery with real team/process photos when available.

### 10. Final Launch QA Without HubSpot

Status: In progress.

Tasks:

- [ ] Final internal email notification test through Resend.
- [ ] Final Calendly success-link check.
- [ ] Production smoke test after deploy.
- [ ] Confirm PostHog events are still firing after the latest deploy.
- [x] Add final pre-launch QA checklist for the team.
- [x] Include Calendly assessment link in internal notification emails.
- [x] Run pre-deploy local checks: lint, build, and e2e.

### 10A. Buyer Trust And Solution Page Polish

Status: Completed in code. Needs human review.

Tasks:

- [x] Add an immediate homepage trust strip without implying false client partnerships.
- [x] Show integration/tool familiarity as capability signals, not partner claims.
- [x] Add buyer-priority sections to Manufacturing, Healthcare, and Home Services solution pages.
- [x] Make the new solution pages speak to the reviewing operator/executive before the implementation details.

### 11. HubSpot Production Routing

Status: Moved to final step. Blocked until HubSpot access, field names, and object model are available.

Tasks:

- [ ] Final HubSpot routing.
- [ ] Confirm HubSpot private app token.
- [ ] Confirm HubSpot v1 object model: contact-only, or contact plus company/deal/ticket.
- [ ] Confirm exact HubSpot custom property names.
- [ ] Run a real production-style form submission test into HubSpot.

## Recently Completed

- [x] Technical foundation stabilized.
- [x] Services and How We Build taxonomy implemented.
- [x] `/core-services/*` moved to `/services/*` with redirects.
- [x] Assessment modal, attribution, PostHog events, and conversion tests added.
- [x] Industry focus narrowed to six public targets.
- [x] Professional Services sharpened to include advisory/financial intake, real estate/property lead response, legal/accounting/consulting follow-up, and document-heavy workflows.
- [x] Home Services sharpened around high-value trades, property maintenance, dispatch, estimate follow-up, and trust controls.
- [x] Deep-dive audit captured in `deep-dive-audit-action-plan.md`.
