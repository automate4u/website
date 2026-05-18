# Final Site Quality Review Plan

This document is the working checklist Codex should use before the site moves from rebuilt/pre-review into polished staging review.

The site is no longer missing its major pages. The remaining work is to make the experience feel premium, focused, trustworthy, and easy for a cautious SMB or mid-market buyer to act on.

## Review Goal

Every important page should help a potential client answer five questions quickly:

1. Do they understand the operational problem I have?
2. Can they build a connected system, not just a chatbot or isolated tool?
3. Will this reduce repetitive labor, response delays, missed follow-up, or operating cost?
4. Can my team stay in control through approvals, handoffs, monitoring, and audit trails?
5. What is the lowest-risk next step?

If a section does not help answer one of those questions, shorten it, move it lower, convert it into an FAQ/detail pattern, or remove it.

## Priority Review Pages

Review these first because they carry the most buyer intent:

- `/`
- `/services`
- `/services/ai-voice`
- `/services/ai-chat`
- `/services/ai-agents`
- `/industries/manufacturing`
- `/industries/education-childcare`
- `/solutions/daycare-voice-agent`
- `/capabilities`

Then review the remaining service, industry, How We Build, About, Privacy, and Terms pages.

## Page-Level Review Questions

For each page, check:

- Does the first screen make the page's value clear without relying on another page?
- Is the page trying to answer one main buyer question, or too many?
- Does the page speak directly to the client rather than describing the website strategy?
- Are there repeated sections saying the same thing in different words?
- Is the proof specific enough to build trust without violating NDA constraints?
- Does the page show downstream actions such as CRM updates, bookings, tasks, notifications, handoffs, logs, or KPI tracking?
- Does the page explain human control clearly enough for sensitive or cautious buyers?
- Is the CTA visible at natural decision points?
- Does the page feel premium, calm, and professional rather than dense, templated, or gimmicky?
- Does the mobile version remain readable and easy to scan?

## Audience-Facing Copy Standard

Public copy must speak to the person evaluating Automate4U.

Avoid:

- "This page shows..."
- "The site proves..."
- "Buyers need to see..."
- "This section demonstrates..."
- "Placeholder..."
- "Proof model..."
- "Wedge..."
- "Template..."
- "Sales spine..."

Prefer:

- "Start with..."
- "See how..."
- "Your team..."
- "Your customers..."
- "The workflow..."
- "You stay in control..."
- "The first useful automation..."
- "A practical starting point..."

When linking to another page, describe the operational value of the next step, not why the page exists.

## Page Length And Density Rules

Long pages are acceptable only when each section changes confidence or helps the buyer make a decision.

Reduce density by:

- Combining repeated trust/process sections.
- Keeping only the strongest examples above the fold and linking deeper.
- Turning long lists into smaller grouped cards.
- Moving edge-case detail into FAQ sections.
- Reducing proof sections that repeat the same "connected systems + human control" point.
- Keeping one clear CTA path instead of multiple competing next steps.

Do not remove sections only to make pages shorter. Remove or condense sections when they no longer add decision value.

## Service Page Standard

Service pages should answer:

- What can I buy?
- Where should I start?
- What will the first pilot or engagement validate?
- What systems or workflows can it connect to?
- How do people stay in control?
- What makes Automate4U credible for this work?

The current shared service-page structure is acceptable only if each service still has a distinct reason to believe.

Current service-specific proof expectations:

- AI Voice: flagship voice-to-operations story, demo/event-log thinking, call handling, handoff, and workflow examples.
- AI Agents: first-agent starting points, searchable agent library, and operating-loop proof.
- AI Chat: user-triggered chatbot demo, downstream action explanation, and conversation scenarios.
- AI Operations Strategy: concrete roadmap deliverables, readiness check, and 30/60/90 value roadmap.
- Marketing Automation: automation lanes, idea-to-approval workflow preview, and approval-control proof.
- Managed AI Operations: monthly ownership model, operating dashboard mock, and monthly review preview.
- Custom AI Software: custom-fit criteria, interface snapshot, and architecture proof.

