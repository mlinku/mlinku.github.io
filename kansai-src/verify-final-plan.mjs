// Final plan of 2026-10-19 (最终行程交接包): node kansai-src/verify-final-plan.mjs
// Replaces the 10/3—10/4 checks that locked everything but 12/5. Still protected against the last approved
// build (fbe1a9d): every booking and HARUKA, and the times, routes and activity IDs of 11/30, 12/2 and 12/7.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const src=path.dirname(fileURLToPath(import.meta.url)),repo=path.dirname(src);
const read=name=>fs.readFileSync(path.join(src,name),'utf8').replace(/^﻿/,'');
const BASELINE='fbe1a9d';
const before=name=>execFileSync('git',['show',BASELINE+':kansai-src/'+name],{cwd:repo,encoding:'utf8'}).replace(/^﻿/,'');
const name='data/关西行程_可视化数据.json',plan=JSON.parse(read(name)),old=JSON.parse(before(name));
const root=path.join(repo,'..','关西行程_可视化数据.json');
if(fs.existsSync(root))assert.deepEqual(JSON.parse(fs.readFileSync(root,'utf8').replace(/^﻿/,'')),plan,'旅行目录规划文件与仓库副本一致');

assert.deepEqual(plan.bookings,old.bookings,'全部机酒和HARUKA状态保持原样');
assert.equal(plan.plan_id,old.plan_id);assert.notEqual(plan.revision,old.revision,'使用新的revision');
const timeNumbers=text=>(text||'').match(/\d{1,2}:\d{2}|\d+[—–]\d+分钟/g)||[];
const protectedDay=d=>({date:d.date,departure:d.departure_target,return:d.hotel_return_target,route:d.route_stop_ids,routeEvents:d.route_event_ids,optional:d.optional,events:d.timeline.map(e=>({id:e.id,category:e.category,places:e.place_ids,time:timeNumbers(e.time_label),timeStatus:e.time_status}))});
const unchanged=['2026-11-30','2026-12-02','2026-12-07'];
for(const date of unchanged)assert.deepEqual(protectedDay(plan.days.find(d=>d.date===date)),protectedDay(old.days.find(d=>d.date===date)),'未改日期的时刻、活动、路线和可选安排不变 '+date);
assert.deepEqual(plan.days.map(d=>d.date),old.days.map(d=>d.date),'仍是8天');

const RETIRED=['usj','osaka_castle','morinomiya','jr_tsuruhashi','kintetsu_tsuruhashi','spaworld','nintendo_osaka','pokemon_osaka','umeda_sky','coco_umeda','tofukuji'];
const event=(day,id)=>day.timeline.find(e=>e.id===id);
for(const day of plan.days){
 assert.equal(new Set(day.timeline.map(e=>e.id)).size,day.timeline.length,'活动ID唯一 '+day.date);
 for(const id of [...day.route_stop_ids,...day.timeline.flatMap(e=>e.place_ids)])assert.ok(plan.places.some(p=>p.id===id),'地点存在 '+id);
 if(day.route_event_ids){assert.equal(day.route_event_ids.length,day.route_stop_ids.length,'路线时段与站点等长 '+day.date);for(const id of day.route_event_ids)assert.ok(event(day,id),'路线时段可解析 '+id);}
 for(const id of [...day.route_stop_ids,...day.timeline.flatMap(e=>e.place_ids)])assert.ok(!RETIRED.includes(id),'取消的地点不进入行程 '+day.date+' '+id);
 assert.ok(!day.timeline.some(e=>/^usj_|^castle_|spaworld/.test(e.id)),'没有USJ、大阪城或泡汤活动 '+day.date);
 assert.ok(!JSON.stringify(day).match(/USJ|Studio Pass|任天堂|SPAWORLD|白须神社|森之宫/),'行程文字不再出现已取消项目 '+day.date);
}
for(const id of ['USJ','大阪城','友岛登船','白须神社'])assert.ok(plan.excluded_default.includes(id),'默认排除 '+id);
const [,,,d3,d4,d5,d6]=plan.days;
assert.ok(event(d3,'glico_photo')&&d3.route_stop_ids.includes('glico'),'戎桥换到12/3');
assert.equal(d3.route_stop_ids.filter(id=>id==='hotel_kyoto').length,2,'京都酒店寄存及取件都保留');
assert.ok(event(d4,'nara_visit')&&event(d4,'anime_shopping')&&d4.optional.some(o=>o.id==='shop_replacement'),'12/4奈良与日本桥，选店1—2家');
assert.ok(d4.transport_notes[0].includes('勿上大阪线往伊势'),'近铁换乘易错提醒');
assert.equal(d5.departure_target,'10:00');
assert.ok(event(d5,'wakayama_tower_visit').condition.includes('默认进天守'),'12/5默认进天守');
assert.ok(d5.route_stop_ids.includes('wakayama_castle')&&d5.route_stop_ids.includes('wakayama_momijidani'));
assert.ok(d5.hotel_return_target.startsWith('约19:00—19:30'),'约19:00—19:30返店');
assert.ok(d5.fallback_rules.join('').includes('17:00后不能入天守')&&d5.fallback_rules.join('').includes('16:45'),'天守与庭园末入');
assert.ok(d5.fallback_rules.join('').includes('没有渡轮'),'不上友岛');
assert.equal(event(d5,'wakayamashi_return').time_status,'current_timetable_candidate','加太回程只是现行候选');
assert.deepEqual(event(d6,'motomachi_cd_shopping').place_ids,['kobe_banana_records','kobe_rhythmbox'],'元町两家CD店优先');
assert.deepEqual(event(d6,'sannomiya_dinner').place_ids,['fufutei_kobe']);
const tickets=Object.fromEntries(plan.visit_budget.map(v=>[v.place_id,v.two_adults_jpy]));
assert.deepEqual([tickets.kodaiji,tickets.kyoto_tower,tickets.todaiji,tickets.wakayama_castle],[1600,2000,1600,820],'门票两人预算');
const purchase=item=>plan.unconfirmed_purchases.find(p=>p.item.includes(item));
assert.equal(purchase('ふうふう亭').status,'not_reserved','和牛尚未订位');
assert.equal(purchase('和歌山城').status,'pay_on_site');
assert.ok(!plan.unconfirmed_purchases.some(p=>/USJ|Studio/.test(p.item)),'不再购买USJ门票');
assert.equal(new Set(plan.pending_checks.map(t=>t.id)).size,plan.pending_checks.length,'待办ID唯一');
assert.ok(!plan.pending_checks.some(t=>/usj/i.test(t.id+t.text)),'没有USJ待办');

