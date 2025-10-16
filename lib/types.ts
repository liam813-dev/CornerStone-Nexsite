/**
 * Shared TypeScript type definitions for the Cornerstone Waterproofing website
 */

/**
 * Service category types
 */
export type ServiceId =
  | "waterproofing"
  | "underpinning"
  | "concrete"
  | "entrances"
  | "foundation"
  | "new-foundations"
  | "floor-drains"

export interface ServiceCategory {
  id: ServiceId
  label: string
}

export interface ServiceContent {
  title: string
  description: string
  image: string
}

export type ServiceData = Record<ServiceId, ServiceContent>

/**
 * Statistics and metrics types
 */
export interface Stat {
  number: string
  label: string
}

/**
 * Team member types
 */
export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

/**
 * Project types
 */
export type ProjectCategory = "residential" | "commercial" | "industrial" | "all"

export interface ProjectCategoryOption {
  id: ProjectCategory
  label: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory[]
  location: string
  year: string
  description: string
  image: string
  stats?: {
    label: string
    value: string
  }[]
}

/**
 * Location/Service area types
 */
export interface ServiceLocation {
  id: string
  name: string
  description: string
}

/**
 * Contact form types
 */
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  service?: ServiceId
}

/**
 * Navigation types
 */
export interface NavLink {
  href: string
  label: string
}

/**
 * Social media link types
 */
export interface SocialLink {
  href: string
  label: string
  icon: string
}

/**
 * Company information types
 */
export interface CompanyInfo {
  name: string
  tagline: string
  phone: string
  email?: string
  address: {
    street: string
    city: string
    province: string
    postalCode?: string
  }
  serviceArea: string
  warranty: string
  social: SocialLink[]
}
