import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import Lightbox from "@/components/Lightbox";

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allImages = [project.coverImage, ...project.gallery];

  return (
    <article className="px-6 pb-28 pt-32 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-ivory-muted transition-colors hover:text-ivory"
        >
          <span aria-hidden="true">←</span> Back to work
        </Link>

        <p className="mb-4 font-mono text-sm text-signal">
          {project.category} · {project.year}
        </p>
        <h1 className="text-display-lg font-display font-semibold text-ivory text-balance">
          {project.name}
        </h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ivory-muted">{project.tagline}</p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
          <div>
            <dt className="mb-1 text-xs text-ivory-faint">Role</dt>
            <dd className="text-sm text-ivory">{project.role}</dd>
          </div>
          <div>
            <dt className="mb-1 text-xs text-ivory-faint">Year</dt>
            <dd className="text-sm text-ivory">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <dt className="mb-1 text-xs text-ivory-faint">Stack</dt>
            <dd className="text-sm text-ivory">{project.technologies.join(", ")}</dd>
          </div>
        </dl>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                View live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="rounded-full border border-line px-5 py-2.5 text-sm text-ivory transition-colors hover:border-ivory-faint"
              >
                View source
              </a>
            )}
          </div>
        )}
      </div>

      <motion.button
        type="button"
        onClick={() => setLightboxIndex(0)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-14 block w-full max-w-5xl overflow-hidden rounded-2xl border border-line"
        aria-label={`Open larger view of ${project.name} cover image`}
      >
        <img src={project.coverImage.src} alt={project.coverImage.alt} className="w-full object-cover" />
      </motion.button>

      <div className="mx-auto mt-16 max-w-3xl space-y-16">
        <section>
          <h2 className="mb-4 text-display-md font-display font-semibold text-ivory">The problem</h2>
          <p className="text-lg leading-relaxed text-ivory-muted">{project.caseStudy.problem}</p>
        </section>

        <section>
          <h2 className="mb-4 text-display-md font-display font-semibold text-ivory">The approach</h2>
          <ul className="space-y-4">
            {project.caseStudy.approach.map((point) => (
              <li key={point} className="flex gap-4 text-lg leading-relaxed text-ivory-muted">
                <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-display-md font-display font-semibold text-ivory">The outcome</h2>
          <p className="text-lg leading-relaxed text-ivory-muted">{project.caseStudy.outcome}</p>
        </section>

        {project.gallery.length > 0 && (
          <section>
            <h2 className="mb-6 text-display-md font-display font-semibold text-ivory">In detail</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxIndex(index + 1)}
                  className="group overflow-hidden rounded-xl border border-line text-left"
                  aria-label={`Open larger view: ${image.caption ?? image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {image.caption && (
                    <p className="border-t border-line bg-surface px-4 py-3 text-sm text-ivory-muted">
                      {image.caption}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      <Lightbox
        images={allImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </article>
  );
}
