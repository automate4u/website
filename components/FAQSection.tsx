import React from 'react';

export default function FAQSection() {
    return (
        <section className="py-10 md:py-14 lg:py-[56px] bg-white text-ink" aria-labelledby="fq-title">
            <div className="max-w-[1280px] mx-auto px-[18px] text-center">

                <p className="inline-block px-2.5 py-1.5 rounded-full bg-[#e9f9f3] text-[#169b78] font-bold text-[0.72rem] tracking-wider uppercase mb-2.5">
                    FAQ
                </p>
                <h2 id="fq-title" className="text-[28px] md:text-[44px] lg:text-[50px] leading-[1.15] font-extrabold tracking-[-0.02em] mb-1.5 md:mb-6">
                    Key Information for Informed Decision Making
                </h2>
                <br className="hidden md:block" />

                <div className="max-w-[960px] mx-auto grid gap-3 text-left">

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            What types of tasks can you automate?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>We offer many different AI services and integrations to handle repetitive, manual work across admin, finance, HR, operations, and customer support — things like approvals, reporting, scheduling, ordering, note-taking, and data entry.</p>
                        </div>
                    </details>

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            Do I need to change the tools I already use?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>Not at all. We integrate directly with your existing systems so you don’t have to switch platforms.</p>
                        </div>
                    </details>

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            How fast can I expect results?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>Most automations go live in under 3 weeks, delivering measurable time savings from day one.</p>
                        </div>
                    </details>

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            What about data security and compliance?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>We use best-in-class, compliant solutions. Your data is encrypted, protected, and never shared without your approval.</p>
                        </div>
                    </details>

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            How much does it cost?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>Our pricing is flexible and transparent. Unlike large consulting firms, we keep costs fair so you can scale automation without breaking your budget.</p>
                        </div>
                    </details>

                    <details className="group border border-[#E7EDF2] rounded-[20px] bg-white overflow-hidden">
                        <summary className="list-none flex items-center justify-between gap-3 p-4 md:p-[22px] cursor-pointer font-semibold text-ink [&::-webkit-details-marker]:hidden">
                            What if I don’t see my exact use case listed?
                            <span className="flex-none flex items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:hidden">+</span>
                            <span className="flex-none hidden items-center justify-center w-7 h-7 border border-[#E7EDF2] rounded-full text-[#0f1720b3] font-bold group-open:flex">–</span>
                        </summary>
                        <div className="p-4 md:p-[22px] pt-3 text-[#6b7b8d] border-t border-[#E7EDF2]">
                            <p>That’s where we shine — we have connections with many industry experts to stay on top of new tools, and if the right solution doesn’t exist, we’ll build it for you.</p>
                        </div>
                    </details>

                </div>
            </div>
        </section>
    );
}
