import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Automate4U",
  description:
    "Automate4U website terms for visitors reviewing AI automation services and submitting assessment requests.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[980px]">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
            Terms
          </p>
          <h1 className="text-[38px] font-extrabold leading-tight tracking-[-0.02em] md:text-[56px]">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-white/74">
            These terms describe general use of the Automate4U website. Project-specific work is governed by written proposals, statements of work, or service agreements.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[980px] gap-8 text-muted">
          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Website use</h2>
            <p className="mt-4 leading-7">
              You may use this website to learn about Automate4U services, review examples, and submit inquiries. You agree not to misuse the website, interfere with its operation, or attempt unauthorized access to our systems.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">No guaranteed outcome from website content</h2>
            <p className="mt-4 leading-7">
              Website examples, pricing ranges, estimates, and workflow descriptions are informational. Actual scope, cost, timeline, integrations, safeguards, and outcomes depend on each client environment and must be agreed in writing.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Assessment requests</h2>
            <p className="mt-4 leading-7">
              A free assessment request does not create a client relationship or obligation to provide services. It helps us understand whether there may be a practical workflow opportunity worth discussing.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Intellectual property</h2>
            <p className="mt-4 leading-7">
              Website content, copy, structure, graphics, and branding are owned by Automate4U or used with permission. You may not copy or reuse them commercially without written approval.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Contact</h2>
            <p className="mt-4 leading-7">
              Questions about these terms can be sent to{" "}
              <a href="mailto:hello@automate4u.ca" className="font-bold text-[#167f65]">hello@automate4u.ca</a>.
            </p>
          </article>

          <p className="text-sm leading-6">
            These terms are provided for general website transparency and should be reviewed by legal counsel before being treated as formal legal advice.
          </p>

          <Link href="/contact" className="inline-flex w-fit rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover">
            Contact Automate4U
          </Link>
        </div>
      </section>
    </main>
  );
}
