import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function ManagedAIOperationsPage() {
  const service = servicePageBySlug("managed-ai-operations");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
