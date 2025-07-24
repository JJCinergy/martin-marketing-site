export default function Security() {
  const features = [
    {
      icon: '🔒',
      title: 'End-to-end encryption',
      description: 'AES-256 encryption for all data',
    },
    {
      icon: '📋',
      title: 'SOC 2 Compliant',
      description: 'Industry-standard security certification',
    },
    {
      icon: '👤',
      title: 'Role-based access control',
      description: 'Granular permissions for every team member',
    },
    {
      icon: '📊',
      title: 'Audit trails',
      description: 'Complete history of all actions',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Security First</h2>
          <p className="text-xl text-gray-600">Your scripts are safe with bank-level security</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}