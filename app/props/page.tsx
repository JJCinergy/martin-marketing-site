import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function PropsPage() {
  const features = [
    {
      title: "Instant Prop Breakdown",
      description: "Upload your script and get a complete prop list in seconds, organized by scene and character"
    },
    {
      title: "Smart Updates",
      description: "Prop lists automatically update when scripts change - never miss a revision"
    },
    {
      title: "Department Integration",
      description: "Props flow seamlessly between departments with real-time sync"
    },
    {
      title: "Visual Tracking",
      description: "Add photos, clearance status, and notes to prevent on-set mistakes"
    },
    {
      title: "Multiple Sort Options",
      description: "View by set, character, scene, or shooting order - whatever works for your workflow"
    },
    {
      title: "Cloud-Based Access",
      description: "Your entire team stays updated instantly, from anywhere"
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Track every prop with precision
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Upload your script and instantly break down your entire prop list
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="https://calendly.com/jordan-getmartin/martin-demo2"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Demo
              </Link>
              <Link
                href="/get-started"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors text-lg"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 max-w-5xl mx-auto">
              <p className="text-gray-500 text-lg">[Props Dashboard Screenshot]</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Props management that actually works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  From script to prop list in seconds
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Martin's AI-powered engine reads your script and identifies every prop, 
                  automatically organizing them by scene, character, and location. What used 
                  to take hours now takes seconds.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Automatic prop identification and categorization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Smart grouping by scene and character</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Instant updates when scripts change</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500 text-center">[Script to Props Demo]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Built for real production workflows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-500 text-center">[Props Mobile App]</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Access props anywhere, update everywhere
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're in the prop house, on set, or in prep, Martin keeps 
                  your entire team in sync. Update clearance status, add photos, and 
                  track progress from any device.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobile & Desktop</h3>
                      <p className="text-gray-600">Work seamlessly across all devices</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Real-time Sync</h3>
                      <p className="text-gray-600">Changes update instantly for everyone</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Clearance Tracking</h3>
                      <p className="text-gray-600">Never miss a clearance issue again</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl text-white mb-8 italic">
              "Martin transformed our props workflow. What used to take our team 
              hours of manual work now happens automatically. The time savings 
              alone paid for the entire year in our first episode."
            </p>
            <p className="text-gray-400">
              <span className="font-semibold">Sarah Chen</span> • Props Master • Award-Winning Series
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to revolutionize your props workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join production teams saving hours on every episode
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/jordan-getmartin/martin-demo2"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Demo
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
      </div>
      <Footer />
    </>
  )
}