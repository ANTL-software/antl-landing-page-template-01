import { FiArrowUpRight } from "react-icons/fi";
import { useProductLaunchPage } from "../../../hooks";
import { ButtonLink, SiteFooter, SiteHeader } from "../../components";
import "./notFoundPage.scss";

export function NotFoundPage() {
  const { site } = useProductLaunchPage();

  return <main className={`not-found-page ${site.theme.className}`}><SiteHeader brand={site.brand} navigation={site.navigation} cta={site.headerCta} /><section className="not-found-page__content shell"><p>{site.notFound.eyebrow}</p><h1>{site.notFound.title}</h1><FiArrowUpRight aria-hidden="true" className="not-found-page__arrow" /><div><p>{site.notFound.text}</p><ButtonLink cta={site.notFound.cta} /></div></section><SiteFooter brand={site.brand} navigation={site.navigation} legalNotice={site.footer.legalNotice} /></main>;
}
