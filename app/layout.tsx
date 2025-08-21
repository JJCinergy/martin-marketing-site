import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import TrackingScripts from "@/components/TrackingScripts";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin - Script to Screen, Simplified",
  description: "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
  keywords: "script breakdown, film production, TV production, production management, script supervisor, production software",
  authors: [{ name: "Martin Digital Inc." }],
  openGraph: {
    title: "Martin - Script to Screen, Simplified",
    description: "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
    url: "https://www.getmartin.io",
    siteName: "Martin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin - Script to Screen, Simplified",
    description: "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <TrackingScripts />
        <StructuredData />
        <Script id="outseta-options" strategy="beforeInteractive">
          {`
            var o_options = {
              domain: 'martin-digital-inc.outseta.com',
              load: 'auth,customForm,emailList,leadCapture,nocode,profile,support'
            };
          `}
        </Script>
        <Script 
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_options"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
