export default function Testimonials() {
    return (
        <section className="py-10 md:py-16 bg-white text-ink" aria-labelledby="tst-title">
            <div className="max-w-[1280px] mx-auto px-4 text-left">
                <h2 id="tst-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.1] font-bold my-4 tracking-[-0.02em]">
                    Hear it from our partners
                </h2>

                <div className="grid gap-4 mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 text-left">

                    {/* Card 1 */}
                    <article className="bg-white border border-card-border rounded-[20px] p-6 shadow-[0_1px_0_#f2f5f8] flex flex-col h-full" aria-label="Testimonial from Maria Rodriguez">
                        <header className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="av1" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#f8b4b4" /><stop offset="100%" stopColor="#d45a5a" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="32" cy="32" r="30" fill="url(#av1)" />
                                    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">MR</text>
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-[1.05rem] font-bold m-0 leading-tight">Maria Rodriguez</h3>
                                <p className="text-sm text-muted m-0">Operations Manager @ Nexus Logistics</p>
                                <div className="flex gap-0.5 mt-1" aria-label="5 out of 5 stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-[#f6b400] fill-current" aria-hidden="true">
                                            <path d="M12 2l3.09 6.3 6.95 1.01-5.02 4.9 1.18 6.87L12 18.77 5.8 21.08l1.18-6.87-5.02-4.9 6.95-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </header>

                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                            &quot;Our operations were a mess of spreadsheets and manual data entry between our ERP and supplier systems. Automate4U built a central dashboard that gives us real-time visibility and automated the entire procurement-to-payment process. We&apos;re catching issues before they happen.&quot;
                        </p>

                        <div className="flex gap-4 pt-4 border-t border-[#f0f4f8]">
                            <div>
                                <div className="text-lg font-extrabold text-accent">90%</div>
                                <div className="text-xs text-muted uppercase tracking-wide font-semibold">Fewer data errors</div>
                            </div>
                            <div>
                                <div className="text-lg font-extrabold text-accent">40h+</div>
                                <div className="text-xs text-muted uppercase tracking-wide font-semibold">Saved per week</div>
                            </div>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="bg-white border border-card-border rounded-[20px] p-6 shadow-[0_1px_0_#f2f5f8] flex flex-col h-full" aria-label="Testimonial from Jessica Miller">
                        <header className="flex items-center gap-3.5 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <svg viewBox="0 0 64 64" aria-hidden="true" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="av2" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#9ecaff" /><stop offset="100%" stopColor="#5a9cff" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="32" cy="32" r="30" fill="url(#av2)" />
                                    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="22" fontWeight="700" fill="#ffffff" fontFamily="sans-serif">JM</text>
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-[1.05rem] font-bold m-0 leading-tight">Jessica Miller</h3>
                                <p className="text-sm text-muted m-0">Head of Support @ Retail Solutions</p>
                                <div className="flex gap-0.5 mt-1" aria-label="5 out of 5 stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-[#f6b400] fill-current" aria-hidden="true">
                                            <path d="M12 2l3.09 6.3 6.95 1.01-5.02 4.9 1.18 6.87L12 18.77 5.8 21.08l1.18-6.87-5.02-4.9 6.95-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </header>

                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                            &quot;We used to spend hours every week sorting through tickets manually. The AI chat implementation handled 60% of common queries instantly. It frees my team to actually solve complex problems.&quot;
                        </p>

                        <div className="flex gap-4 pt-4 border-t border-[#f0f4f8]">
                            <div>
                                <div className="text-lg font-extrabold text-accent">60%</div>
                                <div className="text-xs text-muted uppercase tracking-wide font-semibold">Auto-resolved</div>
                            </div>
                            <div>
                                <div className="text-lg font-extrabold text-accent">24/7</div>
                                <div className="text-xs text-muted uppercase tracking-wide font-semibold">Instant Support</div>
                            </div>
                        </div>
                    </article>

                    {/* Card 3 - Placeholder or remove if not needed. HTML showed 2 cards explicitly but structure for 3. I'll add a 3rd filler or just stick to 2 if user only had 2. HTML had 2 cards. I will keep it to 2 cards to be faithful. */}
                    {/* Actually HTML had only 2 cards. */}

                </div>
            </div>
        </section>
    );
}
