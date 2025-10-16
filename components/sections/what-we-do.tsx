"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "waterproofing", label: "Waterproofing" },
  { id: "underpinning", label: "Underpinning" },
  { id: "concrete", label: "Concrete & Walkways" },
  { id: "entrances", label: "Basement Entrances" },
  { id: "foundation", label: "Foundation Repair" },
  { id: "new-foundations", label: "New Foundations" },
  { id: "floor-drains", label: "Floor Drains" },
]

const content = {
  waterproofing: {
    title: "Multi-stage waterproofing that stays dry",
    description:
      "Our interior and exterior waterproofing systems eliminate leaks at the source with proper excavation, drainage board, and weeping tile replacement. Every project includes sump pump and window well solutions as needed, plus a 20-year transferable warranty on the treated areas.",
    image: "/Waterproofing-services.webp",
  },
  underpinning: {
    title: "Gain headroom with expert underpinning",
    description:
      "We lower basements safely to create livable space and meet code. From permit drawings to bench footings and new concrete floors, our crew manages each stage so you can finish your basement with confidence and added value.",
    image: "/modern-office-interior-construction.jpg",
  },
  concrete: {
    title: "Durable slabs, steps, and walkways",
    description:
      "Whether you need to replace a cracked driveway, pour a new basement slab, or add custom walkways, we form and finish concrete that stands up to Toronto weather. We also handle benched footings for underpinning projects.",
    image: "/luxury-residential-home-construction.jpg",
  },
  entrances: {
    title: "Separate entrances & walkouts",
    description:
      "We design and construct basement entrances that blend with your home, providing private access for rental suites or family members. From excavation to finished stairs and drainage, we deliver turnkey walkouts that stay watertight.",
    image: "/modern-commercial-construction-building-exterior.jpg",
  },
  foundation: {
    title: "Targeted foundation wall repair",
    description:
      "Cracked or bowing foundation walls are stabilized with structural repairs in the affected sections. We assess the root cause, reinforce the wall, and seal the envelope so your home stays secure for the long term.",
    image: "/construction-site-with-crane-and-workers.jpg",
  },
  "new-foundations": {
    title: "New foundations for additions & builds",
    description:
      "Planning an addition or accessory structure? We form, pour, and waterproof new foundations that tie into existing homes or support brand-new builds, coordinating with your architect or builder every step of the way.",
    image: "/modern-office-interior-construction.jpg",
  },
  "floor-drains": {
    title: "Floor drain repair & upgrades",
    description:
      "Outdated clay drains are replaced with modern ABS/PVC systems that move water efficiently. We repair damaged sections, install new backwater valves, and ensure your drainage keeps pace with today’s plumbing standards.",
    image: "/luxury-residential-home-construction.jpg",
  },
}

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState("waterproofing")

  return (
    <section id="services" className="relative overflow-hidden bg-background py-24 lg:py-32 scroll-mt-[6.5rem]">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 transform rotate-45 translate-x-32 -translate-y-32" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal className="mb-16" direction="up">
          <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
            <div className="h-px w-12 bg-foreground" />
            <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Services Provided</h3>
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 tracking-tight max-w-4xl"
            direction="up"
            delay={80}
          >
            Waterproofing and foundation solutions tailored to Toronto homes.
          </ScrollReveal>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-8 border-b border-border pb-4">
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} as="div" direction="up" delay={index * 60}>
                <button
                  onClick={() => setActiveTab(category.id)}
                  className={`text-lg font-medium pb-2 transition-colors relative ${
                    activeTab === category.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                  {activeTab === category.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="relative h-[500px] lg:h-[600px]" direction="up" delay={100}>
            <img
              key={activeTab}
              src={content[activeTab as keyof typeof content].image || "/placeholder.svg"}
              alt={content[activeTab as keyof typeof content].title}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={160}>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {content[activeTab as keyof typeof content].description}
            </p>
            <ScrollReveal direction="up" delay={40}>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                <span className="flex items-center gap-2">
                  <div className="h-px w-8 bg-current" />
                  BOOK A SITE VISIT
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
