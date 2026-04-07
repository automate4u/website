import React from "react";
import Link from "next/link";

export default function AIVoicePage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20 bg-[#051C2C] text-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Voice Agents</h1>
                    <p className="text-lg text-white/80 max-w-2xl">
                        Answer calls, schedule bookings, and handle FAQs without human effort.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-ink">
                    <h2 className="text-3xl font-bold mb-8">Never Miss a Lead Again</h2>
                    <p className="text-lg mb-6 leading-relaxed">
                        Our state-of-the-art AI Voice Agents sound indistinguishable from real humans and are capable of managing your entire front-desk operations 24/7. They don't just answer questions—they actively resolve customer problems, take bookings, and dispatch information instantly.
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg mb-12">
                        <li>Round-the-clock availability for incoming calls.</li>
                        <li>Natural, conversational voice routing and interaction.</li>
                        <li>Direct integration with your calendar and CRM systems.</li>
                        <li>Cost reduction by automating repetitive call tasks.</li>
                    </ul>

                    <Link href="/contact" className="inline-block bg-accent px-8 py-4 text-white font-bold rounded-full hover:bg-[#189171] transition-colors">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
