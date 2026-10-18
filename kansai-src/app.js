'use strict';
const $=s=>document.querySelector(s);
const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e=escapeHTML;
const PLACE=Object.fromEntries(PLAN.places.map(p=>[p.id,p]));
// Offline delivery embeds photos as data: URIs. Swapping each for a short blob: URL once at startup keeps every
// render's HTML small (a day page carried ~3.9M characters before); any image that fails to convert keeps its data URI.
(function shortImageURLs(){
 if(typeof DELIVERY_MODE==='undefined'||DELIVERY_MODE!=='offline'||typeof Blob==='undefined'||!URL.createObjectURL)return;
 const made=new Map();
 const short=src=>{
  if(typeof src!=='string'||!src.startsWith('data:'))return src;
  if(made.has(src))return made.get(src);
  try{const comma=src.indexOf(','),bin=atob(src.slice(comma+1)),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
   const url=URL.createObjectURL(new Blob([bytes],{type:src.slice(5,src.indexOf(';'))}));made.set(src,url);return url;}catch{return src;}
 };
 const swap=img=>{if(img)for(const key of ['src','thumbnail'])if(img[key])img[key]=short(img[key]);};
 Object.values(PHOTOS).forEach(swap);
 for(const p of [...(PILGRIMAGE.points||[]),...(PILGRIMAGE.rally?.spots||[])])['real','anime','comparison'].forEach(kind=>swap(p[kind]));
})();
const STORAGE_KEY='kansai-autumn-notebook-v1';
let storageOK=true, toastTimer, undoAction=null;
let state={schemaVersion:3,checks:{},todos:{},choices:{}},pendingBackup=null;
// Preserve the exact old snapshot before any migration (including todo IDs) writes.
// Shot keys already include date + point ID; retain them without guessing by place name.
function preserveLegacyRecord(){
 if(pendingBackup===null)return;
 let key=STORAGE_KEY+'-before-activity-v3';
 const existing=localStorage.getItem(key);
 if(existing!==null&&existing!==pendingBackup)key+='-'+Date.now();
 localStorage.setItem(key,pendingBackup);pendingBackup=null;
}
try{
 const raw=localStorage.getItem(STORAGE_KEY);pendingBackup=raw;
 const old=JSON.parse(raw||'null');
 if(old&&typeof old==='object'){
  if(old.schemaVersion===3)pendingBackup=null;
  for(const key of ['checks','todos','choices'])if(old[key]&&typeof old[key]==='object'&&!Array.isArray(old[key]))state[key]=old[key];
  if(typeof old.planRevision==='string')state.planRevision=old.planRevision;
 }
 for(const [key,value] of Object.entries(state.checks))if(!key.includes(':shot:')&&typeof value==='boolean')state.checks[key]=value?'done':'pending';
 for(const [key,value] of Object.entries(state.checks))if(!key.includes(':shot:')&&value==='skipped')state.checks[key]='pending';
 preserveLegacyRecord();localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}catch{storageOK=false;}
// The final plan of 2026-10-19 moved Nara and Nippombashi to 12/4 and 戎桥 to 12/3, and dropped USJ, 大阪城 and
// SPAWORLD. Only activities that kept their meaning carry their record to the new day (02-最终行程规格 record_migrations);
// a changed lunch, the new 元町 shops or the castle never start out done. The untouched record is saved first.
const MOVED_EVENTS={'2026-12-05':{nara_transfer:'2026-12-04',nara_park_walk:'2026-12-04',nara_visit:'2026-12-04',nara_station_walk:'2026-12-04',
 nara_return_train:'2026-12-04',anime_shopping:'2026-12-04',nippombashi_dinner:'2026-12-04',nara_day_return:'2026-12-04',glico_photo:'2026-12-03'}};
