import Section from "@/components/Section";
import { profile, skills } from "@/data/content";

export default function About() {
  return (
    <Section id="about" cmd="cat about.md">
      <div className="space-y-4 text-muted">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="font-mono text-sm">{profile.location}</p>
      </div>
      <dl className="mt-8 space-y-2 text-sm">
        {skills.map((s) => (
          <div key={s.label} className="sm:flex sm:gap-4">
            <dt className="w-36 shrink-0 font-mono text-accent">{s.label}</dt>
            <dd className="text-muted">{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
