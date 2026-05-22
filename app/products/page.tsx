'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/home/cta-section'
import { useLanguage } from '@/lib/i18n/context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

const productData = [
  {
    key: 'color',
    image: '/images/color-masterbatch.jpg',
    features: [
      'Wide color range and custom matching',
      'High pigment concentration',
      'Excellent dispersion',
      'Consistent batch-to-batch color',
      'Compatible with PE, PP, PS, ABS, and more',
    ],
  },
  {
    key: 'additive',
    image: '/images/additive-masterbatch.jpg',
    features: [
      'UV stabilizers for outdoor applications',
      'Antioxidants for thermal stability',
      'Flame retardant compounds',
      'Anti-static and anti-block agents',
      'Processing aids and slip agents',
    ],
  },
  {
    key: 'filler',
    image: '/images/filler-masterbatch.jpg',
    features: [
      'Calcium carbonate based fillers',
      'Talc masterbatches',
      'Cost reduction without compromising quality',
      'Improved dimensional stability',
      'Enhanced stiffness properties',
    ],
  },
  {
    key: 'custom',
    image: '/images/custom-compounds.jpg',
    features: [
      'Tailored formulations to specifications',
      'Full technical development support',
      'Prototype to production scale-up',
      'Multi-functional compound solutions',
      'Dedicated project management',
    ],
  },
] as const

export default function ProductsPage() {
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
              {t.products.sectionTitle}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              {t.products.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              {t.products.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {productData.map((product, index) => {
              const productContent = t.products[product.key]
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={product.key}
                  id={product.key}
                  className={`scroll-animate grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <Image
                      src={product.image}
                      alt={productContent.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                      Product Category
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                      {productContent.title}
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                      {productContent.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="mt-8 space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Applications */}
                    <div className="mt-8 p-4 bg-secondary rounded-lg">
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Applications:
                      </span>
                      <p className="mt-1 text-muted-foreground">
                        {productContent.applications}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link href="/contact" className="inline-block mt-8">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                        {t.products.requestQuote}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Technical Support at Every Step
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our experienced technical team works closely with you from initial consultation 
              through production, ensuring optimal formulation and consistent results.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              {[
                { title: 'Consultation', desc: 'Understanding your specific requirements and applications' },
                { title: 'Development', desc: 'Custom formulation and prototype testing' },
                { title: 'Production', desc: 'Scale-up support and ongoing quality assurance' },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
