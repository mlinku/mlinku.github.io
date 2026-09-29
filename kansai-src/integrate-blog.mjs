import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const entry='<a class="site-state-item hty-icon-button" href="/kansai/" title="关西旅行" data-kansai-link onclick="event.stopImmediatePropagation()"><span style="font-size:13px">旅行</span></a>';
const feature='<div class="hty-layout-grid__cell hty-layout-grid__cell--span-12" data-kansai-feature><article class="post-card"><header class="post-header"><h2 class="post-title"><a class="post-title-link" href="/kansai/" data-kansai-link onclick="event.stopImmediatePropagation()">关西秋日手帖</a></h2><div class="post-meta">2026/11/30 — 12/7 · 8天行程 · 巡礼与赏枫</div></header><div class="post-card-content text-center"><p>每日安排、路线定位与实景 × 作品对照</p></div></article></div>';
export function integrateBlog(){
 let changed=0;
 function visit(dir){
  for(const file of fs.readdirSync(dir,{withFileTypes:true})){
   if(file.isDirectory()){if(!['.git','kansai','kansai-src','node_modules'].includes(file.name))visit(path.join(dir,file.name));continue;}
   if(!file.name.endsWith('.html'))continue;
   const target=path.join(dir,file.name),before=fs.readFileSync(target,'utf8');let after=before;
   if(!after.includes('data-kansai-link'))after=after.replace('<nav class="site-state">','<nav class="site-state">'+entry);
   if(target===path.join(root,'index.html')&&!after.includes('data-kansai-feature'))after=after.replace('<section class="hty-layout-grid" id="recent-posts">','<section class="hty-layout-grid" id="recent-posts">'+feature);
   if(after!==before){fs.writeFileSync(target,after);changed++;}
  }
 }
 visit(root);return changed;
}
