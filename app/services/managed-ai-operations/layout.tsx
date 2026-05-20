import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/services/managed-ai-operations");

export default function ManagedAIOperationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/managed-ai-operations" />
      {children}
    </>
  );
}