// Same ID, different activity: the 稻荷参道 lunch replaces the 京都站 one; 12/6 傍晚 is now the walk to dinner.
const CHANGED_EVENTS=['2026-12-03:kyoto_lunch','2026-12-06:sannomiya_evening'];
// Old links open the same content on its new day; the 森之宫 lunch link lands on the Nara day's lunch.
const MOVED_LINKS={'2026-12-05':{...MOVED_EVENTS['2026-12-05'],nara_lunch:'2026-12-04',dotonbori_walk:'2026-12-03'}};
// Before todo IDs existed, records were keyed by position in this list (two entries changed meaning since).
const LEGACY_TODO_IDS=['usj-details','weather','restaurants',null,'return-travel','kodaiji-weather',null,'rally-account','transport-tickets','usj-app','packing','kodaiji-tickets'];
function migrateFinalPlan(){
 if(state.planRevision===PLAN.revision)return;
 const before=JSON.stringify(state),points=typeof PILGRIMAGE==='undefined'?null:new Map(PILGRIMAGE.points.map(p=>[p.id,p.date]));
 const events=new Map(PLAN.days.map(d=>[d.date,new Set(d.timeline.map(ev=>ev.id))])),checks={};
 for(const [key,value] of Object.entries(state.checks)){
  const [date,id,point]=key.split(':');
  if(id==='shot'){const to=points?points.get(point):date;if(to&&!Object.hasOwn(checks,to+':shot:'+point))checks[to+':shot:'+point]=value;continue;}
  if(CHANGED_EVENTS.includes(key))continue;
  const moved=MOVED_EVENTS[date]?.[id],to=moved||(events.get(date)?.has(id)?date:null);
  if(to&&!(moved&&Object.hasOwn(state.checks,to+':'+id)))checks[to+':'+id]=value;
 }
 const choices={...state.choices},nippombashi=choices['2026-12-05'];
 const {usjExtra,kinopio,...nara}=choices['2026-12-04']||{};
 if(nippombashi?.shop1)Object.assign(nara,{shop1:nippombashi.shop1,shop2:nippombashi.shop2||'none'});
 delete choices['2026-12-05'];if(Object.keys(nara).length)choices['2026-12-04']=nara;else delete choices['2026-12-04'];
 const ids=new Set([...PLAN.pending_checks,...(PLAN.additional_checks||[])].map(t=>t.id)),todos={};
 for(const [key,value] of Object.entries(state.todos)){const id=/^d+$/.test(key)?LEGACY_TODO_IDS[key]:key;if(id&&ids.has(id)&&!Object.hasOwn(todos,id))todos[id]=value;}
 // If the backup cannot be written, this throws first and the record stays exactly as it was.
 if(Object.keys(state.checks).length+Object.keys(state.todos).length+Object.keys(state.choices).length){
  let key=STORAGE_KEY+'-before-final-plan-2026-10-19';
  const existing=localStorage.getItem(key);
  if(existing!==null&&existing!==before)key+='-'+Date.now();
  localStorage.setItem(key,before);
 }
 const next={...state,checks,choices,todos,planRevision:PLAN.revision};
 localStorage.setItem(STORAGE_KEY,JSON.stringify(next));state=next;
}
if(storageOK)try{migrateFinalPlan();}catch{storageOK=false;}
const icons={map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',check:'<path d="m4 12 5 5L20 6"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/>',bag:'<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M9 10v7m6-7v7"/>'};
const icon=(n)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons.pin}</svg>`;
const btn=(label,action,extra='',cls='')=>`<button type="button" class="btn ${cls}" data-action="${action}" ${extra}>${label}</button>`;
const external=(label,url,cls='')=>`<a href="${e(url)}" target="_blank" rel="noopener noreferrer" class="${cls}">${label}</a>`;
const mapURL=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
// Booking timestamps include offsets; always display the airport's local time.
function flightLocal(b,field){const place=field==='departure'?b.from:b.to,zone=place==='hkg'?'Asia/Hong_Kong':'Asia/Tokyo';const date=new Date(b[field]);return {time:new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date),date:new Intl.DateTimeFormat('en-US',{timeZone:zone,month:'numeric',day:'numeric'}).format(date),city:place==='hkg'?'香港':'关西',region:place==='hkg'?'香港':'日本',terminal:b[field+'_terminal']||'航站楼待确认'};}
function flightDeparture(id){const b=PLAN.bookings.find(b=>b.id===id),f=flightLocal(b,'departure');return f.time+' '+f.region+'起飞';}
function flightTerminals(b){const from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return from.city+(b.departure_terminal_role==='check_in'?from.terminal+'值机 → '+(b.boarding_terminal||'航站楼待确认')+'登机':from.terminal+'出发')+'；'+to.city+to.terminal+'抵达。';}
const photoSrc=id=>PHOTOS[id]?.src||'';
const dateLabel=d=>String(Number(d.slice(5,7)))+'/'+String(Number(d.slice(8)));
// 日本桥 stores on 12/4: Animate and 骏河屋 by default, or a swap from shop_replacement; never more than two.
const NIPPOMBASHI_SHOPS=['animate','surugaya','potato','surugaya_main'];
const choice=d=>{const c={ujiExtra:'none',byodoinInterior:false,kodaijiPlan:'night',yasakaBrief:false,shop1:'animate',shop2:'surugaya',...state.choices[d.date]};if(d.date==='2026-12-01'){c.ujiExtra='none';c.byodoinInterior=false;delete c.skipByodoin;}if(!NIPPOMBASHI_SHOPS.includes(c.shop1))c.shop1='animate';if(c.shop2!=='none'&&(!NIPPOMBASHI_SHOPS.includes(c.shop2)||c.shop2===c.shop1))c.shop2='none';if(d.date==='2026-12-02'){if(!['night','skip'].includes(c.kodaijiPlan))c.kodaijiPlan='night';c.yasakaBrief=c.kodaijiPlan==='night'&&c.yasakaBrief===true;}return c;};
function activityState(date,id){const value=state.checks[date+':'+id];return value===true||value==='done'?'done':'pending';}
function save(){try{preserveLegacyRecord();localStorage.setItem(STORAGE_KEY,JSON.stringify(state));storageOK=true;return true;}catch{storageOK=false;toast('本次修改未保存；请允许浏览器存储后重试，刷新或关闭可能丢失。');return false;}}
function toast(message,undo){clearTimeout(toastTimer);undoAction=undo||null;$('#toast').innerHTML=e(message)+(undo?'<button data-action="undo">撤销</button>':'');$('#toast').classList.add('show');toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),undo?8500:3500);}
function openManualCopy(value){
 let dlg=document.getElementById('copy-dialog');
 if(!dlg){dlg=document.createElement('dialog');dlg.id='copy-dialog';dlg.className='copy-dialog';dlg.setAttribute('aria-labelledby','copy-title');document.body.append(dlg);}
 dlg.innerHTML=`<div class="dialog-top"><h2 id="copy-title">手动复制</h2>${btn(icon('close'),'copy-close','aria-label="关闭手动复制"','icon-button')}</div><div class="dialog-body"><p>自动复制不可用，请选择下方文字复制。</p><textarea aria-label="要复制的文字" readonly>${e(value)}</textarea></div>`;
 if(!dlg.open)dlg.showModal();dlg.querySelector('textarea').select();
}
async function copyText(value){
 try{if(!navigator.clipboard?.writeText)throw Error('fallback');await navigator.clipboard.writeText(value);toast('已复制：'+value);}
 catch{
  const previous=document.activeElement,field=document.createElement('textarea');
  field.value=value;field.setAttribute('aria-label','复制临时文字');field.style.cssText='position:fixed;top:0;left:-9999px';
  // Native dialog content is the only interactive subtree while a modal is open.
  (document.querySelector('dialog[open]')||document.body).append(field);field.select();
  let ok=false;try{ok=document.execCommand('copy');}catch{}finally{field.remove();previous?.focus({preventScroll:true});}
  if(ok)toast('已复制：'+value);else openManualCopy(value);
 }
}
function selectedShops(c){return[c.shop1,c.shop2].filter(x=>x&&x!=='none');}
// Titles name the activity; routes, restaurant details and planning notes retain the specifics.
const EVENT_TITLES={
 byodoin_visit:'平等院 · 庭园与凤翔馆',uji_pilgrimage:'宇治川巡礼',
 demachi_transfer:'前往出町',demachi_lunch:'午餐 · 出町',delta_visit:'鸭川三角洲',
 kiyomizu_transfer:'前往清水寺',kiyomizu_visit:'清水寺赏枫',higashiyama_walk:'东山散步',
 inari_transfer:'京都站 → JR稻荷',
 inari_visit:'伏见稻荷 · 千本鸟居',osaka_transfer:'前往大阪酒店',
 nara_transfer:'新今宫 → 难波 → 近铁奈良',nara_lunch:'午餐 · 奈良公园附近',nara_return_train:'近铁奈良 → 日本桥',
 dotonbori_transfer:'新今宫 → 难波 → 戎桥',glico_photo:'戎桥 · 格力高',kyoto_tower_visit:'京都塔 · 京吹联动集章',
 nara_park_scenery:'奈良公园散步',nara_station_walk:'回近铁奈良站',
 kada_pilgrimage:'加太镇巡礼',kada_lunch:'午餐 · 加太港附近',wakayama_garden_visit:'红叶溪庭园',wakayama_tower_ascent:'上坡到天守',
 wakayama_tower_visit:'和歌山城天守',wakayama_tower_descent:'下坡离开天守',kada_day_dinner:'晚餐 · 酒店附近',
 sannomiya_dinner:'晚餐 · ふうふう亭和牛自助',last_evening_return:'返回大阪酒店',
 kada_transfer:'新今宫 → 和歌山市 → 加太',wakayamashi_return:'加太线 → 和歌山市',kada_day_return:'南海 → 新今宫，返店',
 anime_shopping:'日本桥 · 动漫购物',motomachi_cd_shopping:'元町 · 两家CD店',sannomiya_rest:'坐下休息，回三宫',kobe_bridge_visit:'神户大桥巡礼',
 kobe_transfer:'前往生田神社',ikuta_visit:'生田神社巡礼',
 airport_checkin:'T1值机、托运与出境'
};
function effectiveEvents(d){const c=choice(d);let events=d.timeline.map(x=>({...x,title:EVENT_TITLES[x.id]||x.title,place_ids:[...x.place_ids]}));const by=id=>events.find(x=>x.id===id);
 for(const ev of events.filter(ev=>ev.category==='flight')){
  const booking=PLAN.bookings.find(b=>b.id===ev.id);if(!booking)continue;
  const from=flightLocal(booking,'departure'),to=flightLocal(booking,'arrival');
  ev.time_label=from.time+' '+from.region+'起飞 → '+to.time+' '+to.region+'抵达';
  ev.title=booking.flight_number+' · '+from.city+' → '+to.city;
  ev.condition=[flightTerminals(booking),ev.condition].filter(Boolean).join(' ');
 }
 if(d.date==='2026-12-02'){
  by('gion_rest').title='高台寺附近休息';
  by('gion_dinner_walk').title='前往晚饭地点';
  delete by('gion_dinner_walk').condition;
  by('gion_dinner').title='晚餐 · 祇园／河原町';
  delete by('gion_dinner').condition; // The last-order reminder is shown once by executionNotice.
  by('kyoto_night_return').title='回酒店休息';
  if(c.kodaijiPlan==='skip'){
   events=events.filter(x=>x.id!=='kodaiji_night');
   by('gion_dinner_walk').time_label='休息后';by('gion_dinner_walk').title='直接前往晚饭地点';by('gion_dinner_walk').condition='步行预留约30分钟。';
   by('gion_dinner').time_label='到店后 · 不等到19:00';by('gion_dinner').title='晚餐 · 祇园／河原町';
   by('kyoto_night_return').time_label='饭后返店';by('kyoto_night_return').title='回酒店休息';
  }else{
   by('kodaiji_night').title='高台寺夜枫';
   delete by('kodaiji_night').condition;
   if(c.yasakaBrief){by('gion_dinner_walk').title='八坂神社 → 晚餐';by('gion_dinner_walk').place_ids=['yasaka_shrine'];by('gion_dinner_walk').condition='八坂神社短停与前往餐厅共用30分钟；夜枫延迟或步行余量不足时，直接去吃饭。';}
  }
 }
 if(d.date==='2026-12-04'){
  const shopping=by('anime_shopping'),shops=selectedShops(c);
  shopping.place_ids=shops;
  if(shops.length===1){shopping.title='日本桥 · 一家重点店';shopping.condition='只逛'+PLACE[shops[0]].name+'，按兴趣慢逛，含结账。';}
  else if(shops.join()!=='animate,surugaya')shopping.condition=PLACE[shops[0]].name+'先，'+PLACE[shops[1]].name+'后，含移动和结账；晚到只选一家。';
 }
 return events;
}
function returnTarget(d){if(d.date==='2026-12-02')return choice(d).kodaijiPlan==='skip'?'饭后':'20:45—21:15';return (d.hotel_return_target||'').split('；')[0].replace(/^(争取|约)/,'').replace(/\s*目标入住.*/,'');}
// Keep the full planning notes in the guide; repeated UI labels use a short form.
function compactTime(value){
 const windows={
  '12:45—13:30／13:45':'12:45–13:45',
  '13:30／13:45—14:15':'约13:30–14:15',
  '参考18:00前后出发，约19:00—19:30到酒店':'约18:00出发 · 19:00–19:30到店',
  '意向17:00—19:00':'17:00–19:00 · 待订位',
  '19:00后至约20:20—20:45':'19:00后 · 20:20–20:45到店'
 };
 return String(windows[value]||value).replace(/^目标|^争取/,'').replace(/到店$/,'抵达').replace(/左右$/,'').replace(/^当前候选/,'').replace(/^候选(?=d)/,'候选 ').replace('，临行复核',' · 待复核').replace('到店后 · 不等到19:00','到店后').replace(/—/g,'–');
}
function effectiveRoute(d){const c=choice(d);let nodes=d.route_stop_ids.map((id,i)=>({id,phase:DETAILS[d.date].routePhases[i],original:i+1,optional:false}));
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')nodes=nodes.filter(n=>n.id!=='kodaiji');else if(c.yasakaBrief)nodes.splice(nodes.length-1,0,{id:'yasaka_shrine',phase:'夜间',optional:true});}
 if(d.date==='2026-12-04'){const at=nodes.findIndex(x=>x.id==='animate'),{phase,original}=nodes[at];nodes.splice(at,2,...selectedShops(c).map(id=>({id,phase,original,optional:false})));}
 return nodes;
}

function optionalControls(d,eventId){if(!d.optional.length)return'';const c=choice(d),show=id=>!eventId||eventId===id;let fields='';
 if(d.date==='2026-12-02'&&show('gion_rest'))fields=`<fieldset class="night-options"><legend>夜间安排</legend>${[['night','高台寺夜枫','17:15—18:30参拜，20:45—21:15返店。'],['skip','晚餐后休息','高台寺附近休息半小时，再吃晚饭、返店。']].map(([value,label,note])=>`<label class="option-row"><input type="radio" name="kodaijiPlan" data-choice="kodaijiPlan" value="${value}" ${c.kodaijiPlan===value?'checked':''}>${label}<small>${note}</small></label>`).join('')}</fieldset><label class="option-row"><input type="checkbox" data-choice="yasakaBrief" ${c.yasakaBrief?'checked':''} ${c.kodaijiPlan==='skip'?'disabled':''}>八坂神社顺路短停<small>仅夜枫准时结束且体力有余；包含在晚饭前步行时段。</small></label>`;
 if(d.date==='2026-12-04'&&show('anime_shopping')){const stores=NIPPOMBASHI_SHOPS.map(id=>[id,PLACE[id].name]);fields=`<p class="small">总数不超过两家，晚到只留一家；中古库存不保证。</p><label class="small">第一家${select('shop1',c.shop1,stores)}</label><label class="small">第二家${select('shop2',c.shop2,[['none','不加第二家'],...stores.filter(([id])=>id!==c.shop1)])}</label>`;}
 return fields;
}
function select(key,value,options){return `<select class="option-select" data-choice="${key}" aria-label="${({shop1:'日本桥第一家店',shop2:'日本桥第二家店',umedaMain:'梅田重点店'})[key]||key}">${options.map(([v,l])=>`<option value="${v}" ${v===value?'selected':''}>${e(l)}</option>`).join('')}</select>`;}


if(document.modelContext?.registerTool){
 const tools=[{name:'read_itinerary_day',title:'读取当天行程',description:'读取既定关西行程、当前选择及完成进度，不改变数据。',inputSchema:{type:'object',properties:{date:{type:'string',enum:PLAN.days.map(d=>d.date)}},required:['date'],additionalProperties:false},annotations:{readOnlyHint:true},execute({date}){const d=PLAN.days.find(x=>x.date===date);if(!d)throw Error('无效日期');return {date,events:effectiveEvents(d),progress:progress(d),route:effectiveRoute(d),returnTarget:returnTarget(d)};}},{name:'set_activity_completion',title:'记录活动完成',description:'将指定日期的活动标记为完成或未完成，保存到本机并更新页面。',inputSchema:{type:'object',properties:{date:{type:'string'},eventId:{type:'string'},completed:{type:'boolean'}},required:['date','eventId','completed'],additionalProperties:false},annotations:{readOnlyHint:false},execute({date,eventId,completed}){if(typeof completed!=='boolean')throw Error('completed必须为布尔值');setCheck(date,eventId,completed);render();return{date,eventId,completed,savedLocally:storageOK};}}];
 for(const t of tools){try{Promise.resolve(document.modelContext.registerTool(t)).catch(()=>{});}catch{}}
}
