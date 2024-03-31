import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, GithubIcon, DiscordIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.iguanadex.com/community/contact-us",
      },
      {
        label: "IGN Token",
        href: "https://docs.iguanadex.com/iguanadex-on-mainnet/tokenomics",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/Iguana-DEX",
      },
      {
        label: "Documentation",
        href: "https://docs.iguanadex.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/iguanadex",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/Iguana-DEX",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "discord.gg/yq5bUaT7Cm",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
