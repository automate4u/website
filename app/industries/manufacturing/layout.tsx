import { metadataForPath } from "@/lib/route-metadata";
import RouteStructuredData from "@/components/RouteStructuredData";

export const metadata = metadataForPath("/industries/manufacturing");

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteStructuredData path="/industries/manufacturing" />
      {children}
    </>
  );
}
