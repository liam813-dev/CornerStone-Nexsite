"use client"

import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

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
                <div className="border-l-4 border-cta pl-6">
                  <div className="text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal direction="right" delay={stats.length * 100 + 160}>
              <div className="bg-muted/30 p-8 border-l-4 border-cta h-full flex flex-col">
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-secondary font-medium tracking-wider uppercase">
                    Verified Review
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 flex-grow">
                  "Cornerstone Waterproofing did an excellent job fixing a leak in our basement. The quality of their work surpassed our expectations and the cost was competitive."
                </blockquote>

                {/* Author and Date */}
                <div className="flex items-center justify-between pt-4 border-t border-muted">
                  <cite className="not-italic font-semibold text-foreground">HomeOwner</cite>
                  <time dateTime="2024-08-28" className="text-sm text-muted-foreground">
                    August 28, 2024
                  </time>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
