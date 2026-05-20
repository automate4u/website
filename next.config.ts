import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-voice",
        destination: "/services/ai-voice",
        permanent: true,
      },
      {
        source: "/ai-agents",
        destination: "/services/ai-agents",
        permanent: true,
      },
      {
        source: "/ai-chat",
        destination: "/services/ai-chat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
