import { profile, socialLinks } from "@/data/profile";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 font-mono text-sm text-signal">Contact</p>
          <h2 className="mb-6 max-w-md text-display-lg font-display font-semibold text-ivory text-balance">
            Have a project in mind?
          </h2>
          <p className="mb-10 max-w-prose text-lg leading-relaxed text-ivory-muted">
            I'm currently taking on a limited number of new projects. Tell me a bit about what
            you're building and I'll reply from {profile.email}.
          </p>

          <dl className="mb-10 space-y-4">
            <div>
              <dt className="text-xs text-ivory-faint">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-ivory hover:text-signal">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ivory-faint">Location</dt>
              <dd className="text-ivory">{profile.location}</dd>
            </div>
          </dl>

          <ul className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-line px-4 py-2 text-sm text-ivory-muted transition-colors hover:border-signal hover:text-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
