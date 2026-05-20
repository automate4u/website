import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/industries/real-estate");

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/industries/real-estate" />
      {children}
    </>
  );
}
