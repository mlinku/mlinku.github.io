// Heading font for the trip guide: every character the serif headings can show, cut from Noto Serif SC (SIL OFL 1.1).
//   node kansai-src/trip/fonts.mjs   → assets/fonts/trip-serif-chars.txt, then trip-serif-700.woff / -900.woff via subset-font.py
// Run again whenever titles, place names or headings gain new characters; trip/verify.mjs fails until then.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {SCRIPT_FILES} from '../build-site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,'');
export function headingText(){
 const PLAN=JSON.parse(read('data/关西行程_可视化数据.json'));
 const scope=vm.createContext({PLAN,PILGRIMAGE:JSON.parse(read('pilgrimage.json')),PHOTOS:JSON.parse(read('photos.json')),GUIDES:{},
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}},location:{search:'',hash:''},document:{querySelector(){return null;},querySelectorAll(){return [];},addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},console});
 vm.runInContext(SCRIPT_FILES.map(read).join('\n'),scope);
 return vm.runInContext(`(()=>{const out=[];
  const variants={'2026-12-02':[{},{kodaijiPlan:'skip'},{yasakaBrief:true}],'2026-12-04':[{},{kinopio:true}],'2026-12-05':[{},{shop1:'potato',shop2:'surugaya_main'},{shop2:'none'}]};
  for(const d of PLAN.days)for(const c of variants[d.date]||[{}]){state.choices[d.date]=c;const info=dayPresentation(d);out.push(info.short,info.eyebrow,...DETAILS[d.date].phases.map(p=>p[0]),...effectiveEvents(d).map(ev=>ev.title));}
  state.choices={};
  out.push(...PLAN.places.map(p=>p.name),...pilgrimagePoints.map(p=>p.title+p.work),...(PILGRIMAGE.rally?.spots||[]).map(p=>p.title));
  return out.join('');})()`,scope)+read('trip/ui.js').match(/[\u3000-\u9FFF\uFF00-\uFFEF]/g).join('');
}
export const SERIF_EXTRA=' 0123456789/:·→—–-+×／（）《》「」、，。：・済日第天';
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const chars=[...new Set([...headingText()+SERIF_EXTRA].filter(ch=>ch.trim()||ch===' '))].sort().join('');
 const file=path.join(root,'assets/fonts/trip-serif-chars.txt');
 fs.writeFileSync(file,chars);
 console.log(chars.length,'characters →',path.relative(root,file));
 const result=spawnSync(process.env.KANSAI_PYTHON||'python',[path.join(root,'subset-font.py'),'--chars',file,'--prefix','trip-serif'],{encoding:'utf8'});
 process.stdout.write(result.stdout);if(result.status!==0){process.stderr.write(result.stderr);process.exit(1);}
}
