import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SiteAnalytics from "@/components/SiteAnalytics";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen pt-[88px] overflow-x-hidden"
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <SiteAnalytics />
      </body>
    </html>
  );
}
