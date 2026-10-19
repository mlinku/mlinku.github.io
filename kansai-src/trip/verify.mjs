// Trip guide checks: node kansai-src/trip/verify.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {SCRIPT_FILES} from '../build-site.mjs';
import {headingText,SERIF_EXTRA} from './fonts.mjs';
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
  '2026-12-04':[{},{shop1:'potato',shop2:'surugaya_main'},{shop1:'animate',shop2:'none'},{shop1:'surugaya_main',shop2:'animate'},{shop1:'potato',shop2:'none'}]};
 let sheets=0;
 for(const d of PLAN.days)for(const selected of configurations[d.date]||[{}]){
  state.choices[d.date]=selected;
  for(const ev of effectiveEvents(d)){
   const html=sheetHTML(d.date,ev.id);sheets++;
   assert.ok(html.includes(e(ev.title)),'详情含标题 '+ev.id);
   assert.equal(html.includes('data-action="check"'),isMajorEvent(d,ev),'只有主活动可盖章 '+ev.id);
   if(transportNotes(d,ev).length)assert.ok(html.includes('aria-label="交通说明"'),'交通说明 '+ev.id);
   assert.ok(!html.includes('undefined')&&!html.includes('null<'),'没有空值 '+ev.id);
  }
  for(const key of ['notes',...(d.overnight?['stay']:[])])assert.ok(sheetHTML(d.date,key).includes('sheet-head'),key+' '+d.date);
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
 for(const [from] of TEXT_SHORT)assert.ok(JSON.stringify([DETAILS,PLAN,PLACE_DETAILS,PILGRIMAGE]).includes(from),'文字精简已失效：'+from.slice(0,16));
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
 location.hash='#day/2026-12-03/timeline/route';assert.equal(parseHash(),'');assert.equal(PLAN.days[ui.day].date,'2026-12-03','旧路线地址打开当天行程');
 assert.ok(!PLAN.days.some((d,i)=>{ui.day=i;return /路线 · \d+ 站|data-key="route"/.test(dayScreen());}),'行程页不再有路线入口');
 location.hash='#prep/todos';parseHash();assert.equal(ui.tab,'prep');
 location.hash='';parseHash();assert.equal(ui.tab,'now');

 // Field copy drops re-check clauses but keeps the facts around them.
 assert.equal(cleanText('营业时间于10/2核实，临行再查是否调整。'),'','核实记录不进现场文案');
 assert.equal(cleanText('当前11:05关闭登机口（香港时间）；以航司最新通知及登机牌为准。'),'当前11:05关闭登机口（香港时间）；'.replace(/；$/,''));
 assert.equal(cleanText('参考10:00—21:00；临行复核营业。'),'10:00—21:00。');
 // Final plan (2026-10-19): no USJ, 大阪城, ferry or 白须神社 anywhere a traveller can reach.
 const everything=PLAN.days.map(d=>{ui.day=PLAN.days.indexOf(d);return text(dayScreen())+effectiveEvents(d).map(ev=>text(sheetHTML(d.date,ev.id))).join('')+text(sheetHTML(d.date,'notes'));}).join('')+text(prepScreen());
 for(const word of ['USJ','Studio Pass','任天堂','大阪城','天守阁','森之宫','鹤桥','SPAWORLD','白须','渡轮班次','友岛航线'])assert.ok(!everything.includes(word),'最终版不出现：'+word);
 const wakayama=PLAN.days.find(d=>d.date==='2026-12-05');
 assert.ok(effectiveEvents(wakayama).some(ev=>ev.id==='wakayama_tower_visit')&&effectiveRoute(wakayama).some(n=>n.id==='wakayama_castle'),'12/5默认进天守');
 assert.equal(returnTarget(wakayama),'19:00—19:30','12/5约19:00—19:30返店');
 assert.equal(String(hardStops(wakayama).map(t=>t.time)),String(['14:40','16:45','17:00','17:30']),'庭园16:45早于天守17:00末入');
 assert.ok(text(prepScreen()).includes('和歌山城天守 ¥820'),'门票预算含和歌山城两人¥820');
 assert.ok(openPurchases().some(p=>p.item.includes('和牛')&&p.label==='尚未订位'),'和牛只是待订位');
 const kobe=PLAN.days.find(d=>d.date==='2026-12-06');
 assert.equal(String(effectiveEvents(kobe).find(ev=>ev.id==='motomachi_cd_shopping').place_ids),String(['kobe_banana_records','kobe_rhythmbox']),'元町两家CD店优先');
 assert.ok(sheetHTML(kobe.date,'sannomiya_dinner').includes('尚未订位'),'17:00和牛待订位');
 // 12/4 shop choices: every pair walks in order on the route and never more than two stores.
 const nara=PLAN.days.find(d=>d.date==='2026-12-04');
 for(const [shop1,shop2] of [['animate','surugaya'],['potato','surugaya_main'],['surugaya','none'],['surugaya_main','animate']]){
  state.choices[nara.date]={shop1,shop2};const shops=[shop1,shop2].filter(x=>x!=='none');
  assert.equal(String(effectiveEvents(nara).find(ev=>ev.id==='anime_shopping').place_ids),String(shops),'选店 '+shops);
  assert.equal(String(effectiveRoute(nara).filter(n=>shops.includes(n.id)).map(n=>n.id)),String(shops),'路线含所选店 '+shops);
 }
 state.choices={};
 // 通天阁 is reference material only; 戎桥 moved to 12/3.
 assert.ok(!dayShots(PLAN.days[3]).main.some(p=>p.id==='conan-tsutenkaku')&&dayShots(PLAN.days[3]).reference.some(p=>p.id==='conan-tsutenkaku'),'通天阁只作参考');
 assert.equal(shotProgress('2026-12-03').total,1,'参考点不计进度');
 assert.ok(dayShots(PLAN.days[3]).main.some(p=>p.id==='conan-ebisubashi'),'戎桥在12/3');
 assert.equal(dayShots(wakayama).main.length,4,'加太4组对照');
 for(const p of dayShots(wakayama).main)assert.ok(p.real?.local&&p.anime?.local&&p.real.license&&p.anime.credit&&p.sources.length,'加太对照图与来源 '+p.id);

 // Old links land on the same content on its new day, or on the day with a note; never on a new 加太 activity.
 location.hash='#day/2026-12-05/timeline/nara_visit';assert.equal(parseHash(),'nara_visit');assert.equal(PLAN.days[ui.day].date,'2026-12-04');assert.ok(ui.moved.includes('12/4'));
 location.hash='#day/2026-12-05/timeline/glico_photo';assert.equal(parseHash(),'glico_photo');assert.equal(PLAN.days[ui.day].date,'2026-12-03');
 location.hash='#day/2026-12-04/timeline/usj_core';assert.equal(parseHash(),'');assert.equal(PLAN.days[ui.day].date,'2026-12-04');assert.ok(ui.moved.includes('不在最终行程'));
 location.hash='#day/2026-12-05/timeline/castle_visit';assert.equal(parseHash(),'');assert.equal(ui.tab,'day');
 location.hash='#day/2026-12-05/pilgrimage/conan-ebisubashi';parseHash();assert.equal(ui.tab,'shots');assert.equal(PLAN.days[ui.shotsDay].date,'2026-12-03');
 location.hash='#shots/2026-12-05/conan-ebisubashi';parseHash();assert.equal(PLAN.days[ui.shotsDay].date,'2026-12-03');
 ui.moved='';location.hash='';parseHash();
 for(const [i,d] of PLAN.days.entries()){ui.day=i;const first=effectiveEvents(d)[0];assert.ok(new RegExp('id="row-'+first.id+'"[^]*?class="row-time[^"]*">[0-9]').test(dayScreen())||eventStart(first)===null,'每天第一行有出发时刻 '+d.date);}
 assert.ok(!TODOS.some(x=>/门票|17:00ふうふう亭/.test(x))&&openPurchases().length===5,'票务里的事项不再重复成待办');
 // Connectors: no stamp, a length instead of a clock, passed once a later activity is ticked; fixed times stay bold.
 const uji=PLAN.days[1];ui.day=1;let html=dayScreen();
 assert.ok(!/id="row-uji_transfer"[^]*?data-action="check"[^]*?id="row-uji_parfait"/.test(html),'交通行没有勾选');
 assert.ok(html.includes('1小时')&&progress(uji).total===effectiveEvents(uji).filter(ev=>isMajorEvent(uji,ev)).length,'连接行显示时长，进度只算主活动');
 setCheck(uji.date,'uji_parfait',true);assert.ok(!nowState(uji,9*60+40).events.length||nowState(uji,9*60+40).focus.id!=='uji_transfer','勾选后续活动后交通行视为已过');
 assert.ok(dayScreen().includes('id="row-uji_transfer"')&&/class="row minor done" id="row-uji_transfer"/.test(dayScreen()),'已过的交通行变淡');
 setCheck(uji.date,'uji_parfait',false);
 ui.day=5;assert.ok(/row-time fixed">14:59/.test(dayScreen()),'现行候选列车保留粗体时刻');
 assert.ok(TODO_IDS.every(id=>TODO_SHORT[id]),'每条待办都有一行标题');
 ui.tab='prep';assert.ok(text(prepScreen()).includes(TODOS[0]),'待办全文仍可展开');
 ({sheets,screens:screens.length,days:PLAN.days.length});
`);
assert.equal(JSON.stringify(PLAN),locked,'出行版不改变原始行程');

// A record from the previous plan: backed up untouched, then only same-meaning activities follow to their new day.
const KEY='kansai-autumn-notebook-v1',oldRecord={schemaVersion:3,
 checks:{'2026-12-05:nara_visit':'done','2026-12-05:nara_lunch':'done','2026-12-05:castle_visit':'done','2026-12-04:usj_core':'done','2026-12-03:kyoto_lunch':'done',
  '2026-12-06:sannomiya_shopping':'done','2026-12-06:ikuta_visit':'done','2026-12-05:glico_photo':'done','2026-12-05:shot:conan-ebisubashi':true,'2026-12-01:shot:eupho_bench':true},
 todos:{'usj-app':true,weather:true,'kobe-dinner-20261003':true,'kyoto-tower-20261003':true,2:true},choices:{'2026-12-05':{shop1:'potato',shop2:'none',spaworldEvening:true},'2026-12-04':{usjExtra:true}}};
function boot(record,failBackup=false){
 const kept={[KEY]:JSON.stringify(record)};
 const storage={getItem:k=>kept[k]??null,setItem:(k,v)=>{if(failBackup&&k!==KEY)throw Error('quota');kept[k]=String(v);},removeItem:k=>{delete kept[k];}};
 const ctx=vm.createContext({PLAN,PILGRIMAGE:JSON.parse(read('pilgrimage.json')),PHOTOS:{},GUIDES:{},localStorage:storage,location:{search:'',hash:''},
  document:{querySelector(){return null;},querySelectorAll(){return [];},addEventListener(){}},setTimeout(){return 1;},clearTimeout(){},console});
 vm.runInContext(SCRIPT_FILES.map(read).join('\n'),ctx);
 return {kept,state:JSON.parse(vm.runInContext('JSON.stringify(state)',ctx)),ok:vm.runInContext('storageOK',ctx),shops:vm.runInContext("String(selectedShops(choice(PLAN.days[4])))",ctx)};
}
const migrated=boot(oldRecord);
assert.equal(migrated.kept[KEY+'-before-final-plan-2026-10-19'],JSON.stringify(oldRecord),'迁移前完整备份');
assert.deepEqual(Object.keys(migrated.state.checks).sort(),['2026-12-01:shot:eupho_bench','2026-12-03:glico_photo','2026-12-03:shot:conan-ebisubashi','2026-12-04:nara_visit','2026-12-06:ikuta_visit'],'仅同语义记录迁到新日期');
assert.equal(migrated.state.planRevision,PLAN.revision);
assert.deepEqual(Object.keys(migrated.state.todos).sort(),['kyoto-tower-20261003','restaurants','weather'],'USJ与旧和牛待办不串到新任务，按位置的旧待办迁到对应ID');
assert.equal(migrated.shops,'potato','12/4沿用原12/5选店');
assert.deepEqual(Object.keys(migrated.state.choices),['2026-12-04'],'旧泡汤与USJ选项不保留');
assert.equal(JSON.stringify(boot(migrated.state).state),JSON.stringify(migrated.state),'迁移只做一次');
const blocked=boot(oldRecord,true);
assert.equal(blocked.kept[KEY],JSON.stringify(oldRecord),'备份写不进时不覆盖旧记录');
assert.equal(blocked.ok,false);
// Every character a serif line can draw is in the heading subset; otherwise phones mix in their own font.
const subset=new Set(read('assets/fonts/trip-serif-chars.txt')),lacking=[...new Set(headingText()+SERIF_EXTRA)].filter(ch=>ch.trim()&&!subset.has(ch));
assert.equal(lacking.join(''),'','标题字体缺字，请运行 node kansai-src/trip/fonts.mjs');
console.log(JSON.stringify({ok:true,...checked,migration:'ok'}));
