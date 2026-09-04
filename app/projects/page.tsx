import { projects } from "@/content/portfolio";
import ProjectLink from "@/components/ProjectLink";

export const metadata = {
  title: "Projects",
  description:
    "Selected engineering work from Zahir Choudhry, including LLM security testing, RAG-powered tools, and agentic recruiting workflows.",
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((project, i) => ({
    "@type": "SoftwareSourceCode",
    position: i + 1,
    name: project.name,
    description: project.summary,
    programmingLanguage: project.stack,
    author: { "@type": "Person", name: "Zahir Choudhry" },
    ...(project.href !== "#" ? { codeRepository: project.href } : {}),
  })),
};

export default function ProjectsPage() {
  return (
    <section className="stack-md page-enter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd).replace(/</g, "\\u003c") }}
      />
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
