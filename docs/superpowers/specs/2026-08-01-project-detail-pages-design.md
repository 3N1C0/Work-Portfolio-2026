# Project Detail Pages — Design Spec
**Date:** 2026-08-01

## Goal

Add a "Case Study" button to each project card that navigates to a dedicated detail page featuring three sections — Why, How, and Results — to communicate project impact and learnings.

## Architecture

### 1. `data/projects.ts` (new)
Extract the `projects` array from `components/sections/Projects.tsx` into a shared data file. Add four new fields to the project type:

```ts
slug: string       // kebab-case URL segment, e.g. "autonomous-hexapod"
why: string        // placeholder text — why the project was built
how: string        // placeholder text — how it was executed
results: string    // placeholder text — outcomes and learnings
```

All existing fields (`title`, `caption`, `description`, `tags`, `gradient`, `placeholder`, `status`, `url`, `featured`) remain unchanged.

### 2. `components/sections/Projects.tsx` (updated)
- Import `projects` from `data/projects.ts` instead of defining inline.
- In `FeaturedCard` and `SmallCard`, replace the `<a href={p.url}>Explore Project ↗</a>` with a Next.js `<Link href={/projects/${p.slug}}>Case Study →</Link>` styled identically to the existing link.

### 3. `app/projects/[slug]/page.tsx` (new)
Dynamic Next.js App Router page. Looks up the project by `slug` from `data/projects.ts`. Returns 404 if not found.

**Layout (top to bottom):**
- `<Navbar />` (same component used on main page)
- `max-w-2xl mx-auto px-4 py-36` content wrapper
- `← Back` link — `href="/#projects"`, styled in `FG_DIM` (`rgba(255,255,227,0.22)`) with hover to `ACCENT` (`#AABA99`)
- Project title in `font-mono font-semibold` at ~2rem, color `#FFFFE3`
- `<StatusPill />` (extracted/shared from Projects.tsx or duplicated inline)
- Three content sections, each containing:
  - Small all-caps label chip — same style as the "Projects" pill on the main page (`ACCENT` color, `rgba(170,186,153,0.06)` bg, `rgba(170,186,153,0.22)` border)
  - Section heading (`Why` / `How` / `Results`) in `font-mono font-semibold` ~1.5rem, color `#FFFFE3`
  - Body text in `font-mono text-sm leading-relaxed`, color `rgba(255,255,227,0.5)`
- Thin `rgba(255,255,227,0.06)` `<hr>` divider between sections

**Animation:**
- Each section fades in with `motion.div`, `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, staggered delay, easing `[0.16, 1, 0.3, 1]`, duration `0.6s`.

**Background:** `#171717` (set on `<main>` wrapper), matching the main page exactly.

## Design Tokens (unchanged from main site)
```
FG        = '#FFFFE3'
FG_MUTED  = 'rgba(255,255,227,0.5)'
FG_DIM    = 'rgba(255,255,227,0.22)'
ACCENT    = '#AABA99'
SURFACE   = '#1c1c1c'
BORDER    = 'rgba(255,255,227,0.06)'
```

## Placeholder Content
Each project's `why`, `how`, and `results` fields will be filled with one or two sentences of lorem-style placeholder text at implementation time. The user will replace these with real content.

## Out of Scope
- Image/media on the detail page
- Navigation between projects (prev/next)
- The `url` field on projects (kept for future external links)
