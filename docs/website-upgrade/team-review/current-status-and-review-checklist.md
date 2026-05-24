# Current Status And Review Checklist

Last updated: after the launch-facing cleanup pass, visual QA polish, docs-folder cleanup, remaining legacy-pattern audit, proof-language polish, AI Chat demo fallback, metadata/sitemap cleanup, Privacy/Terms polish, first team feedback about page length, homepage reduction, shared service-page reduction, audience-facing copy cleanup, service-specific proof polish, the first final-quality review pass, the secondary service/industry/About/How We Build review pass, remaining industry/legal/trust-page review, Workflow Architecture redirect cleanup, first buyer-perception polish pass, and shared assessment-modal CTA pass.

This document is the quick team-review version of the upgrade work.

Use:

- `active-execution-checklist.md` for the active work queue. Use this first when deciding what Codex should do next.
- `../implementation-reference/04-implementation-roadmap.md` for the full build roadmap.
- `../implementation-reference/20-final-site-quality-review-plan.md` for the final page-quality review standard Codex should use from here forward.
- `deep-dive-audit-action-plan.md` for the latest team audit priorities around proof, authority, delivery certainty, premium CTA, and productized vertical solution pages.
- `services-and-how-we-build-taxonomy.md` for the service/capability taxonomy.
- `production-lead-routing-setup.md` for HubSpot, Resend, Calendly, and PostHog setup.

## Current Status

The upgrade is in a strong pre-launch review state. The main website rebuild is largely complete; the remaining work is team/legal/proof review, final launch QA, and HubSpot production routing as the last blocked step.

Latest team audit adds one new priority: the next public-site improvements should create more executive authority. The site should more quickly prove production readiness, delivery speed, founder/team credibility, implementation certainty, and measurable outcomes for higher-budget decision-makers.

## Simple Checklist

### Done

