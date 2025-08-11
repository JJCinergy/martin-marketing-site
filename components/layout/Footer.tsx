import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security'],
    Company: ['About', 'Blog', 'Contact'],
    Legal: ['Privacy Notice', 'Terms of Use'],
    Resources: ['Knowledge Base', 'Support', 'Contact'],
  }

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-2/5 md:flex-shrink-0">
            <Link href="/">
              <Image
                src="/martin-logo.png"
                alt="Martin"
                width={150}
                height={60}
                className="mb-6 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4 text-lg">
              The fastest script breakdown in Film & TV.
            </p>
            <p className="text-gray-500 text-sm italic">
              "A script breakdown in under 30 seconds is like magic"
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:flex md:flex-1 md:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="md:flex-1">
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link 
                        href={
                          link === 'Privacy Notice' ? '/privacy' : 
                          link === 'Terms of Use' ? '/terms-of-use' : 
                          link === 'About' ? '/about' :
                          link === 'Support' ? 'https://martin-digital-inc.outseta.com/support/kb' :
                          link === 'Knowledge Base' ? 'https://martin-digital-inc.outseta.com/support/kb' :
                          '#'
                        } 
                        className="text-gray-400 hover:text-white text-sm md:text-base"
                        target={(link === 'Support' || link === 'Knowledge Base') ? '_blank' : undefined}
                        rel={(link === 'Support' || link === 'Knowledge Base') ? 'noopener noreferrer' : undefined}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 Martin Digital, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}