"use client";

import { useRef } from "react";
import type { Project } from "@/data/content";
import { asset } from "@/lib/asset";
import { formatPeriod } from "@/lib/dates";

// Cards are a fixed size, so the tag list is capped (the modal shows them all).
const MAX_CARD_TAGS = 6;

// The whole card is clickable (via a stretched button on the title). Links sit
// above it with z-10 so they still work. The modal autoplays the clip and shows
// the full description underneath.
export default function ProjectCard({ project: p }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);

  const period = formatPeriod(p.start, p.end);
  const videoUrl = p.video ? asset(p.video) : undefined;
  const posterUrl = p.poster ? asset(p.poster) : undefined;

  function open() {
    dialog.current?.showModal();
    player.current?.play().catch(() => {});
  }

  function onClose() {
    const video = player.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }

  return (
    <>
      <article className="relative flex h-full flex-col overflow-hidden rounded border border-line p-5 transition hover:border-accent">
        {posterUrl || videoUrl ? (
          // Static thumbnail only; playback starts in the modal. Use the poster
          // as a real <img>: on a <video>, the browser swaps the poster for the
          // first decoded frame, which hides it.
          <div className="relative mb-4 shrink-0 overflow-hidden rounded border border-line">
            {posterUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={posterUrl}
                alt=""
                loading="lazy"
                className="aspect-video w-full bg-black object-cover"
              />
            ) : (
              <video
                className="aspect-video w-full bg-black object-cover"
                src={`${videoUrl}#t=0.1`}
                aria-hidden
                tabIndex={-1}
                muted
                playsInline
                preload="metadata"
              />
            )}
            {videoUrl && (
              <span
                aria-hidden
                className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 font-mono text-xs text-white"
              >
                ▶ play
              </span>
            )}
          </div>
        ) : (
          // Same-size placeholder so every card keeps an identical layout.
          <div
            aria-hidden
            className="mb-4 flex aspect-video w-full shrink-0 items-center justify-center rounded border border-dashed border-line font-mono text-xs text-muted"
          >
            {`> ${p.name.toLowerCase()}`}
          </div>
        )}
        <h3 className="font-semibold">
          <button
            type="button"
            onClick={open}
            aria-haspopup="dialog"
            className="cursor-pointer text-left after:absolute after:inset-0 after:content-['']"
          >
            {p.name}
          </button>
        </h3>
        <p className="font-mono text-xs text-muted">{p.subtitle}</p>
        {period && (
          <p className="font-mono text-xs text-accent">{period}</p>
        )}
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
          {p.description}
        </p>
        <ul className="mt-4 flex shrink-0 flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-accent">
          {p.tech.slice(0, MAX_CARD_TAGS).map((t) => (
            <li key={t}>#{t}</li>
          ))}
          {p.tech.length > MAX_CARD_TAGS && (
            <li className="text-muted">+{p.tech.length - MAX_CARD_TAGS} more</li>
          )}
        </ul>
        <p className="mt-3 shrink-0 font-mono text-xs text-muted">
          click for details ↗
        </p>
      </article>

      <dialog
        ref={dialog}
        onClose={onClose}
        onClick={(e) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (e.target === dialog.current) dialog.current?.close();
        }}
        aria-label={`${p.name} details`}
        className="m-auto max-h-[92vh] w-[min(92vw,1000px)] overflow-y-auto rounded border border-line bg-background p-0 text-foreground backdrop:bg-black/80"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-background px-4 py-2 font-mono text-sm">
          <span>
            <span className="text-accent">{p.name}</span>
            <span className="text-muted"> — {p.subtitle}</span>
            {period && <span className="text-muted"> · {period}</span>}
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="text-muted hover:text-foreground"
          >
            close [esc]
          </button>
        </div>

        {videoUrl ? (
          <video
            ref={player}
            className="block max-h-[65vh] w-full bg-black"
            src={videoUrl}
            poster={posterUrl}
            controls
            playsInline
            preload="none"
          />
        ) : (
          posterUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posterUrl}
              alt={`${p.name} logo`}
              className="block max-h-[50vh] w-full bg-black object-cover"
            />
          )
        )}

        <div className="space-y-6 p-5">
          <div>
            <h4 className="mb-2 font-mono text-sm text-accent">Overview</h4>
            <p className="text-muted">{p.overview ?? p.description}</p>
          </div>
          {p.highlights && (
            <div>
              <h4 className="mb-3 font-mono text-sm text-accent">
                Technical highlights
              </h4>
              <ul className="space-y-3 text-sm">
                {p.highlights.map((h) => (
                  <li key={h.title} className="border-l border-line pl-4">
                    <span className="font-semibold">{h.title}.</span>{" "}
                    <span className="text-muted">{h.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent">
            {p.tech.map((t) => (
              <li key={t}>#{t}</li>
            ))}
          </ul>
          {(p.href || p.repo) && (
            <div className="flex gap-4 font-mono text-sm">
              {p.href && (
                <a href={p.href} className="hover:text-accent">
                  live ↗
                </a>
              )}
              {p.repo && (
                <a href={p.repo} className="hover:text-accent">
                  code ↗
                </a>
              )}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
