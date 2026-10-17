import {readFile, writeFile} from 'node:fs/promises';
const dist = new URL('../dist/', import.meta.url);
// Production pages are indexable. Branch deployments retain review-only indexing rules.
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
 for (const file of ['index.html','privacy.html']) {
  const url = new URL(file,dist);
  const html = (await readFile(url,'utf8')).replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/i,'$1noindex,nofollow$2');
  await writeFile(url,html);
 }
 await writeFile(new URL('robots.txt',dist),'User-agent: *\nDisallow: /\n');
}
