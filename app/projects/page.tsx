import { projects } from "@/content/portfolio";
import ProjectLink from "@/components/ProjectLink";

export const metadata = {
  title: "Projects | Zahir",
  description: "A collection of projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <section className="stack-md page-enter">
      <div>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle" style={{ marginTop: "0.75rem" }}>
          Selected product and engineering work.
        </p>
      </div>

      <div className="card-grid">
        {projects.map((project, i) => (
          <article key={project.name} className="card">
            <span className="card-index">0{i + 1}</span>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <p className="chip-row">{project.stack.join(" · ")}</p>
            <ProjectLink project={project}>Visit project →</ProjectLink>
          </article>
        ))}
      </div>
    </section>
  );
}
