import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/core-services/ai-agents");

export default function AIAgentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/core-services/ai-agents" />
      {children}
    </>
  );
}
