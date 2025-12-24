# Deployment Guide

This portfolio can be deployed to various platforms. Here are the easiest options:

## Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your custom domain

## Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" > "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts** to add base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Option 4: Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Pages > Create a project
4. Connect GitHub repository
5. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

## Quick Deploy Commands

After setting up git and pushing to GitHub, you can also use:

**Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

**Recommended:** Use Vercel for the easiest and fastest deployment experience!

