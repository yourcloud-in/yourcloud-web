# GravRel — yourcloud-web CLAUDE.md

## Company
GravRel — India's first solar-powered, DPDP-compliant cloud
Founder: Babrit Behera | ceo@gravrel.com | Bhubaneswar, Odisha
UDYAM: UDYAM-OD-03-0020346 | GitHub: github.com/yourcloud-in

## This Repo
Next.js 14 + TypeScript + Tailwind CSS
Public marketing site: gravrel.com
11 pages: / /pricing /dpdp /try /freedomain /green /about /blog /contact /datacenter /devdocs

## Mission — Non-Negotiable
1. Zero carbon — 100% solar powered
2. Zero water waste — no liquid cooling ever
3. Green to environment — BRSR certs for customers

## Brand
Primary: #1D9E75 | Dark bg: #0A1628 | Card: #0D2137 | Font: Plus Jakarta Sans

## Animation Rules
- ALWAYS import from 'motion/react' — NEVER from 'framer-motion'
- ALWAYS add useReducedMotion hook
- Scroll reveals: whileInView + viewport={{ once: true }}
- Hover cards: whileHover={{ scale: 1.02, y: -4 }}

## Code Rules
- TypeScript strict mode
- Tailwind for all styling — no inline styles
- Lucide React for icons
- No purple gradients ever
- No Inter/Arial/Roboto as primary font

## File Structure
src/app/[page]/page.tsx — each page
src/components/ — shared components
public/og-image.png — social share image

## Plan-First Rule
Before ANY code change:
1. State what you understand the task to be
2. List files you will modify
3. Describe approach in 2-3 sentences
4. Confirm before touching production config

## Security
- NEVER commit .env files
- NEVER expose API keys in client-side code
- All analytics via Plausible (privacy-first)
