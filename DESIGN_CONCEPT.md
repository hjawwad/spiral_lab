# Spiral Lab Website - Premium Conversational Interface Design Concept

## Overview
An ultra-refined, conversational interface that positions Spiral Lab as a world-class AI technology company. Every pixel, animation, and interaction communicates precision, expertise, and enterprise-grade quality. The interface uses conversational patterns not for casual chat, but as a sophisticated narrative device—like consulting with an elite technology partner.

---

## Design Philosophy

### Aesthetic Direction
**Tone**: Luxurious minimalism with subtle maximalist touches—precision-engineered, institutional quality, refined yet visually striking
**Feel**: Premium, authoritative, meticulous, world-class, enterprise-grade, UNFORGETTABLE
**Differentiation**: This feels like the interface of a company that builds mission-critical AI systems for Fortune 500s—every detail obsessively crafted, with visual moments that surprise and delight

**The Unforgettable Element**: The grain texture + custom cursor + orchestrated page load creates a sense of "this was built by people who care about every millisecond"

### Core Principle
The interface uses conversational flow as an elegant narrative structure—not playful chat, but refined dialogue. Think less "chatbot" and more "consulting with an AI research lab."

Per Frontend-Design-Skill: We commit to a **BOLD aesthetic direction** with **refined minimalism** that's visually striking and memorable. Every interaction reinforces premium quality through:
- **Visual atmosphere**: Grain textures, layered shadows, subtle depth
- **Orchestrated motion**: One perfect page load sequence (600ms) that feels engineered
- **Micro-interactions**: Hover states that lift and glow with surgical precision
- **Typography**: Perfect optical alignment with generous spacing
- **Custom touches**: Cursor trail, animated underlines, scroll reveals
- **Details so refined they become the differentiator**

This matches the aesthetic complexity to the vision—elegant minimalism elevated by thoughtful, high-impact details.

---

## Color Palette

**Primary Colors**:
- **Deep Teal**: `#2B5F6F` (Primary backgrounds, establishes authority)
- **Electric Lime**: `#7FD944` (Strategic accents only—used sparingly for maximum impact)

**Supporting Colors**:
- **Pure White**: `#FFFFFF` (Premium content areas, text on dark)
- **Rich Black**: `#0A0E12` (Deep, sophisticated dark mode base)
- **Slate**: `#1E2530` (Elevated surfaces, cards)
- **Graphite**: `#8B95A5` (Secondary text, subtle elements)
- **Platinum**: `#F8F9FA` (Light mode backgrounds, very subtle)
- **Zinc**: `#3A4556` (Borders, dividers—barely visible but essential)

**Usage Philosophy**:
- Dark teal dominates—creates gravitas and depth
- Lime green used only for critical CTAs and data highlights (max 5% of screen)
- Generous use of near-blacks and whites for stark, professional contrast
- Subtle grays for hierarchy without distraction
- NO bright colors except lime green accent

---

## Typography

