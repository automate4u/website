import type { Metadata } from "next";
import { routeMetadata } from "@/data/metadata";
import { industryAccelerators } from "@/data/industry-accelerators";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export function metadataForPath(path: string): Metadata {
  const route = routeMetadata.find((item) => item.path === path);
  const service = services.find((item) => item.href === path);
  const accelerator = industryAccelerators.find((item) => item.href === path);

  if (service) {
    return createMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: service.href,
    });
  }

  if (accelerator) {
    return createMetadata({
      title: accelerator.metaTitle,
      description: accelerator.metaDescription,
      path: accelerator.href,
    });
  }

  if (route) {
    return createMetadata({
      title: route.title,
      description: route.description,
      path: route.path,
    });
  }

  return createMetadata({
    title: "Automate4U - AI Automation Systems",
    description:
      "Automate4U builds AI voice, agents, and workflow automation systems for SMB and mid-market teams.",
    path,
  });
}
