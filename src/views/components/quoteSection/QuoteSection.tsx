import type { ProductLaunchSite } from "../../../types";
import "./quoteSection.scss";

type QuoteSectionProps = { quote: ProductLaunchSite["quote"] };

export function QuoteSection({ quote }: QuoteSectionProps) {
  return <section className="quote-section shell">
    <div className="quote-section__art" aria-hidden="true"><i /><i /><i /></div>
    <blockquote className="quote-section__quote"><p>« {quote.text} »</p><footer>{quote.author}<span>{quote.role}</span></footer></blockquote>
  </section>;
}
