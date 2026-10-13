import sharp from 'sharp';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sources = [
 ['backstage-rig-8088425.jpg', 'backstage-rig'],
 ['stage-preparation-2177813.jpg', 'stage-preparation']
];
for (const [source, name] of sources) {
 for (const [width, suffix] of [[1800, ''], [800, '-800']]) {
  await sharp(`${root}source-assets/${source}`)
   .resize({width, withoutEnlargement:true})
   .webp({quality:85})
   .toFile(`${root}public/media/${name}${suffix}.webp`);
 }
}
console.log('Generated four backstage photo derivatives; source files unchanged.');
