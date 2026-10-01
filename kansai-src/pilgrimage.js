/* Reference coordinates locate places, never promise an exact camera position. */
const pilgrimagePoints=PILGRIMAGE.points;
const pilgrimageDay=date=>pilgrimagePoints.filter(p=>p.date===date);
const pilgrimagePlace=id=>pilgrimagePoints.filter(p=>p.place_ids.includes(id));
const shotKey=p=>p.date+':shot:'+p.id;
function pointEnabled(p){return !p.option||choice(PLAN.days.find(d=>d.date===p.date)).ujiExtra===p.option;}
function pointMap(p){return p.coordinates?mapURL(p.coordinates.lat+','+p.coordinates.lng):(p.map_url||PLACE[p.place_ids[0]]?.map_search_url);}
function shotProgress(date){const points=pilgrimageDay(date).filter(pointEnabled);return {done:points.filter(p=>state.checks[shotKey(p)]).length,total:points.length};}
function shotImage(p,kind){
 const img=p[kind],label=kind==='comparison'?'作品 × 实景':kind==='real'?'实景':'作品画面';
 return img?.src?`<button class="shot-image" data-action="shot-zoom" data-shot="${e(p.id)}" data-kind="${kind}" aria-label="放大${e(p.title)}${label}"><img src="${img.thumbnail||img.src}" alt="${e(p.title)} · ${label}" width="${img.width||800}" height="${img.height||450}" loading="lazy" decoding="async"><span>${label}<small>放大 ↗</small></span></button>`:`<div class="shot-missing"><strong>${label}待补</strong><span>${e(img?.note||'尚未找到可核对的图片')}</span></div>`;
}
// Concise field notes; the original descriptions remain in the existing disclosure.
const SHOT_COPY={
 'eupho_uji_bridge':{scene:'第一季第12集，久美子抒发心情的宇治桥。',note:'在行人通道对照桥栏与河景；返程还会再次经过。'},
 'eupho_omotesando':{scene:'京阪官方巡礼地图第6点：平等院表参道。',note:'晚餐前经过表参道，沿街对照取景。'},
 'kyoto-stage-stairs':{scene:'第7集车站音乐会，《宝岛》演出广场。',note:'中央口一侧上4F室町小路广场，对照大阶梯、扶梯和红色时钟。无需登顶，遇活动占用就省。'},
 'kyoto-stage-clock':{note:'在4F广场抬头找红色方框时钟与钢架；别与红色雕塑「朱甲舞」混淆。'},
 'demachi-west-gate':{scene:'宣传PV里的商店街西入口；招牌与建筑有改绘。',note:'从寺町通一侧仰拍入口招牌与左侧建筑。'},
 'demachi-fish':{scene:'官方主视觉里的商店街吊鱼与拱廊。',note:'进拱廊后找吊鱼和屋顶纵深；构图不完全一致，勿堵店铺通道。'},
 'delta-tamako':{note:'找东侧高野川的飞石与下河台阶，对照石块排列。雨天或水量大时留在岸边拍。'},
 'delta-kon':{note:'从贺茂川侧飞石朝东拍中洲，和玉子告白图分开找角度。河岸有改绘。'},
 'kiyomizu-conan':{scene:'第927—928集清水寺与新兰剧情；亦见于《迷宫的十字路》。',note:'在本堂舞台对照屋顶与木栏杆；定位为本堂参考点。',caption:'官方上映会宣传视觉，非动画单帧；两图视角不同。'},
 'senren-sannenzaka':{note:'在玩家标点附近，沿街对照石板路与两侧屋檐；店名有改写，顺路拍即可。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'},
 'senren-ninenzaka':{note:'在二年坂南端附近找右侧店铺转角、屋檐与弯路；别只在台阶中央找。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'},
 'conan-tsutenkaku':{note:'晚饭时从地面拍通天阁外观。塔顶视角无法在街面复刻，不另加登塔。',caption:'同建筑、不同视角；用于辨认塔体。'},
 'conan-ebisubashi':{scene:'第763—764集《恋爱的暗号》，平次在戎桥调查。',note:'桥面找弧形栏杆与南侧店招；动画有改绘，广告可能变化。'},
 'senren-ikuta':{note:'在拝殿前稍侧处对照屋顶、红柱与狛犬；游戏将楼房改绘为树木。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'}
};
function shotCard(p,context='page'){
 const coords=p.coordinates,done=!!state.checks[shotKey(p)],day=PLAN.days.find(d=>d.date===p.date),event=effectiveEvents(day).find(ev=>ev.id===p.event_id),number=pilgrimageDay(p.date).filter(pointEnabled).findIndex(x=>x.id===p.id)+1,copy=SHOT_COPY[p.id]||{};
 return `<article class="shot-card ${done?'shot-done':''}" id="${context==='place'?'place-shot':'shot'}-${e(p.id)}" data-shot-card="${e(p.id)}">
  <div class="shot-heading"><div><p class="shot-work">${number?`<span>${String(number).padStart(2,'0')}</span>`:''}${e(p.work)}${p.option?'<em>可选</em>':''}</p><h4>${e(p.title)}</h4></div><label class="shot-check"><input type="checkbox" data-shot-check="${e(p.id)}" aria-label="打卡：${e(p.title)}" ${done?'checked':''}><span>${done?'已打卡':'打卡'}</span></label></div>
  <p class="shot-scene">${e(copy.scene||p.scene)}</p>
  <div class="shot-pair ${p.comparison?'shot-composite':''}">${p.comparison?shotImage(p,'comparison'):shotImage(p,'real')+shotImage(p,'anime')}</div>
  ${copy.caption||p.match_note?`<p class="shot-caption">${e(copy.caption||p.match_note)}</p>`:''}
  <div class="shot-direction"><span>拍摄位置</span><p>${e(copy.note||p.shooting_note)}</p></div>
  <p class="shot-print-coordinate">地点参考：${coords?e(coords.lat+', '+coords.lng)+' · '+e(coords.precision):'坐标待核准'}</p>
  <div class="shot-actions">${external(icon('pin')+'地图',pointMap(p),'btn primary')}${btn(icon('copy')+'复制日文名','copy',`data-copy="${e(p.name_ja||PLACE[p.place_ids[0]]?.name_ja||p.title)}" aria-label="复制${e(p.title)}日文名"`,'small')}${event&&context==='page'?`<a class="shot-return" href="#day/${p.date}/timeline/${event.id}" data-nav aria-label="返回${e(event.time_label)}的行程">回到行程 ${icon('arrow')}</a>`:''}</div>
  <details class="shot-evidence"><summary>坐标与来源</summary><div>${coords?`<p><strong>${coords.lat}, ${coords.lng}</strong><br>${e(coords.precision)}</p><div class="evidence-actions">${btn('复制坐标','copy',`data-copy="${coords.lat}, ${coords.lng}"`,'small')}${coords.source_url?external('定位依据 ↗',coords.source_url):''}</div>`:'<p>坐标待核准，当前只按地点名称搜索。</p>'}${p.real?.source_url?`<p>实景：${e(p.real.credit||'原作者')} · ${external('来源 ↗',p.real.source_url)}</p>`:''}${p.anime?.source_url?`<p>作品画面：${e(p.anime.credit||'作品权利方')} · ${external('来源 ↗',p.anime.source_url)}</p>`:''}${p.comparison?`<p>${e(p.comparison.credit)} · ${external('对照原图 ↗',p.comparison.source_url)}</p>`:''}${(p.sources||[]).map(s=>`<p>${external(e(s.title)+' ↗',s.url)}</p>`).join('')}</div></details>
 </article>`;
}
function pilgrimagePage(d){
 const groups=DayFlow.forDay(d).sections.filter(section=>section.scenePoints.length);
 const all=pilgrimageDay(d.date),main=groups.flatMap(section=>section.scenePoints),optional=all.filter(p=>!pointEnabled(p)),coverage=(PILGRIMAGE.coverage||[]).filter(p=>p.date===d.date),pg=shotProgress(d.date);
 return `<section class="pilgrimage-page">${rallyCard(d)}
 <header class="pilgrimage-intro"><div><h2>实景 × 作品</h2></div><span class="shot-progress" data-shot-progress="${d.date}" aria-live="polite">已打卡 <strong>${pg.done} / ${pg.total}</strong></span></header>

 <div class="pilgrimage-layout"><nav class="shot-index" aria-label="巡礼点快捷跳转"><p>今天的巡礼</p>${groups.map(section=>`<div class="scene-index-group"><span>${e(section.short)}</span>${section.scenePoints.map(p=>`<a href="#day/${d.date}/pilgrimage/${p.id}" data-nav data-shot-index="${p.id}" title="${e(p.title)}" class="${state.checks[shotKey(p)]?'complete':''}" ${sectionTarget==='shot-'+p.id?'aria-current="location"':''}><span>${String(main.indexOf(p)+1).padStart(2,'0')}</span><span>${e(p.title)}</span><small aria-label="已打卡" ${state.checks[shotKey(p)]?'':'hidden'}>✓</small></a>`).join('')}</div>`).join('')}<a href="#day/${d.date}/timeline" data-nav class="index-return">← 当天行程</a></nav>
 <div class="shot-mobile-jump"><label for="shot-jump">跳到点位</label><select id="shot-jump" data-shot-jump="${d.date}"><option value="">选择巡礼点…</option>${groups.map(section=>`<optgroup label="${e(section.short)}">${section.scenePoints.map(p=>`<option value="${p.id}" ${sectionTarget==='shot-'+p.id?'selected':''}>${String(main.indexOf(p)+1).padStart(2,'0')} · ${e(p.title)}</option>`).join('')}</optgroup>`).join('')}</select></div>
 <div class="shot-list">${groups.map(section=>`<section class="scene-section"><div class="scene-section-heading"><h3>${e(section.name.split(" · ")[0])}</h3></div>${section.scenePoints.map(p=>shotCard(p)).join('')}</section>`).join('')}
 ${optional.length?`<details class="optional-shots"><summary>可选点位 <small>${optional.length}处</small></summary><p class="map-note">可在“可选安排”加入行程。</p>${optional.map(p=>shotCard(p)).join('')}</details>`:''}
 ${coverage.length?`<details class="shot-coverage"><summary>其他点位说明</summary>${coverage.map(p=>`<p><strong>${e(p.title)}</strong> · ${e(p.note)}</p>`).join('')}</details>`:''}
 <div class="day-end">${btn(icon('reset')+'重置当天进度','reset-day','','text-button')}</div></div></div></section>`;
}
function rallyCard(d){
 const r=PILGRIMAGE.rally;if(!r||r.date!==d.date)return '';
 return `<section class="rally-card" id="shot-rally"><div class="rally-heading"><div><span class="food-priority">11/1–12/20 · 后期</span><h2>京吹数字集章</h2></div>${external('参加活动 ↗',r.entry_url,'btn small')}</div><p>許波多神社 → 水管桥 → 縣神社。</p><details class="rally-detail" ${sectionTarget==='shot-rally'?'open':''}><summary>点位图片与集章说明</summary><div class="rally-spots">${r.spots.map(p=>`<article><header><h3>${e(p.title)}</h3></header><div class="rally-pair">${p.real?.src?shotImage(p,'real'):''}${shotImage(p,'anime')}</div><p class="rally-caption">${e(p.match_note||p.caption)}</p><p>${e(p.note)}</p><div class="food-actions">${external(icon('pin')+'地图',p.map_url,'text-link')}${btn(icon('copy')+'复制日文名','copy',`data-copy="${e(p.name_ja)}"`,'text-button')}</div></article>`).join('')}</div><details class="event-detail"><summary>参与规则与来源</summary><div class="detail-body">${r.rules.map(t=>`<p>${e(t)}</p>`).join('')}${r.spots.filter(p=>p.coordinates).map(p=>`<p>${e(p.title)}：${p.coordinates.lat}, ${p.coordinates.lng} · ${external('官方定位 ↗',p.coordinates.source_url)}</p>`).join('')}<p>${external('活动官网 ↗',r.source_url)} · ${external('官方巡礼地图 PDF ↗',r.map_pdf)}</p><p class="muted">作品画面：©武田綾乃・宝島社／「響け！」製作委員会2024，京阪活动官网。核查：2026/10/1。</p></div></details></details></section>`;
}
function pilgrimageEventLinks(d,ev){
 const points=pilgrimageDay(d.date).filter(p=>p.event_id===ev.id&&pointEnabled(p));
 if(!points.length)return '';
 const works=[...new Set(points.map(p=>p.work))];
 return `<a class="scene-entry" href="#day/${d.date}/pilgrimage/${points[0].id}" data-nav><span class="scene-entry-icon">${icon('pin')}</span><span><strong>实景 × 作品 <small>${points.length}组对照</small></strong><span>${e(works.join(' · '))}</span></span>${icon('chevron')}</a>`;
}
function pilgrimagePlaceContent(id){const points=pilgrimagePlace(id);return points.length?`<section class="place-pilgrimage"><h3>实景 × 作品</h3>${points.map(p=>shotCard(p,'place')).join('')}</section>`:'';}
function openShotZoom(id,kind){
 const p=pilgrimagePoints.find(x=>x.id===id)||PILGRIMAGE.rally?.spots.find(x=>x.id===id),img=p?.[kind];if(!img?.src)return;
 let dlg=document.getElementById('shot-dialog');
 if(!dlg){dlg=document.createElement('dialog');dlg.id='shot-dialog';dlg.className='shot-zoom-dialog';dlg.setAttribute('aria-labelledby','shot-zoom-title');document.body.append(dlg);dlg.addEventListener('click',ev=>{if(ev.target===dlg){const r=dlg.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)dlg.close();}});}
 const alreadyOpen=dlg.open;
 const switcher=p.comparison?'':`<div class="zoom-switch" role="group" aria-label="切换对照图片">${['real','anime'].filter(k=>p[k]?.src).map(k=>`<button data-action="shot-zoom" data-shot="${e(p.id)}" data-kind="${k}" aria-pressed="${kind===k}">${k==='real'?'实景':'作品画面'}</button>`).join('')}</div>`;
 dlg.innerHTML=`<div class="dialog-top"><h2 id="shot-zoom-title">${e(p.title)}</h2><button class="btn icon-button" data-action="shot-close" aria-label="关闭放大图">${icon('close')}</button></div>${switcher}<img src="${img.src}" alt="${e(p.title)}${kind==='comparison'?'作品 × 实景':kind==='real'?'实景':'作品画面'}" width="${img.width||800}" height="${img.height||450}"><p>${e(img.credit||'')} · ${external('图片来源 ↗',img.source_url)}</p>`;
 if(!alreadyOpen)dlg.showModal();else dlg.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
}
document.addEventListener('click',ev=>{const t=ev.target.closest('[data-action]');if(t?.dataset.action==='shot-zoom')openShotZoom(t.dataset.shot,t.dataset.kind);if(t?.dataset.action==='shot-close')document.getElementById('shot-dialog').close();});
function refreshShotCompletion(p){
 const id=p.id,checked=!!state.checks[shotKey(p)];
 document.querySelectorAll('[data-shot-check="'+id+'"]').forEach(el=>{el.checked=checked;el.closest('.shot-card').classList.toggle('shot-done',checked);el.parentElement.querySelector('span').textContent=checked?'已打卡':'打卡';});
 document.querySelectorAll('[data-shot-index="'+id+'"]').forEach(el=>{el.classList.toggle('complete',checked);el.querySelector('small').hidden=!checked;});
 const pg=shotProgress(p.date);document.querySelectorAll('[data-shot-progress="'+p.date+'"]').forEach(el=>el.innerHTML=`已打卡 <strong>${pg.done} / ${pg.total}</strong>`);
}
document.addEventListener('change',ev=>{
 if(ev.target.dataset.shotJump){if(ev.target.value)navigate('#day/'+ev.target.dataset.shotJump+'/pilgrimage/'+ev.target.value);return;}
 const id=ev.target.dataset.shotCheck;if(!id)return;const p=pilgrimagePoints.find(x=>x.id===id);if(!p)return;
 state.checks[shotKey(p)]=ev.target.checked;save();refreshShotCompletion(p);
});
