"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
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
    image: "/construction-site-with-crane-and-workers.jpg",
  },
  underpinning: {
    title: "Basement Lowering & Bench Footing",
    location: "Leslieville, ON",
    description:
      "Completed a multi-stage underpinning project to add 18 inches of height, poured a new concrete slab, and prepped the space for a legal rental suite.",
    image: "/modern-office-interior-construction.jpg",
  },
  walkout: {
    title: "Walkout Entrance Installation",
    location: "North York, ON",
    description:
      "Created a code-compliant basement walkout with proper drainage, retaining walls, and concrete stairs to give a growing family a private entrance for their in-law suite.",
    image: "/luxury-residential-home-construction.jpg",
  },
  foundation: {
    title: "Structural Crack Stabilization",
    location: "Scarborough, ON",
    description:
      "Repaired a bowing foundation wall with sectional reinforcement and waterproofing to stop active leaks and protect the home from further movement.",
    image: "/modern-commercial-construction-building-exterior.jpg",
  },
}

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("waterproofing")

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 transform -translate-y-48 translate-x-48" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal className="mb-16" direction="up">
          <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
            <div className="h-px w-12 bg-foreground" />
            <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Featured Work</h3>
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight max-w-4xl"
            direction="up"
            delay={80}
          >
            Real results from waterproofing, underpinning, and foundation projects across the GTA
          </ScrollReveal>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-8">
            {categories.map((category, index) => (
              <ScrollReveal key={category.id} as="div" direction="up" delay={index * 60}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-lg font-medium pb-2 transition-colors relative ${
                    activeCategory === category.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="relative h-[600px]" direction="up" delay={100}>
            <img
              key={activeCategory}
              src={projects[activeCategory as keyof typeof projects].image || "/placeholder.svg"}
              alt={projects[activeCategory as keyof typeof projects].title}
              className="w-full h-full object-cover transition-all duration-500 ease-out"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={160}>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-4">Project Showcase</p>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {projects[activeCategory as keyof typeof projects].title}
            </h3>
            <p className="text-secondary text-lg font-medium mb-6">
              {projects[activeCategory as keyof typeof projects].location}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {projects[activeCategory as keyof typeof projects].description}
            </p>
            <ScrollReveal direction="up" delay={40}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                <a
                  href="https://www.homestars.com/profile/2781895-cornerstone-waterproofing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-2">
                    READ MORE REVIEWS
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
