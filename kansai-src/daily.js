/* Daily presentation. DayFlow owns grouping; app.js owns itinerary choices. */
function currentChoiceText(d){const c=choice(d),labels=[];
 if(d.date==='2026-12-01'){if(c.ujiExtra==='tower')labels.push('京都塔 · 晚餐改在京都站');if(c.ujiExtra==='kotosaka')labels.push('琴坂');if(c.ujiExtra==='station')labels.push('京都站《宝岛》');if(c.byodoinInterior)labels.push('凤凰堂内部参拜');}
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')labels.push('取消夜枫 · 饭后返店');else if(c.yasakaBrief)labels.push('八坂神社短停');}
 if(d.date==='2026-12-04'){if(c.usjExtra)labels.push('增加游乐项目');if(c.kinopio)labels.push('午餐改为Kinopio');}
 if(d.date==='2026-12-05'&&(c.shop1!=='animate'||c.shop2!=='surugaya'))labels.push('购物：'+selectedShops(c).map(id=>PLACE[id].name).join('＋'));
 if(d.date==='2026-12-06'){if(c.kobeAfternoon==='harbor')return '神户港咖啡 · 替换梅田购物';if(c.umedaMain!=='nintendo_osaka')labels.push('Pokémon重点逛');if(c.umedaSecond)labels.push('另一家短看');}
 return labels.join(' · ');
}
function dayPage(){const d=PLAN.days[dayIndex],info=dayPresentation(d);return `
 ${dates()}<header class="day-heading"><div><p class="eyebrow">DAY ${String(dayIndex+1).padStart(2,'0')} · ${d.weekday}<span class="heading-intensity">强度 · ${e(d.intensity.split('；')[0])}</span></p><h1>${e(info.short)}</h1></div><button class="day-heading-photo" data-action="place" data-place="${info.cover}" aria-label="查看${e(PLACE[info.cover].name)}照片">${photo(info.cover,'','eager','120px')}</button></header>
 <div class="day-facts"><div><span>${dayIndex===0?'去程航班':'离店'}</span><strong>${dayIndex===0?e(flightDeparture('flight_out')):e(compactTime(d.departure_target||'开园时间待确认'))}</strong></div><div>${d.overnight?`<button class="stay-access" data-action="place" data-place="${d.overnight}" aria-label="${dayIndex===0?'入住':'返店'} ${e(compactTime(returnTarget(d)))}，查看${e(PLACE[d.overnight].name)}详情"><span>${dayIndex===0?'入住':'返店'}</span><strong>${dayIndex===0?'19:00–20:00':e(compactTime(returnTarget(d)))}</strong>${icon('pin')}</button>`:`<span>回程航班</span><strong>${e(flightDeparture('flight_home'))}</strong>`}</div></div>
 <div class="daily-toolbar"><nav class="view-tabs" aria-label="当天查看方式">${pageLink(icon('list')+'行程',dayHash(dayIndex),'view-tab'+(dayView==='timeline'?' active':''),dayView==='timeline'?'aria-current="page"':'')}${pageLink(icon('map')+'路线',dayHash(dayIndex,'route'),'view-tab'+(dayView==='route'?' active':''),dayView==='route'?'aria-current="page"':'')}${pilgrimageDay(d.date).length?pageLink(icon('pin')+'巡礼',dayHash(dayIndex,'pilgrimage'),'view-tab'+(dayView==='pilgrimage'?' active':''),dayView==='pilgrimage'?'aria-current="page"':''):''}</nav>${d.optional.length?btn(icon('tune')+'调整今天','options','','small'):''}</div>
 ${currentChoiceText(d)?`<p class="selected-choice">${icon('tune')}${e(currentChoiceText(d))}</p>`:''}
 <div class="day-layout"><div class="day-main">${dayView==='pilgrimage'?pilgrimagePage(d):dayView==='route'?routePage(d):timelinePage(d)}</div>${dayView==='pilgrimage'?'':daySupport(d)}</div>
 <nav class="prev-next" aria-label="相邻日期">${dayIndex>0?pageLink('← '+dateLabel(PLAN.days[dayIndex-1].date)+' 前一天',dayHash(dayIndex-1,dayView),'text-link'):pageLink('← 全程','#overview','text-link')}${dayIndex<7?pageLink(dateLabel(PLAN.days[dayIndex+1].date)+' 后一天 →',dayHash(dayIndex+1,dayView),'text-link'):pageLink('临行待办 →','#prep','text-link')}</nav>`;}
