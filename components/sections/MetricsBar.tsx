export default function MetricsBar() {
  const metrics = [
    { value: '3 Min', label: 'Script Breakdown Time' },
    { value: '2-3 Days', label: 'Time Saved' },
    { value: '15x ROI', label: 'Value Delivered' },
    { value: '20+', label: 'Departments Supported' },
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm sm:text-base text-gray-600 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}