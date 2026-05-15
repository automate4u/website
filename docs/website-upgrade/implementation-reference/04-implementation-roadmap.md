# Implementation Roadmap

This roadmap merges the original tactical audit plan with the strategic positioning updates.

## How To Execute This Roadmap

Do not treat each phase as a fully separate project. The safest implementation path is:

1. Stabilize the technical base enough that changes can ship safely.
2. Create the shared content/form/component contracts.
3. Rebuild the homepage and AI Voice page as the first proof of the new system.
4. Build one high-quality Industry Accelerator to validate the repeatable page model.
5. Add proof, pricing transparency, analytics, and conversion tests around the pages that now exist.
6. Keep legacy-pattern checks in release QA and avoid reintroducing migrated HTML.

Use `../README.md` for the full doc map. Use this file as the active task sequence.

## Roadmap Checklist

### Completed Build Work

- [x] Technical foundation stabilized: lint, build, sitemap, robots, metadata helper, schema basics, typed data, and route metadata.
- [x] Shared Free AI Workflow Assessment form and Server Action added.
- [x] Budget range, source page, CTA location, UTM/referrer, and landing-page attribution captured.
- [x] Optional PostHog loader and first conversion events added.
- [x] Playwright conversion-path tests added and passing.
- [x] Homepage rebuilt around operational pain, connected systems, AI Voice as the flagship wedge, broader automation, trust, spend confidence, proof, and assessment CTA.
- [x] AI Voice flagship page rebuilt and connected to focused solution pages.
- [x] Services overview and direct service pages rebuilt or added: AI Voice, AI Agents, AI Chat, AI Operations Strategy, Marketing Automation, Managed AI Operations, and Custom AI Software.
- [x] Capabilities reframed as How We Build, with trust pages for security, integrations, analytics/value, adoption, strategy, and workflow architecture.
- [x] Industry pages rebuilt as native React pages for all current industry routes.
- [x] Solutions section added, with Daycare Voice Agent treated as a focused implementation rather than an industry.
- [x] Representative workflow proof layer added across homepage, service pages, and industry pages.
- [x] Proof language polished so public pages read as buyer-facing workflow examples rather than internal NDA planning notes.
- [x] AI Chat demo changed to a user-triggered preview/fallback so a slow third-party iframe does not make the page look broken.
- [x] Privacy and Terms expanded into practical review-ready pages.
- [x] Docs reorganized into `team-review/` and `implementation-reference/`.
- [x] Legacy-pattern audit completed: no active buyer-facing migrated HTML, Formspree, raw `<img>`, old WordPress assets, or old HTTP asset references found in `app/`, `components/`, or `data/`.

### Remaining Before Launch/Team Signoff

- [ ] Finalize production lead routing after credentials and field decisions are available.
- [ ] Run a real production-style form submission test into HubSpot and internal email notifications.
- [ ] Add final Calendly assessment link to success states and notification emails.
- [ ] Add final PostHog project key and confirm live funnel events.
- [ ] Team reviews the top buyer pages for tone, density, claims, and sales clarity.
- [ ] Cofounder reviews AI Voice before major flow changes.
- [ ] Team gathers proof inventory and approves any anonymous/sanitized proof claims.
- [ ] Legal counsel reviews Privacy and Terms before treating them as final policy.
- [ ] Replace generated/sourced imagery with real team/process imagery when available.

### Recommended Next Steps While Credentials Are Pending

- [ ] Final human-quality pass on the highest-value buyer paths:
  `/`, `/core-services`, `/core-services/ai-voice`, `/core-services/ai-chat`, `/core-services/ai-agents`, `/industries/manufacturing`, `/industries/education-childcare`, and `/solutions/daycare-voice-agent`.
- [ ] Review page density, section order, CTA rhythm, and whether the proof modules help or feel heavy.
- [ ] Tighten any claims that feel too broad, too strong, or not NDA-safe.
- [ ] Prepare proof inventory using `../team-review/proof-inventory-checklist.md`.

## Current Implementation Status

Last updated: after Phase 5 representative proof placement, visual QA polish, docs-folder cleanup, remaining legacy-pattern audit, proof-language polish, AI Chat demo fallback, metadata/sitemap cleanup, and Privacy/Terms polish.

