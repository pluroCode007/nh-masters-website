'use server'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple language detection: checks for Arabic, Cyrillic, or defaults to Latin/English.
function detectLanguage(text: string) {
  if (!text) return 'en'
  const arabic = /[\u0600-\u06FF]/
  const cyrillic = /[\u0400-\u04FF]/
  if (arabic.test(text)) return 'ar'
  if (cyrillic.test(text)) return 'sr'
  // naive check for common Bosnian/Croatian/Serbian words
  const lower = text.toLowerCase()
  if (lower.includes('hvala') || lower.includes('zdravo') || lower.includes('sarajevo')) return 'bs'
  if (lower.includes('danke') || lower.includes('hallo')) return 'de'
  if (lower.includes('merhaba')) return 'tr'
  return 'en'
}

// Generate intelligent AI response based on user message
async function generateAIResponse(userMessage: string, lang: string): Promise<string> {
  const lower = userMessage.toLowerCase()
  
  // Product inquiry detection
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
  
  // Quote/Pricing inquiry
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
  
  // Contact/Hours inquiry
  if (lower.includes('contact') || lower.includes('call') || lower.includes('hour') || lower.includes('phone')) {
    const responses: Record<string, string> = {
      en: 'Contact us: +387 62 588 8521, +387 60 303 5173, or +387 60 30 35 173. Email: nhmaster.bih@gmail.com',
      bs: 'Kontaktirajte nas: +387 62 588 8521, +387 60 303 5173 ili nhmaster.bih@gmail.com',
      de: 'Kontaktieren Sie uns: +387 62 588 8521 oder nhmaster.bih@gmail.com',
      tr: 'Bize ulaşın: +387 62 588 8521 veya nhmaster.bih@gmail.com',
      ar: 'اتصل بنا: +387 62 588 8521 أو nhmaster.bih@gmail.com',
    }
    return responses[lang] || responses.en
  }

  // Sample/Test inquiry
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

  // Default: Acknowledge and offer assistance
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // WhatsApp Cloud API webhook structure
    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const messageObj = changes?.value?.messages?.[0] || body.messages?.[0]
    const incomingText = messageObj?.text?.body || messageObj?.body || ''
    const from = messageObj?.from || changes?.value?.metadata?.phone_number_id || 'unknown'

    if (!from || !incomingText) {
      return NextResponse.json({ success: true }) // Return 200 to prevent retries
    }

    // Detect language
    const lang = detectLanguage(incomingText)

    // Generate AI response
    const aiResponse = await generateAIResponse(incomingText, lang)

    // Send response via WhatsApp
    const sent = await sendWhatsAppMessage(from, aiResponse)

    // Log interaction for admin review
    console.log({
      timestamp: new Date().toISOString(),
      from,
      message: incomingText,
      detectedLanguage: lang,
      aiResponse,
      sent,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Webhook error', err)
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