If any service page feels interchangeable with another service page, add a sharper proof module, example, or decision guide rather than adding generic copy.

## Industry Page Standard

Industry pages should answer:

- What operational pain is common in this sector?
- Which workflows are good first automation candidates?
- Which Automate4U services fit this sector?
- Which focused solutions are relevant?
- What controls matter in this environment?
- What outcomes should be measured?

Industry pages should feel like sector understanding, not generic services with an industry label.

## Solution Page Standard

Solution pages are narrower than industry pages.

They should answer:

- What specific workflow or implementation is this?
- Who is it for?
- What happens in the interaction?
- What does the system do after the interaction?
- Where does the team stay in control?
- What does rollout look like?

The Daycare Voice Agent page should remain calm, operational, and daycare-executive friendly. Do not make it feel like a generic AI agency pitch.

## Proof And Case Study Standard

Representative proof stories are acceptable for staging only when they are clearly written as workflow patterns, not named client case studies.

Do not invent exact metrics.

Use proof safely by showing:

- Workflow before and after.
- Systems connected.
- Human controls.
- Metrics to validate.
- Plausible operating outcomes.

Upgrade proof once the team provides approved anonymous or sanitized details.

## URL Decision

The public service URL recommendation is:

- Make `/services/*` the canonical service path.
- Redirect `/core-services/*` to `/services/*`.
- Update sitemap, metadata, navigation, internal links, analytics event page values, and docs references together.

Do not partially migrate this. The route cleanup should happen in one deliberate pass.

## Services URL Migration Execution Notes

Approved direction: use `/services` as the public buyer-facing service path.

Implementation details:

- Create `/services` and `/services/*` routes matching the current service pages.
- Make `/services` and `/services/*` the source paths used by service data, metadata, sitemap, structured data, CTA source fields, analytics page values, proof links, industry links, navigation, footer links, and tests.
- Add permanent redirects from:
  - `/core-services` -> `/services`
  - `/core-services/:path*` -> `/services/:path*`
- Update legacy shortcut redirects such as `/ai-voice`, `/ai-agents`, `/ai-chat`, and overlapping capability redirects to point to `/services/*`.
- Keep `/core-services/*` out of sitemap/canonical metadata.
- Run `npm run lint`, `npm run build`, and `npm run test:e2e`.
- After staging deploy, manually verify that `/services/*` renders and `/core-services/*` redirects.

## Production Lead Routing

Lead routing is not required for visual/team review, but it is required before production launch.

Production routing needs:

- HubSpot private app token.
- HubSpot object decision: contact-only v1, or contact plus company/deal/ticket.
- Exact custom property names if custom fields are desired.
- Resend or another notification email provider.
- Verified sender/domain for `hello@automate4u.ca`.
- Final Calendly assessment link.
- PostHog project key if using PostHog.
- Real test submission into HubSpot and internal inboxes.

## Imagery And Trust

Generated or sourced imagery is acceptable for staging, but real team/process imagery should replace it over time.

Priority imagery to collect:

- Founder/team working photos.
- Discovery or workflow mapping sessions.
- Whiteboard/process artifacts.
- Implementation screenshots with sensitive data removed.
- Professional but natural client-work style photos.

Avoid:

- Robot visuals.
- Futuristic AI art.
- Cartoon imagery for serious operational pages.
- Generic stock photos that do not communicate real work.

## Review Output Format

For each reviewed page, produce:

- Status: strong, needs polish, or needs rewrite.
- What is working.
- What weakens trust or clarity.
- Exact recommended changes.
- Whether changes should be implemented immediately or held for team/cofounder review.

Fix small audience-copy, density, CTA, spacing, and repetition issues immediately when low risk.

Hold larger positioning, AI Voice flow, proof-claim, legal, and URL-migration changes for explicit team/cofounder approval.
