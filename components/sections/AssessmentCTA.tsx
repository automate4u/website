import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";

type AssessmentCTAProps = {
  sourcePage: string;
  ctaLocation: string;
};

export default function AssessmentCTA({ sourcePage, ctaLocation }: AssessmentCTAProps) {
  const assessmentPoints = [
    "A clear first workflow to consider",
    "Likely systems, handoffs, and guardrails",
    "A practical next step: blueprint, pilot, or wait",
  ];

  return (
    <section id="contact" className="bg-white px-4 py-14 md:py-20" aria-labelledby="assessment-title">
      <div className="mx-auto grid max-w-[1180px] gap-8 rounded-lg border border-card-border bg-[#f8fbfa] p-6 shadow-[0_12px_36px_rgba(15,23,32,0.05)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Free AI Workflow Assessment"
            title="Find the first workflow worth automating."
            description="Tell us where calls, emails, admin, or disconnected tools are slowing your team down. We will recommend a practical first step, not an oversized project."
          />
        </div>
        <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] md:p-6">
          <p className="text-sm font-extrabold text-ink">What you get from the assessment</p>
          <div className="mt-4 grid gap-3">
            {assessmentPoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm font-semibold leading-6 text-muted">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1db993]" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            This is a fit and direction conversation. A full audit, blueprint, or pilot can follow only if it makes sense.
          </p>
          <AssessmentTrigger
            sourcePage={sourcePage}
            ctaLocation={ctaLocation}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
          >
            Get Free Assessment
          </AssessmentTrigger>
        </div>
      </div>
    </section>
  );
}
