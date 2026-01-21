# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a "coming soon" landing page for Spiral Lab, built using a static HTML/CSS/JS template. The site features a fullscreen hero section with multiple background effect variations and displays contact information, social media links, and service offerings.

## Architecture

### Page Structure

The site consists of 10 different HTML page variations, each showcasing a different visual background effect:

- **[index.html](index.html)** - Main landing page with static background image
- **[index-particles.html](index-particles.html)** - Particle.js effect with interactive particles
- **[index-star.html](index-star.html)** - Star field effect
- **[index-fss.html](index-fss.html)** - Flat Surface Shader animated 3D mesh
- **[index-bouncing-ball.html](index-bouncing-ball.html)** - Bouncing balls effect (Quietflow)
- **[index-slider.html](index-slider.html)** - Vegas slideshow with image transitions
- **[index-solid.html](index-solid.html)** - Solid color background
- **[index-smoky.html](index-smoky.html)** - Smoky/waterpipe canvas effect
- **[index-triangle.html](index-triangle.html)** - Triangle/ribbon background
- **[index-video.html](index-video.html)** - YouTube video background

All variations share the same HTML structure but initialize different background effects via JavaScript.

### Key Components

**Header Section** ([index.html:37-62](index.html#L37-L62))
- Contact information (location, phone, email)
- Social media icons (LinkedIn, Twitter, Instagram, Facebook)
- Responsive layout that hides contact details on mobile

**Hero Section** ([index.html:68-116](index.html#L68-L116))
- Logo/icon display
- Main heading and tagline
- Optional countdown timer (currently hidden via `hide` class)
- Service offerings grid (3 services: Web Development, Mobile App Design, AI & Chatbots)

**Background Effects**
- Effects are loaded conditionally based on HTML page
- Main initialization happens in [assets/js/main.js](assets/js/main.js)
- Each effect has its own configuration object

### Directory Structure

```
├── assets/
│   ├── css/
│   │   └── main.css           # All styles (2032 lines)
│   ├── fonts/
│   │   └── fontawesome/       # Font Awesome icons
│   ├── img/                   # Image assets
│   ├── js/
│   │   └── main.js            # Main JavaScript (718 lines)
│   └── vendors/               # Third-party libraries
│       ├── particles.js/      # Particle effects
│       ├── flat-surface-shader/ # 3D mesh animation
│       ├── quietflow/         # Bouncing balls
│       ├── waterpipe/         # Smoky effect
│       ├── vegas/             # Image slider
│       ├── YTPlayer/          # YouTube background
│       ├── jquery/
│       ├── jquery.countdown/
│       ├── bootstrap/         # Grid system only
│       └── swiper/
└── index*.html                # 10 HTML variants
```

## JavaScript Architecture

### Main Entry Point ([assets/js/main.js](assets/js/main.js))

The JavaScript is wrapped in an IIFE and handles:

1. **Mobile Detection** ([assets/js/main.js:9-28](assets/js/main.js#L9-L28))
   - Detects device type via user agent
   - Sets global `window.isMobile` object

2. **Background Effect Initialization**
   - FSS (Flat Surface Shader): Lines 34-66
   - Particle.js: Lines 622-644 with multiple effect presets (default, star, nasa, bubble, snow)
   - Quietflow: Lines 645-654
   - Waterpipe (smoky): Lines 669-683
   - Vegas slideshow: Lines 684-698
   - YouTube player: Lines 699-705

3. **Countdown Timer** ([assets/js/main.js:709-716](assets/js/main.js#L709-L716))
   - jQuery countdown plugin integration
   - Date format: `YYYY/MM/DD`

### Effect Configurations

The main.js file contains five particle.js effect presets:
- `default_effect` - Interactive network particles
- `star_effect` - Twinkling stars
- `snow_effect` - Falling snow
- `bubble_effect` - Large floating bubbles
- `nasa_effect` - Space-like particles

Effects are selected via `data-effect` attribute on the particles container.

## CSS Architecture ([assets/css/main.css](assets/css/main.css))

The CSS is organized into 16 sections:

1. Base styles and resets
2. Form inputs
3. Header component
4. Service cards
5. Hero section
6. FSS background
7. Particles.js container
8. Quietflow styles
9. Ribbon background
10. Smoky effect
11. Vegas slider
12. YouTube background
13. Social icons (extensive social media styling)
14. Bootstrap grid resets
15. Margin/padding utilities
16. Countdown module

**Typography:**
- Primary font: Roboto (body text)
- Heading font: Work Sans
- Responsive font sizes using calc() with viewport units

**Color Scheme:**
- Dark theme: `md-skin-dark` class applies white text on dark background
- Primary dark: `#303036`
- Accent color (links): `#426efc`

**Responsive Breakpoints:**
- 320px - Mobile base
- 768px - Tablet
- 992px - Desktop
- 1200px - Large desktop
- 1400px - Extra large

## Development Workflow

### Local Development

This is a static HTML site. To work with it:

1. Simply open any `index*.html` file in a browser
2. For live development, use any static file server:
   ```bash
   python3 -m http.server 8000
   # or
   npx http-server
   ```

### Making Changes

**To update content:**
- Edit HTML files directly for text, links, or structure
- Contact info, social links, and services are in the hero section
- Update company information in [index.html:38](index.html#L38) (location, phone, email)
- Social links are in [index.html:43-59](index.html#L43-L59)

**To modify styles:**
- All styles are in [assets/css/main.css](assets/css/main.css)
- No build process required - changes are immediately visible
- CSS is organized with section comments for easy navigation

**To adjust effects:**
- Particle.js configurations are in [assets/js/main.js:68-620](assets/js/main.js#L68-L620)
- FSS colors/animation in [assets/js/main.js:34-66](assets/js/main.js#L34-L66)
- Vegas slideshow images in [assets/js/main.js:694](assets/js/main.js#L694)

### Countdown Timer

The countdown is currently hidden (class `hide` on line 76 of index.html). To enable:
1. Remove `hide` class from countdown element
2. Set target date in `data-date` attribute (format: `YYYY/MM/DD`)
3. Timer will automatically start and display days/hours/minutes/seconds

## Key Considerations

### Template Attribution
This is based on the "Coming2Live" template series. Template credits are in HTML comments.

### Third-Party Dependencies
All vendor libraries are included locally in `assets/vendors/`. No external CDN dependencies except Google Fonts.

### Browser Compatibility
- Modern browsers supported
- IE9+ fallback via html5shiv (conditional comment in HTML head)
- Mobile-optimized with viewport meta tags

### Background Effects Performance
- Each effect has different performance characteristics
- Particle.js and FSS are GPU-accelerated (good performance)
- Waterpipe/Quietflow use canvas rendering (moderate performance)
- YouTube background requires autoplay permissions

### Social Media Integration
The CSS includes pre-styled classes for 50+ social media platforms. Current site uses:
- LinkedIn
- Twitter
- Instagram
- Facebook

## Contact Information

Current site configuration (from [index.html](index.html)):
- Location: Lahore, Punjab, Pakistan
- Phone: +92-304-548-0586
- Email: jawwad@spirallab.co
- Social media handles are linked in the header
