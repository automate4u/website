import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/solutions/daycare-voice-agent");

export default function DaycareVoiceAgentSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/solutions/daycare-voice-agent" />
      {children}
    </>
  );
}
