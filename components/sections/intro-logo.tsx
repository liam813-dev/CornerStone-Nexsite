import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { companyInfo } from "@/content/data/company"

const highlightItems = [
  {
    title: "Family-Run Crew",
    description: "Saverio LoMonaco and team on every project.",
  },
  {
    title: "Based in Toronto",
    description: `Serving homeowners across the ${companyInfo.serviceArea}.`,
  },
  {
    title: "Long-Term Warranty",
    description: companyInfo.warranty,
  },
]

export function IntroLogo() {
  return (
    <section
      id="intro"
      className="relative z-30 -mt-[10rem] bg-background py-12 text-foreground sm:-mt-[14rem] sm:py-16 lg:-mt-[18rem] lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 text-center lg:px-12 xl:px-0">
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
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {companyInfo.tagline}
          </p>
        </ScrollReveal>

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {highlightItems.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 80}>
              <div className="flex h-full flex-col items-center gap-2 border border-border/60 bg-muted/20 px-6 py-8 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80">
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
