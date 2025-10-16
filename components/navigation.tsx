"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-wider">CONSTRUCTION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="#services"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Contact
            </Link>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold tracking-wide uppercase text-sm px-8"
            >
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-white bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 bg-primary/95 backdrop-blur-md -mx-6 px-6">
            <Link
              href="#services"
              className="block text-white/90 hover:text-white transition-colors font-medium py-3 text-sm tracking-wide uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block text-white/90 hover:text-white transition-colors font-medium py-3 text-sm tracking-wide uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="block text-white/90 hover:text-white transition-colors font-medium py-3 text-sm tracking-wide uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-white/90 hover:text-white transition-colors font-medium py-3 text-sm tracking-wide uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold tracking-wide uppercase"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
