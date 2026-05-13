import ServiceOfferPage from "@/components/services/ServiceOfferPage";
import { servicePageBySlug } from "@/data/service-pages";

export default function MarketingAutomationPage() {
  const service = servicePageBySlug("marketing-automation");

  if (!service) return null;

  return <ServiceOfferPage service={service} />;
}