function progressMarkup(d){const flow=DayFlow.forDay(d);return `<span id="progress-text">已完成 <strong>${flow.done} / ${flow.total}</strong></span><div class="progress-track" role="progressbar" aria-label="当天活动完成进度" aria-valuemin="0" aria-valuemax="${flow.total}" aria-valuenow="${flow.done}"><span style="width:${flow.done/flow.total*100}%"></span></div>`;}
function refreshDayProgress(d){const area=document.querySelector('.progress-area');if(area)area.innerHTML=progressMarkup(d);}
function timelinePage(d){const flow=DayFlow.forDay(d),shownPhotos=new Set();return `
 <div class="progress-area">${progressMarkup(d)}</div>
 <div class="timeline">${flow.sections.map(section=>`<section class="timeline-phase" id="${section.id}"><div class="phase-heading"><h2>${e(section.short)}</h2></div>${section.events.map(ev=>eventCard(d,ev,shownPhotos)).join('')}</section>`).join('')}</div>
 <div class="day-end">${btn(icon('reset')+'重置当天进度','reset-day','','text-button')}</div>`;}

function eventCard(d,ev,shownPhotos=new Set()){
 const checked=!!state.checks[d.date+':'+ev.id],isMeal=ev.category==='meal',isRest=ev.category==='rest';
 const compact=ev.category==='transport'||(isRest&&ev.place_ids.every(id=>id.startsWith('hotel_')||id==='usj'))||['sky_transfer','usj_app','usj_finish'].includes(ev.id);
 const imageIds=compact?[]:ev.place_ids.filter(id=>photoSrc(id)&&!shownPhotos.has(id)&&(!isMeal||PLACE[id].category==='restaurant'));
 imageIds.forEach(id=>shownPhotos.add(id));
 const restaurantPhoto=imageIds.length===1&&PLACE[imageIds[0]].category==='restaurant';
 const foodRows=mealRows(d,ev),first=foodRows.find(r=>r[1]==='首选');
 return `<article id="event-${ev.id}" class="event ${compact?'compact-event':''} ${checked?'done':''} ${ev.optional?'optional':''} ${ev.category==='transport'?'transport-event':''} ${isRest?'rest-event':''}" data-event="${ev.id}"><label class="event-check"><input type="checkbox" data-event-check="${ev.id}" ${checked?'checked':''} aria-label="完成：${e(ev.title)}"><span aria-hidden="true">${icon('check')}</span></label><div class="event-content"><div class="event-meta"><span class="event-time">${e(compactTime(ev.time_label))}</span><span class="event-type">${types[ev.category]||'活动'}</span>${ev.optional?'<span class="pill gold">可选</span>':''}${statusLabel(ev)}</div><h3>${e(ev.title)}</h3>
 ${ev.condition&&!isMeal?`<p class="condition">${e(ev.condition)}</p>`:''}${ev.optionNote?`<p class="selection-note">${e(ev.optionNote)}</p>`:''}
 <div class="event-body ${imageIds.length===1?'has-single-photo':''} ${restaurantPhoto?'restaurant-photo':''}">
 ${imageIds.length?`<div class="event-photos ${imageIds.length===1?'single-photo':''}" style="--photo-columns:${Math.min(imageIds.length,3)}">${imageIds.map(id=>photoButton(id,'',isMeal&&PLACE[id].category!=='restaurant'?'用餐周边 · ':'',imageIds.length!==1||PLACE[id].name!==ev.title)).join('')}</div>`:''}
 <div class="event-summary">${pilgrimageEventLinks(d,ev)}
 ${ev.category==='hotel'&&ev.place_ids[0]?`<div class="checkin-address"><strong lang="ja">${e(PLACE[ev.place_ids[0]].name_ja)}</strong><p lang="ja">${e(PLACE[ev.place_ids[0]].address_ja||'')}</p></div>`:''}
 ${first?`<p class="meal-preview">${e(first[2])}<small>${e(first[3])} / 人</small></p>`:''}
 ${!isMeal&&!compact&&(ev.place_ids.some(id=>!imageIds.includes(id))||(ev.place_ids.length===1&&(!isRest||restaurantPhoto)))?`<div class="event-places">${ev.place_ids.filter(id=>!imageIds.includes(id)).map(placeButton).join('')}${ev.place_ids.length===1&&(!isRest||restaurantPhoto)?external(icon('map')+'地图',PLACE[ev.place_ids[0]].map_search_url,'place-map'):''}</div>`:''}
 ${isMeal&&first&&first[0]!=='早餐'?`<div class="meal-map">${external(icon('map')+'地图',mealMap(d,first),'text-link')}</div>`:''}
 </div></div>
 ${ev.id==='kodaiji_night'?`<p class="night-facts">17:00亮灯 · ¥800 / 人 <span>购票待确认</span></p><details class="event-detail"><summary>参拜详情</summary><div class="detail-body"><p>游览约60—75分钟，排队另计。若稍有延迟，18:45前离寺，省去八坂神社并顺延晚餐。</p><p>17:45仍未入场、预计排队超过30分钟，或天气差、明显疲劳时，取消夜枫，直接吃饭。</p><p>2026/10/23—12/13，17:00亮灯；21:30停止入场，22:00闭门。两人门票合计¥1,600。昼夜不清场，离场后同票不能再入。</p><p>${external('活动官网 ↗','https://www.kodaiji.com/saiji.html')} · ${external('票价 ↗','https://www.kodaiji.com/haikan.html')}</p></div></details>`:''}
 ${foodRows.length?`<details class="event-detail"><summary>${isRest?'茶歇详情':'餐厅详情'}</summary><div class="detail-body">${isMeal&&ev.condition?`<p>${e(ev.condition)}</p>`:''}${foodRows.map(r=>foodRow(d,r)).join('')}</div></details>`:''}
 ${foodSuggestions(d,ev.id)}
 ${ev.id==='usj_finish'?'<p class="condition">18:00后预留缓冲，19:00前结束普通票设施体验。19:00—22:00 Amex活动设施及部分餐饮需凭证，19:00并非统一离园时间。</p>':''}
 </div></article>`;
}
function mealRows(d,ev){
 const name=ev.id==='gion_rest'?'茶歇':ev.category==='meal'?(/dinner/.test(ev.id)?'晚餐':/lunch/.test(ev.id)?'午餐':'早餐'):'';
 const rows=(ev.id==='tower_dinner'?DETAILS[d.date].towerMeals:DETAILS[d.date].meals).filter(r=>r[0]===name);
 if(ev.id==='usj_lunch'&&choice(d).kinopio){
  // One selection drives the preview, budget, map and expanded alternatives.
  const selected=rows.find(r=>r[2]==='キノピオ・カフェ');
  return [[selected[0],'首选',...selected.slice(2)],...rows.filter(r=>r!==selected&&r[1]!=='可选').map(r=>[r[0],'备选',...r.slice(2)])];
 }
 return rows.filter(r=>r[1]!=='可选').map(r=>d.date==='2026-12-06'&&choice(d).kobeAfternoon==='harbor'&&r[0]==='午餐'?[...r.slice(0,5),r[5].replace('便于餐后返大阪',''),...r.slice(6)]:r);
}
function mealMap(d,r){if(r[7]&&PLACE[r[7]])return PLACE[r[7]].map_search_url;let city=d.cities.includes('宇治')&&(r[0]==='午餐'||(r[0]==='晚餐'&&choice(d).ujiExtra!=='tower'))?'宇治':d.date==='2026-12-05'&&r[0]==='午餐'?'奈良':d.date==='2026-12-06'&&r[0]==='午餐'?'神戸':d.date==='2026-12-03'&&r[0]==='午餐'?'京都':d.overnight==='hotel_kyoto'?'京都':'大阪';if(r[2].startsWith('通圓'))city='宇治';return mapURL(city+' '+r[2]);}
function foodRow(d,r){return `<article class="food-row"><span class="food-priority">${e(r[0])} · ${e(r[1])}</span><h4 lang="ja">${e(r[2])}</h4>${r[1]!=='首选'&&r[7]&&photoSrc(r[7])?photoButton(r[7],'food-row-photo'):''}<p class="budget">${e(r[3])} / 人</p><p>${e(r[4])}</p><p class="muted">${e(r[5])}</p><div class="food-actions">${btn(icon('copy')+'复制日文名','copy',`data-copy="${e(r[2])}"`,'text-button')}${r[0]!=='早餐'?external(icon('map')+'地图',mealMap(d,r),'text-link'):''}${r[6]?external('店铺资料 ↗',r[6],'text-link'):''}</div></article>`;}

