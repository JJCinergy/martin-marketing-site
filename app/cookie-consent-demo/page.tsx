'use client';

import { useState, useEffect } from 'react';

export default function CookieConsentDemo() {
  const [showBanner, setShowBanner] = useState(true);
  const [consentStatus, setConsentStatus] = useState<string | null>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    setConsentStatus(savedConsent);
    setScriptsLoaded(savedConsent === 'accepted');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    setConsentStatus('accepted');
    setScriptsLoaded(true);
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    setConsentStatus('declined');
    setScriptsLoaded(false);
  };

  const resetConsent = () => {
    localStorage.removeItem('cookieConsent');
    setShowBanner(true);
    setConsentStatus(null);
    setScriptsLoaded(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cookie Consent Demo Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Status</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <span className="font-medium mr-2">Consent Status:</span>
              <span className={`px-3 py-1 rounded text-sm ${
                consentStatus === 'accepted' ? 'bg-green-100 text-green-800' :
                consentStatus === 'declined' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {consentStatus || 'Not Set'}
              </span>
            </p>
            <p className="flex items-center">
              <span className="font-medium mr-2">Tracking Scripts:</span>
              <span className={`px-3 py-1 rounded text-sm ${
                scriptsLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {scriptsLoaded ? 'Loaded' : 'Not Loaded'}
              </span>
            </p>
            <p className="flex items-center">
              <span className="font-medium mr-2">Banner Visible:</span>
              <span className={`px-3 py-1 rounded text-sm ${
                showBanner ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {showBanner ? 'Yes' : 'No'}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
          <button
            onClick={resetConsent}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Reset Cookie Consent (Show Banner Again)
          </button>
          <p className="text-sm text-gray-600 mt-2">
            This will clear your consent choice and reload the page to show the banner again.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <div className="space-y-3 text-gray-700">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">For EU/UK Visitors:</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Banner appears automatically on first visit</li>
                <li>Must accept or decline before tracking starts</li>
                <li>Choice is remembered for future visits</li>
                <li>Google Analytics and RB2B only load after accepting</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">For Other Visitors:</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>No banner shown</li>
                <li>Tracking scripts load automatically</li>
                <li>Consent assumed (standard practice outside EU/UK)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Scripts Being Managed</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>Google Analytics (GA4)</strong>
                <p className="text-sm text-gray-600">ID: G-E9JG0NK86G</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <strong>RB2B Tracking</strong>
                <p className="text-sm text-gray-600">ID: VN080HXK796J</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Demo Cookie Banner (always visible on this page if showBanner is true) */}
      {showBanner && (
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
      )}
    </div>
  );
}