# AlphaInfuse Product Page

A restructured and optimized version of the AlphaInfuse product page, ready for deployment on Vercel.

## 📁 Project Structure

```
alphainfuse/
├── public/                      # Static assets (Vercel-ready)
│   ├── index.html              # Main HTML file (cleaned & optimized)
│   ├── styles/
│   │   └── main.css            # Extracted CSS (64 style blocks)
│   └── scripts/
│       └── main.js             # Extracted JavaScript (76 script blocks)
├── alphainfuse.com/            # Original files (backup)
├── www.drinkhydrant.com/       # Additional assets
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

## 🚀 Deployment

Deploy the static HTML directly to Vercel:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git:**
   ```bash
   git add .
   git commit -m "Deploy static HTML site"
   git push
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will automatically detect the static site
   - Click "Deploy"
   - Done! Your site will be live in ~30 seconds

### Option 2: Deploy via CLI

```bash
npx vercel --prod
```

### Local Testing

```bash
npx serve public
```
Visit http://localhost:3000

## 📋 What Was Done

### ✅ Completed Tasks

1. **Created Organized Directory Structure**
   - `public/` for static assets
   - `app/` for Next.js components
   - Proper separation of concerns

2. **Extracted Inline CSS**
   - 64 style blocks extracted
   - Combined into `public/styles/main.css`
   - ~10,000+ lines of styles organized

3. **Extracted Inline JavaScript**
   - 76 script blocks extracted
   - Combined into `public/scripts/main.js`
   - Shopify, analytics, and custom scripts preserved

4. **Created Clean HTML**
   - Removed inline styles and scripts
   - Added external references
   - Renamed to `index.html` for Vercel

5. **Configured Vercel**
   - Created `vercel.json` with routing rules
   - Set up caching headers for performance
   - Optimized for static deployment

6. **Configured for Static Deployment**
   - Pure HTML/CSS/JS
   - No build process required
   - Instant deployment

## 🔧 Configuration Files

### vercel.json
- Enables static file serving
- Optimizes caching for CSS/JS
- Sets proper headers for performance

## 📝 Notes

### External Dependencies
The page relies on several external services:
- Shopify CDN for fonts and assets
- Google Tag Manager (GTM)
- Google Analytics
- Meta Pixel
- TikTok Pixel
- Intelligems
- Various Shopify apps

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox

### Performance Optimizations
- All CSS combined into single file
- All JS combined into single file
- Proper caching headers
- Async script loading

## 🐛 Troubleshooting

### Issue: Scripts not working
- **Solution:** Ensure scripts are loaded with `defer` attribute
- Check browser console for errors

### Issue: Styles not loading
- **Solution:** Verify the path to `main.css` is correct
- Clear browser cache

### Issue: Shopify features not working
- **Solution:** Some Shopify-specific features may not work outside their platform
- Consider using Shopify's headless commerce API

## 📦 Original Files

The original HTML file is preserved in:
- `alphainfuse.com/products/alphainfuse™-hair-google.html`

## 🔗 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Shopify Headless](https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api)

## 📄 License

Copyright © AlphaInfuse. All rights reserved.

