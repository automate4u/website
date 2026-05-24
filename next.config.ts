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
        source: "/industries/retail-ecommerce",
        destination: "/services/ai-chat",
        permanent: true,
      },
      {
        source: "/industries/technology-media",
        destination: "/services/custom-ai-software",
        permanent: true,
      },
      {
        source: "/industries/real-estate",
        destination: "/industries/professional-services",
        permanent: true,
      },
      {
        source: "/industries/financial-services",
        destination: "/industries/professional-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
