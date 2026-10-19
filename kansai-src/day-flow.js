/* Shared presentation keeps selected plans consistent across overview and daily views. */
// The ticket photo's subtitle: at most three stops.
const DAY_EYEBROW={'2026-12-02':'出町 → 清水寺 → 高台寺','2026-12-05':'加太 → 淡嶋神社 → 和歌山城','2026-12-06':'北野 → 元町 → 神户大桥'};
function dayPresentation(d){
 const info={...DETAILS[d.date],...(DAY_EYEBROW[d.date]?{eyebrow:DAY_EYEBROW[d.date]}:{})},c=choice(d);
 if(d.date==='2026-12-02'&&c.kodaijiPlan==='skip'){
  info.short='京都';info.focus='《玉子市场》巡礼与清水寺赏枫。';
  info.summary='出町、清水寺、东山散步';info.cover='kiyomizu';info.eyebrow='京都 · 出町 → 清水寺 → 东山';
 }
 return info;
}

// The overview's one-line highlights: at most three, short.
const DAY_HIGHLIGHTS={'2026-11-30':'机场 → 酒店','2026-12-01':'抹茶、京吹巡礼','2026-12-02':'玉子巡礼、清水寺、夜枫','2026-12-03':'京都塔集章、稻荷、道顿堀',
 '2026-12-04':'大佛殿、奈良公园、日本桥','2026-12-05':'加太巡礼、和歌山城','2026-12-06':'巡礼、元町CD、和牛','2026-12-07':'南海 → 机场 → 香港'};
function dayHighlights(d){if(d.date==='2026-12-02'&&choice(d).kodaijiPlan==='skip')return '玉子巡礼、清水寺、东山';return DAY_HIGHLIGHTS[d.date]||dayPresentation(d).summary;}

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

