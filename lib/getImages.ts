import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg', '.JPG', '.JPEG', '.PNG']);

/**
 * Reads a folder inside /public and returns an array of URL paths.
 * @param folder - path relative to /public, e.g. 'img/intro-carousel'
 */
export function getImagesFromFolder(folder: string): string[] {
    const absoluteDir = path.join(process.cwd(), 'public', folder);

    if (!fs.existsSync(absoluteDir)) return [];

    return fs
        .readdirSync(absoluteDir)
        .filter(file => IMAGE_EXTENSIONS.has(path.extname(file)))
        .sort((a, b) => {
            // Natural sort: "10.jpg" comes after "9.jpg"
            const numA = parseInt(a) || 0;
            const numB = parseInt(b) || 0;
            if (numA && numB) return numA - numB;
            return a.localeCompare(b);
        })
        .map(file => `/${folder}/${file}`);
}
