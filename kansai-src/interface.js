/* Presentation only. Locked itinerary and selection rules live in app.js. */
const BLOG_HOME='https://mlinku.github.io/';
const KANSAI_MAP_URL='https://www.google.com/maps/@34.6062551,135.6203971,10z';
Object.assign(icons,{
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h4m3 0h4"/>',
 list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
 tune:'<path d="M4 7h8m4 0h4M4 17h3m4 0h9"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 reset:'<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>'
});
const TODOS=[...PLAN.pending_checks,'准备交通IC卡，保存HARUKA订单与兑换说明。','USJ前一晚：在官方App登记并区分两张Studio Pass，备好网络、充电宝与早餐。','12/6返店后整理行李，复核南海列车与入口，收好证件、随身物品和次晨早餐。','高台寺门票：核对夜间参拜公告与购票方式。',...(PLAN.additional_checks||[]).map(item=>item.text)];
const TODO_IDS=['usj-details','weather','restaurants','kobe-dinner-20261003','return-travel','kodaiji-weather','uji-cafes','rally-account','transport-tickets','usj-app','packing','kodaiji-tickets',...(PLAN.additional_checks||[]).map(item=>item.id)];
// Preserve completed tasks by identity; the retired USJ date comparison is not a cafe check.
let migratedTodos=false;
for(let i=0;i<TODO_IDS.length;i++)if(Object.hasOwn(state.todos,i)){
 if(i!==3&&i!==6&&!Object.hasOwn(state.todos,TODO_IDS[i]))state.todos[TODO_IDS[i]]=state.todos[i];
 delete state.todos[i];migratedTodos=true;
}
if(migratedTodos)save();
const pageLink=(label,hash,cls='',attrs='')=>`<a class="${cls}" href="${e(hash)}" data-nav ${attrs}>${label}</a>`;
const dayHash=(i,view='timeline')=>`#day/${PLAN.days[i].date}/${view==='pilgrimage'&&!pilgrimageDay(PLAN.days[i].date).length?'timeline':view}`;
const photo=(id,cls='',loading='lazy',sizes='(max-width:720px) calc(100vw - 72px), 208px')=>{
 const img=PHOTOS[id];if(!img?.src)return '';
 const full=cls==='dialog-image',responsive=!full&&img.thumbnail&&img.thumbnailWidth<(img.width||1100);
 return `<img class="${cls}" ${img.illustration?'style="object-fit:contain"':''} src="${full?img.src:img.thumbnail||img.src}" ${responsive?`srcset="${img.thumbnail} ${img.thumbnailWidth}w, ${img.src} ${img.width||1100}w" sizes="${sizes}"`:''} alt="${e(img.sight)}" width="${img.width||800}" height="${img.height||600}" loading="${loading}" decoding="async" ${loading==='eager'?'fetchpriority="high"':''}>`;
};
const photoButton=(id,cls='',prefix='',caption=true)=>`<button type="button" class="photo-button ${cls}${PHOTOS[id]?.illustration?' illustration-photo':''}" data-action="place" data-place="${id}" aria-label="查看${e(PLACE[id].name)}详情">${photo(id)}${caption?`<span>${e(prefix+PLACE[id].name)}</span>`:''}</button>`;
const placeButton=(id)=>`<button type="button" class="place-link${PLACE_LOCATIONS[id]?' has-location':''}" data-action="place" data-place="${id}">${PLACE_LOCATIONS[id]?`<span>${e(PLACE[id].name)}<small class="place-location">${e(PLACE_LOCATIONS[id])}</small></span>`:e(PLACE[id].name)}${icon('chevron')}</button>`;
const activityPhoto=(id,...args)=>PLACE_LOCATIONS[id]?`<div class="shop-photo">${photoButton(id,...args)}<small class="place-location">${e(PLACE_LOCATIONS[id])}</small></div>`:photoButton(id,...args);
function progress(d){const events=effectiveEvents(d);return{done:events.filter(ev=>state.checks[d.date+':'+ev.id]).length,total:events.length};}
function readHash(){
 const parts=location.hash.slice(1).split('/'); sectionTarget='';
 if(parts[0]==='day'){
  const i=PLAN.days.findIndex(d=>d.date===parts[1]);if(i<0)return;
  screen='day';dayIndex=i;dayView=parts[2]==='pilgrimage'?'pilgrimage':parts[2]==='route'||parts[2]==='gallery'?'route':'timeline';if(dayView==='pilgrimage'&&parts[3])sectionTarget='shot-'+parts[3];if(dayView==='timeline'&&parts[3])sectionTarget=parts[3].startsWith('section-')?parts[3]:'event-'+parts[3];if(dayView==='route'&&parts[3])sectionTarget='route-content';
  if(dayView==='pilgrimage'&&!pilgrimageDay(PLAN.days[i].date).length){dayView='timeline';sectionTarget='';}
  routeFilter=parts[3]?decodeURIComponent(parts[3]):'全部';
  if(parts[2]==='details')sectionTarget='day-support';
 }else if(parts[0]==='prep'){screen='prep';}
 else{screen='overview';if(parts[0]==='maps'||parts[1]==='map')sectionTarget='trip-map';else if(parts[1]==='days')sectionTarget='day-cards';}
}
// Reading position is session-only; completion and choices remain in localStorage.
const viewMemory=new Map();
let optionsReturn=null,renderedHash='',keyboardNavigation=false;
function viewKey(){return screen==='day'?screen+'/'+PLAN.days[dayIndex].date+'/'+dayView+(dayView==='route'?'/'+routeFilter:''):screen;}
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
function backToOptions(){const saved=optionsReturn;if(!saved)return;openOptions();const dlg=$('#place-dialog');restoreDisclosures(dlg,saved.open);dlg.scrollTop=saved.y;dlg.querySelector('[data-place="'+saved.place+'"]')?.focus({preventScroll:true});}
function go(target,index=dayIndex,view='timeline'){navigate(target==='day'?dayHash(index,view):'#'+target);}
function dates(){return `<nav class="date-nav" aria-label="选择旅行日期">${PLAN.days.map((d,i)=>pageLink(`<strong>${dateLabel(d.date)}</strong><span>${DETAILS[d.date].cityLabel}</span>`,dayHash(i,dayView),'date-link'+(i===dayIndex?' active':''),`aria-label="${dateLabel(d.date)} ${d.weekday} ${dayPresentation(d).short}" ${i===dayIndex?'aria-current="date"':''}`)).join('')}</nav>`;}

