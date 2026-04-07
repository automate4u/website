import React from "react";
import Link from "next/link";

export default function AITransformationPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 bg-[#051C2C] text-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Enablement & Workflow Automations</h1>
                    <p className="text-lg text-white/80 max-w-2xl">
                        Thorough audit of your current tech stack and workflows to find efficiency & automation opportunities.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-ink">
                    <h2 className="text-3xl font-bold mb-8">Transform Your Operations</h2>
                    <p className="text-lg mb-6 leading-relaxed">
                        In today's fast-paced environment, static processes are no longer sufficient. Our AI Enablement strategy goes beyond simple automation—we restructure how your business functions from the ground up, utilizing cutting-edge AI tools to dramatically reduce operational overhead.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg mb-12">
                        <li>Comprehensive workflow and tech stack audits.</li>
                        <li>Identification of bottlenecks and inefficiencies.</li>
                        <li>Custom integration of AI tools for data processing and analysis.</li>
                        <li>Continuous optimization and support.</li>
                    </ul>

                    <Link href="/contact" className="inline-block bg-accent px-8 py-4 text-white font-bold rounded-full hover:bg-[#189171] transition-colors">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
