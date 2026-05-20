import Script from "next/script";

export default function SiteAnalytics() {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

  if (!posthogKey) return null;

  return (
    <Script id="posthog-analytics" strategy="afterInteractive">
      {`
        !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags reloadFeatureFlags getFeatureFlag getFeatureFlagPayload group".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
        posthog.init("${posthogKey}", {
          api_host: "${posthogHost}",
          capture_pageview: true,
          autocapture: false,
          disable_session_recording: true
        });
        var hostname = window.location.hostname;
        var appEnvironment = hostname === "localhost" || hostname === "127.0.0.1"
          ? "local"
          : hostname === "automate4u.co" || hostname === "www.automate4u.co"
            ? "production"
            : hostname.endsWith(".vercel.app")
              ? "preview"
              : "unknown";
        posthog.register({ appEnvironment: appEnvironment, appHostname: hostname });
        try {
          var storedProfile = window.localStorage.getItem("a4u_team_analytics_profile");
          if (storedProfile) {
            var profile = JSON.parse(storedProfile);
            if (profile && profile.email && profile.email.indexOf("@automate4u.co") > -1) {
              var email = String(profile.email).trim().toLowerCase();
              var name = profile.name ? String(profile.name).trim() : "";
              posthog.identify(email, {
                email: email,
                name: name,
                company: "Automate4U",
                userType: "team",
                isTeamMember: true
              });
              posthog.register({ userType: "team", isTeamMember: true });
            }
          }
        } catch (error) {
          // Keep analytics non-blocking.
        }
      `}
    </Script>
  );
}
