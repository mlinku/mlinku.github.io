/* On-the-day actions. Never infer completion from the clock or a link click. */
function navigationPlace(ev){
 if(ev.id==='nara_return_train')return 'kintetsu_nara';
 if(ev.category==='transport'||['nakamura_walk','checkout_osaka'].includes(ev.id))return ev.place_ids.at(-1);
 return null;
}
// Places an activity passes through, in travel order; the last one is where it ends.
function navigationStops(ev,d,includeMeal=false){
 const first=d?mealRows(d,ev).find(row=>row[1]==='首选'):null;
 const hasMealMap=includeMeal||(first&&first[0]!=='早餐');
 const stops=[];
 for(const stop of NAVIGATION_PATHS[ev.id]||activityPlaceIds(ev)){
  if(hasMealMap&&stop===first?.[7])continue;
  if(Array.isArray(stop)){stops.push({name:stop[0],sub:stop[1],url:mapURL(stop[1])});continue;}
  // Hotels are named only; their address sits once in 今晚住.
  const p=PLACE[stop];stops.push({name:p.name,sub:stop.startsWith('hotel_')?'':[PLACE_LOCATIONS[stop],p.address_ja||(p.name_ja!==p.name?p.name_ja:'')].filter(Boolean).join(' · '),url:p.map_search_url});
 }
 if(ev.id==='gion_dinner_walk'&&d){const row=DETAILS[d.date].meals.find(r=>r[0]==='晚餐'&&r[1]==='首选');stops.push({name:row[2],sub:row[4],url:mealMap(d,row),meal:true});}
 if(includeMeal&&first&&first[0]!=='早餐')stops.push({name:first[8]?.pending?'餐饮区域':first[2],sub:first[4],url:mealMap(d,first),meal:true});
 return stops;
}
// Supplemental station maps belong in travel order, before the destination.
const NAVIGATION_PATHS={
 demachi_transfer:['hotel_kyoto',['京都站地铁烏丸线','京都駅 地下鉄 烏丸線'],['今出川站','今出川駅'],'demachi'],
 inari_transfer:['kyoto_station',['JR稻荷站','稲荷駅 JR'],'inari'],
 luggage_pickup:[['JR稻荷站','稲荷駅 JR'],['京都站中央口','京都駅 中央口'],'hotel_kyoto'],
 kyoto_night_return:[['阪急京都河原町站','京都河原町駅 阪急'],['阪急烏丸站','烏丸駅 阪急'],['地铁四条站','四条駅 地下鉄'],'hotel_kyoto'],
 kobe_bridge_visit:[['Port Liner三宫站','三宮駅 ポートライナー'],['Port Liner中公园站','中公園駅 ポートライナー'],'kobe_bridge']
};
function activityPlaceIds(ev){return ev.place_ids;}

const NANKAI_TIMETABLE='https://www.nankai.co.jp/tc_railway/access-timetable';
const NANKAI_STATION='https://www.nankai.co.jp/traffic/station/shinimamiya.html';
function executionNotice(d,ev){
 const content={
  flight_out:'当前11:05关闭登机口（香港时间）；以航司最新通知及登机牌为准。',
  agata_stamp:'登录活动网站并开启定位，确认领章成功再离开。',
  daikichi_visit:'14:40仍未到登山口、雨天或明显疲劳时取消登山。',
  kodaiji_night:'17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。稍有延迟时18:45前离寺，省去八坂神社并顺延晚餐。',
  gion_dinner:'おめん20:00最后点餐；晚到或长队时换简餐。',
  kada_transfer:`${external('南海时刻表 ↗',NANKAI_TIMETABLE)}`,
  kada_day_return:`${external('南海时刻表 ↗',NANKAI_TIMETABLE)}`,
  airport_train:`南海空港急行，现行平日时刻已核实；临行复核改点及运行情况。 ${external('南海时刻表 ↗',NANKAI_TIMETABLE)} · ${external('新今宫站入口图 ↗',NANKAI_STATION)}`
 };
 return content[ev.id]?`<p class="execution-note">${content[ev.id]}</p>`:'';
}
