'use client'

import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/home/cta-section'
import { useLanguage } from '@/lib/i18n/context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Target, Eye, Heart } from 'lucide-react'

export default function AboutPage() {
  const { t } = useLanguage()
  const scrollRef = useScrollAnimation()

  return (
    <main ref={scrollRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              {t.about.sectionTitle}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              {t.about.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Facility Image Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/facility.jpg"
          alt="NH Master Manufacturing Facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="scroll-animate">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.about.mission}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="scroll-animate" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.about.vision}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </div>

            {/* Values */}
            <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.about.values}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.about.valuesText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Manufacturing Excellence
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight text-balance">
                State-of-the-Art Production Capabilities
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our modern manufacturing facility is equipped with advanced extrusion technology 
                and precision dosing systems, enabling us to produce masterbatches and compounds 
                that meet the most demanding specifications.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'High-capacity twin-screw extrusion lines',
                  'Precision gravimetric feeding systems',
                  'Advanced color matching technology',
                  'Rigorous quality control at every stage',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="scroll-animate grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/extrusion-machine.jpg"
                  alt="Extrusion machinery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/laboratory.jpg"
                  alt="Quality control laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Custom Formulations' },
              { value: '50+', label: 'Industry Partners' },
              { value: '100%', label: 'Quality Commitment' },
            ].map((stat, i) => (
              <div key={i} className="scroll-animate" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl sm:text-5xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/70 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
