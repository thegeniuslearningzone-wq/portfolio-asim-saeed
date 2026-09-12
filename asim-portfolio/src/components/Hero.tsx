import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { profile } from "@/data/profile";

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor-follow glow: tracks pointer position within the hero, eased with a spring.
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.35);
  const glowX = useSpring(pointerX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(pointerY, { stiffness: 60, damping: 20 });

  const glowLeft = useTransform(glowX, (v) => `${v * 100}%`);
  const glowTop = useTransform(glowY, (v) => `${v * 100}%`);

  // Subtle parallax on the headline, opposite to pointer movement, for depth.
  const headlineX = useTransform(glowX, [0, 1], [8, -8]);
  const headlineY = useTransform(glowY, [0, 1], [4, -4]);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[92vh] overflow-hidden border-b border-line"
    >
      {/* Ambient gradient mesh — a single, continuous, low-amplitude drift */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className={`absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full bg-signal/[0.16] blur-[110px] ${
            reducedMotion ? "" : "animate-drift"
          }`}
        />
        <div
          className={`absolute -bottom-1/4 -right-1/4 h-[65vh] w-[65vh] rounded-full bg-pulse/[0.10] blur-[120px] ${
            reducedMotion ? "" : "animate-drift"
          }`}
          style={{ animationDelay: "-9s" }}
        />
        <div className="absolute inset-0 grain-overlay opacity-40 mix-blend-overlay" />
      </div>

      {/* Cursor-follow glow */}
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.08] blur-[90px]"
          style={{ left: glowLeft, top: glowTop }}
          aria-hidden="true"
        />
      )}

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 pt-32 pb-20 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 font-mono text-sm text-signal"
        >
          {profile.location} · available for select projects
        </motion.p>

        <motion.h1
          style={reducedMotion ? undefined : { x: headlineX, y: headlineY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="max-w-3xl text-display-xl font-display font-semibold text-ivory text-balance"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
          className="mt-8 max-w-prose text-lg leading-relaxed text-ivory-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm text-ivory transition-colors hover:border-ivory-faint"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
