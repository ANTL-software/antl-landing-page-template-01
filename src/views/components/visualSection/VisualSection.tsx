import "./visualSection.scss";

type VisualSectionProps = { variant: "benefits" | "method"; image: string; imageAlt: string };

export function VisualSection({ variant, image, imageAlt }: VisualSectionProps) {
  const className = `visual-section visual-section--${variant}`;

  return <section className={className}><img src={image} alt={imageAlt} loading="lazy" decoding="async" /></section>;
}
