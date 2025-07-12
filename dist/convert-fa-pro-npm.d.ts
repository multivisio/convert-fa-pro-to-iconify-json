export interface ConvertOptions {
    /** Output directory (absolute or relative to cwd) */
    outDir?: string;
}
/**
 * Converts Font Awesome Pro icons to Iconify JSON collections.
 * @param options Optional output directory (default: ./font-awesome-iconify)
 */
export declare function convertFaProToIconifyJson(options?: ConvertOptions): void;
