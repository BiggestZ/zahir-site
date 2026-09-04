import { profile } from "@/content/portfolio";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Zahir Choudhry, an AI Engineer open to freelance and full-time roles in agentic systems and backend engineering.",
};

const socialLinks = profile.social.map((item) => ({
  label: item.label,
  href: item.href,
  detail: item.href.replace("https://", ""),
}));

export default function ContactPage() {
  return (
    <section className="stack-md page-enter">
      <div>
        <h1 className="page-title">Let&apos;s Talk</h1>
        <p className="page-subtitle" style={{ marginTop: "0.75rem" }}>
          Open to freelance, full-time roles, and interesting conversations.
          Fill out the form and I&apos;ll get back to you.
        </p>
      </div>

      <ContactForm />

      <div style={{ paddingTop: "0.5rem" }}>
        <div className="section-label" style={{ marginBottom: "0.875rem" }}>Find me online</div>
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ fontFamily: "var(--font-nav)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", minWidth: "5rem" }}>
              {item.label}
            </span>
            <span style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              {item.detail}
            </span>
            <span className="contact-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
