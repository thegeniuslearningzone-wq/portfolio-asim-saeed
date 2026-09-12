import type { ExpertiseArea, SkillGroup, SocialLink } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & markup",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks & libraries",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    label: "Tooling & practice",
    items: ["Git & GitHub", "Responsive Web Design"],
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Frontend development",
    description: "Interfaces built with modern JavaScript frameworks, from first component to shipped feature.",
  },
  {
    title: "Full-stack development",
    description: "Comfortable owning both sides of the stack, from schema design to the pixels on screen.",
  },
  {
    title: "Interactive UI development",
    description: "Motion and interaction used to clarify state, not to decorate it.",
  },
  {
    title: "Responsive web design",
    description: "Layouts that hold up from a small phone screen to a wide desktop monitor.",
  },
  {
    title: "API integration",
    description: "Connecting frontends to REST services cleanly, with error and loading states handled by default.",
  },
  {
    title: "Dashboard development",
    description: "Turning raw data into charts and summaries someone will actually check daily.",
  },
  {
    title: "Performance optimization",
    description: "Attention to load time and runtime performance as a feature, not an afterthought.",
  },
  {
    title: "Accessibility",
    description: "Keyboard navigation, focus management, and contrast treated as requirements, not extras.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/asimsaeed", handle: "@asimsaeed" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/asimsaeed", handle: "/in/asimsaeed" },
  { label: "X", url: "https://x.com/asimsaeed", handle: "@asimsaeed" },
  { label: "Dribbble", url: "https://dribbble.com/asimsaeed", handle: "@asimsaeed" },
];

export const profile = {
  name: "Asim Saeed",
  headline: "Full-Stack Developer & Creative Web Engineer",
  intro:
    "I'm Asim Saeed, a full-stack developer focused on building fast, modern, and visually engaging web experiences. I enjoy turning complex ideas into clean, intuitive digital products using modern frontend and backend technologies.",
  story: [
    "I started exploring web development through small personal projects and gradually became interested in how design, code, and user experience come together. Over time, I moved from building simple static pages to developing complete web applications with modern JavaScript frameworks and backend technologies.",
    "My approach combines thoughtful interface design with practical engineering. I enjoy experimenting with animations and interactions while keeping performance, accessibility, maintainability, and usability at the center of the development process.",
    "Currently, I'm focused on expanding my full-stack development skills and creating digital products that are both technically solid and enjoyable to use.",
  ],
  email: "hello@asimsaeed.dev",
  location: "Lahore, Pakistan",
};
