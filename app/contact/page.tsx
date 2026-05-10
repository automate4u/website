import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Get a Free AI Workflow Assessment | Automate4U",
  description:
    "Request a free AI workflow assessment from Automate4U. We will review your workflow pain, likely automation opportunities, and practical next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-white px-4 py-16 text-center text-ink" aria-labelledby="contact-title">
        <div className="mx-auto max-w-[880px]">
          <p className="inline-flex rounded-full bg-[#e9f9f3] px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#169b78]">
            Get Free Assessment
          </p>
          <h1 id="contact-title" className="mx-auto mt-4 max-w-[780px] text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[52px]">
            Start with the workflow that is costing your team the most time.
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-muted md:text-lg">
            Share the calls, emails, admin tasks, or customer questions slowing your business down. We will help identify whether AI voice, agents, or workflow automation is the right first step.
          </p>
        </div>
      </section>

      <ContactForm sourcePage="/contact" ctaLocation="contact_page" />
    </>
  );
}
