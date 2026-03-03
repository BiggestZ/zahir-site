import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blog";
import { profile, projects, skills } from "@/content/portfolio";

export default function HomePage() {
  const latestPosts = getAllBlogs().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const heroPhotoOrientation: "portrait" | "landscape" = "portrait";

  return (
    <div className="stack-lg">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="hero-name-first">Zahir</span>
              <span className="hero-name-last">Choudhry</span>
            </h1>
            <span className="eyebrow">{profile.role}</span>
            <p className="hero-tagline">Building ideas that balance quality &amp; performance.</p>
            <p>{profile.bio}</p>
            <div className="actions">
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/blogs" className="btn btn-ghost">
                Read Blog
              </Link>
              <a href={profile.resumeUrl} className="btn btn-ghost">
                Resume
              </a>
            </div>
          </div>
          <div className={`hero-photo-wrap hero-photo-wrap--${heroPhotoOrientation}`}>
            <Image
              src="/images/zahir-choudhry.jpg"
              alt="Zahir Choudhry"
              width={280}
              height={340}
              sizes={
                heroPhotoOrientation === "portrait"
                  ? "(max-width: 680px) 80vw, (max-width: 900px) 45vw, 300px"
                  : "(max-width: 680px) 100vw, (max-width: 900px) 52vw, 460px"
              }
              className={`hero-photo hero-photo--${heroPhotoOrientation}`}
              priority
            />
            <div className="hero-photo-overlay" aria-hidden="true" />
            <span className="hero-photo-tag" aria-hidden="true">Z·C</span>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────── */}
      <section className="stack-md page-enter-delay">
        <div className="section-head">
          <h2>Featured Projects</h2>
          <Link href="/projects">See all →</Link>
        </div>
        <div className="card-grid">
          {featuredProjects.map((project, i) => (
            <article key={project.name} className="card">
              <span className="card-index">0{i + 1}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p className="chip-row">{project.stack.join(" · ")}</p>
              <Link href={project.href}>View project →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Latest Writing ─────────────────────────────── */}
      <section className="stack-md">
        <div className="section-head">
          <h2>Latest Writing</h2>
          <Link href="/blogs">All posts →</Link>
        </div>
        <div className="card-grid">
          {latestPosts.map((post) => (
            <article key={post.slug} className="card">
              <time className="small">{post.frontmatter.date}</time>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.description}</p>
              <Link href={`/blogs/${post.slug}`}>Read post →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────── */}
      <section className="stack-sm">
        <div className="section-label">Core Skills</div>
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
