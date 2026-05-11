"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AttributionFields from "@/components/AttributionFields";
import SectionHeader from "@/components/sections/SectionHeader";
import { submitAssessmentLeadWithState } from "@/app/actions/assessment";
import { trackEvent } from "@/lib/analytics";
import { solutions } from "@/data/solutions";

type RetellClient = {
  on: (event: string, handler: (...args: unknown[]) => void) => void;
  startCall: (args: { accessToken: string }) => Promise<void>;
  stopCall: () => void;
};

const operationsEvents = [
  {
    label: "Call answered",
    detail: "AI greets caller, captures intent, and checks the request type.",
    status: "Live",
  },
  {
    label: "Intent detected",
    detail: "Booking request, quote question, service issue, or human escalation.",
    status: "Classified",
  },
  {
    label: "Business data checked",
    detail: "CRM, calendar, inventory, pricing rules, or knowledge base are queried.",
    status: "Connected",
  },
  {
    label: "Action created",
    detail: "Task, booking, quote follow-up, ticket, or internal notification is created.",
    status: "Triggered",
  },
  {
    label: "Human handoff",
    detail: "Sensitive, uncertain, or high-value requests route to staff with full context.",
    status: "Controlled",
  },
  {
    label: "KPI logged",
    detail: "Handled minutes, outcome, escalation, and response-time metrics are recorded.",
    status: "Measured",
  },
];

const workflowExamples = [
  {
    title: "Home services dispatch",
    pain: "Missed calls become missed jobs.",
    workflow: "AI answers, qualifies urgency, books or routes, sends SMS, and updates CRM.",
    kpi: "Missed calls recovered",
  },
  {
    title: "Daycare front desk",
    pain: "Staff juggle enrollment calls, parent questions, tour requests, and sensitive handoffs.",
    workflow: "AI captures intake details, routes by location, supports approved responses, and escalates sensitive cases to staff.",
    kpi: "Admin interruptions reduced",
    href: "/solutions/daycare-voice-agent",
  },
  {
    title: "Manufacturing response",
    pain: "Customers wait for parts, quote, and order updates.",
    workflow: "AI captures the request, checks available data, starts a quote task, and routes to sales.",
    kpi: "Quote cycle time reduced",
  },
] satisfies Array<{
  title: string;
  pain: string;
  workflow: string;
  kpi: string;
  href?: string;
}>;

const pricingNotes = [
  "Voice cost depends on handled minutes, call complexity, model choices, transcription, text-to-speech, routing, and recording needs.",
  "The platform fee covers monitoring, tuning, integration upkeep, workflow updates, support, and reliability.",
  "High-risk workflows should keep staff approval, audit logs, and extra checks instead of being priced like routine calls.",
];

