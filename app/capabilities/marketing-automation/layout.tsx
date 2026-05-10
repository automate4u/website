import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/capabilities/marketing-automation");

export default function MarketingAutomationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
