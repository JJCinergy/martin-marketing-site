export default function Security() {
  const features = [
    {
      icon: '🔐',
      title: 'End-to-End Encryption',
      description: 'All scripts and production data are encrypted at rest and in transit using AES-256 encryption.',
    },
    {
      icon: '🏛️',
      title: 'SOC 2 Compliant Infrastructure',
      description: 'Built on enterprise-grade infrastructure with comprehensive security auditing and monitoring.',
    },
    {
      icon: '👤',
      title: 'Role-Based Access Control',
      description: 'Granular permissions ensure team members only see what they need to see.',
    },
    {
      icon: '📋',
      title: 'Audit Trail',
      description: 'Complete history of every change, view, and download for compliance and security.',
    },
    {
      icon: '🛡️',
      title: 'IP Protection',
      description: 'No direct file URLs exposed. All assets served through secure proxy endpoints.',
    },
    {
      icon: '🔒',
      title: 'Data Isolation',
      description: 'Complete tenant isolation ensures your production data never mingles with others.',
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Studio-Grade Security</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Your scripts contain millions of dollars worth of IP. Martin protects them with the same security standards used by major banks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}