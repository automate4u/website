import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/solutions/home-services-missed-call-dispatch-agent");

export default function HomeServicesMissedCallDispatchAgentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/solutions/home-services-missed-call-dispatch-agent" />
      {children}
    </>
  );
}
