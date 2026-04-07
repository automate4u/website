import React from "react";
import Link from "next/link";

export default function AIChatPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 bg-[#051C2C] text-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Chatbots</h1>
                    <p className="text-lg text-white/80 max-w-2xl">
                        From customer inquiries to email follow-ups, our chatbots can perform tedious tasks for you.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-ink">
                    <h2 className="text-3xl font-bold mb-8">Intelligent Omni-channel Support</h2>
                    <p className="text-lg mb-6 leading-relaxed">
                        We deploy advanced, context-aware AI text agents across your website, SMS, and email. By training these chatbots on your specific business data, they become virtual experts on your brand, handling complex inquiries and seamlessly routing to human agents when required.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg mb-12">
                        <li>Instant response times for high customer satisfaction.</li>
                        <li>Custom-trained on your internal documents and FAQs.</li>
                        <li>Automated lead qualification and data collection.</li>
                        <li>Seamless handoff to human representatives.</li>
                    </ul>

                    <Link href="/contact" className="inline-block bg-accent px-8 py-4 text-white font-bold rounded-full hover:bg-[#189171] transition-colors">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
