import fs from 'fs';
import { blankIconSet } from '@iconify/tools';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// import the fonts you want to convert
import {
  fab as faProBrandsIcons,
  prefix as faProBrandsPrefix,
} from '@fortawesome/free-brands-svg-icons';
import {
  far as faProRegularIcons,
  prefix as faProRegularPrefix,
} from '@fortawesome/pro-regular-svg-icons';
import {
  fas as faProSolidIcons,
  prefix as faProSolidPrefix,
} from '@fortawesome/pro-solid-svg-icons';

import {
  fat as faProThinIcons,
  prefix as faProThinPrefix,
} from '@fortawesome/pro-thin-svg-icons';
import {
  fal as faProLightIcons,
  prefix as faProLightPrefix,
} from '@fortawesome/pro-light-svg-icons';

import type { IconifyInfo } from '@iconify/types';

/**
 * Converts Font Awesome Pro icons to Iconify JSON collections.
 * Output directory is always at the package root: ./font-awesome-iconify
 */
export function convertFaProToIconifyJson() {
  // Bestimme das Root-Verzeichnis des Pakets (dort, wo diese Datei liegt, zwei Ebenen hoch)
  const __filename = fileURLToPath(import.meta.url);
  const packageRoot = join(dirname(__filename), '..');

  const icons = [
    { icons: faProBrandsIcons, prefix: faProBrandsPrefix },
    { icons: faProRegularIcons, prefix: faProRegularPrefix },
    { icons: faProSolidIcons, prefix: faProSolidPrefix },
    { icons: faProThinIcons, prefix: faProThinPrefix },
    { icons: faProLightIcons, prefix: faProLightPrefix },
  ] as const;

  const collectionTargetDir = join(packageRoot, 'icons');

  // Check if the output directory exists
  if (fs.existsSync(collectionTargetDir)) {
    fs.rmSync(collectionTargetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(collectionTargetDir, {
    recursive: true,
  });

  const baseInfo = {
    name: 'Font Awesome',
    author: {
      name: 'Font Awesome',
    },
    license: {
      title: 'Commercial License',
      url: 'https://fontawesome.com/license',
    },
    height: 512,
  } as const satisfies IconifyInfo;

  for (const iconData of icons) {
    const iconSet = blankIconSet(iconData.prefix);
    iconSet.info = structuredClone(baseInfo);

    for (const { icon, iconName } of Object.values(iconData.icons) as Array<{ icon: any; iconName: string }>) {
      const [width, height, ligatures, unicode, svgPathData] = icon;

      const body =
        typeof svgPathData === 'string'
          ? `<path fill="currentColor" d="${svgPathData}" />`
          : `<g fill="currentColor">${(svgPathData as string[]).map((x: string) => `<path d="${x}" />`).join('')}</g>`;

      iconSet.setIcon(iconName, {
        body,
        height,
        width,
      });

      ligatures.forEach((x: string) => {
        if (Number.isNaN(+x)) iconSet.setAlias(x, iconName);
      });
    }

    const data = iconSet.export();
    //console.log(data);
    const dataJson = JSON.stringify(data, null, 2);
    const fileName = join(collectionTargetDir, `${iconData.prefix}.json`);

    fs.writeFileSync(fileName, dataJson, {
      encoding: 'utf-8',
    });
  }
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  convertFaProToIconifyJson();
}