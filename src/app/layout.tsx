import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar"
import Background from "../components/background"
import Cursor from "../components/cursor"
import "../styles/prose.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Cursor />
        <Background>
          {/* Mobile intro (sidebar content inline) */}
          <div className="lg:hidden mx-auto max-w-6xl px-6 py-8">
            <Sidebar variant="mobile" />
          </div>

          {/* Desktop two-column */}
          <div className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-40">
            <aside className="hidden lg:block sticky top-24 h-fit">
              <Sidebar variant="desktop" />
            </aside>
            <main id="main">{children}</main>
          </div>
          
          <Footer />
        </Background>
      </body>
    </html>
  );
}