/* 出行版 · model. Everything the travel UI shows, derived from the locked plan in details.js, app.js, day-flow.js
   and execution.js. Pure functions, no DOM: ui.js only turns these objects into markup. */

/* ---------- Copy ---------- */
// One-line card copy for activities whose planning note is long; the sentences it leaves out stay under 完整说明.
// An empty string hides the line when 怎么走 already says the same thing.
const EVENT_BRIEF={
 flight_out:'',
 checkin_kyoto:'入住确认12/3退房后的行李寄存位置。',
 dinner_arrival:'酒店附近简餐；到得早且无需久等再选车站餐厅。',
 uji_parfait:'10:00开门不预约；75分钟含候位与用餐。',
 uji_lunch_walk:'沿西岸短拍；候位延迟时缩短此段。',
 uji_lunch:'',
 uji_approach:'沿街拍照，不进收费区。',
 agata_stamp:'延迟时可略过。',
 uji_pilgrimage:'约45分钟，久美子椅多留片刻，桥上顺拍。',
 uji_shrines:'短看两神社后前往登山口。',
 daikichi_visit:'往返加展望台约75分钟。',
 suikan_stamp:'河岸拍照，坐下休息约10分钟。',
 heiwa_visit:'商场3F，逛30—40分钟。',
 keihan_uji_visit:'站内看展示约10分钟。',
 uji_dinner_walk:'',
 station_stage:'上4F室町小路广场，拍大阶梯和红色时钟。',
 demachi_visit:'拍入口、吊鱼与拱廊；小吃只排短队。',
 delta_visit:'河岸拍照约25分钟，优先《玉子》高野川侧。',
 higashiyama_walk:'步行与巡礼短拍约75分钟。',
 kodaiji_night:'排队超30分钟或疲劳直接吃晚饭；18:45前离寺顺延晚餐。',
 gion_dinner_walk:'夜枫准时结束且有余量时短停八坂神社。',
 checkout_kyoto:'寄存行李；不能寄存就用京都站储物柜并记下位置。',
 kyoto_tower_visit:'展望室5层领台纸，集齐7处章再出场。',
 kyoto_lunch:'附近简餐，不长时间排队。',
 inari_visit:'千本鸟居到奥社奉拜所，原路返回；不登顶。',
 luggage_pickup:'',
 osaka_transfer:'',
 checkin_osaka:'入住后休息30—45分钟。',
 shinsekai_dinner:'通天阁地面短拍，按体力调整停留。',
 osaka_evening_return:'备好USJ门票App、充电宝与次日早餐。',
 usj_transfer:'',
 usj_core:'任天堂区域一次玩完、拍完、逛完，再按场次看柯南。',
 usj_finish:'重点项目玩完且疲劳可提前离园。',
 castle_transfer:'',
 castle_visit:'步行到天守阁外观拍照，约1小时，不入馆。',
 nara_transfer:'换乘约40—60分钟，预计13:15—13:35到近铁奈良。',
 nara_park_walk:'沿步道到南大门约30分钟，远看鹿即可。',
 nara_visit:'南大门和大佛殿内部约50分钟；冬季17:00闭门。',
 nara_rest:'沿途短休约10分钟。',
 nara_station_walk:'步行约30分钟回近铁奈良站。',
 nara_return_train:'',
 anime_shopping:'挑1—2家慢逛。',
 nippombashi_dinner:'',
 glico_photo:'戎桥、格力高、心斋桥筋南口短拍，再去南海难波。',
 nara_day_return:'',
 kitano_lunch:'北野物语馆外观可顺路短拍。',
 sannomiya_shopping:'先看音像、毛绒和立牌。',
 kobe_bridge_visit:'北公园现场拍摄约30分钟，尽量白天拍。',
 sannomiya_evening:'补逛没逛完的店，逛完就坐下休息。',
 last_evening_return:'预计20:45—21:00回店，整理行李、证件和早餐。',
 checkout_osaka:'离店前或抵机场后吃早餐。',
 airport_checkin:''
};
// Shorter wording for 情况有变时. Each source must still occur in the planning notes (trip/verify.mjs checks this);
// a short form keeps every status word (待确认／未购买／尚未订位), safety limit and deadline of its source.
const FALLBACK_SHORT=[
 ['航班或入境延迟时，抵达后直接入住、吃简餐，再回酒店休息。','航班或入境延迟：直接入住、吃简餐后休息。'],
 ['芭菲候位拖长时，缩短午饭前的街道巡礼；午饭延迟时，略过縣神社、减少桥上拍照。保留午饭、久美子椅和登山往返75分钟。','芭菲候位久就缩短街道巡礼；午饭延迟则略过縣神社、少拍桥景。保留午饭、久美子椅和登山往返75分钟。'],
 ['雨天或明显疲劳时取消登山；下山较晚时河岸只短拍，不在暗处找机位。','雨天或明显疲劳取消登山；下山晚则河岸只短拍，不在暗处找机位。'],
 ['疲劳或延迟时，书店缩为20分钟，省京阪站展示；晚饭仍保留。','疲劳或延迟：书店缩为20分钟、省京阪站展示；晚饭保留。'],
 ['集章需手机联网定位；攻略勾选不等于官方领章。','集章需手机联网定位；勾选不等于官方领章。'],
 ['商店街巡礼看西入口、拱廊与吊鱼装饰。','商店街看西入口、拱廊与吊鱼装饰。'],
 ['飞石可在岸边拍；水位高或雨天不下河。','水位高或雨天不下河，飞石在岸边拍。'],
 ['京都塔延误时先减少重复拍照与周边挑选；收费区离场前查漏章。','京都塔延误就少拍、少挑周边；收费区离场前查漏章。'],
 ['保留午饭、伏见稻荷奥社折返、取行李与入住后休息；延迟时稻荷少停拍照，晚餐改附近简餐。','延迟时稻荷少停拍照、晚餐改附近简餐；保留午饭、奥社折返、取行李与入住休息。'],
 ['普通票与早到均不保证任天堂区域入场，未取得资格时转柯南及其他感兴趣体验。','普通票与早到都不保证任天堂区域入场；没取得资格就转柯南等体验。'],
 ['普通门票未购买；需购买两张12/4 Studio Pass。','门票未购买：需买两张12/4 Studio Pass。'],
 ['柯南4-D演出约30分钟，等候另计；12/4场次与检修待确认。','柯南4-D约30分钟，等候另计；12/4场次与检修待确认。'],
 ['09:30离店，大阪城只看外观；前段延误先减少公园零散拍照，保留奈良约2小时、两顿饭和交通余量。','大阪城只看外观；前段延误先减公园散拍，保留奈良约2小时、两顿饭和交通余量。'],
 ['若预计15:30后才抵奈良，大佛殿17:00闭门会限制完整步行与入内时间。最小调整是减少沿途散拍，并仅在能节省时间时改用公交／出租车到南大门附近；保留大佛殿内部参观30—40分钟。更大延误需现场重新判断，不能保证全部照表完成。','15:30后才到奈良：大佛殿17:00闭门，先减沿途散拍，能省时再打车／公交到南大门；保留殿内30—40分钟。更大延误现场重新判断。'],
 ['回大阪先逛店再吃饭，20:00关门的店优先。18:50后才到首店时，按兴趣保留一家或缩短购物；不压缩晚饭和休息。','回大阪先逛20:00关门的店再吃饭；18:50后才到首店就只留一家或缩短购物，不压缩晚饭和休息。'],
 ['道顿堀、心斋桥只短拍；购物或用餐延长时返店相应顺延。若全日延误约30分钟，参考22:00—22:15返店，不靠快走追回原表。','道顿堀、心斋桥只短拍；全日延误约30分钟则22:00—22:15返店，不靠快走追表。'],
 ['午餐或购物延迟时，把部分三宫购物移到大桥之后；保留约30分钟休息，并争取15:00从三宫去北公园，避免购物挤掉白天拍桥。','午餐或购物延迟：部分三宫购物移到大桥之后；保留约30分钟休息，争取15:00去北公园白天拍桥。'],
 ['大风、雨天或明显疲劳时，在三宫休息并取消大桥往返；北野物语馆的外观巡礼保留，咖啡店满座则下坡吃简餐。','大风、雨天或明显疲劳：在三宫休息、取消大桥往返；北野物语馆外观保留，咖啡店满座就下坡吃简餐。'],
 ['和牛自助尚未选店或订位，不能保证17:30入店；选店时核对价格、用餐限时与交通，较晚用餐则顺延返店。','和牛自助尚未选店或订位，17:30入店不保证；选店核对价格、限时与交通，晚入店则顺延返店。'],
 ['前一晚能整理的行李先整理，12/6晚饭后直接回酒店收尾；不再追加大阪夜游。','行李能先整理就先整理；12/6晚饭后直接回酒店收尾，不追加夜游。'],
 ['三宫小吃沿中央街自选，さんプラザ及センタープラザB1有餐饮区。','三宫小吃沿中央街自选；さんプラザ、センタープラザB1有餐饮区。']
];
const compactFallback=t=>FALLBACK_SHORT.reduce((s,[from,to])=>s.replace(from,to),String(t||''));
// Transport notes that spell out airport routine; the short form keeps every time and the one non-obvious fact.
const TRANSPORT_SHORT=[
 ['去程建议08:25抵达香港T2；当前10:25停止值机。T2值机、安检和出境后，乘APM前往T1中场客运廊（T1M）登机。','建议08:25到香港T2，10:25停止值机；T2出境后乘APM到T1M登机。'],
 ['关西T1入境、取行李后，按Railway／鉄道指引到车站；按订单兑换或使用已购HARUKA票，依入境进度选班次。','HARUKA已购：按订单兑换，依入境进度选班次。'],
 ['入住时确认 12/3 退房寄存位置；两间酒店均不含早餐。','两间酒店均不含早餐。'],
 ['抵达机场站后前往T1值机、托运、安检和出境；HX617于09:50日本时间起飞，现行柜台截止09:10，登机时限看登机牌。','HX617 09:50起飞；T1柜台09:10停止值机。']
];
// Reminders a seasoned traveller does not need — airport routine, "以现场为准" disclaimers, verification notes —
// and planning sentences that only restate the card's short line. Dropped sentence by sentence wherever copy is
// shown; the plan data keeps them. trip/verify.mjs checks each one still matches the plan.
const DROP_COPY=[
 /以(航司最新通知|现场设施|现场)[^，；。]*为准/,/按(登机牌和)?现场指引/,/按航司通知及登机牌复核/,/提前完成托运后前往登机口/,
 /请询问店员/,/不锁定车次/,/(于\d+\/\d+|平日时刻已)核实/,/^配图为/,/须现场核对/,/遇活动占用时在允许通行处拍摄/,
 /查下一班关西机场方向列车/,/(找|向)站员确认替代交通/,/^(攻略)?勾选不等于官方领章/,/^12\/6晚把证件、钱包/
];
const DROP_SENTENCES=new Set([
 '关西T1抵达','默认在酒店附近吃简餐','沿宇治桥西岸拍照，再步行去きく','从餐厅步行到表参道，沿街拍照','从表参道步行前往',
 '縣神社 → 久美子椅 → 喜撰桥 → 塔之岛 → 朝雾桥','从朝雾桥东桥头依次短看两神社，再到大吉山登山口','75分钟含往返、展望台休息与拍照',
 '从书店步行到站，看展示约10分钟','小吃只买短队，不逐家进店','寄存及领取方式待酒店确认','入住时询问，不能寄存则使用京都站可用储物柜并记录位置',
 '先在展望室5层领叠印台纸，完成收费区章点再出场','共7处，按现场指引集章、拍展示与买周边','含找店、步行和坐下用餐','附近简餐即可，不长时间候位',
 '含JR回京都、步行与取件','若改用储物柜，回寄存处取齐再乘车','含候车、换乘、携行李步行','按实际列车出发，不锁定车次','预计到店范围，随取件和交通调整',
 '可提前返店','进入任天堂区域后，同次完成首选设施、拍照与商店','重点完成且已经疲劳，可提前离园','到站后仍要走到天守阁','铁路含换乘、候车约40—60分钟',
 '从近铁奈良站沿公园步道到南大门，预留约30分钟','南大门短拍和门间步行，加上大佛殿内部30—40分钟，共约50分钟','排队另占缓冲',
 '参观后在回车站沿途找座位短休，保留约10分钟','含候车、车程、出站及步行到首店','保留《柯南》戎桥对照、格力高和心斋桥筋南口短拍',
 '若前段延迟，把剩余购物放到大桥之后，不取消三店','《Fate/stay night》桥梁对照，尽量白天拍摄','前段未逛完的店在此补足原定90分钟',
 '已逛完就坐下休息，预留前往所选餐厅的步行时间','订位或用餐较晚则顺延','按登机牌时限到登机口',
 '到站后前往T1，办理值机、托运、安检与出境','当前值机截止09:10日本时间','早餐前晚备好，离店前或抵达机场后吃'
]);
// Whole detail panels that only repeat the airport routine already covered by 怎么走 and 关键时间.
const DROP_DETAILS=new Set(['flight_out','airport_checkin']);
const keepSentence=s=>{const x=s.trim(),key=x.replace(/[。；]$/,'');return x&&!DROP_SENTENCES.has(key)&&!DROP_COPY.some(r=>r.test(x));};
// Times are reference windows and re-checking is a preparation task, so field copy drops the repeated
// "参考" before times and the "临行复核" clauses. cleanHTML does the same inside markup, text nodes only.
const cleanText=t=>String(t??'').replace(/参考(?=\d|套餐|24小时)/g,'').replace(/[^，；。<>]*临行(复核|确认|再查)[^，；。<>]*/g,'')
 .split(/(?<=[。；])/).filter(keepSentence).join('')
 .replace(/([，；])[，；]+/g,'$1').replace(/[，；]+。/g,'。').replace(/。[，；]+/g,'。').replace(/^[，；\s]+/,'').replace(/[，；\s]+$/,'');
