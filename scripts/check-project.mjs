import {readFile, access} from 'node:fs/promises';
import {resolve} from 'node:path';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const pkg = JSON.parse(await read('package.json'));
const lock = JSON.parse(await read('package-lock.json'));
if (pkg.version !== lock.version || pkg.version !== lock.packages[''].version) throw new Error('Package/lock versions differ');
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
await access(new URL('public/licenses/Montserrat-OFL.txt', root));
const vercel = JSON.parse(await read('vercel.json'));
if (vercel.framework !== 'vite' || vercel.outputDirectory !== 'dist') throw new Error('Unexpected Vercel framework/output');
console.log(`Project configuration and ${paths.size} required media assets and ${fonts.length} display font files verified.`);

const origin = new URL(pkg.homepage).origin;
const html = await read('index.html');
if (!html.includes('<title>YAR Agency</title>') || !html.includes('property="og:title" content="YAR Agency"') || !html.includes('name="twitter:title" content="YAR Agency"')) throw new Error('Page and sharing titles must use YAR Agency');
for (const token of ['name="description"', 'rel="canonical"', 'property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:card"', 'application/ld+json']) {
 if (!html.includes(token)) throw new Error(`Missing page metadata: ${token}`);
}
if (!html.includes(`href="${origin}/"`)) throw new Error('Canonical URL differs from package homepage');
for (const file of ['index.html','privacy.html']) {
 if (!(await read(file)).includes('name="robots" content="index,follow')) throw new Error(`Production page is not indexable: ${file}`);
}
const manifest = JSON.parse(await read('public/site.webmanifest'));
for (const icon of manifest.icons) await access(new URL(`public${icon.src}`,root));
for (const file of ['favicon.svg','favicon.ico','icons/favicon-32.png','icons/apple-touch-icon.png','social-preview.jpg','404.html']) await access(new URL(`public/${file}`,root));
if (!(await read('public/robots.txt')).includes(`${origin}/sitemap.xml`)) throw new Error('robots.txt sitemap differs from canonical origin');
const sitemap = await read('public/sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>new URL(match[1]));
for (const url of locations) {
 if (url.origin !== origin) throw new Error('Sitemap origin differs from canonical');
 if (url.pathname !== '/') await access(new URL(url.pathname === '/privacy.html' ? 'privacy.html' : `public${url.pathname}`,root));
}
console.log('Production metadata, indexability, icons, sitemap and package versions verified.');
