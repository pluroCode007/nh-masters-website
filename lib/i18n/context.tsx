'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { translations, type Language, type Translations } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  showLanguageSelector: boolean
  setShowLanguageSelector: (show: boolean) => void
  hasSelectedLanguage: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(true) // Default true to prevent flash
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('nh-master-lang') as Language | null
      const hasSelected = localStorage.getItem('nh-master-lang-selected')
      
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang)
        setHasSelectedLanguage(true)
      } else if (!hasSelected) {
        // First visit - show language selector
        setShowLanguageSelector(true)
        setHasSelectedLanguage(false)
      }
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    setHasSelectedLanguage(true)
    if (typeof window !== 'undefined') {
      localStorage.setItem('nh-master-lang', lang)
      localStorage.setItem('nh-master-lang-selected', 'true')
    }
  }, [])

  const t = translations[language]

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ 
        language: 'en', 
        setLanguage, 
        t: translations.en, 
        showLanguageSelector: false, 
        setShowLanguageSelector, 
        hasSelectedLanguage: true 
      }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      showLanguageSelector, 
      setShowLanguageSelector, 
      hasSelectedLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
