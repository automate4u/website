"use client";

import { useState } from "react";
import AssessmentModal from "@/components/AssessmentModal";
import type { ServiceSlug } from "@/data/services";
import type { IndustryAcceleratorSlug } from "@/data/industry-accelerators";

type AssessmentTriggerProps = {
  children: React.ReactNode;
  className?: string;
  sourcePage: string;
  ctaLocation: string;
  serviceInterest?: ServiceSlug;
  acceleratorInterest?: IndustryAcceleratorSlug;
  workflowInterest?: string;
  modalTitle?: string;
  modalDescription?: string;
  onOpen?: () => void;
};

export default function AssessmentTrigger({
  children,
  className,
  sourcePage,
  ctaLocation,
  serviceInterest,
  acceleratorInterest,
  workflowInterest,
  modalTitle,
  modalDescription,
  onOpen,
}: AssessmentTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>
      <AssessmentModal
        open={open}
        onClose={() => setOpen(false)}
        sourcePage={sourcePage}
        ctaLocation={ctaLocation}
        serviceInterest={serviceInterest}
        acceleratorInterest={acceleratorInterest}
        workflowInterest={workflowInterest}
        title={modalTitle}
        description={modalDescription}
      />
    </>
  );
}
