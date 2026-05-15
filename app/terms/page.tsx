import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service | Automate4U",
  description:
    "Automate4U website terms for visitors reviewing AI automation services and submitting assessment requests.",
  path: "/terms",
});

const termsSections = [
  {
    title: "Website use",
    body:
      "You may use this website to learn about Automate4U services, review examples, and submit inquiries. You agree not to misuse the website, interfere with its operation, scrape it at unreasonable volume, or attempt unauthorized access to our systems.",
  },
  {
    title: "No client relationship from website use",
    body:
      "Submitting a form, booking an assessment, reviewing examples, or discussing a possible project does not by itself create a client relationship, partnership, or obligation to provide services. Project work begins only when the right written proposal, statement of work, service agreement, or other written agreement is accepted.",
  },
  {
    title: "Assessment requests",
    body:
      "A free assessment request is intended to help us understand whether there may be a practical workflow opportunity worth discussing. It is not a full audit, implementation plan, security review, legal review, compliance review, or guaranteed recommendation.",
  },
  {
    title: "Website examples, proof, and pricing",
    body:
      "Website examples, workflow stories, pricing ranges, cost estimates, and implementation descriptions are informational. Actual scope, cost, timeline, integrations, vendor usage, safeguards, and outcomes depend on each client environment and must be agreed in writing.",
  },
  {
    title: "AI and automation boundaries",
    body:
      "AI and automation systems can support calls, messages, workflows, drafting, routing, reporting, and operations, but they should be designed with appropriate human review for sensitive, regulated, safety-related, financial, medical, legal, employment, child-related, or high-impact decisions.",
  },
  {
    title: "Third-party services and demos",
    body:
      "The website may link to or embed third-party tools for demos, scheduling, analytics, lead routing, communications, or other operations. Third-party services are controlled by their respective providers and may have their own terms, privacy practices, availability, and limitations.",
  },
  {
    title: "Intellectual property",
    body:
      "Website content, copy, structure, graphics, examples, and branding are owned by Automate4U or used with permission. You may not copy, republish, resell, or reuse them commercially without written approval.",
  },
  {
    title: "No warranties for website content",
    body:
      "The website is provided for general information. We try to keep the content useful and accurate, but we do not guarantee that all website information is complete, current, error-free, available without interruption, or suitable for your specific business without further review.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-[38px] font-extrabold leading-tight tracking-[-0.02em] md:text-[56px]">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-white/74">
            These terms describe general use of the Automate4U website. Project-specific work is governed by written proposals, statements of work, or service agreements.
          </p>
          <p className="mt-5 text-sm font-semibold text-white/60">Last updated: May 15, 2026</p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-[980px] gap-8 text-muted">
          <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-6">
            <h2 className="text-2xl font-extrabold text-ink">Plain-language summary</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {[
                ["Website content is informational", "Examples and pricing ranges help buyers understand possibilities, not guaranteed outcomes."],
                ["Projects need written scope", "Actual work, deliverables, pricing, safeguards, and responsibilities must be agreed in writing."],
                ["Human control matters", "Sensitive workflows should keep appropriate review, escalation, and approval boundaries."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-card-border bg-white p-4">
                  <h3 className="font-extrabold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {termsSections.map((section) => (
            <article key={section.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <h2 className="text-2xl font-extrabold text-ink">{section.title}</h2>
              <p className="mt-4 leading-7">{section.body}</p>
            </article>
          ))}

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Contact</h2>
            <p className="mt-4 leading-7">
              Questions about these terms can be sent to{" "}
              <a href="mailto:hello@automate4u.ca" className="font-bold text-[#167f65]">hello@automate4u.ca</a>.
            </p>
          </article>

          <p className="rounded-lg border border-card-border bg-[#f8fbfa] p-4 text-sm leading-6">
            These terms are provided for general website transparency and should be reviewed by legal counsel before being treated as final legal terms.
          </p>

          <Link href="/contact" className="inline-flex w-fit rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover">
            Contact Automate4U
          </Link>
        </div>
      </section>
    </main>
  );
}
