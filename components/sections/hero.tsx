"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ConstructWaveLines } from "@/components/shared/construct-wave-lines"
import { ContactModal } from "@/components/shared/contact-modal"
import { heroContent } from "@/content/data/company"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, MessageCircle, Phone, Search, Twitter } from "lucide-react"

const HERO_IMAGE_SRC = heroContent.image
const HERO_IMAGE_ALT = heroContent.imageAlt
const PROJECT_CODE = heroContent.projectCode
const HERO_DESCRIPTION = heroContent.description
const HERO_LOCATION = heroContent.location
const HERO_PRIMARY_CALLOUT = heroContent.callouts.primary
const HERO_WEBSITE = heroContent.callouts.website

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative scroll-mt-[6.5rem] bg-background text-foreground overflow-visible pb-0"
    >
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LandingHeader />
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-0 pt-0 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="absolute right-4 top-20 z-10 hidden text-2xl font-semibold uppercase tracking-[0.45em] text-foreground/30 sm:right-6 md:block lg:right-16 lg:text-3xl xl:right-24 xl:text-4xl">
          {PROJECT_CODE}
        </div>
        <div className="grid flex-1 items-start gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-20">
          <div className="flex flex-col space-y-2 relative z-10 sm:space-y-2.5">
            <div className="space-y-2 pt-20 sm:pt-24 md:pt-28 lg:pt-32 sm:space-y-2.5">
              <h1 className="text-[1.75rem] leading-[1.1] font-semibold tracking-tight xs:text-[2rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] sm:leading-[0.95] lg:leading-[0.9]">
                <span className="block">Toronto Basement</span>
                <span className="block">Waterproofing &</span>
                <span className="block lg:leading-[0.9]">Foundation Repair</span>
              </h1>

              <h2 className="text-sm font-semibold text-foreground sm:text-base md:text-lg lg:text-xl">
                Expert Solutions Built to Last Since 2004
              </h2>

              <p className="max-w-xl text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs md:text-sm lg:text-base">
                Protect your home with professional waterproofing services trusted by Toronto homeowners for over 20 years.
                We specialize in basement leak repairs, exterior foundation waterproofing, and drainage solutions that keep
                your property dry and structurally sound. Serving the GTA with responsive diagnostics completed within 48
                hours and comprehensive warranties on all installations.
              </p>
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-foreground/70 sm:text-[0.65rem]">{HERO_LOCATION}</p>

              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:gap-3 sm:pt-2">
                <div className="flex flex-col gap-1">
                  <Button
                    size="lg"
                    variant="cta"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full rounded-none px-6 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] sm:w-auto sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.35em]"
                  >
                    Get a Free Site Visit
                  </Button>
                  <p className="text-[0.65rem] text-center text-muted-foreground sm:text-left sm:text-xs">
                    On-site within 48 hours • No obligation
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-none border-foreground px-6 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.3em] sm:w-auto sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.35em]"
                >
                  <a href="tel:4168794593" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call 416-879-4593
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden sm:flex items-stretch gap-3 sm:gap-4 mt-auto">
              <LandingGeometricPattern />
              <div className="flex min-h-[5rem] flex-1 flex-col items-start justify-between">
                <p className="text-left text-balance text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Responsive waterproofing diagnostics completed within 48 hours by our engineering team.
                </p>
                <div className="flex w-full justify-start py-1">
                  <LandingSocialLinks />
                </div>
                <p className="text-left text-[0.65rem] font-medium tracking-[0.22em] text-foreground/70 sm:text-xs sm:tracking-[0.25em]">{HERO_WEBSITE}</p>
              </div>
            </div>
            {/* Mobile social links */}
            <div className="flex sm:hidden justify-center py-4">
              <LandingSocialLinks />
            </div>
          </div>
          <div className="relative flex items-start justify-center sm:justify-end lg:absolute lg:right-6 lg:top-[12rem] xl:right-24 lg:w-[35%] lg:max-w-[450px] lg:min-w-[380px] z-20 -mb-56 sm:-mb-72 md:-mb-80 lg:mb-0">
            <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-none mt-0 sm:mt-0 md:mt-0 lg:mt-0 animate-fade-in-up animation-delay-400">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_10px_25px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4),0_15px_35px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 hover:-translate-y-2">
                <Image
                  src={HERO_IMAGE_SRC}
                  alt={HERO_IMAGE_ALT}
                  fill
                  className="object-cover"
                  sizes="(max-width: 375px) 85vw, (max-width: 640px) 75vw, (max-width: 768px) 65vw, (max-width: 1024px) 50vw, 32vw"
                  priority
                />
              </div>
              <div className="absolute -top-8 -right-8 h-20 w-20 rotate-45 border-2 border-foreground/30 shadow-lg xs:-top-10 xs:-right-10 xs:h-24 xs:w-24 sm:-top-12 sm:-right-12 sm:h-[6.5rem] sm:w-[6.5rem] lg:h-28 lg:w-28 lg:-top-14 lg:-right-14 transition-transform duration-700 hover:rotate-[50deg] hover:scale-110" />
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
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 text-foreground no-underline">
          <Image src="/CornerStone-logo.svg" alt="Cornerstone Logo" width={150} height={40} />
        </Link>
        <nav className="hidden items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 md:flex">
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
          {/* TODO: Add mobile hamburger menu button here for md and below */}
        </div>
      </div>
    </header>
  )
}

function LandingGeometricPattern() {
  return (
    <div className="flex items-stretch gap-4">
      {/* Make the square box match the total circle stack height */}
      <div className="flex w-40 items-center justify-center border-2 border-foreground/30 p-4 [height:calc(theme(spacing.14)*3+theme(spacing.4)*2)] sm:[height:calc(theme(spacing.14)*3+theme(spacing.4)*2)]">
        <div className="relative h-full w-full">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 w-px -translate-x-1/2 bg-foreground/40"
              style={{
                height: "3.5rem",
                transform: `translate(-50%, -100%) rotate(${index * 22.5}deg)`,
                transformOrigin: "center bottom",
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="h-14 w-14 rounded-full border-2 border-foreground/30 bg-gradient-to-br from-accent/20 to-transparent" />
        <span className="h-14 w-14 rounded-full border-2 border-foreground/30 bg-gradient-to-br from-secondary/30 to-transparent" />
        <span className="h-14 w-14 rounded-full border-2 border-foreground/30 bg-gradient-to-br from-muted/40 to-transparent" />
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
    <div className="flex gap-1.5">
      {socialItems.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent active:scale-95"
        >
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </a>
      ))}
    </div>
  )
}
