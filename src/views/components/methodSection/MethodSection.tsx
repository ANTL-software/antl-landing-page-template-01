import type { ProductLaunchSite } from "../../../types";
import { ButtonLink } from "../buttonLink";
import { SectionHeading } from "../sectionHeading";
import "./methodSection.scss";

type MethodSectionProps = { method: ProductLaunchSite["method"] };

export function MethodSection({ method }: MethodSectionProps) {
  return <section className="method-section shell section" id="methode">
    <div><SectionHeading eyebrow={method.eyebrow} title={method.title} /><ButtonLink cta={method.cta} /></div>
    <ol className="method-section__steps">{method.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
  </section>;
}
