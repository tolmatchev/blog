import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: false,
    },
    blog: {
        title: "Блог",
        subtitle: "Thoughts on physics, philosophy, and music.",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific articles.",
        isActive: true,
    },
    knowledge: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Academic courses and educational materials.",
        isActive: true,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "My CV",
        subtitle: "",
        isActive: true,
    },
};
