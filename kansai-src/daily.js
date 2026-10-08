/* Daily presentation. DayFlow owns grouping; app.js owns itinerary choices. */
function currentChoiceText(d){const c=choice(d),labels=[];
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')labels.push('晚餐后休息');else if(c.yasakaBrief)labels.push('八坂神社短停');}
 if(d.date==='2026-12-04'){if(c.usjExtra)labels.push('增加游乐项目');if(c.kinopio)labels.push('午餐改为Kinopio');}
 if(d.date==='2026-12-05'&&(c.shop1!=='animate'||c.shop2!=='surugaya'))labels.push('购物：'+selectedShops(c).map(id=>PLACE[id].name).join('＋'));
 if(d.date==='2026-12-05'&&c.spaworldEvening)labels.push('晚间泡汤');
 return labels.join(' · ');
}
function dayPage(){const d=PLAN.days[dayIndex],info=dayPresentation(d);return `
 ${dates()}<header class="day-heading"><div><p class="eyebrow">DAY ${String(dayIndex+1).padStart(2,'0')} · ${d.weekday}<span class="heading-intensity">强度 · ${e(d.intensity.split('；')[0])}</span></p><h1>${e(info.short)}</h1></div><button class="day-heading-photo" data-action="place" data-place="${info.cover}" aria-label="查看${e(PLACE[info.cover].name)}照片">${photo(info.cover,'','eager','120px')}</button></header>
 <div class="day-facts"><div><span>${dayIndex===0?'去程航班':'离店'}</span><strong>${dayIndex===0?e(flightDeparture('flight_out')):e(compactTime(d.departure_target||'开园时间待确认'))}</strong></div><div>${d.overnight?`<button class="stay-access" data-action="place" data-place="${d.overnight}" aria-label="${dayIndex===0?'入住':'返店'} ${e(compactTime(returnTarget(d)))}，查看${e(PLACE[d.overnight].name)}详情"><span>${dayIndex===0?'入住':'返店'}</span><strong>${dayIndex===0?'19:00–20:00':e(compactTime(returnTarget(d)))}</strong>${icon('pin')}</button>`:`<span>回程航班</span><strong>${e(flightDeparture('flight_home'))}</strong>`}</div></div>
 <div class="daily-toolbar"><nav class="view-tabs" aria-label="当天查看方式">${pageLink(icon('list')+'行程',dayHash(dayIndex),'view-tab'+(dayView==='timeline'?' active':''),dayView==='timeline'?'aria-current="page"':'')}${pageLink(icon('map')+'路线',dayHash(dayIndex,'route'),'view-tab'+(dayView==='route'?' active':''),dayView==='route'?'aria-current="page"':'')}${pilgrimageDay(d.date).length?pageLink(icon('pin')+'巡礼',dayHash(dayIndex,'pilgrimage'),'view-tab'+(dayView==='pilgrimage'?' active':''),dayView==='pilgrimage'?'aria-current="page"':''):''}</nav>${d.optional.length?btn(icon('tune')+'可选安排','options','','small'):''}</div>
 ${currentChoiceText(d)?`<p class="selected-choice">${icon('tune')}${e(currentChoiceText(d))}</p>`:''}
 <div class="day-layout"><div class="day-main">${dayView==='pilgrimage'?pilgrimagePage(d):dayView==='route'?routePage(d):timelinePage(d)}</div>${dayView==='pilgrimage'?'':daySupport(d)}</div>
 <nav class="prev-next" aria-label="相邻日期">${dayIndex>0?pageLink('← '+dateLabel(PLAN.days[dayIndex-1].date)+' 前一天',dayHash(dayIndex-1,dayView),'text-link'):pageLink('← 全程','#overview','text-link')}${dayIndex<7?pageLink(dateLabel(PLAN.days[dayIndex+1].date)+' 后一天 →',dayHash(dayIndex+1,dayView),'text-link'):pageLink('临行待办 →','#prep','text-link')}</nav>`;}
