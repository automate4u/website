import { proofStories } from "@/data/proof-stories";
import ProofStoryPanel from "@/components/proof/ProofStoryPanel";

type ProofStorySectionProps = {
  storySlugs?: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
  filterable?: boolean;
};

export default function ProofStorySection({
  storySlugs,
  title = "See what automation could take off your team’s plate.",
  description,
  compact = false,
  className = "bg-white",
  filterable = false,
}: ProofStorySectionProps) {
  const headerDescription =
    description ??
    (filterable
      ? "Filter by workflow type and see how everyday requests can become updates, handoffs, approvals, and measurable outcomes."
      : "See how everyday requests can become system updates, handoffs, approvals, and measurable outcomes.");

  const stories = storySlugs?.length
    ? storySlugs
        .map((slug) => proofStories.find((story) => story.slug === slug))
        .filter((story): story is (typeof proofStories)[number] => Boolean(story))
    : proofStories;

  if (!stories.length) return null;

  return (
    <section className={`${className} px-4 py-14 md:py-20`} aria-labelledby="proof-stories-title">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[760px]">
          <h2 id="proof-stories-title" className="text-[24px] font-extrabold leading-[1.14] tracking-[-0.01em] text-ink md:text-[36px]">
            {title}
          </h2>
          {headerDescription ? (
            <p className="mt-3 max-w-[680px] text-base leading-7 text-muted">
              {headerDescription}
            </p>
          ) : null}
        </div>

        <ProofStoryPanel stories={stories} compact={compact} filterable={filterable} />
      </div>
    </section>
  );
}
