import React from 'react';
import Image from "next/image";

export default function AIInsights() {
    const insights = [
        {
            title: "Operational Inefficiency",
            description: "Organizations that haven't adopted AI still rely on manual work that others automate. McKinsey research indicates that AI could automate 60-70% of employee tasks, meaning companies without it face rising costs while competitors improve efficiency. Over time, that gap makes it hard to stay profitable.",
            source: "Operational Inefficiency",
            logo: "/images/other-logos/harvard-logo.png", // Mapped from original URL
            gradient: "before:bg-[linear-gradient(135deg,#1db993_0%,#5ee0b7_100%)]",
            gridClass: "col-span-1 row-span-2 self-center",
            width: 120
        },
        {
            title: "Forbes",
            description: "Forbes reports that AI-driven automation can reduce operational costs by up to 30% while improving accuracy and speed, leading to significant competitive advantages for early adopters.",
            source: "Forbes",
            logo: "/images/other-logos/forbes-logo.png",
            gradient: "before:bg-[linear-gradient(135deg,#007bff_0%,#00c6ff_100%)]", // Example gradient
            gridClass: "col-span-1 row-span-1", // Adjusted gridClass for the new item
            width: 100
        },
        {
            title: "The Structural Productivity Gap",
            description: "PwC reports that since 2022, industries adopting AI have increased productivity nearly four times faster than those that have not. Companies delaying adoption face long-term disadvantages and shrinking market share.",
            source: "Structural Productivity Gap",
            logo: "/images/logos/PwC-logo-scaled.png",
            gradient: "before:bg-[linear-gradient(135deg,#709278_0%,#a0c2a8_100%)]",
            gridClass: "col-span-1 row-span-1",
        },
        {
            title: "Customer Service Operations",
            description: "30-45% of current function costs can be addressed through generative AI implementation. Deloitte data shows cybersecurity implementations with 44% reporting ROI exceeded expectations, the highest of any function. Additionally, AI-first customer service breaks the linear growth model, allowing organizations to scale support quality without proportional staff increases.",
            source: "Customer Experience",
            logo: "/images/logos/Deloitte-Logo.jpg",
            gradient: "before:bg-[linear-gradient(135deg,#2f623f_0%,#4f825f_100%)]",
            gridClass: "col-span-1 row-span-1",
        },
        {
            title: "Certain industries lag dangerously behind in adoption",
            description: "Construction, banking, supply chain management, manufacturing, tax preparation, and digital forensics are identified sectors missing AI's power. Within these industries, organizations not implementing AI are particularly vulnerable.",
            source: "Data-Driven Decisions",
            logo: "/images/logos/logo-2.png",
            gradient: "before:bg-[linear-gradient(135deg,#202e23_0%,#404e43_100%)]",
            gridClass: "col-span-1 row-span-2 self-center",
        }
    ];

    return (
        <section className="relative py-8 md:py-10 bg-[#f8fafc] text-ink overflow-hidden" id="ai-insights" aria-labelledby="insights-title">

            <div className="max-w-[1600px] mx-auto px-6 relative z-10 box-border text-left">

                {/* Header - Stacks on top for mobile, moves to side for desktop */}
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 xl:gap-20 items-center">

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 w-full">
                        {insights.map((item, index) => (
                            <article
                                key={index}
                                className={`relative rounded-[10px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(15,23,32,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 text-left p-0 ${item.gridClass} group`}
                            >
                                {/* Colored Top Border */}
                                <div className={`absolute top-0 left-0 right-0 h-[6px] ${item.gradient.replace('before:bg-', 'bg-')}`} />

                                <div className="p-5 pb-[45px] relative">
                                    <h3 className="text-[15px] lg:text-[17px] font-bold text-ink mb-1.5 leading-[1.3]">{item.title}</h3>
                                    <p className="text-[12px] lg:text-[13px] leading-[1.4] text-[#6b7b8d] mb-2">{item.description}</p>

                                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 z-10">
                                        <span className="text-[11px] text-[#6b7b8d] font-medium whitespace-nowrap">Source:</span>
                                        <img
                                            src={item.logo}
                                            alt={item.source}
                                            className="h-auto max-h-[20px] w-auto object-contain"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-[100px] text-center lg:text-left">
                        <h2 id="insights-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.1] font-bold text-ink mb-4 tracking-[-0.02em]">
                            Why AI Adoption is Important
                        </h2>
                        <p className="text-base text-muted leading-relaxed">
                            The imperative for business to implement artificial intelligence into daily operations has moved beyond strategic advantage into operational necessity. Leading consulting firms and research institutions - McKinsey, Deloitte, PwC, KPMG, Harvard Business Review, and government agencies confirm through extensive global research that organizations are experiencing measurable financial returns while companies delaying adoption face mounting competitive disadvantage.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
