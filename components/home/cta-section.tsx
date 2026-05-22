'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.cta.description}
          </p>
          <Link href="/contact" className="inline-block mt-10">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-base">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
