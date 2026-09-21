export default function Section({
  id,
  cmd,
  children,
}: {
  id: string;
  cmd: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 py-12">
      <h2 className="mb-6 font-mono text-sm text-muted">
        <span className="text-accent">$</span> {cmd}
      </h2>
      {children}
    </section>
  );
}
