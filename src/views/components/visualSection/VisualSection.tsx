import "./visualSection.scss";

type VisualSectionProps = { variant: "benefits" | "method" };

export function VisualSection({ variant }: VisualSectionProps) {
  const className = `visual-section visual-section--${variant}`;
  const label = variant === "benefits" ? "Paysage abstrait vert et bleu" : "Chemin abstrait vers l'horizon";

  return <section className={className} role="img" aria-label={label} />;
}
