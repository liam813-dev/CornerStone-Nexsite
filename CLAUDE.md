# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing site for Cornerstone Waterproofing, a waterproofing and structural reinforcement company in Toronto. Built with Next.js 15 App Router, React 19, Tailwind CSS v4, and shadcn/ui components. Codebase recently reorganized for maintainability with clear separation of concerns.

## Development Commands

```bash
# Install dependencies (prefer pnpm)
pnpm install

# Development server (http://localhost:3000)
pnpm dev

# Production build (builds successfully with no errors)
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint        # Check for issues
pnpm lint:fix    # Auto-fix where possible

# Formatting
pnpm format      # Format with Prettier
```

## Architecture

### Folder Structure

The codebase follows a clean, modular architecture:

```
app/
  ├── layout.tsx           # Root layout with metadata, fonts, analytics
  ├── page.tsx             # Home page composing all sections
  └── globals.css          # Tailwind config, theme tokens, animations

components/
  ├── layout/              # Layout components (Navigation, Footer)
  ├── sections/            # Page sections (Hero, WhatWeDo, WhoWeAre, etc.)
  ├── shared/              # Reusable utilities (ScrollReveal)
  └── ui/                  # shadcn/ui primitives (Button, Input, Textarea)

content/
  └── data/                # Structured content separated from components
      ├── services.ts      # Service categories and content
      └── company.ts       # Company info, navigation, stats, about content

lib/
  ├── types.ts             # Shared TypeScript type definitions
  └── utils.ts             # Utility functions (cn, etc.)

public/                    # Static assets (images, logos, fonts)
```

### Key Architectural Patterns

**Separation of Concerns**
- **Layout components** (`components/layout/`): Navigation and Footer
- **Section components** (`components/sections/`): Hero, WhatWeDo, WhoWeAre, WhereWeWork, FeaturedProjects, OurTeam, Contact
- **Shared utilities** (`components/shared/`): ScrollReveal for scroll-triggered animations
- **UI primitives** (`components/ui/`): shadcn/ui components for consistent styling

**Content as Data**
- Service information lives in `content/data/services.ts`
- Company info, navigation links, stats, and about content in `content/data/company.ts`
- Components import data instead of hardcoding content
- Makes content updates easy without touching component logic

**Type Safety**
- All data structures have TypeScript types defined in `lib/types.ts`
- Types include: `ServiceId`, `ServiceCategory`, `ServiceData`, `TeamMember`, `Project`, `CompanyInfo`, `NavLink`, `Stat`, etc.
- Import types from `@/lib/types` when creating new components or data files

### Page Structure

**Single-page layout** - All sections render in `app/page.tsx`:
```tsx
Hero → WhoWeAre → WhereWeWork → WhatWeDo → FeaturedProjects → OurTeam → Contact → Footer
```

Each section is a client component (`"use client"`) due to interactivity (tabs, carousels, scroll animations).

### Styling & Theming

- **Tailwind CSS v4**: PostCSS-based configuration
- **Custom design tokens**: OKLCH color palette in `app/globals.css`
- **Zero border radius**: `--radius: 0rem` for sharp, modern aesthetic
- **Teal accent color**: `oklch(0.58 0.14 195)` for secondary/accent
- **Inter font**: Google Fonts with weights 300-700
- **Custom animations**: `fade-in`, `fade-in-up` keyframes for hero section
- **ScrollReveal**: Intersection Observer-based animations with reduced motion support

### Client vs Server Components

- Most sections use `"use client"` for interactivity (tabs, state, animations)
- Navigation (mobile menu), service tabs, project filters, team carousel all require client-side state
- Prefer server components by default; add `"use client"` only when necessary

## Next.js Configuration

**Production-Ready** (`next.config.mjs`):
- ESLint and TypeScript errors no longer ignored (builds will fail on errors)
- Image optimization enabled with AVIF and WebP formats
- Images currently use `<img>` tags; migrate to `next/image` for optimization

## Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_SITE_URL`: Base URL for absolute links, sitemap, structured data
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 measurement ID
- `NEXT_PUBLIC_CAPTCHA_SITE_KEY`: (Optional) reCAPTCHA/hCaptcha site key
- `FORMS_API_ENDPOINT`: (Optional) Server-only CRM endpoint for form submissions

## Key Patterns and Conventions

### Adding New Content

**Service content**: Update `content/data/services.ts`
```typescript
export const serviceCategories: ServiceCategory[] = [...]
export const serviceContent: ServiceData = {...}
```

**Company information**: Update `content/data/company.ts`
```typescript
export const companyInfo: CompanyInfo = {...}
export const companyStats: Stat[] = [...]
```

### Creating New Components

