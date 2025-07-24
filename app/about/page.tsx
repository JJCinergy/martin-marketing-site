import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

export default function AboutPage() {
  const productions = [
    { title: 'Only Murders in the Building', role: 'Art Director • Emmy Winner 2022 & 2023' },
    { title: 'The Leftovers', role: 'Art Director' },
    { title: 'Tales of the City', role: 'Supervising Art Director' },
    { title: 'The Plot Against America', role: 'Supervising Art Director' },
    { title: 'The Diplomat', role: 'Art Director' },
    { title: 'Sirens', role: 'Art Director' },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        {/* Header Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Image
                src="/martin-logo.png"
                alt="Martin"
                width={200}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">About Martin</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Martin was born from decades of real-world production experience and a simple belief: 
              creative professionals deserve tools that enhance their work, not complicate it.
            </p>
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-300 rounded-lg overflow-hidden w-48 h-48">
                  {/* Placeholder for Jordan's image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Jordan's Photo]
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jordan Jacobs</h3>
                <p className="text-gray-600 mb-4">Supervising Art Director & Founder of Martin</p>
                
                <p className="text-gray-700 mb-4">
                  <strong>Two-time Emmy Award winner</strong> (Only Murders in the Building 2022/2023), 
                  Jordan is a Supervising Art Director based in NYC with over 25 years of 
                  experience in Film and Television. Having assembled over 30 Art Departments, 
                  he brings a deep understanding of team building, communication, and how 
                  productions actually work.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Creating Martin comes from Jordan's passion for helping fellow production 
                  professionals work through problems and develop their careers. As a 
                  department head, he recognized the systemic issues that challenge every 
                  production department and developed software to address them. Martin helps 
                  creative teams quickly break down scripts and organize their work, saving each 
                  department hours or days of prep time while improving communication across 
                  the entire production.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Jordan has served on the Executive Board of United Scenic Artists Local 829 
                  IATSE, is a founding member and administrator of the New York Art Directors 
                  and Production Designers Google group (450+ members), and is a voter in the 
                  Primetime Emmy Awards. He is also one of the co-authors of USA 829's Art 
                  Department Best Practice Handbook, which guides new members on how Film 
                  and Television productions should be organized, staffed, and run.
                </p>
                
                <p className="text-gray-700">
                  Jordan graduated from NYU Tisch School of the Arts with a BFA in Theater and 
                  an MFA in Set Design. He also holds a certificate from the Institute for the Study 
                  of Classical Architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notable Productions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Notable Productions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {productions.map((production, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900">{production.title}</h3>
                  <p className="text-gray-600">{production.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is Martin Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Who is Martin?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                On every production, Martin is that one indispensable person who always knows what's 
                happening. They've read every script, tracked every change, studied every schedule, and 
                connected with every department. They're simply on top of it all. That's the spirit we've 
                captured in this software.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The real Martin was my close colleague and dear friend who passed away recently. He 
                embodied everything this software represents - dedication, attention to detail, and an 
                unwavering commitment to helping everyone around him succeed. This product is dedicated to the memory of the amazing and beloved Martin.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}