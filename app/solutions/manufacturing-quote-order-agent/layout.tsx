import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/solutions/manufacturing-quote-order-agent");

export default function ManufacturingQuoteOrderAgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/solutions/manufacturing-quote-order-agent" />
      {children}
    </>
  );
}
