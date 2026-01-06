"use client"

import { useState, useEffect } from "react"
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
            <img
              src="/stratos-wordmark.svg"
              alt="Stratos"
              className="h-7 w-auto"
            />
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
                <Button size="sm" className="bg-terracotta hover:bg-terracotta/90 text-white btn-lift">
                  Request a demo
                </Button>
              }
            />
          </div>
        </div>
      </nav>

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

      {/* Social Proof Strip */}
      <section className="py-8 border-y border-blueprint-slate/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-warm-gray">
            Trusted by specialty subcontractors across glazing and signage
          </p>
        </div>
      </section>

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
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:text-charcoal data-[state=active]:shadow-none px-6 py-3 text-warm-gray"
              >
                Glazing
              </TabsTrigger>
              <TabsTrigger
                value="signage"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-terracotta data-[state=active]:bg-transparent data-[state=active]:text-charcoal data-[state=active]:shadow-none px-6 py-3 text-warm-gray"
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
                  Email us your PDFs, DWGs, or other CAD files. We accept architectural drawings,
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-sandstone/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-12 text-charcoal">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                How fast can you turn around a project?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Most projects are delivered in 24-48 hours. We can do rush turnarounds if you're
                up against a bid deadline—just let us know.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                What file formats do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                We accept PDFs, DWG, DXF, RVT, and other common CAD formats. Just send us your
                architectural drawings, schedules, and signage documents—we'll handle the rest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                How does pricing work?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Per-project, based on drawing count and complexity. Request a demo and we'll
                give you a quote for your typical project size.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                How do you do the takeoffs?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                We use AI to speed up extraction, then our team reviews and verifies everything
                before delivery. You get accuracy without the wait.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                Can I try it first?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Yes. We offer a pilot project so you can see the output quality before committing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="py-12 border-t border-blueprint-slate/20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img
              src="/stratos-wordmark.svg"
              alt="Stratos"
              className="h-5 w-auto"
            />
            <p className="text-sm text-warm-gray">© 2026 Stratos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