function routeTimeMarkup(times){return times.map(t=>`<div class="route-time"><strong>${e(compactTime(t.text))}</strong><span>${e(t.label==='同段共用'?'游览':t.label)}</span></div>`).join('');}
function routePage(d){const groups=routeGroups(d);return `
 <div class="route-head" id="route-content"><h2>路线示意</h2></div>

 <div class="route-groups">${groups.map((group,g)=>`${g===0||groups[g-1].phase!==group.phase?`<h3 class="route-phase">${e(group.phase)}</h3>`:''}<section class="route-window" aria-labelledby="route-window-${g}"><header class="route-window-time" id="route-window-${g}">${routeTimeMarkup(group.times)}</header><ol class="route-stops" start="${group.stops[0].index+1}">${group.stops.map(s=>{
 const p=PLACE[s.id],extra=s.times.filter(t=>!group.times.some(common=>routeTimeKey(common)===routeTimeKey(t)));
 return `<li class="route-stop ${s.seen?'return-stop':''} ${s.optional?'optional':''}" value="${s.index+1}" data-route-id="${s.id}" data-phase="${e(s.phase)}"><div class="route-item"><span class="route-number" aria-hidden="true">${s.index+1}</span>${s.seen?`<span class="route-photo repeated-place" aria-hidden="true">${icon('pin')}</span>`:`<button class="route-photo" data-action="place" data-place="${s.id}" aria-label="查看${e(p.name)}照片">${photo(s.id,'','lazy','64px')||icon('pin')}</button>`}<div class="route-copy"><button data-action="place" data-place="${s.id}">${e(p.name)}</button><small lang="ja">${e(p.name_ja)}</small>${extra.length?`<div class="route-extra-time">${routeTimeMarkup(extra)}</div>`:''}${s.seen?'<span class="return-label">再次经过</span>':''}${s.optional?'<span class="return-label">可选</span>':''}</div><div class="route-actions">${external(icon('pin')+'地图',p.map_search_url,'route-map')}</div></div></li>`;}).join('')}</ol></section>`).join('')}</div><details class="support-card route-transport"><summary>交通说明</summary><ol class="detail-body">${dayTransport(d).map(t=>`<li>${e(t)}</li>`).join('')}</ol></details>`;}
