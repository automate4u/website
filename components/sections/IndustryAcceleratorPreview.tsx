import Link from "next/link";
import { industryAccelerators } from "@/data/industry-accelerators";
import SectionHeader from "@/components/sections/SectionHeader";

export default function IndustryAcceleratorPreview() {
  return (
    <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="accelerators-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow="Industry Accelerators"
          title="Repeatable workflow patterns for the businesses we understand."
          description="Start with the workflows your industry handles every day: calls, quotes, intake, support, dispatch, order updates, follow-up, and reporting."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryAccelerators.map((accelerator) => (
            <Link key={accelerator.slug} href={accelerator.href} className="group rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,32,0.08)]">
              <article>
                <h3 className="text-xl font-extrabold leading-tight text-ink">{accelerator.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{accelerator.metaDescription}</p>
                <p className="mt-5 rounded-lg bg-[#e9f9f3] px-4 py-3 text-sm font-bold text-[#169b78]">{accelerator.primaryKpi}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {accelerator.commonWorkflows.slice(0, 3).map((workflow) => (
                    <span key={workflow} className="rounded-full border border-card-border px-3 py-1 text-xs font-semibold text-muted">
                      {workflow}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
