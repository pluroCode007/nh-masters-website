'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import { languages, type Language } from '@/lib/i18n/translations'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'industries', href: '/industries' },
  { key: 'quality', href: '/quality' },
  { key: 'contact', href: '/contact' },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="flex items-center gap-0">
              <span className="text-3xl font-bold" style={{ color: '#f97316' }}>NH</span>
              <span className="text-3xl font-bold" style={{ color: '#2563eb' }}>MASTER</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase text-xs font-medium">{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={language === lang.code ? 'bg-secondary' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-accent text-accent-foreground border border-accent/40 font-semibold tracking-wide">
                {t.nav.getQuote}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors tracking-wide uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-4 py-3 border-t border-border mt-2">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language)
                        setMobileMenuOpen(false)
                      }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                        language === lang.code
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent text-accent-foreground border border-accent/40 font-semibold">
                    {t.nav.getQuote}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
