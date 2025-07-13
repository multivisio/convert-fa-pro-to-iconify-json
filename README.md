# @multivisio/fa-pro-to-iconify-json

Convert Font Awesome Pro SVG icons to Iconify JSON collections and create custom Iconify icon sets programmatically in Node.js or TypeScript projects.

## Features

- Convert Font Awesome Pro SVG icons to Iconify JSON
- Create your own Iconify icon sets
- Supports various Font Awesome styles (solid, regular, light, thin, brands)
- Usable as a library in Node.js/TypeScript projects

## Installation

```sh
npm install @multivisio/fa-pro-to-iconify-json
```

## Usage

### Programmatic (Node.js/TypeScript)

```ts
import { buildIconSet } from "@multivisio/fa-pro-to-iconify-json";

const iconSet = buildIconSet("my-icons", {
  prefix: "fas",
  iconNames: ["user", "home", "star"],
});

// iconSet is an Iconify-compatible JSON object
```

## API

### `buildIconSet(name, icons)`

- **name**: Name/prefix for the Iconify set (string)
- **icons**:
  - Either an object `{ prefix, iconNames }` (Font Awesome style and icon names)
  - Or an array of Font Awesome `IconDefinition` objects

**Returns:**  
An Iconify-compatible JSON object with the selected icons.

## License

ISC

## Author

Michael Dörer

## Important Notice

**A valid [Font Awesome Pro license](https://fontawesome.com/pro) is required to use Font Awesome Pro icons with this tool.  
Please ensure you comply with the Font Awesome Pro licensing terms.**

## Links

- [GitHub Repository](https://github.com/multivisio/convert-fa-pro-to-iconify-json)
- [Report Issues](https://github.com/multivisio/convert-fa-pro-to-iconify-json/issues)
