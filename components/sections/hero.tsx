import Image from "next/image"
import Link from "next/link"

import { ConstructWaveLines } from "@/components/shared/construct-wave-lines"
import { heroContent } from "@/content/data/company"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, MessageCircle, Search, Twitter } from "lucide-react"

const HERO_IMAGE_SRC = heroContent.image
const HERO_IMAGE_ALT = heroContent.imageAlt
const PROJECT_CODE = heroContent.projectCode
const HERO_DESCRIPTION = heroContent.description
const HERO_LOCATION = heroContent.location
const HERO_PRIMARY_CALLOUT = heroContent.callouts.primary
const HERO_WEBSITE = heroContent.callouts.website

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-[6.5rem] bg-background text-foreground overflow-visible pb-[8.5rem] lg:pb-[17rem]"
    >
      <LandingHeader />
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pb-16 pt-[24] sm:px-10 lg:px-16 xl:px-24">
        <div className="absolute right-6 top-20 z-10 text-xs font-semibold uppercase tracking-[0.45em] text-foreground/30 sm:right-10 lg:right-16 lg:text-sm xl:right-24">
          {PROJECT_CODE}
        </div>
        <div className="grid flex-1 items-end gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-20">
          <div className="space-y-10 relative z-10">
            <div className="text-right text-5xl font-semibold tracking-[0.42em] text-foreground/20 lg:hidden">
              {PROJECT_CODE}
            </div>
            <div className="space-y-8 pt-24">
              <h1 className="text-[clamp(3rem,7vw,5.6rem)] font-semibold leading-[0.9] tracking-tight">
                <span className="block">We Help You</span>
                <span className="block lg:flex lg:items-baseline lg:gap-6">
                  <span className="block lg:inline-flex lg:flex-col lg:items-center lg:gap-3">
                    <span className="block lg:inline">Reinforce</span>
                    <ConstructWaveLines className="mt-4 h-10 w-[min(12rem,100%)] max-w-full sm:h-12 lg:mt-6 mx-auto" />
                  </span>
                  <span className="block lg:inline lg:leading-[0.9]">with Confidence</span>
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO_DESCRIPTION}
              </p>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/70">{HERO_LOCATION}</p>
              <div className="flex flex-wrap gap-4 pt-3">
                <Button
                  asChild
                  size="lg"
                  variant="cta"
                  className="rounded-none px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  <a href="tel:4168794593">Call 416-879-4593</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  <Link href="#contact">Get a Free Site Visit</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-stretch gap-6">
              <LandingGeometricPattern />
              <div className="flex min-h-[7rem] flex-1 flex-col items-start justify-between">
                <p className="text-left text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Responsive waterproofing diagnostics completed within 48 hours by our engineering team.
                </p>
                <div className="flex w-full justify-start py-2">
                  <LandingSocialLinks />
                </div>
                <p className="text-left text-sm font-medium tracking-[0.25em] text-foreground/70">{HERO_WEBSITE}</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-start justify-end lg:absolute lg:right-6 lg:top-[12rem] xl:right-24 lg:w-[35%] lg:max-w-[450px] lg:min-w-[380px] z-20">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mt-10 sm:mt-12 lg:mt-0">
              <div className="relative aspect-[3/4] lg:aspect-[3/4.2] overflow-visible border border-border/50 bg-secondary/10">
                <Image
                  src={HERO_IMAGE_SRC}
                  alt={HERO_IMAGE_ALT}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 32vw"
                  priority
                />
              </div>
              <div className="absolute -top-12 -right-12 h-[6.5rem] w-[6.5rem] rotate-45 border border-border/70 lg:h-28 lg:w-28 lg:-top-14 lg:-right-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-24">
        <Link href="/" className="flex items-center gap-3 text-foreground no-underline">
          <span className="flex h-10 w-10 items-center justify-center border-2 border-foreground/60">
            <span className="inline-block h-5 w-5 -rotate-45 border-l-2 border-b-2 border-foreground/60" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-[0.45em]">Cornerstone</span>
            <span className="text-[0.55rem] tracking-[0.4em] text-muted-foreground">Waterproofing</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 md:flex">
          <Link href="#home" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link href="#about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#services" className="transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden rounded-full border border-border/50 bg-background/70 text-foreground hover:bg-accent md:inline-flex"
          >
            <Search className="h-4 w-4" />
          </Button>
          {/* Removed header call button per request */}
        </div>
      </div>
    </header>
  )
}

function LandingGeometricPattern() {
  return (
    <div className="flex items-stretch gap-4">
      {/* Make the square box match the total circle stack height */}
      <div className="flex w-36 items-center justify-center border-2 border-foreground/30 p-3 [height:calc(theme(spacing.12)*3+theme(spacing.3)*2)] sm:[height:calc(theme(spacing.12)*3+theme(spacing.3)*2)]">
        <div className="relative h-full w-full">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 w-px -translate-x-1/2 bg-foreground/40"
              style={{
                height: "3rem",
                transform: `translate(-50%, -100%) rotate(${index * 22.5}deg)`,
                transformOrigin: "center bottom",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="h-12 w-12 rounded-full border-2 border-foreground/30" />
        <span className="h-12 w-12 rounded-full border-2 border-foreground/30" />
        <span className="h-12 w-12 rounded-full border-2 border-foreground/30" />
      </div>
    </div>
  )
}

function LandingSocialLinks() {
  const socialItems = [
    { href: "https://twitter.com", label: "Twitter", icon: Twitter },
    { href: "https://www.whatsapp.com", label: "Messaging", icon: MessageCircle },
    { href: "https://facebook.com", label: "Facebook", icon: Facebook },
    { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  ] as const

  return (
    <div className="flex gap-2">
      {socialItems.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}
