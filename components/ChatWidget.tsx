"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConversationProvider, useConversation } from "@elevenlabs/react";

import { elevenLabsAgents } from "@/data/elevenlabs";
import { trackEvent } from "@/lib/analytics";

type WidgetMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

type ClientToolArgs = Record<string, unknown>;

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function renderMessageText(text: string) {
  return text.split(URL_PATTERN).map((part, index) => {
    if (!part.match(URL_PATTERN)) return part;

    const trailingPunctuation = part.match(/[),.!?;:]+$/)?.[0] ?? "";
    const href = trailingPunctuation ? part.slice(0, -trailingPunctuation.length) : part;

    return (
      <span key={`${href}-${index}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-[#7df0d1] underline underline-offset-2 hover:text-white"
        >
          {href}
        </a>
        {trailingPunctuation}
      </span>
    );
  });
}

function extractMessage(event: unknown): WidgetMessage | null {
  if (!event || typeof event !== "object") return null;

  const record = event as Record<string, unknown>;
  const type = readString(record.type);
  const role = readString(record.role);
  const source = readString(record.source);

  const agentResponse = readString(record.agent_response);
  const userTranscript = readString(record.user_transcript);
  const directMessage = readString(record.message);

  if (agentResponse) {
    return { id: crypto.randomUUID(), role: "assistant", text: agentResponse };
  }

  if (userTranscript) {
    return { id: crypto.randomUUID(), role: "user", text: userTranscript };
  }

  if (directMessage && (role === "agent" || source === "ai")) {
    return { id: crypto.randomUUID(), role: "assistant", text: directMessage };
  }

  if (directMessage && role === "user") {
    return { id: crypto.randomUUID(), role: "user", text: directMessage };
  }

  if (directMessage && type.includes("agent")) {
    return { id: crypto.randomUUID(), role: "assistant", text: directMessage };
  }

  if (directMessage && type.includes("user")) {
    return { id: crypto.randomUUID(), role: "user", text: directMessage };
  }

  return null;
}

function AvaWidgetInner() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [activeMode, setActiveMode] = useState<"voice" | "text">("text");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<WidgetMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hi, I can connect you with Automate4U support. Start a voice call or send a message.",
    },
  ]);
  const [error, setError] = useState("");
  const pendingTextRef = useRef<string>("");
  const modeRef = useRef<"voice" | "text">("text");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const transcriptRef = useRef<HTMLDivElement | null>(null);

  const dynamicVariables = useMemo(
    () => ({
      source_page: pathname || "/",
      cta_location: "sitewide_widget",
    }),
    [pathname],
  );

  const clientTools = useMemo(
    () => ({
      a4u_demo_show_action: () => undefined,
      a4u_demo_open_meeting_link: ({ meeting_url }: ClientToolArgs) => {
        const meetingUrl = readString(meeting_url);
        if (meetingUrl) window.open(meetingUrl, "_blank", "noopener,noreferrer");
      },
    }),
    [],
  );

  const conversation = useConversation({
    onConnect: () => {
      setError("");
      trackEvent("site_chat_demo_started", {
        page: pathname || "/",
        ctaLocation: "sitewide_widget",
        serviceInterest: "ai-voice",
        provider: "elevenlabs-ava",
        agentId: elevenLabsAgents.avaUniversal,
        demoType: modeRef.current,
      });
    },
    onDisconnect: () => {
      pendingTextRef.current = "";
    },
    onError: (sessionError) => {
      console.error("Ava widget error:", sessionError);
      setError("The assistant is unavailable right now.");
      trackEvent("site_voice_demo_failed", {
        page: pathname || "/",
        ctaLocation: "sitewide_widget",
        serviceInterest: "ai-voice",
        provider: "elevenlabs-ava",
        agentId: elevenLabsAgents.avaUniversal,
      });
    },
    onMessage: (event) => {
      const message = extractMessage(event);
      if (message) {
        if (message.role === "user" && modeRef.current === "text") return;
        setMessages((current) => [...current.slice(-9), message]);
      }
    },
  });

  const isSessionConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting";
  const isVoiceActive = isSessionConnected && activeMode === "voice";
  const isTextSessionActive = isSessionConnected && activeMode === "text";

  useEffect(() => {
    if (conversation.status !== "connected" || !pendingTextRef.current) return;

    const pendingText = pendingTextRef.current;
    pendingTextRef.current = "";
    conversation.sendUserMessage(pendingText);
  }, [conversation, conversation.status]);

  useEffect(() => {
    transcriptRef.current?.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    if (isTextMode) inputRef.current?.focus();
  }, [isTextMode]);

  const startSession = (mode: "voice" | "text") => {
    modeRef.current = mode;
    setActiveMode(mode);
    conversation.startSession({
      agentId: elevenLabsAgents.avaUniversal,
      textOnly: mode === "text",
      dynamicVariables: {
        ...dynamicVariables,
        entry_mode: mode === "voice" ? "website_widget_voice" : "website_widget_text",
      },
      clientTools,
    });
  };

  const handleToggleOpen = async () => {
    if (isOpen && (isSessionConnected || isConnecting)) {
      conversation.endSession();
    }

    setIsOpen((current) => !current);
    if (!isOpen) {
      trackEvent("site_chat_demo_viewed", {
        page: pathname || "/",
        ctaLocation: "sitewide_widget",
        serviceInterest: "ai-voice",
        provider: "elevenlabs-ava",
        agentId: elevenLabsAgents.avaUniversal,
      });
    }
  };

  const handleVoice = async () => {
    setError("");

    if (isVoiceActive || isConnecting) {
      conversation.endSession();
      return;
    }

    if (isTextSessionActive) {
      conversation.endSession();
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsTextMode(false);
      startSession("voice");
    } catch (voiceError) {
      console.error("Ava widget microphone error:", voiceError);
      setIsTextMode(true);
      setError("Microphone access was not available. You can still send a message.");
    }
  };

  const handleTextMode = () => {
    setIsTextMode(true);
    trackEvent("site_chat_demo_viewed", {
      page: pathname || "/",
      ctaLocation: "sitewide_widget_text",
      serviceInterest: "ai-voice",
      provider: "elevenlabs-ava",
      agentId: elevenLabsAgents.avaUniversal,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextText = text.trim();
    if (!nextText || isConnecting) return;

    setError("");
    setIsTextMode(true);
    setText("");
    setMessages((current) => [
      ...current.slice(-9),
      { id: crypto.randomUUID(), role: "user", text: nextText },
    ]);

    if (isTextSessionActive) {
      conversation.sendUserMessage(nextText);
      return;
    }

    pendingTextRef.current = nextText;
    startSession("text");
  };

  const statusLabel = isConnecting
    ? "Connecting"
    : isVoiceActive
      ? conversation.isSpeaking
        ? "Speaking"
        : "Voice connected"
      : isTextSessionActive
        ? "Chat connected"
      : "Online";
  const showConversation = isTextMode || isSessionConnected || messages.length > 1;
  const voiceButtonLabel = isConnecting
    ? "Connecting"
    : isVoiceActive
      ? "End call"
      : "Start voice call";
  const assistantName = "Welcome to Automate4U";
  const shouldCompactVoicePanel = isTextMode && !isVoiceActive;

  return (
    <div className="fixed bottom-5 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          className="w-[min(410px,calc(100vw-2rem))] overflow-hidden rounded-[18px] border border-white/12 bg-[#081821] text-white shadow-[0_22px_70px_rgba(8,24,33,0.32)]"
          aria-label="Automate4U assistant"
        >
          <div className="relative overflow-hidden border-b border-white/10 px-4 pb-4 pt-4">
            <div
              className="absolute inset-0 opacity-[0.16]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(125,240,209,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(125,240,209,0.32) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#7df0d1]/35 bg-[#1db993]/18 text-sm font-extrabold text-[#7df0d1] shadow-[0_0_22px_rgba(29,185,147,0.22)]">
                    {isVoiceActive ? "A" : ""}
                    {!isVoiceActive && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        aria-hidden="true"
                      >
                        <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM5 11a7 7 0 0 0 14 0M12 18v3" />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-white">{assistantName}</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggleOpen}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/12 bg-white/8 text-white/64 transition-colors hover:border-white/24 hover:text-white"
                aria-label="Close assistant"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>

            <div className="relative mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/8 px-3 py-2">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-white/78">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isSessionConnected
                      ? "bg-[#1db993]"
                      : isConnecting
                        ? "bg-amber-400"
                        : "bg-white/40"
                  }`}
                  aria-hidden="true"
                />
                {statusLabel}
              </span>
              <span className="rounded-full border border-[#7df0d1]/22 bg-[#7df0d1]/10 px-2.5 py-1 text-[11px] font-extrabold uppercase text-[#7df0d1]">
                {isVoiceActive ? "Voice" : "Voice + chat"}
              </span>
            </div>
          </div>

          <div className="px-4 py-4">
            {shouldCompactVoicePanel ? (
              <button
                type="button"
                onClick={handleVoice}
                disabled={isConnecting}
                className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-[#7df0d1]/18 bg-white/[0.06] px-3 text-sm font-extrabold text-white transition-colors hover:border-[#7df0d1]/38 hover:bg-white/[0.09] disabled:cursor-not-allowed disabled:opacity-65"
              >
                <span className="inline-flex min-w-0 items-center gap-2">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#7df0d1]/28 bg-[#1db993]/16 text-[#7df0d1]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM5 11a7 7 0 0 0 14 0M12 18v3" />
                    </svg>
                  </span>
                  <span className="truncate">Switch to voice</span>
                </span>
                <span className="rounded-full bg-[#1db993] px-3 py-1.5 text-xs text-white">
                  Call
                </span>
              </button>
            ) : (
            <div className="rounded-[16px] border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-center py-2">
                <div className="relative grid h-24 w-24 place-items-center rounded-full border border-[#7df0d1]/28 bg-[#0d2530] shadow-[inset_0_0_24px_rgba(29,185,147,0.12)]">
                  <span className="absolute h-24 w-24 rounded-full border border-[#7df0d1]/18" aria-hidden="true" />
                  <span className="absolute h-16 w-16 rounded-full border border-[#7df0d1]/28" aria-hidden="true" />
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-9 w-9 ${isVoiceActive ? "text-[#7df0d1]" : "text-white"}`}
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM5 11a7 7 0 0 0 14 0M12 18v3" />
                  </svg>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">
                {[12, 22, 34, 18, 28, 40, 24, 16, 32].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className={`rounded-full ${
                      isVoiceActive ? "bg-[#7df0d1]" : "bg-white/22"
                    }`}
                    style={{ height: `${Math.max(3, height / 6)}px` }}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleVoice}
                disabled={isConnecting}
                className={`mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-extrabold transition-colors disabled:cursor-not-allowed disabled:opacity-65 ${
                  isVoiceActive
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#1db993] text-white shadow-[0_12px_28px_rgba(29,185,147,0.24)] hover:bg-[#22c9a1]"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  {isVoiceActive ? (
                    <path d="M5 5h14v14H5z" />
                  ) : (
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
                  )}
                </svg>
                {voiceButtonLabel}
              </button>

              {!isTextMode && !isVoiceActive && (
                <button
                  type="button"
                  onClick={handleTextMode}
                  className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/8 px-4 text-sm font-extrabold text-white/82 transition-colors hover:border-[#7df0d1]/35 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                  </svg>
                  Message instead
                </button>
              )}
            </div>
            )}

            {showConversation && (
              <div ref={transcriptRef} className="a4u-widget-scrollbar mt-3 max-h-[220px] overflow-y-auto rounded-[14px] border border-white/10 bg-white/[0.04] p-3">
                <div className="grid gap-2.5">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-6 ${
                        message.role === "assistant"
                          ? "justify-self-start bg-white/10 text-white/88"
                          : "justify-self-end bg-[#1db993] text-white"
                      }`}
                    >
                      {renderMessageText(message.text)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <p className="mt-3 rounded-xl border border-red-300/28 bg-red-500/12 px-3 py-2 text-xs font-bold leading-5 text-red-100">
                {error}{" "}
                <Link href="/contact" className="underline underline-offset-2">
                  Contact Automate4U
                </Link>
                .
              </p>
            )}
          </div>

          {isTextMode && (
          <form onSubmit={handleSubmit} className="border-t border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-white/12 bg-white px-3 text-sm font-medium text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-[#1db993]"
                placeholder="Type a message"
                aria-label="Type a message"
              />
              <button
                type="submit"
                disabled={!text.trim() || isConnecting}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1db993] text-white transition-colors hover:bg-[#22c9a1] disabled:cursor-not-allowed disabled:opacity-45"
                aria-label="Send message"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path d="m5 12 14-7-7 14-2-5-5-2Z" />
                  <path d="m10 14 4-4" />
                </svg>
              </button>
            </div>
          </form>
          )}
        </section>
      )}

      <button
        type="button"
        onClick={handleToggleOpen}
        className="a4u-voice-blob group"
        aria-label={isOpen ? "Close Automate4U assistant" : "Open Automate4U assistant"}
      >
        <span className="a4u-voice-blob-pulse" aria-hidden="true" />
        <span className="a4u-voice-blob-core" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          >
            <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM5 11a7 7 0 0 0 14 0M12 18v3" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default function ChatWidget() {
  return (
    <ConversationProvider>
      <AvaWidgetInner />
    </ConversationProvider>
  );
}
