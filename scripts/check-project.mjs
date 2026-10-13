import {readFile, access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const pkg = JSON.parse(await read('package.json'));
const lock = JSON.parse(await read('package-lock.json'));
if (pkg.name !== lock.name || pkg.name !== lock.packages[''].name) throw new Error('Package/lock names differ');
const assets = JSON.parse(await read('src/assets.json'));
const sources = await Promise.all(['src/main.jsx', 'src/MouthSignal.jsx', 'src/StageLighting.jsx', 'src/style.css'].map(read));
const paths = new Set([...Object.values(assets), ...sources.join('\n').matchAll(/\/media\/[a-zA-Z0-9._-]+\.(?:webp|jpg|png|mp4)/g)].map(item => typeof item === 'string' ? item : item[0]));
for (const path of Object.values(assets)) {
 if (path.endsWith('.webp')) paths.add(path.replace('.webp', '-800.webp'));
}
for (const path of paths) {
 if (!path.startsWith('/media/')) throw new Error(`Unexpected asset path: ${path}`);
 await access(new URL(`public${path}`, root));
}
const displayFont = await read('src/display-font.css');
const fonts = [...displayFont.matchAll(/\/fonts\/[a-zA-Z0-9._-]+\.woff2/g)];
for (const [font] of fonts) await access(new URL(`public${font}`, root));
await access(new URL('public/licenses/Oswald-OFL.txt', root));
const vercel = JSON.parse(await read('vercel.json'));
if (vercel.framework !== 'vite' || vercel.outputDirectory !== 'dist') throw new Error('Unexpected Vercel framework/output');
console.log(`Project configuration and ${paths.size} required media assets and ${fonts.length} display font files verified.`);
