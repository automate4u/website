# Current Status And Review Checklist

Last updated: after the launch-facing cleanup pass, visual QA polish, docs-folder cleanup, remaining legacy-pattern audit, proof-language polish, AI Chat demo fallback, metadata/sitemap cleanup, and Privacy/Terms polish.

This document is the quick team-review version of the upgrade work.

Use:

- `../implementation-reference/04-implementation-roadmap.md` for the full build roadmap.
- `services-and-how-we-build-taxonomy.md` for the service/capability taxonomy.
- `production-lead-routing-setup.md` for HubSpot, Resend, Calendly, and PostHog setup.

## Current Status

The upgrade is in a strong pre-launch review state. The main website rebuild is largely complete; the remaining work is production lead routing, team/legal/proof review, and final page polish.

## Simple Checklist

### Done

- [x] Technical foundation stabilized: lint, build, sitemap, robots, metadata, schema basics, typed data, and route cleanup.
- [x] Shared assessment form and Server Action added.
- [x] Form captures budget range, source page, CTA location, landing page, referrer, and UTM fields.
- [x] Homepage rebuilt around operational pain, connected systems, AI Voice as flagship wedge, broader automation, proof, spend confidence, and assessment CTA.
- [x] Core service pages rebuilt or added.
- [x] Industry pages rebuilt as native React pages.
- [x] Daycare Voice Agent added under Solutions as a focused implementation.
- [x] Capabilities reframed into How We Build trust pages.
- [x] Representative proof/workflow examples added across homepage, service pages, and industry pages.
- [x] Proof wording polished to sound buyer-facing rather than like internal NDA planning notes.
- [x] AI Chat demo now has a user-triggered preview/fallback instead of showing a blank third-party iframe by default.
- [x] Privacy and Terms expanded into review-ready pages.
- [x] Docs reorganized into `team-review/` and `implementation-reference/`.
- [x] Standard checks pass: `npm run lint`, `npm run build`, and `npm run test:e2e`.

### Still To Do

- [ ] Final production lead routing once credentials and HubSpot field/object decisions are ready.
- [ ] Real production-style form submission test into HubSpot and internal email notifications.
- [ ] Add final Calendly assessment link to form success states and notification emails.
- [ ] Add final PostHog project key and confirm live funnel events.
- [ ] Team review of top buyer pages for tone, density, claims, and sales clarity.
- [ ] Cofounder review of AI Voice before major flow changes.
- [ ] Proof inventory collection and approval of anonymous/sanitized claims.
- [ ] Legal counsel review of Privacy and Terms.
- [ ] Replace generated/sourced imagery with real team/process photos when available.

### Next Work While Credentials Are Pending

- [ ] Final human-quality pass on `/`, `/core-services`, `/core-services/ai-voice`, `/core-services/ai-chat`, `/core-services/ai-agents`, `/industries/manufacturing`, `/industries/education-childcare`, and `/solutions/daycare-voice-agent`.
- [ ] Reduce density where sections feel heavy.
- [ ] Tighten claims that feel too broad, too strong, or not NDA-safe.
- [ ] Review CTA placement and page rhythm on desktop/mobile.
- [ ] Prepare proof inventory using `proof-inventory-checklist.md`.

What is stable:

