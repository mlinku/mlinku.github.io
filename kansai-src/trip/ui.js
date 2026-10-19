/* 出行版 · UI. Built for one hand on the street: four tabs at the bottom, one screen per job —
   现在 (what now), 行程 (the day), 巡礼 (shots), 准备 (before leaving). Details open in a bottom sheet whose
   actions sit under the thumb; the phone's Back button closes it. All copy comes from model.js.
   Look: a printed 旅のしおり — photos lead, the day is drawn as a train line, a 済 seal marks what is done. */
Object.assign(icons,{
 contrast:'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 camera:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 back:'<path d="m15 5-7 7 7 7"/>',
 alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4m0 3v.5"/>',
 train:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-4m4.5 4-1.5-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',
 food:'<path d="M5 3v8a2 2 0 0 0 2 2v8M9 3v8a2 2 0 0 1-2 2M7 3v6M17 21V3c-2 1-3 4-3 8h3"/>',
 walk:'<circle cx="13" cy="4.5" r="1.8"/><path d="m10 21 2-6 3 3v3M8 12l2-4 4 1 2 3m-4-3-2 6"/>',
 bed:'<path d="M3 18V6m0 8h18v4M3 14V10h7v4m11 0v-2a3 3 0 0 0-3-3h-8"/>',
 plane:'<path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5V18l7.5-2.5V19L8 21v1l4-1 4 1v-1l-2.5-2v-3.5L21 18z"/>',
 sparkle:'<path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18"/>'
});

