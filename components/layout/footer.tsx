"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <ScrollReveal className="container mx-auto px-6 lg:px-12" direction="up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <ScrollReveal direction="up">
            <h3 className="text-2xl font-bold mb-4 tracking-wider">CORNERSTONE WATERPROOFING</h3>
            <p className="text-white/70 font-light leading-relaxed">
              Family-run waterproofing, underpinning, and foundation services trusted by Toronto homeowners.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-white/70 hover:text-secondary transition-colors font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white/70 hover:text-secondary transition-colors font-light">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-secondary transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-secondary transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={140}>
            <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 font-light">Waterproofing</li>
              <li className="text-white/70 font-light">Underpinning & Basement Lowering</li>
              <li className="text-white/70 font-light">Concrete Slabs & Walkways</li>
              <li className="text-white/70 font-light">Foundation Repair</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h4 className="font-semibold mb-4 tracking-wide uppercase text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 hover:bg-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 hover:bg-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 hover:bg-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 hover:bg-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="border-t border-white/10 pt-8 text-center" direction="up" delay={240}>
          <p className="text-white/60 font-light text-sm">
            © 2025 Cornerstone Waterproofing. All rights reserved.
          </p>
        </ScrollReveal>
      </ScrollReveal>
    </footer>
  )
}
