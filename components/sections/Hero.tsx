'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [logoOpacity, setLogoOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      // Fade out logo as user scrolls down
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 100)
      setLogoOpacity(opacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div 
          className="mb-8 transition-opacity duration-300" 
          style={{ opacity: logoOpacity }}
        >
          <Image
            src="/martin-logo.png"
            alt="Martin"
            width={250}
            height={100}
            className="mx-auto h-20 w-auto"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gray-900">Script to Screen,</span>
          <br />
          <span className="text-blue-600">Simplified</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          The fastest script breakdown in Film & TV. Built by Emmy-winning professionals, not tech bros. Save days of prep time while keeping full creative control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#pricing" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors text-center">
            Get Started
          </a>
          <a href="https://calendly.com/jordan-getmartin/martin-demo2" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-50 transition-colors text-center">
            Schedule Demo
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Save prep time</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Maintain creative control</span>
          </div>
        </div>
      </div>
    </section>
  )
}