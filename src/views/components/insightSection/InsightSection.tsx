import type { ProductLaunchSite } from "../../../types";
import { SectionHeading } from "../sectionHeading";
import { ButtonLink } from "../buttonLink";
import "./insightSection.scss";

type InsightSectionProps = { insight: ProductLaunchSite["insight"] };

export function InsightSection({ insight }: InsightSectionProps) {
  return <section className="insight-section shell section" id="fonctionnalites">
    <div className="insight-section__intro"><SectionHeading eyebrow={insight.eyebrow} title={insight.title} text={insight.text} />{insight.cta ? <ButtonLink cta={insight.cta} /> : null}</div>
    <ol className="insight-section__list">{insight.highlights.map((highlight, index) => <li key={highlight}><span>{String(index + 1).padStart(2, "0")}</span>{highlight}</li>)}</ol>
  </section>;
}
