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

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function extractMessage(event: unknown): WidgetMessage | null {
  if (!event || typeof event !== "object") return null;

  const record = event as Record<string, unknown>;
  const type = readString(record.type);

  const agentResponse = readString(record.agent_response);
  const userTranscript = readString(record.user_transcript);
  const directMessage = readString(record.message);

  if (agentResponse) {
    return { id: crypto.randomUUID(), role: "assistant", text: agentResponse };
  }

  if (userTranscript) {
    return { id: crypto.randomUUID(), role: "user", text: userTranscript };
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
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<WidgetMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hi, I am Ava with Automate4U. What can I help with?",
    },
  ]);
  const [error, setError] = useState("");
  const pendingTextRef = useRef<string>("");
  const modeRef = useRef<"voice" | "text">("text");
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
      setError("Ava is unavailable right now.");
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
        setMessages((current) => [...current.slice(-9), message]);
      }
    },
  });

  const isConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting";

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

  const startSession = (mode: "voice" | "text") => {
    modeRef.current = mode;
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
    if (isOpen && (isConnected || isConnecting)) {
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

    if (isConnected || isConnecting) {
      conversation.endSession();
      return;
    }

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      startSession("voice");
    } catch (voiceError) {
      console.error("Ava widget microphone error:", voiceError);
      setError("Microphone access was not available. You can still send a message.");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextText = text.trim();
    if (!nextText || isConnecting) return;

    setError("");
    setText("");
    setMessages((current) => [
      ...current.slice(-9),
      { id: crypto.randomUUID(), role: "user", text: nextText },
    ]);

    if (isConnected) {
      conversation.sendUserMessage(nextText);
      return;
    }

    pendingTextRef.current = nextText;
    startSession("text");
  };

  const statusLabel = isConnecting
    ? "Connecting"
    : isConnected
      ? conversation.isSpeaking
        ? "Ava speaking"
        : "Connected"
      : "Online";

  return (
    <div className="fixed bottom-5 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          className="w-[min(380px,calc(100vw-2rem))] overflow-hidden rounded-lg border border-card-border bg-white shadow-[0_18px_46px_rgba(15,23,32,0.18)]"
          aria-label="Ava Automate4U assistant"
        >
          <div className="flex items-center justify-between gap-4 border-b border-card-border bg-[#f8fbfa] px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-ink">Ava</p>
              <p className="mt-0.5 truncate text-xs font-bold text-muted">Automate4U</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-white px-2.5 py-1 text-xs font-bold text-muted">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isConnected
                      ? "bg-[#1db993]"
                      : isConnecting
                        ? "bg-amber-400"
                        : "bg-muted/50"
                  }`}
                  aria-hidden="true"
                />
                {statusLabel}
              </span>
              <button
                type="button"
                onClick={handleToggleOpen}
                className="grid h-8 w-8 place-items-center rounded-full border border-card-border bg-white text-muted transition-colors hover:text-ink"
                aria-label="Close Ava"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
          </div>

          <div ref={transcriptRef} className="max-h-[310px] overflow-y-auto px-4 py-4">
            <div className="grid gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[88%] rounded-lg px-3 py-2 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "justify-self-start bg-[#f2f7f5] text-ink"
                      : "justify-self-end bg-[#1db993] text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
          </div>

          {error && (
            <p className="mx-4 mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold leading-5 text-red-700">
              {error}{" "}
              <Link href="/contact" className="underline underline-offset-2">
                Contact Automate4U
              </Link>
              .
            </p>
          )}

          <form onSubmit={handleSubmit} className="border-t border-card-border p-3">
            <div className="flex items-center gap-2">
              <input
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="min-h-11 min-w-0 flex-1 rounded-lg border border-card-border bg-white px-3 text-sm font-medium text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-[#1db993]"
                placeholder="Message Ava"
                aria-label="Message Ava"
              />
              <button
                type="submit"
                disabled={!text.trim() || isConnecting}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink text-white transition-colors hover:bg-[#101f2b] disabled:cursor-not-allowed disabled:opacity-45"
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
              <button
                type="button"
                onClick={handleVoice}
                disabled={isConnecting}
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
                  isConnected
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#1db993] text-white hover:bg-[#22c9a1]"
                }`}
                aria-label={isConnected ? "End call" : "Start voice call"}
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
                  {isConnected ? (
                    <path d="M5 5h14v14H5z" />
                  ) : (
                    <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM5 11a7 7 0 0 0 14 0M12 18v3" />
                  )}
                </svg>
              </button>
            </div>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={handleToggleOpen}
        className="flex h-14 items-center gap-3 rounded-full bg-ink px-4 pr-5 text-white shadow-[0_14px_36px_rgba(15,23,32,0.24)] transition-colors hover:bg-[#101f2b]"
        aria-label={isOpen ? "Close Ava" : "Open Ava"}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold" aria-hidden="true">
          A
        </span>
        <span className="text-sm font-extrabold">Ask Ava</span>
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
