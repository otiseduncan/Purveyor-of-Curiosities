import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Purveyor of Curiosities | Curated Finds & Unexpected Treasures",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Purveyor of Curiosities",
    "curated finds",
    "resale shop",
    "estate cleanout finds",
    "storage auction finds",
    "vintage tools",
    "home goods resale",
    "automotive accessories",
    "collectibles and oddities",
    "local pickup resale",
    "one of one treasures",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Purveyor of Curiosities | Curated Finds & Unexpected Treasures",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Purveyor of Curiosities - curated finds, useful goods, and unexpected treasures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Purveyor of Curiosities | Curated Finds & Unexpected Treasures",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "ecommerce",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11100e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}