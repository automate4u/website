# Execution Contracts

This document defines the first-pass implementation contracts for the website upgrade. The goal is to keep the build consistent once engineering begins: one content source of truth, predictable component APIs, useful form success states, and clean analytics names.

These contracts are intentionally practical. They can evolve during implementation, but any change should preserve the same intent: content, metadata, sitemap entries, pages, and analytics should not drift into separate disconnected systems.

## Content Source Of Truth

Create typed TypeScript content files before adding a CMS:

- `data/services.ts`
- `data/industry-accelerators.ts`
- `data/case-studies.ts`
- `data/workflows.ts`
- `data/site.ts`

The same records should power:

- Page content.
- Metadata.
- Sitemap.
- Internal links.
- Cards and navigation.
- Structured data where applicable.

Use `10-strategic-tool-stack-taxonomy.md` as the canonical source for tool and integration names used in `connectedSystems`.

## Core Types

### Service

```ts
export type ServiceSlug =
  | "ai-voice"
  | "ai-agents"
  | "workflow-automation"
  | "custom-ai-software"
  | "managed-ai-operations";

export interface Service {
  slug: ServiceSlug;
  href: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: {
    label: string;
    href: string;
    eventName: AnalyticsEventName;
  };
  secondaryCta?: {
    label: string;
    href: string;
    eventName: AnalyticsEventName;
  };
  positioning: "flagship" | "core" | "supporting";
  outcomes: string[];
  workflows: WorkflowExampleId[];
  relatedAccelerators: IndustryAcceleratorSlug[];
  faqs: FAQItem[];
}
```

### Industry Accelerator

```ts
export type IndustryAcceleratorSlug =
  | "home-services-dispatch-engine"
  | "manufacturing-customer-response"
  | "retail-ai-support"
  | "professional-services-intake"
  | "healthcare-front-desk"
  | "real-estate-lead-response"
  | "marketing-content-operations";

export interface IndustryAccelerator {
  slug: IndustryAcceleratorSlug;
  href: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  primaryKpi: string;
  pains: string[];
  acceleratorPatterns: string[];
  workflows: WorkflowExampleId[];
  connectedSystems: string[];
  valueMetrics: ValueMetric[];
  caseStudy?: CaseStudyId;
  firstThirtyDays: string[];
  faqs: FAQItem[];
}
```

### Workflow Example

```ts
export type WorkflowExampleId =
  | "missed-call-recovery"
  | "appointment-booking"
  | "parts-availability-response"
  | "quote-follow-up"
  | "customer-support-triage"
  | "marketing-content-publishing"
  | "crm-cleanup"
  | "weekly-ops-reporting";

export interface WorkflowStep {
  title: string;
  description: string;
  actor: "customer" | "ai-agent" | "human-team" | "system";
  system?: string;
}

export interface WorkflowExample {
  id: WorkflowExampleId;
  title: string;
  shortDescription: string;
  channel: "voice" | "chat" | "email" | "sms" | "marketing" | "operations" | "multi-channel";
  manualPain: string;
  automatedOutcome: string;
  steps: WorkflowStep[];
  connectedSystems: string[];
  expectedMetrics: ValueMetric[];
  primaryService: ServiceSlug;
  relatedAccelerators: IndustryAcceleratorSlug[];
}
```

Implementation note:

- `connectedSystems` should use canonical names from the strategic tool stack taxonomy.
- If a system is client-specific or custom, use a descriptive label such as "Custom ERP" or "Inventory Database."

### Case Study

```ts
export type CaseStudyId =
  | "home-services-missed-calls"
  | "manufacturing-parts-response"
  | "professional-services-intake"
  | "marketing-content-ops";

export interface CaseStudy {
  id: CaseStudyId;
  title: string;
  anonymousClientLabel: string;
  industry: IndustryAcceleratorSlug;
  summary: string;
  problem: string;
  beforeWorkflow: string[];
  solution: string[];
  systemsConnected: string[];
  results: ValueMetric[];
  expansionOpportunity: string;
}
```

Implementation note:

- `systemsConnected` should use canonical names from the strategic tool stack taxonomy where possible.
- Avoid implying official partnerships through naming or logo display.

### Shared Types

```ts
export interface ValueMetric {
  label: string;
  baseline?: string;
  target?: string;
  result?: string;
  businessOutcome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
```

Value metrics may include labor-efficiency outcomes such as hours saved, requests deflected, response time reduced, quote cycle time reduced, cost per request lowered, or revenue recovered. Financial savings should include clear assumptions when used in public copy.

## Component APIs

### `WorkflowExampleCard`

Use this component for homepage workflow examples, service pages, and accelerator pages.

