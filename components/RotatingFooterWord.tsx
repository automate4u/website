"use client";

import { useEffect, useState } from "react";

const automationWords = [
  "calls",
  "emails",
  "messages",
  "workflows",
  "follow-up",
  "data sync",
  "admin work",
  "customer support",
  "lead response",
  "quote requests",
  "bookings",
  "intake",
  "reporting",
  "handoffs",
  "content tasks",
  "CRM updates",
];

export default function RotatingFooterWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setVisible(false);

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % automationWords.length);
        setVisible(true);
      }, 300);
    }, 3400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span
      aria-hidden="true"
      className={`my-1 block min-h-[1.08em] text-[#167f65] transition-all duration-300 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
      }`}
    >
      {automationWords[index]}
    </span>
  );
}
