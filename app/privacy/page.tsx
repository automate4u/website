import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Automate4U",
  description:
    "Automate4U privacy policy for website visitors, assessment form submissions, analytics, scheduling, and lead routing.",
  path: "/privacy",
});

const policySections = [
  {
    title: "Information we collect",
    body:
      "When you submit a website form, we may collect your name, work email, company, website, industry, workflow pain points, tools used, budget range, timeline, source page, and attribution details such as UTM parameters, landing page, or referrer.",
  },
  {
    title: "How we use information",
    body:
      "We use submitted information to respond to inquiries, evaluate workflow fit, prepare assessment follow-up, route leads internally, improve our website, understand service interest, and plan practical next steps for AI voice, agents, chat, marketing, integrations, or operations automation.",
  },
  {
    title: "Assessment and workflow details",
    body:
      "Please do not submit confidential customer records, health information, financial account details, child-specific records, passwords, or other sensitive operational data through public website forms. Sensitive project information should be shared only after the right agreement, access controls, and review process are in place.",
  },
  {
    title: "Analytics and attribution",
    body:
      "We may use privacy-conscious analytics to understand how visitors use the website, which pages and CTAs are effective, and where inquiries come from. Analytics should not receive sensitive free-text workflow details; lead details belong in our CRM or direct business systems.",
  },
  {
    title: "Service providers",
    body:
      "We may use service providers for website hosting, CRM lead routing, email notifications, scheduling, analytics, forms, and website operations. These providers are used to operate the website, respond to requests, and understand visitor interest.",
  },
  {
    title: "Data sharing",
    body:
      "We do not sell personal information. We may share information only when needed to operate our business, respond to your request, work with trusted service providers, comply with legal obligations, protect our rights, or protect the security and integrity of our systems.",
  },
  {
    title: "Retention and security",
    body:
      "We keep website inquiry information only as long as reasonably needed for business follow-up, recordkeeping, analytics, legal, or security purposes. We use practical administrative and technical safeguards, but no website or transmission method can be guaranteed completely secure.",
  },
  {
    title: "Children's information",
    body:
      "Our website is intended for business visitors and decision makers. It is not directed to children, and website forms should not be used to submit children's personal information or daycare/student records.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-[38px] font-extrabold leading-tight tracking-[-0.02em] md:text-[56px]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-[760px] text-base leading-8 text-white/74">
            This page explains how Automate4U handles information submitted through our website, assessment forms, scheduling links, analytics, and lead-routing systems.
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
                ["We collect inquiry details", "Only the information needed to understand your request and follow up."],
                ["We do not sell lead data", "Information is used for website operations, sales follow-up, and service planning."],
                ["Sensitive details need controls", "Private operational data should wait until proper agreements and access rules exist."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-card-border bg-white p-4">
                  <h3 className="font-extrabold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {policySections.map((section) => (
            <article key={section.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
              <h2 className="text-2xl font-extrabold text-ink">{section.title}</h2>
              <p className="mt-4 leading-7">{section.body}</p>
            </article>
          ))}

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Access, correction, or deletion requests</h2>
            <p className="mt-4 leading-7">
              To request access, correction, or deletion of information you submitted through the website, contact us at{" "}
              <a href="mailto:hello@automate4u.ca" className="font-bold text-[#167f65]">hello@automate4u.ca</a>. We may need to verify the request before taking action.
            </p>
          </article>

          <article className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
            <h2 className="text-2xl font-extrabold text-ink">Contact</h2>
            <p className="mt-4 leading-7">
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@automate4u.ca" className="font-bold text-[#167f65]">hello@automate4u.ca</a>.
            </p>
          </article>

          <p className="rounded-lg border border-card-border bg-[#f8fbfa] p-4 text-sm leading-6">
            This policy is provided for general website transparency and should be reviewed by legal counsel before being treated as a final legal policy.
          </p>

          <Link href="/contact" className="inline-flex w-fit rounded-full bg-accent px-5 py-3 font-bold text-white hover:bg-btn-hover">
            Contact Automate4U
          </Link>
        </div>
      </section>
    </main>
  );
}
