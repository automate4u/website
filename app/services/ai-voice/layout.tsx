import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/services/ai-voice");

export default function AIVoiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/services/ai-voice" />
      {children}
    </>
  );
}
