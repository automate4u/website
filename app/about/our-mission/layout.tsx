import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/about/our-mission");

export default function OurMissionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
