# convert-fa-pro-to-iconify-json


Convert Font Awesome Pro SVG icons to Iconify JSON collections via CLI or as a reusable Node.js module.

## Features

- Converts multiple Font Awesome Pro icon sets (brands, regular, solid, thin, light) to Iconify JSON format
- Outputs each collection to a separate folder
- Usable as a global CLI tool or as a Node.js module
- CLI: Optional output directory as argument
- CLI: User-friendly output and error messages

## Installation

You need access to Font Awesome Pro npm packages for this tool to work.

Install globally via npm:

```bash
npm install -g @multivisio/convert-fa-pro-to-iconify-json
```

## Usage

Navigate to a project where you have the Font Awesome Pro npm packages installed (or install them there).


Then run:

```bash
convert-fa-pro-to-iconify-json [output-directory]
```

If you omit `[output-directory]`, the default is `font-awesome-iconify` in your current working directory.

This will generate Iconify-compatible JSON files for each Font Awesome Pro style in the specified directory.

### Example output

```
Converting Font Awesome Pro icons to Iconify JSON...
Output directory: font-awesome-iconify
✅ Conversion completed successfully.
```


## Programmatic Usage


You can also use this tool as a module in your own Node.js or TypeScript scripts:

**JavaScript:**
```js
import { convertFaProToIconifyJson } from '@multivisio/convert-fa-pro-to-iconify-json';

convertFaProToIconifyJson({ outDir: 'my-output-dir' });
```

**TypeScript:**
```ts
import { convertFaProToIconifyJson, ConvertOptions } from '@multivisio/convert-fa-pro-to-iconify-json';

const options: ConvertOptions = { outDir: 'my-output-dir' };
convertFaProToIconifyJson(options);
```

## Requirements

- Node.js v22 or newer
- Font Awesome Pro npm packages (brands, regular, solid, thin, light)

## Example


```bash
cd my-project-with-fa-pro
# Default output directory:
convert-fa-pro-to-iconify-json
# Output: ./font-awesome-iconify/{brands,regular,solid,thin,light}/icons.json

# Custom output directory:
convert-fa-pro-to-iconify-json my-output-dir
# Output: ./my-output-dir/{brands,regular,solid,thin,light}/icons.json
```

## License

This tool does not include Font Awesome Pro icons. You must have a valid Font Awesome Pro license to use the output.

MIT License for this tool. Font Awesome Pro icons are © Fonticons, Inc.
