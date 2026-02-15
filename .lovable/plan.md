

# 🚀 Afsal PT – Premium Futuristic 3D Portfolio

## Design Vision
A **dark, immersive, Silicon Valley-grade** portfolio with deep space-black backgrounds, electric cyan/blue accent glows, glassmorphism everywhere, and cinematic-level animations. Think Linear.app meets Vercel's design language.

---

## 🎨 Design System
- **Background**: Deep navy-black (#0a0a1a → #0d1117) with subtle radial gradient orbs
- **Accent colors**: Electric cyan (#00d4ff), violet-blue (#7c3aed), and soft white
- **Glassmorphism**: Cards with `backdrop-blur-xl`, semi-transparent borders with gradient glow
- **Typography**: Clean Inter/system font, oversized hero text with gradient fills
- **Glow effects**: Soft cyan/purple box-shadows and text-shadows throughout

---

## 📐 Sections & Features

### 1. Floating Glass Navigation
- Fixed top navbar with heavy backdrop blur and glass border
- Smooth scroll links to each section
- Glowing dot indicator for active section
- Shrinks subtly on scroll

### 2. Hero Section (Full viewport)
- **3D animated particle field** background using React Three Fiber (@react-three/fiber + @react-three/drei) — floating connected dots/mesh that reacts to mouse movement
- Your uploaded photo centered with:
  - **Mouse-tracking 3D perspective tilt** (CSS transforms based on mouse position)
  - Glowing cyan ring/border animation around the photo
  - Subtle floating up/down animation
- **"Afsal PT"** in massive gradient text (cyan→violet) with staggered letter-by-letter entrance animation
- **"Full Stack Developer"** subtitle fades in after name
- Tagline with typewriter effect
- Two CTA buttons with glow pulse hover effects
- Animated scroll-down chevron at bottom

### 3. About Me
- Text reveals word-by-word on scroll (intersection observer)
- Glassmorphism card with stats counters (animate numbers up)
- Floating decorative gradient orbs in background
- Key highlights: MERN, Next.js, Nest.js expertise

### 4. Tech Stack
- Hexagonal or rounded grid of tech icons
- Each icon has a **glow-on-hover** effect with the tech's brand color
- Icons float/breathe subtly with staggered animation
- Categories: Frontend, Backend, Database, Tools
- Mouse proximity glow effect (icons near cursor glow brighter)

### 5. Featured Projects (3 placeholders)
- **3D perspective cards** that tilt toward mouse on hover
- Each card lifts up with shadow expansion on hover
- Glassmorphism card with project screenshot placeholder, title, description, tech badges
- Staggered scroll entrance animation
- "View Project" button with sliding glow underline

### 6. Experience Timeline
- Vertical timeline with glowing cyan line
- Alternating left/right entries on desktop, all-left on mobile
- Each entry slides in from its side on scroll
- Glowing dot pulse at each timeline node
- Placeholder entries for work history

### 7. Contact Section
- Large glassmorphism form card (Name, Email, Message fields)
- Inputs with glowing border on focus
- Submit button with animated gradient background
- Social links (GitHub, LinkedIn, Email) with hover glow icons
- Visual-only form (no backend)

### 8. Footer
- Minimal with copyright, "Built with ❤️" text
- Subtle gradient line separator

---

## ✨ Animations & Interactions
- **React Three Fiber** 3D particle/star field in hero background
- **Mouse-tracking 3D tilt** on photo and project cards (pure CSS/JS, no library needed)
- **Intersection Observer** scroll-triggered reveals on every section (fade-up, slide-in)
- **Staggered animations** — child elements animate in sequence
- **Floating background orbs** — large blurred gradient circles that drift slowly
- **Smooth scroll** behavior site-wide
- **Parallax depth** — background elements scroll slower than foreground
- **Micro-interactions** — button hover glows, input focus effects, link underline animations
- **Number counter animation** on stats

## 📱 Responsive
- Fully mobile-optimized with adjusted layouts
- Timeline goes single-column on mobile
- Project cards stack vertically
- Navigation becomes a hamburger menu on mobile

## 📦 New Dependencies
- `@react-three/fiber@^8.18` — 3D canvas rendering
- `@react-three/drei@^9.122.0` — 3D helpers (Stars, Float, etc.)
- `three@^0.160` — Three.js core

