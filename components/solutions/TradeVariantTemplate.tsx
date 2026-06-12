import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import UnifiedVoiceDemo from "@/components/UnifiedVoiceDemo";
import SectionHeader from "@/components/sections/SectionHeader";
import type { SolutionSummary } from "@/data/solutions";
import type { TradeVariant } from "@/data/solution-variants";
import type { ServiceSlug } from "@/data/services";

export default function TradeVariantTemplate({ solution, variant }: { solution: SolutionSummary; variant: TradeVariant }) {
  const sourcePage = solution.href;
  const ctaKey = solution.slug.replace(/-/g, "_");
  const serviceInterest = solution.relatedServiceHref?.replace("/services/", "") as ServiceSlug | undefined;

  const voiceProvider = [
    {
      ...variant.demoProvider,
      provider: "elevenlabs" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white px-4 py-12 md:py-[72px]" aria-labelledby="hero-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 id="hero-title" className="max-w-[780px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              {variant.heroTitle}
            </h1>
            <p className="mt-5 max-w-[690px] text-base leading-8 text-muted md:text-[17px]">
              {variant.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#call-examples" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Try the Demo
              </Link>
              <Link href="#walkthrough" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                {solution.primaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.08)]">
            <div className="rounded-lg border border-card-border bg-white p-4">
              <div className="flex items-center justify-between border-b border-card-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Communication dashboard</p>
                  <h2 className="mt-2 text-xl font-extrabold text-ink">{variant.dashboardTitle}</h2>
                </div>
                <span className="rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold text-[#167f65]">Live routing</span>
              </div>

              <div className="mt-4 grid gap-3">
                {variant.dashboardRows.map(([call, context, action]) => (
                  <div key={call} className="grid gap-3 rounded-lg border border-card-border bg-[#f8fbfa] p-4 sm:grid-cols-[1fr_1fr_1fr]">
                    <p className="text-sm font-extrabold text-ink">{call}</p>
                    <p className="text-sm font-semibold text-muted">{context}</p>
                    <p className="text-sm font-bold text-[#167f65]">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1db993]/25 bg-[#e9f9f3] p-4">
                <p className="text-sm font-bold text-[#167f65]">{variant.dashboardNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="reality-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">{variant.realityEyebrow}</p>
            <h2 id="reality-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              {variant.realityTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-white/66 md:text-base">
              {variant.realityDescription}
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {variant.realityItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="mb-6 grid h-9 w-9 place-items-center rounded-lg border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                  {item.label}
                </div>
                <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="support-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Staff support"
            title={variant.supportTitle}
            description={variant.supportDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {variant.supportCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold leading-tight text-ink">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="call-examples" className="scroll-mt-28 bg-[#0B1116] px-4 py-14 text-white md:py-20" aria-labelledby="calls-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="inline-flex rounded-full border border-[#1db993]/25 bg-[#1db993]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#70e7ca]">
              Real conversations
            </p>
            <h2 id="calls-title" className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              {variant.demoTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-8 text-white/66">
              {variant.demoDescription}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-[760px]">
            <UnifiedVoiceDemo
              providers={voiceProvider}
              sourcePage={sourcePage}
              ctaLocation={`${ctaKey}_unified_demo`}
              variant="dark"
              defaultProvider={variant.demoProvider.id}
            />
          </div>

          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-6 text-white/42">
            {variant.demoNote}
          </p>
        </div>
      </section>

      <section className="bg-[#071112] px-4 py-14 text-white md:py-20" aria-labelledby="control-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#70e7ca]">You stay in control</p>
            <h2 id="control-title" className="mt-4 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[44px]">
              Built around your existing policies and workflows.
            </h2>
            <p className="mt-5 max-w-[780px] text-base leading-8 text-white/66 md:text-[18px]">
              {variant.controlDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {variant.controls.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#1db993]/25 bg-[#1db993]/12 text-xs font-extrabold text-[#70e7ca]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold leading-6 text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/62">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="rollout-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Implementation process"
            title="A practical rollout process for busy teams."
            description={variant.rolloutDescription}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {variant.rollout.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow={variant.faqEyebrow}
            title={variant.faqTitle}
            description={variant.faqDescription}
          />
          <div className="grid gap-3">
            {variant.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-card-border bg-[#f8fbfa] p-5">
                <summary className="cursor-pointer text-base font-extrabold leading-6 text-ink marker:text-[#167f65]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="walkthrough" className="scroll-mt-28 bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="walkthrough-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Operational walkthrough</p>
            <h2 id="walkthrough-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              Explore whether it fits your operations.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              {variant.walkthroughDescription}
            </p>
            <div className="mt-6 rounded-lg border border-card-border bg-white p-5">
              <p className="text-sm font-bold text-ink">This is a consultative, low-pressure walkthrough.</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                We will focus on the policies, workflows, and handoff rules that matter before recommending a rollout path.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-white p-5 shadow-[0_12px_36px_rgba(15,23,32,0.06)] md:p-6">
            <h3 className="text-2xl font-extrabold leading-tight text-ink">Schedule an operational walkthrough.</h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              {variant.ctaModalDescription}
            </p>
            <AssessmentTrigger
              sourcePage={sourcePage}
              ctaLocation={`${ctaKey}_operational_walkthrough`}
              serviceInterest={serviceInterest}
              workflowInterest={variant.ctaWorkflowInterest}
              modalTitle="Schedule an Operational Walkthrough"
              modalDescription={variant.ctaModalDescription}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover sm:w-auto"
            >
              {solution.primaryCtaLabel}
            </AssessmentTrigger>
            <p className="mt-4 text-sm leading-6 text-muted">
              {variant.ctaPrivacyNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