- [x] Technical foundation stabilized: lint, build, sitemap, robots, metadata, schema basics, typed data, and route cleanup.
- [x] Shared assessment form and Server Action added.
- [x] Form captures budget range, source page, CTA location, landing page, referrer, and UTM fields.
- [x] Homepage rebuilt around operational pain, connected systems, AI Voice as flagship wedge, broader automation, proof, spend confidence, and assessment CTA.
- [x] Service pages rebuilt or added.
- [x] Industry pages rebuilt as native React pages.
- [x] Industry pages standardized on the shared `IndustryAcceleratorPage` structure so every industry uses the same trusted flow while keeping industry-specific copy, proof, controls, and sector thinking.
- [x] Industry focus narrowed to six public targets: Education & Childcare, Manufacturing, Home Services, Healthcare & Wellness Clinics, Professional Services, and Guest Services & Hospitality.
- [x] Retail & Ecommerce and Technology & Media are no longer active public target industries. Old URLs now redirect to relevant service pages instead of being promoted as standalone industry pages.
- [x] Real Estate and Financial Services are no longer standalone public target industries. Old URLs now redirect to Professional Services.
- [x] Daycare Voice Agent added under Solutions as a focused implementation.
- [x] Capabilities reframed into How We Build trust pages.
- [x] Representative proof/workflow examples added across homepage, service pages, and industry pages.
- [x] Proof wording polished to sound buyer-facing rather than like internal NDA planning notes.
- [x] AI Chat demo now has a user-triggered preview/fallback instead of showing a blank third-party iframe by default.
- [x] Privacy and Terms expanded into review-ready pages.
- [x] Homepage Phase 8 reduction pass completed: removed repeated maturity/value/thinking/managed-ops sections and tightened the page to hero, diagnosis, connected workflow, services, proof, and CTA.
- [x] Shared service-page Phase 8 reduction completed: removed duplicated proof-story, operational reality, standalone systems, controls, rollout, and budget sections; collapsed them into a focused first-workflow section plus trust links, FAQ, and CTA.
- [x] Priority-page focus pass continued after `/services` migration: Services overview and AI Voice each had one repeated section removed; Manufacturing and Education & Childcare retained compact sector-thinking sections so the pages still show industry understanding without becoming heavy. Daycare Voice Agent kept the cofounder-approved flow with cleaner audience-facing wording.
- [x] Service-specific proof polish added so non-voice service pages keep the shorter shared structure without feeling identical: AI Agents has first-agent starting points, AI Transformation has concrete deliverables, Marketing Automation has automation lanes, Managed AI Operations has monthly ownership, and Custom AI Software has custom-fit criteria.
- [x] Audience-facing copy standard tightened: public pages should speak directly to the visitor and avoid internal phrasing such as "this page shows," "buyers need to see," "proof model," or "placeholder."
- [x] First final-quality review pass started using `../implementation-reference/20-final-site-quality-review-plan.md`.
- [x] Public internal-language cleanup completed for obvious terms found during review, including "Flagship wedge," "buyers need," "what clients should see," and page-explaining copy.
- [x] Homepage and industry proof cards were made more compact so proof stays useful without making the page feel as heavy.
- [x] Secondary service pages reviewed visually: AI Operations Strategy, Marketing Automation, Managed AI Operations, and Custom AI Software.
- [x] Shared industry-page template reviewed visually across the active industry-page structure.
- [x] About Overview, Our Team, and Security/Safety trust page reviewed visually.
- [x] Additional audience-facing cleanup completed across How We Build and About pages so sections speak directly to the visitor instead of referring to "clients" or "buyers" as an outside group.
- [x] Remaining active industry pages reviewed visually: Home Services, Professional Services, Healthcare & Wellness Clinics, and Guest Services & Hospitality. Retail & Ecommerce, Technology & Media, Real Estate, and Financial Services were later removed from the active industry set and redirected.
- [x] Professional Services sharpened after industry-focus cleanup so it clearly covers advisory/financial intake, real estate and property lead response, legal/accounting/consulting follow-up, document-heavy workflows, CRM tasks, and human-controlled handoffs.
- [x] Home Services sharpened around higher-value operators: HVAC, plumbing, electrical, restoration, roofing, pest control, landscaping, cleaning, property maintenance, multi-location teams, missed-call recovery, dispatch, estimate follow-up, and owner trust controls.
- [x] Homepage authority pass added after the deep-dive audit: sharper production-ready hero, immediate proof points, bounded 2-4 week delivery model, and best-fit/not-fit filtering for higher-value buyers.
- [x] Education & Childcare ROI pass added: multi-location rollout framing, enrollment response time, tour follow-up, staff hours saved per center, missed-call reduction, and location-level operating visibility.
- [x] Manufacturing financial/RFQ pass added: RFQ intake, quote cycle time, missed RFQs, response SLA, ERP/CRM handoff, margin protection, and human pricing review are now clearer.
- [x] Healthcare trust pass added: a clear `What AI will never do` boundary now covers no diagnosis, no emergency triage, no clinical decisions, no independent privacy-sensitive resolution, and no replacement for authorized staff judgment.
- [x] Manufacturing Quote & Order Response Agent solution page added and linked from Solutions and Manufacturing.
- [x] Healthcare Front Desk Agent solution page added and linked from Solutions and Healthcare.
- [x] Home Services Missed-Call & Dispatch Agent solution page added and linked from Solutions and Home Services.
- [x] Founder/team authority pass added across Homepage, About Overview, and Our Team with 20+ years of founder software experience, production systems, AI agents, RAG, integrations, enterprise/government/SMB exposure, and human-controlled workflow judgment.
- [x] Contact form lead quality pass completed: assessment submissions now require work email, company, industry, workflow pain, tools used, timeline, and budget range in both the UI and Server Action validation.
- [x] Homepage trust strip added immediately above the hero to show builder-led AI experience, human-controlled operations, and muted official technology marks under "Technology we build with and integrate" without implying false client partnerships.
- [x] New Manufacturing, Healthcare, and Home Services solution pages received buyer-priority sections so each page speaks to the operator or executive reviewing the page before implementation details.
- [x] Privacy and Terms reviewed visually; public legal-review disclaimer removed from the pages and retained only as an internal/team-review requirement.
- [x] Remaining How We Build pages reviewed visually: Data & Integrations, Operational Intelligence, Workflow Architecture, Staff Training & Adoption, and Technology Strategy.
- [x] Redirects added for intuitive Workflow Architecture URLs so `/capabilities/workflow-systems-architecture` and `/capabilities/workflow-architecture` resolve to the implemented Workflow & Systems Architecture page.
- [x] Public service URLs migrated from `/core-services/*` to `/services/*`; `/core-services/*` now exists only as permanent redirects.
- [x] First buyer-perception polish pass completed: reduced public third-person "buyer" language, tightened service/AI Voice wording, clarified optional assessment fields, improved assessment reassurance, and added restrained workflow motion where it explains connected systems.
- [x] Shared assessment popout added for primary **Get Free Assessment** CTAs, with compact bottom CTA sections replacing repeated embedded forms across standard pages.
- [x] AI Voice demo section adjusted to use a light section with a dark embedded demo surface so the flagship demo stands out without feeling disconnected from the rest of the site.
- [x] PostHog configured for privacy-conscious funnel analytics: pageviews and explicit conversion events are enabled, autocapture/session recording are disabled, and events include environment metadata.
- [x] Highest-intent buyer-perception QA pass completed for homepage, Services, AI Voice, AI Chat, AI Agents, Manufacturing, Education & Childcare, Daycare Voice Agent, Security & Safety, and Contact. Low-risk fixes were made to CTA tracking context and Contact page spacing.
- [x] Docs reorganized into `team-review/` and `implementation-reference/`.
- [x] Standard checks pass: `npm run lint`, `npm run build`, and `npm run test:e2e`.

