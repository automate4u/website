import IndustryAcceleratorPage from "@/components/industry/IndustryAcceleratorPage";

export default function TechnologyMediaPage() {
  return (
    <IndustryAcceleratorPage
      eyebrow="Technology & Media"
      title="AI support, content operations, and workflow agents for technology and media teams."
      description="We help software, media, creative, publishing, and digital teams reduce support backlog, organize content operations, route customer requests, and automate reporting without losing editorial or product control."
      primaryCta={{ label: "Explore AI Agents", href: "/core-services/ai-agents" }}
      image={{ src: "/images/industries/tech.jpg", alt: "Technology and media team reviewing support and content workflow" }}
      typicalRequest="Can you summarize the issue, route it to the right team, and draft the customer update?"
      diagnosisTitle="Technology and media teams need automation that organizes high-volume information without flattening judgment."
      frictionAreas={[
        { title: "Requests arrive with messy context", text: "Support issues, customer feedback, content asks, campaign requests, production tasks, and reporting questions often arrive through scattered channels." },
        { title: "Teams spend time translating work", text: "People rewrite notes, summarize threads, tag issues, update tickets, prepare briefs, and move information between tools." },
        { title: "Quality depends on review", text: "Product decisions, customer commitments, brand voice, publishing, and technical accuracy need approval and human ownership." },
      ]}
      workflowTitle="The system should turn messy inputs into clear tickets, briefs, drafts, and handoffs."
      workflowDescription="A useful technology or media agent captures context, classifies the request, checks approved sources, routes work, drafts updates, and keeps review where quality matters."
      workflowPath={[
        { step: "01", title: "Capture the input", text: "AI handles support messages, forms, chat, email, transcripts, content requests, or internal notes and identifies the request type." },
        { step: "02", title: "Apply product or content context", text: "The workflow references approved documentation, knowledge bases, campaign briefs, content calendars, status data, and internal rules." },
        { step: "03", title: "Create the work item", text: "The system creates tickets, briefs, summaries, draft responses, production tasks, customer updates, or reporting events." },
        { step: "04", title: "Route for review", text: "Technical, editorial, customer-sensitive, or brand-sensitive outputs go to the right owner before they are sent or published." },
      ]}
      valueTitle="Start where information handoffs are frequent and quality matters."
      valueDescription="The first useful automation is usually a workflow that saves time on summarizing, routing, drafting, tagging, and reporting while preserving expert review."
      valuePatterns={[
        { label: "Support triage", outcome: "Classify requests, summarize context, tag tickets, draft responses, and route bugs, feature requests, or escalations to the right team." },
        { label: "Content operations", outcome: "Turn briefs, transcripts, product notes, and recurring requests into drafts, outlines, tasks, approvals, and publishing checklists." },
        { label: "Customer and internal reporting", outcome: "Convert support themes, campaign status, product feedback, and workflow events into readable updates and KPI summaries." },
      ]}
      serviceTitle="Connect agents to the systems where product, content, and support work happens."
      serviceDescription="Technology and media automation can start with support, content production, operational reporting, or internal workflow agents."
      servicePaths={[
        { title: "AI Agents for workflow automation", description: "Agents that classify, summarize, route, draft, update tickets, create tasks, and report on workflow status.", href: "/core-services/ai-agents", cta: "Explore AI Agents" },
        { title: "Marketing automation", description: "Content drafting, approval, scheduling, campaign reporting, and social or email production workflows.", href: "/core-services/marketing-automation", cta: "Explore Marketing Automation" },
        { title: "Operational intelligence", description: "Reporting workflows that turn support, content, product, or campaign events into usable management visibility.", href: "/capabilities/operational-intelligence-analytics", cta: "Explore Operational Intelligence" },
      ]}
      sectorTitle="AI is useful when it improves throughput without lowering quality."
      sectorDescription="The right approach is not publishing more noise. It is structured drafting, routing, review, and reporting around real product and content workflows."
      sectorShifts={[
        { title: "Information volume keeps rising", text: "Teams receive more feedback, content requests, support messages, and status questions than they can manually process cleanly." },
        { title: "Speed needs structure", text: "Fast-moving teams need consistent triage, summaries, ownership, and visibility so work does not disappear inside threads." },
        { title: "Review protects trust", text: "Product, editorial, technical, and customer-facing work needs human review where accuracy or brand voice matters." },
      ]}
      systemsTitle="The agent should fit your stack instead of becoming another inbox."
      systemsDescription="The first workflow can connect communication channels to ticketing, docs, content calendars, project management, analytics, and reporting."
      systemGroups={[
        { title: "Input channels", items: ["Email", "Chat", "Forms", "Support inbox", "Transcripts"] },
        { title: "Work systems", items: ["Ticketing", "Docs", "CMS", "Project management", "Content calendar"] },
        { title: "Team workflow", items: ["Draft", "Review queue", "Task", "Customer update", "KPI report"] },
      ]}
      controlsTitle="Keep technical accuracy, editorial quality, and customer commitments under review."
      controlsDescription="Technology and media teams need automation that speeds up preparation without bypassing ownership for sensitive or public work."
      controls={[
        "Technical, legal, public, customer-sensitive, or brand-sensitive outputs can require approval.",
        "Approved sources can limit the agent to trusted docs, product notes, campaign briefs, or internal knowledge bases.",
        "Low-confidence outputs, contradictory sources, and high-impact customer issues can route to humans.",
        "Every generated draft, ticket, handoff, and published action can be logged for review.",
      ]}
      rolloutTitle="Start with one workflow where better routing immediately helps the team."
      rolloutDescription="The first milestone should reduce context-switching, improve visibility, and make review easier before expanding into broader content or product operations."
      rollout={[
        ["Start", "Choose support triage, content request intake, transcript summarization, or campaign status reporting as the first workflow."],
        ["Pilot", "Run real work with review, measure time saved, routing accuracy, draft quality, escalation rate, and team adoption."],
        ["Expand", "Add more sources, approval paths, content types, dashboards, or managed operations once the first workflow is trusted."],
      ]}
      confidenceTitle="Costs should map to workflow volume, review depth, and systems connected."
      confidenceDescription="Technology and media buyers need to see that automation improves throughput without adding quality risk or another tool to manage."
      confidenceNotes={[
        "Start with internal drafts, triage, summaries, or reporting before public publishing automation.",
        "Measure time saved, backlog reduced, routing accuracy, draft acceptance, and reporting visibility.",
        "Keep expert review for customer commitments, public content, technical claims, and brand-sensitive outputs.",
      ]}
      proofStorySlugs={["technology-media-workflow", "marketing-content-operations"]}
      sourcePage="/industries/technology-media"
      ctaLocation="technology_media_assessment"
    />
  );
}