| Area | Status | Notes |
| --- | --- | --- |
| Phase 1: Foundation | Build complete; production config pending | Lint/build, metadata, sitemap, robots, typed data scaffolding, Server Action lead capture, attribution capture, optional PostHog loader, first conversion events, first schema pass, Playwright conversion tests, image cleanup, legacy-pattern audit, and sitemap/metadata cleanup are complete. Remaining work is production credentials/configuration, dependency refreshes, and release QA. |
| Phase 2: Homepage + AI Voice | Built; review pending | Homepage v2 and AI Voice flagship v1 have been rebuilt. AI Voice should remain mostly stable until cofounder review of optional refinements. |
| Phase 3: Reusable React system | Built enough for launch | Shared sections, service renderer, industry renderer, proof sections, assessment form, typed data, and route metadata are in place. Future additions should reuse these patterns. |
| Phase 4: Industry Accelerators | Built; proof approval pending | All currently listed industry pages have been rebuilt into native React accelerator pages. Remaining work is team review and replacing representative proof with approved anonymous/sanitized proof where available. |
| Phase 4B: Services + How We Build | Built; review pending | Services and How We Build taxonomy is implemented in navigation, footer, pages, and redirects. Remaining work is team review of tone, density, and whether individual pages need more specific proof. |
| Phase 5: Proof + trust assets | First layer built; real proof pending | Representative proof data, homepage proof, service-page proof, industry-page proof, buyer-facing proof-language polish, and AI Chat demo fallback are complete. Full proof inventory, approved metrics, final case study copy, and stronger demo artifacts still remain. |
| Phase 6: Analytics + iteration | Code started; live config pending | Optional PostHog loading, attribution capture, first event tracking, and first conversion-path tests are implemented. Full funnel reporting needs PostHog credentials and production validation. |
| Phase 7: Remaining migration | Audit complete | Active `app/`, `components/`, and `data/` surfaces no longer show migrated-page usage of `dangerouslySetInnerHTML`, raw `<img>` tags, old WordPress/HTTP assets, or Formspree. The intentional exceptions are JSON-LD injection and the AI Chat demo iframe. Keep this audit in release QA so legacy patterns are not reintroduced. |

Completed in the first implementation pass:

