# Services And Capabilities Implementation Plan

This document defines how Automate4U should organize, write, and rebuild the service and capability pages after the homepage, AI Voice page, solution taxonomy, and Industry Accelerator work.

The goal is simple: buyers should quickly understand what Automate4U sells, while also seeing the engineering, security, integration, monitoring, and adoption capabilities that make those services safe and trustworthy.

## Current Problem

The current site has two overlapping concepts:

- `core-services`: direct offers such as AI Voice, AI Agents, AI Chat, and AI Transformation.
- `capabilities`: a mix of direct offers and delivery capabilities, including AI Voice & Chat, AI Agents, Marketing Automation, Custom Software, Data Integrations, Security, Operational Intelligence, Strategy, and Training.

This creates avoidable confusion.

Some visitors will read `capabilities` as services they can buy. Others will read them as technical proof. Both interpretations are partly true today, which weakens clarity.

The capability pages also still contain legacy implementation patterns:

- Embedded CSS.
- `dangerouslySetInnerHTML`.
- Raw image tags.
- Old Formspree forms.
- Page structures that do not yet match the newer homepage, AI Voice, solution, and Industry Accelerator quality standard.

## Strategic Decision

Use three clear layers:

1. **Services**
   - What buyers can purchase from Automate4U.
   - These pages should be straightforward, commercially clear, and outcome-oriented.

2. **Industries**
   - Where those services are applied.
   - These pages should show sector-specific operating problems, common workflows, systems, KPIs, controls, and relevant solution pages.

3. **How We Build**
   - The trust and delivery capability layer.
   - These pages should prove that Automate4U can build reliable, secure, integrated, measurable, and adoptable AI systems.

The current top-nav label `Capabilities` should be reconsidered. Recommended label:

**How We Build**

This keeps important trust material visible without making buyers wonder whether every capability is a standalone service.

Acceptable alternate label:

**Trust & Capabilities**

Use this only if the team strongly wants the word `Capabilities` to remain visible in the navigation.

## Recommended Navigation

Primary navigation should become:

- Services
- Industries
- How We Build
- About
- Contact
- Get Free Assessment

Recommended desktop menu behavior:

- **Services** should list the direct offers.
- **Industries** should list the Industry Accelerators.
- **How We Build** should list security, integrations, analytics, training, strategy, and delivery capabilities.
- **Solutions** should remain contextual for now and should be linked from relevant service and industry pages, not promoted as a primary nav item until the solution library is large enough.

## Services

Services are what a buyer can reasonably ask to buy, scope, pilot, and expand.

Recommended service set:

1. **AI Voice Agents**
   - Flagship wedge.
   - Call handling, intake, booking, quote routing, parent/customer communication, reminders, escalation, and voice-to-operations workflows.

2. **AI Agents & Workflow Automation**
   - Chat, email, internal agents, admin workflows, CRM updates, support triage, quoting workflows, inbox handling, and operations agents.

3. **AI Chat & Customer Messaging**
   - Website chat, customer support chat, lead qualification, support deflection, product guidance, WhatsApp/SMS-style workflows, and human handoff.

4. **Marketing Automation & Content Agents**
   - Social content workflows, approval queues, campaign follow-up, lead nurturing, CRM segmentation, reporting, and content operations.

5. **AI Operations Strategy**
   - Workflow assessment, automation roadmap, value prioritization, process redesign, governance planning, and AI adoption planning.

6. **Managed AI Operations**
   - Ongoing monitoring, optimization, prompt/model review, workflow tuning, issue response, KPI reporting, and governance support.

7. **Custom AI Software**
   - Purpose-built applications, portals, dashboards, internal tools, and AI-enabled software when off-the-shelf tools do not fit.

## Service Page Model

Every service page should answer these buyer questions:

1. **What business problem does this solve?**
   - Use practical operational language.
   - Avoid hype and generic AI claims.

2. **What workflows can it handle?**
   - Show specific, believable workflow examples.
   - Include voice, chat, email, CRM, scheduling, quoting, marketing, support, and operations examples where relevant.