function progressMarkup(d){const flow=DayFlow.forDay(d);return `<span id="progress-text">已完成 <strong>${flow.done} / ${flow.total}</strong></span><div class="progress-track" role="progressbar" aria-label="当天活动完成进度" aria-valuemin="0" aria-valuemax="${flow.total}" aria-valuenow="${flow.done}"><span style="width:${flow.done/flow.total*100}%"></span></div>${resumeLink(d)}`;}
function refreshDayProgress(d){const area=document.querySelector('.progress-area');if(area)area.innerHTML=progressMarkup(d);}
function timelinePage(d){const flow=DayFlow.forDay(d);return `
 <div class="progress-area">${progressMarkup(d)}</div>
 <div class="timeline">${flow.sections.map(section=>`<section class="timeline-phase" id="${section.id}"><div class="phase-heading"><h2>${e(section.short)}</h2></div>${section.events.map(ev=>eventCard(d,ev)).join('')}</section>`).join('')}</div>
 <div class="day-end">${btn(icon('reset')+'重置当天行程','reset-day','data-reset-scope="timeline"','text-button')}</div>`;}

function eventCard(d,ev){
 const checked=!!state.checks[d.date+':'+ev.id],isMeal=ev.category==='meal',isRest=ev.category==='rest';
 const compact=ev.category==='transport'||(isRest&&ev.place_ids.every(id=>id.startsWith('hotel_')||id==='usj'))||['nakamura_walk','usj_app','usj_finish'].includes(ev.id);
 const imageIds=compact?[]:ev.place_ids.filter(id=>photoSrc(id)&&(!isMeal||PLACE[id].category==='restaurant'));
 const restaurantPhoto=imageIds.length===1&&PLACE[imageIds[0]].category==='restaurant';
 const foodRows=mealRows(d,ev),first=foodRows.find(r=>r[1]==='首选');
 return `<article id="event-${ev.id}" class="event ${compact?'compact-event':''} ${checked?'done':''} ${ev.optional?'optional':''} ${ev.category==='transport'?'transport-event':''} ${isRest?'rest-event':''}" data-event="${ev.id}"><label class="event-check"><input type="checkbox" data-event-check="${ev.id}" ${checked?'checked':''} aria-label="完成：${e(ev.title)}"><span aria-hidden="true">${icon('check')}</span></label><div class="event-content"><div class="event-meta">${ev.time_hint?`<span class="time-hint">${e(ev.time_hint)}</span>`:''}<span class="event-time">${e(compactTime(ev.time_label))}</span>${ev.optional?'<span class="pill gold">可选</span>':''}${statusLabel(ev)}</div><h3>${e(ev.title)}</h3>
 ${ev.condition?`<p class="condition">${e(ev.condition)}</p>`:''}${ev.optionNote?`<p class="selection-note">${e(ev.optionNote)}</p>`:''}${executionNotice(d,ev)}
 <div class="event-body ${imageIds.length===1?'has-single-photo':''} ${restaurantPhoto?'restaurant-photo':''}">
 ${imageIds.length?`<div class="event-photos ${imageIds.length===1?'single-photo':''}" style="--photo-columns:${Math.min(imageIds.length,3)}">${imageIds.map(id=>activityPhoto(id,'',isMeal&&PLACE[id].category!=='restaurant'?'用餐周边 · ':'',id!==first?.[7]&&(imageIds.length!==1||PLACE[id].name!==ev.title))).join('')}</div>`:''}
 <div class="event-summary">${pilgrimageEventLinks(d,ev)}
 ${ev.category==='hotel'&&ev.place_ids[0]?`<div class="checkin-address"><strong lang="ja">${e(PLACE[ev.place_ids[0]].name_ja)}</strong><p lang="ja">${e(PLACE[ev.place_ids[0]].address_ja||'')}</p></div>`:''}
 ${first?`<p class="meal-preview">${e(first[2])}<small>${e(first[3])}${first[3].includes('菜单')?'':' / 人'}</small></p>`:''}

 ${isMeal&&first&&first[0]!=='早餐'?`<div class="meal-map">${external(icon('map')+(first[8]?.pending?'查看餐饮区域':'地图'),mealMap(d,first),'text-link')}</div>`:''}
 </div></div>
 ${ev.id==='kodaiji_night'?`<p class="night-facts">17:00亮灯 · ¥800 / 人 <span>购票待确认</span></p><details class="event-detail"><summary>参拜详情</summary><div class="detail-body"><p>游览约60—75分钟，排队另计。</p><p>活动期2026/10/23—12/13；21:30停止入场，22:00闭门。昼夜不清场，离场后同票不能再入。</p><p>${external('活动官网 ↗','https://www.kodaiji.com/saiji.html')} · ${external('票价 ↗','https://www.kodaiji.com/haikan.html')}</p></div></details>`:''}
 ${foodRows.length?`<details class="event-detail"><summary>${isRest?'茶歇详情':'餐厅详情'}</summary><div class="detail-body">${foodRows.map(r=>foodRow(d,r)).join('')}</div></details>`:''}
 ${rallyActions(ev)}${eventNavigation(ev,d)}${transportMaps(ev)}${transportDetail(d,ev)}${activityDetails(d,ev.id)}${foodSuggestions(d,ev.id)}
 </div></article>`;
}
const TRANSPORT_AT_EVENT={
 flight_out:[3],arrival_transfer:[0,1],checkin_kyoto:[2],uji_transfer:[0],uji_pilgrimage:[1],suikan_stamp:[2],uji_return:[3],
 demachi_transfer:[0],kiyomizu_transfer:[1,2],higashiyama_walk:[3],kyoto_night_return:[4],
 kyoto_tower_transfer:[0],inari_transfer:[1],luggage_pickup:[2],osaka_transfer:[3],osaka_evening_return:[4],usj_transfer:[0,1],usj_app:[2],usj_lunch:[3],
 castle_transfer:[0],nara_transfer:[1],nara_return_train:[2],nara_day_return:[4],
 kobe_transfer:[0],kitano_lunch:[1],sannomiya_shopping:[2],kobe_bridge_visit:[3],last_evening_return:[4],
 checkout_osaka:[0],airport_train:[1,2],airport_checkin:[3],usj_dinner:[4]
};
function transportDetail(d,ev){const indexes=TRANSPORT_AT_EVENT[ev.id];
 const notes=(indexes||[]).map(i=>DETAILS[d.date].transport[i]).filter(Boolean);
 if(ev.id==='anime_shopping'&&choice(d).shop1==='animate'&&choice(d).shop2==='surugaya')notes.push(DETAILS[d.date].transport[3]);
 if(ev.id==='spaworld_visit')notes.push('泡汤前先回酒店放购物袋、整理主要行李；步行到SPAWORLD及返店各预留10—15分钟，无需乘车。');
 if(!notes.length)return '';
 return `<div class="transport-detail" aria-label="交通说明"><ul class="detail-body">${notes.map(n=>`<li>${e(n)}</li>`).join('')}</ul></div>`;
}
function mealRows(d,ev){
 const name=['gion_rest','uji_parfait'].includes(ev.id)?'茶歇':ev.category==='meal'?(/dinner/.test(ev.id)?'晚餐':/lunch/.test(ev.id)?'午餐':'早餐'):'';
 const rows=DETAILS[d.date].meals.filter(r=>r[0]===name);
 if(ev.id==='usj_lunch'&&choice(d).kinopio){
  // One selection drives the preview, budget, map and expanded alternatives.
  const selected=rows.find(r=>r[2]==='キノピオ・カフェ');
  return [[selected[0],'首选',...selected.slice(2)],...rows.filter(r=>r!==selected&&r[1]!=='可选').map(r=>[r[0],'备选',...r.slice(2)])];
 }
 return rows.filter(r=>r[1]!=='可选');
}
function mealMap(d,r){if(r[7]&&PLACE[r[7]])return PLACE[r[7]].map_search_url;let city=d.cities.includes('宇治')&&['午餐','晚餐'].includes(r[0])?'宇治':d.date==='2026-12-05'&&r[0]==='午餐'?'奈良':d.date==='2026-12-06'&&r[0]==='午餐'?'神戸':d.date==='2026-12-03'&&r[0]==='午餐'?'京都':d.overnight==='hotel_kyoto'?'京都':'大阪';if(r[2].startsWith('通圓'))city='宇治';return mapURL(city+' '+r[2]);}
function foodRow(d,r){return `<article class="food-row"><span class="food-priority">${e(r[0])} · ${e(r[1])}</span><h4 lang="ja">${e(r[2])}</h4>${r[1]!=='首选'&&r[7]&&photoSrc(r[7])?photoButton(r[7],'food-row-photo'):''}<p class="budget">${e(r[3])}${r[3].includes('菜单')?'':' / 人'}</p><p>${e(r[4])}</p><p class="muted">${e(r[5])}</p><div class="food-actions">${r[8]?.pending?'':btn(icon('copy')+'复制名称','copy',`data-copy="${e(r[2])}"`,'text-button')}${r[0]!=='早餐'?external(icon('map')+(r[8]?.pending?'查看餐饮区域':'地图'),mealMap(d,r),'text-link'):''}${r[6]?external('店铺资料 ↗',r[6],'text-link'):''}</div></article>`;}

