# Spiral Lab Website - Deployment Guide

## Pre-Deployment Checklist

### Code Quality
- ✅ All TypeScript errors resolved
- ✅ ESLint passes with no errors
- ✅ All components have proper TypeScript types
- ✅ No console.log statements in production code

### Performance
- ✅ Static site generation (SSG) enabled
- ✅ Images optimized with Next.js Image component
- ✅ Fonts optimized with next/font (Google Fonts)
- ✅ CSS optimized with Tailwind CSS
- ✅ Bundle size optimized (151 kB First Load JS)

### Accessibility
- ✅ Keyboard navigation works throughout
- ✅ ARIA labels on interactive elements
- ✅ Skip to content link implemented
- ✅ Focus visible indicators
- ✅ Reduced motion support

### SEO
- ✅ Meta tags configured in layout.tsx
- ✅ Open Graph tags present
- ✅ Twitter Card tags present
- ✅ robots.txt configured
- ✅ sitemap.xml generated
- ✅ Manifest.json for PWA support

### Content
- ✅ Contact information correct
- ✅ Social media links configured
- ✅ Service offerings detailed
- ✅ Case studies included

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest and fastest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete implementation of Spiral Lab website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Example: `NEXT_PUBLIC_SITE_URL=https://spirallab.co`

5. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - You'll get a `.vercel.app` domain automatically

6. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., spirallab.co)
   - Follow DNS configuration instructions
   - SSL certificate is automatically provisioned

### Option 2: Netlify

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: (leave empty)

4. **Deploy Settings**
   - Framework: Next.js (auto-detected)
   - Node version: 18.17 or later

5. **Custom Domain**
   - Go to Domain settings
   - Add your custom domain
   - Configure DNS as instructed

### Option 3: Self-Hosted (Docker)

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base

   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t spirallab-site .
   docker run -p 3000:3000 spirallab-site
   ```

3. **Use Docker Compose** (recommended)
   ```yaml
   version: '3.8'
   services:
     web:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
       restart: unless-stopped
   ```

### Option 4: AWS Amplify

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Create Amplify App**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

3. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy**
   - Click "Save and deploy"
   - Your site will be live with a `.amplifyapp.com` domain

## Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify animations work smoothly
- [ ] Test contact links (email, phone)
- [ ] Verify social media links

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (if needed)
- [ ] Configure Open Graph image

### 3. Performance Monitoring
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals in Search Console
- [ ] Monitor page load times
- [ ] Set up error tracking (e.g., Sentry)

### 4. Domain Configuration
- [ ] Configure DNS A/CNAME records
- [ ] Verify SSL certificate is active
- [ ] Test www → non-www redirect (or vice versa)
- [ ] Configure email forwarding if needed

### 5. Content Updates
- [ ] Update contact information if needed
- [ ] Add real case study links
- [ ] Replace placeholder content
- [ ] Add actual company logo/favicon

## Environment Variables

### Required Variables
None required for basic deployment.

### Optional Variables
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://spirallab.co
NEXT_PUBLIC_SITE_NAME="Spiral Lab"

# Analytics (if using)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form (if implementing)
CONTACT_FORM_WEBHOOK=https://your-webhook-url
```

## Performance Targets

After deployment, verify these metrics using Lighthouse:

- **Performance:** > 90
- **Accessibility:** > 95
- **Best Practices:** > 95
- **SEO:** > 95

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## Monitoring & Maintenance

### Weekly
- Check for broken links
- Monitor Core Web Vitals
- Review error logs

### Monthly
- Update dependencies
- Review analytics
- Backup site content

### Quarterly
- Content updates
- Performance optimization
- Security audit

## Rollback Procedure

If deployment issues occur:

### Vercel
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Netlify
1. Go to Deploys tab
2. Find previous successful deploy
3. Click "Publish deploy"

### Self-Hosted
```bash
# Revert to previous Docker image
docker pull spirallab-site:previous
docker stop spirallab-site
docker run -d --name spirallab-site spirallab-site:previous
```

## Support & Troubleshooting

### Build Failures
1. Check Node.js version (must be 18.17+)
2. Clear node_modules and package-lock.json
3. Run `npm install` again
4. Check for TypeScript errors: `npm run build`

### Runtime Errors
1. Check browser console for errors
2. Verify all environment variables are set
3. Check server logs in deployment platform
4. Test locally: `npm run build && npm start`

### Performance Issues
1. Run Lighthouse audit
2. Check image optimization
3. Review bundle size
4. Enable caching headers
5. Use CDN for static assets

## Contact

For deployment support:
- **Email:** jawwad@spirallab.co
- **Phone:** +92-304-548-0586

---

**Deployed with ❤️ by Spiral Lab**
