/* On-the-day actions. Never infer completion from the clock or a link click. */
function nextActivity(d){
 const events=effectiveEvents(d);
 if(!events.some(ev=>activityState(d.date,ev.id)!=='pending'))return null;
 return events.find(ev=>activityState(d.date,ev.id)==='pending')||null;
}
function resumeLink(d){const next=nextActivity(d);return next?pageLink('下一项未完成 '+icon('arrow'),`#day/${d.date}/timeline/${next.id}`,'resume-link',`aria-label="下一项未完成：${e(next.title)}"`):'';}

function navigationPlace(ev){
 if(ev.id==='nara_return_train')return 'kintetsu_nara';
 if(ev.category==='transport'||['nakamura_walk','checkout_osaka'].includes(ev.id))return ev.place_ids.at(-1);
 return null;
}
function eventNavigation(ev,d,includeMeal=false){
 const first=d?mealRows(d,ev).find(row=>row[1]==='首选'):null;
 const hasMealMap=includeMeal||(first&&first[0]!=='早餐');
 const links=ev.place_ids.filter(id=>!hasMealMap||id!==first?.[7]).map(id=>external(icon('pin')+'地图：'+e(PLACE[id].name),PLACE[id].map_search_url,'text-link'));
 if(ev.id==='gion_dinner_walk'&&d){const row=DETAILS[d.date].meals.find(r=>r[0]==='晚餐'&&r[1]==='首选');links.push(external(icon('pin')+'地图：'+e(row[2]),mealMap(d,row),'text-link'));}
 if(includeMeal&&first&&first[0]!=='早餐')links.push(external(icon('pin')+'地图：'+e(first[2]),mealMap(d,first),'text-link'));
 return links.length?`<div class="activity-navigation">${links.join('')}</div>`:'';
}
// Stations and entrances absent from the activity's destination list remain explicit.
const TRANSPORT_MAPS={
 demachi_transfer:[['京都站地铁烏丸线','京都駅 地下鉄 烏丸線'],['今出川站','今出川駅']],
 inari_transfer:[['JR稻荷站','稲荷駅 JR']],luggage_pickup:[['JR稻荷站','稲荷駅 JR'],['京都站中央口','京都駅 中央口']],
 kyoto_night_return:[['阪急京都河原町站','京都河原町駅 阪急'],['阪急烏丸站','烏丸駅 阪急'],['地铁四条站','四条駅 地下鉄']],
 usj_transfer:[['西九条站','西九条駅 JR'],['Universal City站','ユニバーサルシティ駅']],
 usj_dinner:[['Universal City站','ユニバーサルシティ駅'],['西九条站','西九条駅 JR'],['JR新今宫站','新今宮駅 JR']],
 kobe_bridge_visit:[['Port Liner三宫站','三宮駅 ポートライナー'],['Port Liner中公园站','中公園駅 ポートライナー']]
};
function transportMaps(ev){const maps=TRANSPORT_MAPS[ev.id]||[];return maps.length?`<div class="activity-navigation">${maps.map(([label,query])=>external(icon('pin')+'地图：'+e(label),mapURL(query),'text-link')).join('')}</div>`:'';}

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
