'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/context'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="NH Master Logo"
              width={160}
              height={50}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.products}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.industries}
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.nav.quality}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Sarajevo, Bosnia and Herzegovina
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+38762588821" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +387 62 588 821
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:nhmaster.bih@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  nhmaster.bih@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              &copy; {new Date().getFullYear()} NH Master d.o.o. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
