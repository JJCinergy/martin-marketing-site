'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isEUUser, setIsEUUser] = useState(false);

  useEffect(() => {
    const checkLocationAndConsent = async () => {
      const consent = localStorage.getItem('cookieConsent');
      
      if (consent === 'accepted' || consent === 'declined') {
        return;
      }

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const euCountries = [
          'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
          'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
          'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
        ];
        
        if (euCountries.includes(data.country_code)) {
          setIsEUUser(true);
          setShowBanner(true);
        } else {
          localStorage.setItem('cookieConsent', 'accepted');
          window.dispatchEvent(new Event('cookieConsentAccepted'));
        }
      } catch (error) {
        console.error('Error detecting location:', error);
        setShowBanner(true);
      }
    };

    checkLocationAndConsent();
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies to enhance your experience and analyze site traffic. 
            By clicking "Accept", you consent to our use of cookies and tracking technologies.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 hover:bg-gray-800 rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}