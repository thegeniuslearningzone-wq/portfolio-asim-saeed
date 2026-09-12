import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage } from "@/types";

interface LightboxProps {
  images: ProjectImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && activeIndex !== null) {
        onNavigate((activeIndex + 1) % images.length);
      }
      if (event.key === "ArrowLeft" && activeIndex !== null) {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].caption ?? images[activeIndex].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-h-[85vh] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[75vh] w-full rounded-xl border border-line object-contain"
            />
            {images[activeIndex].caption && (
              <figcaption className="mt-4 text-center text-sm text-ivory-muted">
                {images[activeIndex].caption}
              </figcaption>
            )}
          </motion.figure>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-6 top-6 rounded-full border border-line bg-surface p-2 text-ivory transition-colors hover:border-signal hover:text-signal"
          >
            <CloseIcon />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((activeIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface p-2 text-ivory transition-colors hover:border-signal hover:text-signal sm:left-8"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  onNavigate((activeIndex + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface p-2 text-ivory transition-colors hover:border-signal hover:text-signal sm:right-8"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  const d = direction === "left" ? "M11 3L5 9L11 15" : "M7 3L13 9L7 15";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