### Still To Do

- [x] Deep-dive audit implementation pass completed for homepage authority/proof, 2 to 4 week delivery model, best-fit filtering, priority industry improvements, and three productized solution pages.
- [ ] Decide whether the primary above-fold CTA should remain **Get Free Assessment** or become more premium, such as **Book a Technical Strategy Call** or **Request AI Workflow Assessment**.
- [ ] Decide whether `production-ready AI agents, voice assistants, and RAG systems integrated into existing tools in 2 to 4 weeks` is an approved public promise for bounded first workflows.
- [ ] Add stronger approved proof assets and replace broad founder/team proof with sharper approved specifics where useful.
- [x] Productized solution page set completed for Manufacturing Quote & Order Response Agent, Healthcare Front Desk Agent, and Home Services Missed-Call & Dispatch Agent.
- [ ] Final production lead routing is intentionally moved to the last step until HubSpot access, field names, and object decisions are ready.
- [x] Staging/local buyer-perception QA pass across the highest-intent pages to check clarity, trust, proof credibility, page length, CTA rhythm, and premium feel after the latest polish.
- [ ] Human review the shortened priority pages for taste, scanability, and whether any removed context needs to return in a more compact format.
- [ ] Real production-style form submission test into internal email notifications.
- [ ] Add or confirm final Calendly assessment link in form success states and notification emails.
- [x] Add final PostHog project key and confirm live funnel events.
- [ ] Team review of top buyer pages for tone, density, claims, and sales clarity.
- [ ] Cofounder review of AI Voice before major flow changes.
- [ ] Proof inventory collection, result ranges, and approval of anonymous/sanitized claims for the highest-priority proof stories.
- [ ] Legal counsel review of Privacy and Terms.
- [ ] Replace generated/sourced imagery with real team/process photos when available.

### Next Work While Credentials Are Pending

