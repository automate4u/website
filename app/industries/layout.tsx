import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/industries");

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