```ts
export interface WorkflowExampleCardProps {
  workflow: WorkflowExample;
  variant?: "compact" | "detailed" | "interactive";
  ctaLabel?: string;
  onCtaClickEvent?: AnalyticsEventName;
}
```

Behavior:

- Compact variant shows title, channel, manual pain, automated outcome, and CTA.
- Detailed variant includes connected systems and expected metrics.
- Interactive variant can reveal steps in sequence.
- Do not require before/after images; use structured steps first. Images or diagrams can be optional enhancements.

### `WorkflowMap`

Use this for the flagship voice-to-operations demo and before/after workflow visuals.

```ts
export interface WorkflowMapProps {
  title: string;
  description?: string;
  steps: WorkflowStep[];
  highlightedSystems?: string[];
  mode?: "linear" | "before-after" | "hub-and-spoke";
  valueMetrics?: ValueMetric[];
}
```

Behavior:

- Voice demo should use `linear` or `hub-and-spoke`.
- Before/after process sections should use `before-after`.
- Steps must remain readable on mobile.

### `AutomationSimulator`

Use this for the homepage proof experience that shows a workflow moving from manual input to AI-driven operations.

```ts
export interface AutomationSimulatorProps {
  workflows: WorkflowExample[];
  defaultWorkflowId?: WorkflowExampleId;
  mode?: "guided" | "interactive";
  cta: {
    label: string;
    href: string;
    eventName: AnalyticsEventName;
  };
}
```

Behavior:

- Visitor can choose a workflow pain.
- Simulator shows input, classification, system action, handoff, follow-up, and KPI effect.
- V1 may use simulated data.
- Clearly label examples as illustrative when not connected to live systems.

### `BackOfficeEventLog`

Use this beside the voice demo and other workflow demos.

```ts
export interface BackOfficeEvent {
  timestampLabel: string;
  title: string;
  description: string;
  status: "queued" | "running" | "completed" | "handoff" | "failed";
  system?: string;
}

export interface BackOfficeEventLogProps {
  title: string;
  events: BackOfficeEvent[];
  liveLabel?: string;
}
```

Behavior:

- Show downstream operational actions.
- Keep layout stable as events appear.
- Include failure or handoff states where useful.

### `ValueRealizationPanel`

Use this wherever the site claims measurable business impact.

```ts
export interface ValueRealizationPanelProps {
  title: string;
  description?: string;
  metrics: ValueMetric[];
  timeline?: ValueRealizationMilestone[];
  cta?: {
    label: string;
    href: string;
    eventName: AnalyticsEventName;
  };
}

export interface ValueRealizationMilestone {
  day: 30 | 60 | 90;
  title: string;
  description: string;
  evidence: string[];
}
```

Default 30/60/90 milestones:

- 30 days: first automation live, baseline captured, handoff process documented.
- 60 days: workflow optimized, team trained, early KPI movement reviewed.
- 90 days: expansion roadmap created, Managed AI Operations decision made.

### `MaturityAssessment`

Use this as a consultative hook before the assessment CTA.

```ts
export type MaturityStage = "manual" | "digitized" | "automated" | "ai-native";

export interface MaturityAssessmentProps {
  stages: MaturityStageDefinition[];
  defaultStage?: MaturityStage;
  cta: {
    label: string;
    href: string;
    eventName: AnalyticsEventName;
  };
}

export interface MaturityStageDefinition {
  stage: MaturityStage;
  title: string;
  symptoms: string[];
  nextStep: string;
}
```

Implementation note:

- Start as a static or lightly interactive section.
- Do not make it a long quiz for v1.
- It should help visitors self-identify and then book the assessment.

### `AutomationIdeasLibrary`

Use this to make workflow examples searchable and filterable.

```ts
export interface AutomationIdeasLibraryProps {
  workflows: WorkflowExample[];
  filters: Array<"industry" | "department" | "channel" | "tool" | "roiType">;
  defaultFilters?: Record<string, string>;
}
```

Behavior:

- Start with 12-18 strong workflow examples.
- Each idea links to the assessment form with workflow interest preselected.
- Use canonical tool names from `10-strategic-tool-stack-taxonomy.md`.

### `AssessmentLeadForm`

```ts
export interface AssessmentLeadFormProps {
  sourcePage: string;
  ctaLocation: string;
  serviceInterest?: ServiceSlug;
  acceleratorInterest?: IndustryAcceleratorSlug;
  workflowInterest?: WorkflowExampleId;
  submitLabel?: string;
  successVariant?: "standard" | "assessment-preview";
}
```

Submission:

