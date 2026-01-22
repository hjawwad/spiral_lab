# Spiral Lab Website - Complete Implementation Plan

## Table of Contents
1. [Project Setup & Configuration](#1-project-setup--configuration)
2. [Core Infrastructure](#2-core-infrastructure)
3. [Design System & Utilities](#3-design-system--utilities)
4. [Visual Effects & Animations](#4-visual-effects--animations)
5. [Hero Section Implementation](#5-hero-section-implementation)
6. [Services Section Implementation](#6-services-section-implementation)
7. [Case Studies Section Implementation](#7-case-studies-section-implementation)
8. [Contact Section Implementation](#8-contact-section-implementation)
9. [Responsive Design & Mobile Optimization](#9-responsive-design--mobile-optimization)
10. [Accessibility Implementation](#10-accessibility-implementation)
11. [Performance Optimization](#11-performance-optimization)
12. [Testing & Quality Assurance](#12-testing--quality-assurance)
13. [Deployment & Launch](#13-deployment--launch)

---

## 1. Project Setup & Configuration

### 1.1 Initialize Next.js 15 Project with TypeScript

```bash
npx create-next-app@latest spiralab-site --typescript --tailwind --app --no-src-dir
cd spiralab-site
```

**Configuration choices:**
- ✓ TypeScript
- ✓ ESLint
- ✓ Tailwind CSS
- ✓ App Router
- ✗ src/ directory (use root-level app/)
- ✓ Import alias (@/*)

### 1.2 Install Core Dependencies

```bash
npm install motion clsx tailwind-merge
npm install -D @types/node @types/react @types/react-dom
```

**Dependencies breakdown:**
- `motion` - Animation library (formerly framer-motion)
- `clsx` - Conditional className utility
- `tailwind-merge` - Merge Tailwind classes intelligently

### 1.3 Configure Tailwind CSS

**File: `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#2B5F6F',
        'electric-lime': '#7FD944',
        'rich-black': '#0A0E12',
        'slate-dark': '#1E2530',
        'graphite': '#8B95A5',
        'platinum': '#F8F9FA',
        'zinc-dark': '#3A4556',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        ui: ['var(--font-ui)'],
        mono: ['var(--font-mono)'],
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out forwards',
        'slide-up': 'slideUp 600ms ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### 1.4 Set Up Font Loading

**File: `app/fonts.ts`**

```typescript
import localFont from 'next/font/local'

// Display font - Söhne or ABC Whyte alternative
export const displayFont = localFont({
  src: [
    {
      path: '../public/fonts/Sohne-Kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Sohne-Halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
})

// UI font - Untitled Sans or Suisse Int'l alternative
export const uiFont = localFont({
  src: [
    {
      path: '../public/fonts/UntitledSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/UntitledSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-ui',
  display: 'swap',
})

// Data font - Commit Mono or Berkeley Mono alternative
export const monoFont = localFont({
  src: '../public/fonts/CommitMono.woff2',
  variable: '--font-mono',
  display: 'swap',
})
```

**Note:** You'll need to acquire and add these font files to `/public/fonts/`. Alternatives:
- Display: Inter Display, Manrope (free alternatives)
- UI: Inter, Public Sans (free alternatives)
- Mono: JetBrains Mono, Fira Code (free alternatives)

### 1.5 Root Layout Configuration

**File: `app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import { displayFont, uiFont, monoFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spiral Lab - AI Solutions & Machine Learning Services',
  description: 'We architect AI systems for organizations building the future. Autonomous agents, neural networks, and production-grade intelligence.',
  keywords: ['AI', 'Machine Learning', 'Autonomous Agents', 'AI Solutions', 'Spiral Lab'],
  authors: [{ name: 'Spiral Lab' }],
  openGraph: {
    title: 'Spiral Lab - AI Solutions & Machine Learning Services',
    description: 'We architect AI systems for organizations building the future.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${uiFont.variable} ${monoFont.variable}`}
    >
      <head>
        <link rel="preload" href="/fonts/UntitledSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Sohne-Kraftig.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${uiFont.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

### 1.6 Global CSS Configuration

**File: `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* CSS Variables for consistent theming */
  :root {
    --color-deep-teal: #2B5F6F;
    --color-electric-lime: #7FD944;
    --color-rich-black: #0A0E12;
    --color-slate: #1E2530;
    --color-graphite: #8B95A5;
    --color-platinum: #F8F9FA;
    --color-zinc: #3A4556;
  }

  /* Base HTML styles */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Custom scrollbar for desktop */
  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-rich-black);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-graphite);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-electric-lime);
    }
  }

  /* Focus visible styles for accessibility */
  *:focus-visible {
    outline: 2px solid var(--color-electric-lime);
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background-color: var(--color-electric-lime);
    color: var(--color-rich-black);
  }
}

@layer utilities {
  /* Text rendering utilities */
  .text-balance {
    text-wrap: balance;
  }

  .text-pretty {
    text-wrap: pretty;
  }

  /* Grain texture overlay */
  .grain-overlay {
    position: relative;
  }

  .grain-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 1;
  }

  /* Vignette effect */
  .vignette {
    position: relative;
  }

  .vignette::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.15) 100%);
    pointer-events: none;
    z-index: 2;
  }
}
```

---

## 2. Core Infrastructure

### 2.1 Create Utility Functions

**File: `lib/utils.ts`**

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes intelligently
 * Handles conflicts and conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format numbers with proper spacing and locale
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Stagger delay calculator for animations
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
```

### 2.2 Create TypeScript Types

**File: `types/index.ts`**

```typescript
export interface ServiceCard {
  id: string
  number: string
  title: string
  description: string
  capabilities: string[]
  metrics: {
    label: string
    value: string
    description: string
  }[]
  techStack: string[]
}

export interface CaseStudy {
  id: string
  number: string
  title: string
  description: string
  impact: {
    metric: string
    description: string
  }[]
  techStack: string[]
  link: string
}

export interface SocialLink {
  platform: string
  url: string
  ariaLabel: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socialLinks: SocialLink[]
}
```

### 2.3 Create Content Data Files

**File: `data/services.ts`**

```typescript
import { ServiceCard } from '@/types'

export const services: ServiceCard[] = [
  {
    id: 'autonomous-agents',
    number: '01',
    title: 'Autonomous Agent Systems',
    description: 'Self-directed AI that reasons, adapts, and executes complex multi-step workflows.',
    capabilities: [
      'Multi-agent orchestration & coordination',
      'Reinforcement learning from human feedback',
      'Memory persistence & contextual reasoning',
      'Tool use & external API integration',
      'Real-time decision making at scale',
    ],
    metrics: [
      {
        label: '94.7%',
        value: '94.7%',
        description: 'Accuracy in production environments',
      },
      {
        label: '<200ms',
        value: '<200ms',
        description: 'Average response latency',
      },
      {
        label: '99.97%',
        value: '99.97%',
        description: 'System uptime (last 12 months)',
      },
      {
        label: '10K+',
        value: '10K+',
        description: 'Concurrent agent instances supported',
      },
    ],
    techStack: [
      'LangChain',
      'LlamaIndex',
      'Anthropic Claude',
      'OpenAI GPT-4',
      'Vector Databases',
      'Redis',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'AWS/GCP',
    ],
  },
  {
    id: 'conversational-intelligence',
    number: '02',
    title: 'Conversational Intelligence',
    description: 'Natural language systems with contextual understanding and enterprise-grade accuracy.',
    capabilities: [
      'Multi-turn dialogue management',
      'Intent recognition & entity extraction',
      'Context-aware response generation',
      'Sentiment analysis & tone adaptation',
      'Multi-language support',
    ],
    metrics: [
      {
        label: '96.2%',
        value: '96.2%',
        description: 'Intent classification accuracy',
      },
      {
        label: '<150ms',
        value: '<150ms',
        description: 'Response generation time',
      },
      {
        label: '98.5%',
        value: '98.5%',
        description: 'Customer satisfaction rate',
      },
      {
        label: '50K+',
        value: '50K+',
        description: 'Daily conversations handled',
      },
    ],
    techStack: [
      'Transformers',
      'BERT',
      'GPT-4',
      'Rasa',
      'DialogFlow',
      'Elasticsearch',
      'PostgreSQL',
      'GraphQL',
      'Node.js',
      'React',
    ],
  },
  {
    id: 'machine-learning',
    number: '03',
    title: 'Machine Learning & Predictive AI',
    description: 'Models that forecast trends, optimize operations, and drive data-informed decisions.',
    capabilities: [
      'Time series forecasting & prediction',
      'Anomaly detection & outlier analysis',
      'Classification & regression models',
      'Recommendation systems',
      'A/B testing & experimentation',
    ],
    metrics: [
      {
        label: '92.4%',
        value: '92.4%',
        description: 'Prediction accuracy',
      },
      {
        label: '2.3x',
        value: '2.3x',
        description: 'Average ROI improvement',
      },
      {
        label: '40%',
        value: '40%',
        description: 'Operational cost reduction',
      },
      {
        label: '1M+',
        value: '1M+',
        description: 'Predictions per day',
      },
    ],
    techStack: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'Prophet',
      'MLflow',
      'Apache Spark',
      'AWS SageMaker',
      'Python',
      'FastAPI',
    ],
  },
  {
    id: 'custom-solutions',
    number: '04',
    title: 'Custom AI Solutions',
    description: 'Bespoke intelligence tailored to your unique business challenges and objectives.',
    capabilities: [
      'Custom model architecture design',
      'Domain-specific fine-tuning',
      'Proprietary dataset curation',
      'Hybrid AI/rules-based systems',
      'White-label AI product development',
    ],
    metrics: [
      {
        label: '100%',
        value: '100%',
        description: 'Requirements alignment',
      },
      {
        label: '6-12wk',
        value: '6-12wk',
        description: 'Average delivery timeline',
      },
      {
        label: '95%+',
        value: '95%+',
        description: 'Client satisfaction score',
      },
      {
        label: '24/7',
        value: '24/7',
        description: 'Post-launch support',
      },
    ],
    techStack: [
      'Custom',
      'Your Stack',
      'Our Expertise',
      'Flexible',
      'Scalable',
      'Secure',
      'Monitored',
      'Documented',
      'Tested',
      'Deployed',
    ],
  },
]
```

**File: `data/case-studies.ts`**

```typescript
import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-customer-support',
    number: '01',
    title: 'AI Customer Support System',
    description: 'E-commerce chatbot handling 1,200 daily conversations with 94% resolution rate',
    impact: [
      {
        metric: '87%',
        description: 'Reduction in support tickets',
      },
      {
        metric: '24/7',
        description: 'Availability',
      },
      {
        metric: '4.7/5',
        description: 'Customer satisfaction',
      },
    ],
    techStack: ['GPT-4', 'LangChain', 'Vector DB', 'Next.js', 'PostgreSQL', 'Redis'],
    link: '/case-studies/ai-customer-support',
  },
  {
    id: 'predictive-analytics',
    number: '02',
    title: 'Predictive Analytics Engine',
    description: 'ML system forecasting sales trends for retail chain with 92% accuracy',
    impact: [
      {
        metric: '2.3x ROI',
        description: 'In first quarter',
      },
      {
        metric: '40%',
        description: 'Inventory optimization',
      },
      {
        metric: '$1.2M',
        description: 'Cost savings',
      },
    ],
    techStack: ['PyTorch', 'Scikit-learn', 'AWS', 'FastAPI', 'Apache Spark', 'Tableau'],
    link: '/case-studies/predictive-analytics',
  },
  {
    id: 'nlp-document-processor',
    number: '03',
    title: 'NLP Document Processor',
    description: 'Automated document analysis processing 10,000+ legal docs per hour',
    impact: [
      {
        metric: '95%',
        description: 'Time savings',
      },
      {
        metric: '98.5%',
        description: 'Accuracy in classification',
      },
      {
        metric: 'Real-time',
        description: 'Processing',
      },
    ],
    techStack: ['BERT', 'spaCy', 'Elasticsearch', 'Python', 'Docker', 'Kubernetes'],
    link: '/case-studies/nlp-document-processor',
  },
]
```

**File: `data/contact.ts`**

```typescript
import { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  email: 'jawwad@spirallab.co',
  phone: '+92-304-548-0586',
  location: 'Lahore, Punjab, Pakistan',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/spirallab',
      ariaLabel: 'Visit Spiral Lab on LinkedIn',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/spirallab',
      ariaLabel: 'Follow Spiral Lab on Twitter',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/spirallab',
      ariaLabel: 'View Spiral Lab on GitHub',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/spirallab',
      ariaLabel: 'Follow Spiral Lab on Instagram',
    },
  ],
}
```

---

## 3. Design System & Utilities

### 3.1 Create Custom Cursor Component

**File: `components/ui/CustomCursor.tsx`**

```typescript
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null

      setIsPointer(isInteractive)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  // Don't render on mobile/touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      document.body.style.cursor = 'auto'
    } else {
      document.body.style.cursor = 'none'
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-electric-lime rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      />

      {/* Trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-electric-lime/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </>
  )
}
```

### 3.2 Create SVG Grain Texture Generator

**File: `components/ui/GrainTexture.tsx`**

```typescript
export function GrainTexture() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </defs>
    </svg>
  )
}
```

### 3.3 Create Scroll Indicator Component

**File: `components/ui/ScrollIndicator.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'

export function ScrollIndicator() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToServices}
      className="flex flex-col items-center gap-2 text-graphite hover:text-electric-lime transition-colors duration-150"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-label="Scroll to services section"
    >
      <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
      <motion.svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M8 0L8 22M8 22L1 15M8 22L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  )
}
```

---

## 4. Visual Effects & Animations

### 4.1 Create Animation Variants

**File: `lib/animations.ts`**

```typescript
import { Variants } from 'motion/react'

/**
 * Page load sequence animations
 */
export const heroCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const buttonGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

/**
 * Scroll-triggered reveal animations
 */
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

/**
 * Card expansion animations
 */
export const cardExpandVariants: Variants = {
  collapsed: {
    height: 'auto',
  },
  expanded: {
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export const expandedContentVariants: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
  },
  expanded: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { delay: 0.2, duration: 0.3 },
      height: { duration: 0.4, ease: 'easeOut' },
    },
  },
}
```

### 4.2 Create Intersection Observer Hook

**File: `hooks/useInView.ts`**

```typescript
'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isInView }
}
```

---

## 5. Hero Section Implementation

### 5.1 Create Hero Section Component

**File: `components/sections/HeroSection.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'
import { heroCardVariants, buttonGroupVariants, buttonVariants } from '@/lib/animations'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center px-4 py-20 bg-deep-teal grain-overlay vignette overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center gap-2">
          <span className="text-electric-lime text-sm font-medium font-display tracking-wide">
            SPIRAL LAB
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric-lime" aria-hidden="true" />
          <span className="text-white/60 text-xs uppercase tracking-wider">Active</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.08)]"
          variants={heroCardVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-electric-lime text-base font-medium font-display mb-3">
              SPIRAL LAB
            </h1>
            <div className="w-10 h-0.5 bg-electric-lime mb-8" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2 className="text-white text-4xl md:text-5xl font-medium font-display mb-6 text-balance">
            We architect AI systems for organizations building the future.
          </h2>

          {/* Body */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 text-pretty">
            Autonomous agents. Neural networks. Production-grade intelligence.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={buttonGroupVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-electric-lime text-slate-dark text-base font-medium rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150"
              variants={buttonVariants}
            >
              Explore Capabilities
              <span className="ml-2" aria-hidden="true">→</span>
            </motion.a>

            <motion.a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-graphite text-base font-medium hover:text-white transition-colors duration-150 relative group"
              variants={buttonVariants}
            >
              View Case Studies
              <span
                className="absolute bottom-2 left-8 right-8 h-0.5 bg-electric-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150"
                aria-hidden="true"
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-graphite text-base font-medium hover:text-white transition-colors duration-150 relative group"
              variants={buttonVariants}
            >
              Discuss Your Project
              <span
                className="absolute bottom-2 left-8 right-8 h-0.5 bg-electric-lime scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-150"
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  )
}
```

---

## 6. Services Section Implementation

### 6.1 Create Service Card Component

**File: `components/cards/ServiceCard.tsx`**

```typescript
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ServiceCard as ServiceCardType } from '@/types'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: ServiceCardType
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={cn(
        'bg-white/5 border border-white/10 rounded-xl p-6 transition-colors duration-150',
        'hover:border-electric-lime/20'
      )}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-electric-lime font-mono text-sm">
              {service.number}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-medium font-display">
              {service.title}
            </h3>
          </div>
          <div className="w-15 h-px bg-electric-lime mb-4" aria-hidden="true" />
        </div>

        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-graphite hover:text-white transition-colors duration-150 text-sm"
            aria-label="Collapse details"
          >
            Collapse ↑
          </button>
        )}
      </div>

      {/* Description */}
      <p className="text-white/70 text-base leading-relaxed mb-6 text-pretty">
        {service.description}
      </p>

      {/* Expand/Collapse Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="text-graphite hover:text-electric-lime transition-colors duration-150 text-sm font-medium inline-flex items-center gap-1"
          aria-expanded={isExpanded}
        >
          Expand Details
          <span aria-hidden="true">→</span>
        </button>
      )}

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-8">
              {/* Capabilities */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Capabilities
                </h4>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, index) => (
                    <li
                      key={index}
                      className="text-white/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-electric-lime mt-1" aria-hidden="true">→</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Performance Metrics
                </h4>
                <dl className="space-y-3">
                  {service.metrics.map((metric, index) => (
                    <div key={index} className="flex items-baseline gap-4">
                      <dt className="text-white text-2xl font-semibold font-mono tabular-nums min-w-[100px]">
                        {metric.value}
                      </dt>
                      <dd className="text-white/60 text-sm">
                        {metric.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-4 border-b border-white/10 pb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-dark border border-zinc-dark rounded text-white/70 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-electric-lime text-electric-lime rounded-lg hover:bg-electric-lime hover:text-slate-dark transition-all duration-150 text-sm font-medium"
                >
                  Request Consultation
                </a>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-sm font-medium"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
```

### 6.2 Create Services Section Component

**File: `components/sections/ServicesSection.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { useInView } from '@/hooks/useInView'
import { staggerContainerVariants, scrollRevealVariants } from '@/lib/animations'

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen py-20 px-4 bg-deep-teal grain-overlay"
    >
      <div className="max-w-6xl mx-auto">
        {/* User "Message" */}
        <motion.div
          className="flex justify-end mb-12"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-electric-lime text-slate-dark px-6 py-3 rounded-2xl max-w-xs">
            <p className="text-base font-medium">Explore Capabilities</p>
          </div>
        </motion.div>

        {/* Spiral Lab Response */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="mb-6">
            <h2 className="text-electric-lime text-base font-medium font-display mb-3">
              SPIRAL LAB
            </h2>
            <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
          </div>

          <p className="text-white text-lg leading-relaxed text-pretty">
            We engineer AI infrastructure across four specialized domains:
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="space-y-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={scrollRevealVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 7. Case Studies Section Implementation

### 7.1 Create Case Study Card Component

**File: `components/cards/CaseStudyCard.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.article
      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-150"
      whileHover={{ borderColor: 'rgba(127, 217, 68, 0.2)' }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-electric-lime font-mono text-sm font-medium">
          [{caseStudy.number}]
        </span>
        <h3 className="text-white text-xl font-medium font-display flex-1">
          {caseStudy.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-white/70 text-base leading-relaxed mb-6 text-pretty">
        {caseStudy.description}
      </p>

      {/* Impact Metrics */}
      <div className="mb-6">
        <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">
          Impact:
        </h4>
        <ul className="space-y-2">
          {caseStudy.impact.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-electric-lime" aria-hidden="true">•</span>
              <span className="text-white/70">
                <strong className="text-white font-semibold tabular-nums">
                  {item.metric}
                </strong>{' '}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-white/40 text-xs uppercase tracking-wider font-medium mb-3">
          Stack:
        </h4>
        <p className="text-white/60 text-sm">
          {caseStudy.techStack.join(' • ')}
        </p>
      </div>

      {/* CTA */}
      <a
        href={caseStudy.link}
        className="inline-flex items-center gap-1 text-electric-lime hover:text-white transition-colors duration-150 text-sm font-medium group"
      >
        View Details
        <span
          className="group-hover:translate-x-1 transition-transform duration-150"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </motion.article>
  )
}
```

### 7.2 Create Case Studies Section Component

**File: `components/sections/CaseStudiesSection.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'
import { caseStudies } from '@/data/case-studies'
import { CaseStudyCard } from '@/components/cards/CaseStudyCard'
import { useInView } from '@/hooks/useInView'
import { staggerContainerVariants, scrollRevealVariants } from '@/lib/animations'

export function CaseStudiesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative min-h-screen py-20 px-4 bg-deep-teal grain-overlay"
    >
      <div className="max-w-6xl mx-auto">
        {/* User "Message" */}
        <motion.div
          className="flex justify-end mb-12"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-electric-lime text-slate-dark px-6 py-3 rounded-2xl max-w-xs">
            <p className="text-base font-medium">View Our Work</p>
          </div>
        </motion.div>

        {/* Spiral Lab Response */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="text-2xl" aria-hidden="true">🌀</span>
            <h2 className="text-electric-lime text-base font-medium font-display mt-2 mb-3">
              SPIRAL LAB
            </h2>
            <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
          </div>

          <p className="text-white text-lg leading-relaxed text-pretty">
            Here are some AI systems we've built:
          </p>
        </motion.div>

        {/* Case Study Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={scrollRevealVariants}>
              <CaseStudyCard caseStudy={study} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 8. Contact Section Implementation

### 8.1 Create Social Links Component

**File: `components/ui/SocialLinks.tsx`**

```typescript
import { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:border-electric-lime hover:text-electric-lime transition-all duration-150 text-sm font-medium min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          {link.platform}
        </a>
      ))}
    </div>
  )
}
```

### 8.2 Create Contact Section Component

**File: `components/sections/ContactSection.tsx`**

```typescript
'use client'

import { motion } from 'motion/react'
import { contactInfo } from '@/data/contact'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { useInView } from '@/hooks/useInView'

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen py-20 px-4 bg-deep-teal grain-overlay"
    >
      <div className="max-w-4xl mx-auto">
        {/* User "Message" */}
        <motion.div
          className="flex justify-end mb-12"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-electric-lime text-slate-dark px-6 py-3 rounded-2xl max-w-xs">
            <p className="text-base font-medium">Let's Talk</p>
          </div>
        </motion.div>

        {/* Spiral Lab Response */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="text-2xl" aria-hidden="true">🌀</span>
            <h2 className="text-electric-lime text-base font-medium font-display mt-2 mb-3">
              SPIRAL LAB
            </h2>
            <div className="w-10 h-0.5 bg-electric-lime mb-6" aria-hidden="true" />
          </div>

          <p className="text-white text-lg leading-relaxed mb-8 text-pretty">
            Great! We'd love to hear about your project.
          </p>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                Reach us at:
              </h3>
              <dl className="space-y-3">
                <div className="flex items-center gap-3">
                  <dt className="text-xl" aria-hidden="true">📧</dt>
                  <dd>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-electric-lime transition-colors duration-150"
                    >
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="text-xl" aria-hidden="true">📞</dt>
                  <dd>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-electric-lime transition-colors duration-150"
                    >
                      {contactInfo.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="text-xl" aria-hidden="true">📍</dt>
                  <dd className="text-white/70">{contactInfo.location}</dd>
                </div>
              </dl>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                Or connect on:
              </h3>
              <SocialLinks links={contactInfo.socialLinks} />
            </div>

            <div className="w-full h-px bg-white/10" aria-hidden="true" />

            {/* Additional CTAs */}
            <div>
              <h3 className="text-white/60 text-sm uppercase tracking-wider font-medium mb-4">
                Want to share more details?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-electric-lime text-slate-dark rounded-lg hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 text-sm font-medium"
                >
                  Email Us
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Schedule a Call`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-sm font-medium"
                >
                  Schedule Call
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-150 text-sm font-medium"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 9. Responsive Design & Mobile Optimization

### 9.1 Mobile-Specific Adjustments

**File: `app/globals.css` (additions)**

```css
@layer utilities {
  /* Mobile touch optimization */
  @media (max-width: 640px) {
    /* Ensure minimum font size to prevent iOS zoom */
    input,
    select,
    textarea {
      font-size: 16px !important;
    }

    /* Adjust spacing for mobile */
    .mobile-compact {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    /* Full-width cards on mobile */
    .mobile-full-width {
      margin-left: -1rem;
      margin-right: -1rem;
      border-radius: 0;
    }
  }

  /* Tablet adjustments */
  @media (min-width: 640px) and (max-width: 1024px) {
    .tablet-grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Safe area insets for notched devices */
  .safe-area-inset-top {
    padding-top: env(safe-area-inset-top);
  }

  .safe-area-inset-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }

  /* Touch-friendly target sizes */
  .touch-target {
    min-width: 44px;
    min-height: 44px;
  }
}
```

### 9.2 Responsive Typography Hook

**File: `hooks/useResponsiveFontSize.ts`**

```typescript
'use client'

import { useEffect, useState } from 'react'

export function useResponsiveFontSize() {
  const [fontSize, setFontSize] = useState({
    h1: 'text-4xl md:text-6xl',
    h2: 'text-3xl md:text-5xl',
    h3: 'text-2xl md:text-3xl',
    body: 'text-base md:text-lg',
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 640) {
        setFontSize({
          h1: 'text-4xl',
          h2: 'text-3xl',
          h3: 'text-2xl',
          body: 'text-base',
        })
      } else if (width < 1024) {
        setFontSize({
          h1: 'text-5xl',
          h2: 'text-4xl',
          h3: 'text-2xl',
          body: 'text-lg',
        })
      } else {
        setFontSize({
          h1: 'text-6xl',
          h2: 'text-5xl',
          h3: 'text-3xl',
          body: 'text-lg',
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return fontSize
}
```

---

## 10. Accessibility Implementation

### 10.1 Create Skip to Content Link

**File: `components/ui/SkipToContent.tsx`**

```typescript
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-electric-lime focus:text-slate-dark focus:rounded-lg focus:font-medium"
    >
      Skip to main content
    </a>
  )
}
```

### 10.2 Create Accessible Announcement Component

**File: `components/ui/LiveRegion.tsx`**

```typescript
'use client'

import { useEffect, useState } from 'react'

interface LiveRegionProps {
  message: string
  politeness?: 'polite' | 'assertive'
}

export function LiveRegion({ message, politeness = 'polite' }: LiveRegionProps) {
  const [announcement, setAnnouncement] = useState('')

  useEffect(() => {
    setAnnouncement(message)
    const timer = setTimeout(() => setAnnouncement(''), 1000)
    return () => clearTimeout(timer)
  }, [message])

  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  )
}
```

### 10.3 Accessibility Utilities CSS

**File: `app/globals.css` (additions)**

```css
@layer utilities {
  /* Screen reader only content */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  /* Focus visible enhancements */
  .focus-ring {
    @apply focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-lime;
  }
}
```

---

## 11. Performance Optimization

### 11.1 Image Optimization Configuration

**File: `next.config.js`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
```

### 11.2 Create Performance Monitoring Component

**File: `components/performance/WebVitals.tsx`**

```typescript
'use client'

import { useEffect } from 'react'
import { onCLS, onFID, onLCP } from 'web-vitals'

export function WebVitals() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      onCLS(console.log)
      onFID(console.log)
      onLCP(console.log)
    }
  }, [])

  return null
}
```

### 11.3 Lazy Loading Wrapper

**File: `components/ui/LazyLoad.tsx`**

```typescript
'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface LazyLoadProps {
  children: ReactNode
  className?: string
  placeholder?: ReactNode
}

export function LazyLoad({ children, className, placeholder }: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  )
}
```

---

## 12. Testing & Quality Assurance

### 12.1 Create Test Utilities

**File: `__tests__/utils/test-utils.tsx`**

```typescript
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Custom render function that includes providers
function customRender(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { ...options })
}

export * from '@testing-library/react'
export { customRender as render }
```

### 12.2 Accessibility Testing Script

**File: `scripts/test-a11y.js`**

```javascript
const { chromium } = require('playwright')
const { injectAxe, checkA11y } = require('axe-playwright')

async function testAccessibility() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')
  await injectAxe(page)

  const violations = await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  })

  if (violations.length > 0) {
    console.error('Accessibility violations found:')
    console.log(JSON.stringify(violations, null, 2))
    process.exit(1)
  }

  console.log('No accessibility violations found!')
  await browser.close()
}

testAccessibility()
```

### 12.3 Performance Testing Script

**File: `scripts/test-performance.js`**

```javascript
const { chromium } = require('playwright')

async function testPerformance() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')

  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')

    return {
      fcp: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime,
      domLoad: navigation.domContentLoadedEventEnd - navigation.fetchStart,
      windowLoad: navigation.loadEventEnd - navigation.fetchStart,
    }
  })

  console.log('Performance Metrics:')
  console.log(`FCP: ${metrics.fcp}ms`)
  console.log(`LCP: ${metrics.lcp}ms`)
  console.log(`DOM Load: ${metrics.domLoad}ms`)
  console.log(`Window Load: ${metrics.windowLoad}ms`)

  // Assert performance budgets
  if (metrics.lcp > 2500) {
    console.error('❌ LCP exceeds 2.5s threshold')
    process.exit(1)
  }

  console.log('✅ All performance budgets met')
  await browser.close()
}

testPerformance()
```

---

## 13. Deployment & Launch

### 13.1 Build for Production

**File: `package.json` scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:e2e": "playwright test",
    "test:a11y": "node scripts/test-a11y.js",
    "test:perf": "node scripts/test-performance.js",
    "analyze": "ANALYZE=true next build"
  }
}
```

### 13.2 Environment Variables

**File: `.env.local` (template)**

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://spirallab.co
NEXT_PUBLIC_SITE_NAME="Spiral Lab"

# Analytics (if needed)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (if implemented)
# CONTACT_FORM_WEBHOOK=https://...
```

### 13.3 Deployment Checklist

Create a deployment checklist file:

**File: `DEPLOYMENT_CHECKLIST.md`**

```markdown
# Pre-Deployment Checklist

## Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes with no errors
- [ ] All components have proper TypeScript types
- [ ] No console.log statements in production code

## Performance
- [ ] Run `npm run test:perf` - all metrics pass
- [ ] Images optimized and using Next.js Image component
- [ ] Fonts preloaded in layout
- [ ] Bundle size analyzed and optimized
- [ ] Lighthouse score > 90 for all categories

## Accessibility
- [ ] Run `npm run test:a11y` - no violations
- [ ] Keyboard navigation works throughout
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] All images have alt text
- [ ] All interactive elements have proper labels

## SEO
- [ ] Meta tags configured in layout.tsx
- [ ] Open Graph tags present
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Canonical URLs set

## Content
- [ ] All placeholder content replaced
- [ ] Contact information correct
- [ ] Social media links verified
- [ ] Case study links functional
- [ ] Legal pages added (Privacy, Terms)

## Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Android Chrome

## Responsive Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1920px)
- [ ] 4K (3840px)

## Production Build
- [ ] `npm run build` completes successfully
- [ ] No build warnings
- [ ] Preview production build locally
- [ ] Test all critical user flows

## Deployment
- [ ] Environment variables configured
- [ ] Domain configured and SSL active
- [ ] CDN configured (if applicable)
- [ ] Monitoring/analytics configured
- [ ] Error tracking configured (Sentry, etc.)
```

### 13.4 Vercel Deployment Configuration

**File: `vercel.json`**

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Main Page Assembly

### File: `app/page.tsx`

```typescript
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { WebVitals } from '@/components/performance/WebVitals'

export default function Home() {
  return (
    <>
      <SkipToContent />
      <CustomCursor />
      <WebVitals />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
    </>
  )
}
```

---

## Implementation Timeline

### Week 1: Foundation (Days 1-7)
**Days 1-2: Project Setup**
- Initialize Next.js project
- Configure Tailwind CSS
- Set up TypeScript
- Install dependencies
- Configure fonts

**Days 3-4: Core Infrastructure**
- Create utility functions
- Set up TypeScript types
- Create data files
- Configure global CSS
- Set up animations library

**Days 5-7: Design System**
- Create custom cursor
- Create grain texture
- Set up color variables
- Create base components (buttons, links)
- Test responsive breakpoints

### Week 2: Hero & Services (Days 8-14)
**Days 8-10: Hero Section**
- Build hero section component
- Implement background effects
- Add page load animations
- Create scroll indicator
- Test responsiveness

**Days 11-14: Services Section**
- Create service card component
- Implement expand/collapse logic
- Add scroll-triggered animations
- Build services section layout
- Test keyboard navigation

### Week 3: Case Studies & Contact (Days 15-21)
**Days 15-17: Case Studies**
- Create case study card component
- Build case studies grid
- Implement hover effects
- Add scroll animations
- Test on various screen sizes

**Days 18-21: Contact Section**
- Create contact section
- Add social links component
- Implement mailto/tel links
- Style CTAs
- Test accessibility

### Week 4: Polish & Testing (Days 22-28)
**Days 22-24: Responsive & Accessibility**
- Fine-tune mobile layouts
- Test on real devices
- Run accessibility audit
- Fix keyboard navigation issues
- Ensure WCAG AA compliance

**Days 25-27: Performance & Optimization**
- Optimize images
- Reduce bundle size
- Test Core Web Vitals
- Implement lazy loading
- Configure caching

**Days 28: Deployment**
- Run full test suite
- Complete deployment checklist
- Deploy to Vercel
- Monitor for issues
- Document any known issues

---

## Critical Implementation Notes

### 1. Font Licensing
You'll need to acquire proper licenses for:
- Display font (Söhne or ABC Whyte) - or use free alternative
- UI font (Untitled Sans or Suisse Int'l) - or use free alternative
- Mono font (Commit Mono or Berkeley Mono) - free options available

**Free alternatives:**
- Display: Manrope, Inter Display
- UI: Inter, Public Sans
- Mono: JetBrains Mono, Fira Code

### 2. Animation Performance
- ONLY animate `transform` and `opacity`
- Never animate `width`, `height`, `top`, `left`
- Use CSS animations for simple states
- Use motion/react for complex sequences
- Respect `prefers-reduced-motion`

### 3. Color Usage
- Deep Teal dominates (80% of backgrounds)
- Electric Lime used sparingly (< 5% of screen)
- Maintain 4.5:1 contrast ratio minimum
- Test colors with accessibility tools

### 4. Typography Rules
- Never use Inter, Roboto, Arial, Space Grotesk
- Always use `text-balance` for headings
- Always use `text-pretty` for paragraphs
- Always use `tabular-nums` for numbers
- NO letter-spacing modifications

### 5. Accessibility Requirements
- All interactive elements keyboard accessible
- Minimum 44x44px touch targets on mobile
- Proper heading hierarchy (h1 → h2 → h3)
- aria-labels on icon-only buttons
- Focus visible on all interactive elements

### 6. Performance Budgets
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Bundle size < 200KB (gzipped)
- Images lazy-loaded below fold

---

## Development Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Run accessibility tests
npm run test:a11y

# Run performance tests
npm run test:perf

# Analyze bundle size
npm run analyze
```

---

## Post-Launch Optimization

### Phase 1: Analytics Setup (Week 5)
- Configure Google Analytics 4
- Set up conversion tracking
- Monitor Core Web Vitals
- Track user interactions

### Phase 2: Content Expansion (Week 6)
- Add individual case study pages
- Create blog section (optional)
- Add team page (optional)
- Expand service details

### Phase 3: Advanced Features (Week 7+)
- Implement contact form with backend
- Add newsletter signup
- Create resources/downloads section
- Add testimonials section

---

## Troubleshooting Guide

### Common Issues & Solutions

**Issue: Fonts not loading**
- Check font file paths in `app/fonts.ts`
- Verify font files exist in `/public/fonts/`
- Ensure proper CORS headers for font files

**Issue: Animations laggy**
- Check if animating non-compositor properties
- Reduce number of simultaneous animations
- Test with Chrome DevTools Performance tab

**Issue: Layout shift on load**
- Add explicit width/height to images
- Use skeleton loaders
- Preload critical fonts

**Issue: Accessibility violations**
- Run `/rams` in Claude Code
- Use axe DevTools browser extension
- Test with screen reader

**Issue: Poor mobile performance**
- Reduce animation complexity on mobile
- Lazy load images below fold
- Use smaller image sizes on mobile

---

This implementation plan provides a complete, step-by-step guide to building the Spiral Lab website exactly as designed. Follow each section sequentially, testing thoroughly at each stage, and you'll create a world-class, production-ready website that matches the premium design concept.
