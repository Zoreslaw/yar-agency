import {readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {build} from 'vite';
const root=fileURLToPath(new URL('../',import.meta.url));
// The regular site has two entry pages and a lazy questionnaire. Create one
// in-memory page bundle for the standalone preview, including shared translations.
const result=await build({configFile:false,root,publicDir:false,logLevel:'error',build:{
 write:false,emptyOutDir:false,cssCodeSplit:false,
 rollupOptions:{input:resolve(root,'index.html'),output:{inlineDynamicImports:true,format:'iife'}}
}});
const output=result.output;
const entry=output.find(file=>file.type==='chunk'&&file.isEntry);
const css=output.filter(file=>file.type==='asset'&&file.fileName.endsWith('.css'));
let html=await readFile(resolve(root,'dist/index.html'),'utf8');
let code=entry.code.replaceAll('/media/','./media/').replaceAll('</script','<\\/script');
let styles=css.map(file=>file.source).join('\n').replaceAll('/assets/','./assets/').replaceAll('/media/','./media/').replaceAll('/fonts/','./fonts/');
html=html.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/g,'').replace(/<link[^>]+(?:rel="(?:stylesheet|modulepreload)")[^>]*>/g,'');
html=html.replace('</head>',()=>'<style>'+styles+'</style></head>').replace('</body>',()=>'<script>'+code+'</script></body>');
html=html.replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/i,'$1noindex,nofollow$2');
html=html.replaceAll('href="/favicon','href="./favicon').replaceAll('href="/icons/','href="./icons/').replaceAll('href="/site.webmanifest"','href="./site.webmanifest"');
await writeFile(resolve(root,'dist/preview.html'),html);
console.log('Created dist/preview.html');
