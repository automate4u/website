"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import AssessmentModal from "@/components/AssessmentModal";
import { services, type ServiceSlug } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

const serviceSlugs = new Set(services.map((service) => service.slug));

function serviceInterestFromPath(pathname: string): ServiceSlug | undefined {
  const [, section, slug] = pathname.split("/");
  if (section !== "services" || !slug || !serviceSlugs.has(slug as ServiceSlug)) return undefined;
  return slug as ServiceSlug;
}

export default function GlobalAssessmentLauncher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const serviceInterest = useMemo(() => serviceInterestFromPath(pathname), [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link || link.target === "_blank") return;

      const label = link.textContent?.replace(/\s+/g, " ").trim().toLowerCase() ?? "";
      const href = link.getAttribute("href") ?? "";
      const isAssessmentCta = label === "get free assessment" && (href === "#contact" || href === "/contact");

      if (!isAssessmentCta) return;

      event.preventDefault();
      trackEvent("site_assessment_cta_clicked", {
        page: pathname,
        ctaLocation: "global_assessment_cta",
        serviceInterest,
      });
      setOpen(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, serviceInterest]);

  return (
    <>
      <AssessmentModal
        open={open}
        onClose={() => setOpen(false)}
        sourcePage={pathname}
        ctaLocation="global_assessment_cta"
        serviceInterest={serviceInterest}
      />
    </>
  );
}
