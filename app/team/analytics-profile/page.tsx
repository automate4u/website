import type { Metadata } from "next";
import TeamAnalyticsProfileForm from "@/components/TeamAnalyticsProfileForm";

export const metadata: Metadata = {
  title: "Team Analytics Profile | Automate4U",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TeamAnalyticsProfilePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-16 text-ink md:py-24">
      <div className="mx-auto grid max-w-[860px] gap-8">
        <div>
          <h1 className="text-[34px] font-extrabold leading-tight tracking-[-0.02em] md:text-[52px]">
            Identify this browser for team analytics.
          </h1>
          <p className="mt-5 max-w-[720px] text-base leading-8 text-muted">
            Use this page only for Automate4U team members. It creates a PostHog person profile for this browser so internal testing can be separated from anonymous visitor traffic.
          </p>
        </div>

        <TeamAnalyticsProfileForm />

        <div className="rounded-lg border border-card-border bg-[#f8fbfa] p-5 text-sm leading-6 text-muted">
          <strong className="text-ink">How to use it:</strong> open this page on each browser or device you use for testing, enter your Automate4U email, then continue browsing the live site. PostHog events from that browser should show `userType: team` and `isTeamMember: true`.
        </div>
      </div>
    </main>
  );
}
