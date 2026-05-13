import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/core-services/marketing-automation");

export default function MarketingAutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/core-services/marketing-automation" />
      {children}
    </>
  );
}
