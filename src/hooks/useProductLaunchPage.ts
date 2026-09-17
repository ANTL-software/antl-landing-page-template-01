import { site } from "../content/site";
import { getEnabledSectionIds } from "../models";
import type { ProductLaunchSite, SectionId } from "../types";

export type ProductLaunchPageState = {
  site: ProductLaunchSite;
  sectionIds: readonly SectionId[];
};

export function useProductLaunchPage(): ProductLaunchPageState {
  return {
    site,
    sectionIds: getEnabledSectionIds(site.sections),
  };
}
