import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative flex items-center min-h-[auto] px-5 pt-10 pb-80 md:pt-20 md:pb-[60px] md:min-h-[800px] overflow-hidden bg-[url('/images/home/hero-bg.webp')] bg-[length:100%_auto] bg-[center_bottom] bg-no-repeat md:bg-[length:60%_auto] md:bg-[right_center] transition-all duration-300 group"
            aria-label="Back-office automation hero"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white via-white via-50% to-white/70 to-70% md:bg-white md:[clip-path:ellipse(35%_100%_at_15%_50%)]" />

            <div className="relative z-20 mx-auto w-full max-w-[1120px] lg:max-w-[1280px] text-left">
                <div className="flex flex-col md:flex-row md:items-center md:gap-8">

                    <div className="flex-1 text-left">
                        <p className="flex justify-start items-center gap-2 text-muted text-[clamp(0.75rem,2.2vw,0.85rem)] leading-[1.3] mb-4 whitespace-nowrap">
                            <span className="text-[clamp(0.8rem,2.5vw,1rem)] text-[#f5b400] tracking-wide" aria-hidden="true">★★★★★</span>
                            <span className="inline">Trusted by Team Leaders Worldwide</span>
                        </p>

                        <h1 className="text-[clamp(32px,8vw,34px)] md:text-[40px] lg:text-[52px] leading-[1.2] font-extrabold tracking-[-0.02em] mb-4 text-ink">
                            Your{" "}
                            <span className="inline-block bg-[linear-gradient(90deg,var(--accent),#64D2A3,var(--accent))] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                                AI Transformation & Automation
                            </span>{" "}
                            Partner.
                        </h1>

                        <p className="text-muted text-[1rem] md:text-[1.06rem] leading-[1.6] mb-6 max-w-[52ch]">
                            We help build and integrate AI solutions as well as workflow automations so your business can focus more on what matters.
                        </p>

                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center h-12 px-6 py-2 text-[0.95rem] md:text-[1rem] font-extrabold text-white transition-all bg-accent rounded-full hover:bg-btn-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-[rgba(0,0,0,0.05)_0_3px_5px_-1px,rgba(0,0,0,0.04)_0_6px_10px_0,rgba(0,0,0,0.03)_0_1px_18px_0]"
                        >
                            Book a Free Consultation
                        </Link>
                    </div>

                    {/* Visual Column - Hidden in CSS but structually present in grid from user code (display:none on mobile, flex:1 on md) */}
                    <div className="hidden md:block flex-1" />

                </div>
            </div>
        </section>
    );
}
