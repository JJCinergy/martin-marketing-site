export default function MetricsBar() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600">10 Sec</div>
            <div className="text-sm sm:text-base text-gray-600 mt-2">Script Breakdown Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600">2-3 Days</div>
            <div className="text-sm sm:text-base text-gray-600 mt-2">Time Saved per Episode</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600">15x ROI</div>
            <div className="text-sm sm:text-base text-gray-600 mt-2">Value Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600">20+</div>
            <div className="text-sm sm:text-base text-gray-600 mt-2">Departments Supported</div>
          </div>
        </div>
      </div>
    </section>
  )
}