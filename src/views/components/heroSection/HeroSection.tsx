import type { ProductLaunchSite } from "../../../types";
import { ButtonLink } from "../buttonLink";
import "./heroSection.scss";

type HeroSectionProps = { hero: ProductLaunchSite["hero"] };

export function HeroSection({ hero }: HeroSectionProps) {
  return <section className="hero-section shell" id="top">
    {hero.eyebrow ? <p className="hero-section__eyebrow">{hero.eyebrow}</p> : null}
    <h1 className="hero-section__title">{hero.title}</h1>
    {hero.text ? <p className="hero-section__text">{hero.text}</p> : null}
    {hero.cta ? <ButtonLink cta={hero.cta} /> : null}
    <div className="hero-section__dashboard" role="img" aria-label="Aperçu stylisé des données de croissance">
      <div className="hero-section__dashboard-top"><span>Vue d'ensemble</span><span>Tous les territoires</span></div>
      <div className="hero-section__score"><strong>78%</strong><span>de progression<br />opérationnelle</span></div>
      <div className="hero-section__chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="hero-section__labels"><span>2021</span><span>2022</span><span>2023</span><span>2024</span></div>
    </div>
  </section>;
}