function dayCard(d,i){const info=dayPresentation(d);return pageLink(`<div class="day-card-photo">${photo(info.cover)}<span class="day-number">${String(i+1).padStart(2,'0')}</span><span class="card-date">${dateLabel(d.date)} ${d.weekday}</span></div><div class="day-card-copy"><h3>${e(info.short)}</h3><p class="day-card-theme">${e(info.summary)}</p><div class="card-practical"><span>强度 · ${e(d.intensity.split('；')[0])}</span><span>${i===0?'入住 19:00–20:00':i===7?'离店 05:15–05:25':'返店 '+e(compactTime(returnTarget(d)))}</span></div><span class="card-enter" aria-hidden="true">${icon('arrow')}</span></div>`,dayHash(i),'day-card');}
function overview(){return `
 <header class="overview-hero blog-hero">
  <div class="hero-copy"><h1>关西旅行</h1><p class="trip-date">2026年11月30日 — 12月7日</p><div class="trip-facts" title="12/1—12/6为完整游览日"><span><strong>8</strong> 个日历日</span><span><strong>6</strong> 完整游览日</span><span><strong>7</strong> 晚</span></div><div class="hero-links">${pageLink('查看每日行程 ↓','#overview/days','text-link')}${pageLink(icon('map')+'关西区域地图','#overview/map','text-link')}</div></div>
  <div class="hero-photos"><div>${photo('kiyomizu','','eager','(max-width:720px) 100vw, 1100px')}<span>清水寺</span></div></div>
 </header>
 <section id="day-cards"><div class="section-title"><div><h2>8天行程</h2></div></div><div class="day-grid">${PLAN.days.map(dayCard).join('')}</div></section>
 <section id="trip-map" class="trip-map-section"><div class="section-title"><div><h2>关西区域地图</h2></div></div><div class="map-layout"><a class="google-map-preview" href="${KANSAI_MAP_URL}" target="_blank" rel="noopener noreferrer" aria-label="打开关西区域的交互式 Google 地图"><img src="${REGION_MAP_IMAGE}" alt="Google 关西区域地图，展示京都、宇治、大阪、奈良、神户的真实位置" width="400" height="300"><span>关西<em>打开 Google 地图 ↗</em></span></a><div class="trip-connections">${[['11/30','关西机场 → 京都',''],['12/1','京都 ⇄ 宇治',''],['12/3','京都 → 大阪','先回京都酒店取行李'],['12/5','大阪 → 奈良 → 大阪','大阪城后经鹤桥乘近铁往返奈良'],['12/6','大阪 ⇄ 神户','生田、北野、三宫与神户大桥'],['12/7','大阪 → 关西机场','南海列车待复核']].map(([date,path,note])=>`<div><span>${date}</span><p><strong>${path}</strong>${note?`<small>${note}</small>`:''}</p></div>`).join('')}</div></div></section>
 <section><div class="section-title"><div><h2>住宿与航班</h2></div></div><div class="stays">${stayCard('hotel_kyoto','京都 · 3晚','11/30入住 — 12/3退房')}${stayCard('hotel_osaka','大阪 · 4晚','12/3入住 — 12/7退房')}</div>${flights()}</section>
 `;}
