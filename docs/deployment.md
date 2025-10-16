# Deployment Guide

This guide covers workflows for deploying the CornerStone Nexsite to Vercel (primary) and Netlify (alternate), along with CI/CD and branching best practices.

## Branching Strategy

1. `main` — production-ready branch, auto-deployed.
2. `develop` — optional integration branch for QA/UAT.
3. `feature/<slug>` — feature branches per task (e.g. `feature/seo-schema`, `fix/nav-accessibility`).
4. `hotfix/<slug>` — urgent patches derived from `main`.

Use pull requests for all merges, require code review, and squash commits for a clean history.

## CI/CD Recommendations

| Stage | Tooling | Notes |
| --- | --- | --- |
| Lint | `pnpm lint` | Fail build on TypeScript/ESLint errors (remove `ignoreDuringBuilds`). |
| Test | `pnpm test` | Add Vitest/Playwright suites as the project grows. |
| Build | `pnpm build` | Next.js production build. |
| Preview | Vercel Preview Deployments | Automatic preview per PR for stakeholder review. |

Integrate GitHub Actions (or Vercel checks) to run lint/build on every push. Example workflow:

```yaml
name: ci

on:
  pull_request:
  push:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "pnpm"
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm build
```

## Vercel Deployment (Recommended)

1. Connect GitHub repository to Vercel.
2. Configure build settings:
   - Framework Preset: **Next.js**
   - Build Command: `pnpm build`
   - Install Command: `pnpm install --frozen-lockfile`
   - Output Directory: `.next`
3. Add Environment Variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_CAPTCHA_SITE_KEY` (optional)
   - `FORMS_API_ENDPOINT` (optional server-only)
4. Enable Analytics (Vercel Analytics already imported in `app/layout.tsx`).
5. Configure domains (`www.cornerstoneconstruction.ca`, `cornerstoneconstruction.ca`) and enforce HTTPS.

## Netlify Deployment (Alternate)

1. Install the Netlify CLI (`npm install -g netlify-cli`) for local previews.
2. Build command: `pnpm build`
3. Publish directory: `.next`
4. Add environment variables via Netlify dashboard or `netlify.toml`.
5. Enable Essential Next.js plugin for SSR support.
6. Configure redirects for trailing slash handling if required.

## Post-Deployment Checklist

- ✅ Run Lighthouse on mobile/desktop for performance, accessibility, SEO.
- ✅ Validate structured data and canonical URLs.
- ✅ Verify analytics hits (GA debugger).
- ✅ Test contact form submission path.
- ✅ Confirm sitemap/robots endpoints respond with 200.
- ✅ Re-run E2E smoke tests or manual QA across modern browsers.
