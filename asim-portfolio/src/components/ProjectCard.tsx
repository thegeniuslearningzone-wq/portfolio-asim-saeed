import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative"
    >
      <Link
        to={`/work/${project.slug}`}
        className="block overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-ivory-faint"
        aria-label={`View case study: ${project.name}`}
      >
        <div className="relative aspect-[3/2] overflow-hidden border-b border-line bg-ink">
          <motion.img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            initial={false}
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-ink/80 px-3 py-1.5 font-mono text-xs text-signal backdrop-blur-sm">
              View case study →
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-display-md font-display font-semibold text-ivory">{project.name}</h3>
            <span className="whitespace-nowrap rounded-full border border-line px-3 py-1 text-xs text-ivory-muted">
              {project.category}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-ivory-muted">{project.tagline}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-surface-high px-2.5 py-1 font-mono text-[11px] text-ivory-muted"
              >
                {tech}
              </li>
            ))}
            {project.technologies.length > 3 && (
              <li className="rounded-md bg-surface-high px-2.5 py-1 font-mono text-[11px] text-ivory-muted">
                +{project.technologies.length - 3}
              </li>
            )}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}
