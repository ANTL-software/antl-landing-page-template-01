import type { SectionId, SiteSection } from "../types";

const sectionIds = new Set<SectionId>([
  "trust",
  "benefits",
  "visual-benefits",
  "insights",
  "comparison",
  "quote",
  "method",
  "visual-method",
]);

export function getEnabledSectionIds(sections: readonly SiteSection[]): readonly SectionId[] {
  const seenIds = new Set<SectionId>();

  return sections.flatMap((section) => {
    if (!section.enabled || seenIds.has(section.id)) {
      return [];
    }

    seenIds.add(section.id);
    return [section.id];
  });
}

export function isSectionId(value: string): value is SectionId {
  return sectionIds.has(value as SectionId);
}
