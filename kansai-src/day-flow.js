/* Shared presentation keeps selected plans consistent across overview and daily views. */
function dayPresentation(d){
 const info={...DETAILS[d.date]},c=choice(d);
 if(d.date==='2026-12-02'&&c.kodaijiPlan==='skip'){
  info.short='京都';info.focus='《玉子市场》巡礼与清水寺赏枫。';
  info.summary='出町、清水寺、东山散步';info.cover='kiyomizu';info.eyebrow='京都 · 出町 → 清水寺 → 东山';
 }
 return info;
}

/* Shared activity order for the timetable and scene references. */
const DayFlow={
 forDay(d){
  const events=effectiveEvents(d),definitions=DETAILS[d.date].phases;
  const sections=definitions.map(([label,ids],index)=>{
   const name=d.date==='2026-12-02'&&choice(d).kodaijiPlan==='skip'&&label.startsWith('傍晚')?'傍晚 · 坐下休息':label;
   const short=name.split(' · ')[0];
   const items=events.filter(ev=>ids.includes(ev.id)||(index===definitions.length-1&&!definitions.some(([,other])=>other.includes(ev.id))));
   const scenePoints=PILGRIMAGE.points.filter(p=>p.date===d.date&&items.some(ev=>ev.id===p.event_id)&&(!p.option||choice(d).ujiExtra===p.option));
   return {id:'section-'+index,name,short,events:items,scenePoints};
  }).filter(section=>section.events.length);
  // Only main activities carry a 済 stamp; transfers, walks and rests are connectors (trip/model.js isMajorEvent).
  const counted=events.filter(ev=>typeof isMajorEvent!=='function'||isMajorEvent(d,ev));
  return {sections,events,done:counted.filter(ev=>activityState(d.date,ev.id)==='done').length,total:counted.length};
 }
};

// Bind each original route occurrence, not just its place ID: return visits have different times.
const ROUTE_EVENTS={
 '2026-11-30':['flight_out','flight_out','arrival_transfer','checkin_kyoto'],
 '2026-12-02':['demachi_transfer','demachi_visit','delta_visit','kiyomizu_transfer','kiyomizu_transfer','kiyomizu_visit','higashiyama_walk','higashiyama_walk','higashiyama_walk','higashiyama_walk','kodaiji_night','kyoto_night_return'],
 '2026-12-07':['checkout_osaka','airport_train','airport_train','flight_home']
};
function routePurpose(node,eventId,index,nodes){
 if(node.id.startsWith('hotel_')){
  if(eventId==='checkout_kyoto')return '退房寄存';
  if(eventId==='checkout_osaka')return '退房离店';
  if(eventId==='luggage_pickup')return '取行李';
  if(eventId==='checkin_osaka')return '抵达入住，随后休息约1小时';
  if(eventId==='kada_day_return')return '返店后附近吃饭、收主要行李';
  if(eventId?.startsWith('checkin_'))return '入住';
  return index===0?'离店':'返店';
 }
 if(node.id==='hkg'&&eventId==='flight_out')return '建议08:25抵达T2，先办理值机';
 if(node.id==='kix'&&eventId==='airport_train')return '到站后前往T1值机';
 if(!nodes.slice(0,index).some(p=>p.id===node.id))return '';
 if(node.id==='uji_bridge')return eventId==='uji_shrines'?'过桥去神社':'过桥去晚餐';
 if(eventId==='uji_return')return node.id==='jr_uji'?'乘车回京都':nodes[index+1]?.id==='kyoto_stage'?'下车去4F舞台':'下车返店';
 if(eventId==='osaka_transfer'&&node.id==='kyoto_station')return '取行李后乘车去大阪';
 if(eventId==='kobe_bridge_visit')return node.id==='port_nakakoen'?'乘车回三宫':'出站回三宫商圈';
 if(eventId==='last_evening_return')return node.id==='sannomiya'?'晚餐后乘车返大阪':node.id==='jr_osaka'?'换环状线返店':'下车返店';
 if(eventId==='nara_park_scenery')return '午饭后走一段草地与步道';
 if(eventId==='nara_return_train'&&node.id==='kintetsu_nara')return '乘车回大阪日本桥';
 if(['osaka_evening_return','nara_day_return'].includes(eventId))return node.id==='nankai_namba'?'饭后乘南海返店':'下车返店';
 if(eventId==='wakayamashi_return')return node.id==='kada_station'?'14:40前进站候车':'下车步行去城公园';
 if(eventId==='wakayama_station_return')return '乘南海回大阪';
 if(eventId==='kada_day_return')return '下车返店';
 if(eventId==='sannomiya_dinner')return '返回商圈，晚餐地点待选';
 return '';
}
function timedRoute(d){
 const nodes=effectiveRoute(d),events=effectiveEvents(d),c=choice(d);
 const eventTime=(id,label)=>{const ev=events.find(ev=>ev.id===id);return ev?{eventId:id,text:ev.time_label,label:label||({transport:'交通',meal:'用餐',rest:'休息',walk:'步行',visit:'参观',shopping:'购物'}[ev.category]||'行程')}:null;};
 const flightTime=(id,field)=>{const b=PLAN.bookings.find(b=>b.id===id),f=flightLocal(b,field);return {text:f.time,label:f.region+(field==='departure'?'起飞':'抵达')+' · 当地时间'};};
 return nodes.map((node,i)=>{
  let id=node.eventId||(d.route_event_ids||ROUTE_EVENTS[d.date])?.[node.original-1];
  if(d.date==='2026-12-02'&&node.id==='yasaka_shrine')id='gion_dinner_walk';
  if(d.date==='2026-12-04'&&selectedShops(c).includes(node.id))id='anime_shopping';
  let times=[eventTime(id)].filter(Boolean);
  if(i===0&&node.id.startsWith('hotel_')&&d.date!=='2026-12-07')times=id==='checkout_kyoto'?[eventTime(id,'退房寄存')]:[{text:d.departure_target||'开园时间待确认',label:'离店'}];
  if(i===nodes.length-1&&node.id.startsWith('hotel_'))times=[{text:returnTarget(d),label:d.date==='2026-11-30'?'入住':'返店'}];
  if(d.date==='2026-11-30'&&['hkg','kix'].includes(node.id))times=[flightTime('flight_out',node.id==='hkg'?'departure':'arrival')];
  if(d.date==='2026-12-07'){
   if(node.id==='hotel_osaka')times=[eventTime('checkout_osaka','退房离店')];
   if(node.id==='nankai_shinimamiya')times=[eventTime('airport_train','候选列车')];
   if(node.id==='kix')times=[eventTime('airport_train','机场列车')];
   if(node.id==='hkg')times=[flightTime('flight_home','arrival')];
  }
  if(d.date==='2026-12-04'&&node.id==='kintetsu_nara')times=[eventTime(id,id==='nara_return_train'?'返程，含候车':'交通')];
  if(d.date==='2026-12-05'&&node.id==='wakayamashi_station'&&id==='kada_transfer')times=[{eventId:id,text:'途中换乘',label:'换加太线'}];
  const shared=['uji_pilgrimage','uji_shrines','higashiyama_walk','nara_visit','anime_shopping','kada_pilgrimage','awashima_visit','motomachi_cd_shopping','delta_visit'].includes(id);
  if(shared&&times.length===1)times[0].label='同段共用';
  const purpose=routePurpose(node,id,i,nodes);
  if(node.id.startsWith('hotel_')&&times.length===1)times[0].label=purpose;
  return {...node,eventId:id,purpose,times:times.length?times:[{text:'时间待确认',label:'参考'}]};
 });
}