- Lint passes.
- Production build passes.
- Playwright conversion-path tests pass.
- First mobile typography polish pass has been applied to reduce oversized headings on dense pages.
- Second visual QA pass reviewed remaining service pages, How We Build, and several remaining industry pages on mobile/desktop without finding launch-blocking layout problems.
- Remaining legacy-pattern audit found no active migrated-page usage of `dangerouslySetInnerHTML`, Formspree, raw `<img>` tags, old WordPress assets, or old HTTP asset references in `app/`, `components/`, or `data/`. The only `dangerouslySetInnerHTML` usage found is the intentional JSON-LD component, and the only iframe found is the intentional AI Chat demo.
- Proof sections now use more buyer-facing language: workflow examples, connected systems, human controls, and measurable operating outcomes rather than internal NDA/planning phrasing.
- The AI Chat demo section now uses a polished user-triggered preview with an external demo link so the page still feels intentional if the third-party iframe is slow or visually blank.
- Metadata/sitemap cleanup now keeps redirect-only legacy capability URLs out of the sitemap and gives `/core-services`, `/privacy`, and `/terms` canonical metadata through the shared metadata helper.
- Privacy and Terms pages have been expanded from basic placeholders into practical review-ready pages covering assessment data, analytics, third-party tools, sensitive workflow details, AI/automation boundaries, pricing/examples, and project-specific agreements.
- Website upgrade docs are now split into human-readable `team-review/` docs and deeper `implementation-reference/` docs.
- Main CTA language is standardized as **Get Free Assessment**.
- The offer is standardized as **Free AI Workflow Assessment**.
- AI Voice remains the flagship wedge, but the site no longer positions Automate4U as voice-only.
- Primary navigation routes now point to native, launch-ready pages or intentional redirects.
- Footer legal links now resolve to basic Privacy and Terms pages.

What changed strategically:

- **Services** now means what clients can buy.
- **Industries** now means where those services are applied.
- **How We Build** now means trust and delivery capability: security, integrations, analytics, adoption, architecture, and strategy.
- Focused implementations such as Daycare Voice Agent live under **Solutions**, linked contextually from service and industry pages rather than pushed as a primary top-nav category.

## Major Pages Completed Or Upgraded

### Homepage

The homepage has been rebuilt around:

- Operational pain.
- Connected AI systems.
- AI Voice as the flagship wedge.
- Broader chat, email, marketing, and operations automation.
- Spend confidence.
- Human control.
- Managed AI Operations.
- Professional-services trust cues.
- NDA-safe representative workflow proof stories.

### AI Voice

The AI Voice page has been rebuilt as the flagship service page with:

- Voice-to-operations positioning.
- Demo and event-log thinking.
- Workflow examples.
- Pricing confidence.
- Links into focused solution pages such as Daycare Voice Agent.

Keep AI Voice mostly stable until cofounder review.

### Services

Added or rebuilt:

- `/core-services`
- `/core-services/ai-voice`
- `/core-services/ai-agents`
- `/core-services/ai-chat`
- `/core-services/ai-transformation`
- `/core-services/marketing-automation`
- `/core-services/managed-ai-operations`
- `/core-services/custom-ai-software`

The new `/core-services` overview explains how the services fit together and gives visitors a clearer path through Voice, Agents, Chat, Strategy, Marketing, Managed Ops, and Custom Software.

The non-voice service pages now use a shared sales spine plus flexible proof stacks. This means the pages stay consistent without becoming cloned templates.

Current service proof assets:

- AI Chat: live chatbot demo, downstream action explanation, conversation scenarios.
- AI Agents: searchable agent-pattern library, operating-loop proof.
- AI Operations Strategy: readiness check, 30/60/90 value roadmap.
- Marketing Automation: idea-to-approval workflow preview, approval-control proof.
- Managed AI Operations: operations dashboard, monthly operating review preview.
- Custom AI Software: interface snapshot, architecture proof block.

### Proof Layer

The first Phase 5 proof layer has been added and the public-facing language has been tightened.

Added:

- `data/proof-stories.ts`
- `components/proof/ProofStorySection.tsx`
- Homepage proof section with representative workflow examples.
- Filtered proof sections on shared service pages and industry pages.
- Proof inventory instructions in `proof-inventory-checklist.md`.

Current proof stories:

- Manufacturing response agent for parts, availability, quoting, and order questions.
- Daycare front-desk voice assistant with staff-controlled escalation.
- Home services missed-call recovery, booking, dispatch intake, and quote follow-up.
- Marketing content workflow for drafting, approval, scheduling, and reporting.
- Retail support/order agent for product questions, order status, returns, and support triage.
- Professional services intake, booking, document follow-up, and staff handoff.
- Healthcare front-desk support with conservative escalation.
- Custom operations workbench for review, approvals, and operating visibility.
- Managed AI Operations rhythm for monitoring, review, tuning, and value reporting.
- AI roadmap/value realization assessment.
- Real estate speed-to-lead and showing request workflow.
- Hospitality guest response and service request routing.
- Technology and media support, content, customer update, and reporting workflow.
- Financial services document intake and advisor handoff workflow.

