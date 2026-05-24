# Final Launch QA Without HubSpot

Use this checklist before the next production push while HubSpot access is still pending.

HubSpot is intentionally out of scope for this pass. The goal is to confirm that the public site, assessment flow, email notifications, Calendly path, analytics, and high-intent routes are working cleanly.

## Codex-Verified Items

- [x] `npm run lint` passes.
- [x] `npm run build` passes.
- [x] `npm run test:e2e` passes.
- [ ] Key production routes return successful responses after deploy.
- [x] Legacy `/core-services/*` routes redirect to `/services/*`.

Latest route smoke note, May 24, 2026:

- `/`, `/services/ai-voice`, `/contact`, and `/core-services/ai-voice` behave as expected on production.
- `/solutions/home-services-missed-call-dispatch-agent` returns `404` on production until the latest code is deployed.

## Team-Verified Items

### Resend Email Notification

Submit one real assessment on production using a test lead.

Confirm that all three inboxes receive the notification:

- `johnny@automate4u.co`
- `michael@automate4u.co`
- `hello@automate4u.co`

The email should include:

- Name.
- Work email.
- Company.
- Website, if entered.
- Industry.
- Workflow pain.
- Tools currently used.
- Budget range.
- Timeline.
- Service, accelerator, or workflow interest when available.
- Source page.
- CTA location.
- Landing page.
- Referrer.
- UTM fields when available.
- Calendly assessment link.

### Calendly Booking Path

After submitting the assessment form, confirm:

- The success screen appears.
- The `Book Assessment Call` button opens the correct Calendly event.
- The event duration, meeting location, and availability are correct.

### PostHog Events

In PostHog, confirm production events appear with `appEnvironment=production` or the production hostname.

Check for:

- Pageview.
- `site_assessment_cta_clicked`.
- `site_assessment_form_started`.
- `site_assessment_form_submitted`.
- Voice demo event if testing the AI Voice page.

### Manual Production Smoke Test

Open these pages on desktop and mobile:

- `/`
- `/services`
- `/services/ai-voice`
- `/solutions/daycare-voice-agent`
- `/solutions/manufacturing-quote-order-agent`
- `/solutions/healthcare-front-desk-agent`
- `/solutions/home-services-missed-call-dispatch-agent`
- `/industries/home-services`
- `/industries/manufacturing`
- `/industries/healthcare`
- `/contact`

Check:

- Header navigation works.
- Footer links work.
- Assessment modal opens.
- Required form fields are clear.
- No obvious visual overlap.
- Voice demo widget does not block Botpress.
- Page feels appropriate on mobile.

## HubSpot Deferred

Do not block this QA pass on HubSpot.

HubSpot remains the final routing step and requires:

- Private app token.
- Object model decision.
- Custom field names.
- Real HubSpot submission test.
