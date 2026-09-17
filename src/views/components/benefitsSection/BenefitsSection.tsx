import type { ProductLaunchSite } from "../../../types";
import { SectionHeading } from "../sectionHeading";
import "./benefitsSection.scss";

type BenefitsSectionProps = { benefits: ProductLaunchSite["benefits"] };

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return <section className="benefits-section shell section" id="benefices">
    <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} text={benefits.text} />
    <div className="benefits-section__grid">
      {benefits.items.map((feature) => <article className="benefits-section__card" key={feature.title}><span aria-hidden="true">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}
    </div>
  </section>;
}
