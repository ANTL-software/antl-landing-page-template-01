import { FiArrowUpRight } from "react-icons/fi";
import type { CSSProperties } from "react";
import { useProductLaunchPage } from "../../../hooks";
import type { SiteTheme } from "../../../types";
import { ButtonLink, SiteFooter, SiteHeader } from "../../components";
import "./notFoundPage.scss";

type ThemeVariable = "--color-canvas" | "--color-surface" | "--color-ink" | "--color-muted" | "--color-subtle" | "--color-accent" | "--color-accent-hover" | "--color-accent-soft" | "--color-focus" | "--color-comparison-border" | "--color-comparison-row" | "--color-quote-surface" | "--font-display" | "--font-body" | "--font-mono";
type ThemeStyle = CSSProperties & Record<ThemeVariable, string>;

function getThemeStyle(theme: SiteTheme): ThemeStyle {
  const { palette, typography } = theme;

  return {
    "--color-canvas": palette.canvas, "--color-surface": palette.surface, "--color-ink": palette.ink, "--color-muted": palette.muted, "--color-subtle": palette.subtle, "--color-accent": palette.accent, "--color-accent-hover": palette.accentHover, "--color-accent-soft": palette.accentSoft, "--color-focus": palette.focus, "--color-comparison-border": palette.comparisonBorder, "--color-comparison-row": palette.comparisonRow, "--color-quote-surface": palette.quoteSurface, "--font-display": typography.display, "--font-body": typography.body, "--font-mono": typography.mono,
  };
}

export function NotFoundPage() {
  const { site } = useProductLaunchPage();

  return <main className={`not-found-page ${site.theme.className}`} style={getThemeStyle(site.theme)}><SiteHeader brand={site.brand} navigation={site.navigation} cta={site.headerCta} /><section className="not-found-page__content shell"><p>{site.notFound.eyebrow}</p><h1>{site.notFound.title}</h1><FiArrowUpRight aria-hidden="true" className="not-found-page__arrow" /><div><p>{site.notFound.text}</p><ButtonLink cta={site.notFound.cta} /></div></section><SiteFooter brand={site.brand} navigation={site.navigation} legalNotice={site.footer.legalNotice} /></main>;
}
