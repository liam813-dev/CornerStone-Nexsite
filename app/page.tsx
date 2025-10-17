import { Hero } from "@/components/sections/hero"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { WhereWeWork } from "@/components/sections/where-we-work"
import { FeaturedReviews } from "@/components/sections/featured-reviews"
import { OurTeam } from "@/components/sections/our-team"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"
import { StickyCTA } from "@/components/shared/sticky-cta"
import { IntroLogo } from "@/components/sections/intro-logo"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroLogo />
      {/* Reordered per requested flow: Who We Are → Service Area → Services */}
      <WhoWeAre />
      <WhereWeWork />
      <WhatWeDo />
      <FeaturedReviews />
      <OurTeam />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  )
}
