# Personal Portfolio & Blog

A clean, fast, fully customizable portfolio template built with Next.js. Designed for developers and engineers who want a professional home on the web — to show off their projects, share their experience, and write about what they're building. No CMS, no database, no subscription. Just files.

> Built by [Zahir Choudhry](https://github.com/biggestZ). Free to clone and make your own.

---

## What's Included

- **Homepage** — hero intro, featured projects, latest blog posts, and skills
- **Projects page** — full list of your work with stack tags
- **About page** — bio, photo, work experience timeline, education, and skills
- **Blog** — markdown/MDX powered, just drop a file in `content/blogs/` to publish
- **Contact page** — protected contact form (your email is never exposed) powered by [Resend](https://resend.com)
- **Responsive** — works on all screen sizes
- **Fast** — fully static, no client-side data fetching

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + custom CSS |
| Blog | [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) + MDX |
| Fonts | [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — DM Serif Display, Plus Jakarta Sans, Syne, Fira Code |
| Email | [Resend](https://resend.com) via Next.js Server Actions |
| Deployment | [Vercel](https://vercel.com) (recommended) |

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/biggestZ/zahir-site.git
cd zahir-site
npm install
```

### 2. Add your details

Open `content/portfolio.ts` and replace the placeholder data with your own:

```ts
export const profile = {
  name: "Your Name",
  role: "Your Title",
  bio: "A sentence about what you do.",
  email: "you@example.com",
  social: [
    { label: "GitHub",   href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ],
};
```

Also update `experience`, `education`, `skills`, and `projects` in the same file.

### 3. Add your photo

Place your photo at `public/images/your-photo.jpg`, then update the `src` prop in:
- `app/layout.tsx` — small circular avatar in the header
- `app/page.tsx` — photo in the homepage hero
- `app/about/page.tsx` — larger portrait on the about page

### 4. Set up the contact form (optional)

Create a `.env.local` file in the project root:

```
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=you@youremail.com
```

Get a free API key at [resend.com](https://resend.com). Without this, the rest of the site works fine — only the contact form will be inactive.

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Writing Blog Posts

Create a `.mdx` file in `content/blogs/`. The filename becomes the URL slug.

```
content/blogs/my-first-post.mdx  →  /blogs/my-first-post
```

Every post needs a frontmatter block at the top:

```mdx
---
title: "Your Post Title"
date: "2026-03-01"
description: "A one-sentence summary shown in the post list."
---

Your content goes here. Standard **Markdown** works, as do JSX components.
```

Posts show up automatically on `/blogs` — no config needed.

---

## Deploying

The easiest way to deploy is [Vercel](https://vercel.com):

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Add your environment variables under **Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Hit **Deploy**

Your site will be live at `yourname.vercel.app`. You can also connect a custom domain from the Vercel dashboard.

---

## Customization

For a full guide on changing colors, fonts, navigation, and adding new pages, see **[CUSTOMIZING.md](./CUSTOMIZING.md)**.

Quick reference:

| What to change | Where |
|---|---|
| Name, bio, social links | `content/portfolio.ts` |
| Work experience & education | `content/portfolio.ts` |
| Projects & skills | `content/portfolio.ts` |
| Blog posts | `content/blogs/*.mdx` |
| Colors & theme | `app/globals.css` (`:root` variables) |
| Fonts | `app/layout.tsx` |
| Navigation links | `app/layout.tsx` (`navItems` array) |

---

## Who Is This For?

This template was built with developers and engineers in mind, but anyone who wants a clean, self-hosted personal site can use it. You don't need to know React to customize it — all your personal content lives in two plain files (`content/portfolio.ts` and `content/blogs/`).

---

## License

MIT — free to use, modify, and deploy for personal or commercial projects. Attribution appreciated but not required.
