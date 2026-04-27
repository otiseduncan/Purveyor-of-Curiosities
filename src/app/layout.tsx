import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purveyor of Curiosities | Curated Finds & Unexpected Treasures",
  description:
    "A curated resale shop for useful goods, unusual finds, tools, home items, automotive finds, and one-of-one treasures recovered from cleanouts, estates, storage auctions, and turnovers.",
  keywords: [
    "Purveyor of Curiosities",
    "curated finds",
    "resale shop",
    "estate cleanout finds",
    "storage auction finds",
    "tools",
    "home goods",
    "automotive accessories",
    "oddities",
    "local pickup",
  ],
  openGraph: {
    title: "Purveyor of Curiosities",
    description:
      "Curated finds. Useful goods. Unexpected treasures.",
    type: "website",
  },
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