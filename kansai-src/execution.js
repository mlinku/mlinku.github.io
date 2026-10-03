/* On-the-day actions. Never infer completion from the clock or a link click. */
function nextActivity(d){
 const events=effectiveEvents(d);
 if(!events.some(ev=>state.checks[d.date+':'+ev.id]))return null;
 return events.find(ev=>!state.checks[d.date+':'+ev.id])||null;
}
function resumeLink(d){const next=nextActivity(d);return next?pageLink('下一项未完成 '+icon('arrow'),`#day/${d.date}/timeline/${next.id}`,'resume-link',`aria-label="下一项未完成：${e(next.title)}"`):'';}

function navigationPlace(ev){
 if(ev.id==='nara_return_train')return 'kintetsu_nara';
 if(ev.category==='transport'||['nakamura_walk','checkout_osaka'].includes(ev.id))return ev.place_ids.at(-1);
 return null;
}
function eventNavigation(ev,d){
 if(ev.id==='gion_dinner_walk'&&d){const row=DETAILS[d.date].meals.find(r=>r[0]==='晚餐'&&r[1]==='首选');return `<div class="activity-navigation">${external(icon('pin')+'地图：'+e(row[2]),mealMap(d,row),'text-link')}</div>`;}
 const id=navigationPlace(ev),p=PLACE[id];return p?`<div class="activity-navigation">${external(icon('pin')+'地图：'+e(p.name),p.map_search_url,'text-link')}</div>`:'';
}

const CAFE_SOURCE='https://tokichi.jp/pages/honten-store-page';
const USJ_HOURS='https://www.usj.co.jp/web/ja/jp/park-guide/schedule/park-hour';
const USJ_ENTRY='https://www.usj.co.jp/web/ja/jp/enjoy/numbered-ticket/app/timed-entry-ticket';
const NANKAI_TIMETABLE='https://www.nankai.co.jp/tc_railway/access-timetable';
const NANKAI_STATION='https://www.nankai.co.jp/traffic/station/shinimamiya.html';
function executionNotice(d,ev){
 const content={
  agata_stamp:'登录活动网站并开启定位，确认领章成功再离开；攻略勾选不代替领章。',
  uji_parfait:`10:00开门，不接受预约；75分钟含候位与用餐。久等时缩短午饭前闲逛。 ${external('候位与营业 ↗',CAFE_SOURCE)}`,
  daikichi_visit:'14:30仍未到登山口时，须确认能白天下山，否则取消。',
  kodaiji_night:'17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。',
  gion_dinner:'おめん20:00最后点餐；晚到或长队时换简餐。',
  usj_transfer:`营业时间于10/2核实，临行再查是否调整。 ${external('官方营业日历 ↗',USJ_HOURS)}`,
  usj_app:`在官方App选中两张门票，一起申请区域资格。 ${external('官方操作说明 ↗',USJ_ENTRY)}`,
  airport_train:`南海空港急行，现行平日时刻已核实；临行复核改点及运行情况。 ${external('南海时刻表 ↗',NANKAI_TIMETABLE)} · ${external('新今宫站入口图 ↗',NANKAI_STATION)}`
 };
 return content[ev.id]?`<p class="execution-note">${content[ev.id]}</p>`:'';
}
function rallyActions(ev){return ev.rally_spot?`<div class="rally-actions">${external('打开集章活动 ↗',PILGRIMAGE.rally.entry_url,'btn small')}${pageLink('点位与规则','#day/2026-12-01/pilgrimage/rally','text-link')}</div>`:'';}