// Pilgrimage: every earlier point and its pictures stay; only the bindings the handoff lists change.
const pg=JSON.parse(read('pilgrimage.json')),oldPg=JSON.parse(before('pilgrimage.json'));
for(const previous of oldPg.points){
 const point=pg.points.find(p=>p.id===previous.id);assert.ok(point,'巡礼点保留 '+previous.id);
 for(const key of ['real','anime','comparison','coordinates','place_ids'])assert.deepEqual(point[key],previous[key],'图片与定位保留 '+previous.id);
}
const pt=id=>pg.points.find(p=>p.id===id);
assert.equal(pt('conan-ebisubashi').date,'2026-12-03');assert.equal(pt('conan-ebisubashi').event_id,'glico_photo');
assert.equal(pt('eupho_uji_bridge').event_id,'uji_parfait');
assert.equal(pt('conan-tsutenkaku').reference,true,'通天阁只作参考');
const kada=pg.points.filter(p=>p.date==='2026-12-05');
assert.equal(kada.length,4,'加太4组对照');
for(const p of kada)for(const kind of ['real','anime']){assert.ok(fs.existsSync(path.join(src,p[kind].local)),'图片存在 '+p[kind].local);assert.ok(p[kind].credit&&p[kind].license&&p[kind].changes,'来源与许可 '+p.id);}
const photos=JSON.parse(read('photos.json'));
for(const id of ['usj','osaka_castle','spaworld'])assert.ok(!photos[id],'不再注册取消地点的照片 '+id);
for(const id of ['kada_coast','awashima_shrine','wakayama_castle','wakayama_momijidani']){assert.ok(photos[id]&&fs.existsSync(path.join(src,photos[id].local||photos[id].src||'')),'新地点照片 '+id);assert.ok(photos[id].license&&photos[id].author,'照片署名与许可 '+id);}

const report={checkedAt:new Date().toISOString(),baseline:BASELINE,revision:plan.revision,bookingsUnchanged:true,unchangedDates:unchanged,
 final:{'12/4':'奈良大佛殿 + 日本桥1—2家','12/5':'加太巡礼 → 淡嶋神社 → 红叶溪庭园 → 天守（默认）→ 约19:00—19:30返店','12/6':'元町两家CD店优先；17:00和牛待订位'},
 excluded:plan.excluded_default,tickets,pilgrimage:{points:pg.points.length,kada:kada.map(p=>p.id)}};
fs.writeFileSync(path.join(src,'检查记录/最终计划-2026-10-19.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
