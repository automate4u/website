import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/about/how-we-work");

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
