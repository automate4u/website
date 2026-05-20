"use client";

import { useState } from "react";

const storageKey = "a4u_team_analytics_profile";

type TeamProfile = {
  name: string;
  email: string;
};

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export default function TeamAnalyticsProfileForm() {
  const [profile, setProfile] = useState<TeamProfile>(() => {
    if (typeof window === "undefined") return { name: "", email: "" };

    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return { name: "", email: "" };

    try {
      const parsed = JSON.parse(stored) as Partial<TeamProfile>;
      return {
        name: parsed.name ?? "",
        email: parsed.email ?? "",
      };
    } catch {
      return { name: "", email: "" };
    }
  });
  const [message, setMessage] = useState("");

  const identifyTeamMember = (nextProfile: TeamProfile) => {
    window.localStorage.setItem(storageKey, JSON.stringify(nextProfile));

    window.posthog?.identify(nextProfile.email, {
      email: nextProfile.email,
      name: nextProfile.name,
      company: "Automate4U",
      userType: "team",
      isTeamMember: true,
    });
    window.posthog?.register({ userType: "team", isTeamMember: true });
    window.posthog?.capture("site_team_analytics_profile_set", {
      userType: "team",
      isTeamMember: true,
    });
  };

  return (
    <div className="rounded-lg border border-card-border bg-white p-6 shadow-[0_14px_42px_rgba(15,23,32,0.06)]">
      <form
        className="grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          const email = normalizeEmail(profile.email);

          if (!email.endsWith("@automate4u.co")) {
            setMessage("Use your Automate4U email address.");
            return;
          }

          const nextProfile = {
            name: profile.name.trim(),
            email,
          };

          setProfile(nextProfile);
          identifyTeamMember(nextProfile);
          setMessage("This browser is now identified as an Automate4U team member in PostHog.");
        }}
      >
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Name</span>
          <input
            value={profile.name}
            onChange={(event) => setProfile((current) => ({ ...current, name: event.target.value }))}
            className="rounded-xl border border-card-border px-3 py-3"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-ink">Automate4U email</span>
          <input
            value={profile.email}
            onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
            className="rounded-xl border border-card-border px-3 py-3"
            type="email"
            autoComplete="email"
            placeholder="name@automate4u.co"
            required
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 font-extrabold text-white hover:bg-btn-hover">
            Identify This Browser
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full border border-card-border px-6 font-extrabold text-ink hover:border-[#1db993]/45 hover:text-[#167f65]"
            onClick={() => {
              window.localStorage.removeItem(storageKey);
              window.posthog?.capture("site_team_analytics_profile_cleared", {
                userType: "team",
                isTeamMember: true,
              });
              window.posthog?.reset();
              setProfile({ name: "", email: "" });
              setMessage("Team identification was cleared for this browser.");
            }}
          >
            Clear Identification
          </button>
        </div>
      </form>

      {message ? (
        <p className="mt-4 rounded-lg border border-[#cfe9df] bg-[#ecfbf6] px-4 py-3 text-sm font-semibold text-[#155f4d]" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
