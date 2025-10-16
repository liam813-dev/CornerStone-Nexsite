"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "buildings", label: "Buildings" },
  { id: "civil", label: "Civil Infrastructure" },
  { id: "industrial", label: "Heavy Industrial" },
  { id: "special", label: "Special Projects" },
]

const content = {
  buildings: {
    title: "Stunning structures, sustainably built",
    description:
      "Our network of construction professionals rise to the challenges associated with a diverse buildings portfolio, bringing added value to every educational, institutional, residential and commercial construction project. We offer substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
    image: "/modern-commercial-construction-building-exterior.jpg",
  },
  civil: {
    title: "Infrastructure for tomorrow",
    description:
      "From roads and bridges to water systems and utilities, we deliver critical infrastructure projects that connect communities and drive economic growth. Our civil construction expertise ensures projects are completed on time, within budget, and built to last for generations.",
    image: "/construction-site-with-crane-and-workers.jpg",
  },
  industrial: {
    title: "Industrial excellence",
    description:
      "We specialize in complex industrial facilities including manufacturing plants, warehouses, and processing facilities. Our team understands the unique challenges of industrial construction and delivers solutions that maximize efficiency and productivity.",
    image: "/modern-office-interior-construction.jpg",
  },
  special: {
    title: "Unique solutions for unique projects",
    description:
      "Every project has its own story. Our special projects team tackles the most challenging and innovative construction endeavors, from historic renovations to cutting-edge facilities that push the boundaries of design and engineering.",
    image: "/luxury-residential-home-construction.jpg",
  },
}

export function WhatWeDo() {
  const [activeTab, setActiveTab] = useState("buildings")

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 transform rotate-45 translate-x-32 -translate-y-32" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground" />
            <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">What We Do</h3>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 tracking-tight max-w-4xl">
            We have a vision for the future of construction.
          </h2>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-8 border-b border-border pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`text-lg font-medium pb-2 transition-colors relative ${
                  activeTab === category.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
                {activeTab === category.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] lg:h-[600px]">
            <img
              src={content[activeTab as keyof typeof content].image || "/placeholder.svg"}
              alt={content[activeTab as keyof typeof content].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {content[activeTab as keyof typeof content].title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {content[activeTab as keyof typeof content].description}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              <span className="flex items-center gap-2">
                <div className="h-px w-8 bg-current" />
                LEARN MORE
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
