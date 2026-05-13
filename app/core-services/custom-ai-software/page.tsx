import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function CustomAISoftwarePage() {
  const service = servicePageBySlug("custom-ai-software");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
