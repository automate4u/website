import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function AIChatPage() {
  const service = servicePageBySlug("ai-chat");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