- [ ] Apply the deep-dive audit priority pass from `deep-dive-audit-action-plan.md`.
- [x] Run the buyer-perception QA pass from `../implementation-reference/20-final-site-quality-review-plan.md` across `/`, `/services`, `/services/ai-voice`, `/services/ai-agents`, `/services/ai-chat`, `/industries/manufacturing`, `/industries/education-childcare`, `/solutions/daycare-voice-agent`, `/capabilities/security-monitoring-ai-safety`, and `/contact`.
- [ ] Review `/services`, `/services/ai-voice`, `/industries/manufacturing`, `/industries/education-childcare`, and `/solutions/daycare-voice-agent` on staging after the reduction pass.
- [ ] Complete one final click-through on production/staging after each deploy so redirects, forms, analytics, and third-party scripts are verified in the hosted environment.
- [ ] Reduce each priority page to one clear buyer job, one primary CTA path, and only the proof/process sections needed for that buyer.
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
- Final-quality screenshots reviewed the homepage, Services overview, AI Voice, AI Chat, AI Agents, AI Operations Strategy, Marketing Automation, Managed AI Operations, Custom AI Software, Manufacturing, Education & Childcare, Daycare Voice Agent, Capabilities overview, selected shared-template industry pages, About Overview, Our Team, and Security/Safety.
- Remaining legacy-pattern audit found no active migrated-page usage of `dangerouslySetInnerHTML`, Formspree, raw `<img>` tags, old WordPress assets, or old HTTP asset references in `app/`, `components/`, or `data/`. The only `dangerouslySetInnerHTML` usage found is the intentional JSON-LD component, and the only iframe found is the intentional AI Chat demo.
- Proof sections now use more buyer-facing language: workflow examples, connected systems, human controls, and measurable operating outcomes rather than internal NDA/planning phrasing.
- The AI Chat demo section now uses a polished user-triggered preview with an external demo link so the page still feels intentional if the third-party iframe is slow or visually blank.
- Metadata/sitemap cleanup now keeps redirect-only legacy capability URLs out of the sitemap and gives `/services`, `/privacy`, and `/terms` canonical metadata through the shared metadata helper.
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

## Page Focus And Reduction Pass

First team feedback: many pages feel long and hard to get through. This should be treated as a dedicated next pass before launch, not as small copy cleanup.

Principles:

- Each page should answer one main buyer question quickly.
- The first screen should make the page’s value clear without requiring context from other pages.
- Repeated trust language should be removed when the same point was already made nearby.
- Proof should be strongest where it changes confidence; otherwise link to a deeper proof or service page.
- Service pages should prioritize what the buyer can buy and what the first project looks like.
- Industry pages should prioritize industry pain, common workflows, and relevant service/solution paths.
- How We Build pages can carry more depth because they are trust/supporting pages, but they should still be scannable.
- Long sections should become shorter cards, accordions, tabs, filters, or links to deeper pages only when that improves clarity.

Candidate reductions:

- Homepage: keep the strongest diagnosis, service map, filtered proof, and CTA; remove or condense repeated maturity/value/trust language.
- Service pages: keep hero, first pilot proof, service-specific demo/proof, workflow examples, trust links, FAQ, and CTA; collapse or shorten repeated operational reality/process sections.
- Industry pages: keep hero, common request, connected workflow, relevant services/solutions, sector context, controls, and CTA; shorten duplicated systems/rollout/proof blocks where they feel repetitive.
- Daycare Voice Agent: keep the calmer operational flow from the cofounder brief; avoid adding generic AI-agency proof that distracts from daycare executive concerns.
- How We Build pages: keep detailed trust content, but improve scanability with shorter sections and fewer repeated related links.

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

- `/services`
- `/services/ai-voice`
- `/services/ai-agents`
- `/services/ai-chat`
- `/services/ai-transformation`
- `/services/marketing-automation`
- `/services/managed-ai-operations`
- `/services/custom-ai-software`

The new `/services` overview explains how the services fit together and gives visitors a clearer path through Voice, Agents, Chat, Strategy, Marketing, Managed Ops, and Custom Software. `/core-services/*` redirects permanently to `/services/*`.

The non-voice service pages now use a shared sales spine plus flexible proof stacks. This means the pages stay consistent without becoming cloned templates.

Current service-page proof distinction:

