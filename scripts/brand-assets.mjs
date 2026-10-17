import sharp from 'sharp';
import {readFile, writeFile, mkdir} from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const logo = (await readFile(new URL('public/media/IMG_0384.PNG', root))).toString('base64');
// The supplied mark is cropped by the same SVG viewport as the site logo.
const mark = (x, y, width, height) => `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="150 76 555 277"><image href="data:image/png;base64,${logo}" width="845" height="493"/></svg>`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" rx="64" fill="#991A1E"/>${mark(36,146,440,220)}</svg>`;
await mkdir(new URL('public/icons/', root), {recursive:true});
await writeFile(new URL('public/favicon.svg', root), icon);
for (const [size, name] of [[32,'favicon-32.png'],[180,'apple-touch-icon.png'],[192,'icon-192.png'],[512,'icon-512.png']]) {
 await sharp(Buffer.from(icon)).resize(size, size).png().toFile(new URL(`public/icons/${name}`, root).pathname);
}
// PNG-in-ICO is supported by current browsers; retain a conventional /favicon.ico fallback.
const png = await sharp(Buffer.from(icon)).resize(32,32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1,2); header.writeUInt16LE(1,4); header[6]=32; header[7]=32;
header.writeUInt16LE(1,10); header.writeUInt16LE(32,12); header.writeUInt32LE(png.length,14); header.writeUInt32LE(22,18);
await writeFile(new URL('public/favicon.ico',root),Buffer.concat([header,png]));
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#991A1E"/>${mark(240,135,720,360)}</svg>`;
await sharp(Buffer.from(social)).jpeg({quality:92}).toFile(new URL('public/social-preview.jpg',root).pathname);
console.log('Original YAR mark: browser/mobile icons and 1200 × 630 sharing image generated.');
