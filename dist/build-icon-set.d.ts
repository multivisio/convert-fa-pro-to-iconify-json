import { type IconDefinition } from '@fortawesome/free-brands-svg-icons';
import type { IconifyJSON } from '@iconify/types';
/**
 * Builds an Iconify icon set from Font Awesome Pro icons.
 * @param name - The name of the icon set.
 * @param icons - An array of Font Awesome icon definitions.
 * @returns An Iconify icon set.
 */
export declare function buildIconSet(name: string, icons: IconDefinition[]): IconifyJSON;
