import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstonewaterproofing.ca"),
  title: "Cornerstone Waterproofing | Toronto Basement Experts",
  description:
    "Family-run waterproofing, underpinning, and foundation repair across Toronto with 20-year warranties and fast site assessments.",
  keywords:
    "basement waterproofing, Toronto waterproofing, underpinning, foundation repair, sump pump installation, Cornerstone Waterproofing",
  authors: [{ name: "Cornerstone Waterproofing" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cornerstone Waterproofing | Toronto Basement Experts",
    description:
      "Family-run waterproofing, underpinning, and foundation repair across Toronto with 20-year warranties and fast site assessments.",
    type: "website",
    url: "https://cornerstonewaterproofing.ca",
    siteName: "Cornerstone Waterproofing",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone Waterproofing | Toronto Basement Experts",
    description:
      "Family-run waterproofing, underpinning, and foundation repair across Toronto with 20-year warranties and fast site assessments.",
  },
  referrer: "strict-origin-when-cross-origin",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-body font-heading antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
