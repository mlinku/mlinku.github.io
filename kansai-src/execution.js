/* On-the-day actions. Never infer completion from the clock or a link click. */
function navigationPlace(ev){
 if(ev.id==='nara_return_train')return 'kintetsu_nara';
 if(ev.category==='transport'||['nakamura_walk','checkout_osaka'].includes(ev.id))return ev.place_ids.at(-1);
 return null;
}
function eventNavigation(ev,d,includeMeal=false){
 const first=d?mealRows(d,ev).find(row=>row[1]==='首选'):null;
 const hasMealMap=includeMeal||(first&&first[0]!=='早餐');
 const stops=NAVIGATION_PATHS[ev.id]||activityPlaceIds(ev);
 const links=stops.filter(stop=>!hasMealMap||stop!==first?.[7]).map(stop=>{
  if(Array.isArray(stop))return placeRow(stop[0],stop[1],mapURL(stop[1]));
  const p=PLACE[stop];
  return placeRow(p.name,[PLACE_LOCATIONS[stop],p.address_ja||(p.name_ja!==p.name?p.name_ja:'')].filter(Boolean).join(' · '),p.map_search_url);
 });
 if(ev.id==='gion_dinner_walk'&&d){const row=DETAILS[d.date].meals.find(r=>r[0]==='晚餐'&&r[1]==='首选');links.push(placeRow(row[2],row[4],mealMap(d,row),true));}
 if(includeMeal&&first&&first[0]!=='早餐')links.push(placeRow(first[8]?.pending?'餐饮区域':first[2],first[4],mealMap(d,first),true));
 if(!links.length)return '';
 // One full-width row per place: name and address on the left, the whole row opens the map.
 return `<div class="activity-navigation place-list${links.length>1?' is-route':''}" aria-label="${links.length>1?'沿途各站地图':'地图'}">${links.join('')}</div>`;
}
function placeRow(name,sub,url,meal=false){return external(`<span class="place-dot" aria-hidden="true"></span><span class="place-text"><strong>${e(name)}</strong>${sub?`<small lang="ja">${e(sub)}</small>`:''}</span><span class="place-go">${icon('pin')}导航</span>`,url,'place-row'+(meal?' is-meal':''));}
// Supplemental station maps belong in travel order, before the destination.
const NAVIGATION_PATHS={
 demachi_transfer:['hotel_kyoto',['京都站地铁烏丸线','京都駅 地下鉄 烏丸線'],['今出川站','今出川駅'],'demachi'],
 inari_transfer:['kyoto_station',['JR稻荷站','稲荷駅 JR'],'inari'],
 luggage_pickup:[['JR稻荷站','稲荷駅 JR'],['京都站中央口','京都駅 中央口'],'hotel_kyoto'],
 kyoto_night_return:[['阪急京都河原町站','京都河原町駅 阪急'],['阪急烏丸站','烏丸駅 阪急'],['地铁四条站','四条駅 地下鉄'],'hotel_kyoto'],
 usj_transfer:['hotel_osaka','jr_shinimamiya',['西九条站','西九条駅 JR'],['Universal City站','ユニバーサルシティ駅'],'usj'],
 usj_dinner:[['Universal City站','ユニバーサルシティ駅'],['西九条站','西九条駅 JR'],['JR新今宫站','新今宮駅 JR'],'hotel_osaka'],
 kobe_bridge_visit:[['Port Liner三宫站','三宮駅 ポートライナー'],['Port Liner中公园站','中公園駅 ポートライナー'],'kobe_bridge']
};
// These activities stay inside USJ; the park entrance map remains on arrival.
function activityPlaceIds(ev){return ['usj_app','usj_core','usj_lunch','usj_rest','usj_finish'].includes(ev.id)?ev.place_ids.filter(id=>id!=='usj'):ev.place_ids;}

const CAFE_SOURCE='https://tokichi.jp/pages/honten-store-page';
const USJ_HOURS='https://www.usj.co.jp/web/ja/jp/park-guide/schedule/park-hour';
const USJ_ENTRY='https://www.usj.co.jp/web/ja/jp/enjoy/numbered-ticket/app/timed-entry-ticket';
const NANKAI_TIMETABLE='https://www.nankai.co.jp/tc_railway/access-timetable';
const NANKAI_STATION='https://www.nankai.co.jp/traffic/station/shinimamiya.html';
function executionNotice(d,ev){
 const content={
  flight_out:'当前11:05关闭登机口（香港时间）；以航司最新通知及登机牌为准。',
  agata_stamp:'登录活动网站并开启定位，确认领章成功再离开；攻略勾选不代替领章。',
  uji_parfait:'10:00开门，不接受预约；75分钟含候位与用餐。久等时缩短午饭前闲逛。',
  daikichi_visit:'14:30仍未到登山口时，须确认能白天下山，否则取消。',
  kodaiji_night:'17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。稍有延迟时18:45前离寺，省去八坂神社并顺延晚餐。',
  gion_dinner:'おめん20:00最后点餐；晚到或长队时换简餐。',
  usj_transfer:`营业时间于10/2核实，临行再查是否调整。 ${external('官方营业日历 ↗',USJ_HOURS)}`,
  usj_app:`在官方App选中两张门票，一起申请区域资格。 ${external('官方操作说明 ↗',USJ_ENTRY)}`,
  usj_finish:'18:00后预留缓冲，19:00前结束普通票设施体验。19:00—22:00 Amex活动设施及部分餐饮需凭证，19:00并非统一离园时间。',
  nara_visit:'抵奈良晚于15:30时，先核对入堂余量再决定接驳，不靠压缩参观硬赶。',
  airport_train:`南海空港急行，现行平日时刻已核实；临行复核改点及运行情况。 ${external('南海时刻表 ↗',NANKAI_TIMETABLE)} · ${external('新今宫站入口图 ↗',NANKAI_STATION)}`
 };
 return content[ev.id]?`<p class="execution-note">${content[ev.id]}</p>`:'';
}
function rallyActions(ev){return ev.rally_spot?`<div class="rally-actions">${external('打开集章活动 ↗',PILGRIMAGE.rally.entry_url,'btn small')}${pageLink('点位与规则','#day/2026-12-01/pilgrimage/rally','text-link')}</div>`:'';}
