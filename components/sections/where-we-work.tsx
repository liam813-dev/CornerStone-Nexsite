"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

const locations = [
  {
    name: "East York",
    description:
      "Head office and staging yard for waterproofing, sump pump installs, and drainage upgrades serving classic post-war homes.",
  },
  {
    name: "City of Toronto",
    description:
      "From downtown Victorians to Midtown semis, we manage interior/exterior waterproofing, underpinning, and basement entrances across the city.",
  },
  {
    name: "Greater Toronto Area",
    description:
      "Full foundation rehabilitation for homes in North York, York, Etobicoke, and York Region with 20-year waterproofing warranties.",
  },
  {
    name: "Durham Region",
    description:
      "Emergency leak response, crack repair, and drainage upgrades for properties in Pickering, Ajax, Whitby, and Oshawa.",
  },
  {
    name: "Peel Region",
    description:
      "Exterior waterproofing, sump pump retrofits, and concrete walkways for Mississauga, Brampton, and Caledon homeowners.",
  },
]

const stats = [
  { number: "Same-Day", label: "Site Assessments" },
  { number: "24/7", label: "Emergency Support" },
]

export function WhereWeWork() {
  return (
    <section id="where-we-work" className="relative overflow-hidden bg-slate-900 py-24 text-white lg:py-32 scroll-mt-[6.5rem]">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <ScrollReveal className="mb-16" direction="up">
          <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
            <div className="h-px w-12 bg-white" />
            <h3 className="text-white font-medium tracking-[0.2em] text-sm uppercase">Service Area</h3>
          </ScrollReveal>
          <ScrollReveal
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight max-w-4xl"
            direction="up"
            delay={80}
          >
            Waterproofing trusted by homeowners across the GTA.
          </ScrollReveal>
          <ScrollReveal as="p" className="text-white/80 text-lg max-w-3xl leading-relaxed" direction="up" delay={140}>
            From our base in East York we respond quickly across Toronto, Durham, York, and Peel. Whether it's a rowhouse
            in the city or a heritage home in the suburbs, we bring the right crew, equipment, and solutions to keep your
            foundation dry.
          </ScrollReveal>
        </ScrollReveal>

        {/* Location links (tabs-style) */}
        <div className="flex flex-wrap gap-8 mb-12">
          {locations.map((location, index) => (
            <ScrollReveal key={location.name} direction="up" delay={index * 60}>
              <a
                href="#"
                className="text-lg font-medium pb-2 transition-colors relative text-white/90 hover:text-white"
                onClick={(e) => e.preventDefault()}
              >
                {location.name}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal
            className="relative h-[400px] w-full bg-slate-800/50 rounded-lg overflow-hidden"
            direction="up"
            delay={100}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44949.59387346223!2d-79.3741301625571!3d43.70086565129153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc5f55fc8bd1%3A0x8f51a4fd0f97e031!2sEast%20York%2C%20ON!5e1!3m2!1sen!2sca!4v1760679161861!5m2!1sen!2sca" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44949.59387346223!2d-79.3741301625571!3d43.70086565129153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e1!3m2!1sen!2sca!4v1760679212982!5m2!1sen!2sca" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715392.7137038783!2d-79.48542356238679!3d44.01680439686417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d54e8394616735%3A0xcf5fb69e39e1e9de!2sRegional%20Municipality%20of%20Durham%2C%20ON!5e1!3m2!1sen!2sca!4v1760679533731!5m2!1sen!2sca" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715392.7137038783!2d-79.48542356238679!3d44.01680439686417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c30c9eb87ab%3A0x3bec33bf3e68e6a3!2sRegional%20Municipality%20of%20Peel%2C%20ON!5e1!3m2!1sen!2sca!4v1760679559670!5m2!1sen!2sca" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} direction="left" delay={index * 120}>
                <div>
                  <div className="text-6xl md:text-7xl font-bold text-accent mb-3">{stat.number}</div>
                  <div className="text-white text-xl">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Removed regional description cards per request */}
      </div>
    </section>
  )
}
