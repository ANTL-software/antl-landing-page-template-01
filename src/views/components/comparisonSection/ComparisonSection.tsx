import type { ComparisonCell, ProductLaunchSite } from "../../../types";
import { ButtonLink } from "../buttonLink";
import { SectionHeading } from "../sectionHeading";
import "./comparisonSection.scss";

type ComparisonSectionProps = { comparison: ProductLaunchSite["comparison"] };

function getCellText(value: ComparisonCell): string {
  return value === "included" ? "✓" : "—";
}

export function ComparisonSection({ comparison }: ComparisonSectionProps) {
  return <section className="comparison-section section">
    <div className="comparison-section__content shell">
      <div><SectionHeading eyebrow={comparison.eyebrow} title={comparison.title} text={comparison.text} /><ButtonLink cta={comparison.cta} /></div>
      <div className="comparison-section__cards" aria-label="Comparatif des fonctionnalités">
        {comparison.columns.map((column, columnIndex) => <article className="comparison-section__card" key={column}><h3>{column}</h3><ul>{comparison.rows.map((row) => <li key={row.label}><span aria-label={row.values[columnIndex] === "included" ? "Inclus" : "Non inclus"}>{getCellText(row.values[columnIndex])}</span>{row.label}</li>)}</ul></article>)}
      </div>
    </div>
  </section>;
}