const cleanHTML=html=>String(html).replace(/>([^<]+)</g,(_,t)=>'>'+cleanText(t)+'<');

/* ---------- Clock ---------- */
// "Today" and "now" follow Japan time; they only point at what to read, never mark anything done.
// For previewing, ?now=2026-12-02T10:30 overrides the clock.
function tokyoNow(){
 const override=typeof location!=='undefined'&&/[?&]now=([\d-]{10})T?(\d{2}:\d{2})?/.exec(location.search||'');
 if(override)return {date:override[1],minutes:override[2]?Number(override[2].slice(0,2))*60+Number(override[2].slice(3)):12*60};
 const now=new Date(),date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
 const [h,m]=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tokyo',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now).split(':').map(Number);
 return {date,minutes:h*60+m};
}
function tripStatus(){
 const now=tokyoNow(),first=PLAN.days[0].date,last=PLAN.days.at(-1).date;
 if(now.date<first)return {phase:'before',days:Math.round((Date.parse(first)-Date.parse(now.date))/864e5),minutes:now.minutes};
 if(now.date>last)return {phase:'after',minutes:now.minutes};
 return {phase:'during',index:PLAN.days.findIndex(d=>d.date===now.date),minutes:now.minutes};
}
const todayIndex=()=>{const s=tripStatus();return s.phase==='during'?s.index:-1;};
const eventStart=ev=>{const m=/(\d{1,2}):(\d{2})/.exec(ev.time_label||'');return m?Number(m[1])*60+Number(m[2]):null;};
const clock=min=>String(Math.floor(min/60)).padStart(2,'0')+':'+String(min%60).padStart(2,'0');
const duration=min=>min<60?`${min} 分钟`:`${Math.floor(min/60)} 小时${min%60?` ${min%60} 分`:''}`;

