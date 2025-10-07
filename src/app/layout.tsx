import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/prose.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Kuniy — Portfolio",
  description: "Software + data projects. Next.js, Tailwind, MDX.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Fernando Kuniy — Portfolio",
    description: "Software + data projects. Next.js, Tailwind, MDX.",
    url: "/",
    siteName: "Fernando Kuniy",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fernando Kuniy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}