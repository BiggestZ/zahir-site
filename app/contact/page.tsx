import Link from "next/link";
import { profile } from "@/content/portfolio";

export const metadata = {
  title: "Contact | Zahir Portfolio",
  description: "Ways to get in touch.",
};

export default function ContactPage() {
  return (
    <section className="stack-md">
      <h1>Contact</h1>
      <p>
        Reach out via email at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
      </p>
      <div className="stack-sm">
        {profile.social.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
