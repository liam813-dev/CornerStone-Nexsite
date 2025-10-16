import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Elite Construction | Premium Commercial & Residential Building Services",
  description:
    "Award-winning construction company specializing in luxury commercial and residential projects. Expert craftsmanship, innovative design, and unparalleled quality. Transform your vision into reality.",
  keywords:
    "construction, luxury construction, commercial building, residential construction, premium building services, construction company",
  authors: [{ name: "Elite Construction" }],
  openGraph: {
    title: "Elite Construction | Premium Building Services",
    description: "Transform your vision into reality with award-winning construction expertise",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
