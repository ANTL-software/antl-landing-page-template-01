import { FiBarChart2, FiGlobe, FiMessageCircle, FiTrendingUp } from "react-icons/fi";
import type { ProductLaunchSite } from "../../../types";
import { SectionHeading } from "../sectionHeading";
import "./benefitsSection.scss";

type BenefitsSectionProps = { benefits: ProductLaunchSite["benefits"] };

const featureIcons = {
  trend: FiTrendingUp,
  globe: FiGlobe,
  message: FiMessageCircle,
  chart: FiBarChart2,
};

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return <section className="benefits-section shell section" id="benefices">
    <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} text={benefits.text} />
    <div className="benefits-section__grid">
      {benefits.items.map((feature) => {
        const FeatureIcon = featureIcons[feature.icon];

        return <article className="benefits-section__card" key={feature.title}><span aria-hidden="true"><FeatureIcon /></span><h3>{feature.title}</h3><p>{feature.description}</p></article>;
      })}
    </div>
  </section>;
}
