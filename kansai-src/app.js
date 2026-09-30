'use strict';
const $=s=>document.querySelector(s);
const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e=escapeHTML;
const PLACE=Object.fromEntries(PLAN.places.map(p=>[p.id,p]));
const STORAGE_KEY='kansai-autumn-notebook-v1';
let storageOK=true, toastTimer, undoAction=null;
let state={checks:{},todos:{},choices:{}};
try{const old=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(old&&typeof old==='object')for(const key of ['checks','todos','choices'])if(old[key]&&typeof old[key]==='object'&&!Array.isArray(old[key]))state[key]=old[key];localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{storageOK=false;}
let screen='overview',dayIndex=0,dayView='timeline',routeFilter='全部',sectionTarget='',dialogMode=null;
const types={flight:'航班',transport:'交通',hotel:'住宿',meal:'用餐',visit:'景点',walk:'步行',rest:'休息',activity:'体验',shopping:'购物'};
const icons={map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',check:'<path d="m4 12 5 5L20 6"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/>',bag:'<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M9 10v7m6-7v7"/>'};
const icon=(n)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons.pin}</svg>`;
const btn=(label,action,extra='',cls='')=>`<button type="button" class="btn ${cls}" data-action="${action}" ${extra}>${label}</button>`;
const external=(label,url,cls='')=>`<a href="${e(url)}" target="_blank" rel="noopener noreferrer" class="${cls}">${label}</a>`;
const mapURL=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const directionURL=(a,b,mode)=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(PLACE[a].map_query)+'&destination='+encodeURIComponent(PLACE[b].map_query)+'&travelmode='+mode;
// Booking timestamps include offsets; always display the airport's local time.
function flightLocal(b,field){const place=field==='departure'?b.from:b.to,zone=place==='hkg'?'Asia/Hong_Kong':'Asia/Tokyo';const date=new Date(b[field]);return {time:new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date),date:new Intl.DateTimeFormat('en-US',{timeZone:zone,month:'numeric',day:'numeric'}).format(date),city:place==='hkg'?'香港':'关西',region:place==='hkg'?'香港':'日本',terminal:b[field+'_terminal']||'航站楼待确认'};}
function flightDeparture(id){const b=PLAN.bookings.find(b=>b.id===id),f=flightLocal(b,'departure');return f.time+' '+f.region+'起飞';}
const photoSrc=id=>PHOTOS[id]?.src||'';
const dateLabel=d=>String(Number(d.slice(5,7)))+'/'+String(Number(d.slice(8)));
const choice=d=>{const c={ujiExtra:'none',byodoinInterior:false,kodaijiPlan:'night',yasakaBrief:false,usjExtra:false,kinopio:false,shop1:'animate',shop2:'surugaya',kobeAfternoon:'umeda',umedaMain:'nintendo_osaka',umedaSecond:false,...state.choices[d.date]};if(d.date==='2026-12-02'){if(!['night','skip'].includes(c.kodaijiPlan))c.kodaijiPlan='night';c.yasakaBrief=c.kodaijiPlan==='night'&&c.yasakaBrief===true;}if(!['umeda','harbor'].includes(c.kobeAfternoon))c.kobeAfternoon='umeda';return c;};
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{storageOK=false;toast('浏览器未允许保存；本次仍可勾选，关闭后可能丢失。');}}
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
function statusLabel(event){if(event.time_status==='booked')return'<span class="pill green">已订航班 · 当地时间</span>';if(event.time_status==='to_confirm'||event.time_status==='current_timetable_candidate')return'<span class="pill gold">待确认</span>';return'';}
function selectedShops(c){return[c.shop1,c.shop2].filter(x=>x&&x!=='none');}
function effectiveEvents(d){const c=choice(d);let events=d.timeline.map(x=>({...x,place_ids:[...x.place_ids]}));const by=id=>events.find(x=>x.id===id);
 for(const ev of events.filter(ev=>ev.category==='flight')){
  const booking=PLAN.bookings.find(b=>b.id===ev.id);if(!booking)continue;
  const from=flightLocal(booking,'departure'),to=flightLocal(booking,'arrival');
  ev.time_label=from.time+' '+from.region+' → '+to.time+' '+to.region;
  ev.title=booking.flight_number+' · '+from.city+from.terminal+(booking.departure_terminal_role==='check_in'?'值机':'')+' → '+to.city+to.terminal;
 }
 if(d.date==='2026-12-01'){
  if(c.ujiExtra==='tower'){by('uji_return').time_label='16:15—17:30';by('uji_return').title='经宇治桥回京都酒店';by('uji_return').place_ids=['uji_bridge','jr_uji','hotel_kyoto'];by('kyoto_rest').time_label='17:30—18:00';const opt=d.optional.find(o=>o.id==='tower_option');events=events.filter(x=>!opt.replaces_event_ids.includes(x.id));events.push({id:'tower_visit',time_label:'18:15—19:15',title:'京都塔《京吹》联动观景',category:'visit',place_ids:['kyoto_tower'],optional:true},{id:'tower_dinner',time_label:'19:15—20:15',title:'晚餐 · 京都站',category:'meal',place_ids:['kyoto_station'],optional:true});}
  if(c.ujiExtra==='kotosaka'){const ev=by('uji_pilgrimage');ev.title='长椅→喜撰桥→朝雾桥→琴坂折返→两神社';ev.place_ids.splice(3,0,'kotosaka');ev.optionNote='琴坂往返约15—20分钟，包含在河岸游览时段内。';}
  if(c.ujiExtra==='station'){by('uji_return').title='JR宇治 → 京都站';by('uji_return').place_ids=['jr_uji','kyoto_station'];const at=events.findIndex(x=>x.id==='kyoto_rest');events.splice(at,0,{id:'station_stage',time_label:'返店前',title:'京都站4F《宝岛》舞台短拍',category:'visit',place_ids:['kyoto_stage'],optional:true,condition:'预留15—20分钟拍照；晚到则直接返店。'});}
  if(c.byodoinInterior)by('byodoin_visit').optionNote='内部参拜以现场可入场时段为准，须在12:10前结束。';
 }
 if(d.date==='2026-12-02'){
  by('gion_rest').title='高台寺附近休息';
  by('gion_dinner_walk').title='前往晚饭地点';
  by('gion_dinner').title='晚餐 · 祇园／河原町';
  by('gion_dinner').condition='おめん最后点餐20:00；晚到或长队时换简餐。';
  by('kyoto_night_return').title='回酒店休息';
  if(c.kodaijiPlan==='skip'){
   events=events.filter(x=>x.id!=='kodaiji_night');
   by('gion_dinner_walk').time_label='休息后';by('gion_dinner_walk').title='直接前往晚饭地点';
   by('gion_dinner').time_label='到店后 · 不等到19:00';by('gion_dinner').title='晚餐 · 祇园／河原町';
   by('kyoto_night_return').time_label='饭后返店';by('kyoto_night_return').title='回酒店休息';
  }else{
   by('kodaiji_night').title='高台寺夜枫';
   delete by('kodaiji_night').condition;
   if(c.yasakaBrief){by('gion_dinner_walk').title='八坂神社 → 晚餐';by('gion_dinner_walk').place_ids=['yasaka_shrine'];by('gion_dinner_walk').optionNote='夜枫延迟时省去八坂神社。';}
  }
 }
 if(d.date==='2026-12-04'){if(c.usjExtra)by('usj_core').optionNote='按等候时间与体力加项目，保留午饭和休息，19:00前结束。';if(c.kinopio){by('usj_lunch').title='午餐 · キノピオ・カフェ';by('usj_lunch').optionNote='需单独取得餐厅资格，否则选原午餐；用餐45—60分钟，可能超过¥2,500。';}}
 if(d.date==='2026-12-05'){by('anime_shopping').place_ids=selectedShops(c);by('nippombashi_arrival').place_ids=[c.shop1];by('anime_shopping').title=(c.shop2==='none'?'一家重点店':'两家店')+' · 日本桥';by('anime_shopping').optionNote='含15—20分钟休息。';}
 if(d.date==='2026-12-06'&&c.kobeAfternoon==='harbor'){
  events=events.filter(ev=>ev.id!=='umeda_shop');
  const at=events.findIndex(ev=>ev.id==='umeda_transfer');
  events.splice(at,0,{id:'kobe_harbor',time_label:'13:10—14:30',time_status:'planning_window',title:'神户港 · 星巴克咖啡',category:'rest',place_ids:['starbucks_meriken'],optional:true,condition:'含往返海边，计划14:30从三宫返大阪；交通或排队延误时省去咖啡。'});
  const transfer=by('umeda_transfer');transfer.time_label='14:30—15:30';transfer.title='三宫乘JR回大阪站';transfer.place_ids=['sannomiya','jr_osaka'];
  by('sky_transfer').title='步行到蓝天大厦展望台入口';
 }else if(d.date==='2026-12-06'){by('umeda_shop').place_ids=[c.umedaMain];by('umeda_transfer').place_ids=['sannomiya','jr_osaka',c.umedaMain];by('umeda_shop').title=PLACE[c.umedaMain].name+' · 购物';if(c.umedaSecond){by('umeda_shop').place_ids.push(c.umedaMain==='nintendo_osaka'?'pokemon_osaka':'nintendo_osaka');by('umeda_shop').optionNote='另一家仅在可直接入店时短看10—15分钟；两家合计60—75分钟，15:30结束。';}}
 return events;
}
function returnTarget(d){if(d.date==='2026-12-01')return choice(d).ujiExtra==='tower'?'20:30—21:00':choice(d).ujiExtra==='station'?'19:00—19:30':'19:00';if(d.date==='2026-12-02')return choice(d).kodaijiPlan==='skip'?'饭后':'20:45—21:15';return (d.hotel_return_target||'').split('；')[0].replace(/^(争取|约)/,'').replace(/\s*目标入住.*/,'');}
// Keep the full planning notes in the guide; repeated UI labels use a short form.
function compactTime(value){
 const windows={
  '10:00—10:45/10:55':'10:00出发',
  '15:10—16:00/16:30':'15:10—16:30',
  '10:00—11:20/11:40':'10:00出发',
  '13:30—14:15/14:30':'13:30—14:30',
  '13:10—14:00/14:30':'13:10出发',
  '14:15/14:30—15:30':'约14:30—15:30'
 };
 return String(windows[value]||value).replace(/^目标|^争取/,'').replace(/到店$/,'抵达').replace(/左右$/,'').replace(/^当前候选/,'').replace('，临行复核',' · 待复核').replace('待12/4正式开园时间确认','开园时间待确认').replace('到店后 · 不等到19:00','到店后').replace('随区域资格及场次安排','按区域资格与场次').replace('17:00盘点，争取18:00前完成重点','17:00盘点 · 18:00收尾').replace('起返程，争取','出发 · ').replace(/—/g,'–');
}
function effectiveRoute(d){const c=choice(d);let nodes=d.route_stop_ids.map((id,i)=>({id,phase:DETAILS[d.date].routePhases[i],original:i+1,optional:false}));
 if(d.date==='2026-12-01'&&c.ujiExtra==='kotosaka'){const at=nodes.findIndex(x=>x.id==='asagiri');nodes.splice(at+1,0,{id:'kotosaka',phase:'下午',optional:true});}
 if(d.date==='2026-12-01'&&c.ujiExtra==='tower')nodes=nodes.filter(n=>n.id!=='saizeriya_uji');
 if(d.date==='2026-12-01'&&c.ujiExtra==='tower')nodes.push({id:'kyoto_tower',phase:'夜间',optional:true},{id:'kyoto_station',phase:'夜间',optional:true},{id:'hotel_kyoto',phase:'夜间',optional:true});
 if(d.date==='2026-12-01'&&c.ujiExtra==='station')nodes.splice(nodes.length-1,0,{id:'kyoto_station',phase:'下午',optional:true},{id:'kyoto_stage',phase:'下午',optional:true});
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')nodes=nodes.filter(n=>n.id!=='kodaiji');else if(c.yasakaBrief)nodes.splice(nodes.length-1,0,{id:'yasaka_shrine',phase:'夜间',optional:true});}
 if(d.date==='2026-12-05'){const at=nodes.findIndex(x=>x.id==='animate');nodes.splice(at,2,...selectedShops(c).map(id=>({id,phase:'下午',optional:!['animate','surugaya'].includes(id)})));}
 if(d.date==='2026-12-06'&&c.kobeAfternoon==='harbor'){
  nodes=nodes.filter(n=>n.id!=='nintendo_osaka');
  const at=nodes.findIndex(n=>n.id==='ikuta');
  nodes.splice(at+1,0,{id:'starbucks_meriken',phase:'下午',optional:true,eventId:'kobe_harbor'});
  nodes.find(n=>n.original===6).phase='下午';
 }else if(d.date==='2026-12-06'){const at=nodes.findIndex(x=>x.id==='nintendo_osaka');nodes[at]={...nodes[at],id:c.umedaMain};if(c.umedaSecond)nodes.splice(at+1,0,{id:c.umedaMain==='nintendo_osaka'?'pokemon_osaka':'nintendo_osaka',phase:'下午',optional:true});}
 return nodes;
}

function optionalControls(d){if(!d.optional.length&&d.date!=='2026-12-05')return'';const c=choice(d);let fields='';
 if(d.date==='2026-12-01')fields=`<p class="small">可选加一项，保留休息时间。</p>${[['none','保持原行程','16:45—17:45宇治萨莉亚晚餐，约19:00返店。'],['kotosaka','琴坂参道','原河岸时段内换出15—20分钟，朝雾桥东端向南折返，不延后登山。'],['station','京都站4F《宝岛》舞台','晚餐后经过京都站，有15—20分钟余量才拍；约19:00—19:30返店。'],['tower','京都塔《京吹》联动','16:15返京都 → 酒店休息 → 18:15观景 → 19:15晚饭；替换宇治晚餐，20:30—21:00返店。']].map(([val,label,rule])=>`<label class="option-row"><input type="radio" name="ujiExtra" data-choice="ujiExtra" value="${val}" ${c.ujiExtra===val?'checked':''}>${label}<small>${rule}</small></label>`).join('')}<label class="option-row"><input type="checkbox" data-choice="byodoinInterior" ${c.byodoinInterior?'checked':''}>凤凰堂内部参拜<small>以现场可入场时段为准，12:10前结束。</small></label>`;
 if(d.date==='2026-12-02')fields=`<fieldset class="night-options"><legend>夜间安排</legend>${[['night','高台寺夜枫','17:15—18:30参拜，20:45—21:15返店。'],['skip','取消夜枫','休息半小时后吃晚饭、返店，同时省去八坂神社。']].map(([value,label,note])=>`<label class="option-row"><input type="radio" name="kodaijiPlan" data-choice="kodaijiPlan" value="${value}" ${c.kodaijiPlan===value?'checked':''}>${label}<small>${note}</small></label>`).join('')}</fieldset><label class="option-row"><input type="checkbox" data-choice="yasakaBrief" ${c.yasakaBrief?'checked':''} ${c.kodaijiPlan==='skip'?'disabled':''}>八坂神社顺路短停<small>仅夜枫准时结束且体力有余；包含在晚饭前步行时段。</small></label>`;
 if(d.date==='2026-12-04')fields=`<label class="option-row"><input type="checkbox" data-choice="usjExtra" ${c.usjExtra?'checked':''}>第二项任天堂设施／其他项目<small>看实时等候和体力；马里奥赛车与咚奇刚择一优先。</small></label><label class="option-row"><input type="checkbox" data-choice="kinopio" ${c.kinopio?'checked':''}>午餐改为Kinopio’s Cafe<small>需单独取得餐厅资格；部分餐品超预算，不合适时选原午餐。</small></label>`;
 if(d.date==='2026-12-05'){const stores=['animate','surugaya','potato','surugaya_main'].map(id=>[id,PLACE[id].name]);fields=`<p class="small">总共1—2家；晚到只留一家。替换店铺后，以实时地图核对进出顺序。</p><label class="small">第一家重点店${select('shop1',c.shop1,stores)}</label><label class="small">第二家${select('shop2',c.shop2,[['none','不加第二家'],...stores.filter(([id])=>id!==c.shop1)])}</label>`;}
 if(d.date==='2026-12-06')fields=`<fieldset class="night-options"><legend>下午安排</legend>${[['umeda','梅田购物','一家重点逛，15:30结束。'],['harbor','神户港喝咖啡','替换梅田购物 · 13:10—14:30含往返海边，14:30—15:30回大阪；随后休息、蓝天大厦和晚饭。']].map(([value,label,note])=>`<label class="option-row"><input type="radio" name="kobeAfternoon" data-choice="kobeAfternoon" value="${value}" ${c.kobeAfternoon===value?'checked':''}>${label}<small>${note}</small></label>`).join('')}</fieldset>${c.kobeAfternoon==='umeda'?`<label class="small">重点店${select('umedaMain',c.umedaMain,[['nintendo_osaka','Nintendo OSAKA'],['pokemon_osaka','Pokémon Center Osaka']])}</label><label class="option-row"><input type="checkbox" data-choice="umedaSecond" ${c.umedaSecond?'checked':''}>另一家短看10—15分钟<small>包含在总购物60—75分钟内；长队就省。</small></label>`:'<p class="small">15:30—16:00休息，19:30—20:00返店；交通或排队延误时省去咖啡。</p>'}`;

 return fields;
}
function select(key,value,options){return `<select class="option-select" data-choice="${key}" aria-label="${({shop1:'日本桥第一家店',shop2:'日本桥第二家店',umedaMain:'梅田重点店'})[key]||key}">${options.map(([v,l])=>`<option value="${v}" ${v===value?'selected':''}>${e(l)}</option>`).join('')}</select>`;}

function renderMarkdown(source){const inline=text=>e(text).replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,(_,label,url)=>external(label,url.replace(/&amp;/g,'&'))).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');let result='',table=[],paragraph=[];const flushP=()=>{if(paragraph.length){result+='<p>'+inline(paragraph.join(' '))+'</p>';paragraph=[];}};const flushT=()=>{if(table.length){result+='<div class="table-scroll"><table>'+table.filter(line=>!/^\|[-: |]+\|$/.test(line.trim())).map((line,i)=>'<tr>'+line.trim().replace(/^\||\|$/g,'').split('|').map(cell=>`<${i?'td':'th'}>${inline(cell.trim())}</${i?'td':'th'}>`).join('')+'</tr>').join('')+'</table></div>';table=[];}};for(const line of source.split(/\r?\n/)){if(/^\|/.test(line)){flushP();table.push(line);}else{flushT();if(!line.trim()){flushP();}else if(/^\d+\. /.test(line)||/^- /.test(line)){flushP();result+='<p>'+inline(line)+'</p>';}else paragraph.push(line);}}flushP();flushT();return result;}

if(document.modelContext?.registerTool){
 const tools=[{name:'read_itinerary_day',title:'读取当天行程',description:'读取既定关西行程、当前选择及完成进度，不改变数据。',inputSchema:{type:'object',properties:{date:{type:'string',enum:PLAN.days.map(d=>d.date)}},required:['date'],additionalProperties:false},annotations:{readOnlyHint:true},execute({date}){const d=PLAN.days.find(x=>x.date===date);if(!d)throw Error('无效日期');return {date,events:effectiveEvents(d),progress:progress(d),route:effectiveRoute(d),returnTarget:returnTarget(d)};}},{name:'set_activity_completion',title:'记录活动完成',description:'将指定日期的活动标记为完成或未完成，保存到本机并更新页面。',inputSchema:{type:'object',properties:{date:{type:'string'},eventId:{type:'string'},completed:{type:'boolean'}},required:['date','eventId','completed'],additionalProperties:false},annotations:{readOnlyHint:false},execute({date,eventId,completed}){if(typeof completed!=='boolean')throw Error('completed必须为布尔值');setCheck(date,eventId,completed);render();return{date,eventId,completed,savedLocally:storageOK};}}];
 for(const t of tools){try{Promise.resolve(document.modelContext.registerTool(t)).catch(()=>{});}catch{}}
}