3. **What systems does it connect to?**
   - Make the connected-systems story explicit.
   - Examples: HubSpot, Google Workspace, Microsoft 365, Calendly, CRMs, ERPs, ecommerce platforms, helpdesks, databases, spreadsheets, SMS/WhatsApp, Retell, Botpress, Make, n8n.

4. **Where do humans stay in control?**
   - Include approvals, handoffs, escalation rules, sensitive workflow boundaries, audit logs, monitoring, and staff override.

5. **What does implementation look like?**
   - Show a practical rollout.
   - Recommended pattern: discovery, configuration/build, testing, launch, optimization.

6. **What affects budget?**
   - Explain pricing drivers in plain language.
   - Examples: call volume, workflow risk, integrations, human review needs, reporting, monitoring, and support level.

7. **Which capabilities make this safe and reliable?**
   - Link to relevant `How We Build` pages.
   - Every service page should show a trust strip or section featuring Security, Integrations, Monitoring, Analytics, and Training/Adoption.

## Service Page Recommended Flow

Use this as the default structure. Individual pages can vary, but should not omit the trust fundamentals.

1. **Hero**
   - Outcome headline.
   - One clear subheadline.
   - Primary CTA: Get Free Assessment.
   - Secondary CTA: demo, examples, or relevant solution page.

2. **Operational Reality**
   - Calm, mature description of the problem.
   - Avoid exaggerated pain marketing.

3. **Workflow Examples**
   - Cards or diagram showing the work the service handles.
   - Include before/after operational impact where possible.

4. **Connected Systems**
   - Show where the AI sends data, creates tasks, updates records, books appointments, sends follow-up, logs KPIs, and alerts humans.

5. **Human Control And Safety**
   - Explicitly show what the system can do automatically, what it drafts, and what it escalates.

6. **Implementation Process**
   - Discovery.
   - Configuration/build.
   - Testing.
   - Launch.
   - Optimization.

7. **Capability Trust Strip**
   - Security, Monitoring & AI Safety.
   - Data & Integrations.
   - Operational Intelligence.
   - Staff Training & Adoption.
   - Managed AI Operations when relevant.

8. **Budget Confidence**
   - Explain what drives cost.
   - Show staged path: free assessment, paid blueprint or pilot, measured launch, expansion.

9. **FAQ**
   - Focus on risk, adoption, cost, control, implementation disruption, and maintenance.

10. **Final CTA**
   - Get Free Assessment.
   - Repeat the practical next step.

## Capabilities Become How We Build

Capabilities should not compete with services. They should prove how Automate4U delivers services responsibly.

Recommended `How We Build` pillar set:

1. **Security, Monitoring & AI Safety**
   - Human-in-the-loop rules.
   - Sensitive data boundaries.
   - Approval workflows.
   - Role-based permissions.
   - Audit logs.
   - Escalation.
   - Monitoring.
   - Prompt/model review.
   - Incident response expectations.

2. **Data & Integrations**
   - CRM, calendar, email, documents, ERP, ecommerce, database, helpdesk, and messaging integrations.
   - Sync reliability.
   - Retries and failure handling.
   - Data mapping.
   - System-of-record discipline.

3. **Operational Intelligence & Value Realization**
   - KPI tracking.
   - Dashboards.
   - Cost-per-request, response time, cycle time, deflection, conversion, and workload metrics.
   - 30/60/90-day value review.

4. **Workflow & Systems Architecture**
   - Process design.
   - System boundaries.
   - Data movement.
   - Handoff architecture.
   - Backend automation architecture.

5. **Staff Training & Adoption**
   - Team onboarding.
   - SOP updates.
   - Escalation training.
   - Prompt/use policy.
   - Role-specific workflow adoption.

6. **Technology Strategy & Enablement**
   - Opportunity assessment.
   - Maturity assessment.
   - Roadmap.
   - Risk and governance planning.
   - Build-versus-buy guidance.

Marketing automation should be treated as a **service** if Automate4U wants to sell it directly. It can still be referenced inside capabilities as a workflow type, but the buyer-facing offer should live under Services.

Custom software is a direct service and should stay in the Services layer as **Custom AI Software**.

The related How We Build capability should not use the same buyer-facing label because that creates overlap. Use **Workflow & Systems Architecture** for the capability layer instead. This lets Automate4U explain the engineering discipline behind custom builds, integrations, handoffs, and workflow design without making buyers wonder whether `Custom AI Software` is a service or a trust page.

