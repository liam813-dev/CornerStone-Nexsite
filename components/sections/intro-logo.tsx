import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { BlueprintGrid } from "@/components/shared/blueprint-grid"
import { companyInfo } from "@/content/data/company"
import { Users, MapPin, ShieldCheck } from "lucide-react"

const highlightItems = [
  {
    icon: Users,
    title: "Family-Run Crew",
    description: "Saverio LoMonaco and team on every project.",
  },
  {
    icon: MapPin,
    title: "Based in Toronto",
    description: `Serving homeowners across the ${companyInfo.serviceArea}.`,
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Warranty",
    description: companyInfo.warranty,
  },
]

export function IntroLogo() {
  return (
    <section
      id="intro"
      className="relative z-30 bg-background pt-0 pb-12 text-foreground sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Animated blueprint grid background */}
      <BlueprintGrid />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 text-center lg:px-12 xl:px-0 relative z-10">
        <ScrollReveal className="flex flex-col items-center gap-6" direction="up">
          <Image
            src="/CornerStone-logo.svg"
            alt={`${companyInfo.name} logo`}
            width={260}
            height={118}
            className="h-auto w-[min(260px,60vw)]"
            priority={false}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/70">
            Family-run in Toronto since 2004
          </p>
          <h2 className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {companyInfo.tagline}
          </h2>
        </ScrollReveal>

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {highlightItems.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 80}>
              <div className={`flex h-full flex-col items-center gap-2 border border-foreground bg-transparent backdrop-blur-md px-6 py-8 text-center ${index === 1 ? 'scale-105' : ''}`}>
                <item.icon className="h-8 w-8 text-foreground/80 mb-2" />
                <span className="text-sm font-semibold tracking-[0.3em] text-foreground/80">
                  {item.title}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