function stayCard(id,title,date){return `<article class="stay-card">${photoButton(id,'stay-photo')}<div><p class="eyebrow">${title}</p><h3>${e(PLACE[id].name_ja)}</h3><p>${date}</p><button class="text-link" data-action="place" data-place="${id}">查看酒店 ${icon('arrow')}</button></div></article>`;}
function flights(){const bookings=PLAN.bookings.filter(b=>b.type==='flight');return `<section class="flight-card flight-overview"><div class="flight-heading"><h3>${e([...new Set(bookings.map(b=>b.airline))].join(' / '))}</h3><span>往返航班 · 当地时间</span></div><div class="flight-grid">${bookings.map(b=>{const from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return `<div><p>${e(from.date)} · ${b.from==='hkg'?'去程':'回程'} <b>${e(b.flight_number||'航班号待确认')}</b></p><div><strong><span class="flight-action">起飞</span>${from.time}<small>${e(from.city)}</small></strong>${icon('arrow')}<strong><span class="flight-action">抵达</span>${to.time}<small>${e(to.city)}</small></strong></div><p class="flight-terminals">${e(flightTerminals(b))}</p></div>`;}).join('')}</div></section>`;}

function openOptions(){optionsReturn=null;const d=PLAN.days[dayIndex];dialogMode={kind:'options',date:d.date};const dlg=$('#place-dialog');dlg.className='options-dialog';dlg.innerHTML=`<div class="dialog-top"><div><p class="eyebrow">${dateLabel(d.date)} · ${e(dayPresentation(d).short)}</p><h2 id="place-title">可选安排</h2></div>${btn(icon('close'),'close-dialog','aria-label="关闭可选安排"','icon-button')}</div><div class="dialog-body"><div class="option-fields">${optionalControls(d)}</div>${d.optional.length?`<details class="option-photos"><summary>地点照片</summary><div class="event-photos">${[...new Set(d.optional.flatMap(o=>o.place_ids))].filter(id=>photoSrc(id)).map(id=>photoButton(id)).join('')}</div></details>`:''}${DETAILS[d.date].meals.some(r=>r[1]==='可选')?`<details><summary>可选餐饮</summary>${DETAILS[d.date].meals.filter(r=>r[1]==='可选').map(r=>foodRow(d,r)).join('')}</details>`:''}<div class="dialog-footer">${btn('完成','close-dialog','','primary')}</div></div>`;if(!dlg.open)dlg.showModal();}
function openPlace(id){const p=PLACE[id];if(!p)return;const img=PHOTOS[id],dlg=$('#place-dialog');optionsReturn=dialogMode?.kind==='options'?{y:dlg.scrollTop,open:captureReading(dlg),place:id}:null;dialogMode={kind:'place',id};dlg.className='place-dialog';dlg.innerHTML=`<div class="dialog-top"><div><p class="eyebrow">${e(p.city)}</p><h2 id="place-title">${e(p.name)}</h2></div>${btn(icon('close'),'close-dialog','aria-label="关闭地点详情"','icon-button')}</div>${pilgrimagePlace(id).length?'':photo(id,'dialog-image','eager')}<div class="dialog-body">${optionsReturn?btn('← 返回可选安排','options-back','','text-button place-back'):''}${p.name_ja!==p.name?`<p class="jp-name" lang="ja">${e(p.name_ja)}</p>`:''}${p.address_ja?`<p>${e(p.address_ja)}</p>`:''}${PLACE_DETAILS[id]?`<p class="place-note">${e(PLACE_DETAILS[id])}</p>`:''}<div class="dialog-actions">${btn(icon('copy')+'复制名称','copy',`data-copy="${e(p.name_ja)}"`)}${external(icon('map')+'地图',p.map_search_url,'btn primary')}</div>${pilgrimagePlaceContent(id)}${img&&!pilgrimagePlace(id).length?`<details class="photo-credit"><summary>照片来源</summary><p>${e(img.sight)} · ${e(img.author)} · ${e(img.date)}</p><p>${external('照片原页 ↗',img.sourcePage)} · ${img.licenseUrl?external(e(img.license),img.licenseUrl):e(img.license)}</p></details>`:''}</div>`;if(!dlg.open)dlg.showModal();}

