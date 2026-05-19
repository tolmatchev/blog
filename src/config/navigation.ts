import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/", label: "About", isActive: false },
    { href: "/publications", label: "Publications", isActive: false },
    { href: "/knowledge", label: "Knowledge", isActive: true },
    { href: "/teaching", label: "Teaching", isActive: false },
    { href: "/projects", label: "Code", isActive: false },
    { href: "/posts", label: "Blog", isActive: false },
    { href: "/tags", label: "Tags", isActive: false },
    { href: "/cv", label: "CV", isActive: true },
];
