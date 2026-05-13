# Pricing Transparency And Cost Model

This document captures the pricing logic Automate4U can use publicly and internally. It exists because buyers need realistic expectations, but vendor costs are variable and should not be presented as fixed universal truth.

## Pricing Transparency Position

Automate4U can be transparent about raw vendor-cost logic, as long as the site explains that actual costs vary by:

- Voice provider.
- Phone carrier and region.
- Realtime versus post-call transcription.
- Voice quality and text-to-speech provider.
- Model choice.
- Latency requirements.
- Call recording and storage.
- Security requirements.
- Human review requirements.
- Workflow complexity.
- Integration reliability needs.
- Monthly usage volume.

The website should not hide that AI systems have real usage costs. It should make the cost structure understandable.

Use this principle:

> We show how costs are driven, then bundle the system into clear platform, usage, workflow, and risk categories so clients know what they are paying for.

## Public Cost Explanation

Recommended public framing:

> AI automation pricing has two parts: the system that needs to stay reliable, and the usage that changes with call volume, message volume, workflow volume, and risk level. Vendor costs vary depending on the models, voice providers, security needs, and integrations used, so we estimate usage openly during planning instead of pretending one flat number fits every business.

## Voice Usage Planning

Voice should usually be the main usage-based fee because realtime voice includes more moving pieces than email or chat.

Example usage scenarios:

| Scenario | Daily call time | Monthly call minutes | Estimated calls/month |
| --- | ---: | ---: | ---: |
| Light usage | 3 hours/day | 3,600 min/month | 400-500 calls |
| Moderate usage | 6 hours/day | 7,200 min/month | 500-600 calls |
| Heavy usage | 10 hours/day | 12,000 min/month | 600 calls |
| Max-stress usage | 20 hours/day | 24,000 min/month | 600+ calls |

## Voice Cost Drivers

Raw voice vendor/API cost can include:

| Cost type | Planning estimate |
| --- | ---: |
| Basic voice infrastructure | $0.01-$0.03/min |
| Realtime voice layer / routing | $0.07-$0.10/min |
| Speech-to-text / transcription | $0.003-$0.05/min |
| Text-to-speech voice output | $0.02-$0.08 per call minute |
| Call recording + storage | $0.003-$0.01/min |
| AI reasoning during the call | variable, budget $0.05-$0.20/min |
| Post-call summary/routing | $0.25-$1.00/call |

Important:

- Treat these as planning ranges, not published vendor price guarantees.
- Verify current vendor pricing before publishing exact examples.
- Explain that the client is not only paying for raw minutes. They are paying for reliability, monitoring, integration, handoff design, and ongoing support.

## Blended Voice Planning Estimates

Use blended estimates for planning:

| Pricing assumption | Raw cost estimate |
| --- | ---: |
| Low vendor cost | $0.20/min + $0.50/call |
| Safer planning estimate | $0.35/min + $1.00/call |
| Conservative high-security estimate | $0.50/min + $1.50/call |

Example monthly raw usage estimates:

| Scenario | Monthly minutes | Calls/month | Safer estimate | Conservative estimate |
| --- | ---: | ---: | ---: | ---: |
| Light | 3,600 | 400 | $1,660/month | $2,400/month |
| Moderate | 7,200 | 500 | $3,020/month | $4,350/month |
| Heavy | 12,000 | 600 | $4,800/month | $6,900/month |
| Max-stress | 24,000 | 600 | $9,000/month | $12,900/month |

This supports a clear sales point:

> A production voice automation system is not comparable to a personal AI subscription. Secure call handling, transcription, recording, workflow execution, staff notifications, monitoring, integrations, support, and human review all have cost.

## Email And Written Message AI Usage

Email/message AI API costs are usually much lower than voice. The expensive part is building and maintaining the workflow safely so the system knows what to do with each message.

Planning estimates:

| Email/message task | Internal estimate |
| --- | ---: |
| Classify email/message | $0.001-$0.005 each |
| Summarize email/message | $0.003-$0.02 each |
| Generate reply draft | $0.005-$0.05 each |
| Route to staff / messaging group | $0.001-$0.01 each |
| Higher-security double-check | $0.01-$0.10 each |

