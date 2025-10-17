"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border border-white/50 bg-[rgba(226,239,255,0.9)] supports-[backdrop-filter]:bg-[rgba(226,239,255,0.75)] supports-[backdrop-filter]:backdrop-blur-2xl shadow-[0_20px_45px_-18px_rgba(28,44,90,0.4)]"
          : "border border-white/40 bg-[rgba(235,244,255,0.65)] supports-[backdrop-filter]:bg-[rgba(235,244,255,0.4)] supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_18px_40px_-25px_rgba(30,64,175,0.35)]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/CornerStone-logo.svg"
              alt="Cornerstone Waterproofing"
              width={160}
              height={40}
              className="h-8 w-auto transition-opacity duration-300"
              priority
            />
            <span className="sr-only">Cornerstone Waterproofing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="#services"
              className="text-slate-800/85 hover:text-slate-900 transition-colors font-semibold text-xs tracking-[0.35em] uppercase"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-slate-800/85 hover:text-slate-900 transition-colors font-semibold text-xs tracking-[0.35em] uppercase"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-slate-800/85 hover:text-slate-900 transition-colors font-semibold text-xs tracking-[0.35em] uppercase"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-slate-800/85 hover:text-slate-900 transition-colors font-semibold text-xs tracking-[0.35em] uppercase"
            >
              Contact
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-secondary hover:bg-secondary/85 text-slate-900 font-semibold tracking-[0.35em] uppercase text-xs px-4 shadow-[0_12px_30px_-12px_rgba(37,99,235,0.45)]"
            >
              <a href="tel:14168794593">Call Now</a>
            </Button>
          </div>

          <button
            className="lg:hidden text-slate-900 bg-white/70 backdrop-blur-md p-1.5 hover:bg-white/80 transition-colors rounded-md shadow-[0_10px_25px_-15px_rgba(28,44,90,0.45)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-3 bg-[rgba(235,244,255,0.92)] backdrop-blur-xl -mx-6 px-6 rounded-3xl shadow-[0_30px_60px_-35px_rgba(28,44,90,0.6)]">
            <Link
              href="#services"
              className="block text-slate-800/85 hover:text-slate-900 transition-colors font-semibold py-2.5 text-xs tracking-[0.3em] uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="block text-slate-800/85 hover:text-slate-900 transition-colors font-semibold py-2.5 text-xs tracking-[0.3em] uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block text-slate-800/85 hover:text-slate-900 transition-colors font-semibold py-2.5 text-xs tracking-[0.3em] uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-slate-800/85 hover:text-slate-900 transition-colors font-semibold py-2.5 text-xs tracking-[0.3em] uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              size="sm"
              className="w-full bg-secondary hover:bg-secondary/85 text-slate-900 font-semibold tracking-[0.3em] uppercase text-xs py-3 shadow-[0_14px_35px_-20px_rgba(37,99,235,0.55)]"
            >
              <a href="tel:14168794593">Call Now</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
