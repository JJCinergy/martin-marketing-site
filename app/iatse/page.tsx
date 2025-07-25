import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function IATSEPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium uppercase">
                IATSE Members Special Discount
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              From One Union Member to Another
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              After 25+ years as a proud IATSE member, I built Martin to solve the real problems 
              we face in production every day. Now I&apos;m offering special pricing to my union family.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Exclusive IATSE Member Pricing
              </h2>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">$45</span>
                <span className="text-gray-600 text-lg"> per month</span>
                <p className="text-green-600 font-medium mt-2">Save $30/month off regular pricing</p>
              </div>
              <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">All Freelance plan features</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">1 user, 5 projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Priority support from fellow union members</span>
                </li>
              </ul>
              <a 
                href="https://martin-digital-inc.outseta.com/auth?widgetMode=register&planUid=gWKVZM9p&planPaymentTerm=month&skipPlanOptions=true#o-anonymous" 
                className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Your Union Discount
              </a>
              <p className="text-sm text-gray-600 mt-4">
                Valid IATSE membership verification required
              </p>
            </div>
          </div>
        </section>

        {/* Personal Message Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                A Message from Jordan Jacobs, Founder
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I&apos;ve been a proud IATSE member for over 25 years, working my way up from office assistant to 
                  Supervising Art Director. I&apos;ve lived through the late nights, the impossible deadlines, and the 
                  constant pressure to do more with less.
                </p>
                <p>
                  I built Martin because I got tired of watching talented union crews waste hours on 
                  manual breakdowns and paperwork instead of doing what they do best - being creative. This isn&apos;t just software; it&apos;s a tool built by one of us, for all of us.
                </p>
                <p>
                  That&apos;s why I&apos;m offering this special discount to my union kin. 
                  We&apos;ve always looked out for each other, and this is my way of continuing that tradition.
                </p>
                <p className="font-medium">
                  In solidarity,<br />
                  Jordan Jacobs<br />
                  IATSE Member since 1998
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Built for the Way Union Crews Actually Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Respect Your Time
                </h3>
                <p className="text-gray-600">
                  No more unpaid overtime doing breakdowns. Martin handles it in seconds, so you can 
                  focus on the work that pays.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Department-Specific Features
                </h3>
                <p className="text-gray-600">
                  Whether you&apos;re in Props, Costumes, Locations, or any other department, Martin 
                  speaks your language and knows your needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Union-Friendly Pricing
                </h3>
                <p className="text-gray-600">
                  Fair pricing that respects your budget. No hidden fees, no surprises - just honest 
                  pricing from someone who gets it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Support from Fellow Members
                </h3>
                <p className="text-gray-600">
                  Our support team includes union members who understand production. Get help from 
                  people who&apos;ve been in your shoes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Join Your Fellow Union Members?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thousands of IATSE members are already saving hours every week with Martin.
            </p>
            <a 
              href="https://martin-digital-inc.outseta.com/auth?widgetMode=register&planUid=gWKVZM9p&planPaymentTerm=month&skipPlanOptions=true#o-anonymous" 
              className="inline-block bg-blue-600 text-white py-4 px-8 rounded-md font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Claim Your Union Discount Now
            </a>
            <p className="text-sm text-gray-600 mt-4">
              Questions? Email us at <a href="mailto:union@getmartin.io" className="text-blue-600 underline">union@getmartin.io</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}