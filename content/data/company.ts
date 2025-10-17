import type { CompanyInfo, NavLink, Stat } from "@/lib/types"

/**
 * Core company information
 */
export const companyInfo: CompanyInfo = {
  name: "Cornerstone Waterproofing",
  tagline: "Keep Your Toronto Basement Dry & Strong – Family-Run Waterproofing & Foundation Experts",
  phone: "416-879-4593",
  email: undefined, // Add when available
  address: {
    street: "2701 Wilson Avenue",
    city: "Toronto",
    province: "Ontario",
  },
  serviceArea: "GTA",
  warranty: "20-Year Waterproofing Warranty",
  social: [
    { href: "https://twitter.com", label: "Twitter", icon: "Twitter" },
    { href: "https://www.whatsapp.com", label: "Messaging", icon: "MessageCircle" },
    { href: "https://facebook.com", label: "Facebook", icon: "Facebook" },
    { href: "https://instagram.com", label: "Instagram", icon: "Instagram" },
  ],
}

/**
 * Navigation links for the main menu
 */
export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

/**
 * Statistics displayed in the "Who We Are" section
 */
export const companyStats: Stat[] = [
  { number: "20-Year", label: "Waterproofing Warranty" },
  { number: "Family-Run", label: "Owner-Led Crew" },
  { number: "GTA", label: "Service Area" },
]

/**
 * About section content
 */
export const aboutContent = {
  sectionTitle: "Who We Are",
  heading: "Built on family values and craftsmanship",
  paragraphs: [
    "At Cornerstone Waterproofing, every project starts with the promise that we will protect your home as if it were our own. Based in East York, Toronto, our family-run crew specializes in waterproofing, underpinning, and foundation upgrades that keep basements dry and structures sound.",
    "We believe in honest advice, clear communication, and solutions that stand up to Toronto weather. From the first consultation to final inspection, you work directly with Saverio LoMonaco and a tight-knit team that treats your property with respect.",
    "Our reputation is built on referrals, long-term warranties, and craftsmanship you can see. Whether you're stopping a leak or planning a full basement transformation, we make sure your foundation is ready for the future.",
  ],
}

/**
 * Hero section content
 */
export const heroContent = {
  projectCode: "EST. 2004",
  subtitle: `${companyInfo.name} · ${companyInfo.address.city}`,
  heading: companyInfo.tagline,
  description:
    "Protect your home with trusted waterproofing solutions built to last. Serving the GTA since 2004.",
  location: `${companyInfo.address.street} · ${companyInfo.address.city}, ${companyInfo.address.province}`,
  image: "/construction-site-with-crane-and-workers.webp",
  imageAlt: "Cornerstone crew waterproofing a concrete foundation",
  callouts: {
    primary: "Responsive waterproofing diagnostics completed within 48 hours by our engineering team.",
    website: "useful@cornerstonewaterproofing.ca",
  },
}
