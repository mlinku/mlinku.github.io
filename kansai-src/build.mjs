import {integrateBlog} from './integrate-blog.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const plan=JSON.parse(fs.readFileSync(path.join(dir,'data/关西行程_可视化数据.json'),'utf8').replace(/^\uFEFF/,''));
const guide=fs.readFileSync(path.join(dir,'data/关西逐日执行攻略_2026-11-30至12-07.md'),'utf8').replace(/<!-- pilgrimage-(?:start|end) -->/g,'').replace(/完整图文见\[动漫巡礼对照手册\]\(动漫巡礼对照手册_2026-09-29.md\)。/g,'完整双图已收入当天“巡礼”页。');
const parts=guide.split(/(?=\*\*(?:11\/30|12\/[1-7])｜)/);
const guides=Object.fromEntries(plan.days.map((d,i)=>[d.date,parts[i+1]?.split('**大阪酒店附近的简餐备选。**')[0]||'']));
let photos={};
const photoFile=path.join(dir,'photos.json');
if(fs.existsSync(photoFile)){
 photos=JSON.parse(fs.readFileSync(photoFile,'utf8'));
 // Never use the rejected generic Uji river photo as Asagiri Bridge.
 if(photos.asagiri?.file==='Uji bridge5.jpg')delete photos.asagiri;
 // A wider canal view must not be labelled as a specific Glico sign photo.
 if(photos.glico?.file==='Dotonbori Canal 1.jpg'){photos.dotonbori=photos.glico;delete photos.glico;}
 for(const photo of Object.values(photos)){
  if(photo.local && fs.existsSync(path.join(dir,photo.local))) photo.src='data:image/jpeg;base64,'+fs.readFileSync(path.join(dir,photo.local)).toString('base64');
 }
}
const json=x=>JSON.stringify(x).replace(/</g,'\\u003c');
const blogBackground='data:image/jpeg;base64,'+fs.readFileSync(path.join(dir,'assets/blog-background.jpg')).toString('base64');
const mapImage='data:image/jpeg;base64,'+fs.readFileSync(path.join(dir,'assets/kansai-google-overview.jpg')).toString('base64');
const pilgrimage=JSON.parse(fs.readFileSync(path.join(dir,'pilgrimage.json'),'utf8'));
for(const p of pilgrimage.points)for(const kind of ['real','anime']){const img=p[kind];if(img?.local){const file=path.join(dir,img.local);if(!fs.existsSync(file))throw Error('Missing pilgrimage asset: '+file);const mime=path.extname(file).toLowerCase()==='.png'?'image/png':'image/jpeg';img.src='data:'+mime+';base64,'+fs.readFileSync(file).toString('base64');}}
const css=fs.readFileSync(path.join(dir,'style.css'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'pilgrimage.css'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'journey.css'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'blog-theme.css'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'layout.css'),'utf8');
let app=fs.readFileSync(path.join(dir,'app.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'day-flow.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'pilgrimage.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'daily.js'),'utf8')+'\n'+fs.readFileSync(path.join(dir,'interface.js'),'utf8');
app=app.replace("const BLOG_HOME='https://mlinku.github.io/';","const BLOG_HOME='../';");
const details=fs.readFileSync(path.join(dir,'details.js'),'utf8');
const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#1b1f2e"><meta name="description" content="2026 关西双人旅行：8 天行程、每日路线、餐饮备选与离线手册。"><title>关西秋日手帖 · 2026</title><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='10' fill='%23a3422d'/%3E%3Ctext x='20' y='28' text-anchor='middle' fill='%23fff8ec' font-size='26'%3E旅%3C/text%3E%3C/svg%3E"><style>${css}</style></head><body><a class="skip" href="#main">跳到主要内容</a><div id="app"></div><div id="toast" role="status" aria-live="polite"></div><dialog id="place-dialog" aria-labelledby="place-title"></dialog><noscript><p>请用启用 JavaScript 的浏览器打开本文件。无需联网即可查看行程；地图链接需要网络。</p></noscript><script>const BLOG_BACKGROUND=${json(blogBackground)};const REGION_MAP_IMAGE=${json(mapImage)};const PLAN=${json(plan)};const GUIDES=${json(guides)};const PHOTOS=${json(photos)};const PILGRIMAGE=${json(pilgrimage)};${details}\n${app}</script></body></html>`;
fs.mkdirSync(path.join(dir,'../kansai'),{recursive:true});
fs.writeFileSync(path.join(dir,'../kansai/index.html'),html);
integrateBlog();
console.log(JSON.stringify({file:path.join(dir,'../kansai/index.html'),days:plan.days.length,events:plan.days.reduce((n,d)=>n+d.timeline.length,0),places:plan.places.length,photos:Object.keys(photos).length,bytes:Buffer.byteLength(html)}));
