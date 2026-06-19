import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: false,
    },
    blog: {
        title: "Блог",
        subtitle: "Мои небольшие статьи на темы, которые меня интересуют",
        isActive: true,
    },
    knowledge: {
        title: "Моя база знаний",
        subtitle: "Здесь я собираю свой материал по нужным мне темам",
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