- `npm run lint` passes.
- `npm run build` passes.
- Google Fonts dependency removed in favor of a system font stack.
- Metadata helper and route metadata layouts added for major routes.
- `app/sitemap.ts` and `app/robots.ts` added.
- Typed data scaffolding added for site, services, industry accelerators, and metadata.
- Shared Free AI Workflow Assessment Server Action added.
- Shared `AssessmentLeadForm` component added.
- Contact page rebuilt around the shared assessment form.
- Core service lead flows migrated to the shared assessment path where practical.
- Primary CTA language standardized across key entry points.
- UTM/referrer/landing-page attribution fields added to assessment forms.
- Optional PostHog loader added behind `NEXT_PUBLIC_POSTHOG_KEY`.
- Assessment and AI Voice demo analytics events wired for key conversion actions.
- Assessment success state upgraded with next-step copy and optional Calendly link.
- Global Organization/WebSite JSON-LD added.
- Service/Breadcrumb JSON-LD added for typed core service and Industry Accelerator routes.
- Playwright installed and first conversion-path tests added for the assessment form and AI Voice assessment path.
- Active core service pages now use `next/image` instead of raw `<img>` elements.
- Homepage v1 rebuilt around the approved positioning and CTA, then revised into Homepage v2 with stronger advisory diagnosis, implementation method, sector-thinking notes, human/process trust imagery, buyer-facing service labels, and a memorable brand line.
- Shared section components added for the homepage and future AI Voice/accelerator reuse.
- AI Voice flagship page rebuilt around the voice-to-operations story, live demo, back-office event log, workflow examples, pricing confidence, FAQ, and assessment CTA.
- AI Voice page lightly polished after the solution taxonomy work: hero demo CTA clarified, the Daycare Voice Agent workflow card now links to its focused solution page, and a focused implementation section connects AI Voice to the Education & Childcare context.
- Homepage internal planning copy replaced with buyer-facing outcome language.
- Manufacturing AI Accelerator rebuilt from migrated HTML into a focused React page, then revised into the v2 benchmark pattern with stronger industry trust, less repetitive section rhythm, connected workflow proof, buyer-facing value patterns, sector-thinking context, system integration context, governance, and spend-confidence messaging.
- Daycare Voice Agent landing page added at `/solutions/daycare-voice-agent` to test the focused solution-page flow: daycare front desk reality, staff-support positioning, call scenarios, policy controls, low-risk rollout, FAQ objection handling, and operational walkthrough CTA. It is linked from the broader Education & Childcare industry page rather than treated as an industry.
- Education & Childcare industry page upgraded to the full industry-page pattern with segment-aware language for families, parents, learners, and prospective students; relevant solution cards; connected workflow story; sector context; systems; controls; and rollout/spend-confidence messaging.
- Home Services industry page rebuilt from migrated HTML into a voice-led accelerator page for missed-call recovery, booking, dispatch intake, quote follow-up, systems integration, human controls, and spend-confidence messaging.
- Professional Services industry page rebuilt from migrated HTML into an intake-and-follow-up accelerator page for appointment-driven service teams, with scheduling, document follow-up, sensitive handoff, systems, controls, and spend-confidence messaging.
- Retail & Ecommerce industry page rebuilt from migrated HTML into a support, product guidance, operations, and marketing workflow accelerator page with commerce systems, brand controls, content approvals, and spend-confidence messaging.
- Healthcare industry page rebuilt from migrated HTML into a conservative front-desk support accelerator page for routine healthcare communication, appointment reminders, administrative intake, routing, safety boundaries, escalation, privacy-aware controls, and spend-confidence messaging.
- Real Estate industry page rebuilt from migrated HTML into a lead response, showing, qualification, CRM follow-up, and property management routing accelerator page.
- Financial Services industry page rebuilt from migrated HTML into a conservative intake, document follow-up, support routing, review, and traceability accelerator page.
- Hospitality industry page rebuilt from migrated HTML into a guest response, booking support, request routing, service recovery, and review/follow-up accelerator page.
- Technology & Media industry page rebuilt from migrated HTML into a support triage, content operations, workflow routing, drafting, review, and reporting accelerator page.
- Shared `IndustryAcceleratorPage` component added for the final four industry pages to reduce duplication while keeping copy, controls, and workflows industry-specific.
- Industry review pass promoted Financial Services, Hospitality, and Technology & Media into the typed Industry Accelerator data source, removed the old legacy index list, and refreshed the `/industries` metadata description.
- Shared assessment intake forms now include a budget range field so sales follow-up has spend context without forcing buyers into an exact quote request.
- Industries index rebuilt as a buyer-facing navigation page that explains how industry pages differ from solution pages, shows industry contexts with common starting workflows and KPIs, and routes users toward focused solution examples.
- Solutions index added as the home for specific implementations such as Daycare Voice Agent, with future solution categories for manufacturing response, home services dispatch, professional services intake, retail support, and marketing workflow agents.
- Solutions removed from the primary top navigation because the current solution library is intentionally specific and should be discovered from related industry/service pages until the library is larger.
- Design-quality pass completed across homepage, AI Voice, Manufacturing, and shared sections: tightened type scale, spacing, card styling, shadows, and buyer-facing copy rules.
- Services and Capabilities review completed. The next plan is to separate direct Services from the trust/delivery capability layer, reframe Capabilities as How We Build, keep Security visible, and rebuild the remaining service/capability pages without legacy migrated page patterns.
- Services and How We Build navigation/data slice completed: `Services` now appears in primary navigation, `Capabilities` has been reframed as `How We Build`, the footer uses the same taxonomy, and `/capabilities` now functions as a trust overview instead of a mixed service/capability card grid.
- Security, Monitoring & AI Safety detail page rebuilt from migrated HTML into a native React trust page with buyer concerns, control layers, automation boundaries, client artifacts, related services, related capabilities, and the shared assessment CTA.
- Data & Integrations detail page rebuilt from migrated HTML into a native React trust page with buyer concerns, integration patterns, system maps, source-of-truth language, failure-handling guidance, related services, related capabilities, and the shared assessment CTA.
- Operational Intelligence & Value Realization detail page rebuilt from migrated HTML into a native React trust page with buyer concerns, KPI categories, 30/60/90-day value review, implementation evidence, related services, related capabilities, and the shared assessment CTA.
- Staff Training & Adoption detail page rebuilt from migrated HTML into a native React trust page with adoption concerns, role-based training, rollout support, implementation evidence, related services, related capabilities, and the shared assessment CTA.
- Technology Strategy & Enablement detail page rebuilt from migrated HTML into a native React trust page with maturity assessment, roadmap planning, build-versus-buy thinking, risk planning, related services, related capabilities, and the shared assessment CTA.
- Workflow & Systems Architecture detail page rebuilt from the overlapping custom-software capability route into a native React trust page that explains workflow design, system boundaries, handoffs, custom build patterns, client artifacts, related services, related capabilities, and the shared assessment CTA.
- Shared service-page renderer and typed service-page content added for direct service offers.
- AI Agents & Workflow Automation, AI Chat & Customer Messaging, and AI Operations Strategy rebuilt from older one-off CSS/client pages into native service pages with operational reality, workflow examples, connected systems, human controls, rollout, budget confidence, FAQ, trust-capability links, and the shared assessment CTA.
- Marketing Automation & Content Agents, Managed AI Operations, and Custom AI Software direct service pages added under `/core-services/`.
- Flexible service-specific proof stacks added so the direct service pages do not rely only on a shared template: AI Chat has a chatbot demo, downstream action explanation, and conversation scenarios; AI Agents has a searchable agent-pattern library and operating-loop proof; AI Operations Strategy has a readiness check and 30/60/90 value roadmap; Marketing Automation has an idea-to-approval workflow preview and approval-control proof; Managed AI Operations has an operating dashboard mock and monthly review preview; Custom AI Software has an interface snapshot and architecture proof block.
- Direct service pages now include a tailored "first pilot proof" band near the top of the page so each service quickly explains what the first engagement should validate before a client expands spend.
- Phase 5 proof layer expanded: reusable representative workflow proof stories now cover manufacturing, daycare/education, home services, retail/ecommerce, professional services, healthcare, financial services, real estate, hospitality, technology/media, custom software, Managed AI Operations, and AI strategy. Homepage, service pages, and industry pages now use filtered NDA-safe proof-pattern sections with connected actions, human controls, and metrics to validate.
- Proof sections were polished to read as buyer-facing workflow examples instead of internal proof/NDA planning language. Public labels now emphasize the workflow, connected systems, human control, and measurable operating outcomes.
- AI Chat demo fallback added as a polished user-triggered preview with an external-demo path so the page does not depend visually on a third-party iframe loading immediately.
- Metadata/sitemap cleanup completed for this pass: `/core-services`, `/privacy`, and `/terms` now use shared canonical metadata, and redirect-only legacy capability routes are no longer carried in the sitemap/metadata source.
- Privacy and Terms were expanded into review-ready pages that cover assessment data, sensitive workflow details, analytics, third-party services, AI/automation boundaries, pricing/example caveats, and project-specific written agreements.
- First visual QA polish pass completed on top buyer paths. Mobile heading scale was tightened globally for large page headings, and the shared section header mobile size was reduced so dense sections read cleaner on small screens.
- Second visual QA pass reviewed remaining service pages, How We Build, and several remaining industry pages across mobile/desktop. No launch-blocking layout issues were found in that pass; remaining visual work is normal human review for density, ordering, and final taste.
- Remaining legacy-pattern audit completed across `app/`, `components/`, and `data/`: no active migrated-page `dangerouslySetInnerHTML`, Formspree, raw `<img>`, old WordPress assets, or old HTTP asset references were found. The remaining `dangerouslySetInnerHTML` usage is the intentional JSON-LD component, and the remaining iframe is the intentional AI Chat demo.
- Service navigation, service metadata, sitemap routes, and structured-data source entries updated for the expanded direct service set.
- Overlapping legacy capability URLs for AI Agents, AI Voice/Chat, and Marketing Automation now redirect to the correct service destinations instead of competing as duplicate full pages.
- Retell API route hardened.
- Botpress script injection typed and lazy-loaded.
- Several raw image, unused import, and JSX lint issues fixed.

