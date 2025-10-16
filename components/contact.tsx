"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 transform rotate-45 translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 transform rotate-45 -translate-x-48 translate-y-48" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal direction="up">
            <ScrollReveal as="h3" className="text-secondary font-medium tracking-[0.2em] text-sm uppercase mb-4" direction="right">
              Free Estimate
            </ScrollReveal>
            <ScrollReveal as="h2" className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight" direction="up" delay={80}>
              Call or message for
              <br />
              fast waterproofing help
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className="text-white/80 text-lg mb-12 font-light leading-relaxed"
              direction="up"
              delay={140}
            >
              Share some details below and we&apos;ll schedule a site visit, provide photos of our findings, and leave you
              with a clear plan to protect your home.
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />,
                  label: "Phone",
                  value: "416-879-4593",
                },
                {
                  icon: <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />,
                  label: "Email",
                  value: "cornerstone@live.ca",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />,
                  label: "Location",
                  value: "Based in East York • Serving the GTA",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.label} direction="up" delay={200 + index * 60}>
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <p className="font-medium mb-1">{item.label}</p>
                      <p className="text-white/80 font-light">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="bg-white/10 backdrop-blur-sm p-8 lg:p-10" direction="up" delay={120}>
            <form className="space-y-6">
              <ScrollReveal direction="up">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={60}>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={120}>
                <Input
                  placeholder="Service Needed"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={180}>
                <Textarea
                  placeholder="Tell us about your waterproofing or foundation project..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary resize-none"
                />
              </ScrollReveal>
              <ScrollReveal direction="up" delay={240}>
                <Button
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium tracking-wide uppercase text-sm"
                >
                  Send Request
                </Button>
              </ScrollReveal>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
