/* Presentation only. Locked itinerary and selection rules live in app.js. */
const BLOG_HOME='https://mlinku.github.io/';
Object.assign(icons,{
 contrast:'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h4m3 0h4"/>',
 list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
 tune:'<path d="M4 7h8m4 0h4M4 17h3m4 0h9"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 back:'<path d="m15 5-7 7 7 7"/>',
 home:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4m0 3v.5"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-9.5V8"/>',
 ticket:'<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
 train:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-4m4.5 4-1.5-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',
 food:'<path d="M5 3v8a2 2 0 0 0 2 2v8M9 3v8a2 2 0 0 1-2 2M7 3v6M17 21V3c-2 1-3 4-3 8h3"/>',
 camera:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
 walk:'<circle cx="13" cy="4.5" r="1.8"/><path d="m10 21 2-6 3 3v3M8 12l2-4 4 1 2 3m-4-3-2 6"/>',
 bed:'<path d="M3 18V6m0 8h18v4M3 14V10h7v4m11 0v-2a3 3 0 0 0-3-3h-8"/>',
 plane:'<path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5V18l7.5-2.5V19L8 21v1l4-1 4 1v-1l-2.5-2v-3.5L21 18z"/>',
 sparkle:'<path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zm16 0h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>'
});
const TODOS=[...PLAN.pending_checks,'准备交通IC卡，保存HARUKA订单与兑换说明。','USJ前一晚：在官方App登记并区分两张Studio Pass，备好网络、充电宝与早餐。','12/6返店后整理行李，复核南海列车与入口，收好证件、随身物品和次晨早餐。','高台寺门票：核对夜间参拜公告与购票方式。',...(PLAN.additional_checks||[]).map(item=>item.text)];
const TODO_IDS=['usj-details','weather','restaurants','kobe-dinner-20261003','return-travel','kodaiji-weather','uji-cafes','rally-account','transport-tickets','usj-app','packing','kodaiji-tickets',...(PLAN.additional_checks||[]).map(item=>item.id)];
// When each task is due. Tasks without a trip date belong before departure.
const TODO_WHEN={'kodaiji-weather':'2026-12-02','uji-cafes':'2026-11-30','rally-account':'2026-11-30','usj-app':'2026-12-03','packing':'2026-12-06','castle-nara-20261003':'2026-12-04'};
const TODO_WHEN_LABEL={'2026-11-30':'抵达当晚','2026-12-02':'12/2 当天下午','2026-12-03':'12/3 晚上 · USJ前一晚','2026-12-04':'12/4 晚上','2026-12-06':'12/6 晚上 · 回程前一晚'};
// Preserve completed tasks by identity; the retired USJ date comparison is not a cafe check.
let migratedTodos=false;
for(let i=0;i<TODO_IDS.length;i++)if(Object.hasOwn(state.todos,i)){
 if(i!==3&&i!==6&&!Object.hasOwn(state.todos,TODO_IDS[i]))state.todos[TODO_IDS[i]]=state.todos[i];
 delete state.todos[i];migratedTodos=true;
}
if(migratedTodos)save();
const todoDone=()=>TODOS.filter((_,i)=>state.todos[TODO_IDS[i]]).length;
const pageLink=(label,hash,cls='',attrs='')=>`<a class="${cls}" href="${e(hash)}" data-nav ${attrs}>${label}</a>`;
const dayHash=(i,view='timeline')=>`#day/${PLAN.days[i].date}/${view==='route'?'timeline/route':view==='pilgrimage'&&!pilgrimageDay(PLAN.days[i].date).length?'timeline':view}`;
const photo=(id,cls='',loading='lazy',sizes='(max-width:720px) calc(100vw - 72px), 208px')=>{
 const img=PHOTOS[id];if(!img?.src)return '';
 const full=cls==='dialog-image',responsive=!full&&img.thumbnail&&img.thumbnailWidth<(img.width||1100);
 return `<img class="${cls}" ${img.illustration?'style="object-fit:contain"':''} src="${full?img.src:img.thumbnail||img.src}" ${responsive?`srcset="${img.thumbnail} ${img.thumbnailWidth}w, ${img.src} ${img.width||1100}w" sizes="${sizes}"`:''} alt="${e(img.sight)}" width="${img.width||800}" height="${img.height||600}" loading="${loading}" decoding="async" ${loading==='eager'?'fetchpriority="high"':''}>`;
};
const photoButton=(id,cls='',prefix='',caption=true)=>`<button type="button" class="photo-button ${cls}${PHOTOS[id]?.illustration?' illustration-photo':''}" data-action="photo-zoom" data-place="${id}" aria-label="放大${e(PLACE[id].name)}照片">${photo(id)}${caption?`<span>${e(prefix+PLACE[id].name)}</span>`:''}</button>`;
function placeInfo(id,omitName=false,withDetails=true){const p=PLACE[id];return `<div class="place-info" data-place-info="${id}">${omitName?'':`<strong lang="ja">${e(p.name_ja)}</strong>`}${p.address_ja?`<p lang="ja">${e(p.address_ja)}</p>`:''}${PLACE_LOCATIONS[id]?`<p class="place-location">${e(PLACE_LOCATIONS[id])}</p>`:''}${withDetails&&PLACE_DETAILS[id]?`<p>${e(PLACE_DETAILS[id])}</p>`:''}</div>`;}

