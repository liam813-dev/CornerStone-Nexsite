"use client"

import Image from "next/image"
import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "waterproofing", label: "Waterproofing" },
  { id: "underpinning", label: "Underpinning" },
  { id: "walkout", label: "Basement Walkouts" },
  { id: "foundation", label: "Foundation Repair" },
]

const projects = {
  waterproofing: {
    title: "Full Exterior Waterproofing",
    location: "East York, ON",
    description:
      "Excavated the full side wall, installed new drainage board, weeping tile, and sump system. The homeowners now have a dry basement and peace of mind backed by our 20-year warranty.",
    image: "/construction-site-with-crane-and-workers.webp",
  },
  underpinning: {
    title: "Basement Lowering & Bench Footing",
    location: "Leslieville, ON",
    description:
      "Completed a multi-stage underpinning project to add 18 inches of height, poured a new concrete slab, and prepped the space for a legal rental suite.",
    image: "/modern-office-interior-construction.webp",
  },
  walkout: {
    title: "Walkout Entrance Installation",
    location: "North York, ON",
    description:
      "Created a code-compliant basement walkout with proper drainage, retaining walls, and concrete stairs to give a growing family a private entrance for their in-law suite.",
    image: "/luxury-residential-home-construction.webp",
  },
  foundation: {
    title: "Structural Crack Stabilization",
    location: "Scarborough, ON",
    description:
      "Repaired a bowing foundation wall with sectional reinforcement and waterproofing to stop active leaks and protect the home from further movement.",
    image: "/modern-commercial-construction-building-exterior.webp",
  },
}

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("waterproofing")

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-[6.5rem]">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 transform -translate-y-48 translate-x-48" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative">
        <ScrollReveal className="mb-12 sm:mb-16" direction="up">
          <ScrollReveal as="div" className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6" direction="right">
            <div className="h-px w-8 sm:w-12 bg-foreground" />
            <h3 className="text-foreground font-medium tracking-[0.18em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">Featured Work</h3>
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12 tracking-tight max-w-4xl leading-tight"
            direction="up"
            delay={80}
          >
            Real results from waterproofing, underpinning, and foundation projects across the GTA
          </ScrollReveal>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} as="div" direction="up" delay={index * 60}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-sm sm:text-base md:text-lg font-medium pb-2 transition-colors relative min-h-[44px] flex items-center ${
                    activeCategory === category.id ? "text-foreground" : "text-muted-foreground hover:text-foreground active:text-foreground"
                  }`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Project showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <ScrollReveal className="relative aspect-[16/10] order-2 lg:order-1" direction="up" delay={100}>
            <Image
              key={activeCategory}
              src={projects[activeCategory as keyof typeof projects].image || "/placeholder.svg"}
              alt={projects[activeCategory as keyof typeof projects].title}
              fill
              className="object-cover transition-all duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              priority={activeCategory === "waterproofing"}
            />
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" direction="up" delay={160}>
            <p className="text-muted-foreground text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Project Showcase</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              {projects[activeCategory as keyof typeof projects].title}
            </h3>
            <p className="text-secondary text-base sm:text-lg font-medium mb-4 sm:mb-6">
              {projects[activeCategory as keyof typeof projects].location}
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {projects[activeCategory as keyof typeof projects].description}
            </p>
            <ScrollReveal direction="up" delay={40}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                <a
                  href="https://www.homestars.com/profile/2781895-cornerstone-waterproofing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em]">READ MORE REVIEWS</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
