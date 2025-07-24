'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation when scrolled down more than 50px
      setShowNav(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/martin-logo.png"
                alt="Martin"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </Link>
            <Link
              href="/demo"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Get a Demo
            </Link>
            <Link
              href="/get-started"
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </Link>
              <Link
                href="/signin"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}