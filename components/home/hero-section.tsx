'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/images/hero-industrial.jpg"
          alt="NH Master Manufacturing Facility"
          fill
          className="object-cover brightness-95 contrast-105"
          priority
          quality={90}
        />
        {/* Improved Overlay: gradient + softer opacity so image is visible but text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="animate-fade-in-up opacity-0 mb-8">
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full">
              Premium Masterbatch & Compounds
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-balance drop-shadow-[0_16px_30px_rgba(0,0,0,0.6)]">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up opacity-0 animation-delay-200 mt-8 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed text-pretty drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up opacity-0 animation-delay-300 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base">
                {t.hero.cta2}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