Important proof rule:

- These are representative, NDA-safe workflow examples. They show workflow specificity, connected actions, human controls, and metrics to validate. They should not be presented as named client case studies unless a client explicitly approves that use.
- Exact metrics should not be invented. Until approved metrics are available, the site should show the metrics Automate4U validates during assessment and pilot work.

### Industries

All listed industry pages have been rebuilt into native React pages:

- Manufacturing.
- Education & Childcare.
- Home Services.
- Professional Services.
- Retail & Ecommerce.
- Healthcare.
- Real Estate.
- Financial Services.
- Hospitality.
- Technology & Media.

The Industry pages now focus on operating pain, connected workflows, systems, controls, KPIs, spend confidence, and relevant solution links.

### Solutions

Added:

- `/solutions`
- `/solutions/daycare-voice-agent`

Daycare Voice Agent is treated as a focused implementation, not an industry.

### How We Build

Capabilities were reframed into How We Build.

Completed detail pages:

- Security, Monitoring & AI Safety.
- Data & Integrations.
- Operational Intelligence & Value Realization.
- Staff Training & Adoption.
- Technology Strategy & Enablement.
- Workflow & Systems Architecture.

Older overlapping capability URLs redirect or point users toward the correct service destination where appropriate.

### About And Legal

The public About section has been cleaned up:

- `/about/overview` is now a native page.
- `/about/our-mission` is now a native page.
- `/about/how-we-work` is now a native page.
- `/about/our-team` is now a native page without placeholder headshots; real team photos can be added later.
- `/privacy` has been added.
- `/terms` has been added.
- Privacy and Terms now have practical business/legal review language, but still need counsel review before being treated as final legal policy.

Footer dead links were removed.

## Technical Foundation

Completed:

- `app/sitemap.ts`.
- `app/robots.ts`.
- Route metadata layouts for major routes.
- Shared assessment form.
- Assessment Server Action.
- Budget range field in intake forms.
- Optional PostHog loader and first analytics events.
- Retell API route hardening.
- Botpress lazy-loading improvements.
- Playwright conversion tests.
- Active raw image cleanup where practical.
- Services overview added to sitemap and navigation.
- Privacy and Terms added to sitemap.
- Legacy placeholder-heavy Team page replaced with a native launch-ready page.

Known non-blocking warning:

- `baseline-browser-mapping` reports that its data is more than two months old during build. The build still passes. This can be updated later with a dependency refresh.
- The AI Chat demo iframe is served by an external provider. The page now uses a user-triggered preview/fallback, but the embedded demo itself can still depend on third-party availability.

## What The Team Should Review

Review these pages first:

1. `/`
2. `/core-services`
3. `/core-services/ai-voice`
4. `/core-services/ai-chat`
5. `/core-services/ai-agents`
6. `/industries/manufacturing`
7. `/industries/education-childcare`
8. `/solutions/daycare-voice-agent`
9. `/capabilities`

Review questions:

- Does the site make Automate4U feel trustworthy, practical, and technically capable?
- Does AI Voice feel like the flagship wedge without making the company sound voice-only?
- Are service pages clear enough for a buyer to understand what to buy first?
- Does the content avoid sounding like internal planning notes?
- Do the proof modules feel useful or too dense?
- Are there any claims that feel too strong, too vague, or not NDA-safe?

## Codex Implementation Queue

These are the remaining items Codex can continue implementing without needing strategic re-approval, assuming credentials are available where required.

### Production Lead Routing Code

