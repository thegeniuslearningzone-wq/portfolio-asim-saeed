import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import ProjectCard from "@/components/ProjectCard";

const FILTERS: Array<ProjectCategory | "All"> = ["All", "Dashboard", "E-commerce", "Productivity"];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="border-b border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-signal">Selected work</p>
            <h2 className="text-display-lg font-display font-semibold text-ivory">
              Four products, four different problems
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((filter) => {
              const active = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active
                      ? "border-signal bg-signal/10 text-signal"
                      : "border-line text-ivory-muted hover:border-ivory-faint hover:text-ivory"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {visibleProjects.length === 0 && (
          <p className="py-16 text-center text-ivory-muted">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