**Display Font**: [ABC Whyte](https://abcdinamo.com/typefaces/whyte) or [Söhne](https://klim.co.nz/retail-fonts/soehne/)
- Usage: Large headings, company name, primary CTAs
- Weight: 500-600
- Size: 48-96px on desktop (fluid scaling)
- Characteristics: Refined, authoritative, expensive-looking
- Letter spacing: Default (NO tracking modifications per UI-Skills)

**UI Font**: [Untitled Sans](https://klim.co.nz/retail-fonts/untitled-sans/) or [Suisse Int'l](https://www.swisstypefaces.com/fonts/suisse/)
- Usage: Interface text, message content, descriptions
- Weight: 400-500
- Size: 16-20px (WCAG compliant, never smaller than 16px)
- Characteristics: Swiss precision, incredible legibility, timeless
- Line height: 1.6 for body text (generous breathing room)

**Data Font**: [Commit Mono](https://commitmono.com/) or [Berkeley Mono](https://berkeleygraphics.com/typefaces/berkeley-mono/)
- Usage: Metrics, code snippets, technical specifications
- Weight: 400
- Characteristics: High-end monospace, engineered for clarity
- Feature: Tabular figures, slashed zero

**Hierarchy Rules**:
- H1: 72px (desktop) / 40px (mobile), weight 600
- H2: 48px (desktop) / 32px (mobile), weight 500
- H3: 32px (desktop) / 24px (mobile), weight 500
- Body: 18px, weight 400, 1.6 line height
- Caption: 14px, weight 400, 1.5 line height, graphite color
- NEVER use Inter, Roboto, Arial, Space Grotesk, or system fonts
- MUST use `text-balance` for all headings
- MUST use `text-pretty` for body paragraphs
- MUST use `tabular-nums` for all numbers/metrics
- NO letter-spacing modifications unless explicitly requested
- Optical alignment: Manually adjust ±1px when geometry betrays perception

---

## Tech Stack

### Framework & Libraries
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (using default values only)
- **motion/react** (formerly framer-motion) for animations
- **cn utility** (clsx + tailwind-merge) for class management

### Animation Strategy
- **CSS animations** for micro-interactions (hover, focus)
- **motion/react** for scroll-triggered reveals and page transitions
- **MUST animate only compositor properties**: `transform`, `opacity`
- **NEVER animate**: `width`, `height`, `top`, `left`, `margin`, `padding`
- **Easing**: Use `ease-out` for entrance animations
- **Duration**: Max 200ms for interaction feedback
- **Respect**: `prefers-reduced-motion`

---

## Layout Structure

### Hero Section (Full Viewport)
```
┌─────────────────────────────────────────────────────────┐
│ SPIRAL LAB                                   ●  ACTIVE  │
│─────────────────────────────────────────────────────────│
│                                                         │
│              [60px vertical space]                      │
│                                                         │
│   ┌──────────────────────────────────────────────────┐ │
│   │                                                  │ │
│   │  SPIRAL LAB                                      │ │
│   │  ━━━━━━━                                        │ │
│   │                                                  │ │
│   │  We architect AI systems for                    │ │
│   │  organizations building the future.             │ │
│   │                                                  │ │
│   │  Autonomous agents. Neural networks.            │ │
│   │  Production-grade intelligence.                 │ │
│   │                                                  │ │
│   │                                                  │ │
│   │  ┌─────────────────────────────────┐           │ │
│   │  │  Explore Capabilities      →    │           │ │
│   │  └─────────────────────────────────┘           │ │
│   │                                                  │ │
│   │  View Case Studies                              │ │
│   │  Discuss Your Project                           │ │
│   │                                                  │ │
│   └──────────────────────────────────────────────────┘ │
│                                                         │
│              [40px vertical space]                      │
│                                                         │
│                                                         │
│                        ↓                                │
│                   SCROLL DOWN                           │
│                [subtle animation]                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Implementation Details**:

**Background Atmosphere**:
- Base: Deep teal (#2B5F6F)
- Grain overlay: SVG noise texture at 3% opacity (creates premium texture)
- Vignette: Subtle radial gradient darkening edges
- Effect: Depth without being distracting

**Message Container**:
- Background: `rgba(255,255,255,0.05)` (frosted glass effect)
- Border: `1px solid rgba(255,255,255,0.1)` with inner highlight
- Shadow: Layered (ambient + directional)
  - `box-shadow: 0 2px 8px rgba(0,0,0,0.12), 0 12px 24px rgba(0,0,0,0.08)`
- Padding: 48px (desktop) / 32px (mobile)

**Typography**:
- "SPIRAL LAB": 16px, weight 500, lime green (#7FD944)
- Divider: 40px × 2px, lime green, left-aligned
- Headline: 48px (desktop), weight 500, pure white
- Body: 18px, weight 400, rgba(255,255,255,0.8), 1.6 line-height

**Interactive Elements**:
- Primary CTA: Lime background, slate text, subtle shadow, hover lifts 2px
- Secondary links: Graphite text, animated underline on hover
- Status dot: 8px, lime green, static (no pulse)

**Technical**:
- Use `h-dvh` (NOT `h-screen`)
- Respect `safe-area-inset` for mobile
- Custom cursor: Lime green dot with trail effect
- Scroll indicator: Static arrow with subtle brightness pulse

---

### Services Section (Conversational Flow)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                   ┌────────────────┐   │
│                              USER │ Explore        │   │
│                                   │ Capabilities   │   │
│                                   └────────────────┘   │
│                                                         │
│                                                         │
│   ┌──────────────────────────────────────────────────┐ │
│   │                                                  │ │
│   │  SPIRAL LAB                                      │ │
│   │  ━━━━━━━                                        │ │
│   │                                                  │ │
│   │  We engineer AI infrastructure across           │ │
│   │  four specialized domains:                      │ │
│   │                                                  │ │
│   │                                                  │ │
│   │  ┌────────────────────────────────────────┐    │ │
│   │  │                                        │    │ │
│   │  │  01  Autonomous Agent Systems          │    │ │
│   │  │      ─────────────────────────         │    │ │
│   │  │                                        │    │ │
│   │  │      Self-directed AI that reasons,    │    │ │
│   │  │      adapts, and executes complex      │    │ │
│   │  │      multi-step workflows.             │    │ │
│   │  │                                        │    │ │
│   │  │      [Expand Details →]                │    │ │
│   │  │                                        │    │ │
│   │  └────────────────────────────────────────┘    │ │
│   │                                                  │ │
│   │  ┌────────────────────────────────────────┐    │ │
│   │  │                                        │    │ │
│   │  │  02  Conversational Intelligence       │    │ │
│   │  │      ───────────────────────────       │    │ │
│   │  │                                        │    │ │
│   │  │      Natural language systems with     │    │ │
│   │  │      contextual understanding and      │    │ │
│   │  │      enterprise-grade accuracy.        │    │ │
│   │  │                                        │    │ │
│   │  │      [Expand Details →]                │    │ │
│   │  │                                        │    │ │
│   │  └────────────────────────────────────────┘    │ │
│   │                                               │    │
│   │ ┌───────────────────────────────────────┐   │    │
│   │ │ 🧠 Machine Learning & Predictive AI    │   │    │
│   │ │ Models that forecast & optimize        │   │    │
│   │ │ [Expand ↓]                             │   │    │
│   │ └───────────────────────────────────────┘   │    │
│   │                                               │    │
│   │ ┌───────────────────────────────────────┐   │    │
│   │ │ 🎯 Custom AI Solutions                 │   │    │
│   │ │ Bespoke intelligence for your needs    │   │    │
│   │ │ [Expand ↓]                             │   │    │
│   │ └───────────────────────────────────────┘   │    │
│   └──────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Interaction Pattern**:
- Hover card: Border brightens from rgba(255,255,255,0.1) → rgba(123,253,68,0.2) (color change only, NO transform)
- Click "Expand Details →": Card expands vertically
- Expanded state shows: technical architecture, performance metrics, implementation details
- Close button appears top-right: "✕" or "Collapse ↑"
- Other cards remain at full opacity (NO dimming effect)

**Expanded State Example**:
```
│ ┌──────────────────────────────────────────────────────┐ │
│ │                                                      │ │
│ │  01  Autonomous Agent Systems                        │ │
│ │      ─────────────────────────    [Collapse ↑]      │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐ │ │
│ │  │ CAPABILITIES                                   │ │ │
│ │  └────────────────────────────────────────────────┘ │ │
│ │                                                      │ │
│ │  → Multi-agent orchestration & coordination          │ │
│ │  → Reinforcement learning from human feedback        │ │
│ │  → Memory persistence & contextual reasoning         │ │
│ │  → Tool use & external API integration              │ │
│ │  → Real-time decision making at scale               │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐ │ │
│ │  │ PERFORMANCE METRICS                            │ │ │
│ │  └────────────────────────────────────────────────┘ │ │
│ │                                                      │ │
│ │  94.7%    Accuracy in production environments        │ │
│ │  <200ms   Average response latency                   │ │
│ │  99.97%   System uptime (last 12 months)            │ │
│ │  10K+     Concurrent agent instances supported       │ │
│ │                                                      │ │
│ │  ┌────────────────────────────────────────────────┐ │ │
│ │  │ TECHNOLOGY STACK                               │ │ │
│ │  └────────────────────────────────────────────────┘ │ │
│ │                                                      │ │
│ │  LangChain  •  LlamaIndex  •  Anthropic Claude      │ │
│ │  OpenAI GPT-4  •  Vector Databases  •  Redis        │ │
│ │  FastAPI  •  Docker  •  Kubernetes  •  AWS/GCP      │ │
│ │                                                      │ │
│ │                                                      │ │
│ │  ┌─────────────────────┐  ┌────────────────────┐   │ │
│ │  │ Request Consultation │  │ View Case Studies  │   │ │
│ │  └─────────────────────┘  └────────────────────┘   │ │
│ │                                                      │ │
│ └──────────────────────────────────────────────────────┘ │
```

**Styling Details**:
- Numbering: Commit Mono font, 14px, lime green
- Titles: 24px, weight 500, pure white
- Divider: 60px width, 1px height, lime green, left-aligned
- Body text: 16px, rgba(255,255,255,0.7), line-height 1.7
- Metrics: Large numbers (32px, `tabular-nums` class, weight 600), small labels (12px, uppercase, graphite)
- Tech tags: Small pills with slate background, 1px border, 8px padding
- Buttons: Outlined style, hover fills with lime green
- NO custom easing curves - use Tailwind defaults only

---

### Case Studies Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                          ┌──────────────────────┐      │
│                     You │ View Our Work         │      │
│                          └──────────────────────┘      │
│                                                         │
│   ┌──────────────────────────────────────────────┐    │
│   │ 🌀 Spiral Lab                                 │    │
│   │                                               │    │
│   │ Here are some AI systems we've built:        │    │
│   └──────────────────────────────────────────────┘    │
│                                                         │
│   ┌────────────────────────────────────────────────┐  │
│   │ [01] AI Customer Support System                │  │
│   │                                                │  │
│   │ E-commerce chatbot handling 1,200 daily       │  │
│   │ conversations with 94% resolution rate         │  │
│   │                                                │  │
│   │ Impact:                                        │  │
│   │ • 87% reduction in support tickets            │  │
│   │ • 24/7 availability                           │  │
│   │ • 4.7/5 customer satisfaction                 │  │
│   │                                                │  │
│   │ Stack: GPT-4, LangChain, Vector DB, Next.js   │  │
│   │                                                │  │
│   │ [View Details →]                              │  │
│   └────────────────────────────────────────────────┘  │
│                                                         │
│   ┌────────────────────────────────────────────────┐  │
│   │ [02] Predictive Analytics Engine               │  │
│   │                                                │  │
│   │ ML system forecasting sales trends for         │  │
│   │ retail chain with 92% accuracy                 │  │
│   │                                                │  │
│   │ Impact:                                        │  │
│   │ • 2.3x ROI in first quarter                   │  │
│   │ • 40% inventory optimization                  │  │
│   │ • $1.2M cost savings                          │  │
│   │                                                │  │
│   │ Stack: PyTorch, Scikit-learn, AWS, FastAPI    │  │
│   │                                                │  │
│   │ [View Details →]                              │  │
│   └────────────────────────────────────────────────┘  │
│                                                         │
│   ┌────────────────────────────────────────────────┐  │
│   │ [03] NLP Document Processor                    │  │
│   │                                                │  │
│   │ Automated document analysis processing         │  │
│   │ 10,000+ legal docs per hour                   │  │
│   │                                                │  │
│   │ Impact:                                        │  │
│   │ • 95% time savings                            │  │
│   │ • 98.5% accuracy in classification            │  │
│   │ • Real-time processing                        │  │
│   │                                                │  │
│   │ Stack: BERT, spaCy, Elasticsearch, Python     │  │
│   │                                                │  │
│   │ [View Details →]                              │  │
│   └────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Implementation Notes**:
- Cards reveal with staggered animation on scroll
- Use structural skeletons while "loading" (for visual effect, not real loading)
- Numbers use `tabular-nums` for alignment
- Hover state: cards lift slightly (translateY transform) with shadow increase
- "View Details" can open modal or navigate to detail page

---

### Contact Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                          ┌──────────────────────┐      │
│                     You │ Let's Talk            │      │
│                          └──────────────────────┘      │
│                                                         │
│   ┌──────────────────────────────────────────────┐    │
│   │ 🌀 Spiral Lab                                 │    │
│   │                                               │    │
│   │ Great! We'd love to hear about your project.  │    │
│   │                                               │    │
│   │ Reach us at:                                  │    │
│   │                                               │    │
│   │ 📧 jawwad@spirallab.co                        │    │
│   │ 📞 +92-304-548-0586                           │    │
│   │ 📍 Lahore, Punjab, Pakistan                   │    │
│   │                                               │    │
│   │ Or connect on:                                │    │
│   │ [LinkedIn] [Twitter] [GitHub] [Instagram]     │    │
│   │                                               │    │
│   │ ─────────────────────────────────────────     │    │
│   │                                               │    │
│   │ Want to share more details?                   │    │
│   │ [Email Us] [Schedule Call] [Send Message]     │    │
│   └──────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Implementation Notes**:
- Email/phone are clickable links (`mailto:`, `tel:`)
- Social icons are properly sized (min 44×44px touch target on mobile)
- All links use `<a>` tags (not `<button>`) for proper keyboard navigation
- Icon-only buttons MUST have `aria-label`
- Links open in new tab with proper `rel="noopener noreferrer"`

---

## Component Architecture

### Message Bubble Component
```tsx
interface MessageBubbleProps {
  sender: 'user' | 'spiral';
  children: React.ReactNode;
  timestamp?: string;
  avatar?: string;
}
```

**Styling Rules**:
- User messages: Right-aligned, lime green background (`#7FD944`), dark text
- Spiral messages: Left-aligned, white background, dark text
- Use `rounded-2xl` for bubble corners (Tailwind default)
- Add subtle shadow: `shadow-sm` (Tailwind default)
- Padding: `p-4` (Tailwind default)
- Max width: `max-w-2xl` to prevent overly wide messages

**Accessibility**:
- Use semantic HTML (`<article>` for messages)
- Include visually-hidden timestamp for screen readers
- Ensure 4.5:1 contrast ratio (use APCA for verification)

### Expandable Service Card
```tsx
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}
```

**Animation**:
- Use `motion.div` with `layout` prop for smooth height animation
- Expand/collapse with spring animation: `spring(300, 40, 10)`
- Rotate chevron icon 180deg when expanded
- Content fades in with staggered children animation

**Accessibility**:
- Use `<button>` with `aria-expanded` state
- Announce state changes with `aria-live="polite"`
- Keyboard accessible (Enter/Space to toggle)
- Focus visible with clear outline

### Case Study Card
```tsx
interface CaseStudyCardProps {
  number: string;
  title: string;
  description: string;
  impact: string[];
  tech: string[];
  link: string;
}
```

**Styling**:
- Border: `border border-gray-200` (Tailwind default)
- Background: White with slight grain texture (SVG pattern)
- Hover: Lift with `hover:-translate-y-1` and `hover:shadow-md`
- Numbers use monospace font (JetBrains Mono) with `tabular-nums`

---

## Animation & Visual Effects Strategy

### Philosophy: Bold but Disciplined
Per Frontend-Design-Skill: "Focus on high-impact moments: **one well-orchestrated page load with staggered reveals** creates more delight than scattered micro-interactions."

We'll create **memorable, premium animations** that follow UI-Skills technical constraints.

### Page Load Sequence (High-Impact Moment)
**0-800ms: Orchestrated Entrance**
1. **Hero card**: Opacity 0→1, translateY(20px)→0, 600ms ease-out
2. **Button group**: Staggered reveal, each +100ms delay
3. **Status indicator**: Fades in last at 800ms

**Implementation**: CSS animation-delay, NO JavaScript

### Visual Depth & Atmosphere
Per Frontend-Design-Skill line 34: "Create atmosphere and depth rather than defaulting to solid colors"

- **Grain texture overlay**: SVG noise pattern at 3% opacity over teal background
- **Subtle vignette**: Radial gradient from center (transparent) to edges (rgba(0,0,0,0.15))
- **Card elevation**: Layered shadows (2 layers: ambient + direct light)
  - Layer 1: `0 2px 8px rgba(0,0,0,0.12)` (ambient)
  - Layer 2: `0 12px 24px rgba(0,0,0,0.08)` (direct)
- **Border treatment**: 1px solid rgba(255,255,255,0.1) + inner glow effect
- **Custom cursor**: Lime green dot (8px) follows cursor with smooth trail

### Scroll-Triggered Reveals
**Services & Case Studies sections**: Elements fade in as they enter viewport
- Trigger: Element crosses 20% viewport threshold (Intersection Observer)
- Effect: Opacity 0→1, translateY(30px)→0, 400ms ease-out
- Stagger: Cards offset by 150ms each
- **Technical**: Use `motion/react` with `whileInView` prop

### Micro-Interactions (Hover States)
Per UI-Skills: Only animate `transform` and `opacity`, max 200ms

**Buttons**:
- Background: lime → darker lime (150ms)
- Transform: translateY(-2px) + shadow increase (150ms)
- Use: `transition: all 150ms ease-out`

**Cards**:
- Border: rgba(255,255,255,0.1) → rgba(123,253,68,0.3) (150ms)
- Transform: translateY(-4px) (150ms)
- Shadow: Increase blur by 8px (150ms)

**Links**:
- Color + 2px underline grows from left→right (150ms)
- Effect: `background-size: 0% 2px` → `100% 2px`

### Performance Constraints
✓ Only animate `transform` and `opacity` (compositor properties)
✓ NO `backdrop-filter` animations
✓ NO `will-change` (only during active animation if needed)
✓ Use CSS transitions for simple states
✓ Use `motion/react` for complex sequences
✓ Respect `prefers-reduced-motion` (disable all animations)
✓ All animations < 200ms except page load (600ms allowed)

---

## Responsive Design

### Breakpoints (Tailwind Defaults)
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)
- **Desktop**: 1024px+ (lg+)

### Mobile Adaptations
- Message bubbles: Full width with `mx-4` margin
- Service cards: Stack vertically
- Case studies: Single column layout
- Font sizes: `<input>` minimum 16px to prevent iOS zoom
- Touch targets: Minimum 44×44px for all interactive elements
- Navigation: Sticky header with `touch-action: manipulation`

### Tablet Adaptations
- Message bubbles: Max width 80% of viewport
- Service cards: 2-column grid
- Case studies: 2-column grid

### Desktop Adaptations
- Message bubbles: Max width 60% of viewport
- Center-aligned conversation flow
- Service cards: Show all in single view, no scrolling
- Case studies: 3-column grid or masonry layout

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- ✓ Keyboard navigation works everywhere
- ✓ Focus visible on all interactive elements (`:focus-visible` ring)
- ✓ Color contrast minimum 4.5:1 (7:1 for AAA on important text)
- ✓ All images have `alt` text
- ✓ Icon-only buttons have `aria-label`
- ✓ Form inputs have associated `<label>` elements
- ✓ Skip to content link for keyboard users
- ✓ Hierarchical heading structure (h1 → h2 → h3)
- ✓ ARIA live regions for dynamic content updates

### Screen Reader Support
- Semantic HTML (`<article>`, `<section>`, `<nav>`, `<button>`, `<a>`)
- Proper heading hierarchy (no skipped levels)
- Descriptive link text (not "click here")
- Status messages announced with `aria-live="polite"`

### Keyboard Navigation
- Tab order follows visual flow
- All interactive elements are keyboard accessible
- Escape key closes modals/expanded states
- Enter/Space activates buttons
- Arrow keys for radio groups

---

## Performance Targets

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategy
- Preload critical fonts with `<link rel="preload">`
- Lazy load images below fold
- Use Next.js Image component with proper dimensions
- Minimize JavaScript bundle (code splitting)
- Use CSS animations over JS when possible
- Implement service worker for offline support

### Loading States
- Show structural skeleton (not spinner) for content
- Minimum skeleton display: 300ms (avoid flash)
- Smooth transition from skeleton to content

---

## Design System Constraints (UI Skills)

### Mandatory Rules
✓ Use Tailwind CSS defaults unless custom values exist
✓ Use `motion/react` for JS animations
✓ Use `cn` utility for class logic
✓ Use accessible primitives (Base UI, React Aria, Radix)
✓ Add `aria-label` to icon-only buttons
✓ Use `AlertDialog` for destructive actions
✓ Use structural skeletons for loading
✓ Use `h-dvh` instead of `h-screen`
✓ Respect `safe-area-inset` for fixed elements
✓ Show errors next to where action happens
✓ NEVER block paste in inputs
✓ Animate only compositor props (`transform`, `opacity`)
✓ Use `ease-out` for entrance animations
✓ Max 200ms for interaction feedback
✓ Respect `prefers-reduced-motion`
✓ Use `text-balance` for headings
✓ Use `text-pretty` for paragraphs
✓ Use `tabular-nums` for data
✓ Fixed z-index scale (no arbitrary values)
✓ Use `size-*` for square elements
✓ NEVER use gradients unless explicitly requested
✓ NEVER use purple/multicolor gradients
✓ Use Tailwind shadow scale
✓ Limit accent color to one per view

---

## Content Strategy

### Messaging Tone
- **Authoritative and precise**: "We architect" not "We build"
- **Enterprise-grade language**: Technical precision without dumbing down
- **Results-focused**: Lead with outcomes and metrics
- **Absolute confidence**: This is world-class work, communicate it clearly
- **Example shift**:
  - ❌ "Hey there! We build AI solutions"
  - ✅ "We architect AI systems for organizations building the future"

### Copywriting Rules
- Use sentence case for body text
- Use Title Case for buttons and headings (Chicago style)
- Prefer "&" over "and" in headings
- Use numerals for counts ("3 projects" not "three projects")
- Active voice ("We build" not "We will build")
- Separate numbers and units with space ("10 MB" not "10MB")

### SEO Considerations
- Accurate page title: "Spiral Lab - AI Solutions & Machine Learning Services"
- Meta description: Under 160 characters, includes key services
- Semantic HTML for better crawlability
- Descriptive alt text for all images
- Proper heading hierarchy

---

## Implementation Phases

### Phase 1: Core Structure (Week 1)
- [ ] Setup Next.js 15 + TypeScript + Tailwind
- [ ] Install motion/react, cn utility
- [ ] Create base layout and navigation
- [ ] Implement message bubble component
- [ ] Build hero section with initial message

### Phase 2: Services Section (Week 2)
- [ ] Create expandable service card component
- [ ] Add scroll-triggered animations
- [ ] Implement expand/collapse logic
- [ ] Add detailed content for each service
- [ ] Test keyboard navigation

### Phase 3: Case Studies (Week 3)
- [ ] Build case study card component
- [ ] Add grid layout with responsive breakpoints
- [ ] Implement hover effects and animations
- [ ] Add modal/detail view for case studies
- [ ] Test on mobile devices

### Phase 4: Contact & Polish (Week 4)
- [ ] Create contact section with links
- [ ] Add social media integration
- [ ] Implement form (if needed)
- [ ] Performance optimization
- [ ] Accessibility audit with /rams
- [ ] Cross-browser testing

---

## Testing Checklist

### Functionality
- [ ] All buttons and links work correctly
- [ ] Expand/collapse animations smooth and reliable
- [ ] Scroll animations trigger at correct viewport positions
- [ ] No console errors or warnings
- [ ] Forms submit correctly (if implemented)

### Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces all content correctly
- [ ] Focus visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards
- [ ] No keyboard traps

### Performance
- [ ] LCP < 2.5s on 4G connection
- [ ] No layout shift during load
- [ ] Animations run at 60fps
- [ ] Images optimized and lazy-loaded
- [ ] Bundle size under 200KB (gzipped)

### Responsiveness
- [ ] Works on iPhone SE (375px)
- [ ] Works on iPad (768px)
- [ ] Works on desktop (1920px)
- [ ] Touch targets min 44×44px on mobile
- [ ] No horizontal scroll on any device

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] iOS Safari (latest)

---

## Notes

This design concept prioritizes:
1. **User experience** through conversational, intuitive interface
2. **Accessibility** through semantic HTML and ARIA
3. **Performance** through optimized animations and lazy loading
4. **Brand identity** through consistent use of Spiral Lab colors and typography
5. **AI-focused messaging** that showcases expertise without being overwhelming

The "conversational" aspect is purely visual—no AI backend required. All interactions are pre-scripted, but the experience feels dynamic and engaging through clever use of animations, progressive disclosure, and interaction design.
