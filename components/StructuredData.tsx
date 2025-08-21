import Script from 'next/script'

export default function StructuredData() {
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

  const siteLinksSearchBox = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.getmartin.io/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.getmartin.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.getmartin.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://www.getmartin.io/#pricing"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://www.getmartin.io/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "IATSE Union Discounts",
        "item": "https://www.getmartin.io/iatse"
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
      },
      {
        "@type": "Question",
        "name": "Who uses Martin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Martin is used by Studio Executives, Accountants, Directors, Designers, Script Supervisors, and entire production teams on Film and TV productions of all sizes."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
        strategy="afterInteractive"
      />
      <Script
        id="sitelinks-searchbox"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteLinksSearchBox)
        }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList)
        }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
        strategy="afterInteractive"
      />
    </>
  )
}