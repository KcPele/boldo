## Boldo Blog UI (Next.js)

A polished, interview-ready implementation of the Boldo Blog UI using Next.js App Router, Tailwind CSS v4, and shadcn-style components. The project mirrors the provided Figma design: global theming, buttons, navbar, footer, featured article, latest news grid, and a call-to-action section.

### Highlights

- Design-accurate components built from Figma :
  - Navbar (responsive with hamburger menu)
  - Button system (variants and sizes mapped to Boldo tokens)
  - Featured Article section
  - Reusable Article Card
  - Latest News (6-article grid)
  - Footer
  - Call To Action (email capture layout)
- Centralized color tokens with CSS variables in `src/app/globals.css` (Tailwind v4 `@theme inline`).
- Strict linting/formatting with Biome.

### Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Biome (lint/format)
- Radix UI primitives (separator, slot)
- lucide-react icons

### Getting Started

1. Install dependencies

```bash
bun install
# or: npm i | pnpm i | yarn
```

2. Run the dev server

```bash
bun dev
# http://localhost:3000
```

3. Lint and format

```bash
bun lint
bun format
```

### Project Structure

```text
src/
  app/
    layout.tsx           # Fonts, global styles, Navbar, Footer
    page.tsx             # Home page composition
    globals.css          # Tailwind v4 theme + CSS variables
  components/
    ui/button.tsx        # Boldo design-system button variants/sizes
    navbar.tsx           # Responsive navbar with mobile menu
    footer.tsx           # Footer columns + copy
    heading.tsx          # Page heading
    featured-article.tsx # Hero article block
    article-card.tsx     # Reusable article card
    latest-news.tsx      # Section with 6 articles
    call-to-action.tsx   # CTA section (email + button)
  lib/
    utils.ts             # cn() helper (clsx + tailwind-merge)
public/
  logo.svg               # Brand logo (from Figma)
  ...                    # Article images and avatars
```

### Theming

- Brand tokens are defined in `:root` as CSS variables and exposed to Tailwind via `@theme inline` as `--color-*` tokens.
- Use classes like `bg-boldo-blue-dark`, `text-boldo-white`, `border-boldo-blue-dark`, etc.

### Commands

```bash
# Develop
bun dev

# Type-check (Next.js handles TS at build)
bun build

# Lint / Format
bun lint
bun format
```

### Notes

- Images were downloaded from the provided Figma file and stored in `public/`.
- Components are designed for clarity, accessibility (aria labels, keyboard focus), and alignment with the design system.
