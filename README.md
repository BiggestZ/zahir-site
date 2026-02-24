# Zahir Portfolio Website

A Next.js portfolio site with a markdown-powered blog.

## Features

- Portfolio homepage with featured projects and skills
- Dedicated pages: `about`, `projects`, `contact`, `blogs`
- Blog posts loaded from local markdown/MDX files
- Frontmatter support (`title`, `date`, `description`, `tags`, `featured`)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Add a Blog Post

1. Create a file under `content/blogs` ending in `.md` or `.mdx`.
2. Add frontmatter:

```yaml
---
title: "Post title"
date: "2026-02-23"
description: "Post summary"
tags:
  - tag-one
featured: false
---
```

3. Write markdown below the frontmatter.

Posts appear automatically on `/blogs` and can be opened at `/blogs/<slug>`.

## Customize Portfolio Content

Edit `content/portfolio.ts` to update:

- Profile information
- Skills
- Projects