/* ---------- Day facts ---------- */
const INTENSITY={'交通日':1,'清晨交通日':1,'中等':2,'中等偏高':3,'较满':3,'高':4};
function intensity(d){const label=d.intensity.split('；')[0].replace(/，.*/,'');return {label,level:INTENSITY[label]||2,full:d.intensity};}
function dayTimes(d,i){
 const leave=i===0?['出发',flightDeparture('flight_out').replace(' 香港起飞','')+' 香港']:['离店',compactTime(d.departure_target||'开园时间待确认')];
 const back=i===0?['入住','19:00–20:00']:i===PLAN.days.length-1?['抵港',flightLocal(PLAN.bookings.find(b=>b.id==='flight_home'),'arrival').time]:['返店',...compactTime(returnTarget(d)).split(/[，；]\s*/)];
 return [leave,back];
}
function progress(d){const {done,total}=DayFlow.forDay(d);return {done,total};}
function setCheck(date,id,checked){const d=PLAN.days.find(x=>x.date===date);if(!d||!effectiveEvents(d).some(ev=>ev.id===id))throw Error('无效的日期或活动');state.checks[date+':'+id]=checked?'done':'pending';return save();}

// Hard times of each day: miss these and the plan changes. Each one is stated in the plan's own notes;
// `decide` marks a check-point (decide whether to cut), `close` a door or counter that shuts.
const HARD_STOPS={
 '2026-11-30':[['10:25','香港T2停止值机','flight_out','close'],['11:05','登机口关闭（香港时间）','flight_out','close']],
 '2026-12-01':[['14:30','未到大吉山登山口：确认能白天下山，否则取消','daikichi_visit','decide']],
 '2026-12-02':[['17:45','高台寺仍未入场：直接去吃晚饭','kodaiji_night','decide'],['20:00','おめん最后点餐','gion_dinner','close'],['21:30','高台寺停止入场','kodaiji_night','close']],
 '2026-12-04':[['19:00','普通票设施体验结束','usj_finish','close']],
 '2026-12-05':[['15:30','此后才到奈良：减少沿途散拍','nara_transfer','decide'],['17:00','东大寺大佛殿闭门','nara_visit','close'],['20:00','日本桥主要门店关门','anime_shopping','close']],
 '2026-12-06':[['15:00','从三宫出发去北公园，趁白天拍桥','kobe_bridge_visit','decide']],
 '2026-12-07':[['09:10','关西T1值机截止','airport_checkin','close']]
};
function hardStops(d){
 const ids=new Set(effectiveEvents(d).map(ev=>ev.id));
 return (HARD_STOPS[d.date]||[]).filter(([,,id])=>ids.has(id)).map(([time,text,eventId,kind])=>({time,minutes:Number(time.slice(0,2))*60+Number(time.slice(3)),text,eventId,kind}));
}
// Where to look now: the activity that started most recently unless it is done, else the next unfinished one.
// Unchecked earlier rows are ignored; people do not tick everything.
function nowState(d,minutes){
 const events=effectiveEvents(d),pending=i=>activityState(d.date,events[i].id)!=='done';
 let current=-1;
 for(let i=0;i<events.length;i++){const start=eventStart(events[i]);if(start!==null&&start>minutes)break;if(start!==null)current=i;}
 let focus=current>=0&&pending(current)?current:-1;
 if(focus<0)for(let i=current+1;i<events.length;i++)if(pending(i)){focus=i;break;}
 const upcoming=[];
 if(focus>=0)for(let i=focus+1;i<events.length&&upcoming.length<3;i++)if(pending(i))upcoming.push(events[i]);
 return {events,current:events[current]||null,focus:events[focus]||null,started:focus>=0&&focus<=current,upcoming};
}

