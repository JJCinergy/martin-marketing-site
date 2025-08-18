import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import TrackingScripts from "@/components/TrackingScripts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin - Script to Screen, Simplified",
  description: "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
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
