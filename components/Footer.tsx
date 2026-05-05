import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-card-border pt-16 pb-8 text-ink">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-5 lg:gap-12">

                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-lg">
                                A
                            </div>
                            <span className="font-extrabold text-xl tracking-tight">Automate4U</span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Empowering businesses with AI-driven automation, custom software, and seamless integrations.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Core Services</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/core-services/ai-agents" className="hover:text-accent">AI Agents</Link></li>
                            <li><Link href="/core-services/ai-chat" className="hover:text-accent">AI Chat</Link></li>
                            <li><Link href="/core-services/ai-voice" className="hover:text-accent">AI Voice</Link></li>
                            <li><Link href="/core-services/ai-transformation" className="hover:text-accent">AI Transformation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Industries</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/industries" className="hover:text-accent">Overview</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Capabilities</h4>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/capabilities" className="hover:text-accent">Overview</Link></li>
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
