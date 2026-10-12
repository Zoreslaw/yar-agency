import {readFile, access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const pkg = JSON.parse(await read('package.json'));
const lock = JSON.parse(await read('package-lock.json'));
if (pkg.name !== lock.name || pkg.name !== lock.packages[''].name) throw new Error('Package/lock names differ');
const assets = JSON.parse(await read('src/assets.json'));
const jsx = (await read('src/main.jsx')) + (await read('src/MouthSignal.jsx'));
const paths = new Set([...Object.values(assets), ...[...jsx.matchAll(/['"](\/media\/[^'"\s]+)['"]/g)].map(match => match[1])]);
for (const path of paths) {
 if (!path.startsWith('/media/')) throw new Error(`Unexpected asset path: ${path}`);
 await access(new URL(`public${path}`, root));
 if (path.endsWith('.webp')) await access(new URL(`public${path.replace('.webp', '-800.webp')}`, root));
}
const vercel = JSON.parse(await read('vercel.json'));
if (vercel.framework !== 'vite' || vercel.outputDirectory !== 'dist') throw new Error('Unexpected Vercel framework/output');
console.log(`Project configuration and ${paths.size} required media assets verified.`);
