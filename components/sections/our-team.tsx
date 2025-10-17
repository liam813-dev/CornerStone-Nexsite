"use client"

import Image from "next/image"
import { useState } from "react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Saverio LoMonaco",
    title: "Founder & Lead Waterproofing Specialist",
    bio: "Saverio has spent decades protecting Toronto homes. He leads every project walkthrough, explains the process in plain language, and personally signs off on our 20-year waterproofing warranty.",
    image: "/professional-male-manager.jpg",
  },
  {
    name: "Cornerstone Crew",
    title: "Licensed Underpinning & Concrete Team",
    bio: "Our trusted crew handles excavation, underpinning, and concrete finishing with craftsmanship you can see. Many of our specialists have worked with Saverio for over 10 years.",
    image: "/construction-site-with-crane-and-workers.webp",
  },
  {
    name: "Homeowner Support",
    title: "Scheduling & Client Care",
    bio: "We keep you informed from permit applications to final clean-up. Expect reminders, photo updates, and quick answers to any questions while your project is underway.",
    image: "/modern-office-interior-construction.webp",
  },
]

export function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const currentMember = teamMembers[currentIndex]

  return (
    <section id="our-team" className="relative overflow-hidden bg-muted/30 py-24 lg:py-32 scroll-mt-[6.5rem]">
      {/* Geometric accent */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="up">
            <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
              <div className="h-px w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Our Team</h3>
            </ScrollReveal>
            <ScrollReveal
              as="h2"
              className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight"
              direction="up"
              delay={80}
            >
              Hands-on support from start to finish
            </ScrollReveal>
            <ScrollReveal as="p" className="text-muted-foreground text-lg leading-relaxed mb-8" direction="up" delay={140}>
              Work directly with Saverio and the Cornerstone team. We show up when we say we will, keep your site tidy,
              and stick around to make sure everything is performing the way it should.
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-foreground hover:bg-foreground hover:text-background mb-12 bg-transparent"
              >
                <span className="flex items-center gap-2">
                  <div className="h-px w-8 bg-current" />
                  MEET THE TEAM
                </span>
              </Button>
            </ScrollReveal>

            {/* Team member card */}
            <ScrollReveal className="bg-background p-8 border-l-4 border-secondary" direction="up" delay={260}>
              <h4 className="text-3xl font-bold text-foreground mb-2">{currentMember.name}</h4>
              <p className="text-secondary text-lg font-medium mb-6">{currentMember.title}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{currentMember.bio}</p>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevMember}
                  className="p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextMember}
                  className="p-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="flex gap-2 ml-4">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to team member ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal className="relative h-[700px]" direction="up" delay={120}>
            <Image
              key={currentMember.name}
              src={currentMember.image || "/placeholder.svg"}
              alt={currentMember.name}
              fill
              className="object-cover transition-all duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