Next recommended implementation slice:

1. While credentials are pending, complete the final human-quality pass on the highest-value buyer paths.
2. When credentials are ready, finalize production lead routing and run a real submission test.
3. Team reviews homepage, Services overview, AI Voice, AI Chat, AI Agents, Manufacturing, Education & Childcare, and Daycare Voice Agent for tone, density, claims, and conversion clarity.
4. Cofounder reviews optional AI Voice refinements before that page changes further.
5. Continue Phase 5 proof and trust assets: collect proof inventory, replace representative stories with approved anonymous/sanitized stories where possible, add final metrics, and add stronger demo artifacts where the proof would materially improve buyer confidence.

## Phase-To-Document Map

| Phase | Primary docs | Why they matter |
| --- | --- | --- |
| Phase 1: Foundation | `01-current-site-audit.md`, `06-technical-remediation.md`, `08-execution-contracts.md`, `10-strategic-tool-stack-taxonomy.md`, `../team-review/cta-lead-routing-analytics-and-pricing.md` | Fix build/SEO/script/form/data foundations before redesigning surfaces. |
| Phase 2: Homepage + AI Voice | `05-content-proof-and-wow-factor.md`, `12-expertise-demonstration-experiences.md`, `../team-review/market-positioning-strategy.md`, `../team-review/site-architecture-and-offers.md`, `../team-review/creative-experience-direction.md`, `../team-review/cta-lead-routing-analytics-and-pricing.md`, `../team-review/pricing-transparency-and-cost-model.md` | Build the first high-converting experience around positioning, proof, creative direction, demos, CTA, and pricing. |
| Phase 3: Reusable React system | `06-technical-remediation.md`, `08-execution-contracts.md`, `10-strategic-tool-stack-taxonomy.md`, `../team-review/creative-experience-direction.md` | Keep pages data-driven, consistent, accessible, and maintainable. |
| Phase 4: Industry Accelerators | `05-content-proof-and-wow-factor.md`, `08-execution-contracts.md`, `10-strategic-tool-stack-taxonomy.md`, `../team-review/site-architecture-and-offers.md`, `../team-review/proof-inventory-checklist.md`, `../team-review/pricing-transparency-and-cost-model.md` | Turn vertical pages into repeatable, proof-backed offers. |
| Phase 4B: Services + How We Build | `08-execution-contracts.md`, `../team-review/site-architecture-and-offers.md`, `../team-review/creative-experience-direction.md`, `../team-review/cta-lead-routing-analytics-and-pricing.md`, `../team-review/services-and-how-we-build-taxonomy.md` | Make direct offers easy to understand while keeping security, integrations, analytics, monitoring, and adoption visible as trust builders. |
| Phase 5: Proof + trust assets | `05-content-proof-and-wow-factor.md`, `09-governance-customer-journey-and-conversion-tests.md`, `12-expertise-demonstration-experiences.md`, `14-labor-efficiency-and-human-redeployment.md`, `../team-review/proof-inventory-checklist.md` | Add credibility, governance, human control, and NDA-safe proof. |
| Phase 6: Analytics + iteration | `06-technical-remediation.md`, `08-execution-contracts.md`, `09-governance-customer-journey-and-conversion-tests.md`, `../team-review/cta-lead-routing-analytics-and-pricing.md` | Track revenue-critical behavior and protect conversion paths. |
| Phase 7: Remaining migration | `01-current-site-audit.md`, `06-technical-remediation.md`, `08-execution-contracts.md` | Keep legacy patterns out of active routes and preserve route/SEO consistency. |

