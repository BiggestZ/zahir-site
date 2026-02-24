import Link from "next/link";
import { projects } from "@/content/portfolio";

export const metadata = {
  title: "Projects | Zahir Portfolio",
  description: "A collection of projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="stack-md">
      <h1>Projects</h1>
      <p>Selected product and engineering work.</p>

      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <p className="chip-row">{project.stack.join(" • ")}</p>
            <Link href={project.href}>Visit project</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
