import { blankIconSet } from "@iconify/tools";
import { icon, library, } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fat } from "@fortawesome/pro-thin-svg-icons";
library.add(fab);
library.add(fal);
library.add(far);
library.add(fas);
library.add(fat);
/**
 * Returns an array of Font Awesome IconDefinition objects for the given prefix and icon names.
 * @param icons - An object containing the prefix and an array of icon names.
 * @returns An array of Font Awesome IconDefinition objects.
 */
function buildIconDefinitions(icons) {
    return icons.iconNames.map((iconName) => {
        return icon({
            prefix: icons.prefix,
            iconName,
        });
    });
}
/**
 * Builds an Iconify icon set from Font Awesome Pro icons.
 * @param name - The prefix/name for the resulting Iconify icon set.
 * @param icons - Either an object with prefix and iconNames (to look up Font Awesome icons), or an array of IconDefinition objects.
 * @returns An Iconify JSON object containing the selected icons.
 */
export function buildIconSet(name, icons) {
    icons = Array.isArray(icons) ? icons : buildIconDefinitions(icons);
    const baseInfo = {
        name: "Font Awesome",
        author: {
            name: "Font Awesome",
        },
        license: {
            title: "Commercial License",
            url: "https://fontawesome.com/license",
        },
        height: 512,
    };
    const iconSet = blankIconSet(name);
    iconSet.info = structuredClone(baseInfo);
    for (const icon of icons) {
        const [width, height, ligatures, unicode, svgPathData] = icon.icon; // eslint-disable-line @typescript-eslint/no-unused-vars
        const body = typeof svgPathData === "string"
            ? `<path fill="currentColor" d="${svgPathData}" />`
            : `<g fill="currentColor">${svgPathData.map((x) => `<path d="${x}" />`).join("")}</g>`;
        iconSet.setIcon(icon.iconName, {
            body,
            height,
            width,
        });
        ligatures.forEach((x) => {
            if (Number.isNaN(+x))
                iconSet.setAlias(x, icon.iconName);
        });
    }
    const data = iconSet.export();
    return data;
}
