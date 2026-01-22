import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { WebVitals } from '@/components/performance/WebVitals'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <SkipToContent />
      <CustomCursor />
      <WebVitals />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
