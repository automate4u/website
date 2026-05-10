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

Last updated: after the homepage v2 and Manufacturing v2 quality passes.

| Area | Status | Notes |
| --- | --- | --- |
| Phase 1: Foundation | In progress | Lint/build, metadata, sitemap, robots, typed data scaffolding, Server Action lead capture, core service form migration, attribution capture, optional PostHog loader, first conversion events, first schema pass, first Playwright conversion tests, and active core-service image cleanup are complete. Remaining work includes legacy page replacement planning. |
| Phase 2: Homepage + AI Voice | In progress | Homepage v2 and AI Voice flagship v1 have been rebuilt around the approved positioning, connected-systems story, assessment CTA, maturity path, value realization, voice-to-operations event log, workflow examples, pricing confidence, accelerators, and Managed AI Operations. Homepage v2 now includes stronger operational diagnosis, implementation-method trust, sector-thinking notes, human/process imagery, and cleaner buyer-facing language. |
| Phase 3: Reusable React system | Started | Shared homepage sections now exist for section headers, workflow map, maturity curve, value realization roadmap, accelerator preview, and assessment CTA. AI Voice now uses the shared section header pattern and a cleaner React structure; reusable accelerator/proof modules remain next. |
| Phase 4: Industry Accelerators | Started | Manufacturing AI Accelerator v2 is now the benchmark pattern: calmer professional-services pacing, industry diagnosis, end-to-end connected workflow, buyer-facing value patterns, sector-thinking context, system-of-record trust, controls by design, spend confidence, and assessment CTA. Remaining accelerators should use this stronger model rather than the earlier repetitive card-grid version. |
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
- Homepage internal planning copy replaced with buyer-facing outcome language.
- Manufacturing AI Accelerator rebuilt from migrated HTML into a focused React page, then revised into the v2 benchmark pattern with stronger industry trust, less repetitive section rhythm, connected workflow proof, buyer-facing value patterns, sector-thinking context, system integration context, governance, and spend-confidence messaging.
- Design-quality pass completed across homepage, AI Voice, Manufacturing, and shared sections: tightened type scale, spacing, card styling, shadows, and buyer-facing copy rules.
- Retell API route hardened.
- Botpress script injection typed and lazy-loaded.
- Several raw image, unused import, and JSX lint issues fixed.

Next recommended implementation slice:

1. Extract the Manufacturing v2 section pattern into reusable accelerator components where it reduces duplication without flattening every industry page into the same rhythm.
2. Rebuild the next highest-value Industry Accelerator page using the Manufacturing v2 model.
3. Add stronger anonymous proof once the proof inventory is collected.

## Phase-To-Document Map

| Phase | Primary docs | Why they matter |
| --- | --- | --- |
| Phase 1: Foundation | `01`, `06`, `08`, `10`, `16` | Fix build/SEO/script/form/data foundations before redesigning surfaces. |
| Phase 2: Homepage + AI Voice | `02`, `03`, `05`, `11`, `12`, `16`, `17` | Build the first high-converting experience around positioning, proof, creative direction, demos, CTA, and pricing. |
| Phase 3: Reusable React system | `06`, `08`, `10`, `11` | Keep pages data-driven, consistent, accessible, and maintainable. |
| Phase 4: Industry Accelerators | `03`, `05`, `08`, `10`, `15`, `17` | Turn vertical pages into repeatable, proof-backed offers. |
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
