import Image from "next/image";
import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";
import { industryAccelerators } from "@/data/industry-accelerators";
import { solutions } from "@/data/solutions";

const industryImages: Record<string, string> = {
  "financial-services": "/images/industries/financialServices.jpg",
  "education-childcare": "/images/home/how-it-works.jpg",
  healthcare: "/images/industries/healthcare.jpg",
  "home-services": "/images/industries/home-services.avif",
  hospitality: "/images/industries/hospitality.jpg",
  manufacturing: "/images/industries/manufacturing.jpg",
  "professional-services": "/images/industries/professional-services.jpg",
  "real-estate": "/images/industries/real_estate.jpg",
  "retail-ecommerce": "/images/industries/retail.jpg",
  "technology-media": "/images/industries/tech.jpg",
};

const industryCards = [...industryAccelerators].sort((a, b) => a.title.localeCompare(b.title));

const operatingPatterns = [
  {
    title: "Communication pressure",
    text: "Calls, emails, forms, chats, and texts reach teams faster than most operating processes can absorb them.",
  },
  {
    title: "Disconnected systems",
    text: "The right answer often lives in a CRM, ERP, scheduling tool, inbox, spreadsheet, or policy document outside the conversation.",
  },
  {
    title: "Human judgment still matters",
    text: "Good automation handles the repeatable steps while approvals, sensitive cases, and exceptions stay with people.",
  },
];

const selectionSteps = [
  {
    step: "01",
    title: "Find the repetitive workflow",
    text: "We look for calls, emails, intake steps, follow-ups, and admin tasks that happen often enough to be worth systematizing.",
  },
  {
    step: "02",
    title: "Connect the operating context",
    text: "The agent needs approved answers, policies, customer records, calendars, inventory, CRM data, or task systems before it can be useful.",
  },
  {
    step: "03",
    title: "Launch with guardrails",
    text: "We start with clear boundaries, human review where needed, KPI tracking, and a practical path to expand after value is proven.",
  },
];

export default function IndustriesPage() {
  const featuredSolution = solutions[0];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white px-4 py-12 md:py-[72px]" aria-labelledby="industries-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 id="industries-title" className="max-w-[760px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink md:text-[52px]">
              AI automation for the industries where communication, handoffs, and admin work slow teams down.
            </h1>
            <p className="mt-5 max-w-[680px] text-base leading-8 text-muted md:text-[17px]">
              Every industry has its own policies, systems, customer expectations, and risk points. We use industry pages to show the operating context, then solution pages to show focused implementations that can launch in a practical first phase.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white shadow-[0_10px_28px_rgba(29,185,147,0.22)] hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/solutions" className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 text-base font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                View Solutions
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_16px_48px_rgba(15,23,32,0.07)] md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">How to use this section</p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-lg border border-card-border bg-white p-5">
                <h2 className="text-xl font-extrabold text-ink">Industries show the operating environment.</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Use these pages when you want to see how AI fits into a sector such as manufacturing, education, home services, retail, or professional services.
                </p>
              </div>
              <div className="rounded-lg border border-card-border bg-white p-5">
                <h2 className="text-xl font-extrabold text-ink">Solutions show the specific implementation.</h2>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Use solution pages when you want to see a concrete workflow, such as a voice agent for daycare front desks or a response agent for parts availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-12 md:py-16" aria-labelledby="patterns-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">What changes by industry</p>
            <h2 id="patterns-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
              The technology may be similar. The workflow, trust requirements, and business impact are not.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {operatingPatterns.map((pattern) => (
              <article key={pattern.title} className="border-l-2 border-[#1db993] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,32,0.035)]">
                <h3 className="text-base font-extrabold leading-6 text-ink">{pattern.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{pattern.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="industry-list-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Explore industry contexts"
            title="Choose the environment closest to your business."
            description="Each page explains the operational pressure, systems, use cases, controls, and first workflows most likely to create measurable value."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group overflow-hidden rounded-lg border border-card-border bg-white shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1db993]/45 hover:shadow-[0_16px_38px_rgba(15,23,32,0.08)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#f8fbfa]">
                  <Image
                    src={industryImages[industry.slug] ?? "/images/home/how-it-works.jpg"}
                    alt={`${industry.title} operational environment`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold leading-6 text-ink">{industry.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{industry.metaDescription}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Common starting points</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {industry.commonWorkflows.slice(0, 3).map((workflow) => (
                      <span key={workflow} className="rounded-full border border-card-border bg-[#f8fbfa] px-3 py-1 text-xs font-semibold text-muted">
                        {workflow}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-extrabold text-[#167f65]">
                    {industry.primaryKpi}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="solution-title">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#87e6ce]">Focused solution example</p>
            <h2 id="solution-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] md:text-[38px]">
              Start with a real workflow before expanding into the full operating system.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              A solution page shows what the buyer can actually imagine deploying: the scenario, the call or message experience, the handoff, the controls, and the rollout path.
            </p>
          </div>
          <Link
            href={featuredSolution.href}
            className="group rounded-lg border border-white/14 bg-white/[0.06] p-6 transition-colors hover:border-[#87e6ce]/60"
          >
            <p className="text-sm font-bold text-[#87e6ce]">Education & Childcare Solution</p>
            <h3 className="mt-3 text-2xl font-extrabold text-white">{featuredSolution.title}</h3>
            <p className="mt-4 text-sm leading-6 text-white/74">{featuredSolution.metaDescription}</p>
            <span className="mt-6 inline-flex text-sm font-extrabold text-[#87e6ce]">
              See the solution <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="start-title">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="How we choose the first workflow"
            title="The best first automation is narrow enough to launch and valuable enough to measure."
            description="We help buyers avoid oversized projects by finding a specific repeatable workflow with clear inputs, clear systems, clear handoffs, and a measurable business result."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {selectionSteps.map((item) => (
              <article key={item.step} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-xs font-extrabold tracking-[0.08em] text-[#167f65]">{item.step}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-6 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/industries" ctaLocation="industries_index_assessment" />
    </div>
  );
}
