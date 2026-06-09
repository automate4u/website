"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const consoleRows = [
  {
    icon: "phone",
    label: "Inbound call received",
    detail: "New lead call routed and captured",
    status: "In progress",
    color: "green",
    activeLabel: "Inbound call received",
    currentDetail: "New lead call is being answered, qualified, summarized, and routed to the right owner.",
    time: "Now",
    system: "Voice line",
    steps: [
      ["Call answered", "Call connected and recorded"],
      ["Intent captured", "Intent, urgency, and need captured"],
      ["Contact details captured", "Name, role, company, and channel verified"],
      ["CRM note written", "Summary and next action logged"],
      ["Owner assigned", "Routed to appropriate account owner"],
      ["Follow-up prepared", "Draft email and meeting link created"],
    ],
  },
  {
    icon: "mail",
    label: "Quote request email",
    detail: "Request summarized and matched to CRM",
    status: "Active",
    color: "blue",
    activeLabel: "Quote request email",
    currentDetail: "Specs, deadline, account history, and missing details are being turned into a reply draft.",
    time: "14s ago",
    system: "Shared inbox",
    steps: [
      ["Email parsed", "Sender, attachments, and request type captured"],
      ["CRM matched", "Existing company and deal checked"],
      ["Requirements extracted", "SKU, quantity, timeline, and notes structured"],
      ["Missing fields flagged", "Owner can ask one clean follow-up"],
      ["Reply drafted", "Response prepared from approved language"],
      ["Review task queued", "Pricing approval sent to sales"],
    ],
  },
  {
    icon: "calendar",
    label: "Assessment slot check",
    detail: "Availability found and booking path prepared",
    status: "Ready",
    color: "green",
    activeLabel: "Assessment slot check",
    currentDetail: "Calendar openings are being matched to the request before the booking path is sent.",
    time: "31s ago",
    system: "Calendar",
    steps: [
      ["Request classified", "Workflow assessment interest confirmed"],
      ["Calendar checked", "Available windows and buffers reviewed"],
      ["Meeting path selected", "Correct assessment link prepared"],
      ["Context attached", "Workflow notes added to booking context"],
      ["Confirmation drafted", "Reply prepared for visitor"],
      ["Reminder queued", "Internal follow-up task prepared"],
    ],
  },
  {
    icon: "database",
    label: "HubSpot activity write",
    detail: "Deal, note, owner, and next action logged",
    status: "Queued",
    color: "green",
    activeLabel: "Writing CRM activity",
    currentDetail: "Deal, owner, note, and next action are being logged in HubSpot.",
    time: "47s ago",
    system: "HubSpot",
    steps: [
      ["Record located", "Contact and company matched"],
      ["Deal checked", "Pipeline stage and owner reviewed"],
      ["CRM note written", "Call and request summary saved"],
      ["Next action added", "Task assigned with due date"],
      ["Owner notified", "Summary sent to the right human"],
      ["Audit event logged", "Workflow outcome recorded"],
    ],
  },
  {
    icon: "user",
    label: "Human review handoff",
    detail: "Sensitive exception prepared for owner approval",
    status: "Needs review",
    color: "amber",
    activeLabel: "Preparing human handoff",
    currentDetail: "The agent is packaging context, source evidence, and suggested next action for staff review.",
    time: "52s ago",
    system: "Review queue",
    steps: [
      ["Exception detected", "Low-confidence or sensitive request flagged"],
      ["Source trail attached", "Transcript and system evidence linked"],
      ["Recommended action drafted", "Owner sees the safest next step"],
      ["Permission checked", "Only approved staff can resolve"],
      ["Review task opened", "Handoff created with priority"],
      ["Customer response held", "Final action waits for approval"],
    ],
  },
];

type LogEvent = {
  id: string;
  label: string;
  status: "Running" | "Completed" | "Queued" | "Review";
  timestamp: Date | null;
};

