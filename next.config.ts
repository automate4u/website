import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-voice",
        destination: "/core-services/ai-voice",
        permanent: true,
      },
      {
        source: "/ai-agents",
        destination: "/core-services/ai-agents",
        permanent: true,
      },
      {
        source: "/ai-chat",
        destination: "/core-services/ai-chat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
