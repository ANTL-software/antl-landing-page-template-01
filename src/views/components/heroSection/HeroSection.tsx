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
    <div className="hero-section__dashboard">
      {hero.frameImage ? <div className="hero-section__device">
        <img className="hero-section__device-frame" src={hero.frameImage} alt={hero.frameAlt ?? ""} />
        <div className="hero-section__device-screen">
          <img src={hero.image} alt={hero.imageAlt} fetchPriority="high" />
        </div>
      </div> : <img src={hero.image} alt={hero.imageAlt} fetchPriority="high" />}
    </div>
  </section>;
}