**Section components**:
1. Create in `components/sections/`
2. Import data from `content/data/`
3. Import types from `@/lib/types`
4. Add `"use client"` if interactive
5. Use `ScrollReveal` from `@/components/shared/scroll-reveal` for animations
6. Import in `app/page.tsx` and add to page flow

**Layout components**:
1. Create in `components/layout/`
2. Extract navigation or footer-related logic

**Shared utilities**:
1. Create in `components/shared/`
2. Use for reusable, non-section-specific components

### Image Handling

Currently using `<img>` tags with public paths (e.g., `/Waterproofing-services.webp`).

**To migrate to next/image**:
```tsx
import Image from "next/image"

<Image
  src="/Waterproofing-services.webp"
  alt="Descriptive alt text"
  width={600}
  height={400}
  className="..."
/>
```

### Routing and Navigation

- **Hash-based anchors** for single-page navigation (`#home`, `#about`, `#services`, etc.)
- Use `next/link` for internal routes
- Use `<a>` for external links and phone CTAs: `<a href="tel:14168794593">Call 416-879-4593</a>`

### Forms

Contact form in `components/sections/contact.tsx` is currently a shell.

**To add validation**:
- Use `react-hook-form` + `zod` (already in dependencies)
- Wire up to `FORMS_API_ENDPOINT` or email service
- Add success/error states

## Company Branding

- **Name**: Cornerstone Waterproofing
- **Tagline**: We Help You Construct with Confidence
- **Location**: 2701 Wilson Avenue, Toronto, Ontario
- **Phone**: 416-879-4593
- **Service Area**: GTA (Greater Toronto Area)
- **Warranty**: 20-Year Waterproofing Warranty
- **Owner**: Saverio LoMonaco

## Documentation

- `docs/components.md`: Component reference and extension guidelines
- `docs/deployment.md`: Vercel/Netlify deployment, CI/CD, branching strategy
- `docs/troubleshooting.md`: Common pitfalls and fixes
- `docs/api.md`: (Future) API integrations

## Recent Improvements

The codebase was recently reorganized (2025) to improve maintainability:

✅ **Organized folder structure** with clear boundaries (layout, sections, shared, ui)
✅ **Content extracted** into `content/data/` files
✅ **Type definitions** created in `lib/types.ts`
✅ **Dead code removed** (1.2MB `make-it-new/` directory, unused ThemeProvider)
✅ **Duplicate styles consolidated** (removed redundant `styles/` directory)
✅ **Build configuration fixed** (TypeScript/ESLint errors no longer ignored)
✅ **All imports updated** to reflect new structure
✅ **Build verified** - compiles successfully with no errors

## Remaining Technical Debt

1. **Images not optimized** - Using raw `<img>` tags instead of `next/image`
2. **Contact form incomplete** - Needs validation logic and submission handler
3. **Navigation duplication** - Hero component includes its own header; separate Navigation component exists but isn't used
4. **Hardcoded content in components** - Some sections still have inline content (migrate to content/data/)
5. **No tests** - No unit tests or E2E tests configured
6. **Accessibility gaps** - Missing some ARIA labels, keyboard navigation improvements needed

## Common Tasks

### Updating Service Content
Edit `content/data/services.ts`:
```typescript
export const serviceContent: ServiceData = {
  waterproofing: {
    title: "...",
    description: "...",
    image: "/path/to/image.webp",
  },
  // ...
}
```

### Adding a Navigation Link
Edit `content/data/company.ts`:
```typescript
export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#new-section", label: "New Section" },
  // ...
]
```

### Modifying Company Info
Edit `content/data/company.ts`:
```typescript
export const companyInfo: CompanyInfo = {
  name: "Cornerstone Waterproofing",
  phone: "416-879-4593",
  // ...
}
```

### Creating a New Section Component
1. Create `components/sections/new-section.tsx`
2. Import types: `import type { ... } from "@/lib/types"`
3. Import data: `import { ... } from "@content/data/..."`
4. Import shared components: `import { ScrollReveal } from "@/components/shared/scroll-reveal"`
5. Add to `app/page.tsx` in desired order
6. Update navigation links if needed

## Build and Deployment

**Local build**:
```bash
pnpm lint && pnpm build
```

**Deployment** (see `docs/deployment.md` for full details):
- Primary: Vercel (auto-deploy from `main` branch)
- Build command: `pnpm build`
- Install command: `pnpm install --frozen-lockfile`
- Output directory: `.next`

**CI/CD**: Run lint and build on every PR to catch errors early

## Notes for Future Development

- When adding new data types, update `lib/types.ts` first
- Keep content in `content/data/` files, not inline in components
- Use `ScrollReveal` wrapper for scroll-triggered animations
- Follow existing naming conventions (kebab-case for files, PascalCase for components)
- Test builds locally before pushing (`pnpm build` must succeed)
- Maintain single source of truth for company info in `content/data/company.ts`
