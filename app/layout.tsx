import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/context'
import { ThemeProvider } from '@/components/theme-provider'
import InitialLanguageSelector from '@/components/language/initial-selector'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NH Master d.o.o | Premium Masterbatch & Polymer Compounds',
  description: 'World-class masterbatch and polymer compound manufacturer based in Sarajevo, Bosnia and Herzegovina. Color, additive, filler masterbatches and custom compounds for global industries.',
  keywords: ['masterbatch', 'polymer compounds', 'color masterbatch', 'additive masterbatch', 'filler masterbatch', 'plastic manufacturing', 'Bosnia', 'Sarajevo'],
  authors: [{ name: 'NH Master d.o.o' }],
  creator: 'NH Master d.o.o',
  openGraph: {
    title: 'NH Master d.o.o | Premium Masterbatch & Polymer Compounds',
    description: 'World-class masterbatch and polymer compound manufacturer serving global industries.',
    url: 'https://nhmaster.ba',
    siteName: 'NH Master d.o.o',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <InitialLanguageSelector />
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
