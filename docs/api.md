# API Architecture

The marketing site currently ships without public API routes. This document outlines the planned surface area for integrating first-party and third-party services as the project evolves.

## Planned Routes

| Route | Method | Status | Purpose | Notes |
| --- | --- | --- | --- | --- |
| `/api/contact` | `POST` | Planned | Accept contact form submissions, validate input, forward to CRM/email service | Secure with CAPTCHA token verification and rate limiting. |
| `/api/sitemap.xml` | `GET` | Planned | Dynamic sitemap generation aligned with marketing pages and blog content | Use `NEXT_PUBLIC_SITE_URL` to produce absolute URLs. |
| `/api/revalidate` | `POST` | Optional | Webhook target for CMS revalidation | Protect with shared secret header. |

## Integration Targets

- **CRM / Email**: HubSpot, Salesforce, or Resend for transactional email. Store API keys as server-only env vars.
- **Analytics**: Google Analytics 4 (`NEXT_PUBLIC_GA_ID`) already scaffolded. Add server-side tracking or GTM as required.
- **Search Console**: Host Google Search Console HTML verification under `public/` or expose via metadata.

## Implementation Guidelines

1. Keep API route handlers inside `app/api/<route>/route.ts`.
2. Validate all request payloads using `zod` (already installed) and return typed responses.
3. Log errors with structured metadata (e.g. `console.error({ route, error })`) and centralize logging later.
4. Apply rate limiting using [Upstash Redis](https://upstash.com/) or middleware to protect against abuse.
5. Enforce CORS restrictions based on `NEXT_PUBLIC_SITE_URL`.

When the API surface grows, promote shared schemas (`/lib/validators`), service clients (`/lib/services`), and typed SDKs for consuming data on the client.
