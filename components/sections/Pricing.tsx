export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Save Time. Save Money. Start Today.
          </h2>
          <p className="text-xl text-gray-600">
            Join productions saving 2-3 days per script. ROI in your first breakdown.
          </p>
        </div>

        {/* Monthly/Annual Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium">
              Monthly
            </button>
            <button className="text-gray-600 px-6 py-2 font-medium">
              Annual <span className="text-green-600 text-sm">Save 2 months</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Freelance Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelance</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-600"> per month</span>
            </div>
            <p className="text-gray-600 mb-6">Best for Studio Execs, Accountants, Directors, & Designers in prep.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Single user</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">2 Active projects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Script breakdown & notes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Character & set lists</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Excel export</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Team Plan */}
          <div className="relative bg-blue-600 p-8 rounded-lg shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium uppercase">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$500</span>
              <span className="text-blue-100"> per month</span>
            </div>
            <p className="text-blue-100 mb-6">For production companies and TV shows</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Unlimited users</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Unlimited projects</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">All department features</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">User permissions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Priority support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white">API access</span>
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-md font-semibold hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="text-center bg-gray-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Major studios and networks trust Martin for their most complex productions. Get custom pricing, dedicated support, and enterprise features.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>

        {/* Footer text */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-600">14-day free trial. No credit card required. Cancel anytime.</p>
          <p className="text-gray-600"><strong>Money-back guarantee:</strong> If Martin doesn't save you time, we'll refund your first month.</p>
        </div>
      </div>
    </section>
  )
}