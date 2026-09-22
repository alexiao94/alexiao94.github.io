import Section from "@/components/Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" cmd="git log --experience">
      <ol className="space-y-8 border-l border-line pl-6">
        {experience.map((job) => (
          <li key={job.company + job.period} className="relative">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">
                {job.title} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">
                {job.period} · {job.location}
              </span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted marker:text-accent">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
