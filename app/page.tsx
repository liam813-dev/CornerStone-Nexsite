import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { WhoWeAre } from "@/components/who-we-are"
import { WhereWeWork } from "@/components/where-we-work"
import { FeaturedProjects } from "@/components/featured-projects"
import { OurTeam } from "@/components/our-team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* Reordered per requested flow: Who We Are → Service Area → Services */}
      <WhoWeAre />
      <WhereWeWork />
      <WhatWeDo />
      <FeaturedProjects />
      <OurTeam />
      <Contact />
      <Footer />
    </main>
  )
}
