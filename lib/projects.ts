export type ProjectTag = string;

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectShot {
  src: string;
  alt: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  client: string;
  location: string;
  status: string;
  tags: ProjectTag[];
  hook: [string, string];
  liveUrl?: string;
  figmaUrl?: string;
  figmaEmbedUrl?: string;
  cover: string;
  gallery: ProjectShot[];
  accent: string;
  accentSecondary: string;
  metrics: ProjectMetric[];
  narrative: string;
  markdown: string;
}

export const projects: Project[] = [
  {
    id: "dar-senosi",
    slug: "dar-senosi",
    title: "Dar Senosi",
    subtitle: "دار سنوسي",
    year: "2026",
    role: "Sole freelance developer & designer",
    client: "Dar Senosi",
    location: "Maadi, Cairo, Egypt",
    status: "Live",
    tags: ["Shopify", "Full-Stack", "UI/UX", "E-Commerce", "Liquid"],
    hook: [
      "A luxury antique boutique needed a gallery-grade Shopify storefront — not a stock theme with a logo swap.",
      "I designed and engineered a dual-commerce system: checkout for accessible pieces, WhatsApp reservation for one-of-ones.",
    ],
    liveUrl: "https://darsenosi.com",
    cover: "/projects/dar-senosi/homepage.jpg",
    gallery: [
      {
        src: "/projects/dar-senosi/homepage.jpg",
        alt: "Dar Senosi homepage hero with antique doors and vintage Mercedes",
        label: "Homepage hero",
      },
      {
        src: "/projects/dar-senosi/homepage-full.jpg",
        alt: "Full homepage scroll of Dar Senosi storefront",
        label: "Homepage scroll",
      },
      {
        src: "/projects/dar-senosi/doors.jpg",
        alt: "Doors collection grid with sidebar filters",
        label: "Collections — Doors",
      },
      {
        src: "/projects/dar-senosi/pdp.jpg",
        alt: "Product detail page for Al-Andalus mirror",
        label: "Product detail",
      },
      {
        src: "/projects/dar-senosi/artists.jpg",
        alt: "Artists index page",
        label: "Artists",
      },
      {
        src: "/projects/dar-senosi/experiences.jpg",
        alt: "Experiences booking page",
        label: "Experiences",
      },
      {
        src: "/projects/dar-senosi/collections.jpg",
        alt: "All collections overview",
        label: "Collections index",
      },
      {
        src: "/projects/dar-senosi/homepage-mobile.jpg",
        alt: "Dar Senosi homepage on mobile",
        label: "Mobile homepage",
      },
      {
        src: "/projects/dar-senosi/mockup-homepage.jpg",
        alt: "Original SPA design mockup for Dar Senosi homepage",
        label: "Design mockup",
      },
    ],
    accent: "#487a87",
    accentSecondary: "#e8aa57",
    metrics: [
      { label: "Custom sections", value: "16" },
      { label: "Products imported", value: "109" },
      { label: "Smart collections", value: "11" },
      { label: "Timeline", value: "~6 wks" },
    ],
    narrative:
      "Dar Senosi is a Cairo-based antique boutique specialising in architectural heritage pieces. I designed and built their full Shopify storefront from scratch — starting with a bespoke SPA mockup, then engineering a custom Liquid theme system on top of Atelier's base. The most distinctive technical feature is a metafield-driven dual-commerce system: standard checkout for accessible pieces, WhatsApp reservation flow for one-of-one pieces, and archived sold pieces — all managed through Shopify metafields with a client-side CTA swap.",
    markdown: `# Dar Senosi — Portfolio Case Study
### Full-Stack Shopify E-Commerce Build | Freelance Project

## Project Overview

**Project name:** Dar Senosi دار سنوسي  
**Type:** Custom Shopify storefront — antique & architectural heritage boutique  
**Location:** Maadi, Cairo, Egypt  
**Store domain:** [darsenosi.com](https://darsenosi.com)  
**Role:** Sole freelance developer & designer (full-stack: UX design → Liquid/CSS/JS → Shopify configuration → integrations → deployment)  
**Contract type:** Fixed-price freelance  
**Timeline:** Design → Build → Launch across ~6 weeks  
**Theme base:** Shopify Atelier premium theme (custom DS design layered entirely on top)

## Client Brief & Business Context

Dar Senosi is a high-end antique boutique based in Maadi, Cairo, specialising in:

- **Architectural antiques** — mashrabiya screens, antique doors, windows, tiles, marble
- **Heritage furniture** — restored period Egyptian and Levantine pieces
- **Artist collaborations** — limited work from Cairo-based contemporary artists who work with antique materials

### Dual-Commerce Model

Dar Senosi operates a dual-commerce model that required custom engineering:

| Mode | Trigger | Flow |
|---|---|---|
| **Direct Purchase** | Products priced and in-stock, low-to-mid value | Standard Shopify checkout |
| **Reservation** | High-value, one-of-a-kind, or bespoke pieces | WhatsApp conversation → private booking |
| **Sold** | Sold pieces kept visible for reference/discovery | "Sold" badge, no add-to-cart |

This is not a standard Shopify flow — the entire purchase CTA system was custom-engineered using Liquid metafields and a JavaScript CTA-swap layer.

### Catalogue

- **~120 products** at launch
- **11 smart collections** (Doors, Mashrabiya, Windows, Furniture, Lighting, Artwork, Various, Tiles, Marble, Frames, Wood)
- **3 featured artists** with full bio pages and dedicated collections
- Each product carries 7+ custom metafields

The brand needed to feel like a luxury editorial destination — closer to a gallery or design magazine than a typical e-commerce shop. The design brief was explicit: no generic Shopify template aesthetics, dark editorial palette, Arabic-inflected typography.

## Design System

The entire visual identity was designed by Omar Medhat and implemented as a bespoke CSS design system layered on top of the Atelier theme base. A full SPA mockup was produced before a single line of Shopify code was written — the mockup was treated as the single source of visual truth.

### Brand Palette

| Name | Hex | Usage |
|---|---|---|
| Paper | \`#fdfaf2\` | Primary background — warm off-white |
| Paper-2 | \`#f5ece0\` | Secondary surface, card backgrounds |
| Ink | \`#34210f\` | Primary text — deep warm brown |
| Espresso | \`#56301f\` | Headings, emphasis text |
| Muted | \`#6b5a45\` | Secondary/caption text |
| Blue (Primary) | \`#487a87\` | CTA buttons, footer background |
| Gold | \`#e8aa57\` | Decorative accents, form submit |
| Olive | \`#6c7f4a\` | Artist carousel accents |
| Heritage Red | \`#a4342a\` | Artist card alternate |

### Design Principles

- **Warmth over sterility** — warm palette, organic type, no cold greys
- **Editorial density** — sections breathe but are information-rich
- **Antique legitimacy** — every section has a material, textural quality
- **Mobile-first parity** — intentional at 375px and 1440px
- **Dark header transparency** — header overlays the hero, transitions to solid on scroll

## Technical Architecture

| Layer | Technology |
|---|---|
| Platform | Shopify (Standard plan) |
| Theme base | Atelier (premium Shopify theme) |
| Templating | Liquid (Shopify 2.0 sections + blocks) |
| Styling | CSS3 — custom \`ds-brand.css\` (3,000+ lines) |
| JavaScript | Vanilla ES6+ |
| Data model | Shopify metafields (7 per product) + metaobjects |
| Checkout | Shopify native checkout |
| Payments | Paymob + manual bank transfer |
| Analytics | Google Analytics 4 + Meta Pixel |

The entire site uses **Shopify 2.0 section/block architecture** — all content is JSON-driven and fully editable via the Theme Customizer with zero code changes required.

### Custom Sections Built from Scratch

- **DS Artists Carousel** — metaobject-driven artist showcase with auto-scroll and colour-coded cards
- **DS Experiences** — 6 experience chips with dynamic copy and Calendly prefill redirect
- **DS Footer** — blue editorial footer with newsletter, connect, and navigation columns
- **DS Search** — custom full-page search with portrait card grid
- **DS Thank-You Page** — gated Calendly confirmation with UUID validation
- **DS Brand JS** — global product CTA management for checkout / reservation / sold states

## Commerce Logic & Dual-Flow System

Shopify has one checkout flow. Dar Senosi needed three distinct purchase experiences without a custom app.

A metafield-driven CTA swap system reads \`custom.purchase_mode\` and \`custom.availability_state\` on every PDP:

- **Sold** → "Sold — Archive" badge, no CTA
- **Reserved** → "Currently Reserved" badge, no CTA
- **Reservation mode** → WhatsApp Reserve button with product context pre-filled
- **Checkout mode** → native add-to-cart / buy buttons

## Integrations

- **Calendly** — showroom experience booking with prefilled fields and gated thank-you page
- **WhatsApp** — floating button + reservation CTAs with product context
- **Google Analytics 4** — pageviews, collection/product views, checkout funnel
- **Paymob** — Egyptian payment gateway (Visa/Mastercard, Vodafone Cash, Fawry)
- **Instagram** — \`@darsenosi\` linked from footer and floating nav

## Key Challenges & Solutions

### Dual CTA Without a Custom App
Metafield-driven JS CTA swap. \`theme.liquid\` injects \`window.dsProductMeta\` JSON per product page. \`ds-brand.js\` surgically replaces Atelier's button component after DOMContentLoaded.

### Calendly Booking Gate Without Paid Plan
Used Calendly's free "Redirect to external site" with event details pass-through. Thank-you page validates \`invitee_uuid\` and renders personalised confirmation.

### Custom Fonts Across Shopify's CDN
All \`@font-face\` declarations use Liquid \`asset_url\` filters — no hardcoded CDN paths.

### Artist Pages Without Metaobject URL Routing
Static Shopify Pages with custom templates that read metaobjects by handle — clean URLs, no conflicts.

## Project Metrics

| Metric | Value |
|---|---|
| Custom Liquid sections written | 16 |
| Custom CSS lines (\`ds-brand.css\`) | ~3,000 |
| Products imported | 109 |
| Smart collections created | 11 |
| Artist metaobject entries | 3 |
| Custom metafields per product | 7 |
| Integrations | 5 |
| Templates created | 14 |
| Security findings resolved | 4 |

## Role Summary

- **Title:** Freelance Full-Stack Developer & UX Designer
- **Deliverables:** Brand design system, SPA prototype, Shopify theme (Liquid/CSS/JS), data modelling, integrations, deployment
- **Contract:** Fixed-price, sole developer

*Live site: [darsenosi.com](https://darsenosi.com)*`,
  },
  {
    id: "rhb-hospitality",
    slug: "rhb-hospitality",
    title: "RHB Hospitality",
    subtitle: "Multi-Brand Website Redesign",
    year: "2026",
    role: "Senior Freelance UI/UX Designer + Design Architect",
    client: "RHB Hospitality",
    location: "Riyadh & Al Madina, Saudi Arabia",
    status: "~85% complete",
    tags: ["UI/UX", "Figma", "Multi-Brand", "Bilingual", "RTL"],
    hook: [
      "One parent hospitality brand, three distinct sub-brands — each needing its own visual language on a shared platform.",
      "I architected full LTR/RTL parity across 200+ frames, scripting sitewide changes that would have taken weeks by hand.",
    ],
    figmaUrl: "https://www.figma.com/file/xHfKFNChyEk7aiBPuty4VN/RHB---Website",
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxHfKFNChyEk7aiBPuty4VN%2FRHB---Website",
    cover: "/projects/rhb/prototype-desktop.jpg",
    gallery: [
      {
        src: "/projects/rhb/prototype-desktop.jpg",
        alt: "RHB Hospitality homepage hero prototype",
        label: "Homepage hero",
      },
      {
        src: "/projects/rhb/frame-about.jpg",
        alt: "RHB about and brand positioning section",
        label: "Brand positioning",
      },
      {
        src: "/projects/rhb/frame-brands.jpg",
        alt: "RHB multi-brand platform section",
        label: "Sub-brand system",
      },
      {
        src: "/projects/rhb/frame-mid.jpg",
        alt: "RHB mid-page editorial section",
        label: "Editorial mid-page",
      },
      {
        src: "/projects/rhb/frame-lower.jpg",
        alt: "RHB lower page content section",
        label: "Lifestyle / amenities",
      },
      {
        src: "/projects/rhb/frame-footer.jpg",
        alt: "RHB footer and closing sections",
        label: "Footer system",
      },
      {
        src: "/projects/rhb/prototype-mobile.jpg",
        alt: "RHB Hospitality prototype on mobile",
        label: "Mobile breakpoint",
      },
      {
        src: "/projects/rhb/artwork.jpg",
        alt: "RHB brand artwork with Saudi plate visual",
        label: "Brand artwork",
      },
      {
        src: "/projects/rhb/bahi-building.jpg",
        alt: "Bahi property building photography",
        label: "Bahi property",
      },
    ],
    accent: "#a91f23",
    accentSecondary: "#627057",
    metrics: [
      { label: "Breakpoints", value: "3" },
      { label: "Languages", value: "EN + AR" },
      { label: "Sub-brands", value: "3" },
      { label: "Frames scoped", value: "200+" },
    ],
    narrative:
      "A complete, ground-up website redesign for RHB Hospitality, a Saudi Arabian serviced-apartment brand operating across Riyadh and Al Madina. The engagement covers the parent platform and three distinct sub-brands — Bab Alsalam, Bahi, and Musafer — each with its own visual identity, typeface system, and tone of voice. Scope includes full multi-brand design architecture, bilingual LTR/RTL builds across three breakpoints, and Figma-plugin scripting to automate high-precision changes across 100+ frames simultaneously.",
    markdown: `# RHB Hospitality — Full-Stack Website Redesign
## Portfolio Documentation · Freelance UI/UX Design Engagement

## Overview

A complete, ground-up website redesign for **RHB Hospitality**, a Saudi Arabian serviced-apartment brand operating across Riyadh and Al Madina. The engagement covers the parent platform and three distinct sub-brands — Bab Alsalam, Bahi, and Musafer — each with its own visual identity, typeface system, and tone of voice.

The scope includes full multi-brand design architecture, real-content integration from client-supplied brand documents, a bilingual LTR/RTL build across three breakpoints (mobile 375, tablet 768, desktop 1440), component library management in the Figma Core Library, and Figma-plugin scripting to automate large-scale, high-precision changes across 100+ frames simultaneously.

**Client:** RHB Hospitality, Saudi Arabia  
**Role:** Senior Freelance UI/UX Designer + Design Architect  
**Format:** Figma design files + Dev Mode handoff + written specs  
**Deadline:** 27 July 2026  
**Status:** ~85% complete, active

## Brand System

### Parent — RHB

| Token | Value |
|---|---|
| Background White | \`#fffdf8\` |
| Black | \`#000000\` |
| Beige | \`#f4f3e9\` |
| Red (primary) | \`#a91f23\` |
| Heading font | Catavalo Bold |
| Body font | Degular Display |
| Stats | 61+ units, 3 branches in Riyadh, 4.8 rating, est. 2022 |

### Sub-brand — Bab Alsalam (Heritage / Spiritual, Al Madina)

| Token | Value |
|---|---|
| Rawdah Green | \`#627057\` |
| Madinah Stone Beige | \`#f3eee3\` |
| English heading | Baskervville Regular |
| Arabic title | Aref Ruqaa Regular / Bold |
| Arabic body | 29LT Azer TEST |
| Taglines | "Rooted in Peace" / أصلها السلام |
| Motifs | 8-point star + dove |

### Sub-brand — Bahi (Lifestyle, Riyadh)

| Token | Value |
|---|---|
| Purple | \`#9c95f4\` |
| Light Purple | \`#cec5fb\` |
| Yellow-Green | \`#f4ffc5\` |
| Properties | Al Narjis, Qurtubah, Qurtubah Suites |

### Sub-brand — Musafer (Wellness)

Gated — no real brand guidelines received; excluded from active Figma work.

## Technical Approach

### Bidirectional Parity

Every page is built in both LTR (English) and RTL (Arabic), at all 3 breakpoints. RTL builds are true mirrors, not just text-direction flips:

- Column order reversed in grids and tables
- Image/text sides swapped in split-column layouts
- Auto-layout rows reversed
- Footer alignment fixed sitewide with \`counterAxisAlignItems='MAX'\` across 80+ instances

### Breakpoints

| Name | Width | Padding |
|---|---|---|
| Mobile | 375px | 24px |
| Tablet | 768px | 32px |
| Desktop | 1440px | 80px |

## Pages — Completed Work

### Homepage
**Status: Complete — LTR + RTL, all 3 breakpoints**

Sections: Nav → Hero → QuoteBreak/Philosophy → What is RHB → StayWithUs/Switcher → QuoteBreak/Wanderlust → LifestyleActivities → FeaturedAmenities → CorporateStaysTeaser → Footer

### Corporate Stays
**Status: Complete — LTR + RTL, all 3 breakpoints**

13-section redesign including dark editorial branch index, unit types (no prices — client requirement), property detail pages, branch comparison table, business traveler perks, and inquiry form. All Arabic content sourced from the published Corporate Sales Profile PDF.

### Grow With RHB
**Status: Complete — LTR + RTL, all 3 breakpoints**

Multi-brand platform pillars with staircase indent, O-C-O executive summary framework (Observe/Create/Operate), partnership rationale, and conversation-start inquiry form.

### Bab Alsalam Landing
**Status: Complete — LTR + RTL, all 3 breakpoints**

Heritage/spiritual hospitality brand serving pilgrims in Al Madina. Designed with cultural reverence, real Arabic typography (Aref Ruqaa + 29LT Azer), and content grounded in Islamic heritage landmarks — Al Masjid an-Nabawi, Jannat al-Baqi, Quba Mosque.

Presence copy: *"People do not come to Madinah to stay somewhere nice. They come for something that cannot be found anywhere else on earth. Heritage is in the design. Calm is in the service. Family is in the layout. Trust is in every operational decision made before a guest ever arrives."*

### Utility Pages & Neighbourhood Heroes
Contact, FAQ, Terms, Privacy, Data Retention, and Neighbourhood Heroes — complete LTR + RTL across all breakpoints.

### Bahi Landing
LTR and RTL complete across all 3 breakpoints. PropertyDetail and PropertyIndex work ongoing.

## Design System — Shared Conventions

- **Nav:** 44px circle "Book Now" button standardised across breakpoints and languages
- **Footer:** identical column structure (Stay / Our DNA / Find Out More / Our Locations) with full RTL mirroring
- **Section headers:** EYEBROW + Section Title pattern throughout
- **CO Binder Quote-Breaks:** editorial negative-space sections (~74% empty) reverse-engineered from a physical print binder

## Known Bugs Fixed

- **White-100% fill behind text** — swept ~700+ instances sitewide via script
- **RTL footer alignment** — fixed 33+ instances with proper counter-axis anchoring
- **RTL bullet points** — reordered and hug-width fixed on Grow With RHB
- **Submit button hidden under footer** — auto-sizing forms restored correct layout

## Scripting Approach

All large-scale changes executed via Figma plugin scripts rather than manual editing:

- Mass sweeps for sitewide fixes (footer alignment, white-fill correction, Stay column update across 80+ instances)
- \`parent.insertChild(index, node)\` for correct auto-layout insertion
- \`layoutPositioning='ABSOLUTE'\` for pillar-stagger effects
- \`primaryAxisSizingMode='AUTO'\` for self-sizing forms

## What Makes This Work

1. **Multi-brand architecture** — one parent, three completely distinct sub-brands on a shared platform
2. **True bilingual parity** — full geometric mirroring across 200+ frames, not surface-level flips
3. **Systematic scripting** — changes affecting 80 footer instances done in one operation
4. **CO binder inspiration** — visual language reverse-engineered from print binder negative-space aesthetics
5. **Bab Alsalam as showcase** — heritage hospitality designed with cultural reverence and real Arabic typography

*Documentation compiled: July 2026*`,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: string): {
  prev: Project | null;
  next: Project | null;
  index: number;
} {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return { prev: null, next: null, index: -1 };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
    index,
  };
}
