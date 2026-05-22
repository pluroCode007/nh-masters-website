'use client'

import Link from 'next/link'
import { ArrowRight, Palette, Shield, Layers, Wrench } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/ui/button'

const products = [
  { 
    key: 'color',
    icon: Palette,
    color: 'bg-accent/10 text-accent',
  },
  { 
    key: 'additive',
    icon: Shield,
    color: 'bg-primary/10 text-primary',
  },
  { 
    key: 'filler',
    icon: Layers,
    color: 'bg-muted text-muted-foreground',
  },
  { 
    key: 'custom',
    icon: Wrench,
    color: 'bg-accent/10 text-accent',
  },
] as const

export function ProductsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            {t.products.sectionTitle}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            {t.products.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.products.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            const productData = t.products[product.key]
            
            return (
              <div
                key={product.key}
                className="scroll-animate bg-card rounded-lg p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${product.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {productData.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {productData.description}
                </p>
                <p className="mt-4 text-xs text-accent font-medium uppercase tracking-wide">
                  {productData.applications}
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-foreground hover:text-accent transition-colors group">
                  {t.products.requestQuote}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center scroll-animate">
          <Link href="/products">
            <Button size="lg" variant="outline" className="font-semibold">
              {t.products.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
