"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setExpandedMobileSection(null);
    }, [pathname]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menus = {
        industries: [
            { name: "Financial Services", href: "/industries/financial-services" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Manufacturing", href: "/industries/manufacturing" },
            { name: "Retail & Ecommerce", href: "/industries/retail-ecommerce" },
            { name: "Technology & Media", href: "/industries/technology-media" },
            { name: "Hospitality", href: "/industries/hospitality" },
            { name: "Home Services", href: "/industries/home-services" },
            { name: "Professional Services", href: "/industries/professional-services" },
            { name: "Real Estate", href: "/industries/real-estate" },
        ],
        capabilities: [
            { name: "AI Agents & Automation", href: "/capabilities/ai-agents-workflow-automation" },
            { name: "AI Voice & Chat", href: "/capabilities/ai-voice-chat-experiences" },
            { name: "Custom Software", href: "/capabilities/custom-software-ai-solutions" },
            { name: "Data & Integrations", href: "/capabilities/data-integrations-infrastructure" },
            { name: "Operational Intelligence", href: "/capabilities/operational-intelligence-analytics" },
            { name: "Security & Safety", href: "/capabilities/security-monitoring-ai-safety" },
            { name: "Strategy & Enablement", href: "/capabilities/technology-strategy-ai-enablement" },
            { name: "Training & Mastery", href: "/capabilities/training-prompting-ai-mastery" },
            { name: "Marketing Automation", href: "/capabilities/marketing-automation" },
        ],
        about: [
            { name: "Overview", href: "/about/overview" },
            { name: "Our Mission", href: "/about/our-mission" },
            { name: "Our Team", href: "/about/our-team" },
            { name: "How We Work", href: "/about/how-we-work" },
        ]
    };

    const toggleMobileSection = (section: string) => {
        setExpandedMobileSection(expandedMobileSection === section ? null : section);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"}`}>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <Image
                        src="/images/logos/a4u-logo.svg"
                        alt="Automate4U Logo"
                        width={180}
                        height={40}
                        className="w-auto h-7"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">

                    <div className="group relative">
                        <button className="flex items-center gap-1 font-semibold text-ink hover:text-accent py-2">
                            Industries
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 w-[600px]">
                            <div className="bg-white rounded-2xl shadow-xl border border-card-border p-6 grid grid-cols-2 gap-x-8 gap-y-3">
                                {menus.industries.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-sm font-medium text-muted hover:text-accent hover:bg-green-50 px-3 py-2 rounded-lg transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <button className="flex items-center gap-1 font-semibold text-ink hover:text-accent py-2">
                            Capabilities
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 w-[600px]">
                            <div className="bg-white rounded-2xl shadow-xl border border-card-border p-6 grid grid-cols-2 gap-x-8 gap-y-3">
                                {menus.capabilities.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-sm font-medium text-muted hover:text-accent hover:bg-green-50 px-3 py-2 rounded-lg transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <button className="flex items-center gap-1 font-semibold text-ink hover:text-accent py-2">
                            About
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 w-[240px]">
                            <div className="bg-white rounded-2xl shadow-xl border border-card-border p-4 grid gap-1">
                                {menus.about.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-sm font-medium text-muted hover:text-accent hover:bg-green-50 px-3 py-2 rounded-lg transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" className="font-semibold text-ink hover:text-accent transition-colors">
                        Contact
                    </Link>

                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden lg:inline-flex bg-accent hover:bg-btn-hover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-accent/20">
                        Get a Consultation
                    </Link>

                    <button
                        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-ink"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex flex-col gap-6 pb-20">

                        {/* Industries Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSection('industries')}
                                className="flex items-center justify-between w-full font-bold text-lg mb-3 text-ink"
                            >
                                Industries
                                <svg className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'industries' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            </button>
                            <div className={`grid gap-2 pl-4 border-l-2 border-slate-100 overflow-hidden transition-all duration-300 ${expandedMobileSection === 'industries' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                {menus.industries.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-muted py-1">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Capabilities Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSection('capabilities')}
                                className="flex items-center justify-between w-full font-bold text-lg mb-3 text-ink"
                            >
                                Capabilities
                                <svg className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'capabilities' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            </button>
                            <div className={`grid gap-2 pl-4 border-l-2 border-slate-100 overflow-hidden transition-all duration-300 ${expandedMobileSection === 'capabilities' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                {menus.capabilities.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-muted py-1">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* About Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSection('about')}
                                className="flex items-center justify-between w-full font-bold text-lg mb-3 text-ink"
                            >
                                About
                                <svg className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'about' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            </button>
                            <div className={`grid gap-2 pl-4 border-l-2 border-slate-100 overflow-hidden transition-all duration-300 ${expandedMobileSection === 'about' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                {menus.about.map((item) => (
                                    <Link key={item.href} href={item.href} className="block text-muted py-1">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link href="/contact" className="block font-bold text-lg text-ink">Contact</Link>

                        <Link href="/contact" className="w-full bg-accent text-white py-3 rounded-full font-bold text-center mt-4">
                            Get a Consultation
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    );
}

