import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/about/overview");

export default function AboutOverviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
