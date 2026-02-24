import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";

export const metadata = {
  title: "Blog | Zahir Portfolio",
  description: "Technical writing, lessons learned, and build notes.",
};

export default function BlogsPage() {
  const posts = getAllBlogs();

  return (
    <section className="stack-md">
      <h1>Blog</h1>
      <p>Add a new markdown file under `content/blogs` to publish a post.</p>

      <div className="stack-sm">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <p className="small">{post.frontmatter.date}</p>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.description}</p>
            <Link href={`/blogs/${post.slug}`}>Read post</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
