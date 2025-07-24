export default function Features() {
  const features = [
    {
      icon: '📝',
      title: 'Digital Script Highlighting',
      description: 'Intelligent element detection',
    },
    {
      icon: '📌',
      title: 'Tracked Scene Notes',
      description: 'Never lose critical information',
    },
    {
      icon: '⚡',
      title: 'Instant Breakdown',
      description: 'Elements detected automatically',
    },
    {
      icon: '👥',
      title: 'Real-time Collaboration',
      description: 'Team updates instantly',
    },
    {
      icon: '🎭',
      title: 'Department Workflows',
      description: 'Customized for each team',
    },
    {
      icon: '🔍',
      title: 'Cross-Episode Tracking',
      description: 'Series-wide element management',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Features</h2>
          <p className="text-xl text-gray-600">Everything you need for modern production management</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}