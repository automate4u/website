import Link from "next/link";
import Image from "next/image";

export default function WhyChooseUs() {
    const steps = [
        {
            num: "1",
            title: "Fast & Reliable",
            text: "With experience delivering over 100 tailored solutions, most of our implementations go live in under four weeks without delays or complex roadmap"
        },
        {
            num: "2",
            title: "Smooth Integrations",
            text: "With deep backend and API expertise, we deliver seamless connections to your existing databases, spreadsheets, or ERPs."
        },
        {
            num: "3",
            title: "Proven Track Records",
            text: "Our team has saved over 10,000 labor hours and earned multiple awards for innovative solutions across previous roles."
        },
        {
            num: "4",
            title: "Security Compliant",
            text: "Our solutions align with top regulations such as GDPR, HIPAA, and SOC 2, providing reliable compliance for you and your clients."
        }
    ];

    return (
        <section className="relative w-full bg-white text-ink overflow-hidden py-2 md:py-2.5" id="why-choose-us" aria-labelledby="a4u-wcu-title">
            <div className="max-w-[1600px] mx-auto md:grid md:grid-cols-2 md:items-stretch">

                <div className="hidden md:block bg-[url('/images/home/why-choose-us.jpg')] bg-cover bg-center min-h-[400px]" />

                <div className="flex justify-center items-center py-4 px-4 md:p-8 lg:p-12 bg-white">
                    <div className="w-full max-w-[520px] text-left">
                        <h2 id="a4u-wcu-title" className="text-[24px] md:text-[30px] lg:text-[36px] leading-[1.1] font-bold tracking-tight mb-4 text-ink">
                            Why Choose Automate4u
                        </h2>
                        <p className="text-muted text-base mb-6 text-left leading-relaxed">
                            We bring together decades of expertise across technology, innovation, and business strategy to help businesses achieve measurable results by deploying AI-driven & automation solutions that drive scale and growth.
                        </p>

                        <ul className="grid gap-0.5 mt-4 md:mt-6 pl-[50px] md:pl-[60px] relative max-w-[520px] mx-auto md:mx-0">
                            {/* Vertical Line */}
                            <div className="absolute left-[20px] top-[10px] bottom-[10px] w-[2px] bg-[#d7efe7]" />

                            {steps.map((step, index) => (
                                <li key={index} className="relative flex items-center gap-4 text-left p-1.5 md:p-3 bg-transparent rounded-2xl">
                                    {/* Number Bubble */}
                                    <div className="absolute left-[-50px] md:left-[-60px] flex items-center justify-center w-10 h-10 rounded-full bg-[#e9f9f3] text-[#169b78] font-extrabold text-[1rem] z-10">
                                        {step.num}
                                    </div>

                                    <div className={`flex-1 pb-1.5 ${index !== steps.length - 1 ? 'border-b border-[#d7efe7]' : ''}`}>
                                        <h3 className="m-0 mb-1 text-[1rem] font-bold text-ink">{step.title}</h3>
                                        <p className="m-0 text-muted text-[1rem] leading-relaxed">
                                            {step.title === "Fast & Reliable" ? (
                                                <>With experience delivering over <strong>100 tailored solutions</strong>, most of our implementations go live in <strong>under four weeks</strong> without delays or complex roadmap</>
                                            ) : step.title === "Smooth Integrations" ? (
                                                <>With deep <strong>backend</strong> and <strong>API</strong> expertise, we deliver seamless connections to your existing databases, spreadsheets, or ERPs.</>
                                            ) : step.title === "Proven Track Records" ? (
                                                <>Our team has saved over <strong>10,000 labor hours</strong> and earned multiple awards for innovative solutions across previous roles.</>
                                            ) : (
                                                step.text
                                            )}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    );
}
