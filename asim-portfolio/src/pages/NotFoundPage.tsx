import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 font-mono text-sm text-signal">404</p>
        <h1 className="mb-4 text-display-lg font-display font-semibold text-ivory">Page not found</h1>
        <p className="mb-8 max-w-sm text-ivory-muted">
          The page you're looking for doesn't exist, or has moved.
        </p>
        <Link
          to="/"
          className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