const faqs = [
  {
    q: "Is this only a phone answering bot?",
    a: "No. Voice is the frontline. The value comes when the call creates a CRM update, booking, ticket, quote task, notification, audit log, or human handoff.",
  },
  {
    q: "Can humans stay in control?",
    a: "Yes. We design approval rules, escalation paths, audit logs, and handoffs for sensitive or uncertain situations.",
  },
  {
    q: "Can it integrate with our CRM and calendar?",
    a: "Yes. Common workflows include HubSpot, Google Calendar, Calendly, helpdesk tools, spreadsheets, email, SMS, and custom APIs.",
  },
  {
    q: "How should we start?",
    a: "Start with one measurable workflow. Prove value, train the team, then expand into more channels or Managed AI Operations.",
  },
  {
    q: "Is voice the only thing Automate4U builds?",
    a: "No. Voice is often the easiest frontline experience to understand, but most real deployments connect voice to chat, email, CRM, calendars, task routing, reporting, and other operational agents.",
  },
];

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [state, formAction, pending] = useActionState(submitAssessmentLeadWithState, {
    ok: false,
    message: "",
  });

  useEffect(() => {
    if (!state.message) return;

    trackEvent(state.ok ? "site_assessment_form_submitted" : "site_assessment_form_failed", {
      page: "/core-services/ai-voice",
      ctaLocation: "ai_voice_modal",
      serviceInterest: "ai-voice",
    });
  }, [state.message, state.ok]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-end bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex h-full w-full max-w-[760px] flex-col bg-white shadow-[-20px_0_70px_rgba(0,0,0,0.22)] md:h-[88vh] md:rounded-l-2xl">
        <div className="flex items-center justify-between border-b border-card-border px-6 py-5">
          <h3 id="popup-title" className="text-xl font-extrabold text-ink">
            Request Your AI Voice Assessment
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted hover:bg-[#f5f8f7] hover:text-ink"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {state.ok ? (
            <div className="grid place-items-center gap-4 py-12 text-center" role="status">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#e9f9f3] text-2xl font-bold text-[#169b78]">
                ✓
              </div>
              <h4 className="text-xl font-extrabold text-ink">We&apos;ll review your workflow within 1 business day.</h4>
              <p className="max-w-[520px] text-muted">{state.message}</p>
              <button onClick={onClose} className="mt-2 rounded-full bg-accent px-6 py-3 font-extrabold text-white hover:bg-btn-hover">
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-center leading-7 text-muted">
                Tell us where calls slow your team down. We will assess the workflow, likely savings, guardrails, and the best next step.
              </p>
              <form className="grid gap-4" action={formAction} noValidate>
                <input type="hidden" name="sourcePage" value="/core-services/ai-voice" />
                <input type="hidden" name="ctaLocation" value="ai_voice_modal" />
                <input type="hidden" name="serviceInterest" value="ai-voice" />
                <AttributionFields />

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Work email *</span>
                    <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" className="rounded-xl border border-card-border px-3 py-3" />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Company *</span>
                    <input type="text" name="company" required placeholder="Company Inc." className="rounded-xl border border-card-border px-3 py-3" />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Team size</span>
                    <select name="team_size" defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
                      <option value="" disabled>Select</option>
                      {["1-10", "11-50", "51-200", "200+"].map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Current channels</span>
                    <select name="channels" defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
                      <option value="" disabled>Select</option>
                      {["Phone only", "Phone + email", "Phone + SMS", "Multiple channels"].map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Monthly budget (USD)</span>
                    <select name="budget" defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
                      <option value="" disabled>Select</option>
                      {["Exploring", "$3k-$5k", "$5k-$10k", "$10k+"].map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-sm font-semibold text-ink">Timeline</span>
                    <select name="timeline" defaultValue="" className="rounded-xl border border-card-border px-3 py-3">
                      <option value="" disabled>Select</option>
                      {["ASAP", "1-2 months", "This quarter", "Just exploring"].map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label className="grid gap-1.5 md:col-span-2">
                    <span className="text-sm font-semibold text-ink">What does success look like?</span>
                    <textarea name="workflowPain" rows={4} placeholder="e.g., fewer missed calls, faster bookings, safer handoffs, less admin follow-up..." className="rounded-xl border border-card-border px-3 py-3" />
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
                  onClick={() => trackEvent("site_assessment_cta_clicked", {
                    page: "/core-services/ai-voice",
                    ctaLocation: "ai_voice_modal",
                    serviceInterest: "ai-voice",
                  })}
                  className="inline-flex justify-center rounded-full bg-accent px-6 py-3 font-extrabold text-white hover:bg-btn-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {pending ? "Submitting..." : "Request My Assessment"}
                </button>
                <p className="text-center text-sm text-muted">We never sell your data. By submitting you agree we may contact you about this request.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function EventLog({ callActive }: { callActive: boolean }) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 text-white shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#7df0d1]">Back-office event log</p>
          <h3 className="mt-2 text-2xl font-extrabold">What happens after the call</h3>
        </div>
        <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
          {callActive ? "Live call" : "Demo workflow"}
        </span>
      </div>

      <div className="grid gap-3">
        {operationsEvents.map((event, index) => (
          <div key={event.label} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
              {index + 1}
            </div>
            <div>
              <h4 className="font-extrabold text-white">{event.label}</h4>
              <p className="mt-1 text-sm leading-6 text-white/68">{event.detail}</p>
            </div>
            <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-extrabold text-ink">{event.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AIVoicePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const retellClientRef = useRef<RetellClient | null>(null);
  const [callActive, setCallActive] = useState(false);
  const [callStarting, setCallStarting] = useState(false);
  const daycareSolution = solutions.find((solution) => solution.slug === "daycare-voice-agent");

  useEffect(() => {
    import("retell-client-js-sdk").then(({ RetellWebClient }) => {
      const client = new RetellWebClient() as RetellClient;
      retellClientRef.current = client;

      client.on("call_started", () => {
        trackEvent("site_voice_demo_started", {
          page: "/core-services/ai-voice",
          ctaLocation: "voice_demo",
          serviceInterest: "ai-voice",
        });
        setCallActive(true);
        setCallStarting(false);
      });

      client.on("call_ended", () => {
        trackEvent("site_voice_demo_completed", {
          page: "/core-services/ai-voice",
          ctaLocation: "voice_demo",
          serviceInterest: "ai-voice",
        });
        setCallActive(false);
        setCallStarting(false);
      });

      client.on("error", (error) => {
        console.error("Retell error:", error);
        trackEvent("site_voice_demo_failed", {
          page: "/core-services/ai-voice",
          ctaLocation: "voice_demo",
          serviceInterest: "ai-voice",
        });
        setCallActive(false);
        setCallStarting(false);
      });
    }).catch((error) => console.error("Could not load Retell SDK", error));

    return () => {
      if (retellClientRef.current) {
        try {
          retellClientRef.current.stopCall();
        } catch {
          // Ignore teardown errors from a closed demo session.
        }
      }
    };
  }, []);

  const launchRetellVoice = async () => {
    if (!retellClientRef.current) return;

    if (callActive) {
      retellClientRef.current.stopCall();
      return;
    }

    try {
      setCallStarting(true);
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const response = await fetch("/api/retell/web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ metadata: { source: "website-voice-btn" } }),
      });

      const data = await response.json();
      if (!response.ok || !data.access_token) {
        throw new Error(data.error || "Failed to start call");
      }

      await retellClientRef.current.startCall({
        accessToken: data.access_token,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(error);
      trackEvent("site_voice_demo_failed", {
        page: "/core-services/ai-voice",
        ctaLocation: "voice_demo",
        serviceInterest: "ai-voice",
      });
      alert(`Sorry, couldn't start the voice session. (${message})`);
      setCallStarting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#051C2C] px-4 py-12 text-white md:py-[72px]" aria-labelledby="voice-hero-title">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              AI Voice Agents
            </p>
            <h1 id="voice-hero-title" className="max-w-[760px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[54px]">
              AI voice that answers calls and moves the work forward.
            </h1>
            <p className="mt-5 max-w-[650px] text-base leading-8 text-white/74 md:text-[17px]">
              Your voice agent should not stop at a conversation. It should qualify the caller, check business context, trigger follow-up, update systems, and hand off to humans when the request needs judgment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#voice-demo" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                Try Voice Demo
              </a>
              <button onClick={() => setModalOpen(true)} className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </button>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/58">
              Start with one routine call workflow, prove value, then expand into connected agents across chat, email, operations, and support.
            </p>
          </div>

          <div className="relative rounded-lg border border-white/12 bg-white/[0.07] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <Image
              src="/images/services/voice_agent.jpg"
              alt="AI voice agent interface connected to business workflow actions"
              width={900}
              height={700}
              priority
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-lg border border-white/30 bg-[#06131d]/88 p-4 text-white shadow-[0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Voice to operations</p>
              <div className="mt-3 grid gap-2 text-sm font-semibold sm:grid-cols-3">
                <span className="rounded-md bg-white/10 px-3 py-2">Intent captured</span>
                <span className="rounded-md bg-white/10 px-3 py-2">Action routed</span>
                <span className="rounded-md bg-white/10 px-3 py-2">KPI logged</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="voice-proof-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Why voice first"
            title="Stop letting important calls interrupt your team or disappear."
            description="Missed calls, repetitive questions, booking friction, quote requests, urgent escalations, and after-hours inquiries are visible problems. Voice is the starting point; the bigger win is connecting those calls to the workflows behind them."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Immediate coverage", "Answer routine calls instantly without forcing staff to stop deep work."],
              ["Structured intake", "Collect the right details and classify intent before the handoff."],
              ["Downstream action", "Update systems, notify staff, create tasks, and record outcomes."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="voice-demo" className="scroll-mt-28 bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="voice-demo-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
              Live demo
            </p>
            <h2 id="voice-demo-title" className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[40px]">
              Test the voice experience, then inspect the operational workflow.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              The live demo proves call quality. The event log proves the business model: every conversation should become structured data, workflow action, human handoff, and measurable outcome.
            </p>

            <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.07] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-white/60">Demo status</p>
                  <p className="mt-1 text-2xl font-extrabold">{callActive ? "Live call in progress" : "Ready to connect"}</p>
                </div>
                <span className={`h-3 w-3 rounded-full ${callActive ? "bg-red-400" : "bg-[#1db993]"}`} aria-hidden="true" />
              </div>

              <div className="mt-6 rounded-lg border border-white/12 bg-[#0d1720]/70 p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#1db993] text-lg font-extrabold text-[#05251d]">AI</div>
                  <div>
                    <h3 className="font-extrabold text-white">Automate4U Voice Receptionist</h3>
                    <p className="text-sm text-white/60">Natural intake, qualification, and handoff</p>
                  </div>
                </div>
                <div className="grid gap-3">
                  <div className="rounded-lg bg-white/10 p-4 text-sm leading-6 text-white/78">
                    <strong className="block text-white">Agent</strong>
                    Thanks for calling. I can help answer questions, collect details, and direct you to the right next step.
                  </div>
                  <div className="ml-auto max-w-[88%] rounded-lg bg-[#1db993] p-4 text-sm leading-6 font-semibold text-[#05251d]">
                    <strong className="block">Caller</strong>
                    I want to book a consultation and check whether someone can call me back today.
                  </div>
                </div>
              </div>

              <button
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb] disabled:cursor-not-allowed disabled:opacity-70"
                type="button"
                onClick={launchRetellVoice}
                disabled={callStarting}
              >
                {callStarting ? "Connecting..." : callActive ? "End Call" : "Try Now"}
              </button>
              <p className="mt-3 text-sm leading-6 text-white/58">
                Your browser will request microphone access. If the demo cannot start, the assessment path still works.
              </p>
            </div>
          </div>

          <EventLog callActive={callActive} />
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="workflow-examples-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Workflow examples"
            title="Voice becomes valuable when it connects to the work behind the phone call."
            description="The same frontline pattern can support home services, manufacturing, education, professional services, clinics, ecommerce, and other operations-heavy teams."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {workflowExamples.map((example) => (
              <article key={example.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h3 className="text-xl font-extrabold text-ink">{example.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted"><strong className="text-ink">Pain:</strong> {example.pain}</p>
                <p className="mt-3 text-sm leading-6 text-muted"><strong className="text-ink">Workflow:</strong> {example.workflow}</p>
                <p className="mt-5 rounded-lg bg-[#e9f9f3] px-4 py-3 text-sm font-bold text-[#169b78]">{example.kpi}</p>
                {example.href ? (
                  <Link href={example.href} className="mt-5 inline-flex text-sm font-extrabold text-[#169b78]">
                    See focused solution <span className="ml-1" aria-hidden="true">-&gt;</span>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {daycareSolution ? (
        <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="focused-solution-title">
          <div className="mx-auto grid max-w-[1180px] gap-10 rounded-lg border border-card-border bg-[#f8fbfa] p-6 shadow-[0_12px_36px_rgba(15,23,32,0.05)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#167f65]">Focused implementation</p>
              <h2 id="focused-solution-title" className="mt-3 text-[28px] font-extrabold leading-tight tracking-[-0.01em] text-ink md:text-[38px]">
                See how voice works when it is designed for one real operating environment.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                The Daycare Voice Agent page shows the calmer, more specific version of the voice story: enrollment calls, parent questions, location routing, approved responses, sensitive handoffs, and a practical rollout for busy childcare teams.
              </p>
            </div>
            <div className="rounded-lg border border-card-border bg-white p-6">
              <h3 className="text-2xl font-extrabold leading-tight text-ink">{daycareSolution.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{daycareSolution.metaDescription}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={daycareSolution.href} className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-extrabold text-white hover:bg-btn-hover">
                  View Solution
                </Link>
                <Link href="/industries/education-childcare" className="inline-flex h-11 items-center justify-center rounded-full border border-card-border px-5 text-sm font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]">
                  Education Context
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="pricing-confidence-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Pricing confidence"
            title="Voice automation pricing should be transparent, but not reduced to raw API cost."
            description="Voice automation should feel financially clear before you commit. We explain the cost drivers, start with a useful pilot, and tie expansion to volume, risk, reliability, and measurable value."
          />
          <div className="grid gap-4">
            {pricingNotes.map((note) => (
              <div key={note} className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 text-sm leading-6 text-muted">
                {note}
              </div>
            ))}
            <div className="rounded-lg border border-[#1db993]/30 bg-[#e9f9f3] p-5">
              <h3 className="text-xl font-extrabold text-ink">Recommended buying path</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Free assessment, then either a paid AI Blueprint Sprint or a pilot project. Production systems can expand into Managed AI Operations once usage and value are clear.
              </p>
              <button onClick={() => setModalOpen(true)} className="mt-5 rounded-full bg-accent px-6 py-3 font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="voice-faq-title">
        <div className="mx-auto max-w-[980px]">
          <SectionHeader
            eyebrow="FAQ"
            title="What teams usually need to know before starting."
            align="center"
          />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <summary className="cursor-pointer text-lg font-extrabold text-ink">{faq.q}</summary>
                <p className="mt-4 text-sm leading-6 text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20" aria-labelledby="voice-final-title">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#7df0d1]">Free AI Workflow Assessment</p>
            <h2 id="voice-final-title" className="text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[40px]">
              Find the first call workflow worth automating.
            </h2>
            <p className="mt-4 max-w-[720px] text-base leading-7 text-white/70">
              We will help you identify the call flow, integrations, human controls, and KPI target that make sense as a first step.
            </p>
          </div>
          <button onClick={() => setModalOpen(true)} className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
            Get Free Assessment
          </button>
        </div>
      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
