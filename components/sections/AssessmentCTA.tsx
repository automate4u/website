import AssessmentLeadForm from "@/components/AssessmentLeadForm";
import SectionHeader from "@/components/sections/SectionHeader";

type AssessmentCTAProps = {
  sourcePage: string;
  ctaLocation: string;
};

export default function AssessmentCTA({ sourcePage, ctaLocation }: AssessmentCTAProps) {
  return (
    <section id="contact" className="bg-white px-4 py-14 md:py-20" aria-labelledby="assessment-title">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          eyebrow="Free AI Workflow Assessment"
          title="Find the first workflow worth automating."
          description="Tell us where calls, emails, admin, or disconnected tools are slowing your team down. We will recommend a practical first step, not an oversized project by default."
        />
        <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
          <AssessmentLeadForm sourcePage={sourcePage} ctaLocation={ctaLocation} />
          <p className="mt-4 text-sm leading-6 text-muted">
            We respect your privacy. We never sell data. Sensitive workflows should keep human approval until the process is validated.
          </p>
        </div>
      </div>
    </section>
  );
}
