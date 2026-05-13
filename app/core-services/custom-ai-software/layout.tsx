import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/core-services/custom-ai-software");

export default function CustomAISoftwareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/core-services/custom-ai-software" />
      {children}
    </>
  );
}
