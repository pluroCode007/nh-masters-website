'use client'

import { Award, Lightbulb, Globe, HeadphonesIcon } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

const advantages = [
  { key: 'quality', icon: Award },
  { key: 'innovation', icon: Lightbulb },
  { key: 'global', icon: Globe },
  { key: 'support', icon: HeadphonesIcon },
] as const

export function WhyUsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto scroll-animate">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            {t.whyUs.sectionTitle}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-balance">
            {t.whyUs.title}
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            const title = t.whyUs[advantage.key as keyof typeof t.whyUs]
            const desc = t.whyUs[`${advantage.key}Desc` as keyof typeof t.whyUs]
            
            return (
              <div
                key={advantage.key}
                className="scroll-animate text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-bold">
                  {title}
                </h3>
                <p className="mt-3 text-primary-foreground/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
