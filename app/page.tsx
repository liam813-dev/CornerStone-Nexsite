import { Hero } from "@/components/sections/hero"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { WhereWeWork } from "@/components/sections/where-we-work"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { OurTeam } from "@/components/sections/our-team"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
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
