"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "buildings", label: "Buildings" },
  { id: "civil", label: "Civil" },
  { id: "industrial", label: "Industrial" },
  { id: "special", label: "Special Projects" },
]

const projects = {
  buildings: {
    title: "Luxury Coastal Residence",
    location: "Kiawah Island, SC",
    description:
      "This home features a reverse floor plan with primary living spaces located on the second floor to take advantage of Ocean views. Classic shingle style details are accomplished with high quality, low maintenance materials.",
    image: "/luxury-residential-home-construction.jpg",
  },
  civil: {
    title: "Metropolitan Transit Hub",
    location: "Downtown District",
    description:
      "A state-of-the-art transportation facility connecting multiple transit systems, featuring sustainable design and modern amenities for thousands of daily commuters.",
    image: "/construction-site-with-crane-and-workers.jpg",
  },
  industrial: {
    title: "Advanced Manufacturing Facility",
    location: "Industrial Park",
    description:
      "A cutting-edge production facility designed for efficiency and sustainability, incorporating the latest in manufacturing technology and environmental controls.",
    image: "/modern-office-interior-construction.jpg",
  },
  special: {
    title: "Historic Renovation Project",
    location: "Heritage District",
    description:
      "Careful restoration and modernization of a landmark building, preserving its historic character while incorporating contemporary functionality and systems.",
    image: "/modern-commercial-construction-building-exterior.jpg",
  },
}

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("buildings")

  return (
    <section id="featured-projects" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 transform -translate-y-48 translate-x-48" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground" />
            <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">What We Build</h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight max-w-4xl">
            We look beyond your immediate construction needs to develop comprehensive solutions for each project
          </h2>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
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
            ))}
          </div>
        </div>

        {/* Project showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <img
              src={projects[activeCategory as keyof typeof projects].image || "/placeholder.svg"}
              alt={projects[activeCategory as keyof typeof projects].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
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
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              <span className="flex items-center gap-2">
                VIEW ALL PROJECTS
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
