# NH Master d.o.o - Premium Masterbatch & Polymer Compounds

Welcome to the NH Master website repository. This is a modern, fully-featured Next.js website showcasing premium masterbatch and polymer compound manufacturing solutions.

## 🌟 Features

- **🌍 Multi-Language Support** - 13 languages with automatic detection
- **🎨 Dark Mode Design** - Professional, sleek dark theme
- **📧 Contact Form** - Fully functional with email integration
- **🤖 AI WhatsApp Handler** - Automated responses to inquiries
- **📞 Direct Contact Methods** - Phone, email, and WhatsApp integration
- **🚀 Production Ready** - Optimized for deployment

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Internationalization:** Custom i18n context
- **Hosting:** Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/nh-masters-website.git
cd nh-masters-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Supported Languages

- English (🇬🇧)
- Bosanski (🇧🇦)
- Hrvatski (🇭🇷)
- Srpski (🇷🇸)
- Deutsch (🇩🇪)
- Türkçe (🇹🇷)
- العربية (🇸🇦)
- Français (🇫🇷)
- Italiano (🇮🇹)
- Español (🇪🇸)
- Русский (🇷🇺)
- Português (🇵🇹)
- 中文 (🇨🇳)

## 📧 Email Integration (Optional)

To enable email functionality, set these environment variables:

```
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_email@domain.com
```

## 🤖 WhatsApp AI Handler (Optional)

For WhatsApp automation, configure:

```
WA_TOKEN=your_whatsapp_token
WA_PHONE_ID=your_phone_id
```

## 📁 Project Structure

```
nh-masters-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page sections
│   ├── language/         # Language selector
│   └── ui/               # UI components
├── lib/                   # Utilities
│   └── i18n/            # Internationalization
├── public/               # Static assets
├── styles/              # Global styles
└── package.json         # Dependencies
```

## 🚀 Deployment

### Deploy on Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Click Deploy!

The site will automatically redeploy whenever you push to the main branch.

## 📝 Building for Production

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

**Issue:** Language selector not showing
- Clear localStorage and refresh the page

**Issue:** Contact form not sending emails
- Ensure `RESEND_API_KEY` is configured

**Issue:** Build fails on Netlify
- Check environment variables in Netlify settings
- Verify Node.js version is 18+

## 📞 Contact

- **Email:** nhmaster.bih@gmail.com
- **Phone:** +387 62 588 821
- **WhatsApp:** +387 62 588 821

## 📄 License

This project is proprietary and confidential to NH Master d.o.o.

## 👥 Author

Developed by Copilot AI for NH Master d.o.o.

---

**Website:** [https://nh-masters-website.netlify.app](https://nh-masters-website.netlify.app)

**Built with ❤️ for NH Master**
