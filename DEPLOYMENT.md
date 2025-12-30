# 🚀 Vercel Deployment Guide

## Quick Start (2 Minutes)

### Option 1: Deploy Static HTML (Fastest)

This is the simplest way to get your site live on Vercel.

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from the project root**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login to Vercel (or create account)
   - Confirm project settings
   - Wait for deployment (usually < 1 minute)

4. **Done!** 🎉
   Your site will be live at: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub/GitLab/Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Restructured for Vercel"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Go to [vercel.com/new](https://vercel.com/new)**

3. **Import your repository**

4. **Configure (already done!)**:
   - Framework Preset: Next.js (or Other if using static)
   - Root Directory: `./`
   - Build Command: `npm run build` (or leave empty for static)
   - Output Directory: `public` (for static) or `out` (for Next.js)

5. **Click "Deploy"**

6. **Done!** 🎉

## Testing Locally

### Static HTML Version
```bash
# Serve the public folder
npx serve public

# Visit: http://localhost:3000
```

### Next.js Version
```bash
# Install dependencies (first time only)
npm install

# Run development server
npm run dev

# Visit: http://localhost:3000
```

## What Gets Deployed

### Static HTML Deployment:
```
/public
  ├── index.html      (Main page)
  ├── styles/
  │   └── main.css    (115 KB - All styles)
  └── scripts/
      └── main.js     (458 KB - All scripts)
```

### Next.js Deployment:
```
/out
  ├── index.html      (Generated from Next.js)
  ├── _next/          (Next.js assets)
  └── static assets from /public
```

## Environment Variables (Optional)

If you need to set environment variables:

1. **Via Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add your variables

2. **Via CLI**:
   ```bash
   vercel env add VARIABLE_NAME
   ```

3. **Create `.env.local`** (for local development):
   ```env
   NEXT_PUBLIC_API_KEY=your_key_here
   ```

## Custom Domain

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains

2. **Add your domain**:
   - Type: `yourdomain.com`
   - Click "Add"

3. **Update DNS records** (provided by Vercel)

4. **Wait for SSL certificate** (automatic, ~1 minute)

## Performance Tips

The project is already optimized with:
- ✅ Separated CSS (115 KB)
- ✅ Separated JavaScript (458 KB)
- ✅ Caching headers configured
- ✅ Static asset optimization

### Additional Optimizations:
1. **Enable Vercel Analytics**:
   ```bash
   npm install @vercel/analytics
   ```

2. **Enable Speed Insights**:
   ```bash
   npm install @vercel/speed-insights
   ```

## Troubleshooting

### Issue: "Build failed"
**Solution**: 
```bash
# Try building locally first
npm run build

# If it works locally, check Vercel build logs
```

### Issue: "404 Not Found"
**Solution**:
- Verify `public/index.html` exists
- Check `vercel.json` routing configuration

### Issue: "Styles/Scripts not loading"
**Solution**:
- Check browser console for errors
- Verify paths in `index.html` are correct:
  - `/styles/main.css`
  - `/scripts/main.js`

### Issue: "Shopify features not working"
**Solution**:
- This is expected - some Shopify features require their platform
- Consider implementing Shopify Storefront API for full functionality

## Deployment Checklist

Before deploying:
- [ ] Test locally with `npx serve public`
- [ ] Check browser console for errors
- [ ] Verify all images load correctly
- [ ] Test on mobile device/browser
- [ ] Check external dependencies (fonts, CDN assets)
- [ ] Update meta tags (title, description, OG images)
- [ ] Test purchase flow (if applicable)

## Monitoring

After deployment:
1. **Check Vercel Analytics** for visitor stats
2. **Monitor Vercel Logs** for errors
3. **Set up Vercel notifications** for deployment status

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Next.js Documentation](https://nextjs.org/docs)

---

**🎉 Ready to Deploy!**

Run `vercel` in your terminal and your site will be live in minutes!

