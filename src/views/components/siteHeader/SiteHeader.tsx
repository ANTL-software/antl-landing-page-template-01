import type { CallToAction, NavigationItem } from "../../../types";
import { ButtonLink } from "../buttonLink";
import { NavigationLink } from "../navigationLink";
import "./siteHeader.scss";

type SiteHeaderProps = {
  brand: string;
  navigation: readonly NavigationItem[];
  cta: CallToAction;
};

export function SiteHeader({ brand, navigation, cta }: SiteHeaderProps) {
  return <header className="site-header shell">
    <NavigationLink className="site-header__brand" href="#top">{brand}</NavigationLink>
    <nav className="site-header__navigation" aria-label="Navigation principale">
      {navigation.map((item) => <NavigationLink key={item.href} href={item.href}>{item.label}</NavigationLink>)}
    </nav>
    <ButtonLink cta={cta} compact />
  </header>;
}
