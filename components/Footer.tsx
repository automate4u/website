import Link from "next/link";
import Image from "next/image";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";
import RotatingFooterWord from "./RotatingFooterWord";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-card-border pt-16 pb-8 text-ink">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">

                    <div>
                        <p
                            className="mb-4 text-[24px] font-extrabold leading-[1.03] tracking-[-0.01em] text-ink"
                            aria-label="We automate calls, emails, messages, workflows, follow-up, data sync, admin work, and customer support for you."
                        >
                            <span className="block">We automate</span>
                            <RotatingFooterWord />
                            <span className="block">for you.</span>
                        </p>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Practical AI automation for the conversations, tasks, and system handoffs that slow growing teams down.
                        </p>
                        <Link href="/" className="block mb-6">
                            <Image src="/images/logos/a4u-logo.svg" alt="Automate4U Logo" width={160} height={32} className="h-6 w-auto" />
                        </Link>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            {serviceOffers.map((service) => (
                                <li key={service.href}><Link href={service.href} className="hover:text-accent">{service.shortTitle}</Link></li>
                            ))}
                            <li className="pt-2"><Link href="/services" className="hover:text-accent font-semibold flex items-center gap-1">See all services <span aria-hidden="true">&rarr;</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/solutions/daycare-voice-agent" className="hover:text-accent">Daycare Voice Agent</Link></li>
                            <li className="pt-2"><Link href="/solutions" className="hover:text-accent font-semibold flex items-center gap-1">See all solutions <span aria-hidden="true">&rarr;</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">How We Build</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            {howWeBuildPillars.slice(0, 5).map((pillar) => (
                                <li key={pillar.href}><Link href={pillar.href} className="hover:text-accent">{pillar.shortTitle}</Link></li>
                            ))}
                            <li className="pt-2"><Link href="/capabilities" className="hover:text-accent font-semibold flex items-center gap-1">See how we build <span aria-hidden="true">&rarr;</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Industries</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/industries/professional-services" className="hover:text-accent">Professional Services</Link></li>
                            <li><Link href="/industries/home-services" className="hover:text-accent">Home Services</Link></li>
                            <li><Link href="/industries/manufacturing" className="hover:text-accent">Manufacturing</Link></li>
                            <li><Link href="/industries/education-childcare" className="hover:text-accent">Education & Childcare</Link></li>
                            <li><Link href="/industries/healthcare" className="hover:text-accent">Healthcare & Wellness Clinics</Link></li>
                            <li><Link href="/industries/hospitality" className="hover:text-accent">Guest Services & Hospitality</Link></li>
                            <li className="pt-2"><Link href="/industries" className="hover:text-accent font-semibold flex items-center gap-1">See all industries <span aria-hidden="true">&rarr;</span></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-card-border mt-12 pt-8 flex flex-col gap-4 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
                    <p>&copy; {new Date().getFullYear()} Automate4U. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link href="/about/overview" className="hover:text-accent">Company</Link>
                        <Link href="/contact" className="hover:text-accent">Contact</Link>
                        <Link href="/privacy" className="hover:text-accent">Privacy</Link>
                        <Link href="/terms" className="hover:text-accent">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
