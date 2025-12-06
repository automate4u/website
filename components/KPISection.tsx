export default function KPISection() {
    return (
        <section className="py-7 bg-white text-ink" aria-label="Key results">
            <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-center gap-7 md:gap-11 text-center">

                <div className="flex-1 min-w-0">
                    <strong className="block font-extrabold text-[clamp(1.25rem,3.6vw,1.8rem)] leading-none text-accent">
                        138h
                    </strong>
                    <span className="block mt-2 text-[clamp(0.9rem,2.1vw,1rem)]">
                        Saved monthly
                    </span>
                </div>

                <span className="flex-none w-0.5 h-[40px] md:h-[46px] bg-[linear-gradient(180deg,rgba(207,214,221,0)_0%,rgba(160,170,180,0.9)_50%,rgba(207,214,221,0)_100%)] rounded-sm" aria-hidden="true"></span>

                <div className="flex-1 min-w-0">
                    <strong className="block font-extrabold text-[clamp(1.25rem,3.6vw,1.8rem)] leading-none text-accent">
                        92%
                    </strong>
                    <span className="block mt-2 text-[clamp(0.9rem,2.1vw,1rem)]">
                        Fewer errors
                    </span>
                </div>

                <span className="flex-none w-0.5 h-[40px] md:h-[46px] bg-[linear-gradient(180deg,rgba(207,214,221,0)_0%,rgba(160,170,180,0.9)_50%,rgba(207,214,221,0)_100%)] rounded-sm" aria-hidden="true"></span>

                <div className="flex-1 min-w-0">
                    <strong className="block font-extrabold text-[clamp(1.25rem,3.6vw,1.8rem)] leading-none text-accent">
                        5×
                    </strong>
                    <span className="block mt-2 text-[clamp(0.9rem,2.1vw,1rem)]">
                        Faster resolutions
                    </span>
                </div>

            </div>
        </section>
    );
}
