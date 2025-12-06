import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
    const steps = [
        {
            num: "1",
            title: "Discovery",
            text: "Quick call or email to understand requirements and business long term goals."
        },
        {
            num: "2",
            title: "Development",
            text: "While we build the solution(s), we will provide on-going status updates to ensure alignment."
        },
        {
            num: "3",
            title: "Launch & Warranty",
            text: "Our continous monitoring and support during the warranty period."
        }
    ];

    return (
        <section className="relative w-full bg-white text-ink overflow-hidden py-14 md:py-[70px] pb-8 md:pb-[35px]" aria-labelledby="a4u-hw-title">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 items-stretch">

                {/* Left Column (Content) */}
                <div className="flex justify-center items-center p-4 md:p-[18px]">
                    <div className="w-full max-w-[520px] text-center">

                        <p className="inline-block px-2.5 py-1.5 rounded-full bg-[#e9f9f3] text-[#169b78] font-bold text-[0.72rem] tracking-wider mb-1 uppercase">
                            HOW IT WORKS
                        </p>
                        <h2 id="a4u-hw-title" className="text-[20px] md:text-[28px] lg:text-[32px] leading-[1.15] font-extrabold tracking-tight mb-2 text-ink text-left md:text-center lg:text-left">
                            What Working With Us Looks Like
                        </h2>
                        <p className="text-muted text-left md:text-center lg:text-left text-[0.9rem] mb-6">
                            From idea to live automation – in 3 simple phases.
                        </p>

                        <ul className="grid gap-[10px] mt-6 md:mt-6 pl-[60px] relative max-w-[520px] mx-auto text-left">
                            {/* Vertical Line */}
                            <div className="absolute left-[20px] top-[10px] bottom-[10px] w-[2px] bg-[#d7efe7]" />

                            {steps.map((step, index) => (
                                <li key={index} className="relative flex items-center gap-4 text-left p-4 md:p-4 bg-transparent rounded-2xl">
                                    {/* Number Bubble */}
                                    <div className="absolute left-[-60px] flex items-center justify-center w-10 h-10 rounded-full bg-[#e9f9f3] text-[#169b78] font-extrabold text-[1rem] z-10">
                                        {step.num}
                                    </div>

                                    <div className={`flex-1 pb-4 ${index !== steps.length - 1 ? 'border-b border-[#d7efe7]' : ''}`}>
                                        <h3 className="m-0 mb-1 text-[1rem] font-bold text-ink">{step.title}</h3>
                                        <p className="m-0 text-muted">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col items-center gap-3">
                            <p className="text-muted text-[0.95rem] whitespace-nowrap">
                                Tell us about your goals. We'll get back to you within one business day to schedule a call.
                            </p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2.5 px-[18px] py-3 rounded-full font-extrabold text-white bg-accent shadow-[0_8px_24px_rgba(29,185,147,0.22)] hover:bg-[#169b78] transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                                    <path d="M2 22l20-10L2 2v7l14 3-14 3v7Z" />
                                </svg>
                                Get a Free Consultation
                            </Link>
                        </div>

                    </div>
                </div>

                {/* Right Column (Image) */}
                <div className="hidden md:block bg-[url('/images/home/how-it-works.jpg')] bg-cover bg-center min-h-[400px]" />

            </div>
        </section>
    );
}
