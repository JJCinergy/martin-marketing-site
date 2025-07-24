import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import MetricsBar from '@/components/sections/MetricsBar'
import WorkflowSection from '@/components/sections/WorkflowSection'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import Security from '@/components/sections/Security'
import Testimonials from '@/components/sections/Testimonials'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MetricsBar />
        <WorkflowSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Security />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}