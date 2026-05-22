'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-animate">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              {t.about.sectionTitle}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
            <Link href="/about" className="inline-block mt-8">
              <Button variant="outline" className="font-semibold group">
                {t.about.learnMore}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="scroll-animate grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/masterbatch-pellets.jpg"
                  alt="Colorful masterbatch pellets"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/extrusion-machine.jpg"
                  alt="Modern extrusion machinery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
