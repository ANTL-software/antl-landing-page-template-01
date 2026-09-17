import "./sectionHeading.scss";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return <div className="section-heading">
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2 className="section-heading__title">{title}</h2>
    {text ? <p className="section-heading__text">{text}</p> : null}
  </div>;
}
