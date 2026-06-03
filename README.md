# VELOURA STUDIO — Crafting Timeless Elegance

A world-class luxury boutique showcase website: cinematic, editorial, and production-ready.

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Tech Stack

- **Next.js 15** — App Router, React 19
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility styling
- **GSAP + ScrollTrigger** — Cinematic parallax
- **Lenis** — Luxury smooth scroll (synced to GSAP)
- **Framer Motion** — Scroll-triggered reveals

---

## Site Sections

| Section | Component | Images Used |
|---|---|---|
| 1. Hero | HeroSection.tsx | boutique_ad.mp4 (video) |
| 2. Brand Story | BrandStorySection.tsx | Brand_Story_Hero, Brand_Story_Detail, Frozen_Frame_Bridge |
| 3. Collections | SignatureCollectionSection.tsx | Look_1, Look_2, Look_3 |
| 4. Craftsmanship | CraftsmanshipSection.tsx | Materials, Fabric, Handwork |
| 5. Editorial | EditorialLookbookSection.tsx | Editorial_Portrait, Lifestyle, Boutique_Interior |
| 6. Appointments | PrivateAppointmentsSection.tsx | Private_Appointment_Scene, Contact_Section |
| 7. Shop | ShopCollectionSection.tsx | Shop_Collection_Hero, Background, Final_Cinematic |

---

## Hero Video

The video at `public/assets/videos/boutique_ad.mp4`:
- Autoplays on load
- Loops continuously — never pauses or freezes
- Muted (required for autoplay)
- Covers full viewport

---

## Shop Link

SHOP NOW button → https://fashiondesigners.vercel.app/ (opens new tab)

To change: update `href` in `src/components/sections/ShopCollectionSection.tsx`

---

## Design System

**Colors:** Ivory `#FAF9F7` · Warm Black `#1A1917` · Gold `#C4A355` · Stone `#A89882`

**Fonts:** Playfair Display (headlines) · Cormorant Garamond (body/quotes) · Inter (labels/UI)

**Animation:** Lenis smooth scroll → GSAP ScrollTrigger parallax → Framer Motion reveals

---

## Structure

```
veloura-studio/
├── public/assets/
│   ├── images/    (17 editorial WebP images)
│   └── videos/    (boutique_ad.mp4)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── providers/LenisProvider.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── sections/ (7 section components)
│   └── lib/animations.ts
├── tailwind.config.ts
├── next.config.ts
└── package.json
```
