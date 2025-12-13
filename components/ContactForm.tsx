"use client";

import { useState } from "react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // If we want to intercept the submission, we can doing it here.
        // The original form posted directly to Formspree. 
        // We can simulate the spinner by setting state, but the page will navigate/reload on standard post unless we use AJAX.
        // The original script just disabled the button and showed spinner.
        // We'll let the form submit normally but show spinner.
        setIsSubmitting(true);
    };

    return (
        <section id="contact" className="py-12 px-4 bg-white text-ink text-left" aria-labelledby="qual-title">
            <div className="max-w-[1280px] mx-auto">
                <h2 id="qual-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] font-bold my-4 text-balance">
                    Get a free consultation
                </h2>
                <p className="text-muted text-base mb-8 max-w-[70ch]">
                    Tell us about your goals. We’ll get back to you within one business day to schedule a call.
                </p>

                <form
                    className="max-w-[960px] mt-3.5 text-left grid gap-3 md:grid-cols-2 md:gap-3.5"
                    action="https://formspree.io/f/mldplnaa"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <label className="grid gap-1.5">
                        <span className="font-semibold text-sm">Work email</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@company.com"
                            autoComplete="email"
                            className="w-full p-3 rounded-xl border border-card-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                    </label>

                    <label className="grid gap-1.5">
                        <span className="font-semibold text-sm">Company</span>
                        <input
                            type="text"
                            name="company"
                            required
                            placeholder="Company Inc."
                            className="w-full p-3 rounded-xl border border-card-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                    </label>

                    <label className="grid gap-1.5">
                        <span className="font-semibold text-sm">Primary goal</span>
                        <select
                            name="goal"
                            required
                            defaultValue=""
                            className="w-full p-3 rounded-xl border border-card-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat"
                        >
                            <option value="" disabled>Select an interest</option>
                            <option>AI Voice Agents</option>
                            <option>AI Chatbots</option>
                            <option>Workflow Automations</option>
                            <option>AI Enablement / Transformation</option>
                            <option>Not sure yet</option>
                        </select>
                    </label>

                    <label className="grid gap-1.5">
                        <span className="font-semibold text-sm">Timeline</span>
                        <select
                            name="timeline"
                            required
                            defaultValue=""
                            className="w-full p-3 rounded-xl border border-card-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat"
                        >
                            <option value="" disabled>Select a timeline</option>
                            <option>ASAP (this month)</option>
                            <option>1–2 months</option>
                            <option>This quarter</option>
                            <option>Just exploring</option>
                        </select>
                    </label>

                    <label className="grid gap-1.5 md:col-span-2">
                        <span className="font-semibold text-sm">What are you hoping to automate or improve?</span>
                        <textarea
                            name="goals"
                            rows={4}
                            placeholder="e.g., Reduce manual data entry, improve customer response time, automate invoicing..."
                            className="w-full p-3 rounded-xl border border-card-border bg-white text-ink focus:outline-none focus:ring-2 focus:ring-accent/50 resize-y"
                        ></textarea>
                    </label>

                    <div className="mt-3 md:col-span-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-extrabold text-white bg-accent shadow-[0_8px_24px_rgba(29,185,147,0.22)] hover:bg-[#169b78] disabled:opacity-75 disabled:cursor-not-allowed transition-all"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 50 50" aria-hidden="true">
                                        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="currentColor" strokeDasharray="90, 150" strokeDashoffset="-35"></circle>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4.5 h-4.5 fill-current">
                                        <path d="M8 7V3h2v4H8Zm4 0V3h2v4h-2Zm4 0V3h2v4h-2ZM4 21V9h16v12H4Zm2-2h12V11H6v8Z" />
                                    </svg>
                                    Request Consultation
                                </>
                            )}
                        </button>
                    </div>

                    <p className="md:col-span-2 mt-1 text-muted text-sm">
                        We respect your privacy. We never sell data.
                    </p>
                </form>
            </div>
        </section>
    );
}
