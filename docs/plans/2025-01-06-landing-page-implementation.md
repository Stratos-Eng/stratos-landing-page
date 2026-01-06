# Stratos Landing Page Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Stratos landing page from standard SaaS styling to "The Drafting Table" aesthetic—blueprint precision meets workshop warmth with earth & stone colors.

**Architecture:** Incremental CSS-first approach. Update design tokens first, then progressively restyle each section. Add scroll-based interactions last. No new dependencies except Google Fonts.

**Tech Stack:** Next.js 14, React 19, Tailwind CSS v4, existing shadcn/ui components

---

## Task 1: Add Fraunces Font

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update layout.tsx to import Fraunces from Google Fonts**

Replace the entire file with:

```tsx
import type React from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stratos - Preconstruction for Specialty Trades",
  description: "Fewer misses. Tighter bids. AI-native preconstruction that turns messy plan sets into defensible bid packages.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

**Step 2: Verify the dev server runs without errors**

Run: `pnpm dev`
Expected: Server starts, no font loading errors in console

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Fraunces serif font for headings"
```

---

## Task 2: Update Color System

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace the color tokens in globals.css**

Replace the `:root` block (lines 7-41) with:

```css
:root {
  /* The Drafting Table - Earth & Stone palette */
  --background: oklch(0.97 0.01 85);        /* Warm Parchment */
  --foreground: oklch(0.25 0.01 250);       /* Charcoal Slate */
  --card: oklch(0.99 0.005 85);             /* White with warmth */
  --card-foreground: oklch(0.25 0.01 250);
  --popover: oklch(0.99 0.005 85);
  --popover-foreground: oklch(0.25 0.01 250);
  --primary: oklch(0.55 0.12 45);           /* Terracotta */
  --primary-foreground: oklch(0.99 0.005 85);
  --secondary: oklch(0.92 0.02 75);         /* Sandstone */
  --secondary-foreground: oklch(0.25 0.01 250);
  --muted: oklch(0.92 0.02 75);             /* Sandstone */
  --muted-foreground: oklch(0.55 0.01 80);  /* Warm Gray */
  --accent: oklch(0.65 0.08 145);           /* Sage */
  --accent-foreground: oklch(0.25 0.01 250);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.99 0.005 85);
  --border: oklch(0.75 0.03 230);           /* Blueprint Slate */
  --input: oklch(0.88 0.02 80);
  --ring: oklch(0.55 0.12 45);              /* Terracotta */
  --chart-1: oklch(0.55 0.12 45);
  --chart-2: oklch(0.65 0.08 145);
  --chart-3: oklch(0.55 0.15 220);
  --chart-4: oklch(0.65 0.1 260);
  --chart-5: oklch(0.6 0.15 280);
  --radius: 0.25rem;
  --sidebar: oklch(0.92 0.02 75);
  --sidebar-foreground: oklch(0.25 0.01 250);
  --sidebar-primary: oklch(0.55 0.12 45);
  --sidebar-primary-foreground: oklch(0.99 0.005 85);
  --sidebar-accent: oklch(0.92 0.02 75);
  --sidebar-accent-foreground: oklch(0.25 0.01 250);
  --sidebar-border: oklch(0.75 0.03 230);
  --sidebar-ring: oklch(0.55 0.12 45);

  /* Custom colors for the design */
  --warm-gray: oklch(0.55 0.01 80);
  --blueprint-slate: oklch(0.75 0.03 230);
  --terracotta: oklch(0.55 0.12 45);
  --sage: oklch(0.65 0.08 145);
  --sandstone: oklch(0.92 0.02 75);
  --parchment: oklch(0.97 0.01 85);
  --charcoal: oklch(0.25 0.01 250);
  --cream: oklch(0.98 0.005 80);

  /* Animation tokens */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
}
```

**Step 2: Update the @theme inline block to include new custom colors**

After the existing `--color-sidebar-ring` line (around line 118), add:

```css
  --color-warm-gray: var(--warm-gray);
  --color-blueprint-slate: var(--blueprint-slate);
  --color-terracotta: var(--terracotta);
  --color-sage: var(--sage);
  --color-sandstone: var(--sandstone);
  --color-parchment: var(--parchment);
  --color-charcoal: var(--charcoal);
  --color-cream: var(--cream);
  --font-serif: var(--font-fraunces);
```

