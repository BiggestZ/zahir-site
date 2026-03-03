import Image from "next/image";
import { profile, skills, experience, education } from "@/content/portfolio";

export const metadata = {
  title: "About | Zahir",
  description: "Background, strengths, and engineering focus.",
};

export default function AboutPage() {
  const aboutPhotoOrientation: "portrait" | "landscape" = "portrait";

  return (
    <section className="stack-lg page-enter">
      {/* ── Intro ──────────────────────────────────────── */}
      <div className="about-header">
        <div className={`about-photo-wrap about-photo-wrap--${aboutPhotoOrientation}`}>
          <Image
            src="/images/zahir-c.jpg"
            alt="Zahir Choudhry"
            width={320}
            height={400}
            sizes={
              aboutPhotoOrientation === "portrait"
                ? "(max-width: 680px) 80vw, (max-width: 900px) 42vw, 340px"
                : "(max-width: 680px) 100vw, (max-width: 900px) 54vw, 520px"
            }
            className={`about-photo about-photo--${aboutPhotoOrientation}`}
            priority
          />
        </div>
        <div className="about-intro">
          <span className="eyebrow" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>
            {profile.role}
          </span>
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle" style={{ marginTop: "1rem" }}>{profile.bio}</p>
          <p className="page-subtitle" style={{ marginTop: "0.75rem" }}>
            My main interest is to continue building agentic workflows that can make a positive
            impact on people&apos;s lives. That being said, I am also open to any work which can
            help me grow as a developer and engineer.
          </p>
          <p className="page-subtitle" style={{ marginTop: "0.75rem" }}>
            Outside of work, I love to go to the gym, cook, play basketball, and watch movies.
            I am also very interested in cars and working / modifying some on my own some day.
          </p>
        </div>
      </div>

      {/* ── Experience ─────────────────────────────────── */}
      <div className="stack-md">
        <div className="section-label">Work Experience</div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <span className="timeline-org">{job.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    {job.location && (
                      <span className="timeline-location">{job.location}</span>
                    )}
                  </div>
                </div>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="timeline-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Education ──────────────────────────────────── */}
      <div className="stack-md">
        <div className="section-label">Education</div>
        <ol className="timeline">
          {education.map((edu) => (
            <li key={`${edu.school}-${edu.period}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <span className="timeline-org">{edu.school}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{edu.period}</span>
                    {edu.location && (
                      <span className="timeline-location">{edu.location}</span>
                    )}
                  </div>
                </div>
                {edu.details && (
                  <p className="timeline-details">{edu.details}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Skills ─────────────────────────────────────── */}
      <div className="stack-sm">
        <div className="section-label">Core Skills</div>
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
