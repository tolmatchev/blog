import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/", label: "About", isActive: false },
    { href: "/publications", label: "Publications", isActive: false },
    { href: "/talks", label: "Knowledge", isActive: true },
    { href: "/teaching", label: "Teaching", isActive: false },
    { href: "/projects", label: "Code", isActive: false },
    { href: "/posts", label: "Blog", isActive: true },
    { href: "/tags", label: "Tags", isActive: true },
    { href: "/cv", label: "CV", isActive: true },
];
