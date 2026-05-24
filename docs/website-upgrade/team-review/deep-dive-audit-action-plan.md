# Deep-Dive Audit Action Plan

This document converts the latest team audit into implementation-ready priorities.

## Audit Summary

The site is now much stronger than a typical AI agency site because it explains workflows, integrations, human controls, escalation, monitoring, and measurable outcomes.

The main remaining gap is authority. The site reads like a serious technical capability library, but it does not yet create enough executive confidence through proof, delivery certainty, urgency, pricing confidence, and visible senior expertise.

## Strategic Direction To Test

The audit recommends making this value proposition more prominent:

> Production-ready custom AI agents, voice assistants, and RAG architectures integrated into your existing tools in 2 to 4 weeks.

Use this carefully. It is strong, but it must be true for the first paid milestone we are willing to sell. If used publicly, clarify that the 2 to 4 week timeline applies to a bounded first workflow, pilot, or launch sprint, not every possible enterprise rollout.

## Primary Personas From Audit

The audit recommends focusing the highest-intent buyer journey around:

- Education & Care Networks.
- Industrial & Trade Services.
- Healthcare Operations.

This does not require removing the other active industry pages. It means the homepage, proof, and first productized solutions should emphasize these three first.

Current supporting industry pages that still matter:

- Home Services remains a high-value opportunity, especially HVAC, plumbing, electrical, restoration, roofing, pest control, property maintenance, and multi-location operators.
- Professional Services remains a high-value opportunity, especially advisory, real estate/property, legal/accounting, consulting, and document-heavy service workflows.
- Guest Services & Hospitality remains active, but should not distract from the first three homepage personas unless there is active pipeline.

## Critical Changes To Add To Roadmap

### 1. Homepage Authority Rewrite

Goal: make the first screen feel like a premium implementation partner, not a generic automation agency.

Implementation notes:

- Test a sharper hero around production-ready AI agents, voice assistants, RAG, and legacy tool integration.
- Add proof bullets directly in or near the hero:
  - Integrates with existing CRM, ERP, calendars, email, documents, spreadsheets, and custom APIs.
  - Human-in-the-loop controls for sensitive workflows.
  - Bounded pilot in 2 to 4 weeks for the first workflow.
  - Measured against response time, hours saved, conversion, or cycle time.

Decision needed:

- Confirm exact hero claim and whether `2 to 4 weeks` is acceptable as a public promise.

### 2. Proof Above The Fold Or Immediately After Hero

Goal: create executive confidence before visitors read long explanations.

Fast proof assets to add:

- Anonymized case snapshots.
- Founder/team credibility bullets.
- Sample architecture diagram.
- Sample workflow map.
- Sample audit log or KPI dashboard.
- Before/after operational examples.
- Sanitized result ranges.

Do not wait for named client permission. Use accurate anonymous proof and founder/team experience where appropriate.

### 3. Premium CTA Review

The current standard CTA is:

> Get Free Assessment

Audit concern: this may feel too low-commitment or SMB/free-consultation oriented for high-budget decision-makers.

CTA options to test:

- Book a Technical Strategy Call.
- Request AI Workflow Assessment.
- Discuss a Production AI Pilot.

Recommended direction:

- Use a premium CTA above the fold, such as `Book a Technical Strategy Call` or `Request AI Workflow Assessment`.
- Keep the free assessment language lower on the page or in supporting copy.
- Keep budget range in the form so low-fit leads self-filter.

Decision needed:

- Choose the primary CTA label before global replacement.

### 4. Productized Solution Pages

Daycare Voice Agent is the strongest productized page. Use it as the model.

Completed solution pages:

- Manufacturing Quote & Order Response Agent.
- Healthcare Front Desk Agent.
- Home Services Missed-Call & Dispatch Agent.

Each solution page should include:

- Specific operational reality.
- What the agent handles.
- Demo or workflow preview.
- Human control boundaries.
- Implementation timeline.
- FAQ/objection handling.
- CTA for technical strategy call or workflow assessment.

