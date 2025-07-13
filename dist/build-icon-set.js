import { blankIconSet } from '@iconify/tools';
/**
 * Builds an Iconify icon set from Font Awesome Pro icons.
 * @param name - The name of the icon set.
 * @param icons - An array of Font Awesome icon definitions.
 * @returns An Iconify icon set.
 */
export function buildIconSet(name, icons) {
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
    };
    const iconSet = blankIconSet(name);
    iconSet.info = structuredClone(baseInfo);
    for (const icon of icons) {
        const [width, height, ligatures, unicode, svgPathData] = icon.icon;
        const body = typeof svgPathData === 'string'
            ? `<path fill="currentColor" d="${svgPathData}" />`
            : `<g fill="currentColor">${svgPathData.map((x) => `<path d="${x}" />`).join('')}</g>`;
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
