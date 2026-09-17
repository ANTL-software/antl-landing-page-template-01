import { FiArrowUpRight } from "react-icons/fi";
import type { CallToAction } from "../../../types";
import { NavigationLink } from "../navigationLink";
import "./buttonLink.scss";

type ButtonLinkProps = {
  cta: CallToAction;
  compact?: boolean;
};

export function ButtonLink({ cta, compact = false }: ButtonLinkProps) {
  const className = compact ? "button-link button-link--compact" : "button-link";

  return <NavigationLink className={className} href={cta.href}>{cta.label}<FiArrowUpRight aria-hidden="true" className="button-link__icon" /></NavigationLink>;
}
