"use client";

import { useEffect } from "react";
import { getStoredAttribution } from "@/lib/analytics";

const fieldNames = [
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmTerm",
  "utmContent",
  "landingPage",
  "referrer",
] as const;

export default function AttributionFields() {
  useEffect(() => {
    const nextAttribution = getStoredAttribution() as Record<string, string>;
    const inputs = document.querySelectorAll<HTMLInputElement>("input[data-a4u-attribution]");

    inputs.forEach((input) => {
      const fieldName = input.dataset.a4uAttribution;
      if (!fieldName) return;
      input.value = nextAttribution[fieldName] ?? "";
    });
  }, []);

  return (
    <>
      {fieldNames.map((fieldName) => (
        <input
          key={fieldName}
          type="hidden"
          name={fieldName}
          data-a4u-attribution={fieldName}
          defaultValue=""
        />
      ))}
    </>
  );
}
