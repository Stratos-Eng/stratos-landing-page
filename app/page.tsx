"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileSpreadsheet, CheckCircle, ClipboardList } from "lucide-react"
import { DemoModal } from "@/components/demo-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - keeping existing header */}
      <nav className="bg-zinc-800 border-b border-zinc-700">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="relative h-8 w-32">
              <Image src="/stratos-wordmark.png" alt="Stratos" fill className="object-contain brightness-0 invert" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
                How it works
              </a>
              <a href="#trades" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Trades
              </a>
              <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
            <DemoModal
              trigger={
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Request a demo
                </Button>
              }
            />
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Takeoffs for specialty trades
            </p>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Spend less time counting.
              <br />
              Win more work.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We handle your glazing and signage takeoffs so you can focus on pricing and closing bids.
            </p>
            <div className="flex flex-wrap gap-3">
              <DemoModal trigger={<Button size="lg">Request a demo</Button>} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-semibold mb-1">Fast turnaround</p>
              <p className="text-sm text-muted-foreground">Most projects in 24-48 hours</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Human-verified</p>
              <p className="text-sm text-muted-foreground">Every line item checked before delivery</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Excel output</p>
              <p className="text-sm text-muted-foreground">Drop it straight into your estimate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">What you get</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            A takeoff you can actually use—organized, accurate, and ready to price.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-xl">
              <FileSpreadsheet className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Quantities by mark/type</h3>
              <p className="text-sm text-muted-foreground">
                Counts pulled from schedules and plans, organized how you need them.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <ClipboardList className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Specs that affect pricing</h3>
              <p className="text-sm text-muted-foreground">
                Finishes, hardware, performance requirements—the details that matter.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Sheet references</h3>
              <p className="text-sm text-muted-foreground">
                Know exactly where each item came from if you need to double-check.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trades" className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Trades we cover</h2>
          <p className="text-muted-foreground mb-12">Starting with glazing and signage. More coming soon.</p>
          <Tabs defaultValue="glazing" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="glazing">Glazing</TabsTrigger>
              <TabsTrigger value="signage">Signage</TabsTrigger>
            </TabsList>
            <TabsContent value="glazing">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Windows, doors, curtain wall, storefronts.</h3>
                  <p className="text-muted-foreground mb-6">
                    We pull from your schedules and details to build a complete count by mark, type, and size—with notes
                    on glass types, hardware, and performance specs.
                  </p>
                </div>
                <div className="bg-background border border-border rounded-xl p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Sample columns</p>
                  <div className="flex flex-wrap gap-2">
                    {["Mark", "Type", "Size", "Qty", "Floor", "Sheet", "Notes"].map((col) => (
                      <span key={col} className="px-3 py-1 bg-muted rounded-md text-sm font-mono">
                        {col}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="signage">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Interior, exterior, wayfinding, ADA.</h3>
                  <p className="text-muted-foreground mb-6">
                    We build a sign register from your documents—by ID, type, location, and quantity—with mounting and
                    material notes where available.
                  </p>
                </div>
                <div className="bg-background border border-border rounded-xl p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Sample columns</p>
                  <div className="flex flex-wrap gap-2">
                    {["Sign ID", "Type", "Message", "Location", "Qty", "Mount", "Notes"].map((col) => (
                      <span key={col} className="px-3 py-1 bg-muted rounded-md text-sm font-mono">
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

      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-light text-muted-foreground/50 mb-4">01</div>
              <h3 className="font-semibold mb-2">Send your plans</h3>
              <p className="text-sm text-muted-foreground">Email us your PDFs or upload through our portal.</p>
            </div>
            <div>
              <div className="text-4xl font-light text-muted-foreground/50 mb-4">02</div>
              <h3 className="font-semibold mb-2">We do the takeoff</h3>
              <p className="text-sm text-muted-foreground">
                Our team extracts quantities and specs, then verifies every line.
              </p>
            </div>
            <div>
              <div className="text-4xl font-light text-muted-foreground/50 mb-4">03</div>
              <h3 className="font-semibold mb-2">You get Excel</h3>
              <p className="text-sm text-muted-foreground">A clean spreadsheet, ready to drop into your estimate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-12">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How fast can you turn around a project?</AccordionTrigger>
              <AccordionContent>
                Most projects are delivered in 24-48 hours. We can do rush turnarounds if you're up against a bid
                deadline.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What file formats do you need?</AccordionTrigger>
              <AccordionContent>
                PDFs. Just send us your architectural drawings, schedules, and any signage documents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does pricing work?</AccordionTrigger>
              <AccordionContent>
                Per-project, based on drawing count and complexity. Request a demo and we'll give you a quote.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you do the takeoffs?</AccordionTrigger>
              <AccordionContent>
                We use software to speed up extraction, then our team reviews and verifies everything before delivery.
                You get accuracy without the wait.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I try it first?</AccordionTrigger>
              <AccordionContent>
                Yes. We offer a pilot project so you can see the output before committing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Ready to bid more projects?</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Get your time back. Let us handle the takeoffs.</p>
          <DemoModal
            trigger={
              <Button size="lg" variant="secondary">
                Request a demo
              </Button>
            }
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative h-6 w-24">
              <Image src="/stratos-wordmark.png" alt="Stratos" fill className="object-contain" />
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Stratos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
