import Image from "next/image";
import Link from "next/link";

const capabilities = [
    {
        name: "AI Voice & Chat Experiences",
        description: "Conversational AI that handles calls, chats, and real tasks—not just FAQs. 24/7 coverage with seamless human handoff.",
        href: "/capabilities/ai-voice-chat-experiences",
        image: "/images/capabilities/aivoicechat.jpg",
    },
    {
        name: "AI Agents & Workflow Automation",
        description: "Turn repetitive work into automated workflows. AI agents that work behind the scenes across your tools and systems.",
        href: "/capabilities/ai-agents-workflow-automation",
        image: "/images/capabilities/ai_agents.jpg", // Best match
    },
    {
        name: "Custom Software & AI Solutions",
        description: "Purpose-built applications and AI tools when off-the-shelf solutions don't fit. Tailored to your exact workflow.",
        href: "/capabilities/custom-software-ai-solutions",
        image: "/images/capabilities/custom_software.jpg", // Best match
    },
    {
        name: "Data Integrations & Infrastructure",
        description: "Connect your systems, sync data in real-time, and build the infrastructure that makes automation possible.",
        href: "/capabilities/data-integrations-infrastructure",
        image: "/images/capabilities/database.jpg",
    },
    {
        name: "Operational Intelligence & Analytics",
        description: "Turn data into decisions. Dashboards, reports, and AI-powered insights that show what's working and what's not.",
        href: "/capabilities/operational-intelligence-analytics",
        image: "/images/capabilities/operational_intelligence.jpg",
    },
    {
        name: "Security, Monitoring & AI Safety",
        description: "Keep your systems secure and compliant. Monitoring, guardrails, and safety controls for AI and automation.",
        href: "/capabilities/security-monitoring-ai-safety",
        image: "/images/capabilities/security_monitoring.jpg",
    },
    {
        name: "Technology Strategy & AI Enablement",
        description: "Plan your AI transformation. We help you identify opportunities, prioritize projects, and build a roadmap.",
        href: "/capabilities/technology-strategy-ai-enablement",
        image: "/images/capabilities/tech_strategy.jpg", // Best match
    },
    {
        name: "Training, Prompting & AI Mastery",
        description: "Empower your team to use AI effectively. Workshops, prompt engineering, and hands-on training programs.",
        href: "/capabilities/training-prompting-ai-mastery",
        image: "/images/capabilities/training.jpg",
    },
];

export default function CapabilitiesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 px-6 text-center max-w-[1200px] mx-auto">
                <span className="inline-block py-1.5 px-3 rounded-full bg-[#e9f9f3] text-[#169b78] font-bold text-xs tracking-wider uppercase mb-3">
                    Our Capabilities
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f1720] mb-4 tracking-tight">
                    How we help you automate and scale
                </h1>
                <p className="text-[#6b7b8d] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                    From AI agents that handle customer conversations to custom software
                    that solves unique problems, we build solutions that eliminate manual
                    work and help your team focus on what matters. Each capability is
                    designed to integrate with your existing systems and deliver measurable
                    results.
                </p>
            </section>

            {/* Grid Section */}
            <section className="pb-24 px-6 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((cap) => (
                        <Link
                            key={cap.href}
                            href={cap.href}
                            className="group flex flex-col bg-white border border-[#E7EDF2] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#1db993] hover:-translate-y-1 transition-all duration-300 h-full"
                        >
                            <div className="relative w-full aspect-[16/9] bg-[#f5f7fa] overflow-hidden shrink-0">
                                <Image
                                    src={cap.image}
                                    alt={cap.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-semibold text-[#0f1720] mb-3">
                                    {cap.name}
                                </h3>
                                <p className="text-[#6b7b8d] text-sm leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
