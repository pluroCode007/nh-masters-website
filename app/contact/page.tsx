'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/lib/i18n/context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const { t } = useLanguage()
  const scrollRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: '✅ Thank you! Your message has been sent to nhmaster.bih@gmail.com. We will contact you soon!' 
        })
        setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Error sending message. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Connection error. Please try again or contact us directly.' 
      })
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main ref={scrollRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              {t.contact.sectionTitle}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              {t.contact.title}
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 leading-relaxed">
              {t.contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 scroll-animate">
              <h2 className="text-2xl font-bold text-foreground">
                Get In Touch
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ready to discuss your polymer needs? Contact our team for expert guidance 
                and customized solutions.
              </p>

              <div className="mt-10 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.address}</h3>
                    <p className="mt-1 text-muted-foreground">Fikreta Ploče 4, {t.contact.addressValue}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.phone}</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="tel:+38762588821" className="hover:text-accent transition-colors">
                        +387 62 588 821
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+387603035173" className="hover:text-accent transition-colors">
                        +387 60 303 5173
                      </a>
                    </p>
                  
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.contact.email}</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="mailto:nhmaster.bih@gmail.com" className="hover:text-accent transition-colors">
                        nhmaster.bih@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/38762588821"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                {t.contact.whatsapp}
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 scroll-animate">
              <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 border border-green-400 text-green-800' 
                      : 'bg-red-100 border border-red-400 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.company}
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.phone}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  {/* Product Interest */}
                  <div className="sm:col-span-2">
                    <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.productInterest}
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">{t.contact.form.selectProduct}</option>
                      <option value="color">Color Masterbatches</option>
                      <option value="additive">Additive Masterbatches</option>
                      <option value="filler">Filler Masterbatches</option>
                      <option value="custom">Custom Compounds</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-8 w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted">
        <iframe
          src="https://maps.google.com/maps?q=Fikreta%20Plo%C4%8De%204%20Sarajevo&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NH Master Location - Fikreta Ploče 4, Sarajevo"
        />
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border lg:hidden z-40">
        <a
          href="https://wa.me/38762588852"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          {t.contact.whatsapp}
        </a>
      </div>
    </main>
  )
}
