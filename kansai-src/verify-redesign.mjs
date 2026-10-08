import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const read=p=>fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,'');
const PLAN=JSON.parse(read('data/关西行程_可视化数据.json'));
const remembered={checks:{'2026-11-30:flight_out':true,'2026-12-02:gion_optional':true},todos:{0:true,6:true},choices:{'2026-12-02':{gion:'hanamikoji'}}};
const localStorage={getItem:()=>JSON.stringify(remembered),setItem(){}};
const scope=vm.createContext({PLAN,PILGRIMAGE:JSON.parse(read('pilgrimage.json')),PHOTOS:JSON.parse(read('photos.json')),GUIDES:Object.fromEntries(PLAN.days.map(d=>[d.date,'攻略'])),REGION_MAP_IMAGE:'data:image/jpeg;base64,AA==',document:{querySelector(){return {innerHTML:'',classList:{add(){},remove(){}}}},querySelectorAll(){return []},addEventListener(){}},localStorage,assert,scrollY:0,scrollTo(){},setTimeout(){return 1},clearTimeout(){}});
const ui=read('interface.js').split("document.addEventListener('click'")[0];
vm.runInContext(read('details.js')+'\n'+read('app.js')+'\n'+read('day-flow.js')+'\n'+read('pilgrimage.js')+'\n'+read('execution.js')+'\n'+read('daily.js')+'\n'+ui,scope);
const results=vm.runInContext(`
 const checked=[];
 const savedChecks={...state.checks},savedChoices={...state.choices};
 const resumeDay=PLAN.days[1];state.checks={};state.choices[resumeDay.date]={};
 assert.equal(nextActivity(resumeDay),null,'未开始时不显示继续入口');
 const resumeEvents=effectiveEvents(resumeDay);
 state.checks[resumeDay.date+':'+resumeEvents[0].id]=true;
 assert.equal(nextActivity(resumeDay).id,resumeEvents[1].id,'跳到第一项未完成活动');
 assert.ok(resumeLink(resumeDay).includes('下一项未完成'),'按钮名称与未完成定位一致');
 assert.ok(resumeLink(resumeDay).includes('/timeline/'+resumeEvents[1].id),'继续行程使用可分享的活动锚点');
 for(const ev of resumeEvents)state.checks[resumeDay.date+':'+ev.id]=true;
 assert.equal(nextActivity(resumeDay),null,'全部完成后无继续入口');
 state.choices[resumeDay.date]={ujiExtra:'station'}; delete state.checks[resumeDay.date+':station_stage'];
 assert.equal(nextActivity(resumeDay).id,'station_stage','舞台主线未完成时能继续');
 state.checks={};state.choices={...savedChoices};
 assert.equal(nextActivity(resumeDay),null,'重置后移除继续入口');
 for(const day of PLAN.days)for(const ev of effectiveEvents(day)){
  const id=navigationPlace(ev);if(id){assert.ok(PLACE[id]?.map_search_url,'导航点存在 '+ev.id);assert.ok(!eventNavigation(ev).includes('origin='),'不绑定上一站 '+ev.id);}
  if(ev.rally_spot){assert.ok(rallyActions(ev).includes(PILGRIMAGE.rally.entry_url),'集章直达官方活动');assert.ok(!rallyActions(ev).includes('data-event-check'),'打开活动不标记领取完成');}
 }
 assert.equal(navigationPlace(effectiveEvents(PLAN.days[5]).find(e=>e.id==='nara_return_train')),'kintetsu_nara','上车阶段地图指向出发车站');
 assert.ok(executionNotice(resumeDay,{id:'uji_parfait'}).includes('10:00'),'上午咖啡厅开门时间无需展开');
 assert.ok(executionNotice(resumeDay,{id:'daikichi_visit'}).includes('白天下山'),'登山阶段提示延误处理');
 state.checks=savedChecks;state.choices=savedChoices;

 assert.ok(prepPage().includes('临行准备'));
 assert.ok(PLACE_DETAILS.hotel_kyoto);
 assert.ok(!tripPlaces().some(p=>['byodoin','tofukuji','nintendo_osaka','pokemon_osaka','umeda_sky','coco_umeda','kotosaka','meriken'].includes(p.id)),'地点目录不展示已取消景点');
 assert.ok(tripPlaces().some(p=>p.id==='surugaya_main'),'保留购物替换店');
 for(const d of PLAN.days)for(const ev of effectiveEvents(d))if(TRANSPORT_AT_EVENT[ev.id]){
  assert.ok(TRANSPORT_AT_EVENT[ev.id].every(i=>DETAILS[d.date].transport[i]),'交通说明索引有效 '+ev.id);
  assert.ok(eventCard(d,ev).includes('aria-label="交通说明"'),'交通活动就近显示 '+ev.id);
 }

 for(const img of Object.values(PHOTOS))img.src=img.local;
 for(const d of PLAN.days){
  assert.deepEqual(effectiveRoute(d).map(p=>p.id),d.route_stop_ids,'路线顺序 '+d.date);
  const timed=timedRoute(d);
  assert.equal(timed.map(s=>s.id).join(','),d.route_stop_ids.join(','),'加时间不改变路线 '+d.date);
  assert.ok(timed.every(s=>s.times.length&&s.times.every(t=>t.text&&t.label&&t.text!=='时间待确认')),'每个路线节点明确时间来源 '+d.date);
  const groups=routeGroups(d);
  for(let i=1;i<groups.length;i++){
   const previous=groups[i-1],current=groups[i];
   assert.ok(!(previous.eventId===current.eventId&&previous.times.some(a=>current.times.some(b=>routeTimeKey(a)===routeTimeKey(b)))),'同一活动的共用时间不因时段分组重复 '+d.date+' '+current.eventId);
  }
  assert.equal(groups.flatMap(g=>g.stops).map(s=>s.id).join(','),d.route_stop_ids.join(','),'时间分组保留全部节点及重复返程 '+d.date);
  for(const group of groups)for(const stop of group.stops){
   const extras=stop.times.filter(t=>!group.times.some(common=>routeTimeKey(common)===routeTimeKey(t)));
   assert.equal([...group.times,...extras].map(routeTimeKey).sort().join('|'),stop.times.map(routeTimeKey).sort().join('|'),'分组不遗漏单点时间 '+stop.id);
  }
  const events=effectiveEvents(d), markup=timelinePage(d);
  const routeMarkup=routePage(d);
  for(const ev of events){
   const represented=groups.some(g=>g.eventId===ev.id||g.stops.some(s=>s.times.some(t=>t.eventId===ev.id)));
   if(!represented)assert.ok(routeMarkup.includes('/timeline/'+ev.id+'"'),'路线可找到必要步骤 '+ev.id);
  }
  assert.equal(routeMarkup.split('class="route-actions"').length-1,effectiveRoute(d).length,'每站保留紧凑地图操作 '+d.date);
  assert.ok(!routeMarkup.includes('class="route-leg"'),'移除单独占行的旧路线入口');
  assert.ok(!routeMarkup.includes('class="route-photo"'),'紧凑路线不重复地点照片 '+d.date);
  for(const ev of events)assert.equal(markup.split('data-event="'+ev.id+'"').length-1,1,'时间轴遗漏或重复 '+ev.id);
  for(const r of DETAILS[d.date].meals.filter(r=>r[1]==='首选'&&['午餐','晚餐'].includes(r[0])))assert.ok(markup.includes(e(r[2])),'餐饮首选未显示 '+d.date);
  assert.equal(DayFlow.forDay(d).sections.flatMap(s=>s.events).map(ev=>ev.id).join(','),events.map(ev=>ev.id).join(','),'分段后不改变活动顺序 '+d.date);
  assert.equal(DayFlow.forDay(d).sections.flatMap(s=>s.scenePoints).map(p=>p.id).join(','),pilgrimageDay(d.date).filter(pointEnabled).map(p=>p.id).join(','),'巡礼分组保持点位顺序 '+d.date);
  checked.push({date:d.date,events:events.length,routeNodes:effectiveRoute(d).length});
 }

 for(const d of PLAN.days){
  assert.ok(!timelinePage(d).includes('这段怎么走'),'交通不在时间轴重复');
  assert.ok(!daySupport(d).includes('交通说明'),'侧栏不重复交通');
  assert.ok(!routePage(d).includes('<summary>交通说明</summary>'),'路线交通直接放在对应步骤');
 }
 const ujiDefault=PLAN.days[1];
 for(const p of PLAN.pilgrimage_points){
  const actual=PILGRIMAGE.points.find(x=>x.id===p.id);
  assert.equal(p.event_id,actual.event_id,'规划与巡礼的活动绑定一致 '+p.id);
  assert.equal(p.option,actual.option,'规划与巡礼的主线状态一致 '+p.id);
 }
 assert.equal(PLAN.days[3].timeline[0].time_label,'09:45离店前','退房先于离店');
 assert.equal(timedRoute(PLAN.days[3])[0].times[0].text,'09:45离店前','路线同步退房先于离店');
 const dinnerDay=PLAN.days[2],dinnerWalk=effectiveEvents(dinnerDay).find(ev=>ev.id==='gion_dinner_walk');
 assert.ok(eventNavigation(dinnerWalk,dinnerDay).includes(encodeURIComponent('名代おめん 四条先斗町店')),'晚餐步行能定位具体餐厅');
 const ujiTimeline=timelinePage(ujiDefault);
 assert.ok(ujiTimeline.includes('#day/2026-12-01/pilgrimage/eupho_saizeriya_uji'),'晚餐能进入萨莉亚巡礼对照');
 const saizeriyaShot=pilgrimageDay(ujiDefault.date).find(p=>p.id==='eupho_saizeriya_uji');
 assert.equal(saizeriyaShot.event_id,'uji_saizeriya_dinner');
 assert.ok(saizeriyaShot.real.local&&saizeriyaShot.anime.local,'萨莉亚对照包含实景及作品图');
 const bridgeVisits=effectiveEvents(ujiDefault).filter(ev=>ev.category!=='transport'&&ev.category!=='meal'&&ev.place_ids.includes('uji_bridge')).length;
 assert.ok(bridgeVisits>1);
 assert.equal((ujiTimeline.match(/class="photo-button [^"]*" data-action="place" data-place="uji_bridge"/g)||[]).length,bridgeVisits,'时间轴重复经过宇治桥也保留照片');
 assert.equal(mealRows(ujiDefault,effectiveEvents(ujiDefault).find(e=>e.id==='uji_saizeriya_dinner'))[0][7],'saizeriya_uji');
 assert.ok(!effectiveEvents(ujiDefault).some(ev=>ev.id==='uji_default_dinner'),'默认没有第二顿京都晚餐');
 assert.equal(timedRoute(ujiDefault).find(n=>n.id==='saizeriya_uji').times[0].text,'18:00—19:00');
 assert.ok(!timelinePage(ujiDefault).includes('等位超20分钟换萨莉亚'));
 assert.equal(state.checks['2026-11-30:flight_out'],true,'旧活动进度保留');
 for(const d of PLAN.days)assert.ok(!/phase-nav|resume-step|phase-route/.test(timelinePage(d)),'行程不再重复时段导航 '+d.date);
 assert.equal(state.todos['usj-details'],true,'旧待办保留');
 const kyoto=PLAN.days[2];
 assert.equal(effectiveEvents(kyoto).length,12,'默认12段完整展示');
 assert.equal(progress(kyoto).done,0,'取消的旧祇园活动不计入完成数');
 assert.ok(!effectiveEvents(kyoto).some(x=>x.id==='gion_optional'),'忽略旧祇园选择');
 assert.ok(!optionalControls(kyoto).includes('花见小路'),'移除旧散步选项');
 assert.equal(mealRows(kyoto,effectiveEvents(kyoto).find(x=>x.id==='gion_dinner_walk')).length,0,'晚饭前步行不重复餐厅卡片');
 assert.ok(PHOTOS.kodaiji?.sourcePage&&PHOTOS.kodaiji?.local,'高台寺照片及来源');
 state.choices[kyoto.date]={kodaijiPlan:'night',yasakaBrief:true};
 assert.equal(effectiveRoute(kyoto).slice(-3).map(x=>x.id).join(','),'kodaiji,yasaka_shrine,hotel_kyoto','八坂神社放在夜枫后');
 assert.equal(effectiveEvents(kyoto).find(x=>x.id==='gion_dinner_walk').time_label,'18:30—19:00','顺路短停不叠加时间');
 state.choices[kyoto.date]={kodaijiPlan:'skip',yasakaBrief:true};
 assert.equal(effectiveEvents(kyoto).length,11);
 assert.ok(!effectiveRoute(kyoto).some(x=>['kodaiji','yasaka_shrine'].includes(x.id)),'取消夜枫同时省八坂神社');
 assert.equal(effectiveEvents(kyoto).find(x=>x.id==='gion_rest').time_label,'16:45—17:15','保留休息');
 assert.ok(effectiveEvents(kyoto).find(x=>x.id==='gion_dinner').time_label.includes('不等到19:00'));
 assert.equal(returnTarget(kyoto),'饭后');
 assert.ok(!timelinePage(kyoto).includes('data-event="kodaiji_night"'));
 assert.ok(!timelinePage(kyoto).includes('傍晚 · 先休息再赏夜枫'));
 state.choices[kyoto.date]={kodaijiPlan:'night',yasakaBrief:false};
 assert.deepEqual(effectiveRoute(kyoto).map(x=>x.id),kyoto.route_stop_ids,'恢复默认路线');
 const uji=PLAN.days[1];
 for(const legacy of ['tower','kotosaka','agata']){
  state.choices[uji.date]={ujiExtra:legacy,byodoinInterior:true};
  assert.equal(choice(uji).ujiExtra,'none','旧选择回落主线，不移除进度');
  assert.ok(effectiveEvents(uji).some(ev=>ev.id==='uji_saizeriya_dinner'));
  assert.ok(!effectiveRoute(uji).some(n=>['kyoto_tower','kotosaka'].includes(n.id)));
 }
 state.choices[uji.date]={ujiExtra:'station'};
 assert.equal(effectiveEvents(uji).filter(x=>x.id==='station_stage').length,1);
 assert.equal(optionalControls(uji),'','宇治不再有舞台可选开关');
 assert.ok(!effectiveEvents(uji).find(x=>x.id==='station_stage').optional,'舞台固定主线');
 assert.equal(effectiveRoute(uji).filter(x=>x.id==='kyoto_stage').length,1,'舞台路线不重复');
 assert.ok(!effectiveRoute(uji).find(x=>x.id==='kyoto_stage').optional);
 assert.ok(effectiveEvents(uji).some(x=>x.id==='uji_saizeriya_dinner'&&x.time_label==='18:00—19:00'));
 assert.ok(!effectiveEvents(uji).some(x=>x.id==='tower_visit'));
 assert.ok(!effectiveRoute(uji).some(x=>['kyoto_tower','kotosaka'].includes(x.id)));
 assert.equal(effectiveRoute(uji).slice(-3).map(x=>x.id).join(','),'kyoto_station,kyoto_stage,hotel_kyoto');
 assert.equal(timelinePage(uji).split('data-event="station_stage"').length-1,1);
 for(const p of pilgrimagePoints){
   assert.ok(p.comparison?p.comparison.local&&p.comparison.source_url:p.real.local&&p.anime.local&&p.real.source_url&&p.anime.source_url,p.id+' paired media or intact source comparison');
   if(p.coordinates)assert.ok(p.coordinates.source_url&&p.coordinates.precision,p.id+' coordinate provenance');
   assert.ok(PLAN.days.find(d=>d.date===p.date),p.id+' valid day');
   assert.ok(shotCard(p).includes('data-shot-check="'+p.id+'"'),p.id+' completion control');
   assert.ok(shotCard(p).includes(e(SHOT_COPY[p.id]?.note||p.shooting_note)),p.id+' 显示当前拍摄说明');
   assert.ok(shotCard(p).includes(e(SHOT_COPY[p.id]?.scene||p.scene)),p.id+' 显示作品依据');
   if(p.match_note)assert.ok(shotCard(p).includes(e(SHOT_COPY[p.id]?.caption||p.match_note)),p.id+' 图片匹配限定保留');
 }

 const point=pilgrimagePoints.find(p=>p.id==='delta-kon');
 assert.ok(shotCard(point).includes('#day/2026-12-02/timeline/delta_visit'),'对照图返回原行程');
 assert.ok(shotCard(point,'place').includes('id="place-shot-delta-kon"'),'弹窗与主页面ID不重复');
 assert.ok(!shotCard(point,'place').includes('id="shot-delta-kon"'));
 state.checks[shotKey(point)]=true;assert.equal(shotProgress(point.date).done,1,'巡礼计数包含打卡');
 delete state.checks[shotKey(point)];assert.equal(shotProgress(point.date).done,0,'巡礼计数可取消');
 state.choices[uji.date]={ujiExtra:'none'};assert.equal(shotProgress(uji.date).total,12,'旧关闭选择不能隐藏舞台机位');
 state.choices[uji.date]={ujiExtra:'station'};assert.equal(shotProgress(uji.date).total,12,'启用后计入京都站两个机位');
 globalThis.location={hash:'#day/2026-12-02/timeline/delta_visit'};readHash();assert.equal(sectionTarget,'event-delta_visit');
 location.hash='#day/2026-12-02/pilgrimage/delta-kon';readHash();assert.equal(sectionTarget,'shot-delta-kon');
 assert.ok(!dayPage().includes('id="day-support"'),'巡礼不重复通用侧栏');
 assert.ok(dayPage().includes('data-shot-progress="2026-12-02"'));
 location.hash='#day/2026-12-04/pilgrimage';readHash();assert.equal(dayView,'timeline','无巡礼日期回到行程');
 const nara=PLAN.days[5];state.choices[nara.date]={shop1:'potato',shop2:'none'};
 assert.deepEqual(effectiveEvents(nara).find(x=>x.id==='anime_shopping').place_ids,['potato']);
 const umeda=PLAN.days[6];state.choices[umeda.date]={umedaMain:'pokemon_osaka',umedaSecond:true};
 assert.ok(!effectiveEvents(umeda).some(x=>x.id==='umeda_shop'),'旧梅田选择不恢复已删除活动');
 assert.ok(returnTarget(nara).includes('21:30—21:45'));
 assert.equal(returnTarget(umeda),'20:45—21:00，随晚餐时段调整');
 assert.ok(!overview().includes('city-map'),'删除旧城市示意');
 assert.ok(!overview().includes('<iframe'),'避免兼容性空框');
 assert.ok(overview().includes('google-map-preview'),'保留真实Google区域预览');
 dayIndex=1;state.checks={'2026-12-01:shot:eupho_bench':true,'2026-12-01:uji_lunch':true,'2026-11-30:flight_out':true};
 let resetRenderCount=0;render=()=>{resetRenderCount++;};resetDay();
 assert.equal(state.checks['2026-12-01:shot:eupho_bench'],true,'行程重置保留巡礼打卡');
 assert.equal(state.checks['2026-12-01:uji_lunch'],undefined,'重置活动进度');
 assert.equal(state.checks['2026-11-30:flight_out'],true,'保留其他日期');
 undoAction();assert.equal(state.checks['2026-12-01:uji_lunch'],true,'可撤销行程重置');
 resetDay('pilgrimage');
 assert.equal(state.checks['2026-12-01:shot:eupho_bench'],undefined,'巡礼重置仅清除打卡');
 assert.equal(state.checks['2026-12-01:uji_lunch'],true,'巡礼重置保留行程进度');
 assert.equal(state.checks['2026-11-30:flight_out'],true,'巡礼重置保留其他日期');
 undoAction();assert.equal(state.checks['2026-12-01:shot:eupho_bench'],true,'可撤销巡礼重置');
 assert.equal(resetRenderCount,0,'重置和撤销不替换页面，保留阅读状态');
 const photoFixtures=['kodaiji','sannenzaka','yasaka_tower','ninenzaka','nene'].map(id=>[id,PHOTOS[id].src]);
 for(const [id] of photoFixtures)PHOTOS[id].src='test-'+id+'.jpg';
 const nightCard=eventCard(kyoto,effectiveEvents(kyoto).find(ev=>ev.id==='kodaiji_night'));
 assert.ok(!nightCard.includes('<span>高台寺夜枫</span>'),'单张照片不重复活动标题');
 assert.ok(nightCard.includes('aria-label="查看高台寺夜枫详情"'),'照片仍有可访问名称');
 const eastWalk=eventCard(kyoto,effectiveEvents(kyoto).find(ev=>ev.id==='higashiyama_walk'));
 for(const name of ['三年坂','八坂塔外观','二年坂','宁宁之道'])assert.ok(eastWalk.includes('<span>'+name+'</span>'),'多地点照片仍标明名称 '+name);
 for(const [id,src] of photoFixtures){if(src===undefined)delete PHOTOS[id].src;else PHOTOS[id].src=src;}
 state.choices[uji.date]={ujiExtra:'none'};
 const bridges=timedRoute(uji).filter(s=>s.id==='uji_bridge');
 assert.equal(bridges[0].times[0].text,'11:15—12:00','午餐前宇治桥');
 assert.equal(bridges.at(-1).times[0].text,'17:50—18:00','返程宇治桥不能使用上午时间');
 const riverGroup=routeGroups(uji,'下午').find(g=>g.eventId==='uji_pilgrimage');
 assert.equal(riverGroup.stops.length,3,'三个河岸点共用一个时间组');
 assert.equal(riverGroup.times.length,1);
 assert.equal(routePage(uji).split('13:10–13:55').length-1,1,'共用窗口只渲染一次');
 for(const option of ['tower','station','kotosaka']){
  state.choices[uji.date]={ujiExtra:option};
  assert.ok(timedRoute(uji).every(s=>s.times.every(t=>t.text!=='时间待确认')),'可选路线有时间 '+option);
 }
 state.choices[uji.date]={ujiExtra:'station'};
 assert.equal(timedRoute(uji).find(n=>n.id==='kyoto_stage').times[0].text,'京都站抵达后 · 15—20分钟');
 assert.equal(returnTarget(uji),'20:15—20:35','短拍占用的时间计入返店目标');
 assert.equal(timedRoute(uji).find(n=>n.id==='kyoto_station'&&n.eventId==='uji_return').purpose,'下车去4F舞台','短拍启用后下车目的同步');
 assert.equal(timedRoute(uji).find(n=>n.id==='uji_bridge'&&n.eventId==='uji_dinner_walk').purpose,'过桥去晚餐','晚间从京阪站过河去萨莉亚');
 assert.equal(effectiveEvents(uji).find(ev=>ev.id==='uji_return').place_ids.at(-1),'kyoto_station','先到京都站短拍，不先回酒店');
 assert.equal(effectiveEvents(uji).find(ev=>ev.id==='kyoto_rest').time_label,returnTarget(uji));
 const routeKyoto=routePage(PLAN.days[2]);
 assert.ok(routeKyoto.includes('/timeline/demachi_lunch')&&routeKyoto.includes('/timeline/gion_rest')&&routeKyoto.includes('/timeline/gion_dinner'),'路线保留午晚餐与休息');
 assert.ok(effectiveEvents(PLAN.days[3]).some(ev=>ev.id==='osaka_evening_return'),'搬酒店日时间轴有返店步骤');
 assert.ok(effectiveEvents(PLAN.days[3]).find(ev=>ev.id==='inari_visit').condition.includes('奥社'),'主视图保留折返位置');
 assert.equal(timedRoute(uji).at(-1).times[0].text,'20:15—20:35');
 state.choices[kyoto.date]={kodaijiPlan:'skip'};
 assert.equal(timedRoute(kyoto).at(-1).times[0].text,'饭后','取消夜枫同步提前返店');
 const flightOut=timedRoute(PLAN.days[0]);
 assert.equal(flightOut[0].times[0].text,'11:25');assert.equal(flightOut[1].times[0].text,'16:00','日本抵达时间');
 const movingHotels=timedRoute(PLAN.days[3]).filter(n=>n.id.startsWith('hotel_'));
 assert.deepEqual(Array.from(movingHotels,n=>n.purpose),['退房寄存','取行李','抵达入住，随后休息30—45分钟','返店'],'四次酒店停留有明确用途');
 assert.ok(!routePage(PLAN.days[3]).includes('再次经过'),'酒店用途替换笼统重复标识');
 assert.deepEqual(Array.from(timedRoute(PLAN.days[3]),n=>n.id),Array.from(PLAN.days[3].route_stop_ids),'增加用途不改路线顺序');
 const returnStation=timedRoute(PLAN.days[6]).filter(n=>n.id==='jr_osaka');
 assert.equal(returnStation.at(-1).purpose,'换环状线返店','最后大阪站说明乘车目的');
 for(const id of ['lashinbang_kobe','surugaya_kobe','bookoff_kobe']){
  assert.ok(placeButton(id).includes(PLACE_LOCATIONS[id]),'无照片店铺也显示楼层 '+id);
  assert.ok(routePage(PLAN.days[6]).includes(PLACE_LOCATIONS[id]),'路线店铺显示楼层 '+id);
 }
 const flightHome=timedRoute(PLAN.days[7]);
 assert.ok(routePage(PLAN.days[7]).includes('09:50 日本起飞'),'返程起飞时间保留在值机后的航班步骤');assert.equal(flightHome[3].times[0].text,'13:40');
 assert.ok(flightHome[1].times[0].text.includes('临行复核'),'候选列车保留复核提醒');
 assert.ok(timedRoute(PLAN.days[4])[0].times[0].text.includes('07:00'),'USJ按已核实09:00开园安排规划离店时间');
 assert.equal(PLAN.days[4].timeline[0].time_status,'planning_window','离店是规划时间，不是预约');
 assert.ok(effectiveEvents(PLAN.days[4])[0].condition.includes('09:00—19:00'),'行程显示官方营业时间');
 const naraTiming=timedRoute(nara);
 assert.equal(naraTiming.find(s=>s.id==='kintetsu_nippombashi').times[0].text,'到站时刻待确认','不能把奈良上车窗口当作日本桥抵达');
 assert.ok(!naraTiming.find(s=>s.id==='kintetsu_nippombashi').times.some(t=>t.text==='约16:50—17:05'),'首店抵达目标不能挂在车站节点');
 for(const id of ['nankai_namba','nankai_shinimamiya'])assert.equal(naraTiming.find(s=>s.id===id).times[0].text,'拍照后','返店目标不能作为上车时间');
 const usjRoute=routePage(PLAN.days[4]);
 for(const id of ['usj_core','usj_lunch','usj_rest','usj_finish','usj_dinner'])assert.ok(usjRoute.includes('/timeline/'+id+'"'),'USJ路线保留执行步骤 '+id);
 assert.ok(usjRoute.indexOf('/timeline/usj_dinner"')<usjRoute.lastIndexOf('data-route-id="hotel_osaka"'),'离园后先用餐再返店');
 assert.ok(eventCard(PLAN.days[3],effectiveEvents(PLAN.days[3]).find(ev=>ev.id==='kyoto_tower_transfer')).includes('酒店到京都塔步行预留10—15分钟'),'搬酒店日首程活动显示交通');
 assert.ok(PLAN.days[7].timeline.find(ev=>ev.id==='airport_checkin').condition.includes('安检'),'返程保留机场必要步骤');
 const savedNightChoice=state.choices[PLAN.days[2].date];
 state.choices[PLAN.days[2].date]={kodaijiPlan:'skip'};
 assert.ok(!dayNotes(PLAN.days[2]).some(t=>t.includes('17:45')),'取消夜枫后不残留入寺截止提醒');
 state.choices[PLAN.days[2].date]=savedNightChoice;
 assert.equal(naraTiming.find(s=>s.id==='potato').times[0].text,'约16:50—17:05','替换店铺保留抵达目标');
 state.choices[nara.date]={shop1:'animate',shop2:'surugaya'};
 const shops=routeGroups(nara).find(g=>g.eventId==='anime_shopping');
 assert.equal(shops.stops.length,2,'两家店合并共享购物时段');
 assert.equal(shops.phase,'傍晚','替换店铺继承新的傍晚时段，不恢复旧下午标签');
 assert.equal(shops.times[0].text,'参考17:05—19:20 · 约2小时15分钟');
 assert.ok(shops.stops[0].times.some(t=>t.text==='约16:50—17:05'),'第一店独有抵达目标保留');
 assert.equal(routeGroups(PLAN.days[7]).find(g=>g.eventId==='airport_train').stops.length,2,'候选列车窗口只出现一组');
 const homeRoute=routePage(PLAN.days[7]);
 assert.ok(homeRoute.indexOf('/timeline/airport_checkin"')<homeRoute.indexOf('/timeline/flight_home"'),'返程路线先值机再起飞');
 assert.ok(homeRoute.indexOf('/timeline/flight_home"')<homeRoute.indexOf('data-route-id="hkg"'),'起飞后才显示香港抵达');
 assert.ok(!timedRoute(PLAN.days[7]).find(s=>s.id==='kix').times.some(t=>t.label.includes('起飞')),'机场到站卡不先显示起飞');
 assert.ok(effectiveEvents(PLAN.days[0])[0].condition.includes('08:25'),'航班渲染保留到机场目标而非覆盖执行提示');
 const kobe=PLAN.days[6];
 state.checks[kobe.date+':umeda_shop']=true;
 state.choices[kobe.date]={kobeAfternoon:'harbor',umedaSecond:true};
 assert.ok(!effectiveEvents(kobe).some(ev=>ev.id==='umeda_shop'),'旧梅田选择不恢复已取消购物');
 assert.ok(!effectiveRoute(kobe).some(n=>n.id==='starbucks_meriken'),'旧海边偏好不恢复已删除地点');
 assert.ok(effectiveRoute(kobe).some(n=>n.id==='starbucks_kitano'));
 assert.ok(effectiveRoute(kobe).some(n=>n.id==='kobe_bridge'));
 assert.equal(DayFlow.forDay(kobe).sections.flatMap(s=>s.events).map(ev=>ev.id).join(','),effectiveEvents(kobe).map(ev=>ev.id).join(','),'新活动按下午顺序分组');
 assert.equal(progress(kobe).done,0,'取消的梅田记录保留存储，但不计入当前进度');
 assert.equal(timedRoute(kobe).find(n=>n.id==='starbucks_kitano').times[0].text,'11:30—13:00');
 assert.ok(timedRoute(kobe).every(n=>n.times.every(t=>t.text!=='时间待确认')),'替换后每站时间完整');
 assert.equal(timedRoute(kobe).filter(n=>n.id==='port_nakakoen').length,2,'大桥往返保留重复中公园站');
 assert.equal(routeGroups(kobe).find(g=>g.eventId==='sannomiya_shopping').stops.length,3,'三店共用一个购物窗口');
 assert.equal(routePage(kobe).split('13:00–14:30').length-1,1,'90分钟只出现一次');
 const kobeEvents=effectiveEvents(kobe);
 assert.equal(kobe.departure_target,'09:30');
 assert.equal(kobeEvents.find(e=>e.id==='sannomiya_rest').time_label,'14:30—15:00','购物后保留半小时休息');
 assert.equal(kobeEvents.find(e=>e.id==='sannomiya_dinner').time_label,'意向17:30—19:30 · 预留1.5—2小时','晚饭为意向窗口');
 assert.equal(kobeEvents.find(e=>e.id==='kobe_bridge_visit').time_label,'15:00—16:30','大桥往返仍有90分钟');
 assert.ok(!kobeEvents.some(e=>e.id==='sky_visit'),'移除蓝天大厦');
 for(let i=1;i<7;i++)assert.equal(kobeEvents[i-1].time_label.split('—')[1],kobeEvents[i].time_label.split('—')[0],'窗口连续且无重叠 '+kobeEvents[i].id);

 assert.ok(kobeEvents.findIndex(e=>e.id==='sannomiya_dinner')<kobeEvents.findIndex(e=>e.id==='last_evening_return'),'晚饭后直接回酒店');
 assert.equal(kobeEvents.filter(e=>e.category==='meal'&&e.id.includes('lunch')).length,1,'只有一顿星巴克午餐');
 assert.equal(mealRows(kobe,kobeEvents.find(e=>e.id==='kitano_lunch')).length,1,'不增设三宫午餐备选');
 assert.ok(dayNotes(kobe).join('').includes('小吃沿中央街自选'));
 assert.ok(!optionalControls(kobe).includes('下午安排'),'取消旧神户港分支控件');
 state.choices[kobe.date]={kobeAfternoon:'umeda'};
 assert.deepEqual(effectiveRoute(kobe).map(n=>n.id),kobe.route_stop_ids,'恢复默认路线');
 assert.equal(progress(kobe).done,0,'旧梅田完成记录不计入新神户主线');
 delete state.checks[kobe.date+':umeda_shop'];
 // Pace changes must preserve protected experiences and selected-store wording.
 const paceUji=effectiveEvents(PLAN.days[1]);
 for(let i=1;i<15;i++)assert.equal(paceUji[i-1].time_label.split('—')[1],paceUji[i].time_label.split('—')[0],'宇治调整后时段连续 '+paceUji[i].id);
 assert.equal(paceUji.find(ev=>ev.id==='daikichi_visit').time_label,'14:15—15:30','登山仍保留75分钟');
 assert.equal(paceUji.find(ev=>ev.id==='uji_pilgrimage').time_label,'13:10—13:55','河岸增加15分钟');
 const paceNara=PLAN.days[5];state.choices[paceNara.date]={};
 assert.ok(effectiveEvents(paceNara).find(ev=>ev.id==='anime_shopping').time_label.includes('约2小时15分钟'),'日本桥保留慢逛与休息时间');
 assert.equal(timedRoute(paceNara).find(stop=>stop.id==='osaka_castle').times[0].label,'步行与外观拍照','路线明确大阪城只在室外停留');
 state.choices[paceNara.date]={shop1:'potato',shop2:'none'};
 assert.ok(!effectiveEvents(paceNara).find(ev=>ev.id==='anime_shopping').condition.includes('Animate'),'替换后不残留原店时长');
 assert.ok(!effectiveEvents(paceNara).find(ev=>ev.id==='anime_shopping').condition.includes('店间步行'),'只选一家不提示跨店步行');
 assert.ok(effectiveRoute(paceNara).filter(n=>selectedShops(choice(paceNara)).includes(n.id)).every(n=>!n.optional),'已选店铺纳入当天主线');
 assert.ok(!dayFallbacks(paceNara).join('').includes('Animate'),'替换后延误提示不固定指向默认店铺');
 for(const stores of [['animate','surugaya'],['potato','surugaya_main'],['surugaya_main','potato'],['potato']]){
  state.choices[paceNara.date]={shop1:stores[0],shop2:stores[1]||'none'};
  const hours=activityDetails(paceNara,'anime_shopping');
  const rows=DETAILS[paceNara.date].eventDetails.anime_shopping.items.filter(item=>item.place_id);
  for(const row of rows)assert.equal(hours.includes(row.text),stores.includes(row.place_id),'关门时间仅展示已选门店 '+row.place_id);
  if(stores.length===2)assert.ok(hours.indexOf(rows.find(r=>r.place_id===stores[0]).text)<hours.indexOf(rows.find(r=>r.place_id===stores[1]).text),'营业资料按所选路线顺序');
  assert.equal(effectiveEvents(paceNara).find(ev=>ev.id==='nippombashi_arrival').place_ids[0],stores[0],'首店到达定位同步');
 }
 assert.equal(JSON.stringify(DETAILS[paceNara.date].eventDetails.anime_shopping),JSON.stringify(paceNara.visit_details.anime_shopping),'网页门店资料与规划JSON一致');
 state.choices[paceNara.date]={};
 assert.ok(!optionalControls(kobe).includes('梅田'),'删除梅田购物控件');
 assert.equal(PLAN.days[7].departure_target,'05:15—05:25','不擅自推迟返程离店');
 assert.ok(flights().includes('16:00'),'航班总览按日本时区显示');
 const outEvent=effectiveEvents(PLAN.days[0]).find(ev=>ev.id==='flight_out');
 assert.ok(outEvent.time_label.includes('11:25 香港起飞'),'不把起飞时间当值机时间');
 assert.ok(outEvent.condition.includes('香港T2值机 → T1登机'),'航站楼与时间分开');
 assert.ok(!outEvent.title.includes('值机'),'航班标题仅展示航线');
 assert.ok(flights().includes('class="flight-action">起飞</span>11:25'),'总览明确时间角色');
 const booking=PLAN.bookings.find(b=>b.id==='flight_out'),savedArrival=booking.arrival,savedTerminal=booking.arrival_terminal;
 booking.arrival='2026-11-30T16:20:00+08:00';booking.arrival_terminal='T9';
 assert.ok(flights().includes('17:20')&&flights().includes('T9'),'航班时间与航站楼从预订数据读取');
 booking.arrival=savedArrival;booking.arrival_terminal=savedTerminal;
 assert.ok(!eventCard(uji,effectiveEvents(uji).find(ev=>ev.id==='uji_transfer')).includes('photo-button'),'交通段不重复站点照片');
 assert.ok(eventCard(uji,effectiveEvents(uji).find(ev=>ev.id==='uji_parfait')).includes('中村藤吉 · 抹茶芭菲'),'甜品作为独立主线活动');
 const usj=PLAN.days[4];
 state.choices[usj.date]={kinopio:true};
 let lunch=effectiveEvents(usj).find(ev=>ev.id==='usj_lunch');
 let restaurants=mealRows(usj,lunch);
 assert.equal(restaurants.filter(r=>r[1]==='首选').length,1);
 assert.equal(restaurants[0][2],'キノピオ・カフェ');
 assert.ok(restaurants[0][3].includes('2,500'));
 assert.ok(decodeURIComponent(mealMap(usj,restaurants[0])).includes('キノピオ・カフェ'),'所选餐厅地图同步');
 assert.equal(restaurants.find(r=>r[2]==='ルイズ N.Y. ピザパーラー')[1],'备选');
 assert.ok(eventCard(usj,lunch).includes('参考意面'));
 state.choices[usj.date]={kinopio:false};
 lunch=effectiveEvents(usj).find(ev=>ev.id==='usj_lunch');
 assert.equal(mealRows(usj,lunch)[0][2],'ルイズ N.Y. ピザパーラー','取消选择恢复原午餐');
 PHOTOS.usj.src='test-usj-photo.jpg';
 assert.equal((timelinePage(usj).match(/src="test-usj-photo.jpg"/g)||[]).length,1,'园内照片仅展示一次');
 state.choices[kyoto.date]={kodaijiPlan:'skip'};
 assert.ok(!dayPresentation(kyoto).short.includes('夜枫'));
 assert.ok(!dayPresentation(kyoto).summary.includes('高台寺'));
 assert.ok(!dayCard(kyoto,2).includes('高台寺'),'取消夜枫同步更新总览');
 state.choices[kyoto.date]={kodaijiPlan:'night'};
 assert.ok(dayCard(kyoto,2).includes('高台寺'),'恢复夜枫同步更新总览');
 assert.ok(overview().includes('关西区域地图')&&!overview().includes('全程地图'));
 // Current advice must follow the same choices as activities and routes.
 const sourceNotes=JSON.stringify(DETAILS);
 state.choices[kobe.date]={kobeAfternoon:'harbor',umedaSecond:true};
 assert.ok(dayNotes(kobe).join('').includes('三宫购物移到大桥之后'),'优先白天拍桥');
 for(const markup of [timelinePage(kobe),routePage(kobe)])assert.ok(markup.includes('中公園'),'两视图包含新大桥往返交通');
 assert.ok(!mealRows(kobe,effectiveEvents(kobe).find(ev=>ev.id==='kitano_lunch'))[0][5].includes('餐后返大阪'));
 state.choices[kobe.date]={kobeAfternoon:'umeda',umedaMain:'pokemon_osaka'};
 assert.ok(!dayNotes(kobe).join('').includes('Nintendo'),'旧梅田选择不影响当前说明');
 assert.ok(!dayNotes(kobe).join('').includes('第二店仅在'));
 state.choices[kobe.date]={kobeAfternoon:'umeda',umedaSecond:true};
 assert.ok(dayNotes(kobe).join('').includes('和牛自助'));
 state.choices[kyoto.date]={kodaijiPlan:'skip'};
 assert.ok(!dayNotes(kyoto).join('').match(/高台寺|八坂神社/),'取消夜枫后不重复入寺和神社规则');
 state.choices[kyoto.date]={kodaijiPlan:'night',yasakaBrief:true};
 assert.ok(dayNotes(kyoto).join('').includes('省八坂神社'));
 state.choices[uji.date]={ujiExtra:'none'};
 for(const markup of [timelinePage(uji),routePage(uji)])assert.ok(markup.includes('不要在京阪宇治站乘车'),'两视图保留JR返程站区别');
 assert.ok(dayFallbacks(uji).join('').includes('略过縣神社'));
 assert.ok(!dayFallbacks(uji).join('').includes('省额外店铺与集章'));
 state.choices[nara.date]={shop1:'potato',shop2:'none'};
 assert.ok(!dayNotes(nara).join('').includes('默认Animate'));
 for(const markup of [timelinePage(nara),routePage(nara)])assert.ok(!markup.includes('到Animate'),'替换门店后两视图不残留默认交通');
 assert.equal(JSON.stringify(DETAILS),sourceNotes,'显示当前说明不修改原始资料');
 for(let i=0;i<PLAN.days.length;i++){
  const d=PLAN.days[i];dayIndex=i;dayView='timeline';
  const markup=dayPage();
  assert.equal(markup.split('class="stay-access"').length-1,d.overnight?1:0,'住宿入口放在顶部 '+d.date);
  assert.ok(!markup.includes('hotel-shortcut'),'移除底部重复住宿卡');
  assert.ok(daySupport(d).includes('资料来源'));
  for(const ev of effectiveEvents(d))assert.ok(!/\\d{1,2}:\\d{2}\\/\\d{1,2}:\\d{2}/.test(compactTime(ev.time_label)),'时间不堆叠备选时刻 '+ev.id);
 }
 assert.equal(compactTime('13:10—14:00/14:30'),'13:10出发');
 assert.equal(compactTime('14:15/14:30—15:30'),'约14:30–15:30');
 assert.equal(compactTime('当前候选05:47→06:28，临行复核'),'05:47→06:28 · 待复核');
 const finish=effectiveEvents(usj).find(ev=>ev.id==='usj_finish');
 assert.equal(finish.title,'游玩收尾');
 assert.ok(eventCard(usj,finish).includes('18:00后预留缓冲'));
 assert.ok(eventCard(usj,finish).includes('19:00并非统一离园时间'));
 assert.ok(eventCard(usj,finish).includes('部分餐饮需凭证'));
 assert.equal(statusLabel(effectiveEvents(usj).find(ev=>ev.id==='usj_transfer')),'','时间已标待确认时不重复标签');
 assert.equal(statusLabel(effectiveEvents(PLAN.days[7]).find(ev=>ev.id==='airport_train')),'','候选列车保留时间旁的复核提示');
 assert.equal(effectiveEvents(kyoto).find(ev=>ev.id==='higashiyama_walk').title,'东山散步');
 assert.ok(['sannenzaka','yasaka_tower','ninenzaka','nene'].every(id=>effectiveRoute(kyoto).some(n=>n.id===id)),'简短标题不删路线站点');
 assert.ok(effectiveEvents(PLAN.days[3]).find(e=>e.id==='inari_visit').condition.includes('奥社奉拜所'),'内部游览路线仍可查阅');
 assert.ok(effectiveEvents(PLAN.days[3]).find(ev=>ev.id==='checkin_osaka').condition.includes('30—45分钟'),'保留入住休息');
 assert.ok(effectiveEvents(usj).find(ev=>ev.id==='usj_rest').title.includes('30分钟'),'保留USJ休息');

 state.choices[uji.date]={};
 assert.equal(uji.departure_target,'09:00');
 assert.ok(!effectiveRoute(uji).some(n=>['jr_obaku','keihan_obaku','mimurodo'].includes(n.id)),'JR直达不再引导黄檗换乘');
 assert.equal(timedRoute(uji).find(n=>n.id==='jr_uji'&&n.eventId==='uji_return').purpose,'乘车回京都');
 assert.equal(DayFlow.forDay(uji).sections.flatMap(x=>x.scenePoints).filter(p=>p.event_id==='uji_pilgrimage').map(p=>p.id).join(','),'eupho_bench,eupho_kisen,eupho_asagiri','巡礼卡片按西岸到东岸排序');
 assert.ok(!timelinePage(uji).includes('提前到店'),'移除下午赶芭菲提示');
 assert.equal(returnTarget(uji),'20:15—20:35');
 const stamps=effectiveEvents(uji).filter(ev=>ev.rally_spot);
 assert.equal(stamps.map(ev=>ev.rally_spot).join(','),'agata,suikan');
 assert.ok(!effectiveRoute(uji).some(n=>n.id==='kohata'),'不再引导到许波多');
 assert.ok(['jr_uji','heiwa_books','keihan_uji'].every(id=>effectiveRoute(uji).some(n=>n.id===id)),'换乘与新增目的地均进入路线');
 assert.ok(uji.route_stop_ids.indexOf('nakamura')<uji.route_stop_ids.indexOf('agata'),'上午先芭菲再去河岸');
 assert.ok(eventCard(uji,effectiveEvents(uji).find(ev=>ev.id==='heiwa_visit')).includes('3F'),'书店楼层可见');
 assert.ok(rallyCard(uji).includes('不满足后期三章'),'不误导能领集合奖励');
 assert.ok(pilgrimagePage(uji).includes('/timeline/heiwa_visit'),'巡礼页可找到店铺行程');
 assert.ok(stamps.every(ev=>!ev.optional),'两个顺路集章点保留');
 assert.equal(effectiveEvents(uji).find(ev=>ev.id==='daikichi_visit').time_label,'14:15—15:30');
 assert.equal(uji.departure_target,'09:00','提前出门，保留游览时长');
 assert.equal(effectiveEvents(uji).find(ev=>ev.id==='uji_parfait').time_label,'10:00—11:15');
 assert.equal(effectiveEvents(kyoto).find(ev=>ev.id==='demachi_visit').time_label,'10:55—11:40');
 assert.ok(timelinePage(uji).includes('data-reset-scope="timeline"'));
 assert.ok(pilgrimagePage(uji).includes('data-reset-scope="pilgrimage"'));
 assert.equal(PILGRIMAGE.rally.spots.map(p=>p.id).join(','),'agata,suikan');
 assert.ok(rallyCard(uji).includes('后期'));
 assert.equal(rallyCard(PLAN.days[2]),'');
 assert.equal(effectiveRoute(uji).filter(n=>n.id==='agata').length,1);
 assert.equal(effectiveRoute(uji).filter(n=>n.id==='uji_bridge').length,2,'保留上午桥边拍照与晚间过桥');
 state.choices[uji.date]={skipByodoin:true};
 assert.ok(effectiveEvents(uji).some(ev=>ev.id==='uji_parfait'&&!ev.optional),'芭菲是主线');
 assert.equal(mealRows(uji,effectiveEvents(uji).find(ev=>ev.id==='uji_parfait'))[0][7],'nakamura');
 assert.ok(eventCard(uji,effectiveEvents(uji).find(ev=>ev.id==='uji_parfait')).includes('data-place="nakamura"'),'芭菲保留照片');
 assert.equal(effectiveRoute(uji).filter(n=>n.id==='nakamura').length,1);
 assert.ok(!optionalControls(uji).includes('平等院'));
 assert.ok(!PLAN.pending_checks.some(t=>/换日|互换/.test(t)));
 assert.ok(!state.todos['uji-cafes'],'旧换日待办不标成完成新餐饮待办');
 assert.ok(!effectiveEvents(uji).some(ev=>ev.id==='byodoin_visit'));
 assert.ok(!effectiveRoute(uji).some(n=>n.id==='byodoin'));
 assert.ok(effectiveRoute(uji).some(n=>n.id==='byodoin_approach'),'省收费区仍保留表参道');
 assert.ok(pilgrimagePlace('byodoin_approach').some(p=>p.id==='eupho_omotesando'),'表参道详情关联对应巡礼图');
 assert.ok(!pilgrimagePlace('byodoin').some(p=>p.id==='eupho_omotesando'),'不把表参道绑定到收费区');
 assert.ok(PHOTOS.byodoin_approach?.local,'表参道路线显示实景缩略图');
 assert.ok(!PILGRIMAGE.coverage.some(p=>p.title==='京都塔'||p.place_id==='kotosaka'),'不展示已取消支线说明');
 assert.ok(!rallyCard(uji).includes('调整今天'),'必选集章不提供无关调整入口');
 assert.ok(!daySupport(uji).includes('原始方案'),'当前攻略不再标成旧方案');
 assert.equal(effectiveEvents(uji).filter(ev=>ev.rally_spot).length,2);
 assert.equal(effectiveEvents(uji).find(ev=>ev.id==='uji_saizeriya_dinner').time_label,'18:00—19:00');
 assert.equal(returnTarget(uji),'20:15—20:35');
 assert.equal(shotProgress(uji.date).total,12,'公共街道与舞台巡礼均计入主线');
 state.choices[uji.date]={};
 const lockedPlan=JSON.stringify(PLAN);
 const configurations=[
  [uji,[{ujiExtra:'agata'},{ujiExtra:'none'},{ujiExtra:'tower'},{ujiExtra:'kotosaka'},{ujiExtra:'station'},{byodoinInterior:true},{skipByodoin:true},{skipByodoin:true,ujiExtra:'station'}]],
  [kyoto,[{kodaijiPlan:'night'},{kodaijiPlan:'night',yasakaBrief:true},{kodaijiPlan:'skip'}]],
  [usj,[{usjExtra:false,kinopio:false},{usjExtra:true,kinopio:true}]],
  [nara,[{shop1:'animate',shop2:'none'},{shop1:'potato',shop2:'surugaya_main'},{spaworldEvening:true},{shop1:'potato',shop2:'none',spaworldEvening:true}]],
  [kobe,[{kobeAfternoon:'harbor'},{kobeAfternoon:'umeda',umedaMain:'pokemon_osaka',umedaSecond:true}]]
 ];
 for(const [day,options] of configurations)for(const selected of options){
  state.choices[day.date]=selected;
  for(const ev of effectiveEvents(day))assert.ok(timelinePage(day).includes('data-event="'+ev.id+'"'));
  assert.ok(routeGroups(day).flatMap(group=>group.stops).every(stop=>stop.times.length));
  if(!day.optional.length)assert.equal(optionalControls(day),'');else assert.ok(optionalControls(day).length);
 }
 state.choices[nara.date]={};
 const beforeSpa=JSON.stringify(effectiveEvents(nara)),beforeRoute=JSON.stringify(effectiveRoute(nara)),beforeChecks=JSON.stringify(state.checks);
 state.choices[nara.date]={spaworldEvening:true};state.checks[nara.date+':spaworld_visit']=true;
 assert.equal(JSON.stringify(effectiveEvents(nara)),beforeSpa,'旧泡汤选择不改动已确认的晚归主线');
 assert.equal(JSON.stringify(effectiveRoute(nara)),beforeRoute,'旧泡汤选择不恢复冲突路线');
 assert.ok(!optionalControls(nara).includes('泡汤'),'不再提供时间冲突的泡汤安排');
 assert.equal(state.checks[nara.date+':spaworld_visit'],true,'保留旧泡汤完成记录');
 delete state.checks[nara.date+':spaworld_visit'];
 assert.equal(JSON.stringify(state.checks),beforeChecks,'不更改其他完成记录');
 assert.equal(returnTarget(nara),'21:30—21:45');
 state.choices[nara.date]={};
 assert.equal(JSON.stringify(PLAN),lockedPlan,'文案调整和方案切换不改变原始行程');
 ({checked,legacyProgressPreserved:true,oldGionSelectionIgnored:true,kodaijiSkipAndRestore:true,yasakaWithinExistingWindow:true,ujiStampsAlongRoute:true,ujiLegacySelectionMigration:true,byodoinRetired:true,shopReplacement:true,retiredUmedaChoicesIgnored:true,lateStartNara:true,kobeLunchAndRoundTrip:true,oldHarborSelectionIgnored:true,flightSingleSource:true});
 `,scope);
fs.writeFileSync(path.join(root,'检查记录/改版行程规则检查.json'),JSON.stringify({checkedAt:new Date().toISOString(),...results},null,2));
console.log(JSON.stringify(results));