- Prefer a Next.js Server Action.
- Hidden UTM fields should be included.
- The Server Action should post to HubSpot as the primary CRM.
- V1 HubSpot model: create/update a contact and store assessment context as properties/notes.
- Defer deal/ticket object modeling until the HubSpot workspace is configured.
- The Server Action should send notification emails to `johnny@automate4u.ca`, `michael@automate4u.ca`, and `hello@automate4u.ca`.
- Use Resend Free as the default notification email provider unless HubSpot-native notifications cover the final submission path.
- Formspree or a generic webhook should only be used as a fallback or temporary bridge.

## Post-Submission Wow Experience

Do not use a generic "Thanks, we will be in touch" state as the only response.

Recommended success state:

1. Confirm the request was received.
2. Show "What happens next" in three steps:
   - We review your workflow and tools.
   - We identify the first high-value automation opportunity.
   - We send next steps or meet to walk through the assessment.
3. Show a lightweight "Preview Assessment Focus" based on selected interest:
   - Voice: missed calls, booking, follow-up, handoff.
   - Manufacturing: parts availability, quote flow, order status, sales handoff.
   - Marketing: content workflow, approval, scheduling, reporting.
   - Operations: CRM updates, document handling, reporting, internal notifications.
4. Provide a high-priority calendar link if the team has a scheduling tool ready.

5. Reassure the buyer that the recommended path will start with the smallest useful workflow, not an oversized transformation by default.

Fallback:

- If no scheduling tool is ready, show a clear expectation: "We typically respond within one business day."

Operational follow-up:

- Follow the first-7-days journey defined in `09-governance-customer-journey-and-conversion-tests.md`.
- The success state should set expectations that the submission will receive human review, not imply the system generated a complete final audit or implementation blueprint instantly.

## Analytics Naming Convention

Use lowercase snake_case event names.

Pattern:

`site_<object>_<action>`

Examples:

```ts
export type AnalyticsEventName =
  | "site_assessment_cta_clicked"
  | "site_assessment_form_started"
  | "site_assessment_form_submitted"
  | "site_assessment_form_failed"
  | "site_voice_demo_started"
  | "site_voice_demo_completed"
  | "site_voice_demo_failed"
  | "site_workflow_card_clicked"
  | "site_maturity_stage_selected"
  | "site_case_study_viewed"
  | "site_industry_accelerator_viewed"
  | "site_botpress_opened"
  | "site_roi_panel_interacted";
```

When implementing expertise demos, extend the shared type with:

```ts
  | "site_automation_simulator_started"
  | "site_automation_simulator_completed"
  | "site_automation_idea_filtered"
  | "site_handoff_demo_viewed"
  | "site_event_log_viewed"
```

Recommended event payload fields:

```ts
export interface AnalyticsPayload {
  page: string;
  ctaLocation?: string;
  serviceInterest?: ServiceSlug;
  acceleratorInterest?: IndustryAcceleratorSlug;
  workflowInterest?: WorkflowExampleId;
  maturityStage?: MaturityStage;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}
```

Rules:

- Do not create new event names casually.
- Add new names to the shared type first.
- Keep event payloads small and readable.
- Avoid sending sensitive form message content to analytics tools.

## Open Decisions Before Implementation

- Whether to evolve HubSpot beyond the basic contact-plus-notes model into contact plus deal or contact plus ticket.
- Whether HubSpot-native notifications are enough after setup, or Resend remains the notification path.
- Calendly Free is the v1 scheduling placeholder; decide later whether multiple event types, routing, or HubSpot integration require an upgrade.
- Whether Google Analytics 4 is needed in addition to PostHog for ad/Search Console workflows.
- Whether the maturity assessment is static in v1 or interactive.
- Whether `Managed AI Operations` gets its own page in v1 or appears as a section first.

## Related Documents

- `02-positioning-strategy.md`: strategic framing.
- `04-implementation-roadmap.md`: phased execution.
- `06-technical-remediation.md`: engineering requirements.
- `07-refinement-notes.md`: rationale for these additions.
- `09-governance-customer-journey-and-conversion-tests.md`: trust, first-7-days journey, and conversion-path test requirements.
- `10-strategic-tool-stack-taxonomy.md`: canonical integration and tool taxonomy.
- `12-expertise-demonstration-experiences.md`: interactive proof modules and demo requirements.
- `13-smb-spend-confidence-strategy.md`: spend-confidence messaging and offer framing.
- `14-labor-efficiency-and-human-redeployment.md`: labor-efficiency and human redeployment claims.
- `../team-review/cta-lead-routing-analytics-and-pricing.md`: CTA labels, CRM/email routing, analytics recommendation, and pricing guardrails.
