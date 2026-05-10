import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/industries/healthcare");

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/industries/healthcare" />
      {children}
    </>
  );
}
