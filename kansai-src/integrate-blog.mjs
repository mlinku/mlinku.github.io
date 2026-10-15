import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
// Sidebar entry and home card reuse the blog's own Yun markup (site-state icons, post-card) so they read as native parts of the blog.
const luggage='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" style="fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M9 11v5m6-5v5M8 20v1m8-1v1"/></svg>';
const entry=`<a class="site-state-item hty-icon-button" href="/kansai/" title="关西秋日手帖 · 旅行专题" aria-label="关西秋日手帖" data-kansai-link onclick="event.stopImmediatePropagation()"><span class="site-state-item-icon">${luggage}</span></a>`;
const sprite=(id,style='')=>`<span class="post-meta-item-icon"${style}><svg class="icon" aria-hidden="true"><use xlink:href="#${id}"></use></svg></span>`;
const feature=`<div class="hty-layout-grid__cell hty-layout-grid__cell--span-12" data-kansai-feature><article class="post-card"><div class="post-card-header"><header class="post-header"><h2 class="post-title"><a class="post-title-link" href="/kansai/" data-kansai-link onclick="event.stopImmediatePropagation()">关西秋日手帖</a></h2><div class="post-meta"><div class="post-time" style="display:block">${sprite('icon-calendar-line')} <time datetime="2026-11-30">2026-11-30</time><span class="post-meta-divider">-</span>${sprite('icon-calendar-2-line')} <time datetime="2026-12-07">2026-12-07</time></div><span class="post-count">8 天 7 晚<span class="post-meta-divider">-</span>京都 · 宇治 · 大阪 · 奈良 · 神户</span></div></header></div><div class="post-card-content text-center"><div class="post-card-excerpt markdown-body"><p style="text-align:center">八天秋日行程手帖：每天按时间走的安排、路线地图、餐饮备选与动漫巡礼对照。<br><a href="/kansai/" data-kansai-link onclick="event.stopImmediatePropagation()">打开手帖 →</a></p></div></div><div class="hty-card__actions post-card__actions"><div class="post-card-category"> ${sprite('icon-folder-line',' style="margin-right:3px;"')}<a class="category-item" href="/kansai/" data-kansai-link onclick="event.stopImmediatePropagation()" style="--text-color:var(--hty-text-color)">旅行</a></div><div class="post-card-tag"><a class="tag-item" href="/kansai/" data-kansai-link onclick="event.stopImmediatePropagation()" style="--text-color:#ef9b5f">${sprite('icon-price-tag-3-line')}<span class="tag-name">关西</span></a> <a class="tag-item" href="/kansai/#day/2026-12-01/pilgrimage" data-kansai-link onclick="event.stopImmediatePropagation()" style="--text-color:#4fc08d">${sprite('icon-price-tag-3-line')}<span class="tag-name">巡礼</span></a></div></div></article></div>`;
// Earlier builds inserted other versions of the same two blocks; replace them rather than add a second copy.
const oldEntry=/<a class="site-state-item hty-icon-button" href="\/kansai\/"[^>]*data-kansai-link[^>]*>[\s\S]*?<\/a>/;
const oldFeature=/<div class="hty-layout-grid__cell hty-layout-grid__cell--span-12" data-kansai-feature>[\s\S]*?<\/article><\/div>/;
export function integrateBlog(){
 let changed=0;
 function visit(dir){
  for(const file of fs.readdirSync(dir,{withFileTypes:true})){
   if(file.isDirectory()){if(!['.git','.scratch','kansai','kansai-src','node_modules','docs'].includes(file.name))visit(path.join(dir,file.name));continue;}
   if(!file.name.endsWith('.html'))continue;
   const target=path.join(dir,file.name),before=fs.readFileSync(target,'utf8');let after=before;
   if(oldEntry.test(after))after=after.replace(oldEntry,entry);
   else if(after.includes('<nav class="site-state">'))after=after.replace('<nav class="site-state">','<nav class="site-state">'+entry);
   if(target===path.join(root,'index.html')){
    if(oldFeature.test(after))after=after.replace(oldFeature,feature);
    else after=after.replace('<section class="hty-layout-grid" id="recent-posts">','<section class="hty-layout-grid" id="recent-posts">'+feature);
   }
   if(after!==before){fs.writeFileSync(target,after);changed++;}
  }
 }
 visit(root);return changed;
}