## Phase 1: Stabilize The Technical Foundation

Goals:

- Make the project easier to change safely.
- Remove obvious SEO and build-quality blockers.
- Create a stable base before major redesign work.

Steps:

- Fix lint errors in the Retell API route, ChatWidget, Header, unescaped JSX copy, unused imports, and raw image warnings where practical.
- Add unique metadata for all current routes.
- Add sitemap and robots routes.
- Define canonical URL strategy.
- Add default Open Graph and Twitter metadata.
- Add structured data for organization, services, FAQs, and case studies.
- Create the first typed TypeScript content objects for services, accelerators, case studies, and metadata.
- Use `08-execution-contracts.md` as the starting contract for content schemas, component props, assessment form behavior, and analytics event names.
- Use `10-strategic-tool-stack-taxonomy.md` as the source for canonical integration/tool names.
- Standardize the primary CTA language: button label "Get Free Assessment," offer name "Free AI Workflow Assessment."
- Document or consolidate Formspree endpoints.
- Replace Formspree as the assumed long-term source of truth with HubSpot lead routing and email notifications.
- Audit remote and old HTTP image references.
- Define the external script loading strategy for Botpress and Retell.

Acceptance criteria:

- `npm run lint` passes.
- `npm run build` passes.
- Every major route has unique metadata.
- No critical page depends on old HTTP WordPress image URLs.

