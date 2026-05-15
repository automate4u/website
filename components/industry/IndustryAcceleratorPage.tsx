import Image from "next/image";
import Link from "next/link";
import ProofStorySection from "@/components/proof/ProofStorySection";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

type TextBlock = {
  title: string;
  text: string;
};

type WorkflowStep = {
  step: string;
  title: string;
  text: string;
};

type ValuePattern = {
  label: string;
  outcome: string;
};

type ServicePath = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

type SystemGroup = {
  title: string;
  items: string[];
};

type RolloutStep = [string, string];

type IndustryAcceleratorPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  typicalRequest: string;
  diagnosisTitle: string;
  frictionAreas: TextBlock[];
  workflowTitle: string;
  workflowDescription: string;
  workflowPath: WorkflowStep[];
  valueTitle: string;
  valueDescription: string;
  valuePatterns: ValuePattern[];
  serviceTitle: string;
  serviceDescription: string;
  servicePaths: ServicePath[];
  sectorTitle: string;
  sectorDescription: string;
  sectorShifts: TextBlock[];
  systemsTitle: string;
  systemsDescription: string;
  systemGroups: SystemGroup[];
  controlsTitle: string;
  controlsDescription: string;
  controls: string[];
  rolloutTitle: string;
  rolloutDescription: string;
  rollout: RolloutStep[];
  confidenceTitle: string;
  confidenceDescription: string;
  confidenceNotes: string[];
  proofStorySlugs?: string[];
  sourcePage: string;
  ctaLocation: string;
};

export default function IndustryAcceleratorPage({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta = { label: "Get Free Assessment", href: "#contact" },
  image,
  typicalRequest,
  diagnosisTitle,
  frictionAreas,
  workflowTitle,
  workflowDescription,
  workflowPath,
  valueTitle,
  valueDescription,
  valuePatterns,
  serviceTitle,
  serviceDescription,
  servicePaths,
  sectorTitle,
  sectorDescription,
  sectorShifts,
  systemsTitle,
  systemsDescription,
  systemGroups,
  controlsTitle,
  controlsDescription,
  controls,
  rolloutTitle,
  rolloutDescription,
  rollout,
  confidenceTitle,
  confidenceDescription,
  confidenceNotes,
  proofStorySlugs,
  sourcePage,
  ctaLocation,
}: IndustryAcceleratorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="industry-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">
              {eyebrow}
            </p>
            <h1 id="industry-title" className="max-w-[790px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              {title}
            </h1>
            <p className="mt-5 max-w-[700px] text-base leading-8 text-muted md:text-[17px]">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryCta.href} className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                {primaryCta.label}
              </Link>
              <Link href={secondaryCta.href} className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-card-border bg-[#f8fbfa] shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={700}
              priority
              className="aspect-[1.22] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/70 bg-white/94 p-4 shadow-[0_12px_34px_rgba(15,23,32,0.12)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Typical request</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">
                &quot;{typicalRequest}&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="diagnosis-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational diagnosis</p>
            <h2 id="diagnosis-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              {diagnosisTitle}
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {frictionAreas.map((area) => (
              <article key={area.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-28 bg-white px-4 py-14 md:py-20" aria-labelledby="workflow-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow="Connected workflow" title={workflowTitle} description={workflowDescription} />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowPath.map((item) => (
              <article key={item.step} className="relative rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-extrabold tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="value-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#87e6ce]">Where value usually starts</p>
            <h2 id="value-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              {valueTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              {valueDescription}
            </p>
          </div>
          <div className="grid gap-4">
            {valuePatterns.map((pattern) => (
              <article key={pattern.label} className="rounded-lg border border-white/14 bg-white/[0.06] p-5">
                <p className="text-sm font-bold text-[#87e6ce]">{pattern.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/82">{pattern.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow="Relevant service paths" title={serviceTitle} description={serviceDescription} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servicePaths.map((path) => (
              <article key={path.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{path.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{path.description}</p>
                <Link href={path.href} className="mt-6 inline-flex text-sm font-extrabold text-[#167f65]">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {proofStorySlugs?.length ? (
        <ProofStorySection
          storySlugs={proofStorySlugs}
          eyebrow="Workflow examples"
          title="The first win should connect the conversation to a measurable operating outcome."
          description="These examples show the kind of workflow evidence we look for during an assessment: what gets captured, which systems are touched, where humans stay in control, and how value is measured."
          compact
          className="border-y border-card-border bg-[#f8fbfa]"
        />
      ) : null}

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="sector-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow="What is shaping the sector" title={sectorTitle} description={sectorDescription} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {sectorShifts.map((shift) => (
              <article key={shift.title} className="rounded-lg border border-card-border bg-white p-6">
                <h3 className="text-lg font-extrabold leading-6 text-ink">{shift.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{shift.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="systems-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader eyebrow="Systems we connect" title={systemsTitle} description={systemsDescription} />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {systemGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
                <h3 className="text-lg font-extrabold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-card-border bg-white px-3 py-1.5 text-sm font-semibold text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="controls-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader eyebrow="Controls by design" title={controlsTitle} description={controlsDescription} />
          <div className="rounded-lg border border-card-border bg-white p-6 shadow-[0_10px_30px_rgba(15,23,32,0.04)]">
            <div className="grid gap-5">
              {controls.map((item) => (
                <div key={item} className="flex gap-4 border-b border-card-border pb-5 last:border-b-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1db993]" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="Start small, prove value" title={rolloutTitle} description={rolloutDescription} />
            <div className="mt-8 grid gap-4">
              {rollout.map(([rolloutStep, text]) => (
                <article key={rolloutStep} className="grid gap-2 rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] sm:grid-cols-[110px_1fr]">
                  <h3 className="text-lg font-extrabold text-[#167f65]">{rolloutStep}</h3>
                  <p className="text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Spend confidence</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{confidenceTitle}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              {confidenceDescription}
            </p>
            <div className="mt-5 grid gap-3">
              {confidenceNotes.map((note) => (
                <p key={note} className="rounded-lg border border-card-border bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink">
                  {note}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <AssessmentCTA sourcePage={sourcePage} ctaLocation={ctaLocation} />
    </div>
  );
}
