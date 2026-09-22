import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Section from "@/components/Section";
import { projects } from "@/data/content";
import { sortKey } from "@/lib/dates";

// Newest first. Projects without dates sort last, keeping their listed order
// (Array.prototype.sort is stable).
const sorted = [...projects].sort((a, b) =>
  sortKey(b.start, b.end).localeCompare(sortKey(a.start, a.end)),
);

export default function Projects() {
  return (
    <Section id="projects" cmd="ls -t projects/">
      <ProjectsGrid projects={sorted} />
    </Section>
  );
}
