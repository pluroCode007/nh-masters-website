@echo off
REM NH Master Website - GitHub & Netlify Setup Script

echo ============================================
echo NH Master Website Deployment Setup
echo ============================================
echo.

cd /d c:\Users\frees\OneDrive\Desktop\nh-masters-website

echo Step 1: Initializing Git Repository...
git init
git config user.name "NH Master"
git config user.email "nhmaster.bih@gmail.com"
echo ✓ Git initialized
echo.

echo Step 2: Adding all files...
git add .
echo ✓ Files staged
echo.

echo Step 3: Creating initial commit...
git commit -m "Initial commit: NH Master website with language selector, dark mode, contact form, and WhatsApp AI integration"
echo ✓ Commit created
echo.

echo ============================================
echo NEXT STEPS - YOU MUST DO THESE MANUALLY:
echo ============================================
echo.
echo 1. CREATE A GITHUB REPOSITORY:
echo    - Go to https://github.com/new
echo    - Repository name: nh-masters-website
echo    - Click "Create Repository"
echo    - Copy the HTTPS URL
echo.
echo 2. CONNECT TO GITHUB (replace URL with yours):
echo    git remote add origin https://github.com/YOUR_USERNAME/nh-masters-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. DEPLOY TO NETLIFY:
echo    - Go to https://netlify.com
echo    - Sign up (free)
echo    - Click "Add new site" → "Import from Git"
echo    - Select GitHub and your repository
echo    - Build command: npm run build
echo    - Publish directory: .next
echo    - Click "Deploy"
echo.
echo 4. CONFIGURE ENVIRONMENT VARIABLES (optional):
echo    In Netlify Settings → Build & Deploy → Environment:
echo    - RESEND_API_KEY=your_key (for email)
echo    - WA_TOKEN=your_token (for WhatsApp)
echo.
echo ============================================
echo Setup Complete! ✓
echo ============================================
echo.
pause
