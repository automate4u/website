import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/about/our-team");

export default function OurTeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
