"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Michael Anderson",
    title: "Chief Executive Officer",
    bio: "Michael brings over 30 years of construction industry experience, leading our company with a vision for innovation and excellence. His commitment to quality and client satisfaction has been the cornerstone of our success.",
    image: "/professional-male-executive.jpg",
  },
  {
    name: "Sarah Mitchell",
    title: "Director of Operations",
    bio: "Sarah oversees all operational aspects of our projects, ensuring seamless execution from planning to completion. Her expertise in project management and team coordination drives our operational excellence.",
    image: "/professional-female-executive.png",
  },
  {
    name: "David Chen",
    title: "Senior Project Manager",
    bio: "David specializes in large-scale commercial projects, bringing technical expertise and leadership to every build. His attention to detail and problem-solving skills ensure projects are delivered on time and within budget.",
    image: "/professional-male-manager.jpg",
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
    <section id="our-team" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Our Team</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Invested in your success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As owners, we are more accountable to you and more invested in your success. Across all levels of our
              organization, our experienced, innovative solution providers put our culture of ownership to work for you.
              When you succeed, we succeed.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-foreground hover:bg-foreground hover:text-background mb-12 bg-transparent"
            >
              <span className="flex items-center gap-2">
                <div className="h-px w-8 bg-current" />
                LEARN MORE
              </span>
            </Button>

            {/* Team member card */}
            <div className="bg-background p-8 border-l-4 border-secondary">
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
            </div>
          </div>

          <div className="relative h-[700px]">
            <img
              src={currentMember.image || "/placeholder.svg"}
              alt={currentMember.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
