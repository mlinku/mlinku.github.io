/* Daily presentation. DayFlow owns grouping; app.js owns itinerary choices. */
// One-line card copy for activities whose planning note is long. The full note stays under 更多 → 完整说明.
// An empty string hides the note on the card when 怎么走 already says the same thing.
const EVENT_BRIEF={
 flight_out:'',
 uji_lunch:'吃饭加坐下休息约45分钟。',
 uji_pilgrimage:'约45分钟，久美子椅多留片刻，桥上顺拍。',
 daikichi_visit:'往返加展望台约75分钟。',
 suikan_stamp:'河岸拍照，坐下休息约10分钟。',
 station_stage:'上4F室町小路广场，拍大阶梯和红色时钟。',
 delta_visit:'河岸拍照约25分钟，优先《玉子》高野川侧。',
 higashiyama_walk:'步行与巡礼短拍约75分钟。',
 checkout_kyoto:'寄存行李；不能寄存就用京都站储物柜并记下位置。',
 kyoto_tower_visit:'展望室5层领台纸，集齐7处章再出场。',
 luggage_pickup:'',
 osaka_transfer:'',
 checkin_osaka:'入住后休息30—45分钟。',
 usj_transfer:'',
 usj_core:'任天堂区域一次玩完、拍完、逛完，再按场次看柯南。',
 castle_transfer:'',
 castle_visit:'步行到天守阁外观拍照，约1小时，不入馆。',
 nara_transfer:'换乘约40—60分钟，预计13:15—13:35到近铁奈良。',
 nara_park_walk:'沿公园步道走到南大门约30分钟，远看鹿即可。',
 nara_visit:'南大门和大佛殿内部约50分钟；冬季17:00闭门。',
 nara_station_walk:'步行约30分钟回近铁奈良站。',
 nara_return_train:'',
 anime_shopping:'挑1—2家慢逛。',
 nippombashi_dinner:'坐下吃45—60分钟，沿途选有空位的店。',
 glico_photo:'戎桥、格力高、心斋桥筋南口短拍，再去南海难波。',
 nara_day_return:'',
 kitano_lunch:'午餐、咖啡和休息约50分钟；北野物语馆外观可顺路短拍。',
 sannomiya_shopping:'先看音像、毛绒和立牌。',
 kobe_bridge_visit:'北公园现场拍摄约30分钟，尽量白天拍。',
 sannomiya_evening:'补逛没逛完的店，逛完就坐下休息。',
 last_evening_return:'预计20:45—21:00回店，整理行李、证件和早餐。',
 airport_checkin:''
};

function currentChoiceText(d){const c=choice(d),labels=[];
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')labels.push('晚餐后休息');else if(c.yasakaBrief)labels.push('八坂神社短停');}
 if(d.date==='2026-12-04'){if(c.usjExtra)labels.push('增加游乐项目');if(c.kinopio)labels.push('午餐改为Kinopio');}
 if(d.date==='2026-12-05'&&(c.shop1!=='animate'||c.shop2!=='surugaya'))labels.push('购物：'+selectedShops(c).map(id=>PLACE[id].name).join('＋'));
 if(d.date==='2026-12-05'&&c.spaworldEvening)labels.push('晚间泡汤');
 return labels.join(' · ');
}
// Times are reference windows and re-checking is a preparation task (both stated once elsewhere),
// so day pages drop the repeated "参考" before times and the "临行复核" clauses.
function plainCopy(html){return html.replace(/>([^<]+)</g,(_,t)=>'>'+t
 .replace(/参考(?=\d|套餐|24小时)/g,'')
 .replace(/[^，；。<>]*临行(复核|确认)[^，；。<>]*/g,'')
 .replace(/([，；])[，；]+/g,'$1').replace(/[，；]+。/g,'。').replace(/。[，；]+/g,'。').replace(/^[，；]+/,'').replace(/[，；]+$/,'')+'<');}
