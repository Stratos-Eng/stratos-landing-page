"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DemoModal } from "@/components/demo-modal"
import { useScrollFade } from "@/hooks/use-scroll-fade"

const bidPlatforms = [
  { name: "BuildingConnected", logo: "/logos/buildingconnected.svg" },
  { name: "PlanHub", logo: "/logos/planhub.svg" },
  { name: "ConstructConnect", logo: "/logos/constructconnect.svg" },
  { name: "Dodge", logo: "/logos/dodge.svg" },
  { name: "iSqFt", logo: "/logos/isqft.svg" },
  { name: "Blue Book", logo: "/logos/bluebook.svg" },
  { name: "Procore", logo: "/logos/procore.svg" },
  { name: "SmartBid", logo: "/logos/smartbid.svg" },
]

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
              <br />
              More wins.
            </h1>
            <p className="text-lg lg:text-xl text-warm-gray leading-relaxed mb-10 max-w-2xl mx-auto">
              Your inbox is full of bid invites. Stratos connects to your existing platforms,
              qualifies opportunities with a quick takeoff, and delivers full bid packages—so
              you can bid more and win more.
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

      {/* Platform Logo Strip */}
      <section className="py-12 border-y border-blueprint-slate/20 bg-sandstone/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-center font-serif text-xl font-semibold text-charcoal mb-8">
            One place to manage bids from every source
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {bidPlatforms.map((platform) => (
              <img
                key={platform.name}
                src={platform.logo}
                alt={platform.name}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
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
            Everything you need to bid faster and win more—from opportunity to proposal.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Opportunities that fit</h3>
              <p className="text-warm-gray leading-relaxed">
                Projects matched to your trades, locations, and capacity—no more sifting through noise.
              </p>
            </div>
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Instant bid intelligence</h3>
              <p className="text-warm-gray leading-relaxed">
                Quick takeoffs and doc Q&A so you know what you're getting into before committing.
              </p>
            </div>
            <div className="p-8 bg-white border border-blueprint-slate/30 rounded card-hover">
              <div className="w-10 h-10 mb-6 text-warm-gray">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-charcoal">Defensible bid packages</h3>
              <p className="text-warm-gray leading-relaxed">
                Full takeoffs with quantities, specs, and sheet references—verified and ready to price.
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

          {/* Timeline - 5 steps */}
          <div className="relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-[calc(10%-12px)] right-[calc(10%-12px)] h-px bg-blueprint-slate/30" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  1
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-charcoal">Connect your bid sources</h3>
                <p className="text-warm-gray text-sm">
                  Link your BuildingConnected, PlanHub, or other accounts—we pull in your invites automatically.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  2
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-charcoal">See what's worth your time</h3>
                <p className="text-warm-gray text-sm">
                  We run a quick 25% takeoff on incoming bids so you can qualify fast.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  3
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-charcoal">Ask before you commit</h3>
                <p className="text-warm-gray text-sm">
                  Chat with the bid docs—scope questions, spec clarifications, deadline checks.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  4
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-charcoal">Get the full takeoff</h3>
                <p className="text-warm-gray text-sm">
                  For bids worth pursuing, we deliver a complete, verified takeoff.
                </p>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta text-white font-serif text-2xl font-semibold mb-6 relative z-10">
                  5
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-charcoal">Submit and win</h3>
                <p className="text-warm-gray text-sm">
                  A defensible bid package, ready to price and send.
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
                Which bid platforms do you connect to?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                We connect to all the major platforms—BuildingConnected, PlanHub, ConstructConnect,
                Dodge, iSqFt, Blue Book, Procore, SmartBid, and more. If you're getting bid invites
                from a platform, we can likely pull them in.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                How does the quick takeoff work?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                When a new bid invite comes in, we automatically run a 25% first-pass takeoff.
                This gives you enough information—rough quantities, scope overview, potential
                red flags—to decide if it's worth your time to pursue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                Can I ask questions about the bid documents?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Yes. You can chat directly with the bid docs to get instant answers—scope questions,
                spec clarifications, deadline checks, or anything else buried in the drawings and specs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                What file formats do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                We accept PDFs, DWG, DXF, RVT, and other common CAD formats. Just send us your
                architectural drawings, schedules, and signage documents—we'll handle the rest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                How fast can you turn around a full takeoff?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Most full takeoffs are delivered in 24-48 hours. The quick 25% takeoff for
                qualification happens within hours of a bid invite arriving.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-blueprint-slate/20 rounded bg-white px-6">
              <AccordionTrigger className="text-left font-medium text-charcoal hover:text-terracotta py-5 hover:no-underline">
                Can I try it first?
              </AccordionTrigger>
              <AccordionContent className="text-warm-gray pb-5">
                Yes. We offer a pilot project so you can see the full workflow—from bid intake
                through final takeoff—before committing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-charcoal">
            See it in action
          </h2>
          <p className="text-warm-gray mb-10 max-w-md mx-auto text-lg">
            Stop drowning in bid invites. Turn your inbox into a pipeline.
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
