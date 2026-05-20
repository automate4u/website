import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/industries/professional-services");

export default function ProfessionalServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/industries/professional-services" />
      {children}
    </>
  );
}
