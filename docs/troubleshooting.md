# Troubleshooting

Common issues and quick remedies when developing or deploying the CornerStone Nexsite.

## Development

| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| Tailwind classes not applying | Running in Tailwind v4 with legacy `tailwind.config.js` expectations | Ensure styles live in `app/globals.css` and restart dev server after changing `@theme` tokens. |
| Fonts missing in local build | Inter font variable not loading | Delete `.next`, reinstall deps, and verify `next/font` usage in `app/layout.tsx`. |
| TypeScript failing CI | `ignoreBuildErrors` removed | Run `pnpm lint` locally, add missing types, ensure `allowJs` is false unless needed. |

## Deployment

| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| Images failing to optimize | `next.config.mjs` sets `images.unoptimized = true` | Remove the flag and configure remote patterns if using external CDN. |
| Build succeeds locally but fails on Vercel | Missing environment variables | Confirm `.env.local` matches dashboard settings. |
| Contact form returns 500 | API route not yet implemented | Implement `/api/contact`, validate payload, and configure CRM credentials. |

## Accessibility & SEO

| Symptom | Likely Cause | Fix |
| --- | --- | --- |
| Anchor links scroll to wrong sections | Navigation IDs and section IDs out of sync | Align `href` values (e.g. `#services`, `#portfolio`) with actual section `id`s. |
| Lighthouse flags missing alt text | Decorative images lack `alt`, hero uses `<img>` | Convert to `next/image`, furnish descriptive `alt`, add `aria-hidden` for decorative elements. |
| CLS issues on hero images | No `width`/`height` or blurred placeholder | Use `next/image` with intrinsic sizing and `priority` on LCP image. |

## Support Channels

- Track defects and improvements in GitHub Issues or Linear.
- Document significant changes in `CHANGELOG.md`.
- Escalate infra-specific problems to the DevOps contact listed in the project brief.
