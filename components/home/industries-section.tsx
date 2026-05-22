'use client'

import { Package, Car, Leaf, Building2, ShoppingBag, Shirt } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const industries = [
  { key: 'packaging', icon: Package },
  { key: 'automotive', icon: Car },
  { key: 'agriculture', icon: Leaf },
  { key: 'construction', icon: Building2 },
  { key: 'consumer', icon: ShoppingBag },
  { key: 'textiles', icon: Shirt },
] as const

export function IndustriesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            {t.industries.sectionTitle}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            {t.industries.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.industries.description}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const label = t.industries[industry.key as keyof typeof t.industries]
            
            return (
              <div
                key={industry.key}
                className="scroll-animate flex flex-col items-center p-6 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Icon className="h-8 w-8 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="mt-4 text-sm font-semibold text-foreground text-center">
                  {label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
