import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function AITransformationPage() {
  const service = servicePageBySlug("ai-transformation");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
