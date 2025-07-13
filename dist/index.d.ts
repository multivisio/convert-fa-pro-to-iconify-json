import { IconName, IconPrefix, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { IconifyJSON } from "@iconify/types";
/**
 * Defines the structure for requesting a set of Font Awesome icons by prefix and icon names.
 * - `prefix`: The Font Awesome style prefix (e.g., "fas", "far", "fab", "fal", "fat").
 * - `iconNames`: An array of icon names (as used by Font Awesome) to include in the set.
 */
type RequestIconNames = {
    prefix: IconPrefix;
    iconNames: IconName[];
};
/**
 * Builds an Iconify icon set from Font Awesome Pro icons.
 * @param name - The prefix/name for the resulting Iconify icon set.
 * @param icons - Either an object with prefix and iconNames (to look up Font Awesome icons), or an array of IconDefinition objects.
 * @returns An Iconify JSON object containing the selected icons.
 */
export declare function buildIconSet(name: string, icons: RequestIconNames | IconDefinition[]): IconifyJSON;
export {};