/* ---------- Activities ---------- */
// Ordinary identification photos belong to the first eligible activity, not transit.
function compactEvent(ev){return ev.category==='transport'||(ev.category==='rest'&&ev.place_ids.every(id=>id.startsWith('hotel_')||id==='usj'))||['nakamura_walk','usj_app','usj_finish'].includes(ev.id);}
function eventPhotoIds(ev){return compactEvent(ev)?[]:ev.place_ids.filter(id=>photoSrc(id)&&(ev.category!=='meal'||PLACE[id].category==='restaurant'));}
// Major activities are what the day is for; transfers, rests, arrivals and plain walks are quiet rows.
function isMajorEvent(d,ev){
 if(optionalControls(d,ev.id))return true;
 if(['flight','meal','visit','shopping'].includes(ev.category))return true;
 if(ev.category==='activity')return !compactEvent(ev)&&ev.id!=='airport_checkin';
 if(ev.category==='walk')return pilgrimageDay(d.date).some(p=>p.event_id===ev.id&&pointEnabled(p));
 if(ev.category==='rest')return ev.place_ids.some(id=>PLACE[id]?.category==='restaurant');
 return false;
}
const CATEGORY_ICON={transport:'train',flight:'plane',meal:'food',visit:'camera',walk:'walk',rest:'clock',hotel:'bed',activity:'sparkle',shopping:'bag'};
// Which of the day's transport notes belong to which activity.
const TRANSPORT_AT_EVENT={
 flight_out:[3],arrival_transfer:[0,1],checkin_kyoto:[2],uji_transfer:[0],uji_pilgrimage:[1],suikan_stamp:[2],uji_return:[3],
 demachi_transfer:[0],kiyomizu_transfer:[1,2],higashiyama_walk:[3],kyoto_night_return:[4],
 kyoto_tower_transfer:[0],inari_transfer:[1],luggage_pickup:[2],osaka_transfer:[3],osaka_evening_return:[4],usj_transfer:[0,1],usj_app:[2],usj_lunch:[3],
 castle_transfer:[0],nara_transfer:[1],nara_return_train:[2],nara_day_return:[4],
 kobe_transfer:[0],kitano_lunch:[1],sannomiya_shopping:[2],kobe_bridge_visit:[3],last_evening_return:[4],
 checkout_osaka:[0],airport_train:[1,2],airport_checkin:[3],usj_dinner:[4]
};
function transportNotes(d,ev){
 const notes=(TRANSPORT_AT_EVENT[ev.id]||[]).map(i=>DETAILS[d.date].transport[i]).filter(Boolean);
 if(ev.id==='anime_shopping'&&choice(d).shop1==='animate'&&choice(d).shop2==='surugaya')notes.push(DETAILS[d.date].transport[3]);
 if(ev.id==='spaworld_visit')notes.push('泡汤前先回酒店放购物袋、整理主要行李；步行到SPAWORLD及返店各预留10—15分钟，无需乘车。');
 return notes.map(n=>cleanText(TRANSPORT_SHORT.reduce((s,[from,to])=>s.replace(from,to),n))).filter(Boolean);
}
// The mistakes that cost a train: shown in bold wherever the note appears.
const TRANSIT_CAUTION=/(不要在京阪宇治站乘车|勿上大阪线往伊势|不要误进JR闸机|不去JR难波|认中央口／京都塔侧|认「関西空港」方向|部分地图道路不能入寺)/g;

