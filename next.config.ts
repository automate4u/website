import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/industries/daycare-voice-agent",
        destination: "/solutions/daycare-voice-agent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
