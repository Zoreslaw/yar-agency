import sharp from 'sharp';
import {mkdir,writeFile,copyFile,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
if (process.argv[2] === '--team-strip') {
 const original=resolve(root,'source-assets/team-photostrip.jpg');
 for (const [width,suffix] of [[2400,''],[800,'-800']]) {
  await sharp(original).resize({width,withoutEnlargement:true}).webp({quality:88,effort:5}).toFile(resolve(root,`public/media/team-photostrip${suffix}.webp`));
 }
 const {width,height}=await sharp(original).metadata();
 for(let i=0;i<4;i++) {
  const left=Math.round(width*i/4),right=Math.round(width*(i+1)/4);
  await sharp(original).extract({left,top:0,width:right-left,height}).resize({width:800,withoutEnlargement:true}).webp({quality:88,effort:5}).toFile(resolve(root,`public/media/team-frame-${i+1}.webp`));
 }
 process.exit(0);
}
if (process.argv[2] === '--team') {
 for (const [width,suffix] of [[1800,''],[800,'-800']]) {
  await sharp(resolve(root,'source-assets/sofia-vika.jpg')).rotate().resize({width,withoutEnlargement:true}).webp({quality:84,effort:5}).toFile(resolve(root,`public/media/sofia-vika${suffix}.webp`));
 }
 process.exit(0);
}
if (process.argv[2] === '--mouth') {
 await sharp(resolve(root,'source-assets/mouth-no-logo-cutout.png')).resize({width:640,withoutEnlargement:true}).webp({quality:90,effort:6}).toFile(resolve(root,'public/media/mouth-no-logo.webp'));
 process.exit(0);
}
if (!process.argv[2]) throw new Error('Usage: npm run import-assets -- /absolute/path/to/materials');
const from=resolve(process.argv[2]);
await mkdir(resolve(root,'source-assets'),{recursive:true});
const files={live:'IMG_2811.JPG',merch:'IMG_2831.JPG',vocal:'IMG_2835.JPG',stage:'IMG_2787.JPG',phone:'IMG_2798.JPG',crowd:'IMG_2889.JPG',people:'IMG_0802.JPG'};
const manifest={logo:'/media/IMG_0384.PNG'};
let before=0,after=0;
for(const [key,file] of Object.entries(files)){
 const original=resolve(root,'source-assets',file);
 await copyFile(resolve(from,file),original);before+=(await stat(original)).size;
 for(const [width,suffix] of [[1800,''],[800,'-800']]){
  const output=resolve(root,'public/media',key+suffix+'.webp');
  await sharp(original).rotate().resize({width,withoutEnlargement:true}).webp({quality:84,effort:5}).toFile(output);
  after+=(await stat(output)).size;
 }
 manifest[key]='/media/'+key+'.webp';
}
await copyFile(resolve(from,'IMG_0384.PNG'),resolve(root,'public/media/IMG_0384.PNG'));
await writeFile(resolve(root,'src/assets.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({originalMB:before/1048576,responsiveMB:after/1048576}));
