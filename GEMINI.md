# Antigravity AI Rules — Remote Job Cohort

## Project Context
Next.js 16 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide Icons, Geist Font.
Design language: Vercel / Linear / Stripe — dark mode by default, premium and production-ready.

## Tech Stack Preferences

### Components
- **ALWAYS** use shadcn/ui components first before writing custom HTML elements
- Use the MCP `shadcn` server to browse, search and install components
- Import from `@/components/ui/*`
- Prefer shadcn variants/sizes over custom className hacks

### Animations & Motion
- Use **Framer Motion** (`motion` from `framer-motion`) for all animations and transitions
- Use **Magic UI** components for premium animated blocks (marquees, shimmer buttons, animated gradients, etc.)
- Browse Magic UI via the `magicui` MCP server
- Prefer subtle, tasteful animations — no excessive motion
- Always add `will-change: transform` for GPU-accelerated animations

### Icons
- Use **Lucide React** exclusively for icons (`import { IconName } from "lucide-react"`)
- Never use emoji as icons in production UI

### Typography & Fonts
- Use **Geist Sans** as the primary font (loaded via `next/font/local` from the `geist` package)
- Use **Geist Mono** for code blocks and technical text

### Styling
- Use **Tailwind CSS v4** utility classes
- Dark mode via `dark:` prefix — the `<html>` element carries the `dark` class by default
- Use CSS variables from `@/app/globals.css` for colors (shadcn tokens: `--background`, `--foreground`, `--primary`, etc.)
- Avoid hardcoded colors — always use semantic tokens

## Design Principles

### Design Language: Vercel / Linear / Stripe
- Dark backgrounds: `zinc-950` or `zinc-900` base
- Subtle borders: `zinc-800` / `zinc-700`
- Sharp, modern typography with tight tracking
- Micro-interactions on every interactive element
- Clean whitespace — content-first layouts
- Glass morphism: `backdrop-blur` + semi-transparent backgrounds for overlays/cards

### Accessibility (a11y)
- Every interactive element MUST have proper `aria-label` or descriptive text
- Focus rings must be visible (shadcn handles this by default)
- Semantic HTML: use `<nav>`, `<main>`, `<section>`, `<article>` correctly
- Color contrast minimum: WCAG AA (4.5:1 for normal text)

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Never sacrifice mobile UX for desktop aesthetics

### Code Quality
- TypeScript strict mode — no `any` types
- Named exports over default exports for components
- Co-locate component types with the component
- Use `cn()` from `@/lib/utils` for conditional className merging
- Server Components by default; add `"use client"` only when needed (interactivity, hooks, browser APIs)

## File Structure
```
app/
  layout.tsx        # Root layout with fonts, metadata, dark mode
  page.tsx          # Home page
  globals.css       # shadcn CSS variables + Tailwind directives
components/
  ui/               # shadcn auto-generated components (do not hand-edit)
  [feature]/        # Feature-specific components
lib/
  utils.ts          # cn() utility (shadcn)
```

## MCP Servers Available
- `shadcn` — browse and install shadcn/ui components
- `magicui` — browse and install Magic UI animation blocks
- `github` — repository context, commits, issues
- `filesystem` — read/write project files directly
- `playwright` — take screenshots, test responsive layouts, verify UI

## Key Rules Summary
1. Dark mode by default — always design dark-first
2. shadcn components > custom HTML
3. Framer Motion for animations
4. Geist font everywhere
5. Lucide icons only
6. Accessible, responsive, production-ready
7. TypeScript strict — no shortcuts
8. Server Components first, `"use client"` only when necessary
