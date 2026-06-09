"use client";

import { useEffect, useMemo, useState } from "react";

const consoleRows = [
  {
    icon: "phone",
    label: "Inbound call qualified",
    detail: "Intent, urgency, and contact details captured",
    status: "Routed",
    color: "green",
    activeLabel: "Listening to caller intent",
    currentDetail: "Intent, urgency, contact details, and next step are being captured from the call.",
    time: "Now",
  },
  {
    icon: "mail",
    label: "Quote email reviewed",
    detail: "Request summarized and matched to CRM",
    status: "Drafted",
    color: "blue",
    activeLabel: "Preparing response draft",
    currentDetail: "Request details are being summarized so the team can reply with context.",
    time: "14s ago",
  },
  {
    icon: "calendar",
    label: "Assessment slot checked",
    detail: "Availability found and booking path prepared",
    status: "Ready",
    color: "green",
    activeLabel: "Checking calendar options",
    currentDetail: "Available assessment times are being checked before the meeting path is sent.",
    time: "31s ago",
  },
  {
    icon: "database",
    label: "HubSpot updated",
    detail: "Deal, note, owner, and next action logged",
    status: "Synced",
    color: "amber",
    activeLabel: "Writing CRM activity",
    currentDetail: "Deal, owner, note, and next action are being logged in HubSpot.",
    time: "47s ago",
  },
];

const actionLog = [
  {
    time: "12:04",
    label: "CRM note added",
    detail: "Call summary and qualification details saved",
  },
  {
    time: "12:03",
    label: "Owner notified",
    detail: "Sales handoff sent with transcript context",
  },
  {
    time: "12:02",
    label: "Follow-up prepared",
    detail: "Email draft and meeting link queued",
  },
];

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

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export default function AgentOperationsConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [handledCount, setHandledCount] = useState(18);

  useEffect(() => {
    let timer: number;

    const scheduleNext = () => {
      timer = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % consoleRows.length);
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
  const runningCount = activeIndex % 3 === 2 ? 3 : activeIndex % 3 === 1 ? 2 : 1;
  const reviewCount = activeIndex % 4 === 0 ? 1 : 2;
  const runningIndexes = useMemo(
    () => new Set(Array.from({ length: runningCount }, (_, offset) => (activeIndex + offset) % consoleRows.length)),
    [activeIndex, runningCount],
  );

  return (
    <div className="agent-console rounded-lg border border-white/10 bg-[#071821] p-4 text-white shadow-[0_18px_46px_rgba(15,23,32,0.16)]" aria-label="Agent operations preview">
      <div className="agent-console-grid" aria-hidden="true" />

      <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="min-w-0">
          <div className="inline-flex min-w-0 items-center gap-2 text-sm font-extrabold text-white">
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
          ["In progress", String(runningIndexes.size)],
          ["Handled today", String(handledCount)],
          ["Review queue", String(reviewCount)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/8 bg-white/[0.045] px-4 py-3">
            <p className="text-[11px] font-bold uppercase text-white/48">{label}</p>
            <p className="mt-1 text-2xl font-extrabold leading-none text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="agent-console-active relative mt-3 rounded-lg border border-[#7df0d1]/22 bg-[#7df0d1]/8 p-4" aria-live="polite">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase text-[#7df0d1]">Currently working on</p>
            <h3 className="mt-1 text-base font-extrabold leading-6 text-white">{activeRow.activeLabel}</h3>
            <p className="mt-1 text-xs font-semibold leading-5 text-white/62">{activeRow.currentDetail}</p>
          </div>
          <span className="agent-console-spinner" aria-label="In progress" />
        </div>
      </div>

      <div className="relative mt-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-xs font-extrabold uppercase text-white/58">Work queue</p>
          <span className="text-[11px] font-bold text-white/36">Jobs moving through the workflow</span>
        </div>
        <div className="agent-console-timeline grid gap-2">
        {consoleRows.map((row, index) => {
          const isRunning = runningIndexes.has(index);

          return (
            <article
              key={row.label}
              className={`agent-console-row agent-console-timeline-row rounded-lg border border-white/8 bg-white/[0.045] px-3 py-2.5 ${
                isRunning ? "agent-console-row-active" : ""
              }`}
              style={{ animationDelay: `${index * 520}ms` }}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#7df0d1]/22 bg-[#1db993]/14 text-[#7df0d1]">
                  <ConsoleIcon name={row.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-extrabold leading-5 text-white">{row.label}</h3>
                    <div className="shrink-0 text-right">
                      {isRunning ? (
                        <strong className="agent-console-status agent-console-status-running">
                          <span className="agent-console-status-spinner" aria-hidden="true" />
                          Running
                        </strong>
                      ) : (
                        <strong className={`agent-console-status agent-console-status-${row.color}`}>
                          {row.status}
                        </strong>
                      )}
                      <p className="mt-1 text-[10px] font-bold text-white/42">
                        {isRunning ? (index === activeIndex ? "Focus" : "Now") : row.time}
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/58">{row.detail}</p>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </div>

      <div className="relative mt-4 rounded-lg border border-white/8 bg-white/[0.035] p-3">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2">
          <p className="text-xs font-extrabold uppercase text-[#7df0d1]">Recent event log</p>
          <span className="text-[11px] font-bold text-white/42">Last 60 seconds</span>
        </div>
        <div className="mt-2 grid gap-2">
          {actionLog.map((item) => (
            <div key={item.label} className="grid gap-2 rounded-md px-1 py-1.5 text-xs font-semibold text-white/58 sm:grid-cols-[48px_1fr]">
              <span className="text-white/36">{item.time}</span>
              <div className="min-w-0">
                <p className="font-extrabold leading-5 text-white/82">{item.label}</p>
                <p className="text-[11px] leading-4 text-white/46">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-3 flex items-center gap-2 text-xs font-bold text-white/68">
        <span className="agent-console-pulse" aria-hidden="true" />
        <span>Calls, emails, CRM, calendar, and handoffs monitored in one workflow.</span>
      </div>
    </div>
  );
}
