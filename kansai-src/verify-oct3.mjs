import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const src=path.dirname(fileURLToPath(import.meta.url)),repo=path.dirname(src);
const read=name=>fs.readFileSync(path.join(src,name),'utf8').replace(/^\uFEFF/,'');
const before=name=>execFileSync('git',['show','f448bd0:kansai-src/'+name],{cwd:repo,encoding:'utf8'}).replace(/^\uFEFF/,'');
const name='data/关西行程_可视化数据.json',plan=JSON.parse(read(name)),old=JSON.parse(before(name));
const unchanged=['2026-11-30','2026-12-01','2026-12-02','2026-12-04','2026-12-07'];
assert.deepEqual(plan.bookings,old.bookings,'全部机酒和HARUKA状态保持原样');
// Content review may edit copy, but must preserve confirmed schedules, routes and choices.
const reviewBaseline=JSON.parse(execFileSync('git',['show','897efc4:kansai-src/'+name],{cwd:repo,encoding:'utf8'}));
const timeNumbers=text=>(text||'').match(/\d{1,2}:\d{2}|\d+[—–]\d+分钟/g)||[];
const protectedDay=d=>({date:d.date,departure:d.departure_target,return:d.hotel_return_target,route:d.route_stop_ids,routeEvents:d.route_event_ids,optional:d.optional,events:d.timeline.map(e=>({id:e.id,category:e.category,places:e.place_ids,time:timeNumbers(e.time_label),timeStatus:e.time_status}))});
assert.deepEqual(plan.days.map(protectedDay),reviewBaseline.days.map(protectedDay),'文案审校保持全部8天的时刻、活动、路线和可选安排');
const section=(text,date,base)=>{
 text=text.replace(/\r\n/g,'\n');
 const md=Number(date.slice(-2))===30?'11/30':'12/'+Number(date.slice(-2));
 const header=base?'### '+date.slice(5)+' ':'**'+md+'｜';
 const start=text.indexOf(header);assert.ok(start>=0,header);
 const rest=text.slice(start);const end=base?rest.slice(1).search(/\n### |\n## /):rest.slice(1).search(/\n\*\*(?:11\/30|12\/[1-7])｜|\n\*\*大阪酒店附近/);
 return (end<0?rest:rest.slice(0,end+1)).trim();
};
for(const [doc,base] of [['data/关西旅行规划基准_2026-09-28.md',true],['data/关西逐日执行攻略_2026-11-30至12-07.md',false]]){
 const reviewText=execFileSync('git',['show','897efc4:kansai-src/'+doc],{cwd:repo,encoding:'utf8'});
 const tableTimes=text=>timeNumbers(text.split('\n').filter(line=>line.startsWith('|')).join('\n'));
 for(const d of plan.days)assert.deepEqual(tableTimes(section(read(doc),d.date,base)),tableTimes(section(reviewText,d.date,base)),'8天文档时间表数值不变 '+d.date);
}
const d3=plan.days[3],d5=plan.days[5],d6=plan.days[6],event=(day,id)=>day.timeline.find(e=>e.id===id);
for(const day of plan.days){
 assert.equal(new Set(day.timeline.map(e=>e.id)).size,day.timeline.length,'活动ID唯一 '+day.date);
 for(const id of [...day.route_stop_ids,...day.timeline.flatMap(e=>e.place_ids)])assert.ok(plan.places.some(p=>p.id===id),'地点存在 '+id);
 if(day.route_event_ids){assert.equal(day.route_event_ids.length,day.route_stop_ids.length);for(const id of day.route_event_ids)assert.ok(event(day,id),'路线时段可解析 '+id);}
}
assert.ok(event(d3,'kyoto_tower_visit').condition.includes('先在展望室5层'));
assert.ok(d3.timeline.indexOf(event(d3,'kyoto_lunch'))<d3.timeline.indexOf(event(d3,'inari_visit')));
assert.equal(d3.route_stop_ids.filter(id=>id==='hotel_kyoto').length,2,'酒店寄存及取件都保留');
assert.ok(event(d3,'inari_visit').condition.includes('奥社奉拜所'));
assert.equal(d5.departure_target,'09:30');
assert.equal(event(d5,'castle_transfer').time_label,'09:30—10:20');
assert.equal(event(d5,'castle_visit').time_label,'10:20—12:30');
assert.ok(event(d5,'castle_visit').condition.includes('75—90分钟'));
assert.equal(event(d5,'nara_lunch').time_label,'13:00—13:50','午饭单独50分钟');
assert.equal(event(d5,'nara_lunch').place_ids[0],'morinomiya','午饭在大阪吃，不推迟到奈良');
assert.ok(d5.transport_notes[1].includes('70—90分钟'));
assert.equal(d5.route_stop_ids.slice(4,8).join(','),'morinomiya,jr_tsuruhashi,kintetsu_tsuruhashi,kintetsu_nara');
assert.equal(event(d5,'nara_park_walk').time_label,'参考14:50—15:20');
assert.equal(event(d5,'nara_station_walk').time_label,'参考16:20—16:50');
assert.ok(event(d5,'nara_visit').condition.includes('内部30—40分钟'));
assert.equal(event(d5,'nara_rest').time_label,'参考16:10—16:20');
assert.equal(event(d5,'nippombashi_arrival').time_label,'约18:05—18:20');
assert.equal(event(d5,'anime_shopping').time_label,'参考18:20—19:50 · 可浮动1—2小时');
assert.equal(event(d5,'nippombashi_dinner').time_label,'参考19:50—20:50');
assert.equal(d5.hotel_return_target,'约22:10—22:30');
assert.ok(d5.fallback_rules.join('').includes('15:30后'));
assert.equal(d6.departure_target,'09:30');
for(const id of ['ikuta','starbucks_kitano','lashinbang_kobe','surugaya_kobe','bookoff_kobe','kobe_bridge'])assert.ok(d6.route_stop_ids.includes(id),'神户巡礼和三店保留 '+id);
assert.ok(event(d6,'kitano_lunch').condition.includes('玩家实景对照，非官方认定'));
assert.equal(event(d6,'kobe_bridge_visit').time_label,'15:00—16:30');
assert.equal(d6.meals.dinner.booking_status,'not_reserved');
assert.equal(d6.meals.dinner.price_jpy,null);
for(const day of [d3,d5,d6])assert.ok(!day.route_stop_ids.some(id=>['tofukuji','nintendo_osaka','pokemon_osaka','umeda_sky','coco_umeda'].includes(id)),'取消的景点不进入路线');
const pg=JSON.parse(read('pilgrimage.json')),oldPg=JSON.parse(before('pilgrimage.json'));
assert.deepEqual(pg.points.map(p=>p.id),oldPg.points.map(p=>p.id),'所有既有巡礼点保留');
for(const point of pg.points){const previous=oldPg.points.find(p=>p.id===point.id);for(const key of ['real','anime','comparison','coordinates','event_id','place_ids'])assert.deepEqual(point[key],previous[key],'图片定位与活动绑定保留 '+point.id);}
assert.ok(pg.points.find(p=>p.id==='conan-ebisubashi').shooting_note.includes('21:10—21:40'));
const report={checkedAt:new Date().toISOString(),bookingsUnchanged:true,protectedDates:plan.days.map(d=>d.date),protectedFields:['bookings','schedule times','event IDs','routes','optional arrangements'],reviewedDates:plan.days.map(d=>d.date),nara:{hotelDeparture:'09:30',castleVisit:'10:20–12:30',separateLunch:'13:00–13:50',stationToStation:'14:50–16:50',shoppingArrival:'18:05–18:20',hotelReturn:'22:10–22:30',latestArrivalBeforeTempleBecomesConstrained:'15:30'},pilgrimageAndMediaPreserved:true};
fs.writeFileSync(path.join(src,'检查记录/京都塔大阪城神户调整-2026-10-03.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report));
