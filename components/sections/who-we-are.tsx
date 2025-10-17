"use client"

import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"

const stats = [
  { number: "20-Year", label: "Waterproofing Warranty" },
  { number: "Family-Run", label: "Owner-Led Crew" },
  { number: "GTA", label: "Service Area" },
]

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative z-20 overflow-hidden bg-muted/30 py-16 lg:py-24 scroll-mt-[6.5rem]"
    >
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <ScrollReveal className="lg:col-span-2" direction="up">
            <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
              <div className="h-px w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Who We Are</h3>
            </ScrollReveal>
            <ScrollReveal
              as="h2"
              className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight"
              direction="up"
              delay={80}
            >
              Built on family values and craftsmanship
            </ScrollReveal>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <ScrollReveal as="p" direction="up" delay={120}>
                At Cornerstone Waterproofing, every project starts with the promise that we will protect your home as if
                it were our own. Based in East York, Toronto, our family-run crew specializes in waterproofing,
                underpinning, and foundation upgrades that keep basements dry and structures sound.
              </ScrollReveal>
              <ScrollReveal as="p" direction="up" delay={160}>
                We believe in honest advice, clear communication, and solutions that stand up to Toronto weather. From
                the first consultation to final inspection, you work directly with Saverio LoMonaco and a tight-knit
                team that treats your property with respect.
              </ScrollReveal>
              <ScrollReveal as="p" direction="up" delay={200}>
                Our reputation is built on referrals, long-term warranties, and craftsmanship you can see. Whether
                you’re stopping a leak or planning a full basement transformation, we make sure your foundation is ready
                for the future.
              </ScrollReveal>
            </div>
            <ScrollReveal direction="up" delay={260}>
              <Button
                variant="outline"
                size="lg"
                className="mt-8 border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                ABOUT CORNERSTONE
              </Button>
            </ScrollReveal>
          </ScrollReveal>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} direction="left" delay={index * 100}>
                <div className="border-l-4 border-secondary pl-6">
                  <div className="text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal direction="right" delay={stats.length * 100 + 160}>
              <div className="relative overflow-hidden rounded-2xl border border-secondary/60 bg-background px-8 py-10 text-center shadow-[0_18px_30px_-24px_rgba(28,44,90,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                <div aria-hidden className="absolute inset-x-8 top-8 h-px bg-secondary/60" />
                <div aria-hidden className="absolute inset-x-8 bottom-8 h-px bg-secondary/40" />
                <div className="relative mx-auto flex w-full max-w-[10rem] items-center justify-center">
                  <Image
                    src="/CornerStone-logo.svg"
                    alt="Cornerstone Waterproofing logo"
                    width={210}
                    height={95}
                    className="h-auto w-full"
                    priority={false}
                  />
                </div>
                <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  Trusted Cornerstone Crew
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
