import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/Guzime",
    linkTitle: `Follow Tolmachev Nikita on Github`,
    isActive: true,
  },
  {
    name: "Mail",
    href: "mailto:forblachok@yandex.ru",
    linkTitle: `Send an email to Tolmachev Nikita`,
    isActive: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/claude-shannon-123456789/",
    linkTitle: `Claude Shannon on LinkedIn`,
    isActive: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/tolmachevski",
    linkTitle: `Tolmachev Nikita in Telegram`,
    isActive: true, 
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: "Github",
  Mail: "Mail",
  Linkedin: "LinkedIn",
  Telegram: "Telegram",
};
