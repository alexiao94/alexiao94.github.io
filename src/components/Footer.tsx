export default function Footer({ name }: { name: string }) {
  return (
    <footer className="mt-12 border-t border-line py-6 text-center font-mono text-xs text-muted">
      © {new Date().getFullYear()} {name}
    </footer>
  );
}
