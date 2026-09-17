import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavigationLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function NavigationLink({ children, className, href }: NavigationLinkProps) {
  if (href.startsWith("#")) {
    const sectionId = href.slice(1);
    return <Link className={className} to={{ pathname: "/", search: `?section=${sectionId}` }}>{children}</Link>;
  }

  return <a className={className} href={href}>{children}</a>;
}
