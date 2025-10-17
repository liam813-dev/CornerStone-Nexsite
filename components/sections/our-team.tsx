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
    <section id="our-team" className="relative overflow-hidden bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 scroll-mt-[6.5rem]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <ScrollReveal direction="up">
            <ScrollReveal as="div" className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6" direction="right">
              <div className="h-px w-8 sm:w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.18em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">Our Team</h3>
            </ScrollReveal>
            <ScrollReveal
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 tracking-tight leading-tight"
              direction="up"
              delay={80}
            >
              Hands-on support from start to finish
            </ScrollReveal>
            <ScrollReveal as="p" className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" direction="up" delay={140}>
              Work directly with Saverio and the Cornerstone team. We show up when we say we will, keep your site tidy,
              and stick around to make sure everything is performing the way it should.
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto border-2 border-foreground hover:bg-foreground hover:text-background mb-8 sm:mb-12 bg-transparent"
              >
                <span className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.35em]">
                  <div className="h-px w-6 sm:w-8 bg-current" />
                  MEET THE TEAM
                </span>
              </Button>
            </ScrollReveal>

            {/* Team member card */}
            <ScrollReveal className="bg-background p-5 sm:p-6 md:p-8 border-l-4 border-secondary" direction="up" delay={260}>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">{currentMember.name}</h4>
              <p className="text-secondary text-base sm:text-lg font-medium mb-4 sm:mb-6">{currentMember.title}</p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">{currentMember.bio}</p>

              {/* Navigation */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={prevMember}
                  className="p-2.5 sm:p-3 border-2 border-foreground hover:bg-foreground hover:text-background active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  onClick={nextMember}
                  className="p-2.5 sm:p-3 border-2 border-foreground hover:bg-foreground hover:text-background active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <div className="flex gap-2 ml-2 sm:ml-4">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
                        index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to team member ${index + 1}`}
                    >
                      <span className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ${
                        index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal className="relative aspect-[16/10] order-first lg:order-last" direction="up" delay={120}>
            <Image
              key={currentMember.name}
              src={currentMember.image || "/placeholder.svg"}
              alt={currentMember.name}
              fill
              className="object-cover transition-all duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
