import type { ProductLaunchSite } from "../../../types";
import { ButtonLink } from "../buttonLink";
import { SectionHeading } from "../sectionHeading";
import "./contactSection.scss";

type ContactSectionProps = { contact: ProductLaunchSite["contact"] };

export function ContactSection({ contact }: ContactSectionProps) {
  return <section className="contact-section shell" id="contact"><SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} /><ButtonLink cta={contact.cta} /></section>;
}