function dayPage(){return plainCopy(dayPageMarkup());}
function dayPageMarkup(){const d=PLAN.days[dayIndex],info=dayPresentation(d),[leave,back]=dayTimes(d,dayIndex),isToday=todayIndex()===dayIndex,notes=dayNotes(d),hasPilgrimage=pilgrimageDay(d.date).length>0;return `
 ${dates()}
 <header class="day-head"><div class="day-date"><strong>${dateLabel(d.date)}</strong><small>${e(d.weekday)} · DAY ${String(dayIndex+1).padStart(2,'0')}${isToday?' · <em>今天</em>':''}</small></div><div class="day-title"><h1>${e(info.short)}</h1><p>${e(info.eyebrow)}</p></div><button type="button" class="day-cover" data-action="photo-zoom" data-place="${info.cover}" aria-label="查看${e(PLACE[info.cover].name)}照片">${photo(info.cover,'','eager','200px')}</button></header>
 <div class="day-facts"><div><span>${leave[0]}</span><strong>${e(leave[1])}</strong></div><div>${d.overnight?`<button class="stay-access" data-action="stay-info" data-place="${d.overnight}" aria-label="${dayIndex===0?'入住':'返店'} ${e(compactTime(returnTarget(d)))}，查看${e(PLACE[d.overnight].name)}详情"><span>${back[0]}</span><strong>${e(back[1])}</strong>${back[2]?`<small class="fact-note">${e(back[2])}</small>`:''}</button>`:`<span>回程航班</span><strong>${e(flightDeparture('flight_home'))}</strong>`}</div><div><span>强度</span><strong>${intensityMarkup(d)}</strong></div></div>
 <section class="day-brief" aria-label="今日要点"><p class="day-key"><span class="day-key-label">今日要点</span>${e(info.key)}</p>${notes.length?`<details class="day-notes"><summary>情况有变时（${notes.length} 条）</summary><ul>${notes.map(t=>`<li>${e(t)}</li>`).join('')}</ul></details>`:''}</section>
 <div class="day-extras">${dayView==='timeline'?routeOverview(d):''}${d.overnight?stayInfo(d.overnight):''}</div>
 <div class="daily-toolbar">${hasPilgrimage?`<nav class="view-tabs" aria-label="当天查看方式">${pageLink('行程',dayHash(dayIndex),'view-tab'+(dayView==='timeline'?' active':''),dayView==='timeline'?'aria-current="page"':'')}${pageLink('巡礼对照',dayHash(dayIndex,'pilgrimage'),'view-tab'+(dayView==='pilgrimage'?' active':''),dayView==='pilgrimage'?'aria-current="page"':'')}</nav>`:`<p class="view-title">当天行程</p>`}${dayView==='timeline'?`<div class="progress-area">${progressMarkup(d)}</div>${nextStopMarkup(d)}`:''}</div>
 ${currentChoiceText(d)?`<p class="selected-choice">已调整：${e(currentChoiceText(d))}</p>`:''}
 <div class="day-layout"><div class="day-main">${dayView==='pilgrimage'?pilgrimagePage(d):timelinePage(d)}</div></div>${dayView==='pilgrimage'?'':daySupport(d)}
 <nav class="prev-next" aria-label="相邻日期">${dayIndex>0?pageLink(`<small>← 前一天</small><strong>${dateLabel(PLAN.days[dayIndex-1].date)} ${e(dayPresentation(PLAN.days[dayIndex-1]).short)}</strong>`,dayHash(dayIndex-1,dayView),'prev'):pageLink(`<small>← 返回</small><strong>行程总览</strong>`,'#overview','prev')}${dayIndex<PLAN.days.length-1?pageLink(`<small>后一天 →</small><strong>${dateLabel(PLAN.days[dayIndex+1].date)} ${e(dayPresentation(PLAN.days[dayIndex+1]).short)}</strong>`,dayHash(dayIndex+1,dayView),'next'):pageLink(`<small>回顾 →</small><strong>临行待办</strong>`,'#prep','next')}</nav>`;}