function mealRows(d,ev){
 const name=['gion_rest','uji_parfait'].includes(ev.id)?'茶歇':ev.category==='meal'?(/dinner/.test(ev.id)?'晚餐':/lunch/.test(ev.id)?'午餐':'早餐'):'';
 const rows=DETAILS[d.date].meals.filter(r=>r[0]===name);
 if(ev.id==='usj_lunch'&&choice(d).kinopio){
  const selected=rows.find(r=>r[2]==='キノピオ・カフェ');
  return [[selected[0],'首选',...selected.slice(2)],...rows.filter(r=>r!==selected&&r[1]!=='可选').map(r=>[r[0],'备选',...r.slice(2)])];
 }
 return rows.filter(r=>r[1]!=='可选');
}
function mealNotes(row){
 const suggestions=['牛丼／定食；','餐盘1,400起。','轻食配饮品。'].filter(text=>row[5].includes(text));
 return {conditions:suggestions.reduce((text,note)=>text.replace(note,''),row[5]),suggestion:suggestions.join('').replace(/；$/,'。')};
}
function mealMap(d,r){if(r[7]&&PLACE[r[7]])return PLACE[r[7]].map_search_url;let city=d.cities.includes('宇治')&&['午餐','晚餐'].includes(r[0])?'宇治':d.date==='2026-12-05'&&r[0]==='午餐'?'奈良':d.date==='2026-12-06'&&r[0]==='午餐'?'神戸':d.date==='2026-12-03'&&r[0]==='午餐'?'京都':d.overnight==='hotel_kyoto'?'京都':'大阪';if(r[2].startsWith('通圓'))city='宇治';return mapURL(city+' '+r[2]);}
function mealModel(d,r,said){
 const notes=mealNotes(r);
 const where=(r[4]||'').replace(' · Louie’s N.Y. Pizza Parlor','').replace(/，.*$/,'').trim();
 const conditions=cleanText(dropSaid(String(notes.conditions||'').replace(/参考(营业)?\s*|；?定休日现场确认/g,''),said));
 return {kind:r[0],rank:r[1],primary:r[1]==='首选',name:r[2],budget:r[3]?r[3]+(r[3].includes('菜单')?'':' / 人'):'',
  hint:[where,conditions,notes.suggestion&&'点餐：'+notes.suggestion].filter(Boolean).join(' · '),
  map:r[0]!=='早餐'?mealMap(d,r):'',mapLabel:r[8]?.pending?'片区地图':'地图',source:r[6]||''};
}

