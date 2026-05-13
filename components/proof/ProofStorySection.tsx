import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import { proofStories } from "@/data/proof-stories";

type ProofStorySectionProps = {
  storySlugs?: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
};

export default function ProofStorySection({
  storySlugs,
  eyebrow = "NDA-safe proof patterns",
  title = "Specific workflows, clear controls, and measurable outcomes.",
  description = "Many client relationships require confidentiality. These representative workflow examples show the kinds of operating problems Automate4U designs around without exposing client identities, proprietary systems, or private implementation details.",
  compact = false,
  className = "bg-white",
}: ProofStorySectionProps) {
  const stories = storySlugs?.length
    ? storySlugs
        .map((slug) => proofStories.find((story) => story.slug === slug))
        .filter((story): story is (typeof proofStories)[number] => Boolean(story))
    : proofStories;

  if (!stories.length) return null;

  return (
    <section className={`${className} px-4 py-14 md:py-20`} aria-labelledby="proof-stories-title">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className={`mt-8 grid gap-5 ${stories.length === 1 ? "" : "lg:grid-cols-2"}`}>
          {stories.map((story) => (
            <article key={story.slug} className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)] md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{story.label}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{story.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{story.context}</p>

              <div className="mt-5 rounded-lg border border-card-border bg-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">Workflow</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{story.workflow}</p>
              </div>

              <div className={`mt-4 grid gap-4 ${compact ? "md:grid-cols-1 xl:grid-cols-3" : "md:grid-cols-3"}`}>
                <ProofList title="Connected actions" items={story.connectedActions} />
                <ProofList title="Human controls" items={story.humanControls} />
                <ProofList title="Metrics to validate" items={story.metrics} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {story.links.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-full border border-card-border bg-white px-3 py-1.5 text-xs font-bold text-[#167f65] hover:border-[#1db993]/50">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-card-border bg-[#f8fbfa] p-5 text-sm leading-6 text-muted">
          <strong className="text-ink">Proof standard:</strong> public examples should be anonymous, sanitized, or representative unless a client has explicitly approved named use. Exact metrics should only be published when approved; otherwise the site should show the metrics we measure and validate during implementation.
        </div>
      </div>
    </section>
  );
}

function ProofList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-card-border bg-white p-4">
      <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">{title}</p>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
