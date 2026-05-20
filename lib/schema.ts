import { industryAccelerators } from "@/data/industry-accelerators";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { solutions } from "@/data/solutions";

function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logos/a4u-logo.svg"),
    description: siteConfig.description,
    knowsAbout: [
      "AI voice agents",
      "AI workflow automation",
      "AI chatbots",
      "Business process automation",
      "Managed AI operations",
      "Human-in-the-loop AI systems",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function breadcrumbSchema(path: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: absoluteUrl(path),
      },
    ],
  };
}

export function routeSchema(path: string) {
  const service = services.find((item) => item.href === path);
  const accelerator = industryAccelerators.find((item) => item.href === path);
  const solution = solutions.find((item) => item.href === path);
  const title = service?.title ?? accelerator?.title ?? solution?.title;
  const description = service?.metaDescription ?? accelerator?.metaDescription ?? solution?.metaDescription;

  if (!title || !description) {
    return null;
  }

  const offer = {
    "@type": "Offer",
    name: siteConfig.primaryCta.offerName,
    url: absoluteUrl(siteConfig.primaryCta.href),
  };

  const primarySchema = service
    ? {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": absoluteUrl(`${path}#service`),
      name: service.title,
      url: absoluteUrl(service.href),
      description: service.metaDescription,
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      areaServed: "North America",
      offers: offer,
    }
    : solution
      ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": absoluteUrl(`${path}#solution`),
        name: solution.title,
        url: absoluteUrl(path),
        description: solution.metaDescription,
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
        serviceType: "AI automation solution",
        offers: offer,
      }
    : {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": absoluteUrl(`${path}#industry-accelerator`),
      name: accelerator?.title,
      url: absoluteUrl(path),
      description,
      provider: {
        "@id": absoluteUrl("/#organization"),
      },
      serviceType: "AI industry accelerator",
      offers: offer,
    };

  return [primarySchema, breadcrumbSchema(path, title)];
}
