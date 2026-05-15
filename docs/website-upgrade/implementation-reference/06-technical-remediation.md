# Technical Remediation Plan

This document covers the engineering work needed to support the website upgrade.

## Metadata And SEO

Implement:

- Unique metadata for every route.
- `app/sitemap.ts`.
- `app/robots.ts`.
- Canonical URL handling.
- Open Graph defaults and page-specific overrides.
- Twitter metadata.
- Structured data for:
  - Organization.
  - Professional service.
  - Service pages.
  - FAQ pages.
  - Case studies.
  - Breadcrumbs.

Guidelines:

- Use a shared metadata helper to reduce duplication.
- Generate metadata from typed content config where practical.
- Avoid duplicate titles and descriptions.
- Canonicalize overlapping service/capability pages.

## Page Refactor

Current issue:

- Many pages use `dangerouslySetInnerHTML` and large inline style blocks.

Target:

- Reusable React components.
- Typed content configs.
- Shared design tokens.
- Consistent CTA and form sections.

Use modern Next.js structure where it reduces duplication:

- Use shared components for repeated sections.
- Use nested `layout.tsx` files for route groups that need common scaffolding, such as Industry Accelerators or service pages.
- Use typed TypeScript content objects as the first content system before introducing a CMS.
- Generate page content, metadata, sitemap entries, and internal links from the same content source where practical.
- Follow `08-execution-contracts.md` for first-pass content interfaces and high-value component prop shapes.

Recommended migration order:

1. Homepage.
2. AI Voice page.
3. AI Agents page.
4. Contact/free assessment page.
5. Industry Accelerators.
6. Remaining capability pages.
7. About/process/team pages.

## Images And Assets

Fix:

- Replace raw `<img>` with `next/image` where practical.
- Replace old `http://automate4u.co/wp-content/...` URLs with local optimized assets.
- Remove placeholder image URLs from public-facing pages.
- Avoid loading large unused assets.
- Add remote image domains only when a remote source is intentionally used.

Targets:

- Better LCP.
- No mixed-content risk.
- Consistent visual quality.
- Reduced page weight.

## Third-Party Scripts

Use explicit script loading strategies.

Preferred tools:

- `next/script` for third-party scripts that are naturally loaded by script tag.
- Dynamic import for SDKs that should load only after user intent.
- User-triggered loading for demos where the script is not needed until interaction.

### Botpress

Current issue:

- Botpress is injected globally through `ChatWidget`.

Target:

- Lazy-load Botpress after user interaction, after idle, or only on pages where it is strategically useful.
- Prefer `next/script` with `strategy="lazyOnload"` or a user-triggered loader, depending on final UX.
- Add proper TypeScript typing for `window.botpress`.
- Avoid `@ts-ignore`.
- Make failure silent and non-blocking.

### Retell

Current use:

- Retell SDK supports the AI Voice live demo.

Target:

- Keep Retell SDK isolated to voice/demo surfaces.
- Load the Retell client only after the user shows intent to start or inspect the voice demo.
- Harden the API route.
- Validate request shape.
- Avoid exposing sensitive internal error details to the client.
- Handle microphone denial, failed call creation, active call state, call end, and cleanup.

## Lead Form And Tracking

Create a shared `AssessmentLeadForm`.

Prefer a Next.js Server Action for submission handling.

Reasons:

- Keeps lead handling on the server.
- Supports progressive enhancement.
- Avoids a separate API route for basic form submission.
- Creates one stable integration point for HubSpot, email notifications, fallback webhooks, or future database storage.

Recommended fields:

- Name.
- Work email.
- Company.
- Website.
- Industry.
- Biggest workflow pain.
- Tools currently used.
- Monthly volume or rough activity level.
- Timeline.

Hidden fields:

- Page source.
- CTA location.
- Service interest.
- Industry accelerator.
- UTM source.
- UTM medium.
- UTM campaign.
- UTM term.
- UTM content.

Destination:

- HubSpot is the primary CRM/source of truth.
- Use a basic HubSpot v1 model: create or update contacts and store assessment context as properties/notes.
- Defer contact-plus-deal or contact-plus-ticket modeling until HubSpot is fully configured.
- Send notification emails to `johnny@automate4u.ca`, `michael@automate4u.ca`, and `hello@automate4u.ca`.
- Use Resend Free as the default v1 email notification provider unless HubSpot-native notifications cover the final form path.
- Keep the integration behind the Server Action so CRM and email credentials never reach the browser.
- Store page source, CTA location, service interest, workflow interest, industry interest, and UTM fields with the HubSpot record.

