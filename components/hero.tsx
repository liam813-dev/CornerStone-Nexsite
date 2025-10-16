"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Single hero image */}
      <div className="absolute inset-0">
        <img
          src="/modern-commercial-construction-building-exterior.jpg"
          alt="Modern commercial construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            {/* Eyebrow text with horizontal line accent */}
            <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="down">
              <div className="w-16 h-[2px] bg-secondary" />
              <span className="text-white/90 font-light tracking-[0.25em] text-[10px] uppercase">
                Toronto Waterproofing & Foundation Experts
              </span>
            </ScrollReveal>

            <ScrollReveal
              as="h1"
              className="text-white font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6 tracking-tight text-balance"
              direction="up"
              delay={80}
            >
              Protecting Homes From The Ground Up
            </ScrollReveal>

            <ScrollReveal
              as="p"
              className="text-white/85 text-base md:text-lg max-w-2xl mb-10 font-light leading-relaxed"
              direction="up"
              delay={160}
            >
              Cornerstone Waterproofing delivers 20-year warranted waterproofing, underpinning, and foundation repair that
              keeps GTA basements dry and transforms them into livable space.
            </ScrollReveal>

            {/* CTA buttons - left aligned */}
            <ScrollReveal
              as="div"
              className="flex flex-col sm:flex-row gap-4"
              direction="up"
              delay={240}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-medium tracking-wide uppercase text-sm px-10 py-6 group"
              >
                <a href="tel:14168794593">
                  Call 416-879-4593
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium tracking-wide uppercase text-sm px-10 py-6 bg-transparent"
              >
                <a href="#contact">Request A Free Estimate</a>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Geometric accent element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 transform rotate-45 translate-x-48 translate-y-48" />
    </section>
  )
}
