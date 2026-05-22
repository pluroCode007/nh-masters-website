@echo off
REM NH Master Website - GitHub & Netlify Setup for pluroCode007

echo ============================================
echo NH Master Website Deployment Setup
echo GitHub: pluroCode007
echo ============================================
echo.

cd /d c:\Users\frees\OneDrive\Desktop\nh-masters-website

echo Step 1: Initializing Git Repository...
git init
git config user.name "pluroCode007"
git config user.email "nhmaster.bih@gmail.com"
echo ✓ Git initialized for pluroCode007
echo.

echo Step 2: Adding all files...
git add .
echo ✓ Files staged
echo.

echo Step 3: Creating initial commit...
git commit -m "Initial commit: NH Master website - production ready"
echo ✓ Commit created
echo.

echo ============================================
echo NEXT STEPS FOR GITHUB DEPLOYMENT
echo ============================================
echo.
echo 1. Go to GitHub (logged in as pluroCode007):
echo    https://github.com/new
echo.
echo 2. Create new repository:
echo    - Repository name: nh-masters-website
echo    - Description: Premium Masterbatch & Polymer Compounds
echo    - Visibility: Public
echo    - Click "Create Repository"
echo.
echo 3. Copy the HTTPS URL shown
echo.
echo 4. Run these commands (the URL will be shown on GitHub):
echo.
echo    git remote add origin https://github.com/pluroCode007/nh-masters-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo ============================================
echo NETLIFY DEPLOYMENT
echo ============================================
echo.
echo 1. Go to: https://netlify.com
echo 2. Sign up/Login
echo 3. Click: "Add new site" → "Import from Git"
echo 4. Select GitHub (authorize if needed)
echo 5. Find and select: nh-masters-website
echo 6. Build Settings:
echo    - Build command: npm run build
echo    - Publish directory: .next
echo 7. Click "Deploy"
echo 8. Your site goes live in 2-3 minutes!
echo.
echo ============================================
echo Setup Complete! ✓
echo ============================================
echo.
echo Your GitHub: https://github.com/pluroCode007/nh-masters-website
echo Your Site will be: https://nh-masters-website.netlify.app
echo.
pause
