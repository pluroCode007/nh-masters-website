'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/home/cta-section'
import { useLanguage } from '@/lib/i18n/context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Microscope, Shield, RefreshCw, FileCheck, Beaker, BarChart3 } from 'lucide-react'

const qaProcesses = [
  {
    icon: Beaker,
    title: 'Raw Material Testing',
    description: 'Every incoming material is tested for purity, consistency, and conformity to specifications.',
  },
  {
    icon: Microscope,
    title: 'In-Process Monitoring',
    description: 'Continuous monitoring during production ensures consistent quality throughout the process.',
  },
  {
    icon: BarChart3,
    title: 'Color Measurement',
    description: 'Spectrophotometric analysis ensures precise color matching and batch consistency.',
  },
  {
    icon: Shield,
    title: 'Performance Testing',
    description: 'Mechanical, thermal, and functional properties verified against specifications.',
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete traceability with certificates of analysis for every batch produced.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    description: 'Ongoing process optimization and quality system enhancement.',
  },
]

export default function QualityPage() {
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
              {t.quality.sectionTitle}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              {t.quality.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              {t.quality.description}
            </p>
          </div>
        </div>
      </section>

      {/* Lab Image Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/laboratory.jpg"
          alt="NH Master Quality Control Laboratory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Quality Pillars */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Lab */}
            <div className="scroll-animate">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <Microscope className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.quality.labTitle}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.quality.labDesc}
              </p>
            </div>

            {/* QA */}
            <div className="scroll-animate" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.quality.processTitle}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.quality.processDesc}
              </p>
            </div>

            {/* Consistency */}
            <div className="scroll-animate" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <RefreshCw className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">
                {t.quality.consistencyTitle}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.quality.consistencyDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QA Process Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto scroll-animate">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Quality Assurance
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Our Quality Control Process
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              From raw materials to finished product, every step is monitored and documented 
              to ensure consistent, high-quality output.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaProcesses.map((process, index) => {
              const Icon = process.icon
              return (
                <div
                  key={process.title}
                  className="scroll-animate bg-card rounded-lg p-6 border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {process.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Research & Development
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight text-balance">
                Innovation Through Research
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our R&D team continuously works on developing new formulations and improving 
                existing products. We invest in the latest testing equipment and stay current 
                with industry advancements to deliver cutting-edge polymer solutions.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'New product development and custom formulation',
                  'Process optimization for improved efficiency',
                  'Material compatibility testing and validation',
                  'Regulatory compliance and sustainability research',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="scroll-animate relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/masterbatch-pellets.jpg"
                alt="Research and development materials"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