function tripPlaces(){
 const ids=new Set(PLAN.days.flatMap(d=>[...d.route_stop_ids,...d.timeline.flatMap(ev=>ev.place_ids),...d.optional.flatMap(o=>o.place_ids)]));
 for(const info of Object.values(DETAILS)){
  for(const r of info.meals||[])if(r[7])ids.add(r[7]);
  for(const item of [...(info.foodIdeas||[]),...Object.values(info.eventFood||{}).flat()])ids.add(item.place);
 }
 for(const id of ['animate','surugaya','potato','surugaya_main'])ids.add(id);
 return PLAN.places.filter(p=>ids.has(p.id));
}
function prepPage(){const places=tripPlaces();return `<header class="prep-heading"><h1>临行准备</h1></header><div class="prep-layout"><section class="todo-card"><div class="section-title"><h2>待办清单</h2><span id="todo-count">${TODOS.filter((_,i)=>state.todos[TODO_IDS[i]]).length} / ${TODOS.length}</span></div>${TODOS.map((t,i)=>`<label class="todo-row"><input type="checkbox" data-todo="${TODO_IDS[i]}" ${state.todos[TODO_IDS[i]]?'checked':''}><span>${e(t)}</span></label>`).join('')}</section><div><section class="prep-note"><p class="eyebrow">已确认</p><h2>机票与住宿</h2><ul><li>香港航空往返机票</li><li>京都3晚、大阪4晚酒店，均不含早餐</li><li>11/30 HARUKA，班次未锁定</li></ul><p class="condition">USJ普通票、高台寺门票：购买状态待确认。京都塔与大阪城天守阁：未购票。</p></section><details class="support-card"><summary><span>作品日文名</span></summary><div class="detail-body">${WORK_NAMES.map(t=>`<div class="word-row"><span lang="ja">${e(t)}</span>${btn(icon('copy'),'copy',`data-copy="${e(t)}" aria-label="复制${e(t)}"`,'icon-button')}</div>`).join('')}</div></details><details class="support-card"><summary><span>红叶预测</span><small>截至2026/9/28 · 非实时叶况</small></summary><div class="detail-body">${PLAN.foliage.spots.map(s=>`<article class="forecast-row"><h3>${e(PLACE[s.place_id].name)}</h3><p>到访 ${dateLabel(s.visit_date)}<br>预测观赏开始 ${dateLabel(s.forecast_viewing_start)}<br>预测落叶开始 ${dateLabel(s.forecast_leaf_fall_start)}</p>${external('预测来源 ↗',s.source)}</article>`).join('')}<p class="muted">可能见到枝头红叶与落叶混合，不保证盛期。</p></div></details></div></div>
 <details class="support-card place-index"><summary><span>地点与照片</span><small>${places.length}处 · 行程与备选</small></summary><div class="detail-body">${[...new Set(places.map(p=>p.city))].map(city=>`<h3>${e(city)}</h3><div class="index-links">${places.filter(p=>p.city===city).map(p=>placeButton(p.id)).join('')}</div>`).join('')}</div></details>
 <details class="support-card"><summary><span>出行信息</span></summary><div class="detail-body"><p>普通正餐预算每人¥1,000—2,500；12/6和牛自助价格待选店确认，尚未订位。</p><p>部分门票费用（两人）：京都塔¥2,000、大阪城天守阁¥2,400，均未购票；大佛殿¥1,600、高台寺¥1,600，购买状态待确认。USJ、清水寺及购物费用另计。</p><p>香港航空去程HX618：香港T2值机，按指引前往T1登机；关西抵达T1。返程HX617：关西T1出发、香港T1抵达。去程HARUKA已购，按入境进度选班次。</p><p>航班时间按各机场当地时间显示；日本比香港快1小时。起降时间沿用机票记录，出发前查看航司通知。</p><p>${external('香港航空 T2 指引 ↗','https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6')}</p></div></details><details class="support-card"><summary><span>资料说明</span></summary><div class="detail-body"><p>行程时间为参考，不代表预约；营业时间、菜单与叶况请临行复核。</p><p>照片供地点识别与作品对照，拍摄时间、来源见详情；示意图另有标注。Google区域预览采集于2026/9/28。</p></div></details><details class="support-card"><summary><span>离线与进度</span></summary><div class="detail-body"><p>${typeof DELIVERY_MODE!=='undefined'&&DELIVERY_MODE==='web'?'博客图片按需加载；完整离线阅读请使用独立离线版。':'行程与照片可离线查看。'}地图和来源链接需联网。</p><p>进度仅保存在当前浏览器，不跨设备同步。请使用同一网址或文件路径；清除浏览器数据或使用隐私模式可能丢失记录。</p></div></details>`;}

