"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ProofStory } from "@/data/proof-stories";

type ProofFilter = {
  label: string;
  slugs?: string[];
};

type ProofStoryPanelProps = {
  stories: ProofStory[];
  compact?: boolean;
  filterable?: boolean;
};

const filters: ProofFilter[] = [
  { label: "All" },
  {
    label: "Voice",
    slugs: [
      "daycare-front-desk-voice",
      "home-services-dispatch",
      "healthcare-front-desk",
      "hospitality-guest-response",
      "real-estate-lead-response",
    ],
  },
  {
    label: "Sales",
    slugs: [
      "manufacturing-response-agent",
      "home-services-dispatch",
      "real-estate-lead-response",
      "professional-services-intake",
    ],
  },
  {
    label: "Support",
    slugs: [
      "retail-support-order-agent",
      "healthcare-front-desk",
      "hospitality-guest-response",
      "technology-media-workflow",
      "financial-document-intake",
    ],
  },
  {
    label: "Operations",
    slugs: [
      "custom-operations-workbench",
      "managed-ai-operations-rhythm",
      "ai-roadmap-value-realization",
      "manufacturing-response-agent",
      "technology-media-workflow",
    ],
  },
  {
    label: "Marketing",
    slugs: ["marketing-content-operations", "retail-support-order-agent", "technology-media-workflow"],
  },
];

export default function ProofStoryPanel({ stories, compact = false, filterable = false }: ProofStoryPanelProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0].label);
  const active = filters.find((filter) => filter.label === activeFilter) ?? filters[0];

  const visibleStories = useMemo(() => {
    if (!filterable || !active.slugs?.length) return stories;
    const allowed = new Set(active.slugs);
    return stories.filter((story) => allowed.has(story.slug));
  }, [active.slugs, filterable, stories]);

  const shouldScroll = visibleStories.length > 4;

  return (
    <div className="mt-8">
      {filterable ? (
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1" aria-label="Filter workflow examples">
          {filters.map((filter) => {
            const isActive = filter.label === activeFilter;
            return (
              <button
                key={filter.label}
                type="button"
                onClick={() => setActiveFilter(filter.label)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-extrabold transition-colors ${
                  isActive
                    ? "border-[#167f65] bg-[#167f65] text-white"
                    : "border-card-border bg-white text-muted hover:border-[#1db993]/50 hover:text-ink"
                }`}
                aria-pressed={isActive}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        className={`rounded-xl border border-card-border bg-white ${
          shouldScroll ? "max-h-[760px] overflow-y-auto p-3 shadow-inner" : "border-transparent bg-transparent"
        }`}
      >
        <div className={`grid gap-5 ${visibleStories.length === 1 ? "" : "lg:grid-cols-2"}`}>
          {visibleStories.map((story) => (
            <ProofStoryCard key={story.slug} story={story} compact={compact} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProofStoryCard({ story, compact }: { story: ProofStory; compact: boolean }) {
  return (
    <article className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_10px_30px_rgba(15,23,32,0.055)] md:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">{story.label}</p>
      <h3 className="mt-3 text-2xl font-extrabold leading-tight text-ink">{story.title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted">{story.context}</p>

      <div className="mt-5 rounded-lg border border-[#cfe9df] bg-white p-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#167f65]">How the workflow runs</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-ink">{story.workflow}</p>
      </div>

      <div className={`mt-4 grid gap-4 ${compact ? "md:grid-cols-1 xl:grid-cols-3" : "md:grid-cols-3"}`}>
        <ProofList title="Connected systems" items={story.connectedActions} />
        <ProofList title="Human control" items={story.humanControls} />
        <ProofList title="Measured outcomes" items={story.metrics} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {story.links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-card-border bg-white px-3 py-1.5 text-xs font-bold text-[#167f65] hover:border-[#1db993]/50">
            {link.label}
          </Link>
        ))}
      </div>
    </article>
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
