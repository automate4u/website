import AssessmentLeadForm from "@/components/AssessmentLeadForm";

type ContactFormProps = {
    sourcePage?: string;
    ctaLocation?: string;
};

export default function ContactForm({
    sourcePage = "/",
    ctaLocation = "homepage_contact_section",
}: ContactFormProps) {
    return (
        <section id="contact" className="py-12 px-4 bg-white text-ink text-left" aria-labelledby="qual-title">
            <div className="max-w-[960px] mx-auto">
                <h2 id="qual-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] font-bold mb-4 text-balance">
                    Find the first workflow worth automating.
                </h2>
                <p className="text-muted text-base mb-8 max-w-[70ch]">
                    Tell us where calls, emails, admin, or disconnected tools are slowing your team down. We&apos;ll review the workflow and recommend a practical first step.
                </p>
                <div className="mb-6 grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-5 text-sm leading-6 text-muted md:grid-cols-3">
                    <p><strong className="block text-ink">1. We review the workflow</strong>Where time, follow-up, handoffs, or system gaps are costing attention.</p>
                    <p><strong className="block text-ink">2. We identify the safest first step</strong>A narrow workflow, required guardrails, and likely systems involved.</p>
                    <p><strong className="block text-ink">3. You decide what comes next</strong>A paid blueprint, a pilot, or no project if the fit is not strong enough.</p>
                </div>

                <AssessmentLeadForm
                    sourcePage={sourcePage}
                    ctaLocation={ctaLocation}
                    submitLabel="Request My Assessment"
                />

                <p className="mt-4 text-muted text-sm">
                    We respect your privacy. We never sell data.
                </p>
            </div>
        </section>
    );
}
