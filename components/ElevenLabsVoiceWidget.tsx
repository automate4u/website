"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/analytics";

type ElevenLabsVoiceWidgetProps = {
  agentId: string;
  sourcePage: string;
  ctaLocation: string;
  title?: string;
  description?: string;
  actionText?: string;
  startCallText?: string;
  buttonLabel?: string;
};

export default function ElevenLabsVoiceWidget({
  agentId,
  sourcePage,
  ctaLocation,
  title = "Try the live voice assistant",
  description = "Start the call, speak naturally, and listen for how the assistant handles intake, clarification, and handoff.",
  actionText = "Start voice demo",
  startCallText = "Start call",
  buttonLabel = "Try Now",
}: ElevenLabsVoiceWidgetProps) {
  const widgetRef = useRef<HTMLElement | null>(null);
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  useEffect(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    const handleCall = () => {
      trackEvent("site_voice_demo_started", {
        page: sourcePage,
        ctaLocation,
        serviceInterest: "ai-voice",
        provider: "elevenlabs",
        agentId,
      });
    };

    widget.addEventListener("elevenlabs-convai:call", handleCall);
    return () => widget.removeEventListener("elevenlabs-convai:call", handleCall);
  }, [agentId, ctaLocation, sourcePage]);

  useEffect(() => {
    if (!isWidgetVisible || !shouldAutoOpen) return;

    let attempts = 0;
    const intervalId = window.setInterval(() => {
      attempts += 1;
      const widget = widgetRef.current;
      const shadowRoot = widget?.shadowRoot;
      const button =
        shadowRoot?.querySelector<HTMLButtonElement>("button") ??
        widget?.querySelector<HTMLButtonElement>("button");

      if (button) {
        button.click();
        button.focus();
        setShouldAutoOpen(false);
        window.clearInterval(intervalId);
      }

      if (attempts >= 20) {
        setShouldAutoOpen(false);
        window.clearInterval(intervalId);
      }
    }, 150);

    return () => window.clearInterval(intervalId);
  }, [isWidgetVisible, shouldAutoOpen]);

  return (
    <div className="rounded-[18px] border border-card-border bg-white p-5 shadow-[0_14px_36px_rgba(15,23,32,0.055)] md:p-6">
      <div className="mb-5">
        <h3 className="text-xl font-extrabold leading-tight text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      </div>
      {!isWidgetVisible ? (
        <button
          type="button"
          onClick={() => {
            trackEvent("site_voice_demo_selected", {
              page: sourcePage,
              ctaLocation,
              serviceInterest: "ai-voice",
              provider: "elevenlabs",
              agentId,
            });
            setIsWidgetVisible(true);
            setShouldAutoOpen(true);
          }}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0d1720] px-6 text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#101f2b]"
        >
          {buttonLabel}
        </button>
      ) : (
        <>
          <Script
            id="elevenlabs-convai-widget"
            src="https://unpkg.com/@elevenlabs/convai-widget-embed"
            strategy="afterInteractive"
          />
          <div className="overflow-hidden rounded-2xl border border-card-border bg-[#f8fbfa] p-3">
            {React.createElement("elevenlabs-convai", {
              ref: widgetRef,
              class: "a4u-elevenlabs-convai",
              "agent-id": agentId,
              variant: "expanded",
              dismissible: "false",
              "action-text": actionText,
              "start-call-text": startCallText,
              "end-call-text": "End call",
              "listening-text": "Listening...",
              "speaking-text": "Assistant speaking",
            })}
          </div>
        </>
      )}
      <p className="mt-4 text-xs leading-5 text-muted">
        Your browser may request microphone access. The assistant should be used for demonstration, not for urgent or sensitive operational requests.
      </p>
    </div>
  );
}
