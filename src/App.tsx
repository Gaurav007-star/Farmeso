

import Navbar from './components/sections/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutUs from './components/sections/AboutUs'
import Service from './components/sections/Service'
import BenefitsSection from './components/sections/BenefitsSection'
import PartnersSection from './components/sections/PartnersSection'
import SplitInnovationSection from './components/sections/SplitInnovationSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import AiFeatureSection from './components/sections/AiFeatureSection'
import BlogInsightsSection from './components/sections/BlogInsightsSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/sections/Footer'

import { useEffect } from 'react'
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <Service />
        <BenefitsSection />
        <PartnersSection />
        <SplitInnovationSection />
        <TestimonialsSection />
        <AiFeatureSection />
        <BlogInsightsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App