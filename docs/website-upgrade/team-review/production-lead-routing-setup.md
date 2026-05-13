# Production Lead Routing Setup

This document explains what must happen before the upgraded site can reliably capture real assessment leads.

Production lead routing has two parts:

- **Code path:** the website form submits through a Next.js Server Action, sends data to HubSpot, sends internal notification emails, preserves attribution, and shows the visitor a success/error state.
- **Account setup:** Automate4U must create and provide production credentials, confirm HubSpot field names, choose the booking link, and verify that notifications reach the team.

## Current Implementation State

The assessment form code already supports:

- Shared assessment form submissions.
- Server-side validation requiring email.
- HubSpot private app token via `HUBSPOT_PRIVATE_APP_TOKEN`.
- Resend email notifications via `RESEND_API_KEY`.
- Notification recipients:
  - `johnny@automate4u.ca`
  - `michael@automate4u.ca`
  - `hello@automate4u.ca`
- Source page, CTA location, landing page, referrer, UTM fields, service interest, workflow interest, budget, timeline, team size, and workflow pain capture.
- Production guardrail: production submissions fail if neither HubSpot nor Resend is configured.
- E2E test mode through `A4U_E2E_TEST_MODE=1`.

Current file:

- `app/actions/assessment.ts`

## What Codex Can Implement

Codex can handle these once credentials/field decisions are available:

- Add or adjust HubSpot property mappings.
- Add company creation or association if the team wants it.
- Add deal or ticket creation if the team wants lead pipeline tracking in HubSpot.
- Add assessment notes to HubSpot records.
- Add notification email formatting.
- Add Calendly link to success states and notification emails.
- Add PostHog event names and funnel tracking.
- Add fallback webhook support if Automate4U wants a second backup destination.
- Add Playwright checks that the form still submits in test mode.
- Add docs updates after configuration is finalized.

## What The Team Must Provide

Automate4U must provide or confirm:

- **HubSpot private app token:** production value for `HUBSPOT_PRIVATE_APP_TOKEN`.
- **HubSpot object model:** contact-only for v1, or contact + company + deal/ticket.
- **HubSpot field names:** exact internal property names for any custom fields.
- **Resend API key:** production value for `RESEND_API_KEY`, if using Resend.
- **Verified sender:** production `RESEND_FROM_EMAIL`, such as `hello@automate4u.ca`, after domain verification.
- **Calendly link:** final Free AI Workflow Assessment booking URL.
- **PostHog key:** production value for `NEXT_PUBLIC_POSTHOG_KEY`, if using PostHog.
- **Legal/privacy approval:** confirm that form, analytics, CRM, email notification, and AI demo language is acceptable.

## Recommended V1 HubSpot Model

Use a simple v1 model first:

1. Create or update a **Contact** by email.
2. Store basic properties:
   - Email.
   - Name.
   - Company.
   - Website.
   - Industry.
3. Store submission context either as custom contact properties or as an engagement/note:
   - Source page.
   - CTA location.
   - Service interest.
   - Workflow interest.
   - Industry interest.
   - Budget range.
   - Timeline.
   - Team size.
   - Current channels.
   - Workflow pain or success goal.
   - UTM fields.
   - Referrer.
   - Landing page.

Defer deal/ticket automation until the team confirms how sales will manage these leads in HubSpot.

## Optional V2 HubSpot Model

After v1 is working, consider:

- Create or update a **Company** based on domain or company name.
- Create a **Deal** in an "Assessment Requests" pipeline.
- Create a **Ticket** if the team wants operational follow-up rather than sales pipeline follow-up.
- Associate contact, company, deal/ticket, and submission note.
- Add lifecycle stage, lead status, service interest, and lead source properties.
- Trigger HubSpot workflows for internal tasks and reminders.

## Recommended Environment Variables

Production:

```txt
HUBSPOT_PRIVATE_APP_TOKEN=...
RESEND_API_KEY=...
RESEND_FROM_EMAIL=hello@automate4u.ca
NEXT_PUBLIC_POSTHOG_KEY=...
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
NEXT_PUBLIC_CALENDLY_ASSESSMENT_URL=https://calendly.com/...
```

Testing:

```txt
A4U_E2E_TEST_MODE=1
```

Do not expose private HubSpot or Resend keys client-side.

## Resend Setup Checklist

Use Resend Free for v1 internal notification emails if HubSpot-native notifications are not enough.

Steps:

1. Create a Resend account.
2. Add and verify the Automate4U sending domain.
3. Configure DNS records required by Resend.
4. Create an API key.
5. Set `RESEND_API_KEY` in production environment variables.
6. Set `RESEND_FROM_EMAIL` to a verified sender, ideally `hello@automate4u.ca`.
7. Submit a test assessment and confirm all three recipients receive the email.

## Calendly Setup Checklist

Use Calendly Free for v1 if one assessment event type is enough.

Recommended event:

- Name: Free AI Workflow Assessment.
- Duration: 20-30 minutes.
- Location: Google Meet, Zoom, or phone.
- Description: ask buyers to bring one workflow they want to reduce, speed up, or automate.

After setup:

- Add the final link as `NEXT_PUBLIC_CALENDLY_ASSESSMENT_URL`.
- Add the link to form success states and notification emails.
- Optionally add it to follow-up emails.

## PostHog Setup Checklist

Use PostHog Free for v1 funnel analytics.

Track:

- CTA clicks.
- Assessment form starts.
- Assessment submissions.
- Assessment submission failures.
- Voice demo starts.
- Solution/service/industry CTA clicks.

Rules:

- Do not send sensitive free-text workflow descriptions to analytics.
- Keep HubSpot as the source of truth for lead data.
- Use PostHog for behavior and funnel measurement.

## Production Acceptance Criteria

Production lead routing is complete when:

- A real assessment submission creates or updates a HubSpot contact.
- The submission context is visible in HubSpot.
- The three internal recipients receive a readable email notification.
- The success state shows the expected next step and booking path.
- The submission preserves source page, CTA location, landing page, referrer, and UTM fields.
- Form submission errors show a clear retry path.
- `npm run lint`, `npm run build`, and `npm run test:e2e` pass.

## Open Decisions

- Whether v1 should remain contact-only or also create a HubSpot deal/ticket.
- Exact HubSpot custom property names.
- Final Calendly URL.
- Whether HubSpot-native notifications are enough or Resend should remain mandatory.
- Whether a fallback webhook is useful.
