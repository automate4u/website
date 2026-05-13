export type ServicePageData = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  heroModel: {
    label: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  operationalReality: {
    title: string;
    description: string;
    points: Array<{
      title: string;
      text: string;
    }>;
  };
  workflows: Array<{
    title: string;
    trigger: string;
    action: string;
    outcome: string;
  }>;
  systems: Array<{
    title: string;
    items: string[];
  }>;
  controls: string[];
  rollout: Array<{
    step: string;
    title: string;
    text: string;
  }>;
  budget: {
    title: string;
    text: string;
    drivers: string[];
  };
  faq: Array<{
    q: string;
    a: string;
  }>;
  capabilityHrefs: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "ai-agents",
    href: "/core-services/ai-agents",
    eyebrow: "AI Agents & Workflow Automation",
    title: "Agents that handle repeatable work across sales, support, and operations.",
    description:
      "We build AI agents that read, classify, draft, route, update records, trigger workflows, and hand off the right context to people when judgment is needed.",
    heroModel: {
      label: "Agent operating model",
      steps: [
        { title: "Listen", text: "Monitor approved channels such as inboxes, forms, chat, CRM queues, documents, and task lists." },
        { title: "Decide", text: "Classify the request, check business rules, pull context, and decide whether to act, draft, or escalate." },
        { title: "Act", text: "Create records, route work, draft replies, update statuses, notify staff, and log the outcome." },
        { title: "Improve", text: "Review exceptions, tune prompts, update rules, and measure the workflow against real KPIs." },
      ],
    },
    operationalReality: {
      title: "Most teams do not need another dashboard. They need fewer manual touches.",
      description:
        "AI agents are useful when they reduce repeated admin work without hiding important decisions from the team.",
      points: [
        { title: "Inboxes become work queues", text: "Sales, support, operations, and finance messages often need the same classification, routing, and follow-up every day." },
        { title: "CRM work gets skipped", text: "People answer the customer, but the system of record is not updated, which breaks reporting and follow-up." },
        { title: "Quoting and support slow down", text: "Teams wait on small details, document checks, status updates, and internal handoffs." },
        { title: "Automation needs boundaries", text: "Some work can be completed automatically, while sensitive or high-value cases should be drafted or escalated." },
      ],
    },
    workflows: [
      {
        title: "Email response and routing",
        trigger: "Customer emails a question, quote request, or support issue.",
        action: "Agent classifies the message, checks approved context, drafts a reply, updates CRM, and routes exceptions.",
        outcome: "Faster response time with humans reviewing sensitive or high-value work.",
      },
      {
        title: "CRM and pipeline hygiene",
        trigger: "New lead, stale deal, missing contact field, or follow-up due.",
        action: "Agent enriches records, drafts follow-up, creates tasks, and flags unclear opportunities.",
        outcome: "Cleaner pipeline data and fewer missed revenue moments.",
      },
      {
        title: "Operations task orchestration",
        trigger: "A form, email, document, or voice call creates an operational request.",
        action: "Agent creates the right task, attaches context, notifies the owner, and logs the KPI event.",
        outcome: "Less admin coordination and better visibility into request volume.",
      },
      {
        title: "Finance and document triage",
        trigger: "Invoice, order, statement, receipt, or account question enters the workflow.",
        action: "Agent extracts details, checks rules, drafts the next action, and sends exceptions to review.",
        outcome: "Fewer repetitive document touches without losing approval control.",
      },
    ],
    systems: [
      { title: "Channels", items: ["Email", "Forms", "Chat", "Voice", "SMS", "WhatsApp"] },
      { title: "Systems of record", items: ["HubSpot", "Salesforce", "Google Sheets", "Airtable", "QuickBooks", "Custom databases"] },
      { title: "Team workflow", items: ["Slack", "Microsoft Teams", "ClickUp", "Asana", "Notion", "Helpdesks"] },
    ],
    controls: [
      "Human approval for sensitive replies, refunds, pricing, legal, financial, or policy-sensitive decisions.",
      "Audit logs for agent decisions, source context, workflow actions, and staff overrides.",
      "Approved knowledge sources so agents do not invent answers outside the business rules.",
      "Escalation paths when confidence is low, data conflicts, or the request falls outside scope.",
    ],
    rollout: [
      { step: "01", title: "Workflow selection", text: "Choose one repeated workflow with clear volume, ownership, and measurable impact." },
      { step: "02", title: "Agent design", text: "Define inputs, knowledge sources, actions, approval rules, and integration points." },
      { step: "03", title: "Pilot and review", text: "Run the agent with human oversight, inspect exceptions, and tune before expansion." },
      { step: "04", title: "Expand safely", text: "Add more channels, decisions, or automations only after the first workflow proves useful." },
    ],
    budget: {
      title: "Budget depends on workflow complexity, not just model usage.",
      text: "The raw AI cost for written-message workflows is often modest. The real work is designing, integrating, testing, monitoring, and supporting the workflow safely.",
      drivers: ["Message volume", "Number of systems connected", "Approval and escalation rules", "Data sensitivity", "Reporting needs", "Ongoing monitoring"],
    },
    faq: [
      { q: "Can agents take action automatically?", a: "Yes, for well-defined routine work. For sensitive work, we usually start with draft, route, or approve-before-send patterns." },
      { q: "Can this work with our current tools?", a: "Usually. We map your systems first, then decide whether to use APIs, webhooks, automation platforms, databases, or custom connectors." },
      { q: "Will this replace staff?", a: "The best first target is repetitive coordination work. Staff should stay focused on judgment, relationships, exceptions, and business decisions." },
      { q: "How do we know if it is working?", a: "We track workflow volume, response time, manual touches reduced, escalations, cycle time, and outcome quality." },
    ],
    capabilityHrefs: [
      "/capabilities/data-integrations-infrastructure",
      "/capabilities/security-monitoring-ai-safety",
      "/capabilities/operational-intelligence-analytics",
      "/capabilities/training-prompting-ai-mastery",
    ],
  },
  {
    slug: "ai-chat",
    href: "/core-services/ai-chat",
    eyebrow: "AI Chat & Customer Messaging",
    title: "Customer messaging that answers, qualifies, routes, and follows through.",
    description:
      "We build chat and messaging experiences that help customers get approved answers, qualify demand, collect context, create follow-up tasks, and escalate to people cleanly.",
    heroModel: {
      label: "Messaging model",
      steps: [
        { title: "Answer", text: "Respond from approved knowledge, policies, product details, service areas, and business rules." },
        { title: "Qualify", text: "Capture intent, urgency, contact details, fit, location, product need, or support category." },
        { title: "Route", text: "Create CRM records, helpdesk tickets, bookings, quote tasks, and internal notifications." },
        { title: "Handoff", text: "Escalate live or asynchronously with transcript, summary, source, and recommended next step." },
      ],
    },
    operationalReality: {
      title: "A chat widget is not valuable unless it changes what happens after the conversation.",
      description:
        "Buyers expect fast answers, but teams need reliable routing, clean records, and fewer repetitive interruptions.",
      points: [
        { title: "Website visitors leave without answers", text: "Product, pricing, booking, availability, and support questions often arrive outside staff availability." },
        { title: "Support teams repeat themselves", text: "The same questions consume time that should be spent on exceptions and higher-value customer work." },
        { title: "Lead context gets lost", text: "A conversation is only useful if it creates the right CRM record, task, booking, or follow-up." },
        { title: "Bad answers create risk", text: "Messaging needs approved content, escalation rules, and clear limits for uncertain requests." },
      ],
    },
    workflows: [
      {
        title: "Lead qualification",
        trigger: "Visitor asks about service fit, pricing, location, timing, or availability.",
        action: "Chat captures details, checks rules, creates a CRM record, and routes qualified leads.",
        outcome: "More complete lead records and faster follow-up.",
      },
      {
        title: "Support triage",
        trigger: "Customer asks for help, status, troubleshooting, returns, or account guidance.",
        action: "Chat answers approved questions, collects context, opens a ticket, and escalates when needed.",
        outcome: "Lower support load with cleaner handoffs.",
      },
      {
        title: "Booking and scheduling",
        trigger: "Prospect or customer requests a meeting, tour, appointment, service call, or consultation.",
        action: "Chat checks availability rules, routes to calendar, and confirms next steps.",
        outcome: "Less back-and-forth and fewer missed bookings.",
      },
      {
        title: "Product and order guidance",
        trigger: "Buyer needs help comparing products, checking availability, or understanding order status.",
        action: "Chat searches approved product/order context and routes exceptions to staff.",
        outcome: "Faster customer answers without exposing unsupported claims.",
      },
    ],
    systems: [
      { title: "Messaging channels", items: ["Website chat", "SMS", "WhatsApp", "Messenger", "Email follow-up"] },
      { title: "Business systems", items: ["HubSpot", "Shopify", "Calendly", "Zendesk", "Gorgias", "Google Workspace"] },
      { title: "Knowledge sources", items: ["FAQs", "Policy docs", "Product catalogs", "Service areas", "Pricing rules", "Help articles"] },
    ],
    controls: [
      "Approved-response libraries and knowledge boundaries for claims, pricing, policies, and support advice.",
      "Escalation when a customer is frustrated, the request is sensitive, or the answer is uncertain.",
      "Transcript summaries and CRM/ticket notes so staff can continue without asking customers to repeat themselves.",
      "Review loops to improve answers based on real conversations.",
    ],
    rollout: [
      { step: "01", title: "Conversation inventory", text: "Identify the top questions, lead paths, support paths, and escalation scenarios." },
      { step: "02", title: "Knowledge and routing setup", text: "Prepare approved sources, answer boundaries, CRM/ticket fields, and handoff rules." },
      { step: "03", title: "Pilot on a narrow path", text: "Launch for a specific use case such as lead qualification, FAQ support, or booking." },
      { step: "04", title: "Optimize by transcript", text: "Use real conversation logs to refine answers, coverage, routing, and reporting." },
    ],
    budget: {
      title: "Messaging is usually less expensive to run than voice, but integration quality matters.",
      text: "The biggest budget driver is not the message itself. It is how reliably the chat answers, routes, updates systems, and keeps staff in control.",
      drivers: ["Conversation volume", "Knowledge base readiness", "CRM/helpdesk integration", "Human handoff needs", "Number of channels", "Monitoring level"],
    },
    faq: [
      { q: "Can it answer from our own documents?", a: "Yes. We design around approved knowledge sources and set boundaries for what the assistant should not answer." },
      { q: "Can it hand off to a person?", a: "Yes. Handoffs can include transcript, summary, customer details, urgency, and recommended next action." },
      { q: "Is this just a chatbot?", a: "No. The value is the workflow after the message: CRM updates, bookings, tickets, tasks, follow-up, and reporting." },
      { q: "Can it support multiple channels?", a: "Yes, but we usually start with one channel and one workflow before expanding to SMS, WhatsApp, or other messaging paths." },
    ],
    capabilityHrefs: [
      "/capabilities/data-integrations-infrastructure",
      "/capabilities/security-monitoring-ai-safety",
      "/capabilities/training-prompting-ai-mastery",
      "/capabilities/operational-intelligence-analytics",
    ],
  },
  {
    slug: "ai-transformation",
    href: "/core-services/ai-transformation",
    eyebrow: "AI Operations Strategy",
    title: "A practical roadmap for automating the work that actually slows the business down.",
    description:
      "We help teams identify the right workflows, prioritize by value and risk, design safe pilots, and connect AI initiatives to operational KPIs.",
    heroModel: {
      label: "Strategy model",
      steps: [
        { title: "Diagnose", text: "Map operational pain, manual effort, data quality, systems, handoffs, and current constraints." },
        { title: "Prioritize", text: "Rank opportunities by value, feasibility, risk, adoption effort, and speed to a useful pilot." },
        { title: "Design", text: "Define pilot scope, controls, integrations, success metrics, staff roles, and budget drivers." },
        { title: "Sequence", text: "Plan what to deploy first, what to defer, and how to expand after proof." },
      ],
    },
    operationalReality: {
      title: "AI strategy fails when teams start with tools instead of workflows.",
      description:
        "A good roadmap protects the team from scattered experiments and helps leaders approve a focused first step.",
      points: [
        { title: "Too many possible AI projects", text: "Teams need a practical way to choose what should happen first and what should wait." },
        { title: "Spend needs a clear reason", text: "Many SMB teams are careful with every new expense, so the first milestone should be narrow, measurable, and low-risk." },
        { title: "Adoption can block value", text: "If staff do not trust or understand the workflow, even good technology will underperform." },
        { title: "Risk varies by workflow", text: "A marketing draft, customer support reply, invoice action, or child-safety handoff should not use the same control model." },
      ],
    },
    workflows: [
      {
        title: "Workflow assessment",
        trigger: "Leadership wants to use AI but is unsure where it will pay off.",
        action: "Map repetitive work, systems, data, risk, volume, team readiness, and cost drivers.",
        outcome: "A ranked shortlist of workflows worth piloting.",
      },
      {
        title: "Pilot design",
        trigger: "A workflow looks valuable but needs a safe first milestone.",
        action: "Define scope, success metrics, handoffs, budget range, implementation path, and review cadence.",
        outcome: "A pilot that can be approved without pretending every problem is solved at once.",
      },
      {
        title: "AI maturity planning",
        trigger: "The team has isolated automations but no connected operating model.",
        action: "Assess manual, digitized, automated, and AI-native capabilities across key workflows.",
        outcome: "A practical path from quick wins to connected AI operations.",
      },
      {
        title: "Value realization",
        trigger: "Executives need proof that AI work connects to business outcomes.",
        action: "Define KPIs such as response time, cycle time, cost per request, conversion, admin hours, and escalations.",
        outcome: "A 30/60/90-day value review model for ongoing decisions.",
      },
    ],
    systems: [
      { title: "Business inputs", items: ["Current workflows", "SOPs", "Call/email volume", "Team roles", "Customer journeys", "Manual tasks"] },
      { title: "Technology inputs", items: ["CRM", "Calendar", "Email", "Documents", "ERP", "Databases"] },
      { title: "Decision outputs", items: ["Roadmap", "Pilot scope", "Risk model", "Budget range", "KPI plan", "Adoption plan"] },
    ],
    controls: [
      "Automation boundaries are defined before build, especially for safety, finance, policy, legal, or customer-impacting work.",
      "Pilot scope is constrained so the team can prove value before committing to a larger program.",
      "Staff adoption and training are included in the plan, not treated as an afterthought.",
      "Budget ranges are tied to volume, integrations, workflow risk, monitoring, and support expectations.",
    ],
    rollout: [
      { step: "01", title: "Executive discovery", text: "Clarify goals, constraints, spend comfort, current systems, and top operational bottlenecks." },
      { step: "02", title: "Workflow and systems map", text: "Document the work, handoffs, data sources, exceptions, and human decision points." },
      { step: "03", title: "Prioritized roadmap", text: "Rank opportunities and recommend the first paid blueprint, pilot, or build sprint." },
      { step: "04", title: "Value review path", text: "Define how the first 30, 60, and 90 days will be measured." },
    ],
    budget: {
      title: "Strategy should make spend easier to approve.",
      text: "The goal is not to sell a giant transformation by default. The goal is to identify the first workflow where cost, risk, and measurable value make sense.",
      drivers: ["Discovery depth", "Number of workflows reviewed", "Systems involved", "Risk and compliance needs", "Pilot design detail", "Stakeholder workshops"],
    },
    faq: [
      { q: "Is this a free audit?", a: "The first assessment is free and directional. A deeper paid blueprint or pilot comes next when the opportunity is worth scoping properly." },
      { q: "What if we are not ready for AI?", a: "That is useful to know. We may recommend cleanup, simpler automation, better data structure, or a smaller pilot before a full AI build." },
      { q: "Will the roadmap include budget?", a: "Yes. We explain practical budget drivers and recommend a staged path instead of hiding costs until the end." },
      { q: "How strategic is this compared with implementation?", a: "It is strategy tied to build decisions. The output should make implementation easier, safer, and more measurable." },
    ],
    capabilityHrefs: [
      "/capabilities/technology-strategy-ai-enablement",
      "/capabilities/operational-intelligence-analytics",
      "/capabilities/security-monitoring-ai-safety",
      "/capabilities/training-prompting-ai-mastery",
    ],
  },
  {
    slug: "marketing-automation",
    href: "/core-services/marketing-automation",
    eyebrow: "Marketing Automation & Content Agents",
    title: "Content and follow-up systems that help small teams publish, nurture, and measure more consistently.",
    description:
      "We build marketing workflows for content drafting, approvals, scheduling, lead nurture, campaign follow-up, CRM segmentation, and reporting with humans controlling brand and final decisions.",
    heroModel: {
      label: "Marketing operating model",
      steps: [
        { title: "Plan", text: "Turn offers, audiences, topics, and campaign goals into a structured content and follow-up plan." },
        { title: "Draft", text: "Generate first drafts, variations, summaries, emails, posts, and repurposed content from approved inputs." },
        { title: "Approve", text: "Route work through brand, compliance, owner, or sales review before anything important goes live." },
        { title: "Measure", text: "Track output, engagement, lead movement, follow-up, and campaign performance." },
      ],
    },
    operationalReality: {
      title: "Marketing bottlenecks are often workflow bottlenecks, not idea bottlenecks.",
      description:
        "Small teams know they should publish and follow up more consistently. The hard part is turning ideas into approved output without overwhelming staff.",
      points: [
        { title: "Content stalls before publishing", text: "Ideas, drafts, edits, approvals, captions, images, and scheduling are split across too many manual steps." },
        { title: "Follow-up is inconsistent", text: "Leads, inquiries, abandoned carts, old customers, and event contacts often need structured nurture." },
        { title: "Brand control matters", text: "AI can speed up drafts, but people should control voice, claims, offers, and final approval." },
        { title: "Reporting is disconnected", text: "Teams need to know what was created, what shipped, and what moved leads or customers forward." },
      ],
    },
    workflows: [
      {
        title: "Social content workflow",
        trigger: "Team needs recurring posts, captions, repurposed ideas, or campaign content.",
        action: "Agent drafts content from approved topics, routes for review, schedules approved posts, and logs output.",
        outcome: "More consistent publishing with brand control.",
      },
      {
        title: "Lead nurture and follow-up",
        trigger: "A lead submits a form, attends an event, requests info, or goes inactive.",
        action: "Workflow segments the contact, drafts or sends approved follow-up, creates CRM tasks, and tracks outcomes.",
        outcome: "Less manual follow-up and fewer cold leads lost.",
      },
      {
        title: "Campaign production support",
        trigger: "A promotion, launch, seasonal campaign, or event needs coordinated assets.",
        action: "Agent creates briefs, draft copy, email variations, landing-page sections, and approval tasks.",
        outcome: "Faster campaign assembly without bypassing review.",
      },
      {
        title: "Marketing reporting",
        trigger: "Leadership wants to understand output, engagement, lead movement, or content performance.",
        action: "Workflow pulls metrics, summarizes trends, and prepares a review for the team.",
        outcome: "Cleaner marketing visibility and better prioritization.",
      },
    ],
    systems: [
      { title: "Publishing and campaigns", items: ["Meta", "LinkedIn", "Mailchimp", "HubSpot", "GoHighLevel", "Buffer"] },
      { title: "Content sources", items: ["Brand guide", "Offers", "Past posts", "Blogs", "FAQs", "Sales notes"] },
      { title: "Review and reporting", items: ["Google Drive", "Notion", "Airtable", "Slack", "Analytics", "CRM dashboards"] },
    ],
    controls: [
      "Human approval before publishing public content or sending sensitive campaign messages.",
      "Brand voice, claims, compliance, offer, and audience rules defined before generation.",
      "Audit trail for drafts, approvals, scheduled content, and campaign actions.",
      "Reporting loops so output is connected to engagement, leads, and revenue signals.",
    ],
    rollout: [
      { step: "01", title: "Content and campaign audit", text: "Review current channels, offers, bottlenecks, approvals, and reporting gaps." },
      { step: "02", title: "Workflow design", text: "Define prompts, source material, approval queues, schedules, CRM triggers, and reporting." },
      { step: "03", title: "Pilot one content lane", text: "Start with one recurring content or nurture workflow before expanding." },
      { step: "04", title: "Scale with controls", text: "Add more channels, templates, campaigns, and reporting once quality is stable." },
    ],
    budget: {
      title: "Marketing automation cost depends on output volume and review complexity.",
      text: "A simple drafting workflow is very different from a connected campaign system with CRM segmentation, approvals, scheduling, and reporting.",
      drivers: ["Content volume", "Number of channels", "Approval complexity", "CRM segmentation", "Scheduling tools", "Reporting depth"],
    },
    faq: [
      { q: "Will AI publish directly?", a: "It can, but we usually recommend human approval for public content until the brand rules and workflow are proven." },
      { q: "Can it use our existing brand voice?", a: "Yes. We build from approved examples, brand guidance, offers, audience notes, and review feedback." },
      { q: "Can it help with social media?", a: "Yes. It can draft posts, repurpose content, prepare calendars, route approvals, and support scheduling." },
      { q: "Can it connect to sales follow-up?", a: "Yes. Marketing workflows can create CRM tasks, segment contacts, draft email follow-up, and report on lead movement." },
    ],
    capabilityHrefs: [
      "/capabilities/training-prompting-ai-mastery",
      "/capabilities/data-integrations-infrastructure",
      "/capabilities/operational-intelligence-analytics",
      "/capabilities/security-monitoring-ai-safety",
    ],
  },
  {
    slug: "managed-ai-operations",
    href: "/core-services/managed-ai-operations",
    eyebrow: "Managed AI Operations",
    title: "Keep AI systems monitored, tuned, governed, and improving after launch.",
    description:
      "We support deployed AI agents and automations with monitoring, prompt and workflow tuning, issue response, KPI reporting, governance reviews, and continuous improvement.",
    heroModel: {
      label: "Operate model",
      steps: [
        { title: "Monitor", text: "Watch usage, failures, escalations, outcomes, integration health, and unusual patterns." },
        { title: "Tune", text: "Improve prompts, rules, knowledge sources, handoffs, and workflow steps as real usage changes." },
        { title: "Govern", text: "Review sensitive workflows, audit logs, permissions, approval rules, and risk boundaries." },
        { title: "Improve", text: "Use KPI reviews to decide what to fix, expand, pause, or automate next." },
      ],
    },
    operationalReality: {
      title: "AI systems are not one-and-done software installs.",
      description:
        "Models, prompts, tools, business rules, staff habits, and customer behavior change. Managed operations reduces the anxiety of maintaining AI long term.",
      points: [
        { title: "Workflows drift", text: "Policies change, staff learn new habits, data sources move, and edge cases appear after launch." },
        { title: "Integrations need care", text: "APIs, calendars, CRMs, forms, webhooks, and permissions can change or fail." },
        { title: "Leaders need visibility", text: "Automation should report volume, outcomes, cost, escalations, and value, not disappear into a black box." },
        { title: "Risk needs ownership", text: "Sensitive workflows need review, audit trails, guardrails, and clear escalation responsibility." },
      ],
    },
    workflows: [
      {
        title: "Model and prompt review",
        trigger: "Conversation quality, draft quality, or routing accuracy changes over time.",
        action: "Review examples, adjust instructions, update knowledge, and test important workflows.",
        outcome: "Better reliability and fewer avoidable escalations.",
      },
      {
        title: "Integration health monitoring",
        trigger: "CRM, calendar, email, database, or notification workflow fails or changes.",
        action: "Monitor errors, retry where appropriate, investigate failures, and update connections.",
        outcome: "Less silent workflow breakage.",
      },
      {
        title: "Governance and risk review",
        trigger: "A workflow touches sensitive customer, financial, health, policy, or safety-related actions.",
        action: "Review logs, human approval rules, escalation outcomes, and boundary violations.",
        outcome: "More confidence that AI is operating within approved limits.",
      },
      {
        title: "Value realization review",
        trigger: "Leadership wants to know whether the system is paying off.",
        action: "Summarize volume, hours saved, response time, cost per request, escalations, and next opportunities.",
        outcome: "Ongoing spend is tied to operating results.",
      },
    ],
    systems: [
      { title: "Operational signals", items: ["Usage", "Errors", "Escalations", "Response times", "Completion rates", "Costs"] },
      { title: "Governance artifacts", items: ["Audit logs", "Approval rules", "Risk reviews", "Test cases", "Incident notes", "Access rules"] },
      { title: "Improvement inputs", items: ["Transcripts", "Tickets", "Staff feedback", "KPI dashboards", "Failed actions", "Customer feedback"] },
    ],
    controls: [
      "Regular review of prompts, model behavior, knowledge sources, escalation rules, and workflow outcomes.",
      "Issue response for failed integrations, unexpected behavior, broken automations, and support requests.",
      "KPI reporting that connects managed operations to response time, cycle time, cost, workload, and conversion.",
      "Governance reviews for sensitive workflows and human-in-the-loop requirements.",
    ],
    rollout: [
      { step: "01", title: "Operational baseline", text: "Define what needs monitoring, who owns issues, and which metrics matter." },
      { step: "02", title: "Monitoring setup", text: "Track workflows, errors, escalations, usage, costs, and important business outcomes." },
      { step: "03", title: "Review cadence", text: "Run recurring quality, risk, and value reviews with clear action items." },
      { step: "04", title: "Continuous improvement", text: "Tune, fix, expand, or pause workflows based on real evidence." },
    ],
    budget: {
      title: "Managed operations is the reliability layer.",
      text: "Pricing depends on how many workflows are live, how critical they are, how much monitoring is needed, and how often the system needs improvement.",
      drivers: ["Number of live workflows", "Business criticality", "Support response expectations", "Reporting cadence", "Governance needs", "Integration complexity"],
    },
    faq: [
      { q: "Why do we need managed operations?", a: "Because AI workflows touch real business systems. They need monitoring, tuning, issue response, and governance after launch." },
      { q: "Is this required for every project?", a: "Not always at the same level. Higher-volume, customer-facing, or sensitive workflows usually need a stronger support model." },
      { q: "What gets reported?", a: "Common reports include usage, outcomes, escalations, failures, response time, cost drivers, quality issues, and next improvements." },
      { q: "Can you take over systems you did not build?", a: "Sometimes. We would start with a technical and workflow review before committing to operational responsibility." },
    ],
    capabilityHrefs: [
      "/capabilities/security-monitoring-ai-safety",
      "/capabilities/operational-intelligence-analytics",
      "/capabilities/data-integrations-infrastructure",
      "/capabilities/training-prompting-ai-mastery",
    ],
  },
  {
    slug: "custom-ai-software",
    href: "/core-services/custom-ai-software",
    eyebrow: "Custom AI Software",
    title: "Purpose-built AI software when off-the-shelf tools do not fit the workflow.",
    description:
      "We design and build internal tools, portals, dashboards, agent control surfaces, workflow apps, and AI-enabled software around the way your business actually operates.",
    heroModel: {
      label: "Custom build model",
      steps: [
        { title: "Define", text: "Clarify the workflow, users, systems, data, permissions, success metrics, and support expectations." },
        { title: "Prototype", text: "Create the smallest useful interface or workflow layer that proves the system direction." },
        { title: "Build", text: "Implement the application, integrations, AI features, dashboards, approvals, and audit paths." },
        { title: "Operate", text: "Monitor usage, support staff, tune workflows, and decide what to expand after launch." },
      ],
    },
    operationalReality: {
      title: "Some automation work needs a real product surface.",
      description:
        "When the workflow spans people, AI, data, systems, and approvals, a custom interface can be cleaner than forcing the team through a stack of disconnected tools.",
      points: [
        { title: "Off-the-shelf tools do not match the process", text: "Teams often work around software because the exact workflow, approval model, or data view does not exist." },
        { title: "AI needs an operating surface", text: "Staff may need to review summaries, approve actions, edit rules, inspect logs, and manage exceptions." },
        { title: "Data is spread across systems", text: "Useful software often needs to pull together CRM, calendars, documents, email, databases, forms, and reporting." },
        { title: "Custom builds need discipline", text: "A build should start with workflow architecture, scope control, security, and a realistic support plan." },
      ],
    },
    workflows: [
      {
        title: "Internal operations console",
        trigger: "Staff need one place to review AI outputs, exceptions, tasks, statuses, and customer context.",
        action: "Build a focused interface connected to the systems and workflows that matter.",
        outcome: "Less switching between tools and clearer operational control.",
      },
      {
        title: "Agent control surface",
        trigger: "A business needs to manage approved answers, escalation rules, logs, and workflow settings.",
        action: "Build controls for prompt settings, knowledge updates, review queues, and audit visibility.",
        outcome: "AI systems become easier to manage after launch.",
      },
      {
        title: "Client or staff portal",
        trigger: "Customers, partners, or staff need a tailored place to submit, review, approve, or track work.",
        action: "Build a portal with roles, permissions, forms, status views, notifications, and AI support where useful.",
        outcome: "Cleaner experiences than spreadsheets, email threads, or generic tools can provide.",
      },
      {
        title: "AI-enabled dashboard",
        trigger: "Leaders need summarized operational data and recommended next actions.",
        action: "Connect data sources, summarize patterns, surface risks, and track workflow KPIs.",
        outcome: "Better decisions from the systems already running the business.",
      },
    ],
    systems: [
      { title: "Application layer", items: ["Portals", "Dashboards", "Admin consoles", "Review queues", "Agent settings", "Workflow apps"] },
      { title: "Data and integrations", items: ["CRM", "Calendar", "Documents", "Databases", "APIs", "Spreadsheets"] },
      { title: "AI features", items: ["Summaries", "Classification", "Drafting", "Search", "Recommendations", "Workflow triggers"] },
    ],
    controls: [
      "Role-based permissions for staff, admins, customers, partners, or reviewers.",
      "Human approval for actions that affect customers, money, safety, compliance, or business commitments.",
      "Audit logs for AI outputs, staff edits, workflow actions, and integration events.",
      "Support and maintenance plan so the software does not become an unsupported one-off build.",
    ],
    rollout: [
      { step: "01", title: "Workflow architecture", text: "Define users, jobs to be done, system boundaries, data movement, and decision points." },
      { step: "02", title: "Prototype", text: "Build a narrow version that proves the interface and workflow before full production." },
      { step: "03", title: "Production build", text: "Add integrations, permissions, AI capabilities, monitoring, and operational controls." },
      { step: "04", title: "Support and expand", text: "Monitor usage, fix issues, train staff, and expand based on measured value." },
    ],
    budget: {
      title: "Custom software should be scoped around the first valuable workflow.",
      text: "A custom AI tool can be a focused internal console or a larger portal. The right starting point is the smallest system that proves operational value.",
      drivers: ["Interface complexity", "User roles and permissions", "Number of integrations", "AI features", "Security requirements", "Support expectations"],
    },
    faq: [
      { q: "When is custom software better than an automation platform?", a: "When the workflow needs a dedicated interface, multiple user roles, custom approvals, complex data views, or long-term operational ownership." },
      { q: "Can you connect to our existing systems?", a: "Yes. We start by mapping systems, APIs, data ownership, and failure cases before choosing the architecture." },
      { q: "Do you build from scratch every time?", a: "No. We reuse proven patterns where appropriate, but tailor the workflow, integrations, and interface to the business." },
      { q: "How do we avoid an expensive overbuild?", a: "Start with a narrow prototype or pilot, measure value, then expand only where the workflow proves useful." },
    ],
    capabilityHrefs: [
      "/capabilities/custom-software-ai-solutions",
      "/capabilities/data-integrations-infrastructure",
      "/capabilities/security-monitoring-ai-safety",
      "/capabilities/operational-intelligence-analytics",
    ],
  },
];

export function servicePageBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
