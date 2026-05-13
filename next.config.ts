import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/industries/daycare-voice-agent",
        destination: "/solutions/daycare-voice-agent",
        permanent: true,
      },
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
      {
        source: "/capabilities/ai-agents-workflow-automation",
        destination: "/core-services/ai-agents",
        permanent: true,
      },
      {
        source: "/capabilities/ai-voice-chat-experiences",
        destination: "/core-services/ai-voice",
        permanent: true,
      },
      {
        source: "/capabilities/marketing-automation",
        destination: "/core-services/marketing-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
