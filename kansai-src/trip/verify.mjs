// Trip guide checks: node kansai-src/trip/verify.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {SCRIPT_FILES} from '../build-site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,'');
const PLAN=JSON.parse(read('data/关西行程_可视化数据.json')),locked=JSON.stringify(PLAN);
const store={},localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=String(v);},removeItem:k=>{delete store[k];}};
const location={search:'',hash:''};
const scope=vm.createContext({PLAN,PILGRIMAGE:JSON.parse(read('pilgrimage.json')),PHOTOS:JSON.parse(read('photos.json')),GUIDES:{},localStorage,location,assert,
 document:{querySelector(){return null;},querySelectorAll(){return [];},addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},console});
vm.runInContext(SCRIPT_FILES.map(read).join('\n'),scope,{filename:'trip-bundle.js'});
const run=code=>vm.runInContext(code,scope);
const at=now=>{location.search=now?'?now='+now:'';};

const checked=run(`
 const text=html=>html.replace(/<[^>]+>/g,' ');
 assert.ok(!${JSON.stringify(SCRIPT_FILES)}.some(f=>/daily|interface|pilgrimage\\.js/.test(f)),'不加载已删除的旧界面');

 // Every activity, under every itinerary choice, resolves and renders; transport keeps its test contract.
 const configurations={'2026-12-01':[{}],'2026-12-02':[{kodaijiPlan:'night'},{kodaijiPlan:'night',yasakaBrief:true},{kodaijiPlan:'skip'}],
  '2026-12-04':[{},{usjExtra:true,kinopio:true}],'2026-12-05':[{},{shop1:'potato',shop2:'surugaya_main'},{shop1:'animate',shop2:'none'}]};
 let sheets=0;
 for(const d of PLAN.days)for(const selected of configurations[d.date]||[{}]){
  state.choices[d.date]=selected;
  for(const ev of effectiveEvents(d)){
   const html=sheetHTML(d.date,ev.id);sheets++;
   assert.ok(html.includes(e(ev.title)),'详情含标题 '+ev.id);
   assert.ok(html.includes('data-action="check"'),'详情可标记完成 '+ev.id);
   if(transportNotes(d,ev).length)assert.ok(html.includes('aria-label="交通说明"'),'交通说明 '+ev.id);
   assert.ok(!html.includes('undefined')&&!html.includes('null<'),'没有空值 '+ev.id);
  }
  for(const key of ['notes','route',...(d.overnight?['stay']:[])])assert.ok(sheetHTML(d.date,key).includes('sheet-head'),key+' '+d.date);
  ui.day=PLAN.days.indexOf(d);
  assert.ok(!/move-group|移动 · \\d+ 步/.test(dayScreen()),'交通步骤各占一行 '+d.date);
 }
 state.choices={};

 // Every screen renders before, during (each day, morning and evening) and after the trip.
 const screens=[];
 for(const now of ['2026-11-20T09:00',...PLAN.days.flatMap(d=>[d.date+'T07:00',d.date+'T13:00',d.date+'T23:30']),'2026-12-09T10:00']){
  location.search='?now='+now;
  for(const tab of ['now','day','shots','prep']){ui.tab=tab;const html=SCREENS[tab]();assert.ok(html.length>200,tab+' '+now);assert.ok(!html.includes('undefined'),'没有空值 '+tab+' '+now);}
  screens.push(now);
 }

 // Hard times exist in the plan's own text and point at real activities.
 for(const d of PLAN.days){
  const corpus=JSON.stringify(DETAILS[d.date])+JSON.stringify(d)+effectiveEvents(d).map(ev=>executionNotice(d,ev)+ev.place_ids.map(id=>PLACE_DETAILS[id]||'').join('')).join('');
  for(const t of hardStops(d))assert.ok(corpus.includes(t.time),'关键时间有出处 '+d.date+' '+t.time);
  assert.equal(hardStops(d).length,(HARD_STOPS[d.date]||[]).length,'关键时间都对应活动 '+d.date);
 }
 const kyoto=PLAN.days.find(d=>d.date==='2026-12-02');
 state.choices[kyoto.date]={kodaijiPlan:'skip'};
 assert.ok(!hardStops(kyoto).some(t=>t.eventId==='kodaiji_night'),'不去高台寺就不提示高台寺时间');
 state.choices={};

 // 现在: the latest started activity, then the next unfinished one once it is ticked.
 const day3=PLAN.days.find(d=>d.date==='2026-12-03');
 let s=nowState(day3,10*60+30);
 assert.equal(s.focus.id,'kyoto_tower_visit');assert.ok(s.started);
 setCheck(day3.date,'kyoto_tower_visit',true);s=nowState(day3,10*60+30);
 assert.notEqual(s.focus.id,'kyoto_tower_visit');assert.ok(!s.started,'完成后转到下一项');
 assert.ok(s.upcoming.every(ev=>activityState(day3.date,ev.id)!=='done'));
 setCheck(day3.date,'kyoto_tower_visit',false);
 assert.equal(nowState(day3,6*60).focus.id,effectiveEvents(day3)[0].id,'出门前看第一项');

 // Nothing in a shortened note disappears: each sentence is on the sheet or in 情况有变时.
 for(const d of PLAN.days)for(const ev of effectiveEvents(d)){
  if(!ev.condition||!Object.hasOwn(EVENT_BRIEF,ev.id))continue;
  const said=text(sheetHTML(d.date,ev.id))+dayNotes(d).join('');
  for(const sentence of ev.condition.split(/(?<=[。；])/).filter(x=>x.trim()))assert.ok(bigrams(cleanText(sentence)).size<4||alreadySaid(cleanText(sentence),said),'原文仍可见 '+ev.id+'：'+sentence.slice(0,14));
 }
 const notes=PLAN.days.flatMap(d=>dayNotes(d)).join('\\n');
 for(const [from,to] of FALLBACK_SHORT){
  assert.ok(notes.includes(from),'精简映射已失效：'+from.slice(0,16));
  for(const word of ['待确认','未购买','尚未','不下河','值机截止','闭门','检修','不在暗处'])if(from.includes(word))assert.ok(to.includes(word),'精简保留「'+word+'」：'+from.slice(0,16));
 }

 // Every copy rule still matches the plan's own text, so none goes dead silently when the plan changes.
 const sources=JSON.stringify([DETAILS,PLAN,PLACE_DETAILS,SHOT_COPY,PILGRIMAGE])+PLAN.days.flatMap(d=>effectiveEvents(d).map(ev=>(ev.condition||'')+executionNotice(d,ev))).join('');
 for(const [from] of TRANSPORT_SHORT)assert.ok(PLAN.days.some(d=>DETAILS[d.date].transport.includes(from)),'交通精简已失效：'+from.slice(0,16));
 for(const sentence of DROP_SENTENCES)assert.ok(sources.includes(sentence),'删除句已不在原文：'+sentence);
 const pieces=sources.split(/(?<=[。；])|"/).map(x=>x.trim());
 for(const rule of DROP_COPY)assert.ok(pieces.some(x=>rule.test(x)||rule.test(compactFallback(x))),'删除规则已无匹配：'+rule);
 for(const d of PLAN.days)for(const ev of effectiveEvents(d)){const m=eventModel(d,ev);
  for(const t of [...m.transport,...m.placeNotes,m.fullNote,m.line,...m.details.flatMap(x=>x.items.map(it=>it.text))])assert.ok(!/按登机牌和现场指引|以航司最新通知|请询问店员|不锁定车次/.test(t),'无效提醒已删除 '+ev.id);
  assert.ok(!DROP_DETAILS.has(ev.id)||!m.details.some(x=>x.title!=='参拜详情'),'机场手续说明不再重复 '+ev.id);
 }
 assert.ok(sheetHTML('2026-11-30','flight_out').includes('10:25')&&sheetHTML('2026-11-30','flight_out').includes('T1M'),'去程保留截止时间与登机航站楼');
 assert.ok(sheetHTML('2026-12-07','airport_checkin').includes('09:10'),'回程保留值机截止');
 assert.ok(sheetHTML('2026-12-07','airport_train').replace(/<[^>]+>/g,'').includes('不要误进JR闸机'),'保留易错提醒');

 // Old addresses still land in the right place.
 location.hash='#day/2026-12-02/timeline/kodaiji_night';assert.equal(parseHash(),'kodaiji_night');assert.equal(ui.tab,'day');assert.equal(ui.day,2);
 location.hash='#day/2026-12-01/pilgrimage/eupho_uji_bridge';assert.equal(parseHash(),'');assert.equal(ui.tab,'shots');assert.equal(ui.target,'shot-eupho_uji_bridge');
 location.hash='#day/2026-12-03/timeline/route';assert.equal(parseHash(),'route');
 location.hash='#prep/todos';parseHash();assert.equal(ui.tab,'prep');
 location.hash='';parseHash();assert.equal(ui.tab,'now');

 // Field copy drops re-check clauses but keeps the facts around them.
 assert.equal(cleanText('营业时间于10/2核实，临行再查是否调整。'),'','核实记录不进现场文案');
 assert.equal(cleanText('当前11:05关闭登机口（香港时间）；以航司最新通知及登机牌为准。'),'当前11:05关闭登机口（香港时间）；'.replace(/；$/,''));
 assert.equal(cleanText('参考10:00—21:00；临行复核营业。'),'10:00—21:00。');
 ({sheets,screens:screens.length,days:PLAN.days.length});
`);
assert.equal(JSON.stringify(PLAN),locked,'出行版不改变原始行程');
console.log(JSON.stringify({ok:true,...checked}));
