import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";

export const metadata = {
  title: "Blog | Zahir",
  description: "Technical writing, lessons learned, and build notes.",
};

export default function BlogsPage() {
  const posts = getAllBlogs();

  return (
    <section className="stack-md page-enter">
      <div>
        <h1 className="page-title">Writing</h1>
        <p className="page-subtitle" style={{ marginTop: "0.75rem" }}>
          Notes on building, shipping, and the craft of software.
        </p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="blog-row"
          >
            <time className="blog-row-date">{post.frontmatter.date}</time>
            <div className="blog-row-content">
              <span className="blog-row-title">{post.frontmatter.title}</span>
              <span className="blog-row-desc">{post.frontmatter.description}</span>
            </div>
            <span className="blog-row-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