- AI Agents: first-agent starting points, searchable agent library, and operating-loop proof.
- AI Chat: user-triggered chatbot demo, downstream action explanation, and conversation scenarios.
- AI Operations Strategy: concrete roadmap deliverables, readiness check, and 30/60/90 value roadmap.
- Marketing Automation: automation lanes, idea-to-approval workflow preview, and approval-control proof.
- Managed AI Operations: monthly ownership model, operating dashboard mock, and monthly review preview.
- Custom AI Software: custom-fit criteria, interface snapshot, and architecture proof.

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
- Home services missed-call recovery, booking, dispatch intake, estimate follow-up, and property-maintenance intake.
- Marketing content workflow for drafting, approval, scheduling, and reporting.
- Professional services intake, booking, document follow-up, and staff handoff.
- Healthcare front-desk support with conservative escalation.
- Custom operations workbench for review, approvals, and operating visibility.
- Managed AI Operations rhythm for monitoring, review, tuning, and value reporting.
- AI roadmap/value realization assessment.
- Guest services and hospitality response, booking support, and service request routing.
- Professional services document intake and advisor handoff workflow.

Important proof rule:

- These are NDA-safe, outcome-backed workflow proof patterns. They should feel like real operational work: specific workflow, connected actions, human controls, and business results.
- They should not be presented as named client case studies unless a client explicitly approves that use.
- Exact metrics should not be invented. Use results-oriented language where it is grounded in real work or defensible founder/team experience, then upgrade to precise metrics when the team approves them.

### Industries

All listed industry pages have been rebuilt into native React pages:

- Manufacturing.
- Education & Childcare.
- Home Services.
- Professional Services.
- Healthcare & Wellness Clinics.
- Guest Services & Hospitality.

Removed from public target industry list:

- Retail & Ecommerce now redirects to AI Chat.
- Technology & Media now redirects to Custom AI Software.
- Real Estate now redirects to Professional Services.
- Financial Services now redirects to Professional Services.

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
2. `/services`
3. `/services/ai-voice`
4. `/services/ai-chat`
5. `/services/ai-agents`
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

These are the remaining items Codex can continue implementing without needing HubSpot access.

### Production Lead Routing Code

- Keep HubSpot field mappings deferred until the team confirms access and object model.
- Add company, deal, ticket, or note creation if the team wants more than contact-only v1.
- Add the final Calendly link to success states and notification emails.
- Improve internal notification email formatting.
- Add or refine PostHog event names once the production key is available.
- Add fallback webhook support if the team wants a backup destination.

### Visual And UX QA

- Complete one final human-quality pass on the highest-value buyer paths first:
  `/`, `/services`, `/services/ai-voice`, `/services/ai-chat`, `/services/ai-agents`, `/industries/manufacturing`, `/industries/education-childcare`, and `/solutions/daycare-voice-agent`.
- Use `../implementation-reference/20-final-site-quality-review-plan.md` as the review standard for page clarity, page length, audience-facing copy, service-page distinction, proof safety, CTA rhythm, and premium trust.
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

- HubSpot private app token, object model, and custom property names are final-step items, not active blockers for the rest of the site.
- Create Resend account/API key if using Resend for internal notification emails.
- Verify the sender/domain for `hello@automate4u.co`.
- Provide final Calendly Free AI Workflow Assessment link.
- Provide PostHog project key if using PostHog.
- Confirm notification recipients remain:
  - `johnny@automate4u.co`
  - `michael@automate4u.co`
  - `hello@automate4u.co`

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

The site is strong enough for serious team review, but it should not be treated as fully launch-final until proof review, legal review, final launch QA, and the deferred HubSpot routing step are complete.

Remaining risks:

- Some pages are content-rich and now need a deliberate focus/reduction pass before final launch review.
- The first mobile heading polish and second visual QA pass are complete, but subjective page rhythm should still be reviewed by the team.
- AI Chat has a polished fallback/preview, but the external embedded demo can still depend on third-party availability.
- Proof/case study assets still need NDA-safe review before adding stronger claims.
- Representative proof stories should be replaced or supplemented with approved anonymous/sanitized case studies when the proof inventory is collected.
- Resend, Calendly, and PostHog should be verified in production. HubSpot is deferred to the final routing step.
- Privacy and Terms pages are practical website pages and should still be reviewed by legal counsel before being treated as final legal policy.

## Recommended Next Work

When work resumes, prioritize in this order:

