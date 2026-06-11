import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { tradeVariants, getTradeVariant } from "@/data/solution-variants";
import { metadataForPath } from "@/lib/route-metadata";
import TradeVariantTemplate from "@/components/solutions/TradeVariantTemplate";

export function generateStaticParams() {
  return tradeVariants.map((variant) => ({ slug: variant.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return metadataForPath(`/solutions/${slug}`);
}

export default async function TradeVariantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const variant = getTradeVariant(slug);
  const solution = solutions.find((item) => item.slug === slug);

  if (!variant || !solution) {
    notFound();
  }

  return <TradeVariantTemplate solution={solution} variant={variant} />;
}
