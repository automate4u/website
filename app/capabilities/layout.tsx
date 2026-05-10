import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/capabilities");

export default function CapabilitiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
