import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Automate4U",
  description:
    "Automate4U privacy policy for website visitors and assessment form submissions.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[980px]">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">
            Privacy
          </p>
          <h1 className="text-[38px] font-extrabold leading-tight tracking-[-0.02em] md:text-[56px]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-white/74">
            This page explains how Automate4U handles information submitted through our website and assessment forms.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[980px] gap-8 text-muted">
          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Information we collect</h2>
            <p className="mt-4 leading-7">
              When you submit a form, we may collect your name, email, company, website, industry, workflow pain points, tools used, budget range, timeline, source page, and attribution details such as UTM parameters or referrer.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">How we use information</h2>
            <p className="mt-4 leading-7">
              We use submitted information to respond to inquiries, evaluate workflow fit, prepare assessment follow-up, route leads internally, improve our website, and understand which services visitors are interested in.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Service providers</h2>
            <p className="mt-4 leading-7">
              We may use trusted service providers for lead routing, email notifications, scheduling, analytics, hosting, and website operations. These providers are used to operate the website and respond to requests.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Data sharing</h2>
            <p className="mt-4 leading-7">
              We do not sell personal information. We may share information only when needed to operate our business, respond to your request, comply with legal obligations, or protect our rights and systems.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Contact</h2>
            <p className="mt-4 leading-7">
              To request access, correction, or deletion of information you submitted, contact us at{" "}
              <a href="mailto:hello@automate4u.ca" className="font-bold text-[#167f65]">hello@automate4u.ca</a>.
            </p>
          </article>

          <p className="text-sm leading-6">
            This policy is provided for general website transparency and should be reviewed by legal counsel before being treated as formal legal advice.
          </p>

          <Link href="/contact" className="inline-flex w-fit rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover">
            Contact Automate4U
          </Link>
        </div>
      </section>
    </main>
  );
}
