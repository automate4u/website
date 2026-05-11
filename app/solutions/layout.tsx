import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/solutions");

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
