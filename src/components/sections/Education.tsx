import Section from "@/components/Section";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" cmd="cat education.txt">
      <ul className="space-y-4">
        {education.map((e) => (
          <li key={e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {e.degree} <span className="text-accent">@ {e.school}</span>
              </h3>
            
            </div>
              <span className="font-mono text-xs text-muted">
                {e.period} · {e.location}
              </span>
            <p className="font-mono text-xs text-muted">GPA {e.gpa}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