For 10,000 emails/month:

| Scenario | Estimated raw AI cost |
| --- | ---: |
| Classify only | $10-$50/month |
| Classify + summarize | $50-$200/month |
| Classify + summarize + draft replies | $100-$500/month |
| High-security review layer | $250-$1,000+/month |

Website lesson:

> Written-message AI usage is often inexpensive. The real value is in accurate classification, safe routing, reliable integrations, approval logic, and staff handoff.

## SMS And WhatsApp Usage

Messaging delivery costs are usually low compared with workflow design and operational reliability.

Planning examples:

| Channel | Volume | Estimated raw vendor cost |
| --- | ---: | ---: |
| SMS | 400/month | ~$3-$10/month |
| WhatsApp internal notifications | 1,000/month | ~$5-$25/month |
| WhatsApp external customer messages | 1,000/month | ~$5-$50/month depending on templates |
| Higher volume WhatsApp | 5,000/month | ~$25-$250/month depending on templates |

Website lesson:

> Message delivery is usually not the hard part. The hard part is making sure the message goes to the right person, with the right context, at the right time, with the right audit trail.

## High-Risk Workflow Pricing

High-risk workflows should be priced separately because they require additional checks, audit logs, human confirmation, and sometimes outside vendor services.

Examples:

- New pickup person not already authorized.
- Custody-sensitive request.
- Early pickup request.
- Medication, allergy, health, or safety-related message.
- Government ID verification.
- Unauthorized pickup or legal/safety concern.
- Any situation where system data does not match the request.

Planning estimates:

| Workflow type | Suggested internal cost model |
| --- | ---: |
| Standard attendance update | Included in normal call/message workflow |
| Early/late pickup notice from authorized guardian | Included or $0.50-$1.00/action |
| Pickup person change | $2-$5/action |
| Unauthorized pickup person flag | $5-$15/action |
| Custody-related flag | $10-$25/action |
| Government ID verification flow | Separate vendor cost + $5-$20/action |
| Human review required | Bill as support time or include up to a limit |

Client-facing wording:

> Certain high-risk workflows, such as pickup authorization changes, custody-sensitive situations, or identity verification, require additional safeguards, audit trails, and human confirmation. These workflows should be handled differently from general calls or basic attendance updates.

## Integration And Sync Usage

Integration work should be separated from AI usage. The AI might understand the request, but the business value comes from correctly reading, writing, routing, confirming, retrying, and logging actions across systems.

Planning estimates:

| Integration action | Suggested internal cost estimate |
| --- | ---: |
| Read customer/student/account info | $0.01/action |
| Create attendance note or status update | $0.01-$0.05/action |
| Send internal notification | $0.01-$0.10/action |
| Create audit log | $0.01-$0.10/action |
| Send confirmation email | $0.01-$0.05/action |
| Book/reschedule appointment or tour | $0.10-$0.50/action |
| Sync to marketing/calendar system | $0.05-$0.50/action |
| Failed sync retry / conflict resolution | $0.25-$2.00/action |

For proposals, these micro-costs can be bundled into completed workflow fees.

Suggested client-facing workflow fees:

| Workflow type | Client-facing usage fee |
| --- | ---: |
| Standard call summary + notification | $1/call |
| Attendance/status update workflow | $1-$2/completed workflow |
| Booking/rescheduling workflow | $2-$5/completed workflow |
| Pickup/change exception workflow | $3-$10/completed workflow |
| High-risk pickup/custody/safety flag | $10-$25/completed workflow |

## Recommended Client-Facing Pricing Structure

Do not pitch the work as "raw API cost plus markup." Pitch it as managed business infrastructure.

### Monthly Base Platform Fee

Recommended:

`$2,500-$5,000/month minimum`

Covers:

- Hosting.
- Monitoring.
- Support.
- Security maintenance.
- Integration maintenance.
- AI tuning.
- Workflow updates.
- Staff support.
- Basic message/email processing.
- Key system sync upkeep.

