/* On-the-day actions. Never infer completion from the clock or a link click. */
function nextActivity(d){
 const events=effectiveEvents(d);
 if(!events.some(ev=>state.checks[d.date+':'+ev.id]))return null;
 return events.find(ev=>!state.checks[d.date+':'+ev.id])||null;
}
function resumeLink(d){const next=nextActivity(d);return next?pageLink('继续行程 '+icon('arrow'),`#day/${d.date}/timeline/${next.id}`,'resume-link',`aria-label="继续行程：${e(next.title)}"`):'';}

function navigationPlace(ev){
 if(ev.id==='nara_return_train')return 'kintetsu_nara';
 if(ev.category==='transport'||['nakamura_walk','sky_transfer','checkout_osaka'].includes(ev.id))return ev.place_ids.at(-1);
 return null;
}
function eventNavigation(ev){const id=navigationPlace(ev),p=PLACE[id];return p?`<div class="activity-navigation">${external(icon('pin')+'地图：'+e(p.name),p.map_search_url,'text-link')}</div>`:'';}

const CAFE_SOURCE='https://tokichi.jp/pages/honten-store-page';
const USJ_HOURS='https://www.usj.co.jp/web/ja/jp/park-guide/schedule/park-hour';
const USJ_ENTRY='https://www.usj.co.jp/web/ja/jp/enjoy/numbered-ticket/app/timed-entry-ticket';
const NANKAI_TIMETABLE='https://www.nankai.co.jp/tc_railway/access-timetable';
const NANKAI_STATION='https://www.nankai.co.jp/traffic/station/shinimamiya.html';
function executionNotice(d,ev){
 const content={
  flight_out:'香港T2值机，随后按机场指引前往T1登机。',
  kohata_stamp:'集章前登录活动网站并开启定位；确认领取成功后再离开。攻略勾选只记录行程。',
  uji_pilgrimage:`先看中村藤吉候位情况；时间不足时缩短河岸拍照，提前到店。 ${external('查看候位 ↗',CAFE_SOURCE)}`,
  uji_parfait:`<strong>通常16:00结束受理，繁忙时可能提前。</strong>此时段包含等位与用餐。 ${external('候位与营业 ↗',CAFE_SOURCE)}`,
  kodaiji_night:'17:45仍未入场，或预计排队超过30分钟时，直接吃晚饭。',
  gion_dinner:'おめん20:00最后点餐；晚到或长队时选简餐。',
  usj_transfer:`开园时间待确认，出发前核对12/4安排。 ${external('官方开园时间 ↗',USJ_HOURS)}`,
  usj_app:`两人都过闸后，在官方App申请区域资格。 ${external('官方操作说明 ↗',USJ_ENTRY)}`,
  airport_train:`候选班次须在出发前确认。 ${external('南海时刻表 ↗',NANKAI_TIMETABLE)} · ${external('新今宫站入口图 ↗',NANKAI_STATION)}`
 };
 return content[ev.id]?`<p class="execution-note">${content[ev.id]}</p>`:'';
}
function rallyActions(ev){return ev.rally_spot?`<div class="rally-actions">${external('打开集章活动 ↗',PILGRIMAGE.rally.entry_url,'btn small')}${pageLink('点位与规则','#day/2026-12-01/pilgrimage/rally','text-link')}</div>`:'';}
