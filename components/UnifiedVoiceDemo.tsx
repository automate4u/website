"use client";

import React, { useEffect, useRef, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { getElevenLabsAttributionVariables, trackEvent } from "@/lib/analytics";

type VoiceProviderKind = "retell" | "elevenlabs";

type RetellClient = {
        on: (event: string, handler: (...args: unknown[]) => void) => void;
    startCall: (args: { accessToken: string }) => Promise<void>;
    stopCall: () => void;
};

type UnifiedVoiceDemoProps = {
    // Provider configuration
    providers: Array<{
        id: string;
        provider: VoiceProviderKind;
        label: string;
        agentId?: string; // For ElevenLabs
        title: string;
        subtitle: string;
        description: string;
        tags: string[];
        agentLine: string;
        callerLine: string;
    }>;

    // Analytics and tracking
    sourcePage: string;
    ctaLocation: string;

    // Visual configuration
    variant?: "dark" | "light";
    defaultProvider?: string;

    // Optional customization
    title?: string;
    description?: string;
};

const BAR_COUNT = 12;

function generateIdleBars(): number[] {
    return Array.from({ length: BAR_COUNT }, (_, index) => 12 + ((index * 5) % 8));
}

function generateActiveBars(speaking: boolean): number[] {
    const intensity = speaking ? 1.0 : 0.6;
    return Array.from(
        { length: BAR_COUNT },
        () => 8 + Math.random() * 46 * intensity,
    );
}

/**
 * Public export — wraps the inner demo in the required ConversationProvider
 * so consumers don't need to worry about the provider hierarchy.
 */
export default function UnifiedVoiceDemo(props: UnifiedVoiceDemoProps) {
    return (
        <ConversationProvider>
            <UnifiedVoiceDemoInner {...props} />
        </ConversationProvider>
    );
}

function UnifiedVoiceDemoInner({
    providers,
    sourcePage,
    ctaLocation,
    variant = "dark",
    defaultProvider,
    title,
    description,
}: UnifiedVoiceDemoProps) {
    const initialProvider = defaultProvider ?? providers[0]?.id ?? "";
    const [activeProvider, setActiveProvider] = useState<string>(initialProvider);
    const [bars, setBars] = useState<number[]>(generateIdleBars);
    const animationRef = useRef<number>(0);

    // Retell state
    const retellClientRef = useRef<RetellClient | null>(null);
    const [retellCallActive, setRetellCallActive] = useState(false);
    const [retellCallStarting, setRetellCallStarting] = useState(false);

    const selectedProvider = providers.find(p => p.id === activeProvider) ?? providers[0];
    const selectedProviderRef = useRef(selectedProvider);
    useEffect(() => {
        selectedProviderRef.current = selectedProvider;
    }, [selectedProvider]);

    // ElevenLabs state
    const conversation = useConversation({
        onConnect: () => {
            const provider = selectedProviderRef.current;
            if (provider?.agentId) {
                trackEvent("site_voice_demo_started", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                    agentId: provider.agentId,
                });
            }
        },
        onDisconnect: () => {
            const provider = selectedProviderRef.current;
            if (provider?.agentId) {
                trackEvent("site_voice_demo_completed", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                    agentId: provider.agentId,
                });
            }
        },
        onError: (error) => {
            console.error("ElevenLabs error:", error);
            const provider = selectedProviderRef.current;
            if (provider?.agentId) {
                trackEvent("site_voice_demo_failed", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                    agentId: provider.agentId,
                });
            }
        },
    });

    // Determine connection state based on active provider
    const isRetell = selectedProvider.provider === "retell";
    const isConnected = isRetell
        ? retellCallActive
        : conversation.status === "connected";

    const isConnecting = isRetell
        ? retellCallStarting
        : conversation.status === "connecting";

    const isSpeaking = selectedProvider.provider === "elevenlabs" ? conversation.isSpeaking : false;

    // Keep a ref in sync for animation
    const isSpeakingRef = useRef(isSpeaking);
    useEffect(() => {
        isSpeakingRef.current = isSpeaking;
    }, [isSpeaking]);

    // Animate bars while connected
    useEffect(() => {
        if (!isConnected) {
            setBars(generateIdleBars());
            return;
        }

        let running = true;
        const tick = () => {
            if (!running) return;
            setBars(generateActiveBars(isSpeakingRef.current));
            animationRef.current = requestAnimationFrame(() => setTimeout(tick, 120));
        };
        tick();

        return () => {
            running = false;
            cancelAnimationFrame(animationRef.current);
        };
    }, [isConnected]);

    // Initialize Retell client
    useEffect(() => {
        if (!providers.some((provider) => provider.provider === "retell")) return;

        import("retell-client-js-sdk").then(({ RetellWebClient }) => {
            const client = new RetellWebClient() as RetellClient;
            retellClientRef.current = client;

            client.on("call_started", () => {
                const provider = selectedProviderRef.current;
                trackEvent("site_voice_demo_started", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                });
                setRetellCallActive(true);
                setRetellCallStarting(false);
            });

            client.on("call_ended", () => {
                const provider = selectedProviderRef.current;
                trackEvent("site_voice_demo_completed", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                });
                setRetellCallActive(false);
                setRetellCallStarting(false);
            });

            client.on("error", (error) => {
                const provider = selectedProviderRef.current;
                console.error("Retell error:", error);
                trackEvent("site_voice_demo_failed", {
                    page: sourcePage,
                    ctaLocation,
                    serviceInterest: "ai-voice",
                    provider: provider.id,
                });
                setRetellCallActive(false);
                setRetellCallStarting(false);
            });
        }).catch((error) => console.error("Could not load Retell SDK", error));

        return () => {
            if (retellClientRef.current) {
                try {
                    retellClientRef.current.stopCall();
                } catch {
                    // Ignore teardown errors
                }
            }
        };
    }, [providers, sourcePage, ctaLocation]);

    const handleRetellCall = async () => {
        if (!retellClientRef.current) return;

        if (retellCallActive) {
            retellClientRef.current.stopCall();
            return;
        }

        try {
            setRetellCallStarting(true);
            await navigator.mediaDevices.getUserMedia({ audio: true });

            const response = await fetch("/api/retell/web-call", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ metadata: { source: "unified-voice-demo" } }),
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
                page: sourcePage,
                ctaLocation,
                serviceInterest: "ai-voice",
                provider: selectedProvider.id,
            });
            alert(`Sorry, couldn't start the voice session. (${message})`);
            setRetellCallStarting(false);
        }
    };

    const handleElevenLabsCall = async () => {
        if (conversation.status === "connected") {
            await conversation.endSession();
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            const agentId = selectedProvider.agentId;
            if (!agentId) {
                throw new Error("No agent ID configured for ElevenLabs");
            }

            await conversation.startSession({
                agentId,
                dynamicVariables: {
                    entry_mode: "website_demo",
                    source_page: sourcePage,
                    cta_location: ctaLocation,
                    ...getElevenLabsAttributionVariables(),
                },
                clientTools: {
                    a4u_demo_show_action: () => undefined,
                    a4u_demo_open_meeting_link: ({ meeting_url }: { meeting_url?: string }) => {
                        if (meeting_url) window.open(meeting_url, "_blank", "noopener,noreferrer");
                    },
                },
            });
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            console.error("ElevenLabs session error:", error);
            trackEvent("site_voice_demo_failed", {
                page: sourcePage,
                ctaLocation,
                serviceInterest: "ai-voice",
                provider: selectedProvider.id,
                agentId: selectedProvider.agentId,
            });
            alert(`Sorry, couldn't start the voice session. (${message})`);
        }
    };

    const handleToggleCall = isRetell ? handleRetellCall : handleElevenLabsCall;

    // Status and button text
    let statusLabel = "Ready to connect";
    if (isConnecting) statusLabel = "Connecting…";
    else if (isConnected && isSpeaking) statusLabel = "Assistant speaking";
    else if (isConnected) statusLabel = "Live call";

    let buttonText = "Try Now";
    if (isConnecting) buttonText = "Connecting…";
    else if (isConnected) buttonText = "End Call";

    const isDark = variant === "dark";

    return (
        <div className="mx-auto max-w-[1180px]">
            {/* Only show title/description section if provided */}
            {title && (
                <div className="mx-auto mb-8 max-w-[780px] text-center">
                    <h2 className={`text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] md:text-[40px] ${isDark ? "text-white" : "text-ink"
                        }`}>
                        {title}
                    </h2>
                    {description && (
                        <p className={`mx-auto mt-5 max-w-[660px] text-base leading-7 ${isDark ? "text-white/66" : "text-muted"
                            }`}>
                            {description}
                        </p>
                    )}
                </div>
            )}

            {/* Provider selector - only show if there are multiple providers */}
            {providers.length > 1 && (
                <div className="mx-auto mb-5 flex max-w-[760px] flex-wrap justify-center gap-2">
                    {providers.map((provider) => {
                        const isActive = provider.id === activeProvider;
                        return (
                            <button
                                key={provider.id}
                                type="button"
                                onClick={() => {
                                    setActiveProvider(provider.id);
                                    trackEvent("site_voice_demo_selected", {
                                        page: sourcePage,
                                        ctaLocation,
                                        serviceInterest: "ai-voice",
                                        provider: provider.id,
                                    });
                                }}
                                className={`rounded-full border px-4 py-2 text-sm font-extrabold transition-colors ${isActive
                                    ? isDark
                                        ? "border-[#1db993] bg-[#1db993] text-white"
                                        : "border-[#167f65] bg-[#167f65] text-white"
                                    : isDark
                                        ? "border-white/20 bg-white/10 text-white/80 hover:border-[#1db993]/50 hover:text-white"
                                        : "border-card-border bg-white text-muted hover:border-[#1db993]/50 hover:text-ink"
                                    }`}
                                aria-pressed={isActive}
                            >
                                {provider.label}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Main demo interface */}
            <div className={`mx-auto max-w-[1120px] rounded-[24px] border p-4 shadow-[0_22px_60px_rgba(15,23,32,0.16)] md:p-5 ${isDark
                ? "border-white/10 bg-[radial-gradient(circle_at_70%_85%,rgba(29,185,147,0.18),transparent_34%),linear-gradient(135deg,#0b2230,#102734)] text-white"
                : "border-card-border bg-white text-ink"
                }`}>
                {/* Header */}
                <div className="mb-5 flex items-center justify-between gap-4 px-1">
                    <div className="flex items-center gap-3">
                        <span className="flex gap-1.5" aria-hidden="true">
                            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-white/38" : "bg-muted/38"}`} />
                            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-white/38" : "bg-muted/38"}`} />
                            <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-white/38" : "bg-muted/38"}`} />
                        </span>
                        <p className={`text-sm font-extrabold ${isDark ? "text-white/88" : "text-ink"}`}>
                            Live Voice Preview
                        </p>
                    </div>
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-extrabold ${isDark
                        ? "border-white/12 bg-white/10 text-white/88"
                        : "border-card-border bg-[#f8fbfa] text-muted"
                        }`}>
                        <span
                            className={`h-2.5 w-2.5 rounded-full ${isConnected
                                ? "bg-red-400 animate-pulse shadow-[0_0_6px_rgba(248,113,113,0.6)]"
                                : isConnecting
                                    ? "bg-amber-400 animate-pulse"
                                    : "bg-[#1db993]"
                                }`}
                            aria-hidden="true"
                        />
                        {statusLabel}
                    </span>
                </div>

                <div className={`mb-5 rounded-[18px] border p-5 text-center md:p-6 ${isDark
                    ? "border-[#1db993]/28 bg-[#1db993]/12"
                    : "border-[#1db993]/24 bg-[#e9f9f3]"
                    }`}>
                    <h3 className={`text-xl font-extrabold md:text-2xl ${isDark ? "text-white" : "text-ink"}`}>
                        Test the live voice demo
                    </h3>
                    <p className={`mx-auto mt-3 max-w-[640px] text-sm leading-6 ${isDark ? "text-white/72" : "text-muted"}`}>
                        {selectedProvider.description}
                    </p>
                    <button
                        className={`mx-auto mt-5 inline-flex min-h-16 w-full max-w-[420px] items-center justify-center gap-3 rounded-full px-7 py-4 text-lg font-extrabold transition-colors disabled:cursor-not-allowed disabled:opacity-70 sm:text-xl ${isConnected
                            ? "bg-red-500/95 text-white shadow-[0_14px_34px_rgba(239,68,68,0.28)] hover:bg-red-500"
                            : isDark
                                ? "bg-[#1db993] text-white shadow-[0_16px_38px_rgba(29,185,147,0.36)] hover:bg-[#22c9a1]"
                                : "bg-[#0d1720] text-white shadow-[0_16px_38px_rgba(13,23,32,0.24)] hover:bg-[#101f2b]"
                            }`}
                        type="button"
                        onClick={handleToggleCall}
                        disabled={isConnecting}
                    >
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${isConnected ? "bg-white/18" : "bg-white/16"}`} aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
                            </svg>
                        </span>
                        {buttonText}
                    </button>
                    <p className={`mt-3 text-xs leading-5 ${isDark ? "text-white/50" : "text-muted"}`}>
                        Your browser may request microphone access. This assistant is for demonstration purposes only.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.48fr_0.72fr] lg:items-start">
                    {/* Main demo panel */}
                    <div className={`rounded-[18px] border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-6 ${isDark
                        ? "border-white/12 bg-white/10"
                        : "border-card-border bg-[#f8fbfa]"
                        }`}>
                        <div className="flex items-center gap-4">
                            <div className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#1db993] text-lg font-extrabold text-white">
                                AI
                            </div>
                            <div>
                                <h3 className={`font-extrabold ${isDark ? "text-white" : "text-ink"}`}>
                                    {selectedProvider.title}
                                </h3>
                                <p className={`mt-1 text-sm ${isDark ? "text-white/68" : "text-muted"}`}>
                                    {selectedProvider.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {selectedProvider.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-extrabold ${isDark
                                        ? "border-white/14 bg-white/8 text-white/90"
                                        : "border-card-border bg-white text-ink"
                                        }`}
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#1db993]" aria-hidden="true" />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Waveform bars */}
                        <div className="mt-6 flex h-[58px] items-end gap-2" aria-hidden="true">
                            {bars.map((height, index) => (
                                <span
                                    key={`${height}-${index}`}
                                    className={`flex-1 rounded-full transition-[height] duration-150 ease-out ${isConnected
                                        ? "bg-gradient-to-t from-[#1db993] to-[#7df0d1]"
                                        : isDark
                                            ? "bg-white/18"
                                            : "bg-[#1db993]/22"
                                        }`}
                                    style={{ height }}
                                />
                            ))}
                        </div>

                        {/* Conversation preview */}
                        <div className="mt-5 grid gap-3">
                            <div className={`rounded-xl px-4 py-3 text-center text-sm leading-6 ${isDark
                                ? "bg-white/14 text-white/88"
                                : "bg-white border border-card-border text-ink"
                                }`}>
                                <strong className={`block text-xs uppercase tracking-[0.08em] ${isDark ? "text-[#7df0d1]" : "text-[#167f65]"
                                    }`}>
                                    Agent
                                </strong>
                                {selectedProvider.agentLine}
                            </div>
                            <div className={`ml-auto max-w-[92%] rounded-xl border px-4 py-3 text-center text-sm leading-6 ${isDark
                                ? "border-[#1db993]/30 bg-[#1db993]/18 text-white/90"
                                : "border-[#1db993]/30 bg-[#1db993]/10 text-ink"
                                }`}>
                                <strong className={`block text-xs uppercase tracking-[0.08em] ${isDark ? "text-[#7df0d1]" : "text-[#167f65]"
                                    }`}>
                                    Caller
                                </strong>
                                {selectedProvider.callerLine}
                            </div>
                        </div>
                    </div>

                    {/* Control panel */}
                    <div className={`rounded-[18px] border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-6 ${isDark
                        ? "border-white/12 bg-white/10"
                        : "border-card-border bg-white"
                        }`}>
                        <h3 className={`text-lg font-extrabold ${isDark ? "text-white" : "text-ink"}`}>
                            What to try
                        </h3>
                        <p className={`mt-4 text-sm leading-6 ${isDark ? "text-white/72" : "text-muted"}`}>
                            Speak naturally and ask about the workflow above. The assistant should collect context, stay within the demo scenario, and route toward a clear next step.
                        </p>
                        <div className={`mt-5 rounded-xl border px-4 py-3 text-sm font-bold ${isDark
                            ? "border-white/12 bg-white/10 text-white/78"
                            : "border-card-border bg-[#f8fbfa] text-muted"
                            }`}>
                            Current demo: <span className={isDark ? "text-white" : "text-ink"}>{selectedProvider.label}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
