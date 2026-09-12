import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "flowboard",
    name: "FlowBoard",
    tagline: "Kanban that keeps small teams honest about deadlines.",
    description:
      "A collaborative project management platform designed for small teams to organize tasks, track progress, and manage deadlines through a clean dashboard interface.",
    role: "Full-stack developer — solo build",
    year: "2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    category: "Dashboard",
    liveUrl: "#",
    repoUrl: "#",
    coverImage: { src: "/images/flowboard-cover.svg", alt: "FlowBoard kanban board with three columns of task cards" },
    gallery: [
      { src: "/images/flowboard-gallery-1.svg", alt: "Task detail panel with status and assignees", caption: "Task detail view" },
      { src: "/images/flowboard-gallery-2.svg", alt: "Weekly throughput chart for a team", caption: "Team throughput" },
    ],
    caseStudy: {
      problem:
        "Small teams were tracking tasks across chat threads and spreadsheets, so deadlines slipped quietly and nobody had one place to see what was actually due this week.",
      approach: [
        "Modeled boards, columns, and cards as a normalized PostgreSQL schema so drag-and-drop reordering stays fast even with hundreds of cards.",
        "Built the board view with optimistic updates — a card moves instantly on drop, then reconciles with the server in the background.",
        "Added a lightweight activity feed per card so status changes and comments live next to the work instead of in a separate app.",
      ],
      outcome:
        "Teams using FlowBoard in early testing cut their weekly status-update meetings roughly in half, since the board itself became the source of truth for what was in progress.",
    },
  },
  {
    slug: "shopnest",
    name: "ShopNest",
    tagline: "A storefront built to make browsing feel effortless.",
    description:
      "A modern e-commerce experience featuring product discovery, category filtering, shopping-cart functionality, and a responsive checkout interface.",
    role: "Full-stack developer — solo build",
    year: "2023",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
    category: "E-commerce",
    liveUrl: "#",
    repoUrl: "#",
    coverImage: { src: "/images/shopnest-cover.svg", alt: "ShopNest product grid with a highlighted item and cart action" },
    gallery: [
      { src: "/images/shopnest-gallery-1.svg", alt: "Product detail page with gallery and add-to-cart panel", caption: "Product detail" },
      { src: "/images/shopnest-gallery-2.svg", alt: "Checkout stepper across cart, shipping, and payment", caption: "Checkout flow" },
    ],
    caseStudy: {
      problem:
        "Generic storefront templates made every product feel the same, and checkout drop-off was high because the flow asked for too much before showing shipping cost.",
      approach: [
        "Built category filtering with URL-backed state, so filtered results are shareable and survive a page refresh.",
        "Split checkout into cart, shipping, and payment steps with shipping cost shown before payment details are requested.",
        "Used MongoDB aggregation pipelines to power faceted search without a separate search service.",
      ],
      outcome:
        "The staged checkout and earlier shipping-cost visibility were the two changes most directly tied to fewer abandoned carts in usability testing.",
    },
  },
  {
    slug: "pulse-analytics",
    name: "Pulse Analytics",
    tagline: "Turning raw activity logs into a dashboard people check.",
    description:
      "An interactive analytics dashboard that transforms business data into easy-to-understand charts, performance metrics, and real-time activity summaries.",
    role: "Full-stack developer — solo build",
    year: "2024",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Node.js"],
    category: "Dashboard",
    liveUrl: "#",
    repoUrl: "#",
    coverImage: { src: "/images/pulse-cover.svg", alt: "Pulse Analytics dashboard with line chart, bar chart, and KPI tiles" },
    gallery: [
      { src: "/images/pulse-gallery-1.svg", alt: "Real-time activity feed list", caption: "Live activity feed" },
      { src: "/images/pulse-gallery-2.svg", alt: "Large area chart tracking a metric over time", caption: "Trend view" },
    ],
    caseStudy: {
      problem:
        "The business had the data — it just lived in exports nobody opened. Decisions were made on gut feel because the numbers took too long to get to.",
      approach: [
        "Designed KPI tiles that answer one question each, instead of dense tables that require interpretation.",
        "Streamed activity updates over a WebSocket connection so the feed reflects what's happening now, not what happened at last export.",
        "Kept every chart's time range adjustable from a single shared control so comparisons stay consistent across the dashboard.",
      ],
      outcome:
        "Stakeholders started opening the dashboard directly in standups instead of asking for a manual report, which was the adoption signal the project was built around.",
    },
  },
  {
    slug: "nova-notes",
    name: "Nova Notes",
    tagline: "Notes that stay out of the way until you need them.",
    description:
      "A distraction-free note-taking application with rich text editing, search, categorization, and a responsive interface optimized for desktop and mobile.",
    role: "Full-stack developer — solo build",
    year: "2023",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Productivity",
    liveUrl: "#",
    repoUrl: "#",
    coverImage: { src: "/images/nova-cover.svg", alt: "Nova Notes list and rich text editor side by side" },
    gallery: [
      { src: "/images/nova-gallery-1.svg", alt: "Search results with category tag filters", caption: "Search and tags" },
      { src: "/images/nova-gallery-2.svg", alt: "Note editor shown on a mobile-width screen", caption: "Mobile editor" },
    ],
    caseStudy: {
      problem:
        "Most note apps compete on features until the editor itself gets noisy. The goal here was the opposite: writing should feel like the only thing on screen.",
      approach: [
        "Built the editor on a minimal rich-text toolset that only surfaces formatting controls when text is selected.",
        "Indexed notes for search server-side with Prisma so results stay fast as a notebook grows past a few thousand entries.",
        "Designed the layout mobile-first, collapsing the note list behind a single tap rather than a permanent sidebar.",
      ],
      outcome:
        "The pared-back toolbar was the detail testers mentioned most — several said it was the first note app where they stopped noticing the interface.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