/* ---------- Small parts ---------- */
// The blog build rewrites this to '../' (build-site.mjs), so the way back works on any host.
const BLOG_HOME='https://mlinku.github.io/';
const isWeb=typeof DELIVERY_MODE!=='undefined'&&DELIVERY_MODE==='web';
const PHASE_LABEL={before:'总览',during:'现在',after:'回顾'};
function img(id,eager=false){const p=PHOTOS[id];if(!p?.src)return '';return `<img src="${p.thumbnail||p.src}" alt="${e(p.sight||PLACE[id]?.name||'')}" width="${p.width||800}" height="${p.height||600}" loading="${eager?'eager':'lazy'}" decoding="async"${p.illustration?' class="contain"':''}>`;}
// The place an activity is about: its destination if it is a transfer, else its own place.
const heroPhoto=ev=>[...ev.place_ids].reverse().find(id=>photoSrc(id))||'';
const themeButton=()=>`<button type="button" class="icon-btn" data-action="theme" aria-label="切换日间或夜间模式">${icon('contrast')}</button>`;
// 喜多 (Bocchi the Rock!) keeps the quiet corners company: one pose per mood, never on rows, sheets or transport notes.
const kita=(pose,place)=>`<span class="kita kita-${pose} ${place}" aria-hidden="true"></span>`;
const daySeal=n=>`<span class="day-seal" aria-hidden="true"><b>${n}</b><small>日目</small></span>`;
const seal=(cls='')=>`<span class="seal${cls}" aria-hidden="true">済</span>`;
// Done is 丛雨, eyes closed and pleased; she pops in once when the row is ticked, then stays still.
function checkButton(date,ev,big=false){
 const done=activityState(date,ev.id)==='done',fresh=ui.justDone===date+':'+ev.id?' pop-in':'';
 const mark=done?`<span class="done-face${fresh}" aria-hidden="true"></span>`:icon('check');
 return `<button type="button" class="check${big?' check-big':''}${done?' on':''}" data-action="check" data-date="${date}" data-event="${e(ev.id)}" aria-pressed="${done}" aria-label="${done?'已完成，点按撤销':'标记完成'}：${e(ev.title)}">${mark}${big?`<span>${done?'已完成':'完成'}</span>`:''}</button>`;
}
const navButton=(stop,big=false)=>`<a class="nav${big?' nav-big':''}" href="${e(stop.url)}" target="_blank" rel="noopener noreferrer" aria-label="导航到${e(stop.name)}">${icon('pin')}${big?`<span class="nav-text"><b>导航</b><small>${e(stop.name)}</small></span>`:''}</a>`;
const openButton=(date,key,inner,cls)=>`<button type="button" class="${cls}" data-action="open" data-date="${date}" data-key="${e(key)}">${inner}</button>`;
// Line names read like station signage; every company gets the same badge (no guessed brand colours).
const LINE_NAMES=/(大阪环状线|环状线|JR|京阪|近铁|近鉄|阪急|南海|地铁|地下鉄|Port Liner|梦咲线|ゆめ咲線|HARUKA|Rapi:t|APM)/g;
const transitHTML=note=>e(note).replace(TRANSIT_CAUTION,'<strong class="caution">$1</strong>').replace(LINE_NAMES,'<span class="ln">$1</span>');
// Test contract: the transport container keeps aria-label="交通说明".
const transportBlock=notes=>`<div class="transport" role="group" aria-label="交通说明"><ul>${notes.map(n=>`<li>${transitHTML(n)}</li>`).join('')}</ul></div>`;
const linkItem=it=>it.url?(it.text.length<8?external(e(it.text)+' ↗',it.url):`${e(it.text)} ${external('资料 ↗',it.url)}`):e(it.text);
function deadlines(d,minutes,mascot=''){
 const list=hardStops(d);if(!list.length)return '';
 return `<section class="block timetable"><h2 class="block-title">关键时间${mascot}</h2><ul>${list.map(t=>{
  const left=minutes==null?null:t.minutes-minutes,state=left==null?'':left<0?' past':left<=60?' soon':'';
  return `<li class="stop ${t.kind}${state}"><b>${t.time}</b><span>${e(t.text)}</span>${left==null?'':`<small>${left<0?'已过':'还有 '+duration(left)}</small>`}</li>`;
 }).join('')}</ul></section>`;
}
function stayBlock(d,i){
 if(!d.overnight){const b=PLAN.bookings.find(x=>x.id==='flight_home'),from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return `<section class="block"><h2 class="block-title">回程</h2>${passHTML(b,from,to)}</section>`;}
 const p=PLACE[d.overnight],[,back]=dayTimes(d,i);
 return `<section class="block stay">${murasame('curious','on-card')}<h2 class="block-title">今晚住</h2><div class="stay-row">${photoSrc(p.id)?`<span class="stay-photo">${img(p.id)}</span>`:''}<div><p class="stay-name">${e(p.name)}</p><p class="muted">${e(back[0])} ${e(back[1])}${back[2]?' · '+e(back[2]):''}</p></div></div><div class="actions">${external(icon('pin')+'<span>酒店地图</span>',p.map_search_url,'btn')}${p.address_ja?`<button type="button" class="btn" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</div></section>`;
}
const passHTML=(b,from,to)=>`<div class="pass"><div class="pass-end"><small>${e(from.city)}</small><b>${from.time}</b></div><span class="pass-line" aria-hidden="true">${icon('plane')}</span><div class="pass-end"><small>${e(to.city)}</small><b>${to.time}</b></div></div><p class="muted">${e(b.airline)} ${e(b.flight_number||'')} · ${e(from.date)} · ${e(flightTerminals(b))}</p>`;
// The trip as a line: each day a station, today lit.
function dayLine(){
 const today=todayIndex();
 return `<ol class="line days">${PLAN.days.map((d,i)=>{const info=dayPresentation(d),p=progress(d);
  return `<li class="${i===today?'now':''}${p.done&&p.done===p.total?' done':''}"><a class="day-link" href="#day/${d.date}"><span class="dl-date"><b>${dateLabel(d.date)}</b><small>${i===today?'今天':e(d.weekday)}</small></span><span class="node photo">${img(info.cover)}</span><span class="dl-main"><b>${e(info.short)}</b><small>${e(dayHighlights(d))}</small></span>${p.done?(p.done===p.total?seal(' small'):`<span class="dl-done">${p.done}/${p.total}</span>`):''}</a></li>`;}).join('')}</ol>`;
}

/* ---------- 现在 ---------- */
function nowScreen(){
 const s=tripStatus();
 if(s.phase==='before')return beforeScreen(s);
 if(s.phase==='after')return `${coverHero('旅程已结束','2026.11.30 — 12.07 · 辛苦了')}<section class="block">${scene('home')}<h2 class="block-title">回看 8 天${kita('cheer','in-title')}</h2>${dayLine()}</section>`;
 const d=PLAN.days[s.index],info=dayPresentation(d),st=nowState(d,s.minutes),p=progress(d),notes=fieldNotes(d);
 return `<header class="now-head"><div><p class="kicker">${dateLabel(d.date)} ${e(d.weekday)} · 日本时间 <b>${clock(s.minutes)}</b></p><h1 class="display">${e(info.short)}</h1><p class="muted">${e(info.eyebrow)}</p></div><div class="now-marks">${dayDoodle(d.date)}${daySeal(s.index+1)}</div></header>
 ${st.focus?focusCard(d,st,s.minutes):`<section class="focus finished"><div class="band murasame" role="img" aria-label="丛雨"></div><div class="focus-body"><p class="focus-label">今天</p><h2 class="title">安排已经走完</h2><p class="lead">辛苦了，早点休息。</p></div></section>`}
 ${st.upcoming.length?`<section class="block"><h2 class="block-title">接下来${kita('run','in-title')}</h2><ol class="line mini">${st.upcoming.map(ev=>{const start=eventStart(ev),stop=navStop(d,ev),major=isMajorEvent(d,ev);return `<li class="${major?'major':'minor'}">${openButton(d.date,ev.id,`<b class="t">${start===null?'随后':clock(start)}</b><span class="node"></span><span class="mini-title">${e(ev.title)}</span>`,'mini-row')}${stop?navButton(stop):''}</li>`;}).join('')}</ol></section>`:''}
 ${deadlines(d,s.minutes)}
 ${stayBlock(d,s.index)}
 <div class="links">${notes.length?openButton(d.date,'notes',`${icon('alert')}<span>情况有变时 · ${notes.length} 条</span>${icon('chevron')}`,'link-row warn'):''}<a class="link-row" href="#day/${d.date}">${icon('calendar')}<span>全天行程 · 已完成 ${p.done}/${p.total}</span>${icon('chevron')}</a></div>`;
}
function navStop(d,ev){const first=mealRows(d,ev).find(r=>r[1]==='首选');return ev.category==='rest'&&!isMajorEvent(d,ev)?null:navTarget(ev,navigationStops(ev,d,!!(first&&first[0]!=='早餐')));}
function focusCard(d,st,minutes){
 const ev=st.focus,m=eventModel(d,ev),wait=m.start===null?null:m.start-minutes,photo=heroPhoto(ev);
 const label=st.started?'正在进行':wait>0?`${duration(wait)}后`:'下一项',primary=m.meals.find(x=>x.primary);
 const over=`<span class="live-pill${st.started?' on':''}">${label}</span><span class="band-time">${e(m.time)}</span>`;
 return `<section class="focus${st.started?' live':''}" aria-label="${label}：${e(m.title)}">
 ${photo?`<div class="band">${img(photo,true)}<div class="band-over">${over}</div></div>`:`<div class="band plain">${dayDoodle(d.date)}<div class="band-over">${over}</div></div>`}
 <div class="focus-body">
 <h2 class="title">${e(m.title)}</h2>
 ${m.line?`<p class="lead">${e(m.line)}</p>`:''}
 ${m.notice?`<div class="notice">${icon('alert')}<div>${m.notice}</div></div>`:''}
 ${transitCautions(m.transport).length?transportBlock(transitCautions(m.transport)):''}
 ${primary?`<p class="focus-meal"><span class="tag ok">首选</span><b lang="ja">${e(primary.name)}</b><button type="button" class="icon-btn small" data-action="copy" data-copy="${e(primary.name)}" aria-label="复制店名">${icon('copy')}</button></p>`:''}
 <div class="focus-actions">${m.nav?navButton(m.nav,true):''}${m.major?checkButton(d.date,ev,true):''}</div>
 ${openButton(d.date,ev.id,`全部详情${icon('chevron')}`,'more')}
 </div></section>`;
}
function coverHero(title,sub){
 const ids=['byodoin','inari','dotonbori'].filter(id=>photoSrc(id));
 return `<header class="cover"><div class="cover-photos">${ids.map((id,i)=>`<span>${img(id,i===0)}</span>`).join('')}</div><a class="cover-back" href="${BLOG_HOME}">${icon('back')}<span>まひろ的小站</span></a><div class="cover-over"><p class="kicker">京都 · 宇治 · 大阪 · 奈良 · 和歌山 · 神户</p><h1 class="display">${e(title)}</h1><p>${e(sub)}</p></div>${themeButton()}</header>`;
}
function beforeScreen(s){
 const open=openPurchases().filter(p=>p.tone==='danger'&&!p.done);
 return `${coverHero('关西秋日手帖','2026.11.30 — 12.07 · 8 天 7 晚')}
 <section class="focus countdown"><div class="scene-band">${scene('depart')}</div><div class="focus-body">${kita('cheer','on-countdown')}<p class="count"><b>${s.days}</b><span>天后出发</span></p><p class="lead">临行待办 ${todoDone()} / ${TODOS.length}</p>${open.map(p=>`<p class="alert-line">${icon('alert')}<span>${e(p.item)} · ${e(p.label)}</span></p>`).join('')}<div class="focus-actions"><a class="btn primary" href="#prep">去准备</a><a class="btn" href="#day/${PLAN.days[0].date}">看第 1 天</a></div></div></section>
 
 <section class="block"><h2 class="block-title">8 天行程</h2>${dayLine()}</section>`;
}

/* ---------- 行程 ---------- */
function strip(items,current){return `<nav class="strip" aria-label="选择日期">${items.map(([href,i,top])=>`<a class="strip-day${i===current?' on':''}${i===todayIndex()?' today':''}" href="${href}" ${i===current?'aria-current="date"':''}><small>${e(top)}</small><b>${dateLabel(PLAN.days[i].date)}</b></a>`).join('')}</nav>`;}
function dayScreen(){
 const i=ui.day,d=PLAN.days[i],info=dayPresentation(d),[leave,back]=dayTimes(d,i),s=tripStatus(),today=s.phase==='during'&&s.index===i;
 const now=today?nowState(d,s.minutes):null,flow=DayFlow.forDay(d),level=intensity(d),notes=fieldNotes(d),shots=shotProgress(d.date);
 return `${strip(PLAN.days.map((x,j)=>['#day/'+x.date,j,j===todayIndex()?'今天':DETAILS[x.date].cityLabel]),i)}
 <article class="day-ticket"><header class="day-hero">${img(info.cover,true)}<span class="day-sticker">${dayDoodle(d.date)}</span><div class="hero-over"><p class="kicker">${dateLabel(d.date)} ${e(d.weekday)}${today?' · <em>今天</em>':''}</p><h1 class="display">${e(info.short)}</h1><p>${e(info.eyebrow)}</p></div>${daySeal(i+1)}</header>
 <dl class="ticket-facts"><div><dt>${doodle('sun').replace('class="doodle"','class="doodle dt-mark"')}${e(leave[0])}</dt><dd>${e(leave[1])}</dd></div><div><dt>${doodle('moon').replace('class="doodle"','class="doodle dt-mark"')}${e(back[0])}</dt><dd>${e(back[1]).replace(' – ',' – ')}</dd></div><div><dt>强度</dt><dd title="${e(level.full)}"><span class="dots" aria-hidden="true">${[1,2,3,4].map(n=>`<i${n<=level.level?' class="on"':''}></i>`).join('')}</span>${e(level.label)}</dd></div></dl></article>
 <div class="chips">${notes.length?openButton(d.date,'notes',`${icon('alert')}<span>情况有变时 · ${notes.length}</span>`,'chip warn'):''}${d.overnight?openButton(d.date,'stay',`${icon('bed')}<span>酒店</span>`,'chip'):''}${shots.total?`<a class="chip" href="#shots/${d.date}">${icon('camera')}<span>巡礼 ${shots.done}/${shots.total}</span></a>`:''}</div>
 ${deadlines(d,today?s.minutes:null,kita(flow.done===flow.total?'grin':'peek','in-title'))}
 <div class="day-progress"><span>已完成 <b>${flow.done}/${flow.total}</b></span><div class="bar" role="progressbar" aria-label="当天完成进度" aria-valuemin="0" aria-valuemax="${flow.total}" aria-valuenow="${flow.done}"><i style="width:${flow.done/flow.total*100}%"></i></div></div>
 ${flow.sections.map(section=>{
  const [label,...rest]=section.name.split(' · ');
  const clocks=section.events.flatMap(ev=>[...compactTime(ev.time_label).matchAll(/\d{1,2}:\d{2}/g)].map(x=>x[0])),range=clocks.length?clocks[0]+(clocks.length>1?' – '+clocks.at(-1):''):'';
  return `<section class="phase"><h2 class="phase-title"><span class="phase-name">${e(label)}</span>${rest.length?`<small>${e(rest.join(' · '))}</small>`:''}${range?`<span class="range">${range}</span>`:''}</h2><ol class="line rows">${section.events.map(ev=>row(d,ev,now)).join('')}</ol></section>`;
 }).join('')}
 <nav class="pager" aria-label="相邻日期">${i>0?`<a href="#day/${PLAN.days[i-1].date}">${icon('back')}<span>${dateLabel(PLAN.days[i-1].date)} ${e(dayPresentation(PLAN.days[i-1]).short)}</span></a>`:'<span></span>'}${i<PLAN.days.length-1?`<a class="next" href="#day/${PLAN.days[i+1].date}"><span>${dateLabel(PLAN.days[i+1].date)} ${e(dayPresentation(PLAN.days[i+1]).short)}</span>${icon('chevron')}</a>`:''}</nav>`;
}
function row(d,ev,now){
 const done=activityState(d.date,ev.id)==='done',major=isMajorEvent(d,ev),start=eventStart(ev),flags=[];
 if(noticeParts(d,ev).notice)flags.push('<span class="flag warn">注意</span>');
 if(ev.optional)flags.push('<span class="flag">可选</span>');
 const ticket=major?eventTicket(d,ev):null;if(ticket&&!ticket.done&&ticket.tone!=='plain')flags.push(`<span class="flag ${ticket.tone==='danger'?'warn':''}">${e(ticket.label)}</span>`);
 const shots=pilgrimageDay(d.date).filter(p=>p.event_id===ev.id&&pointEnabled(p)).length;if(shots)flags.push(`<span class="flag">巡礼 ${shots}</span>`);
 // The day's first row keeps its clock even when it is a transfer: it is when the day starts.
 const fixed=fixedTime(ev),showClock=major||fixed||effectiveEvents(d)[0]?.id===ev.id||now?.current?.id===ev.id,passed=!major&&passedConnector(d,ev);
 const words=showClock?(start===null?compactTime(ev.time_label):''):spanText(ev),thumb=major?eventPhotoIds(ev)[0]:'';
 const node=thumb?`<span class="node photo">${img(thumb)}</span>`:`<span class="node${major?' big':''}">${major?icon(CATEGORY_ICON[ev.category]||'pin'):''}</span>`;
 return `<li class="row ${major?'major':'minor'}${done||passed?' done':''}${now?.current?.id===ev.id?' now':''}" id="row-${e(ev.id)}">${openButton(d.date,ev.id,`<span class="row-time${fixed?' fixed':''}">${showClock?(start===null?'随后':clock(start)):''}</span>${node}<span class="row-text"><span class="row-title">${major?'':icon(CATEGORY_ICON[ev.category]||'pin')}${e(ev.title)}</span>${words||flags.length?`<span class="row-meta">${words?`<span>${e(words)}</span>`:''}${flags.join('')}</span>`:''}</span>`,'row-open')}${major?checkButton(d.date,ev):''}</li>`;
}

/* ---------- Sheets ---------- */
// The title takes focus when the sheet opens, so a screen reader announces it and no button shows a focus ring.
const murasame=(mood,cls='')=>`<span class="murasame-face ${mood} ${cls}" aria-hidden="true"></span>`;
const sheetHead=(kicker,title,mark='')=>`<header class="sheet-head">${mark}<div>${kicker?`<p class="kicker">${kicker}</p>`:''}<h2 class="title" tabindex="-1" autofocus>${title}</h2></div><button type="button" class="icon-btn" data-action="close-sheet" aria-label="关闭">${icon('close')}</button></header>`;
function mealHTML(m){return `<article class="meal${m.primary?' primary':''}"><p class="meal-rank"><span class="tag${m.primary?' ok':''}">${e(m.rank)}</span>${m.budget?`<span>${e(m.budget)}</span>`:''}</p><h4 lang="ja">${e(m.name)}</h4>${m.hint?`<p class="muted">${e(m.hint)}</p>`:''}<div class="actions">${m.map?external(icon('map')+`<span>${m.mapLabel}</span>`,m.map,'btn'):''}<button type="button" class="btn" data-action="copy" data-copy="${e(m.name)}">${icon('copy')}<span>复制店名</span></button>${m.source?external('<span>官网 ↗</span>',m.source,'btn ghost'):''}</div></article>`;}
function foodHTML(item){const p=PLACE[item.place];return `<section class="sec"><h3>${e(item.label)}</h3><article class="meal">${photoSrc(item.place)&&!item.hidePhoto?`<button type="button" class="photo wide" data-action="zoom-photo" data-place="${item.place}">${img(item.place)}</button>`:''}<h4>${e(item.title)}</h4><p class="ja" lang="ja">${e(p.name_ja)}</p><p>${e(cleanText(item.text))}</p><p class="muted">${e(cleanText(item.budget))}</p><div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_search_url,'btn')}${external('<span>店铺资料 ↗</span>',item.source,'btn ghost')}</div></article></section>`;}
function eventSheet(d,ev){
 const m=eventModel(d,ev),cover=m.photos[0]||'',rest=m.photos.slice(1);
 return `${sheetHead(`${e((m.timeHint?m.timeHint+' ':'')+m.time)}${m.status?` · <span class="tag">${e(m.status)}</span>`:''}`,e(m.title))}
 <div class="sheet-body">
 ${cover?`<button type="button" class="sheet-cover" data-action="zoom-photo" data-place="${cover}" aria-label="放大${e(PLACE[cover].name)}照片">${img(cover,true)}<span>${e(PLACE[cover].name)}</span></button>`:''}
 ${m.line?`<p class="lead">${e(m.line)}</p>`:''}
 ${m.optionNote?`<p class="note">${e(m.optionNote)}</p>`:''}
 ${m.hotels.map(p=>`<p class="ja" lang="ja">${e(p.name_ja)}</p>`).join('')}
 ${m.notice?`<div class="notice">${icon('alert')}<div>${m.notice}</div></div>`:''}
 ${m.facts?`<p class="note">${e(m.facts)}</p>`:''}
 ${m.links.length?`<div class="actions">${m.links.join('')}</div>`:''}
 ${m.transport.length?`<section class="sec"><h3>怎么走</h3>${transportBlock(m.transport)}</section>`:''}
 ${m.via.length?`<details class="fold"><summary>沿途 ${m.via.length-1} 站</summary><ol class="line via">${m.via.map(s=>`<li>${external(`<span class="node"></span><span><b>${e(s.name)}</b>${s.sub?`<small lang="ja">${e(s.sub)}</small>`:''}</span>`,s.url)}</li>`).join('')}</ol></details>`:''}
 ${m.meals.length?`<section class="sec"><h3>吃什么</h3>${m.meals.map(mealHTML).join('')}</section>`:''}
 ${m.shots.length||m.rally?`<section class="sec"><h3>巡礼</h3><div class="actions">${m.shots.length?`<a class="btn" href="#shots/${d.date}/${e(m.shots[0].id)}">${icon('camera')}<span>对照 ${m.shots.length} 组</span></a>`:''}${m.rally?external('<span>打开集章活动 ↗</span>',PILGRIMAGE.rally.entry_url,'btn'):''}</div></section>`:''}
 ${m.choices?`<section class="sec choices"><h3>可调整</h3>${m.choices}</section>`:''}
 ${rest.length?`<div class="photos">${rest.map(id=>`<button type="button" class="photo" data-action="zoom-photo" data-place="${id}">${img(id)}<span>${e(PLACE[id].name)}</span></button>`).join('')}</div>`:''}
 ${m.details.map(x=>`<section class="sec"><h3>${e(x.title)}</h3><ul class="plain">${x.items.map(it=>`<li>${linkItem(it)}</li>`).join('')}</ul></section>`).join('')}
 ${m.food.map(foodHTML).join('')}
 ${m.placeNotes.length?`<section class="sec"><h3>地点说明</h3>${m.placeNotes.map(t=>`<p>${e(t)}</p>`).join('')}</section>`:''}
 ${m.fullNote?`<details class="fold"><summary>完整说明</summary><p>${e(m.fullNote)}</p></details>`:''}
 </div>
 ${m.nav||m.major?`<footer class="sheet-foot">${m.nav?navButton(m.nav,true):''}${m.major?checkButton(d.date,ev,true):''}</footer>`:''}`;
}
function sheetHTML(date,key){
 const i=PLAN.days.findIndex(x=>x.date===date),d=PLAN.days[i];if(!d)return '';
 if(key==='notes')return `${sheetHead(dateLabel(date)+' · 延误或天气变化时','情况有变时',murasame('shock','in-sheet'))}<div class="sheet-body"><ul class="plain roomy">${fieldNotes(d).map(t=>`<li>${e(t)}</li>`).join('')}</ul></div>`;
 if(key==='stay'&&d.overnight){const p=PLACE[d.overnight];return `${sheetHead(dateLabel(date)+' · 今晚住',e(p.name))}<div class="sheet-body">${photoSrc(p.id)?`<button type="button" class="sheet-cover" data-action="zoom-photo" data-place="${p.id}">${img(p.id,true)}</button>`:''}<p class="ja big" lang="ja">${e(p.name_ja)}</p>${p.address_ja?`<p class="ja" lang="ja">${e(p.address_ja)}</p>`:''}${PLACE_LOCATIONS[p.id]?`<p class="muted">${e(PLACE_LOCATIONS[p.id])}</p>`:''}${PLACE_DETAILS[p.id]?`<p>${e(cleanText(PLACE_DETAILS[p.id]))}</p>`:''}</div><footer class="sheet-foot">${external(icon('pin')+'<span>酒店地图</span>',p.map_search_url,'nav nav-big')}${p.address_ja?`<button type="button" class="check-big copy" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</footer>`;}
 const ev=effectiveEvents(d).find(x=>x.id===key);
 return ev?eventSheet(d,ev):'';
}
let sheetState=null;
// Dialogs slide or fade out before they close; reopening mid-exit simply cancels the exit.
const exiting=new WeakMap(),motionOK=()=>typeof matchMedia!=='function'||!matchMedia('(prefers-reduced-motion: reduce)').matches;
function closeDialog(dlg){
 if(!dlg?.open||exiting.has(dlg))return;
 if(!motionOK())return dlg.close();
 dlg.classList.add('closing');
 exiting.set(dlg,setTimeout(()=>{exiting.delete(dlg);dlg.classList.remove('closing');dlg.close();},200));
}
function showDialog(dlg){
 if(exiting.has(dlg)){clearTimeout(exiting.get(dlg));exiting.delete(dlg);dlg.classList.remove('closing');}
 if(!dlg.open)dlg.showModal();
}
function openSheet(date,key,{push=true,pushed=push}={}){
 const html=sheetHTML(date,key);if(!html)return;
 const dlg=$('#sheet');dlg.innerHTML=html;dlg.dataset.date=date;dlg.dataset.key=key;
 showDialog(dlg);
 dlg.querySelector('.sheet-body')?.scrollTo(0,0);
 if(push)history.pushState({sheet:{date,key}},'',location.href);
 sheetState={date,key,pushed};
}
function hideSheet(){closeDialog($('#sheet'));sheetState=null;}
function closeSheet(){
 if(!sheetState)return hideSheet();
 if(sheetState.pushed){history.back();return;}
 // Opened from a deep link: there is no entry to go back to, so drop the activity from the address instead.
 const date=sheetState.date;hideSheet();
 if(/^#day\/[^/]+\/./.test(location.hash))history.replaceState(null,'','#day/'+date);
}
function refreshSheet(){
 if(!sheetState)return;
 const body=$('#sheet .sheet-body'),y=body?.scrollTop||0,html=sheetHTML(sheetState.date,sheetState.key);
 if(!html)return closeSheet();
 $('#sheet').innerHTML=html;$('#sheet .sheet-body')?.scrollTo(0,y);
}

/* ---------- 巡礼 ---------- */
function shotImage(p,kind,label){
 const image=p[kind];
 return image?.src?`<button type="button" class="shot-img" data-action="zoom-shot" data-shot="${e(p.id)}" data-kind="${kind}" aria-label="放大${e(p.title)}${label}"><img src="${image.thumbnail||image.src}" alt="${e(p.title)} · ${label}" width="${image.width||800}" height="${image.height||450}" loading="lazy" decoding="async"><span>${label}</span></button>`
  :`<div class="shot-missing"><b>${label}待补</b><small>${e(image?.note||'尚未找到可核对的图片')}</small></div>`;
}
function shotHTML(p,n){
 const s=shotModel(p);
 return `<article class="shot${s.done?' done':''}" id="shot-${e(s.id)}">
 ${s.done?seal(ui.justDone==='shot:'+s.id?' shot-seal stamp-in':' shot-seal'):''}
 <header><p class="kicker">${n?`<span class="shot-n">${String(n).padStart(2,'0')}</span>`:''}${e(s.work)}${s.optional?' · 可选':s.reference?' · 参考':''}</p><h2 class="title">${e(s.title)}</h2><p class="ja" lang="ja">${e(s.nameJa)}</p></header>
 <div class="pair${s.images.length===1?' single':''}">${s.images.map(([kind,label])=>shotImage(p,kind,label)).join('')}</div>
 ${s.note?`<p class="shot-note"><b>站位</b>${e(s.note)}</p>`:''}
 <div class="actions">${external(icon('pin')+'<span>地图</span>',s.map,'btn')}${s.reference?'':`<button type="button" class="btn shot-toggle${s.done?' on':''}" data-action="shot" data-shot="${e(s.id)}" aria-pressed="${s.done}">${icon('check')}<span>${s.done?'已拍':'标记已拍'}</span></button>`}</div>
 <details class="fold"><summary>场景与来源</summary>${s.scene?`<p>${e(s.scene)}</p>`:''}${s.caption?`<p class="muted">${e(s.caption)}</p>`:''}${s.coords?`<p class="muted">${s.coords.lat}, ${s.coords.lng} · ${e(String(s.coords.precision||'').split(/[，,；]/).filter(x=>!/^s*(不是|非)/.test(x)).join('，'))} <button type="button" class="link" data-action="copy" data-copy="${s.coords.lat}, ${s.coords.lng}">复制坐标</button>${s.coords.source_url?' · '+external('定位依据 ↗',s.coords.source_url):''}</p>`:'<p class="muted">坐标待核准，按地点名称搜索。</p>'}${p.real?.source_url?`<p class="muted">实景：${e(p.real.credit||'原作者')} · ${external('来源 ↗',p.real.source_url)}</p>`:''}${p.anime?.source_url?`<p class="muted">作品画面：${e(p.anime.credit||'作品权利方')} · ${external('来源 ↗',p.anime.source_url)}</p>`:''}${p.comparison?`<p class="muted">${e(p.comparison.credit)} · ${external('对照原图 ↗',p.comparison.source_url)}</p>`:''}${(p.sources||[]).map(x=>`<p class="muted">${external(e(x.title)+' ↗',x.url)}</p>`).join('')}</details>
 </article>`;
}
function rallyHTML(d){
 if(d.date==='2026-12-03')return `<section class="block rally sketched"><span class="corner-sketch">${doodle('stamp')}</span><p class="kicker">${e(compactTime(effectiveEvents(d).find(ev=>ev.id==='kyoto_tower_visit').time_label))} · 京都塔</p><h2 class="title">京吹联动 · 叠印集章</h2><p>展望室5层领台纸，共7处章点；先完成收费区再出场，门票不能再次入场。</p><div class="actions">${external('<span>活动官网 ↗</span>','https://www.kyoto-tower.jp/event/eupho26autumn/','btn')}</div><details class="fold"><summary>参与规则</summary><p>活动期2026/9/1—12/20。进入展望室须购票，当前成人¥1,000。</p><p>周边店10:00—20:30，在展望室1层（大楼11楼）。</p></details></section>`;
 const r=PILGRIMAGE.rally;if(!r||r.date!==d.date)return '';
 return `<section class="block rally sketched" id="shot-rally"><span class="corner-sketch">${doodle('stamp')}</span><p class="kicker">11/1–12/20 · 后期</p><h2 class="title">京吹数字集章</h2><p>${e(cleanText(r.recommendation))}</p><div class="actions">${external('<span>参加活动 ↗</span>',r.entry_url,'btn primary')}</div>
 <details class="fold"><summary>集章点位 · ${r.spots.length}</summary>${r.spots.map(p=>`<article class="rally-spot"><h3>${e(p.title)}</h3><div class="pair">${p.real?.src?shotImage(p,'real','实景'):''}${shotImage(p,'anime','作品画面')}</div><p class="hint">${e(cleanText(p.match_note||p.caption||''))}</p><p>${e(cleanText(p.note))}</p><div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_url,'btn')}<button type="button" class="btn" data-action="copy" data-copy="${e(p.name_ja)}">${icon('copy')}<span>复制名称</span></button></div></article>`).join('')}</details>
 <details class="fold"><summary>规则与来源</summary>${r.rules.map(t=>cleanText(t)).filter(Boolean).map(t=>`<p>${e(t)}</p>`).join('')}<p>${external('活动官网 ↗',r.source_url)} · ${external('官方巡礼地图 PDF ↗',r.map_pdf)}</p><p class="muted">作品画面：©武田綾乃・宝島社／「響け！」製作委員会2024，京阪活动官网。核查：2026/10/1。</p></details></section>`;
}
const shotDays=()=>PLAN.days.map((_,i)=>i).filter(i=>pilgrimageDay(PLAN.days[i].date).length);
function shotsScreen(){
 const days=shotDays();
 if(!days.includes(ui.shotsDay)){const t=todayIndex();ui.shotsDay=days.includes(t)?t:days.includes(ui.day)?ui.day:days[0];}
 const d=PLAN.days[ui.shotsDay],{main,optional,reference}=dayShots(d),pg=shotProgress(d.date);
 return `${strip(days.map(i=>['#shots/'+PLAN.days[i].date,i,i===todayIndex()?'今天':DETAILS[PLAN.days[i].date].cityLabel]),ui.shotsDay)}
 <header class="screen-head"><div><p class="kicker">${doodle(pg.total&&pg.done===pg.total?'sparkle':'camera').replace('class="doodle"','class="doodle kicker-mark"')}${dateLabel(d.date)} · 实景 × 作品</p><h1 class="display">巡礼对照</h1></div>${kita('side','in-head')}<p class="count"><b>${pg.done}</b><span>/ ${pg.total} 已拍</span></p></header>
 ${rallyHTML(d)}
 ${main.map((p,n)=>shotHTML(p,n+1)).join('')}
 ${optional.length?`<details class="fold block"><summary>可选点位 · ${optional.length}</summary><p class="hint">时间有余时顺路拍，默认不安排。</p>${optional.map(p=>shotHTML(p,0)).join('')}</details>`:''}
 ${reference.length?`<details class="fold block"><summary>参考资料 · ${reference.length}</summary><p class="hint">不在当天路线，不计入巡礼进度。</p>${reference.map(p=>shotHTML(p,0)).join('')}</details>`:''}`;
}

