'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function TrackingScripts() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'accepted') {
        setHasConsent(true);
      }
    };

    checkConsent();

    const handleConsentAccepted = () => {
      setHasConsent(true);
    };

    window.addEventListener('cookieConsentAccepted', handleConsentAccepted);

    return () => {
      window.removeEventListener('cookieConsentAccepted', handleConsentAccepted);
    };
  }, []);

  if (!hasConsent) {
    return null;
  }

  return (
    <>
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
    </>
  );
}