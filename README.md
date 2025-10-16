# CornerStone Nexsite

High-impact marketing site for a premium construction company, built with Next.js App Router and Tailwind CSS. The project originated from a v0.app design and now targets production readiness with strong SEO, accessibility, and content marketing support for CornerStone Construction in Toronto, Ontario.

## Project Overview

- One-page marketing experience covering services, portfolio, team, and contact CTA
- Responsive layout with rich imagery and hero animation
- Built to integrate future CMS content, structured data, and localized experiences

## Tech Stack

- Framework: Next.js 15 (App Router, React 19)
- Styling: Tailwind CSS v4, custom OKLCH design tokens
- Components: shadcn/ui primitives, Lucide icons
- Tooling: TypeScript, ESLint, Prettier, Vercel Analytics

## Prerequisites

- Node.js ≥ 20.11 (LTS recommended)
- pnpm ≥ 9.0 (preferred) or npm ≥ 10.8 if pnpm is unavailable
- macOS, Linux, or WSL2 shell environment

## Getting Started

```bash
# install dependencies
pnpm install

# start the dev server
pnpm dev
```

Visit http://localhost:3000 to view the site.

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Run Next.js in development mode with hot reloading |
| `pnpm build` | Create a production build (`.next`) |
| `pnpm start` | Start the production server (`next start`) |
| `pnpm lint` | Run ESLint (fix build-blocking issues before deployment) |
| `pnpm lint:fix` | Auto-fix lint issues where possible |
| `pnpm format` | Format the codebase with Prettier |

## Environment Variables

Copy `.env.example` → `.env.local` and populate the values. At minimum provide:

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
```

See [docs/deployment.md](docs/deployment.md) for additional production variables (e.g. reCAPTCHA, CRM endpoints).

## Folder Structure

```
app/                # App Router entry points, global layout, routing metadata
components/         # UI primitives and page sections (split by domain soon)
lib/                # Shared utilities (e.g. class name helpers)
public/             # Static assets (images, icons, fonts)
styles/             # Global Tailwind layers (legacy, slated for consolidation)
docs/               # Process, deployment, and component documentation
```

Recommended next step is to adopt the scalable structure outlined in the main review (components grouped into `components/sections`, `components/ui`, `content`, `app/(marketing)`, etc.).

## Build & Deployment

1. `pnpm lint && pnpm build`
2. Deploy `.next`, `public`, and configuration files to Vercel (default) or Netlify (see `docs/deployment.md`)
3. Configure environment variables and analytics in your hosting dashboard

CI/CD recommendations and branching strategy are documented in [docs/deployment.md](docs/deployment.md).

## Contributing

1. Create a feature branch from `main` (`feature/seo-schema`, `fix/contact-form`…)
2. Keep commits small, message in imperative mood
3. Add or update tests/docs relevant to the change
4. Open a pull request with a concise summary and checkbox for testing

See [docs/troubleshooting.md](docs/troubleshooting.md) for common pitfalls and fixes.
