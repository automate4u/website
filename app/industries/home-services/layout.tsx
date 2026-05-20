import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/industries/home-services");

export default function HomeServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/industries/home-services" />
      {children}
    </>
  );
}
