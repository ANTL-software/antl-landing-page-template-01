import "./trustSection.scss";

type TrustSectionProps = { logos: readonly string[] };

export function TrustSection({ logos }: TrustSectionProps) {
  return <section className="trust-section shell" aria-label="Ils nous font confiance">
    <span className="trust-section__label">Ils nous font confiance</span>
    <div className="trust-section__logos">{logos.map((logo) => <b key={logo}>{logo}</b>)}</div>
  </section>;
}