// Sentence-level overlap check so a fact said once on the page is not printed again.
const bigrams=t=>{t=String(t).replace(/[\s，。；、·：:（）()「」《》]/g,'');const out=new Set();for(let i=0;i<t.length-1;i++)out.add(t.slice(i,i+2));return out;};
function alreadySaid(sentence,pool){const a=bigrams(sentence);if(a.size<4)return false;const b=bigrams(pool);let n=0;for(const x of a)if(b.has(x))n++;return n/a.size>=.6;}
function dropSaid(text,pool){return String(text).split(/(?<=[。；])/).filter(s=>s.trim()&&!alreadySaid(s,pool)).join('').replace(/；$/,'。');}

function dayFallbacks(d){const c=choice(d);return d.fallback_rules.flatMap(t=>{
 if(d.date==='2026-12-01')t=t.replace('14:30仍未到登山口，不能确保白天下山就取消。','');
 if(/^19:00—22:00 Amex|^马里奥赛车与咚奇刚择一优先/.test(t))return [];
 if(d.date==='2026-12-02'){
  if(t.includes('高台寺'))return [];
  if(t.includes('八坂神社'))return c.kodaijiPlan==='night'&&c.yasakaBrief?[t]:c.kodaijiPlan==='night'?['排队导致延误则省八坂神社。']:[];
  if(t.startsWith('不再排'))return [];
 }
 return [t];
});}
function dayNotes(d){const c=choice(d);const extra=(DETAILS[d.date].extra||[]).filter(t=>{
 // Ticket prices and the Amex evening are stated on the activity itself.
 if(/^(京都塔门票|19:00—22:00 Amex|大佛殿成人|马里奥赛车与咚奇刚择一优先)/.test(t))return false;
 return !(d.date==='2026-12-02'&&t.startsWith('本次只安排'));
});if(d.date==='2026-12-05'&&c.spaworldEvening)extra.push(d.optional.find(o=>o.id==='spaworld_evening').rule);return [...dayFallbacks(d),...extra];}
const fieldNotes=d=>dayNotes(d).map(t=>cleanText(compactFallback(t))).filter(Boolean);

function foodSuggestionsForEvent(d,eventId){
 const info=DETAILS[d.date];
 return [...(info.foodIdeas||[]).filter(item=>item.event_id===eventId),...(info.eventFood?.[eventId]||[])];
}
function activityDetails(d,id){
 const info=DETAILS[d.date].eventDetails?.[id];if(!info||DROP_DETAILS.has(id))return null;
 const selected=id==='anime_shopping'?selectedShops(choice(d)):null,said=dayNotes(d).join('');
 const keep=item=>!(item.text.includes('小吃沿中央街自选')&&said.includes('小吃沿中央街自选'));
 const items=(selected?[...selected.map(placeId=>info.items.find(item=>item.place_id===placeId)).filter(Boolean),...info.items.filter(item=>!item.place_id)]:info.items).filter(keep);
 const kept=items.map(item=>({text:cleanText(item.text),url:item.url||''})).filter(item=>item.text);
 return kept.length?{title:info.title,items:kept}:null;
}
// A notice whose words were all verification notes is only its links; those move out of the warning box.
function noticeParts(d,ev){
 const html=cleanHTML(executionNotice(d,ev)),words=html.replace(/<a [\s\S]*?<\/a>/g,'').replace(/<[^>]+>/g,'').replace(/[\s·，；。]/g,'');
 const links=[...html.matchAll(/<a [\s\S]*?<\/a>/g)].map(m=>m[0].replace('class=""','class="btn ghost"'));
 return words.length<8?{notice:'',links}:{notice:html,links:[]};
}
// Facts for one activity that the plan keeps outside the timeline.
const EVENT_EXTRA={
 kodaiji_night:{facts:'17:00亮灯 · ¥800 / 人 · 购票待确认',detail:{title:'参拜详情',items:[
  {text:'游览约60—75分钟，排队另计。'},
  {text:'活动期2026/10/23—12/13；21:30停止入场，22:00闭门。昼夜不清场，离场后同票不能再入。'},
  {text:'活动官网',url:'https://www.kodaiji.com/saiji.html'},{text:'票价',url:'https://www.kodaiji.com/haikan.html'}]}}
};

