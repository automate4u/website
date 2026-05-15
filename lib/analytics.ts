"use client";

import type { ServiceSlug } from "@/data/services";
import type { IndustryAcceleratorSlug } from "@/data/industry-accelerators";

export type AnalyticsEventName =
  | "site_assessment_cta_clicked"
  | "site_assessment_form_started"
  | "site_assessment_form_submitted"
  | "site_assessment_form_failed"
  | "site_voice_demo_started"
  | "site_voice_demo_completed"
  | "site_voice_demo_failed"
  | "site_workflow_card_clicked"
  | "site_maturity_stage_selected"
  | "site_case_study_viewed"
  | "site_chat_demo_started"
  | "site_chat_demo_viewed"
  | "site_industry_accelerator_viewed"
  | "site_botpress_opened"
  | "site_roi_panel_interacted"
  | "site_automation_simulator_started"
  | "site_automation_simulator_completed"
  | "site_automation_idea_filtered"
  | "site_handoff_demo_viewed"
  | "site_event_log_viewed";

export type AnalyticsPayload = {
  page?: string;
  ctaLocation?: string;
  serviceInterest?: ServiceSlug | string;
  acceleratorInterest?: IndustryAcceleratorSlug | string;
  workflowInterest?: string;
  maturityStage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

declare global {
  interface Window {
    posthog?: {
      capture: (eventName: string, payload?: Record<string, unknown>) => void;
    };
  }
}

export function getStoredAttribution() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const attribution = {
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
    utmTerm: params.get("utm_term") ?? "",
    utmContent: params.get("utm_content") ?? "",
    landingPage: window.location.pathname,
    referrer: document.referrer,
  };

  const hasNewUtm = [
    attribution.utmSource,
    attribution.utmMedium,
    attribution.utmCampaign,
    attribution.utmTerm,
    attribution.utmContent,
  ].some(Boolean);
  const stored = window.sessionStorage.getItem("a4u_attribution");

  if (hasNewUtm || !stored) {
    window.sessionStorage.setItem("a4u_attribution", JSON.stringify(attribution));
    return attribution;
  }

  try {
    return { ...attribution, ...JSON.parse(stored) };
  } catch {
    return attribution;
  }
}

export function trackEvent(eventName: AnalyticsEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const attribution = getStoredAttribution();
  const eventPayload = {
    page: window.location.pathname,
    ...attribution,
    ...payload,
  };

  window.posthog?.capture(eventName, eventPayload);
}
