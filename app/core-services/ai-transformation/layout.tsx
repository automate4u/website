import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/core-services/ai-transformation");

export default function AITransformationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/core-services/ai-transformation" />
      {children}
    </>
  );
}
