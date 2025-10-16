# Component Reference

This document outlines the purpose, props, and usage patterns for the primary components in the marketing site. Components follow the App Router pattern: server components by default, client components when interactivity is needed.

## Layout

| Component | Location | Props | Notes |
| --- | --- | --- | --- |
| `RootLayout` | `app/layout.tsx` | `children: React.ReactNode` | Sets global metadata, fonts, analytics. Extend with `<link rel="icon">`, Open Graph images, and structured data exporters. |

## Sections

| Component | Location | Props | Notes |
| --- | --- | --- | --- |
| `Navigation` | `components/navigation.tsx` | *(none)* | Client component. Controls mobile menu state. Add `aria-expanded`, `aria-controls`, and update anchor targets to match section IDs. Consider extracting navigation data into `content/navigation.ts`. |
| `Hero` | `components/hero.tsx` | *(none)* | Static hero with CTA buttons and background imagery. Replace `<img>` with `next/image` and provide analytics-friendly button handlers (`onClick` or `href`). |
| `WhatWeDo` | `components/what-we-do.tsx` | *(none)* | Client tabs for services categories. Convert to semantic tabs (`role="tablist"`) and move static copy into structured data or CMS-backed content. |
| `WhoWeAre` | `components/who-we-are.tsx` | *(none)* | Server component. Suggested to accept typed `stats` prop for reuse. |
| `WhereWeWork` | `components/where-we-work.tsx` | *(none)* | Client component controlling a location tab interface. Replace placeholder map div with an interactive map or illustration. |
| `FeaturedProjects` | `components/featured-projects.tsx` | *(none)* | Client component displaying project details based on selected category. Introduce `Project` type, accept data as props, and lazy-load imagery. |
| `OurTeam` | `components/our-team.tsx` | *(none)* | Carousel for leadership bios. Provide `teamMembers` prop, add swipe/keyboard support, and convert buttons to `aria`-aware controls. |
| `Contact` | `components/contact.tsx` | *(none)* | Contact form shell. Wire up `react-hook-form` with validation, add `label` tags, `name` attributes, success/error states, and integrate with CRM API. |
| `Footer` | `components/footer.tsx` | *(none)* | Static links and socials. Ensure links reference actual section IDs or routes. Add privacy, terms, and sitemap links when available. |

## UI Primitives

| Component | Location | Props | Notes |
| --- | --- | --- | --- |
| `Button` | `components/ui/button.tsx` | Inherits `React.ComponentProps<'button'>` plus `variant`, `size`, `asChild` | Wrap with `Link` via `asChild` to avoid invalid nesting. Define semantic variants (`primary`, `secondary`, `ghost`). |
| `Input` | `components/ui/input.tsx` | `type?: string` plus native input props | Provide `id` and `name` from parent forms. Works with `react-hook-form` thanks to forwarded props. |
| `Textarea` | `components/ui/textarea.tsx` | Native textarea props | Add `aria-describedby` when pairing with validation messages. |

## Extending the Library

- Prefer colocating domain-focused components under `components/sections/*` and exporting through an index barrel.
- Co-locate styles, types, and fixtures with the component to ease future CMS migration.
- Add Storybook or Ladle stories for components with branching UI states.
- When adding new interactive widgets, default to server components and opt into `use client` only when required.