function stayInfo(id){return `<details class="stay-info" id="stay-info"><summary>${icon('bed')}<span>今晚住 <strong>${e(PLACE[id].name)}</strong></span></summary><div class="stay-info-body">${photoSrc(id)?photoButton(id,'stay-info-photo'):''}<div>${placeInfo(id)}${external(icon('pin')+'酒店地图',PLACE[id].map_search_url,'btn small')}</div></div></details>`;}
const activityPhoto=(id,...args)=>PLACE_LOCATIONS[id]?`<div class="shop-photo">${photoButton(id,...args)}<small class="place-location">${e(PLACE_LOCATIONS[id])}</small></div>`:photoButton(id,...args);
function progress(d){const {done,total}=DayFlow.forDay(d);return{done,total};}

/* Trip clock: Japan time decides which day is "today". It only suggests where to read; it never marks completion.
   For previewing, ?now=2026-12-02T10:30 overrides the clock. */
function tokyoNow(){
 const override=typeof location!=='undefined'&&/[?&]now=([\d-]{10})T?(\d{2}:\d{2})?/.exec(location.search||'');
 if(override)return {date:override[1],minutes:override[2]?Number(override[2].slice(0,2))*60+Number(override[2].slice(3)):12*60};
 const now=new Date(),date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
 const [h,m]=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tokyo',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now).split(':').map(Number);
 return {date,minutes:h*60+m};
}
function tripStatus(){
 const now=tokyoNow(),first=PLAN.days[0].date,last=PLAN.days.at(-1).date;
 if(now.date<first)return {phase:'before',days:Math.round((Date.parse(first)-Date.parse(now.date))/864e5)};
 if(now.date>last)return {phase:'after'};
 return {phase:'during',index:PLAN.days.findIndex(d=>d.date===now.date),minutes:now.minutes};
}
const todayIndex=()=>{const s=tripStatus();return s.phase==='during'?s.index:-1;};
const INTENSITY={'交通日':1,'清晨交通日':1,'中等':2,'中等偏高':3,'较满':3,'高':4};
function intensityMarkup(d){const label=d.intensity.split('；')[0].replace(/，.*/,''),level=INTENSITY[label]||2;return `<span class="intensity" title="体力强度：${e(d.intensity)}"><span class="intensity-dots" aria-hidden="true">${[1,2,3,4].map(n=>`<i class="${n<=level?'on':''}"></i>`).join('')}</span>${e(label)}</span>`;}
function dayTimes(d,i){
 const leave=i===0?['出发',flightDeparture('flight_out').replace(' 香港起飞','')+' 香港']:['离店',compactTime(d.departure_target||'开园时间待确认')];
 const back=i===0?['入住','19:00–20:00']:i===PLAN.days.length-1?['抵港',flightLocal(PLAN.bookings.find(b=>b.id==='flight_home'),'arrival').time]:['返店',...compactTime(returnTarget(d)).split(/[，；]\s*/)];
 return [leave,back];
}