function progressMarkup(d){const flow=DayFlow.forDay(d);return `<span id="progress-text" aria-live="polite">${flow.done===flow.total?'全部完成':'已完成'} <strong>${flow.done}/${flow.total}</strong></span><div class="progress-track" role="progressbar" aria-label="当天活动完成进度" aria-valuemin="0" aria-valuemax="${flow.total}" aria-valuenow="${flow.done}"><span style="width:${flow.done/flow.total*100}%"></span></div>`;}
function refreshDayProgress(d){const area=document.querySelector('.progress-area');if(area)area.innerHTML=progressMarkup(d);}
// "Now" only highlights where to read on the travel day; completion is always manual.
const eventStart=ev=>{const m=/(\d{1,2}):(\d{2})/.exec(ev.time_label||'');return m?Number(m[1])*60+Number(m[2]):null;};
function currentEventId(d){
 const status=tripStatus();if(status.phase!=='during'||PLAN.days[status.index].date!==d.date)return null;
 let current=null;for(const ev of effectiveEvents(d)){const start=eventStart(ev);if(start!==null&&start>status.minutes)break;if(start!==null)current=ev.id;}
 return current;
}
let nowEventId=null;
// On a travel day the toolbar names the next activity after the current Japan time.
function nextStopMarkup(d){
 const status=tripStatus();if(status.phase!=='during'||PLAN.days[status.index].date!==d.date)return '';
 const next=effectiveEvents(d).find(ev=>{const t=eventStart(ev);return t!==null&&t>status.minutes;});
 if(!next)return `<p class="next-stop">今天的安排已经走完，早点休息。</p>`;
 const wait=eventStart(next)-status.minutes,first=mealRows(d,next).find(r=>r[1]==='首选'),dest=navigationStops(next,d,!!(first&&first[0]!=='早餐')).at(-1);
 const when=wait<60?`${wait} 分钟后`:`${Math.floor(wait/60)} 小时${wait%60?` ${wait%60} 分`:''}后`;
 return `<p class="next-stop"><span class="next-label">下一站</span><button type="button" class="next-target" data-action="jump-event" data-event-id="${next.id}"><b>${String(eventStart(next)/60|0).padStart(2,'0')}:${String(eventStart(next)%60).padStart(2,'0')}</b> ${e(next.title)}</button><span class="next-wait">${when}</span></p>`;
}
function timelinePage(d){const flow=DayFlow.forDay(d);nowEventId=currentEventId(d);return `<div class="timeline">${flow.sections.map(section=>{const [label,...rest]=section.name.split(' · ');const clocks=section.events.flatMap(ev=>[...compactTime(ev.time_label).matchAll(/\d{1,2}:\d{2}/g)].map(m=>m[0])),range=clocks.length?clocks[0]+(clocks.length>1?'–'+clocks.at(-1):''):'';return `<section class="timeline-phase" id="${section.id}"><div class="phase-heading"><h2>${e(label)}</h2>${rest.length?`<p>${e(rest.join(' · '))}</p>`:''}${range?`<span class="phase-range">${range}</span>`:''}</div>${section.events.map(ev=>eventCard(d,ev)).join('')}</section>`;}).join('')}</div>`;}

