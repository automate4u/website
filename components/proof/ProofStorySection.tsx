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
  eyebrow = "Workflow examples",
  title = "See the kind of operating work we design around.",
  description = "These examples are written from real workflow patterns we understand: repeated requests, disconnected systems, human handoffs, and measurable operating outcomes. Client names, proprietary systems, and private implementation details stay protected.",
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
            <article key={story.slug} className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_10px_30px_rgba(15,23,32,0.055)] md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{story.label}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{story.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{story.context}</p>

              <div className="mt-5 rounded-lg border border-[#cfe9df] bg-white p-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">How the workflow runs</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink">{story.workflow}</p>
              </div>

              <div className={`mt-4 grid gap-4 ${compact ? "md:grid-cols-1 xl:grid-cols-3" : "md:grid-cols-3"}`}>
                <ProofList title="What gets connected" items={story.connectedActions} />
                <ProofList title="Where people stay in control" items={story.humanControls} />
                <ProofList title="What we measure" items={story.metrics} />
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
          <strong className="text-ink">Confidentiality note:</strong> many automation projects involve private client systems, workflows, and data. Public examples stay anonymous or representative unless a client approves named use. Exact performance metrics should be published only when approved; otherwise we show the metrics we validate during assessment and pilot work.
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
          <li key={item} className="grid grid-cols-[10px_1fr] gap-2 text-sm leading-6 text-muted">
            <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[#1db993]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
