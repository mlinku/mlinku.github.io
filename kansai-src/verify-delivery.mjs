import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const source=path.dirname(fileURLToPath(import.meta.url)),output=path.resolve(source,'../kansai');
const html=fs.readFileSync(path.join(output,'index.html'),'utf8');
const js=html.match(/<script defer src="([^"]+)"/)[1],css=html.match(/rel="stylesheet" href="([^"]+)"/)[1];
const script=fs.readFileSync(path.join(output,js),'utf8');
assert.ok(fs.existsSync(path.join(output,css)));
assert.ok(!html.includes('<style>')&&!script.includes('data:image/jpeg;base64,'),'博客图片不内嵌');
const scope=vm.createContext({});
vm.runInContext(script.split('const DETAILS =')[0],scope);
const assets=vm.runInContext('[BLOG_BACKGROUND,REGION_MAP_IMAGE,...Object.values(PHOTOS).flatMap(p=>[p.src,p.thumbnail]),...PILGRIMAGE.points.flatMap(p=>[p.real,p.anime,p.comparison]).filter(Boolean).flatMap(p=>[p.src,p.thumbnail])]',scope);
for(const file of assets){assert.ok(file?.startsWith('assets/'),'本地资源 '+file);assert.ok(fs.existsSync(path.join(output,file)),'资源存在 '+file);}
assert.ok(vm.runInContext('Object.values(PHOTOS).every(p=>p.thumbnailWidth>0)',scope));
assert.ok(Buffer.byteLength(script)<600_000,'博客代码不混入大图');
const offlinePath=process.argv[2];
if(offlinePath){
 const offline=fs.readFileSync(offlinePath,'utf8');
 assert.ok(offline.includes('const DELIVERY_MODE="offline"'));
 assert.ok(!/<script[^>]+src=|<link[^>]+rel="stylesheet"/.test(offline));
 const inline=offline.match(/<script>([\s\S]*)<\/script>/)[1],local=vm.createContext({});
 vm.runInContext(inline.split('const DETAILS =')[0],local);
 assert.ok(vm.runInContext('Object.values(PHOTOS).every(p=>p.src.startsWith("data:image/"))&&PILGRIMAGE.points.every(p=>(p.comparison?p.comparison.src.startsWith("data:image/"):p.real.src.startsWith("data:image/")&&p.anime.src.startsWith("data:image/")))',local),'离线照片完整嵌入');
}
console.log(JSON.stringify({webHtmlBytes:Buffer.byteLength(html),webScriptBytes:Buffer.byteLength(script),webCssBytes:fs.statSync(path.join(output,css)).size,verifiedAssetReferences:assets.length,offlineVerified:!!offlinePath}));