**Step 3: Verify colors appear in browser**

Run: `pnpm dev`
Expected: Background should now appear as warm parchment (cream-ish) instead of pure white

**Step 4: Commit**

```bash
git add app/globals.css
git commit -m "feat: update color system to Earth & Stone palette"
```

---

## Task 3: Add Blueprint Grid Pattern

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace the existing grid-pattern classes**

Find the `.grid-pattern` section (around lines 131-141) and replace with:

```css
/* Blueprint grid pattern - The Drafting Table aesthetic */
.grid-pattern {
  background-image:
    linear-gradient(var(--blueprint-slate) 1px, transparent 1px),
    linear-gradient(90deg, var(--blueprint-slate) 1px, transparent 1px);
  background-size: 40px 40px;
}

.grid-pattern-dense {
  background-image:
    linear-gradient(var(--blueprint-slate) 1px, transparent 1px),
    linear-gradient(90deg, var(--blueprint-slate) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.4;
}

.grid-pattern-mobile {
  background-image:
    linear-gradient(var(--blueprint-slate) 1px, transparent 1px),
    linear-gradient(90deg, var(--blueprint-slate) 1px, transparent 1px);
  background-size: 30px 30px;
}

/* Gradient overlay for grid fade effect */
.grid-fade-overlay {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--parchment) 100%
  );
}
```

**Step 2: Verify grid pattern works**

Temporarily add `grid-pattern` class to a div in page.tsx to test
Expected: Fine blueprint-style grid lines should appear

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add blueprint grid pattern styles"
```

---

## Task 4: Create Scroll Animation Hook

**Files:**
- Create: `hooks/use-scroll-fade.ts`

**Step 1: Create the scroll fade hook**

```typescript
"use client"

import { useEffect, useState } from "react"

export function useScrollFade(maxScroll: number = 800) {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll)
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [maxScroll])

  return opacity
}
```

**Step 2: Verify file exists and has no syntax errors**

Run: `pnpm dev`
Expected: No errors related to the new hook

**Step 3: Commit**

```bash
git add hooks/use-scroll-fade.ts
git commit -m "feat: add useScrollFade hook for grid opacity"
```

---

## Task 5: Create Scroll Reveal Hook

**Files:**
- Create: `hooks/use-scroll-reveal.ts`

**Step 1: Create the Intersection Observer hook**

```typescript
"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}
```

**Step 2: Verify file exists**

Run: `pnpm dev`
Expected: No errors

**Step 3: Commit**

```bash
git add hooks/use-scroll-reveal.ts
git commit -m "feat: add useScrollReveal hook for entrance animations"
```

---

## Task 6: Add Animation Utility Classes

**Files:**
- Modify: `app/globals.css`

**Step 1: Add animation classes at the end of globals.css**

```css
/* Scroll reveal animations */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-slow) var(--ease-smooth),
              transform var(--duration-slow) var(--ease-smooth);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }

/* Smooth transitions for interactive elements */
.transition-smooth {
  transition: all var(--duration-base) var(--ease-smooth);
}

/* Card hover effects */
.card-hover {
  transition: transform var(--duration-base) var(--ease-smooth),
              border-color var(--duration-base) var(--ease-smooth),
              box-shadow var(--duration-base) var(--ease-smooth);
}

.card-hover:hover {
  transform: translateY(-2px);
  border-color: var(--terracotta);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Button hover lift */
.btn-lift {
  transition: transform var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth);
}

.btn-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(196, 97, 74, 0.25);
}

/* Nav scroll state */
.nav-scrolled {
  background-color: var(--parchment);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--blueprint-slate);
}

/* Serif heading utility */
.font-serif {
  font-family: var(--font-fraunces), Georgia, serif;
}
```

**Step 2: Verify CSS is valid**

Run: `pnpm dev`
Expected: No CSS errors

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add animation utility classes"
```

---

## Task 7: Redesign Navigation Bar

**Files:**
- Modify: `app/page.tsx`

**Step 1: Create the navigation scroll state hook usage and update nav**

Replace lines 1-40 (imports and nav section) with:

```tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DemoModal } from "@/components/demo-modal"
import { useScrollFade } from "@/hooks/use-scroll-fade"

export default function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false)
  const gridOpacity = useScrollFade(800)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-parchment text-charcoal">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "bg-parchment/95 backdrop-blur-sm border-b border-blueprint-slate/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="relative h-8 w-32">
              <Image
                src="/stratos-wordmark.png"
                alt="Stratos"
                fill
                className={`object-contain transition-all duration-300 ${
                  navScrolled ? "" : "brightness-0"
                }`}
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#how-it-works"
                className="text-sm text-warm-gray hover:text-terracotta transition-colors"
              >
                How it works
              </a>
              <a
                href="#trades"
                className="text-sm text-warm-gray hover:text-terracotta transition-colors"
              >
                Trades
              </a>
              <a
                href="#faq"
                className="text-sm text-warm-gray hover:text-terracotta transition-colors"
              >
                FAQ
              </a>
            </div>
            <DemoModal
              trigger={
                <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 btn-lift">
                  Request a demo
                </Button>
              }
            />
          </div>
        </div>
      </nav>
```

**Step 2: Verify navigation renders**

Run: `pnpm dev`
Expected: Nav should be fixed, transparent at top, gains background on scroll

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign navigation with scroll state"
```

---

## Task 8: Redesign Hero Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the hero section (after nav closing tag)**

Find the first `<section>` after the nav and replace it with:

```tsx
      {/* Hero Section with Blueprint Grid */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Blueprint grid background */}
        <div
          className="absolute inset-0 grid-pattern pointer-events-none"
          style={{ opacity: gridOpacity * 0.4 }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-warm-gray mb-6 tracking-[0.2em] uppercase">
              Preconstruction for Specialty Trades
            </p>
            <h1 className="font-serif text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-charcoal">
              Fewer misses.
              <br />
              Tighter bids.
            </h1>
            <p className="text-lg lg:text-xl text-warm-gray leading-relaxed mb-10 max-w-2xl mx-auto">
              From messy plan sets to defensible bid packages—automatically.
              We turn documents into traceable takeoffs so you can focus on winning work.
            </p>
            <DemoModal
              trigger={
                <Button size="lg" className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-6 text-base btn-lift">
                  Request a demo
                </Button>
              }
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-warm-gray/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
```

**Step 2: Verify hero renders with grid**

Run: `pnpm dev`
Expected: Centered hero with serif heading, grid fades as you scroll

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign hero section with blueprint grid"
```

---

## Task 9: Add Social Proof Strip

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add social proof section after hero**

Insert after the hero section closing tag:

```tsx
      {/* Social Proof Strip */}
      <section className="py-8 border-y border-blueprint-slate/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-warm-gray">
            Trusted by specialty subcontractors across glazing and signage
          </p>
        </div>
      </section>
```

**Step 2: Verify it appears**

Run: `pnpm dev`
Expected: Simple strip appears between hero and features

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add social proof strip"
```

---

## Task 10: Redesign Features Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the features/key points section**

Find the section with "Fast turnaround", "Human-verified", "Excel output" and replace:

```tsx
      {/* Value Props Section */}
      <section className="py-20 lg:py-28 bg-sandstone/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="font-serif text-xl font-semibold mb-2 text-charcoal">Fast turnaround</p>
              <p className="text-warm-gray">Most projects delivered in 24-48 hours</p>
            </div>
            <div>
              <p className="font-serif text-xl font-semibold mb-2 text-charcoal">Human-verified</p>
              <p className="text-warm-gray">Every line item checked before delivery</p>
            </div>
            <div>
              <p className="font-serif text-xl font-semibold mb-2 text-charcoal">Excel output</p>
              <p className="text-warm-gray">Drop it straight into your estimate</p>
            </div>
          </div>
        </div>
      </section>
```

**Step 2: Verify styling**

Run: `pnpm dev`
Expected: Clean three-column layout with serif headings on sandstone background

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign value props section"
```

---

## Task 11: Redesign "What You Get" Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the "What you get" section with cards**

```tsx
      {/* What You Get Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-charcoal">
            What you get
          </h2>
          <p className="text-warm-gray mb-12 max-w-xl">
            A takeoff you can actually use—organized, accurate, and ready to price.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Quantities by mark/type</h3>
              <p className="text-warm-gray leading-relaxed">
                Counts pulled from schedules and plans, organized how you need them.
              </p>
            </div>
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Specs that affect pricing</h3>
              <p className="text-warm-gray leading-relaxed">
                Finishes, hardware, performance requirements—the details that matter.
              </p>
            </div>
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Sheet references</h3>
              <p className="text-warm-gray leading-relaxed">
                Know exactly where each item came from if you need to double-check.
              </p>
            </div>
          </div>
        </div>
      </section>
```

**Step 2: Verify cards render with hover effect**

Run: `pnpm dev`
Expected: Three cards with line icons, border turns terracotta on hover

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign What You Get section with card hover effects"
```

---

## Task 12: Redesign Trades Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the Trades section**

```tsx
      {/* Trades Section */}
      <section id="trades" className="py-20 lg:py-28 bg-sandstone/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-charcoal">
            Trades we cover
          </h2>
          <p className="text-warm-gray mb-12">Starting with glazing and signage. More coming soon.</p>
          <Tabs defaultValue="glazing" className="w-full">
            <TabsList className="mb-8 bg-transparent border-b border-blueprint-slate/20 rounded-none p-0 h-auto">
              <TabsTrigger
                value="glazing"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:text-charcoal px-6 py-3 text-warm-gray"
              >
                Glazing
              </TabsTrigger>
              <TabsTrigger
                value="signage"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:text-charcoal px-6 py-3 text-warm-gray"
              >
                Signage
              </TabsTrigger>
            </TabsList>
            <TabsContent value="glazing" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-charcoal">
                    Windows, doors, curtain wall, storefronts.
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    We pull from your schedules and details to build a complete count by mark, type,
                    and size—with notes on glass types, hardware, and performance specs.
                  </p>
                </div>
                <div className="bg-white border border-blueprint-slate/30 rounded p-6">
                  <p className="text-sm font-medium text-warm-gray mb-4 tracking-wide uppercase">
                    Sample columns
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mark", "Type", "Size", "Qty", "Floor", "Sheet", "Notes"].map((col) => (
                      <span
                        key={col}
                        className="px-3 py-1.5 bg-sandstone/50 border border-blueprint-slate/20 rounded text-sm font-mono text-charcoal"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="signage" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 text-charcoal">
                    Interior, exterior, wayfinding, ADA.
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    We build a sign register from your documents—by ID, type, location, and
                    quantity—with mounting and material notes where available.
                  </p>
                </div>
                <div className="bg-white border border-blueprint-slate/30 rounded p-6">
                  <p className="text-sm font-medium text-warm-gray mb-4 tracking-wide uppercase">
                    Sample columns
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Sign ID", "Type", "Message", "Location", "Qty", "Mount", "Notes"].map((col) => (
                      <span
                        key={col}
                        className="px-3 py-1.5 bg-sandstone/50 border border-blueprint-slate/20 rounded text-sm font-mono text-charcoal"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
```

**Step 2: Verify tabs work with new styling**

Run: `pnpm dev`
Expected: Tabs styled with underline, terracotta active state

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign Trades section with styled tabs"
```

---

## Task 13: Redesign How It Works Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace How It Works section with timeline**

```tsx
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-16 text-charcoal">
            How it works
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%-12px)] right-[calc(16.67%-12px)] h-px bg-blueprint-slate/30" />

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="relative text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  1
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Send your plans</h3>
                <p className="text-warm-gray">
                  Email us your PDFs or upload through our portal. We accept architectural drawings,
                  schedules, and specs.
                </p>
              </div>
              <div className="relative text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  2
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">We do the takeoff</h3>
                <p className="text-warm-gray">
                  Our team extracts quantities and specs from your documents, then verifies every
                  line item before delivery.
                </p>
              </div>
              <div className="relative text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  3
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">You get Excel</h3>
                <p className="text-warm-gray">
                  A clean spreadsheet organized by mark and type, ready to drop into your estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
```

**Step 2: Verify timeline renders**

Run: `pnpm dev`
Expected: Three steps with terracotta numbered circles, connecting line on desktop

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign How It Works with timeline layout"
```

---

## Task 14: Redesign FAQ Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace FAQ section**

```tsx
      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-sandstone/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-12 text-charcoal">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5">
                How fast can you turn around a project?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Most projects are delivered in 24-48 hours. We can do rush turnarounds if you're
                up against a bid deadline—just let us know.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5">
                What file formats do you need?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                PDFs work best. Just send us your architectural drawings, schedules, and any
                signage documents. We'll handle the rest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5">
                How does pricing work?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Per-project, based on drawing count and complexity. Request a demo and we'll
                give you a quote for your typical project size.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5">
                How do you do the takeoffs?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                We use AI to speed up extraction, then our team reviews and verifies everything
                before delivery. You get accuracy without the wait.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5">
                Can I try it first?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Yes. We offer a pilot project so you can see the output quality before committing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
```

**Step 2: Verify accordion styling**

Run: `pnpm dev`
Expected: Cards with spacing, hover color on triggers

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign FAQ section with card-style accordions"
```

---

## Task 15: Redesign Final CTA Section

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace final CTA section**

```tsx
      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-charcoal">
            Ready to bid more projects?
          </h2>
          <p className="text-warm-gray mb-10 max-w-md mx-auto text-lg">
            Get your time back. Let us handle the takeoffs.
          </p>
          <DemoModal
            trigger={
              <Button
                size="lg"
                className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-6 text-base btn-lift"
              >
                Request a demo
              </Button>
            }
          />
        </div>
      </section>
```

**Step 2: Verify CTA renders with maximum breathing room**

Run: `pnpm dev`
Expected: Light cream background, generous padding, centered content

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign final CTA section"
```

---

## Task 16: Redesign Footer

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace footer**

```tsx
      {/* Footer */}
      <footer className="py-12 border-t border-blueprint-slate/20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative h-6 w-24">
              <Image src="/stratos-wordmark.png" alt="Stratos" fill className="object-contain" />
            </div>
            <p className="text-sm text-warm-gray">© 2025 Stratos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
```

**Step 2: Verify footer styling**

Run: `pnpm dev`
Expected: Minimal footer with warm parchment background, subtle top border

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign footer with minimal styling"
```

---

## Task 17: Add Tailwind Custom Colors Config

**Files:**
- Modify: `app/globals.css`

**Step 1: Ensure Tailwind recognizes our custom colors**

Add to the `@theme inline` block (if not already present):

```css
  /* Ensure custom colors work as Tailwind utilities */
  --color-warm-gray: var(--warm-gray);
  --color-blueprint-slate: var(--blueprint-slate);
  --color-terracotta: var(--terracotta);
  --color-sage: var(--sage);
  --color-sandstone: var(--sandstone);
  --color-parchment: var(--parchment);
  --color-charcoal: var(--charcoal);
  --color-cream: var(--cream);
```

**Step 2: Verify all color utilities work**

Run: `pnpm dev`
Expected: `bg-parchment`, `text-charcoal`, `border-terracotta` etc. all work

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: ensure custom color utilities work in Tailwind"
```

---

## Task 18: Final Polish and Build Verification

**Files:**
- All modified files

**Step 1: Run the build to check for errors**

Run: `pnpm build`
Expected: Build completes without errors

**Step 2: Run linting**

Run: `pnpm lint`
Expected: No lint errors (warnings are okay)

**Step 3: Test in browser**

Run: `pnpm dev`
Manually verify:
- [ ] Navigation: Fixed, transparent → opaque on scroll
- [ ] Hero: Grid visible, fades on scroll, serif heading
- [ ] All sections have proper Earth & Stone colors
- [ ] Cards have hover effects (border → terracotta)
- [ ] Buttons have lift effect on hover
- [ ] Timeline numbers are terracotta circles
- [ ] FAQ items are card-styled
- [ ] Final CTA has maximum white space
- [ ] Mobile responsive (test at 375px width)

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final polish and build verification"
```

---

## Summary

This plan transforms the Stratos landing page through 18 incremental tasks:

1. **Tasks 1-3:** Foundation (fonts, colors, grid pattern)
2. **Tasks 4-6:** Animation infrastructure (hooks, utility classes)
3. **Tasks 7-8:** Navigation and Hero redesign
4. **Tasks 9-16:** Section-by-section content updates
5. **Tasks 17-18:** Polish and verification

Each task is self-contained and produces a working state. Commit after each task to maintain easy rollback points.
