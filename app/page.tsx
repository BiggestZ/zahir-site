import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { profile, projects, skills } from "@/content/portfolio";

export default function HomePage() {
  const latestPosts = getAllBlogs().slice(0, 3);
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <div className="stack-lg">
      <section className="hero">
        <p className="eyebrow">{profile.role}</p>
        <h1>Building reliable products with clean UX.</h1>
        <p>{profile.bio}</p>
        <div className="actions">
          <Link href="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <Link href="/blogs" className="btn btn-ghost">
            Read Blog
          </Link>
        </div>
      </section>

      <section className="stack-md">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <Link href="/projects">See all</Link>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p className="chip-row">{project.stack.join(" • ")}</p>
              <Link href={project.href}>Project Link</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-md">
        <div className="section-head">
          <h2>Latest Writing</h2>
          <Link href="/blogs">All posts</Link>
        </div>
        <div className="card-grid">
          {latestPosts.map((post) => (
            <article key={post.slug} className="card">
              <p className="small">{post.frontmatter.date}</p>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.description}</p>
              <Link href={`/blogs/${post.slug}`}>Read post</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-sm">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