### 5. Best-Fit / Not-Fit Filtering

Goal: attract higher-budget decision-makers without sounding dismissive.

Add a section or form microcopy that says the best fit is:

- Multi-location teams.
- High-volume customer/admin workflows.
- Teams with recurring calls, emails, quotes, intake, support, scheduling, or document follow-up.
- Businesses ready to fund a paid pilot or implementation if the workflow case is strong.

Not the best fit:

- One-off prompt help.
- Tiny automations with no operational value.
- Teams looking for a generic chatbot subscription with no workflow integration.

### 6. 2 To 4 Week Delivery Model

Goal: make delivery certainty visible.

Recommended section:

- Week 1: workflow discovery, process map, data/source review, success metrics.
- Week 2: prototype, integration path, knowledge/RAG setup, first workflow actions.
- Week 3: testing, guardrails, human handoff, logging, QA.
- Week 4: launch, monitoring, training, optimization plan.

Clarify that timelines vary by integration complexity, security requirements, and client responsiveness.

### 7. Vertical-Specific Improvements

Education & Care Networks:

- Add executive ROI framing: missed calls reduced, enrollment response time, tour conversion, staff hours saved per center, multi-location rollout.

Industrial & Trade Services:

- Add sharper financial framing: quote cycle time, missed RFQs, response SLA, margin protection, ERP/CRM integration without replacing current systems.

Healthcare Operations:

- Add `What AI will never do` section:
  - No diagnosis.
  - No emergency triage.
  - No clinical decisions.
  - No independent resolution of privacy-sensitive cases.
  - No replacement for authorized staff judgment.

### 8. Team And Founder Authority

Goal: make the small-team advantage feel senior and credible.

Add stronger founder/team credibility where appropriate:

- Years of experience.
- Production systems shipped.
- Industries served.
- Enterprise integrations.
- AI/RAG/voice projects.
- Prior work with enterprise, government, marketplace, SaaS, SMB, and regulated or sensitive workflows when allowed.

Do not overdo founder biography on service pages. Use it where it reduces buyer risk: About, Team, homepage proof strip, and technical trust sections.

### 9. Contact/Form Lead Quality

Audit concern: `Most fields are optional` may reduce lead quality.

Recommended changes:

- Keep the form easy, but strongly guide important fields.
- Consider requiring:
  - Industry.
  - Biggest workflow pain.
  - Tools used.
  - Timeline.
  - Budget range.
- Add microcopy for best-fit teams evaluating production AI agents, voice automation, or RAG systems connected to existing tools.

Decision needed:

- Decide which fields must be required before changing the form.

### 10. Accessibility And Navigation QA

Review:

- Mobile nav and mega-menu `aria-expanded`, `aria-controls`, focus states, and keyboard behavior.
- Skip links.
- Duplicate navigation reading order for assistive tech.
- Alt text and captions for future screenshots or product visuals.

## Recommended Implementation Sequence

1. [x] Add homepage authority/proof/CTA pass.
2. [x] Add 2 to 4 week delivery model.
3. [x] Add best-fit/not-fit filtering.
4. [x] Add Healthcare `What AI will never do`.
5. [x] Add Manufacturing financial/RFQ framing.
6. [x] Add Education multi-location ROI framing.
7. [x] Add founder/team credibility proof strip.
8. [x] Create Manufacturing Quote & Order Response Agent solution page.
9. [x] Create Healthcare Front Desk Agent solution page.
10. [x] Create Home Services Missed-Call & Dispatch Agent solution page.
11. [x] Tighten contact form qualification.
12. [ ] Run accessibility/navigation QA.

## Open Decisions

- Exact primary CTA label.
- Whether to use `2 to 4 weeks` in the hero or reserve it for delivery-model sections.
- Which proof assets can be made public immediately.
- Which solution page should be built first after Daycare Voice Agent.
- Which form fields should become required.
