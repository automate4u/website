"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitAssessmentLeadWithState } from "@/app/actions/assessment";
import AttributionFields from "@/components/AttributionFields";
import type { ServiceSlug } from "@/data/services";
import type { IndustryAcceleratorSlug } from "@/data/industry-accelerators";
import { trackEvent } from "@/lib/analytics";

type AssessmentLeadFormProps = {
  sourcePage: string;
  ctaLocation: string;
  serviceInterest?: ServiceSlug;
  acceleratorInterest?: IndustryAcceleratorSlug;
  workflowInterest?: string;
  submitLabel?: string;
};

export default function AssessmentLeadForm({
  sourcePage,
  ctaLocation,
  serviceInterest,
  acceleratorInterest,
  workflowInterest,
  submitLabel = "Request My Assessment",
}: AssessmentLeadFormProps) {
  const [state, formAction, pending] = useActionState(submitAssessmentLeadWithState, {
    ok: false,
    message: "",
  });
  const formStarted = useRef(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_ASSESSMENT_URL;

  useEffect(() => {
    if (!state.message) return;

    trackEvent(state.ok ? "site_assessment_form_submitted" : "site_assessment_form_failed", {
      page: sourcePage,
      ctaLocation,
      serviceInterest,
      acceleratorInterest,
      workflowInterest,
    });
  }, [acceleratorInterest, ctaLocation, serviceInterest, sourcePage, state.message, state.ok, workflowInterest]);

  const trackStarted = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("site_assessment_form_started", {
      page: sourcePage,
      ctaLocation,
      serviceInterest,
      acceleratorInterest,
      workflowInterest,
    });
  };

  if (state.ok) {
    return (
      <div className="grid gap-4 rounded-2xl border border-card-border bg-white p-6 shadow-[0_10px_30px_rgba(15,23,32,0.06)]" role="status">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#e9f9f3] text-xl font-bold text-[#169b78]">
          ✓
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold text-ink">Assessment request received.</h3>
          <p className="text-muted">
            {state.message}
          </p>
        </div>
        <div className="rounded-xl border border-card-border bg-[#f8fbfa] p-4 text-sm text-muted">
          <strong className="block text-ink">What happens next:</strong>
          We review the workflow, look for the smallest useful automation opportunity, and follow up with a practical next step.
        </div>
        {calendlyUrl ? (
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover"
          >
            Book Assessment Call
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form action={formAction} onFocusCapture={trackStarted} className="grid gap-4">
      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="ctaLocation" value={ctaLocation} />
      <input type="hidden" name="serviceInterest" value={serviceInterest ?? ""} />
      <input type="hidden" name="acceleratorInterest" value={acceleratorInterest ?? ""} />
      <input type="hidden" name="workflowInterest" value={workflowInterest ?? ""} />
      <AttributionFields />

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Name</span>
        <input name="name" autoComplete="name" className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Work email</span>
        <input name="email" type="email" required autoComplete="email" className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Company</span>
        <input name="company" required autoComplete="organization" className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Website</span>
        <input name="website" type="url" autoComplete="url" className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Industry</span>
        <input name="industry" className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Biggest workflow pain</span>
        <textarea name="workflowPain" rows={4} className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Tools currently used</span>
        <input name="tools" placeholder="HubSpot, Calendly, QuickBooks, spreadsheets..." className="rounded-xl border border-card-border px-3 py-3" />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-ink">Timeline</span>
        <select name="timeline" defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
          <option value="" disabled>Select a timeline</option>
          <option>ASAP</option>
          <option>1-2 months</option>
          <option>This quarter</option>
          <option>Just exploring</option>
        </select>
      </label>

      {state.message && !state.ok ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        onClick={() => {
          trackEvent("site_assessment_cta_clicked", {
            page: sourcePage,
            ctaLocation,
            serviceInterest,
            acceleratorInterest,
            workflowInterest,
          });
        }}
        className="rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
