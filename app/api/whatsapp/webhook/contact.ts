import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface ContactData {
  name: string
  company?: string
  email: string
  phone?: string
  product?: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactData = await req.json()

    // Validate
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Log to server console (visible in dev server output)
    console.log('\n')
    console.log('╔════════════════════════════════════════════╗')
    console.log('║   📧 CONTACT FORM SUBMISSION RECEIVED      ║')
    console.log('╚════════════════════════════════════════════╝')
    console.log(`Name:    ${body.name}`)
    console.log(`Email:   ${body.email}`)
    console.log(`Company: ${body.company || 'N/A'}`)
    console.log(`Phone:   ${body.phone || 'N/A'}`)
    console.log(`Product: ${body.product || 'N/A'}`)
    console.log(`─────────────────────────────────────────────`)
    console.log(`Message:\n${body.message}`)
    console.log(`─────────────────────────────────────────────`)
    console.log(`Submitted: ${new Date().toLocaleString()}`)
    console.log('╚════════════════════════════════════════════╝\n')

    // Try to send email via Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: 'nhmaster.bih@gmail.com',
            replyTo: body.email,
            subject: `New Contact Form: ${body.name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #f97316 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0;">
                  <h1 style="margin: 0; font-size: 24px;">📧 New Contact Submission</h1>
                </div>
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <table style="width: 100%; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">${body.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;"><a href="mailto:${body.email}" style="color: #2563eb; text-decoration: none;">${body.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">${body.company || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">${body.phone || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;"><strong>Product Interest:</strong></td>
                      <td style="padding: 8px 0; text-align: right;">${body.product || 'Not specified'}</td>
                    </tr>
                  </table>
                  <div style="background: white; padding: 20px; border-left: 4px solid #f97316; border-radius: 4px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">${body.message}</p>
                  </div>
                  <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                    <p>This message was submitted via the NH Master website contact form</p>
                    <p>Submitted: ${new Date().toLocaleString()}</p>
                  </div>
                </div>
              </div>
            `,
          }),
        })

        if (emailRes.ok) {
          console.log('✅ EMAIL SENT: Message forwarded to nhmaster.bih@gmail.com via Resend\n')
        } else {
          console.log('⚠️  Resend API responded with status:', emailRes.status)
          console.log('Message is logged above for manual review\n')
        }
      } catch (emailError) {
        console.log('⚠️  Failed to send via Resend:', emailError)
        console.log('Message is logged above for manual review\n')
      }
    } else {
      console.log('ℹ️  RESEND_API_KEY not configured')
      console.log('Message is logged above. To enable email forwarding, configure RESEND_API_KEY\n')
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been received and logged. We will contact you shortly!',
    })
  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}

