import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            title: "AI Enablement & Workflow Automations",
            description: "Thorough audit of your current tech stack and workflows to find efficiency & automation opportunities.",
            image: "/images/services/automations.jpg",
            link: "/core-services/ai-transformation"
        },
        {
            title: "AI Voice Agents",
            description: "Answer calls, schedule bookings, and handle FAQs without human effort.",
            image: "/images/services/voice_agent.jpg",
            link: "/core-services/ai-voice"
        },
        {
            title: "AI Chatbots",
            description: "From customer inquiries to email follow-ups, our chatbots can perform tedious tasks for you.",
            image: "/images/services/chatbot.jpg",
            link: "/core-services/ai-chat"
        }
    ];

    return (
        <section className="relative py-12 md:py-20 lg:py-24 bg-[#051C2C] text-white relative z-10 overflow-hidden" aria-labelledby="sol-title">
            {/* Background extension */}
            <div className="absolute inset-x-0 -top-8 -bottom-12 bg-[#051C2C] -z-10" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <div className="text-left mb-16">
                    <h2 id="sol-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.15] font-bold text-white mb-4">
                        How Our Services Will Help
                    </h2>
                    <p className="text-base text-white/80 max-w-[600px]">
                        We provide comprehensive AI solutions tailored to your business needs.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
                    {services.map((service, index) => (
                        <Link key={index} href={service.link} className="block h-full group">
                            <article
                                className="flex flex-col h-full rounded-[12px] bg-[#060D12] border border-[rgba(255,255,255,0.28)] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-[14px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] hover:shadow-[0_20px_70px_rgba(15,23,32,0.25)] hover:-translate-y-1"
                            >
                                <div className="h-[180px] md:h-[200px] lg:h-[220px] bg-transparent overflow-hidden rounded-t-[12px] shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={420}
                                        height={260}
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex-1 p-4 flex flex-col justify-start bg-transparent relative z-10">
                                    <h3 className="text-[1.25rem] md:text-[1.35rem] font-bold text-white mb-2 leading-[1.3]">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#cccccc] text-[0.9rem] md:text-[0.95rem] leading-[1.5] m-0">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
