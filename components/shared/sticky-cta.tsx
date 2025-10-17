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
      const shouldShow = scrollPosition > 500 // More reliable threshold (500px instead of 80vh)
      setIsVisible(shouldShow)
    }

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col gap-2 transition-all duration-500 ease-in-out sm:bottom-6 sm:right-6 sm:flex-row sm:gap-3 ${
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        asChild
        variant="cta"
        size="lg"
        className="rounded-none px-4 py-5 text-xs font-semibold uppercase tracking-[0.35em] shadow-2xl sm:px-6 sm:py-6"
      >
        <a href="tel:4168794593" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="hidden xs:inline">Call Now</span>
          <span className="xs:hidden">Call</span>
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-none border-2 border-foreground bg-background/95 backdrop-blur-sm px-4 py-5 text-xs font-semibold uppercase tracking-[0.35em] shadow-xl hover:bg-foreground hover:text-background sm:px-6 sm:py-6"
      >
        <Link href="#contact" className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span className="hidden xs:inline">Get Quote</span>
          <span className="xs:hidden">Quote</span>
        </Link>
      </Button>
    </div>
  )
}
