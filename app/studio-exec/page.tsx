import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function StudioExecPage() {
  const benefits = [
    "Get complete script analysis in seconds, not days",
    "See accurate department needs before greenlighting",
    "Compare multiple projects side-by-side instantly",
    "Track script changes and their budget impact in real-time",
    "Make data-driven decisions with comprehensive breakdowns",
    "Reduce development time by eliminating manual analysis"
  ]

  const metrics = [
    {
      value: "90%",
      label: "Faster Script Analysis"
    },
    {
      value: "15-24x",
      label: "Return on Investment"
    },
    {
      value: "2-3 Days",
      label: "Saved Per Script"
    },
    {
      value: "50%",
      label: "More Accurate Budgets"
    }
  ]

  const faqs = [
    {
      question: "How does Martin help with development decisions?",
      answer: "Martin instantly breaks down scripts to show exact resource requirements - cast size, location needs, VFX shots, and more. You can compare multiple projects side-by-side to make informed greenlighting decisions based on real data, not estimates."
    },
    {
      question: "Can Martin handle multiple projects simultaneously?",
      answer: "Yes. Martin is designed for studios managing multiple productions. Upload unlimited scripts, compare breakdowns, and track changes across your entire development slate from a single dashboard."
    },
    {
      question: "How accurate are the automated breakdowns?",
      answer: "Martin's AI is trained on thousands of professional scripts and validated by Emmy-winning department heads. The breakdowns are consistently more detailed and accurate than manual analysis, catching elements human readers often miss."
    },
    {
      question: "What about script confidentiality?",
      answer: "Security is paramount. Martin uses bank-level encryption, SOC 2 compliant infrastructure, and strict access controls. Scripts are watermarked, access is logged, and you control exactly who sees what."
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <Image
                    src="/martin-logo.png"
                    alt="Martin"
                    width={200}
                    height={80}
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Speed script development and approval
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Get instant, comprehensive insights into any script's production requirements
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500 text-center">[Executive Dashboard Screenshot]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Make faster, smarter greenlighting decisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Significant ROI from day one
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-12 max-w-3xl mx-auto text-lg">
              Studios using Martin report saving 2-3 days per script analysis, with 
              first-pass budgets that are 50% more accurate than traditional methods.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              From script to greenlight faster than ever
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Upload any script format
                      </h3>
                      <p className="text-gray-600">
                        PDF, Final Draft, or any other format - Martin handles them all
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-blue-600 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Get instant comprehensive breakdown
                      </h3>
                      <p className="text-gray-600">
                        See every element: cast, locations, props, VFX, and more in seconds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-blue-600 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Make data-driven decisions
                      </h3>
                      <p className="text-gray-600">
                        Compare projects, estimate budgets, and greenlight with confidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500 text-center">[Breakdown Comparison View]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Trusted by industry leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-6 italic">
                  "Martin transformed our development process. We now evaluate 
                  three times as many scripts in half the time."
                </p>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-gray-600 text-sm">VP Development • Major Studio</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-6 italic">
                  "The accuracy of Martin's breakdowns is remarkable. Our initial 
                  budgets are now within 10% of final costs."
                </p>
                <p className="font-semibold text-gray-900">Michael Torres</p>
                <p className="text-gray-600 text-sm">Head of Production • Streaming Platform</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-6 italic">
                  "A script breakdown in under 30 seconds is like magic. It's 
                  changed how we approach development."
                </p>
                <p className="font-semibold text-gray-900">Jennifer Walsh</p>
                <p className="text-gray-600 text-sm">Creative Executive • Premium Cable</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to accelerate your development process?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              See how Martin can transform your script analysis workflow
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
                Get Early Access
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}