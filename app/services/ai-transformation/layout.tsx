import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/services/ai-transformation");

export default function AITransformationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/ai-transformation" />
      {children}
    </>
  );
}
