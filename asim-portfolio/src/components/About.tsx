import { motion } from "framer-motion";
import { profile, skillGroups, expertiseAreas } from "@/data/profile";
import SkillTag from "@/components/SkillTag";

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm text-signal">About</p>
        <h2 className="mb-14 max-w-2xl text-display-lg font-display font-semibold text-ivory text-balance">
          From static pages to full products
        </h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            {profile.story.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="max-w-prose text-lg leading-relaxed text-ivory-muted"
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              {expertiseAreas.map((area) => (
                <div key={area.title} className="border-l-2 border-line pl-4">
                  <h3 className="mb-1 text-sm font-medium text-ivory">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-ivory-muted">{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-sm text-ivory-faint">{group.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
