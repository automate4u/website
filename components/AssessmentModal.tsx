"use client";

import { useEffect } from "react";
import AssessmentLeadForm from "@/components/AssessmentLeadForm";
import type { ServiceSlug } from "@/data/services";
import type { IndustryAcceleratorSlug } from "@/data/industry-accelerators";

type AssessmentModalProps = {
  open: boolean;
  onClose: () => void;
  sourcePage: string;
  ctaLocation: string;
  serviceInterest?: ServiceSlug;
  acceleratorInterest?: IndustryAcceleratorSlug;
  workflowInterest?: string;
  title?: string;
  description?: string;
};

export default function AssessmentModal({
  open,
  onClose,
  sourcePage,
  ctaLocation,
  serviceInterest,
  acceleratorInterest,
  workflowInterest,
  title = "Get Your Free AI Workflow Assessment",
  description = "Tell us where calls, emails, admin work, or disconnected tools are slowing your team down. We will recommend a practical first step.",
}: AssessmentModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-end bg-black/50 p-0 backdrop-blur-sm md:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="assessment-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex h-full w-full max-w-[760px] flex-col bg-white shadow-[-20px_0_70px_rgba(0,0,0,0.22)] md:h-[88vh] md:rounded-2xl">
        <div className="flex items-start justify-between gap-5 border-b border-card-border px-5 py-5 md:px-6">
          <div>
            <h3 id="assessment-modal-title" className="text-xl font-extrabold leading-tight text-ink md:text-2xl">
              {title}
            </h3>
            <p className="mt-2 max-w-[560px] text-sm leading-6 text-muted">
              {description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-muted hover:bg-[#f5f8f7] hover:text-ink"
            aria-label="Close assessment form"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 md:p-6">
          <AssessmentLeadForm
            sourcePage={sourcePage}
            ctaLocation={ctaLocation}
            serviceInterest={serviceInterest}
            acceleratorInterest={acceleratorInterest}
            workflowInterest={workflowInterest}
          />
          <p className="mt-4 text-center text-sm leading-6 text-muted">
            We never sell your data. Sensitive workflows should keep human approval until the process is validated.
          </p>
        </div>
      </div>
    </div>
  );
}
