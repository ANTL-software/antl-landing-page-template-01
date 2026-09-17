import type { NavigationItem } from "../../../types";
import { NavigationLink } from "../navigationLink";
import "./siteFooter.scss";

type SiteFooterProps = { brand: string; navigation: readonly NavigationItem[]; legalNotice: string };

export function SiteFooter({ brand, navigation, legalNotice }: SiteFooterProps) {
  return <footer className="site-footer shell"><NavigationLink className="site-footer__brand" href="#top">{brand}</NavigationLink><div className="site-footer__links">{navigation.map((item) => <NavigationLink key={item.href} href={item.href}>{item.label}</NavigationLink>)}</div><small>© {new Date().getFullYear()} {brand}. {legalNotice}</small></footer>;
}