/* ---------- 准备 ---------- */
const todoRow=t=>`<button type="button" class="todo${t.done?' on':''}" data-action="todo" data-todo="${e(t.id)}" aria-pressed="${t.done}"><span class="box">${icon('check')}</span><span>${e(t.short||t.text)}</span></button>`;
function prepScreen(){
 const g=todoGroups(),open=openPurchases();
 return `<header class="screen-head"><div><p class="kicker">出发前与旅途中</p><h1 class="display">准备${doodle('clipboard').replace('class="doodle"','class="doodle head-mark"')}</h1></div>${themeButton()}</header>
 <section class="block tickets-block"><span class="corner-sketch">${doodle('ticket')}</span><h2 class="block-title">票务</h2><ul class="tickets">${open.map(t=>`<li class="ticket ${t.tone}"><button type="button" class="ticket-tap" data-action="todo" data-todo="${e(t.id)}" aria-pressed="${t.done}" aria-label="${e(t.item)}：${e(t.label)}，点按${t.done?'取消':'标记已办'}"><span class="ticket-main"><b>${e(t.item)}</b><small>${t.qty?'×'+t.qty+' · ':''}${e(t.date)} 使用</small></span><span class="ticket-state">${t.done?icon('check'):''}${e(t.label)}</span></button></li>`).join('')}</ul></section>
 <section class="block todos"><h2 class="block-title">待办 <small>${todoDone()} / ${TODOS.length}</small>${kita('sit-happy','in-title')}</h2><h3 class="sub">出发前完成</h3>${g.before.map(todoRow).join('')}<h3 class="sub">旅途中再确认</h3>${g.trip.map(x=>`<p class="when">${e(x.label)}</p>${x.items.map(todoRow).join('')}`).join('')}<details class="fold"><summary>展开全文</summary><ul class="plain">${[...g.before,...g.trip.flatMap(x=>x.items)].map(t=>`<li>${e(t.text)}</li>`).join('')}</ul></details></section>
 <section class="block sketched"><span class="corner-sketch">${doodle('plane')}</span><h2 class="block-title">航班 · 当地时间</h2>${PLAN.bookings.filter(b=>b.type==='flight').map(b=>`<div class="flight"><p class="kicker">${b.from==='hkg'?'去程':'回程'}</p>${passHTML(b,flightLocal(b,'departure'),flightLocal(b,'arrival'))}</div>`).join('')}</section>
 <section class="block sketched"><span class="corner-sketch">${doodle('inn')}</span><h2 class="block-title">酒店</h2>${PLAN.bookings.filter(b=>b.type==='hotel').map(b=>{const p=PLACE[b.place_id];return `<div class="hotel"><p class="kicker">${b.place_id==='hotel_kyoto'?'京都':'大阪'} · ${dateLabel(b.checkin_date)}—${dateLabel(b.checkout_date)}</p><p class="ja big" lang="ja">${e(p.name_ja)}</p>${p.address_ja?`<p class="ja" lang="ja">${e(p.address_ja)}</p>`:''}<div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_search_url,'btn')}${p.address_ja?`<button type="button" class="btn" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</div></div>`;}).join('')}</section>
 <details class="fold block"><summary>参考资料</summary>
  <h3 class="sub">作品日文名</h3>${WORK_NAMES.map(t=>`<p class="copy-line"><span lang="ja">${e(t)}</span><button type="button" class="icon-btn small" data-action="copy" data-copy="${e(t)}" aria-label="复制${e(t)}">${icon('copy')}</button></p>`).join('')}
  <h3 class="sub">保存的早季红叶预测 · 截至2026/9/28</h3>${PLAN.foliage.spots.map(s=>`<p>${e(PLACE[s.place_id].name)}：到访 ${dateLabel(s.visit_date)} · 预测观赏 ${dateLabel(s.forecast_viewing_start)} · 预测落叶 ${dateLabel(s.forecast_leaf_fall_start)} · ${external('来源 ↗',s.source)}</p>`).join('')}
  <h3 class="sub">预算</h3><p>普通正餐每人¥1,000—2,500；12/6和牛自助现价¥5,000/人、上限¥6,000/人。</p><p>门票（两人）：${PLAN.visit_budget.filter(v=>!v.item).map(v=>e(({kodaiji:'高台寺',kyoto_tower:'京都塔',todaiji:'大佛殿'})[v.place_id]||PLACE[v.place_id].name)+' ¥'+v.two_adults_jpy.toLocaleString('en-US')).join('、')}；清水寺与购物另计。</p>
  <h3 class="sub">离线使用</h3><p>地图和来源链接需联网；勾选只存在本机浏览器。</p>
 </details>
 <a class="link-row" href="${BLOG_HOME}">${icon('back')}<span>返回まひろ的小站</span>${icon('chevron')}</a>`;
}

/* ---------- Shell ---------- */
const ui={tab:'now',day:Math.max(0,todayIndex()),shotsDay:null,target:'',justDone:'',moved:''};
const TABS=[['now','clock'],['day','calendar'],['shots','camera'],['prep','bag']];
const TAB_LABEL={day:'行程',shots:'巡礼',prep:'准备'};
function tabHref(id){return id==='day'?'#day/'+PLAN.days[ui.day].date:id==='shots'?'#shots'+(ui.shotsDay!=null?'/'+PLAN.days[ui.shotsDay].date:''):'#'+id;}
const SCREENS={now:nowScreen,day:dayScreen,shots:shotsScreen,prep:prepScreen};
// Old addresses (#day/<date>/timeline/<event>, …/pilgrimage/<point>) still land in the right place.
function parseHash(){
 const parts=location.hash.slice(1).split('/'),at=date=>PLAN.days.findIndex(d=>d.date===date);
 ui.target='';
 if(parts[0]==='day'&&at(parts[1])>=0){
  ui.day=at(parts[1]);
  if(parts[2]==='pilgrimage'){ui.tab='shots';const p=parts[3]&&pilgrimagePoints.find(x=>x.id===parts[3]);ui.shotsDay=p?at(p.date):ui.day;if(parts[3])ui.target='shot-'+parts[3];return '';}
  ui.tab='day';const key=parts.slice(2).filter(x=>x&&x!=='timeline'&&x!=='details')[0]||'';
  const d=PLAN.days[ui.day];
  // The old 路线 sheet is gone; its address opens the day itself.
  if(key==='route')return '';
  if(!key||['notes','stay'].includes(key)||effectiveEvents(d).some(ev=>ev.id===key))return key;
  const moved=MOVED_LINKS[d.date]?.[key];
  if(moved){ui.day=at(moved);ui.moved='这项已移到 '+dateLabel(moved);return key;}
  ui.moved='这项已不在最终行程，已打开 '+dateLabel(d.date)+' 全天';return '';
 }
 if(parts[0]==='shots'){ui.tab='shots';const p=parts[2]&&pilgrimagePoints.find(x=>x.id===parts[2]);if(p)ui.shotsDay=at(p.date);else if(at(parts[1])>=0)ui.shotsDay=at(parts[1]);if(parts[2])ui.target='shot-'+parts[2];return '';}
 ui.tab=parts[0]==='prep'?'prep':'now';return '';
}
function renderMain(){
 const main=$('#main'),stripWas=main.querySelector('.strip')?.scrollLeft;
 main.className='screen screen-'+ui.tab; // drops .enter, so a refresh never replays the entrance
 main.innerHTML=(storageOK?'':`<p class="banner" role="alert">${murasame('shock','in-banner')}<span>浏览器未允许本机保存，关闭后勾选可能丢失。</span></p>`)+SCREENS[ui.tab]();
 const phase=tripStatus().phase;
 $('.tabbar').innerHTML=TABS.map(([id,ico])=>`<a href="${tabHref(id)}" class="tab${ui.tab===id?' on':''}"${ui.tab===id?' aria-current="page"':''}>${icon(ico)}<span>${id==='now'?PHASE_LABEL[phase]:TAB_LABEL[id]}</span></a>`).join('');
 const rail=main.querySelector('.strip'),on=rail?.querySelector('.on');
 // The date strip glides from where it was to the chosen day instead of jumping.
 if(rail&&on){const left=on.offsetLeft-rail.clientWidth/2+on.clientWidth/2;if(stripWas!=null&&motionOK()){rail.scrollLeft=stripWas;rail.scrollTo({left,behavior:'smooth'});}else rail.scrollLeft=left;}
 document.title=(ui.tab==='day'?dateLabel(PLAN.days[ui.day].date)+' '+dayPresentation(PLAN.days[ui.day]).short:ui.tab==='shots'?'巡礼对照':ui.tab==='prep'?'准备':PHASE_LABEL[phase])+' · 关西秋日手帖';
}
// app.js's page tools call render() after recording a completion.
function render(){renderMain();refreshSheet();}
const scrollMemory=new Map();let viewKey='';
function route(){
 if(viewKey)scrollMemory.set(viewKey,scrollY);
 const deep=parseHash(),before=viewKey;
 renderMain();
 viewKey=ui.tab+'/'+(ui.tab==='day'?ui.day:ui.tab==='shots'?ui.shotsDay:'');
 // A new tab or day eases in; refreshes in place (a tick, a choice) do not move anything.
 if(before&&before!==viewKey&&motionOK())$('#main').classList.add('enter');
 const target=ui.target&&document.getElementById(ui.target);
 if(target)target.scrollIntoView({block:'start'});else window.scrollTo({top:scrollMemory.get(viewKey)||0,behavior:'instant'});
 const kept=history.state?.sheet;
 if(ui.moved){toast(ui.moved);ui.moved='';}
 if(deep)openSheet(PLAN.days[ui.day].date,deep,{push:false});
 else if(kept)openSheet(kept.date,kept.key,{push:false,pushed:true});
 else hideSheet();
}
// Re-render in place, keeping the reading position and every open fold. A fresh 丛雨 / 済 mark plays once, then stays still.
const foldKey=el=>(el.closest('[id]')?.id||'')+'|'+el.querySelector('summary')?.textContent;
function refresh(){
 const y=scrollY,open=new Set([...$('#main').querySelectorAll('details[open]')].map(foldKey));
 renderMain();
 $('#main').querySelectorAll('details').forEach(el=>{if(open.has(foldKey(el)))el.open=true;});
 window.scrollTo({top:y,behavior:'instant'});refreshSheet();
 if(ui.justDone)setTimeout(()=>{ui.justDone='';},700);
}

function toggleCheck(date,id){
 const d=PLAN.days.find(x=>x.date===date),was=activityState(date,id)==='done',title=effectiveEvents(d).find(x=>x.id===id)?.title||'';
 setCheck(date,id,!was);
 if(was)return refresh();
 try{navigator.vibrate?.(12);}catch{}
 ui.justDone=date+':'+id;
 // Completing from the sheet means "done here": close it and show the list moving on.
 if(sheetState?.key===id)closeSheet();
 refresh();
}
function toggleShot(id){
 const p=pilgrimagePoints.find(x=>x.id===id);if(!p)return;
 const key=shotKey(p),now=!state.checks[key];state.checks[key]=now;save();
 if(now)ui.justDone='shot:'+id;
 refresh();
}
function toggleTodo(id){state.todos[id]=!state.todos[id];save();refresh();}
const COLOR_MODE_KEY='user-color-scheme';
const systemColorMode=()=>typeof matchMedia==='function'&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
function toggleTheme(){
 const root=document.documentElement,next=(root.getAttribute('data-user-color-scheme')||systemColorMode())==='dark'?'light':'dark';
 if(next===systemColorMode())root.removeAttribute('data-user-color-scheme');else root.setAttribute('data-user-color-scheme',next);
 try{if(next===systemColorMode())localStorage.removeItem(COLOR_MODE_KEY);else localStorage.setItem(COLOR_MODE_KEY,next);}catch{}
}
function openZoom(title,image,switcher=''){
 const z=$('#zoom');
 z.innerHTML=`<div class="zoom-top"><h2>${e(title)}</h2><button type="button" class="icon-btn" data-action="zoom-close" aria-label="关闭">${icon('close')}</button></div><div class="zoom-stage"><img src="${image.src}" alt="${e(image.alt||title)}"></div>${switcher}${image.credit||image.source_url?`<p class="zoom-credit">${e(image.credit||'')}${image.source_url?' · '+external('来源 ↗',image.source_url):''}</p>`:''}`;
 showDialog(z);
}
function zoomShot(id,kind){
 const p=pilgrimagePoints.find(x=>x.id===id)||PILGRIMAGE.rally?.spots.find(x=>x.id===id),image=p?.[kind];if(!image?.src)return;
 // Flip between the two frames in place to line up the shot.
 const kinds=['anime','real'].filter(k=>p[k]?.src);
 const switcher=kind==='comparison'||kinds.length<2?'':`<div class="zoom-switch" role="group" aria-label="切换对照图片">${kinds.map(k=>`<button type="button" data-action="zoom-shot" data-shot="${e(p.id)}" data-kind="${k}" aria-pressed="${kind===k}">${k==='real'?'实景':'作品画面'}</button>`).join('')}</div>`;
 openZoom(p.title,{...image,alt:p.title,credit:image.credit},switcher);
}
function zoomPhoto(id){const p=PHOTOS[id];if(p?.src)openZoom(PLACE[id].name,{src:p.src,alt:p.sight,credit:[p.sight,p.author,p.date].filter(Boolean).join(' · '),source_url:p.sourcePage});}

function boot(){
 $('#app').innerHTML=`${DOODLE_DEFS}<main id="main" tabindex="-1"></main><nav class="tabbar" aria-label="主导航"></nav><dialog id="sheet" class="sheet" aria-label="详情"></dialog><dialog id="zoom" class="zoom" aria-label="放大图片"></dialog>`;
 document.addEventListener('click',ev=>{
  const tab=ev.target.closest('a.tab.on');
  if(tab){ev.preventDefault();window.scrollTo({top:0,behavior:'smooth'});return;}
  const t=ev.target.closest('[data-action]');if(!t)return;
  const act=t.dataset.action;
  if(act==='open')openSheet(t.dataset.date,t.dataset.key);
  else if(act==='close-sheet')closeSheet();
  else if(act==='check')toggleCheck(t.dataset.date,t.dataset.event);
  else if(act==='shot')toggleShot(t.dataset.shot);
  else if(act==='todo')toggleTodo(t.dataset.todo);
  else if(act==='copy')copyText(t.dataset.copy);
  else if(act==='copy-close')$('#copy-dialog').close();
  else if(act==='theme')toggleTheme();
  else if(act==='undo'&&undoAction){const fn=undoAction;undoAction=null;fn();}
  else if(act==='zoom-photo')zoomPhoto(t.dataset.place);
  else if(act==='zoom-shot')zoomShot(t.dataset.shot,t.dataset.kind);
  else if(act==='zoom-close')closeDialog($('#zoom'));
 });
 document.addEventListener('change',ev=>{
  const input=ev.target;if(!input.dataset?.choice||!sheetState)return;
  const d=PLAN.days.find(x=>x.date===sheetState.date),key=input.dataset.choice,value=input.value,c=choice(d);
  c[key]=input.type==='checkbox'?input.checked:value;
  if(c.shop1===c.shop2)c.shop2='none';
  if(key==='kodaijiPlan'&&value==='skip')c.yasakaBrief=false;
  state.choices[d.date]=c;save();refresh();
  document.querySelector(`#sheet [data-choice="${key}"]${input.type==='radio'?`[value="${value}"]`:''}`)?.focus({preventScroll:true});
 });
 $('#sheet').addEventListener('cancel',ev=>{ev.preventDefault();closeSheet();});
 $('#sheet').addEventListener('click',ev=>{if(ev.target.id==='sheet')closeSheet();});
 $('#zoom').addEventListener('click',ev=>{if(ev.target.id==='zoom'||ev.target.classList.contains('zoom-stage'))closeDialog($('#zoom'));});
 $('#zoom').addEventListener('cancel',ev=>{ev.preventDefault();closeDialog($('#zoom'));});
 window.addEventListener('popstate',ev=>{const s=ev.state?.sheet;if(s)openSheet(s.date,s.key,{push:false,pushed:true});else hideSheet();});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#main')route();}); // #main is the skip link
 window.addEventListener('storage',ev=>{
  if(ev.key===COLOR_MODE_KEY){if(ev.newValue)document.documentElement.setAttribute('data-user-color-scheme',ev.newValue);else document.documentElement.removeAttribute('data-user-color-scheme');return;}
  if(ev.key===STORAGE_KEY){try{const next=JSON.parse(ev.newValue);if(next?.checks&&next?.todos&&next?.choices){state=next;refresh();}}catch{}}
 });
 // The 现在 screen follows the clock: refresh each minute and whenever the phone comes back to the page.
 setInterval(()=>{if(ui.tab==='now'&&!document.hidden)refresh();},60000);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
 if('scrollRestoration' in history)history.scrollRestoration='manual';
 route();
}
if(typeof document!=='undefined'&&typeof document.getElementById==='function'&&document.getElementById('app'))boot();
