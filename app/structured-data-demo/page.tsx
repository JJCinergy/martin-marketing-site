'use client'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function StructuredDataDemo() {
  const [activeTab, setActiveTab] = useState('preview')

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.getmartin.io/#organization",
        "name": "Martin",
        "url": "https://www.getmartin.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.getmartin.io/martin-logo.svg",
          "width": 200,
          "height": 60
        },
        "description": "Professional script breakdown software for Film & TV production teams",
        "sameAs": [
          "https://twitter.com/getmartin",
          "https://www.linkedin.com/company/martin-digital"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.getmartin.io/#website",
        "url": "https://www.getmartin.io",
        "name": "Martin - Script to Screen, Simplified",
        "description": "The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.",
        "publisher": {
          "@id": "https://www.getmartin.io/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.getmartin.io/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Martin",
        "description": "Professional script breakdown and production management software that helps creative teams quickly break down scripts and organize their work, saving each department hours or days of prep time.",
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web-based",
        "offers": [
          {
            "@type": "Offer",
            "name": "Freelance",
            "price": "75",
            "priceCurrency": "USD",
            "description": "Best for Studio Execs, Accountants, Directors, & Designers in prep"
          },
          {
            "@type": "Offer",
            "name": "Small Team",
            "price": "250",
            "priceCurrency": "USD",
            "description": "Perfect for small production teams with up to 5 users"
          },
          {
            "@type": "Offer",
            "name": "Production Team",
            "price": "500",
            "priceCurrency": "USD",
            "description": "For Film and Episodic shows with unlimited users"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "127"
        }
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Martin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Martin is the fastest script breakdown software for Film & TV production. It helps creative teams quickly break down scripts and organize their work, saving each department hours or days of prep time while improving communication."
        }
      },
      {
        "@type": "Question",
        "name": "How does Martin save time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Martin automates the script breakdown process, allowing you to break down a 120-page script in minutes instead of hours. It instantly generates department-specific lists, tracks changes, and keeps everyone synchronized."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All plans include the first 10 days free, and you can cancel any time. No credit card required to start."
        }
      }
    ]
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Structured Data Demo
            </h1>
            <p className="text-gray-600 mb-8">
              This page shows the structured data that's being added to your site to improve search engine results.
            </p>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 border-b">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'preview'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Search Result Preview
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'data'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Structured Data
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-4 py-2 font-medium ${
                  activeTab === 'faq'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                FAQ Schema
              </button>
            </div>

            {/* Preview Tab */}
            {activeTab === 'preview' && (
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">How your site will appear in Google search results:</h2>
                  
                  {/* Main Search Result */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-1">getmartin.io</div>
                        <div className="text-sm text-gray-600">https://www.getmartin.io</div>
                      </div>
                    </div>
                    <h3 className="text-xl text-blue-700 hover:underline cursor-pointer mb-2">
                      Martin - Script to Screen, Simplified
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      The fastest script breakdown in Film & TV. Built by Emmy-winning professionals who understand your workflow.
                    </p>

                    {/* Sitelinks */}
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <h4 className="text-blue-700 hover:underline cursor-pointer font-medium">Pricing</h4>
                        <p className="text-sm text-gray-600">Flexible plans for freelancers, small teams, and large productions...</p>
                      </div>
                      <div>
                        <h4 className="text-blue-700 hover:underline cursor-pointer font-medium">How Martin Works</h4>
                        <p className="text-sm text-gray-600">Break down scripts in minutes, not hours. See how Martin streamlines...</p>
                      </div>
                      <div>
                        <h4 className="text-blue-700 hover:underline cursor-pointer font-medium">IATSE Union Discounts</h4>
                        <p className="text-sm text-gray-600">Special pricing available for IATSE union members. Get exclusive...</p>
                      </div>
                      <div>
                        <h4 className="text-blue-700 hover:underline cursor-pointer font-medium">About Martin</h4>
                        <p className="text-sm text-gray-600">Built by Emmy-winning professionals who understand your workflow...</p>
                      </div>
                      <div>
                        <h4 className="text-blue-700 hover:underline cursor-pointer font-medium">For Physical Production</h4>
                        <p className="text-sm text-gray-600">Streamline your prep process and save days of work with automated...</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600">More results from getmartin.io »</p>
                      </div>
                    </div>

                    {/* Search Box */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Search getmartin.io"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                          disabled
                        />
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm" disabled>
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rich Snippet Example */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Rich Snippet with Pricing:</h2>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl text-blue-700 hover:underline cursor-pointer mb-2">
                      Martin Pricing - Script Breakdown Software
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="ml-1">4.9</span>
                      </div>
                      <span>·</span>
                      <span>127 reviews</span>
                      <span>·</span>
                      <span>Starting at $75/month</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Professional script breakdown software with plans for freelancers ($75/mo), small teams ($250/mo), and production teams ($500/mo). First 10 days free.
                    </p>
                  </div>
                </div>

                {/* FAQ Snippet */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">FAQ in Search Results:</h2>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium mb-3">People also ask</h3>
                    <div className="space-y-3">
                      <details className="border-t border-gray-200 pt-3">
                        <summary className="cursor-pointer text-gray-900 hover:text-blue-600">
                          What is Martin?
                        </summary>
                        <p className="mt-2 text-sm text-gray-600 pl-4">
                          Martin is the fastest script breakdown software for Film & TV production. It helps creative teams quickly break down scripts and organize their work...
                        </p>
                      </details>
                      <details className="border-t border-gray-200 pt-3">
                        <summary className="cursor-pointer text-gray-900 hover:text-blue-600">
                          How does Martin save time?
                        </summary>
                        <p className="mt-2 text-sm text-gray-600 pl-4">
                          Martin automates the script breakdown process, allowing you to break down a 120-page script in minutes instead of hours...
                        </p>
                      </details>
                      <details className="border-t border-gray-200 pt-3">
                        <summary className="cursor-pointer text-gray-900 hover:text-blue-600">
                          Is there a free trial?
                        </summary>
                        <p className="mt-2 text-sm text-gray-600 pl-4">
                          Yes! All plans include the first 10 days free, and you can cancel any time. No credit card required to start.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Structured Data Tab */}
            {activeTab === 'data' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Main Structured Data:</h2>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(structuredData, null, 2)}
                </pre>
              </div>
            )}

            {/* FAQ Schema Tab */}
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">FAQ Schema:</h2>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(faqSchema, null, 2)}
                </pre>
              </div>
            )}

            {/* Testing Tools */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Test Your Structured Data:</h3>
              <div className="space-y-2">
                <a 
                  href="https://search.google.com/test/rich-results?url=https://www.getmartin.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 underline"
                >
                  → Google Rich Results Test
                </a>
                <a 
                  href="https://validator.schema.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 underline"
                >
                  → Schema.org Validator
                </a>
                <a 
                  href="https://search.google.com/search-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 underline"
                >
                  → Google Search Console (to submit for indexing)
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}