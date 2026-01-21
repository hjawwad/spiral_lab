# Quick Start Guide - Spiral Lab Website

## 🚀 Get Started in 60 Seconds

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

That's it! The site is now running locally.

## 📝 Making Changes

### Update Content

**Services** - Edit `data/services.ts`:
```typescript
{
  id: 'your-service',
  number: '01',
  title: 'Service Name',
  description: 'Description...',
  // ... more fields
}
```

**Case Studies** - Edit `data/case-studies.ts`:
```typescript
{
  id: 'your-case-study',
  number: '01',
  title: 'Case Study Name',
  // ... more fields
}
```

**Contact Info** - Edit `data/contact.ts`:
```typescript
export const contactInfo: ContactInfo = {
  email: 'your@email.com',
  phone: '+1-234-567-8900',
  location: 'Your Location',
  // ... social links
}
```

### Customize Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'deep-teal': '#2B5F6F',      // Primary color
  'electric-lime': '#7FD944',  // Accent color
  // ... more colors
}
```

### Modify Animations

Edit `lib/animations.ts` to adjust timing, easing, and effects.

## 🏗️ Build for Production

```bash
# Build
npm run build

# Test production build locally
npm start
```

## 🚢 Deploy to Vercel

### One-Click Deploy

1. Push to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Custom Domain

1. In Vercel project settings → Domains
2. Add your domain (e.g., spirallab.co)
3. Update DNS records as instructed
4. SSL certificate auto-provisioned

## 📦 Project Structure

```
├── app/              # Next.js App Router
├── components/       # React components
│   ├── cards/       # Card components
│   ├── sections/    # Page sections
│   ├── ui/          # UI components
│   └── performance/ # Performance utils
├── data/            # Content data (EDIT HERE!)
├── lib/             # Utilities
├── hooks/           # React hooks
└── types/           # TypeScript types
```

## 🎨 Design Tokens

**Colors:**
- Deep Teal: `#2B5F6F` (primary)
- Electric Lime: `#7FD944` (accent)
- Rich Black: `#0A0E12` (backgrounds)

**Fonts:**
- Display/UI: Inter
- Mono: JetBrains Mono

**Animations:**
- Duration: 400-600ms
- Easing: ease-out
- Respects reduced motion preferences

## ⚡ Performance

Current metrics:
- First Load JS: 151 kB
- Build time: ~5s
- Static pages: ✓ All optimized

## 🐛 Troubleshooting

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

**Port 3000 in use?**
```bash
# Use different port
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
# Check types
npx tsc --noEmit
```

## 📚 Documentation

- [README-NEW.md](README-NEW.md) - Full documentation
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deployment instructions
- [IMPLEMENTATION_COMPLETE.md](IMPLEMENTATION_COMPLETE.md) - Implementation details

## 🆘 Need Help?

**Email:** jawwad@spirallab.co
**Phone:** +92-304-548-0586

---

Happy coding! 🎉