function daySupport(d){return `<aside class="day-support" id="day-support"><details class="support-card"><summary><span>行程提示</span></summary><ul class="detail-body">${dayNotes(d).map(t=>`<li>${e(t)}</li>`).join('')}</ul></details><details class="support-card source-disclosure"><summary><span>原始攻略与来源</span></summary><div class="detail-body full-guide"><p class="archive-note">原始方案供查阅；当天安排以行程页为准。</p>${renderMarkdown(GUIDES[d.date])}</div></details></aside>`;}


function foodIdea(item){const p=PLACE[item.place],showPhoto=photoSrc(item.place)&&!item.hidePhoto;return `<article class="food-idea ${showPhoto?'with-photo':''}">${showPhoto?photoButton(item.place,'food-idea-photo'):''}<div><span class="food-priority">${e(item.label)}</span><h4>${e(item.title)}</h4><p class="food-name" lang="ja">${e(p.name_ja)}</p><p>${e(item.text)}</p><small>${e(item.budget)}</small><div class="food-actions">${external(icon('pin')+'地图',p.map_search_url,'text-link')}${btn(icon('copy')+'复制日文名','copy',`data-copy="${e(p.name_ja)}"`,'text-button')}${external('店铺资料 ↗',item.source,'text-link')}</div></div></article>`;}

