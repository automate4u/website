# Implementation Roadmap

This roadmap merges the original tactical audit plan with the strategic positioning updates.

## How To Execute This Roadmap

Do not treat each phase as a fully separate project. The safest implementation path is:

1. Stabilize the technical base enough that changes can ship safely.
2. Create the shared content/form/component contracts.
3. Rebuild the homepage and AI Voice page as the first proof of the new system.
4. Build one high-quality Industry Accelerator to validate the repeatable page model.
5. Add proof, pricing transparency, analytics, and conversion tests around the pages that now exist.
6. Replace remaining migrated pages incrementally.

Use `README.md` for the full doc map. Use this file as the active task sequence.

## Current Implementation Status

Last updated: after the true How We Build detail-page rebuilds.

| Area | Status | Notes |
| --- | --- | --- |
| Phase 1: Foundation | In progress | Lint/build, metadata, sitemap, robots, typed data scaffolding, Server Action lead capture, core service form migration, attribution capture, optional PostHog loader, first conversion events, first schema pass, first Playwright conversion tests, and active core-service image cleanup are complete. Remaining work includes legacy page replacement planning. |
| Phase 2: Homepage + AI Voice | In progress | Homepage v2 and AI Voice flagship v1 have been rebuilt around the approved positioning, connected-systems story, assessment CTA, maturity path, value realization, voice-to-operations event log, workflow examples, pricing confidence, accelerators, and Managed AI Operations. Homepage v2 now includes stronger operational diagnosis, implementation-method trust, sector-thinking notes, human/process imagery, and cleaner buyer-facing language. AI Voice now links more clearly into focused solution pages such as Daycare Voice Agent. Shared assessment forms now capture budget range. |
| Phase 3: Reusable React system | Started | Shared homepage sections now exist for section headers, workflow map, maturity curve, value realization roadmap, accelerator preview, and assessment CTA. AI Voice now uses the shared section header pattern and a cleaner React structure; reusable accelerator/proof modules remain next. |
| Phase 4: Industry Accelerators | In progress | All currently listed industry pages have been rebuilt from migrated HTML into React accelerator pages: Manufacturing, Education & Childcare, Home Services, Professional Services, Retail & Ecommerce, Healthcare, Real Estate, Financial Services, Hospitality, and Technology & Media. The `/industries` index explains the difference between broad industry context and focused solution implementations. Daycare Voice Agent lives under `/solutions/` as the first focused voice-led solution landing page. Solutions are intentionally contextual/secondary navigation for now, not a primary top-nav item. Remaining work is quality review, proof integration, and deciding whether to refactor older hand-built accelerator pages onto the reusable component where useful. |
| Phase 4B: Services + How We Build | Started | A dedicated taxonomy and implementation plan now exists in `18-services-and-capabilities-plan.md`. Shared service-offer and How We Build pillar data has been added, the header/footer now expose Services and How We Build separately, `/capabilities` has been rebuilt as a trust-building How We Build overview, and the six true How We Build detail pages have been rebuilt as native React pages: Security, Data & Integrations, Operational Intelligence, Staff Training & Adoption, Technology Strategy & Enablement, and Workflow & Systems Architecture. Next: rebuild the non-AI-Voice service pages, especially the planned service destinations for Marketing Automation, Managed AI Operations, and Custom AI Software. AI Voice should remain mostly stable until cofounder review of optional refinements. |
| Phase 5: Proof + trust assets | Not started | Requires proof inventory before final case study copy is written. |
| Phase 6: Analytics + iteration | Started | Optional PostHog loading, attribution capture, first event tracking, and first conversion-path tests are implemented. Full funnel reporting and iteration dashboards still need setup after PostHog credentials are available. |
| Phase 7: Remaining migration | Not started | Migrated HTML pages still contain `dangerouslySetInnerHTML`, raw images, and legacy Formspree forms. |

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
- Retell API route hardened.
- Botpress script injection typed and lazy-loaded.
- Several raw image, unused import, and JSX lint issues fixed.

Next recommended implementation slice:

1. Rebuild the remaining non-AI-Voice service pages using the service-page model in `18-services-and-capabilities-plan.md`.
2. Create proper service destinations for Marketing Automation & Content Agents, Managed AI Operations, and Custom AI Software so those offers do not depend on legacy capability URLs.
3. Resolve overlapping legacy capability URLs after service pages exist using redirects, canonicals, or short bridge pages. Do not rebuild duplicate full pages under old service-like capability labels.
4. Review optional AI Voice refinements with the cofounder before changing that page flow.

## Phase-To-Document Map

| Phase | Primary docs | Why they matter |
| --- | --- | --- |
| Phase 1: Foundation | `01`, `06`, `08`, `10`, `16` | Fix build/SEO/script/form/data foundations before redesigning surfaces. |
| Phase 2: Homepage + AI Voice | `02`, `03`, `05`, `11`, `12`, `16`, `17` | Build the first high-converting experience around positioning, proof, creative direction, demos, CTA, and pricing. |
| Phase 3: Reusable React system | `06`, `08`, `10`, `11` | Keep pages data-driven, consistent, accessible, and maintainable. |
| Phase 4: Industry Accelerators | `03`, `05`, `08`, `10`, `15`, `17` | Turn vertical pages into repeatable, proof-backed offers. |
| Phase 4B: Services + How We Build | `03`, `08`, `11`, `16`, `18` | Make direct offers easy to understand while keeping security, integrations, analytics, monitoring, and adoption visible as trust builders. |
| Phase 5: Proof + trust assets | `05`, `09`, `12`, `14`, `15` | Add credibility, governance, human control, and NDA-safe proof. |
| Phase 6: Analytics + iteration | `06`, `08`, `09`, `16` | Track revenue-critical behavior and protect conversion paths. |
| Phase 7: Remaining migration | `01`, `03`, `06`, `08` | Replace legacy pages without losing routes, SEO, or consistency. |

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

## Phase 7: Replace Migrated HTML Incrementally

Goals:

- Complete the move away from raw migrated pages.
- Improve maintainability and consistency across the app.

Recommended order:

1. Homepage.
2. AI Voice page.
3. AI Agents page.
4. Contact/free assessment page.
5. Highest-value Industry Accelerators.
6. Remaining capability pages.
7. About and process pages.

Acceptance criteria:

- `dangerouslySetInnerHTML` usage trends toward zero.
- Shared components cover common page patterns.
- SEO, performance, accessibility, and conversion tracking stay consistent.

## Related Documents

- `01-current-site-audit.md`: issues this roadmap addresses.
- `03-site-architecture-and-offers.md`: page and offer model.
- `05-content-proof-and-wow-factor.md`: visitor-facing experience plan.
- `06-technical-remediation.md`: engineering work details.
- `08-execution-contracts.md`: implementation contracts for content, components, forms, and analytics.
- `11-creative-experience-direction.md`: premium visual and interaction direction.
- `12-expertise-demonstration-experiences.md`: interactive proof experiences that demonstrate engineering skill.
- `16-cta-lead-routing-analytics-and-pricing.md`: final CTA, CRM/email routing, analytics, and pricing guidance.
- `17-pricing-transparency-and-cost-model.md`: detailed pricing transparency and variable cost model.