/* ---------- Pilgrimage ---------- */
const pilgrimagePoints=PILGRIMAGE.points;
const pilgrimageDay=date=>pilgrimagePoints.filter(p=>p.date===date);
const shotKey=p=>p.date+':shot:'+p.id;
function pointEnabled(p){return !p.option||choice(PLAN.days.find(d=>d.date===p.date)).ujiExtra===p.option;}
function pointMap(p){return p.coordinates?mapURL(p.coordinates.lat+','+p.coordinates.lng):(p.map_url||PLACE[p.place_ids[0]]?.map_search_url);}
function shotProgress(date){const points=pilgrimageDay(date).filter(pointEnabled);return {done:points.filter(p=>state.checks[shotKey(p)]).length,total:points.length};}
// Concise field notes; the original descriptions stay under 场景与来源.
const SHOT_COPY={
 'eupho_uji_bridge':{scene:'第一季第12集，久美子抒发心情的宇治桥。',note:'在行人通道对照桥栏与河景。'},
 'eupho_omotesando':{scene:'京阪官方巡礼地图第6点：平等院表参道。',note:'午饭后经过表参道，沿街对照取景。'},
 'kyoto-stage-stairs':{scene:'第7集车站音乐会，《宝岛》演出广场。',note:'中央口一侧上4F室町小路广场，对照大阶梯、扶梯和红色时钟。无需登顶；遇活动占用时在允许通行处拍摄。'},
 'kyoto-stage-clock':{note:'在4F广场抬头找红色方框时钟与钢架；别与红色雕塑「朱甲舞」混淆。'},
 'demachi-west-gate':{scene:'宣传PV里的商店街西入口；招牌与建筑有改绘。',note:'从寺町通一侧仰拍入口招牌与左侧建筑。'},
 'demachi-fish':{scene:'官方主视觉里的商店街吊鱼与拱廊。',note:'进拱廊后找吊鱼和屋顶纵深；构图不完全一致，勿堵店铺通道。'},
 'delta-tamako':{note:'找东侧高野川的飞石与下河台阶，对照石块排列。雨天或水量大时留在岸边拍。'},
 'delta-kon':{note:'从贺茂川侧飞石朝东拍中洲，与《玉子》告白位置分开。玉子点位优先，余量不足就省此机位，不延误京阪换乘。'},
 'kiyomizu-conan':{scene:'第927—928集清水寺与新兰剧情；亦见于《迷宫的十字路》。',note:'在本堂舞台对照屋顶与木栏杆；定位为本堂参考点。',caption:'官方上映会宣传视觉，非动画单帧；两图视角不同。'},
 'senren-sannenzaka':{note:'在玩家标点附近，沿街对照石板路与两侧屋檐；店名有改写，顺路拍即可。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'},
 'senren-ninenzaka':{note:'在二年坂南端附近找右侧店铺转角、屋檐与弯路；别只在台阶中央找。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'},
 'conan-tsutenkaku':{note:'晚饭时从地面拍通天阁外观。塔顶视角无法在街面复刻，不另加登塔。',caption:'同建筑、不同视角；用于辨认塔体。'},
 'conan-ebisubashi':{scene:'第763—764集《恋爱的暗号》，平次在戎桥调查。',note:'桥面找弧形栏杆与南侧店招；动画有改绘，广告可能变化。'},
 'senren-ikuta':{note:'在拝殿前稍侧处对照屋顶、红柱与狛犬；游戏将楼房改绘为树木。',caption:'玩家对照，非官方认定；有改绘，定位非精确机位。'}
};
function shotModel(p){
 const copy=SHOT_COPY[p.id]||{};
 return {id:p.id,date:p.date,eventId:p.event_id,work:p.work,title:p.title,optional:!!p.option,nameJa:p.name_ja||PLACE[p.place_ids[0]]?.name_ja||p.title,
  scene:cleanText(copy.scene||p.scene),note:cleanText(copy.note||p.shooting_note),caption:cleanText(copy.caption||p.match_note),map:pointMap(p),done:!!state.checks[shotKey(p)],
  coords:p.coordinates||null,images:p.comparison?[['comparison','作品 × 实景']]:[['anime','作品画面'],['real','实景']],point:p};
}
// Shots in the order they are passed during the day.
function dayShots(d){
 const ordered=DayFlow.forDay(d).sections.flatMap(section=>section.scenePoints);
 return {main:ordered,optional:pilgrimageDay(d.date).filter(p=>!pointEnabled(p))};
}

