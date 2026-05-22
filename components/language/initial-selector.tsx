"use client"

import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { languages } from '@/lib/i18n/translations'
import { useLanguage } from '@/lib/i18n/context'

export default function InitialLanguageSelector() {
  const { showLanguageSelector, setShowLanguageSelector, setLanguage } = useLanguage()

  return (
    <Dialog open={showLanguageSelector} onOpenChange={(open) => setShowLanguageSelector(open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose your language</DialogTitle>
          <DialogDescription>Select your preferred language for the site.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              className="justify-start"
              onClick={() => {
                setLanguage(lang.code as any)
                setShowLanguageSelector(false)
              }}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </Button>
          ))}
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setShowLanguageSelector(false)}>
            Continue in English
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
