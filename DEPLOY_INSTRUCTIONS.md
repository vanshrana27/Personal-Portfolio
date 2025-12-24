# Quick Deployment Instructions

## Step 1: Push to GitHub

1. Create a new repository on GitHub (don't initialize with README)

2. Run these commands:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (use GitHub to connect)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Your portfolio will be live! 🎉

## Your Live URL

After deployment, Vercel will give you a URL like:
- `https://your-project-name.vercel.app`

You can also add a custom domain later in Project Settings.

## Alternative: Netlify

If you prefer Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

**Need help?** Check the full `DEPLOYMENT.md` file for more details.

