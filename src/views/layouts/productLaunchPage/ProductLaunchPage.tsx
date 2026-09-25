import type { ReactNode } from "react";
import { useProductLaunchPage } from "../../../hooks";
import type { SectionId } from "../../../types";
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
    } satisfies Record<SectionId, ReactNode>;

    return <>{sections[sectionId]}</>;
  };

  return <main className={`product-launch-page ${site.theme.className}`}><SiteHeader brand={site.brand} navigation={site.navigation} cta={site.headerCta} /><HeroSection hero={site.hero} />{sectionIds.map((sectionId) => <div key={sectionId}>{renderSection(sectionId)}</div>)}<ContactSection contact={site.contact} /><SiteFooter brand={site.brand} navigation={site.navigation} legalNotice={site.footer.legalNotice} /></main>;
}