// Ordinary identification photos belong to the first eligible activity, not transit.
// Distinct entrance assets remain distinct place IDs; pilgrimage comparisons are independent.
function compactEvent(ev){return ev.category==='transport'||(ev.category==='rest'&&ev.place_ids.every(id=>id.startsWith('hotel_')||id==='usj'))||['nakamura_walk','usj_app','usj_finish'].includes(ev.id);}
function eventPhotoIds(ev){return compactEvent(ev)?[]:ev.place_ids.filter(id=>photoSrc(id)&&(ev.category!=='meal'||PLACE[id].category==='restaurant'));}
// The rail shows when an activity starts; the full window stays in the title and the next row implies the end.
// The time column holds a clock only; activities timed by an event ("入园后") show 随后 and carry the words in the row.
function timeMarkup(ev){const start=/(\d{1,2}:\d{2})/.exec(compactTime(ev.time_label));return start?`<span class="event-time">${start[1]}</span>`:`<span class="event-time is-text">随后</span>`;}
function timeWords(ev){const full=compactTime(ev.time_label);return /\d{1,2}:\d{2}/.test(full)?'':full;}
// Major activities are what the day is for; transfers, rests, arrivals and plain walks read as one quiet line.
function isMajorEvent(d,ev){
 if(optionalControls(d,ev.id))return true;
 if(['flight','meal','visit','shopping'].includes(ev.category))return true;
 if(ev.category==='activity')return !compactEvent(ev)&&ev.id!=='airport_checkin';
 if(ev.category==='walk')return pilgrimageDay(d.date).some(p=>p.event_id===ev.id&&pointEnabled(p));
 if(ev.category==='rest')return ev.place_ids.some(id=>PLACE[id]?.category==='restaurant');
 return false;
}
const CATEGORY_ICON={transport:'train',flight:'plane',meal:'food',visit:'camera',walk:'walk',rest:'clock',hotel:'bed',activity:'sparkle',shopping:'bag'};
function eventCard(d,ev){
 const status=activityState(d.date,ev.id),checked=status==='done',isMeal=ev.category==='meal',major=isMajorEvent(d,ev);
 const evs=effectiveEvents(d),earlier=evs.slice(0,evs.findIndex(item=>item.id===ev.id));
 const seen=new Set(earlier.flatMap(eventPhotoIds)),imageIds=major?eventPhotoIds(ev).filter(id=>!seen.has(id)):[];
 const foodRows=mealRows(d,ev),first=foodRows.find(r=>r[1]==='首选');
 const placeIds=activityPlaceIds(ev),hotelIds=ev.category==='hotel'||ev.id==='luggage_pickup'?ev.place_ids.filter(id=>id.startsWith('hotel_')):[];
 const isNow=ev.id===nowEventId;
 const brief=ev.condition&&Object.hasOwn(EVENT_BRIEF,ev.id)?EVENT_BRIEF[ev.id]:null;
 const daySaid=dayNotes(d).join(''),fullNote=ev.condition?dropSaid(ev.condition,daySaid+(brief||'')):'';
 const photoFor=id=>activityPhoto(id,'',isMeal&&PLACE[id].category!=='restaurant'?'用餐周边 · ':'',id!==first?.[7]&&(imageIds.length!==1||PLACE[id].name!==ev.title));
 const notedBefore=new Set(earlier.flatMap(x=>activityPlaceIds(x)));
 const placeNotes=!major||DETAILS[d.date].eventDetails?.[ev.id]?[]:placeIds.filter(id=>PLACE_DETAILS[id]&&!id.startsWith('hotel_')&&!notedBefore.has(id)&&!alreadySaid(PLACE_DETAILS[id],daySaid));
 const more=[
  brief!==null&&fullNote?`<details class="event-detail"><summary>完整说明</summary><div class="detail-body"><p>${e(fullNote)}</p></div></details>`:'',
  imageIds.length>1?`<details class="event-detail"><summary>更多照片</summary><div class="detail-body event-photos">${imageIds.map(photoFor).join('')}</div></details>`:'',
  ev.id==='kodaiji_night'?`<details class="event-detail"><summary>参拜详情</summary><div class="detail-body"><p>游览约60—75分钟，排队另计。</p><p>活动期2026/10/23—12/13；21:30停止入场，22:00闭门。昼夜不清场，离场后同票不能再入。</p><p>${external('活动官网 ↗','https://www.kodaiji.com/saiji.html')} · ${external('票价 ↗','https://www.kodaiji.com/haikan.html')}</p></div></details>`:'',
  foodRows.length?mealSupplement(d,ev,foodRows):'',
  activityDetails(d,ev.id),
  foodRows.length?'':foodSuggestions(d,ev.id),
  placeNotes.length?`<details class="event-detail place-facts"><summary>地点说明</summary><div class="detail-body">${placeNotes.map(id=>`<p>${e(PLACE_DETAILS[id])}</p>`).join('')}</div></details>`:''
 ].filter(Boolean);
 // Secondary material shares one disclosure per activity, so each card has a single "更多" row.
 const moreHTML=more.join(''),moreLabels=[...new Set([...moreHTML.matchAll(/<summary>([\s\S]*?)<\/summary>/g)].map(m=>m[1].replace(/<[^>]+>/g,'').replace(/^甜品备选 · .*/,'甜品备选')))];
 const moreBody=moreHTML.replace(/<details class="event-detail[^"]*"><summary>([\s\S]*?)<\/summary>/g,'<section class="more-block"><h4>$1</h4>').replace(/<\/details>/g,'</section>');
 const line=brief??ev.condition??'';
 const check=`<label class="event-check"><input type="checkbox" data-event-check="${ev.id}" ${checked?'checked':''} aria-label="完成：${e(ev.title)}"><span class="check-box" aria-hidden="true">${icon('check')}</span><span class="check-text" aria-hidden="true"></span></label>`;
 const navStops=navigationStops(ev,d,!!(first&&first[0]!=='早餐')),dest=ev.category==='rest'&&!major?null:navStops.at(-1);
 const notice=executionNotice(d,ev);
 const open=isNow;
 // Collapsed: start time, a thumbnail slot, the title, a warning mark, navigation and completion.
 const head=`<div class="event-head"><span class="row-thumb">${imageIds.length?photoButton(imageIds[0],'','',false):`<span class="row-ph" aria-hidden="true">${icon(CATEGORY_ICON[ev.category]||'pin')}</span>`}</span><h3 class="row-heading"><button type="button" class="row-toggle" data-action="row-toggle" aria-expanded="${open}"><span class="row-title">${e(ev.title)}</span>${timeWords(ev)?`<span class="row-when">${e(timeWords(ev))}</span>`:''}${notice?'<span class="row-warn" title="有注意事项">⚠</span>':''}${ev.optional?'<span class="pill gold">可选</span>':''}</button></h3>${dest?`<a class="row-nav" href="${e(dest.url)}" target="_blank" rel="noopener noreferrer" title="导航到${e(dest.name)}" aria-label="导航到${e(dest.name)}">${icon('pin')}</a>`:''}${check}</div>`;
 const text=`<p class="event-when">${ev.time_hint?`${e(ev.time_hint)} `:''}${e(compactTime(ev.time_label))}${statusLabel(ev)}</p>${hotelIds.filter(id=>!ev.title.includes(PLACE[id].name_ja)).map(id=>`<p class="activity-hotel" lang="ja">${e(PLACE[id].name_ja)}</p>`).join('')}${line?`<p class="condition">${e(line)}</p>`:''}${ev.optionNote?`<p class="selection-note">${e(ev.optionNote)}</p>`:''}${notice}
 ${first?`<div class="meal-block"><p class="meal-preview"><span lang="ja">${e(first[2])}</span><small>${e(first[3])}${first[3].includes('菜单')?'':' / 人'}</small></p><p class="meal-conditions">${e(first[4].replace(' · Louie’s N.Y. Pizza Parlor',''))}${mealNotes(first).conditions?` · ${e(mealNotes(first).conditions)}`:''}</p></div>`:''}
 ${ev.id==='kodaiji_night'?`<p class="night-facts">17:00亮灯 · ¥800 / 人 <span>购票待确认</span></p>`:''}
 ${transportDetail(d,ev)}`;
 const via=navStops.length>1?`<details class="nav-via"><summary>沿途 ${navStops.length-1} 站</summary><ol>${navStops.map(s=>`<li>${external(`<b>${e(s.name)}</b>${s.sub?`<small lang="ja">${e(s.sub)}</small>`:''}`,s.url,'via-stop')}</li>`).join('')}</ol></details>`:'';
 const actions=[via,pilgrimageEventLinks(d,ev),rallyActions(ev),inlineChoices(d,ev),moreBody?`<details class="event-more"><summary>更多<small>${e(moreLabels.join(' · '))}</small></summary><div class="more-body">${moreBody}</div></details>`:''].join('');
 return `<article id="event-${ev.id}" class="event ${major?'major':'minor'} cat-${ev.category} ${checked?'done':''} ${ev.optional?'optional':''} ${isNow?'is-now':''} ${open?'expanded':''}" data-event="${ev.id}">
 <div class="event-time-col">${timeMarkup(ev)}</div>
 <div class="event-content">${head}
 <div class="event-body"><div class="event-text">${text}${actions?`<div class="event-actions">${actions}</div>`:''}</div></div>
 </div></article>`;
}
function inlineChoices(d,ev){const fields=optionalControls(d,ev.id);return fields?`<details class="event-detail inline-choices" data-choice-group="${ev.id}"><summary>${ev.id==='gion_rest'?'可调整：夜间安排':ev.id==='usj_lunch'?'可调整：午餐':ev.id==='anime_shopping'?'可调整：门店与晚间':'可调整：加项目'}</summary><div class="detail-body option-fields">${fields}</div></details>`:'';}
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
 return `<div class="transport-detail" aria-label="交通说明"><ul>${notes.map(n=>`<li>${e(n)}</li>`).join('')}</ul></div>`;
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
function mealNotes(row){
 // Only explicit ordering suggestions move out of view; all execution conditions stay visible.
 const suggestions=['牛丼／定食；','餐盘1,400起。','轻食配饮品。'].filter(text=>row[5].includes(text));
 return {conditions:suggestions.reduce((text,note)=>text.replace(note,''),row[5]),suggestion:suggestions.join('').replace(/；$/,'。')};
}
function mealSupplement(d,ev,rows){
 const first=rows.find(r=>r[1]==='首选'),alternatives=rows.filter(r=>r!==first);
 const suggestions=foodSuggestionsForEvent(d,ev.id);
 const source=first?.[6]?external('首选资料 ↗',first[6],'text-link'):'';
 const advice=first?mealNotes(first).suggestion:'';
 const content=(advice?`<p>${e(advice)}</p>`:'')+source+alternatives.map(r=>foodRow(d,r)).join('')+suggestions.map(foodIdea).join('');
 return content?`<details class="event-detail meal-supplement"><summary>备选餐厅与点餐建议</summary><div class="detail-body">${content}</div></details>`:'';
}
function mealMap(d,r){if(r[7]&&PLACE[r[7]])return PLACE[r[7]].map_search_url;let city=d.cities.includes('宇治')&&['午餐','晚餐'].includes(r[0])?'宇治':d.date==='2026-12-05'&&r[0]==='午餐'?'奈良':d.date==='2026-12-06'&&r[0]==='午餐'?'神戸':d.date==='2026-12-03'&&r[0]==='午餐'?'京都':d.overnight==='hotel_kyoto'?'京都':'大阪';if(r[2].startsWith('通圓'))city='宇治';return mapURL(city+' '+r[2]);}
function foodRow(d,r){return `<article class="food-row"><span class="food-priority">${e(r[0])} · ${e(r[1])}</span><h4 lang="ja">${e(r[2])}</h4>${r[1]!=='首选'&&r[7]&&photoSrc(r[7])?photoButton(r[7],'food-row-photo'):''}<p class="budget">${e(r[3])}${r[3].includes('菜单')?'':' / 人'}</p><p>${e(r[4])}</p><p class="muted">${e(r[5])}</p><div class="food-actions">${r[0]!=='早餐'?external(icon('map')+(r[8]?.pending?'查看餐饮区域':'地图'),mealMap(d,r),'text-link'):''}${r[6]?external('店铺资料 ↗',r[6],'text-link'):''}</div></article>`;}

