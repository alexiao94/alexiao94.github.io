const links = ["about", "experience", "projects", "education", "contact"];

export default function Nav({ handle }: { handle: string }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3 font-mono text-sm">
        <a href="#top" className="text-accent">
          ~/{handle}
        </a>
        <ul className="flex gap-4">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="text-muted hover:text-foreground">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
