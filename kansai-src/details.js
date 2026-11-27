const DETAILS = {
  "2026-11-30": {
    "short": "抵达京都",
    "eyebrow": "香港 → 关西机场 → 京都",
    "focus": "抵达关西，入住京都。",
    "key": "HX618抵达关西T1，取箱后乘HARUKA去京都。",
    "cover": "kyoto_station",
    "photos": [
      "kyoto_station",
      "kyoto_avanti",
      "kyoto_ramen_koji",
      "kyoto_skyway"
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
        "夜间 · 逛店与晚饭",
        [
          "checkin_kyoto",
          "kyoto_station_visit",
          "avanti_shopping",
          "dinner_arrival",
          "skyway_visit",
          "kyoto_arrival_return"
        ]
      ]
    ],
    "routePhases": [
      "抵达",
      "抵达",
      "抵达",
      "夜间",
      "夜间",
      "夜间",
      "夜间",
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
        "京都拉麺小路（京都駅ビル 10F）",
        "¥1,000–1,500",
        "京都站大楼 10 楼",
        "11:00—22:00（末单21:30）。",
        "https://www.kyoto-ramen-koji.com/",
        "kyoto_ramen_koji"
      ],
      [
        "晚餐",
        "备选",
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
    "summary": "机场 → 酒店 → Avanti → 拉面小路",
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
      },
      "avanti_shopping": {
        "title": "6F 可逛店铺",
        "items": [
          {
            "name": "Animate 京都 Avanti 店",
            "copy": "アニメイト京都",
            "loc": "京都 Avanti · 6F",
            "text": "新品周边与 CD，优先找《Lehre der Rose》未拆封初回；10:00—21:00。",
            "url": "https://www.animate.co.jp/shop/kyoto/",
            "place_id": "kyoto_avanti"
          },
          {
            "name": "指南针（らしんばん）京都店",
            "copy": "らしんばん京都店",
            "loc": "京都 Avanti · 6F",
            "text": "同层中古周边与谷子；10:00—21:00。",
            "url": "https://www.lashinbang.com/store/kyoto/",
            "place_id": "kyoto_avanti"
          }
        ]
      }
    }
  },
  "2026-12-01": {
    "short": "宇治",
    "eyebrow": "京都 ⇄ 宇治",
    "focus": "",
    "key": "09:30出门；上午芭菲与表参道，午饭后河岸巡礼与登山，傍晚书店。",
    "cover": "daikichi",
    "photos": [
      "nakamura",
      "byodoin_approach",
      "agata",
      "bench",
      "daikichi",
      "suikan",
      "heiwa_books",
      "keihan_uji"
    ],
    "phases": [
      [
        "上午 · 抹茶表参道",
        [
          "uji_transfer",
          "uji_parfait",
          "uji_approach",
          "agata_stamp"
        ]
      ],
      [
        "午间",
        [
          "uji_lunch"
        ]
      ],
      [
        "下午 · 河岸登山",
        [
          "uji_pilgrimage",
          "uji_shrines",
          "daikichi_visit",
          "suikan_stamp"
        ]
      ],
      [
        "傍晚 · 书店晚饭",
        [
          "heiwa_visit",
          "keihan_uji_visit",
          "uji_dinner_walk",
          "uji_saizeriya_dinner"
        ]
      ],
      [
        "夜间 · 回京都",
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
      "傍晚",
      "傍晚",
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "京都站乘JR奈良线到JR宇治，出站步行去中村藤吉本店。09:30离店，到店前含酒店到站、候车与步行，具体班次临行确认。",
      "久美子椅 → 喜撰桥 → 塔之岛 → 朝雾桥 → 宇治两神社 → 大吉山登山口。",
      "下山沿大路至东岸河滩拍照领章，勿上桥。",
      "走去JR宇治回京都（不要在京阪宇治站乘车）。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "お肉ダイニング きく",
        "预算 ¥1,000–2,000",
        "宇治妙楽4-4，協栄ビル2F",
        "京吹粉丝聚集的餐厅，非动画取景点。当前营业及咖喱价格临行复核；等位较久时换附近简餐。",
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
        "宇治壱番10",
        "店铺与咖啡10:00—17:30，咖啡末单16:30、受付至16:00；不接受座位预约，拥挤时可能提早截止。",
        "https://tokichi.jp/pages/stores",
        "nakamura"
      ]
    ],
    "extra": [
      "集章需手机联网定位；攻略勾选不等于官方领章。",
      "后期数字章三点为水管桥、縣神社、許波多神社；本路线不含許波多，不追集满。"
    ],
    "foodIdeas": [],
    "cityLabel": "宇治",
    "summary": "抹茶、表参道、河岸巡礼、大吉山、京都站",
    "eventDetails": {
      "heiwa_visit": {
        "title": "店铺与营业",
        "items": [
          {
            "text": "アル・プラザ宇治東 3F（莵道平町 28-1），参考10:00—20:00。",
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
            "text": "等身立牌（小奏/久美子/丽奈）与久美子语音贩售机，展期 9/1—12/20。",
            "url": "https://www.keihan.co.jp/euphonium/"
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
        "上午 · 出町",
        [
          "demachi_transfer",
          "demachi_visit"
        ]
      ],
      [
        "午间 · 鸭川",
        [
          "demachi_lunch",
          "delta_visit"
        ]
      ],
      [
        "下午 · 清水东山",
        [
          "kiyomizu_transfer",
          "kiyomizu_visit",
          "higashiyama_walk"
        ]
      ],
      [
        "傍晚 · 歇脚夜枫",
        [
          "gion_rest",
          "kodaiji_night"
        ]
      ],
      [
        "夜间 · 晚饭回店",
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
      "地铁烏丸线（国际会馆方向）→ 今出川站，步行至出町。",
      "地下搭京阪普通/准急 → 清水五条（勿坐错地上叡山电铁）。",
      "导航搜「清水寺 仁王門」走正门，部分地图小路进不去。",
      "三年坂 → 八坂通短拍 → 二年坂 → 宁宁之道。",
      "阪急京都河原町 → 烏丸，换地铁四条 → 京都；累了直接打车。"
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
        "晚市17:00—21:00，20:00最后点餐。",
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
    "foodIdeas": [],
    "cityLabel": "京都",
    "summary": "出町、清水寺、高台寺"
  },
  "2026-12-03": {
    "short": "京都 → 大阪",
    "eyebrow": "伏见稻荷 → 京都塔 → 道顿堀",
    "focus": "",
    "key": "先去稻荷避开中午人潮，京都站午饭后上京都塔，搬去大阪休息，晚上道顿堀。",
    "cover": "inari",
    "photos": [
      "inari",
      "kyoto_tower",
      "glico",
      "dotonbori"
    ],
    "phases": [
      [
        "上午 · 稻荷",
        [
          "checkout_kyoto",
          "inari_transfer",
          "inari_visit"
        ]
      ],
      [
        "午间 · 京都塔",
        [
          "inari_return",
          "kyoto_lunch",
          "kyoto_tower_visit"
        ]
      ],
      [
        "下午 · 赴大阪",
        [
          "luggage_pickup",
          "osaka_transfer",
          "checkin_osaka",
          "osaka_checkin_rest"
        ]
      ],
      [
        "傍晚 · 道顿堀",
        [
          "dotonbori_transfer",
          "glico_photo",
          "dotonbori_walk",
          "dotonbori_dinner",
          "osaka_evening_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
      "午间",
      "午间",
      "下午",
      "下午",
      "下午",
      "下午",
      "下午",
      "傍晚",
      "傍晚",
      "傍晚",
      "傍晚",
      "傍晚",
      "傍晚",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "退房寄行李至前台，京都站搭JR奈良线普通车1站至稻荷（快车不停）。",
      "乘JR奈良线回京都站。",
      "从京都塔走回TUNE前台取行李。",
      "取行李从京都站搭JR新快速 → 大阪，换环状线 → 新今宫（15:00起入住）。",
      "南海新今宫1站 → 难波，步行10分钟至戎桥（或酒店直走25分钟）。",
      "走去南海难波坐1站回新今宫（不去JR难波）。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "すき家 烏丸七条店",
        "¥700–1,200",
        "真苧屋町 197",
        "牛丼／定食；参考营业 04:00—次日03:00。",
        "https://maps.sukiya.jp/jp/detail/970"
      ],
      [
        "午餐",
        "备选",
        "名代とんかつ かつくら 京都ポルタ店",
        "¥2,500以内",
        "京都站大楼 11 楼",
        "参考11:00—22:00，最后点餐21:30。",
        "https://www.katsukura.jp/shops/porta/"
      ],
      [
        "晚餐",
        "首选",
        "元祖串かつ だるま 法善寺店",
        "¥1,500–2,500",
        "難波1-1-4（法善寺横丁口）",
        "大阪串炸，11:30—22:30（末单22:00），长队换神座。",
        "https://www.kushikatu-daruma.com/"
      ],
      [
        "晚餐",
        "备选",
        "どうとんぼり神座 道頓堀店",
        "¥900–1,400",
        "道頓堀1-7-25",
        "步行2分钟；白菜清汤拉面，11:00—22:00+。",
        "https://kamukura.co.jp/"
      ]
    ],
    "extra": [
      "京都塔门票成人¥1,000、两人¥2,000。"
    ],
    "eventFood": {
      "glico_photo": [
        {
          "place": "eggtart",
          "label": "顺路外带",
          "title": "道顿堀蛋挞",
          "text": "道顿堀1-7-5，11:00—21:00；路过不排队可外带 1–2 个。",
          "budget": "",
          "source": "https://eggtart.jp/shop/"
        }
      ]
    },
    "foodIdeas": [],
    "cityLabel": "京都→大阪",
    "summary": "伏见稻荷、京都塔联动、道顿堀",
    "eventDetails": {
      "kyoto_tower_visit": {
        "title": "集章与门票",
        "items": [
          {
            "text": "活动 9/1—12/20，叠印台纸免费。",
            "url": "https://www.kyoto-tower.jp/event/eupho26autumn/"
          },
          {
            "text": "门票 ¥1,000/人（10:00—21:00，20:30停入）。",
            "url": "https://www.kyoto-tower.jp/faq/"
          }
        ]
      }
    }
  },
  "2026-12-04": {
    "short": "奈良 · 日本桥 · 心斋桥",
    "eyebrow": "大佛殿 → 日本桥 → 宝可梦DX",
    "focus": "",
    "key": "上午东大寺与二月堂，下午日本桥自由逛店，傍晚大丸心斋桥9F宝可梦中心DX，道顿堀晚饭。",
    "cover": "todaiji",
    "photos": [
      "todaiji",
      "nigatsudo",
      "nara_park",
      "animate",
      "surugaya",
      "pokemon_osaka_dx",
      "hokkyokusei_shinsaibashi",
      "dotonbori"
    ],
    "phases": [
      [
        "上午 · 大佛殿",
        [
          "nara_transfer",
          "nara_park_walk",
          "nara_visit"
        ]
      ],
      [
        "午间 · 二月堂",
        [
          "nara_lunch",
          "nigatsudo_visit",
          "nara_station_walk"
        ]
      ],
      [
        "下午 · 日本桥",
        [
          "nara_return_train",
          "anime_shopping"
        ]
      ],
      [
        "傍晚 · 心斋桥",
        [
          "shinsaibashi_transfer",
          "pokemon_dx_visit"
        ]
      ],
      [
        "夜间 · 道顿堀晚饭",
        [
          "nippombashi_dinner",
          "nara_day_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
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
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "南海1站 → 难波，换近铁大阪难波站搭奈良线 → 近铁奈良（勿上大阪线往伊势）。门到近铁奈良约70分钟，含步行与候车。",
      "乘停「近铁日本桥」的列车。",
      "近铁日本桥站向南即御宅路，4 家店彼此步行 2—5 分钟。",
      "道顿堀饭后向南步行约8分钟到南海难波，坐1站回新今宫（不去JR难波）。",
      "步行至地铁难波站，搭御堂筋线1站 → 心斋桥，南改札地下直连大丸本馆上9F。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "東大寺絵馬堂茶屋",
        "¥1,000–1,600",
        "雑司町406-1（二月堂下）",
        "大佛殿东侧步行5分钟；茶粥、乌冬与丼饭，11:00—15:00。",
        ""
      ],
      [
        "午餐",
        "备选",
        "春日野",
        "¥1,000–1,800",
        "雑司町499（若草山麓）",
        "大佛殿东侧大店，座位多不易等；乌冬、丼饭与定食。",
        "https://www.kasugano.com/"
      ],
      [
        "晚餐",
        "首选",
        "北極星 心斎橋本店",
        "¥1,100–1,600",
        "西心斎橋2-7-27（大丸南走7分钟）",
        "蛋包饭老宅，11:30—21:30（末单21:00），长队换吉兵卫。",
        "https://www.hokkyokusei.online/shinsaibashi",
        "hokkyokusei_shinsaibashi"
      ],
      [
        "晚餐",
        "备选",
        "かつ丼吉兵衛 なんば道具屋筋店",
        "¥900–1,400",
        "難波千日前14-2（往南海难波顺路）",
        "猪排饭出餐快，11:00—21:30（末单21:00）。",
        "https://www.yoshibei.co.jp/"
      ],
      [
        "晚餐",
        "备选",
        "やよい軒 難波中2丁目店",
        "¥900–1,500",
        "難波中2-9-4",
        "热定食，10:00—23:00。",
        "https://www.yayoiken.com/"
      ]
    ],
    "extra": [
      "大佛殿成人¥800、两人¥1,600，仅现金；冬季17:00闭门。"
    ],
    "foodIdeas": [],
    "cityLabel": "奈良·日本桥",
    "summary": "大佛殿、二月堂、日本桥、宝可梦DX、道顿堀",
    "eventDetails": {
      "nara_visit": {
        "title": "大佛殿门票与时间",
        "items": [
          {
            "text": "08:00—17:00；单堂 ¥800/人（两人 ¥1,600）。",
            "url": "https://www.todaiji.or.jp/information/haikan/"
          },
          {
            "text": "约11:10从南大门向内参观，大佛殿内部保留约30—40分钟。",
            "url": "https://www.todaiji.or.jp/information/haikan/"
          }
        ]
      },
      "anime_shopping": {
        "title": "可逛店铺",
        "items": [
          {
            "text": "新品动漫周边、漫画与CD；平日 11:00—20:00。",
            "url": "https://www.animate.co.jp/shop/nipponbashi/",
            "place_id": "animate"
          },
          {
            "text": "3F 动漫、游戏、声优音乐CD与毛绒，2F 模型；10:00—21:00。",
            "url": "https://www.suruga-ya.jp/feature/realstore/otaroad/index.html",
            "place_id": "surugaya"
          },
          {
            "text": "复古游戏与怀旧周边（就在骏河屋楼下）；营业以官网当日公告为准。",
            "url": "https://www.superpotato.com/shop/otaroad/",
            "place_id": "potato"
          },
          {
            "text": "综合大店，实体游戏、设定资料与中古周边；10:00—21:00。",
            "url": "https://www.suruga-ya.jp/feature/realstore/nihonbashi_main/index.html",
            "place_id": "surugaya_main"
          }
        ]
      },
      "pokemon_dx_visit": {
        "title": "大丸 9F 与同层",
        "items": [
          {
            "text": "大丸本馆 9F，10:00—20:00；周五或发售日可能发整理券。",
            "url": "https://www.pokemon.co.jp/shop/pokecen/osakadx/"
          },
          {
            "text": "同层顺看 JUMP SHOP、Kirby Café THE STORE。",
            "url": "https://www.daimaru.co.jp/shinsaibashi/floor/9f.html"
          }
        ]
      }
    }
  },
  "2026-12-05": {
    "short": "姬路",
    "eyebrow": "姬路城 → 好古园",
    "focus": "",
    "key": "姬路城看原版天守，好古园等红叶点灯，在姬路吃晚饭再回。",
    "cover": "himeji_castle",
    "photos": [
      "himeji_castle",
      "kokoen"
    ],
    "phases": [
      [
        "上午 · 姬路城",
        [
          "himeji_transfer",
          "himeji_lunch",
          "himeji_walk",
          "himeji_castle_visit"
        ]
      ],
      [
        "下午 · 好古园晚饭",
        [
          "kokoen_visit",
          "himeji_lights",
          "himeji_dinner",
          "himeji_return"
        ]
      ]
    ],
    "routePhases": [
      "上午",
      "上午",
      "上午",
      "上午",
      "午间",
      "下午",
      "傍晚",
      "傍晚",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "JR环状线 → 大阪，换JR神户线新快速 → 姬路（约1小时）。",
      "姬路站北口沿大手前通步行约20分钟到姬路城。",
      "JR新快速 → 大阪，换环状线 → 新今宫（约75分钟）。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "炭焼あなご やま義",
        "¥1,500–2,300",
        "駅前町301（おみぞ筋商店街）",
        "北口步行3分钟顺路；炭烤穴子饭，11:00—20:00，无休。",
        "https://anago-yamayoshi.jp/"
      ],
      [
        "午餐",
        "备选",
        "姫路タンメン",
        "¥900–1,400",
        "駅前町229",
        "北口步行2分钟；姜丝拉面翻台快，长队备选。",
        ""
      ],
      [
        "晚餐",
        "首选",
        "さち福や CAFÉ ピオレ姫路店",
        "¥1,300–1,800",
        "ピオレ1 B1F（姬路站直连）",
        "热定食，11:00—22:00（末单21:15）。",
        "https://www.fujiofood.com/"
      ],
      [
        "晚餐",
        "备选",
        "大衆 ゆかり食堂",
        "¥1,000–1,800",
        "グランフェスタ6番街（站前地下街）",
        "姬路关东煮与定食，周六至23:00。",
        ""
      ]
    ],
    "extra": [
      "姬路城＋好古园套票¥2,600/人，单买姬路城¥2,500。"
    ],
    "eventFood": {},
    "foodIdeas": [],
    "cityLabel": "姬路",
    "summary": "姬路城、好古园",
    "eventDetails": {
      "himeji_castle_visit": {
        "title": "天守与门票",
        "items": [
          {
            "text": "09:00—17:00（16:00停止入城）；姬路城＋好古园套票 ¥2,600/人。",
            "url": "https://tanosu.com/trip/35849/"
          }
        ]
      },
      "kokoen_visit": {
        "title": "红叶会与点灯",
        "items": [
          {
            "text": "红叶会 11/17—12/6，约 16:48 日落点灯，开至 20:00（19:30停入）。",
            "url": "https://tanosu.com/trip/49737/"
          }
        ]
      },
      "himeji_lights": {
        "title": "灯饰",
        "items": [
          {
            "text": "灯饰 17:00—22:00 免费亮灯。",
            "url": "https://sp.jorudan.co.jp/illumi/news/jrd_260903_2.html"
          }
        ]
      }
    }
  },
  "2026-12-06": {
    "short": "神户",
    "eyebrow": "生田 → 北野 → 元町 → 神户大桥",
    "focus": "",
    "key": "生田与北野巡礼，三宫动漫店与元町两家CD店，白天拍桥，傍晚三宫和牛Walk-in。",
    "cover": "ikuta",
    "photos": [
      "ikuta",
      "starbucks_kitano",
      "kobe_bridge",
      "sannomiya_center"
    ],
    "phases": [
      [
        "上午",
        [
          "kobe_transfer",
          "ikuta_visit"
        ]
      ],
      [
        "午间",
        [
          "kitano_lunch"
        ]
      ],
      [
        "下午 · 逛店看桥",
        [
          "motomachi_cd_shopping",
          "sannomiya_rest",
          "kobe_bridge_visit"
        ]
      ],
      [
        "傍晚 · 和牛",
        [
          "sannomiya_evening",
          "sannomiya_dinner",
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
      "下午",
      "下午",
      "傍晚",
      "夜间",
      "夜间",
      "夜间",
      "夜间"
    ],
    "transport": [
      "JR环状线 → 大阪，换JR神户线新快速 → 三ノ宮，步行至生田神社。门到神社预留约75分钟。",
      "生田神社上坡 20 分钟至北野；饭后沿北野坂下坡 20 分钟至三宫。",
      "下坡先逛三宫三店，再沿商店街向西走 10 分钟至元町。",
      "三宫搭海滨轻轨（Port Liner）→ 中公園，步行 8 分钟至北公园。全段预留约105分钟含候车与步行，16:30前回到三宫，不锁定车次。",
      "步行回JR三ノ宮，搭神户线 → 大阪，换环状线 → 新今宫。含到站、候车、换乘及回酒店步行，预留75—90分钟。"
    ],
    "meals": [
      [
        "午餐",
        "首选",
        "スターバックス コーヒー 神戸北野異人館店",
        "预算 ¥1,000–1,500",
        "北野町3-1-31，北野物语馆",
        "轻食配饮品。饿了去三宫/元町垫口热食；参考营业08:00—22:00；无座位就保留外观短拍，下坡找有座位的简餐。",
        "https://store.starbucks.co.jp/detail-940/",
        "starbucks_kitano"
      ],
      [
        "晚餐",
        "首选",
        "ふうふう亭 三宮店",
        "预算不超过¥6,000",
        "北長狭通2-11-6 ファンタジービル3F",
        "和牛ざんまい 120分钟软饮套餐 ¥5,000含税（2人起）；营业16:00—23:00，末单22:30。",
        "https://fufutei-44.owst.jp/courses",
        "fufutei_kobe"
      ],
      [
        "晚餐",
        "备选",
        "焼肉あらし 三宮店",
        "¥5,480–5,980",
        "北長狭通2-12-6 Kビル5F",
        "隔壁步行1分钟；A5黑毛和牛放题，周日17:00—22:00（末单21:30）。",
        "https://yakiniku-arashi.com/"
      ],
      [
        "晚餐",
        "备选",
        "牛角 阪急三宮さんきた店",
        "¥3,100–5,000",
        "北長狭通1-3-6 光陽ビル4F",
        "步行3分钟，连锁兜底；周日16:00起，放题¥3,058起。",
        "https://www.gyukaku.ne.jp/"
      ]
    ],
    "extra": [
      "三宫小吃沿中央街自选，さんプラザ及センタープラザB1有餐饮区。"
    ],
    "foodIdeas": [],
    "cityLabel": "神户",
    "summary": "生田神社、北野、元町CD店、神户大桥、和牛",
    "eventDetails": {
      "motomachi_cd_shopping": {
        "title": "可逛店铺（三宫 → 元町）",
        "items": [
          {
            "text": "中古动漫周边与谷子；11:00—20:00。",
            "url": "https://www.lashinbang.com/store/kobe/",
            "place_id": "lashinbang_kobe"
          },
          {
            "text": "动漫CD、影像、毛绒与中古周边；11:00—20:00。",
            "url": "https://www.suruga-ya.jp/feature/realstore/kobe_sannomiya/index.html",
            "place_id": "surugaya_kobe"
          },
          {
            "text": "二手音像、CD、漫画与游戏；10:00—20:00。",
            "url": "https://www.bookoff.co.jp/shop/shop10822.html",
            "place_id": "bookoff_kobe"
          },
          {
            "text": "独立唱片店，中古 CD 与黑胶；10:30—19:30。",
            "url": "https://bananarecord.jp/shop_information/shop_kobe",
            "place_id": "kobe_banana_records"
          },
          {
            "text": "元町中古唱片店，CD 与音乐碟片；11:00—20:00，官网标年中无休。",
            "url": "https://motomachirhythmbox.com/",
            "place_id": "kobe_rhythmbox"
          }
        ]
      }
    }
  },
  "2026-12-07": {
    "short": "返回香港",
    "eyebrow": "新今宫 → 关西机场 → 香港",
    "focus": "清晨前往机场，搭乘HX617返港。",
    "key": "06:25—06:35离店；南海空港急行 06:52→07:33（¥970 免特急券，早班备选 05:47→06:28）。",
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
        "返港",
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
      "刷 IC 卡直上 06:52 空港急行（¥970 免特急券，07:33 到）；更早备选 05:47。",
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
  "animate": "池田大楼2号馆1—2楼；新品周边，参考25—30分钟。平日11:00—20:00。",
  "surugaya": "平田大楼2—3楼；先3楼动漫周边、布偶、影音，再看2楼模型。参考50—60分钟；10:00—21:00。",
  "potato": "平田大楼1楼；复古游戏，参考20—30分钟；营业以官网当日公告为准。",
  "surugaya_main": "日本桥4-11-3；实体游戏、设定资料与中古周边，参考10:00—21:00；不保证库存。",
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
 "surugaya_main":"日本桥 4-11-3",
 "lashinbang_kobe":"センタープラザ东馆 · 2F",
 "surugaya_kobe":"さんプラザ · 3F-2",
 "bookoff_kobe":"グレースコウベ · 5F",
 "kobe_banana_records":"新元町ビル · 4F",
 "kobe_rhythmbox":"辰巳ビル · 2F",
 "fufutei_kobe":"ファンタジービル · 3F",
 "pokemon_osaka_dx":"大丸心斋桥本馆 · 9F",
 "hokkyokusei_shinsaibashi":"西心斋桥 · 近道顿堀"
};

const WORK_NAMES = [
  "響け！ユーフォニアム",
  "たまこまーけっと／たまこラブストーリー",
  "名探偵コナン",
  "千恋＊万花",
  "サノバウィッチ",
  "RIDDLE JOKER",
  "SEKIRO: SHADOWS DIE TWICE"
];

const PHOTO_REFERENCES = {
  "bench": "https://www.b-links.jp/kumikobennti/",
  "daikichi": "https://nottiphotobiker.com/kyotodaikitiyamaaki/",
  "asagiri": "https://media.kyototourism.org/en/photos/4151/"
};


PLACE_DETAILS["starbucks_kitano"] = "北野物语馆。保留午餐、咖啡、休息与外观巡礼；《魔女的夜宴》七绪咖啡店关联为玩家实景对照，非官方认定。";
PLACE_DETAILS["lashinbang_kobe"] = "センタープラザ东馆2F 246-1；当前11:00—20:00。快速看约10分钟。";
PLACE_DETAILS["surugaya_kobe"] = "さんプラザ3F-2；周日参考11:00—20:00。动漫CD、影像、毛绒与周边；库存以现场为准。";
PLACE_DETAILS["bookoff_kobe"] = "グレースコウベ5F，三宫町2-10-7；当前10:00—20:00。重点看音像。";
PLACE_DETAILS["sannomiya_center"] = "中央街沿街可自行找小吃，さんプラザ及センタープラザB1有餐饮区。";
PLACE_DETAILS["kobe_bridge"] = "导航到Port Island北公园，从桥南侧拍红色桥梁。中公園站步行约8分钟，不安排全程步行跨桥。";

PLACE_DETAILS.heiwa_books = "アル・プラザ宇治東3F，参考10:00—20:00。周边库存与京阿尼展陈以现场为准。";
PLACE_DETAILS.keihan_obaku = "JR出站后步行换乘京阪；认宇治方向2号站台，乘一站到三室户。叶月贩售机只顺路短看。";
PLACE_DETAILS.mimurodo = "出站可顺看小绿贩售机；向北步行约10分钟到アル・プラザ宇治東，书店在3F。";
PLACE_DETAILS.keihan_uji = "本期小奏、久美子、丽奈立牌，9/1—12/20；久美子语音贩售机。展示位置及付费区入场方式现场确认。配图为官方设计示意。";
PLACE_LOCATIONS.heiwa_books = "アル・プラザ宇治東 · 3F";
PLACE_LOCATIONS.keihan_uji = "秋季立牌 · 官方示意图";

// Revision of 2026-11-08: 稻荷 first on 12/3, 二月堂 on 12/4, 姬路 on 12/5, 三宫 shops then 元町 CDs on 12/6.
PLACE_DETAILS.hozenji = "石板窄巷，有长满青苔的不动明王像，几分钟走完。";
PLACE_DETAILS.nara_nandaimon = "南大门外观短拍；大佛殿在门内继续向北，内部参观另付现金。";
PLACE_DETAILS.shinsaibashi_south = "戎桥北侧的心斋桥筋南口，只作12/3短逛里的替换点；之后前往南海难波返店。";
PLACE_DETAILS.kintetsu_osaka_namba = "南海难波出站后步行换乘；乘奈良线往近铁奈良，勿上大阪线往伊势。";
PLACE_DETAILS.kobe_banana_records = "元町通1-4-18新元町ビル4F，10:30—19:30；两家CD店之一。";
PLACE_DETAILS.kobe_rhythmbox = "元町通1-13-19辰巳ビル2F，11:00—20:00，官网标年中无休。";
PLACE_DETAILS.fufutei_kobe = "北長狭通2-11-6ファンタジービル3F，周日16:00—23:00；不预约直接Walk-in，满座换隔壁备选。";
PLACE_DETAILS.pokemon_osaka_dx = "大丸心斋桥店本馆9F，10:00—20:00；门口有三神鸟纪念雕像，Pokémon Cafe 为完全预约制。";
