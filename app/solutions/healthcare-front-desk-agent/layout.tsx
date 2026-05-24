import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/solutions/healthcare-front-desk-agent");

export default function HealthcareFrontDeskAgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/solutions/healthcare-front-desk-agent" />
      {children}
    </>
  );
}
