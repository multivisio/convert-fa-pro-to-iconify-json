# convert-fa-pro-to-iconify-json

Convert Font Awesome Pro SVG icons to Iconify JSON collections for use in Iconify-compatible projects or to create custom Iconify icon sets from your exported JSON files.

## Features

- Converts multiple Font Awesome Pro icon sets (brands, regular, solid, thin, light) to Iconify JSON format
- Outputs each collection to a separate folder at the package root (`font-awesome-iconify`)
- Provides utility functions to create custom Iconify icon sets from your exported JSON files
- Usable as a Node.js/TypeScript module

## Installation

You need access to Font Awesome Pro npm packages for this tool to work.

Install as a dev dependency in your project:

```bash
npm install --save-dev @multivisio/convert-fa-pro-to-iconify-json
```

## Usage

After running the conversion (see your project setup for details), you will have JSON files for each Font Awesome Pro style in the `font-awesome-iconify` directory at your project root.

You can then use the provided utility functions to create custom Iconify icon sets from these JSON files.

## Programmatic Usage

**JavaScript:**
```js
import { iconSetFab, iconSetFas, iconSetFar, iconSetFat, iconSetFal } from '@multivisio/convert-fa-pro-to-iconify-json';

// Example: Create a custom icon set with selected brand icons
const myBrandIcons = iconSetFab(['github', 'twitter', 'facebook']);
console.log(myBrandIcons);
```

**TypeScript:**
```ts
import { iconSetFab, iconSetFas, iconSetFar, iconSetFat, iconSetFal } from '@multivisio/convert-fa-pro-to-iconify-json';

// Example: Create a custom icon set with selected solid icons
const mySolidIcons = iconSetFas(['user', 'home', 'star']);
console.log(mySolidIcons);
```

## Requirements

- Node.js v22 or newer
- Font Awesome Pro npm packages (brands, regular, solid, thin, light)

## License

This tool does not include Font Awesome Pro icons. You must have a valid Font Awesome Pro license to use the output.

MIT License for this tool. Font Awesome Pro icons are © Fonticons, Inc.