function sidebarDayIndex(){return `<nav class="desktop-day-index" aria-label="旅行日期目录"><p>旅行目录</p>${PLAN.days.map((d,i)=>pageLink(`<span>${dateLabel(d.date)}</span><strong>${e(dayPresentation(d).short)}</strong>`,dayHash(i,dayView),screen==='day'&&i===dayIndex?'active':'',screen==='day'&&i===dayIndex?'aria-current="date"':'')).join('')}</nav>`;}
function render(){renderedHash=location.hash;const current=screen==='day'?'day':screen;$('#app').innerHTML=`<div class="blog-backdrop" aria-hidden="true"><img src="${BLOG_BACKGROUND}" alt="" width="2000" height="1125"></div>${!storageOK?'<div class="storage-warning" role="alert">浏览器未允许本机保存，关闭后进度可能丢失。</div>':''}<header class="site-header"><div class="wrap header-inner">${`<a class="brand" href="${BLOG_HOME}" aria-label="返回まひろ的小站"><strong>まひろ的小站</strong><small>← 返回博客</small></a><p class="sidebar-trip-title">关西秋日手帖<small>2026 · 11.30 — 12.07</small></p>`}<nav class="main-nav" aria-label="主导航">${[['overview','全程','map'],['day','每日','calendar'],['prep','准备','bag']].map(([id,label,ico])=>pageLink(icon(ico)+label,id==='day'?dayHash(dayIndex,dayView):'#'+id,current===id?'active':'',current===id?'aria-current="page"':'')).join('')}</nav>${sidebarDayIndex()}</div></header><main class="wrap ${screen==='day'?'daily-page view-'+dayView:''}" id="main">${screen==='overview'?overview():screen==='prep'?prepPage():dayPage()}</main><footer class="foot wrap"><span><a href="${BLOG_HOME}">まひろ的小站</a> · 关西秋日手帖</span></footer>`;document.title=screen==='day'?`${dateLabel(PLAN.days[dayIndex].date)} ${dayPresentation(PLAN.days[dayIndex]).short} · 关西秋日手帖`:'关西秋日手帖 · 2026';}
function refreshDayChecks(d){
 if(screen!=='day'||PLAN.days[dayIndex].date!==d.date)return;
 document.querySelectorAll('[data-event-check]').forEach(input=>{
  const checked=!!state.checks[d.date+':'+input.dataset.eventCheck];
  input.checked=checked;input.closest('.event').classList.toggle('done',checked);
 });
 refreshDayProgress(d);
 pilgrimageDay(d.date).forEach(refreshShotCompletion);
}
function resetDay(scope='timeline'){
 const d=PLAN.days[dayIndex],old={},shots=scope==='pilgrimage',label=shots?'打卡':'行程',prefix=d.date+':';
 for(const k of Object.keys(state.checks))if(k.startsWith(prefix)&&k.startsWith(prefix+'shot:')===shots){old[k]=state.checks[k];delete state.checks[k];}
 // Update completion in place so open details, scroll positions and focus survive.
 save();refreshDayChecks(d);
 toast('已重置 '+dateLabel(d.date)+' '+label,()=>{
  Object.assign(state.checks,old);save();refreshDayChecks(d);toast('已恢复当天'+label);
 });
}
function setCheck(date,id,checked){const d=PLAN.days.find(x=>x.date===date);if(!d||!effectiveEvents(d).some(ev=>ev.id===id))throw Error('无效的日期或活动');state.checks[date+':'+id]=!!checked;save();}
document.addEventListener('pointerdown',()=>{keyboardNavigation=false;document.querySelectorAll('.keyboard-focus').forEach(el=>el.classList.remove('keyboard-focus'));});
document.addEventListener('keydown',ev=>{if(['Tab','Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(ev.key))keyboardNavigation=true;});
document.addEventListener('click',ev=>{
 const a=ev.target.closest('a[data-nav]');if(a&&!ev.metaKey&&!ev.ctrlKey&&!ev.shiftKey&&!ev.altKey&&ev.button===0){ev.preventDefault();navigate(a.hash);return;}
 const target=ev.target.closest('[data-action]');if(!target)return;
 if(target.dataset.action==='place')openPlace(target.dataset.place);
 else if(target.dataset.action==='options')openOptions();
 else if(target.dataset.action==='options-back')backToOptions();
 else if(target.dataset.action==='copy-close')$('#copy-dialog').close();
 else if(target.dataset.action==='close-dialog')$('#place-dialog').close();
 else if(target.dataset.action==='copy')copyText(target.dataset.copy);
 else if(target.dataset.action==='reset-day')resetDay(target.dataset.resetScope);
 else if(target.dataset.action==='undo'&&undoAction){const fn=undoAction;undoAction=null;fn();}
});
document.addEventListener('change',ev=>{const input=ev.target,d=PLAN.days[dayIndex];
 if(input.matches('[data-event-check]')){setCheck(d.date,input.dataset.eventCheck,input.checked);input.closest('.event').classList.toggle('done',input.checked);refreshDayProgress(d);}
 else if(input.matches('[data-todo]')){state.todos[input.dataset.todo]=input.checked;save();$('#todo-count').textContent=TODOS.filter((_,i)=>state.todos[TODO_IDS[i]]).length+' / '+TODOS.length;}
 else if(input.dataset.choice){
  const y=scrollY,dx=$('.date-nav')?.scrollLeft||0,dlg=$('#place-dialog'),dy=dlg.scrollTop,key=input.dataset.choice,value=input.value,c=choice(d);
  c[key]=input.type==='checkbox'?input.checked:input.value;
  if(c.shop1===c.shop2)c.shop2='none';
  if(key==='kodaijiPlan'&&value==='skip')c.yasakaBrief=false;
  state.choices[d.date]=c;save();
  for(const key of viewMemory.keys())if(key.startsWith('day/'+d.date+'/'))viewMemory.delete(key);
  render();if($('.date-nav'))$('.date-nav').scrollLeft=dx;scrollTo(0,y);openOptions();dlg.scrollTop=dy;
  dlg.querySelector(`[data-choice="${key}"]${input.type==='radio'?`[value="${value}"]`:''}`)?.focus({preventScroll:true});
 }
});
$('#place-dialog').addEventListener('click',ev=>{if(ev.target===$('#place-dialog')){const r=ev.target.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)ev.target.close();}});
$('#place-dialog').addEventListener('close',()=>{dialogMode=null;optionsReturn=null;});
if('scrollRestoration' in history)history.scrollRestoration='manual';
window.addEventListener('hashchange',()=>{if(location.hash==='#main')return;rememberView();readHash();render();focusPage(true);});
window.addEventListener('storage',ev=>{if(ev.key===STORAGE_KEY){try{const next=JSON.parse(ev.newValue);if(next?.checks&&next?.todos&&next?.choices){state=next;render();}}catch{}}});
readHash();render();focusPage();
