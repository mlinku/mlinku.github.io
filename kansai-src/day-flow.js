/* Shared activity order for the timetable and scene references. */
const DayFlow={
 forDay(d){
  const events=effectiveEvents(d),definitions=DETAILS[d.date].phases;
  const sections=definitions.map(([label,ids],index)=>{
   const name=d.date==='2026-12-06'&&choice(d).kobeAfternoon==='harbor'&&label.startsWith('下午')?'下午 · 海边咖啡与返程':d.date==='2026-12-02'&&choice(d).kodaijiPlan==='skip'&&label.startsWith('傍晚')?'傍晚 · 坐下休息':label;
   const short=name.split(' · ')[0];
   const items=events.filter(ev=>ids.includes(ev.id)||(index===definitions.length-1&&!definitions.some(([,other])=>other.includes(ev.id))));
   const scenePoints=PILGRIMAGE.points.filter(p=>p.date===d.date&&items.some(ev=>ev.id===p.event_id)&&(!p.option||choice(d).ujiExtra===p.option));
   return {id:'section-'+index,name,short,events:items,scenePoints};
  }).filter(section=>section.events.length);
  const done=events.filter(ev=>state.checks[d.date+':'+ev.id]).length;
  return {sections,events,done,total:events.length};
 }
};

// Bind each original route occurrence, not just its place ID: return visits have different times.
const ROUTE_EVENTS={
 '2026-11-30':['flight_out','flight_out','arrival_transfer','checkin_kyoto'],
 '2026-12-01':['uji_transfer','uji_transfer','uji_transfer','byodoin_visit','byodoin_visit','uji_lunch','uji_pilgrimage','uji_pilgrimage','uji_pilgrimage','uji_pilgrimage','uji_pilgrimage','daikichi_visit','uji_dinner_walk','uji_saizeriya_dinner','uji_return','kyoto_rest'],
 '2026-12-02':['demachi_transfer','demachi_visit','delta_visit','kiyomizu_transfer','kiyomizu_transfer','kiyomizu_visit','higashiyama_walk','higashiyama_walk','higashiyama_walk','higashiyama_walk','kodaiji_night','kyoto_night_return'],
 '2026-12-03':['checkout_kyoto','tofukuji_visit','inari_visit','luggage_pickup','osaka_transfer','osaka_transfer','osaka_transfer','checkin_osaka','shinsekai_dinner',null],
 '2026-12-04':['usj_transfer','usj_transfer','usj_core','usj_dinner'],
 '2026-12-05':['nara_transfer','nara_transfer','nara_transfer','nara_visit','nara_visit','nara_return_train','nara_return_train','anime_shopping','anime_shopping','dotonbori_dinner','glico_photo','nara_day_return','nara_day_return','nara_day_return'],
 '2026-12-06':['kobe_transfer','kobe_transfer','kobe_transfer','kobe_transfer','ikuta_visit','umeda_transfer','umeda_transfer','umeda_shop','sky_visit','sky_dinner','last_evening_return','last_evening_return','last_evening_return'],
 '2026-12-07':['checkout_osaka','airport_train','airport_train','flight_home']
};
function timedRoute(d){
 const nodes=effectiveRoute(d),events=effectiveEvents(d),c=choice(d);
 const eventTime=(id,label)=>{const ev=events.find(ev=>ev.id===id);return ev?{eventId:id,text:ev.time_label,label:label||({transport:'交通',meal:'用餐',rest:'休息',walk:'步行',visit:'参观',shopping:'购物'}[ev.category]||'行程')}:null;};
 const flightTime=(id,field)=>{const b=PLAN.bookings.find(b=>b.id===id),f=flightLocal(b,field);return {text:f.time,label:f.region+(field==='departure'?'起飞':'抵达')+' · 当地时间'};};
 return nodes.map((node,i)=>{
  let id=node.eventId||ROUTE_EVENTS[d.date]?.[node.original-1];
  if(d.date==='2026-12-01'&&c.ujiExtra==='tower'&&node.original===13)id='uji_return';
  if(d.date==='2026-12-01'&&node.optional)id={kotosaka:'uji_pilgrimage',kyoto_tower:'tower_visit',kyoto_station:c.ujiExtra==='tower'?'tower_dinner':'uji_return',kyoto_stage:'station_stage'}[node.id];
  if(d.date==='2026-12-02'&&node.id==='yasaka_shrine')id='gion_dinner_walk';
  if(d.date==='2026-12-05'&&selectedShops(c).includes(node.id))id='anime_shopping';
  if(d.date==='2026-12-06'&&['nintendo_osaka','pokemon_osaka'].includes(node.id))id='umeda_shop';
  let times=[eventTime(id)].filter(Boolean);
  if(i===0&&node.id.startsWith('hotel_')&&d.date!=='2026-12-07')times=[{text:d.departure_target||'开园时间待确认',label:'离店'}];
  if(i===nodes.length-1&&node.id.startsWith('hotel_'))times=[{text:returnTarget(d),label:d.date==='2026-11-30'?'入住':'返店'}];
  if(d.date==='2026-12-01'&&node.original===d.route_stop_ids.length&&c.ujiExtra==='tower')times=[eventTime('kyoto_rest')];
  if(d.date==='2026-11-30'&&['hkg','kix'].includes(node.id))times=[flightTime('flight_out',node.id==='hkg'?'departure':'arrival')];
  if(d.date==='2026-12-07'){
   if(node.id==='hotel_osaka')times=[eventTime('checkout_osaka','退房离店')];
   if(node.id==='nankai_shinimamiya')times=[eventTime('airport_train','候选列车')];
   if(node.id==='kix')times=[eventTime('airport_train','机场列车'),flightTime('flight_home','departure')];
   if(node.id==='hkg')times=[flightTime('flight_home','arrival')];
  }
  if(d.date==='2026-12-04'&&node.id==='usj')times=[{text:'开园时间待确认',label:'入园'},eventTime('usj_finish','收尾')];
  if(d.date==='2026-12-05'){
   if(node.id==='kintetsu_nara')times=[eventTime('nara_return_train','上车')];
   if(node.id==='kintetsu_nippombashi')times=[{text:'到站时刻待确认',label:'途中'},eventTime('nippombashi_arrival','首店抵达')];
   if(node.id===c.shop1)times=[eventTime('nippombashi_arrival','抵达'),eventTime('anime_shopping','购物')];
  }
  const shared=['uji_pilgrimage','higashiyama_walk','nara_visit','umeda_shop','byodoin_visit','delta_visit'].includes(id);
  if(shared&&times.length===1)times[0].label='同段共用';
  return {...node,eventId:id,times:times.length?times:[{text:'时间待确认',label:'参考'}]};
 });
}

const routeTimeKey=t=>JSON.stringify([t.eventId||t.label,t.text]);
function routeGroups(d,phase='全部'){
 const all=timedRoute(d),groups=[];
 all.forEach((stop,index)=>{
  if(phase!=='全部'&&stop.phase!==phase)return;
  const node={...stop,index,seen:all.slice(0,index).some(s=>s.id===stop.id)};
  const last=groups.at(-1);
  const shared=last&&last.phase===node.phase&&last.eventId===node.eventId
   ?last.times.filter(t=>node.times.some(other=>routeTimeKey(t)===routeTimeKey(other))):[];
  if(shared.length){last.times=shared;last.stops.push(node);}
  else groups.push({phase:node.phase,eventId:node.eventId,times:node.times,stops:[node]});
 });
 return groups;
}
