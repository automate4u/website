import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/industries/hospitality");

export default function HospitalityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
