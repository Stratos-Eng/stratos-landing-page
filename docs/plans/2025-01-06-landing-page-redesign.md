# Stratos Landing Page Redesign: "The Drafting Table"

## Overview

A modernist redesign of the Stratos landing page that evokes "functional beauty" and "effortless scale." The design draws from mid-century industrial aesthetics—blueprint precision meets workshop warmth—positioning Stratos as the essential master tool for modern subcontractors.

**Design Philosophy:** Honest craftsmanship. The complex AI-driven takeoff process should feel as clean and essential as a well-designed tool.

---

## Color System

All colors use OKLCH for consistency with existing Tailwind v4 setup.

| Role | Name | OKLCH Value | Hex Approx | Usage |
|------|------|-------------|------------|-------|
| Background | Warm Parchment | `oklch(0.97 0.01 85)` | #F7F5F0 | Primary page background |
| Surface | Sandstone | `oklch(0.92 0.02 75)` | #EBE6DC | Cards, elevated surfaces |
| Text Primary | Charcoal Slate | `oklch(0.25 0.01 250)` | #2D2F33 | Headings, primary text |
| Text Secondary | Warm Gray | `oklch(0.55 0.01 80)` | #8A8680 | Body text, secondary elements |
| Accent Primary | Terracotta | `oklch(0.55 0.12 45)` | #C4614A | CTAs, highlights, emphasis |
| Accent Secondary | Sage | `oklch(0.65 0.08 145)` | #7A9B7A | Secondary accents, success |
| Grid/Lines | Blueprint Slate | `oklch(0.75 0.03 230)` | #A8B0BC | Grid pattern, borders |

---

## Typography

### Font Stack

- **Headings:** Fraunces (Google Fonts) — optical size variable, serif with personality
- **Body:** Geist Sans (existing) — clean, modern, excellent readability
- **Mono:** Geist Mono (existing) — technical callouts, data

### Type Scale

| Element | Size | Weight | Font | Tracking |
|---------|------|--------|------|----------|
| Hero headline | 72px / 80px LH | 600 | Fraunces | -0.02em |
| Section heading | 48px / 56px LH | 600 | Fraunces | -0.01em |
| Card heading | 24px / 32px LH | 500 | Fraunces | 0 |
| Body | 18px / 30px LH | 400 | Geist Sans | 0 |
| Small/Caption | 14px / 20px LH | 400 | Geist Sans | 0.01em |
| Overline | 12px / 16px LH | 500 | Geist Sans | 0.1em |

---

## The Scroll Journey

The emotional journey moves from "cluttered legacy software" to "clean, simplified workspace."

```
Position        Grid Opacity    Background
─────────────────────────────────────────────
Hero            100%            Warm Parchment + dense grid
↓ scroll
Features        50%             Grid fading
↓ scroll
What You Get    20%             Sandstone surfaces appear
↓ scroll
How It Works    5%              Nearly pure, minimal grid
↓ scroll
CTA             0%              Pure cream white, maximum space
```

The grid fades via CSS, tied to scroll position using Intersection Observer.

---

## Section Specifications

### Navigation Bar

- Position: Sticky, transparent initially
- On scroll: Backdrop blur (8px), warm parchment background fades in
- Height: 64px desktop, 56px mobile
- Content: Wordmark (left), nav links (center-right), CTA button (right)
- Links: Warm Gray → Terracotta on hover

### Hero Section

- Padding: py-32 lg:py-40
- Layout: Centered, single column, max-w-3xl
- Background: Warm parchment with blueprint grid (40px spacing)
- Content:
  - Overline: "PRECONSTRUCTION FOR SPECIALTY TRADES" (small caps, warm gray)
  - Headline: "Fewer misses. Tighter bids." (serif, charcoal)
  - Subhead: "From messy plan sets to defensible bid packages—automatically."
  - CTA: "Request a Demo" (terracotta button)
- Scroll indicator: Subtle animated chevron at bottom

### Social Proof Strip

- New section after hero
- Simple horizontal layout: "Trusted by X specialty subcontractors" or logo strip
- Styling: Warm gray, understated, 1px top/bottom borders

### Problem/Solution Section

- Two-column layout (stacks on mobile)
- Left column: The pain (denser feel, slightly darker)
- Right column: The resolution (more spacious, lighter)
- Serif headlines, clean body copy