## Phase 2: Rebuild Homepage And AI Voice Flagship

Goals:

- Make the strongest first impression.
- Show AI Voice as the flagship wedge.
- Make the broader AI operations capability clear.
- Establish the premium "Professional AI Operations" creative direction.
- Balance technical interface proof with professional-services trust cues and real human collaboration.

Steps:

- Rebuild the homepage around the message: "We automate the conversations and workflows that slow your business down."
- Add a voice-led hero with a clear "Get Free Assessment" CTA.
- Add a secondary Try the Voice Demo CTA.
- Add one signature homepage moment: manual chaos organizing into an AI operations workflow.
- Add the first version of the Automation Simulator if scope allows; otherwise design the homepage around it as the next upgrade.
- Add a workflow visual showing voice/chat/email inputs triggering backend actions.
- Add Deploy, Reshape, Invent maturity curve.
- Add an AI Capability Maturity Assessment section: Manual, Digitized, Automated, AI-Native.
- Add Industry Accelerator preview cards.
- Add proof section with anonymous case summaries.
- Add real people/process visuals where available: team collaboration, workflow mapping, implementation, support, and client-style problem solving.
- Add Digital Workforce framing that explains how AI agents and human teams work together.
- Add people/process adoption section.
- Add a 30/60/90-day Value Realization roadmap.
- Add Managed AI Operations section.
- Add a concise pricing-confidence section that explains staged buying, usage-based pricing, and variable vendor-cost drivers.
- Rebuild the AI Voice page as the flagship proof page.
- Add a voice demo plus back-office event log to show downstream operational actions.
- Add a builder credibility section only when real architecture/workflow details can be shown truthfully.

Acceptance criteria:

- AI Voice is clearly prominent above the fold.
- The site does not imply Automate4U only sells voice.
- Visitors can understand the connection between AI conversations and backend operations.
- Free AI Workflow Assessment is the dominant conversion path.
- Pricing is transparent about cost drivers without making Automate4U look cheap, vague, or like a raw API reseller.
- Motion and premium visuals clarify workflow instead of becoming decoration.

## Phase 3: Create The Reusable React Section System

Goals:

- Replace migrated raw HTML with maintainable, reusable components.
- Keep content consistent across services and accelerators.

Create shared components such as:

- `VoiceLedHero`
- `MaturityCurve`
- `IndustryAcceleratorGrid`
- `AcceleratorPage`
- `WorkflowMap`
- `ValueRealizationPanel`
- `AdoptionAndTrainingSection`
- `ManagedAIOpsSection`
- `CaseStudyCard`
- `AssessmentLeadForm`
- `VoiceDemoCTA`
- `IntegrationCloud`
- `FAQ`

Steps:

- Define typed content structures for services, accelerators, FAQs, workflows, integrations, and case studies.
- Move repeated copy and page data into content config files.
- Render repeated page types from shared components.
- Use nested route layouts where they reduce repetition for service pages, Industry Accelerators, and about/process pages.
- Preserve current URLs.

Acceptance criteria:

- New pages avoid `dangerouslySetInnerHTML`.
- Repeated sections are data-driven.
- Future service or accelerator pages can be added without duplicating large style blocks.

## Phase 4: Rebuild Industry Accelerators

Goals:

- Reframe industry pages as repeatable implementation systems.
- Show domain expertise and faster time-to-value.

Initial accelerator candidates:

- Home Services Dispatch Engine.
- Manufacturing Customer Response Accelerator.
- Retail AI Support Accelerator.
- Professional Services Intake Engine.
- Healthcare Front Desk Automation Accelerator.
- Real Estate Lead Response Engine.
- Marketing Content Operations Accelerator.

Each accelerator should include:

