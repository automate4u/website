import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function AIAgentsPage() {
  const service = servicePageBySlug("ai-agents");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
