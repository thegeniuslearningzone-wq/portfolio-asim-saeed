import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrolled } from "@/hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Work", to: "/#work" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(23,30,38,0.72)" : "rgba(23,30,38,0)",
          borderColor: scrolled ? "rgba(41,50,61,1)" : "rgba(41,50,61,0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="border-b backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            to="/"
            className="font-mono text-sm tracking-tight text-ivory hover:text-signal transition-colors"
            aria-label="Asim Saeed, home"
          >
            asim<span className="text-signal">/</span>saeed
          </Link>

          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {onHome ? (
                  <a
                    href={link.to.slice(1)}
                    className="text-sm text-ivory-muted transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="text-sm text-ivory-muted transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href="mailto:hello@asimsaeed.dev"
            className="hidden rounded-full border border-line px-4 py-2 text-sm text-ivory transition-colors hover:border-signal hover:text-signal sm:inline-block"
          >
            Say hello
          </a>

          {/* Mobile: single compact contact affordance */}
          <a
            href="mailto:hello@asimsaeed.dev"
            className="rounded-full border border-line px-3 py-1.5 text-xs text-ivory sm:hidden"
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
