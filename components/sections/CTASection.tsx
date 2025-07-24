export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Your Next Script Breakdown:<br />30 Seconds or 3 Hours?
        </h2>
        <p className="text-xl text-blue-100 mb-4">
          Join Emmy-winning professionals already saving hours and days of time per script.
        </p>
        <p className="text-xl text-blue-100 mb-10">
          Built by industry pros who understand your workflow.
        </p>
        <button className="bg-white text-blue-600 px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors">
          Start Your Free Trial
        </button>
        <p className="text-blue-100 mt-6 text-sm">
          14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}