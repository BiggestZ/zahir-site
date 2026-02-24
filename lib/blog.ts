import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blogs");
const BLOG_EXTENSIONS = [".md", ".mdx"];

function isBlogFile(fileName: string) {
  return BLOG_EXTENSIONS.some((ext) => fileName.endsWith(ext));
}

function parseDate(date: string) {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function getAllBlogs(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter(isBlogFile);

  return files
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
      const { data, content } = matter(source);

      return {
        slug,
        frontmatter: {
          title: data.title ?? slug,
          description: data.description ?? "",
          date: data.date ?? "",
          tags: data.tags ?? [],
          featured: Boolean(data.featured),
        },
        content,
      };
    })
    .sort((a, b) => parseDate(b.frontmatter.date) - parseDate(a.frontmatter.date));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const fileName = fs
    .readdirSync(BLOG_DIR)
    .find((file) => isBlogFile(file) && file.replace(/\.mdx?$/, "") === slug);

  if (!fileName) {
    return null;
  }

  const source = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    frontmatter: {
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      featured: Boolean(data.featured),
    },
    content,
  };
}

export function getBlogSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter(isBlogFile)
    .map((file) => file.replace(/\.mdx?$/, ""));
}
