import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/capabilities/operational-intelligence-analytics");

export default function OperationalIntelligenceAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
