'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { AboutPreview } from '@/components/home/about-preview'
import { ProductsSection } from '@/components/home/products-section'
import { IndustriesSection } from '@/components/home/industries-section'
import { WhyUsSection } from '@/components/home/why-us-section'
import { CTASection } from '@/components/home/cta-section'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function HomePage() {
  const scrollRef = useScrollAnimation()

  return (
    <main ref={scrollRef}>
      <Header />
      <HeroSection />
      <AboutPreview />
      <ProductsSection />
      <IndustriesSection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
