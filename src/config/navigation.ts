import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: `${import.meta.env.BASE_URL}publications`, label: "Publications", isActive: false },
    { href: `${import.meta.env.BASE_URL}knowledge`, label: "Knowledge", isActive: true },
    { href: `${import.meta.env.BASE_URL}teaching`, label: "Teaching", isActive: false },
    { href: `${import.meta.env.BASE_URL}projects`, label: "Code", isActive: false },
    { href: `${import.meta.env.BASE_URL}posts`, label: "Blog", isActive: true },
    { href: `${import.meta.env.BASE_URL}tags`, label: "Tags", isActive: true },
    { href: `${import.meta.env.BASE_URL}cv`, label: "CV", isActive: true },
];
