import Section from "@/components/Section";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <Section id="contact" cmd="./contact.sh">
      <p className="text-muted">
        Open to new opportunities and interesting projects.
      </p>
      <ul className="mt-4 space-y-1 font-mono text-sm">
        <li>
          <a className="hover:text-accent" href={`mailto:${profile.email}`}>
            email → {profile.email}
          </a>
        </li>
        <li>
          <a className="hover:text-accent" href={profile.github}>
            github → {profile.github.replace("https://", "")}
          </a>
        </li>
        <li>
          <a className="hover:text-accent" href={profile.linkedin}>
            linkedin → {profile.linkedin.replace("https://", "")}
          </a>
        </li>
      </ul>
    </Section>
  );
}
