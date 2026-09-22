"use client";

import { useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/content";

const COLUMNS = 2;
const ROWS = 2;
const PAGE_SIZE = COLUMNS * ROWS;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(0);
  const top = useRef<HTMLDivElement>(null);

  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function go(next: number) {
    setPage(next);
    // A shorter page can leave the user below the grid; bring the top back.
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ block: "start" });
    }
  }

  return (
    <div ref={top} className="scroll-mt-16">
      {/* Fixed row height, and empty slots are reserved, so the grid is always
          2x2 and the pager never moves, even on a partly filled last page. */}
      <div className="grid auto-rows-[460px] gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
        {Array.from({ length: PAGE_SIZE - visible.length }, (_, i) => (
          <div key={`empty-${i}`} aria-hidden className="hidden sm:block" />
        ))}
      </div>

      {pageCount > 1 && (
        <nav
          aria-label="Projects pagination"
          className="mt-8 flex items-center justify-between border-t border-line pt-4 font-mono text-sm"
        >
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 0}
            className="text-accent hover:underline disabled:cursor-default disabled:text-muted disabled:no-underline disabled:opacity-40"
          >
            &lt; prev
          </button>
          <span className="text-muted" aria-live="polite">
            page <span className="text-foreground">{page + 1}</span> /{" "}
            {pageCount}
          </span>
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === pageCount - 1}
            className="text-accent hover:underline disabled:cursor-default disabled:text-muted disabled:no-underline disabled:opacity-40"
          >
            next &gt;
          </button>
        </nav>
      )}
    </div>
  );
}