### Voice Usage Fee

Recommended:

`$1.00-$1.50 per handled voice minute`

Avoid going below `$0.75/min` unless the base monthly fee is strong.

### Per-Call Automation Fee

Recommended:

`$1.00-$2.00 per completed call`

Covers:

- Call summary.
- Transcript link.
- Action classification.
- Internal notification.
- Customer confirmation.
- Internal audit log.
- Routing to the right staff member or system.

### High-Risk Workflow Fee

Recommended:

`$5-$25 per high-risk workflow`

Examples:

- Unauthorized pickup person.
- Custody-sensitive request.
- ID verification request.
- Safety concern.
- Health/medication/allergy-sensitive message.

## Example Client-Facing Packages

### Option 1: Safer Pilot Pricing

Good for first milestone: call logging, notifications, basic booking or updates, and human review for sensitive cases.

| Item | Price |
| --- | ---: |
| Monthly platform/support fee | $3,000/month |
| Included voice minutes | 2,000 min/month |
| Additional voice minutes | $1.25/min |
| Included calls/workflows | 300/month |
| Additional completed call workflows | $1.50/call |
| High-risk workflows | $10/workflow |
| SMS/WhatsApp | pass-through or included up to a fair limit |

### Option 2: Expected Production Pricing

Good for replacing most routine frontline call handling.

| Item | Price |
| --- | ---: |
| Monthly platform/support fee | $5,000/month |
| Included voice minutes | 4,000 min/month |
| Additional voice minutes | $1.25/min |
| Included completed workflows | 500/month |
| Additional workflows | $1.50/workflow |
| High-risk workflows | $10-$25/workflow |
| Email/message triage | Included up to 10,000/month |

Example:

`$5,000 base + 3,200 extra minutes x $1.25 = $9,000/month`, before unusual high-risk workflow volume.

### Option 3: Heavy Usage / Full Admin Replacement Pricing

Good when the client compares the system against a major admin workload or role replacement.

| Item | Price |
| --- | ---: |
| Monthly platform/support fee | $7,500-$10,000/month |
| Included voice minutes | 8,000-10,000 min/month |
| Additional voice minutes | $1.00-$1.25/min |
| Completed workflows | Included up to limit |
| High-risk workflows | $10-$25/workflow |
| Security/audit package | Included or separate |

## Public Website Guidance

The website can include a pricing transparency section, but it should be carefully framed.

Pricing should appear close to the moment of curiosity:

- On AI Voice after the workflow demo.
- On Free Assessment near the offer ladder.
- On Industry Accelerators after an example workflow.
- On Managed AI Operations near monitoring/support details.
- In FAQ accordions or expandable detail panels where buyers want more context.

Recommended page section:

**Why AI Automation Pricing Varies**

Include:

- Platform/support fee.
- Usage-based voice minutes.
- Completed workflow actions.
- High-risk workflow safeguards.
- Messaging pass-through or allowance.
- Vendor/model variability.

Optional deeper section:

**Example Voice Cost Model**

Use this only if the design can explain it calmly and clearly. It should not be a giant spreadsheet dumped onto the page.

Interaction guidance:

- Use plain-language pricing cards for the main ranges.
- Use expandable details for raw cost drivers.
- Use accessible tap/click details, not hover-only UI, because pricing must work on mobile.
- Keep examples connected to concrete workflows so buyers understand why usage, risk, and integrations change cost.

## Important Safety Note

For high-risk workflows:

> The system can identify, flag, document, and route sensitive requests, but final approval should remain with authorized staff until the process, data accuracy, and legal requirements are fully validated.

Do not claim the system will independently approve custody, safety, identity, legal, health, or regulated decisions at launch.

## Related Documents

- `13-smb-spend-confidence-strategy.md`: spend anxiety and pricing confidence.
- `16-cta-lead-routing-analytics-and-pricing.md`: CTA and pricing page decisions.
- `09-governance-customer-journey-and-conversion-tests.md`: safety, governance, and high-risk workflow language.
- `14-labor-efficiency-and-human-redeployment.md`: labor-efficiency claims and guardrails.
