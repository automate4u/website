"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AssessmentTrigger from "@/components/AssessmentTrigger";
import SectionHeader from "@/components/sections/SectionHeader";
import { trackEvent } from "@/lib/analytics";
import { solutions } from "@/data/solutions";

type RetellClient = {
  on: (event: string, handler: (...args: unknown[]) => void) => void;
  startCall: (args: { accessToken: string }) => Promise<void>;
  stopCall: () => void;
};

const demoTakeaways = [
  {
    title: "Fast, confident first response",
    text: "The caller gets immediate acknowledgement instead of voicemail, hold time, or dead air.",
  },
  {
    title: "Professional intake structure",
    text: "Questions feel purposeful, not robotic, so the agent can qualify intent without sounding clumsy.",
  },
  {
    title: "Clear operational next step",
    text: "Calls end with captured details, routing, or booking readiness instead of unresolved conversation.",
  },
  {
    title: "Workflow readiness",
    text: "The demo is designed around the systems businesses actually care about connecting, not just a generic voice sample.",
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

const pilotDeliverables = [
  {
    title: "One defined call workflow",
    text: "Choose a routine but valuable flow such as missed-call recovery, booking intake, quote routing, enrollment inquiries, or front-desk questions.",
  },
  {
    title: "Approved call behavior",
    text: "Define what the agent can answer, what it should capture, what it must never promise, and when a person takes over.",
  },
  {
    title: "Connected next actions",
    text: "Route outcomes into the tools your team uses: CRM, calendar, inbox, ticketing, SMS, spreadsheets, or internal notifications.",
  },
  {
    title: "Measured pilot review",
    text: "Track handled calls, escalations, call minutes, response time, handoff quality, and where the workflow should improve next.",
  },
];

const pricingCards = [
  {
    title: "Focused pilot",
    range: "$3k-$5k/mo planning range",
    text: "Best for proving one call workflow with a defined usage allowance, staff review, and limited integrations.",
  },
  {
    title: "Production voice operations",
    range: "$5k-$10k+/mo planning range",
    text: "Best when voice becomes part of daily operations, with monitoring, tuning, reporting, integrations, and support.",
  },
  {
    title: "Usage-based voice volume",
    range: "$1.00-$1.50/min planning range",
    text: "Voice usage usually scales by handled call minutes, completed workflows, escalation needs, and risk level.",
  },
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
    q: "Does it sound human enough for real callers?",
    a: "The goal is professional and natural, not gimmicky. We tune the voice experience around your call types, approved language, escalation rules, and the kind of tone your customers expect.",
  },
  {
    q: "What happens if the AI does not know the answer?",
    a: "It should not guess. Unknown, sensitive, low-confidence, or high-value requests can be routed to staff with the caller context, transcript, and suggested next step.",
  },
  {
    q: "How should we start?",
    a: "Start with one measurable workflow. Prove value, train the team, then expand into more channels or Managed AI Operations.",
  },
  {
    q: "How long does setup usually take?",
    a: "A focused pilot can often move faster than a broad transformation, but timeline depends on call complexity, integrations, approval rules, and how quickly your team can validate the workflow.",
  },
  {
    q: "Can we edit the agent after launch?",
    a: "Yes. Voice agents should improve with real call patterns. We can adjust scripts, routing rules, escalation logic, integrations, and reporting as operations change.",
  },
  {
    q: "Is voice the only thing Automate4U builds?",
    a: "No. Voice is often the easiest frontline experience to understand, but most real deployments connect voice to chat, email, CRM, calendars, task routing, reporting, and other operational agents.",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function DemoTakeaways() {
  const communicationPoints = demoTakeaways.slice(0, 3);
  const workflowReadiness = demoTakeaways[3];

  return (
    <div className="mx-auto mt-6 grid max-w-[1120px] gap-4 lg:grid-cols-[1fr_0.95fr]">
      <div className="rounded-[18px] border border-card-border bg-white p-5 shadow-[0_14px_36px_rgba(15,23,32,0.055)] md:p-6">
        <h3 className="text-xl font-extrabold text-ink">What this interaction should communicate</h3>
        <div className="mt-5 grid gap-3">
          {communicationPoints.map((item) => (
            <article key={item.title} className="relative pl-5">
              <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-[#1db993] shadow-[0_0_0_4px_rgba(29,185,147,0.12)]" aria-hidden="true" />
              <h4 className="font-extrabold text-ink">{item.title}</h4>
              <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="rounded-[18px] border border-card-border bg-white p-5 shadow-[0_14px_36px_rgba(15,23,32,0.055)] md:p-6">
        <h3 className="text-xl font-extrabold text-ink">{workflowReadiness.title}</h3>
        <p className="mt-4 text-sm leading-6 text-muted">{workflowReadiness.text}</p>
        <div className="mt-5 grid gap-3 text-sm font-extrabold text-ink">
          {["CRM updates", "Calendar booking", "Lead notifications"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-lg border border-card-border bg-[#f8fbfa] px-4 py-3">
              <span>{item}</span>
              <span className="h-3 w-3 rounded-full bg-[#1db993] shadow-[0_0_0_5px_rgba(29,185,147,0.12)]" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AIVoicePage() {
  const retellClientRef = useRef<RetellClient | null>(null);
  const [callActive, setCallActive] = useState(false);
  const [callStarting, setCallStarting] = useState(false);
  const [monthlyCalls, setMonthlyCalls] = useState(600);
  const [adminMinutesPerCall, setAdminMinutesPerCall] = useState(4);
  const [staffCostPerHour, setStaffCostPerHour] = useState(30);
  const [automationShare, setAutomationShare] = useState(45);
  const daycareSolution = solutions.find((solution) => solution.slug === "daycare-voice-agent");

  const monthlyHoursRedirected = Math.round((monthlyCalls * adminMinutesPerCall * (automationShare / 100)) / 60);
  const monthlyCapacityValue = monthlyHoursRedirected * staffCostPerHour;

  useEffect(() => {
    import("retell-client-js-sdk").then(({ RetellWebClient }) => {
      const client = new RetellWebClient() as RetellClient;
      retellClientRef.current = client;

      client.on("call_started", () => {
        trackEvent("site_voice_demo_started", {
          page: "/services/ai-voice",
          ctaLocation: "voice_demo",
          serviceInterest: "ai-voice",
        });
        setCallActive(true);
        setCallStarting(false);
      });

      client.on("call_ended", () => {
        trackEvent("site_voice_demo_completed", {
          page: "/services/ai-voice",
          ctaLocation: "voice_demo",
          serviceInterest: "ai-voice",
        });
        setCallActive(false);
        setCallStarting(false);
      });

      client.on("error", (error) => {
        console.error("Retell error:", error);
        trackEvent("site_voice_demo_failed", {
          page: "/services/ai-voice",
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
        page: "/services/ai-voice",
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
              <AssessmentTrigger
                sourcePage="/services/ai-voice"
                ctaLocation="ai_voice_hero"
                serviceInterest="ai-voice"
                modalTitle="Request Your AI Voice Assessment"
                modalDescription="Tell us where calls slow your team down. We will assess the workflow, likely savings, guardrails, and the best next step."
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover"
              >
                Get Free Assessment
              </AssessmentTrigger>
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

      <section id="voice-demo" className="scroll-mt-28 bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="voice-demo-title">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto mb-8 max-w-[780px] text-center">
            <h2 id="voice-demo-title" className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] text-ink md:text-[40px]">
              Experience a live AI voice workflow before you commit.
            </h2>
            <p className="mx-auto mt-5 max-w-[660px] text-base leading-7 text-muted">
              Launch the demo to hear how a front-desk style agent can answer, qualify, and route calls with a polished customer experience.
            </p>
          </div>

          <div className="mx-auto max-w-[1120px] rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_70%_85%,rgba(29,185,147,0.18),transparent_34%),linear-gradient(135deg,#0b2230,#102734)] p-4 text-white shadow-[0_22px_60px_rgba(15,23,32,0.16)] md:p-5">
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <div className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/38" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/38" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/38" />
                </span>
                <p className="text-sm font-extrabold text-white/88">Live Voice Preview</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white/88">
                <span className={`h-2.5 w-2.5 rounded-full ${callActive ? "bg-red-400" : "bg-[#1db993]"}`} aria-hidden="true" />
                {callActive ? "Live call" : "Ready to connect"}
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.48fr_0.72fr] lg:items-start">
              <div className="rounded-[18px] border border-white/12 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#1db993] text-lg font-extrabold text-white">AI</div>
                  <div>
                    <h3 className="font-extrabold text-white">Automate4U Voice Receptionist</h3>
                    <p className="mt-1 text-sm text-white/68">Natural intake, qualification, and handoff</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Front-desk style intake", "Lead capture and routing", "Built for CRM and calendar workflows"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3 py-2 text-xs font-extrabold text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1db993]" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex h-[58px] items-end gap-2" aria-hidden="true">
                  {[18, 36, 24, 46, 18, 34, 54, 22, 42, 28, 50, 16].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="flex-1 rounded-full bg-gradient-to-t from-[#1db993] to-[#7df0d1]"
                      style={{ height }}
                    />
                  ))}
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl bg-white/14 px-4 py-3 text-center text-sm leading-6 text-white/88">
                    <strong className="block text-xs uppercase tracking-[0.08em] text-[#7df0d1]">Agent</strong>
                    Thanks for calling. I can help answer questions, collect details, and direct you to the right next step.
                  </div>
                  <div className="ml-auto max-w-[92%] rounded-xl border border-[#1db993]/30 bg-[#1db993]/18 px-4 py-3 text-center text-sm leading-6 text-white/90">
                    <strong className="block text-xs uppercase tracking-[0.08em] text-[#7df0d1]">Caller</strong>
                    I want to book a consultation and check whether someone can call me back today.
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-white/12 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-6">
                <h3 className="text-lg font-extrabold text-white">Test the live voice demo</h3>
                <p className="mt-4 text-sm leading-6 text-white/72">
                  Your browser will request microphone access. Once connected, speak naturally and test the live experience in real time.
                </p>
                <button
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0d1720] px-6 text-base font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-[#101f2b] disabled:cursor-not-allowed disabled:opacity-70"
                  type="button"
                  onClick={launchRetellVoice}
                  disabled={callStarting}
                >
                  {callStarting ? "Connecting..." : callActive ? "End Call" : "Try Now"}
                </button>
              </div>
            </div>
          </div>

          <DemoTakeaways />
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
                Explore a calmer, more specific voice workflow for enrollment calls, parent questions, location routing, approved responses, sensitive handoffs, and practical rollout planning for busy childcare teams.
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

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="voice-pilot-title">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Pilot path"
            title="What your first AI Voice pilot should prove."
            description="A strong pilot should not ask you to trust a full replacement system on day one. It should prove one workflow, the controls around it, and the operational value before expansion."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pilotDeliverables.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <p className="text-sm font-extrabold text-[#167f65]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-extrabold leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20" aria-labelledby="voice-value-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Value estimator"
              title="Estimate the repetitive call work your team could redirect."
              description="This is not a guaranteed ROI claim. It is a practical way to discuss whether routine calls are consuming enough staff time to justify a focused voice pilot."
            />
            <div className="mt-6 rounded-lg border border-[#1db993]/30 bg-[#e9f9f3] p-5">
              <p className="text-sm font-extrabold text-ink">Current estimate</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[34px] font-extrabold leading-none text-[#167f65]">{monthlyHoursRedirected}</p>
                  <p className="mt-2 text-sm font-semibold text-muted">staff hours/month that may be redirected</p>
                </div>
                <div>
                  <p className="text-[34px] font-extrabold leading-none text-[#167f65]">{formatCurrency(monthlyCapacityValue)}</p>
                  <p className="mt-2 text-sm font-semibold text-muted">estimated monthly labor capacity value</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                The final business case should also consider revenue captured from missed calls, response speed, customer experience, risk controls, and implementation/support cost.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 shadow-[0_12px_36px_rgba(15,23,32,0.05)] md:p-6">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-ink">Routine calls per month: {monthlyCalls}</span>
                <input type="range" min="100" max="3000" step="50" value={monthlyCalls} onChange={(event) => setMonthlyCalls(Number(event.target.value))} />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-ink">Admin minutes per routine call: {adminMinutesPerCall}</span>
                <input type="range" min="1" max="15" step="1" value={adminMinutesPerCall} onChange={(event) => setAdminMinutesPerCall(Number(event.target.value))} />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-ink">Loaded staff cost per hour: {formatCurrency(staffCostPerHour)}</span>
                <input type="range" min="18" max="75" step="1" value={staffCostPerHour} onChange={(event) => setStaffCostPerHour(Number(event.target.value))} />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-extrabold text-ink">Share likely handled or shortened by AI: {automationShare}%</span>
                <input type="range" min="10" max="80" step="5" value={automationShare} onChange={(event) => setAutomationShare(Number(event.target.value))} />
              </label>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">
              We validate these assumptions during assessment. Sensitive or unclear calls should be escalated instead of counted as fully automated.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbfa] px-4 py-14 md:py-20" aria-labelledby="pricing-confidence-title">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Pricing confidence"
            title="Know what drives the cost before you commit."
            description="Voice automation pricing depends on call volume, risk, integrations, monitoring, support, and how much work the system is allowed to complete. We explain the moving parts upfront so you can start with a pilot that makes financial sense."
          />
          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-3">
              {pricingCards.map((card) => (
                <article key={card.title} className="rounded-lg border border-card-border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                  <h3 className="text-lg font-extrabold text-ink">{card.title}</h3>
                  <p className="mt-3 text-xl font-extrabold leading-tight text-[#167f65]">{card.range}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {pricingNotes.map((note) => (
                <div key={note} className="rounded-lg border border-card-border bg-white p-5 text-sm leading-6 text-muted">
                  {note}
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-[#1db993]/30 bg-white p-5">
              <h3 className="text-xl font-extrabold text-ink">Recommended buying path</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Free assessment, then either a paid AI Blueprint Sprint or a pilot project. Production systems can expand into Managed AI Operations once usage and value are clear.
              </p>
              <AssessmentTrigger
                sourcePage="/services/ai-voice"
                ctaLocation="ai_voice_pricing_confidence"
                serviceInterest="ai-voice"
                modalTitle="Request Your AI Voice Assessment"
                modalDescription="Tell us where calls slow your team down. We will assess the workflow, likely savings, guardrails, and the best next step."
                className="mt-5 rounded-full bg-accent px-6 py-3 font-extrabold text-white hover:bg-btn-hover"
              >
                Get Free Assessment
              </AssessmentTrigger>
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
          <AssessmentTrigger
            sourcePage="/services/ai-voice"
            ctaLocation="ai_voice_final_cta"
            serviceInterest="ai-voice"
            modalTitle="Request Your AI Voice Assessment"
            modalDescription="Tell us where calls slow your team down. We will assess the workflow, likely savings, guardrails, and the best next step."
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover"
          >
            Get Free Assessment
          </AssessmentTrigger>
        </div>
      </section>
    </div>
  );
}
