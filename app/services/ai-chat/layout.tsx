import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/services/ai-chat");

export default function AIChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/ai-chat" />
      {children}
    </>
  );
}
