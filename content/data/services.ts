import type { ServiceCategory, ServiceData } from "@/lib/types"

/**
 * Service categories for the "What We Do" section
 */
export const serviceCategories: ServiceCategory[] = [
  { id: "waterproofing", label: "Waterproofing" },
  { id: "underpinning", label: "Underpinning" },
  { id: "concrete", label: "Concrete & Walkways" },
  { id: "entrances", label: "Basement Entrances" },
  { id: "foundation", label: "Foundation Repair" },
  { id: "new-foundations", label: "New Foundations" },
  { id: "floor-drains", label: "Floor Drains" },
]

/**
 * Service content details for each category
 */
export const serviceContent: ServiceData = {
  waterproofing: {
    title: "Multi-stage waterproofing that stays dry",
    description:
      "Our interior and exterior waterproofing systems eliminate leaks at the source with proper excavation, drainage board, and weeping tile replacement. Every project includes sump pump and window well solutions as needed, plus a 20-year transferable warranty on the treated areas.",
    image: "/Waterproofing-services.webp",
  },
  underpinning: {
    title: "Gain headroom with expert underpinning",
    description:
      "We lower basements safely to create livable space and meet code. From permit drawings to bench footings and new concrete floors, our crew manages each stage so you can finish your basement with confidence and added value.",
    image: "/modern-office-interior-construction.jpg",
  },
  concrete: {
    title: "Durable slabs, steps, and walkways",
    description:
      "Whether you need to replace a cracked driveway, pour a new basement slab, or add custom walkways, we form and finish concrete that stands up to Toronto weather. We also handle benched footings for underpinning projects.",
    image: "/luxury-residential-home-construction.jpg",
  },
  entrances: {
    title: "Separate entrances & walkouts",
    description:
      "We design and construct basement entrances that blend with your home, providing private access for rental suites or family members. From excavation to finished stairs and drainage, we deliver turnkey walkouts that stay watertight.",
    image: "/modern-commercial-construction-building-exterior.jpg",
  },
  foundation: {
    title: "Targeted foundation wall repair",
    description:
      "Cracked or bowing foundation walls are stabilized with structural repairs in the affected sections. We assess the root cause, reinforce the wall, and seal the envelope so your home stays secure for the long term.",
    image: "/construction-site-with-crane-and-workers.jpg",
  },
  "new-foundations": {
    title: "New foundations for additions & builds",
    description:
      "Planning an addition or accessory structure? We form, pour, and waterproof new foundations that tie into existing homes or support brand-new builds, coordinating with your architect or builder every step of the way.",
    image: "/modern-office-interior-construction.jpg",
  },
  "floor-drains": {
    title: "Floor drain repair & upgrades",
    description:
      "Outdated clay drains are replaced with modern ABS/PVC systems that move water efficiently. We repair damaged sections, install new backwater valves, and ensure your drainage keeps pace with today's plumbing standards.",
    image: "/luxury-residential-home-construction.jpg",
  },
}
