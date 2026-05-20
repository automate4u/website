import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/services/marketing-automation");

export default function MarketingAutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/marketing-automation" />
      {children}
    </>
  );
}