Legacy overlap decision:

- `/capabilities/ai-agents-workflow-automation` overlaps with the AI Agents service.
- `/capabilities/ai-voice-chat-experiences` overlaps with AI Voice and AI Chat services.
- `/capabilities/marketing-automation` should move toward a direct service page if Automate4U wants to sell it directly.
- `/capabilities/custom-software-ai-solutions` currently overlaps with the Custom AI Software service label and should be repurposed as **Workflow & Systems Architecture**, canonicalized, redirected, or replaced once the final route strategy is implemented.

Do not rebuild these overlapping legacy capability pages as full competing pages under the old labels. Build the direct service pages first, then decide whether each legacy URL should redirect, canonicalize, or become a short bridge page based on analytics and SEO risk.

## Capability Page Model

Every `How We Build` page should answer these questions:

1. **Why does this matter?**
   - Tie the capability to buyer risk, operational reliability, spend confidence, or adoption.

2. **Where does it show up in real projects?**
   - List the services and industries where the capability matters.

3. **What do we actually build or configure?**
   - Name the concrete controls, artifacts, workflows, dashboards, integrations, documents, or processes.

4. **How does this reduce buyer risk?**
   - Explain what can go wrong without it and how Automate4U prevents or monitors that risk.

5. **What artifacts does the client receive?**
   - Examples: workflow map, integration map, escalation policy, KPI dashboard, adoption guide, risk review, testing checklist, monitoring plan.

6. **Which services depend on it?**
   - Link back to relevant service pages.

## Capability Page Recommended Flow

1. **Hero**
   - Position the capability as a trust pillar, not a vague technical skill.

2. **Why It Matters**
   - Buyer-facing operational risk.

3. **How It Appears In Projects**
   - Link services and industries.

4. **What We Build**
   - Concrete controls, systems, and artifacts.

5. **Risk Reduction**
   - What this prevents.

6. **Client Artifacts**
   - What the buyer can expect to see.

7. **Related Services**
   - Cross-link to direct offers.

8. **Assessment CTA**
   - Invite buyers to discuss the capability in the context of a real workflow.

## Visibility Rules

Security and other trust capabilities should not be hidden deep in the site.

Use these visibility placements:

- Top navigation under **How We Build**.
- Footer under a trust/capabilities column.
- Homepage trust section.
- AI Voice page trust strip.
- Every service page capability strip.
- Relevant Industry Accelerator pages.
- Assessment success state or follow-up copy where appropriate.

The `Security, Monitoring & AI Safety` page should be the highest-priority capability rebuild because it directly addresses buyer fear.

## Route Strategy

Preserve existing routes during the current migration.

Near-term:

- Keep `/core-services/*` live.
- Keep `/capabilities/*` live.
- Update labels, internal links, and page content for clarity.
- Do not introduce redirects until the service/capability rebuild is stable.

Medium-term option:

- Consider `/services/*` as the canonical service route family.
- Redirect `/core-services/*` only after reviewing analytics and search risk.
- If `/services/*` is introduced, preserve metadata and internal links carefully.

For now, do not let route naming slow implementation. The bigger priority is buyer clarity and page quality.

## Current AI Voice Page Assessment

The current AI Voice page mostly matches the proposed service-page model and should not be changed without cofounder review because the page flow was influenced by cofounder direction.

What it already does well:

- Presents AI Voice as the flagship service.
- Shows voice as a frontline wedge, not the whole business.
- Includes a live voice demo.
- Shows a back-office event log to connect calls to operational actions.
- Includes workflow examples.
- Links to the Daycare Voice Agent focused solution.
- Explains pricing confidence and staged buying.
- Uses the shared assessment CTA.
- Includes an FAQ.

Important gaps or potential refinements to review before changing:

1. **Connected systems could be more explicit.**
   - The page says voice should update systems, but it could better show examples such as CRM update, calendar booking, ticket creation, SMS/email follow-up, internal notification, and KPI logging.

2. **Human control deserves a dedicated section.**
   - Human handoff is mentioned, but the page would build more trust if it showed approved responses, escalation rules, sensitive workflow boundaries, staff review, and audit logs in one visible section.

