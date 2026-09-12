export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-xs text-ivory-faint">© {year} Asim Saeed. Built with React &amp; Tailwind CSS.</p>
        <p className="font-mono text-xs text-ivory-faint">Lahore, Pakistan</p>
      </div>
    </footer>
  );
}
