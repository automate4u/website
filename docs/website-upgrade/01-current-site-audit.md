# Current Site Audit

This audit captures the main quality, SEO, performance, conversion, and maintainability issues found in the current Automate4U website.

## Highest-Impact Issues

### 1. SEO Foundation Is Weak

Most routes inherit the same global metadata from `app/layout.tsx`:

- Title: `Automate4U - Your AI Transformation Partner`
- Description: generic automation partner copy

Observed gaps:

- Most pages do not define unique metadata.
- No sitemap route was found.
- No robots route was found.
- No canonical URL strategy was found.
- No consistent Open Graph or Twitter metadata.
- No structured data for organization, services, FAQs, case studies, or local/professional service context.

Impact:

- Search engines receive weak differentiation between pages.
- Service and industry pages cannot rank as well for their specific intent.
- Duplicate or overlapping pages may compete with each other.
- Shared snippets reduce click-through potential.

### 2. Many Pages Are Migrated Raw HTML

There are 23 pages using `dangerouslySetInnerHTML` and scoped inline style blocks.

Impact:

- Harder to maintain and refactor.
- Harder to reuse sections across pages.
- Harder to enforce accessibility and responsive consistency.
- Larger static HTML output.
- More risk of duplicated styles, inconsistent CTAs, and broken markup.

The long-term plan should replace migrated HTML with React components and typed content configuration.

### 3. Performance Risks

Observed risks:

- Many pages use raw `<img>` instead of `next/image`.
- Some pages reference old `http://automate4u.co/wp-content/...` assets.
- Some pages reference remote Unsplash or placeholder images.
- Botpress chat is injected globally through `ChatWidget`.
- Retell SDK is loaded on the AI Voice page, which is appropriate there but should stay isolated.
- Several large unused image assets exist under `public/images/unused`.

Impact:

- Slower LCP and higher bandwidth usage.
- Mixed-content risk from HTTP image URLs.
- Third-party scripts may slow every page even when visitors do not use chat.
- Visual inconsistency from placeholder or external stock-style assets.

### 4. Conversion Flow Is Inconsistent

Observed CTA variations:

- Book a Free Consultation
- Get a Consultation
- Request Consultation
- Book a Demo
- Send Message
- Start Your Chatbot Project

Observed form issues:

- Multiple Formspree endpoints.
- Different field sets across pages.
- Inconsistent success states.
- No clearly documented source, UTM, or CTA-location tracking.

Impact:

- Harder to measure conversion performance.
- Visitors may not understand the single best next step.
- Sales follow-up receives inconsistent lead context.

Recommended standard CTA system:

- Button label: **Get Free Assessment**
- Offer name: **Free AI Workflow Assessment**

### 5. Trust And Proof Signals Are Thin

Observed risks:

- Generic testimonials and company names.
- Placeholder team images.
- Broad claims such as "trusted worldwide."
- AI statistics from major research firms are present, but Automate4U-specific proof is limited.

Impact:

- Visitors may see the site as less mature than the team actually is.
- SMB buyers need proof that Automate4U can solve real business workflows, not just discuss AI.

Recommended proof direction:

- Anonymous but concrete case studies.
- Workflow before/after visuals.
- Metrics tied to client outcomes.
- Screenshots or sanitized UI examples.
- Live demos that show AI connected to business systems.

### 6. Site Architecture Overlaps

Current route groups include:

- `core-services`
- `capabilities`
- `industries`
- `about`

Some service concepts overlap across `core-services` and `capabilities`, especially AI Voice, AI Chat, AI Agents, and workflow automation.

Impact:

- Visitors may not know which page matters most.
- Search engines may see topical overlap.
- Internal linking may dilute priority pages.

Recommended direction:

- Preserve URLs during migration.
- Use canonical metadata where needed.
- Create one clear flagship path for AI Voice and one clear path for broader AI operations.
- Rebrand industry pages as Industry Accelerators.

### 7. Initial Lint And Build Risks

The pre-implementation Phase 1 check found `npm run lint` failed with 11 errors and 15 warnings, including:

- Explicit `any` in Retell API route.
- `@ts-ignore` in ChatWidget.
- Header effect warning about synchronous state updates.
- Unescaped JSX text.
- Unused imports.
- Raw `<img>` warnings.
- `migrate_pages.js` is included in lint and fails modern import rules.

The same preflight found `npm run build` failed when the environment could not fetch Google Fonts through `next/font/google`.

Phase 1 implementation note:

- The initial lint errors were fixed.
- The Google Fonts build dependency was removed.
- `npm run lint` now passes.
- `npm run build` now passes when Turbopack is allowed to run outside the sandbox restriction that blocks local process/port binding during CSS processing.

Recommended quality bar:

- `npm run lint` passes with zero errors.
- `npm run build` passes.
- Font strategy is reliable in deployment.
- Legacy migration scripts are excluded from normal app linting or updated to current lint rules.

### 8. Content Source Of Truth Does Not Exist Yet

The implementation plan calls for typed content files, but no `data/` directory currently exists.

Impact:

- Page copy, metadata, routes, cards, and service/industry details remain duplicated across pages.
- It is harder to generate sitemap entries, metadata, and page sections consistently.
- Rebuilding pages without a data layer risks repeating the current one-off page problem.

Recommended direction:

- Create typed content objects before or alongside the first homepage and AI Voice rebuild.
- Use the contracts in `08-execution-contracts.md` as the starting point.

## Recommended Priorities

1. Fix lint/build blockers, including font reliability.
2. Add SEO foundation and unique metadata.
3. Create typed content source of truth.
4. Standardize CTA and lead capture.
5. Rebuild homepage and AI Voice page around the new positioning.
6. Replace raw migrated pages with reusable React components.
7. Optimize images and third-party scripts.
8. Add proof, case studies, demos, and analytics.

## Related Documents

- `00-context-and-decisions.md`: strategic decisions.
- `04-implementation-roadmap.md`: phased execution.
- `06-technical-remediation.md`: engineering details.
