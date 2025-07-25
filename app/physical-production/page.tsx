import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function PhysicalProductionPage() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Save Days of Prep Time",
      description: "Instant script breakdowns mean your team can start actual creative work immediately"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Catch Issues Early",
      description: "Identify location conflicts, prop needs, and scheduling issues before they become problems"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Keep Everyone Aligned",
      description: "Real-time updates ensure all departments work from the same information"
    }
  ]

  const workflow = [
    {
      step: "1",
      title: "Upload Your Script",
      description: "Drag and drop your PDF - Martin handles any format"
    },
    {
      step: "2",
      title: "Instant Breakdown",
      description: "Our AI analyzes every element in seconds, not hours"
    },
    {
      step: "3",
      title: "Department Distribution",
      description: "Each team gets exactly what they need, when they need it"
    },
    {
      step: "4",
      title: "Stay in Sync",
      description: "Script changes flow automatically to every department"
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12">
              <Image
                src="/martin-logo.png"
                alt="Martin"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get your entire production on the same page
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Martin accelerates script understanding across every department, 
              saving time, effort, and budget on every production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="https://calendly.com/jordan-getmartin/martin-demo2"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Demo
              </Link>
              <Link
                href="/get-started"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors text-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The old way wastes everyone's time
                </h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Every department manually breaks down the same script. Hours of 
                    redundant work, inconsistent results, and missed details.
                  </p>
                  <p>
                    When scripts change (and they always do), the chaos multiplies. 
                    Who has the latest version? What changed? Did everyone get updated?
                  </p>
                  <p>
                    By the time problems surface, it's too late. The location is 
                    booked, the props are ordered, the schedule is locked.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-8">
                <div className="text-center text-red-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl font-semibold">Manual breakdowns waste</p>
                  <p className="text-3xl font-bold mt-2">40+ hours per episode</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                One source of truth for your entire production
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Martin automatically breaks down scripts and distributes exactly what 
                each department needs. Everyone stays synchronized, always.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              From script to synchronized in minutes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Access Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Smart permissions keep productions secure
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Control exactly who sees what. Martin's role-based access ensures 
                  sensitive information stays protected while giving each department 
                  the tools they need.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Industry-Standard Roles</h4>
                      <p className="text-gray-600">Pre-configured permissions for every department</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Script Security</h4>
                      <p className="text-gray-600">Watermarked PDFs and controlled distribution</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Audit Trail</h4>
                      <p className="text-gray-600">Track every change and access</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500 text-center">[Department Access Dashboard]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Trusted by production professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "Martin is clearly made by industry folks who understand our 
                  actual workflow. Other software feels like it was built by people 
                  who've never been on a set."
                </p>
                <p className="font-semibold text-gray-900">Michael Roberts</p>
                <p className="text-gray-600">Production Designer • Emmy Nominee</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg text-gray-700 mb-6 italic">
                  "A script breakdown in under 30 seconds is like magic. We used to 
                  spend entire days on this. Now we actually have time to be creative."
                </p>
                <p className="font-semibold text-gray-900">Lisa Park</p>
                <p className="text-gray-600">Line Producer • Major Streaming Series</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How quickly can we get started?
                </h3>
                <p className="text-gray-600">
                  Most productions are up and running within 24 hours. Upload your script, 
                  configure departments, and you're ready to go. We provide full onboarding 
                  support to ensure a smooth transition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What happens when scripts change?
                </h3>
                <p className="text-gray-600">
                  Martin automatically detects changes and updates all department breakdowns. 
                  Your team gets notified of exactly what changed, ensuring everyone stays 
                  synchronized without manual work.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is our data secure?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Martin uses bank-level encryption, SOC 2 compliant infrastructure, 
                  and role-based access controls. Your scripts and production data are protected 
                  with the same security standards used by major studios.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can we customize for our production's needs?
                </h3>
                <p className="text-gray-600">
                  Yes. While Martin comes pre-configured with industry standards, you can 
                  customize departments, categories, and workflows to match your production's 
                  specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to transform your production workflow?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join productions saving 40+ hours per episode
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/jordan-getmartin/martin-demo2"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Your Demo
              </Link>
              <Link
                href="/get-started"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition-colors text-lg border-2 border-blue-500"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}