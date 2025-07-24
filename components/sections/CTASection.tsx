export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to revolutionize your production workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of production professionals who've made the switch
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-colors">
          Start Free Trial
        </button>
        <p className="text-gray-400 mt-4">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}