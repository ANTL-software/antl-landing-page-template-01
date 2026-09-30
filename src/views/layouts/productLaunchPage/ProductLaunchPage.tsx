import type { CSSProperties, ReactNode } from "react";
import { useProductLaunchPage } from "../../../hooks";
import type { SectionId, SiteTheme } from "../../../types";
import {
  BenefitsSection,
  ComparisonSection,
  ContactSection,
  HeroSection,
  InsightSection,
  MethodSection,
  QuoteSection,
  SiteFooter,
  SiteHeader,
  TrustSection,
  VisualSection,
} from "../../components";
import "./productLaunchPage.scss";

type ThemeVariable = "--color-canvas" | "--color-surface" | "--color-ink" | "--color-muted" | "--color-subtle" | "--color-accent" | "--color-accent-hover" | "--color-accent-soft" | "--color-focus" | "--color-comparison-border" | "--color-comparison-row" | "--color-quote-surface" | "--font-display" | "--font-body" | "--font-mono";
type ThemeStyle = CSSProperties & Record<ThemeVariable, string>;

function getThemeStyle(theme: SiteTheme): ThemeStyle {
  const { palette, typography } = theme;

  return {
    "--color-canvas": palette.canvas,
    "--color-surface": palette.surface,
    "--color-ink": palette.ink,
    "--color-muted": palette.muted,
    "--color-subtle": palette.subtle,
    "--color-accent": palette.accent,
    "--color-accent-hover": palette.accentHover,
    "--color-accent-soft": palette.accentSoft,
    "--color-focus": palette.focus,
    "--color-comparison-border": palette.comparisonBorder,
    "--color-comparison-row": palette.comparisonRow,
    "--color-quote-surface": palette.quoteSurface,
    "--font-display": typography.display,
    "--font-body": typography.body,
    "--font-mono": typography.mono,
  };
}

export function ProductLaunchPage() {
  const { site, sectionIds } = useProductLaunchPage();

  const renderSection = (sectionId: SectionId) => {
    const sections = {
      trust: <TrustSection logos={site.logos} />,
      benefits: <BenefitsSection benefits={site.benefits} />,
      "visual-benefits": <VisualSection variant="benefits" {...site.visuals.benefits} />,
      insights: <InsightSection insight={site.insight} />,
      comparison: <ComparisonSection comparison={site.comparison} />,
      quote: <QuoteSection quote={site.quote} />,
      method: <MethodSection method={site.method} />,
      "visual-method": <VisualSection variant="method" {...site.visuals.method} />,
      contact: <ContactSection contact={site.contact} />,
    } satisfies Record<SectionId, ReactNode>;

    return <>{sections[sectionId]}</>;
  };

  return <main className={`product-launch-page ${site.theme.className}`} style={getThemeStyle(site.theme)}><SiteHeader brand={site.brand} navigation={site.navigation} cta={site.headerCta} /><HeroSection hero={site.hero} />{sectionIds.map((sectionId) => <div key={sectionId}>{renderSection(sectionId)}</div>)}<SiteFooter brand={site.brand} navigation={site.navigation} legalNotice={site.footer.legalNotice} /></main>;
}
