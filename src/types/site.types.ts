export type NavigationItem = {
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type FeatureIconName = "trend" | "globe" | "message" | "chart";

export type Feature = {
  icon: FeatureIconName;
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
  | "visual-method"
  | "contact";

export type SiteSection = {
  id: SectionId;
  enabled: boolean;
};

export type ProductLaunchPalette = {
  canvas: string;
  surface: string;
  ink: string;
  muted: string;
  subtle: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  focus: string;
  comparisonBorder: string;
  comparisonRow: string;
  quoteSurface: string;
};

export type ProductLaunchTypography = { display: string; body: string; mono: string };

export type SiteTheme = {
  id: string;
  className: string;
  palette: ProductLaunchPalette;
  typography: ProductLaunchTypography;
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
    image: string;
    imageAlt: string;
    frameImage?: string;
    frameAlt?: string;
  };
  visuals: {
    benefits: { image: string; imageAlt: string };
    method: { image: string; imageAlt: string };
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
    image: string;
    imageAlt: string;
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