function routeTimeMarkup(times){return times.map(t=>`<div class="route-time"><strong>${e(compactTime(t.text))}</strong><span>${e(t.label==='同段共用'?'游览':t.label)}</span></div>`).join('');}
// Keep necessary actions that share a place visible between route stops.
function routeActionsBetween(d,groups){
 const events=effectiveEvents(d),represented=new Set(groups.flatMap(g=>[g.eventId,...g.stops.flatMap(s=>s.times.map(t=>t.eventId))])),buckets=Array.from({length:groups.length+1},()=>[]);
 for(const ev of events){
  const beforeArrival=['usj_dinner','flight_home'].includes(ev.id);
  if(represented.has(ev.id)&&!beforeArrival)continue;
  const rank=events.indexOf(ev),next=groups.findIndex(g=>events.findIndex(item=>item.id===g.eventId)>rank||(beforeArrival&&g.eventId===ev.id));
  buckets[next<0?groups.length:next].push(ev);
 }
 return buckets.map(items=>items.map(ev=>`<div class="route-action-step">${pageLink(`<span>${e(compactTime(ev.time_label))}</span><strong>${e(ev.title)}</strong>${icon('chevron')}`,`#day/${d.date}/timeline/${ev.id}`)}${routeEventContext(d,ev.id)}${eventNavigation(ev,d,true)}</div>`).join(''));
}
function routeEventContext(d,eventId){const ev=effectiveEvents(d).find(ev=>ev.id===eventId);if(!ev)return '';
 return `<div class="route-context">${ev.condition?`<p class="condition">${e(ev.condition)}</p>`:''}${ev.optionNote?`<p class="selection-note">${e(ev.optionNote)}</p>`:''}${executionNotice(d,ev)}${transportDetail(d,ev)}${transportMaps(ev)}</div>`;
}
function routePage(d){const groups=routeGroups(d),between=routeActionsBetween(d,groups),shown=new Set(['usj_dinner','flight_home']);
 const context=group=>[...new Set([group.eventId,...group.stops.flatMap(stop=>stop.times.map(time=>time.eventId))])].filter(id=>id&&!shown.has(id)).map(id=>{shown.add(id);return routeEventContext(d,id);}).join('');
 return `
 <div class="route-head" id="route-content"><h2>路线示意</h2></div>

 <div class="route-groups">${groups.map((group,g)=>`${between[g]}${g===0||groups[g-1].phase!==group.phase?`<h3 class="route-phase">${e(group.phase)}</h3>`:''}<section class="route-window" aria-labelledby="route-window-${g}"><header class="route-window-time" id="route-window-${g}">${routeTimeMarkup(group.times)}</header>${context(group)}<ol class="route-stops" start="${group.stops[0].index+1}">${group.stops.map(s=>{
 const p=PLACE[s.id],extra=s.times.filter(t=>!group.times.some(common=>routeTimeKey(common)===routeTimeKey(t))),purpose=s.purpose&&!group.times.some(t=>t.label===s.purpose)?s.purpose:!s.purpose&&s.seen?'再次经过':'';
 return `<li class="route-stop ${s.seen?'return-stop':''} ${s.optional?'optional':''}" value="${s.index+1}" data-route-id="${s.id}" data-phase="${e(s.phase)}"><div class="route-item"><span class="route-number" aria-hidden="true">${s.index+1}</span><div class="route-copy"><strong>${e(p.name)}</strong>${p.name_ja!==p.name?`<small lang="ja">${e(p.name_ja)}</small>`:''}${PLACE_LOCATIONS[s.id]?`<small class="place-location">${e(PLACE_LOCATIONS[s.id])}</small>`:''}${extra.length?`<div class="route-extra-time">${routeTimeMarkup(extra)}</div>`:''}${purpose?`<span class="return-label">${e(purpose)}</span>`:''}${s.optional?'<span class="return-label">可选</span>':''}</div><div class="route-actions">${external(icon('pin')+'地图',p.map_search_url,'route-map')}</div></div></li>`;}).join('')}</ol></section>`).join('')}${between[groups.length]}</div>`;}
function daySupport(d){return `<aside class="day-support" id="day-support"><details class="support-card"><summary><span>行程提示</span></summary><ul class="detail-body">${dayNotes(d).map(t=>`<li>${e(t)}</li>`).join('')}</ul></details><details class="support-card source-disclosure"><summary><span>资料来源</span></summary><div class="detail-body">${guideSources(d)}</div></details></aside>`;}


function foodIdea(item){const p=PLACE[item.place],showPhoto=photoSrc(item.place)&&!item.hidePhoto;return `<article class="food-idea ${showPhoto?'with-photo':''}">${showPhoto?photoButton(item.place,'food-idea-photo'):''}<div><span class="food-priority">${e(item.label)}</span><h4>${e(item.title)}</h4><p class="food-name" lang="ja">${e(p.name_ja)}</p><p>${e(item.text)}</p><small>${e(item.budget)}</small><div class="food-actions">${external(icon('pin')+'地图',p.map_search_url,'text-link')}${btn(icon('copy')+'复制名称','copy',`data-copy="${e(p.name_ja)}"`,'text-button')}${external('店铺资料 ↗',item.source,'text-link')}</div></div></article>`;}

function dayFallbacks(d){const c=choice(d);return d.fallback_rules.flatMap(t=>{
 if(d.date==='2026-12-02'){
  if(t.includes('高台寺')&&c.kodaijiPlan==='skip')return [];
  if(t.includes('八坂神社'))return c.kodaijiPlan==='night'&&c.yasakaBrief?[t]:['晚饭长队时换简餐；おめん20:00最后点餐。'];
  if(t.startsWith('不再排'))return [];
 }
 return [t];
});}
function dayNotes(d){const c=choice(d);const extra=(DETAILS[d.date].extra||[]).flatMap(t=>{
 if(d.date==='2026-12-02'&&t.startsWith('本次只安排'))return [];
 if(d.date==='2026-12-05'&&t.startsWith('日本桥默认'))return ['日本桥购物限1—2家，替换不增加总数；中古作品库存不保证。'];
 return [t];
});if(d.date==='2026-12-05'&&c.spaworldEvening)extra.push(d.optional.find(o=>o.id==='spaworld_evening').rule);return [...dayFallbacks(d),...extra];}
function foodSuggestions(d,eventId){
 const info=DETAILS[d.date];
 const candidates=(info.foodIdeas||[]).filter(item=>item.event_id===eventId);
 const along=info.eventFood?.[eventId]||[];
 return [...candidates,...along].map(item=>`<details class="event-detail food-suggestions"><summary>${e('甜品备选 · '+item.title)}</summary><div class="detail-body">${foodIdea(item)}</div></details>`).join('');
}

function activityDetails(d,id){
 const info=DETAILS[d.date].eventDetails?.[id];if(!info)return '';
 const selected=id==='anime_shopping'?selectedShops(choice(d)):null;
 const items=selected?[
  ...selected.map(placeId=>info.items.find(item=>item.place_id===placeId)).filter(Boolean),
  ...info.items.filter(item=>!item.place_id)
 ]:info.items;
 return `<details class="event-detail"><summary>${e(info.title)}</summary><ul class="detail-body">${items.map(item=>`<li>${e(item.text)}${item.url?' '+external('资料 ↗',item.url):''}</li>`).join('')}</ul></details>`;
}

function guideSources(d){
 const seen=new Set(),links=[];
 for(const match of (GUIDES[d.date]||'').matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)){
  const [_,label,url]=match;
  if(seen.has(url)||url.includes('google.com/maps'))continue;
  seen.add(url);
  const host=url.match(/^https?:\/\/([^/]+)/)?.[1]||'';
  const meal=DETAILS[d.date].meals.find(r=>r[6]&&r[6].includes(host));
  const venue=meal?.[2]||({'www.kodaiji.com':'高台寺','www.keihan.co.jp':'京阪','app.raund.net':'京吹集章','tokichi.jp':'中村藤吉','www.usj.co.jp':'USJ'})[host]||host;
  const title=/^(活动官网|参拜与票价|参加集章|门店官网|门店|官网|营业|菜单|餐饮官网|备选官网|品牌产品)$/.test(label)?venue+' · '+label:label;
  links.push(external(e(title)+' ↗',url));
 }
 return links.length?`<ul class="source-links">${links.map(link=>`<li>${link}</li>`).join('')}</ul>`:'<p>来源见各活动详情。</p>';
}
