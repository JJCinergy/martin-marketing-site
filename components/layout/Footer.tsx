import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy Notice', 'Terms of Use'],
    Resources: ['Documentation', 'API', 'Support', 'Status'],
  }

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 lg:gap-16">
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
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex-1 min-w-0">
              <h3 className="font-semibold text-white mb-4 whitespace-nowrap">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      href={
                        link === 'Privacy Notice' ? '/privacy' : 
                        link === 'Terms of Use' ? '/terms-of-use' : 
                        link === 'About' ? '/about' :
                        '#'
                      } 
                      className="text-gray-400 hover:text-white whitespace-nowrap"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 Martin Digital, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}