import { metadataForPath } from "@/lib/route-metadata";

export const metadata = metadataForPath("/capabilities/data-integrations-infrastructure");

export default function DataIntegrationsInfrastructureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
