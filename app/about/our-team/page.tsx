import Link from "next/link";
import AssessmentCTA from "@/components/sections/AssessmentCTA";
import SectionHeader from "@/components/sections/SectionHeader";

const team = [
  {
    initials: "DY",
    name: "Daniel Yoon",
    role: "Client Experience & Data Strategy",
    text: "Daniel brings a client-service and operations lens to automation work. He helps translate messy business workflows into practical systems that improve customer experience, reduce manual coordination, and make staff support easier.",
    strengths: ["Client operations", "Workflow mapping", "Service experience"],
  },
  {
    initials: "MM",
    name: "Michael Mastrella",
    role: "Engineering & AI",
    text: "Michael leads the technical architecture behind Automate4U systems: AI agents, integrations, custom software, voice and chat workflows, data movement, monitoring, and production reliability.",
    strengths: ["AI engineering", "System architecture", "Custom software"],
  },
  {
    initials: "JZ",
    name: "Johnny Zhang",
    role: "Marketing & Partnerships",
    text: "Johnny brings the growth and partnership perspective: connecting automation work to demand generation, customer follow-up, practical sales outcomes, and long-term client relationships.",
    strengths: ["Growth systems", "Partnerships", "Marketing automation"],
  },
];

const operatingValues = [
  {
    title: "We stay close to the workflow",
    text: "The team focuses on the actual work being done: who receives the request, what system is checked, what decision is made, who approves it, and what happens next.",
  },
  {
    title: "We build with adoption in mind",
    text: "A technically impressive system is not enough. Staff need clear handoffs, understandable outputs, role-specific training, and confidence about when to trust the automation.",
  },
  {
    title: "We care about measurable value",
    text: "Projects should connect to response time, hours saved, cost per request, cycle time, lead conversion, backlog reduction, or another useful business metric.",
  },
  {
    title: "We keep learning",
    text: "AI tooling changes quickly. We keep testing new models, agent patterns, automation tools, and implementation approaches while staying grounded in what is reliable for client operations.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#051C2C] px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h1 className="max-w-[760px] text-[38px] font-extrabold leading-[1.06] tracking-[-0.02em] md:text-[58px]">
              A small expert team building practical AI systems for real business operations.
            </h1>
            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/74 md:text-[18px]">
              Automate4U combines engineering, operations, customer experience, marketing systems, and AI implementation work. The goal is not to sell hype. The goal is to build workflows that save time, improve response, connect systems, and keep humans in control.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-extrabold text-white hover:bg-btn-hover">
                Get Free Assessment
              </Link>
              <Link href="/about/how-we-work" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-extrabold text-ink hover:bg-[#f4fffb]">
                See How We Work
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.07] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.20)]">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Team model</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Business workflow", "Understand the operating pain, customer experience, staff constraints, and value case."],
                ["Technical build", "Design the agent, integrations, controls, dashboards, software, and support model."],
                ["Go-to-market impact", "Connect the system to faster response, better follow-up, sales outcomes, and customer satisfaction."],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-3 rounded-lg border border-white/10 bg-[#0d1720]/70 p-4 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#1db993] text-sm font-extrabold text-[#05251d]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="Leadership"
            title="The people guiding the work."
            description="Meet the team that combines client operations, AI engineering, marketing systems, and practical implementation experience to build automation that works in real business environments."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ecfbf6] text-lg font-extrabold text-[#167f65]">
                  {person.initials}
                </div>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight text-ink">{person.name}</h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em] text-[#167f65]">{person.role}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{person.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {person.strengths.map((strength) => (
                    <span key={strength} className="rounded-full border border-card-border bg-[#f8fbfa] px-3 py-1.5 text-xs font-semibold text-muted">
                      {strength}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-card-border bg-[#f8fbfa] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            eyebrow="How we show up"
            title="A senior, practical, hands-on approach to AI implementation."
            description="Clients should feel that Automate4U understands business operations and can still get deep into the technical details needed to make the system work."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {operatingValues.map((item) => (
              <article key={item.title} className="rounded-lg border border-card-border bg-white p-6 shadow-[0_8px_24px_rgba(15,23,32,0.04)]">
                <h2 className="text-xl font-extrabold leading-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#051C2C] px-4 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#7df0d1]">Why the team matters</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[42px]">
              AI automation requires more than technical setup.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "Someone has to understand the workflow well enough to redesign it.",
              "Someone has to engineer the AI and integrations reliably.",
              "Someone has to keep the business outcome, sales impact, and customer experience in view.",
              "Someone has to monitor, improve, and support the system after launch.",
            ].map((item) => (
              <p key={item} className="rounded-lg border border-white/14 bg-white/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white/84">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AssessmentCTA sourcePage="/about/our-team" ctaLocation="team_assessment" />
    </main>
  );
}
