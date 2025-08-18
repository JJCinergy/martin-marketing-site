import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin - Script to Screen, Simplified",
  description: "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="rb2b-tracking" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = {loaded: true};
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
            }("VN080HXK796J");
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E9JG0NK86G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9JG0NK86G');
          `}
        </Script>
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
      </body>
    </html>
  );
}
