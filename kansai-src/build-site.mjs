import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';

export const STYLE_FILES=['style.css','pilgrimage.css','journey.css','blog-theme.css','layout.css'];
export const SCRIPT_FILES=['details.js','app.js','day-flow.js','pilgrimage.js','execution.js','daily.js','interface.js'];
const json=value=>JSON.stringify(value).replace(/</g,'\\u003c');

// Both deliveries use one renderer. Offline embeds media; the blog publishes cached assets.
export function buildSite({sourceDir,dataDir,outputDir,offline=false}){
 const read=name=>fs.readFileSync(path.join(sourceDir,name),'utf8').replace(/^\uFEFF/,'');
 const plan=JSON.parse(fs.readFileSync(path.join(dataDir,'关西行程_可视化数据.json'),'utf8').replace(/^\uFEFF/,''));
 const guide=fs.readFileSync(path.join(dataDir,'关西逐日执行攻略_2026-11-30至12-07.md'),'utf8').replace(/<!-- pilgrimage-(?:start|end) -->/g,'').replace(/完整图文见\[动漫巡礼对照手册\]\(动漫巡礼对照手册_2026-09-29.md\)。/g,'完整双图已收入当天“巡礼”页。');
 const parts=guide.split(/(?=\*\*(?:11\/30|12\/[1-7])｜)/);
 const guides=Object.fromEntries(plan.days.map((d,i)=>[d.date,parts[i+1]?.split('**大阪酒店附近的简餐备选。**')[0]||'']));
 const photos=JSON.parse(read('photos.json')),pilgrimage=JSON.parse(read('pilgrimage.json'));
 if(photos.asagiri?.file==='Uji bridge5.jpg')delete photos.asagiri;
 if(photos.glico?.file==='Dotonbori Canal 1.jpg'){photos.dotonbori=photos.glico;delete photos.glico;}
 fs.mkdirSync(outputDir,{recursive:true});
 const assetDir=path.join(outputDir,'assets');
 if(!offline)fs.mkdirSync(assetDir,{recursive:true});
 const published=new Map(),jobs=[];
 function media(local,preview=false){
  const source=path.resolve(sourceDir,local);
  if(!source.startsWith(path.resolve(sourceDir)+path.sep))throw Error('Media must be inside source: '+local);
  if(!fs.existsSync(source))throw Error('Missing media: '+local);
  if(published.has(source))return published.get(source);
  const bytes=fs.readFileSync(source),ext=path.extname(source).toLowerCase();
  const mime=ext==='.png'?'image/png':ext==='.webp'?'image/webp':'image/jpeg';
  if(offline){const result={src:`data:${mime};base64,${bytes.toString('base64')}`};published.set(source,result);return result;}
  const hash=crypto.createHash('sha256').update(bytes).digest('hex').slice(0,16);
  const name=hash+ext,full=path.join(assetDir,name);
  if(!fs.existsSync(full))fs.copyFileSync(source,full);
  const result={src:'assets/'+name};
  if(preview){
   const previewName=hash+'-640q82.jpg';
   result.thumbnail='assets/'+previewName;
   jobs.push({input:source,output:path.join(assetDir,previewName),result});
  }
  published.set(source,result);return result;
 }
 for(const img of Object.values(photos)){if(!img.local)throw Error('Missing local photo');Object.assign(img,media(img.local,true));}
 const illustratedPoints=[...pilgrimage.points,...(pilgrimage.rally?.spots||[])];
 for(const p of illustratedPoints)for(const kind of ['real','anime','comparison']){const img=p[kind];if(img?.local)Object.assign(img,media(img.local,true));}
 const background=media('assets/blog-background.jpg').src,mapImage=media('assets/kansai-google-overview.jpg').src;
 if(jobs.length){
  const temp=path.join(os.tmpdir(),'kansai-media-'+crypto.randomUUID()+'.json');
  try{
   fs.writeFileSync(temp,JSON.stringify(jobs.map(({input,output})=>({input,output}))));
   const bundled=path.join(os.homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/python',process.platform==='win32'?'python.exe':'bin/python3');
   const python=process.env.KANSAI_PYTHON||(fs.existsSync(bundled)?bundled:'python');
   const result=spawnSync(python,[path.join(sourceDir,'prepare-media.py'),temp],{encoding:'utf8'});
   if(result.error||result.status!==0)throw Error('Preview generation failed: '+(result.error?.message||result.stderr));
   const sizes=JSON.parse(fs.readFileSync(temp,'utf8'));
   jobs.forEach((job,i)=>{job.result.thumbnailWidth=sizes[i].width;job.result.thumbnailHeight=sizes[i].height;});
   for(const img of Object.values(photos))Object.assign(img,media(img.local,true));
   for(const p of illustratedPoints)for(const kind of ['real','anime','comparison'])if(p[kind]?.local)Object.assign(p[kind],media(p[kind].local,true));
  }finally{if(fs.existsSync(temp))fs.unlinkSync(temp);}
 }
 const css=STYLE_FILES.map(read).join('\n');
 let app=SCRIPT_FILES.map(read).join('\n');
 if(!offline)app=app.replace("const BLOG_HOME='https://mlinku.github.io/';","const BLOG_HOME='../';");
 const data=`const DELIVERY_MODE=${json(offline?'offline':'web')};const BLOG_BACKGROUND=${json(background)};const REGION_MAP_IMAGE=${json(mapImage)};const PLAN=${json(plan)};const GUIDES=${json(guides)};const PHOTOS=${json(photos)};const PILGRIMAGE=${json(pilgrimage)};`;
 const script=data+'\n'+app;
 function resource(content,extension){
  const name=crypto.createHash('sha256').update(content).digest('hex').slice(0,16)+'.'+extension;
  fs.writeFileSync(path.join(assetDir,name),content);return 'assets/'+name;
 }
 const styleTag=offline?`<style>${css}</style>`:`<link rel="stylesheet" href="${resource(css,'css')}">`;
 const scriptTag=offline?`<script>${script}</script>`:`<script defer src="${resource(script,'js')}"></script>`;
 const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#293246"><meta name="description" content="2026关西旅行：8天行程、路线定位、餐饮与动漫巡礼对照。"><title>关西秋日手帖 · 2026</title><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%23a3422d'/%3E%3Ctext x='20' y='28' text-anchor='middle' fill='%23fff8ec' font-size='26'%3E旅%3C/text%3E%3C/svg%3E">${styleTag}</head><body><a class="skip" href="#main">跳到主要内容</a><div id="app"></div><div id="toast" role="status" aria-live="polite"></div><noscript><p>请启用JavaScript查看行程。</p></noscript>${scriptTag}</body></html>`;
 fs.writeFileSync(path.join(outputDir,'index.html'),html);
 return {mode:offline?'offline':'web',file:path.join(outputDir,'index.html'),days:plan.days.length,events:plan.days.reduce((n,d)=>n+d.timeline.length,0),photos:Object.keys(photos).length,htmlBytes:Buffer.byteLength(html),scriptBytes:Buffer.byteLength(script),cssBytes:Buffer.byteLength(css),mediaFiles:published.size};
}