- Industry-specific promise.
- Industry diagnosis that sounds like the buyer's actual operating environment, not a generic pain-point list.
- One end-to-end connected workflow story that shows conversation intake, approved data access, routing, human review, follow-up, and KPI logging.
- Prebuilt workflow patterns where useful, but not as the only page structure.
- Voice, chat, email, marketing, or operations agent examples as relevant.
- Systems connected, including channels, systems of record, and team workflow tools.
- Operational KPIs improved.
- Buyer-facing value patterns, representative workflows, or anonymized proof that are specific enough to feel real while respecting NDAs and never read like internal planning notes.
- Controls by design: approvals, escalation, audit logs, role-based access, and clear boundaries for sensitive actions.
- Spend-confidence section that explains staged rollout, usage drivers, and why the first milestone should be narrow and measurable.
- First 30-day path.
- Free assessment CTA.

Acceptance criteria:

- Accelerators feel repeatable and proven, not generic.
- Each accelerator includes concrete workflows and KPIs.
- Manufacturing and marketing examples are clearly supported, not hidden behind voice.

## Phase 5: Add Proof, Demos, And Trust Assets

Goals:

- Make visitors trust Automate4U faster.
- Make the team feel technically excellent and practical.
- Create memorable interactive moments.

Steps:

- Add anonymous case studies with measurable outcomes.
- Add interactive workflow examples for voice, chat, email, marketing, and operations agents.
- Add the Automation Ideas Library with searchable/filterable workflow examples.
- Add AI Maturity Score if the static maturity section proves useful.
- Add Architecture Snapshots, Human + AI Handoff Demo, and Managed AI Operations Dashboard Mock as proof assets.
- Add before/after workflow visuals.
- Add ROI/KPI panels.
- Add integration maps.
- Replace generic testimonials with real or anonymous proof.
- Replace placeholder team images.
- Add a team/process story that highlights AI-native development, learning speed, technical curiosity, and client-first delivery.

Acceptance criteria:

- Proof is specific and credible.
- Visitors can see what Automate4U actually builds.
- The site feels premium without relying on vague AI hype.

## Phase 6: Analytics, Value Realization, And Iteration

Goals:

- Track business outcomes on the site.
- Make the sales process measurable.
- Support long-term Managed AI Operations positioning.

Steps:

- Track CTA clicks, form starts, form submissions, demo starts, ROI interactions, chat opens, and accelerator page engagement.
- Preserve UTM and source data in form submissions.
- Implement the shared assessment form with a Next.js Server Action where practical.
- Add Value Realization messaging to service and accelerator pages.
- Define sample KPI maps for common workflows.
- Add monthly iteration process for reviewing conversion data and improving pages.

Acceptance criteria:

- Lead source and CTA context are captured.
- The site clearly promises KPI-linked implementation.
- Analytics support conversion optimization.

## Phase 7: Keep Legacy Patterns Out

Goals:

- Preserve the migration cleanup already completed.
- Avoid reintroducing raw migrated pages, duplicated lead forms, old assets, or route overlap.
- Keep SEO, performance, accessibility, and conversion tracking consistent as new pages are added.

Release QA checks:

- Search `app/`, `components/`, and `data/` for `dangerouslySetInnerHTML`, Formspree, raw `<img>`, old WordPress assets, and old HTTP asset references.
- Confirm any `dangerouslySetInnerHTML` usage is only for JSON-LD or another intentional structured-data case.
- Confirm any iframe usage is intentional, lazy where practical, and not blocking the primary page experience.
- Confirm new route additions appear in sitemap/metadata and do not create duplicate service/capability pages.

Acceptance criteria:

- No active buyer-facing route uses migrated HTML as its page model.
- Shared components and typed data cover common page patterns.
- SEO, performance, accessibility, and conversion tracking stay consistent.

## Related Documents

- `01-current-site-audit.md`: issues this roadmap addresses.
- `../team-review/site-architecture-and-offers.md`: page and offer model.
- `05-content-proof-and-wow-factor.md`: visitor-facing experience plan.
- `06-technical-remediation.md`: engineering work details.
- `08-execution-contracts.md`: implementation contracts for content, components, forms, and analytics.
- `../team-review/creative-experience-direction.md`: premium visual and interaction direction.
- `12-expertise-demonstration-experiences.md`: interactive proof experiences that demonstrate engineering skill.
- `../team-review/cta-lead-routing-analytics-and-pricing.md`: final CTA, CRM/email routing, analytics, and pricing guidance.
- `../team-review/pricing-transparency-and-cost-model.md`: detailed pricing transparency and variable cost model.
