import Link from "next/link";
import Image from "next/image";
import { howWeBuildPillars } from "@/data/how-we-build";
import { serviceOffers } from "@/data/service-offers";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-card-border pt-16 pb-8 text-ink">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-5 lg:gap-12">

                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <Link href="/" className="block mb-6">
                            <Image src="/images/logos/a4u-logo.svg" alt="Automate4U Logo" width={160} height={32} className="h-6 w-auto" />
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Empowering businesses with AI-driven automation, custom software, and seamless integrations.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            {serviceOffers.slice(0, 5).map((service) => (
                                <li key={service.href}><Link href={service.href} className="hover:text-accent">{service.shortTitle}</Link></li>
                            ))}
                            <li className="pt-2"><Link href="/solutions" className="hover:text-accent font-semibold flex items-center gap-1">See solutions <span aria-hidden="true">&rarr;</span></Link></li>
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
                            <li><Link href="/industries/home-services" className="hover:text-accent">Home Services</Link></li>
                            <li><Link href="/industries/education-childcare" className="hover:text-accent">Education & Childcare</Link></li>
                            <li><Link href="/industries/manufacturing" className="hover:text-accent">Manufacturing</Link></li>
                            <li><Link href="/industries/professional-services" className="hover:text-accent">Professional Services</Link></li>
                            <li><Link href="/industries/hospitality" className="hover:text-accent">Hospitality</Link></li>
                            <li className="pt-2"><Link href="/industries" className="hover:text-accent font-semibold flex items-center gap-1">See all industries <span aria-hidden="true">&rarr;</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/about/overview" className="hover:text-accent">Overview</Link></li>
                            <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-accent">Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-card-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
                    <p>&copy; {new Date().getFullYear()} Automate4U. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-accent">LinkedIn</a>
                        <a href="#" className="hover:text-accent">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
