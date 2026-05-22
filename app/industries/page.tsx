'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/home/cta-section'
import { useLanguage } from '@/lib/i18n/context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Package, Car, Leaf, Building2, ShoppingBag, Shirt } from 'lucide-react'

const industries = [
  {
    key: 'packaging',
    icon: Package,
    description: 'Food packaging, industrial packaging, flexible films, rigid containers, bottles, and caps.',
    products: ['Color Masterbatches', 'Additive Masterbatches', 'Filler Masterbatches'],
  },
  {
    key: 'automotive',
    icon: Car,
    description: 'Interior components, exterior trims, under-the-hood parts, and functional components.',
    products: ['Color Masterbatches', 'Additive Masterbatches', 'Custom Compounds'],
  },
  {
    key: 'agriculture',
    icon: Leaf,
    description: 'Greenhouse films, mulch films, irrigation systems, and agricultural containers.',
    products: ['UV Stabilizers', 'Color Masterbatches', 'Additive Masterbatches'],
  },
  {
    key: 'construction',
    icon: Building2,
    description: 'Pipes, profiles, insulation, roofing materials, and construction films.',
    products: ['Filler Masterbatches', 'Color Masterbatches', 'Flame Retardants'],
  },
  {
    key: 'consumer',
    icon: ShoppingBag,
    description: 'Household products, appliances, toys, furniture, and lifestyle goods.',
    products: ['Color Masterbatches', 'Additive Masterbatches', 'Custom Compounds'],
  },
  {
    key: 'textiles',
    icon: Shirt,
    description: 'Synthetic fibers, nonwovens, technical textiles, and fiber applications.',
    products: ['Color Masterbatches', 'Additive Masterbatches'],
  },
] as const

export default function IndustriesPage() {
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
              {t.industries.sectionTitle}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              {t.industries.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              {t.industries.description}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const label = t.industries[industry.key as keyof typeof t.industries]
              
              return (
                <div
                  key={industry.key}
                  className="scroll-animate bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    {label}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  
                  {/* Products Used */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Solutions:
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.products.map((product) => (
                        <span 
                          key={product}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-foreground"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Industry Partnership Approach
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We understand that each industry has unique requirements and challenges. 
              Our technical team works closely with you to develop tailored solutions 
              that meet your specific performance, regulatory, and cost objectives.
            </p>
            <Link href="/contact" className="inline-block mt-10">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
