# Customization Guide

A practical reference for anyone cloning this repo and making it their own. Everything is file-based — no CMS, no database.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Personal Info & Social Links](#2-personal-info--social-links)
3. [Projects](#3-projects)
4. [Skills](#4-skills)
5. [Blog Posts](#5-blog-posts)
6. [Your Photo](#6-your-photo)
7. [Colors & Theme](#7-colors--theme)
8. [Typography & Fonts](#8-typography--fonts)
9. [Navigation](#9-navigation)
10. [Site Metadata](#10-site-metadata)
11. [Adding a New Page](#11-adding-a-new-page)

---

## 1. Getting Started

```bash
git clone <your-repo-url>
cd zahir-site
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. Changes to most files hot-reload instantly.

---

## 2. Personal Info & Social Links

**File:** `content/portfolio.ts`

This is the single source of truth for your name, role, bio, email, and social links. Every page that shows this information pulls from here.

```ts
export const profile = {
  name: "Your Name",
  role: "Your Title",               // shown as the eyebrow label in the hero
  location: "Your City, Country",
  bio: "A sentence or two about what you do.",
  email: "you@example.com",
  resumeUrl: "/your-resume.pdf",    // put the PDF in public/ and reference it here
  social: [
    { label: "GitHub",   href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "X",        href: "https://x.com/yourusername" },
  ],
};
```

Add or remove social links by editing the `social` array — the contact page will update automatically.

---

## 3. Projects

**File:** `content/portfolio.ts`

Each project is an object in the `projects` array.

```ts
export const projects = [
  {
    name: "Project Name",
    summary: "One or two sentences describing what it does and why it matters.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],  // shown as monospace chips
    href: "https://your-project-url.com",             // or "#" if not yet public
    featured: true,   // true = appears on the homepage; false = projects page only
  },
];
```

- Set `featured: true` on up to 2–3 projects to show them on the homepage.
- The `stack` array can hold any strings — keep them short (one word each ideally).
- Order matters: projects render in the order they appear in the array.

---

## 4. Skills

**File:** `content/portfolio.ts`

A flat array of strings, rendered as monospace chips on the homepage and about page.

```ts
export const skills = [
  "TypeScript",
  "React",
  "Node.js",
  // add or remove as needed
];
```

---

## 5. Blog Posts

**Directory:** `content/blogs/`

Every `.mdx` file in this folder becomes a blog post. Create a new file to publish a new post — no other configuration needed.

### File naming

The filename becomes the URL slug:

```
content/blogs/my-first-post.mdx  →  /blogs/my-first-post
```

Use lowercase letters, numbers, and hyphens only.

### Frontmatter

Each file must start with a YAML frontmatter block:

```mdx
---
title: "Your Post Title"
date: "2026-03-01"
description: "A one-sentence summary shown in the blog list and on the post page."
---

Your content starts here. You can use standard **Markdown** syntax.

## Headings work

- So do lists
- And [links](https://example.com)

> Blockquotes are styled with an orange left border.
```

### MDX components

You can use the built-in `<Button>` component inside any post:

```mdx
<Button href="https://example.com">Click me</Button>
```

To add more MDX components, create them in `components/mdx/` and register them in `app/blogs/[slug]/page.tsx` inside the `components` object passed to `<MDXRemote>`.

---

## 6. Your Photo

**Directory:** `public/images/`

Replace `public/images/zahir-choudhry.jpg` with your own photo. Keep the same filename, or update the `src` prop in three places if you rename it:

| Location | What it controls |
|---|---|
| `app/layout.tsx` | Small circular avatar in the header |
| `app/page.tsx` | Photo in the homepage hero |
| `app/about/page.tsx` | Larger portrait on the about page |

**Tips for best results:**
- Use a portrait-orientation image (taller than wide).
- At least 600×800px for the about page portrait.
- The image is cropped from the top (`object-position: center top`), so make sure your face is in the upper portion of the photo.

---

## 7. Colors & Theme

**File:** `app/globals.css`

All colors are CSS custom properties defined at the top of the file. Change them here and every component updates automatically.

```css
:root {
  --bg:          #0c0a08;   /* page background */
  --bg-raised:   #141109;   /* slightly elevated surfaces */
  --panel:       #1b1812;   /* card backgrounds */
  --panel-hover: #231f18;   /* card backgrounds on hover */
  --text:        #ede8e0;   /* primary text */
  --muted:       #867a6e;   /* secondary/dimmed text */
  --line:        #2e2922;   /* borders and dividers */
  --accent:      #e8672a;   /* main accent — buttons, links, dots */
  --accent-soft: rgba(232, 103, 42, 0.10);
  --accent-glow: rgba(232, 103, 42, 0.22);
  --gold:        #c9933d;   /* secondary accent — gradient endings */
}
```

**To change the accent color** (e.g. to teal `#2dd4bf`):

1. Update `--accent` to your new hex value.
2. Update `--accent-soft` and `--accent-glow` to matching rgba versions.
3. Update the `--gold` to a complementary secondary tone if desired.
4. In the `body` `background-image` gradient, swap the rgba values to match your new accent.

---

## 8. Typography & Fonts

**File:** `app/layout.tsx`

Fonts are loaded via `next/font/google`. Four typefaces are in use:

| Variable | Font | Used for |
|---|---|---|
| `--font-display` | DM Serif Display | H1/H2/H3 headings, logo |
| `--font-body` | Plus Jakarta Sans | Body text, card content |
| `--font-nav` | Syne | Nav links, labels, eyebrows, buttons |
| `--font-mono` | Fira Code | Skill chips, stack tags, code |

### Changing a font

1. Browse [Google Fonts](https://fonts.google.com) and pick a replacement.
2. In `layout.tsx`, swap the import and update the variable name if needed:

```ts
// Before
import { DM_Serif_Display } from "next/font/google";
const dmSerifDisplay = DM_Serif_Display({ ... });

// After (example: switching to Playfair Display)
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});
```

3. Make sure the `variable` value stays the same (`--font-display` etc.) so the CSS picks it up automatically.

---

## 9. Navigation

**File:** `app/layout.tsx`

The nav links are defined in a simple array near the top:

```ts
const navItems = [
  { href: "/",        label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs",   label: "Blog" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];
```

Add, remove, or reorder items here. If you add a new page (e.g. `/uses`), create the corresponding route first (see [Adding a New Page](#11-adding-a-new-page)), then add it to this array.

---

## 10. Site Metadata

**File:** `app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: "Your Name — Your Title",
  description: "Short description for search engines and link previews.",
};
```

Each page can also export its own `metadata` to override the default. See any page file (e.g. `app/about/page.tsx`) for an example.

---

## 11. Adding a New Page

1. Create a folder and `page.tsx` inside `app/`:

```
app/uses/page.tsx
```

2. Write a basic page component:

```tsx
export const metadata = {
  title: "Uses | Your Name",
  description: "Tools and gear I use daily.",
};

export default function UsesPage() {
  return (
    <section className="stack-md page-enter">
      <h1 className="page-title">Uses</h1>
      <p className="page-subtitle">The tools I reach for every day.</p>
      {/* your content */}
    </section>
  );
}
```

3. Add it to the nav in `app/layout.tsx`:

```ts
{ href: "/uses", label: "Uses" },
```

The `page-enter` class gives it the fade-up animation on load. The `stack-md`, `page-title`, and `page-subtitle` classes match the visual style of the other pages.

---

## Quick Reference

| What to change | File |
|---|---|
| Name, bio, email, social | `content/portfolio.ts` |
| Projects list | `content/portfolio.ts` |
| Skills list | `content/portfolio.ts` |
| Blog posts | `content/blogs/*.mdx` |
| Photo | `public/images/` |
| Colors | `app/globals.css` (`:root` block) |
| Fonts | `app/layout.tsx` |
| Navigation | `app/layout.tsx` (`navItems` array) |
| Page metadata | Each `app/*/page.tsx` |
| MDX components | `components/mdx/` |