// A compact index into the itinerary, not a second copy of its execution notes.
function routeOverview(d){const stops=timedRoute(d),names=stops.map(s=>PLACE[s.id].name).filter((n,i,all)=>n!==all[i-1]),preview=names.length>5?[...names.slice(0,3),'…',names.at(-1)]:names;return `<details class="day-route" id="day-route"><summary id="route-content"><span class="route-summary"><strong>当天路线 · ${stops.length} 站</strong><span class="route-preview">${preview.map(e).join(' → ')}</span></span></summary><ol class="route-overview-list">${stops.map(s=>{
 const p=PLACE[s.id],label=`<span>${e(p.name)}${s.purpose?`<small>${e(s.purpose)}</small>`:''}${s.optional?'<small>可选</small>':''}</span>`;
 return `<li data-route-id="${s.id}">${s.eventId?pageLink(label,`#day/${d.date}/timeline/${s.eventId}`,'route-overview-place'):`<span class="route-overview-place">${label}</span>`}${external(icon('pin')+'<span>地图</span>',p.map_search_url,'route-overview-map')}</li>`;
 }).join('')}</ol></details>`;}
function daySupport(d){return `<aside class="day-support" id="day-support"><details class="support-card source-disclosure"><summary><span>资料来源</span></summary><div class="detail-body">${guideSources(d)}</div></details></aside>`;}