### What You Get

- Three cards on sandstone surface
- Card styling:
  - 1px Blueprint Slate border
  - White/cream background
  - Padding: 32px
  - Border radius: 4px
- Hover: Border → Terracotta, subtle lift (translateY -2px)
- Icons: Line-weight only (1.5px stroke), no fills

### How It Works

- Horizontal timeline with connecting line
- Three steps as "stations"
- Step numbers: Terracotta circles with white text
- Layout: Horizontal on desktop, vertical on mobile
- No icons—typography-driven

### Trades We Cover

- Tabbed interface styled as "drawing sheet tabs"
- Tab styling:
  - Inactive: Transparent, warm gray text
  - Active: Sandstone fill, slate border, charcoal text
- Content area: Clean list with subtle grid marks

### FAQ

- Accordion with minimal styling
- Expand icons: Thin plus/minus lines (not chunky)
- Spacing: 24px between items
- Animation: Height 400ms + content fade 200ms

### Final CTA

- Maximum white space—the "arrival" moment
- Background: Lightest cream (#FDFCF9)
- Content: Single headline + button, centered
- No grid, no borders—pure openness

### Footer

- Minimal: Wordmark + copyright + essential links
- 1px top border (slate)
- Same warm parchment background
- No dark footer block

---

## Animation Specifications

### Global Settings

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 500ms;
```

### Interaction Table

| Element | Trigger | Animation |
|---------|---------|-----------|
| Grid opacity | Scroll | 100% → 0% over 150vh |
| Nav background | Scroll | Fade in after 100px scroll |
| Nav links | Hover | Color to terracotta, 200ms |
| CTA buttons | Hover | translateY(-2px) + shadow, 200ms |
| Cards | Hover | Border color + lift, 300ms |
| Cards | Enter viewport | Fade up (20px), opacity, staggered 100ms |
| Accordion | Expand | Height 400ms, content fade 200ms |
| Tab content | Switch | Crossfade 300ms |

### Scroll-Triggered Reveals

- Use Intersection Observer (no heavy libraries)
- Threshold: 0.1 (trigger when 10% visible)
- Animation: translateY(20px) → 0, opacity 0 → 1
- Duration: 500ms with staggered delays for groups

### What We Avoid

- No parallax effects
- No animated SVG illustrations
- No loading skeletons for static content
- No hover animations on touch devices

---

## Component Specifications

### Buttons

**Primary (Terracotta)**
```
Background: var(--color-terracotta)
Text: white
Padding: 16px 32px
Border-radius: 4px
Shadow: 0 2px 8px rgba(196, 97, 74, 0.2)
Hover: translateY(-2px), shadow increases
```

**Secondary (Outlined)**
```
Background: transparent
Border: 1px solid var(--color-blueprint-slate)
Text: var(--color-charcoal-slate)
Hover: border-color terracotta, text terracotta
```

### Cards

```
Background: white
Border: 1px solid var(--color-blueprint-slate)
Border-radius: 4px
Padding: 32px
Hover: border-color terracotta, translateY(-2px)
Transition: all 300ms var(--ease-smooth)
```

### Grid Pattern

```css
.grid-pattern {
  background-image:
    linear-gradient(var(--color-blueprint-slate) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-blueprint-slate) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

## Mobile Considerations

- Grid pattern: 30px spacing on mobile (down from 40px)
- Single column layouts throughout
- Tab navigation: Becomes horizontally scrollable or stacked cards
- Touch targets: 44px minimum
- Typography: Hero scales to 48px, section heads to 32px

---

## Implementation Notes

### Dependencies to Add

- `@fontsource/fraunces` or Google Fonts link for Fraunces

### Files to Modify

1. `app/globals.css` — New color tokens, grid pattern, animations
2. `app/page.tsx` — Restructured sections, new copy, layout changes
3. `app/layout.tsx` — Font imports
4. `components/ui/button.tsx` — Updated button variants
5. New: Intersection Observer hook for scroll animations

### Suggested Implementation Order

1. Color system and typography (globals.css, layout.tsx)
2. Navigation bar refinements
3. Hero section redesign
4. Grid pattern and scroll-fade effect
5. Section-by-section content updates
6. Card and button component updates
7. Animations and scroll reveals
8. Mobile responsive adjustments
9. Final polish and testing
