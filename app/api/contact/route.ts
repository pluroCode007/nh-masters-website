"use server"

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Language detection reused for simple AI fallback
function detectLanguage(text: string) {
  if (!text) return 'en'
  const arabic = /[\u0600-\u06FF]/
  const cyrillic = /[\u0400-\u04FF]/
  if (arabic.test(text)) return 'ar'
  if (cyrillic.test(text)) return 'sr'
  const lower = text.toLowerCase()
  if (lower.includes('hvala') || lower.includes('zdravo') || lower.includes('sarajevo')) return 'bs'
  if (lower.includes('danke') || lower.includes('hallo')) return 'de'
  if (lower.includes('merhaba')) return 'tr'
  return 'en'
}

// Basic canned-AI generator (same style as WhatsApp webhook)
async function generateAIResponse(userMessage: string, lang: string): Promise<string> {
  const lower = (userMessage || '').toLowerCase()

  if (lower.includes('product') || lower.includes('masterbatch') || lower.includes('compound') || lower.includes('material')) {
    const responses: Record<string, string> = {
      en: 'We offer Color, Additive, and Filler Masterbatches, plus custom compounds. What specific product interests you?',
      bs: 'Nudimo Color, Additive i Filler Masterbatch, kao i prilagođene komplekse. Koji proizvod vas interesuje?',
      de: 'Wir bieten Farb-, Zusatz- und Füllmasterbatches sowie kundenspezifische Mischungen an. Welches Produkt interessiert Sie?',
      tr: 'Renk, Katkı ve Dolgu Masterbatchleri ile özel bileşikler sunuyoruz. Hangi ürün sizi ilgilendirir?',
      ar: 'نحن نقدم مواد ماستر بألوان وإضافات وحشوات، بالإضافة إلى مركبات مخصصة. ما المنتج الذي يهمك؟',
    }
    return responses[lang] || responses.en
  }

  if (lower.includes('price') || lower.includes('quote') || lower.includes('cost') || lower.includes('offer')) {
    const responses: Record<string, string> = {
      en: 'Pricing depends on product type and volume. Can you share your specific requirements? Our team will provide a detailed quote.',
      bs: 'Cijena zavisi od vrste proizvoda i količine. Možete li podijeliti svoje zahtjeve? Naš tim će dati detaljnu ponudu.',
      de: 'Die Preisgestaltung hängt von Produkttyp und Volumen ab. Können Sie Ihre Anforderungen mitteilen?',
      tr: 'Fiyatlandırma ürün türü ve hacmine bağlıdır. Gereksinimlerinizi paylaşabilir misiniz?',
      ar: 'يعتمد السعر على نوع المنتج والحجم. هل يمكنك مشاركة متطلباتك؟',
    }
    return responses[lang] || responses.en
  }

  if (lower.includes('sample') || lower.includes('test') || lower.includes('order')) {
    const responses: Record<string, string> = {
      en: 'We can provide samples! Please share your requirements (product type, specifications, quantity needed).',
      bs: 'Možemo pružiti uzorke! Molimo podijelite vaše zahtjeve.',
      de: 'Wir können Muster bereitstellen! Bitte teilen Sie Ihre Anforderungen mit.',
      tr: 'Numune sağlayabiliriz! Lütfen gereksinimlerinizi paylaşın.',
      ar: 'يمكننا توفير عينات! يرجى مشاركة متطلباتك.',
    }
    return responses[lang] || responses.en
  }

  const responses: Record<string, string> = {
    en: 'Thank you for reaching out to NH Master 👋 How can we help? We specialize in masterbatch and polymer compounds.',
    bs: 'Hvala što ste se obratili NH Master-u 👋 Kako vam možemo pomoći?',
    de: 'Vielen Dank für Ihre Nachricht 👋 Wie können wir Ihnen helfen?',
    tr: 'NH Master ile iletişime geçtiğiniz için teşekkürler 👋 Size nasıl yardımcı olabiliriz?',
    ar: 'شكراً لتواصلك مع NH Master 👋 كيف يمكننا مساعدتك؟',
  }

  return responses[lang] || responses.en
}

async function sendWhatsAppMessage(to: string, text: string): Promise<boolean> {
  const WA_TOKEN = process.env.WA_TOKEN
  const WA_PHONE_ID = process.env.WA_PHONE_ID

  if (!WA_TOKEN || !WA_PHONE_ID) {
    console.log('WhatsApp credentials not configured. Message would be:', text)
    return false
  }

  try {
    const url = `https://graph.facebook.com/v16.0/${WA_PHONE_ID}/messages`
    const payload = {
      messaging_product: 'whatsapp',
      to,
      text: { body: text },
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${WA_TOKEN}`,
      },
      body: JSON.stringify(payload),
    })

    return response.ok
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return false
  }
}

async function sendEmail(to: string, subject: string, text: string, html?: string): Promise<boolean> {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
  if (!SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured. Set SENDGRID_API_KEY in environment variables.')
    return false
  }

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: 'no-reply@nhmaster.ba', name: 'NH Master' },
    subject,
    content: [
      { type: 'text/plain', value: text },
      { type: 'text/html', value: html || text },
    ],
  }

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const textResponse = await res.text()
      console.error('SendGrid response error', res.status, textResponse)
      return false
    }

    return true
  } catch (err) {
    console.error('SendGrid error', err)
    return false
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, product, message } = body || {}

    const subject = `Website contact: ${name || 'No name'}`
    const text = `New contact form submission:\nName: ${name || ''}\nCompany: ${company || ''}\nEmail: ${email || ''}\nPhone: ${phone || ''}\nProduct: ${product || ''}\nMessage: ${message || ''}`
    const html = `<p>${text.replace(/\n/g, '<br/>')}</p>`

    // Send email to nhmaster
    const emailSent = await sendEmail('nhmaster.bih@gmail.com', subject, text, html)
    if (!emailSent) {
      console.error('Contact form email failed. Please verify SENDGRID_API_KEY and SendGrid configuration.')
      return NextResponse.json(
        { success: false, error: 'Email delivery failed. Please try again later.' },
        { status: 500 }
      )
    }

    // If staff not available, use AI fallback to craft and send a WhatsApp reply (if phone provided)
    const staffAvailable = process.env.STAFF_AVAILABLE === 'true'
    if (!staffAvailable && phone) {
      const lang = detectLanguage(message || '')
      const ai = await generateAIResponse(message || '', lang)
      // try to send AI reply via WhatsApp
      await sendWhatsAppMessage(phone.replace(/\s|\+/g, ''), ai)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
