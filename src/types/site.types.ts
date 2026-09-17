export type NavigationItem = {
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type ComparisonCell = "included" | "excluded";

export type ComparisonRow = {
  label: string;
  values: readonly ComparisonCell[];
};

export type SectionId =
  | "trust"
  | "benefits"
  | "visual-benefits"
  | "insights"
  | "comparison"
  | "quote"
  | "method"
  | "visual-method";

export type SiteSection = {
  id: SectionId;
  enabled: boolean;
};

export type SiteTheme = {
  id: string;
  className: string;
};

export type ProductLaunchSite = {
  theme: SiteTheme;
  brand: string;
  navigation: readonly NavigationItem[];
  headerCta: CallToAction;
  hero: {
    eyebrow?: string;
    title: string;
    text?: string;
    cta?: CallToAction;
  };
  logos: readonly string[];
  benefits: {
    eyebrow: string;
    title: string;
    text: string;
    items: readonly Feature[];
  };
  insight: {
    eyebrow: string;
    title: string;
    text: string;
    highlights: readonly string[];
    cta?: CallToAction;
  };
  comparison: {
    eyebrow: string;
    title: string;
    text: string;
    cta: CallToAction;
    columns: readonly string[];
    rows: readonly ComparisonRow[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
  method: {
    eyebrow: string;
    title: string;
    cta: CallToAction;
    steps: readonly Step[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    cta: CallToAction;
  };
  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    cta: CallToAction;
  };
  footer: {
    legalNotice: string;
  };
  sections: readonly SiteSection[];
};
