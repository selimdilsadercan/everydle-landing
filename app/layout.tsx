import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: [
    "wordle",
    "türkçe wordle",
    "bulmaca oyunu",
    "günlük bulmaca",
    "kelime oyunu",
    "everydle",
    "contexto",
    "moviedle",
    "quordle",
    "nerdle",
  ],
  authors: [{ name: "Everydle" }],
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950`}>
        {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