3. **Implementation process is light.**
   - The page could add a calm rollout section: discovery, call-flow design, configuration, testing, launch, monitoring, optimization.

4. **Capability trust strip is missing.**
   - Add a compact section linking to Security, Data & Integrations, Operational Intelligence, Training/Adoption, and Managed AI Operations.

5. **Proof is still pending.**
   - Add anonymous proof only after the proof inventory is collected and sanitized.

6. **Voice solution breadth could expand later.**
   - Daycare is currently the strongest focused solution example. Future cards could include Home Services Dispatch, Manufacturing Response, Professional Services Intake, and Healthcare Front Desk if/when those solution pages exist.

Recommended AI Voice decision:

- Keep the current page flow for now.
- Present the above refinements to the cofounder as optional trust-building additions.
- Do not rewrite the AI Voice page until there is agreement on whether these sections improve the page without making it too long or less focused.

## Recommended Implementation Sequence

1. **Document and approve taxonomy**
   - Confirm Services vs Industries vs How We Build.
   - Confirm whether top nav label should be `How We Build` or `Trust & Capabilities`.

2. **Update shared data**
   - Add a typed services/offers data model if the current `data/services.ts` is too narrow.
   - Add typed capability pillar data for the `How We Build` pages.
   - Define cross-link mappings between services, industries, solutions, and capabilities.

3. **Update navigation**
   - Add Services to the top nav.
   - Reframe Capabilities as How We Build.
   - Keep Solutions contextual.

4. **Rebuild the `/capabilities` index first**
   - Make it a trust-building `How We Build` overview.
   - Feature Security near the top.
   - Clearly separate direct services from delivery capabilities.

5. **Rebuild highest-priority capability pages**
   - Security, Monitoring & AI Safety.
   - Data & Integrations.
   - Operational Intelligence & Value Realization.
   - Staff Training & Adoption.
   - Technology Strategy & Enablement.
   - Workflow & Systems Architecture.

6. **Rebuild non-AI-Voice service pages**
   - AI Agents & Workflow Automation.
   - AI Chat & Customer Messaging.
   - AI Operations Strategy.
   - Marketing Automation & Content Agents.
   - Custom AI Software.
   - Managed AI Operations if treated as a standalone page in v1.

6a. **Resolve overlapping legacy capability URLs after service pages exist**
   - Do not keep duplicate full pages for the same buyer intent.
   - Use redirects, canonicals, or bridge pages after the stronger destination pages are available.
   - Prioritize buyer clarity over preserving old labels.

7. **Add service-to-capability cross-links**
   - Every service page should link to the capability pillars that make it safe and reliable.

8. **Review AI Voice refinements with cofounder**
   - Only add the missing trust/process/capability sections after approval.

9. **Run full verification**
   - `npm run lint`.
   - `npm run build`.
   - `npm run test:e2e`.
   - Manual desktop/mobile review of navigation, service pages, and capability pages.

## Acceptance Criteria

- Buyers can quickly identify what Automate4U sells.
- Capabilities remain visible and trust-building, especially security.
- Services no longer compete with capability pages for the same message.
- Every service page explains workflows, connected systems, human control, implementation, budget drivers, and trust capabilities.
- Every capability page explains why it matters, where it appears, what Automate4U builds, and how it reduces risk.
- Legacy `dangerouslySetInnerHTML`, raw images, and Formspree forms are removed from rebuilt service/capability pages.
- AI Voice remains the flagship wedge and is not rewritten without cofounder review.

## Related Documents

- `03-site-architecture-and-offers.md`: broader navigation and offer ladder.
- `04-implementation-roadmap.md`: active build sequence.
- `06-technical-remediation.md`: technical cleanup requirements.
- `08-execution-contracts.md`: content schemas, component APIs, forms, analytics, and test contracts.
- `11-creative-experience-direction.md`: visual and tonal direction.
- `16-cta-lead-routing-analytics-and-pricing.md`: CTA, HubSpot, notifications, analytics, and pricing guidance.
- `17-pricing-transparency-and-cost-model.md`: cost model and public pricing transparency rules.
