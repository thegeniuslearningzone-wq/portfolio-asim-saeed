export interface ProjectImage {
  /** Public path or URL to the image */
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  repoUrl?: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  caseStudy: {
    problem: string;
    approach: string[];
    outcome: string;
  };
}

export type ProjectCategory =
  | "Dashboard"
  | "E-commerce"
  | "Productivity"
  | "Platform";

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export type SubmitStatus = "idle" | "submitting" | "success" | "error";
