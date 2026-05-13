# Strategic Tool Stack Taxonomy

This document defines the first-pass ecosystem taxonomy for tools and integrations shown across the Automate4U website.

The goal is not to claim exclusive partnerships or universal support. The goal is to make integration maps, workflow cards, service pages, and Industry Accelerator pages consistent, credible, and easy to maintain.

## Principles

- Use one canonical name for each tool.
- Group tools by business function.
- Distinguish between officially supported, common, and exploratory tools.
- Avoid showing logos for tools Automate4U cannot reasonably integrate or discuss.
- Do not imply formal partner status unless a partnership exists.
- Use the taxonomy to power `connectedSystems`, integration maps, workflow examples, and filtering.

## Support Levels

```ts
export type ToolSupportLevel = "primary" | "common" | "exploratory";
```

- **Primary:** tools Automate4U wants to confidently feature in website visuals and sales conversations.
- **Common:** tools Automate4U can reference as frequent SMB systems, but should not overemphasize without current implementation confidence.
- **Exploratory:** tools that may appear in client environments but should be handled case-by-case.

## Tool Type

```ts
export interface ToolIntegration {
  id: string;
  name: string;
  category: ToolCategory;
  supportLevel: ToolSupportLevel;
  website: string;
  logoAsset?: string;
  notes?: string;
}

export type ToolCategory =
  | "voice-ai"
  | "chatbot"
  | "automation"
  | "crm"
  | "marketing"
  | "calendar"
  | "email"
  | "sms"
  | "forms"
  | "commerce"
  | "payments"
  | "accounting"
  | "inventory"
  | "documents"
  | "database"
  | "analytics"
  | "project-management"
  | "support"
  | "social-media";
```

## Primary Ecosystem

These are the tools most appropriate to feature in integration maps and flagship workflow examples.

### Voice AI

- Retell AI
- Twilio

### Chatbot And Web Chat

- Botpress
- Intercom
- Zendesk

### Automation And Orchestration

- Make
- Zapier
- n8n

### CRM And Sales

- HubSpot
- GoHighLevel
- Salesforce
- Pipedrive

### Marketing And Social

- Meta Business Suite
- LinkedIn
- Instagram
- Facebook
- Buffer
- Hootsuite

### Calendar And Scheduling

- Google Calendar
- Microsoft Outlook Calendar
- Calendly

### Email And Communication

- Gmail
- Microsoft Outlook
- Slack
- Microsoft Teams

### SMS And Phone

- Twilio
- OpenPhone
- RingCentral

### Forms And Intake

- Typeform
- Jotform
- Tally
- Google Forms

### Commerce And Payments

- Shopify
- Stripe
- Square

### Accounting And Finance

- QuickBooks
- Xero

### Documents And Knowledge

- Google Drive
- Microsoft SharePoint
- Notion
- Airtable

### Data, Analytics, And Reporting

- Google Sheets
- Microsoft Excel
- Looker Studio
- Power BI
- Airtable

### Project And Operations

- Asana
- Trello
- Monday.com
- ClickUp

## Industry-Specific Tool Examples

Use these as examples only. Confirm client stack during the assessment or paid AI Blueprint Sprint.

### Home Services

- GoHighLevel
- Housecall Pro
- Jobber
- ServiceTitan
- Google Calendar
- QuickBooks
- Twilio

### Manufacturing

- HubSpot
- Salesforce
- NetSuite
- QuickBooks
- Microsoft Outlook
- SharePoint
- Google Sheets
- Custom ERP or inventory database

### Professional Services

- HubSpot
- Pipedrive
- Calendly
- Google Drive
- SharePoint
- DocuSign
- QuickBooks
- Notion

### Retail And Ecommerce

- Shopify
- Stripe
- Klaviyo
- Zendesk
- Gorgias
- Meta Business Suite
- Google Sheets

### Healthcare

- Microsoft Outlook
- Google Calendar
- Twilio
- Typeform
- Jotform
- SharePoint
- EHR/EMR systems handled case-by-case

### Marketing Operations

- Meta Business Suite
- LinkedIn
- Instagram
- Facebook
- Buffer
- Hootsuite
- Canva
- Google Drive
- Notion

## Website Usage Rules

### Integration Map

Use primary ecosystem tools first.

Recommended visual grouping:

- Conversations: Retell, Botpress, Twilio, Gmail, Outlook.
- Sales and CRM: HubSpot, GoHighLevel, Salesforce, Pipedrive.
- Operations: Make, Zapier, n8n, Airtable, Google Sheets.
- Delivery and finance: Shopify, Stripe, QuickBooks, Xero.
- Team workflows: Slack, Teams, Asana, ClickUp, Notion.

### Workflow Cards

`connectedSystems` should reference canonical tool names from this taxonomy where possible.

Example:

```ts
connectedSystems: ["Retell AI", "Twilio", "HubSpot", "Google Calendar", "Slack"]
```

### Logos

Before adding logo assets:

- Confirm usage is allowed by the tool's brand guidelines.
- Use consistent sizing and monochrome or full-color treatment.
- Add alt text with the canonical tool name.
- Avoid displaying too many logos at once.

### Copy

Use careful language:

- "Integrates with tools like..."
- "Common systems we connect..."
- "Built around your existing stack..."

Avoid:

- "Official partner" unless true.
- "Guaranteed integration" unless verified.
- Overloading the site with every possible tool name.

## Open Decisions

- Which tools should be treated as true primary ecosystem tools after reviewing Automate4U's real delivery history?
- Whether to create local logo assets now or start with text badges.
- Whether the website should have a dedicated integrations page in v1.
- Whether industry accelerators should show 5-7 common systems each or a larger categorized map.

## Related Documents

- `03-site-architecture-and-offers.md`: where integration maps appear.
- `05-content-proof-and-wow-factor.md`: how tools support visitor trust and workflow clarity.
- `08-execution-contracts.md`: content schemas that reference `connectedSystems`.