function dayTransport(d){const notes=[...DETAILS[d.date].transport],c=choice(d);
 if(d.date==='2026-12-01'){
  if(c.ujiExtra==='tower')notes[2]='下山经宇治桥回西岸，从JR宇治返京都酒店；休息后去京都塔，再吃晚饭。';
  if(c.ujiExtra!=='kotosaka')notes.splice(3,1);
 }
 if(d.date==='2026-12-06'){
  if(c.kobeAfternoon==='harbor'){
   notes[1]='按当天地图往返海边；计划14:30从JR三ノ宮返大阪，到站后休息。';
   notes[2]='从大阪站步行到蓝天大厦，留约30分钟找展望台专用入口，不进办公塔楼电梯。';
  }else notes[1]='三宫乘JR回大阪站，约14:00—14:30抵达；到店后开始购物，15:30结束。商店位于LUCUA SOUTH 13楼。';
 }
 if(d.date==='2026-12-05'&&(c.shop1!=='animate'||c.shop2!=='surugaya'))notes.splice(3,1);
 return notes;
}
function dayFallbacks(d){const c=choice(d);return d.fallback_rules.flatMap(t=>{
 if(d.date==='2026-12-01'){
  if(t.startsWith('超时先省'))return [c.ujiExtra==='kotosaka'?t:'超时先省额外店铺与集章。'];
  if(t.includes('京都塔')&&c.ujiExtra!=='tower')return [];
 }
 if(d.date==='2026-12-02'){
  if(t.includes('高台寺')&&c.kodaijiPlan==='skip')return [];
  if(t.includes('八坂神社'))return c.kodaijiPlan==='night'&&c.yasakaBrief?[t]:['晚饭长队时换简餐，不赶おめん末点。'];
  if(t.startsWith('不再排'))return [];
 }
 if(d.date==='2026-12-06'){
  if(t.startsWith('Nintendo'))return c.kobeAfternoon==='harbor'?[]:[c.umedaMain==='pokemon_osaka'?'Pokémon久等时换Nintendo；两家都需久等就省购物。':t];
  if(t.startsWith('神户港咖啡'))return ['晚饭后返店，准备次晨出发。'];
 }
 return [t];
});}
function dayNotes(d){const c=choice(d);const extra=(DETAILS[d.date].extra||[]).flatMap(t=>{
 if(d.date==='2026-12-01'&&t.includes('京都塔联动'))return [t.split('京都塔联动')[0].trim(),...(c.ujiExtra==='tower'?['京都塔联动参考 ¥1,000，常规20:30末入；购票待确认。']:[])];
 if(d.date==='2026-12-02'&&t.startsWith('本次只安排'))return [];
 if(d.date==='2026-12-05'&&t.startsWith('日本桥默认'))return ['日本桥购物限1—2家，替换不增加总数；中古作品库存不保证。'];
 if(d.date==='2026-12-06'&&t.startsWith('Nintendo与Pokémon')){
  if(c.kobeAfternoon==='harbor')return [];
  return [c.umedaSecond?t:PLACE[c.umedaMain].name+'参考营业10:00—20:00，重点逛一家，15:30结束。'];
 }
 return [t];
});return [...dayFallbacks(d),...extra];}
function foodSuggestions(d,eventId){
 const info=DETAILS[d.date],harbor=d.date==='2026-12-06'&&choice(d).kobeAfternoon==='harbor';
 const candidates=(info.foodIdeas||[]).filter(item=>item.event_id===eventId&&!(item.place==='starbucks_meriken'&&harbor));
 const along=info.eventFood?.[eventId]||[];
 const active=eventId==='kobe_harbor'?(info.foodIdeas||[]).map(item=>({...item,hidePhoto:true,label:'咖啡店详情',title:'美利坚公园店',text:'波止場町2-4。参考07:30—22:00，不定休；出发前复核营业。'})):[];
 return [...candidates,...along,...active].map(item=>`<details class="event-detail food-suggestions"><summary>${e(item.place==='starbucks_meriken'?(harbor?'咖啡店详情':'神户港咖啡备选'):'甜品备选 · '+item.title)}</summary><div class="detail-body">${foodIdea(item)}${item.place==='starbucks_meriken'&&!harbor?btn('调整下午行程','options','','text-button'):''}</div></details>`).join('');
}
