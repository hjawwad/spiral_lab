# Spiral Lab - AI Solutions Website

A modern, production-ready website for Spiral Lab built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, premium design with smooth animations
- 🎨 Custom cursor with interactive feedback
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG AA accessibility compliant
- 🚀 Optimized performance (Core Web Vitals)
- 🎭 Motion animations with scroll-triggered reveals
- 🎯 SEO optimized with proper meta tags
- 🌐 Static site generation for fast loading

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Motion (formerly Framer Motion)
- **Fonts:** Inter (UI/Display), JetBrains Mono (Code)
- **Deployment:** Vercel-ready

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── fonts.ts           # Font configuration
│   ├── globals.css        # Global styles & utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── cards/            # Card components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components
│   └── performance/      # Performance utilities
├── data/                  # Content data
│   ├── services.ts       # Service offerings
│   ├── case-studies.ts   # Case study data
│   └── contact.ts        # Contact information
├── hooks/                 # Custom React hooks
│   └── useInView.ts      # Intersection Observer hook
├── lib/                   # Utility functions
│   ├── animations.ts     # Motion animation variants
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript type definitions
    └── index.ts          # Shared types
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Customization

### Updating Content

All content is stored in the `/data` directory:

- **Services:** Edit `data/services.ts`
- **Case Studies:** Edit `data/case-studies.ts`
- **Contact Info:** Edit `data/contact.ts`

### Customizing Colors

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  'deep-teal': '#2B5F6F',
  'electric-lime': '#7FD944',
  'rich-black': '#0A0E12',
  // ... more colors
}
```

### Modifying Animations

Animation variants are in `lib/animations.ts`. Adjust timing, easing, and effects as needed.

## Performance

The site is optimized for performance:

- Static site generation (SSG)
- Image optimization with Next.js Image
- Font optimization with next/font
- CSS optimization with Tailwind CSS
- Animation performance (GPU-accelerated)

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- ARIA labels and semantic HTML
- Focus visible indicators
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure deployment
4. Your site will be live!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## Environment Variables

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Spiral Lab"
```

## License

© 2024 Spiral Lab. All rights reserved.

## Contact

- **Email:** jawwad@spirallab.co
- **Phone:** +92-304-548-0586
- **Location:** Lahore, Punjab, Pakistan

---

Built with ❤️ by Spiral Lab
