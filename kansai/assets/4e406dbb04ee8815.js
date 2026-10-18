const DELIVERY_MODE="web";const PLAN={"schema_version":"1.0","plan_id":"kansai-2026-1130-1207","revision":"2026-10-04-ticket-budget-confirmation","recorded_on":"2026-09-28","language":"zh-CN","title":"关西旅行规划基准","status":"planning_baseline","source_guide":"关西逐日执行攻略_2026-11-30至12-07.md","source_audit":"行程与红叶联网复核_2026-09-28.md","trip":{"start_date":"2026-11-30","end_date":"2026-12-07","travelers":2,"nights":7,"calendar_days":8,"full_sightseeing_days":6,"default_timezone":"Asia/Tokyo","flight_times":"各机场当地时间"},"preferences":{"default_departure":"10:00","early_departure_exceptions":["2026-12-01","2026-12-03","2026-12-04","2026-12-05","2026-12-06","2026-12-07"],"pace":"整体中等偏满；USJ高强度、12/5较满，宇治与京都日中等偏高；12/3需搬运行李，12/6留有用餐与休息时间。","interests":["吹响！上低音号","玉子市场","名侦探柯南","千恋万花","红叶","奈良短逛","动漫游戏购物"],"meal_budget_jpy_per_person":[1000,2500],"meal_notes":"简餐可低于预算；大阪特色与牛丼、定食混搭；无忌口","restaurant_wait_limit_minutes":20,"snack_wait_limit_minutes":[10,15],"usj_ticket_preference":"Studio Pass普通票，接受少玩，不以Express为主","protected_priorities":["作品巡礼与联动集章","USJ","生田神社、北野物语馆与神户大桥巡礼","日本桥与三宫二次元购物","奈良短逛，不喂鹿或要求近距离互动"],"excluded":["任天堂博物馆","额外追加岚山、金阁寺、海游馆、箕面"],"night_foliage_policy":"只安排12/2高台寺一次夜枫；11/30正常入住，12/1宇治晚餐后约20:15—20:35返店。","kobe_day":"12/6 09:30离店，保留生田、北野物语馆、三宫三店与白天神户大桥；三宫和牛自助预留1.5—2小时，预算不超过¥6,000/人，餐厅待选、未订位；饭后直接返店。","shopping_focus":["音像","毛绒","立牌"],"wagyu_budget_max_jpy_per_person":6000},"bookings":[{"id":"flight_out","type":"flight","status":"booked_user_reported","airline":"香港航空","flight_number":"HX618","from":"hkg","to":"kix","departure":"2026-11-30T11:25:00+08:00","arrival":"2026-11-30T15:00:00+08:00","departure_terminal":"T2","departure_terminal_role":"check_in","boarding_terminal":"T1","arrival_terminal":"T1","flight_number_status":"user_confirmed","terminal_checked_on":"2026-09-30"},{"id":"stay_kyoto","type":"hotel","status":"booked_user_reported","place_id":"hotel_kyoto","checkin_date":"2026-11-30","checkout_date":"2026-12-03","nights":3,"breakfast_included":false},{"id":"stay_osaka","type":"hotel","status":"booked_user_reported","place_id":"hotel_osaka","checkin_date":"2026-12-03","checkout_date":"2026-12-07","nights":4,"breakfast_included":false},{"id":"flight_home","type":"flight","status":"booked_user_reported","airline":"香港航空","flight_number":"HX617","from":"kix","to":"hkg","departure":"2026-12-07T08:50:00+08:00","arrival":"2026-12-07T13:40:00+08:00","departure_terminal":"T1","arrival_terminal":"T1","flight_number_status":"user_confirmed","terminal_checked_on":"2026-09-30"},{"id":"haruka","type":"train_ticket","status":"purchased_user_reported","travel_date":"2026-11-30","from":"kix","to":"kyoto_station","departure":null}],"unconfirmed_purchases":[{"item":"USJ普通门票","visit_date":"2026-12-04","status":"not_purchased","quantity":2,"confirmed_by":"user","confirmed_on":"2026-10-04"},{"item":"高台寺门票","visit_date":"2026-12-02","status":"purchase_not_confirmed"},{"item":"京都塔展望室门票","visit_date":"2026-12-03","status":"purchase_not_confirmed"}],"foliage":{"checked_on":"2026-09-28","status":"early_season_forecast_not_guarantee","primary_days":["2026-12-02"],"spots":[{"place_id":"kiyomizu","visit_date":"2026-12-02","forecast_viewing_start":"2026-11-25","forecast_leaf_fall_start":"2026-12-10","source":"https://weathernews.jp/koyo/spot/26112/"}],"notes":["预测不能保证盛期或每株树的叶况；可能已部分落叶。","临行根据现场实况与天气微调，不为单一预测变更固定机酒。"]},"places":[{"id":"hkg","name":"香港国际机场","name_ja":"Hong Kong International Airport","city":"香港","category":"airport","address_ja":null,"map_query":"香港 Hong Kong International Airport","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E9%A6%99%E6%B8%AF%20Hong%20Kong%20International%20Airport","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kix","name":"关西国际机场","name_ja":"関西国際空港","city":"大阪府","category":"airport","address_ja":null,"map_query":"大阪府 関西国際空港","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%20%E9%96%A2%E8%A5%BF%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"hotel_kyoto","name":"京都酒店","name_ja":"TUNE STAY KYOTO","city":"京都","category":"hotel","address_ja":"京都市下京区七条通新町西入夷之町708","map_query":"京都 TUNE STAY KYOTO","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20TUNE%20STAY%20KYOTO","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"hotel_osaka","name":"大阪酒店","name_ja":"City Express by Marriott Osaka Shin-Imamiya","city":"大阪","category":"hotel","address_ja":"大阪市西成区萩之茶屋1-2-7","map_query":"大阪 City Express by Marriott Osaka Shin-Imamiya","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20City%20Express%20by%20Marriott%20Osaka%20Shin-Imamiya","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kyoto_station","name":"京都站","name_ja":"京都駅","city":"京都","category":"station","address_ja":null,"map_query":"京都 京都駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E4%BA%AC%E9%83%BD%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"jr_uji","name":"JR宇治站","name_ja":"JR宇治駅","city":"宇治","category":"station","address_ja":null,"map_query":"宇治 JR宇治駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20JR%E5%AE%87%E6%B2%BB%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_jr_uji"]},{"id":"uji_bridge","name":"宇治桥","name_ja":"宇治橋","city":"宇治","category":"sight","address_ja":null,"map_query":"宇治 宇治橋","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%AE%87%E6%B2%BB%E6%A9%8B","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_uji_bridge"]},{"id":"byodoin","name":"平等院","name_ja":"平等院","city":"宇治","category":"temple","address_ja":null,"map_query":"宇治 平等院","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%B9%B3%E7%AD%89%E9%99%A2","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_omotesando"]},{"id":"bench","name":"久美子长椅","name_ja":"井川用水機場前","city":"宇治","category":"pilgrimage","address_ja":null,"map_query":"宇治 井川用水機場前","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E4%BA%95%E5%B7%9D%E7%94%A8%E6%B0%B4%E6%A9%9F%E5%A0%B4%E5%89%8D","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_bench"]},{"id":"kisen","name":"喜撰桥","name_ja":"喜撰橋","city":"宇治","category":"sight","address_ja":null,"map_query":"宇治 喜撰橋","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%96%9C%E6%92%B0%E6%A9%8B","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_kisen"]},{"id":"asagiri","name":"朝雾桥","name_ja":"朝霧橋","city":"宇治","category":"sight","address_ja":null,"map_query":"宇治 朝霧橋","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E6%9C%9D%E9%9C%A7%E6%A9%8B","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_asagiri"]},{"id":"uji_shrine","name":"宇治神社","name_ja":"宇治神社","city":"宇治","category":"shrine","address_ja":null,"map_query":"宇治 宇治神社","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_uji_shrine"]},{"id":"ujigami","name":"宇治上神社","name_ja":"宇治上神社","city":"宇治","category":"shrine","address_ja":null,"map_query":"宇治 宇治上神社","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%AE%87%E6%B2%BB%E4%B8%8A%E7%A5%9E%E7%A4%BE","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_sawarabi"]},{"id":"daikichi","name":"大吉山展望台","name_ja":"大吉山展望台","city":"宇治","category":"viewpoint","address_ja":null,"map_query":"宇治 大吉山展望台","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E5%A4%A7%E5%90%89%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["eupho_daikichi"]},{"id":"kotosaka","name":"琴坂","name_ja":"興聖寺 琴坂","city":"宇治","category":"optional_sight","address_ja":null,"map_query":"宇治 興聖寺 琴坂","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E6%B2%BB%20%E8%88%88%E8%81%96%E5%AF%BA%20%E7%90%B4%E5%9D%82","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kyoto_tower","name":"京都塔 · 京吹联动","name_ja":"ニデック京都タワー","city":"京都","category":"sight","address_ja":"京都市下京区烏丸通七条下る東塩小路町721-1","map_query":"京都 京都タワー","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E4%BA%AC%E9%83%BD%E3%82%BF%E3%83%AF%E3%83%BC","coordinates":null,"coordinate_status":"not_geocoded","description":"2026/9/1—12/20京阪×京吹联动。展望室5层领叠印台纸，全7处；先完成收费区域再离场，门票不可再入。成人¥1,000，未购票；周边店10:00—20:30。"},{"id":"demachi","name":"出町桝形商店街","name_ja":"出町桝形商店街","city":"京都","category":"pilgrimage","address_ja":null,"map_query":"京都 出町桝形商店街","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E5%87%BA%E7%94%BA%E6%A1%9D%E5%BD%A2%E5%95%86%E5%BA%97%E8%A1%97","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["demachi-west-gate","demachi-fish"]},{"id":"delta","name":"鸭川三角洲","name_ja":"鴨川デルタ","city":"京都","category":"sight","address_ja":null,"map_query":"京都 鴨川デルタ","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["delta-tamako","delta-kon"]},{"id":"demachiyanagi","name":"京阪出町柳站","name_ja":"京阪 出町柳駅","city":"京都","category":"station","address_ja":null,"map_query":"京都 京阪 出町柳駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E4%BA%AC%E9%98%AA%20%E5%87%BA%E7%94%BA%E6%9F%B3%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kiyomizu_gojo","name":"清水五条站","name_ja":"清水五条駅","city":"京都","category":"station","address_ja":null,"map_query":"京都 清水五条駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E6%B8%85%E6%B0%B4%E4%BA%94%E6%9D%A1%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kiyomizu","name":"清水寺","name_ja":"清水寺 仁王門","city":"京都","category":"temple","address_ja":null,"map_query":"京都 清水寺 仁王門","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E6%B8%85%E6%B0%B4%E5%AF%BA%20%E4%BB%81%E7%8E%8B%E9%96%80","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["kiyomizu-conan"]},{"id":"sannenzaka","name":"三年坂","name_ja":"産寧坂","city":"京都","category":"street","address_ja":null,"map_query":"京都 産寧坂","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E7%94%A3%E5%AF%A7%E5%9D%82","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["senren-sannenzaka"]},{"id":"yasaka_tower","name":"八坂塔外观","name_ja":"法観寺 八坂の塔","city":"京都","category":"sight","address_ja":null,"map_query":"京都 法観寺 八坂の塔","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E6%B3%95%E8%A6%B3%E5%AF%BA%20%E5%85%AB%E5%9D%82%E3%81%AE%E5%A1%94","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"ninenzaka","name":"二年坂","name_ja":"二寧坂","city":"京都","category":"street","address_ja":null,"map_query":"京都 二寧坂","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E4%BA%8C%E5%AF%A7%E5%9D%82","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["senren-ninenzaka"]},{"id":"nene","name":"宁宁之道","name_ja":"ねねの道","city":"京都","category":"street","address_ja":null,"map_query":"京都 ねねの道","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E3%81%AD%E3%81%AD%E3%81%AE%E9%81%93","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"yasaka_shrine","name":"八坂神社","name_ja":"八坂神社","city":"京都","category":"shrine","address_ja":null,"map_query":"京都 八坂神社","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"hanamikoji","name":"花见小路","name_ja":"祇園 花見小路","city":"京都","category":"optional_street","address_ja":null,"map_query":"京都 祇園 花見小路","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E7%A5%87%E5%9C%92%20%E8%8A%B1%E8%A6%8B%E5%B0%8F%E8%B7%AF","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"shirakawa","name":"祇园白川","name_ja":"祇園白川","city":"京都","category":"optional_street","address_ja":null,"map_query":"京都 祇園白川","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E7%A5%87%E5%9C%92%E7%99%BD%E5%B7%9D","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"tofukuji","name":"东福寺通天桥","name_ja":"東福寺 通天橋","city":"京都","category":"temple","address_ja":null,"map_query":"京都 東福寺 通天橋","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E6%9D%B1%E7%A6%8F%E5%AF%BA%20%E9%80%9A%E5%A4%A9%E6%A9%8B","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"inari","name":"伏见稻荷大社","name_ja":"伏見稲荷大社","city":"京都","category":"shrine","address_ja":null,"map_query":"京都 伏見稲荷大社","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%83%BD%20%E4%BC%8F%E8%A6%8B%E7%A8%B2%E8%8D%B7%E5%A4%A7%E7%A4%BE","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"jr_osaka","name":"JR大阪站","name_ja":"大阪駅","city":"大阪","category":"station","address_ja":null,"map_query":"大阪 大阪駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E5%A4%A7%E9%98%AA%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"jr_shinimamiya","name":"JR新今宫站","name_ja":"JR新今宮駅","city":"大阪","category":"station","address_ja":null,"map_query":"大阪 JR新今宮駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20JR%E6%96%B0%E4%BB%8A%E5%AE%AE%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"nankai_shinimamiya","name":"南海新今宫站","name_ja":"南海新今宮駅","city":"大阪","category":"station","address_ja":null,"map_query":"大阪 南海新今宮駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E5%8D%97%E6%B5%B7%E6%96%B0%E4%BB%8A%E5%AE%AE%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"shinsekai","name":"新世界、通天阁外观","name_ja":"通天閣","city":"大阪","category":"district","address_ja":null,"map_query":"大阪 通天閣","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E9%80%9A%E5%A4%A9%E9%96%A3","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["conan-tsutenkaku"]},{"id":"usj","name":"日本环球影城","name_ja":"ユニバーサル・スタジオ・ジャパン","city":"大阪","category":"theme_park","address_ja":null,"map_query":"大阪 ユニバーサル・スタジオ・ジャパン","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%BB%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E3%83%BB%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"jr_nara","name":"JR奈良站","name_ja":"JR奈良駅","city":"奈良","category":"station","address_ja":null,"map_query":"奈良 JR奈良駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%20JR%E5%A5%88%E8%89%AF%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"nara_park","name":"奈良公园","name_ja":"奈良公園 東大寺南大門","city":"奈良","category":"park","address_ja":null,"map_query":"奈良 奈良公園 東大寺南大門","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%20%E5%A5%88%E8%89%AF%E5%85%AC%E5%9C%92%20%E6%9D%B1%E5%A4%A7%E5%AF%BA%E5%8D%97%E5%A4%A7%E9%96%80","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"todaiji","name":"东大寺大佛殿","name_ja":"東大寺 大仏殿","city":"奈良","category":"temple","address_ja":null,"map_query":"奈良 東大寺 大仏殿","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%20%E6%9D%B1%E5%A4%A7%E5%AF%BA%20%E5%A4%A7%E4%BB%8F%E6%AE%BF","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kintetsu_nara","name":"近铁奈良站","name_ja":"近鉄奈良駅","city":"奈良","category":"station","address_ja":null,"map_query":"奈良 近鉄奈良駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A5%88%E8%89%AF%20%E8%BF%91%E9%89%84%E5%A5%88%E8%89%AF%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kintetsu_nippombashi","name":"近铁日本桥站","name_ja":"近鉄日本橋駅","city":"大阪","category":"station","address_ja":null,"map_query":"大阪 近鉄日本橋駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E8%BF%91%E9%89%84%E6%97%A5%E6%9C%AC%E6%A9%8B%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"animate","name":"Animate大阪日本桥","name_ja":"アニメイト大阪日本橋","city":"大阪","category":"shop","address_ja":"大阪市浪速区日本橋西1-1-3 池田ビル2号館1—2階","map_query":"大阪 アニメイト大阪日本橋","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E3%82%A2%E3%83%8B%E3%83%A1%E3%82%A4%E3%83%88%E5%A4%A7%E9%98%AA%E6%97%A5%E6%9C%AC%E6%A9%8B","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"surugaya","name":"骏河屋御宅路动漫馆","name_ja":"駿河屋オタロードアニメ・ホビー館","city":"大阪","category":"shop","address_ja":"大阪市浪速区日本橋3-8-18 平田ビル2—3階","map_query":"大阪 駿河屋オタロードアニメ・ホビー館","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E9%A7%BF%E6%B2%B3%E5%B1%8B%E3%82%AA%E3%82%BF%E3%83%AD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BB%E3%83%9B%E3%83%93%E3%83%BC%E9%A4%A8","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"potato","name":"Super Potato御宅路店","name_ja":"スーパーポテトオタロード店","city":"大阪","category":"alternative_shop","address_ja":"大阪市浪速区日本橋3-8-18 平田ビル1階","map_query":"大阪 スーパーポテトオタロード店","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9D%E3%83%86%E3%83%88%E3%82%AA%E3%82%BF%E3%83%AD%E3%83%BC%E3%83%89%E5%BA%97","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"surugaya_main","name":"骏河屋大阪日本桥本馆","name_ja":"駿河屋大阪日本橋本館","city":"大阪","category":"alternative_shop","address_ja":"大阪市浪速区日本橋4-11-3","map_query":"大阪 駿河屋大阪日本橋本館","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E9%A7%BF%E6%B2%B3%E5%B1%8B%E5%A4%A7%E9%98%AA%E6%97%A5%E6%9C%AC%E6%A9%8B%E6%9C%AC%E9%A4%A8","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"dotonbori","name":"道顿堀","name_ja":"道頓堀","city":"大阪","category":"district","address_ja":null,"map_query":"大阪 道頓堀","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E9%81%93%E9%A0%93%E5%A0%80","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"glico","name":"戎桥、格力高","name_ja":"戎橋 グリコ看板","city":"大阪","category":"sight","address_ja":null,"map_query":"大阪 戎橋 グリコ看板","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E6%88%8E%E6%A9%8B%20%E3%82%B0%E3%83%AA%E3%82%B3%E7%9C%8B%E6%9D%BF","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["conan-ebisubashi"]},{"id":"nankai_namba","name":"南海难波站","name_ja":"南海なんば駅","city":"大阪","category":"station","address_ja":null,"map_query":"大阪 南海なんば駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E5%8D%97%E6%B5%B7%E3%81%AA%E3%82%93%E3%81%B0%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"sannomiya","name":"JR三宫站","name_ja":"JR三ノ宮駅","city":"神户","category":"station","address_ja":null,"map_query":"神户 JR三ノ宮駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E6%88%B7%20JR%E4%B8%89%E3%83%8E%E5%AE%AE%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"ikuta","name":"生田神社","name_ja":"生田神社","city":"神户","category":"pilgrimage","address_ja":"神戸市中央区下山手通1-2-1","map_query":"神户 生田神社","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E6%88%B7%20%E7%94%9F%E7%94%B0%E7%A5%9E%E7%A4%BE","coordinates":null,"coordinate_status":"not_geocoded","pilgrimage_point_ids":["senren-ikuta"]},{"id":"nintendo_osaka","name":"Nintendo OSAKA","name_ja":"Nintendo OSAKA LUCUA SOUTH","city":"大阪","category":"shop","address_ja":"大阪市北区梅田3-1-1 LUCUA SOUTH 13F","map_query":"大阪 Nintendo OSAKA LUCUA SOUTH","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20Nintendo%20OSAKA%20LUCUA%20SOUTH","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"pokemon_osaka","name":"宝可梦中心大阪","name_ja":"ポケモンセンターオーサカ LUCUA SOUTH","city":"大阪","category":"alternative_shop","address_ja":"大阪市北区梅田3-1-1 LUCUA SOUTH 13F","map_query":"大阪 ポケモンセンターオーサカ LUCUA SOUTH","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B5%E3%82%AB%20LUCUA%20SOUTH","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"sky","name":"梅田蓝天大厦空中庭园","name_ja":"梅田スカイビル 空中庭園展望台","city":"大阪","category":"viewpoint","address_ja":null,"map_query":"大阪 梅田スカイビル 空中庭園展望台","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20%E6%A2%85%E7%94%B0%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%93%E3%83%AB%20%E7%A9%BA%E4%B8%AD%E5%BA%AD%E5%9C%92%E5%B1%95%E6%9C%9B%E5%8F%B0","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"coco_sky","name":"蓝天大厦CoCo咖喱","name_ja":"CoCo壱番屋 梅田スカイビル店","city":"大阪","category":"restaurant","address_ja":"大阪市北区大淀中1-1-90 B-100号","map_query":"大阪 CoCo壱番屋 梅田スカイビル店","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%20CoCo%E5%A3%B1%E7%95%AA%E5%B1%8B%20%E6%A2%85%E7%94%B0%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%93%E3%83%AB%E5%BA%97","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kodaiji","name":"高台寺夜枫","name_ja":"高台寺","city":"京都","category":"temple","address_ja":null,"map_query":"京都 高台寺","map_search_url":"https://www.google.com/maps/search/?api=1&query=京都%20高台寺","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"kyoto_stage","name":"京都站《宝岛》舞台","name_ja":"京都駅ビル 室町小路広場","city":"京都","category":"pilgrimage","address_ja":"京都駅ビル4階 室町小路広場","map_query":"京都駅ビル 室町小路広場","map_search_url":"https://www.google.com/maps/search/?api=1&query=京都駅ビル+室町小路広場","coordinates":null,"coordinate_status":"see_pilgrimage_reference","pilgrimage_point_ids":["kyoto-stage-stairs","kyoto-stage-clock"]},{"id":"kiku","name":"きく咖喱午餐","name_ja":"お肉ダイニング きく","city":"宇治","category":"restaurant","address_ja":"宇治市宇治妙楽4-4 協栄ビル2F","map_query":"お肉ダイニング きく 宇治市宇治妙楽4-4 協栄ビル2F","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%81%8A%E8%82%89%E3%83%80%E3%82%A4%E3%83%8B%E3%83%B3%E3%82%B0%20%E3%81%8D%E3%81%8F%20%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E5%A6%99%E6%A5%BD4-4%20%E5%8D%94%E6%A0%84%E3%83%93%E3%83%AB2F","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"saizeriya_uji","name":"萨莉亚宇治里尻店","name_ja":"サイゼリヤ 宇治里尻店","city":"宇治","category":"restaurant","address_ja":"宇治市宇治里尻77","map_query":"サイゼリヤ 宇治里尻店 宇治市宇治里尻77","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%82%B5%E3%82%A4%E3%82%BC%E3%83%AA%E3%83%A4%20%E5%AE%87%E6%B2%BB%E9%87%8C%E5%B0%BB%E5%BA%97%20%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E9%87%8C%E5%B0%BB77","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"nakamura","name":"中村藤吉本店","name_ja":"中村藤吉本店","city":"宇治","category":"restaurant","address_ja":"宇治市宇治壱番10","map_query":"中村藤吉本店 宇治市宇治壱番10","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%AD%E6%9D%91%E8%97%A4%E5%90%89%E6%9C%AC%E5%BA%97%20%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E5%A3%B1%E7%95%AA10","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"eggtart","name":"安德鲁蛋挞 · 道顿堀本店","name_ja":"アンドリューのエッグタルト 道頓堀本店","city":"大阪","category":"restaurant","address_ja":"大阪市中央区道頓堀1-7-5","map_query":"アンドリューのエッグタルト 道頓堀本店 大阪市中央区道頓堀1-7-5","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AA%E3%83%A5%E3%83%BC%E3%81%AE%E3%82%A8%E3%83%83%E3%82%B0%E3%82%BF%E3%83%AB%E3%83%88%20%E9%81%93%E9%A0%93%E5%A0%80%E6%9C%AC%E5%BA%97%20%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%81%93%E9%A0%93%E5%A0%801-7-5","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"crepe","name":"抹茶可丽饼 · 候选店","name_ja":"祇園茶屋たばねのし 新京極店","city":"京都","category":"restaurant","address_ja":"京都市中京区新京極通三条下る桜之町418-3","map_query":"祇園茶屋たばねのし 新京極店 京都市中京区新京極通三条下る桜之町418-3","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E7%A5%87%E5%9C%92%E8%8C%B6%E5%B1%8B%E3%81%9F%E3%81%B0%E3%81%AD%E3%81%AE%E3%81%97%20%E6%96%B0%E4%BA%AC%E6%A5%B5%E5%BA%97%20%E4%BA%AC%E9%83%BD%E5%B8%82%E4%B8%AD%E4%BA%AC%E5%8C%BA%E6%96%B0%E4%BA%AC%E6%A5%B5%E9%80%9A%E4%B8%89%E6%9D%A1%E4%B8%8B%E3%82%8B%E6%A1%9C%E4%B9%8B%E7%94%BA418-3","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"starbucks_meriken","name":"神户港星巴克","name_ja":"スターバックス コーヒー 神戸メリケンパーク店","city":"神户","category":"restaurant","address_ja":"神戸市中央区波止場町2-4","map_query":"スターバックス コーヒー 神戸メリケンパーク店 神戸市中央区波止場町2-4","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%20%E7%A5%9E%E6%88%B8%E3%83%A1%E3%83%AA%E3%82%B1%E3%83%B3%E3%83%91%E3%83%BC%E3%82%AF%E5%BA%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B3%A2%E6%AD%A2%E5%A0%B4%E7%94%BA2-4","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"starbucks_kitano","name":"北野星巴克","name_ja":"スターバックス コーヒー 神戸北野異人館店","city":"神户","category":"restaurant","address_ja":"神戸市中央区北野町3-1-31 北野物語館","map_query":"スターバックス コーヒー 神戸北野異人館店 神戸市中央区北野町3-1-31 北野物語館","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%20%E7%A5%9E%E6%88%B8%E5%8C%97%E9%87%8E%E7%95%B0%E4%BA%BA%E9%A4%A8%E5%BA%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%8C%97%E9%87%8E%E7%94%BA3-1-31%20%E5%8C%97%E9%87%8E%E7%89%A9%E8%AA%9E%E9%A4%A8","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://store.starbucks.co.jp/detail-940/"},{"id":"lashinbang_kobe","name":"らしんばん 神户店","name_ja":"らしんばん神戸店","city":"神户","category":"shopping","address_ja":"神戸市中央区三宮町1-9-1 センタープラザ東館2F 246-1","map_query":"らしんばん神戸店 神戸市中央区三宮町1-9-1 センタープラザ東館2F 246-1","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%82%89%E3%81%97%E3%82%93%E3%81%B0%E3%82%93%E7%A5%9E%E6%88%B8%E5%BA%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%89%E5%AE%AE%E7%94%BA1-9-1%20%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%97%E3%83%A9%E3%82%B6%E6%9D%B1%E9%A4%A82F%20246-1","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.lashinbang.com/store/"},{"id":"surugaya_kobe","name":"骏河屋 神户三宫1号店","name_ja":"駿河屋 神戸三宮1号店","city":"神户","category":"shopping","address_ja":"神戸市中央区三宮町1-8-1 さんプラザ3F-2","map_query":"駿河屋 神戸三宮1号店 神戸市中央区三宮町1-8-1 さんプラザ3F-2","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E9%A7%BF%E6%B2%B3%E5%B1%8B%20%E7%A5%9E%E6%88%B8%E4%B8%89%E5%AE%AE1%E5%8F%B7%E5%BA%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%89%E5%AE%AE%E7%94%BA1-8-1%20%E3%81%95%E3%82%93%E3%83%97%E3%83%A9%E3%82%B63F-2","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.suruga-ya.jp/feature/realstore/sannomiya/index.html"},{"id":"bookoff_kobe","name":"BOOKOFF 三宫中央街店","name_ja":"BOOKOFF 三宮センター街店","city":"神户","category":"shopping","address_ja":"神戸市中央区三宮町2-10-7 グレースコウベ5F","map_query":"BOOKOFF 三宮センター街店 神戸市中央区三宮町2-10-7 グレースコウベ5F","map_search_url":"https://www.google.com/maps/search/?api=1&query=BOOKOFF%20%E4%B8%89%E5%AE%AE%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E8%A1%97%E5%BA%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%89%E5%AE%AE%E7%94%BA2-10-7%20%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B9%E3%82%B3%E3%82%A6%E3%83%995F","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.bookoff.co.jp/shop/shop10822.html"},{"id":"sannomiya_center","name":"三宫中央街","name_ja":"三宮センター街","city":"神户","category":"area","address_ja":"神戸市中央区三宮町","map_query":"三宮センター街 神戸市中央区三宮町","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%89%E5%AE%AE%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E8%A1%97%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E4%B8%89%E5%AE%AE%E7%94%BA","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://kobe-sc.jp/shop/gourmet/"},{"id":"port_sannomiya","name":"Port Liner 三宫站","name_ja":"ポートライナー 三宮駅","city":"神户","category":"station","address_ja":"神戸市中央区雲井通8丁目","map_query":"ポートライナー 三宮駅 神戸市中央区雲井通8丁目","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%83%9D%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%83%8A%E3%83%BC%20%E4%B8%89%E5%AE%AE%E9%A7%85%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%9B%B2%E4%BA%95%E9%80%9A8%E4%B8%81%E7%9B%AE","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.knt-liner.co.jp/station/"},{"id":"port_nakakoen","name":"中公园站","name_ja":"ポートライナー 中公園駅","city":"神户","category":"station","address_ja":"神戸市中央区港島中町4丁目","map_query":"ポートライナー 中公園駅 神戸市中央区港島中町4丁目","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%83%9D%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%83%8A%E3%83%BC%20%E4%B8%AD%E5%85%AC%E5%9C%92%E9%A7%85%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B8%AF%E5%B3%B6%E4%B8%AD%E7%94%BA4%E4%B8%81%E7%9B%AE","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.knt-liner.co.jp/stationp04/"},{"id":"kobe_bridge","name":"神户大桥 · 北公园","name_ja":"ポートアイランド北公園 神戸大橋","city":"神户","category":"visit","address_ja":"神戸市中央区港島2-2 北公園","map_query":"ポートアイランド北公園 神戸大橋 神戸市中央区港島2-2 北公園","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%83%9D%E3%83%BC%E3%83%88%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89%E5%8C%97%E5%85%AC%E5%9C%92%20%E7%A5%9E%E6%88%B8%E5%A4%A7%E6%A9%8B%20%E7%A5%9E%E6%88%B8%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%B8%AF%E5%B3%B62-2%20%E5%8C%97%E5%85%AC%E5%9C%92","coordinates":null,"coordinate_status":"not_geocoded","source_url":"https://www.feel-kobe.jp/kobe-yakei/spots/port-island-kita-park/"},{"id":"agata","name":"縣神社","name_ja":"縣神社","city":"宇治","category":"visit","address_ja":"京都府宇治市宇治蓮華72","map_query":"縣神社 宇治市宇治蓮華72","map_search_url":"https://www.google.com/maps/search/?api=1&query=34.88848,135.80573","coordinates":{"lat":34.88848,"lng":135.80573},"coordinate_status":"official_rally_location_not_camera_position","source_url":"https://app.raund.net/keihan-euphonium_2026autumn/spots/detail/?id=36569"},{"id":"jr_obaku","name":"JR黄檗站","name_ja":"JR黄檗駅","category":"station","address_ja":"京都府宇治市五ケ庄新開18","source_url":"https://www.jr-odekake.net/eki/top?id=0621610","city":"宇治","map_query":"JR黄檗駅 京都府宇治市五ケ庄新開18","coordinates":null,"coordinate_status":"not_geocoded","map_search_url":"https://www.google.com/maps/search/?api=1&query=JR%E9%BB%84%E6%AA%97%E9%A7%85%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E4%BA%94%E3%82%B1%E5%BA%84%E6%96%B0%E9%96%8B18"},{"id":"kohata","name":"許波多神社（五ケ庄）","name_ja":"許波多神社（五ケ庄）","category":"visit","address_ja":"京都府宇治市五ケ庄古川13","coordinates":{"lat":34.91676,"lng":135.79395},"source_url":"https://app.raund.net/keihan-euphonium_2026autumn/spots/detail/?id=36570","city":"宇治","map_query":"許波多神社（五ケ庄） 京都府宇治市五ケ庄古川13","coordinate_status":"official_rally_location_not_camera_position","map_search_url":"https://www.google.com/maps/search/?api=1&query=34.91676%2C135.79395"},{"id":"suikan","name":"水管桥河岸","name_ja":"宇治川河川敷（水管橋）","category":"visit","address_ja":"京都府宇治市莵道車田34-1付近","coordinates":{"lat":34.90041,"lng":135.80153},"source_url":"https://app.raund.net/keihan-euphonium_2026autumn/spots/detail/?id=36568","city":"宇治","map_query":"宇治川河川敷（水管橋） 京都府宇治市莵道車田34-1付近","coordinate_status":"official_rally_location_not_camera_position","map_search_url":"https://www.google.com/maps/search/?api=1&query=34.90041%2C135.80153"},{"id":"byodoin_approach","name":"平等院表参道","name_ja":"平等院表参道","category":"walk","address_ja":"京都府宇治市宇治蓮華","city":"宇治","map_query":"平等院表参道 京都府宇治市宇治蓮華","coordinates":null,"coordinate_status":"not_geocoded","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%B9%B3%E7%AD%89%E9%99%A2%E8%A1%A8%E5%8F%82%E9%81%93%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E8%93%AE%E8%8F%AF"},{"id":"keihan_obaku","name":"京阪黄檗站","name_ja":"京阪 黄檗駅","city":"宇治","category":"station","address_ja":"京都府宇治市五ケ庄西浦37","source_url":"https://www.keihan.co.jp/traffic/station/312/info.html","map_query":"京阪 黄檗駅 京都府宇治市五ケ庄西浦37","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%98%AA%20%E9%BB%84%E6%AA%97%E9%A7%85%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E4%BA%94%E3%82%B1%E5%BA%84%E8%A5%BF%E6%B5%A637","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"mimurodo","name":"京阪三室户站","name_ja":"京阪 三室戸駅","city":"宇治","category":"station","address_ja":"京都府宇治市莵道","source_url":"https://www.keihan.co.jp/traffic/station/311/info.html","map_query":"京阪 三室戸駅 京都府宇治市莵道","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%98%AA%20%E4%B8%89%E5%AE%A4%E6%88%B8%E9%A7%85%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E8%8E%B5%E9%81%93","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"heiwa_books","name":"平和书店宇治东店","name_ja":"平和書店 アル・プラザ宇治東店","city":"宇治","category":"shopping","address_ja":"京都府宇治市莵道平町28-1 アル・プラザ宇治東3F","source_url":"https://directshop.jp/store/10293/","map_query":"平和書店 アル・プラザ宇治東店 京都府宇治市莵道平町28-1 アル・プラザ宇治東3F","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%B9%B3%E5%92%8C%E6%9B%B8%E5%BA%97%20%E3%82%A2%E3%83%AB%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B6%E5%AE%87%E6%B2%BB%E6%9D%B1%E5%BA%97%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E8%8E%B5%E9%81%93%E5%B9%B3%E7%94%BA28-1%20%E3%82%A2%E3%83%AB%E3%83%BB%E3%83%97%E3%83%A9%E3%82%B6%E5%AE%87%E6%B2%BB%E6%9D%B13F","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"keihan_uji","name":"京阪宇治站","name_ja":"京阪 宇治駅","city":"宇治","category":"station","address_ja":"京都府宇治市宇治乙方18-5","source_url":"https://www.keihan.co.jp/traffic/station/310/info.html","map_query":"京阪 宇治駅 京都府宇治市宇治乙方18-5","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E4%BA%AC%E9%98%AA%20%E5%AE%87%E6%B2%BB%E9%A7%85%20%E4%BA%AC%E9%83%BD%E5%BA%9C%E5%AE%87%E6%B2%BB%E5%B8%82%E5%AE%87%E6%B2%BB%E4%B9%99%E6%96%B918-5","coordinates":null,"coordinate_status":"not_geocoded"},{"id":"spaworld","name":"SPAWORLD 世界大温泉","name_ja":"スパワールド 世界の大温泉","city":"大阪","category":"onsen","address_ja":"大阪市浪速区恵美須東3-4-24","map_query":"スパワールド 世界の大温泉 大阪市浪速区恵美須東3-4-24","map_search_url":"https://www.google.com/maps/search/?api=1&query=スパワールド+世界の大温泉+大阪市浪速区恵美須東3-4-24","coordinates":null,"coordinate_status":"not_geocoded","description":"天然温泉，男女分浴。位于JR新今宫站东出口附近；酒店靠南海站一侧，需步行到车站另一端。仅温泉、不用泳池：当前成人¥1,500/人，两人¥3,000，未购票。开放10:00至次日08:45（浴室更换日提前结束），午夜后加费；临行复核。纹身（含贴纸）不可入馆。","source_url":"https://www.spaworld.co.jp/info/ryokin/","checked_on":"2026-10-02"},{"id":"osaka_castle","name":"大阪城天守阁","name_ja":"大阪城天守閣","city":"大阪","category":"sight","address_ja":"大阪市中央区大阪城1-1","map_query":"大阪城天守閣 大阪市中央区大阪城1-1","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%9F%8E%E5%A4%A9%E5%AE%88%E9%96%A3%20%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A7%E9%98%AA%E5%9F%8E1-1","coordinates":null,"coordinate_status":"not_geocoded","description":"公园散步与天守阁外观拍照，不入馆；从森之宫侧公园入口到天守阁约20—30分钟，返回森之宫另留约30分钟。"},{"id":"morinomiya","name":"JR森之宫站","name_ja":"JR 森ノ宮駅","city":"大阪","category":"station","address_ja":"大阪市中央区森ノ宮中央1丁目","map_query":"JR 森ノ宮駅 北口","map_search_url":"https://www.google.com/maps/search/?api=1&query=JR%20%E6%A3%AE%E3%83%8E%E5%AE%AE%E9%A7%85%20%E5%8C%97%E5%8F%A3","coordinates":null,"coordinate_status":"not_geocoded","description":"从车站到天守阁另留约20—30分钟步行；回程在此乘JR大阪环状线去鹤桥。"},{"id":"jr_tsuruhashi","name":"JR鹤桥站","name_ja":"JR 鶴橋駅","city":"大阪","category":"station","address_ja":"大阪市天王寺区下味原町","map_query":"JR 鶴橋駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=JR%20%E9%B6%B4%E6%A9%8B%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded","description":"按近鉄のりかえ指示换乘近铁；JR与近铁为不同运营商。"},{"id":"kintetsu_tsuruhashi","name":"近铁鹤桥站","name_ja":"近鉄 鶴橋駅","city":"大阪","category":"station","address_ja":"大阪市生野区鶴橋2丁目","map_query":"近鉄 鶴橋駅","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E8%BF%91%E9%89%84%20%E9%B6%B4%E6%A9%8B%E9%A7%85","coordinates":null,"coordinate_status":"not_geocoded","description":"前往近铁奈良，确认奈良线与目的地，不乘大阪线往伊势方向。"},{"id":"nara_nandaimon","name":"东大寺南大门","name_ja":"東大寺 南大門","city":"奈良","category":"sight","address_ja":"奈良市雑司町406-1","map_query":"東大寺 南大門","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E5%A4%A7%E5%AF%BA%20%E5%8D%97%E5%A4%A7%E9%96%80","coordinates":null,"coordinate_status":"not_geocoded","description":"南大门外观短拍；大佛殿在门内继续向北，内部参观另购票。"},{"id":"namba_area","name":"日本桥／难波餐饮区","name_ja":"日本橋・難波周辺","city":"大阪","category":"area","address_ja":null,"map_query":"なんば駅 日本橋 飲食店","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E3%81%AA%E3%82%93%E3%81%B0%E9%A7%85%20%E6%97%A5%E6%9C%AC%E6%A9%8B%20%E9%A3%B2%E9%A3%9F%E5%BA%97","coordinates":null,"coordinate_status":"not_geocoded","description":"晚餐在购物沿线灵活选择，普通正餐预算¥1,000—2,500/人；地图为片区，未选定餐厅。"},{"id":"shinsaibashi_south","name":"心斋桥筋南段","name_ja":"心斎橋筋商店街 南口","city":"大阪","category":"sight","address_ja":null,"map_query":"心斎橋筋商店街 南口","map_search_url":"https://www.google.com/maps/search/?api=1&query=%E5%BF%83%E6%96%8E%E6%A9%8B%E7%AD%8B%E5%95%86%E5%BA%97%E8%A1%97%20%E5%8D%97%E5%8F%A3","coordinates":null,"coordinate_status":"not_geocoded","description":"戎桥北侧的心斋桥筋南口，只短拍；之后前往南海难波返店。"}],"days":[{"date":"2026-11-30","weekday":"周一","title":"抵达京都","cities":["香港","大阪府","京都"],"intensity":"交通日，游览轻","overnight":"hotel_kyoto","departure_target":null,"hotel_return_target":"19:00—20:00 目标入住；晚饭后结束","route_stop_ids":["hkg","kix","kyoto_station","hotel_kyoto"],"timeline":[{"id":"flight_out","time_label":"11:25 香港→16:00 日本","time_status":"booked","title":"HX618 · 香港 → 关西","place_ids":["hkg","kix"],"category":"flight","booking_id":"flight_out","condition":"建议08:25抵达香港T2；当前值机截止10:25，提前完成托运后前往登机口。"},{"id":"arrival_transfer","time_label":"16:00 落地后","time_status":"planning_window","title":"入境取行李 → HARUKA往京都","place_ids":["kix","kyoto_station"],"category":"transport"},{"id":"checkin_kyoto","time_label":"约19:00—20:00","time_status":"planning_window","title":"入住 · TUNE STAY KYOTO","place_ids":["hotel_kyoto"],"category":"hotel","condition":"入住时确认12/3退房后的行李寄存与领取位置。"},{"id":"dinner_arrival","time_label":"入住后","time_status":"planning_window","title":"京都站附近简餐、买次日早餐","place_ids":["kyoto_station"],"category":"meal","condition":"默认在酒店附近吃简餐；到得早且无需久等时再选京都站餐厅。"}],"meals":{"dinner":{"primary":"すき家 烏丸七条店","alternative":"かつくら 京都ポルタ店；无长队才选"}},"transport_notes":["HARUKA已购，按购买渠道兑换使用；京都站中央口、京都塔侧去酒店。","去程建议08:25抵达香港T2；当前10:25停止值机。T2值机、安检和出境后，乘APM前往T1中场客运廊（T1M）登机。"],"optional":[],"fallback_rules":["航班或入境延迟时，抵达后直接入住、吃简餐，再回酒店休息。"],"dining_recommendations":{"meals":[["晚餐","首选","すき家 烏丸七条店","¥700–1,200","真苧屋町 197","牛丼／定食；参考营业 04:00—次日03:00。","https://maps.sukiya.jp/jp/detail/970"],["晚餐","备选","名代とんかつ かつくら 京都ポルタ店","¥2,500以内","京都站大楼 11 楼","非地下街。参考11:00—22:00，最后点餐21:30；长队时换简餐。","https://www.katsukura.jp/shops/porta/"]],"optional":[],"along_route":{}},"visit_details":{"flight_out":{"title":"值机与登机","items":[{"text":"HX618于香港时间11:25起飞。建议08:25到T2；现行规则在起飞前60分钟停止值机（10:25），前20分钟关闭登机口（11:05）。以航司最新通知及登机牌为准。","url":"https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6"},{"text":"T2香港航空Q行段值机、托运；本次白天出发，在T2完成安检与出境，再乘APM到T1中场客运廊（T1M）。按登机牌和现场指引找登机口。","url":"https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6"}]}}},{"date":"2026-12-01","weekday":"周二","title":"宇治","cities":["京都","宇治"],"intensity":"中等偏高；含登山，午后河岸短拍、傍晚逛书店","overnight":"hotel_kyoto","departure_target":"09:00","hotel_return_target":"20:15—20:35","route_stop_ids":["hotel_kyoto","kyoto_station","jr_uji","nakamura","uji_bridge","kiku","byodoin_approach","agata","bench","kisen","asagiri","uji_shrine","ujigami","daikichi","suikan","heiwa_books","keihan_uji","uji_bridge","saizeriya_uji","jr_uji","kyoto_station","kyoto_stage","hotel_kyoto"],"timeline":[{"id":"uji_transfer","time_label":"09:00—10:00","time_status":"planning_window","title":"京都 → JR宇治 → 中村藤吉","place_ids":["hotel_kyoto","kyoto_station","jr_uji","nakamura"],"category":"transport"},{"id":"uji_parfait","time_label":"10:00—11:15","time_status":"planning_window","title":"中村藤吉 · 抹茶芭菲","place_ids":["nakamura"],"category":"rest"},{"id":"uji_lunch_walk","time_label":"11:15—12:00","time_status":"planning_window","title":"宇治桥西侧 · 街道巡礼","place_ids":["uji_bridge"],"category":"walk","condition":"沿宇治桥西岸拍照，再步行去きく；候位延迟时缩短此段。"},{"id":"uji_lunch","time_label":"12:00—12:45","time_status":"planning_window","title":"午餐 · きく咖喱","place_ids":["kiku"],"category":"meal","condition":"含用餐与坐下休息45分钟；营业临行复核。午饭延迟时略过縣神社、减少桥上拍照，保留登山往返75分钟。"},{"id":"uji_approach","time_label":"12:45—13:00","time_status":"planning_window","title":"平等院表参道","place_ids":["byodoin_approach"],"category":"walk","condition":"从餐厅步行到表参道，沿街拍照；不进入收费区。"},{"id":"agata_stamp","time_label":"13:00—13:10","time_status":"planning_window","title":"縣神社 · 顺路集章","place_ids":["agata"],"category":"visit","rally_spot":"agata","condition":"从表参道步行前往；延迟时可略过。"},{"id":"uji_pilgrimage","time_label":"13:10—13:55","time_status":"planning_window","title":"宇治川巡礼","place_ids":["bench","kisen","asagiri"],"category":"walk","condition":"縣神社 → 久美子椅 → 喜撰桥 → 塔之岛 → 朝雾桥；45分钟含步行与拍照，长椅多留片刻，桥上顺拍。"},{"id":"uji_shrines","time_label":"13:55—14:15","time_status":"planning_window","title":"宇治神社、宇治上神社","place_ids":["uji_shrine","ujigami"],"category":"visit","condition":"从朝雾桥东桥头依次短看两神社，再到大吉山登山口。"},{"id":"daikichi_visit","time_label":"14:15—15:30","time_status":"planning_window","title":"大吉山 · 展望台","place_ids":["daikichi"],"category":"walk","condition":"75分钟含往返、展望台休息与拍照；雨天或明显疲劳时取消。"},{"id":"suikan_stamp","time_label":"15:30—16:20","time_status":"planning_window","title":"水管桥河岸 · 巡礼与休息","place_ids":["suikan"],"category":"visit","rally_spot":"suikan","condition":"下山后前往东岸河川敷，拍照并休息约10分钟；白天完成，不走上水管桥。"},{"id":"heiwa_visit","time_label":"16:20—17:20","time_status":"planning_window","title":"平和书店 · 京阿尼周边","place_ids":["heiwa_books"],"category":"shopping","condition":"从河岸步行到商场3F，约16:40到店，逛30—40分钟。"},{"id":"keihan_uji_visit","time_label":"17:20—17:50","time_status":"planning_window","title":"京阪宇治站 · 立牌与贩售机","place_ids":["keihan_uji"],"category":"activity","condition":"从书店步行到站，看展示约10分钟。"},{"id":"uji_dinner_walk","time_label":"17:50—18:00","time_status":"planning_window","title":"宇治桥 → 萨莉亚","place_ids":["uji_bridge"],"category":"walk","condition":"从京阪宇治站经宇治桥过河，到西岸萨莉亚。"},{"id":"uji_saizeriya_dinner","time_label":"18:00—19:00","time_status":"planning_window","title":"晚餐 · 萨莉亚","place_ids":["saizeriya_uji"],"category":"meal"},{"id":"uji_return","time_label":"19:00—20:00","time_status":"planning_window","title":"JR宇治 → 京都站","place_ids":["jr_uji","kyoto_station"],"category":"transport"},{"id":"station_stage","title":"京都站4F《宝岛》舞台短拍","time_label":"京都站抵达后 · 15—20分钟","time_status":"planning_window","category":"visit","place_ids":["kyoto_stage"],"condition":"从中央口一侧上4F室町小路广场，拍大阶梯与时钟；遇活动占用时在允许通行处拍摄。"},{"id":"kyoto_rest","time_label":"20:15—20:35","time_status":"planning_window","title":"回酒店休息","place_ids":["hotel_kyoto"],"category":"rest","time_hint":"预计返店"}],"meals":{"lunch":{"primary":"お肉ダイニング きく","alternative":"宇治桥西侧有空位的简餐"},"dinner":{"primary":"サイゼリヤ 宇治里尻店","alternative":"宇治站周边简餐；或回京都站用餐"},"tea":{"primary":"中村藤吉本店 · 抹茶芭菲","time":"10:00—11:15"}},"transport_notes":["京都站乘JR奈良线到JR宇治，出站步行去中村藤吉本店。09:00—10:00含酒店到站、候车及步行，具体班次临行确认。","午饭后从西岸表参道、縣神社到久美子椅，经喜撰桥、塔之岛、朝雾桥到东岸；依次短看宇治神社、宇治上神社，再登大吉山。","大吉山原路下山后，沿公共道路去水管桥东岸河川敷；先完成河岸拍照，再去アル・プラザ宇治東3F的平和书店，不走上水管桥。","萨莉亚晚饭后步行到JR宇治，乘JR奈良线往京都；出站后从中央口一侧上4F室町小路广场拍《宝岛》舞台，再步行回TUNE。不要在京阪宇治站乘车。"],"optional":[],"fallback_rules":["芭菲候位拖长时，缩短午饭前的街道巡礼；午饭延迟时，略过縣神社、减少桥上拍照。保留午饭、久美子椅和登山往返75分钟。","雨天或明显疲劳时取消登山；14:30仍未到登山口，不能确保白天下山就取消。下山较晚时河岸只短拍，不在暗处找机位。","疲劳或延迟时，书店缩为20分钟，省京阪站展示；晚饭仍保留。"],"dining_recommendations":{"meals":[["午餐","首选","お肉ダイニング きく","预算 ¥1,000–2,000","宇治妙楽4-4，協栄ビル2F","京吹粉丝聚集的餐厅，非动画取景点。当前营业及咖喱价格临行复核；等位较久时可换附近简餐。","https://www.pref.kyoto.jp/syokuloss/suishin88.html","kiku"],["午餐","备选","宇治橋 西岸の飲食店","¥1,000–2,500","宇治桥西侧","附近简餐，优先有座位的店。",""],["晚餐","首选","サイゼリヤ 宇治里尻店","预算 ¥700–1,200","宇治里尻77","营业参考11:00—24:00。","https://shop.saizeriya.co.jp/sz_restaurant/spot/detail?code=0524","saizeriya_uji"],["晚餐","备选","JR宇治駅 周辺の飲食店","¥1,000–2,500","JR宇治站周边","可改在JR宇治站或京都站吃简餐；若回京都后才吃，返店相应顺延，仍保留4F《宝岛》舞台15—20分钟。",""],["茶歇","首选","中村藤吉本店","价格以当日菜单为准","宇治壱番十番地","咖啡厅参考10:00—17:30，不接受预约。领号后能否暂离、过号如何处理，请询问店员。","https://tokichi.jp/pages/honten-store-page","nakamura"]],"optional":[],"along_route":{}},"route_event_ids":["uji_transfer","uji_transfer","uji_transfer","uji_parfait","uji_lunch_walk","uji_lunch","uji_approach","agata_stamp","uji_pilgrimage","uji_pilgrimage","uji_pilgrimage","uji_shrines","uji_shrines","daikichi_visit","suikan_stamp","heiwa_visit","keihan_uji_visit","uji_dinner_walk","uji_saizeriya_dinner","uji_return","uji_return","station_stage","kyoto_rest"]},{"date":"2026-12-02","weekday":"周三","title":"京都","cities":["京都"],"intensity":"中等偏高；含寺内步行","overnight":"hotel_kyoto","departure_target":"10:00","hotel_return_target":"约20:45—21:15；排队延迟时减少后段停留","route_stop_ids":["hotel_kyoto","demachi","delta","demachiyanagi","kiyomizu_gojo","kiyomizu","sannenzaka","yasaka_tower","ninenzaka","nene","kodaiji","hotel_kyoto"],"timeline":[{"id":"demachi_transfer","time_label":"10:00—10:55","time_status":"planning_window","title":"京都站地铁到今出川，再步行去出町","place_ids":["hotel_kyoto","demachi"],"category":"transport"},{"id":"demachi_visit","time_label":"10:55—11:40","time_status":"planning_window","title":"出町桝形商店街巡礼","place_ids":["demachi"],"category":"visit","condition":"先拍入口、吊鱼与拱廊；小吃只买短队，不逐家进店。"},{"id":"demachi_lunch","time_label":"11:40—12:25","time_status":"planning_window","title":"出町附近午饭","place_ids":["demachi"],"category":"meal"},{"id":"delta_visit","time_label":"12:25—12:50","time_status":"planning_window","title":"鸭川三角洲短拍、前往京阪站","place_ids":["delta","demachiyanagi"],"category":"visit","condition":"25分钟含河岸短拍与前往京阪站；优先《玉子》高野川侧，《轻音》仅有余量时拍，不来回补机位。"},{"id":"kiyomizu_transfer","time_label":"约13:00—14:15","time_status":"planning_window","title":"京阪到清水五条，再步行上山","place_ids":["demachiyanagi","kiyomizu_gojo","kiyomizu"],"category":"transport"},{"id":"kiyomizu_visit","time_label":"14:15—15:30","time_status":"planning_window","title":"清水寺、清水舞台与庭园赏枫","place_ids":["kiyomizu"],"category":"visit"},{"id":"higashiyama_walk","time_label":"15:30—16:45","time_status":"planning_window","title":"三年坂→八坂塔短支线→二年坂→宁宁之道、高台寺附近","place_ids":["sannenzaka","yasaka_tower","ninenzaka","nene"],"category":"walk","condition":"三年坂 → 八坂塔短支线 → 二年坂 → 宁宁之道；75分钟用于步行与巡礼短拍，保留之后半小时休息。"},{"id":"gion_rest","time_label":"16:45—17:15","time_status":"planning_window","title":"二年坂／宁宁之道附近坐下休息","place_ids":["ninenzaka","nene"],"category":"rest"},{"id":"kodaiji_night","time_label":"17:15—18:30","time_status":"planning_window","title":"高台寺夜枫，游览约60—75分钟，排队另留弹性","place_ids":["kodaiji"],"category":"visit","condition":"17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。","booking_status":"purchase_not_confirmed"},{"id":"gion_dinner_walk","time_label":"18:30—19:00","time_status":"planning_window","title":"前往晚饭地点","place_ids":[],"category":"walk","condition":"八坂神社仅在夜枫准时结束且步行有余量时短停。"},{"id":"gion_dinner","time_label":"19:00—20:00","time_status":"planning_window","title":"晚饭，长队换简餐；おめん20:00最后点餐，迟到不赶店","place_ids":[],"category":"meal"},{"id":"kyoto_night_return","time_label":"目标20:45—21:15到店","time_status":"planning_window","title":"饭后返回京都酒店","place_ids":["hotel_kyoto"],"category":"transport"}],"meals":{"lunch":{"primary":"DELTA Bistro, Coffee Shop & Gallery","alternative":"ゼッテリア 京阪出町柳駅店"},"tea":{"primary":"二年坂／宁宁之道附近有空位茶店；星巴克仅恰好有座位时选"},"dinner":{"primary":"名代おめん 四条先斗町店","alternative":"松屋 四条河原町店"}},"transport_notes":["京阪出町柳站与叡山电铁分开识别，乘停清水五条的合适列车。","八坂塔先于二年坂，街区经宁宁之道到高台寺附近休息。","饭后可阪急京都河原町→烏丸，换地铁四条→京都；累了可打车。"],"optional":[{"id":"yasaka_brief","title":"八坂神社顺路短停","place_ids":["yasaka_shrine"],"time_label":"高台寺结束后、晚饭途中","rule":"仅有时间和体力余量时；延迟则省略"}],"fallback_rules":["省排队小吃和额外商店，保留半小时坐下休息。","高台寺17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。","排队导致延迟则省八坂神社，晚饭选容易入座的简餐，不赶おめん最后点餐。"],"dining_recommendations":{"meals":[["午餐","首选","DELTA Bistro, Coffee Shop & Gallery","¥1,400–2,200","三荣町 62","周三参考11:00—18:00，午餐至约14:30。餐盘1,400起。","https://delta.kyotographie.jp/cafe/"],["午餐","备选","ゼッテリア 京阪出町柳駅店","约 ¥800–1,200","田中上柳町 25-3","DELTA满座时，11:40—12:50改为先拍鸭川，再到站旁汉堡店午餐；约13:00乘京阪，不再重复河岸段。","https://www.zetteria.jp/shop/shop3601.html"],["茶歇","首选","二年坂・ねねの道 周辺のカフェ","约 ¥500–800","二年坂／宁宁之道、高台寺附近","附近找座位休息30分钟；星巴克有空位再去。","https://store.starbucks.co.jp/detail-1476/"],["晚餐","首选","名代おめん 四条先斗町店","¥1,520–2,400","柏屋町 171-2","晚市17:00—21:00，20:00最后点餐；不接受预约。","https://omen.co.jp/pages/shops"],["晚餐","备选","松屋 四条河原町店","约 ¥700–1,200","奈良屋町 305","参考24小时，牛丼／定食。","https://pkg.navitime.co.jp/matsuyafoods/spot/detail?code=0000000481"]],"optional":[{"place":"crepe","label":"候选店 · 待确认","title":"新京极抹茶布蕾可丽饼","text":"取消夜枫且仍有体力、已到河原町一带时再考虑；先确认新京极店营业，不挤占东山休息。配图为品牌产品。","budget":"价格与新京极店营业时间待确认","source":"https://www.shinkyogoku.or.jp/guide/","event_id":"gion_dinner"}],"along_route":{}}},{"date":"2026-12-03","weekday":"周四","title":"京都 → 大阪","cities":["京都","大阪"],"intensity":"中等；联动、稻荷与搬行李","overnight":"hotel_osaka","departure_target":"09:45","hotel_return_target":"20:00—20:30","route_stop_ids":["hotel_kyoto","kyoto_tower","kyoto_station","inari","hotel_kyoto","kyoto_station","jr_osaka","jr_shinimamiya","hotel_osaka","shinsekai","hotel_osaka"],"timeline":[{"id":"checkout_kyoto","time_label":"09:45离店前","time_status":"planning_window","title":"退房、寄存行李","category":"hotel","place_ids":["hotel_kyoto"],"condition":"寄存及领取方式待酒店确认；入住时询问，不能寄存则使用京都站可用储物柜并记录位置。"},{"id":"kyoto_tower_transfer","time_label":"09:45—10:00","time_status":"planning_window","title":"步行前往京都塔","category":"transport","place_ids":["hotel_kyoto","kyoto_tower"]},{"id":"kyoto_tower_visit","time_label":"10:00—11:30","time_status":"planning_window","title":"京都塔 · 京吹联动集章","category":"visit","place_ids":["kyoto_tower"],"condition":"先在展望室5层领叠印台纸，完成收费区章点再出场；共7处，按现场指引集章、拍展示与买周边。"},{"id":"kyoto_lunch","time_label":"11:30—12:30","time_status":"planning_window","title":"午餐 · 京都站附近","category":"meal","place_ids":["kyoto_station"],"condition":"含找店、步行和坐下用餐；附近简餐即可，不长时间候位。"},{"id":"inari_transfer","time_label":"12:30—13:10","time_status":"planning_window","title":"京都站 → JR稻荷","category":"transport","place_ids":["kyoto_station","inari"]},{"id":"inari_visit","time_label":"13:10—14:40","time_status":"planning_window","title":"伏见稻荷 · 千本鸟居","category":"visit","place_ids":["inari"],"condition":"楼门→本殿→千本鸟居→奥社奉拜所，原路返回；不登顶。"},{"id":"luggage_pickup","time_label":"14:40—15:40","time_status":"planning_window","title":"回京都TUNE取行李","category":"transport","place_ids":["hotel_kyoto"],"condition":"含JR回京都、步行与取件；若改用储物柜，回寄存处取齐再乘车。"},{"id":"osaka_transfer","time_label":"取箱后约1.5—2小时","time_status":"planning_window","title":"前往大阪新今宫酒店","category":"transport","place_ids":["kyoto_station","jr_osaka","jr_shinimamiya","hotel_osaka"],"condition":"含候车、换乘、携行李步行；按实际列车出发，不锁定车次。"},{"id":"checkin_osaka","time_label":"约17:15—18:00","time_status":"planning_window","title":"入住大阪酒店","category":"hotel","place_ids":["hotel_osaka"],"condition":"预计到店范围，随取件和交通调整；入住后休息30—45分钟。","time_hint":"预计抵达"},{"id":"shinsekai_dinner","time_label":"休息后 · 参考18:30—19:30","time_status":"planning_window","title":"新世界晚餐、通天阁外观","category":"meal","place_ids":["shinsekai"],"condition":"通天阁从地面短拍，按体力调整停留。"},{"id":"osaka_evening_return","time_label":"饭后 · 参考20:00—20:30","time_status":"planning_window","title":"返回酒店，准备次日USJ","category":"transport","place_ids":["hotel_osaka"],"condition":"可提前返店；备好USJ门票App、充电宝与早餐。","time_hint":"预计返店"}],"meals":{"lunch":{"primary":"すき家 烏丸七条店或京都站附近简餐","alternative":"名代とんかつ かつくら 京都ポルタ店；不排长队"},"dinner":{"primary":"串かつだるま ジャンジャン店","alternative":"餃子の王将 新世界店"}},"transport_notes":["酒店到京都塔步行预留10—15分钟；先退房寄存，不带大箱上塔。","午饭后从京都站乘JR奈良线普通列车到稻荷；确认列车停靠稻荷。","稻荷参观后乘JR奈良线普通回京都，步行到TUNE或已确认的寄存点取行李。","取箱后京都站JR新快速→大阪，换环状线至JR新今宫，再步行去酒店；共预留约1.5—2小时。","酒店与新世界之间沿街步行；晚饭和外观短拍后直接回酒店。"],"optional":[],"fallback_rules":["京都塔延误时先减少重复拍照与周边挑选；收费区离场前查漏章。","保留午饭、伏见稻荷奥社折返、取行李与入住后休息；延迟时稻荷少停拍照，晚餐改附近简餐。"],"dining_recommendations":{"meals":[["午餐","首选","すき家 烏丸七条店","¥700–1,200","真苧屋町197，京都站北侧","牛丼／定食；含步行和坐下用餐，12:30前后去京都站。","https://maps.sukiya.jp/jp/detail/970"],["午餐","备选","名代とんかつ かつくら 京都ポルタ店","¥2,500以内","京都站大楼11楼","参考11:00开门；只有无需久等时选择，预留上下楼时间。","https://www.katsukura.jp/shops/porta/"],["晚餐","首选","串かつだるま ジャンジャン店","¥1,500–2,500","惠美须东3-4-4","成人每人需点一杯饮品，一起算预算。参考11:00—22:30，最后点餐22:00。","https://www.kushikatu-daruma.com/location/jyanjyan"],["晚餐","备选","餃子の王将 新世界店","约 ¥1,000–1,500","惠美须东3-5-16","入住晚于19点或串炸长队，改简餐。参考11:00—22:30，最后点餐22:00。","https://map.ohsho.co.jp/b/ohsho/info/1454/"]],"optional":[],"along_route":{}},"route_event_ids":["checkout_kyoto","kyoto_tower_visit","inari_transfer","inari_visit","luggage_pickup","osaka_transfer","osaka_transfer","osaka_transfer","checkin_osaka","shinsekai_dinner","osaka_evening_return"],"visit_details":{"kyoto_tower_visit":{"title":"集章、门票与楼层","items":[{"text":"活动2026/9/1—12/20；叠印台纸免费，共7处章点。","url":"https://www.kyoto-tower.jp/event/eupho26autumn/"},{"text":"展望室5层须购票进入；当前成人¥1,000、两人¥2,000，未购票。10:00—21:00，20:30停止入场。","url":"https://www.kyoto-tower.jp/event/eupho26autumn/"},{"text":"展望室1层是京都塔大楼11楼；周边店10:00—20:30。其他章点按现场指引前往。","url":"https://www.kyoto-tower.jp/event/eupho26autumn/"},{"text":"门票不可再次入场，出场前检查台纸；京都塔叠印与12/1宇治GPS数字集章是不同活动。","url":"https://www.kyoto-tower.jp/faq/"}]}}},{"date":"2026-12-04","weekday":"周五","title":"USJ","cities":["大阪"],"intensity":"高","overnight":"hotel_osaka","departure_target":"约07:00","hotel_return_target":"20:00—21:30；完成重点可提前","route_stop_ids":["hotel_osaka","jr_shinimamiya","usj","hotel_osaka"],"timeline":[{"id":"usj_transfer","time_label":"约07:00出发","time_status":"planning_window","title":"前往USJ","place_ids":["hotel_osaka","jr_shinimamiya","usj"],"category":"transport","condition":"酒店至入口约50—70分钟，不含入园排队，预计08:00前后到园；12/4官方营业09:00—19:00，实际可能提前放行。"},{"id":"usj_app","time_label":"两人都入园后","time_status":"planning_window","title":"按当日规则在App申请任天堂区域资格","place_ids":["usj"],"category":"activity"},{"id":"usj_core","time_label":"随区域资格及场次安排","time_status":"planning_window","title":"优先体验 · 任天堂区域与柯南4-D","place_ids":["usj"],"category":"activity","condition":"进入任天堂区域后，同次完成首选设施、拍照与商店；柯南按场次衔接，避免为附加项目来回穿园。"},{"id":"usj_lunch","time_label":"午间，按场次调整","time_status":"planning_window","title":"午餐 · 休息45—60分钟","place_ids":["usj"],"category":"meal"},{"id":"usj_rest","time_label":"下午","time_status":"planning_window","title":"休息 · 约30分钟","place_ids":["usj"],"category":"rest"},{"id":"usj_finish","time_label":"17:00盘点，争取18:00前完成重点","time_status":"planning_window","title":"18—19点仅留缓冲，19点前结束普通票设施体验","place_ids":["usj"],"category":"activity","condition":"重点完成且已经疲劳，可提前离园。"},{"id":"usj_dinner","time_label":"离园后","time_status":"planning_window","title":"顺路简餐、返回酒店","place_ids":["hotel_osaka"],"category":"meal"}],"meals":{"lunch":{"primary":"Louie's N.Y. Pizza Parlor","alternative":"园内当日营业、有座位且队列合适的餐厅"},"dinner":{"primary":"回酒店途中简餐"}},"transport_notes":["JR新今宫→西九条→梦咲线Universal City→园门。","普通票通常不能出园用餐后再入园。"],"optional":[{"id":"usj_extra","title":"第二项任天堂设施或其他项目","place_ids":["usj"],"rule":"实时等候与体力允许才加；马里奥赛车与咚奇刚择一优先"},{"id":"kinopio","title":"Kinopio's Cafe","place_ids":["usj"],"rule":"区域资格不等于餐厅资格，申请时间合适才去；部分餐品超过常规预算"}],"fallback_rules":["普通票与早到均不保证任天堂区域入场，未取得资格时转柯南及其他感兴趣体验。","19:00—22:00 Amex活动，设施及部分餐饮需活动凭证；不等同普通游客必须19点全部离园。","水世界按当前11/28—12/27停运公告排除；临行复核。"],"dining_recommendations":{"meals":[["午餐","首选","ルイズ N.Y. ピザパーラー","参考套餐 ¥1,750–1,850","USJ纽约区 · Louie’s N.Y. Pizza Parlor","按当天营业与队列调整，坐下吃45—60分钟。","https://www.usj.co.jp/web/en/us/restaurants/louies-ny-pizza-parlor"],["午餐","备选","ユニバーサル・スタジオ・ジャパン 園内レストラン","预算 ¥1,000–2,500","园内当日营业餐厅","现场选有座位、排队较短的餐厅。",""],["午餐","可选","キノピオ・カフェ","参考意面 ¥2,500／汉堡 ¥2,600","SUPER NINTENDO WORLD","区域资格不等于餐厅资格。部分餐品超预算，饮品另算；申请不合适就省。","https://www.usj.co.jp/web/ja/jp/restaurants/kinopios-cafe"],["晚餐","首选","新今宮駅 周辺の飲食店","预算 ¥1,000–2,500","离园后，回酒店顺路","顺路选有座位的简餐。",""],["晚餐","备选","松屋 恵美須町店","约 ¥700–1,200","惠美须西2-1-32","距酒店仍需步行；疲劳时选更近的简餐店。","https://pkg.navitime.co.jp/matsuyafoods/spot/detail?code=0000000376"]],"optional":[],"along_route":{}},"ticket_note":"普通门票未购买；需购买两张12/4 Studio Pass。"},{"date":"2026-12-05","weekday":"周六","title":"大阪城 · 奈良 · 日本桥","cities":["大阪","奈良"],"intensity":"较满；09:30离店，晚间返店","overnight":"hotel_osaka","departure_target":"09:30","hotel_return_target":"约21:30—21:45","route_stop_ids":["hotel_osaka","jr_shinimamiya","morinomiya","osaka_castle","morinomiya","jr_tsuruhashi","kintetsu_tsuruhashi","kintetsu_nara","nara_park","nara_nandaimon","todaiji","kintetsu_nara","kintetsu_nippombashi","animate","surugaya","namba_area","dotonbori","glico","shinsaibashi_south","nankai_namba","nankai_shinimamiya","hotel_osaka"],"timeline":[{"id":"castle_transfer","time_label":"09:30—10:20","time_status":"planning_window","title":"前往大阪城公园","category":"transport","place_ids":["hotel_osaka","jr_shinimamiya","morinomiya"],"condition":"09:30从酒店出发，约10:20到森之宫侧公园入口；到站后仍要走到天守阁。"},{"id":"castle_visit","time_label":"10:20—11:15","time_status":"planning_window","title":"大阪城公园、天守阁外观","category":"visit","place_ids":["osaka_castle"],"condition":"从森之宫侧公园入口步行约20—30分钟到天守阁，外观拍照和附近休息约25—35分钟；不入馆。"},{"id":"castle_station_walk","time_label":"11:15—11:45","time_status":"planning_window","title":"步行回森之宫站附近","category":"walk","place_ids":["osaka_castle","morinomiya"]},{"id":"nara_lunch","time_label":"11:45—12:35","time_status":"planning_window","title":"午餐 · 森之宫站附近","category":"meal","place_ids":["morinomiya"]},{"id":"nara_transfer","time_label":"12:35—13:35","time_status":"planning_window","title":"森之宫 → 鹤桥 → 近铁奈良","category":"transport","place_ids":["morinomiya","jr_tsuruhashi","kintetsu_tsuruhashi","kintetsu_nara"],"condition":"铁路含换乘、候车约40—60分钟；预计13:15—13:35到近铁奈良，具体班次待核。"},{"id":"nara_park_walk","time_label":"参考13:35—14:05","time_status":"planning_window","title":"步行至公园、南大门","category":"walk","place_ids":["nara_park","nara_nandaimon"],"condition":"从近铁奈良站沿公园步道到南大门，预留约30分钟；远看鹿即可，不喂鹿、不要求近距离互动。"},{"id":"nara_visit","time_label":"参考14:05—14:55","time_status":"planning_window","title":"南大门、大佛殿内部","category":"visit","place_ids":["nara_nandaimon","todaiji"],"condition":"南大门短拍和门间步行，加上大佛殿内部30—40分钟，共约50分钟。排队另占缓冲；冬季17:00闭门。"},{"id":"nara_rest","time_label":"参考14:55—15:05","time_status":"planning_window","title":"坐下休息","category":"rest","place_ids":["todaiji"],"condition":"参观后在回车站沿途找座位短休，保留约10分钟。"},{"id":"nara_station_walk","time_label":"参考15:05—15:35","time_status":"planning_window","title":"返回近铁奈良站","category":"walk","place_ids":["todaiji","kintetsu_nara"],"condition":"步行约30分钟回近铁奈良站；从抵达至回站共约2小时，不折回JR奈良。"},{"id":"nara_return_train","time_label":"约15:35到站候车 · 全段75—90分钟","time_status":"planning_window","title":"近铁奈良 → 近铁日本桥","category":"transport","place_ids":["kintetsu_nara","kintetsu_nippombashi"],"condition":"含候车、车程、出站及步行到首店；具体班次待核。"},{"id":"nippombashi_arrival","time_label":"约16:50—17:05","time_status":"planning_window","title":"抵达日本桥首店","category":"transport","place_ids":["animate"],"time_hint":"预计抵达"},{"id":"anime_shopping","time_label":"参考17:05—19:20 · 约2小时15分钟","time_status":"planning_window","title":"日本桥 · 动漫购物","category":"shopping","place_ids":["animate","surugaya"],"condition":"挑1—2家慢逛，含店间步行和约20分钟坐下休息；先逛20:00关门的店，再吃饭。"},{"id":"nippombashi_dinner","time_label":"参考19:20—20:20","time_status":"planning_window","title":"晚餐 · 日本桥／难波","category":"meal","place_ids":["namba_area"],"condition":"预留45—60分钟坐下用餐；沿途选有空位、仍接待正餐的店。"},{"id":"dotonbori_walk","time_label":"参考20:20—20:40","time_status":"planning_window","title":"前往道顿堀","category":"walk","place_ids":["dotonbori"]},{"id":"glico_photo","time_label":"参考20:40—21:00 · 共用20分钟","time_status":"planning_window","title":"戎桥、格力高与心斋桥短拍","category":"visit","place_ids":["glico","shinsaibashi_south"],"condition":"保留《柯南》戎桥对照、格力高和心斋桥筋南口短拍；拍完前往南海难波。"},{"id":"nara_day_return","time_label":"约21:30—21:45抵达","time_status":"planning_window","title":"返回大阪酒店","category":"transport","place_ids":["nankai_namba","nankai_shinimamiya","hotel_osaka"],"condition":"拍照后经南海难波回新今宫，含步行和候车约30—45分钟。购物或用餐延长时相应晚归，保留晚饭和休息。"}],"meals":{"lunch":{"primary":"森之宫站附近沿途简餐","alternative":"就近选择能及时入座的店；不等到奈良再吃午饭"},"dinner":{"primary":"日本桥／难波沿途现选简餐","alternative":"按空位和最后点餐时间选店；未订位"}},"transport_notes":["酒店步行到JR新今宫，乘大阪环状线内回り（天王寺、鹤桥方向）到森之宫；09:30离店、约10:20到公园入口，步行到天守阁外观拍照处另留20—30分钟步行。","天守阁步行回JR森之宫约30分钟，午饭单独留50分钟；饭后乘环状线外回り（鹤桥、天王寺方向）到JR鹤桥，按近鉄のりかえ换奈良线往近铁奈良，勿上大阪线往伊势。交通合计约70—90分钟，不含午饭。","回大阪乘大阪难波方向且停近铁日本桥的列车；回程含候车、出站与到店步行约75—90分钟。","近铁日本桥站沿东侧街道向南到Animate，再沿御宅路向北到骏河屋动漫·Hobby馆；挑1—2家慢逛，按收获分配时间。","道顿堀戎桥、格力高及心斋桥筋南口短拍后，步行到南海难波→南海新今宫→酒店；不去JR难波。"],"optional":[{"id":"shop_replacement","title":"替换一家动漫店","place_ids":["potato","surugaya_main"],"rule":"总数仍不超过两家；只逛一家时按作品偏好选，不保证中古库存"}],"fallback_rules":["09:30离店，大阪城只看外观；前段延误先减少公园零散拍照，保留奈良约2小时、两顿饭和交通余量。","若预计15:30后才抵奈良，大佛殿17:00闭门会限制完整步行与入内时间。最小调整是减少沿途散拍，并仅在能节省时间时改用公交／出租车到南大门附近；保留大佛殿内部参观30—40分钟。更大延误需现场重新判断，不能保证全部照表完成。","回大阪先逛店再吃饭，20:00关门的店优先。18:50后才到首店时，按兴趣保留一家或缩短购物；不压缩晚饭和休息。","道顿堀、心斋桥只短拍；购物或用餐延长时返店相应顺延。若全日延误约30分钟，参考22:00—22:15返店，不靠快走追回原表。"],"dining_recommendations":{"meals":[["午餐","首选","森ノ宮駅周辺の飲食店","预算 ¥1,000–2,500","森之宫站附近，沿回站路线选择","含找店、用餐与休息；优先能及时入座的简餐店，未订位。","","morinomiya",{"pending":true}],["晚餐","首选","日本橋・難波周辺の飲食店","预算 ¥1,000–2,500","日本桥／难波一带","晚回大阪先购物再吃饭；地图为餐饮片区，餐厅现场选择，未订位。","","namba_area",{"pending":true}]],"optional":[],"along_route":{"glico_photo":[{"place":"eggtart","label":"可选 · 顺路外带","title":"道顿堀蛋挞","text":"现址道顿堀1-7-5，参考11:00—21:00。短拍途中21:00前经过且无队伍时可外带；临近关门或排队就略过。","budget":"按现场单价；两人可先买1—2个","source":"https://eggtart.jp/shop/"}]}},"route_event_ids":["castle_transfer","castle_transfer","castle_transfer","castle_visit","castle_station_walk","nara_transfer","nara_transfer","nara_transfer","nara_park_walk","nara_visit","nara_visit","nara_return_train","nara_return_train","anime_shopping","anime_shopping","nippombashi_dinner","dotonbori_walk","glico_photo","glico_photo","nara_day_return","nara_day_return","nara_day_return"],"visit_details":{"castle_visit":{"title":"公园步行与外观拍照","items":[{"text":"从森之宫侧公园入口步行约20—30分钟到天守阁；外观拍照和附近休息约25—35分钟。返森之宫另留约30分钟，本行程不入馆。","url":"https://www.osakacastle.net/access/index.html"}]},"anime_shopping":{"title":"店铺关门时间","items":[{"text":"Animate大阪日本桥：周六参考10:00—20:00；池田大楼2号馆1—2楼。","url":"https://www.animate.co.jp/shop/nipponbashi/","place_id":"animate"},{"text":"骏河屋OtARoad动漫·Hobby馆：参考10:00—21:00；平田大楼2—3楼。","url":"https://www.suruga-ya.jp/feature/realstore/otaroad/index.html","place_id":"surugaya"},{"text":"Super Potato御宅路店：周末参考10:00—20:00；平田大楼1楼。","url":"https://www.superpotato.com/shop/otaroad/","place_id":"potato"},{"text":"骏河屋大阪日本桥本馆：参考10:00—21:00；日本桥4-11-3。","url":"https://www.suruga-ya.jp/feature/realstore/nihonbashi_main/index.html","place_id":"surugaya_main"},{"text":"若现场替换为らしんばん，日本桥主要门店约20:00关门；分店不同，地址与营业另核对。","url":"https://www.lashinbang.com/store/"}]},"nara_visit":{"title":"大佛殿参观与闭门时间","items":[{"text":"11月至3月大佛殿08:00—17:00。当前成人¥800、两人¥1,600，现场拝观费以现金支付；购买状态待确认。","url":"https://www.todaiji.or.jp/information/haikan/"},{"text":"参考14:05从南大门向内参观；大佛殿内部保留约30—40分钟，17:00闭门是硬边界。抵奈良晚于15:30时，先核对入堂余量再决定接驳，不靠压缩参观硬赶。","url":"https://www.todaiji.or.jp/information/haikan/"}]}}},{"date":"2026-12-06","weekday":"周日","title":"神户","cities":["大阪","神户"],"intensity":"中等；午晚餐与休息留足","overnight":"hotel_osaka","departure_target":"09:30","hotel_return_target":"约20:45—21:00，随晚餐时段调整","route_stop_ids":["hotel_osaka","jr_shinimamiya","jr_osaka","sannomiya","ikuta","starbucks_kitano","lashinbang_kobe","surugaya_kobe","bookoff_kobe","sannomiya_center","port_sannomiya","port_nakakoen","kobe_bridge","port_nakakoen","port_sannomiya","sannomiya_center","sannomiya","jr_osaka","jr_shinimamiya","hotel_osaka"],"timeline":[{"id":"kobe_transfer","time_label":"09:30—10:45","time_status":"planning_window","title":"前往生田神社","category":"transport","place_ids":["hotel_osaka","jr_shinimamiya","jr_osaka","sannomiya","ikuta"]},{"id":"ikuta_visit","time_label":"10:45—11:30","time_status":"planning_window","title":"生田神社巡礼","category":"visit","place_ids":["ikuta"]},{"id":"kitano_lunch","time_label":"11:30—13:00","time_status":"planning_window","title":"北野星巴克 · 午餐与巡礼","category":"meal","place_ids":["starbucks_kitano"],"condition":"上坡步行20分钟 → 午餐、咖啡和休息约50分钟 → 下坡到三宫20分钟。北野物语馆外观是《魔女的夜宴》七绪咖啡店的玩家实景对照，非官方认定；无座位也保留外观短拍，再下坡吃简餐。"},{"id":"sannomiya_shopping","time_label":"13:00—14:30","time_status":"planning_window","title":"三宫 · 三家店","category":"shopping","place_ids":["lashinbang_kobe","surugaya_kobe","bookoff_kobe"],"condition":"三家合计约90分钟，含换楼与结账；先看音像、毛绒和立牌。若前段延迟，把剩余购物放到大桥之后，不取消三店。"},{"id":"sannomiya_rest","time_label":"14:30—15:00","time_status":"planning_window","title":"坐下休息","category":"rest","place_ids":["sannomiya_center"]},{"id":"kobe_bridge_visit","time_label":"15:00—16:30","time_status":"planning_window","title":"神户大桥巡礼","category":"visit","place_ids":["kobe_bridge"],"condition":"含三宫往返交通，北公园现场约30分钟；《Fate/stay night》桥梁对照，尽量白天拍摄。争取15:00从三宫出发，余下购物回程再继续。"},{"id":"sannomiya_evening","time_label":"16:30—17:30","time_status":"planning_window","title":"三宫 · 购物余量与休息","category":"rest","place_ids":["sannomiya_center"],"condition":"前段未逛完的店在此补足原定90分钟；已逛完就坐下休息，预留前往所选餐厅的步行时间。"},{"id":"sannomiya_dinner","time_label":"意向17:30—19:30 · 预留1.5—2小时","time_status":"planning_window","title":"晚餐 · 三宫和牛自助","category":"meal","place_ids":["sannomiya_center"]},{"id":"last_evening_return","time_label":"晚饭后约75—90分钟","time_status":"planning_window","title":"返回大阪酒店、收行李","category":"transport","place_ids":["sannomiya","jr_osaka","jr_shinimamiya","hotel_osaka"],"condition":"19:30结束晚饭时，预计20:45—21:00返店；订位或用餐较晚则顺延。回店整理行李、证件和次晨早餐，不加夜游。"}],"meals":{"lunch":{"primary":"スターバックス コーヒー 神戸北野異人館店","note":"午餐、咖啡与休息合并；轻食或座位不合适则拍外观后回三宫现选简餐。"},"dinner":{"primary":"三宫附近和牛自助（餐厅待选）","price_jpy":null,"booking_status":"not_reserved","duration_minutes":[90,120],"budget_max_jpy_per_person":6000,"candidate":{"name_ja":"炭火焼肉食べ放題 ふうふう亭 三宮店","course_ja":"和牛ざんまいコース（ソフトドリンク飲み放題付き）","adult_jpy":5000,"two_adults_jpy":10000,"tax_included":true,"soft_drinks_included":true,"duration_minutes":120,"last_order_minutes_before_end":30,"address_ja":"兵庫県神戸市中央区北長狭通2-11-6 ファンタジービル3F","source":"https://fufutei-44.owst.jp/courses/208204865","access_source":"https://fufutei-44.owst.jp/map","checked_on":"2026-10-04","selection_status":"candidate","booking_status":"not_reserved","visit_date_availability":"not_confirmed"}}},"transport_notes":["新今宫乘JR环状线到大阪，换JR神户线新快速到三ノ宮，再步行至生田神社；门到神社预留约75分钟。","生田神社→北野，上坡预留20分钟；午饭后沿北野坂下坡至三宫，预留20分钟。","三宫购物：らしんばん在センタープラザ东馆2F，骏河屋1号店在相邻さんプラザ3F；BOOKOFF另在グレースコウベ5F。三店共用90分钟，含换楼、上下楼与结账。","三宫步行到Port Liner站，乘车至中公園，步行约8分钟到北公园；拍摄后原路回中公園，乘三宫方向列车。90分钟包含候车、步行、摄影与往返，不锁定车次。","晚餐后步行回JR三ノ宮，乘JR神户线到大阪，换停靠新今宫的环状线列车；含到站、候车、换乘及回酒店步行，预留75—90分钟。"],"optional":[],"fallback_rules":["午餐或购物延迟时，把部分三宫购物移到大桥之后；保留约30分钟休息，并争取15:00从三宫去北公园，避免购物挤掉白天拍桥。","大风、雨天或明显疲劳时，在三宫休息并取消大桥往返；北野物语馆的外观巡礼保留，咖啡店满座则下坡吃简餐。","和牛自助尚未选店或订位，不能保证17:30入店；选店时核对价格、用餐限时与交通，较晚用餐则顺延返店。","前一晚能整理的行李先整理，12/6晚饭后直接回酒店收尾；不再追加大阪夜游。"],"dining_recommendations":{"meals":[["午餐","首选","スターバックス コーヒー 神戸北野異人館店","预算 ¥1,000–1,500","北野町3-1-31，北野物语馆","轻食配饮品。参考营业08:00—22:00、不定休；餐食与座位以现场为准。","https://store.starbucks.co.jp/detail-940/","starbucks_kitano"],["晚餐","首选","和牛自助（餐厅待选）","预算不超过¥6,000","候选：ふうふう亭 三宮店，北長狭通2-11-6 ファンタジービル3F；地图仅标示三宫餐饮区域。","和牛ざんまいコース现价¥5,000（含税、软饮），120分钟，结束前30分钟停止点单。当前营业16:00—23:00；12/6套餐与空位待确认，未订位。","https://fufutei-44.owst.jp/courses/208204865","sannomiya_center",{"pending":true}]],"optional":[],"along_route":{}},"route_event_ids":["kobe_transfer","kobe_transfer","kobe_transfer","kobe_transfer","ikuta_visit","kitano_lunch","sannomiya_shopping","sannomiya_shopping","sannomiya_shopping","sannomiya_rest","kobe_bridge_visit","kobe_bridge_visit","kobe_bridge_visit","kobe_bridge_visit","kobe_bridge_visit","sannomiya_dinner","last_evening_return","last_evening_return","last_evening_return","last_evening_return"]},{"date":"2026-12-07","weekday":"周一","title":"返回香港","cities":["大阪","大阪府","香港"],"intensity":"清晨交通日","overnight":null,"departure_target":"05:15—05:25","hotel_return_target":null,"route_stop_ids":["hotel_osaka","nankai_shinimamiya","kix","hkg"],"timeline":[{"id":"checkout_osaka","time_label":"05:15—05:25","time_status":"planning_window","title":"退房离店，前往南海新今宫","place_ids":["hotel_osaka","nankai_shinimamiya"],"category":"hotel","time_hint":"离店窗口","condition":"早餐前晚备好，离店前或抵达机场后吃。"},{"id":"airport_train","time_label":"05:47→06:28，临行复核","time_status":"current_timetable_candidate","title":"南海新今宫→关西机场","place_ids":["nankai_shinimamiya","kix"],"category":"transport"},{"id":"airport_checkin","time_label":"到机场后","time_status":"planning_window","title":"T1查看柜台、值机托运与出境","place_ids":["kix"],"category":"activity","condition":"到站后前往T1，办理值机、托运、安检与出境。当前值机截止09:10日本时间；按登机牌时限到登机口。"},{"id":"flight_home","time_label":"09:50 日本→13:40 香港","time_status":"booked","title":"HX617 · 关西T1 → 香港T1","place_ids":["kix","hkg"],"category":"flight","booking_id":"flight_home"}],"meals":{"breakfast":{"primary":"前晚备好，离店前或抵达机场后吃"}},"transport_notes":["南海与JR新今宫入口分开识别。","具体班次、航站楼和登机信息临行确认。","抵达机场站后前往T1值机、托运、安检和出境；HX617于09:50日本时间起飞，现行柜台截止09:10，登机时限看登机牌。"],"optional":[],"fallback_rules":["错过候选班次时立即查下一班关西机场方向列车；停运或无法在值机截止前完成手续时，向站员确认替代交通，并联系航司。"],"dining_recommendations":{"meals":[["早餐","首选","前夜に用意した朝食","按购买菜单","离店前或到机场后","前晚备好面包、饭团或饮品。",""]],"optional":[],"along_route":{}},"visit_details":{"airport_checkin":{"title":"机场手续与截止时间","items":[{"text":"香港航空官网现列关西T1、起飞前40分钟停止值机；按09:50起飞计算为09:10日本时间。该时刻是截止线，不是到机场目标。临行复核航司通知，柜台与登机口看当天屏幕。","url":"https://content.hongkongairlines.com/en_US/airport-information/worldwide/airportinfo"}]}}}],"pending_checks":["购买两张12/4 USJ普通门票；临行复核检修、演出场次和09:00—19:00营业时间。","出发前7—10天查叶况，48—72小时前查天气，必要时减少户外项目。","核对餐厅营业与菜单。","12/6和牛自助预算不超过¥6,000/人；选定三宫餐厅，核对套餐、用餐时长与17:30前后入店时段并订位。复核北野及三宫店铺营业、大桥天气。","出发前核对往返航司通知、值机截止；12/6再复核翌日南海时刻表与运行信息。","12/2高台寺：查看天气、叶况与排队情况。","12/1确认きく午间营业、中村藤吉受理时间与候位；平和书店营业、京阿尼库存及京阪车站联动展示位置。","12/1集章：用Safari或Chrome登录活动账户，检查联网、定位权限与点位公告。"],"visualization_rules":["每日主线按route_stop_ids顺序；可选项默认不画进必走路线，酒店和车站重复出现是实际回程，不去重。","coordinates为空表示尚未地理编码；只提供地图搜索入口，不编造经纬度、距离、步数或实际导航轨迹。","地图搜索点位仍需核准，尤其长椅、登山口、景区入口和大型车站。","timeline的time_label是规划时间窗口，不代表预约；12/4 USJ官方营业09:00—19:00，约07:00为计划离店时间。","航班使用含UTC偏移的时间，不能用11:25至16:00直接相减作为飞行时长。","可选活动替换主线时应用replaces_event_ids；日本桥替换店铺、泡汤按条件启用，不累加全部备选。","天气条件、购票状态和临行待确认项必须随可视化保留。"],"night_foliage":{"place_id":"kodaiji","visit_date":"2026-12-02","event_start":"2026-10-23","event_end":"2026-12-13","illumination_start":"17:00","last_entry":"21:30","close":"22:00","adult_price_jpy":800,"two_adults_jpy":1600,"checked_on":"2026-09-28","booking_status":"purchase_not_confirmed","source":"https://www.kodaiji.com/saiji.html","price_source":"https://www.kodaiji.com/haikan.html","note":"活动日期不保证红叶盛期；昼夜不清场，出场同票不能再次进入。"},"pilgrimage_reference_file":"博客仓库/kansai-src/pilgrimage.json","pilgrimage_checked_on":"2026-10-01","pilgrimage_points":[{"id":"eupho_uji_bridge","place_ids":["uji_bridge"],"date":"2026-12-01","event_id":"uji_lunch_walk","title":"宇治桥 · 桥上栏杆","work":"吹响！上低音号","coordinates":{"lat":34.892948,"lng":135.806267,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji007_uji.php","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_uji_shrine","place_ids":["uji_shrine"],"date":"2026-12-01","event_id":"uji_shrines","title":"宇治神社 · 临河鸟居","work":"吹响！上低音号","coordinates":{"lat":34.891048,"lng":135.810682,"precision":"神社地点定位；鸟居在临河入口","source_url":"https://mapfan.com/spots/SC3W3%2CJ%2CGR","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_sawarabi","place_ids":["ujigami"],"date":"2026-12-01","event_id":"uji_shrines","title":"宇治上神社前 · 早蕨之道","work":"吹响！上低音号","coordinates":{"lat":34.89195,"lng":135.811289,"precision":"神社地点定位；机位在门外道路","source_url":"https://mapfan.com/spots/SCAHY%2CJ%2C2","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_daikichi","place_ids":["daikichi"],"date":"2026-12-01","event_id":"daikichi_visit","title":"大吉山展望台 · 栏杆转角","work":"吹响！上低音号","coordinates":{"lat":34.892874,"lng":135.812742,"precision":"展望台定位；不是山顶或登山口","source_url":"https://yakei-world.com/spot_view.php?spot=1857","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_asagiri","place_ids":["asagiri"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"朝雾桥 · 红色桥栏","work":"吹响！上低音号","coordinates":{"lat":34.890189,"lng":135.809394,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji006_asagiri.php","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_kisen","place_ids":["kisen"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"喜撰桥 · 红色栏杆","work":"吹响！上低音号","coordinates":{"lat":34.888178,"lng":135.809929,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji003_kisen.php","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_bench","place_ids":["bench"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"久美子长椅 · 井川用水机站前","work":"吹响！上低音号","coordinates":{"lat":34.88959,"lng":135.8084,"precision":"长椅地点定位；与探访地图及公开街景位置交叉核对","source_url":"https://www.animepilgrimage.com/ja/maps/place/967abfaf-4a36-4e9e-8fe0-a148c5c55c5c","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_omotesando","place_ids":["byodoin_approach"],"date":"2026-12-01","event_id":"uji_approach","title":"平等院表参道 · 沿途街景","work":"吹响！上低音号","coordinates":{"lat":34.891084,"lng":135.806445,"precision":"表参道区域定位；具体动画站位未核","source_url":"https://www.kyoto-kankou.or.jp/info_search/6709","verified":"地点级来源已核；不是摄影站位"}},{"id":"eupho_saizeriya_uji","place_ids":["saizeriya_uji"],"date":"2026-12-01","event_id":"uji_saizeriya_dinner","title":"萨莉亚宇治里尻店","work":"吹响！上低音号 · 誓言的终章"},{"id":"eupho_jr_uji","place_ids":["jr_uji"],"date":"2026-12-01","event_id":"uji_return","title":"JR宇治站前 · 茶壶邮筒","work":"吹响！上低音号","coordinates":{"lat":34.890349,"lng":135.800967,"precision":"茶壶邮筒地点定位；非摄影站位","source_url":"https://www.postmap.org/map/2021","verified":"地点级来源已核；不是摄影站位"}},{"id":"kyoto-stage-stairs","place_ids":["kyoto_stage"],"date":"2026-12-01","event_id":"station_stage","title":"大阶梯前 · 车站音乐会","work":"吹响！上低音号 2","coordinates":{"lat":34.986077,"lng":135.758628,"precision":"室町小路广场参考点；楼层依官方4F说明，非厘米级机位","source_url":"https://yakei.jp/japan/spot.php?i=kyoto-muromachi"}},{"id":"kyoto-stage-clock","place_ids":["kyoto_stage"],"date":"2026-12-01","event_id":"station_stage","title":"大阶梯边 · 红框时钟","work":"吹响！上低音号 2","coordinates":{"lat":34.986077,"lng":135.758628,"precision":"室町小路广场参考点；楼层依官方4F说明，非厘米级机位","source_url":"https://yakei.jp/japan/spot.php?i=kyoto-muromachi"}},{"id":"demachi-west-gate","place_ids":["demachi"],"date":"2026-12-02","event_id":"demachi_visit","title":"商店街西入口 · 兔子山招牌","work":"玉子市场","coordinates":{"lat":35.03032,"lng":135.769609,"precision":"商店街地图POI；不是入口或吊鱼精确站位","source_url":"https://map.yahoo.co.jp/v3/place/ND9uBYsasCs"}},{"id":"demachi-fish","place_ids":["demachi"],"date":"2026-12-02","event_id":"demachi_visit","title":"商店街内部 · 吊鱼与拱廊","work":"玉子市场","coordinates":{"lat":35.03032,"lng":135.769609,"precision":"商店街地图POI；不是入口或吊鱼精确站位","source_url":"https://map.yahoo.co.jp/v3/place/ND9uBYsasCs"}},{"id":"delta-tamako","place_ids":["delta"],"date":"2026-12-02","event_id":"delta_visit","title":"高野川侧飞石 · 玉子与饼藏","work":"玉子爱情故事","coordinates":{"lat":35.02982,"lng":135.771683,"precision":"鸭川三角洲区域参考点；不是告白石块的精确坐标","source_url":"https://travel.yahoo.co.jp/kanko/spot-00036996/"}},{"id":"delta-kon","place_ids":["delta"],"date":"2026-12-02","event_id":"delta_visit","title":"鸭川飞石 · 轻音OP","work":"轻音少女 第1季","coordinates":{"lat":35.029425,"lng":135.771339,"precision":"巡礼作者地图参考点，非经测量的OP摄影站位","source_url":"https://keyboar.hatenablog.com/entry/20100918/1284742598"},"shooting_note":"从贺茂川侧飞石朝东拍中洲，与《玉子》告白位置分开。玉子点位优先，余量不足就省此机位，不延误京阪换乘。"},{"id":"kiyomizu-conan","place_ids":["kiyomizu"],"date":"2026-12-02","event_id":"kiyomizu_visit","title":"清水舞台 · 新一与小兰","work":"名侦探柯南：红之校外旅行","coordinates":{"lat":34.994822,"lng":135.784915,"precision":"文化厅清水寺本堂建筑参考点；不是新兰栏杆合影机位","source_url":"https://kunishitei.bunka.go.jp/heritage/detail/102/1729"}},{"id":"senren-sannenzaka","place_ids":["sannenzaka"],"date":"2026-12-02","event_id":"higashiyama_walk","title":"三年坂·穗织街景","work":"千恋＊万花","coordinates":{"lat":34.997747,"lng":135.781049,"precision":"玩家地图参考点；邻近街段级，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者文章内嵌地图的公开KML，名称「産寧坂」，coordinates=135.7810494,34.9977472,0；另与街段坐标表交叉核对。","crosscheck_url":"https://visual.information.jp/blog/2012/12/01/201212-article_1/"}},{"id":"senren-ninenzaka","place_ids":["ninenzaka"],"date":"2026-12-02","event_id":"higashiyama_walk","title":"二年坂·街角店铺","work":"千恋＊万花","coordinates":{"lat":34.998032,"lng":135.780737,"precision":"玩家地图参考点；街角附近，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者文章内嵌地图公开KML，名称「二年坂」，coordinates=135.7807374,34.998032,0；与二年坂01街段标点34.998,135.7808交叉核对。","crosscheck_url":"https://visual.information.jp/blog/2012/12/01/201212-article_1/"}},{"id":"conan-tsutenkaku","place_ids":["shinsekai"],"date":"2026-12-03","event_id":"shinsekai_dinner","title":"通天阁·天空楼阁","work":"名侦探柯南：世纪末的魔术师","coordinates":{"lat":34.6525,"lng":135.506302,"precision":"通天阁建筑级坐标；不是电影摄影站位","source_url":"https://www.latlong.net/place/ts-tenkaku-japan-22689.html","evidence":"LatLong列出通天阁34.652500,135.506302；与维基百科34.6525361,135.5063250相符至建筑范围。","crosscheck_url":"https://ja.wikipedia.org/wiki/通天閣"}},{"id":"conan-ebisubashi","place_ids":["glico"],"date":"2026-12-05","event_id":"glico_photo","title":"戎桥·恋爱的暗号","work":"名侦探柯南","coordinates":{"lat":34.669074,"lng":135.50129,"precision":"戎桥地点级坐标；不是平次站位或摄影站位","source_url":"https://heritage.jsce-kansai.net/heritage/detail.html?id=236","evidence":"土木学会关西支部土木遗产DB：戎橋 緯度・経度34.669074,135.501290。该记录说明历史桥梁，不用于声称现桥构造年代。"}},{"id":"senren-ikuta","place_ids":["ikuta"],"date":"2026-12-06","event_id":"ikuta_visit","title":"生田神社·建实神社外观","work":"千恋＊万花","coordinates":{"lat":34.694574,"lng":135.190777,"precision":"玩家地图参考点；拝殿前区域，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者公开KML名称「生田神社」，coordinates=135.1907772,34.694574,0。神社地点另由國學院大學神社DB确认，DB中心点为34°41′42.0″N、135°11′27.1″E，非摄影位置。","crosscheck_url":"https://kojiki.kokugakuin.ac.jp/jinjya/ikutajinja/"}},{"id":"witch-kitano","place_ids":["starbucks_kitano"],"date":"2026-12-06","event_id":"kitano_lunch","title":"北野物语馆 · 七绪咖啡店","work":"魔女的夜宴／サノバウィッチ","coordinates":null},{"id":"fate-kobe-bridge","place_ids":["kobe_bridge"],"date":"2026-12-06","event_id":"kobe_bridge_visit","title":"神户大桥 · 冬木大桥","work":"Fate/stay night","coordinates":null}],"food_updated_on":"2026-09-30","flight_sources":["https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6","https://www.kansai-airport.or.jp/en/flight/airlines","https://content.hongkongairlines.com/en_US/airport-information/worldwide/airportinfo"],"uji_rally":{"checked_on":"2026-10-01","early":{"start":"2026-09-01","end":"2026-10-31","spots":["井川用水機場前","宇治橋","大吉山展望台"]},"late":{"start":"2026-11-01","end":"2026-12-20","spots":["宇治川河川敷（水管橋）","縣神社","許波多神社（五ケ庄）"]},"selection":"12/1 09:00离店，JR宇治进出；上午中村藤吉，午饭后西岸巡礼、过桥登山，白天先水管桥再逛书店。縣神社→水管桥顺路领章，不要求集满；回京都后到4F《宝岛》舞台，约20:15—20:35返店。","source_url":"https://www.keihan.co.jp/euphonium/"},"additional_checks":[{"id":"kyoto-tower-20261003","text":"准备京都塔门票；入住京都时确认退房寄存和取件方式。"},{"id":"castle-nara-20261003","text":"12/5复核森之宫经鹤桥到近铁奈良的班次、大佛殿营业及日本桥目标分店关门时间。"}],"visit_budget":[{"place_id":"kyoto_tower","date":"2026-12-03","adult_jpy":1000,"two_adults_jpy":2000,"status":"未购票","source":"https://www.kyoto-tower.jp/event/eupho26autumn/"},{"place_id":"todaiji","date":"2026-12-05","adult_jpy":800,"two_adults_jpy":1600,"status":"购买状态待确认；默认保留内部参观","source":"https://www.todaiji.or.jp/information/haikan/"},{"place_id":"sannomiya_center","date":"2026-12-06","item":"和牛自助晚餐","adult_jpy":null,"two_adults_jpy":null,"status":"预算上限¥6,000/人；餐厅待选、未订位","budget_max_jpy_per_person":6000,"budget_max_jpy_two_adults":12000}]};const PHOTOS={"byodoin":{"sight":"平等院凤凰堂","file":"Kyoto-Byodoin Phoenix Hall-xl.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Kyoto-Byodoin_Phoenix_Hall-xl.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Kyoto-Byodoin_Phoenix_Hall-xl.jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Kyoto-Byodoin_Phoenix_Hall-xl.jpg","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Kyoto-Byodoin_Phoenix_Hall-xl.jpg","upstream":"https://search.find47.jp/ja/i/TaJrU","author":"ganden","license":"CC BY 4.0","licenseUrl":"https://creativecommons.org/licenses/by/4.0/","date":"2017-12-23","width":1100,"height":733,"notes":"Native 3:2; documentary winter scene.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"平等院凤凰堂 — ganden / Wikimedia Commons / CC BY 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing.","local":"assets/byodoin.jpg","resolvedUrl":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Kyoto-Byodoin_Phoenix_Hall-xl.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/928df9c10ea52ab1.jpg","thumbnail":"assets/928df9c10ea52ab1-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"inari":{"sight":"伏见稻荷大社","file":"Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg","upstream":null,"author":"Basile Morin","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2019-06-10","width":1100,"height":733,"notes":"Native 3:2; Wikimedia featured photograph of exact Senbontorii path.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"伏见稻荷大社 — Basile Morin / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/inari.jpg","resolvedUrl":"https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/68d847cb2ad0fc0d.jpg","thumbnail":"assets/68d847cb2ad0fc0d-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"uji_bridge":{"sight":"宇治桥","file":"Uji-Bridge.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Uji-Bridge.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Uji-Bridge.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Uji-Bridge.jpg","upstream":null,"author":"京都東","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2023-06-19","width":1100,"height":825,"notes":"4:3. Correct Uji, Kyoto bridge; do not confuse with Uji Bridge at Ise Grand Shrine.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"宇治桥 — 京都東 / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/uji_bridge.jpg","resolvedUrl":"https://upload.wikimedia.org/wikipedia/commons/3/3f/Uji-Bridge.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/eac5cfbabcfa47d8.jpg","thumbnail":"assets/eac5cfbabcfa47d8-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"kiyomizu":{"sight":"清水寺","file":"Kiyomizu-dera, Kyoto, November 2016 -01.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg","upstream":null,"author":"Martin Falbisoner","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2016-11-16","width":960,"height":591,"notes":"Near 3:2; autumn photograph from 2016, not 2026 leaf conditions.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"清水寺 — Martin Falbisoner / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/kiyomizu.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg/960px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-01.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/b4a251dcccaf8df7.jpg","thumbnail":"assets/b4a251dcccaf8df7-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":394},"usj":{"sight":"日本环球影城","file":"USJ Entrance - 2020-01-01.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:USJ_Entrance_-_2020-01-01.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/2/25/USJ_Entrance_-_2020-01-01.jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/2/25/USJ_Entrance_-_2020-01-01.jpg","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/USJ_Entrance_-_2020-01-01.jpg","upstream":null,"author":"RareButterflyDoors","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2020-01-01","width":960,"height":540,"notes":"16:9 entrance view; modest horizontal crop for 3:2. Photographer name is as currently listed on source; uploader history name KSEnceCade.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"日本环球影城 — RareButterflyDoors / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/usj.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/USJ_Entrance_-_2020-01-01.jpg/960px-USJ_Entrance_-_2020-01-01.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/8db3669fa3c3442a.jpg","thumbnail":"assets/8db3669fa3c3442a-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"nara_park":{"sight":"奈良公园","file":"Deer at Nara.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Deer_at_Nara.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/1/1e/Deer_at_Nara.jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/1/1e/Deer_at_Nara.jpg","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Deer_at_Nara.jpg","upstream":null,"author":"Lawsonstu","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/","date":"2012-07-15","width":960,"height":720,"notes":"4:3 full-body deer at Nara Park; crop carefully to preserve deer. Attribution voluntary under CC0.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"奈良公园 — Lawsonstu / Wikimedia Commons / CC0 1.0","reuse":"Public-domain or CC0 image; credit retained for traceability.","local":"assets/nara_park.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Deer_at_Nara.jpg/960px-Deer_at_Nara.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/69b37929185924c6.jpg","thumbnail":"assets/69b37929185924c6-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"ikuta":{"sight":"生田神社","file":"Ikuta Shrine, Kobe City; April 2017 (08).jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Ikuta_Shrine%2C_Kobe_City%3B_April_2017_(08).jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Ikuta_Shrine%2C_Kobe_City%3B_April_2017_(08).jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Ikuta_Shrine%2C_Kobe_City%3B_April_2017_(08).jpg","upstream":"https://www.flickr.com/photos/65947222@N00/34601743970/","author":"Wei-Te Wong","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/","date":"2017-04-08","width":960,"height":640,"notes":"Native 3:2; torii groups at exact Ikuta Shrine.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"生田神社 — Wei-Te Wong / Wikimedia Commons / CC BY-SA 2.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/ikuta.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Ikuta_Shrine%2C_Kobe_City%3B_April_2017_%2808%29.jpg/960px-Ikuta_Shrine%2C_Kobe_City%3B_April_2017_%2808%29.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/00ac8cefb44b3845.jpg","thumbnail":"assets/00ac8cefb44b3845-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"tofukuji":{"sight":"东福寺","file":"Tofukuji Kyoto01bs3200.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Tofukuji_Kyoto01bs3200.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Tofukuji_Kyoto01bs3200.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Tofukuji_Kyoto01bs3200.jpg","upstream":null,"author":"663highland","license":"CC BY 2.5","licenseUrl":"https://creativecommons.org/licenses/by/2.5/","date":"2009-11-28","width":960,"height":640,"notes":"Native 3:2 Tsuten Bridge amid autumn leaves. Source offers multiple licenses; select CC BY 2.5.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"东福寺 — 663highland / Wikimedia Commons / CC BY 2.5","reuse":"Credit author, link source and license, indicate cropping/resizing.","local":"assets/tofukuji.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Tofukuji_Kyoto01bs3200.jpg/960px-Tofukuji_Kyoto01bs3200.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/f7884018c5d4e676.jpg","thumbnail":"assets/f7884018c5d4e676-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"uji_shrine":{"sight":"宇治神社","file":"宇治神社 本殿.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE_%E6%9C%AC%E6%AE%BF.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE_%E6%9C%AC%E6%AE%BF.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE_%E6%9C%AC%E6%AE%BF.jpg","upstream":null,"author":"Saigen Jiro","license":"Public domain (author release)","licenseUrl":null,"date":"2012-03-25","width":960,"height":720,"notes":"4:3 honden at Uji Shrine. Author explicitly released worldwide, with unconditional permission fallback.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"宇治神社 — Saigen Jiro / Wikimedia Commons / Public domain (author release)","reuse":"Public-domain or CC0 image; credit retained for traceability.","local":"assets/uji_shrine.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE_%E6%9C%AC%E6%AE%BF.jpg/960px-%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE_%E6%9C%AC%E6%AE%BF.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/463ffc01ccae4988.jpg","thumbnail":"assets/463ffc01ccae4988-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"ujigami":{"sight":"宇治上神社","file":"Ujigami shrine.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Ujigami_shrine.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Ujigami_shrine.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Ujigami_shrine.jpg","upstream":null,"author":"Ctny","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2017-08-31","width":960,"height":536,"notes":"Wide landscape photo of Haiden at Ujigami Shrine.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"宇治上神社 — Ctny / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/ujigami.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Ujigami_shrine.jpg/960px-Ujigami_shrine.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/beb640c920449df9.jpg","thumbnail":"assets/beb640c920449df9-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":357},"todaiji":{"sight":"东大寺","file":"Todai-ji, Daibutsuden (Graet Buddha Hall) -1 (May 2009) - panoramio.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Todai-ji%2C_Daibutsuden_(Graet_Buddha_Hall)_-1_(May_2009)_-_panoramio.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Todai-ji%2C_Daibutsuden_(Graet_Buddha_Hall)_-1_(May_2009)_-_panoramio.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Todai-ji%2C_Daibutsuden_(Graet_Buddha_Hall)_-1_(May_2009)_-_panoramio.jpg","upstream":"https://web.archive.org/web/20161102073352/http://www.panoramio.com/photo/128380973","author":"ttshr1970","license":"CC BY 3.0","licenseUrl":"https://creativecommons.org/licenses/by/3.0/","date":"2009-05-14","width":960,"height":640,"notes":"Native 3:2 Daibutsuden exterior. Filename intentionally contains original spelling Graet.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"东大寺 — ttshr1970 / Wikimedia Commons / CC BY 3.0","reuse":"Credit author, link source and license, indicate cropping/resizing.","local":"assets/todaiji.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Todai-ji%2C_Daibutsuden_%28Graet_Buddha_Hall%29_-1_%28May_2009%29_-_panoramio.jpg/960px-Todai-ji%2C_Daibutsuden_%28Graet_Buddha_Hall%29_-1_%28May_2009%29_-_panoramio.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/10d2edd29701c83e.jpg","thumbnail":"assets/10d2edd29701c83e-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"sky":{"sight":"梅田蓝天大厦","file":"Umeda Sky Building, Osaka, November 2016 -02.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Umeda_Sky_Building%2C_Osaka%2C_November_2016_-02.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Umeda_Sky_Building%2C_Osaka%2C_November_2016_-02.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Umeda_Sky_Building%2C_Osaka%2C_November_2016_-02.jpg","upstream":null,"author":"Martin Falbisoner","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2016-11-15","width":960,"height":622,"notes":"Near 3:2; architectural escalator and upper connection view, not skyline panorama.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"梅田蓝天大厦 — Martin Falbisoner / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/sky.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Umeda_Sky_Building%2C_Osaka%2C_November_2016_-02.jpg/960px-Umeda_Sky_Building%2C_Osaka%2C_November_2016_-02.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/76b45fb18b3f2554.jpg","thumbnail":"assets/76b45fb18b3f2554-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":415},"kyoto_tower":{"sight":"京都塔","file":"Kyototower.JPG","sourcePage":"https://commons.wikimedia.org/wiki/File:Kyototower.JPG","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Kyototower.JPG","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Kyototower.JPG","upstream":null,"author":"Canan","license":"Public domain (author release)","licenseUrl":null,"date":"2010-04-24","width":960,"height":640,"notes":"Native 3:2. Source photographer recorded as uploader; uploader Canan.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"京都塔 — Canan / Wikimedia Commons / Public domain (author release)","reuse":"Public-domain or CC0 image; credit retained for traceability.","local":"assets/kyoto_tower.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Kyototower.JPG/960px-Kyototower.JPG","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/b2b54847cc448f7e.jpg","thumbnail":"assets/b2b54847cc448f7e-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"shinsekai":{"sight":"新世界・通天阁","file":"Shinsekai Tsutenkaku at night 2022-04-23.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Shinsekai_Tsutenkaku_at_night_2022-04-23.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Shinsekai_Tsutenkaku_at_night_2022-04-23.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Shinsekai_Tsutenkaku_at_night_2022-04-23.jpg","upstream":"https://www.flickr.com/photos/31029865@N06/52478865766/","author":"Dick Thomas Johnson","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0/","date":"2022-04-23","width":960,"height":640,"notes":"Native 3:2 Tsutenkaku viewed from Shinsekai at night.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"新世界・通天阁 — Dick Thomas Johnson / Wikimedia Commons / CC BY 2.0","reuse":"Credit author, link source and license, indicate cropping/resizing.","local":"assets/shinsekai.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Shinsekai_Tsutenkaku_at_night_2022-04-23.jpg/960px-Shinsekai_Tsutenkaku_at_night_2022-04-23.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/8e675326bb9649a8.jpg","thumbnail":"assets/8e675326bb9649a8-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"yasaka_tower":{"sight":"八坂之塔","file":"GIO - Yasaka Pagoda seen from Higashiyama near Gion, Kyoto, Japan, 2015.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:GIO_-_Yasaka_Pagoda_seen_from_Higashiyama_near_Gion%2C_Kyoto%2C_Japan%2C_2015.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/GIO_-_Yasaka_Pagoda_seen_from_Higashiyama_near_Gion%2C_Kyoto%2C_Japan%2C_2015.jpg","originalUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/GIO_-_Yasaka_Pagoda_seen_from_Higashiyama_near_Gion%2C_Kyoto%2C_Japan%2C_2015.jpg","upstream":null,"author":"Josep M. Gracia","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2015","width":730,"height":1100,"notes":"Portrait; source verified but poor 3:2 cover candidate. Use a portrait panel or find a wider alternative.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"八坂之塔 — Josep M. Gracia / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, link source and license, indicate cropping/resizing; keep adapted image under same license.","local":"assets/yasaka_tower.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/GIO_-_Yasaka_Pagoda_seen_from_Higashiyama_near_Gion%2C_Kyoto%2C_Japan%2C_2015.jpg/960px-GIO_-_Yasaka_Pagoda_seen_from_Higashiyama_near_Gion%2C_Kyoto%2C_Japan%2C_2015.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/e37e9d5dfb4cdf97.jpg","thumbnail":"assets/e37e9d5dfb4cdf97-640q82.jpg","thumbnailWidth":425,"thumbnailHeight":640},"demachi":{"sight":"出町桝形商店街","file":"RZ Demachi Masugata shopping street A.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:RZ_Demachi_Masugata_shopping_street_A.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/RZ_Demachi_Masugata_shopping_street_A.jpg","originalUrl":null,"thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/RZ_Demachi_Masugata_shopping_street_A.jpg","author":"Razgrad","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2018-09-09","width":960,"height":638,"notes":"Exact arcade photo; near 3:2. Source date and EXIF differ (EXIF 19 September); retain source date.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"出町桝形商店街 — Razgrad / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, source and license; indicate crop/resize; keep adapted image under same license.","local":"assets/demachi.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/RZ_Demachi_Masugata_shopping_street_A.jpg/960px-RZ_Demachi_Masugata_shopping_street_A.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/79094510f8766403.jpg","thumbnail":"assets/79094510f8766403-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":425},"delta":{"sight":"鸭川三角洲","file":"鴨川デルタ（北から見る）.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/d/df/%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/d/df/%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg","thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg","author":"Suginami","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2017-07-27","width":960,"height":720,"notes":"Exact Kamogawa delta seen from north; 4:3.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"鸭川三角洲 — Suginami / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, source and license; indicate crop/resize; keep adapted image under same license.","local":"assets/delta.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg/960px-%E9%B4%A8%E5%B7%9D%E3%83%87%E3%83%AB%E3%82%BF%EF%BC%88%E5%8C%97%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%EF%BC%89.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/64375b11896b05a3.jpg","thumbnail":"assets/64375b11896b05a3-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"kisen":{"sight":"喜撰桥","file":"Kisen bridge, Uji river.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Kisen_bridge%2C_Uji_river.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Kisen_bridge%2C_Uji_river.jpg","originalUrl":null,"thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Kisen_bridge%2C_Uji_river.jpg","author":"Motokoka","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","date":"2011-02-19","width":960,"height":720,"notes":"Exact Kisen bridge in Uji; source explicitly identifies 喜撰橋, not a generic bridge.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"喜撰桥 — Motokoka / Wikimedia Commons / CC BY-SA 4.0","reuse":"Credit author, source and license; indicate crop/resize; keep adapted image under same license.","local":"assets/kisen.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Kisen_bridge%2C_Uji_river.jpg/960px-Kisen_bridge%2C_Uji_river.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/cf02818f4e3b2976.jpg","thumbnail":"assets/cf02818f4e3b2976-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"asagiri":{"id":"asagiri","title":"Asagiri Bashi&Hikaru Genji statue.jpg","caption":"宇治朝雾桥与桥边雕像（作者原注：朝霧橋と光源氏像）","sourcePage":"https://commons.wikimedia.org/wiki/File:Asagiri_Bashi%26Hikaru_Genji_statue.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/c/cc/Asagiri_Bashi%26Hikaru_Genji_statue.jpg","thumbnailUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Asagiri_Bashi%26Hikaru_Genji_statue.jpg/960px-Asagiri_Bashi%26Hikaru_Genji_statue.jpg","author":"御影守駒氏","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","credit":"御影守駒氏 / Wikimedia Commons / CC BY-SA 4.0","captureDate":"2026-03-27","width":825,"height":1100,"exactLocationEvidence":"Author explicitly captions 朝霧橋と光源氏像; camera geotag 34.890594,135.809983, heading211.77°.","reuse":"Photo author releases own work under CC BY-SA4.0: credit, license link, mark any crop; adaptations under same/compatible license.","notes":"Portrait; inspect image and crop before use. Not a claim about autumn foliage. Direct URL observed from source link; binary fetch in research tool returned cache miss.","sight":"朝雾桥与桥边雕像","file":"Asagiri Bashi&Hikaru Genji statue.jpg","date":"2026-03-27","download":"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Asagiri_Bashi%26Hikaru_Genji_statue.jpg/960px-Asagiri_Bashi%26Hikaru_Genji_statue.jpg","local":"assets/asagiri.jpg","binaryDownloaded":true,"visualCropVerified":false,"visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/280c294a5ecbb72b.jpg","thumbnail":"assets/280c294a5ecbb72b-640q82.jpg","thumbnailWidth":480,"thumbnailHeight":640},"sannenzaka":{"sight":"三年坂","file":"Sannenzaka-kyoto.JPG","sourcePage":"https://commons.wikimedia.org/wiki/File:Sannenzaka-kyoto.JPG","imageUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Sannenzaka-kyoto.JPG/1280px-Sannenzaka-kyoto.JPG","originalUrl":null,"thumbnailUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Sannenzaka-kyoto.JPG/1280px-Sannenzaka-kyoto.JPG","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Sannenzaka-kyoto.JPG","author":"Aporon999","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/","date":"2013-05-08","width":1100,"height":732,"notes":"Near 3:2; observed 1280-pixel thumbnail URL, not guessed.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"三年坂 — Aporon999 / Wikimedia Commons / CC BY-SA 3.0","reuse":"Credit author, source and license; indicate crop/resize; keep adapted image under same license.","local":"assets/sannenzaka.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Sannenzaka-kyoto.JPG/1280px-Sannenzaka-kyoto.JPG","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/7ecfc074d10c562f.jpg","thumbnail":"assets/7ecfc074d10c562f-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"ninenzaka":{"sight":"二年坂","file":"Ninenzaka (30613009603).jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Ninenzaka_(30613009603).jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Ninenzaka_(30613009603).jpg","originalUrl":null,"thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Ninenzaka_(30613009603).jpg","author":"fw42","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0/","date":"2016-09-05","width":960,"height":640,"notes":"Native 3:2; exact Ninenzaka source file.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"二年坂 — fw42 / Wikimedia Commons / CC BY 2.0","reuse":"Credit author, source and license; indicate crop/resize.","local":"assets/ninenzaka.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Ninenzaka_%2830613009603%29.jpg/960px-Ninenzaka_%2830613009603%29.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/8bbace1543f4cffb.jpg","thumbnail":"assets/8bbace1543f4cffb-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"nene":{"sight":"宁宁之道","file":"Nene-no-michi Kyoto01n3200.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Nene-no-michi_Kyoto01n3200.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Nene-no-michi_Kyoto01n3200.jpg","originalUrl":null,"thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Nene-no-michi_Kyoto01n3200.jpg","author":"663highland","license":"CC BY 2.5","licenseUrl":"https://creativecommons.org/licenses/by/2.5/","date":"2009-02-21","width":960,"height":640,"notes":"Native 3:2; source explicitly identifies Nene-no-michi in Higashiyama. Multiple license options; select CC BY 2.5.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"宁宁之道 — 663highland / Wikimedia Commons / CC BY 2.5","reuse":"Credit author, source and license; indicate crop/resize.","local":"assets/nene.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Nene-no-michi_Kyoto01n3200.jpg/960px-Nene-no-michi_Kyoto01n3200.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/b10f1abd148ab76d.jpg","thumbnail":"assets/b10f1abd148ab76d-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"yasaka_shrine":{"sight":"八坂神社","file":"Yasaka Jinja.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Yasaka_Jinja.jpg","imageUrl":"https://commons.wikimedia.org/wiki/Special:FilePath/Yasaka_Jinja.jpg","originalUrl":null,"thumbnailUrl":null,"commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Yasaka_Jinja.jpg","author":"Tomomarusan","license":"CC BY 2.5","licenseUrl":"https://creativecommons.org/licenses/by/2.5/","date":"2005-08-06","width":960,"height":564,"notes":"Kyoto Yasaka Shrine western gate, explicitly Kyoto on page. Wide landscape; source offers multiple licenses.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"八坂神社 — Tomomarusan / Wikimedia Commons / CC BY 2.5","reuse":"Credit author, source and license; indicate crop/resize.","local":"assets/yasaka_shrine.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Yasaka_Jinja.jpg/960px-Yasaka_Jinja.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/fcaea1f4ada0b967.jpg","thumbnail":"assets/fcaea1f4ada0b967-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":376},"bench":{"sight":"久美子长椅实景","author":"b-arai / ビジネスリンクスナゴヤ","license":"原站版权；未标注开放许可","licenseUrl":null,"date":"拍摄日期未注明","sourcePage":"https://www.b-links.jp/kumikobennti/","download":"https://www.b-links.jp/wp/wp-content/uploads/2026/06/20260504_092827-1024x576.jpg","referenceOnly":true,"local":"assets/bench.jpg","binaryDownloaded":true,"width":640,"height":360,"visualCropVerified":false,"visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/bec8bec56ec9108f.jpg","thumbnail":"assets/bec8bec56ec9108f-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"daikichi":{"sight":"大吉山展望台所见宇治市景","author":"関西Photo / nottiphotobiker.com","license":"原站版权；未标注开放许可","licenseUrl":null,"date":"拍摄年份未注明，原文注明11月","sourcePage":"https://nottiphotobiker.com/kyotodaikitiyamaaki/","download":"https://nottiphotobiker.com/wp-content/uploads/2019/12/DSC01143.jpg","referenceOnly":true,"local":"assets/daikichi.jpg","binaryDownloaded":true,"width":640,"height":360,"visualCropVerified":false,"visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/8a07f50ad26b170e.jpg","thumbnail":"assets/8a07f50ad26b170e-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"dotonbori":{"sight":"道顿堀河道夜景","file":"Dotonbori Canal 1.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Dotonbori_Canal_1.jpg","imageUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Dotonbori_Canal_1.jpg/1280px-Dotonbori_Canal_1.jpg","originalUrl":null,"thumbnailUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Dotonbori_Canal_1.jpg/1280px-Dotonbori_Canal_1.jpg","commonsFileRedirect":"https://commons.wikimedia.org/wiki/Special:FilePath/Dotonbori_Canal_1.jpg","author":"Ray in Manila","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0/","date":"2017-05-15","width":1100,"height":619,"notes":"Wide documentary night view from Tazaemon Bridge of Dotonbori canal, not a Glico closeup. Use caption 道顿堀; do not imply it isolates Glico. Observed 1280 thumbnail. No deletion banner seen on file page.","sourceVerified":true,"binaryDownloaded":true,"visualCropVerified":false,"attribution":"道顿堀河道夜景 — Ray in Manila / Wikimedia Commons / CC BY 2.0","reuse":"Credit author, source and license; indicate crop/resize.","local":"assets/dotonbori.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Dotonbori_Canal_1.jpg/1280px-Dotonbori_Canal_1.jpg","changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用原许可。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/d16d793514cf69f5.jpg","thumbnail":"assets/d16d793514cf69f5-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"animate":{"id":"animate","exactName":"アニメイト大阪日本橋","caption":"animate 大阪日本桥店外观","address":"大阪府大阪市浪速区日本橋西1丁目1-3 池田ビル2号館1階・2階","sourcePage":"https://www.animate.co.jp/zh-tc/shop/nipponbashi/","officialLocationPage":"https://www.animate.co.jp/shop/nipponbashi/","imageUrl":"https://www.animate.co.jp/assets/uploads/2024/08/1728466603-52eb4b8d5aa79f0602954963003c88ed.jpg","alternateCurrentGalleryImageUrl":"https://www.animate.co.jp/assets/uploads/2024/08/1765503310-1ccef6f64a2f65372d25265cac2ee681.jpg","observedFrom":"图片搜索返回官方繁体页面的实景外观图；当前日文官方图库第一项也返回了备用地址。","photographer":null,"publisher":"株式会社アニメイト","credit":"图片来源：animate 官方店铺页 / ©animate Co., Ltd.","license":"未发现开放再利用许可；官方页标示 ©animate Co., Ltd.","captureDate":null,"publicationDate":null,"locationMatch":"当前官方页面对应大阪日本桥店1F/2F；外观包含 animate 蓝色店招，上层 Melonbooks 等邻店不代表本店占用整栋。","sight":"animate 大阪日本桥店外观","author":"株式会社アニメイト","date":"拍摄日期未注明","local":"assets/animate.jpg","width":720,"height":480,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/b27a256caa482e7a.jpg","thumbnail":"assets/b27a256caa482e7a-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"surugaya_main":{"id":"surugaya_main","forId":"suruga_main","aliases":["suruga"],"exactName":"駿河屋 大阪日本橋本館","caption":"骏河屋大阪日本桥本馆入口","sourcePage":"https://note.com/tomishima_h/n/n375c6ad56360","officialLocationPage":"https://www.suruga-ya.jp/feature/realstore/nihonbashi_main/index.html","imageUrl":"https://assets.st-note.com/img/1749224268-HwxQmz0iohWkSpr8TNVduOYj.jpg?width=1200","observedFrom":"图片搜索实际返回的本馆店面实拍；原文「駿河屋日本橋店(日本橋)」配图链接一致。","photographer":"冨島 宏樹（文章作者；未另署摄影者）","publisher":"note","credit":"冨島 宏樹 / note《【2025年版】レトロゲーマーのための大阪・日本橋の歩き方》","license":"未发现开放再利用许可。","captureDate":null,"publicationDate":"2025-06-07","locationMatch":"照片为蓝白本馆入口，与动漫馆2F/3F的平田大楼外观不同；官方本馆现址大阪市浪速区日本橋4丁目11-3。","notes":"1200px请求参数为原网页实际链接。可替换180px官方小图；由主代理下载视觉复核。","sight":"骏河屋大阪日本桥本馆入口","author":"冨島 宏樹（文章作者；未另署摄影者）","date":"拍摄日期未注明","local":"assets/surugaya_main.jpg","width":720,"height":540,"referenceOnly":true,"binaryDownloaded":true,"visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/ad4e983a7a3f7c0c.jpg","thumbnail":"assets/ad4e983a7a3f7c0c-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"surugaya":{"id":"surugaya","exactName":"スーパーポテト オタロード店","caption":"Super Potato Ota Road 店入口及同楼骏河屋招牌","address":"大阪市浪速区日本橋3-8-18 平田ビル1階","sourcePage":"https://maido-bob.osaka/spot/nihonbashi-ota-road/nihonbashi-ota-road-02/","officialLocationPage":"https://www.suruga-ya.jp/feature/realstore/otaroad/index.html","imageUrl":"https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2025/06/nihonbashi-ota-road-02.jpg","observedFrom":"图片搜索返回 Maido 来源的实体建筑外观，黄色 Super Potato 入口和楼上蓝色骏河屋招牌可见。","photographer":null,"publisher":"Maido","credit":"图片来源：Maido / nihonbashi-ota-road-02","license":"未发现开放再利用许可；摄影者未署名。","captureDate":null,"publicationDate":null,"locationMatch":"官方确认店址为平田ビル1F，骏河屋オタロード馆为同址2F/3F；不是其他城市Super Potato。","alternativeOfficialThumbnails":["https://www.superpotato.com/wp-content/uploads/2021/11/ota2-300x300.jpg","https://www.superpotato.com/wp-content/uploads/2021/11/ota1-1-300x300.jpg"],"alternativeCopyright":"官方页 Copyright2004–2024 J・Field Co., Ltd. All rights reserved；300px小图可供核对。","sight":"骏河屋御宅路动漫馆所在平田大楼（2—3楼）","author":"Maido","date":"拍摄日期未注明","local":"assets/potato.jpg","width":720,"height":504,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/721c7994e9a22025.jpg","thumbnail":"assets/721c7994e9a22025-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":448},"nintendo_osaka":{"id":"nintendo","exactName":"Nintendo OSAKA","caption":"Nintendo OSAKA 店内","address":"大阪市北区梅田3-1-1 LUCUA SOUTH 13F","sourcePage":"https://www.nintendo.com/jp/officialstore/index.html","imageUrl":"https://www.nintendo.com/jp/officialstore/img/info/info_slide_osaka_11.webp","alternateObservedImageUrl":"https://www.nintendo.com/jp/officialstore/img/info/info_slide_osaka_11.png","observedFrom":"官方 Nintendo OSAKA 段落店内图库第11项；图片搜索也返回相同图库的 PNG 版本并识别为店内实拍。","photographer":null,"publisher":"任天堂","credit":"图片来源：任天堂 Nintendo OSAKA 官方图库","license":"未发现开放再利用许可；官方实景宣传图，摄影者未署名。","captureDate":null,"publicationDate":null,"locationMatch":"官方现址核实 LUCUA SOUTH13F。2026-04-07 Japan-guide 现场报道确认同层Nintendo店为原大丸楼层延续商店。","alternative":{"imageUrl":"https://www.japan-guide.com/blog/matt/g/260407_lucuasouth_04.jpg","sourcePage":"https://www.japan-guide.com/blog/matt/260407.html","caption":"Nintendo OSAKA 店内林克展示与购物区","author":"Matt Evans（文章署名；无独立摄影署名）","publicationDate":"2026-04-07","captureDate":null,"license":"Copyright japan-guide.com All Rights Reserved."},"sight":"Nintendo OSAKA 店内","author":"任天堂","date":"拍摄日期未注明","local":"assets/nintendo_osaka.jpg","width":720,"height":405,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/d0e942217d4b2fef.jpg","thumbnail":"assets/d0e942217d4b2fef-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"pokemon_osaka":{"id":"pokemon","exactName":"ポケモンセンターオーサカ / Pokémon Center OSAKA","caption":"Pokémon Center OSAKA 店内互动展示","address":"大阪市北区梅田3-1-1 LUCUA SOUTH 13F","sourcePage":"https://www.japan-guide.com/blog/matt/260407.html","officialLocationPage":"https://shop.pokemon.co.jp/ja/shop/pokemoncenter-osaka/","imageUrl":"https://www.japan-guide.com/blog/matt/g/260407_lucuasouth_08.jpg","observedFrom":"图片搜索和文章实图链接均返回该地址；原图注为 An interactive display inside the Pokemon store。","photographer":"Matt Evans（文章署名；无独立摄影署名）","publisher":"japan-guide.com","credit":"Matt Evans / japan-guide.com；原文发表于2026-04-07","license":"Copyright japan-guide.com All Rights Reserved；无开放许可。","captureDate":null,"publicationDate":"2026-04-07","locationMatch":"现场报道明确为 LUCUA SOUTH13F，官方现址已核实；不是心斋桥 Pokémon Center OSAKA DX。","notes":"保留版权状态；可作为私人指南实景参考，公开发布时不能声称已获授权。官方新网站顶部图为商标，已排除。","sight":"Pokémon Center OSAKA 店内互动展示","author":"Matt Evans（文章署名；无独立摄影署名）","date":"拍摄日期未注明","local":"assets/pokemon_osaka.jpg","width":720,"height":480,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/cee9747b1c16b083.jpg","thumbnail":"assets/cee9747b1c16b083-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"kyoto_station":{"id":"kyoto_station","aliases":["station"],"exactName":"京都駅 中央コンコース","caption":"京都站中央大厅夜景","sourcePage":"https://commons.wikimedia.org/wiki/File:Night_in_Kyoto_Station.jpg","originalSource":"https://www.flickr.com/photos/rail02000/30576591210/","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Night_in_Kyoto_Station.jpg/1280px-Night_in_Kyoto_Station.jpg","observedFrom":"Commons Other resolutions1280×853 链接；原片5000×3333。","photographer":"Cheng-en Cheng","publisher":"Wikimedia Commons / Flickr","credit":"Cheng-en Cheng / Wikimedia Commons / CC BY-SA 2.0","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/","captureDate":"2016-10-17","publicationDate":"2016-11-09","width":1100,"height":733,"locationMatch":"Commons 分类为 Kyoto Station JR Line Central Gate / Central Concourse at night。","reuse":"署名、许可链接、注明裁切等修改；改编图适用相同或兼容许可。","sight":"京都站中央大厅夜景","author":"Cheng-en Cheng","date":"2016-10-17","local":"assets/kyoto_station.jpg","binaryDownloaded":true,"referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/66efaa8397e8fa3f.jpg","thumbnail":"assets/66efaa8397e8fa3f-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"hanamikoji":{"id":"hanamikoji","aliases":["hanami"],"exactName":"花見小路通","caption":"京都祇园花见小路","sourcePage":"https://commons.wikimedia.org/wiki/File:Hanamikoji_Dori.jpg","imageUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Hanamikoji_Dori.jpg/1280px-Hanamikoji_Dori.jpg","observedFrom":"Commons Other resolutions1280×960链接；原片4032×3024。","photographer":"Christophe95","publisher":"Wikimedia Commons","credit":"Christophe95 / Wikimedia Commons / CC BY-SA 4.0","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","captureDate":"2018-09-16","publicationDate":"2020-08-20","width":1100,"height":825,"locationMatch":"作者描述 Hanamikoji Dori in Kyoto；相机坐标35.002114,135.774781。","reuse":"署名、许可链接、注明裁切等修改；改编图适用相同或兼容许可。","sight":"京都祇园花见小路","author":"Christophe95","date":"2018-09-16","local":"assets/hanamikoji.jpg","binaryDownloaded":true,"referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/3f8b28e10a8b4738.jpg","thumbnail":"assets/3f8b28e10a8b4738-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"shirakawa":{"id":"shirakawa","exactName":"祇園白川","caption":"祇园白川沿岸町屋与河道","sourcePage":"https://wordpress.org/photos/photo/506a214832/","imageUrl":"https://pd.w.org/2026/06/506a2148326d5ab5.87869133-1153x1536.jpg","observedFrom":"WordPress Photo Directory Medium1153×1536 实际链接。","photographer":"Wajari Velasquez","publisher":"WordPress Photo Directory","credit":"Wajari Velasquez / WordPress Photo Directory / CC0","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/","captureDate":null,"publicationDate":"2026-06-04","width":826,"height":1100,"locationMatch":"作者替代文本明确 Kyoto historic Gion district / Shirakawa Canal及沿岸町屋。","reuse":"来源明确CC0；署名非强制但已提供。","notes":"竖幅，裁为横幅前需检查主体保留。","sight":"祇园白川沿岸町屋与河道","author":"Wajari Velasquez","date":"拍摄日期未注明","local":"assets/shirakawa.jpg","binaryDownloaded":true,"referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/ad2e2ed77ffe23a1.jpg","thumbnail":"assets/ad2e2ed77ffe23a1-640q82.jpg","thumbnailWidth":481,"thumbnailHeight":640},"potato":{"id":"superpotato","exactName":"スーパーポテト オタロード店","caption":"Super Potato Ota Road 店入口及同楼骏河屋招牌","address":"大阪市浪速区日本橋3-8-18 平田ビル1階","sourcePage":"https://maido-bob.osaka/spot/nihonbashi-ota-road/nihonbashi-ota-road-02/","officialLocationPage":"https://www.superpotato.com/shop/otaroad/","imageUrl":"https://maido-storage.oss-cn-hongkong.aliyuncs.com/maido/uploads/2025/06/nihonbashi-ota-road-02.jpg","observedFrom":"图片搜索返回 Maido 来源的实体建筑外观，黄色 Super Potato 入口和楼上蓝色骏河屋招牌可见。","photographer":null,"publisher":"Maido","credit":"图片来源：Maido / nihonbashi-ota-road-02","license":"未发现开放再利用许可；摄影者未署名。","captureDate":null,"publicationDate":null,"locationMatch":"官方确认店址为平田ビル1F，骏河屋オタロード馆为同址2F/3F；不是其他城市Super Potato。","alternativeOfficialThumbnails":["https://www.superpotato.com/wp-content/uploads/2021/11/ota2-300x300.jpg","https://www.superpotato.com/wp-content/uploads/2021/11/ota1-1-300x300.jpg"],"alternativeCopyright":"官方页 Copyright2004–2024 J・Field Co., Ltd. All rights reserved；300px小图可供核对。","sight":"Super Potato Ota Road 店入口及同楼骏河屋招牌","author":"Maido","date":"拍摄日期未注明","local":"assets/potato.jpg","width":720,"height":504,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/721c7994e9a22025.jpg","thumbnail":"assets/721c7994e9a22025-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":448},"glico":{"id":"glico","exactName":"道頓堀グリコサイン","caption":"戎桥旁格力高广告牌夜景","address":"大阪市中央区道頓堀1丁目10-4","sourcePage":"https://www.glico.com/jp/newscenter/pressrelease/47363/","officialLocationPage":"https://www.glico.com/jp/health/contents/glicosign/","imageUrl":"https://www.glico.com/assets/images/original/TOP__29.JPG","observedFrom":"图片搜索返回江崎格力高官方2025-11-05新闻稿的广告牌实景照片；包含实体广告牌与夜间环境，非独立标志。","photographer":null,"publisher":"江崎グリコ株式会社","credit":"图片来源：江崎格力高官方新闻稿（2025-11-05）","license":"未发现开放再利用许可；品牌官方实景图。","captureDate":null,"publicationDate":"2025-11-05","alternativeOfficialImage":{"imageUrl":"https://www.glico.com/assets/images/large/%E3%82%B0%E3%83%AA%E3%82%B3%E3%82%B5%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%E7%94%BB%E5%83%8F.jpg","sourcePage":"https://www.glico.com/jp/health/contents/glicosign/","notes":"官方景点页实际图片链接；需由主代理核对头图构图。"},"commonsReference":{"sourcePage":"https://commons.wikimedia.org/wiki/File:Dotonbori_Glico_LED_signs_at_3rd_November_2014.JPG","imageUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Dotonbori_Glico_LED_signs_at_3rd_November_2014.JPG/960px-Dotonbori_Glico_LED_signs_at_3rd_November_2014.JPG","photographer":"Tokumeigakarinoaoshima","captureDate":"2014-11-03","width":960,"height":1280,"declaredPhotoLicense":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/","rightsStatus":"不能视为已解决全部版权。文件自2026-06-03被提请删除，原因是广告牌底层跑步人物作品的版权；摄影作者CC0声明不涵盖该项争议。","notes":"确为广告牌近景但旧版上部标语；当前官方说明2022年6月曾更换上部Glico设计。仅保留为带明确状态的候选，不冒称清晰可复用素材。"},"locationMatch":"官方景点页与照片均明确道顿堀格力高广告牌；独立于道顿堀河道广景。","notes":"新闻稿为2025活动页面；图仅作地标资料照片，不能表示旅行当日广告内容。","sight":"戎桥旁格力高广告牌夜景","author":"江崎グリコ株式会社","date":"拍摄日期未注明","local":"assets/glico.jpg","width":720,"height":514,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/1a7392aa9bfde8aa.jpg","thumbnail":"assets/1a7392aa9bfde8aa-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":457},"kotosaka":{"sight":"琴坂入口与参道（新绿时节资料照）","author":"haru-remi / HEARTFUL TABLE","date":"拍摄日期未注明","sourcePage":"https://ameblo.jp/haru-remi/entry-12747941462.html","imageUrl":"https://stat.ameba.jp/user_images/20220612/22/haru-remi/1a/50/j/o1080081015132077340.jpg","license":"原作者版权；未标注开放许可","local":"assets/kotosaka.jpg","width":720,"height":540,"referenceOnly":true,"binaryDownloaded":true,"visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/1df986717f6b18c9.jpg","thumbnail":"assets/1df986717f6b18c9-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"hotel_kyoto":{"id":"hotel_kyoto","exactName":"TUNE STAY KYOTO","address":"京都市下京区七条通新町西入夷之町708","sourcePage":"https://travel.rakuten.co.jp/HOTEL/177977/CUSTOM/GW177977210201151550.html","officialLocationPage":"https://www.tune-stay.com/","imageUrl":"https://piecehotel.com/rakuten/tune-stay/img/top/topphoto_1_exterior.jpg","caption":"TUNE STAY KYOTO 酒店外观与入口","photographer":null,"publisher":"TUNE STAY KYOTO / PIECE HOTEL（酒店管理的乐天展示页）","license":"未发现开放再利用许可；版权由原权利人保留","captureDate":null,"publicationDate":null,"credit":"TUNE STAY KYOTO / PIECE HOTEL","locationMatch":"酒店原页明确列出夷之町708；exterior照片实际由官方品牌域名托管。","notes":"入口有 TUNE STAY KYOTO 标识，勿与独立 HIDEOUT 套房楼泛化混用。日期未知。","sight":"TUNE STAY KYOTO 酒店外观与入口","author":"TUNE STAY KYOTO / PIECE HOTEL（酒店管理的乐天展示页）","date":"拍摄日期未注明","local":"assets/hotel_kyoto.jpg","width":720,"height":360,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/9764349fcfd97fb6.jpg","thumbnail":"assets/9764349fcfd97fb6-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":320},"hotel_osaka":{"id":"hotel_osaka","exactName":"City Express by Marriott Osaka Shin-Imamiya","address":"大阪市西成区萩之茶屋1-2-7","sourcePage":"https://www.marriott.com/ja/hotels/osaxi-city-express-osaka-shin-imamiya/rooms/","officialLocationPage":"https://www.marriott.com/en-us/hotels/osaxi-city-express-osaka-shin-imamiya/overview/","imageUrl":"https://cache.marriott.com/is/image/marriotts7prod/xe-osaxi-exterior-entrance-22645%3AWide-Hor?fit=constrain&wid=1336","caption":"City Express by Marriott 大阪新今宫酒店入口","photographer":null,"publisher":"Marriott International","license":"未发现开放再利用许可；版权由原权利人保留","captureDate":null,"publicationDate":null,"credit":"City Express by Marriott Osaka Shin-Imamiya / Marriott International","locationMatch":"官方酒店代码 OSAXI 与萩之茶屋1-2-7地址一致；照片可见当前 City Express by Marriott 标识。","notes":"不是另一家 Osaka Namba Minami；不是旧品牌 FP Hotel 的照片。日期未知。","alternates":[{"imageUrl":"https://osaka-info.jp/spot/images/XE_OSAXI_Exterior_02.jpg","sourcePage":"https://osaka-info.jp/spot/city-express-osaka-shin-imamiya/","caption":"酒店入口外观（大阪观光局）","publisher":"大阪观光局","license":"未发现开放再利用许可"}],"sight":"City Express by Marriott 大阪新今宫酒店入口","author":"Marriott International","date":"拍摄日期未注明","local":"assets/hotel_osaka.jpg","width":720,"height":405,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/0ed3e1e948f3371c.jpg","thumbnail":"assets/0ed3e1e948f3371c-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"kix":{"id":"kix","exactName":"关西国际机场第一航站楼","sourcePage":"https://osaka-sirokichi.seesaa.net/article/500021010.html","imageUrl":"https://osaka-sirokichi.up.seesaa.net/image/DSC_0091-33593.JPG","caption":"关西国际机场 T1 四楼路边入口（2023 年 7 月）","photographer":"Osaka-Sirokichies Blog 作者（署名 Osaka-Sirokichi）","publisher":"Osaka-Sirokichies Blog","license":"未发现开放再利用许可；原作者版权保留","captureDate":"2023-07","publicationDate":"2023-07-16","credit":"Osaka-Sirokichies Blog","locationMatch":"第一人称访问记录明确写关西国际机场第一ターミナル，照片为航站楼四楼车道侧入口。","notes":"2023年纪实外观，不表示2026年内部装修改造后的状况。","sight":"关西国际机场 T1 四楼路边入口（2023 年 7 月）","author":"Osaka-Sirokichies Blog 作者（署名 Osaka-Sirokichi）","date":"2023-07","local":"assets/kix.jpg","width":720,"height":480,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/bf906f0b235134d2.jpg","thumbnail":"assets/bf906f0b235134d2-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"jr_shinimamiya":{"id":"jr_shinimamiya_recent","targetId":"jr_shinimamiya","exactName":"JR 西日本 新今宫站西口检票口","sourcePage":"https://commons.wikimedia.org/wiki/File:JRW_Shin-Imamiya-STA_West-Gate.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/JRW_Shin-Imamiya-STA_West-Gate.jpg/1280px-JRW_Shin-Imamiya-STA_West-Gate.jpg","caption":"JR 新今宫站西口检票口（2023 年 12 月）","photographer":"MaedaAkihiko","publisher":"Wikimedia Commons","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/","captureDate":"2023-12-09","publicationDate":"2023-12-15","credit":"MaedaAkihiko / Wikimedia Commons / CC0","locationMatch":"原拍者说明明确 JR西日本・新今宮駅の西口改札；实际图片链接在 Commons 分类搜索中观察。","notes":"可替换2013月台照片。Commons网页经Python只读请求成功核实作者、日期与CC0，web正文抓取失败不影响元数据核实。","sight":"JR 新今宫站西口检票口（2023 年 12 月）","author":"MaedaAkihiko","date":"2023-12-09","local":"assets/jr_shinimamiya.jpg","width":960,"height":640,"binaryDownloaded":true,"resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/JRW_Shin-Imamiya-STA_West-Gate.jpg/960px-JRW_Shin-Imamiya-STA_West-Gate.jpg","referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/be8ade6c839d48a7.jpg","thumbnail":"assets/be8ade6c839d48a7-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"nankai_shinimamiya":{"id":"nankai_shinimamiya","exactName":"南海 新今宫站","sourcePage":"https://www.nankai.co.jp/community/station/shinimamiya.html","imageUrl":"https://www.nankai.co.jp/sites/default/files/2026-03/machi_shinimamiya_list.jpg","caption":"南海新今宫站检票口","photographer":null,"publisher":"南海电气铁道","license":"© NANKAI Co.,Ltd. All Rights Reserved；未发现开放许可","captureDate":null,"publicationDate":null,"credit":"NANKAI","locationMatch":"南海官方站点页面所用实景图；画面有 NANKAI SHIN-IMAMIYA STN. 双语牌。","notes":"图片路径的2026-03不是已核定的拍摄日期；日期未知。","sight":"南海新今宫站检票口","author":"南海电气铁道","date":"拍摄日期未注明","local":"assets/nankai_shinimamiya.jpg","width":600,"height":400,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/5330c63a02f0d27a.jpg","thumbnail":"assets/5330c63a02f0d27a-640q82.jpg","thumbnailWidth":600,"thumbnailHeight":400},"jr_uji":{"id":"jr_uji","exactName":"JR 西日本 宇治站","sourcePage":"https://www.japan-travel-note.com/posts/141","imageUrl":"https://cdn.japan-travel-note.com/images/00141/01.jpg","caption":"JR 宇治站站房","photographer":null,"publisher":"Japan Travel Note","license":"未发现开放再利用许可；版权由原权利人保留","captureDate":null,"publicationDate":"2025-04-30","credit":"Japan Travel Note","locationMatch":"作者实地路线首站明确为 JR Uji Station；图中 JR 标志、宇治駅与 UJI STATION 站牌一致。","notes":"不是京阪宇治站。拍摄日期未知；文章为第一人称步行游记。","sight":"JR 宇治站站房","author":"Japan Travel Note","date":"拍摄日期未注明","local":"assets/jr_uji.jpg","width":720,"height":405,"binaryDownloaded":true,"referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/6ac298b40718956a.jpg","thumbnail":"assets/6ac298b40718956a-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"jr_nara":{"id":"jr_nara","exactName":"JR 西日本 奈良站","sourcePage":"https://commons.wikimedia.org/wiki/File:JR_Nara_Station_building_2013-03-02.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/e/e6/JR_Nara_Station_building_2013-03-02.jpg","caption":"JR 奈良站高架站房（2013 年实拍）","photographer":"Satoshi KAYA (kayakaya)","publisher":"Wikimedia Commons / Flickr","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/","captureDate":"2013-03-02","publicationDate":"2016-02-21","credit":"Satoshi KAYA / Wikimedia Commons / CC BY-SA 2.0","locationMatch":"Commons明确归为2010年启用高架站房；不是旧寺院式站房改成的游客中心。","notes":"文章原图4672×3104，下载较大可从原页缩略图。旧照片不承诺周边商铺与入口状态完全未变。","sight":"JR 奈良站高架站房（2013 年实拍）","author":"Satoshi KAYA (kayakaya)","date":"2013-03-02","local":"assets/jr_nara.jpg","width":1100,"height":731,"binaryDownloaded":true,"referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/1a5f9fd214571642.jpg","thumbnail":"assets/1a5f9fd214571642-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":425},"hkg":{"id":"hkg","exactName":"香港国际机场一号客运大楼东大堂","sourcePage":"https://commons.wikimedia.org/wiki/File:Hong_Kong_International_Airport_Terminal_1_-09.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Hong_Kong_International_Airport_Terminal_1_-09.jpg/1200px-Hong_Kong_International_Airport_Terminal_1_-09.jpg","caption":"香港国际机场 T1 东大堂（2012 年实拍）","photographer":"Aimaimyi","publisher":"Wikimedia Commons","license":"CC BY-SA 3.0（另有其他版本及 GFDL 可选）","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/","captureDate":"2012-04-21","publicationDate":null,"credit":"Aimaimyi / Wikimedia Commons / CC BY-SA 3.0","locationMatch":"原拍者明确标注香港国际机场 T1 东大堂；非启德机场。","notes":"较早实拍，只作建筑与旅行实景，不作为2026年的商铺、闸口、登机指引。1200px为实际搜索返回直链，若该尺寸429可由原页选择当前列出的960/1280缩略图。","sight":"香港国际机场 T1 东大堂（2012 年实拍）","author":"Aimaimyi","date":"2012-04-21","local":"assets/hkg.jpg","width":960,"height":720,"binaryDownloaded":true,"resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Hong_Kong_International_Airport_Terminal_1_-09.jpg/960px-Hong_Kong_International_Airport_Terminal_1_-09.jpg","referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/c1d9d3dc31d2e442.jpg","thumbnail":"assets/c1d9d3dc31d2e442-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"kintetsu_nara":{"id":"kintetsu_nara","exactName":"近铁奈良站","sourcePage":"https://commons.wikimedia.org/wiki/File:Kintetsu_Nara_station_20141001.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/b/b2/Kintetsu_Nara_station_20141001.jpg","caption":"近铁奈良站地面入口（2014 年实拍）","photographer":"Degueulasse","publisher":"Wikimedia Commons","license":"CC BY 3.0","licenseUrl":"https://creativecommons.org/licenses/by/3.0/","captureDate":"2014-10","publicationDate":null,"credit":"Degueulasse / Wikimedia Commons / CC BY 3.0","locationMatch":"原作者注明近畿日本鉄道奈良駅；照片有近铁奈良站地下入口。","notes":"非JR奈良站。保留2014年标记，不作为现时入口商铺或工程情况依据。","sight":"近铁奈良站地面入口（2014 年实拍）","author":"Degueulasse","date":"2014-10","local":"assets/kintetsu_nara.jpg","width":733,"height":1100,"binaryDownloaded":true,"resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Kintetsu_Nara_station_20141001.jpg/960px-Kintetsu_Nara_station_20141001.jpg","referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/c12d62aa3d9da155.jpg","thumbnail":"assets/c12d62aa3d9da155-640q82.jpg","thumbnailWidth":426,"thumbnailHeight":640},"nankai_namba":{"id":"nankai_namba","exactName":"南海 难波站","sourcePage":"https://commons.wikimedia.org/wiki/File:Namba_Station.JPG","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/9/91/Namba_Station.JPG","caption":"南海难波站立面（2010 年实拍）","photographer":"Kirakirameister（上传者；文件历史注明 Photo taken by Whity）","publisher":"Wikimedia Commons","license":"CC BY-SA 3.0（多许可中选择）","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/","captureDate":"2010-04-03","publicationDate":"2010-04-09","credit":"Kirakirameister / Whity / Wikimedia Commons / CC BY-SA 3.0","locationMatch":"源页明确南海電鉄難波駅，大阪市中央区難波5丁目1番60号。","notes":"以车站立面为主题；2010年前景交通布局不代表2023年步行广场改造后状况。","sight":"南海难波站立面（2010 年实拍）","author":"Kirakirameister（上传者；文件历史注明 Photo taken by Whity）","date":"2010-04-03","local":"assets/nankai_namba.jpg","width":960,"height":720,"binaryDownloaded":true,"resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Namba_Station.JPG/960px-Namba_Station.JPG","referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/c0aa1c67d3231d9b.jpg","thumbnail":"assets/c0aa1c67d3231d9b-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"demachiyanagi":{"id":"demachiyanagi","exactName":"京阪 出町柳站","sourcePage":"https://www.keihan.co.jp/group/topics/hirakata-kuzuha/trainvsbike202304/","imageUrl":"https://www.keihan.co.jp/group/topics/hirakata-kuzuha/trainvsbike202304/img/18.jpg","caption":"京阪出町柳站地面出入口","photographer":null,"publisher":"京阪电气铁道 / 枚方つーしん","license":"未发现开放再利用许可；版权由原权利人保留","captureDate":null,"publicationDate":"2023-04-26","credit":"京阪电气铁道 / 枚方つーしん","locationMatch":"京阪官方旅行报道，照片含 KEIHAN 出町柳地下站入口标志；不是叡山电车地面站房。","notes":"拍摄日期未知。","sight":"京阪出町柳站地面出入口","author":"京阪电气铁道 / 枚方つーしん","date":"拍摄日期未注明","local":"assets/demachiyanagi.jpg","width":700,"height":467,"binaryDownloaded":true,"resolvedUrl":"https://www.keihan.co.jp/group/topics/hirakata-kuzuha/trainvsbike202304/img/18.jpg","referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/a9ff08d5f1550b37.jpg","thumbnail":"assets/a9ff08d5f1550b37-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"kiyomizu_gojo":{"id":"kiyomizu_gojo","exactName":"京阪 清水五条站","sourcePage":"https://commons.wikimedia.org/wiki/File:Keihan_Kiyomizu_gojo_station_20170204.jpg","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Keihan_Kiyomizu_gojo_station_20170204.jpg/1280px-Keihan_Kiyomizu_gojo_station_20170204.jpg","caption":"京阪清水五条站出入口（2017 年实拍）","photographer":"L26","publisher":"Wikimedia Commons","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/","captureDate":"2017-02-04","publicationDate":null,"credit":"L26 / Wikimedia Commons / CC BY-SA 4.0","locationMatch":"原拍者明确清水五条駅出入り口（京都市東山区），图中京阪车站入口可辨认。","notes":"保留拍摄年份，非实时入口情况。","sight":"京阪清水五条站出入口（2017 年实拍）","author":"L26","date":"2017-02-04","local":"assets/kiyomizu_gojo.jpg","width":960,"height":720,"binaryDownloaded":true,"resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Keihan_Kiyomizu_gojo_station_20170204.jpg/960px-Keihan_Kiyomizu_gojo_station_20170204.jpg","referenceOnly":false,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/4a2da67381cd7610.jpg","thumbnail":"assets/4a2da67381cd7610-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"jr_osaka":{"id":"jr_osaka","exactName":"JR 大阪站 连络桥口","sourcePage":"https://masaru-bu.blog.jp/archives/52318196.html","imageUrl":"https://livedoor.blogimg.jp/bzp17576/imgs/5/a/5a9f2ee2.jpg","caption":"JR 大阪站连络桥口（2026 年 2 月）","photographer":"MASARU（bzp17576）","publisher":"MASARUのブログ","license":"未发现开放再利用许可；原作者版权保留","captureDate":"2026-02-23（当日文章记录）","publicationDate":"2026-02-23","credit":"MASARU / MASARUのブログ","locationMatch":"原作者当日实拍文中明确『JR大阪駅連絡橋口』；图片搜索描述与检票口场景一致。","notes":"替换梅北地下口候选，避免与本行程地上新快速/环状线路线混淆。下载后仍由主任务视觉核看。","alternates":[{"imageUrl":"https://osakastationcity.com/img/green/toki/slide02%402x.jpg","sourcePage":"https://osakastationcity.com/green/toki/","caption":"大阪站主站房上方的时空广场（官方实景）","publisher":"大阪ステーションシティ","photographer":null,"license":"未发现开放再利用许可","captureDate":null,"publicationDate":null},{"imageUrl":"https://upload.wikimedia.org/wikipedia/commons/a/a8/Osaka_Station_%28Bridge_Gate%29.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Osaka_Station_(Bridge_Gate).jpg","caption":"大阪站连络桥口（2011 年实拍）","photographer":"w0746203-1","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/","captureDate":"2011-05-18","publicationDate":null}],"sight":"JR 大阪站连络桥口（2026 年 2 月）","author":"MASARU（bzp17576）","date":"2026-02-23（当日文章记录）","local":"assets/jr_osaka.jpg","width":720,"height":540,"binaryDownloaded":true,"resolvedUrl":"https://livedoor.blogimg.jp/bzp17576/imgs/5/a/5a9f2ee2.jpg","referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/7d4c7a5b7b5a9106.jpg","thumbnail":"assets/7d4c7a5b7b5a9106-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"kintetsu_nippombashi":{"id":"kintetsu_nippombashi","exactName":"近铁 日本桥站","sourcePage":"https://ameblo.jp/ra-tana/entry-12901341042.html","imageUrl":"https://stat.ameba.jp/user_images/20250508/13/ra-tana/85/18/j/o1080072015589304427.jpg","caption":"近铁日本桥站入口（2025 年 4 月访问实拍）","photographer":"シーラカンス（ra-tana）","publisher":"シーラカンスのブログ / Ameba","license":"未发现开放再利用许可；原拍者版权保留","captureDate":"2025-04-20（文章声明的访问日）","publicationDate":null,"credit":"シーラカンス（ra-tana）","locationMatch":"原拍者2025年4月20日近铁日本桥站访问记录；已核看为站内检票口。","notes":"替换此前PAKUTASO预览候选；该预览不得使用，正式素材需接受条款。此处没有点击、同意或下载协议。图片路径20250508不是拍摄日期依据。","sight":"近铁日本桥站检票口（2025年4月访问实拍）","author":"シーラカンス（ra-tana）","date":"2025-04-20（文章声明的访问日）","local":"assets/kintetsu_nippombashi.jpg","width":720,"height":480,"binaryDownloaded":true,"resolvedUrl":"https://stat.ameba.jp/user_images/20250508/13/ra-tana/85/18/j/o1080072015589304427.jpg","referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/7963e61d72c4e32e.jpg","thumbnail":"assets/7963e61d72c4e32e-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"sannomiya":{"id":"sannomiya","exactName":"JR 三之宫站","sourcePage":"https://kisspress.jp/en/articles/62839/","imageUrl":"https://kisspress.jp/img/articles/62800-62899/62839/img6a17d43de65df_xl.jpg","caption":"神户 JR 三之宫站入口","photographer":null,"publisher":"Kiss PRESS（文章作者 S.Yokoyama）","license":"© Kiss PRESS；未发现开放再利用许可","captureDate":null,"publicationDate":"2026-05-31","credit":"Kiss PRESS / S.Yokoyama","locationMatch":"文章从三宫站步行出发，图像搜索可辨 JR 三ノ宮駅门头；不是阪急神户三宫站。","notes":"发表日期2026年5月；拍摄日期未知。","sight":"神户 JR 三之宫站入口","author":"Kiss PRESS（文章作者 S.Yokoyama）","date":"拍摄日期未注明","local":"assets/sannomiya.jpg","width":720,"height":480,"binaryDownloaded":true,"resolvedUrl":"https://kisspress.jp/img/articles/62800-62899/62839/img6a17d43de65df_xl.jpg","referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/7221d01c931a95db.jpg","thumbnail":"assets/7221d01c931a95db-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"coco_sky":{"id":"coco_sky","exactName":"CoCo壱番屋 梅田スカイビル店","address":"大阪市北区大淀中1-1-90 B-100号","sourcePage":"https://tabelog.com/osaka/A2701/A270101/27088303/dtlphotolst/4/smp2/","officialLocationPage":"https://tenpo.ichibanya.co.jp/map/2808/","imageUrl":"https://tblg.k-img.com/restaurant/images/Rvw/315460/640x640_rect_b1f9150aeba90c91f890bb1b19c7c68e.jpg","caption":"CoCo壱番屋梅田蓝天大厦店店面","photographer":"black631650","photographerPage":"https://tabelog.com/rvwr/002537506/","publisher":"食べログ（原用户上传）","license":"未发现开放再利用许可；照片作者版权保留","captureDate":null,"publicationDate":null,"credit":"black631650 / 食べログ","locationMatch":"该店专属『外観』相册8图之一；店名、官方地址与电话06-4796-6551全部匹配。","notes":"640px图链接为实际读取该外观相册HTML的图片放大链接，未猜测尺寸URL。原拍日期未从相册核定；请主任务下载后视觉选择。不是大阪駅前第3ビル店、北区芝田店或太融寺店。","alternates":[{"imageUrl":"https://tblg.k-img.com/restaurant/images/Rvw/285791/640x640_rect_ff7cc3cfbe20c4bd136d4ff1c7a967c9.jpg","sourcePage":"https://tabelog.com/osaka/A2701/A270101/27088303/dtlphotolst/4/smp2/","photographer":"masa.611","photographerPage":"https://tabelog.com/rvwr/006773177/","caption":"同店外观；原作者标注『店』","license":"未发现开放再利用许可","captureDate":null,"publicationDate":null}],"sight":"CoCo壱番屋梅田蓝天大厦店店面","author":"black631650","date":"拍摄日期未注明","local":"assets/coco_sky.jpg","width":640,"height":480,"binaryDownloaded":true,"resolvedUrl":"https://tblg.k-img.com/restaurant/images/Rvw/315460/640x640_rect_b1f9150aeba90c91f890bb1b19c7c68e.jpg","referenceOnly":true,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切。","visualContentVerified":true,"reviewedAt":"2026-09-28","src":"assets/0eedceda4177cac3.jpg","thumbnail":"assets/0eedceda4177cac3-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"kodaiji":{"sight":"高台寺夜间亮灯与池中树影","file":"Reflection of lit-up trees (11058342624).jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Reflection_of_lit-up_trees_(11058342624).jpg","originalUrl":"https://upload.wikimedia.org/wikipedia/commons/b/b4/Reflection_of_lit-up_trees_%2811058342624%29.jpg","resolvedUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Reflection_of_lit-up_trees_%2811058342624%29.jpg/960px-Reflection_of_lit-up_trees_%2811058342624%29.jpg","author":"Takashi Hososhima","date":"2013-11-15","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/","local":"assets/kodaiji.jpg","width":732,"height":1100,"changes":"缩小尺寸并压缩为JPEG；页面展示可能裁切，照片沿用CC BY-SA 2.0许可。","sourceVerified":true,"binaryDownloaded":true,"visualContentVerified":true,"reviewedAt":"2026-09-29","src":"assets/b366781e011d283a.jpg","thumbnail":"assets/b366781e011d283a-640q82.jpg","thumbnailWidth":426,"thumbnailHeight":640},"kyoto_stage":{"local":"assets/pilgrimage/kyoto/station_scene_real.jpg","sight":"京都站4F室町小路广场与大阶梯","author":"实景：laquari，2019/05/15","date":"2019年历史参考","sourcePage":"https://laquari.hatenablog.jp/entry/2019/06/03/192227","license":"原作者版权；私人行程对照引用","width":800,"height":450,"src":"assets/275a9c53fcb5e6d1.jpg","thumbnail":"assets/275a9c53fcb5e6d1-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"kiku":{"sight":"お肉ダイニング きく · 店铺介绍图","author":"e-NAVITA 店铺介绍","sourcePage":"https://www.navita.co.jp/s/21023071/","originalUrl":"https://www.navita.co.jp/files/topics/1378524_ext_38_0.jpg","local":"assets/food-kiku.jpg","width":600,"height":400,"license":"来源方版权所有；图示仅供门店／产品识别参考","date":"拍摄时间未标注","reviewedAt":"2026-09-30","src":"assets/a20d35e613ba62ae.jpg","thumbnail":"assets/a20d35e613ba62ae-640q82.jpg","thumbnailWidth":600,"thumbnailHeight":400},"nakamura":{"sight":"中村藤吉本店 · 门店外观","author":"中村藤吉本店","sourcePage":"https://tokichi.jp/pages/stores","originalUrl":"https://tokichi.jp/cdn/shop/files/honten_57c357e1-259a-4bcb-b488-07406bfde4da.jpg?v=1682124303&width=1500","local":"assets/food-nakamura.jpg","width":960,"height":617,"license":"来源方版权所有；图示仅供门店／产品识别参考","date":"拍摄时间未标注","reviewedAt":"2026-09-30","src":"assets/646bc51c92b11f36.jpg","thumbnail":"assets/646bc51c92b11f36-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":411},"eggtart":{"sight":"安德鲁蛋挞 · 官网门店参考图","author":"アンドリューのエッグタルト","sourcePage":"https://eggtart.jp/shop/","originalUrl":"https://eggtart.jp/wp/wp-content/themes/eggtart/images/shop/osaka_nanba1.jpg","local":"assets/food-eggtart.jpg","width":960,"height":640,"license":"来源方版权所有；图示仅供门店／产品识别参考","date":"拍摄时间未标注","reviewedAt":"2026-09-30","src":"assets/22e329546d8fed29.jpg","thumbnail":"assets/22e329546d8fed29-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"starbucks_meriken":{"sight":"星巴克神户美利坚公园店 · 外观","author":"Starbucks Coffee Japan","sourcePage":"https://store.starbucks.co.jp/detail-1432/","originalUrl":"https://d3vgbguy0yofad.cloudfront.net/store/images/img-concept-store-detail-1432-01.jpg","local":"assets/food-starbucks_meriken.jpg","width":960,"height":640,"license":"来源方版权所有；图示仅供门店／产品识别参考","date":"拍摄时间未标注","reviewedAt":"2026-09-30","src":"assets/4fdb6235bca267b1.jpg","thumbnail":"assets/4fdb6235bca267b1-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":427},"crepe":{"sight":"掛川抹茶布蕾可丽饼 · 品牌产品参考图","author":"たばねのし","sourcePage":"https://tabanenoshi.com/works/kakegawagreenteabrulee/","originalUrl":"https://tabanenoshi.com/wp-content/uploads/2023/01/250129_1.jpg","local":"assets/food-crepe.jpg","width":640,"height":960,"license":"来源方版权所有；品牌产品识别参考","date":"拍摄时间未标注","reviewedAt":"2026-09-30","src":"assets/63ceaef977c1b3b9.jpg","thumbnail":"assets/63ceaef977c1b3b9-640q82.jpg","thumbnailWidth":427,"thumbnailHeight":640},"saizeriya_uji":{"sight":"サイゼリヤ 宇治里尻店 · 门店外观","sourcePage":"https://tabelog.com/kyoto/A2607/A260701/26017218/dtlphotolst/4/smp2/","imageUrl":"https://tblg.k-img.com/restaurant/images/Rvw/384390/640x640_rect_12341448f4d6cb28ba48a464a84b9234.jpg","originalUrl":"https://tblg.k-img.com/restaurant/images/Rvw/384390/640x640_rect_12341448f4d6cb28ba48a464a84b9234.jpg","author":"ゑつ / 食べログ","license":"著作权归原作者所有；未标注开放许可","date":"拍摄日期未标注","width":640,"height":481,"local":"assets/food-saizeriya-uji.jpg","sourceVerified":true,"visualContentVerified":true,"reviewedAt":"2026-09-30","changes":"文件未改动；卡片展示可能裁切。","notes":"食べログ宇治里尻店外观分类，照片编号384390116；门店地址与官网宇治里尻77一致。","src":"assets/37ea25618d8b2aac.jpg","thumbnail":"assets/37ea25618d8b2aac-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":481},"starbucks_kitano":{"sight":"北野星巴克外观","local":"assets/pilgrimage/kobe/kitano-real.jpg","sourcePage":"https://azusairi.com/?p=2576","imageUrl":"https://azusairi.com/wp-content/uploads/2024/02/IMG_5614-1-1024x576.jpg","author":"アズサイリ","license":"原权利方保留版权，非开放许可","width":1024,"height":576,"notes":"用于辨认店门与巡礼建筑；历史照片。","sourceVerified":true,"visualContentVerified":true,"reviewedAt":"2026-10-01","attribution":"アズサイリ · 北野星巴克外观","src":"assets/cc04bc3c6f44a2b5.jpg","thumbnail":"assets/cc04bc3c6f44a2b5-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"kobe_bridge":{"sight":"从北公园看神户大桥","local":"assets/pilgrimage/kobe/bridge-real.jpg","sourcePage":"https://www.feel-kobe.jp/kobe-yakei/spots/port-island-kita-park/","imageUrl":"https://www.feel-kobe.jp/kobe-yakei/assets/media/L1120348_resize-scaled.jpg","author":"神户市／神户夜景指南","license":"原权利方保留版权，非开放许可","width":2560,"height":1704,"notes":"官网夜景参考图；本次在傍晚到访，不保证同样光线。","sourceVerified":true,"visualContentVerified":true,"reviewedAt":"2026-10-01","attribution":"神户市／神户夜景指南 · 从北公园看神户大桥","src":"assets/a7edb9a0c1d94c40.jpg","thumbnail":"assets/a7edb9a0c1d94c40-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"agata":{"sight":"縣神社 · 官方实景参考","local":"assets/uji-rally/agata-real.webp","sourcePage":"https://www.kyoto-kankou.or.jp/info_search/366","imageUrl":"https://www.kyoto-kankou.or.jp/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NTM0NiwicHVyIjoiYmxvYl9pZCJ9fQ==--a2c50e461eb1dac3abfe2a93ad50ac86298d6319/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwicmVzaXplX3RvX2ZpdCI6WzM4NDAsMjE2MF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--d4a38f8dcc86a603c3d632cf5b22690482f0e7f5/1607.jpg","author":"京都府观光联盟","date":"拍摄日期未注明","license":"官网参考图，版权归原权利人","width":3224,"height":2160,"attribution":"京都府观光联盟／縣神社","sourceVerified":true,"src":"assets/7f42989896adfe38.webp","thumbnail":"assets/7f42989896adfe38-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":429},"kohata":{"sight":"許波多神社（五ケ庄）· 境内鸟居","local":"assets/uji-rally/kohata-real.jpg","sourcePage":"https://commons.wikimedia.org/wiki/File:Kohata-jinja_(Gokasho),_keidai-torii.jpg","imageUrl":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Kohata-jinja_%28Gokasho%29%2C_keidai-torii.jpg/1280px-Kohata-jinja_%28Gokasho%29%2C_keidai-torii.jpg","author":"Saigen Jiro","date":"2016-09-04","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/","width":1280,"height":851,"attribution":"Saigen Jiro / Wikimedia Commons · CC0 1.0","sourceVerified":true,"notes":"五ケ庄境内鸟居；与作品画面角度不同。使用 Commons 缩略版，未裁切。","src":"assets/16e582eb5c62d3f7.jpg","thumbnail":"assets/16e582eb5c62d3f7-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":426},"byodoin_approach":{"sight":"平等院表参道","local":"assets/pilgrimage/uji/omotesando_r.jpg","sourcePage":"https://anitabi.net/anime-eupho/","imageUrl":"https://anitabi.net/blog/%E9%9F%BF%E3%81%91%E3%80%80%E3%83%A6%E3%83%BC%E3%83%95%E3%82%A9%E3%83%8B%E3%82%A2%E3%83%A0%E8%81%96%E5%9C%B05.jpg","author":"あにたび","license":"原作者版权，未标注开放许可；仅本机私人对照引用","date":"约2015年（历史参考）","width":400,"height":225,"attribution":"实景照片：あにたび（约2015年历史参考）","visualContentVerified":true,"src":"assets/f29ce48a884cb708.jpg","thumbnail":"assets/f29ce48a884cb708-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"suikan":{"sight":"宇治川水管桥与河岸","local":"assets/uji-rally/suikan-real.webp","sourcePage":"https://kyoshippo.jp/introduce/eupho_suikankyo-230730/","imageUrl":"https://kyoshippo.jp/wp-content/uploads/2023/07/eupho_suikankyo230619-12.webp","author":"京のシッポ","license":"原作者版权所有；场景对照引用，非开放许可","date":"2023年","width":1920,"height":1080,"attribution":"京のシッポ · 2023年河岸实拍","visualContentVerified":true,"src":"assets/55d5e02c181d7740.webp","thumbnail":"assets/55d5e02c181d7740-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"heiwa_books":{"sight":"アル・プラザ宇治東外观 · 平和书店在3F","local":"assets/uji-heiwa_books.jpg","sourcePage":"https://directshop.jp/store/10293/","imageUrl":"https://directshop.jp/wp-content/uploads/2019/11/IMG_2661-1280x960.jpg","author":"株式会社ダイレクト・ショップ","license":"版权所有；地点识别引用，非开放许可","date":"拍摄日期未注明","width":1280,"height":960,"visualContentVerified":true,"notes":"商场外观用于识别建筑，非书店内景或当前库存照片。","src":"assets/2faa568fbd185b1c.jpg","thumbnail":"assets/2faa568fbd185b1c-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"keihan_uji":{"sight":"2026秋季宇治站立牌 · 官方示意图","local":"assets/uji-keihan_uji_panel.png","sourcePage":"https://www.keihan.co.jp/euphonium/","imageUrl":"https://www.keihan.co.jp/euphonium/assets/img/img_uji1.png","author":"京阪／©武田綾乃・宝島社／「響け！」製作委員会2024","license":"版权所有；活动识别引用，非开放许可","date":"2026秋季活动","width":750,"height":838,"illustration":true,"visualContentVerified":true,"notes":"小奏、久美子、丽奈三人立牌设计图，非现场照片。","src":"assets/980bbbef8c76dec6.png","thumbnail":"assets/980bbbef8c76dec6-640q82.jpg","thumbnailWidth":573,"thumbnailHeight":640},"sannomiya_center":{"sight":"三宫中央街","sourcePage":"https://www.feel-kobe.jp/facilities/0000000730/","imageUrl":"https://www.feel-kobe.jp/wp-content/uploads/2021/03/photos_QfRjrymno6fUWSSF_kf1614837875801_sannomiyacenter20212.jpg","author":"神户观光局 / Feel KOBE","license":"版权归原权利人；未声明开放许可","date":"拍摄日期未注明","width":1100,"height":736,"notes":"三宫中央街街景，不代表具体店铺外观或当前店铺库存。","local":"assets/sannomiya-center.jpg","sourceVerified":true,"binaryDownloaded":true,"visualContentVerified":true,"reviewedAt":"2026-10-02","attribution":"三宫中央街 — 神户观光局 / Feel KOBE","changes":"按比例缩小并压缩为JPEG","src":"assets/7e4e72e2d0062583.jpg","thumbnail":"assets/7e4e72e2d0062583-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":428},"osaka_castle":{"sight":"大阪城天守阁","sourcePage":"https://www.osakacastle.net/","imageUrl":"https://www.osakacastle.net/img/top/keyvisual_bg_01.jpg","author":"大阪城天守閣 公式サイト","license":"官方宣传图片；权利归原权利方","width":4000,"height":1920,"sourceVerified":true,"binaryDownloaded":true,"visualContentVerified":true,"local":"assets/osaka_castle.jpg","attribution":"大阪城天守閣公式サイト；非旅行当日照片","reviewedAt":"2026-10-03","src":"assets/67865cd51e6a2842.jpg","thumbnail":"assets/67865cd51e6a2842-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":307}};const PILGRIMAGE={"checked_on":"2026-10-01","points":[{"id":"eupho_uji_bridge","place_ids":["uji_bridge"],"date":"2026-12-01","event_id":"uji_lunch_walk","title":"宇治桥 · 桥上栏杆","work":"吹响！上低音号","scene":"官方巡礼地图收录宇治桥；第一季第12集也是久美子抒发心情的桥。","shooting_note":"在行人通道看桥栏与河景；保留原行程返程再次经过宇治桥。","pair_match":"同一座桥、不同方向：动画为桥上步行画面，实景为桥栏与河景参考","coordinates":{"lat":34.892948,"lng":135.806267,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji007_uji.php","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/bridge_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/%E9%9F%BF%E3%81%91%E3%80%80%E3%83%A6%E3%83%BC%E3%83%95%E3%82%A9%E3%83%8B%E3%82%A2%E3%83%A0%E8%81%96%E5%9C%B044.jpg","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/a8c776fa802f8a1e.jpg","thumbnail":"assets/a8c776fa802f8a1e-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/bridge_a.png","source_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf","image_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf#page=2","credit":"京阪电车官方舞台探访地图 / ©武田綾乃・宝島社／「響け！」製作委員会","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":366,"height":198,"src":"assets/2e69ed4691f197e8.png","thumbnail":"assets/2e69ed4691f197e8-640q82.jpg","thumbnailWidth":366,"thumbnailHeight":198},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji007_uji.php"}],"status":"ready","checked_on":"2026-09-29","match_note":"同一座桥、不同方向：作品展示桥上观景处，实景为桥栏与河景参考。","name_ja":"宇治橋"},{"id":"eupho_omotesando","place_ids":["byodoin_approach"],"date":"2026-12-01","event_id":"uji_approach","title":"平等院表参道 · 沿途街景","work":"吹响！上低音号","scene":"京阪官方巡礼地图第6点：平等院表参道。","shooting_note":"午饭后沿表参道去縣神社；对照街景，不进入平等院收费区。","pair_match":"同一街道，角度不同；作品为夜景，实景为白天。","coordinates":{"lat":34.891084,"lng":135.806445,"precision":"表参道区域定位；具体动画站位未核","source_url":"https://www.kyoto-kankou.or.jp/info_search/6709","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/omotesando_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/%E9%9F%BF%E3%81%91%E3%80%80%E3%83%A6%E3%83%BC%E3%83%95%E3%82%A9%E3%83%8B%E3%82%A2%E3%83%A0%E8%81%96%E5%9C%B05.jpg","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/f29ce48a884cb708.jpg","thumbnail":"assets/f29ce48a884cb708-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/omotesando_a.png","source_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf","image_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf#page=2","credit":"京阪电车官方舞台探访地图 / ©武田綾乃・宝島社／「響け！」製作委員会","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":374,"height":202,"src":"assets/71a20826c4937758.png","thumbnail":"assets/71a20826c4937758-640q82.jpg","thumbnailWidth":374,"thumbnailHeight":202},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.kyoto-kankou.or.jp/info_search/6709"}],"status":"ready","checked_on":"2026-09-29","match_note":"同一街道，角度不同；作品为夜景，实景为白天。","name_ja":"平等院表参道"},{"id":"eupho_bench","place_ids":["bench"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"久美子长椅 · 井川用水机站前","work":"吹响！上低音号","scene":"第一季第1集，久美子坐在河边长椅。","shooting_note":"正面略高视角对照长椅；旧图中的座椅与后方护岸可能已有变化。","pair_match":"同机位参考；以现场设施为准","coordinates":{"lat":34.88959,"lng":135.8084,"precision":"长椅地点定位；与探访地图及公开街景位置交叉核对","source_url":"https://www.animepilgrimage.com/ja/maps/place/967abfaf-4a36-4e9e-8fe0-a148c5c55c5c","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/bench_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/2.%E3%83%99%E3%83%B3%E3%83%81%EF%BC%91%EF%BC%91.jpg","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/27ecda9334996340.jpg","thumbnail":"assets/27ecda9334996340-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/bench_a.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/2.%E3%83%99%E3%83%B3%E3%83%81%EF%BC%91.jpg","credit":"动画画面 ©武田綾乃・宝島社／「響け！」製作委員会；对照出处：あにたび","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":400,"height":222,"src":"assets/2a4a627384f3a76f.jpg","thumbnail":"assets/2a4a627384f3a76f-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":222},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.animepilgrimage.com/ja/maps/place/967abfaf-4a36-4e9e-8fe0-a148c5c55c5c"}],"status":"ready","checked_on":"2026-09-29","match_note":"同机位参考；以现场设施为准","name_ja":"井川用水機場前 ベンチ"},{"id":"eupho_kisen","place_ids":["kisen"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"喜撰桥 · 红色栏杆","work":"吹响！上低音号","scene":"官方巡礼地图第8点；第二季第1集有桥上场景。","shooting_note":"过桥时对照红色栏杆；作品画面为夜间。","pair_match":"同一地点，拍摄角度不同。","coordinates":{"lat":34.888178,"lng":135.809929,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji003_kisen.php","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/kisen.jpg","source_url":"https://commons.wikimedia.org/wiki/File:Kisen_bridge%2C_Uji_river.jpg","image_url":"https://commons.wikimedia.org/wiki/Special:FilePath/Kisen_bridge%2C_Uji_river.jpg","credit":"喜撰桥 — Motokoka / Wikimedia Commons / CC BY-SA 4.0","license":"CC BY-SA 4.0","visual_verified":true,"width":960,"height":720,"src":"assets/cf02818f4e3b2976.jpg","thumbnail":"assets/cf02818f4e3b2976-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":480},"anime":{"local":"assets/pilgrimage/uji/kisen_a.png","source_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf","image_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf#page=2","credit":"京阪电车官方舞台探访地图 / ©武田綾乃・宝島社／「響け！」製作委員会","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":455,"height":246,"src":"assets/da79a26224234f36.png","thumbnail":"assets/da79a26224234f36-640q82.jpg","thumbnailWidth":455,"thumbnailHeight":246},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji003_kisen.php"}],"status":"ready","checked_on":"2026-09-29","match_note":"同一地点，拍摄角度不同。","name_ja":"喜撰橋"},{"id":"eupho_asagiri","place_ids":["asagiri"],"date":"2026-12-01","event_id":"uji_pilgrimage","title":"朝雾桥 · 红色桥栏","work":"吹响！上低音号","scene":"京阪官方巡礼地图第9点：朝雾桥。","shooting_note":"对照红色栏杆，过桥后前往东桥头的宇治神社。","pair_match":"实景为桥头与源氏物语像，与动画角度不同。","coordinates":{"lat":34.890189,"lng":135.809394,"precision":"桥梁定位；非摄影站位","source_url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji006_asagiri.php","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/asagiri.jpg","source_url":"https://commons.wikimedia.org/wiki/File:Asagiri_Bashi%26Hikaru_Genji_statue.jpg","image_url":"https://upload.wikimedia.org/wikipedia/commons/c/cc/Asagiri_Bashi%26Hikaru_Genji_statue.jpg","credit":"御影守駒氏","license":"CC BY-SA 4.0","visual_verified":true,"width":825,"height":1100,"src":"assets/280c294a5ecbb72b.jpg","thumbnail":"assets/280c294a5ecbb72b-640q82.jpg","thumbnailWidth":480,"thumbnailHeight":640},"anime":{"local":"assets/pilgrimage/uji/asagiri_a.png","source_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf","image_url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf#page=2","credit":"京阪电车官方舞台探访地图 / ©武田綾乃・宝島社／「響け！」製作委員会","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":372,"height":212,"src":"assets/e1e0a8709440012e.png","thumbnail":"assets/e1e0a8709440012e-640q82.jpg","thumbnailWidth":372,"thumbnailHeight":212},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.djq.jp/bridge_liblary/river_kamo/kyoto_bridge_uji006_asagiri.php"}],"status":"ready","checked_on":"2026-09-29","match_note":"实景为桥头与源氏物语像，与动画角度不同。","name_ja":"朝霧橋"},{"id":"eupho_uji_shrine","place_ids":["uji_shrine"],"date":"2026-12-01","event_id":"uji_shrines","title":"宇治神社 · 临河鸟居","work":"吹响！上低音号","scene":"第一季第1集，宇治神社鸟居外观。","shooting_note":"从朝雾桥东侧找面河鸟居与台阶；地图定位在神社内，照片机位在入口。","pair_match":"同机位参考；以现场设施为准","coordinates":{"lat":34.891048,"lng":135.810682,"precision":"神社地点定位；鸟居在临河入口","source_url":"https://mapfan.com/spots/SC3W3%2CJ%2CGR","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/shrine_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/1.%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE%EF%BC%91%EF%BC%91.jpg","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/8ee2286ac9554b8e.jpg","thumbnail":"assets/8ee2286ac9554b8e-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/shrine_a.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/1.%E5%AE%87%E6%B2%BB%E7%A5%9E%E7%A4%BE%EF%BC%91.jpg","credit":"动画画面 ©武田綾乃・宝島社／「響け！」製作委員会；对照出处：あにたび","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":400,"height":226,"src":"assets/c5d3f1d325f7cf62.jpg","thumbnail":"assets/c5d3f1d325f7cf62-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":226},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://mapfan.com/spots/SC3W3%2CJ%2CGR"}],"status":"ready","checked_on":"2026-09-29","match_note":"同机位参考；以现场设施为准","name_ja":"宇治神社"},{"id":"eupho_sawarabi","place_ids":["ujigami"],"date":"2026-12-01","event_id":"uji_shrines","title":"宇治上神社前 · 早蕨之道","work":"吹响！上低音号","scene":"第一季第8集，久美子与丽奈带乐器去大吉山的路。","shooting_note":"在神社外的道路对照成排圆形石挡。","pair_match":"同机位参考；以现场设施为准","coordinates":{"lat":34.89195,"lng":135.811289,"precision":"神社地点定位；机位在门外道路","source_url":"https://mapfan.com/spots/SCAHY%2CJ%2C2","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/ujigami_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/IMG_278011.JPG","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/2fadd1c5306a4d19.jpg","thumbnail":"assets/2fadd1c5306a4d19-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/ujigami_a.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/IMG_271.jpg","credit":"动画画面 ©武田綾乃・宝島社／「響け！」製作委員会；对照出处：あにたび","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":400,"height":225,"src":"assets/0f81863c455d38fb.jpg","thumbnail":"assets/0f81863c455d38fb-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://mapfan.com/spots/SCAHY%2CJ%2C2"}],"status":"ready","checked_on":"2026-09-29","match_note":"同机位参考；以现场设施为准","name_ja":"宇治上神社前 さわらびの道"},{"id":"eupho_daikichi","place_ids":["daikichi"],"date":"2026-12-01","event_id":"daikichi_visit","title":"大吉山展望台 · 栏杆转角","work":"吹响！上低音号","scene":"第一季第8集，久美子与丽奈在展望台。","shooting_note":"对照栏杆转角和树木；动画为夜景，本次仍白天上山、天黑前下山。","pair_match":"同机位参考；以现场设施为准","coordinates":{"lat":34.892874,"lng":135.812742,"precision":"展望台定位；不是山顶或登山口","source_url":"https://yakei-world.com/spot_view.php?spot=1857","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/daikichi_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/IMG_2776.jpg","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/d76bea36ee4adf59.jpg","thumbnail":"assets/d76bea36ee4adf59-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/daikichi_a.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/%EF%BC%98%E8%A9%B1%E3%81%8A%E3%81%BE%E3%81%A4%E3%82%8A%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%82%B0%E3%83%AB%E8%81%96%E5%9C%B012.jpg","credit":"动画画面 ©武田綾乃・宝島社／「響け！」製作委員会；对照出处：あにたび","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":400,"height":225,"src":"assets/5059ea707606843d.jpg","thumbnail":"assets/5059ea707606843d-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://yakei-world.com/spot_view.php?spot=1857"}],"status":"ready","checked_on":"2026-09-29","match_note":"同机位参考；以现场设施为准","name_ja":"大吉山展望台"},{"id":"eupho_saizeriya_uji","place_ids":["saizeriya_uji"],"date":"2026-12-01","event_id":"uji_saizeriya_dinner","title":"萨莉亚宇治里尻店","name_ja":"サイゼリヤ 宇治里尻店","work":"吹响！上低音号 · 誓言的终章","scene":"剧场版中久美子与奏谈话的家庭餐厅。","shooting_note":"晚饭前顺拍二层窗户与店招；在公共通道取景，避让停车场车辆。","match_note":"巡礼者外观比对；作品改绘了店招，实景角度不同。","real":{"local":"assets/food-saizeriya-uji.jpg","source_url":"https://tabelog.com/kyoto/A2607/A260701/26017218/dtlphotolst/4/smp2/","image_url":"https://tblg.k-img.com/restaurant/images/Rvw/384390/640x640_rect_12341448f4d6cb28ba48a464a84b9234.jpg","credit":"ゑつ / 食べログ","width":640,"height":481,"src":"assets/37ea25618d8b2aac.jpg","thumbnail":"assets/37ea25618d8b2aac-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":481},"anime":{"local":"assets/pilgrimage/uji/saizeriya_a.png","source_url":"https://note.com/loyal_wasp2136/n/n88b7b73ecc59","image_url":"https://assets.st-note.com/img/1760264552-CYwXADJz7GLnrNqxB3jbpsaF.png?width=1200","credit":"©武田綾乃・宝島社／「響け！」製作委員会 · 引自东京理科大学百合爱好会巡礼记录","license":"作品单帧场景对照引用，非开放许可","visual_verified":true,"width":1200,"height":675,"src":"assets/0d0097fed5e31d52.png","thumbnail":"assets/0d0097fed5e31d52-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"巡礼者实地对照（非官方取景地认定）","url":"https://note.com/loyal_wasp2136/n/n88b7b73ecc59"},{"title":"萨莉亚官方门店资料","url":"https://shop.saizeriya.co.jp/sz_restaurant/spot/detail?code=0524"},{"title":"剧场版作品官网","url":"https://movie3.anime-eupho.com/"}],"status":"ready","checked_on":"2026-10-01"},{"id":"eupho_jr_uji","place_ids":["jr_uji"],"date":"2026-12-01","event_id":"uji_return","title":"JR宇治站前 · 茶壶邮筒","work":"吹响！上低音号","scene":"第一季第8集，叶月、绿辉与琥珀在站前会合。","shooting_note":"晚餐后到JR宇治站前找茶壶造型邮筒，再乘车回京都；不是傍晚看展示的京阪宇治站。","pair_match":"同机位参考；以现场设施为准","coordinates":{"lat":34.890349,"lng":135.800967,"precision":"茶壶邮筒地点定位；非摄影站位","source_url":"https://www.postmap.org/map/2021","verified":"地点级来源已核；不是摄影站位"},"real":{"local":"assets/pilgrimage/uji/jr_r.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/IMG_2825.JPG","credit":"あにたび（约2015年历史参考）","license":"原作者版权，未标注开放许可；仅本机私人对照引用","visual_verified":true,"width":400,"height":225,"src":"assets/b69849690fa185a9.jpg","thumbnail":"assets/b69849690fa185a9-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"anime":{"local":"assets/pilgrimage/uji/jr_a.jpg","source_url":"https://anitabi.net/anime-eupho/","image_url":"https://anitabi.net/blog/%EF%BC%98%E8%A9%B1%E3%81%8A%E3%81%BE%E3%81%A4%E3%82%8A%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%82%B0%E3%83%AB%E8%81%96%E5%9C%B01.jpg","credit":"动画画面 ©武田綾乃・宝島社／「響け！」製作委員会；对照出处：あにたび","license":"版权所有；个人行程中的小尺寸场景对照引用，非开放许可","visual_verified":true,"width":400,"height":225,"src":"assets/e5faf2b0608d8e5e.jpg","thumbnail":"assets/e5faf2b0608d8e5e-640q82.jpg","thumbnailWidth":400,"thumbnailHeight":225},"sources":[{"title":"京阪官方舞台探访地图（2026秋）","url":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"},{"title":"あにたび实景逐帧对照","url":"https://anitabi.net/anime-eupho/"},{"title":"地点坐标来源","url":"https://www.postmap.org/map/2021"}],"status":"ready","checked_on":"2026-09-29","match_note":"同机位参考；以现场设施为准","name_ja":"JR宇治駅 茶壺型郵便ポスト"},{"id":"kyoto-stage-stairs","place_ids":["kyoto_stage"],"date":"2026-12-01","event_id":"station_stage","title":"大阶梯前 · 车站音乐会","work":"吹响！上低音号 2","scene":"第7集「えきびるコンサート」；《宝岛》演出所在的京都站4F室町小路广场。","shooting_note":"中央口一侧按站内指示上4F室町小路广场，面对大阶梯对照扶梯、左侧墙面和顶部红色方框时钟；不需要登顶。现场活动可能占用广场。","coordinates":{"lat":34.986077,"lng":135.758628,"precision":"室町小路广场参考点；楼层依官方4F说明，非厘米级机位","source_url":"https://yakei.jp/japan/spot.php?i=kyoto-muromachi"},"real":{"local":"assets/pilgrimage/kyoto/station_scene_real.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/l/laquari/20190603/20190603153728.jpg","credit":"laquari，2019/05/15","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":800,"height":450,"src":"assets/275a9c53fcb5e6d1.jpg","thumbnail":"assets/275a9c53fcb5e6d1-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/kyoto/station_scene_anime.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/l/laquari/20190603/20190603153643.png","credit":"©武田绫乃・宝岛社／「响け！」制作委员会；对照整理：laquari","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":800,"height":450,"src":"assets/bcaa4fca67787803.jpg","thumbnail":"assets/bcaa4fca67787803-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"第7集官方剧情","url":"https://tv2nd.anime-eupho.com/story/07/"},{"title":"车站官方4F位置与平面图","url":"https://www.kyoto-station-building.co.jp/service/square/"},{"title":"动画实景逐镜对照","url":"https://laquari.hatenablog.jp/entry/2019/06/03/192227"}],"status":"matched_pair","priority":"mainline","route_rule":"返回京都站后前往4F室町小路广场，停留15—20分钟，再步行回酒店。","match_note":"","name_ja":"京都駅ビル 室町小路広場"},{"id":"kyoto-stage-clock","place_ids":["kyoto_stage"],"date":"2026-12-01","event_id":"station_stage","title":"大阶梯边 · 红框时钟","work":"吹响！上低音号 2","scene":"第7集车站音乐会段落的红色方框时钟与钢架屋顶。","shooting_note":"与大阶梯同一站区，抬头对照红色方框时钟和玻璃钢架；不把时钟与广场另一侧的红色雕塑「朱甲舞」混为同一个物体。","coordinates":{"lat":34.986077,"lng":135.758628,"precision":"室町小路广场参考点；楼层依官方4F说明，非厘米级机位","source_url":"https://yakei.jp/japan/spot.php?i=kyoto-muromachi"},"real":{"local":"assets/pilgrimage/kyoto/station_concert_real.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/l/laquari/20190603/20190603153729.jpg","credit":"laquari，2019/05/15","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":800,"height":450,"src":"assets/031b92cf0cb73fae.jpg","thumbnail":"assets/031b92cf0cb73fae-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/kyoto/station_concert_anime.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/l/laquari/20190603/20190603153702.png","credit":"©武田绫乃・宝岛社／「响け！」制作委员会；对照整理：laquari","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":800,"height":450,"src":"assets/cc70db528bacc676.jpg","thumbnail":"assets/cc70db528bacc676-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"动画实景逐镜对照","url":"https://laquari.hatenablog.jp/entry/2019/06/03/192227"},{"title":"京都站官方广场介绍","url":"https://www.kyoto-station-building.co.jp/service/square/"}],"status":"matched_pair","priority":"same_stop","match_note":"","name_ja":"京都駅ビル 室町小路広場"},{"id":"demachi-west-gate","place_ids":["demachi"],"date":"2026-12-02","event_id":"demachi_visit","title":"商店街西入口 · 兔子山招牌","work":"玉子市场","scene":"宣传PV中的商店街西侧入口；动画把建筑宽度与招牌文字作了改绘。","shooting_note":"寺町通一侧的西入口仰拍，把入口招牌和左侧建筑放进画面。图片为2013年实地对照，店招装饰以现场为准。","coordinates":{"lat":35.03032,"lng":135.769609,"precision":"商店街地图POI；不是入口或吊鱼精确站位","source_url":"https://map.yahoo.co.jp/v3/place/ND9uBYsasCs"},"real":{"local":"assets/pilgrimage/kyoto/market_entry_photo.jpg","source_url":"https://kbas.ifdef.jp/b/tamakoma/00p/b_tamakoma_p_00_44.jpg","credit":"ぶらり聖地巡礼の旅（kbas），2013/01/04","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":320,"height":442,"src":"assets/c101c4540b5babeb.jpg","thumbnail":"assets/c101c4540b5babeb-640q82.jpg","thumbnailWidth":320,"thumbnailHeight":442},"anime":{"local":"assets/pilgrimage/kyoto/market_entry_scene.jpg","source_url":"https://kbas.ifdef.jp/b/tamakoma/00c/b_tamakoma_c_00_44.jpg","credit":"©京都动画／兔子山商店街；PV对照整理：kbas","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":320,"height":442,"src":"assets/d23a04e4062174c1.jpg","thumbnail":"assets/d23a04e4062174c1-640q82.jpg","thumbnailWidth":320,"thumbnailHeight":442},"sources":[{"title":"商店街官方作品关联","url":"https://masugata.demachi.jp/tamakomarket/"},{"title":"西入口实地对照","url":"https://kbas.ifdef.jp/burari_tamakoma.html"}],"status":"matched_pair","priority":"main","match_note":"","name_ja":"出町桝形商店街"},{"id":"demachi-fish","place_ids":["demachi"],"date":"2026-12-02","event_id":"demachi_visit","title":"商店街内部 · 吊鱼与拱廊","work":"玉子市场","scene":"官方主视觉中的商店街内部、屋顶悬挂鱼形装饰；商店街官方纪念页直接并列介绍。","shooting_note":"进入拱廊后找吊鱼和屋顶纵深。主视觉与实景用于辨识元素，人物位置和构图不完全一致；不要堵住店铺通道。","coordinates":{"lat":35.03032,"lng":135.769609,"precision":"商店街地图POI；不是入口或吊鱼精确站位","source_url":"https://map.yahoo.co.jp/v3/place/ND9uBYsasCs"},"real":{"local":"assets/pilgrimage/kyoto/market_real.jpg","source_url":"https://masugata.demachi.jp/assets/img/tamakomarket/intro_img02.jpg","credit":"出町桝形商店街官方","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":855,"height":473,"src":"assets/b943c166e8ecef66.jpg","thumbnail":"assets/b943c166e8ecef66-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":354},"anime":{"local":"assets/pilgrimage/kyoto/market_anime.jpg","source_url":"https://masugata.demachi.jp/assets/img/tamakomarket/intro_img01.jpg","credit":"©京都动画／兔子山商店街；出町桝形商店街官方纪念页","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"官方主视觉，非动画单帧","width":509,"height":720,"src":"assets/107755682d375a73.jpg","thumbnail":"assets/107755682d375a73-640q82.jpg","thumbnailWidth":452,"thumbnailHeight":640},"sources":[{"title":"官方玉子市场纪念页","url":"https://masugata.demachi.jp/tamakomarket/"},{"title":"机位方向实地对照","url":"https://kbas.ifdef.jp/burari_tamakoma.html"}],"status":"location_visual_comparison","priority":"main","match_note":"官方主视觉，非动画单帧 ","name_ja":"出町桝形商店街"},{"id":"delta-tamako","place_ids":["delta"],"date":"2026-12-02","event_id":"delta_visit","title":"高野川侧飞石 · 玉子与饼藏","work":"玉子爱情故事","scene":"饼藏告白段落，岸边台阶通往飞石的画面。","shooting_note":"找三角洲东侧高野川的飞石与下河台阶，对照石块排列；河合桥、贺茂大桥可辅助辨别方向。图为2014年旧照，水位和植被会改变；雨天或水量大时留在岸边拍。","coordinates":{"lat":35.02982,"lng":135.771683,"precision":"鸭川三角洲区域参考点；不是告白石块的精确坐标","source_url":"https://travel.yahoo.co.jp/kanko/spot-00036996/"},"real":{"local":"assets/pilgrimage/kyoto/delta_d.jpg","source_url":"https://blog-imgs-57.fc2.com/r/i/m/rimatai/201410131033492ac.jpg","credit":"リマタイ（rimatai），2014年探访","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":640,"height":360,"src":"assets/166750575ff16098.jpg","thumbnail":"assets/166750575ff16098-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/kyoto/delta_c.jpg","source_url":"https://blog-imgs-57.fc2.com/r/i/m/rimatai/20141013103350c8b.jpg","credit":"©京都动画／兔子山商店街；对照整理：リマタイ","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":640,"height":360,"src":"assets/ab402f5419eb47f0.jpg","thumbnail":"assets/ab402f5419eb47f0-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"飞石逐镜对照","url":"https://rimatai.blog.fc2.com/blog-entry-481.html"},{"title":"高野川河合桥方位说明","url":"https://blog.livedoor.jp/doripushi/archives/4671350.html"}],"status":"matched_pair","priority":"main","match_note":"","name_ja":"鴨川デルタ"},{"id":"delta-kon","place_ids":["delta"],"date":"2026-12-02","event_id":"delta_visit","title":"鸭川飞石 · 轻音OP","work":"轻音少女 第1季","scene":"OP中唯、澪、律、紬经过飞石的画面。","shooting_note":"从贺茂川侧飞石朝东拍中洲，与《玉子》告白位置分开。玉子点位优先，余量不足就省此机位，不延误京阪换乘。","coordinates":{"lat":35.029425,"lng":135.771339,"precision":"巡礼作者地图参考点，非经测量的OP摄影站位","source_url":"https://keyboar.hatenablog.com/entry/20100918/1284742598"},"real":{"local":"assets/pilgrimage/kyoto/kon_c.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/k/keyboar/20100918/20100918223956.jpg","credit":"きーぼー（keyboar），2009年探访","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":640,"height":393,"src":"assets/1c78efb74f6633e3.jpg","thumbnail":"assets/1c78efb74f6633e3-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":393},"anime":{"local":"assets/pilgrimage/kyoto/kon_a.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/k/keyboar/20090617/20090617155544.jpg","credit":"©かきふらい・芳文社／樱高轻音部；对照整理：きーぼー堂","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"","width":380,"height":214,"src":"assets/24c68f7adccd46be.jpg","thumbnail":"assets/24c68f7adccd46be-640q82.jpg","thumbnailWidth":380,"thumbnailHeight":214},"sources":[{"title":"机位方向与对照说明","url":"https://keyboar.hatenablog.com/entry/20100918/1284742598"}],"status":"matched_pair_with_modified_background","priority":"same_stop","match_note":"","name_ja":"鴨川デルタ"},{"id":"kiyomizu-conan","place_ids":["kiyomizu"],"date":"2026-12-02","event_id":"kiyomizu_visit","title":"清水舞台 · 新一与小兰","work":"名侦探柯南：红之校外旅行","scene":"第927—928集的清水寺参观与新兰剧情；亦为《迷宫的十字路》出现地点。","shooting_note":"随清水寺原有参观走到本堂和舞台，对照建筑屋顶与木栏杆；实景和官方宣传视觉用于认建筑，角度不完全一致。坐标为本堂建筑参考点，不是某根合影栏杆。","coordinates":{"lat":34.994822,"lng":135.784915,"precision":"文化厅清水寺本堂建筑参考点；不是新兰栏杆合影机位","source_url":"https://kunishitei.bunka.go.jp/heritage/detail/102/1729"},"real":{"local":"assets/pilgrimage/kyoto/conan_m7_pair.jpg","source_url":"https://conan-diary.com/wp-content/uploads/2022/08/清水寺.jpg","credit":"名探偵コナンの捜査日誌","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"清水寺建筑实景，非新兰合影同角度","width":600,"height":450,"src":"assets/8df8d24d992a4fcc.jpg","thumbnail":"assets/8df8d24d992a4fcc-640q82.jpg","thumbnailWidth":600,"thumbnailHeight":450},"anime":{"local":"assets/pilgrimage/kyoto/conan_kiyomizu_official.jpg","source_url":"https://www.tms-e.co.jp/archives/pdf/release/2019/20190716_conan_movie_event.pdf","credit":"©青山刚昌／小学馆・读卖电视台・TMS 1996；TMS官方2019/7/16新闻稿","usage":"公开来源的少量缩略图，用于本机个人旅行场景对照；未取得公开再分发授权。保留作者与原页链接。","note":"官方《红之校外旅行》上映会宣传视觉，清水舞台为背景；不是新兰合影逐帧截图。","width":640,"height":905,"src":"assets/4784d891f3197e54.jpg","thumbnail":"assets/4784d891f3197e54-640q82.jpg","thumbnailWidth":453,"thumbnailHeight":640},"sources":[{"title":"TMS官方宣传视觉（历史活动，仅用于作品参考）","url":"https://www.tms-e.co.jp/archives/pdf/release/2019/20190716_conan_movie_event.pdf"},{"title":"读卖电视台官方圣地节目","url":"https://www.ytv.co.jp/cematin/backnumber/20221104.html"},{"title":"927集官方剧情","url":"https://www.ytv.co.jp/conan/archive/k20190105.html"},{"title":"爱好者新兰合影位置参考","url":"https://yuriponnu1412.blog.fc2.com/blog-entry-42.html"}],"status":"official_visual_location_comparison","priority":"main","match_note":"官方《红之校外旅行》上映会宣传视觉，清水舞台为背景；不是新兰合影逐帧截图。 ","name_ja":"清水寺 本堂"},{"id":"senren-sannenzaka","place_ids":["sannenzaka"],"date":"2026-12-02","event_id":"higashiyama_walk","title":"三年坂·穗织街景","work":"千恋＊万花","scene":"穗织商店街背景：石板路、两侧町屋与右侧屋檐。","shooting_note":"在玩家地图标点附近沿街找两侧屋檐的构图；游戏店名经过改写，实景店招也可能变化。利用三年坂原有步行时间顺拍。","coordinates":{"lat":34.997747,"lng":135.781049,"precision":"玩家地图参考点；邻近街段级，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者文章内嵌地图的公开KML，名称「産寧坂」，coordinates=135.7810494,34.9977472,0；另与街段坐标表交叉核对。","crosscheck_url":"https://visual.information.jp/blog/2012/12/01/201212-article_1/"},"real":{"local":"assets/pilgrimage/senren/sannenzaka-2.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20210221/20210221210038.jpg","credit":"owleye / yuiyu22，2020-12-01拍摄","width":800,"height":450,"src":"assets/80e4e16b2ea7fec3.jpg","thumbnail":"assets/80e4e16b2ea7fec3-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/senren/sannenzaka-1.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20210221/20210221210034.jpg","credit":"游戏画面 © YUZUSOFT；对照来源 owleye / yuiyu22","width":800,"height":450,"src":"assets/56f9ae3aefc021ab.jpg","thumbnail":"assets/56f9ae3aefc021ab-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"玩家实地画面对照：千恋＊万花","url":"https://rinnow.hatenablog.com/entry/senren"},{"title":"作者公开地图KML（坐标证据）","url":"https://www.google.com/maps/d/kml?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz&forcekml=1"}],"status":"已目视核对成对图片；作品关联为玩家对照，非官方认证","match_note":"玩家实地对照；作品有改绘，不代表官方认定或精确摄影站位。","name_ja":"産寧坂"},{"id":"senren-ninenzaka","place_ids":["ninenzaka"],"date":"2026-12-02","event_id":"higashiyama_walk","title":"二年坂·街角店铺","work":"千恋＊万花","scene":"游戏中的售鱼店街角背景；玩家实拍对应とうふまんじゅう店外。","shooting_note":"对照右侧店铺转角、屋檐和石板路弯向。实景标点在二年坂南端附近，别只在台阶中心寻找。招牌和售卖内容不必与游戏一致。","coordinates":{"lat":34.998032,"lng":135.780737,"precision":"玩家地图参考点；街角附近，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者文章内嵌地图公开KML，名称「二年坂」，coordinates=135.7807374,34.998032,0；与二年坂01街段标点34.998,135.7808交叉核对。","crosscheck_url":"https://visual.information.jp/blog/2012/12/01/201212-article_1/"},"real":{"local":"assets/pilgrimage/senren/ninenzaka-2.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20210221/20210221210052.jpg","credit":"owleye / yuiyu22，2020-12-01拍摄","width":800,"height":450,"src":"assets/289abb19cde6ba69.jpg","thumbnail":"assets/289abb19cde6ba69-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/senren/ninenzaka-1.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20210221/20210221210045.jpg","credit":"游戏画面 © YUZUSOFT；对照来源 owleye / yuiyu22","width":800,"height":450,"src":"assets/f283a859eaca7229.jpg","thumbnail":"assets/f283a859eaca7229-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"玩家实地画面对照：千恋＊万花","url":"https://rinnow.hatenablog.com/entry/senren"},{"title":"作者公开地图KML（坐标证据）","url":"https://www.google.com/maps/d/kml?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz&forcekml=1"}],"status":"已目视核对成对图片；作品关联为玩家对照，非官方认证","match_note":"玩家实地对照；作品有改绘，不代表官方认定或精确摄影站位。","name_ja":"二寧坂"},{"id":"conan-tsutenkaku","place_ids":["shinsekai"],"date":"2026-12-03","event_id":"shinsekai_dinner","title":"通天阁·天空楼阁","work":"名侦探柯南：世纪末的魔术师","scene":"怪盗基德登场的通天阁；电影画面呈现塔顶、展望层和塔身。","shooting_note":"新世界晚饭时从地面拍塔体外观即可。所附两图用于辨认建筑，视角不同；电影塔顶视角不能在街面复刻，不为巡礼新增登塔。","coordinates":{"lat":34.6525,"lng":135.506302,"precision":"通天阁建筑级坐标；不是电影摄影站位","source_url":"https://www.latlong.net/place/ts-tenkaku-japan-22689.html","evidence":"LatLong列出通天阁34.652500,135.506302；与维基百科34.6525361,135.5063250相符至建筑范围。","crosscheck_url":"https://ja.wikipedia.org/wiki/通天閣"},"real":{"local":"assets/pilgrimage/senren/tsutenkaku-real.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/t/turquoise2134/20221029/20221029060211.jpg","credit":"たーこいず / turquoise2134，2022年巡礼记录","width":768,"height":1024,"src":"assets/0c7c097b5fe3eac5.jpg","thumbnail":"assets/0c7c097b5fe3eac5-640q82.jpg","thumbnailWidth":480,"thumbnailHeight":640},"anime":{"local":"assets/pilgrimage/senren/tsutenkaku-film.jpg","source_url":"https://www.j-culturearc.com/wp-content/uploads/2025/04/conan-kansai-spot14-1024x556.avif","credit":"电影画面 © 青山剛昌／小学館・読売テレビ・ポリグラム・小学館プロダクション・東宝・TMS；来源 星顆日本","width":1024,"height":556,"src":"assets/a50e8fd018c4b64c.jpg","thumbnail":"assets/a50e8fd018c4b64c-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":348},"sources":[{"title":"星顆日本：通天阁电影画面出处","url":"https://www.j-culturearc.com/conan-osaka-locations/"},{"title":"たーこいず：大阪柯南实地记录","url":"https://turquoise2134.hatenablog.com/entry/2022/10/30/120000"},{"title":"MATCHA：世纪末的魔术师与通天阁","url":"https://matcha-jp.com/jp/18878"},{"title":"通天阁坐标","url":"https://www.latlong.net/place/ts-tenkaku-japan-22689.html"}],"status":"已找到电影建筑画面与实景；地点可辨认，两图不是同机位","match_note":"","name_ja":"通天閣"},{"id":"conan-ebisubashi","place_ids":["glico"],"date":"2026-12-05","event_id":"glico_photo","title":"戎桥·恋爱的暗号","work":"名侦探柯南","scene":"日版第763—764集《柯南与平次 恋爱的暗号》：平次在戎桥调查，桥栏、道顿堀商店招牌为对照。","shooting_note":"在桥面寻找弧形桥栏，对照南侧道顿堀商店入口与招牌。动画构图有改绘；示例实景拍摄较早，当前广告可能不同。沿用20:40—21:00的格力高短拍时段。","coordinates":{"lat":34.669074,"lng":135.50129,"precision":"戎桥地点级坐标；不是平次站位或摄影站位","source_url":"https://heritage.jsce-kansai.net/heritage/detail.html?id=236","evidence":"土木学会关西支部土木遗产DB：戎橋 緯度・経度34.669074,135.501290。该记录说明历史桥梁，不用于声称现桥构造年代。"},"real":{"local":"assets/pilgrimage/senren/ebisu-ameba-2.jpg","source_url":"https://stat.ameba.jp/user_images/20191214/13/kurukun52/b9/d6/j/o0550032014674987267.jpg","credit":"クルくん / kurukun52（文章2019年发布）","width":550,"height":320,"src":"assets/1ccf77d4f9ef2bfc.jpg","thumbnail":"assets/1ccf77d4f9ef2bfc-640q82.jpg","thumbnailWidth":550,"thumbnailHeight":320},"anime":{"local":"assets/pilgrimage/senren/ebisu-ameba-1.jpg","source_url":"https://stat.ameba.jp/user_images/20191214/13/kurukun52/2c/85/j/o0550031014674987259.jpg","credit":"动画画面 © 青山剛昌／小学館・読売テレビ・TMS；对照来源 クルくん","width":550,"height":310,"src":"assets/9ce82e2976e087d7.jpg","thumbnail":"assets/9ce82e2976e087d7-640q82.jpg","thumbnailWidth":550,"thumbnailHeight":310},"sources":[{"title":"读卖电视台：第763集官方剧情（明确戎桥）","url":"https://www.ytv.co.jp/conan/archive/k20150110.html"},{"title":"クルくん：戎桥动画与实景对照","url":"https://ameblo.jp/kurukun52/entry-12558220445.html"},{"title":"土木学会关西支部：戎桥坐标","url":"https://heritage.jsce-kansai.net/heritage/detail.html?id=236"}],"status":"官方剧情确认地点；动画与实景已目视核对，非精确同机位","match_note":"","name_ja":"戎橋"},{"id":"senren-ikuta","place_ids":["ikuta"],"date":"2026-12-06","event_id":"ikuta_visit","title":"生田神社·建实神社外观","work":"千恋＊万花","scene":"建实神社社殿正面背景，红柱、屋顶与狛犬形成主要对应。","shooting_note":"到拝殿前广场，从中轴稍侧的位置对照屋顶、红柱和狛犬；示例不是完全同机位。游戏把周围楼房改绘成树木，不必寻找一模一样的背景。在当天45分钟参观时段内拍摄。","coordinates":{"lat":34.694574,"lng":135.190777,"precision":"玩家地图参考点；拝殿前区域，未实测相机站位","source_url":"https://www.google.com/maps/d/viewer?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz","evidence":"作者公开KML名称「生田神社」，coordinates=135.1907772,34.694574,0。神社地点另由國學院大學神社DB确认，DB中心点为34°41′42.0″N、135°11′27.1″E，非摄影位置。","crosscheck_url":"https://kojiki.kokugakuin.ac.jp/jinjya/ikutajinja/"},"real":{"local":"assets/pilgrimage/senren/ikuta-2-compact.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20260322/20260322231741.jpg","credit":"owleye / yuiyu22，2026-03-21拍摄","width":1000,"height":563,"src":"assets/e5bcd2fe44ea69d7.jpg","thumbnail":"assets/e5bcd2fe44ea69d7-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/senren/ikuta-1-compact.jpg","source_url":"https://cdn-ak.f.st-hatena.com/images/fotolife/y/yuiyu22/20220929/20220929000834_original.png","credit":"游戏画面 © YUZUSOFT；对照来源 owleye / yuiyu22","width":1000,"height":563,"src":"assets/78e4300b384eefe0.jpg","thumbnail":"assets/78e4300b384eefe0-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"玩家实地画面对照：千恋＊万花","url":"https://rinnow.hatenablog.com/entry/senren"},{"title":"作者公开地图KML（坐标证据）","url":"https://www.google.com/maps/d/kml?mid=1y37l5O_WaP3kRxDXAFT1WVEYR2q4sQVz&forcekml=1"},{"title":"國學院大學：生田神社位置","url":"https://kojiki.kokugakuin.ac.jp/jinjya/ikutajinja/"}],"status":"已目视核对成对图片；作品关联为玩家对照，非官方认证","match_note":"玩家实地对照；作品有改绘，不代表官方认定或精确摄影站位。","name_ja":"生田神社"},{"id":"witch-kitano","place_ids":["starbucks_kitano"],"date":"2026-12-06","event_id":"kitano_lunch","title":"北野物语馆 · 七绪咖啡店","name_ja":"スターバックス コーヒー 神戸北野異人館店","work":"魔女的夜宴／サノバウィッチ","scene":"七绪的咖啡店 Schwarze Katze 外观背景。","shooting_note":"在北野坂人行道对照绿色门廊、窗框和石墙；画面有改绘，不到车道上追机位。","match_note":"玩家实景对照，非官方认定；两图角度略有差异。","coordinates":null,"status":"ready","checked_on":"2026-10-01","real":{"local":"assets/pilgrimage/kobe/kitano-real.jpg","source_url":"https://azusairi.com/?p=2576","image_url":"https://azusairi.com/wp-content/uploads/2024/02/IMG_5614-1-1024x576.jpg","credit":"アズサイリ，2024年文章历史照片","license":"原权利方保留版权；用于地点识别与作品场景对照，非开放许可","visual_verified":true,"width":1024,"height":576,"src":"assets/cc04bc3c6f44a2b5.jpg","thumbnail":"assets/cc04bc3c6f44a2b5-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"anime":{"local":"assets/pilgrimage/kobe/kitano-game.png","source_url":"https://azusairi.com/?p=2576","image_url":"https://azusairi.com/wp-content/uploads/2024/02/サノバウィッチ-84.png","credit":"游戏画面 © YUZUSOFT/JUNOS INC.；对照：アズサイリ","license":"原权利方保留版权；用于地点识别与作品场景对照，非开放许可","visual_verified":true,"width":683,"height":384,"src":"assets/4b47402aad0eca57.png","thumbnail":"assets/4b47402aad0eca57-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360},"sources":[{"title":"门店官方地址与营业","url":"https://store.starbucks.co.jp/detail-940/"},{"title":"玩家作品与实景对照","url":"https://azusairi.com/?p=2576"}]},{"id":"fate-kobe-bridge","place_ids":["kobe_bridge"],"date":"2026-12-06","event_id":"kobe_bridge_visit","title":"神户大桥 · 冬木大桥","name_ja":"ポートアイランド北公園","work":"Fate/stay night","scene":"冬木大桥的红色桥梁背景，取景参考在桥南侧北公园。","shooting_note":"从北公园海边朝桥北端拍，找红色拱架、桥下水面与石墩；不必走完整座桥。","match_note":"原作者对照图：上方作品画面，下方实景。实景为夜间照片，本次在15:00—16:30时段到访。","coordinates":null,"status":"ready","checked_on":"2026-10-01","comparison":{"local":"assets/pilgrimage/kobe/bridge-comparison.jpeg","source_url":"https://aurakaze.blog/fate-jyunreihyogo/","image_url":"https://aurakaze.blog/wp-content/uploads/2023/11/38-3-scaled.jpeg","credit":"上：游戏画面 © TYPE-MOON；下：Aura Kaze，2023年实景。保留原作者对照图。","license":"原权利方保留版权；用于地点识别与作品场景对照，非开放许可","visual_verified":true,"width":1529,"height":2560,"src":"assets/2614e76cc4b216f7.jpeg","thumbnail":"assets/2614e76cc4b216f7-640q82.jpg","thumbnailWidth":382,"thumbnailHeight":640},"sources":[{"title":"北公园官方位置与交通","url":"https://www.feel-kobe.jp/kobe-yakei/spots/port-island-kita-park/"},{"title":"作品与实景对照","url":"https://aurakaze.blog/fate-jyunreihyogo/"}]}],"coverage":[{"date":"2026-12-04","title":"USJ柯南与任天堂","note":"这是主题园区体验，不是原作实景取景地；沿用园区照片，不虚构实景／动画同机位。"},{"date":"2026-12-01","title":"平和书店 · 京阿尼周边","note":"店内逛30—40分钟；照片、地图与营业信息见行程。","event_id":"heiwa_visit"},{"date":"2026-12-01","title":"车站联动展示","note":"久美子贩售机与三人立牌；位置和入场提示见行程。","event_id":"keihan_uji_visit"}],"rally":{"date":"2026-12-01","entry_url":"https://app.raund.net/keihan-euphonium_2026autumn/","source_url":"https://www.keihan.co.jp/euphonium/","map_pdf":"https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf","spots":[{"id":"agata","title":"縣神社","name_ja":"縣神社","caption":"官方作品画面 · 夏祭场景，非12月现场","fit":"集章点","note":"表参道之后、久美子椅之前短停；延迟时可省。","map_url":"https://www.google.com/maps/search/?api=1&query=34.88848,135.80573","anime":{"local":"assets/uji-rally/agata.jpg","source_url":"https://www.keihan.co.jp/euphonium/","image_url":"https://www.keihan.co.jp/euphonium/assets/img/img_spot6.jpg","credit":"京阪活动官网／©武田綾乃・宝島社／「響け！」製作委員会2024","width":750,"height":480,"src":"assets/60a30979ad3408f1.jpg","thumbnail":"assets/60a30979ad3408f1-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":410},"coordinates":{"lat":34.88848,"lng":135.80573,"precision":"官方数字集章地点；非摄影站位","source_url":"https://app.raund.net/keihan-euphonium_2026autumn/spots/detail/?id=36569"},"real":{"local":"assets/uji-rally/agata-real.webp","source_url":"https://www.kyoto-kankou.or.jp/info_search/366","image_url":"https://www.kyoto-kankou.or.jp/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NTM0NiwicHVyIjoiYmxvYl9pZCJ9fQ==--a2c50e461eb1dac3abfe2a93ad50ac86298d6319/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwicmVzaXplX3RvX2ZpdCI6WzM4NDAsMjE2MF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--d4a38f8dcc86a603c3d632cf5b22690482f0e7f5/1607.jpg","credit":"京都府观光联盟／縣神社","width":3224,"height":2160,"src":"assets/7f42989896adfe38.webp","thumbnail":"assets/7f42989896adfe38-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":429},"match_note":"神社实景；作品为夏祭场景，与12月现场不同。"},{"id":"suikan","title":"水管桥河岸","name_ja":"宇治川河川敷（水管橋）","caption":"官方作品画面 · 明日香与久美子","fit":"集章点","note":"下山后前往东岸河川敷，白天拍照并顺路领章；不走上水管桥。","map_url":"https://www.google.com/maps/search/?api=1&query=34.90041,135.80153","anime":{"local":"assets/uji-rally/suikan.jpg","source_url":"https://www.keihan.co.jp/euphonium/","image_url":"https://www.keihan.co.jp/euphonium/assets/img/img_spot7.jpg","credit":"京阪活动官网／©武田綾乃・宝島社／「響け！」製作委員会2024","width":750,"height":480,"src":"assets/f1bdb2de72b9afc0.jpg","thumbnail":"assets/f1bdb2de72b9afc0-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":410},"coordinates":{"lat":34.90041,"lng":135.80153,"precision":"官方数字集章地点；非摄影站位","source_url":"https://app.raund.net/keihan-euphonium_2026autumn/spots/detail/?id=36568"},"match_note":"同一河岸，拍摄角度不同。","real":{"local":"assets/uji-rally/suikan-real.webp","source_url":"https://kyoshippo.jp/introduce/eupho_suikankyo-230730/","image_url":"https://kyoshippo.jp/wp-content/uploads/2023/07/eupho_suikankyo230619-12.webp","credit":"京のシッポ · 2023年河岸实拍","license":"原作者版权所有；场景对照引用，非开放许可","width":1920,"height":1080,"visual_verified":true,"src":"assets/55d5e02c181d7740.webp","thumbnail":"assets/55d5e02c181d7740-640q82.jpg","thumbnailWidth":640,"thumbnailHeight":360}}],"rules":["本日走縣神社、水管桥两点，可各领一个角色相框；不满足后期三章集合相框条件。","前期9/1—10/31：井川用水機場前（久美子）、宇治桥（奏）、大吉山展望台（丽奈）。12/1不能补前期章。","后期11/1—12/20：水管桥河岸（明日香）、縣神社（夏纪）、許波多神社（优子）。单点可领对应角色相框，后期三点完成可领三人集合相框。","这是手机GPS数字集章，不是纸本盖印。参加免费，交通与流量另计；先在官方活动站创建账号，到现场定位后领取。","使用同一个手机浏览器：iPhone为iOS 17以上＋Safari，Android为Android 12以上＋Chrome。不要使用微信等应用内浏览器或无痕模式；日本境外销售的部分机型可能不受支持。","联网并允许定位；相框可用至2027/1/31。未取得前期3枚印章，仅12月一天不能满足6枚印章的抽奖条件。","活动范围内的开放时间与GPS领取判定以现场、官方活动站为准。攻略勾选不会替你领取官方数字章。"],"recommendation":"縣神社 → 水管桥：领取两个单点相框。"}};
const DETAILS = {
  "2026-11-30": {
    "short": "抵达京都",
    "eyebrow": "香港 → 关西机场 → 京都",
    "focus": "抵达关西，入住京都。",
    "key": "HX618抵达关西T1，取箱后乘HARUKA去京都。",
    "cover": "kyoto_station",
    "photos": [
      "kyoto_station"
    ],
    "phases": [
      [
        "飞行与抵达",
        [
          "flight_out",
          "arrival_transfer"
        ]
      ],
      [
        "夜间 · 入住休息",
        [
          "checkin_kyoto",
          "dinner_arrival"
        ]
      ]
    ],
    "routePhases": [
      "抵达",
      "抵达",
      "夜间",
      "夜间"
    ],
    "transport": [
      "关西T1入境、取行李后，按Railway／鉄道指引到车站；按订单兑换或使用已购HARUKA票，依入境进度选班次。",
      "京都站认中央口／京都塔侧。酒店官方的约 5 分钟步行不包含站台到出口。",
      "入住时确认 12/3 退房寄存位置；两间酒店均不含早餐。",
      "去程建议08:25抵达香港T2；当前10:25停止值机。T2值机、安检和出境后，乘APM前往T1中场客运廊（T1M）登机。"
    ],
    "meals": [
      [
        "晚餐",
        "首选",
        "すき家 烏丸七条店",
        "¥700–1,200",
        "真苧屋町 197",
        "牛丼／定食；参考营业 04:00—次日03:00。",
        "https://maps.sukiya.jp/jp/detail/970"
      ],
      [
        "晚餐",
        "备选",
        "名代とんかつ かつくら 京都ポルタ店",
        "¥2,500以内",
        "京都站大楼 11 楼",
        "非地下街。参考11:00—22:00，最后点餐21:30；长队时换简餐。",
        "https://www.katsukura.jp/shops/porta/"
      ]
    ],
    "cityLabel": "抵达京都",
    "summary": "机场 → 酒店",
    "eventDetails": {
      "flight_out": {
        "title": "值机与登机",
        "items": [
          {
            "text": "HX618的值机与登机口关闭时限按航司通知及登机牌复核。",
            "url": "https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6"
          },
          {
            "text": "T2香港航空Q行段值机、托运；本次白天出发，在T2完成安检与出境，再乘APM到T1中场客运廊（T1M）。按登机牌和现场指引找登机口。",
            "url": "https://www.hongkongairlines.com/webfile/static/pdf/Check-in%20counter%20relcoation%20to%20T2%20FAQ%20-%20EN.pdf?siteId=6"
          }
        ]
      }
    }
  },
  "2026-12-01": {
    "short": "宇治",
    "eyebrow": "京都 ⇄ 宇治",
    "focus": "",
    "key": "上午芭菲，午后河岸巡礼与登山，傍晚书店。",
    "cover": "daikichi",
    "photos": [
      "nakamura",
      "uji_bridge",
      "bench",
      "daikichi",
      "suikan",
      "heiwa_books",
      "keihan_uji"
    ],
    "phases": [
      [
        "上午 · 抹茶与街道巡礼",
        [
          "uji_transfer",
          "uji_parfait",
          "uji_lunch_walk"
        ]
      ],
      [
        "午间 · 午餐",
        [
          "uji_lunch"
        ]
      ],
      [
        "下午 · 河岸与登山",
        [
          "uji_approach",
          "agata_stamp",
          "uji_pilgrimage",
          "uji_shrines",
          "daikichi_visit",
          "suikan_stamp"
        ]
      ],
      [
        "傍晚 · 书店与晚餐",
        [
          "heiwa_visit",
          "keihan_uji_visit",
          "uji_dinner_walk",
          "uji_saizeriya_dinner"
        ]
      ],
      [
        "夜间 · 返回京都",
        [
          "uji_return",
          "station_stage",
          "kyoto_rest"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
      "上午",
      "上午",
      "午间",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "傍晚",
      "傍晚",
      "傍晚",
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "京都站乘JR奈良线到JR宇治，出站步行去中村藤吉本店。09:00—10:00含酒店到站、候车及步行，具体班次临行确认。",
      "午饭后从西岸表参道、縣神社到久美子椅，经喜撰桥、塔之岛、朝雾桥到东岸；依次短看宇治神社、宇治上神社，再登大吉山。",
      "大吉山原路下山后，沿公共道路去水管桥东岸河川敷；先完成河岸拍照，再去アル・プラザ宇治東3F的平和书店，不走上水管桥。",
      "萨莉亚晚饭后步行到JR宇治，乘JR奈良线往京都；出站后从中央口一侧上4F室町小路广场拍《宝岛》舞台，再步行回TUNE。不要在京阪宇治站乘车。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "お肉ダイニング きく",
        "预算 ¥1,000–2,000",
        "宇治妙楽4-4，協栄ビル2F",
        "京吹粉丝聚集的餐厅，非动画取景点。当前营业及咖喱价格临行复核；等位较久时可换附近简餐。",
        "https://www.pref.kyoto.jp/syokuloss/suishin88.html",
        "kiku"
      ],
      [
        "午餐",
        "备选",
        "宇治橋 西岸の飲食店",
        "¥1,000–2,500",
        "宇治桥西侧",
        "附近简餐，优先有座位的店。",
        ""
      ],
      [
        "晚餐",
        "首选",
        "サイゼリヤ 宇治里尻店",
        "预算 ¥700–1,200",
        "宇治里尻77",
        "营业参考11:00—24:00。",
        "https://shop.saizeriya.co.jp/sz_restaurant/spot/detail?code=0524",
        "saizeriya_uji"
      ],
      [
        "晚餐",
        "备选",
        "JR宇治駅 周辺の飲食店",
        "¥1,000–2,500",
        "JR宇治站周边",
        "可改在JR宇治站或京都站吃简餐；若回京都后才吃，返店相应顺延，仍保留4F《宝岛》舞台15—20分钟。",
        ""
      ],
      [
        "茶歇",
        "首选",
        "中村藤吉本店",
        "价格以当日菜单为准",
        "宇治壱番十番地",
        "咖啡厅参考10:00—17:30，不接受预约。领号后能否暂离、过号如何处理，请询问店员。",
        "https://tokichi.jp/pages/honten-store-page",
        "nakamura"
      ]
    ],
    "extra": [
      "集章需手机联网定位；攻略勾选不等于官方领章。"
    ],
    "foodIdeas": [],
    "cityLabel": "宇治",
    "summary": "河岸巡礼、大吉山、京都站",
    "eventDetails": {
      "heiwa_visit": {
        "title": "店铺与营业",
        "items": [
          {
            "text": "平和書店 アル・プラザ宇治東店，莵道平町28-1，商场3F。参考10:00—20:00，休息日随商场。",
            "url": "https://directshop.jp/store/10293/"
          },
          {
            "text": "京阿尼周边与展陈以现场为准；配图为商场外观。",
            "url": "https://www.kyotoanimation.co.jp/event/kyoani-anime-exhibition/"
          }
        ]
      },
      "keihan_uji_visit": {
        "title": "展示与探访地图",
        "items": [
          {
            "text": "2026秋季宇治站等身立牌为小奏、久美子、丽奈，公布展示期9/1—12/20；站内另有久美子语音贩售机。",
            "url": "https://www.keihan.co.jp/euphonium/"
          },
          {
            "text": "先看闸机外展示；进入付费区前，用站内对讲机询问入场方式，不直接刷IC卡进出。",
            "url": "https://www.keihan.co.jp/traffic/station/310/info.html"
          },
          {
            "text": "傍晚案内所可能已关，提前保存官方巡礼PDF；纸本现场询问。",
            "url": "https://www.keihan.co.jp/euphonium/assets/img/pamphlet2.pdf"
          }
        ]
      }
    }
  },
  "2026-12-02": {
    "short": "京都",
    "eyebrow": "京都 · 出町 → 清水寺 → 高台寺",
    "focus": "《玉子市场》巡礼，白天清水寺，傍晚高台寺。",
    "key": "16:45坐下休息；夜枫遇疲劳或长队可取消。",
    "cover": "kiyomizu",
    "photos": [
      "demachi",
      "delta",
      "kiyomizu",
      "sannenzaka",
      "yasaka_tower",
      "ninenzaka",
      "nene",
      "kodaiji"
    ],
    "phases": [
      [
        "上午 · 出町巡礼",
        [
          "demachi_transfer",
          "demachi_visit"
        ]
      ],
      [
        "午间 · 午饭与鸭川",
        [
          "demachi_lunch",
          "delta_visit"
        ]
      ],
      [
        "下午 · 清水寺与东山",
        [
          "kiyomizu_transfer",
          "kiyomizu_visit",
          "higashiyama_walk"
        ]
      ],
      [
        "傍晚 · 先休息再赏夜枫",
        [
          "gion_rest",
          "kodaiji_night"
        ]
      ],
      [
        "夜间 · 晚饭与返店",
        [
          "gion_dinner_walk",
          "gion_dinner",
          "kyoto_night_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "午间",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "傍晚",
      "夜间"
    ],
    "transport": [
      "京都站地铁烏丸线，国际会馆方向→今出川，再步行去出町。从酒店出发约45—55分钟。",
      "京阪出町柳为地下车站，与地上叡山电铁分开识别；选停清水五条的普通／准急等合适列车。",
      "清水寺导航设「清水寺 仁王門」，按正式参道进入；部分地图道路不能入寺。",
      "三年坂→八坂通短拍→二年坂→宁宁之道，在高台寺附近休息。",
      "回程可阪急京都河原町→烏丸，步行换地铁四条→京都；累了打车。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "DELTA Bistro, Coffee Shop & Gallery",
        "¥1,400–2,200",
        "三荣町 62",
        "周三参考11:00—18:00，午餐至约14:30。餐盘1,400起。",
        "https://delta.kyotographie.jp/cafe/"
      ],
      [
        "午餐",
        "备选",
        "ゼッテリア 京阪出町柳駅店",
        "约 ¥800–1,200",
        "田中上柳町 25-3",
        "DELTA满座时，11:40—12:50改为先拍鸭川，再到站旁汉堡店午餐；约13:00乘京阪，不再重复河岸段。",
        "https://www.zetteria.jp/shop/shop3601.html"
      ],
      [
        "茶歇",
        "首选",
        "二年坂・ねねの道 周辺のカフェ",
        "约 ¥500–800",
        "二年坂／宁宁之道、高台寺附近",
        "附近找座位休息30分钟；星巴克有空位再去。",
        "https://store.starbucks.co.jp/detail-1476/"
      ],
      [
        "晚餐",
        "首选",
        "名代おめん 四条先斗町店",
        "¥1,520–2,400",
        "柏屋町 171-2",
        "晚市17:00—21:00，20:00最后点餐；不接受预约。",
        "https://omen.co.jp/pages/shops"
      ],
      [
        "晚餐",
        "备选",
        "松屋 四条河原町店",
        "约 ¥700–1,200",
        "奈良屋町 305",
        "参考24小时，牛丼／定食。",
        "https://pkg.navitime.co.jp/matsuyafoods/spot/detail?code=0000000481"
      ]
    ],
    "extra": [
      "商店街巡礼看西入口、拱廊与吊鱼装饰。",
      "飞石可在岸边拍；水位高或雨天不下河。"
    ],
    "foodIdeas": [
      {
        "place": "crepe",
        "label": "候选店 · 待确认",
        "title": "新京极抹茶布蕾可丽饼",
        "text": "取消夜枫且仍有体力、已到河原町一带时再考虑；先确认新京极店营业，不挤占东山休息。配图为品牌产品。",
        "budget": "价格与新京极店营业时间待确认",
        "source": "https://www.shinkyogoku.or.jp/guide/",
        "event_id": "gion_dinner"
      }
    ],
    "cityLabel": "京都",
    "summary": "出町、清水寺、高台寺"
  },
  "2026-12-03": {
    "short": "京都 → 大阪",
    "eyebrow": "京都塔 → 伏见稻荷 → 大阪",
    "focus": "",
    "key": "先寄存行李，京都塔联动后午饭，再去伏见稻荷；回京都取箱后前往大阪。",
    "cover": "kyoto_tower",
    "photos": [
      "kyoto_tower",
      "inari",
      "shinsekai"
    ],
    "phases": [
      [
        "上午 · 京都塔联动",
        [
          "checkout_kyoto",
          "kyoto_tower_transfer",
          "kyoto_tower_visit"
        ]
      ],
      [
        "午间 · 京都站午餐",
        [
          "kyoto_lunch",
          "inari_transfer"
        ]
      ],
      [
        "下午 · 伏见稻荷与搬酒店",
        [
          "inari_visit",
          "luggage_pickup",
          "osaka_transfer"
        ]
      ],
      [
        "夜间 · 新世界",
        [
          "checkin_osaka",
          "shinsekai_dinner",
          "osaka_evening_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "午间",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "酒店到京都塔步行预留10—15分钟；先退房寄存，不带大箱上塔。",
      "午饭后从京都站乘JR奈良线普通列车到稻荷；确认列车停靠稻荷。",
      "稻荷参观后乘JR奈良线普通回京都，步行到TUNE或已确认的寄存点取行李。",
      "取箱后京都站JR新快速→大阪，换环状线至JR新今宫，再步行去酒店；共预留约1.5—2小时。",
      "酒店与新世界之间沿街步行；晚饭和外观短拍后直接回酒店。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "すき家 烏丸七条店",
        "¥700–1,200",
        "真苧屋町197，京都站北侧",
        "牛丼／定食；含步行和坐下用餐，12:30前后去京都站。",
        "https://maps.sukiya.jp/jp/detail/970"
      ],
      [
        "午餐",
        "备选",
        "名代とんかつ かつくら 京都ポルタ店",
        "¥2,500以内",
        "京都站大楼11楼",
        "参考11:00开门；只有无需久等时选择，预留上下楼时间。",
        "https://www.katsukura.jp/shops/porta/"
      ],
      [
        "晚餐",
        "首选",
        "串かつだるま ジャンジャン店",
        "¥1,500–2,500",
        "惠美须东3-4-4",
        "成人每人需点一杯饮品，一起算预算。参考11:00—22:30，最后点餐22:00。",
        "https://www.kushikatu-daruma.com/location/jyanjyan"
      ],
      [
        "晚餐",
        "备选",
        "餃子の王将 新世界店",
        "约 ¥1,000–1,500",
        "惠美须东3-5-16",
        "入住晚于19点或串炸长队，改简餐。参考11:00—22:30，最后点餐22:00。",
        "https://map.ohsho.co.jp/b/ohsho/info/1454/"
      ]
    ],
    "extra": [
      "京都塔门票成人¥1,000、两人¥2,000，未购票。",
      "通天阁只看外观。"
    ],
    "cityLabel": "京都→大阪",
    "summary": "京都塔联动、伏见稻荷、新世界",
    "eventDetails": {
      "kyoto_tower_visit": {
        "title": "集章、门票与楼层",
        "items": [
          {
            "text": "活动2026/9/1—12/20；叠印台纸免费，共7处章点。",
            "url": "https://www.kyoto-tower.jp/event/eupho26autumn/"
          },
          {
            "text": "展望室5层须购票进入；当前成人¥1,000、两人¥2,000，未购票。10:00—21:00，20:30停止入场。",
            "url": "https://www.kyoto-tower.jp/event/eupho26autumn/"
          },
          {
            "text": "展望室1层是京都塔大楼11楼；周边店10:00—20:30。其他章点按现场指引前往。",
            "url": "https://www.kyoto-tower.jp/event/eupho26autumn/"
          },
          {
            "text": "门票不可再次入场，出场前检查台纸；京都塔叠印与12/1宇治GPS数字集章是不同活动。",
            "url": "https://www.kyoto-tower.jp/faq/"
          }
        ]
      }
    }
  },
  "2026-12-04": {
    "short": "USJ",
    "eyebrow": "大阪 · 普通票游玩日",
    "focus": "任天堂区域与柯南4-D。",
    "key": "约07:00离店，官方营业09:00—19:00；17:00盘点，争取18:00前完成重点。",
    "cover": "usj",
    "photos": [
      "usj"
    ],
    "phases": [
      [
        "入园前",
        [
          "usj_transfer"
        ]
      ],
      [
        "园内 · 随资格与场次调整",
        [
          "usj_app",
          "usj_core",
          "usj_lunch",
          "usj_rest"
        ]
      ],
      [
        "傍晚 · 收尾与返店",
        [
          "usj_finish",
          "usj_dinner"
        ]
      ]
    ],
    "routePhases": [
      "入园前",
      "入园前",
      "园内",
      "夜间"
    ],
    "transport": [
      "JR新今宫→西九条→JRゆめ咲線（樱岛方向）→Universal City→步行园门。",
      "约07:00离店，门到门预算50—70分钟，预计08:00前后到园；不含入口排队。12/4官方营业09:00—19:00，可能提前放行。",
      "前晚将两张有效Studio Pass登记在同一个App、分别命名；两人都过闸后再一起申请任天堂区域资格。",
      "普通票通常不能出园吃午饭再入园；晚饭安排离园后。",
      "离园后从Universal City乘JR梦咲线至西九条，换乘停靠新今宫的环状线列车；途中吃简餐，再回酒店。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "ルイズ N.Y. ピザパーラー",
        "参考套餐 ¥1,750–1,850",
        "USJ纽约区 · Louie’s N.Y. Pizza Parlor",
        "按当天营业与队列调整，坐下吃45—60分钟。",
        "https://www.usj.co.jp/web/en/us/restaurants/louies-ny-pizza-parlor"
      ],
      [
        "午餐",
        "备选",
        "ユニバーサル・スタジオ・ジャパン 園内レストラン",
        "预算 ¥1,000–2,500",
        "园内当日营业餐厅",
        "现场选有座位、排队较短的餐厅。",
        ""
      ],
      [
        "午餐",
        "可选",
        "キノピオ・カフェ",
        "参考意面 ¥2,500／汉堡 ¥2,600",
        "SUPER NINTENDO WORLD",
        "区域资格不等于餐厅资格。部分餐品超预算，饮品另算；申请不合适就省。",
        "https://www.usj.co.jp/web/ja/jp/restaurants/kinopios-cafe"
      ],
      [
        "晚餐",
        "首选",
        "新今宮駅 周辺の飲食店",
        "预算 ¥1,000–2,500",
        "离园后，回酒店顺路",
        "顺路选有座位的简餐。",
        ""
      ],
      [
        "晚餐",
        "备选",
        "松屋 恵美須町店",
        "约 ¥700–1,200",
        "惠美须西2-1-32",
        "距酒店仍需步行；疲劳时选更近的简餐店。",
        "https://pkg.navitime.co.jp/matsuyafoods/spot/detail?code=0000000376"
      ]
    ],
    "extra": [
      "普通门票未购买；需购买两张12/4 Studio Pass。",
      "马里奥赛车与咚奇刚择一优先。",
      "柯南4-D演出约30分钟，等候另计；12/4场次与检修待确认。"
    ],
    "cityLabel": "USJ",
    "summary": "任天堂区域、柯南"
  },
  "2026-12-05": {
    "short": "大阪城 · 奈良",
    "eyebrow": "大阪城 → 奈良 → 日本桥 → 道顿堀",
    "focus": "",
    "key": "09:30离店；大阪城外观短拍，奈良站到站约2小时，日本桥留约2小时15分钟慢逛与休息。",
    "cover": "osaka_castle",
    "photos": [
      "osaka_castle",
      "todaiji",
      "animate",
      "surugaya",
      "glico"
    ],
    "phases": [
      [
        "上午 · 大阪城",
        [
          "castle_transfer",
          "castle_visit"
        ]
      ],
      [
        "午间 · 午饭与前往奈良",
        [
          "castle_station_walk",
          "nara_lunch",
          "nara_transfer"
        ]
      ],
      [
        "下午 · 奈良",
        [
          "nara_park_walk",
          "nara_visit",
          "nara_rest",
          "nara_station_walk"
        ]
      ],
      [
        "傍晚 · 日本桥",
        [
          "nara_return_train",
          "nippombashi_arrival",
          "anime_shopping"
        ]
      ],
      [
        "夜间 · 晚饭与短拍",
        [
          "nippombashi_dinner",
          "dotonbori_walk",
          "glico_photo",
          "nara_day_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
      "上午",
      "午间",
      "午间",
      "午间",
      "午间",
      "下午",
      "下午",
      "下午",
      "傍晚",
      "傍晚",
      "傍晚",
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "酒店步行到JR新今宫，乘大阪环状线内回り（天王寺、鹤桥方向）到森之宫；09:30离店、约10:20到公园入口，步行到天守阁外观拍照处另留20—30分钟步行。",
      "天守阁步行回JR森之宫约30分钟，午饭单独留50分钟；饭后乘环状线外回り（鹤桥、天王寺方向）到JR鹤桥，按近鉄のりかえ换奈良线往近铁奈良，勿上大阪线往伊势。交通合计约70—90分钟，不含午饭。",
      "回大阪乘大阪难波方向且停近铁日本桥的列车；回程含候车、出站与到店步行约75—90分钟。",
      "近铁日本桥站沿东侧街道向南到Animate，再沿御宅路向北到骏河屋动漫·Hobby馆；挑1—2家慢逛，按收获分配时间。",
      "道顿堀戎桥、格力高及心斋桥筋南口短拍后，步行到南海难波→南海新今宫→酒店；不去JR难波。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "森ノ宮駅周辺の飲食店",
        "预算 ¥1,000–2,500",
        "森之宫站附近，沿回站路线选择",
        "含找店、用餐与休息；优先能及时入座的简餐店，未订位。",
        "",
        "morinomiya",
        {
          "pending": true
        }
      ],
      [
        "晚餐",
        "首选",
        "日本橋・難波周辺の飲食店",
        "预算 ¥1,000–2,500",
        "日本桥／难波一带",
        "晚回大阪先购物再吃饭；地图为餐饮片区，餐厅现场选择，未订位。",
        "",
        "namba_area",
        {
          "pending": true
        }
      ]
    ],
    "extra": [
      "大佛殿成人¥800，购买状态待确认，冬季17:00闭门；临行复核营业。"
    ],
    "eventFood": {
      "glico_photo": [
        {
          "place": "eggtart",
          "label": "可选 · 顺路外带",
          "title": "道顿堀蛋挞",
          "text": "现址道顿堀1-7-5，参考11:00—21:00。短拍途中21:00前经过且无队伍时可外带；临近关门或排队就略过。",
          "budget": "按现场单价；两人可先买1—2个",
          "source": "https://eggtart.jp/shop/"
        }
      ]
    },
    "cityLabel": "大阪·奈良",
    "summary": "大阪城、奈良、日本桥、道顿堀",
    "eventDetails": {
      "castle_visit": {
        "title": "公园步行与外观拍照",
        "items": [
          {
            "text": "从森之宫侧公园入口步行约20—30分钟到天守阁；外观拍照和附近休息约25—35分钟。返森之宫另留约30分钟，本行程不入馆。",
            "url": "https://www.osakacastle.net/access/index.html"
          }
        ]
      },
      "anime_shopping": {
        "title": "店铺关门时间",
        "items": [
          {
            "text": "Animate大阪日本桥：周六参考10:00—20:00；池田大楼2号馆1—2楼。",
            "url": "https://www.animate.co.jp/shop/nipponbashi/",
            "place_id": "animate"
          },
          {
            "text": "骏河屋OtARoad动漫·Hobby馆：参考10:00—21:00；平田大楼2—3楼。",
            "url": "https://www.suruga-ya.jp/feature/realstore/otaroad/index.html",
            "place_id": "surugaya"
          },
          {
            "text": "Super Potato御宅路店：周末参考10:00—20:00；平田大楼1楼。",
            "url": "https://www.superpotato.com/shop/otaroad/",
            "place_id": "potato"
          },
          {
            "text": "骏河屋大阪日本桥本馆：参考10:00—21:00；日本桥4-11-3。",
            "url": "https://www.suruga-ya.jp/feature/realstore/nihonbashi_main/index.html",
            "place_id": "surugaya_main"
          },
          {
            "text": "若现场替换为らしんばん，日本桥主要门店约20:00关门；分店不同，地址与营业另核对。",
            "url": "https://www.lashinbang.com/store/"
          }
        ]
      },
      "nara_visit": {
        "title": "大佛殿参观与闭门时间",
        "items": [
          {
            "text": "11月至3月大佛殿08:00—17:00。当前成人¥800、两人¥1,600，现场拝观费以现金支付；购买状态待确认。",
            "url": "https://www.todaiji.or.jp/information/haikan/"
          },
          {
            "text": "参考14:05从南大门向内参观；大佛殿内部保留约30—40分钟。",
            "url": "https://www.todaiji.or.jp/information/haikan/"
          }
        ]
      }
    }
  },
  "2026-12-06": {
    "short": "神户",
    "eyebrow": "生田 → 北野 → 三宫 → 神户大桥",
    "focus": "",
    "key": "09:30出门，白天拍桥；三宫晚餐后直接返店收行李。",
    "cover": "ikuta",
    "photos": [
      "ikuta",
      "starbucks_kitano",
      "kobe_bridge",
      "sannomiya_center"
    ],
    "phases": [
      [
        "上午 · 生田神社",
        [
          "kobe_transfer",
          "ikuta_visit"
        ]
      ],
      [
        "午间 · 北野物语馆",
        [
          "kitano_lunch"
        ]
      ],
      [
        "下午 · 三宫与神户大桥",
        [
          "sannomiya_shopping",
          "sannomiya_rest",
          "kobe_bridge_visit"
        ]
      ],
      [
        "傍晚 · 三宫",
        [
          "sannomiya_evening",
          "sannomiya_dinner"
        ]
      ],
      [
        "夜间 · 回大阪",
        [
          "last_evening_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
      "上午",
      "上午",
      "午间",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "新今宫乘JR环状线到大阪，换JR神户线新快速到三ノ宮，再步行至生田神社；门到神社预留约75分钟。",
      "生田神社→北野，上坡预留20分钟；午饭后沿北野坂下坡至三宫，预留20分钟。",
      "三宫购物：らしんばん在センタープラザ东馆2F，骏河屋1号店在相邻さんプラザ3F；BOOKOFF另在グレースコウベ5F。三店共用90分钟，含换楼、上下楼与结账。",
      "三宫步行到Port Liner站，乘车至中公園，步行约8分钟到北公园；拍摄后原路回中公園，乘三宫方向列车。90分钟包含候车、步行、摄影与往返，不锁定车次。",
      "晚餐后步行回JR三ノ宮，乘JR神户线到大阪，换停靠新今宫的环状线列车；含到站、候车、换乘及回酒店步行，预留75—90分钟。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "スターバックス コーヒー 神戸北野異人館店",
        "预算 ¥1,000–1,500",
        "北野町3-1-31，北野物语馆",
        "轻食配饮品。参考营业08:00—22:00、不定休；餐食与座位以现场为准。",
        "https://store.starbucks.co.jp/detail-940/",
        "starbucks_kitano"
      ],
      [
        "晚餐",
        "首选",
        "和牛自助（餐厅待选）",
        "预算不超过¥6,000",
        "候选：ふうふう亭 三宮店，北長狭通2-11-6 ファンタジービル3F；地图仅标示三宫餐饮区域。",
        "和牛ざんまいコース现价¥5,000（含税、软饮），120分钟，结束前30分钟停止点单。当前营业16:00—23:00；12/6套餐与空位待确认，未订位。",
        "https://fufutei-44.owst.jp/courses/208204865",
        "sannomiya_center",
        {
          "pending": true
        }
      ]
    ],
    "extra": [
      "三宫小吃沿中央街自选，さんプラザ及センタープラザB1有餐饮区。"
    ],
    "foodIdeas": [],
    "cityLabel": "神户",
    "summary": "生田神社、北野、三宫、神户大桥",
    "eventDetails": {
      "sannomiya_shopping": {
        "title": "店铺与沿途小吃",
        "items": [
          {
            "text": "らしんばん：センタープラザ东馆2F；先看毛绒与立牌。",
            "url": "https://www.lashinbang.com/store/"
          },
          {
            "text": "骏河屋1号店：さんプラザ3F-2；看动漫CD、影像与周边。",
            "url": "https://www.suruga-ya.jp/feature/realstore/sannomiya/index.html"
          },
          {
            "text": "BOOKOFF：グレースコウベ5F，三宫町2-10-7；重点看CD、DVD、Blu-ray。",
            "url": "https://www.bookoff.co.jp/shop/shop10822.html"
          },
          {
            "text": "小吃沿中央街自选；さんプラザ、センタープラザB1也有餐饮区。",
            "url": "https://kscp.co.jp/floor/sanb1.html"
          },
          {
            "text": "三店按现场收获分配，预留15—30分钟换楼与结账；小吃不另排队，购物后另休息30分钟。",
            "url": ""
          }
        ]
      }
    }
  },
  "2026-12-07": {
    "short": "返回香港",
    "eyebrow": "新今宫 → 关西机场 → 香港",
    "focus": "清晨前往机场，搭乘HX617返港。",
    "key": "05:15—05:25离店；计划乘南海空港急行05:47→06:28，临行复核。",
    "cover": "kix",
    "photos": [],
    "phases": [
      [
        "清晨 · 去机场",
        [
          "checkout_osaka",
          "airport_train",
          "airport_checkin"
        ]
      ],
      [
        "返港 · 当地时间",
        [
          "flight_home"
        ]
      ]
    ],
    "routePhases": [
      "清晨",
      "清晨",
      "清晨",
      "返港"
    ],
    "transport": [
      "12/6晚把证件、钱包、交通卡、随身物品与早餐单独准备好。",
      "去南海新今宫，认「関西空港」方向；不要误进JR闸机。05:47空港急行无需特急券；具体班次临行复核。",
      "若选择Rapi:t，需相应特急座席票，按最终确认的列车购票。",
      "抵达机场站后前往T1值机、托运、安检和出境；HX617于09:50日本时间起飞，现行柜台截止09:10，登机时限看登机牌。"
    ],
    "meals": [
      [
        "早餐",
        "首选",
        "前夜に用意した朝食",
        "按购买菜单",
        "离店前或到机场后",
        "前晚备好面包、饭团或饮品。",
        ""
      ]
    ],
    "cityLabel": "返回香港",
    "summary": "新今宫 → 关西机场 → 香港",
    "eventDetails": {
      "airport_checkin": {
        "title": "机场手续与截止时间",
        "items": [
          {
            "text": "香港航空官网现列关西T1、起飞前40分钟停止值机；按09:50起飞计算为09:10日本时间。该时刻是截止线，不是到机场目标。临行复核航司通知，柜台与登机口看当天屏幕。",
            "url": "https://content.hongkongairlines.com/en_US/airport-information/worldwide/airportinfo"
          }
        ]
      }
    }
  }
};

const PLACE_DETAILS = {
  "animate": "池田大楼2号馆1—2楼；新品周边，参考25—30分钟。周六参考10:00—20:00。",
  "surugaya": "平田大楼2—3楼；先3楼动漫周边、布偶、影音，再看2楼模型。参考50—60分钟；10:00—21:00。",
  "potato": "平田大楼1楼；复古游戏，参考20—30分钟。替换一家，不增加第三家；周末参考10:00—20:00。",
  "surugaya_main": "日本桥4-11-3；想找实体游戏、设定资料时替换一家。参考10:00—21:00；不保证库存。",
  "bench": "搜索名称为井川用水機場前；须结合宇治市巡礼图及现场标识核对机位，不把任意河边长椅当目标。",
  "daikichi": "天气、路况与体力合适才登山；往返与停留预留75分钟，白天完成。登山口须现场核对。",
  "ikuta": "巡礼重点是拝殿外观。参照爱好者实景记录，并非制作方认证原型；普通游客不可拍建筑内部。",
  "kiyomizu": "目的地设清水寺仁王门，按正式参道入寺；地图可能导向不可进入的道路。",
  "kyoto_tower": "2026/9/1—12/20京阪×京吹联动。展望室5层领叠印台纸，全7处；先完成收费区域再离场，门票不可再入。成人¥1,000，未购票；周边店10:00—20:30。",
  "kotosaka": "本次12/1集章路线不安排琴坂支线。",
  "kodaiji": "2026/10/23—12/13夜间特别参拜；17:00亮灯，21:30停止入场、22:00闭门。成人¥800，两人¥1,600，购票待确认。昼夜不清场；离场后同票不可再次进入。"
};

// Building and floor labels already recorded in the itinerary's shop details.
const PLACE_LOCATIONS = {
 "animate":"池田大楼2号馆 · 1–2F",
 "surugaya":"平田大楼 · 2–3F",
 "potato":"平田大楼 · 1F",
 "lashinbang_kobe":"センタープラザ东馆 · 2F",
 "surugaya_kobe":"さんプラザ · 3F-2",
 "bookoff_kobe":"グレースコウベ · 5F"
};

const WORK_NAMES = [
  "響け！ユーフォニアム",
  "たまこまーけっと／たまこラブストーリー",
  "名探偵コナン",
  "千恋＊万花"
];

const PHOTO_REFERENCES = {
  "bench": "https://www.b-links.jp/kumikobennti/",
  "daikichi": "https://nottiphotobiker.com/kyotodaikitiyamaaki/",
  "asagiri": "https://media.kyototourism.org/en/photos/4151/"
};


PLACE_DETAILS["starbucks_kitano"] = "北野物语馆。保留午餐、咖啡、休息与外观巡礼；《魔女的夜宴》七绪咖啡店关联为玩家实景对照，非官方认定。";
PLACE_DETAILS["lashinbang_kobe"] = "センタープラザ东馆2F 246-1；当前11:00—20:00。与骏河屋、BOOKOFF共用90分钟。";
PLACE_DETAILS["surugaya_kobe"] = "さんプラザ3F-2；周日参考11:00—20:00。动漫CD、影像、毛绒与周边；库存以现场为准。";
PLACE_DETAILS["bookoff_kobe"] = "グレースコウベ5F，三宫町2-10-7；当前10:00—20:00。与前两家不同楼，重点看音像。";
PLACE_DETAILS["sannomiya_center"] = "中央街沿街可自行找小吃，さんプラザ及センタープラザB1有餐饮区。";
PLACE_DETAILS["kobe_bridge"] = "导航到Port Island北公园，从桥南侧拍红色桥梁。中公園站步行约8分钟，不安排全程步行跨桥。";

PLACE_DETAILS.hotel_kyoto = "3晚已订，不含早餐。";
PLACE_DETAILS.hotel_osaka = "4晚已订，不含早餐。";
PLACE_DETAILS.heiwa_books = "アル・プラザ宇治東3F，参考10:00—20:00。周边库存与京阿尼展陈以现场为准。";
PLACE_DETAILS.keihan_obaku = "JR出站后步行换乘京阪；认宇治方向2号站台，乘一站到三室户。叶月贩售机只顺路短看。";
PLACE_DETAILS.mimurodo = "出站可顺看小绿贩售机；向北步行约10分钟到アル・プラザ宇治東，书店在3F。";
PLACE_DETAILS.keihan_uji = "本期小奏、久美子、丽奈立牌，9/1—12/20；久美子语音贩售机。展示位置及付费区入场方式现场确认。配图为官方设计示意。";
PLACE_LOCATIONS.heiwa_books = "アル・プラザ宇治東 · 3F";
PLACE_LOCATIONS.keihan_uji = "秋季立牌 · 官方示意图";

// Optional bath details share the canonical plan's facts.
PLACE_DETAILS.spaworld = PLAN.places.find(p=>p.id==='spaworld').description;

// Details for the revised route come from the canonical plan.
PLACE_DETAILS.osaka_castle = "公园散步与天守阁外观拍照，不入馆；从森之宫侧公园入口到天守阁约20—30分钟，返回森之宫另留约30分钟。";
PLACE_DETAILS.morinomiya = "从车站到天守阁另留约20—30分钟步行；回程在此乘JR大阪环状线去鹤桥。";
PLACE_DETAILS.jr_tsuruhashi = "按近鉄のりかえ指示换乘近铁；JR与近铁为不同运营商。";
PLACE_DETAILS.kintetsu_tsuruhashi = "前往近铁奈良，确认奈良线与目的地，不乘大阪线往伊势方向。";
PLACE_DETAILS.nara_nandaimon = "南大门外观短拍；大佛殿在门内继续向北，内部参观另购票。";
PLACE_DETAILS.namba_area = "晚餐在购物沿线灵活选择，普通正餐预算¥1,000—2,500/人；地图为片区，未选定餐厅。";
PLACE_DETAILS.shinsaibashi_south = "戎桥北侧的心斋桥筋南口，只短拍；之后前往南海难波返店。";

'use strict';
const $=s=>document.querySelector(s);
const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e=escapeHTML;
const PLACE=Object.fromEntries(PLAN.places.map(p=>[p.id,p]));
// Offline delivery embeds photos as data: URIs. Swapping each for a short blob: URL once at startup keeps every
// render's HTML small (a day page carried ~3.9M characters before); any image that fails to convert keeps its data URI.
(function shortImageURLs(){
 if(typeof DELIVERY_MODE==='undefined'||DELIVERY_MODE!=='offline'||typeof Blob==='undefined'||!URL.createObjectURL)return;
 const made=new Map();
 const short=src=>{
  if(typeof src!=='string'||!src.startsWith('data:'))return src;
  if(made.has(src))return made.get(src);
  try{const comma=src.indexOf(','),bin=atob(src.slice(comma+1)),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
   const url=URL.createObjectURL(new Blob([bytes],{type:src.slice(5,src.indexOf(';'))}));made.set(src,url);return url;}catch{return src;}
 };
 const swap=img=>{if(img)for(const key of ['src','thumbnail'])if(img[key])img[key]=short(img[key]);};
 Object.values(PHOTOS).forEach(swap);
 for(const p of [...(PILGRIMAGE.points||[]),...(PILGRIMAGE.rally?.spots||[])])['real','anime','comparison'].forEach(kind=>swap(p[kind]));
})();
const STORAGE_KEY='kansai-autumn-notebook-v1';
let storageOK=true, toastTimer, undoAction=null;
let state={schemaVersion:3,checks:{},todos:{},choices:{}},pendingBackup=null;
// Preserve the exact old snapshot before any migration (including todo IDs) writes.
// Shot keys already include date + point ID; retain them without guessing by place name.
function preserveLegacyRecord(){
 if(pendingBackup===null)return;
 let key=STORAGE_KEY+'-before-activity-v3';
 const existing=localStorage.getItem(key);
 if(existing!==null&&existing!==pendingBackup)key+='-'+Date.now();
 localStorage.setItem(key,pendingBackup);pendingBackup=null;
}
try{
 const raw=localStorage.getItem(STORAGE_KEY);pendingBackup=raw;
 const old=JSON.parse(raw||'null');
 if(old&&typeof old==='object'){
  if(old.schemaVersion===3)pendingBackup=null;
  for(const key of ['checks','todos','choices'])if(old[key]&&typeof old[key]==='object'&&!Array.isArray(old[key]))state[key]=old[key];
 }
 for(const [key,value] of Object.entries(state.checks))if(!key.includes(':shot:')&&typeof value==='boolean')state.checks[key]=value?'done':'pending';
 for(const [key,value] of Object.entries(state.checks))if(!key.includes(':shot:')&&value==='skipped')state.checks[key]='pending';
 preserveLegacyRecord();localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}catch{storageOK=false;}
const icons={map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',copy:'<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',check:'<path d="m4 12 5 5L20 6"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/>',bag:'<rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 6V3h6v3M9 10v7m6-7v7"/>'};
const icon=(n)=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[n]||icons.pin}</svg>`;
const btn=(label,action,extra='',cls='')=>`<button type="button" class="btn ${cls}" data-action="${action}" ${extra}>${label}</button>`;
const external=(label,url,cls='')=>`<a href="${e(url)}" target="_blank" rel="noopener noreferrer" class="${cls}">${label}</a>`;
const mapURL=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
// Booking timestamps include offsets; always display the airport's local time.
function flightLocal(b,field){const place=field==='departure'?b.from:b.to,zone=place==='hkg'?'Asia/Hong_Kong':'Asia/Tokyo';const date=new Date(b[field]);return {time:new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date),date:new Intl.DateTimeFormat('en-US',{timeZone:zone,month:'numeric',day:'numeric'}).format(date),city:place==='hkg'?'香港':'关西',region:place==='hkg'?'香港':'日本',terminal:b[field+'_terminal']||'航站楼待确认'};}
function flightDeparture(id){const b=PLAN.bookings.find(b=>b.id===id),f=flightLocal(b,'departure');return f.time+' '+f.region+'起飞';}
function flightTerminals(b){const from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return from.city+(b.departure_terminal_role==='check_in'?from.terminal+'值机 → '+(b.boarding_terminal||'航站楼待确认')+'登机':from.terminal+'出发')+'；'+to.city+to.terminal+'抵达。';}
const photoSrc=id=>PHOTOS[id]?.src||'';
const dateLabel=d=>String(Number(d.slice(5,7)))+'/'+String(Number(d.slice(8)));
const choice=d=>{const c={ujiExtra:'none',byodoinInterior:false,kodaijiPlan:'night',yasakaBrief:false,usjExtra:false,kinopio:false,spaworldEvening:false,shop1:'animate',shop2:'surugaya',...state.choices[d.date]};if(d.date==='2026-12-01'){c.ujiExtra='none';c.byodoinInterior=false;delete c.skipByodoin;}if(d.date==='2026-12-05'&&!d.optional.some(o=>o.id==='spaworld_evening'))c.spaworldEvening=false;if(d.date==='2026-12-02'){if(!['night','skip'].includes(c.kodaijiPlan))c.kodaijiPlan='night';c.yasakaBrief=c.kodaijiPlan==='night'&&c.yasakaBrief===true;}return c;};
function activityState(date,id){const value=state.checks[date+':'+id];return value===true||value==='done'?'done':'pending';}
function save(){try{preserveLegacyRecord();localStorage.setItem(STORAGE_KEY,JSON.stringify(state));storageOK=true;return true;}catch{storageOK=false;toast('本次修改未保存；请允许浏览器存储后重试，刷新或关闭可能丢失。');return false;}}
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
function selectedShops(c){return[c.shop1,c.shop2].filter(x=>x&&x!=='none');}
// Titles name the activity; routes, restaurant details and planning notes retain the specifics.
const EVENT_TITLES={
 byodoin_visit:'平等院 · 庭园与凤翔馆',uji_pilgrimage:'宇治川巡礼',
 demachi_transfer:'前往出町',demachi_lunch:'午餐 · 出町',delta_visit:'鸭川三角洲',
 kiyomizu_transfer:'前往清水寺',kiyomizu_visit:'清水寺赏枫',higashiyama_walk:'东山散步',
 inari_transfer:'京都站 → JR稻荷',
 inari_visit:'伏见稻荷 · 千本鸟居',osaka_transfer:'前往大阪酒店',
 usj_app:'申请任天堂区域资格',usj_core:'任天堂区域 · 柯南4-D',usj_lunch:'午餐',usj_finish:'游玩收尾',
 nara_transfer:'森之宫 → 鹤桥 → 近铁奈良',nara_lunch:'午餐 · 森之宫站附近',nara_day_return:'返回大阪酒店',
 kobe_transfer:'前往生田神社',ikuta_visit:'生田神社巡礼',
 last_evening_return:'返回大阪酒店、收行李',
 airport_checkin:'T1值机、托运与出境'
};
function effectiveEvents(d){const c=choice(d);let events=d.timeline.map(x=>({...x,title:EVENT_TITLES[x.id]||x.title,place_ids:[...x.place_ids]}));const by=id=>events.find(x=>x.id===id);
 for(const ev of events.filter(ev=>ev.category==='flight')){
  const booking=PLAN.bookings.find(b=>b.id===ev.id);if(!booking)continue;
  const from=flightLocal(booking,'departure'),to=flightLocal(booking,'arrival');
  ev.time_label=from.time+' '+from.region+'起飞 → '+to.time+' '+to.region+'抵达';
  ev.title=booking.flight_number+' · '+from.city+' → '+to.city;
  ev.condition=[flightTerminals(booking),ev.condition].filter(Boolean).join(' ');
 }
 if(d.date==='2026-12-02'){
  by('gion_rest').title='高台寺附近休息';
  by('gion_dinner_walk').title='前往晚饭地点';
  delete by('gion_dinner_walk').condition;
  by('gion_dinner').title='晚餐 · 祇园／河原町';
  delete by('gion_dinner').condition; // The last-order reminder is shown once by executionNotice.
  by('kyoto_night_return').title='回酒店休息';
  if(c.kodaijiPlan==='skip'){
   events=events.filter(x=>x.id!=='kodaiji_night');
   by('gion_dinner_walk').time_label='休息后';by('gion_dinner_walk').title='直接前往晚饭地点';by('gion_dinner_walk').condition='步行预留约30分钟。';
   by('gion_dinner').time_label='到店后 · 不等到19:00';by('gion_dinner').title='晚餐 · 祇园／河原町';
   by('kyoto_night_return').time_label='饭后返店';by('kyoto_night_return').title='回酒店休息';
  }else{
   by('kodaiji_night').title='高台寺夜枫';
   delete by('kodaiji_night').condition;
   if(c.yasakaBrief){by('gion_dinner_walk').title='八坂神社 → 晚餐';by('gion_dinner_walk').place_ids=['yasaka_shrine'];by('gion_dinner_walk').condition='八坂神社短停与前往餐厅共用30分钟；夜枫延迟或步行余量不足时，直接去吃饭。';}
  }
 }
 if(d.date==='2026-12-04'){if(c.usjExtra)by('usj_core').optionNote='按等候时间与体力加项目，保留午饭和休息，19:00前结束。';if(c.kinopio){by('usj_lunch').title='午餐 · キノピオ・カフェ';by('usj_lunch').optionNote='需单独取得餐厅资格，否则选择其他园内餐厅；用餐45—60分钟，可能超过¥2,500。';}}
 if(d.date==='2026-12-05'){by('anime_shopping').place_ids=selectedShops(c);by('nippombashi_arrival').place_ids=[c.shop1];by('anime_shopping').title=(c.shop2==='none'?'日本桥 · 一家重点店':'日本桥 · 动漫购物');by('anime_shopping').condition=(c.shop2==='none'?'按兴趣慢逛，保留约20分钟休息':'挑1—2家慢逛，含店间步行和约20分钟休息')+'；先逛20:00关门的店，再吃饭。';}
 if(d.date==='2026-12-05'&&c.spaworldEvening){const spa=d.optional.find(o=>o.id==='spaworld_evening');for(const [id,patch] of Object.entries(spa.event_overrides))Object.assign(by(id),patch);events.push(...spa.events.map(ev=>({...ev,place_ids:[...ev.place_ids]})));}
 return events;
}
function returnTarget(d){if(d.date==='2026-12-05'&&choice(d).spaworldEvening)return d.optional.find(o=>o.id==='spaworld_evening').hotel_return_target;if(d.date==='2026-12-02')return choice(d).kodaijiPlan==='skip'?'饭后':'20:45—21:15';return (d.hotel_return_target||'').split('；')[0].replace(/^(争取|约)/,'').replace(/\s*目标入住.*/,'');}
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
 if(d.date==='2026-12-02'){if(c.kodaijiPlan==='skip')nodes=nodes.filter(n=>n.id!=='kodaiji');else if(c.yasakaBrief)nodes.splice(nodes.length-1,0,{id:'yasaka_shrine',phase:'夜间',optional:true});}
 if(d.date==='2026-12-05'){const at=nodes.findIndex(x=>x.id==='animate'),phase=nodes[at].phase;nodes.splice(at,2,...selectedShops(c).map(id=>({id,phase,optional:false})));}
 if(d.date==='2026-12-05'&&c.spaworldEvening)nodes.push(...d.optional.find(o=>o.id==='spaworld_evening').route_append.map(n=>({...n})));
 return nodes;
}

function optionalControls(d,eventId){if(!d.optional.length&&d.date!=='2026-12-05')return'';const c=choice(d),show=id=>!eventId||eventId===id;let fields='';
 if(d.date==='2026-12-02'&&show('gion_rest'))fields=`<fieldset class="night-options"><legend>夜间安排</legend>${[['night','高台寺夜枫','17:15—18:30参拜，20:45—21:15返店。'],['skip','晚餐后休息','高台寺附近休息半小时，再吃晚饭、返店。']].map(([value,label,note])=>`<label class="option-row"><input type="radio" name="kodaijiPlan" data-choice="kodaijiPlan" value="${value}" ${c.kodaijiPlan===value?'checked':''}>${label}<small>${note}</small></label>`).join('')}</fieldset><label class="option-row"><input type="checkbox" data-choice="yasakaBrief" ${c.yasakaBrief?'checked':''} ${c.kodaijiPlan==='skip'?'disabled':''}>八坂神社顺路短停<small>仅夜枫准时结束且体力有余；包含在晚饭前步行时段。</small></label>`;
 if(d.date==='2026-12-04'&&show('usj_core'))fields=`<label class="option-row"><input type="checkbox" data-choice="usjExtra" ${c.usjExtra?'checked':''}>第二项任天堂设施／其他项目<small>看实时等候和体力；马里奥赛车与咚奇刚择一优先。</small></label>`;
 if(d.date==='2026-12-04'&&show('usj_lunch'))fields+=`<label class="option-row"><input type="checkbox" data-choice="kinopio" ${c.kinopio?'checked':''}>午餐改为Kinopio’s Cafe<small>需单独取得餐厅资格；部分餐品超预算，无资格时选其他园内餐厅。</small></label>`;
 if(d.date==='2026-12-05'&&show('anime_shopping')){const stores=['animate','surugaya','potato','surugaya_main'].map(id=>[id,PLACE[id].name]);fields=`<p class="small">选1—2家，晚到只留一家。</p><label class="small">第一家${select('shop1',c.shop1,stores)}</label><label class="small">第二家${select('shop2',c.shop2,[['none','不加第二家'],...stores.filter(([id])=>id!==c.shop1)])}</label>`;}

 if(d.date==='2026-12-05'&&show('anime_shopping')&&d.optional.some(o=>o.id==='spaworld_evening'))fields+=`<label class="option-row"><input type="checkbox" data-choice="spaworldEvening" ${c.spaworldEvening?'checked':''}>晚间泡汤 · SPAWORLD<small>仅20:30前已回酒店且仍有体力时考虑；先放购物袋，再步行泡汤，约22:00—22:30返店。¥1,500/人，未购票。</small></label>`;
 return fields;
}
function select(key,value,options){return `<select class="option-select" data-choice="${key}" aria-label="${({shop1:'日本桥第一家店',shop2:'日本桥第二家店',umedaMain:'梅田重点店'})[key]||key}">${options.map(([v,l])=>`<option value="${v}" ${v===value?'selected':''}>${e(l)}</option>`).join('')}</select>`;}


if(document.modelContext?.registerTool){
 const tools=[{name:'read_itinerary_day',title:'读取当天行程',description:'读取既定关西行程、当前选择及完成进度，不改变数据。',inputSchema:{type:'object',properties:{date:{type:'string',enum:PLAN.days.map(d=>d.date)}},required:['date'],additionalProperties:false},annotations:{readOnlyHint:true},execute({date}){const d=PLAN.days.find(x=>x.date===date);if(!d)throw Error('无效日期');return {date,events:effectiveEvents(d),progress:progress(d),route:effectiveRoute(d),returnTarget:returnTarget(d)};}},{name:'set_activity_completion',title:'记录活动完成',description:'将指定日期的活动标记为完成或未完成，保存到本机并更新页面。',inputSchema:{type:'object',properties:{date:{type:'string'},eventId:{type:'string'},completed:{type:'boolean'}},required:['date','eventId','completed'],additionalProperties:false},annotations:{readOnlyHint:false},execute({date,eventId,completed}){if(typeof completed!=='boolean')throw Error('completed必须为布尔值');setCheck(date,eventId,completed);render();return{date,eventId,completed,savedLocally:storageOK};}}];
 for(const t of tools){try{Promise.resolve(document.modelContext.registerTool(t)).catch(()=>{});}catch{}}
}

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
  const done=events.filter(ev=>activityState(d.date,ev.id)==='done').length;
  return {sections,events,done,total:events.length};
 }
};

// Bind each original route occurrence, not just its place ID: return visits have different times.
const ROUTE_EVENTS={
 '2026-11-30':['flight_out','flight_out','arrival_transfer','checkin_kyoto'],
 '2026-12-02':['demachi_transfer','demachi_visit','delta_visit','kiyomizu_transfer','kiyomizu_transfer','kiyomizu_visit','higashiyama_walk','higashiyama_walk','higashiyama_walk','higashiyama_walk','kodaiji_night','kyoto_night_return'],
 '2026-12-04':['usj_transfer','usj_transfer','usj_core','usj_dinner'],
 '2026-12-07':['checkout_osaka','airport_train','airport_train','flight_home']
};
function routePurpose(node,eventId,index,nodes){
 if(node.id.startsWith('hotel_')){
  if(eventId==='checkout_kyoto')return '退房寄存';
  if(eventId==='checkout_osaka')return '退房离店';
  if(eventId==='luggage_pickup')return '取行李';
  if(eventId==='nara_day_return'&&nodes.some(n=>n.id==='spaworld'))return '放购物袋、整理行李';
  if(eventId==='checkin_osaka')return '抵达入住，随后休息30—45分钟';
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
 if(eventId==='castle_station_walk'&&node.id==='morinomiya')return '回车站附近吃午饭，再乘JR';
 if(eventId==='nara_return_train'&&node.id==='kintetsu_nara')return '乘车返回大阪';
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
  if(d.date==='2026-12-05'&&selectedShops(c).includes(node.id))id='anime_shopping';
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
 if(d.date==='2026-12-04'&&node.id==='usj'){id='usj_app';times=[eventTime('usj_app','申请区域资格')];}
  if(d.date==='2026-12-05'){
   if(node.id==='osaka_castle'&&id==='castle_visit')times=[eventTime(id,'步行与外观拍照')];
   if(node.id==='spaworld')times=[eventTime('spaworld_visit','预计抵达'),{text:'60—75分钟',label:'洗浴与休息 · 22:15前离馆'}];
   if(node.id==='kintetsu_nara')times=[eventTime(id,id==='nara_return_train'?'返程，含候车':'交通')];
   if(node.id==='kintetsu_nippombashi')times=[{text:'到站时刻待确认',label:'下车步行去首店'}];
   if(node.id===c.shop1)times=[eventTime('nippombashi_arrival','抵达'),eventTime('anime_shopping','购物')];
   if(['nankai_namba','nankai_shinimamiya'].includes(node.id))times=[{eventId:'nara_day_return',text:'拍照后',label:'乘车返店'}];
  }
  const shared=['uji_pilgrimage','uji_shrines','higashiyama_walk','nara_visit','glico_photo','byodoin_visit','delta_visit'].includes(id);
  if(shared&&times.length===1)times[0].label='同段共用';
  const purpose=routePurpose(node,id,i,nodes);
  if(node.id.startsWith('hotel_')&&times.length===1)times[0].label=purpose;
  return {...node,eventId:id,purpose,times:times.length?times:[{text:'时间待确认',label:'参考'}]};
 });
}


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
 usj_transfer:['hotel_osaka','jr_shinimamiya',['西九条站','西九条駅 JR'],['Universal City站','ユニバーサルシティ駅'],'usj'],
 usj_dinner:[['Universal City站','ユニバーサルシティ駅'],['西九条站','西九条駅 JR'],['JR新今宫站','新今宮駅 JR'],'hotel_osaka'],
 kobe_bridge_visit:[['Port Liner三宫站','三宮駅 ポートライナー'],['Port Liner中公园站','中公園駅 ポートライナー'],'kobe_bridge']
};
// These activities stay inside USJ; the park entrance map remains on arrival.
function activityPlaceIds(ev){return ['usj_app','usj_core','usj_lunch','usj_rest','usj_finish'].includes(ev.id)?ev.place_ids.filter(id=>id!=='usj'):ev.place_ids;}

const USJ_HOURS='https://www.usj.co.jp/web/ja/jp/park-guide/schedule/park-hour';
const USJ_ENTRY='https://www.usj.co.jp/web/ja/jp/enjoy/numbered-ticket/app/timed-entry-ticket';
const NANKAI_TIMETABLE='https://www.nankai.co.jp/tc_railway/access-timetable';
const NANKAI_STATION='https://www.nankai.co.jp/traffic/station/shinimamiya.html';
function executionNotice(d,ev){
 const content={
  flight_out:'当前11:05关闭登机口（香港时间）；以航司最新通知及登机牌为准。',
  agata_stamp:'登录活动网站并开启定位，确认领章成功再离开；攻略勾选不代替领章。',
  uji_parfait:'10:00开门，不接受预约；75分钟含候位与用餐。',
  daikichi_visit:'14:30仍未到登山口时，须确认能白天下山，否则取消。',
  kodaiji_night:'17:45仍未入场、预计排队超过30分钟，或天气差、疲劳时，直接吃晚饭。稍有延迟时18:45前离寺，省去八坂神社并顺延晚餐。',
  gion_dinner:'おめん20:00最后点餐；晚到或长队时换简餐。',
  usj_transfer:`营业时间于10/2核实，临行再查是否调整。 ${external('官方营业日历 ↗',USJ_HOURS)}`,
  usj_app:`在官方App选中两张门票，一起申请区域资格。 ${external('官方操作说明 ↗',USJ_ENTRY)}`,
  usj_finish:'18:00后预留缓冲，19:00前结束普通票设施体验。19:00—22:00 Amex活动设施及部分餐饮需凭证，19:00并非统一离园时间。',
  airport_train:`南海空港急行，现行平日时刻已核实；临行复核改点及运行情况。 ${external('南海时刻表 ↗',NANKAI_TIMETABLE)} · ${external('新今宫站入口图 ↗',NANKAI_STATION)}`
 };
 return content[ev.id]?`<p class="execution-note">${content[ev.id]}</p>`:'';
}

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

/* 出行版 · UI. Built for one hand on the street: four tabs at the bottom, one screen per job —
   现在 (what now), 行程 (the day), 巡礼 (shots), 准备 (before leaving). Details open in a bottom sheet whose
   actions sit under the thumb; the phone's Back button closes it. All copy comes from model.js.
   Look: a printed 旅のしおり — photos lead, the day is drawn as a train line, a 済 seal marks what is done. */
Object.assign(icons,{
 contrast:'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 11h18"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 camera:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',
 back:'<path d="m15 5-7 7 7 7"/>',
 alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4m0 3v.5"/>',
 train:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 21l1.5-4m4.5 4-1.5-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',
 food:'<path d="M5 3v8a2 2 0 0 0 2 2v8M9 3v8a2 2 0 0 1-2 2M7 3v6M17 21V3c-2 1-3 4-3 8h3"/>',
 walk:'<circle cx="13" cy="4.5" r="1.8"/><path d="m10 21 2-6 3 3v3M8 12l2-4 4 1 2 3m-4-3-2 6"/>',
 bed:'<path d="M3 18V6m0 8h18v4M3 14V10h7v4m11 0v-2a3 3 0 0 0-3-3h-8"/>',
 plane:'<path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5V18l7.5-2.5V19L8 21v1l4-1 4 1v-1l-2.5-2v-3.5L21 18z"/>',
 sparkle:'<path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M18 6l-2.5 2.5m-7 7L6 18"/>',
 route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>'
});

/* ---------- Small parts ---------- */
// The blog build rewrites this to '../' (build-site.mjs), so the way back works on any host.
const BLOG_HOME='../';
const isWeb=typeof DELIVERY_MODE!=='undefined'&&DELIVERY_MODE==='web';
const PHASE_LABEL={before:'总览',during:'现在',after:'回顾'};
function img(id,eager=false){const p=PHOTOS[id];if(!p?.src)return '';return `<img src="${p.thumbnail||p.src}" alt="${e(p.sight||PLACE[id]?.name||'')}" width="${p.width||800}" height="${p.height||600}" loading="${eager?'eager':'lazy'}" decoding="async"${p.illustration?' class="contain"':''}>`;}
// The place an activity is about: its destination if it is a transfer, else its own place.
const heroPhoto=ev=>[...ev.place_ids].reverse().find(id=>photoSrc(id))||'';
const themeButton=()=>`<button type="button" class="icon-btn" data-action="theme" aria-label="切换日间或夜间模式">${icon('contrast')}</button>`;
const daySeal=n=>`<span class="day-seal" aria-hidden="true"><b>${n}</b><small>日目</small></span>`;
const seal=(cls='')=>`<span class="seal${cls}" aria-hidden="true">済</span>`;
// Done is 丛雨, eyes closed and pleased; she pops in once when the row is ticked, then stays still.
function checkButton(date,ev,big=false){
 const done=activityState(date,ev.id)==='done',fresh=ui.justDone===date+':'+ev.id?' pop-in':'';
 const mark=done?`<span class="done-face${fresh}" aria-hidden="true"></span>`:icon('check');
 return `<button type="button" class="check${big?' check-big':''}${done?' on':''}" data-action="check" data-date="${date}" data-event="${e(ev.id)}" aria-pressed="${done}" aria-label="${done?'已完成，点按撤销':'标记完成'}：${e(ev.title)}">${mark}${big?`<span>${done?'已完成':'完成'}</span>`:''}</button>`;
}
const navButton=(stop,big=false)=>`<a class="nav${big?' nav-big':''}" href="${e(stop.url)}" target="_blank" rel="noopener noreferrer" aria-label="导航到${e(stop.name)}">${icon('pin')}${big?`<span>导航 · ${e(stop.name)}</span>`:''}</a>`;
const openButton=(date,key,inner,cls)=>`<button type="button" class="${cls}" data-action="open" data-date="${date}" data-key="${e(key)}">${inner}</button>`;
// Line names read like station signage; every company gets the same badge (no guessed brand colours).
const LINE_NAMES=/(大阪环状线|环状线|JR|京阪|近铁|近鉄|阪急|南海|地铁|地下鉄|Port Liner|梦咲线|ゆめ咲線|HARUKA|Rapi:t|APM)/g;
const transitHTML=note=>e(note).replace(TRANSIT_CAUTION,'<strong class="caution">$1</strong>').replace(LINE_NAMES,'<span class="ln">$1</span>');
// Test contract: the transport container keeps aria-label="交通说明".
const transportBlock=notes=>`<div class="transport" role="group" aria-label="交通说明"><ul>${notes.map(n=>`<li>${transitHTML(n)}</li>`).join('')}</ul></div>`;
const linkItem=it=>it.url?(it.text.length<8?external(e(it.text)+' ↗',it.url):`${e(it.text)} ${external('资料 ↗',it.url)}`):e(it.text);
function deadlines(d,minutes){
 const list=hardStops(d);if(!list.length)return '';
 return `<section class="block timetable"><h2 class="block-title">关键时间</h2><ul>${list.map(t=>{
  const left=minutes==null?null:t.minutes-minutes,state=left==null?'':left<0?' past':left<=60?' soon':'';
  return `<li class="stop ${t.kind}${state}"><b>${t.time}</b><span>${e(t.text)}</span>${left==null?'':`<small>${left<0?'已过':'还有 '+duration(left)}</small>`}</li>`;
 }).join('')}</ul></section>`;
}
function stayBlock(d,i){
 if(!d.overnight){const b=PLAN.bookings.find(x=>x.id==='flight_home'),from=flightLocal(b,'departure'),to=flightLocal(b,'arrival');return `<section class="block"><h2 class="block-title">回程</h2>${passHTML(b,from,to)}</section>`;}
 const p=PLACE[d.overnight],[,back]=dayTimes(d,i);
 return `<section class="block stay"><h2 class="block-title">今晚住</h2><div class="stay-row">${photoSrc(p.id)?`<span class="stay-photo">${img(p.id)}</span>`:''}<div><p class="stay-name">${e(p.name)}</p><p class="muted">${e(back[0])} ${e(back[1])}${back[2]?' · '+e(back[2]):''}</p></div></div>${p.address_ja?`<p class="ja" lang="ja">${e(p.address_ja)}</p>`:''}<div class="actions">${external(icon('pin')+'<span>酒店地图</span>',p.map_search_url,'btn')}${p.address_ja?`<button type="button" class="btn" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</div></section>`;
}
const passHTML=(b,from,to)=>`<div class="pass"><div class="pass-end"><small>${e(from.city)}</small><b>${from.time}</b></div><span class="pass-line" aria-hidden="true">${icon('plane')}</span><div class="pass-end"><small>${e(to.city)}</small><b>${to.time}</b></div></div><p class="muted">${e(b.airline)} ${e(b.flight_number||'')} · ${e(from.date)} · ${e(flightTerminals(b))}</p>`;
// The trip as a line: each day a station, today lit.
function dayLine(){
 const today=todayIndex();
 return `<ol class="line days">${PLAN.days.map((d,i)=>{const info=dayPresentation(d),[leave,back]=dayTimes(d,i),p=progress(d);
  return `<li class="${i===today?'now':''}${p.done&&p.done===p.total?' done':''}"><a class="day-link" href="#day/${d.date}"><span class="dl-date"><b>${dateLabel(d.date)}</b><small>${i===today?'今天':e(d.weekday)}</small></span><span class="node photo">${img(info.cover)}</span><span class="dl-main"><b>${e(info.short)}</b><small>${e(leave[0])} ${e(leave[1])} · ${e(back[0])} ${e(back[1].split(/[，；]/)[0])}</small></span>${p.done?(p.done===p.total?seal(' small'):`<span class="dl-done">${p.done}/${p.total}</span>`):''}</a></li>`;}).join('')}</ol>`;
}

/* ---------- 现在 ---------- */
function nowScreen(){
 const s=tripStatus();
 if(s.phase==='before')return beforeScreen(s);
 if(s.phase==='after')return `${coverHero('旅程已结束','2026.11.30 — 12.07 · 辛苦了')}<section class="block"><h2 class="block-title">回看 8 天</h2>${dayLine()}</section>`;
 const d=PLAN.days[s.index],info=dayPresentation(d),st=nowState(d,s.minutes),p=progress(d),notes=fieldNotes(d);
 return `<header class="now-head"><div><p class="kicker">${dateLabel(d.date)} ${e(d.weekday)} · 日本时间 <b>${clock(s.minutes)}</b></p><h1 class="display">${e(info.short)}</h1><p class="muted">${e(info.eyebrow)}</p></div>${daySeal(s.index+1)}</header>
 ${st.focus?focusCard(d,st,s.minutes):`<section class="focus finished"><div class="band murasame" role="img" aria-label="丛雨"></div><div class="focus-body"><p class="focus-label">今天</p><h2 class="title">安排已经走完</h2><p class="lead">辛苦了，早点休息。</p></div></section>`}
 ${st.upcoming.length?`<section class="block"><h2 class="block-title">接下来</h2><ol class="line mini">${st.upcoming.map(ev=>{const start=eventStart(ev),stop=navStop(d,ev),major=isMajorEvent(d,ev);return `<li class="${major?'major':'minor'}">${openButton(d.date,ev.id,`<b class="t">${start===null?'随后':clock(start)}</b><span class="node"></span><span class="mini-title">${e(ev.title)}</span>`,'mini-row')}${stop?navButton(stop):''}</li>`;}).join('')}</ol></section>`:''}
 ${deadlines(d,s.minutes)}
 ${stayBlock(d,s.index)}
 <div class="links">${notes.length?openButton(d.date,'notes',`${icon('alert')}<span>情况有变时 · ${notes.length} 条</span>${icon('chevron')}`,'link-row warn'):''}<a class="link-row" href="#day/${d.date}">${icon('calendar')}<span>全天行程 · 已完成 ${p.done}/${p.total}</span>${icon('chevron')}</a></div>`;
}
function navStop(d,ev){const first=mealRows(d,ev).find(r=>r[1]==='首选');return ev.category==='rest'&&!isMajorEvent(d,ev)?null:navigationStops(ev,d,!!(first&&first[0]!=='早餐')).at(-1)||null;}
function focusCard(d,st,minutes){
 const ev=st.focus,m=eventModel(d,ev),wait=m.start===null?null:m.start-minutes,photo=heroPhoto(ev);
 const label=st.started?'正在进行':wait>0?`${duration(wait)}后`:'下一项',primary=m.meals.find(x=>x.primary);
 const over=`<span class="live-pill${st.started?' on':''}">${label}</span><span class="band-time">${e(m.time)}</span>`;
 return `<section class="focus${st.started?' live':''}" aria-label="${label}：${e(m.title)}">
 ${photo?`<div class="band">${img(photo,true)}<div class="band-over">${over}</div></div>`:`<div class="band plain">${icon(CATEGORY_ICON[ev.category]||'pin')}<div class="band-over">${over}</div></div>`}
 <div class="focus-body">
 <h2 class="title">${e(m.title)}</h2>
 ${m.line?`<p class="lead">${e(m.line)}</p>`:''}
 ${m.notice?`<div class="notice">${icon('alert')}<div>${m.notice}</div></div>`:''}
 ${m.transport.length?transportBlock(m.transport):''}
 ${primary?`<p class="focus-meal"><span class="tag ok">首选</span><b lang="ja">${e(primary.name)}</b><button type="button" class="icon-btn small" data-action="copy" data-copy="${e(primary.name)}" aria-label="复制店名">${icon('copy')}</button></p>`:''}
 <div class="focus-actions">${m.nav?navButton(m.nav,true):''}${checkButton(d.date,ev,true)}</div>
 ${openButton(d.date,ev.id,`全部详情${icon('chevron')}`,'more')}
 </div></section>`;
}
function coverHero(title,sub){
 const ids=['byodoin','inari','dotonbori'].filter(id=>photoSrc(id));
 return `<header class="cover"><div class="cover-photos">${ids.map((id,i)=>`<span>${img(id,i===0)}</span>`).join('')}</div><a class="cover-back" href="${BLOG_HOME}">${icon('back')}<span>まひろ的小站</span></a><div class="cover-over"><p class="kicker">京都 · 宇治 · 大阪 · 奈良 · 神户</p><h1 class="display">${e(title)}</h1><p>${e(sub)}</p></div>${themeButton()}</header>`;
}
function beforeScreen(s){
 const open=openPurchases().filter(p=>p.tone==='danger');
 return `${coverHero('关西秋日手帖','2026.11.30 — 12.07 · 8 天 7 晚')}
 <section class="focus countdown"><div class="focus-body"><p class="count"><b>${s.days}</b><span>天后出发</span></p><p class="lead">临行待办 ${todoDone()} / ${TODOS.length}${open.map(p=>` · <span class="danger-text">${e(p.item)}${e(p.label)}</span>`).join('')}</p><div class="focus-actions"><a class="btn primary" href="#prep">去准备</a><a class="btn" href="#day/${PLAN.days[0].date}">看第 1 天</a></div></div></section>
 <p class="hint center">出发后，这一页显示正在做什么、下一站和今天的关键时间。</p>
 <section class="block"><h2 class="block-title">8 天行程</h2>${dayLine()}</section>`;
}

/* ---------- 行程 ---------- */
function strip(items,current){return `<nav class="strip" aria-label="选择日期">${items.map(([href,i,top])=>`<a class="strip-day${i===current?' on':''}${i===todayIndex()?' today':''}" href="${href}" ${i===current?'aria-current="date"':''}><small>${e(top)}</small><b>${dateLabel(PLAN.days[i].date)}</b></a>`).join('')}</nav>`;}
function dayScreen(){
 const i=ui.day,d=PLAN.days[i],info=dayPresentation(d),[leave,back]=dayTimes(d,i),s=tripStatus(),today=s.phase==='during'&&s.index===i;
 const now=today?nowState(d,s.minutes):null,flow=DayFlow.forDay(d),level=intensity(d),notes=fieldNotes(d),shots=shotProgress(d.date);
 return `${strip(PLAN.days.map((x,j)=>['#day/'+x.date,j,j===todayIndex()?'今天':DETAILS[x.date].cityLabel]),i)}
 <article class="day-ticket"><header class="day-hero">${img(info.cover,true)}<div class="hero-over"><p class="kicker">${dateLabel(d.date)} ${e(d.weekday)}${today?' · <em>今天</em>':''}</p><h1 class="display">${e(info.short)}</h1><p>${e(info.eyebrow)}</p></div>${daySeal(i+1)}</header>
 <dl class="ticket-facts"><div><dt>${e(leave[0])}</dt><dd>${e(leave[1])}</dd></div><div><dt>${e(back[0])}</dt><dd>${e(back[1])}</dd></div><div><dt>强度</dt><dd title="${e(level.full)}"><span class="dots" aria-hidden="true">${[1,2,3,4].map(n=>`<i${n<=level.level?' class="on"':''}></i>`).join('')}</span>${e(level.label)}</dd></div></dl></article>
 <p class="day-key">${e(cleanText(info.key))}</p>
 <div class="chips">${notes.length?openButton(d.date,'notes',`${icon('alert')}<span>情况有变时 · ${notes.length}</span>`,'chip warn'):''}${d.overnight?openButton(d.date,'stay',`${icon('bed')}<span>${e(PLACE[d.overnight].name)}</span>`,'chip'):''}${openButton(d.date,'route',`${icon('route')}<span>路线 · ${timedRoute(d).length} 站</span>`,'chip')}${shots.total?`<a class="chip" href="#shots/${d.date}">${icon('camera')}<span>巡礼 ${shots.done}/${shots.total}</span></a>`:''}</div>
 ${deadlines(d,today?s.minutes:null)}
 <div class="day-progress"><span>已完成 <b>${flow.done}/${flow.total}</b></span><div class="bar" role="progressbar" aria-label="当天完成进度" aria-valuemin="0" aria-valuemax="${flow.total}" aria-valuenow="${flow.done}"><i style="width:${flow.done/flow.total*100}%"></i></div></div>
 ${flow.sections.map(section=>{
  const [label,...rest]=section.name.split(' · ');
  const clocks=section.events.flatMap(ev=>[...compactTime(ev.time_label).matchAll(/\d{1,2}:\d{2}/g)].map(x=>x[0])),range=clocks.length?clocks[0]+(clocks.length>1?'–'+clocks.at(-1):''):'';
  return `<section class="phase"><h2 class="phase-title"><span class="phase-name">${e(label)}</span>${rest.length?`<small>${e(rest.join(' · '))}</small>`:''}${range?`<span class="range">${range}</span>`:''}</h2><ol class="line rows">${section.events.map(ev=>row(d,ev,now)).join('')}</ol></section>`;
 }).join('')}
 <nav class="pager" aria-label="相邻日期">${i>0?`<a href="#day/${PLAN.days[i-1].date}">${icon('back')}<span>${dateLabel(PLAN.days[i-1].date)} ${e(dayPresentation(PLAN.days[i-1]).short)}</span></a>`:'<span></span>'}${i<PLAN.days.length-1?`<a class="next" href="#day/${PLAN.days[i+1].date}"><span>${dateLabel(PLAN.days[i+1].date)} ${e(dayPresentation(PLAN.days[i+1]).short)}</span>${icon('chevron')}</a>`:''}</nav>`;
}
function row(d,ev,now){
 const done=activityState(d.date,ev.id)==='done',major=isMajorEvent(d,ev),start=eventStart(ev),flags=[];
 if(noticeParts(d,ev).notice)flags.push('<span class="flag warn">注意</span>');
 if(ev.optional)flags.push('<span class="flag">可选</span>');
 const shots=pilgrimageDay(d.date).filter(p=>p.event_id===ev.id&&pointEnabled(p)).length;if(shots)flags.push(`<span class="flag">巡礼 ${shots}</span>`);
 const words=start===null?compactTime(ev.time_label):'',thumb=major?eventPhotoIds(ev)[0]:'';
 const node=thumb?`<span class="node photo">${img(thumb)}</span>`:`<span class="node${major?' big':''}">${major?icon(CATEGORY_ICON[ev.category]||'pin'):''}</span>`;
 return `<li class="row ${major?'major':'minor'}${done?' done':''}${now?.current?.id===ev.id?' now':''}" id="row-${e(ev.id)}">${openButton(d.date,ev.id,`<span class="row-time">${start===null?'随后':clock(start)}</span>${node}<span class="row-text">${major?'':icon(CATEGORY_ICON[ev.category]||'pin')}<span class="row-title">${e(ev.title)}</span>${words||flags.length?`<span class="row-meta">${words?`<span>${e(words)}</span>`:''}${flags.join('')}</span>`:''}</span>`,'row-open')}${checkButton(d.date,ev)}</li>`;
}

/* ---------- Sheets ---------- */
// The title takes focus when the sheet opens, so a screen reader announces it and no button shows a focus ring.
const sheetHead=(kicker,title)=>`<header class="sheet-head"><div>${kicker?`<p class="kicker">${kicker}</p>`:''}<h2 class="title" tabindex="-1" autofocus>${title}</h2></div><button type="button" class="icon-btn" data-action="close-sheet" aria-label="关闭">${icon('close')}</button></header>`;
function mealHTML(m){return `<article class="meal${m.primary?' primary':''}"><p class="meal-rank"><span class="tag${m.primary?' ok':''}">${e(m.rank)}</span>${m.budget?`<span>${e(m.budget)}</span>`:''}</p><h4 lang="ja">${e(m.name)}</h4>${m.hint?`<p class="muted">${e(m.hint)}</p>`:''}<div class="actions">${m.map?external(icon('map')+`<span>${m.mapLabel}</span>`,m.map,'btn'):''}<button type="button" class="btn" data-action="copy" data-copy="${e(m.name)}">${icon('copy')}<span>复制店名</span></button>${m.source?external('<span>官网 ↗</span>',m.source,'btn ghost'):''}</div></article>`;}
function foodHTML(item){const p=PLACE[item.place];return `<section class="sec"><h3>${e(item.label)}</h3><article class="meal">${photoSrc(item.place)&&!item.hidePhoto?`<button type="button" class="photo wide" data-action="zoom-photo" data-place="${item.place}">${img(item.place)}</button>`:''}<h4>${e(item.title)}</h4><p class="ja" lang="ja">${e(p.name_ja)}</p><p>${e(cleanText(item.text))}</p><p class="muted">${e(item.budget)}</p><div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_search_url,'btn')}${external('<span>店铺资料 ↗</span>',item.source,'btn ghost')}</div></article></section>`;}
function eventSheet(d,ev){
 const m=eventModel(d,ev),cover=m.photos[0]||'',rest=m.photos.slice(1);
 return `${sheetHead(`${e((m.timeHint?m.timeHint+' ':'')+m.time)}${m.status?` · <span class="tag">${e(m.status)}</span>`:''}`,e(m.title))}
 <div class="sheet-body">
 ${cover?`<button type="button" class="sheet-cover" data-action="zoom-photo" data-place="${cover}" aria-label="放大${e(PLACE[cover].name)}照片">${img(cover,true)}<span>${e(PLACE[cover].name)}</span></button>`:''}
 ${m.line?`<p class="lead">${e(m.line)}</p>`:''}
 ${m.optionNote?`<p class="note">${e(m.optionNote)}</p>`:''}
 ${m.hotels.map(p=>`<p class="ja" lang="ja">${e(p.name_ja)}</p>`).join('')}
 ${m.notice?`<div class="notice">${icon('alert')}<div>${m.notice}</div></div>`:''}
 ${m.facts?`<p class="note">${e(m.facts)}</p>`:''}
 ${m.links.length?`<div class="actions">${m.links.join('')}</div>`:''}
 ${m.transport.length?`<section class="sec"><h3>怎么走</h3>${transportBlock(m.transport)}</section>`:''}
 ${m.via.length?`<details class="fold"><summary>沿途 ${m.via.length-1} 站</summary><ol class="line via">${m.via.map(s=>`<li>${external(`<span class="node"></span><span><b>${e(s.name)}</b>${s.sub?`<small lang="ja">${e(s.sub)}</small>`:''}</span>`,s.url)}</li>`).join('')}</ol></details>`:''}
 ${m.meals.length?`<section class="sec"><h3>吃什么</h3>${m.meals.map(mealHTML).join('')}</section>`:''}
 ${m.shots.length||m.rally?`<section class="sec"><h3>巡礼</h3><div class="actions">${m.shots.length?`<a class="btn" href="#shots/${d.date}/${e(m.shots[0].id)}">${icon('camera')}<span>对照 ${m.shots.length} 组</span></a>`:''}${m.rally?external('<span>打开集章活动 ↗</span>',PILGRIMAGE.rally.entry_url,'btn'):''}</div></section>`:''}
 ${m.choices?`<section class="sec choices"><h3>可调整</h3>${m.choices}</section>`:''}
 ${rest.length?`<div class="photos">${rest.map(id=>`<button type="button" class="photo" data-action="zoom-photo" data-place="${id}">${img(id)}<span>${e(PLACE[id].name)}</span></button>`).join('')}</div>`:''}
 ${m.details.map(x=>`<section class="sec"><h3>${e(x.title)}</h3><ul class="plain">${x.items.map(it=>`<li>${linkItem(it)}</li>`).join('')}</ul></section>`).join('')}
 ${m.food.map(foodHTML).join('')}
 ${m.placeNotes.length?`<section class="sec"><h3>地点说明</h3>${m.placeNotes.map(t=>`<p>${e(t)}</p>`).join('')}</section>`:''}
 ${m.fullNote?`<details class="fold"><summary>完整说明</summary><p>${e(m.fullNote)}</p></details>`:''}
 </div>
 <footer class="sheet-foot">${m.nav?navButton(m.nav,true):''}${checkButton(d.date,ev,true)}</footer>`;
}
function sheetHTML(date,key){
 const i=PLAN.days.findIndex(x=>x.date===date),d=PLAN.days[i];if(!d)return '';
 if(key==='notes')return `${sheetHead(dateLabel(date)+' · 延误或天气变化时','情况有变时')}<div class="sheet-body"><ul class="plain roomy">${fieldNotes(d).map(t=>`<li>${e(t)}</li>`).join('')}</ul></div>`;
 if(key==='stay'&&d.overnight){const p=PLACE[d.overnight];return `${sheetHead(dateLabel(date)+' · 今晚住',e(p.name))}<div class="sheet-body">${photoSrc(p.id)?`<button type="button" class="sheet-cover" data-action="zoom-photo" data-place="${p.id}">${img(p.id,true)}</button>`:''}<p class="ja big" lang="ja">${e(p.name_ja)}</p>${p.address_ja?`<p class="ja" lang="ja">${e(p.address_ja)}</p>`:''}${PLACE_LOCATIONS[p.id]?`<p class="muted">${e(PLACE_LOCATIONS[p.id])}</p>`:''}${PLACE_DETAILS[p.id]?`<p>${e(cleanText(PLACE_DETAILS[p.id]))}</p>`:''}</div><footer class="sheet-foot">${external(icon('pin')+'<span>酒店地图</span>',p.map_search_url,'nav nav-big')}${p.address_ja?`<button type="button" class="check-big copy" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</footer>`;}
 if(key==='route')return `${sheetHead(dateLabel(date)+' · 按到达顺序','当天路线')}<div class="sheet-body"><ol class="line route">${timedRoute(d).map(s=>`<li><span class="node"></span><div><b>${e(PLACE[s.id].name)}</b>${s.purpose?`<small>${e(s.purpose)}</small>`:''}<small class="muted">${s.times.map(t=>e(compactTime(t.text))).join(' · ')}${s.optional?' · 可选':''}</small></div>${external(icon('pin'),PLACE[s.id].map_search_url,'nav')}</li>`).join('')}</ol><p class="hint">按先后排列，不代表实际距离。</p></div>`;
 const ev=effectiveEvents(d).find(x=>x.id===key);
 return ev?eventSheet(d,ev):'';
}
let sheetState=null;
// Dialogs slide or fade out before they close; reopening mid-exit simply cancels the exit.
const exiting=new WeakMap(),motionOK=()=>typeof matchMedia!=='function'||!matchMedia('(prefers-reduced-motion: reduce)').matches;
function closeDialog(dlg){
 if(!dlg?.open||exiting.has(dlg))return;
 if(!motionOK())return dlg.close();
 dlg.classList.add('closing');
 exiting.set(dlg,setTimeout(()=>{exiting.delete(dlg);dlg.classList.remove('closing');dlg.close();},200));
}
function showDialog(dlg){
 if(exiting.has(dlg)){clearTimeout(exiting.get(dlg));exiting.delete(dlg);dlg.classList.remove('closing');}
 if(!dlg.open)dlg.showModal();
}
function openSheet(date,key,{push=true,pushed=push}={}){
 const html=sheetHTML(date,key);if(!html)return;
 const dlg=$('#sheet');dlg.innerHTML=html;dlg.dataset.date=date;dlg.dataset.key=key;
 showDialog(dlg);
 dlg.querySelector('.sheet-body')?.scrollTo(0,0);
 if(push)history.pushState({sheet:{date,key}},'',location.href);
 sheetState={date,key,pushed};
}
function hideSheet(){closeDialog($('#sheet'));sheetState=null;}
function closeSheet(){
 if(!sheetState)return hideSheet();
 if(sheetState.pushed){history.back();return;}
 // Opened from a deep link: there is no entry to go back to, so drop the activity from the address instead.
 const date=sheetState.date;hideSheet();
 if(/^#day\/[^/]+\/./.test(location.hash))history.replaceState(null,'','#day/'+date);
}
function refreshSheet(){
 if(!sheetState)return;
 const body=$('#sheet .sheet-body'),y=body?.scrollTop||0,html=sheetHTML(sheetState.date,sheetState.key);
 if(!html)return closeSheet();
 $('#sheet').innerHTML=html;$('#sheet .sheet-body')?.scrollTo(0,y);
}

/* ---------- 巡礼 ---------- */
function shotImage(p,kind,label){
 const image=p[kind];
 return image?.src?`<button type="button" class="shot-img" data-action="zoom-shot" data-shot="${e(p.id)}" data-kind="${kind}" aria-label="放大${e(p.title)}${label}"><img src="${image.thumbnail||image.src}" alt="${e(p.title)} · ${label}" width="${image.width||800}" height="${image.height||450}" loading="lazy" decoding="async"><span>${label}</span></button>`
  :`<div class="shot-missing"><b>${label}待补</b><small>${e(image?.note||'尚未找到可核对的图片')}</small></div>`;
}
function shotHTML(p,n){
 const s=shotModel(p);
 return `<article class="shot${s.done?' done':''}" id="shot-${e(s.id)}">
 ${s.done?seal(ui.justDone==='shot:'+s.id?' shot-seal stamp-in':' shot-seal'):''}
 <header><p class="kicker">${n?`<span class="shot-n">${String(n).padStart(2,'0')}</span>`:''}${e(s.work)}${s.optional?' · 可选':''}</p><h2 class="title">${e(s.title)}</h2><p class="ja" lang="ja">${e(s.nameJa)}</p></header>
 <div class="pair${s.images.length===1?' single':''}">${s.images.map(([kind,label])=>shotImage(p,kind,label)).join('')}</div>
 ${s.caption?`<p class="hint">${e(s.caption)}</p>`:''}
 ${s.note?`<p class="shot-note"><b>站位</b>${e(s.note)}</p>`:''}
 <div class="actions">${external(icon('pin')+'<span>地图</span>',s.map,'btn')}<button type="button" class="btn shot-toggle${s.done?' on':''}" data-action="shot" data-shot="${e(s.id)}" aria-pressed="${s.done}">${icon('check')}<span>${s.done?'已拍':'标记已拍'}</span></button>${s.eventId?openButton(s.date,s.eventId,'<span>行程</span>','btn ghost'):''}</div>
 <details class="fold"><summary>场景与来源</summary>${s.scene?`<p>${e(s.scene)}</p>`:''}${s.coords?`<p class="muted">${s.coords.lat}, ${s.coords.lng} · ${e(s.coords.precision||'')} <button type="button" class="link" data-action="copy" data-copy="${s.coords.lat}, ${s.coords.lng}">复制坐标</button>${s.coords.source_url?' · '+external('定位依据 ↗',s.coords.source_url):''}</p>`:'<p class="muted">坐标待核准，按地点名称搜索。</p>'}${p.real?.source_url?`<p class="muted">实景：${e(p.real.credit||'原作者')} · ${external('来源 ↗',p.real.source_url)}</p>`:''}${p.anime?.source_url?`<p class="muted">作品画面：${e(p.anime.credit||'作品权利方')} · ${external('来源 ↗',p.anime.source_url)}</p>`:''}${p.comparison?`<p class="muted">${e(p.comparison.credit)} · ${external('对照原图 ↗',p.comparison.source_url)}</p>`:''}${(p.sources||[]).map(x=>`<p class="muted">${external(e(x.title)+' ↗',x.url)}</p>`).join('')}</details>
 </article>`;
}
function rallyHTML(d){
 if(d.date==='2026-12-03')return `<section class="block rally"><p class="kicker">10:00–11:30 · 京都塔</p><h2 class="title">京吹联动 · 叠印集章</h2><p>展望室5层领台纸，共7处章点；先完成收费区再出场，门票不能再次入场。</p><div class="actions">${external('<span>活动官网 ↗</span>','https://www.kyoto-tower.jp/event/eupho26autumn/','btn')}</div><details class="fold"><summary>参与规则</summary><p>攻略里的完成或已拍不代表已领取官方印章。</p><p>活动期2026/9/1—12/20。进入展望室须购票，当前成人¥1,000，未购票。</p><p>周边店10:00—20:30，在展望室1层（大楼11楼）。这项纸本叠印与宇治GPS数字集章分开。</p></details></section>`;
 const r=PILGRIMAGE.rally;if(!r||r.date!==d.date)return '';
 return `<section class="block rally" id="shot-rally"><p class="kicker">11/1–12/20 · 后期</p><h2 class="title">京吹数字集章</h2><p>${e(cleanText(r.recommendation))}</p><div class="actions">${external('<span>参加活动 ↗</span>',r.entry_url,'btn primary')}</div>
 <details class="fold"><summary>集章点位 · ${r.spots.length}</summary>${r.spots.map(p=>`<article class="rally-spot"><h3>${e(p.title)}</h3><div class="pair">${p.real?.src?shotImage(p,'real','实景'):''}${shotImage(p,'anime','作品画面')}</div><p class="hint">${e(p.match_note||p.caption||'')}</p><p>${e(cleanText(p.note))}</p><div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_url,'btn')}<button type="button" class="btn" data-action="copy" data-copy="${e(p.name_ja)}">${icon('copy')}<span>复制名称</span></button></div></article>`).join('')}</details>
 <details class="fold"><summary>规则与来源</summary><p>攻略里的完成或已拍不代表已领取官方数字章。</p>${r.rules.map(t=>cleanText(t)).filter(Boolean).map(t=>`<p>${e(t)}</p>`).join('')}<p>${external('活动官网 ↗',r.source_url)} · ${external('官方巡礼地图 PDF ↗',r.map_pdf)}</p><p class="muted">作品画面：©武田綾乃・宝島社／「響け！」製作委員会2024，京阪活动官网。核查：2026/10/1。</p></details></section>`;
}
const shotDays=()=>PLAN.days.map((_,i)=>i).filter(i=>pilgrimageDay(PLAN.days[i].date).length);
function shotsScreen(){
 const days=shotDays();
 if(!days.includes(ui.shotsDay)){const t=todayIndex();ui.shotsDay=days.includes(t)?t:days.includes(ui.day)?ui.day:days[0];}
 const d=PLAN.days[ui.shotsDay],{main,optional}=dayShots(d),pg=shotProgress(d.date);
 return `${strip(days.map(i=>['#shots/'+PLAN.days[i].date,i,i===todayIndex()?'今天':DETAILS[PLAN.days[i].date].cityLabel]),ui.shotsDay)}
 <header class="screen-head"><div><p class="kicker">${dateLabel(d.date)} · 实景 × 作品</p><h1 class="display">巡礼对照</h1></div><p class="count"><b>${pg.done}</b><span>/ ${pg.total} 已拍</span></p></header>
 ${rallyHTML(d)}
 ${main.map((p,n)=>shotHTML(p,n+1)).join('')}
 ${optional.length?`<details class="fold block"><summary>可选点位 · ${optional.length}</summary><p class="hint">时间有余时顺路拍，默认不安排。</p>${optional.map(p=>shotHTML(p,0)).join('')}</details>`:''}`;
}

/* ---------- 准备 ---------- */
const todoRow=t=>`<button type="button" class="todo${t.done?' on':''}" data-action="todo" data-todo="${e(t.id)}" aria-pressed="${t.done}"><span class="box">${icon('check')}</span><span>${e(t.text)}</span></button>`;
function prepScreen(){
 const g=todoGroups(),open=openPurchases();
 return `<header class="screen-head"><div><p class="kicker">出发前与旅途中</p><h1 class="display">准备</h1></div>${themeButton()}</header>
 <section class="block"><h2 class="block-title">票务</h2><ul class="tickets">${open.map(t=>`<li class="ticket ${t.tone}"><div class="ticket-main"><b>${e(t.item)}</b><small>${e(t.date)} 使用</small></div><span class="ticket-state">${e(t.label)}</span></li>`).join('')}</ul><p class="hint">${BOOKED.map(b=>b[0]).join('、')} 已订好。</p></section>
 <section class="block"><h2 class="block-title">待办 <small>${todoDone()} / ${TODOS.length}</small></h2><h3 class="sub">出发前完成</h3>${g.before.map(todoRow).join('')}<h3 class="sub">旅途中再确认</h3>${g.trip.map(x=>`<p class="when">${e(x.label)}</p>${x.items.map(todoRow).join('')}`).join('')}</section>
 <section class="block"><h2 class="block-title">航班 · 当地时间</h2>${PLAN.bookings.filter(b=>b.type==='flight').map(b=>`<div class="flight"><p class="kicker">${b.from==='hkg'?'去程':'回程'}</p>${passHTML(b,flightLocal(b,'departure'),flightLocal(b,'arrival'))}</div>`).join('')}</section>
 <section class="block"><h2 class="block-title">酒店</h2>${PLAN.bookings.filter(b=>b.type==='hotel').map(b=>{const p=PLACE[b.place_id];return `<div class="hotel"><p class="kicker">${b.place_id==='hotel_kyoto'?'京都':'大阪'} · ${b.nights}晚 · ${dateLabel(b.checkin_date)}—${dateLabel(b.checkout_date)} · 不含早餐</p><p class="ja big" lang="ja">${e(p.name_ja)}</p>${p.address_ja?`<p class="ja" lang="ja">${e(p.address_ja)}</p>`:''}<div class="actions">${external(icon('pin')+'<span>地图</span>',p.map_search_url,'btn')}${p.address_ja?`<button type="button" class="btn" data-action="copy" data-copy="${e(p.address_ja)}">${icon('copy')}<span>复制地址</span></button>`:''}</div></div>`;}).join('')}</section>
 <details class="fold block"><summary>参考资料</summary>
  <h3 class="sub">作品日文名</h3>${WORK_NAMES.map(t=>`<p class="copy-line"><span lang="ja">${e(t)}</span><button type="button" class="icon-btn small" data-action="copy" data-copy="${e(t)}" aria-label="复制${e(t)}">${icon('copy')}</button></p>`).join('')}
  <h3 class="sub">保存的早季红叶预测 · 截至2026/9/28</h3>${PLAN.foliage.spots.map(s=>`<p>${e(PLACE[s.place_id].name)}：到访 ${dateLabel(s.visit_date)} · 预测观赏 ${dateLabel(s.forecast_viewing_start)} · 预测落叶 ${dateLabel(s.forecast_leaf_fall_start)} · ${external('来源 ↗',s.source)}</p>`).join('')}<p class="muted">可能见到枝头红叶与落叶混合，不保证盛期。</p>
  <h3 class="sub">预算</h3><p>普通正餐每人¥1,000—2,500；12/6和牛自助每人不超过¥6,000。</p><p>门票（两人）：京都塔¥2,000、大佛殿¥1,600、高台寺¥1,600；USJ、清水寺与购物另计。</p>
  <h3 class="sub">离线使用</h3><p>${isWeb?'网页版的照片按需加载；路上请用离线单文件版。':'行程与照片可离线查看。'}地图和来源链接需联网。勾选只存在这台设备的浏览器里，不与同行者同步，网页版与离线文件各自保存；清除浏览器数据会丢失。</p>
 </details>
 <a class="link-row" href="${BLOG_HOME}">${icon('back')}<span>返回まひろ的小站</span>${icon('chevron')}</a>`;
}

/* ---------- Shell ---------- */
const ui={tab:'now',day:Math.max(0,todayIndex()),shotsDay:null,target:'',justDone:''};
const TABS=[['now','clock'],['day','calendar'],['shots','camera'],['prep','bag']];
const TAB_LABEL={day:'行程',shots:'巡礼',prep:'准备'};
function tabHref(id){return id==='day'?'#day/'+PLAN.days[ui.day].date:id==='shots'?'#shots'+(ui.shotsDay!=null?'/'+PLAN.days[ui.shotsDay].date:''):'#'+id;}
const SCREENS={now:nowScreen,day:dayScreen,shots:shotsScreen,prep:prepScreen};
// Old addresses (#day/<date>/timeline/<event>, …/pilgrimage/<point>) still land in the right place.
function parseHash(){
 const parts=location.hash.slice(1).split('/'),at=date=>PLAN.days.findIndex(d=>d.date===date);
 ui.target='';
 if(parts[0]==='day'&&at(parts[1])>=0){
  ui.day=at(parts[1]);
  if(parts[2]==='pilgrimage'){ui.tab='shots';ui.shotsDay=ui.day;if(parts[3])ui.target='shot-'+parts[3];return '';}
  ui.tab='day';const rest=parts.slice(2).filter(x=>x&&x!=='timeline'&&x!=='details');return rest[0]||'';
 }
 if(parts[0]==='shots'){ui.tab='shots';if(at(parts[1])>=0)ui.shotsDay=at(parts[1]);if(parts[2])ui.target='shot-'+parts[2];return '';}
 ui.tab=parts[0]==='prep'?'prep':'now';return '';
}
function renderMain(){
 const main=$('#main'),stripWas=main.querySelector('.strip')?.scrollLeft;
 main.className='screen screen-'+ui.tab; // drops .enter, so a refresh never replays the entrance
 main.innerHTML=(storageOK?'':'<p class="banner" role="alert">浏览器未允许本机保存，关闭后勾选可能丢失。</p>')+SCREENS[ui.tab]();
 const phase=tripStatus().phase;
 $('.tabbar').innerHTML=TABS.map(([id,ico])=>`<a href="${tabHref(id)}" class="tab${ui.tab===id?' on':''}"${ui.tab===id?' aria-current="page"':''}>${icon(ico)}<span>${id==='now'?PHASE_LABEL[phase]:TAB_LABEL[id]}</span></a>`).join('');
 const rail=main.querySelector('.strip'),on=rail?.querySelector('.on');
 // The date strip glides from where it was to the chosen day instead of jumping.
 if(rail&&on){const left=on.offsetLeft-rail.clientWidth/2+on.clientWidth/2;if(stripWas!=null&&motionOK()){rail.scrollLeft=stripWas;rail.scrollTo({left,behavior:'smooth'});}else rail.scrollLeft=left;}
 document.title=(ui.tab==='day'?dateLabel(PLAN.days[ui.day].date)+' '+dayPresentation(PLAN.days[ui.day]).short:ui.tab==='shots'?'巡礼对照':ui.tab==='prep'?'准备':PHASE_LABEL[phase])+' · 关西秋日手帖';
}
// app.js's page tools call render() after recording a completion.
function render(){renderMain();refreshSheet();}
const scrollMemory=new Map();let viewKey='';
function route(){
 if(viewKey)scrollMemory.set(viewKey,scrollY);
 const deep=parseHash(),before=viewKey;
 renderMain();
 viewKey=ui.tab+'/'+(ui.tab==='day'?ui.day:ui.tab==='shots'?ui.shotsDay:'');
 // A new tab or day eases in; refreshes in place (a tick, a choice) do not move anything.
 if(before&&before!==viewKey&&motionOK())$('#main').classList.add('enter');
 const target=ui.target&&document.getElementById(ui.target);
 if(target)target.scrollIntoView({block:'start'});else window.scrollTo({top:scrollMemory.get(viewKey)||0,behavior:'instant'});
 const kept=history.state?.sheet;
 if(deep)openSheet(PLAN.days[ui.day].date,deep,{push:false});
 else if(kept)openSheet(kept.date,kept.key,{push:false,pushed:true});
 else hideSheet();
}
// Re-render in place, keeping the reading position and every open fold. A fresh 丛雨 / 済 mark plays once, then stays still.
const foldKey=el=>(el.closest('[id]')?.id||'')+'|'+el.querySelector('summary')?.textContent;
function refresh(){
 const y=scrollY,open=new Set([...$('#main').querySelectorAll('details[open]')].map(foldKey));
 renderMain();
 $('#main').querySelectorAll('details').forEach(el=>{if(open.has(foldKey(el)))el.open=true;});
 window.scrollTo({top:y,behavior:'instant'});refreshSheet();
 if(ui.justDone)setTimeout(()=>{ui.justDone='';},700);
}

function toggleCheck(date,id){
 const d=PLAN.days.find(x=>x.date===date),was=activityState(date,id)==='done',title=effectiveEvents(d).find(x=>x.id===id)?.title||'';
 setCheck(date,id,!was);
 if(was)return refresh();
 try{navigator.vibrate?.(12);}catch{}
 ui.justDone=date+':'+id;
 // Completing from the sheet means "done here": close it and show the list moving on.
 if(sheetState?.key===id)closeSheet();
 refresh();
 toast('已完成：'+title,()=>{setCheck(date,id,false);refresh();});
}
function toggleShot(id){
 const p=pilgrimagePoints.find(x=>x.id===id);if(!p)return;
 const key=shotKey(p),now=!state.checks[key];state.checks[key]=now;save();
 if(now)ui.justDone='shot:'+id;
 refresh();
 if(now)toast('已拍：'+p.title,()=>{state.checks[key]=false;save();refresh();});
}
function toggleTodo(id){state.todos[id]=!state.todos[id];save();refresh();}
const COLOR_MODE_KEY='user-color-scheme';
const systemColorMode=()=>typeof matchMedia==='function'&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
function toggleTheme(){
 const root=document.documentElement,next=(root.getAttribute('data-user-color-scheme')||systemColorMode())==='dark'?'light':'dark';
 if(next===systemColorMode())root.removeAttribute('data-user-color-scheme');else root.setAttribute('data-user-color-scheme',next);
 try{if(next===systemColorMode())localStorage.removeItem(COLOR_MODE_KEY);else localStorage.setItem(COLOR_MODE_KEY,next);}catch{}
}
function openZoom(title,image,switcher=''){
 const z=$('#zoom');
 z.innerHTML=`<div class="zoom-top"><h2>${e(title)}</h2><button type="button" class="icon-btn" data-action="zoom-close" aria-label="关闭">${icon('close')}</button></div><div class="zoom-stage"><img src="${image.src}" alt="${e(image.alt||title)}"></div>${switcher}${image.credit||image.source_url?`<p class="zoom-credit">${e(image.credit||'')}${image.source_url?' · '+external('来源 ↗',image.source_url):''}</p>`:''}`;
 showDialog(z);
}
function zoomShot(id,kind){
 const p=pilgrimagePoints.find(x=>x.id===id)||PILGRIMAGE.rally?.spots.find(x=>x.id===id),image=p?.[kind];if(!image?.src)return;
 // Flip between the two frames in place to line up the shot.
 const kinds=['anime','real'].filter(k=>p[k]?.src);
 const switcher=kind==='comparison'||kinds.length<2?'':`<div class="zoom-switch" role="group" aria-label="切换对照图片">${kinds.map(k=>`<button type="button" data-action="zoom-shot" data-shot="${e(p.id)}" data-kind="${k}" aria-pressed="${kind===k}">${k==='real'?'实景':'作品画面'}</button>`).join('')}</div>`;
 openZoom(p.title,{...image,alt:p.title,credit:image.credit},switcher);
}
function zoomPhoto(id){const p=PHOTOS[id];if(p?.src)openZoom(PLACE[id].name,{src:p.src,alt:p.sight,credit:[p.sight,p.author,p.date].filter(Boolean).join(' · '),source_url:p.sourcePage});}

function boot(){
 $('#app').innerHTML=`<main id="main" tabindex="-1"></main><nav class="tabbar" aria-label="主导航"></nav><dialog id="sheet" class="sheet" aria-label="详情"></dialog><dialog id="zoom" class="zoom" aria-label="放大图片"></dialog>`;
 document.addEventListener('click',ev=>{
  const tab=ev.target.closest('a.tab.on');
  if(tab){ev.preventDefault();window.scrollTo({top:0,behavior:'smooth'});return;}
  const t=ev.target.closest('[data-action]');if(!t)return;
  const act=t.dataset.action;
  if(act==='open')openSheet(t.dataset.date,t.dataset.key);
  else if(act==='close-sheet')closeSheet();
  else if(act==='check')toggleCheck(t.dataset.date,t.dataset.event);
  else if(act==='shot')toggleShot(t.dataset.shot);
  else if(act==='todo')toggleTodo(t.dataset.todo);
  else if(act==='copy')copyText(t.dataset.copy);
  else if(act==='copy-close')$('#copy-dialog').close();
  else if(act==='theme')toggleTheme();
  else if(act==='undo'&&undoAction){const fn=undoAction;undoAction=null;fn();}
  else if(act==='zoom-photo')zoomPhoto(t.dataset.place);
  else if(act==='zoom-shot')zoomShot(t.dataset.shot,t.dataset.kind);
  else if(act==='zoom-close')closeDialog($('#zoom'));
 });
 document.addEventListener('change',ev=>{
  const input=ev.target;if(!input.dataset?.choice||!sheetState)return;
  const d=PLAN.days.find(x=>x.date===sheetState.date),key=input.dataset.choice,value=input.value,c=choice(d);
  c[key]=input.type==='checkbox'?input.checked:value;
  if(c.shop1===c.shop2)c.shop2='none';
  if(key==='kodaijiPlan'&&value==='skip')c.yasakaBrief=false;
  state.choices[d.date]=c;save();refresh();
  document.querySelector(`#sheet [data-choice="${key}"]${input.type==='radio'?`[value="${value}"]`:''}`)?.focus({preventScroll:true});
 });
 $('#sheet').addEventListener('cancel',ev=>{ev.preventDefault();closeSheet();});
 $('#sheet').addEventListener('click',ev=>{if(ev.target.id==='sheet')closeSheet();});
 $('#zoom').addEventListener('click',ev=>{if(ev.target.id==='zoom'||ev.target.classList.contains('zoom-stage'))closeDialog($('#zoom'));});
 $('#zoom').addEventListener('cancel',ev=>{ev.preventDefault();closeDialog($('#zoom'));});
 window.addEventListener('popstate',ev=>{const s=ev.state?.sheet;if(s)openSheet(s.date,s.key,{push:false,pushed:true});else hideSheet();});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#main')route();}); // #main is the skip link
 window.addEventListener('storage',ev=>{
  if(ev.key===COLOR_MODE_KEY){if(ev.newValue)document.documentElement.setAttribute('data-user-color-scheme',ev.newValue);else document.documentElement.removeAttribute('data-user-color-scheme');return;}
  if(ev.key===STORAGE_KEY){try{const next=JSON.parse(ev.newValue);if(next?.checks&&next?.todos&&next?.choices){state=next;refresh();}}catch{}}
 });
 // The 现在 screen follows the clock: refresh each minute and whenever the phone comes back to the page.
 setInterval(()=>{if(ui.tab==='now'&&!document.hidden)refresh();},60000);
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
 if('scrollRestoration' in history)history.scrollRestoration='manual';
 route();
}
if(typeof document!=='undefined'&&typeof document.getElementById==='function'&&document.getElementById('app'))boot();
