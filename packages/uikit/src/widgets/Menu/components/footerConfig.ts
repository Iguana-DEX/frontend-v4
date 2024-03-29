import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.iguanadex.com/community/contact-us",
      },
      {
        label: t("Community"),
        href: "https://discord.com/invite/yq5bUaT7Cm",
      },
      {
        label: t("Brand Assets"),
        href: "https://github.com/Iguana-DEX/assets/tree/main/iguana_brand_assets",
      },
      {
        label: t("IGN"),
        href: "https://docs.iguanadex.com/readme/tokenomics",
      },
      {
        label: t("Terms Of Service"),
        href: "https://iguanadex.com/terms-of-service",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "GitHub",
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: t("Audits"),
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
    ],
  },
];