1. Codex completes the page focus and reduction pass on the priority buyer paths listed above.
2. Codex only adds new credibility/proof sections when they help answer one of the five buyer questions in `../implementation-reference/20-final-site-quality-review-plan.md`.
3. Team reviews the shorter page flow for homepage, Services overview, AI Voice, AI Chat, AI Agents, Manufacturing, Education & Childcare, and Daycare Voice Agent.
4. Team verifies Resend, Calendly, PostHog, and the production smoke-test path.
5. HubSpot access and object decisions are gathered last using `production-lead-routing-setup.md`.
6. Codex finalizes HubSpot routing and tests the HubSpot path.
6. Team gathers proof inventory for anonymous case studies and measurable outcomes.
7. Codex replaces representative proof with approved anonymous/sanitized proof where available.
8. Legal review of Privacy and Terms pages.

## Current Guardrail Against Fluff

Do not add more copy just because Automate4U can say more.

Any new website section should pass at least two of these tests:

- It helps a visitor understand the operating problem faster.
- It proves Automate4U can build a connected system, not just an isolated AI tool.
- It reduces spend, risk, security, maintenance, or staff-adoption anxiety.
- It shows downstream business action: CRM, calendar, quote, ticket, notification, approval, audit log, KPI, or report.
- It makes a service page less generic and easier to buy.
- It gives a cautious evaluator more confidence without making the page longer than needed.

If a section only says "we are experienced" in a general way, cut it, shorten it, or move it to About/How We Build.

Current implication for founder/team credibility:

- Homepage credibility band: acceptable because it quickly explains production-minded implementation.
- About Team technical-depth section: acceptable because About is the natural place for founder/team credibility.
- Data & Integrations ecosystem section: acceptable because integration breadth is directly relevant to a How We Build trust page.
- Service-specific credibility callouts: only add where the service currently lacks a distinct reason to believe. Do not add generic credibility blocks to every service page by default.

## Latest Page Decision Pass

AI Chat, AI Agents, AI Operations Strategy, Marketing Automation, Managed AI Operations, and Custom AI Software were reviewed against the buyer-quality checklist.

Decision:

- Do not add new sections to these pages yet. They already have service-specific proof modules.
- Improve the existing proof language instead of lengthening the pages.

Changes made:

- AI Chat now more clearly references source-grounded answers, fallback rules, unsupported-answer avoidance, and knowledge-gap review.
- AI Agents now more clearly references validation, retries, duplicate-action prevention, failed-action review, retry history, and action logging.
- AI Operations Strategy now more clearly references the first paid next step, budget range, no-build/cleanup recommendations, approval points, and post-pilot decision gates.
- Marketing Automation now more clearly references approved source material, CRM follow-up, reply tracking, lead movement, reporting, and owner approval.
- Managed AI Operations now more clearly references cost visibility, runbooks, incident notes, vendor/tool changes, retries, and issue response.
- Custom AI Software now more clearly references role-based access, maintenance, monitoring, support ownership, payments/search/database actions, and audit trails.
- About / How We Work now includes a compact production engineering standards section covering approved sources, scenario testing, visible business actions, handoff/recovery, monitoring, and evidence-based expansion.
- Public copy polish removed several remaining meta/explanatory phrases from high-value pages: AI Voice now frames the demo as what a strong voice experience should prove, AI Agents points visitors toward a practical starting role, Solutions speaks to choosing a narrow operating problem, and Data & Integrations explains discovery checks in buyer-facing terms.
- Public proof cards now use clearer labels: business actions, human controls, and results tracked. Proof metric labels should stay outcome-oriented when Automate4U can credibly stand behind the result, while avoiding invented exact numbers or client-identifying details.
- ElevenLabs daycare voice demo added to the Daycare Voice Agent solution page and added as a selectable demo option on the AI Voice service page.

Why this is aligned with the roadmap:

- It strengthens trust and production credibility without making the pages longer.
- It improves the distinct reason to believe for each service.
- It answers buyer concerns about hallucination, unreliable automation, and hidden system actions.
- It keeps deeper builder credibility on About / How We Work instead of adding generic credibility blocks to every sales page.

## Current Verification

Latest completed checks:

- `npm run lint`
- `npm run build`
- `npm run test:e2e`

All passed.
