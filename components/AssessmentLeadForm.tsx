"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitAssessmentLeadWithState } from "@/app/actions/assessment";
import AttributionFields from "@/components/AttributionFields";
import type { ServiceSlug } from "@/data/services";
import type { IndustryAcceleratorSlug } from "@/data/industry-accelerators";
import { trackEvent } from "@/lib/analytics";

const assessmentMeetingUrl =
  process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ?? "https://meetings-na3.hubspot.com/jzhang";

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
        {assessmentMeetingUrl ? (
          <a
            href={assessmentMeetingUrl}
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
      <div className="rounded-xl border border-[#cfe9df] bg-[#ecfbf6] px-4 py-3 text-sm leading-6 text-[#155f4d]">
        <strong className="text-ink">A few details help us qualify the right next step.</strong> Work email, company, industry, workflow pain, tools, timeline, and budget range are required so the assessment is useful instead of generic.
      </div>

      <input type="hidden" name="sourcePage" value={sourcePage} />
      <input type="hidden" name="ctaLocation" value={ctaLocation} />
      <input type="hidden" name="serviceInterest" value={serviceInterest ?? ""} />
      <input type="hidden" name="acceleratorInterest" value={acceleratorInterest ?? ""} />
      <input type="hidden" name="workflowInterest" value={workflowInterest ?? ""} />
      <AttributionFields />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Name <span className="font-normal text-muted">(optional)</span></span>
          <input name="name" autoComplete="name" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Work email *</span>
          <input name="email" type="email" required autoComplete="email" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Company *</span>
          <input name="company" required autoComplete="organization" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Website <span className="font-normal text-muted">(optional)</span></span>
          <input name="website" type="url" autoComplete="url" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Industry *</span>
          <input name="industry" required autoComplete="organization-title" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Timeline *</span>
          <select name="timeline" required defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
            <option value="" disabled>Select a timeline</option>
            <option>ASAP</option>
            <option>1-2 months</option>
            <option>This quarter</option>
            <option>Just exploring</option>
          </select>
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-sm font-semibold text-ink">Biggest workflow pain *</span>
          <textarea name="workflowPain" required rows={3} placeholder="What repetitive calls, emails, admin work, handoffs, or system updates are slowing the team down?" className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-sm font-semibold text-ink">Tools currently used *</span>
          <input name="tools" required placeholder="HubSpot, Calendly, QuickBooks, spreadsheets..." className="rounded-xl border border-card-border px-3 py-3" />
        </label>

        <label className="grid gap-1.5 md:col-span-2">
          <span className="text-sm font-semibold text-ink">Budget range *</span>
          <select name="budget" required defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
            <option value="" disabled>Select a budget range</option>
            <option>Exploring fit first</option>
            <option>Under $2k/month</option>
            <option>$2k-$5k/month</option>
            <option>$5k-$10k/month</option>
            <option>$10k+/month</option>
            <option>Project budget, not monthly</option>
          </select>
        </label>
      </div>

      {state.message && !state.ok ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
