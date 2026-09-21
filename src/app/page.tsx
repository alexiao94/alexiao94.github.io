import Nav from "@/components/Nav";
import Section from "@/components/Section";
import { experience, profile, projects } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav handle={profile.handle} />
      <main id="top" className="mx-auto w-full max-w-3xl px-6">
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

        <Section id="about" cmd="cat about.md">
          <div className="space-y-4 text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="font-mono text-sm">{profile.location}</p>
          </div>
        </Section>

        <Section id="experience" cmd="git log --experience">
          <ol className="space-y-8 border-l border-line pl-6">
            {experience.map((job) => (
              <li key={job.company + job.period} className="relative">
                <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {job.title}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
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

        <Section id="projects" cmd="ls projects/">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded border border-line p-5 transition hover:border-accent"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-accent">
                  {p.tech.map((t) => (
                    <li key={t}>#{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 font-mono text-sm">
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
              </article>
            ))}
          </div>
        </Section>

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
      </main>
      <footer className="mt-12 border-t border-line py-6 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
