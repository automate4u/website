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
      {
        source: "/core-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/core-services/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
      {
        source: "/capabilities/ai-agents-workflow-automation",
        destination: "/services/ai-agents",
        permanent: true,
      },
      {
        source: "/capabilities/ai-voice-chat-experiences",
        destination: "/services/ai-voice",
        permanent: true,
      },
      {
        source: "/capabilities/marketing-automation",
        destination: "/services/marketing-automation",
        permanent: true,
      },
      {
        source: "/capabilities/workflow-systems-architecture",
        destination: "/capabilities/custom-software-ai-solutions",
        permanent: true,
      },
      {
        source: "/capabilities/workflow-architecture",
        destination: "/capabilities/custom-software-ai-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
