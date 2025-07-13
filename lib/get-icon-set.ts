import { blankIconSet } from '@iconify/tools';
import fs from 'fs';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';

/**
 * Creates an Iconify IconSet containing only the specified icons from fab.json.
 * @param iconNames Array of icon names to include in the new IconSet
 * @returns Iconify IconSet object
 */
export function iconSetFab(iconNames: string[]) {
  return createIconSetFromJson('fab', iconNames);
}

/**
 * Creates an Iconify IconSet containing only the specified icons from far.json.
 * @param iconNames Array of icon names to include in the new IconSet
 * @returns Iconify IconSet object
 */
export function iconSetFar(iconNames: string[]) {
  return createIconSetFromJson('far', iconNames);
}

/**
 * Creates an Iconify IconSet containing only the specified icons from fas.json.
 * @param iconNames Array of icon names to include in the new IconSet
 * @returns Iconify IconSet object
 */
export function iconSetFas(iconNames: string[]) {
  return createIconSetFromJson('fas', iconNames);
}

/**
 * Creates an Iconify IconSet containing only the specified icons from fat.json.
 * @param iconNames Array of icon names to include in the new IconSet
 * @returns Iconify IconSet object
 */
export function iconSetFat(iconNames: string[]) {
  return createIconSetFromJson('fat', iconNames);
}

/**
 * Creates an Iconify IconSet containing only the specified icons from fal.json.
 * @param iconNames Array of icon names to include in the new IconSet
 * @returns Iconify IconSet object
 */
export function iconSetFal(iconNames: string[]) {
  return createIconSetFromJson('fal', iconNames);
}

/**
 * Helper function to create an IconSet from a given JSON file in the icons folder.
 * @param prefix The prefix and JSON filename (without .json)
 * @param iconNames Array of icon names to include
 * @returns Iconify IconSet object
 */
function createIconSetFromJson(prefix: string, iconNames: string[]) {
  const __filename = fileURLToPath(import.meta.url);
  const jsonPath = join(dirname(__filename), '..', 'icons', `${prefix}.json`);
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  const iconSet = blankIconSet(prefix);

  for (const name of iconNames) {
    const iconData = json.icons[name];
    if (iconData) {
      iconSet.setIcon(name, iconData);
    }
  }

  if (json.info) {
    iconSet.info = {
      ...json.info,
      total: iconNames.length,
    };
  }

  return iconSet;
}