function readHash(){
 const parts=location.hash.slice(1).split('/'); sectionTarget='';
 if(parts[0]==='day'){
  const i=PLAN.days.findIndex(d=>d.date===parts[1]);if(i<0)return;
  screen='day';dayIndex=i;dayView=parts[2]==='pilgrimage'?'pilgrimage':'timeline';if(dayView==='pilgrimage'&&parts[3])sectionTarget='shot-'+parts[3];if(dayView==='timeline'&&parts[3])sectionTarget=parts[3].startsWith('section-')?parts[3]:'event-'+parts[3];
  if(parts[2]==='route'||parts[2]==='gallery'||(dayView==='timeline'&&parts[3]==='route'))sectionTarget='route-content';
  if(dayView==='pilgrimage'&&!pilgrimageDay(PLAN.days[i].date).length){dayView='timeline';sectionTarget='';}
  if(parts[2]==='details')sectionTarget='day-support';
 }else if(parts[0]==='prep'){screen='prep';if(['todos','bookings','reference'].includes(parts[1]))sectionTarget='prep-'+parts[1];}
 else{screen='overview';if(parts[0]==='maps'||parts[1]==='map'||parts[1]==='days')sectionTarget='day-cards';else if(parts[1]==='guide')sectionTarget='how-to';}
}
// Reading position is session-only; completion and choices remain in localStorage.
const viewMemory=new Map();
let renderedHash='',keyboardNavigation=false;
function viewKey(){return screen==='day'?screen+'/'+PLAN.days[dayIndex].date+'/'+dayView:screen;}
function disclosureKey(el){return (el.closest('article')?.id||'page')+'|'+el.querySelector('summary')?.textContent.trim();}
function captureReading(root){return [...root.querySelectorAll('details[open]')].map(disclosureKey);}
function restoreDisclosures(root,keys){const open=new Set(keys);root.querySelectorAll('details').forEach(el=>{el.open=open.has(disclosureKey(el));});}
function rememberView(){const main=document.getElementById('main');if(main)viewMemory.set(viewKey(),{y:window.scrollY,open:captureReading(main),hash:renderedHash});}
function navigate(hash){
 const restart=screen==='day'&&hash===dayHash(dayIndex,dayView);
 rememberView();
 if(location.hash!==hash)history.pushState(null,'',hash);
 readHash();if(restart)viewMemory.delete(viewKey());render();focusPage();
}
function focusPage(fromHistory=false){
 const memory=viewMemory.get(viewKey()),main=document.getElementById('main');
 if(memory&&main)restoreDisclosures(main,memory.open);
 const active=document.querySelector('.date-link.active'),rail=document.querySelector('.date-nav');
 if(active&&rail)rail.scrollLeft=active.offsetLeft-rail.clientWidth/2+active.clientWidth/2;
 const index=document.querySelector('.shot-index'),selected=index?.querySelector('[aria-current]');
 if(index&&selected)index.scrollTop=selected.offsetTop-index.clientHeight/2+selected.clientHeight/2;
 const target=sectionTarget&&document.getElementById(sectionTarget);
 if(target&&!(fromHistory&&memory&&memory.hash===location.hash)){
  for(let parent=target.parentElement;parent;parent=parent.parentElement)if(parent.tagName==='DETAILS')parent.open=true;
  target.scrollIntoView({block:'start'});target.setAttribute('tabindex','-1');target.classList.toggle('keyboard-focus',keyboardNavigation);target.focus({preventScroll:true});
 }else{
  window.scrollTo({top:memory?.y||0,behavior:'instant'});
  // Keep keyboard focus on a meaningful control after replacing the page DOM.
  const current=document.querySelector('.view-tab.active')||document.querySelector('.main-nav a.active');
  if(memory)current?.focus({preventScroll:true});
 }
}
function go(target,index=dayIndex,view='timeline'){navigate(target==='day'?dayHash(index,view):'#'+target);}
function dates(){const today=todayIndex();return `<nav class="date-nav" aria-label="选择旅行日期">${PLAN.days.map((d,i)=>pageLink(`<small>${i===today?'今天':'DAY '+(i+1)}</small><strong>${dateLabel(d.date)}</strong><span>${DETAILS[d.date].cityLabel}</span>`,dayHash(i,dayView),'date-link'+(i===dayIndex?' active':'')+(i===today?' is-today':''),`aria-label="${dateLabel(d.date)} ${d.weekday} ${dayPresentation(d).short}" ${i===dayIndex?'aria-current="date"':''}`)).join('')}</nav>`;}

