"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

/**
 * Sticky CTA that appears after scrolling past hero section
 * Provides persistent call-to-action buttons for better conversion
 */
export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section (typically ~100vh)
      const scrollPosition = window.scrollY
      const shouldShow = scrollPosition > window.innerHeight * 0.8
      setIsVisible(shouldShow)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 sm:flex-row ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        asChild
        variant="cta"
        size="lg"
        className="rounded-none px-6 py-6 text-xs font-semibold uppercase tracking-[0.35em] shadow-2xl"
      >
        <a href="tel:4168794593" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-none border-foreground bg-background/90 backdrop-blur-sm px-6 py-6 text-xs font-semibold uppercase tracking-[0.35em] shadow-xl"
      >
        <Link href="#contact" className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Get Quote
        </Link>
      </Button>
    </div>
  )
}