/* ---------- One activity, fully resolved ---------- */
function eventModel(d,ev){
 const events=effectiveEvents(d),earlier=events.slice(0,events.findIndex(x=>x.id===ev.id));
 const major=isMajorEvent(d,ev),rows=mealRows(d,ev),first=rows.find(r=>r[1]==='首选');
 const brief=ev.condition&&Object.hasOwn(EVENT_BRIEF,ev.id)?EVENT_BRIEF[ev.id]:null;
 const line=cleanText(brief??ev.condition??'');
 const seen=new Set(earlier.flatMap(eventPhotoIds)),photos=major?eventPhotoIds(ev).filter(id=>!seen.has(id)):[];
 const transport=transportNotes(d,ev);
 const stops=navigationStops(ev,d,!!(first&&first[0]!=='早餐'));
 const {notice,links}=noticeParts(d,ev),noticeText=notice.replace(/<[^>]+>/g,'');
 const daySaid=dayNotes(d).join(''),notedBefore=new Set(earlier.flatMap(x=>activityPlaceIds(x)));
 const placeNotes=!major||DETAILS[d.date].eventDetails?.[ev.id]||EVENT_EXTRA[ev.id]?[]:activityPlaceIds(ev)
  .filter(id=>PLACE_DETAILS[id]&&!id.startsWith('hotel_')&&!notedBefore.has(id)&&!alreadySaid(PLACE_DETAILS[id],daySaid)).map(id=>cleanText(PLACE_DETAILS[id]));
 const details=[activityDetails(d,ev.id),EVENT_EXTRA[ev.id]?.detail].filter(Boolean);
 const said=daySaid+line+noticeText+transport.join('')+placeNotes.join('')+details.flatMap(x=>x.items.map(it=>it.text)).join('');
 const fullNote=brief!==null&&ev.condition?cleanText(dropSaid(ev.condition,said)):'';
 const pending=(ev.time_status==='to_confirm'||ev.time_status==='current_timetable_candidate')&&!/待确认|待复核|临行复核/.test(compactTime(ev.time_label));
 const shots=pilgrimageDay(d.date).filter(p=>p.event_id===ev.id&&pointEnabled(p));
 return {
  id:ev.id,date:d.date,title:ev.title,time:compactTime(ev.time_label),timeHint:ev.time_hint||'',start:eventStart(ev),category:ev.category,major,optional:!!ev.optional,
  status:ev.time_status==='booked'?'已订航班 · 当地时间':pending?'待确认':'',
  done:activityState(d.date,ev.id)==='done',line,optionNote:ev.optionNote||'',notice,links,transport,
  hotels:(ev.category==='hotel'||ev.id==='luggage_pickup'?ev.place_ids.filter(id=>id.startsWith('hotel_')):[]).filter(id=>!ev.title.includes(PLACE[id].name_ja)).map(id=>PLACE[id]),
  meals:rows.map(r=>mealModel(d,r,line+noticeText)),nav:ev.category==='rest'&&!major?null:stops.at(-1)||null,via:stops.length>1?stops:[],
  photos,details,facts:EVENT_EXTRA[ev.id]?.facts||'',
  food:foodSuggestionsForEvent(d,ev.id),placeNotes,fullNote,shots,rally:!!ev.rally_spot,choices:optionalControls(d,ev.id)
 };
}

/* ---------- Preparation ---------- */
const TODOS=[...PLAN.pending_checks,'准备交通IC卡，保存HARUKA订单与兑换说明。','USJ前一晚：在官方App登记并区分两张Studio Pass，备好网络、充电宝与早餐。','12/6返店后整理行李，复核南海列车与入口，收好证件、随身物品和次晨早餐。','高台寺门票：核对夜间参拜公告与购票方式。',...(PLAN.additional_checks||[]).map(item=>item.text)];
const TODO_IDS=['usj-details','weather','restaurants','kobe-dinner-20261003','return-travel','kodaiji-weather','uji-cafes','rally-account','transport-tickets','usj-app','packing','kodaiji-tickets',...(PLAN.additional_checks||[]).map(item=>item.id)];
// When each task is due. Tasks without a trip date belong before departure.
const TODO_WHEN={'kodaiji-weather':'2026-12-02','uji-cafes':'2026-11-30','rally-account':'2026-11-30','usj-app':'2026-12-03','packing':'2026-12-06','castle-nara-20261003':'2026-12-04'};
const TODO_WHEN_LABEL={'2026-11-30':'抵达当晚','2026-12-02':'12/2 当天下午','2026-12-03':'12/3 晚上 · USJ前一晚','2026-12-04':'12/4 晚上','2026-12-06':'12/6 晚上 · 回程前一晚'};
const TODO_PREFIX=/^(12\/\d+(?=高台寺|返店|集章|确认)|USJ前一晚：)/;
// Records from before todo IDs existed are keyed by position; keep completed tasks by identity.
(function migrateTodos(){
 let migrated=false;
 for(let i=0;i<TODO_IDS.length;i++)if(Object.hasOwn(state.todos,i)){
  if(i!==3&&i!==6&&!Object.hasOwn(state.todos,TODO_IDS[i]))state.todos[TODO_IDS[i]]=state.todos[i];
  delete state.todos[i];migrated=true;
 }
 if(migrated)save();
})();
const todoDone=()=>TODOS.filter((_,i)=>state.todos[TODO_IDS[i]]).length;
function todoGroups(){
 const all=TODOS.map((text,i)=>({id:TODO_IDS[i],text,when:TODO_WHEN[TODO_IDS[i]]||'',done:!!state.todos[TODO_IDS[i]]}));
 const trip=all.filter(t=>t.when).sort((a,b)=>a.when.localeCompare(b.when)).map(t=>({...t,text:t.text.replace(TODO_PREFIX,'')}));
 return {before:all.filter(t=>!t.when),trip:[...new Set(trip.map(t=>t.when))].map(when=>({when,label:TODO_WHEN_LABEL[when]||dateLabel(when),items:trip.filter(t=>t.when===when)}))};
}
const BOOKED=[['往返机票','HX618 / HX617'],['京都酒店','11/30—12/3 · 3晚'],['大阪酒店','12/3—12/7 · 4晚'],['HARUKA','11/30 · 班次现场选']];
const PURCHASE_LABEL={not_purchased:['未购买','danger'],purchase_not_confirmed:['待确认','warn']};
const openPurchases=()=>(PLAN.unconfirmed_purchases||[]).map(p=>({item:p.item+(p.quantity?' ×'+p.quantity:''),date:dateLabel(p.visit_date),label:(PURCHASE_LABEL[p.status]||['待确认'])[0],tone:(PURCHASE_LABEL[p.status]||[,'warn'])[1]}));