/* ---------- Overview ---------- */
function tripStatusCard(){
 const s=tripStatus(),done=todoDone();
 if(s.phase==='during'){
  const d=PLAN.days[s.index],info=dayPresentation(d),p=progress(d);
  return `<section class="status-card is-during" aria-label="旅行进行中"><div class="status-copy"><p class="status-kicker">${icon('sparkle')}旅行中 · 第 ${s.index+1} 天 / 共 8 天</p><h2>今天：${dateLabel(d.date)} ${e(d.weekday)} · ${e(info.short)}</h2><p>${e(info.key)}</p></div><div class="status-actions">${pageLink('打开今天的行程 '+icon('arrow'),dayHash(s.index),'btn primary')}<span class="status-meta">已完成 ${p.done} / ${p.total} 项</span></div></section>`;
 }
 if(s.phase==='after')return `<section class="status-card is-after"><div class="status-copy"><p class="status-kicker">${icon('sparkle')}旅程已结束</p><h2>八天关西秋日，辛苦啦</h2><p>行程、照片与巡礼对照都还在，可以随时回看。</p></div><div class="status-actions">${pageLink('从第 1 天回看 '+icon('arrow'),dayHash(0),'btn primary')}</div></section>`;
 return `<section class="status-card is-before"><div class="status-count"><strong>${s.days}</strong><span>天后出发</span></div><div class="status-copy"><p class="status-kicker">${icon('clock')}出发前</p><h2>${done<TODOS.length?'先把临行准备做完':'准备就绪，可以出发'}</h2><p>临行待办 <strong>${done} / ${TODOS.length}</strong>${(PLAN.unconfirmed_purchases||[]).filter(p=>p.status==='not_purchased').map(p=>' · '+p.item.replace('普通门票','门票')+'未购买').join('')}</p></div><div class="status-actions">${pageLink('去临行准备 '+icon('arrow'),'#prep/todos','btn primary')}${pageLink('从第 1 天开始看','#day/'+PLAN.days[0].date+'/timeline','btn ghost')}</div></section>`;
}
const HOW_TO=[
 ['bag','出发前','在「准备」页勾完待办，先买门票。'],
 ['calendar','每天出门前','读当天页面顶部的「今日要点」。'],
 ['walk','在路上','按时间往下走，做完一项点「完成」。']
];
const GLOSSARY=[
 ['时间','含缓冲的参考时段，不是预约；航班为当地时间，日本比香港快 1 小时。'],
 ['离店 · 返店','计划离开、回到酒店的时间；晚了按当天「情况有变时」减量。'],
 ['强度','步行与体力消耗，●越多越累。'],
 ['可选','在对应活动里切换，默认不占用时间。'],
 ['巡礼','动画、游戏取景地；「巡礼对照」页把作品画面和实景并排。'],
 ['完成 · 已拍','只存在这台设备的浏览器里，不与同行者同步，也不代表官方集章。']
];
function dayCard(d,i){
 const info=dayPresentation(d),p=progress(d),today=todayIndex()===i,[leave,back]=dayTimes(d,i);
 return pageLink(`<span class="day-row-date"><strong>${dateLabel(d.date)}</strong><small>${today?'今天':e(d.weekday)}</small></span><span class="day-row-thumb">${photo(info.cover,'','lazy','120px')}</span><span class="day-row-main"><strong>${e(info.short)}</strong><small>${e(info.summary)}</small></span><span class="day-row-times"><span><small>${leave[0]}</small>${e(leave[1])}</span><span><small>${back[0]}</small>${e(back[1].split(/[，；]/)[0])}</span></span><span class="day-row-meta">${intensityMarkup(d)}${p.done?`<small class="card-progress${p.done===p.total?' complete':''}">${p.done===p.total?'全部完成':`已完成 ${p.done}/${p.total}`}</small>`:''}</span>${icon('chevron')}`,dayHash(i),'day-card'+(today?' is-today':''));
}
function overview(){return `
 <header class="overview-hero">
  <div class="hero-copy"><h1>关西秋日手帖</h1><p class="trip-date">2026.11.30 — 12.07 · 8 天 7 晚</p><p class="trip-cities">京都 · 宇治 · 大阪 · 奈良 · 神户</p></div>
  <div class="hero-photos">${[['byodoin','宇治 · 平等院'],['inari','京都 · 伏见稻荷'],['dotonbori','大阪 · 道顿堀']].map(([id,label],i)=>photoSrc(id)?`<figure>${photo(id,'',i?'lazy':'eager','(max-width:720px) 50vw, 420px')}<figcaption>${label}</figcaption></figure>`:'').join('')}</div>
 </header>
 ${tripStatusCard()}
 <section id="how-to" class="how-to" aria-labelledby="how-to-title"><div class="section-title"><h2 id="how-to-title">怎么用这份手帖</h2></div>${(()=>{const guide=`<ol class="how-to-steps">${HOW_TO.map(([ico,title,text])=>`<li><span class="how-to-icon">${icon(ico)}</span><div><strong>${title}</strong><p>${text}</p></div></li>`).join('')}</ol>
  <details class="glossary"><summary>${icon('book')}看不懂的词？术语说明</summary><dl>${GLOSSARY.map(([t,d])=>`<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl></details>`;
  // First-time guidance stays open before departure and folds to one line once the trip has started.
  return tripStatus().phase==='before'?guide:`<details class="how-to-fold"><summary>${icon('book')}怎么用这份手帖 · 术语说明</summary>${guide}</details>`;})()}
 </section>
 <section id="day-cards"><div class="section-title"><h2>8 天行程</h2></div><div class="day-grid">${PLAN.days.map(dayCard).join('')}</div></section>
 <p class="overview-more">${icon('bed')}京都 3 晚、大阪 4 晚，往返 HX618 / HX617。${pageLink('航班与酒店 '+icon('arrow'),'#prep/bookings','text-link')}</p>
 `;}
function flights(showConditions=false){const bookings=PLAN.bookings.filter(b=>b.type==='flight');return `<section class="flight-card flight-overview"><div class="flight-heading">${icon('plane')}<h3>${e([...new Set(bookings.map(b=>b.airline))].join(' / '))}</h3><span>往返航班 · 当地时间</span></div><div class="flight-grid">${bookings.map(b=>{const from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return `<div class="flight-leg"><p class="flight-leg-title">${e(from.date)} · ${b.from==='hkg'?'去程':'回程'} <b>${e(b.flight_number||'航班号待确认')}</b></p><div class="flight-times"><strong><span class="flight-action">起飞</span>${from.time}<small>${e(from.city)}</small></strong><span class="flight-line" aria-hidden="true">${icon('plane')}</span><strong><span class="flight-action">抵达</span>${to.time}<small>${e(to.city)}</small></strong></div><p class="flight-terminals">${e(flightTerminals(b))}</p>${showConditions?flightConditions(b):''}</div>`;}).join('')}</div></section>`;}

function flightConditions(booking){
 const d=PLAN.days.find(d=>d.timeline.some(ev=>ev.id===booking.id));
 const detail=d.visit_details?.[booking.id==='flight_out'?'flight_out':'airport_checkin'];
 return `<details class="flight-conditions"><summary>值机与登机须知</summary><div class="detail-body">${(detail?.items||[]).map(item=>`<p>${e(item.text)}</p>`).join('')}${[...new Set((detail?.items||[]).map(item=>item.url).filter(Boolean))].map(url=>external('航司手续说明 ↗',url,'text-link')).join('')}</div></details>`;
}

/* ---------- Preparation ---------- */
const PURCHASE_LABEL={not_purchased:['未购买','danger'],purchase_not_confirmed:['待确认','warn']};
function ticketStatus(){
 const booked=[['往返机票','HX618 / HX617','ok'],['京都酒店','11/30—12/3 · 3晚','ok'],['大阪酒店','12/3—12/7 · 4晚','ok'],['HARUKA','11/30 · 班次现场选','ok']];
 const open=(PLAN.unconfirmed_purchases||[]).map(p=>[p.item+(p.quantity?' ×'+p.quantity:''),dateLabel(p.visit_date)+' 使用',...(PURCHASE_LABEL[p.status]?[PURCHASE_LABEL[p.status][1],PURCHASE_LABEL[p.status][0]]:['warn','待确认'])]);
 const row=([name,note,tone,label])=>`<li class="ticket tone-${tone}"><span class="ticket-state">${tone==='ok'?icon('check')+'已订':(tone==='danger'?icon('alert'):icon('info'))+label}</span><strong>${e(name)}</strong><small>${e(note)}</small></li>`;
 return `<section class="ticket-board" aria-labelledby="ticket-title"><div class="section-title"><h2 id="ticket-title">票务状态</h2></div><ul class="ticket-list">${open.map(row).join('')}</ul><p class="ticket-booked">${icon('check')}${booked.map(([name])=>e(name)).join('、')} 已订好。</p></section>`;
}
const TODO_PREFIX=/^(12\/\d+(?=高台寺|返店|集章|确认)|USJ前一晚：)/;
function todoRow(i){const id=TODO_IDS[i];return `<label class="todo-row"><input type="checkbox" data-todo="${id}" ${state.todos[id]?'checked':''}><span class="todo-box" aria-hidden="true">${icon('check')}</span><span class="todo-text">${e(TODO_WHEN[id]?TODOS[i].replace(TODO_PREFIX,''):TODOS[i])}</span></label>`;}
function todoGroups(){
 const index=TODOS.map((_,i)=>i),before=index.filter(i=>!TODO_WHEN[TODO_IDS[i]]);
 const trip=index.filter(i=>TODO_WHEN[TODO_IDS[i]]).sort((a,b)=>TODO_WHEN[TODO_IDS[a]].localeCompare(TODO_WHEN[TODO_IDS[b]]));
 const groups=[...new Set(trip.map(i=>TODO_WHEN[TODO_IDS[i]]))];
 return `<div class="todo-group"><h3>${icon('home')}出发前完成 <small>${before.length} 项</small></h3>${before.map(todoRow).join('')}</div><div class="todo-group"><h3>${icon('calendar')}旅途中再确认 <small>${trip.length} 项</small></h3>${groups.map(date=>`<p class="todo-when">${e(TODO_WHEN_LABEL[date]||dateLabel(date))}</p>${trip.filter(i=>TODO_WHEN[TODO_IDS[i]]===date).map(todoRow).join('')}`).join('')}</div>`;
}
function todoProgressMarkup(){const done=todoDone();return `<span>已完成 <strong>${done} / ${TODOS.length}</strong></span><div class="progress-track" role="progressbar" aria-label="临行待办完成进度" aria-valuemin="0" aria-valuemax="${TODOS.length}" aria-valuenow="${done}"><span style="width:${done/TODOS.length*100}%"></span></div>`;}
function prepBookings(){return `<section class="prep-bookings" id="prep-bookings" aria-labelledby="prep-bookings-title"><div class="section-title"><h2 id="prep-bookings-title">机票与住宿</h2></div>${flights()}
 <div class="prep-hotels">${PLAN.bookings.filter(b=>b.type==='hotel').map(b=>`<article><p class="eyebrow">${b.place_id==='hotel_kyoto'?'京都':'大阪'} · ${b.nights}晚</p><h3 lang="ja">${e(PLACE[b.place_id].name_ja)}</h3><p class="stay-date">${dateLabel(b.checkin_date)} 入住 — ${dateLabel(b.checkout_date)} 退房 · 不含早餐</p>${placeInfo(b.place_id,true,false)}<div class="food-actions">${external(icon('pin')+'酒店地图',PLACE[b.place_id].map_search_url,'text-link')}${pageLink('查看入住安排 →',dayHash(PLAN.days.findIndex(d=>d.date===b.checkin_date))+'/'+(b.place_id==='hotel_kyoto'?'checkin_kyoto':'osaka_transfer'),'text-link')}</div></article>`).join('')}</div>
 </section>`;}
function prepPage(){return `<header class="page-heading"><h1>临行准备</h1></header>
 ${ticketStatus()}
 <div class="prep-layout"><section class="todo-card" id="prep-todos"><div class="section-title"><h2>待办清单</h2><div class="todo-progress" id="todo-count">${todoProgressMarkup()}</div></div>${todoGroups()}</section>${prepBookings()}</div>
 <details class="support-card prep-reference" id="prep-reference"><summary><span>参考资料</span><small>作品日文名 · 红叶预测 · 预算 · 说明</small></summary><div class="detail-body">
 <section><h2>作品日文名</h2>${WORK_NAMES.map(t=>`<div class="word-row"><span lang="ja">${e(t)}</span>${btn(icon('copy'),'copy',`data-copy="${e(t)}" aria-label="复制${e(t)}"`,'icon-button')}</div>`).join('')}</section>
 <section><h2>保存的早季红叶预测</h2><p class="muted">截至2026/9/28 · 非实时叶况</p>${PLAN.foliage.spots.map(s=>`<article class="forecast-row"><h3>${e(PLACE[s.place_id].name)}</h3><p>到访 ${dateLabel(s.visit_date)} · 预测观赏开始 ${dateLabel(s.forecast_viewing_start)} · 预测落叶开始 ${dateLabel(s.forecast_leaf_fall_start)}</p>${external('预测来源 ↗',s.source)}</article>`).join('')}<p class="muted">可能见到枝头红叶与落叶混合，不保证盛期。</p></section>
 <section><h2>预算</h2><p>普通正餐每人¥1,000—2,500；12/6和牛自助每人不超过¥6,000。</p><p>门票（两人）：京都塔¥2,000、大佛殿¥1,600、高台寺¥1,600；USJ、清水寺与购物另计。</p></section>
 <section><h2>资料说明</h2><p>营业时间、菜单与叶况以临行复核为准。照片来源见放大图或巡礼的「坐标与来源」；Google区域预览采集于2026/9/28。</p></section>
 <section><h2>离线使用</h2><p>${typeof DELIVERY_MODE!=='undefined'&&DELIVERY_MODE==='web'?'博客版图片按需加载，完整离线阅读请用离线版。':'行程与照片可离线查看。'}地图和来源链接需联网。网页版与离线文件的勾选各自保存；清除浏览器数据会丢失。</p></section>
 </div></details>`;}

// One activity open at a time keeps the day readable as a list.
function openEventRow(row,open){
 if(!row)return;
 if(open)document.querySelectorAll('.event.expanded').forEach(other=>{if(other!==row&&!other.contains(row)){other.classList.remove('expanded');other.querySelector('.row-toggle')?.setAttribute('aria-expanded','false');}});
 row.classList.toggle('expanded',open);row.querySelector('.row-toggle')?.setAttribute('aria-expanded',String(open));
 // Opening a step inside 移动 also opens the 移动 line.
 if(open)for(let up=row.parentElement?.closest('.event');up;up=up.parentElement?.closest('.event')){up.classList.add('expanded');up.querySelector('.row-toggle')?.setAttribute('aria-expanded','true');}
}
/* ---------- Shell ---------- */
// Same storage key and attribute as the blog's js/ui/mode.js, so one choice applies to the blog and the guide.
const COLOR_MODE_KEY='user-color-scheme';
const systemColorMode=()=>typeof matchMedia==='function'&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
function toggleColorMode(){
 const root=document.documentElement,next=(root.getAttribute('data-user-color-scheme')||systemColorMode())==='dark'?'light':'dark';
 if(next===systemColorMode())root.removeAttribute('data-user-color-scheme');else root.setAttribute('data-user-color-scheme',next);
 try{if(next===systemColorMode())localStorage.removeItem(COLOR_MODE_KEY);else localStorage.setItem(COLOR_MODE_KEY,next);}catch{}
}
function sidebarDayIndex(){const today=todayIndex();return `<nav class="desktop-day-index" aria-label="旅行日期目录"><p>旅行目录</p>${PLAN.days.map((d,i)=>{const p=progress(d);return pageLink(`<span class="index-date">${dateLabel(d.date)}</span><strong>${e(dayPresentation(d).short)}</strong>${i===today?'<em>今天</em>':p.done===p.total?`<i class="index-done" aria-label="已全部完成">${icon('check')}</i>`:''}`,dayHash(i,dayView),screen==='day'&&i===dayIndex?'active':'',screen==='day'&&i===dayIndex?'aria-current="date"':'');}).join('')}</nav>`;}
function render(){renderedHash=location.hash;const current=screen==='day'?'day':screen,today=todayIndex(),dayTarget=screen==='day'?dayIndex:today>=0?today:dayIndex;$('#app').innerHTML=`${!storageOK?'<div class="storage-warning" role="alert">浏览器未允许本机保存，关闭后进度可能丢失。</div>':''}<header class="site-header"><div class="header-inner"><a class="brand" href="${BLOG_HOME}" aria-label="返回まひろ的小站"><strong>まひろ的小站</strong><small>${icon('back')}返回博客</small></a>${btn(icon('contrast')+'<span>日间 / 夜间</span>','mode-toggle','aria-label="切换日间或夜间模式"','mode-toggle')}<a class="sidebar-trip-title" href="#overview" data-nav>关西秋日手帖<small>2026 · 11.30 — 12.07</small></a><nav class="main-nav" aria-label="主导航">${[['overview','总览','home'],['day','每日','calendar'],['prep','准备','bag']].map(([id,label,ico])=>pageLink(icon(ico)+`<span>${label}</span>`,id==='day'?dayHash(dayTarget,screen==='day'?dayView:'timeline'):'#'+id,current===id?'active':'',current===id?'aria-current="page"':'')).join('')}</nav>${sidebarDayIndex()}</div></header><main class="${screen==='day'?'daily-page view-'+dayView:'page-'+screen}" id="main">${screen==='overview'?overview():screen==='prep'?prepPage():dayPage()}</main><footer class="foot"><span><a href="${BLOG_HOME}">まひろ的小站</a> · 关西秋日手帖 · 2026</span></footer>`;document.title=screen==='day'?`${dateLabel(PLAN.days[dayIndex].date)} ${dayPresentation(PLAN.days[dayIndex]).short} · 关西秋日手帖`:screen==='prep'?'临行准备 · 关西秋日手帖':'关西秋日手帖 · 2026';}
function refreshDayChecks(d){
 if(screen!=='day'||PLAN.days[dayIndex].date!==d.date)return;
 document.querySelectorAll('[data-event-check]').forEach(input=>{
  const status=activityState(d.date,input.dataset.eventCheck),checked=status==='done';
  input.checked=checked;input.closest('.event').classList.toggle('done',checked);
 });
 document.querySelectorAll('[data-move-check]').forEach(input=>{const all=input.dataset.moveCheck.split(' ').every(id=>activityState(d.date,id)==='done');input.checked=all;input.closest('.event').classList.toggle('done',all);});
 refreshDayProgress(d);
 pilgrimageDay(d.date).forEach(refreshShotCompletion);
}
function setCheck(date,id,checked){const d=PLAN.days.find(x=>x.date===date);if(!d||!effectiveEvents(d).some(ev=>ev.id===id))throw Error('无效的日期或活动');state.checks[date+':'+id]=checked?'done':'pending';return save();}
document.addEventListener('pointerdown',()=>{keyboardNavigation=false;document.querySelectorAll('.keyboard-focus').forEach(el=>el.classList.remove('keyboard-focus'));});
document.addEventListener('keydown',ev=>{if(['Tab','Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(ev.key))keyboardNavigation=true;});
document.addEventListener('click',ev=>{
 const a=ev.target.closest('a[data-nav]');if(a&&!ev.metaKey&&!ev.ctrlKey&&!ev.shiftKey&&!ev.altKey&&ev.button===0){ev.preventDefault();navigate(a.hash);return;}
 const target=ev.target.closest('[data-action]');if(!target)return;
 if(target.dataset.action==='stay-info'){const info=document.getElementById('stay-info');if(info){info.open=true;info.scrollIntoView({block:'center'});info.querySelector('summary').focus({preventScroll:true});}}
 else if(target.dataset.action==='mode-toggle')toggleColorMode();
 else if(target.dataset.action==='row-toggle')openEventRow(target.closest('.event'),!target.closest('.event').classList.contains('expanded'));
 else if(target.dataset.action==='jump-event'){const row=document.getElementById('event-'+target.dataset.eventId);if(row){openEventRow(row,true);row.scrollIntoView({block:'start'});}}
 else if(target.dataset.action==='route-jump'){const route=document.getElementById('day-route');if(route){route.open=true;route.scrollIntoView({block:'start'});route.querySelector('summary').focus({preventScroll:true});}}
 else if(target.dataset.action==='jump-now'){const now=document.querySelector('.event.is-now');if(now){now.scrollIntoView({block:'start'});now.setAttribute('tabindex','-1');now.focus({preventScroll:true});}}
 else if(target.dataset.action==='copy-close')$('#copy-dialog').close();
 else if(target.dataset.action==='copy')copyText(target.dataset.copy);
 else if(target.dataset.action==='undo'&&undoAction){const fn=undoAction;undoAction=null;fn();}
});
document.addEventListener('change',ev=>{const input=ev.target,d=PLAN.days[dayIndex];
 if(input.matches('[data-move-check]')){for(const id of input.dataset.moveCheck.split(' '))setCheck(d.date,id,input.checked);refreshDayChecks(d);if(input.checked)openEventRow(input.closest('.event'),false);}
 else if(input.matches('[data-event-check]')){setCheck(d.date,input.dataset.eventCheck,input.checked);refreshDayChecks(d);if(input.checked)openEventRow(input.closest('.event'),false);}
 else if(input.matches('[data-todo]')){state.todos[input.dataset.todo]=input.checked;save();$('#todo-count').innerHTML=todoProgressMarkup();}
 else if(input.dataset.choice){
  const y=input.getBoundingClientRect().top,dx=$('.date-nav')?.scrollLeft||0,open=captureReading($('#main')),key=input.dataset.choice,value=input.value,c=choice(d);
  c[key]=input.type==='checkbox'?input.checked:input.value;
  if(c.shop1===c.shop2)c.shop2='none';
  if(key==='kodaijiPlan'&&value==='skip')c.yasakaBrief=false;
  state.choices[d.date]=c;save();
  for(const key of viewMemory.keys())if(key.startsWith('day/'+d.date+'/'))viewMemory.delete(key);
  render();restoreDisclosures($('#main'),open);if($('.date-nav'))$('.date-nav').scrollLeft=dx;
  const replacement=document.querySelector(`[data-choice="${key}"]${input.type==='radio'?`[value="${value}"]`:''}`);
  if(replacement){scrollBy(0,replacement.getBoundingClientRect().top-y);replacement.focus({preventScroll:true});}
 }
});
if('scrollRestoration' in history)history.scrollRestoration='manual';
window.addEventListener('hashchange',()=>{if(location.hash==='#main')return;rememberView();readHash();render();focusPage(true);});
window.addEventListener('storage',ev=>{if(ev.key===COLOR_MODE_KEY){if(ev.newValue)document.documentElement.setAttribute('data-user-color-scheme',ev.newValue);else document.documentElement.removeAttribute('data-user-color-scheme');return;}if(ev.key===STORAGE_KEY){try{const next=JSON.parse(ev.newValue);if(next?.checks&&next?.todos&&next?.choices){state=next;render();}}catch{}}});
readHash();render();focusPage();