const seededLogEvents: LogEvent[] = [
  { id: "seed-crm-note", label: "CRM note added", status: "Running", timestamp: null },
  { id: "seed-owner", label: "Owner notified", status: "Running", timestamp: null },
  { id: "seed-contact", label: "Contact details captured", status: "Completed", timestamp: null },
  { id: "seed-follow-up", label: "Follow-up prepared", status: "Queued", timestamp: null },
];

function formatLogTime(timestamp: Date | null) {
  if (!timestamp) return "--:--:--";

  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function ConsoleIcon({ name }: { name: string }) {
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
        <path d="M8 2v4M16 2v4M3 10h18" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="m9 16 2 2 4-5" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export default function AgentOperationsConsole({ wide = false }: { wide?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [handledCount, setHandledCount] = useState(54);
  const [logEvents, setLogEvents] = useState<LogEvent[]>(seededLogEvents);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const now = Date.now();

      setLogEvents((current) =>
        current.map((event, index) => ({
          ...event,
          timestamp: new Date(now - index * 16000),
        })),
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: number;

    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        const nextIndex = (activeIndexRef.current + 1) % consoleRows.length;
        const nextRow = consoleRows[nextIndex];
        const completedStep = nextRow.steps[Math.max(0, (nextIndex + 2) % nextRow.steps.length)]?.[0] ?? nextRow.label;
        const statuses: LogEvent["status"][] = nextRow.color === "amber"
          ? ["Review", "Running", "Queued"]
          : ["Running", "Completed", "Queued"];

        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        setLogEvents((events) => [
          {
            id: `${Date.now()}-${nextRow.label}`,
            label: completedStep,
            status: statuses[nextIndex % statuses.length],
            timestamp: new Date(),
          },
          ...events.slice(0, 3).map((event, index) => ({
            ...event,
            status: index === 0 && event.status === "Running" ? "Completed" : event.status,
          })),
        ]);
        scheduleNext();
      }, 1900 + Math.floor(Math.random() * 2100));
    };

    scheduleNext();

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: number;

    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        setHandledCount((current) => current + (Math.random() > 0.82 ? 2 : 1));
        scheduleNext();
      }, 2600 + Math.floor(Math.random() * 5400));
    };

    scheduleNext();

    return () => window.clearTimeout(timer);
  }, []);

  const activeRow = consoleRows[activeIndex];
  const activeStep = activeIndex % 4 === 0 ? 3 : activeIndex % 4 === 1 ? 4 : activeIndex % 4 === 2 ? 2 : 1;
  const runningCount = activeIndex % 3 === 2 ? 3 : 2;
  const reviewCount = activeIndex % 4 === 0 ? 1 : 2;
  const runningIndexes = useMemo(
    () => new Set(Array.from({ length: runningCount }, (_, offset) => (activeIndex + offset) % consoleRows.length)),
    [activeIndex, runningCount],
  );
  const queueRows = useMemo(
    () => consoleRows.map((_, offset) => consoleRows[(activeIndex + offset) % consoleRows.length]),
    [activeIndex],
  );
  const displayedQueueRows = wide ? queueRows : queueRows.slice(0, 4);
  const displayedSteps = wide ? activeRow.steps : activeRow.steps.slice(0, 5);

  return (
    <div className="agent-console rounded-lg border border-white/10 bg-[#071821] p-4 text-white shadow-[0_18px_46px_rgba(15,23,32,0.16)] md:p-5" aria-label="Agent operations preview">
      <div className="agent-console-grid" aria-hidden="true" />

      <div className="relative flex items-start justify-between gap-3 border-b border-white/10 pb-3">
        <div className="min-w-0">
          <div className="inline-flex min-w-0 items-center gap-2 text-base font-extrabold text-white md:text-lg">
            <span className="agent-console-pulse" aria-hidden="true" />
            <span className="truncate">Agent operations dashboard</span>
          </div>
          <p className="mt-1 text-xs font-semibold leading-5 text-white/56">Ava is handling calls, emails, CRM updates, and handoffs in real time.</p>
        </div>
        <span className="shrink-0 rounded-full border border-[#7df0d1]/28 bg-[#7df0d1]/10 px-2.5 py-1 text-[11px] font-extrabold uppercase text-[#7df0d1]">
          Live
        </span>
      </div>

      <div className="relative mt-3 grid gap-2 sm:grid-cols-3">
        {[
          ["Active activities", String(runningIndexes.size)],
          ["Handled today", String(handledCount)],
          ["Needs review", String(reviewCount)],
        ].map(([label, value], index) => (
          <div key={label} className="rounded-lg border border-white/8 bg-white/[0.045] px-4 py-3">
            <p className="text-[11px] font-bold uppercase text-white/48">{label}</p>
            <div className="mt-1 flex items-end justify-between gap-3">
              <p className="text-2xl font-extrabold leading-none text-white">{value}</p>
              <span className={`agent-console-sparkline agent-console-sparkline-${index + 1}`} aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      <div className={`relative mt-3 grid gap-3 ${wide ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
        <section className="rounded-lg border border-white/10 bg-white/[0.04] p-3 md:p-4" aria-label="Live activity queue">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-xs font-extrabold uppercase text-white/62">Activity queue</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7df0d1]">
              <span className="agent-console-pulse" aria-hidden="true" />
              Live queue
            </span>
          </div>
          <div className="grid gap-2">
            {displayedQueueRows.map((row, queueIndex) => {
              const sourceIndex = consoleRows.findIndex((item) => item.label === row.label);
              const isRunning = runningIndexes.has(sourceIndex);

              return (
                <article
                  key={`${row.label}-${activeIndex}`}
                  className={`agent-console-row rounded-lg border border-white/8 bg-white/[0.045] p-3 ${wide && queueIndex > 3 ? "hidden sm:block" : ""} ${
                    queueIndex === 0 ? "agent-console-row-active" : ""
                  }`}
                  style={{ animationDelay: `${queueIndex * 120}ms` }}
                >
                  <div className="grid grid-cols-[28px_34px_1fr] items-center gap-2 md:grid-cols-[34px_40px_1fr_auto] md:gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/12 text-xs font-extrabold text-white/82 md:h-8 md:w-8">
                      {queueIndex + 1}
                    </span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border text-[#7df0d1] md:h-10 md:w-10 ${
                      queueIndex === 0 ? "border-[#7df0d1]/35 bg-[#1db993]/18" : "border-white/10 bg-white/[0.05]"
                    }`}>
                      <ConsoleIcon name={row.icon} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-extrabold leading-5 text-white">{row.label}</h3>
                      <p className="truncate text-xs font-semibold leading-5 text-white/56">{row.detail}</p>
                    </div>
                    <strong className={`agent-console-status hidden md:inline-flex ${
                      isRunning ? "agent-console-status-running" : `agent-console-status-${row.color}`
                    }`}>
                      {isRunning ? <span className="agent-console-status-spinner" aria-hidden="true" /> : null}
                      {queueIndex === 0 ? "In progress" : row.status}
                    </strong>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="agent-console-active relative rounded-lg border border-[#7df0d1]/22 bg-[#7df0d1]/8 p-3 md:p-4" aria-live="polite" aria-label="Current activity details">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-[11px] font-extrabold uppercase text-[#7df0d1]">Current activity</p>
              <div className="mt-2 flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#7df0d1]/32 bg-[#1db993]/18 text-[#7df0d1]">
                  <ConsoleIcon name={activeRow.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold leading-6 text-white md:text-xl">{activeRow.activeLabel}</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/64">{activeRow.currentDetail}</p>
                </div>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#7df0d1]/22 bg-[#7df0d1]/10 px-3 py-1.5 text-xs font-extrabold text-[#7df0d1]">
              In progress
              <span className="agent-console-status-spinner" aria-hidden="true" />
            </span>
          </div>

          <div className={`mt-4 grid gap-2 ${wide ? "lg:grid-cols-2 lg:gap-x-4" : "agent-console-timeline"}`}>
            {displayedSteps.map(([title, detail], stepIndex) => {
              const completed = stepIndex < activeStep;
              const active = stepIndex === activeStep;

              return (
                <div key={title} className={`agent-console-timeline-row grid-cols-[32px_1fr_auto] items-center gap-3 border-b border-white/8 pb-2.5 last:border-b-0 last:pb-0 ${wide && stepIndex > 3 ? "hidden sm:grid" : "grid"}`}>
                  <span className={`grid h-7 w-7 place-items-center rounded-full border text-xs font-extrabold ${
                    completed ? "border-[#7df0d1]/35 bg-[#1db993]/22 text-[#7df0d1]" : active ? "border-[#7df0d1] bg-[#1db993]/18 text-white shadow-[0_0_20px_rgba(125,240,209,0.22)]" : "border-white/14 text-white/48"
                  }`}>
                    {completed ? "✓" : stepIndex + 1}
                  </span>
                  <div className="min-w-0">
                    <p className={`truncate text-sm font-extrabold leading-5 ${completed || active ? "text-white" : "text-white/62"}`}>{title}</p>
                    <p className="truncate text-xs font-semibold leading-5 text-white/48">{detail}</p>
                  </div>
                  <span className={`hidden text-right text-[11px] font-bold sm:block ${
                    completed ? "text-[#7df0d1]" : active ? "text-[#7df0d1]" : "text-white/42"
                  }`}>
                    {completed ? "Completed" : active ? "Running" : "Queued"}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-2 rounded-lg border border-white/8 bg-[#071821]/50 p-3 sm:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="text-[11px] font-extrabold uppercase text-white/48">System touched</p>
              <p className="mt-1 text-sm font-extrabold text-white">{activeRow.system}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-white/54">
              {["API healthy", "Retry 0", "Audit on"].map((label) => (
                <span key={label} className="rounded-md border border-white/8 bg-white/[0.045] px-2 py-2">{label}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={`relative mt-3 gap-3 ${wide ? "hidden lg:grid lg:grid-cols-[1.1fr_0.9fr]" : "hidden"}`}>
        <section className="rounded-lg border border-white/8 bg-white/[0.035] p-3" aria-label="Recent event log">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
            <p className="text-xs font-extrabold uppercase text-[#7df0d1]">Live action log</p>
            <span className="text-[11px] font-bold text-white/42">Last 60 seconds</span>
          </div>
          <div className="mt-2 grid gap-1">
            {logEvents.map(({ id, timestamp, label, status }) => (
              <div key={id} className="grid grid-cols-[72px_1fr_auto] items-center gap-3 border-b border-white/8 py-2 text-xs font-semibold text-white/58 last:border-b-0">
                <span className="font-mono text-[#7df0d1]">{formatLogTime(timestamp)}</span>
                <span className="truncate font-bold text-white/82">{label}</span>
                <span className={status === "Queued" ? "text-white/42" : status === "Review" ? "text-[#bfdbfe]" : "text-[#7df0d1]"}>{status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/8 bg-white/[0.035] p-3" aria-label="Integration health">
          <p className="text-xs font-extrabold uppercase text-white/58">Connected systems</p>
          <div className="mt-3 grid gap-2">
            {[
              ["HubSpot", "99.1%", "Healthy"],
              ["Calendar", "98.8%", "Healthy"],
              ["Shared inbox", "1 draft", "Review"],
            ].map(([system, metric, state]) => (
              <div key={system} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 text-xs">
                <span className="truncate font-bold text-white/78">{system}</span>
                <span className="font-mono text-white/52">{metric}</span>
                <span className={state === "Healthy" ? "font-bold text-[#7df0d1]" : "font-bold text-[#bfdbfe]"}>{state}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="relative mt-3 flex items-center gap-2 text-xs font-bold text-white/68">
        <span className="agent-console-pulse" aria-hidden="true" />
        <span>Calls, emails, CRM, calendar, and handoffs monitored in one workflow.</span>
      </div>
    </div>
  );
}
