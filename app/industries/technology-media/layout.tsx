import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/industries/technology-media");

export default function TechnologyMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
