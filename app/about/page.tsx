import { profile, skills } from "@/content/portfolio";

export const metadata = {
  title: "About | Zahir Portfolio",
  description: "Background, strengths, and engineering focus.",
};

export default function AboutPage() {
  return (
    <section className="stack-md">
      <h1>About Me</h1>
      <p>{profile.bio}</p>
      <p>
        I focus on performance, maintainable architecture, and practical developer workflows
        that help teams ship consistently.
      </p>

      <div>
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
