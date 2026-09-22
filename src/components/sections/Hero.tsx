import { profile } from "@/data/content";

export default function Hero() {
  return (
    <div className="py-20">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> whoami
      </p>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
        {profile.name}
        <span className="cursor ml-1 inline-block h-[0.9em] w-3 translate-y-1 bg-accent" />
      </h1>
      <p className="mt-2 font-mono text-accent">{profile.role}</p>
      <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
        <a
          href="#projects"
          className="rounded border border-accent px-4 py-2 text-accent hover:bg-accent hover:text-background"
        >
          view projects
        </a>
        <a
          href={profile.resume}
          className="rounded border border-line px-4 py-2 hover:border-foreground"
        >
          resume.pdf
        </a>
      </div>
    </div>
  );
}
