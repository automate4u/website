import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/industries/financial-services");

export default function FinancialServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