Behavior:

- Standard success state.
- Assessment-preview success state for high-intent CTAs.
- Clear error state.
- Disable submit while submitting.
- Preserve lead context.
- Make form accessible by keyboard and screen readers.
- Work without client-side JavaScript where practical.
- If HubSpot fails but email notification succeeds, show success and log the CRM failure for manual follow-up.
- If all destinations fail, preserve entered data and show a retryable error.

Scheduling:

- Use Calendly Free for the initial assessment booking link if one event type and one connected calendar are enough.
- Place the link in the success state and follow-up email.
- Upgrade scheduling only when multiple event types, routing, round-robin assignment, or deeper HubSpot automation is required.

## Analytics Events

Use PostHog as the primary v1 analytics tool unless implementation discovers a strong reason to change. Keep Google Analytics 4 optional for ad/Search Console reporting needs.

Track:

- CTA clicks.
- Form starts.
- Form submissions.
- Form errors.
- Voice demo starts.
- Voice demo failures.
- Botpress opens.
- ROI calculator interactions.
- Workflow card clicks.
- Industry Accelerator page views.
- Case study views.

Use the naming convention in `08-execution-contracts.md`:

- Lowercase snake_case.
- `site_<object>_<action>`.
- Shared event type before adding new names.
- No sensitive free-text form content in analytics payloads.

Use these events to evaluate:

- Which offer drives leads.
- Whether AI Voice is the best entry point.
- Which non-voice workflows attract interest.
- Which pages need conversion improvement.

Analytics rules:

- Do not send sensitive free-text form content to analytics.
- Keep HubSpot as the CRM source of truth.
- Keep PostHog as behavior analytics for funnels, demos, and workflow engagement.

## Accessibility

Targets:

- Keyboard navigation works across header, menus, forms, FAQ, modals, and demos.
- Buttons have accessible names.
- Dialogs trap focus and close predictably.
- Form labels are explicit.
- Color contrast meets WCAG expectations.
- Interactive demo components have non-visual explanations.

## Performance Targets

Lighthouse targets for primary pages:

- Performance: 90+.
- Accessibility: 95+.
- SEO: 95+.
- Best Practices: 95+.

Primary pages to test:

- Homepage.
- AI Voice page.
- AI Agents page.
- Free assessment/contact page.
- Top Industry Accelerator pages.

## Quality Gates

Required checks:

- `npm run lint`
- `npm run build`
- Playwright conversion-path tests for primary revenue flows.

Recommended manual checks:

- Mobile layout at small, medium, and desktop widths.
- Header navigation.
- Form submission.
- Voice demo failure states.
- Botpress lazy-load behavior.
- Sitemap and robots output.
- Metadata output for primary pages.

## Conversion-Path Playwright Tests

Add a small Playwright suite focused on revenue-critical paths.

Required coverage:

- Homepage renders and primary Free AI Workflow Assessment CTA is visible.
- Assessment form can be reached from homepage CTA.
- Assessment form required-field validation works.
- Assessment form can submit successfully in test mode or with mocked submission.
- Assessment form success state shows next steps and preview assessment focus.
- AI Voice page renders and voice demo CTA is visible.
- Voice demo handles microphone denial or mocked API failure gracefully.
- Header navigation reaches AI Voice, AI Agents, Industry Accelerators, and Free AI Assessment.

Rules:

- Tests must not submit real production leads.
- Use mocked Server Action results, test environment variables, or fake destinations in CI.
- Treat a broken assessment form as a deployment blocker.

## Related Documents

- `01-current-site-audit.md`: issues this plan addresses.
- `04-implementation-roadmap.md`: when to execute this work.
- `../team-review/site-architecture-and-offers.md`: routes and conversion paths to support.
- `08-execution-contracts.md`: content schemas, component APIs, form success behavior, and analytics naming.
- `09-governance-customer-journey-and-conversion-tests.md`: governance, first-7-days process, and conversion-path testing.
- `../team-review/cta-lead-routing-analytics-and-pricing.md`: final CTA, lead routing, analytics, and pricing decisions.