function foodIdea(item){const p=PLACE[item.place],showPhoto=photoSrc(item.place)&&!item.hidePhoto;return `<article class="food-idea ${showPhoto?'with-photo':''}">${showPhoto?photoButton(item.place,'food-idea-photo','',false):''}<div><span class="food-priority">${e(item.label)}</span><h4>${e(item.title)}</h4><p class="food-name" lang="ja">${e(p.name_ja)}</p><p>${e(item.text)}</p><small>${e(item.budget)}</small><div class="food-actions">${external(icon('pin')+'地图',p.map_search_url,'text-link')}${external('店铺资料 ↗',item.source,'text-link')}</div></div></article>`;}

// Sentence-level overlap check so a fact said in 情况有变时 is not printed again elsewhere on the day.
const bigrams=t=>{t=String(t).replace(/[\s，。；、·：:（）()「」《》]/g,'');const out=new Set();for(let i=0;i<t.length-1;i++)out.add(t.slice(i,i+2));return out;};
function alreadySaid(sentence,pool){const a=bigrams(sentence);if(a.size<4)return false;const b=bigrams(pool);let n=0;for(const x of a)if(b.has(x))n++;return n/a.size>=.6;}
function dropSaid(text,pool){return String(text).split(/(?<=[。；])/).filter(s=>s.trim()&&!alreadySaid(s,pool)).join('').replace(/；$/,'。');}
function dayFallbacks(d){const c=choice(d);return d.fallback_rules.flatMap(t=>{
 if(d.date==='2026-12-01')t=t.replace('14:30仍未到登山口，不能确保白天下山就取消。','');
 if(/^19:00—22:00 Amex|^马里奥赛车与咚奇刚择一优先/.test(t))return [];
 if(d.date==='2026-12-02'){
  if(t.includes('高台寺'))return [];
  if(t.includes('八坂神社'))return c.kodaijiPlan==='night'&&c.yasakaBrief?[t]:c.kodaijiPlan==='night'?['排队导致延误则省八坂神社。']:[];
  if(t.startsWith('不再排'))return [];
 }
 return [t];
});}
function dayNotes(d){const c=choice(d);const extra=(DETAILS[d.date].extra||[]).flatMap(t=>{
 // Ticket prices and the Amex evening are stated on the activity itself.
 if(/^(京都塔门票|19:00—22:00 Amex|大佛殿成人|马里奥赛车与咚奇刚择一优先)/.test(t))return [];
 if(d.date==='2026-12-02'&&t.startsWith('本次只安排'))return [];
 if(d.date==='2026-12-05'&&t.startsWith('日本桥默认'))return ['日本桥购物限1—2家，替换不增加总数；中古作品库存不保证。'];
 return [t];
});if(d.date==='2026-12-05'&&c.spaworldEvening)extra.push(d.optional.find(o=>o.id==='spaworld_evening').rule);return [...dayFallbacks(d),...extra];}
function foodSuggestionsForEvent(d,eventId){
 const info=DETAILS[d.date];
 const candidates=(info.foodIdeas||[]).filter(item=>item.event_id===eventId);
 const along=info.eventFood?.[eventId]||[];
 return [...candidates,...along];
}
function foodSuggestions(d,eventId){
 return foodSuggestionsForEvent(d,eventId).map(item=>`<details class="event-detail food-suggestions"><summary>${e('甜品备选 · '+item.title)}</summary><div class="detail-body">${foodIdea(item)}</div></details>`).join('');
}

function activityDetails(d,id){
 const info=DETAILS[d.date].eventDetails?.[id];if(!info)return '';
 const selected=id==='anime_shopping'?selectedShops(choice(d)):null;
 const said=dayNotes(d).join('');
 const keep=item=>!(item.text.includes('小吃沿中央街自选')&&said.includes('小吃沿中央街自选'));
 const items=(selected?[
  ...selected.map(placeId=>info.items.find(item=>item.place_id===placeId)).filter(Boolean),
  ...info.items.filter(item=>!item.place_id)
 ]:info.items).filter(keep);
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
