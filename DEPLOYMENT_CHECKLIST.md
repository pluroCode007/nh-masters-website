# ✅ NH MASTER DEPLOYMENT CHECKLIST

## WHAT'S BEEN DONE FOR YOU ✓

- ✅ `.gitignore` - Configured to exclude node_modules and build files
- ✅ `README.md` - Professional documentation created
- ✅ `netlify.toml` - Netlify configuration file ready
- ✅ `SETUP.bat` - Batch script to initialize git

## WHAT YOU NEED TO DO

### Step 1: Run the Setup Script (2 minutes)

```
1. Navigate to: c:\Users\frees\OneDrive\Desktop\nh-masters-website
2. Double-click: SETUP.bat
3. Wait for it to complete
4. Note: This initializes git locally
```

### Step 2: Create GitHub Repository (3 minutes)

```
1. Go to: https://github.com/new
2. Fill in:
   - Repository name: nh-masters-website
   - Description: Premium Masterbatch & Polymer Compounds Website
   - Visibility: Public (recommended for portfolio)
3. DO NOT check "Initialize with README"
4. Click "Create Repository"
5. COPY the HTTPS URL shown (https://github.com/YOUR_USERNAME/nh-masters-website.git)
```

### Step 3: Push to GitHub (2 minutes)

Open Command Prompt and run:

```bash
cd c:\Users\frees\OneDrive\Desktop\nh-masters-website

# Replace YOUR_USERNAME_HERE with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME_HERE/nh-masters-website.git
git branch -M main
git push -u origin main
```

**First time?** GitHub will ask for authentication:
- Use your GitHub username
- Use a Personal Access Token as password (create at github.com/settings/tokens if needed)

### Step 4: Connect to Netlify (3 minutes)

```
1. Go to: https://netlify.com
2. Sign up (free with GitHub account recommended)
3. Click: "Add new site" → "Import an existing project"
4. Select: GitHub as provider
5. Authorize Netlify
6. Select: nh-masters-website repository
7. Build settings (should auto-fill):
   - Build command: npm run build
   - Publish directory: .next
8. Click: "Deploy"
9. Wait 2-3 minutes for build to complete
10. Your live URL appears!
```

### Step 5: (Optional) Add Custom Domain

```
1. In Netlify: Site settings → Domain management
2. Add custom domain or connect existing one
3. Update DNS settings at your registrar
```

---

## ⏱️ TOTAL TIME: ~10 MINUTES

1. Run SETUP.bat (2 min)
2. Create GitHub repo (3 min)
3. Push to GitHub (2 min)
4. Deploy to Netlify (3 min)

---

## 🔗 YOUR FINAL URLs

After completing all steps:

**GitHub:**
- https://github.com/YOUR_USERNAME/nh-masters-website

**Live Website:**
- https://nh-masters-website.netlify.app (or custom domain)

---

## 🆘 QUICK TROUBLESHOOTING

**GitHub authentication fails?**
- Create personal access token: https://github.com/settings/tokens
- Use token instead of password

**Netlify build fails?**
- Check build logs in Netlify dashboard
- Usually missing environment variables
- Verify Node.js 18+ is selected

**Can't see language selector?**
- Clear browser cache
- Hard refresh (Ctrl + Shift + R)

**Contact form not sending emails?**
- Add RESEND_API_KEY to Netlify environment variables
- Sign up at https://resend.com for free API key

---

## 📋 FILES INCLUDED

```
nh-masters-website/
├── .gitignore          ← Tells git what to ignore
├── README.md           ← GitHub documentation
├── netlify.toml        ← Netlify configuration
├── SETUP.bat           ← Initialization script
└── [all source files]
```

---

## ✨ READY TO LAUNCH

Your website is production-ready! Just follow the 5 steps above and you'll have a live website on the internet within 10 minutes! 🚀

---

**Need help?** Run the steps one by one and let me know if you hit any issues!