- Finalize HubSpot field mappings once the team confirms the object model.
- Add company, deal, ticket, or note creation if the team wants more than contact-only v1.
- Add the final Calendly link to success states and notification emails.
- Improve internal notification email formatting.
- Add or refine PostHog event names once the production key is available.
- Add fallback webhook support if the team wants a backup destination.

### Visual And UX QA

- Complete one final human-quality pass on the highest-value buyer paths first:
  `/`, `/core-services`, `/core-services/ai-voice`, `/core-services/ai-chat`, `/core-services/ai-agents`, `/industries/manufacturing`, `/industries/education-childcare`, and `/solutions/daycare-voice-agent`.
- Review secondary service, industry, and How We Build pages after the priority paths are approved.
- Reduce density where proof modules feel too heavy.
- Check CTA placement, spacing, and page rhythm.
- Review footer and navigation density after team feedback.

### Proof And Case Study Implementation

- Replace representative proof stories with approved anonymous/sanitized stories when proof inventory is available.
- Add approved metrics, ranges, screenshots, diagrams, or workflow visuals.
- Build stronger proof modules where they materially improve buyer confidence.

### Remaining Migration Cleanup

- Keep legacy-pattern checks in the release QA routine.
- Confirm sitemap/canonical behavior after final route review.
- If old hidden routes are reintroduced later, rebuild or redirect them rather than bringing back migrated HTML patterns.

## Team-Owned Setup And Review

These items require Automate4U account access, business judgment, or approval.

### Required For Production Lead Routing

- Create or confirm HubSpot private app token.
- Decide HubSpot v1 model: contact-only, or contact plus company/deal/ticket.
- Provide exact HubSpot custom property names if custom fields are desired.
- Create Resend account/API key if using Resend for internal notification emails.
- Verify the sender/domain for `hello@automate4u.ca`.
- Provide final Calendly Free AI Workflow Assessment link.
- Provide PostHog project key if using PostHog.
- Confirm notification recipients remain:
  - `johnny@automate4u.ca`
  - `michael@automate4u.ca`
  - `hello@automate4u.ca`

### Required For Trust And Proof

- Review all representative proof stories for NDA safety.
- Gather proof inventory using `proof-inventory-checklist.md`.
- Approve any anonymous/sanitized case study claims before publication.
- Approve exact metrics before they appear publicly.

### Required For Brand And Legal

- Review homepage, service pages, industry pages, and Daycare Voice Agent with the team.
- Cofounder review of AI Voice before major flow changes.
- Add real team/process photos when available.
- Legal review of Privacy and Terms.

## Known Caveats

The site is strong enough for serious team review, but it should not be treated as fully launch-final until production routing, proof review, and legal review are complete.

Remaining risks:

- Some pages are content-rich and still deserve final human review for density, ordering, and tone.
- The first mobile heading polish and second visual QA pass are complete, but subjective page rhythm should still be reviewed by the team.
- AI Chat has a polished fallback/preview, but the external embedded demo can still depend on third-party availability.
- Proof/case study assets still need NDA-safe review before adding stronger claims.
- Representative proof stories should be replaced or supplemented with approved anonymous/sanitized case studies when the proof inventory is collected.
- HubSpot, Resend, Calendly, and PostHog final credentials/configuration still need real production setup.
- Privacy and Terms pages are practical website pages and should still be reviewed by legal counsel before being treated as final legal policy.

## Recommended Next Work

When work resumes, prioritize in this order:

1. While credentials are pending, Codex completes a final human-quality pass on the priority buyer paths listed above.
2. Team provides production routing credentials and decisions from `production-lead-routing-setup.md`.
3. Codex finalizes production lead routing code and tests the path.
4. Team reviews homepage, Services overview, AI Voice, AI Chat, AI Agents, Manufacturing, Education & Childcare, and Daycare Voice Agent.
5. Team gathers proof inventory for anonymous case studies and measurable outcomes.
6. Codex replaces representative proof with approved anonymous/sanitized proof where available.
7. Legal review of Privacy and Terms pages.

## Current Verification

Latest completed checks:

- `npm run lint`
- `npm run build`
- `npm run test:e2e`

All passed.
