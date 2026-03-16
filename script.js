const STORAGE_KEY = "rescue-beauties-save-v5";
const LEGACY_STORAGE_KEYS = ["rescue-beauties-save-v4", "rescue-beauties-save-v3", "rescue-beauties-save-v2", "rescue-beauties-save-v1"];
const HERO_ART = "assets/hero-main.svg";
const MONSTER_ART = {
  goblin: "assets/goblin-grunt.svg",
  elite: "assets/goblin-elite.svg"
};

const THEMES = {
  neon: {
    className: "theme-neon",
    top: "#181522",
    mid: "#0b1320",
    bottom: "#120d19",
    lane: "rgba(255, 110, 150, 0.16)",
    haze: "rgba(124, 213, 255, 0.08)"
  },
  frost: {
    className: "theme-frost",
    top: "#14253a",
    mid: "#0a141f",
    bottom: "#081019",
    lane: "rgba(174, 229, 255, 0.14)",
    haze: "rgba(185, 240, 255, 0.08)"
  },
  thunder: {
    className: "theme-thunder",
    top: "#1d1a28",
    mid: "#0a1016",
    bottom: "#10141d",
    lane: "rgba(255, 225, 110, 0.14)",
    haze: "rgba(255, 212, 112, 0.08)"
  },
  shrine: {
    className: "theme-shrine",
    top: "#23131a",
    mid: "#130d12",
    bottom: "#1b0f14",
    lane: "rgba(255, 176, 195, 0.14)",
    haze: "rgba(255, 192, 212, 0.08)"
  },
  steamdock: {
    className: "theme-steamdock",
    top: "#1f1c1a",
    mid: "#0f1417",
    bottom: "#1a1714",
    lane: "rgba(245, 193, 128, 0.14)",
    haze: "rgba(255, 210, 144, 0.08)"
  },
  desert: {
    className: "theme-desert",
    top: "#2e2416",
    mid: "#17120b",
    bottom: "#140f0a",
    lane: "rgba(255, 215, 140, 0.14)",
    haze: "rgba(255, 228, 171, 0.08)"
  },
  opera: {
    className: "theme-opera",
    top: "#25141e",
    mid: "#140b10",
    bottom: "#0d0a0f",
    lane: "rgba(255, 176, 150, 0.14)",
    haze: "rgba(199, 62, 103, 0.08)"
  },
  abysslab: {
    className: "theme-abysslab",
    top: "#11252d",
    mid: "#091119",
    bottom: "#0a0e15",
    lane: "rgba(135, 240, 234, 0.14)",
    haze: "rgba(144, 241, 248, 0.08)"
  },
  greenhouse: {
    className: "theme-greenhouse",
    top: "#16231a",
    mid: "#0a1210",
    bottom: "#0e130d",
    lane: "rgba(192, 245, 130, 0.14)",
    haze: "rgba(196, 255, 172, 0.08)"
  },
  skycity: {
    className: "theme-skycity",
    top: "#162238",
    mid: "#0b1018",
    bottom: "#0f1622",
    lane: "rgba(214, 231, 255, 0.16)",
    haze: "rgba(226, 238, 255, 0.08)"
  }
};

const BEAUTIES = [
  {
    id: "hiyori",
    stageId: 1,
    name: "绯音",
    title: "净火咏叹者",
    bossName: "黑化·绯音",
    profile: "曾是霓虹舞台最耀眼的歌姬，被渣男的虚假承诺诱入黑雾剧场。",
    skillName: "焰羽扫射",
    skillDesc: "每 10 秒射出三束焰羽贯穿弹，专门清理直线怪群。",
    taunt: "你也想被舞台的黑焰吞掉吗？",
    accent: "#ff8e61",
    cooldown: 10,
    art: {
      purified: "assets/hiyori-purified.svg",
      corrupt: "assets/hiyori-corrupt.svg"
    }
  },
  {
    id: "serin",
    stageId: 2,
    name: "澄澈",
    title: "霜镜审裁者",
    bossName: "黑化·澄澈",
    profile: "冰穹巡礼的守护者，被拖入寒晶回廊后，心象被腐化成停滞的寒雾。",
    skillName: "冰镜领域",
    skillDesc: "每 11 秒冻结全场敌人并触发一次冰爆。",
    taunt: "在我的寒镜里慢慢碎掉吧。",
    accent: "#7eddf8",
    cooldown: 11,
    art: {
      purified: "assets/serin-purified.svg",
      corrupt: "assets/serin-corrupt.svg"
    }
  },
  {
    id: "yelan",
    stageId: 3,
    name: "夜岚",
    title: "雷辉裁定者",
    bossName: "黑化·夜岚",
    profile: "雷落穹塔的审判者，她的意志被黑化核心扭成暴走的连锁雷光。",
    skillName: "雷链裁决",
    skillDesc: "每 9 秒锁定多名敌人，降下连锁雷击。",
    taunt: "下一道雷，就落在你头顶。",
    accent: "#ffe48a",
    cooldown: 9,
    art: {
      purified: "assets/yelan-purified.svg",
      corrupt: "assets/yelan-corrupt.svg"
    }
  },
  {
    id: "mingsha",
    stageId: 4,
    name: "明纱",
    title: "樱雾祓御巫",
    bossName: "黑化·明纱",
    profile: "神社巫女在樱雾祭坛中失去神性，净化后会用樱刃切开整条压境路线。",
    skillName: "樱刃风暴",
    skillDesc: "每 10 秒扔出多枚樱刃，形成高穿透扇形斩击。",
    taunt: "樱雾会把你切成碎片。",
    accent: "#ff9caf",
    cooldown: 10,
    art: {
      purified: "assets/mingsha-purified.svg",
      corrupt: "assets/mingsha-corrupt.svg"
    }
  },
  {
    id: "lanwei",
    stageId: 5,
    name: "岚薇",
    title: "蒸汽舰港领航姬",
    bossName: "黑化·岚薇",
    profile: "她原是蒸汽船坞的航道指挥官，被囚在锅炉阵列中后化为灼热风暴。",
    skillName: "蒸汽爆缸",
    skillDesc: "每 12 秒向前引爆高压蒸汽，造成大范围伤害与减速。",
    taunt: "别靠近，锅炉会把你蒸干。",
    accent: "#eab471",
    cooldown: 12,
    art: {
      purified: "assets/lanwei-purified.svg",
      corrupt: "assets/lanwei-corrupt.svg"
    }
  },
  {
    id: "shali",
    stageId: 6,
    name: "砂璃",
    title: "流砂星痕猎手",
    bossName: "黑化·砂璃",
    profile: "砂海遗都的游侠被锁进流砂阵眼，净化后能在战场上铺出迟缓陷阱。",
    skillName: "流砂陷阱",
    skillDesc: "每 11 秒在敌群前方制造流砂区，持续减速并磨血。",
    taunt: "踏进来吧，流砂正等着埋你。",
    accent: "#ffd68d",
    cooldown: 11,
    art: {
      purified: "assets/shali-purified.svg",
      corrupt: "assets/shali-corrupt.svg"
    }
  },
  {
    id: "yuege",
    stageId: 7,
    name: "月歌",
    title: "月港谣姬",
    bossName: "黑化·月歌",
    profile: "歌剧院的首席谣姬被渣男献祭给黑幕舞台，月光被扭成锋利新月。",
    skillName: "弦月回旋",
    skillDesc: "每 9.5 秒放出两道回旋月刃，来回切割怪群。",
    taunt: "谢幕之前，你先倒下。",
    accent: "#ffb6a1",
    cooldown: 9.5,
    art: {
      purified: "assets/yuege-purified.svg",
      corrupt: "assets/yuege-corrupt.svg"
    }
  },
  {
    id: "molan",
    stageId: 8,
    name: "沫澜",
    title: "深渊潮汐司书",
    bossName: "黑化·沫澜",
    profile: "研究所的潮汐司书被深海样本同化，净化后会唤来冲刷全屏的浪潮。",
    skillName: "潮汐冲刷",
    skillDesc: "每 12 秒掀起一轮潮汐波，横扫前方大片敌人。",
    taunt: "深海会把你的呼吸一寸寸夺走。",
    accent: "#86e7ee",
    cooldown: 12,
    art: {
      purified: "assets/molan-purified.svg",
      corrupt: "assets/molan-corrupt.svg"
    }
  },
  {
    id: "xingkui",
    stageId: 9,
    name: "星葵",
    title: "星孢园艺使",
    bossName: "黑化·星葵",
    profile: "温室中的园艺使被黑孢寄生，净化后可降下覆盖上半场的星孢花雨。",
    skillName: "星孢花雨",
    skillDesc: "每 10.5 秒在上空播撒星孢爆点，持续轰击敌群。",
    taunt: "花孢会从你的骨头里开出来。",
    accent: "#c4f88a",
    cooldown: 10.5,
    art: {
      purified: "assets/xingkui-purified.svg",
      corrupt: "assets/xingkui-corrupt.svg"
    }
  },
  {
    id: "cangya",
    stageId: 10,
    name: "苍雅",
    title: "圣城执光者",
    bossName: "黑化·苍雅",
    profile: "天穹圣城的执光者最终被拽入最深的哥布林之巢，净化后会为防线降下圣辉。",
    skillName: "圣辉屏障",
    skillDesc: "每 13 秒恢复基地并张开圣辉护盾，同时惩戒最前方敌人。",
    taunt: "连圣光都站在黑雾这一边了。",
    accent: "#dbe7ff",
    cooldown: 13,
    art: {
      purified: "assets/cangya-purified.svg",
      corrupt: "assets/cangya-corrupt.svg"
    }
  }
];

const STAGES = [
  {
    id: 1,
    themeId: "neon",
    themeClass: "theme-neon",
    sceneName: "霓虹废区",
    name: "霓虹废区",
    danger: "低危",
    bossBeautyId: "hiyori",
    accent: "#ff8e61",
    bossAt: 38,
    description: "残存广告墙和高架通道之间，哥布林拾荒队正沿霓虹轨道俯冲。",
    previewText: "黑雾剧场在废区中央再次亮起。绯音被锁在失控舞台的聚光灯下，第一场净化行动必须成功。",
    bossWarning: "黑化·绯音将带着灼热音浪从舞台裂口降临。",
    tip: "首关怪潮偏轻，优先抽基础火力与范围清怪牌。"
  },
  {
    id: 2,
    themeId: "frost",
    themeClass: "theme-frost",
    sceneName: "寒晶回廊",
    name: "寒晶回廊",
    danger: "中危",
    bossBeautyId: "serin",
    accent: "#7eddf8",
    bossAt: 43,
    description: "冰晶回廊会减缓视野，精英哥布林会借冰雾逼近基地。",
    previewText: "巡礼之镜已经破碎。澄澈被困在冻雾祭坛中央，任何迟疑都会让怪潮贴近防线。",
    bossWarning: "黑化·澄澈会携带冻结场压向阵地。",
    tip: "准备控场卡或范围卡，防止精英怪在雾里压线。"
  },
  {
    id: 3,
    themeId: "thunder",
    themeClass: "theme-thunder",
    sceneName: "雷落穹塔",
    name: "雷落穹塔",
    danger: "中高危",
    bossBeautyId: "yelan",
    accent: "#ffe48a",
    bossAt: 48,
    description: "穹塔导雷针会照亮整条通路，怪潮与精英混编下落。",
    previewText: "夜岚被固定在雷辉核心前，整座穹塔都在响应她失控的雷链。接下来要面对更猛的压制。",
    bossWarning: "黑化·夜岚会连带精英怪一同落入战场。",
    tip: "单体爆发和精英处理能力会直接影响本关节奏。"
  },
  {
    id: 4,
    themeId: "shrine",
    themeClass: "theme-shrine",
    sceneName: "樱雾神社",
    name: "樱雾神社",
    danger: "中高危",
    bossBeautyId: "mingsha",
    accent: "#ff9caf",
    bossAt: 52,
    description: "倒悬鸟居与樱雾祭坛之间，哥布林会沿参道成群压下。",
    previewText: "明纱的祓御符咒被腐化成樱刃。你要穿过倒悬神社，把她从黑雾祭坛上带回来。",
    bossWarning: "黑化·明纱会在樱雾中释放高速斩击。",
    tip: "多拿穿透与范围技能，处理密集小怪更稳。"
  },
  {
    id: 5,
    themeId: "steamdock",
    themeClass: "theme-steamdock",
    sceneName: "蒸汽船坞",
    name: "蒸汽船坞",
    danger: "高危",
    bossBeautyId: "lanwei",
    accent: "#eab471",
    bossAt: 56,
    description: "重吊机和锅炉群不断喷汽，精英怪会借蒸汽掩体推线。",
    previewText: "岚薇被囚在过热锅炉阵列中央。船坞的压力阀已经全部失控，必须尽快结束战斗。",
    bossWarning: "黑化·岚薇会以高压蒸汽覆盖整条线路。",
    tip: "持续伤害和减速技能会在本关表现得很舒服。"
  },
  {
    id: 6,
    themeId: "desert",
    themeClass: "theme-desert",
    sceneName: "砂海遗都",
    name: "砂海遗都",
    danger: "高危",
    bossBeautyId: "shali",
    accent: "#ffd68d",
    bossAt: 60,
    description: "遗都风暴让怪潮扩散得更快，前场容易积压大批哥布林。",
    previewText: "砂璃的星痕长弓已被埋进流砂井。你需要在风沙彻底吞没防线前完成净化。",
    bossWarning: "黑化·砂璃会借流砂减速你整片前场。",
    tip: "优先兼顾前场清怪与基地续航。"
  },
  {
    id: 7,
    themeId: "opera",
    themeClass: "theme-opera",
    sceneName: "月港歌剧院",
    name: "月港歌剧院",
    danger: "高危",
    bossBeautyId: "yuege",
    accent: "#ffb6a1",
    bossAt: 64,
    description: "猩红幕布后的旧舞台不断洒下碎光，怪潮会分批从高处落幕。",
    previewText: "月歌被困在坍塌的主舞台中央，黑幕把她的歌声撕裂成锋利月刃。",
    bossWarning: "黑化·月歌会带着回旋斩波闯入战场。",
    tip: "本关适合堆射速、投射物数量和大范围核心技。"
  },
  {
    id: 8,
    themeId: "abysslab",
    themeClass: "theme-abysslab",
    sceneName: "深海研究所",
    name: "深海研究所",
    danger: "特危",
    bossBeautyId: "molan",
    accent: "#86e7ee",
    bossAt: 68,
    description: "实验管阵列会持续冒出泡影和警报，精英怪出现频率明显提高。",
    previewText: "沫澜被封在深海样本舱旁，研究所的每一道警报都在强化她体内的潮汐暴走。",
    bossWarning: "黑化·沫澜会掀起巨浪般的压场攻击。",
    tip: "尽量在 Boss 前做出成型技能组合。"
  },
  {
    id: 9,
    themeId: "greenhouse",
    themeClass: "theme-greenhouse",
    sceneName: "星轨温室",
    name: "星轨温室",
    danger: "特危",
    bossBeautyId: "xingkui",
    accent: "#c4f88a",
    bossAt: 72,
    description: "疯长藤蔓掩护了怪潮路线，星孢会让前场同时出现多层威胁。",
    previewText: "星葵的温室已经变成寄生花房。要救下她，就得在花孢彻底覆盖战线前突破哥布林群。",
    bossWarning: "黑化·星葵会从上空播撒连续爆点。",
    tip: "多段轰炸和自动技能在这里非常强势。"
  },
  {
    id: 10,
    themeId: "skycity",
    themeClass: "theme-skycity",
    sceneName: "天穹圣城",
    name: "天穹圣城",
    danger: "终局",
    bossBeautyId: "cangya",
    accent: "#dbe7ff",
    bossAt: 77,
    description: "通向最终哥布林之巢的圣城回路已经开启，精英怪会持续伴随终局 Boss。",
    previewText: "苍雅被渣男拖进了最深处的哥布林之巢入口。这里是主线终局，也是拯救计划真正的试炼。",
    bossWarning: "黑化·苍雅将带着最终腐化护域降临。",
    tip: "终局关请优先成型核心卡组，再带一名最强辅佐上阵。"
  }
];

const STAGE_SCENE_PRESETS = {
  neon: {
    skyTop: "#2f1030",
    skyMid: "#140917",
    skyBottom: "#06070c",
    glow: "#ff6eae",
    mist: "#67d9ff",
    moon: "#ff7dad",
    far: '<path d="M0 196L46 156L68 168L96 138L124 180L156 144L194 176L232 122L260 166L300 132L334 176L368 146L410 188L458 138L492 170L526 120L560 166L600 132V320H0Z" fill="#160a1d"/><rect x="84" y="112" width="14" height="74" fill="#2b1734"/><rect x="210" y="98" width="18" height="104" fill="#2a1733"/><rect x="468" y="88" width="16" height="108" fill="#2b1836"/>',
    mid: '<path d="M0 232H600V320H0Z" fill="#0b1018"/><path d="M-10 208L52 196L112 212L170 190L226 204L288 182L358 204L432 176L498 198L610 180V320H-10Z" fill="#111925"/><path d="M34 162H176L198 184H320L342 168H420L446 186H560V198H34Z" fill="none" stroke="#ff6fb7" stroke-width="5" stroke-linecap="round" opacity=".35"/><rect x="122" y="154" width="38" height="24" rx="4" fill="#3ef0ff" opacity=".38"/><rect x="334" y="146" width="46" height="28" rx="4" fill="#ff67a8" opacity=".3"/>',
    near: '<path d="M0 254L74 206L112 230L168 186L214 236L270 176L318 228L364 188L408 234L460 190L510 240L556 198L600 228V320H0Z" fill="#05070b"/><path d="M0 264C68 238 128 286 192 258C250 232 324 286 394 258C466 228 540 278 600 246V320H0Z" fill="#09121b" opacity=".9"/>'
  },
  frost: {
    skyTop: "#183252",
    skyMid: "#0b1725",
    skyBottom: "#04080d",
    glow: "#c7f1ff",
    mist: "#8ce7ff",
    moon: "#d9f7ff",
    far: '<path d="M0 204L42 174L68 186L96 150L118 204L152 136L184 188L216 124L248 196L286 138L316 208L360 122L396 198L428 156L458 204L506 132L540 190L600 152V320H0Z" fill="#13263b"/><path d="M44 134L60 88L76 134H44ZM166 114L184 58L202 114H166ZM338 124L356 52L374 124H338ZM510 130L528 74L546 130H510Z" fill="#b9f5ff" opacity=".34"/>',
    mid: '<path d="M0 236L54 214L116 222L182 202L246 214L320 196L394 214L460 204L600 226V320H0Z" fill="#0d1622"/><path d="M86 154H148L164 188H70Z" fill="#88e9ff" opacity=".28"/><path d="M274 146H346L364 192H252Z" fill="#a3f4ff" opacity=".28"/><path d="M446 150H520L538 196H428Z" fill="#95eeff" opacity=".24"/>',
    near: '<path d="M0 270L62 220L106 252L152 202L202 268L256 188L302 248L356 206L410 272L466 198L516 250L572 216L600 230V320H0Z" fill="#061019"/><path d="M0 286C70 256 130 304 204 272C274 242 338 304 410 272C482 240 544 294 600 264V320H0Z" fill="#0a1a26" opacity=".92"/>'
  },
  thunder: {
    skyTop: "#241c31",
    skyMid: "#0d1118",
    skyBottom: "#05070a",
    glow: "#ffe373",
    mist: "#92b0ff",
    moon: "#fff1ab",
    far: '<path d="M0 196L54 168L92 180L124 140L168 172L204 132L248 188L286 118L330 182L374 146L418 192L458 112L504 188L546 136L600 176V320H0Z" fill="#171623"/><rect x="112" y="92" width="18" height="118" fill="#26202f"/><rect x="280" y="72" width="22" height="146" fill="#2b2436"/><rect x="452" y="84" width="20" height="132" fill="#241d30"/><path d="M450 36L428 96H452L430 150L486 78H458L486 36Z" fill="#ffe07f" opacity=".7"/><path d="M174 62L156 104H176L158 146L206 84H184L206 62Z" fill="#fff0a4" opacity=".46"/>',
    mid: '<path d="M0 236L62 214L124 224L188 208L248 224L318 196L390 220L460 204L600 226V320H0Z" fill="#101723"/><path d="M96 158L122 114L148 158Z" fill="#ffd95d" opacity=".28"/><path d="M278 142L306 96L334 142Z" fill="#ffe586" opacity=".3"/><path d="M452 150L478 108L504 150Z" fill="#ffe05e" opacity=".28"/>',
    near: '<path d="M0 262L66 218L114 238L168 192L226 246L280 170L332 236L388 190L440 250L494 178L544 234L600 206V320H0Z" fill="#05080d"/><path d="M0 286C72 252 138 308 214 272C286 238 352 306 420 270C492 236 552 292 600 258V320H0Z" fill="#0a0f17" opacity=".94"/>'
  },
  shrine: {
    skyTop: "#33131c",
    skyMid: "#14090f",
    skyBottom: "#060507",
    glow: "#ff97b1",
    mist: "#ffcfdf",
    moon: "#ffc6d6",
    far: '<path d="M0 200L52 168L92 180L136 138L180 174L224 122L270 188L318 134L372 194L424 156L476 198L522 132L570 182L600 170V320H0Z" fill="#1c0f15"/><path d="M214 100H386V120H214ZM236 120H258V182H236ZM342 120H364V182H342Z" fill="#31141f" opacity=".88"/><path d="M214 104L194 140H406L386 104Z" fill="#4a1d2d" opacity=".78"/>',
    mid: '<path d="M0 236L56 220L124 226L188 210L252 222L320 204L388 218L456 206L600 230V320H0Z" fill="#120d14"/><path d="M82 150H180L196 172H66Z" fill="#ff97b6" opacity=".2"/><path d="M418 146H514L530 168H402Z" fill="#ffb2c7" opacity=".18"/><circle cx="112" cy="176" r="7" fill="#ffd6e4" opacity=".4"/><circle cx="484" cy="172" r="7" fill="#ffd6e4" opacity=".4"/>',
    near: '<path d="M0 266L64 226L116 246L168 202L230 258L282 184L334 244L390 202L446 264L502 198L552 236L600 214V320H0Z" fill="#06070a"/><path d="M0 286C68 252 138 306 210 272C280 240 344 306 418 270C490 236 552 292 600 258V320H0Z" fill="#0d0b10" opacity=".95"/>'
  },
  steamdock: {
    skyTop: "#37291c",
    skyMid: "#181210",
    skyBottom: "#070606",
    glow: "#ffc078",
    mist: "#f0bd87",
    moon: "#ffd09b",
    far: '<path d="M0 202L56 174L106 188L150 146L202 182L248 132L296 192L338 146L392 202L446 164L494 194L544 142L600 178V320H0Z" fill="#1d1511"/><rect x="116" y="116" width="30" height="90" fill="#352820"/><rect x="150" y="104" width="10" height="102" fill="#4d3a2d"/><path d="M150 108L242 72L246 84L160 118Z" fill="#604939" opacity=".9"/><rect x="382" y="102" width="44" height="112" rx="6" fill="#2f251e"/><circle cx="404" cy="138" r="16" fill="#ffce88" opacity=".16"/><rect x="462" y="114" width="18" height="96" fill="#3a2e27"/><path d="M480 118L548 86L552 98L484 130Z" fill="#6c5641"/>',
    mid: '<path d="M0 236L60 216L126 224L192 208L262 220L334 206L408 220L482 210L600 226V320H0Z" fill="#120f0f"/><path d="M88 162H176V182H88Z" fill="#ffbf79" opacity=".18"/><path d="M372 166H434V186H372Z" fill="#ffd4a2" opacity=".18"/><path d="M448 170H520V188H448Z" fill="#ffca8c" opacity=".16"/>',
    near: '<path d="M0 268L66 230L116 248L174 208L232 262L286 192L344 248L402 206L456 268L510 214L560 242L600 220V320H0Z" fill="#050607"/><path d="M0 288C74 256 146 306 220 272C290 240 356 304 428 272C500 240 560 292 600 262V320H0Z" fill="#0d0d0d" opacity=".96"/>'
  },
  desert: {
    skyTop: "#4b3417",
    skyMid: "#21160c",
    skyBottom: "#090705",
    glow: "#ffd486",
    mist: "#efc16d",
    moon: "#ffe1a5",
    far: '<path d="M0 228C40 204 84 194 124 206C172 220 212 186 254 194C308 206 348 182 392 190C452 202 498 176 600 196V320H0Z" fill="#25180d"/><path d="M72 168H100V214H72ZM84 152H88V168H84ZM274 156H308V216H274ZM288 132H292V156H288ZM472 162H504V212H472ZM484 142H488V162H484Z" fill="#3a2613"/><path d="M224 146L258 116L292 146H224Z" fill="#51361b" opacity=".7"/>',
    mid: '<path d="M0 250C70 208 124 246 192 220C256 196 320 244 388 216C450 190 520 240 600 208V320H0Z" fill="#16110d"/><path d="M108 184L154 154L180 188L132 210Z" fill="#ffd98c" opacity=".14"/><path d="M388 178L430 150L458 190L414 210Z" fill="#ffd28a" opacity=".12"/>',
    near: '<path d="M0 276C72 232 136 302 212 258C286 214 354 294 432 252C506 210 556 276 600 236V320H0Z" fill="#0a0806"/><path d="M0 292C84 260 156 312 234 278C310 244 384 310 458 274C526 240 566 288 600 266V320H0Z" fill="#11100b" opacity=".94"/>'
  },
  opera: {
    skyTop: "#391823",
    skyMid: "#190b11",
    skyBottom: "#070607",
    glow: "#ffb1a3",
    mist: "#ffccb8",
    moon: "#ffd8ca",
    far: '<path d="M0 196L52 166L92 182L138 144L184 176L230 132L286 190L338 144L396 198L450 164L500 194L548 146L600 178V320H0Z" fill="#1e0e15"/><path d="M92 132C120 96 170 96 198 132V214H92Z" fill="#3a1823" opacity=".82"/><path d="M402 132C430 96 480 96 508 132V214H402Z" fill="#351721" opacity=".8"/><path d="M250 86H350V214H250Z" fill="#2c1219"/><path d="M250 86L238 126H362L350 86Z" fill="#4c1f2d" opacity=".74"/>',
    mid: '<path d="M0 236L58 218L128 226L198 210L270 222L342 206L416 222L488 210L600 228V320H0Z" fill="#130d12"/><path d="M44 84L76 220H12Z" fill="#6e2336" opacity=".72"/><path d="M556 84L588 220H524Z" fill="#6e2336" opacity=".72"/><circle cx="300" cy="112" r="18" fill="#ffd6bf" opacity=".2"/><path d="M288 112L300 142L312 112L338 118L320 98L334 74L300 90L266 74L280 98L262 118Z" fill="#ffd7c2" opacity=".3"/>',
    near: '<path d="M0 270L70 230L120 246L182 206L244 260L300 190L352 250L410 204L468 268L526 214L570 242L600 226V320H0Z" fill="#050608"/><path d="M0 290C80 254 152 310 228 274C300 240 372 306 446 272C522 238 566 292 600 264V320H0Z" fill="#0e0b0d" opacity=".95"/>'
  },
  abysslab: {
    skyTop: "#13323b",
    skyMid: "#08131c",
    skyBottom: "#040609",
    glow: "#7fe7ef",
    mist: "#7fe7ef",
    moon: "#a3fbff",
    far: '<path d="M0 200L54 170L92 184L138 144L188 176L236 130L286 194L338 138L394 200L446 160L500 196L548 144L600 180V320H0Z" fill="#0f222b"/><rect x="86" y="108" width="60" height="108" rx="18" fill="#163642" opacity=".78"/><rect x="270" y="92" width="68" height="126" rx="18" fill="#153945" opacity=".78"/><rect x="448" y="104" width="58" height="114" rx="18" fill="#163844" opacity=".74"/><circle cx="116" cy="142" r="20" fill="#8af2ff" opacity=".18"/><circle cx="304" cy="130" r="20" fill="#8af2ff" opacity=".18"/><circle cx="478" cy="144" r="20" fill="#8af2ff" opacity=".18"/>',
    mid: '<path d="M0 236L60 218L124 224L190 208L260 220L330 208L402 220L476 208L600 226V320H0Z" fill="#0f151a"/><path d="M154 104L210 166" stroke="#7fe7ef" stroke-width="4" opacity=".18"/><path d="M338 94L412 178" stroke="#7fe7ef" stroke-width="4" opacity=".18"/><path d="M498 116L554 170" stroke="#7fe7ef" stroke-width="4" opacity=".16"/>',
    near: '<path d="M0 268L68 228L122 248L180 206L240 262L294 190L352 250L412 208L470 270L526 218L572 246L600 228V320H0Z" fill="#05070a"/><path d="M0 288C74 254 144 308 220 274C294 242 364 306 438 272C510 240 560 294 600 266V320H0Z" fill="#0a1014" opacity=".95"/>'
  },
  greenhouse: {
    skyTop: "#1e2f18",
    skyMid: "#0b130d",
    skyBottom: "#050705",
    glow: "#b2f875",
    mist: "#caff9a",
    moon: "#dfffb4",
    far: '<path d="M0 198L54 168L96 182L142 140L188 176L238 130L290 196L338 146L392 198L446 160L498 194L546 144L600 176V320H0Z" fill="#132016"/><path d="M102 118H204V214H102Z" fill="none" stroke="#8cd86a" stroke-width="4" opacity=".36"/><path d="M118 134L154 102L190 134M154 102V214" stroke="#8cd86a" stroke-width="4" opacity=".36"/><path d="M378 110H504V214H378Z" fill="none" stroke="#7ec85e" stroke-width="4" opacity=".34"/><path d="M396 128L442 88L486 128M442 88V214" stroke="#8fe466" stroke-width="4" opacity=".34"/>',
    mid: '<path d="M0 238L58 220L126 228L196 212L268 224L344 210L420 224L492 212L600 228V320H0Z" fill="#0f1410"/><path d="M48 146C84 138 88 184 120 174C146 166 150 196 176 188" stroke="#b7ff91" stroke-width="6" opacity=".24" fill="none"/><path d="M402 138C434 126 446 182 478 170C502 160 512 196 544 184" stroke="#c3ff9e" stroke-width="6" opacity=".22" fill="none"/>',
    near: '<path d="M0 270L70 232L124 250L182 210L244 264L302 192L360 252L420 210L480 272L536 220L578 246L600 232V320H0Z" fill="#050706"/><path d="M0 290C80 256 150 312 228 276C300 242 372 308 448 274C522 242 566 296 600 270V320H0Z" fill="#0b0f0b" opacity=".95"/>'
  },
  skycity: {
    skyTop: "#1a2846",
    skyMid: "#0a1018",
    skyBottom: "#05070b",
    glow: "#dbe7ff",
    mist: "#c3d4ff",
    moon: "#edf4ff",
    far: '<path d="M0 194L58 164L102 180L150 138L198 176L246 126L294 192L344 136L398 198L454 154L506 188L552 138L600 174V320H0Z" fill="#142033"/><path d="M120 118H152V214H120ZM222 96H252V214H222ZM332 84H364V214H332ZM446 104H476V214H446Z" fill="#253552"/><path d="M110 118L136 70L162 118Z" fill="#3f5478"/><path d="M212 96L238 46L264 96Z" fill="#425577"/><path d="M322 84L348 28L374 84Z" fill="#41506e"/><path d="M436 104L462 58L488 104Z" fill="#455878"/><path d="M144 82L238 56L240 66L148 92ZM352 48L472 74L470 84L350 58Z" fill="#b9c9f5" opacity=".24"/>',
    mid: '<path d="M0 236L60 218L128 226L198 210L272 224L346 208L422 224L494 212L600 228V320H0Z" fill="#10161f"/><path d="M84 170H170V190H84Z" fill="#dbe7ff" opacity=".12"/><path d="M248 164H338V184H248Z" fill="#e5eeff" opacity=".12"/><path d="M430 170H518V190H430Z" fill="#dce8ff" opacity=".1"/>',
    near: '<path d="M0 268L72 226L126 248L186 204L248 264L304 188L364 252L426 208L486 270L542 216L582 244L600 230V320H0Z" fill="#06080d"/><path d="M0 288C82 254 154 310 230 274C304 240 378 306 452 272C526 240 568 294 600 268V320H0Z" fill="#0b1017" opacity=".95"/>'
  }
};

const STAGE_SCENE_ART = Object.fromEntries(STAGES.map((stage) => [stage.id, createStageSceneIllustration(stage)]));

const QUALITY_META = {
  common: {
    label: "白色",
    className: "quality-common",
    color: "#dfe7ee"
  },
  uncommon: {
    label: "绿色",
    className: "quality-uncommon",
    color: "#8cf0ab"
  },
  rare: {
    label: "蓝色",
    className: "quality-rare",
    color: "#7db8ff"
  },
  epic: {
    label: "紫色",
    className: "quality-epic",
    color: "#c98cff"
  }
};

const COMPANION_RANK_META = {
  c: {
    label: "C",
    className: "rank-c",
    color: "#dfe7ee"
  },
  b: {
    label: "B",
    className: "rank-b",
    color: "#8fe4f7"
  },
  a: {
    label: "A",
    className: "rank-a",
    color: "#ffca8d"
  },
  s: {
    label: "S",
    className: "rank-s",
    color: "#ff88c8"
  }
};

const DRAW_COSTS = {
  character: {
    gold: 480,
    ticket: 12
  },
  equipment: {
    gold: 280,
    ticket: 8
  }
};

const DRAW_TABLES = {
  character: {
    gold: [["c", 0.58], ["b", 0.42]],
    ticket: [["b", 0.58], ["a", 0.31], ["s", 0.11]]
  },
  equipment: {
    gold: [["common", 0.72], ["uncommon", 0.28]],
    ticket: [["uncommon", 0.54], ["rare", 0.32], ["epic", 0.14]]
  }
};

const SHOP_ITEMS = [
  {
    id: "weapon-rustfang",
    type: "weapon",
    name: "锈牙冲锋枪",
    quality: "common",
    price: 140,
    description: "便宜但稳定的近防武器，提升基础火力。",
    effectText: "基础伤害 +10",
    apply(state) {
      state.hero.damage += 10;
    }
  },
  {
    id: "weapon-stormbite",
    type: "weapon",
    name: "风暴短铳",
    quality: "uncommon",
    price: 260,
    description: "轻量化改装枪管，压得住连续射击节奏。",
    effectText: "射速 +14%，伤害 +8",
    apply(state) {
      state.hero.fireRate *= 1.14;
      state.hero.damage += 8;
    }
  },
  {
    id: "weapon-railfang",
    type: "weapon",
    name: "破甲轨炮",
    quality: "rare",
    price: 430,
    description: "更高动能的轨道实弹，对厚血目标更有效。",
    effectText: "基础伤害 +18，穿透 +1，暴击率 +4%",
    apply(state) {
      state.hero.damage += 18;
      state.hero.pierce += 1;
      state.hero.critChance += 0.04;
    }
  },
  {
    id: "weapon-phoenix",
    type: "weapon",
    name: "炽凰主炮",
    quality: "epic",
    price: 760,
    description: "高阶主炮，能在开局就打出成型的清线火力。",
    effectText: "基础伤害 +26，投射物 +1，对 Boss 伤害 +12%",
    apply(state) {
      state.hero.damage += 26;
      state.hero.projectiles += 1;
      state.hero.bossBonus += 0.12;
    }
  },
  {
    id: "armor-fieldvest",
    type: "armor",
    name: "前哨护衣",
    quality: "common",
    price: 120,
    description: "简易防护服，优先提高前期容错。",
    effectText: "基地生命上限 +45",
    apply(state) {
      state.hero.maxHp += 45;
      state.hero.hp += 45;
    }
  },
  {
    id: "armor-rampart",
    type: "armor",
    name: "壁垒装甲",
    quality: "uncommon",
    price: 250,
    description: "中型护板和能量衬层，能挡住一轮压线。",
    effectText: "基地生命上限 +72，护盾 +24",
    apply(state) {
      state.hero.maxHp += 72;
      state.hero.hp += 72;
      state.hero.barrier += 24;
    }
  },
  {
    id: "armor-polaris",
    type: "armor",
    name: "北极星战甲",
    quality: "rare",
    price: 420,
    description: "稳定供能的高级装甲，同时缩短辅助回转。",
    effectText: "基地生命上限 +96，护盾 +38，辅佐冷却 -8%",
    apply(state) {
      state.hero.maxHp += 96;
      state.hero.hp += 96;
      state.hero.barrier += 38;
      state.hero.companionCooldownScale *= 0.92;
    }
  },
  {
    id: "armor-seraph",
    type: "armor",
    name: "炽天使外骨骼",
    quality: "epic",
    price: 720,
    description: "重型外骨骼，让虾仁能扛住终局怪潮。",
    effectText: "基地生命上限 +126，护盾 +64，对精英伤害 +10%",
    apply(state) {
      state.hero.maxHp += 126;
      state.hero.hp += 126;
      state.hero.barrier += 64;
      state.hero.eliteBonus += 0.1;
    }
  },
  {
    id: "item-scopechip",
    type: "item",
    name: "战术瞄片",
    quality: "common",
    price: 110,
    description: "简单但实用的战术挂件。",
    effectText: "暴击率 +5%",
    apply(state) {
      state.hero.critChance += 0.05;
    }
  },
  {
    id: "item-powdercharm",
    type: "item",
    name: "爆裂符坠",
    quality: "uncommon",
    price: 240,
    description: "让主武器爆裂更稳定的攻击挂件。",
    effectText: "爆裂半径 +14，子弹伤害 +6",
    apply(state) {
      state.hero.splash += 14;
      state.hero.damage += 6;
    }
  },
  {
    id: "item-frostseal",
    type: "item",
    name: "霜痕印章",
    quality: "rare",
    price: 410,
    description: "每一发子弹都会拖出冻结尾迹。",
    effectText: "子弹附带减速，减速时长 +1.0s，弹速 +8%",
    apply(state) {
      state.hero.slowShots = true;
      state.hero.slowDuration += 1;
      state.hero.bulletSpeed *= 1.08;
    }
  },
  {
    id: "item-overdrive",
    type: "item",
    name: "超载核心",
    quality: "epic",
    price: 700,
    description: "直接拉高整套火力循环的稀有核心。",
    effectText: "射速 +12%，基础伤害 +12，暴击伤害 +20%",
    apply(state) {
      state.hero.fireRate *= 1.12;
      state.hero.damage += 12;
      state.hero.critMultiplier += 0.2;
    }
  }
];

const SUMMON_BEAUTIES = [
  {
    id: "qinglu",
    source: "summon",
    rank: "c",
    name: "晴露",
    title: "晨风花匠",
    profile: "从风庭苗圃逃出来的少女，会把清晨花露压成高速花弹，替虾仁扫开前线怪潮。",
    skillName: "花露散射",
    skillDesc: "每 9 秒发射四枚花露弹，清掉前方扇形内的小怪。",
    accent: "#8ef1c2",
    cooldown: 9,
    art: {
      purified: createSummonBeautyArt({
        aura: "#9df8cf",
        glow: "#dffff4",
        hairA: "#f7f5d9",
        hairB: "#8fcf87",
        dressA: "#eefdf4",
        dressB: "#7fdbb1",
        ribbon: "#5ecf97"
      })
    }
  },
  {
    id: "taoxi",
    source: "summon",
    rank: "c",
    name: "桃汐",
    title: "软潮泡泡师",
    profile: "她会把甜潮雾气封成泡阵，把冲得最急的哥布林拖进黏稠减速里。",
    skillName: "潮泡禁域",
    skillDesc: "每 10 秒在敌群前方生成泡阵，持续减速并磨血。",
    accent: "#ffb4d0",
    cooldown: 10,
    art: {
      purified: createSummonBeautyArt({
        aura: "#ffbdd6",
        glow: "#ffe7f1",
        hairA: "#ffd3e9",
        hairB: "#f18aab",
        dressA: "#fff1f8",
        dressB: "#ff9fc4",
        ribbon: "#ff78ad"
      })
    }
  },
  {
    id: "yunmi",
    source: "summon",
    rank: "b",
    name: "云弥",
    title: "巡云猎手",
    profile: "擅长在高空巡视战场，她会把云羽压成追光飞针，精准点掉危险目标。",
    skillName: "追光羽针",
    skillDesc: "每 8.5 秒锁定多名敌人，打出追踪羽针。",
    accent: "#97e6ff",
    cooldown: 8.5,
    art: {
      purified: createSummonBeautyArt({
        aura: "#9de8ff",
        glow: "#ecfbff",
        hairA: "#ebf6ff",
        hairB: "#8dc4ff",
        dressA: "#f0fbff",
        dressB: "#7bd6f4",
        ribbon: "#6ab6ff"
      })
    }
  },
  {
    id: "luoye",
    source: "summon",
    rank: "b",
    name: "洛夜",
    title: "影幕裁缝",
    profile: "她会把影线缝进怪群脚下，让逼近防线的敌人瞬间停滞。",
    skillName: "暮影禁锢",
    skillDesc: "每 10.5 秒束缚多名靠前目标，并追加一次影伤。",
    accent: "#c4b8ff",
    cooldown: 10.5,
    art: {
      purified: createSummonBeautyArt({
        aura: "#d0c2ff",
        glow: "#f0ebff",
        hairA: "#d9cbff",
        hairB: "#745cd6",
        dressA: "#f4efff",
        dressB: "#9c7fff",
        ribbon: "#b66dff"
      })
    }
  },
  {
    id: "qinyao",
    source: "summon",
    rank: "b",
    name: "琴瑶",
    title: "和声补给官",
    profile: "她善于在极短时间里完成前线补给，顺手把爆裂弹精准投进敌堆中央。",
    skillName: "和声投送",
    skillDesc: "每 11 秒恢复基地并空投两枚爆裂弹。",
    accent: "#ffd38a",
    cooldown: 11,
    art: {
      purified: createSummonBeautyArt({
        aura: "#ffd88e",
        glow: "#fff2cf",
        hairA: "#fff1cf",
        hairB: "#f0b66b",
        dressA: "#fff9eb",
        dressB: "#f3c577",
        ribbon: "#f09854"
      })
    }
  },
  {
    id: "ruolan",
    source: "summon",
    rank: "a",
    name: "若澜",
    title: "棱镜魔装使",
    profile: "她会把光棱压成笔直射线，打穿整条怪潮，还能顺带灼烧线上的残余目标。",
    skillName: "棱镜射界",
    skillDesc: "每 9.5 秒放出一道高能棱镜射线，贯穿并灼烧前方路径。",
    accent: "#7de6ff",
    cooldown: 9.5,
    art: {
      purified: createSummonBeautyArt({
        aura: "#80ebff",
        glow: "#defbff",
        hairA: "#f7ffff",
        hairB: "#69c5ff",
        dressA: "#f2ffff",
        dressB: "#6ce0ff",
        ribbon: "#59b7ff"
      })
    }
  },
  {
    id: "aisha",
    source: "summon",
    rank: "a",
    name: "艾纱",
    title: "星轨圣职者",
    profile: "她会从高空牵引星轨惩戒，优先斩掉精英与大体型目标。",
    skillName: "星轨惩戒",
    skillDesc: "每 10 秒锁定多名敌人，降下高压星轨圣光。",
    accent: "#ffb7d2",
    cooldown: 10,
    art: {
      purified: createSummonBeautyArt({
        aura: "#ffc5db",
        glow: "#fff0f7",
        hairA: "#ffe4ef",
        hairB: "#ff87bb",
        dressA: "#fff1f8",
        dressB: "#ffa1cb",
        ribbon: "#ff6da8"
      })
    }
  },
  {
    id: "jinse",
    source: "summon",
    rank: "s",
    name: "瑾瑟",
    title: "天穹凰姬",
    profile: "稀有招募角色。她会张开凰羽天穹，一边惩戒多名敌人，一边为阵地覆上圣焰护盾。",
    skillName: "凰羽圣裁",
    skillDesc: "每 12.5 秒对多名敌人降下凰羽圣裁，并恢复基地生命与护盾。",
    accent: "#ff8ecb",
    cooldown: 12.5,
    art: {
      purified: createSummonBeautyArt({
        aura: "#ff8fd6",
        glow: "#ffe4f4",
        hairA: "#fff1f7",
        hairB: "#ff63b3",
        dressA: "#fff0f8",
        dressB: "#ff97d4",
        ribbon: "#ff6fa6"
      })
    }
  }
];

const ALL_BEAUTIES = [...BEAUTIES, ...SUMMON_BEAUTIES];

const BOSS_VOICE_PATHS = {
  hiyori: "assets/audio/boss-hiyori.wav",
  serin: "assets/audio/boss-serin.wav",
  yelan: "assets/audio/boss-yelan.wav",
  mingsha: "assets/audio/boss-mingsha.wav",
  lanwei: "assets/audio/boss-lanwei.wav",
  shali: "assets/audio/boss-shali.wav",
  yuege: "assets/audio/boss-yuege.wav",
  molan: "assets/audio/boss-molan.wav",
  xingkui: "assets/audio/boss-xingkui.wav",
  cangya: "assets/audio/boss-cangya.wav"
};

const UPGRADE_POOL = [
  {
    id: "rapid-trigger",
    name: "急速扳机",
    rarity: "枪械卡",
    maxLevel: 5,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：攻击频率提升 18%。`;
    },
    apply(state) {
      state.hero.fireRate *= 1.18;
    }
  },
  {
    id: "armor-break",
    name: "穿甲实弹",
    rarity: "枪械卡",
    maxLevel: 5,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：基础伤害 +12。`;
    },
    apply(state) {
      state.hero.damage += 12;
    }
  },
  {
    id: "double-wings",
    name: "双翼弹幕",
    rarity: "枪械卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：额外增加 1 枚投射物。`;
    },
    apply(state) {
      state.hero.projectiles = Math.min(6, state.hero.projectiles + 1);
    }
  },
  {
    id: "rail-pierce",
    name: "轨道穿透",
    rarity: "枪械卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：子弹穿透 +1。`;
    },
    apply(state) {
      state.hero.pierce += 1;
    }
  },
  {
    id: "scope",
    name: "弱点瞄具",
    rarity: "枪械卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：暴击率 +8%，暴击伤害 +18%。`;
    },
    apply(state) {
      state.hero.critChance += 0.08;
      state.hero.critMultiplier += 0.18;
    }
  },
  {
    id: "burst-core",
    name: "爆裂改装",
    rarity: "枪械卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：命中爆裂半径 +12，爆裂伤害维持主伤害的 36%。`;
    },
    apply(state) {
      state.hero.splash += 12;
    }
  },
  {
    id: "cryo-rounds",
    name: "寒霜弹芯",
    rarity: "元素卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：子弹附带减速，减速时长额外 +0.5 秒。`;
    },
    apply(state) {
      state.hero.slowShots = true;
      state.hero.slowDuration += 0.5;
    }
  },
  {
    id: "overcharge",
    name: "高压装填",
    rarity: "枪械卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：弹速提升 12%，伤害 +8。`;
    },
    apply(state) {
      state.hero.bulletSpeed *= 1.12;
      state.hero.damage += 8;
    }
  },
  {
    id: "fortress",
    name: "防线强化",
    rarity: "防线卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：基地上限 +60，并恢复同等生命。`;
    },
    apply(state) {
      state.hero.maxHp += 60;
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + 60);
    }
  },
  {
    id: "field-repair",
    name: "紧急修复",
    rarity: "防线卡",
    maxLevel: 3,
    available(state) {
      return state.hero.hp < state.hero.maxHp;
    },
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：立刻恢复 26% 基地生命。`;
    },
    apply(state) {
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.maxHp * 0.26);
    }
  },
  {
    id: "resonance",
    name: "灵能共鸣",
    rarity: "共鸣卡",
    maxLevel: 3,
    available(state) {
      return Boolean(state.companion);
    },
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：辅佐技能冷却缩短 10%。`;
    },
    apply(state) {
      state.hero.companionCooldownScale *= 0.9;
    }
  },
  {
    id: "hunter-mark",
    name: "狩猎准星",
    rarity: "枪械卡",
    maxLevel: 4,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：主武器对 Boss 伤害 +12%，对精英伤害 +8%。`;
    },
    apply(state) {
      state.hero.bossBonus += 0.12;
      state.hero.eliteBonus += 0.08;
    }
  },
  {
    id: "kill-repair",
    name: "战场回收",
    rarity: "防线卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return `第 ${nextLevel} 级：每次击杀非 Boss 目标回复 3 点基地生命。`;
    },
    apply(state) {
      state.hero.onKillRepair += 3;
    }
  },
  {
    id: "thermobaric",
    name: "温压弹",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁周期性温压爆弹，命中后附带灼烧。" : `升至 ${nextLevel} 级：爆炸伤害、爆炸范围和灼烧 DPS 同步提升。`;
    },
    apply(state) {
      state.modules.thermobaric = (state.modules.thermobaric || 0) + 1;
      state.moduleCooldowns.thermobaric = 0.6;
    }
  },
  {
    id: "fuel-bomb",
    name: "燃油弹",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁燃油弹，落地后生成灼烧地带。" : `升至 ${nextLevel} 级：投弹数量增加，燃烧区域更大且持续更久。`;
    },
    apply(state) {
      state.modules.fuelBomb = (state.modules.fuelBomb || 0) + 1;
      state.moduleCooldowns.fuelBomb = 0.7;
    }
  },
  {
    id: "dry-ice",
    name: "干冰弹",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁干冰弹，对范围内敌人造成减速和冻结。" : `升至 ${nextLevel} 级：冻结时间、减速时间和伤害提高。`;
    },
    apply(state) {
      state.modules.dryIce = (state.modules.dryIce || 0) + 1;
      state.moduleCooldowns.dryIce = 0.7;
    }
  },
  {
    id: "ice-burst",
    name: "冰爆发生器",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁冰爆发生器，周期性在前场触发冻结冲击。" : `升至 ${nextLevel} 级：冰爆半径、伤害和冻结时间同步提升。`;
    },
    apply(state) {
      state.modules.iceBurst = (state.modules.iceBurst || 0) + 1;
      state.moduleCooldowns.iceBurst = 0.5;
    }
  },
  {
    id: "electro-spike",
    name: "电磁穿刺",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁电磁穿刺，发射一条贯穿型能量刺线。" : `升至 ${nextLevel} 级：刺线宽度和贯穿伤害提高。`;
    },
    apply(state) {
      state.modules.electroSpike = (state.modules.electroSpike || 0) + 1;
      state.moduleCooldowns.electroSpike = 0.5;
    }
  },
  {
    id: "high-energy-ray",
    name: "高能射线",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁高能射线，锁定前方目标并灼烧整条射线。" : `升至 ${nextLevel} 级：射线更宽、即时伤害更高，灼烧更强。`;
    },
    apply(state) {
      state.modules.highEnergyRay = (state.modules.highEnergyRay || 0) + 1;
      state.moduleCooldowns.highEnergyRay = 0.5;
    }
  },
  {
    id: "guided-laser",
    name: "制导激光",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁制导激光，对高威胁敌人降下精准光束。" : `升至 ${nextLevel} 级：每轮制导打击更多目标。`;
    },
    apply(state) {
      state.modules.guidedLaser = (state.modules.guidedLaser || 0) + 1;
      state.moduleCooldowns.guidedLaser = 0.5;
    }
  },
  {
    id: "cyclone-cannon",
    name: "旋风加农",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁旋风加农，周期性发出旋转弹幕。" : `升至 ${nextLevel} 级：每轮弹数、穿透和伤害增加。`;
    },
    apply(state) {
      state.modules.cycloneCannon = (state.modules.cycloneCannon || 0) + 1;
      state.moduleCooldowns.cycloneCannon = 0.4;
    }
  },
  {
    id: "airdrop",
    name: "空投轰炸",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁空投轰炸，从上方多点投下爆弹。" : `升至 ${nextLevel} 级：轰炸点数量、爆炸范围和伤害提升。`;
    },
    apply(state) {
      state.modules.airdrop = (state.modules.airdrop || 0) + 1;
      state.moduleCooldowns.airdrop = 0.6;
    }
  },
  {
    id: "drone-wing",
    name: "无人机",
    rarity: "核心卡",
    maxLevel: 3,
    describe(_state, nextLevel) {
      return nextLevel === 1 ? "解锁无人机伴飞，持续自动补枪。" : `升至 ${nextLevel} 级：无人机数量、射击间隔和伤害同步优化。`;
    },
    apply(state) {
      state.modules.droneWing = (state.modules.droneWing || 0) + 1;
      state.moduleCooldowns.droneWing = 0;
    }
  }
];

const MODULE_SKILLS = {
  thermobaric: {
    name: "温压弹",
    icon: createSkillIcon("TB", "#ff845a", "#ffd06f"),
    description: "高爆轰击密集怪群。",
    cooldown(level) {
      return Math.max(1.2, 8.6 - level * 0.55);
    }
  },
  fuelBomb: {
    name: "燃油弹",
    icon: createSkillIcon("FB", "#ff9a62", "#ffdd8e"),
    description: "投下燃油并留下灼烧区域。",
    cooldown(level) {
      return Math.max(1.2, 9.4 - level * 0.55);
    }
  },
  dryIce: {
    name: "干冰弹",
    icon: createSkillIcon("DI", "#88ecff", "#d7fbff"),
    description: "冻结落点周围敌人。",
    cooldown(level) {
      return Math.max(1.2, 8.2 - level * 0.45);
    }
  },
  iceBurst: {
    name: "冰爆发生器",
    icon: createSkillIcon("IB", "#9fe4ff", "#ffffff"),
    description: "周期性冻结前场。",
    cooldown(level) {
      return Math.max(1.2, 10.2 - level * 0.8);
    }
  },
  electroSpike: {
    name: "电磁穿刺",
    icon: createSkillIcon("ES", "#ffe06f", "#fff7be"),
    description: "打出贯穿型电磁刺线。",
    cooldown(level) {
      return Math.max(1.2, 7.8 - level * 0.45);
    }
  },
  highEnergyRay: {
    name: "高能射线",
    icon: createSkillIcon("HR", "#ff8a70", "#ffd4a8"),
    description: "持续灼烧一条线路。",
    cooldown(level) {
      return Math.max(1.2, 9.2 - level * 0.55);
    }
  },
  guidedLaser: {
    name: "制导激光",
    icon: createSkillIcon("GL", "#c59cff", "#f1d4ff"),
    description: "精准点杀高威胁目标。",
    cooldown(level) {
      return Math.max(1.2, 8.8 - level * 0.55);
    }
  },
  cycloneCannon: {
    name: "旋风加农",
    icon: createSkillIcon("CC", "#7ee6db", "#c9fff5"),
    description: "形成旋转弹幕。",
    cooldown(level) {
      return Math.max(1.2, 6.5 - level * 0.28);
    }
  },
  airdrop: {
    name: "空投轰炸",
    icon: createSkillIcon("AD", "#f1b06b", "#ffe3b4"),
    description: "上空多点投弹。",
    cooldown(level) {
      return Math.max(1.2, 10.5 - level * 0.55);
    }
  },
  droneWing: {
    name: "无人机",
    icon: createSkillIcon("DR", "#b7ff8b", "#efffd8"),
    description: "伴飞补枪。",
    cooldown(level) {
      return Math.max(0.45, 1.02 - level * 0.12);
    }
  }
};

const MAX_MODULE_SKILL_TYPES = 4;

const CORE_UPGRADE_TO_MODULE_KEY = {
  thermobaric: "thermobaric",
  "fuel-bomb": "fuelBomb",
  "dry-ice": "dryIce",
  "ice-burst": "iceBurst",
  "electro-spike": "electroSpike",
  "high-energy-ray": "highEnergyRay",
  "guided-laser": "guidedLaser",
  "cyclone-cannon": "cycloneCannon",
  airdrop: "airdrop",
  "drone-wing": "droneWing"
};

function createSummonBeautyArt(config) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 520">
      <defs>
        <radialGradient id="aura" cx=".5" cy=".28" r=".72">
          <stop offset="0" stop-color="${config.glow}" stop-opacity=".92"/>
          <stop offset=".48" stop-color="${config.aura}" stop-opacity=".34"/>
          <stop offset="1" stop-color="#0a1017" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="hair" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${config.hairA}"/>
          <stop offset="1" stop-color="${config.hairB}"/>
        </linearGradient>
        <linearGradient id="dress" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${config.dressA}"/>
          <stop offset=".54" stop-color="${config.dressB}"/>
          <stop offset="1" stop-color="${config.ribbon}"/>
        </linearGradient>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#fae0d0"/>
          <stop offset=".6" stop-color="#f0c7b1"/>
          <stop offset="1" stop-color="#d9a78f"/>
        </linearGradient>
      </defs>
      <ellipse cx="180" cy="488" rx="86" ry="22" fill="#000" fill-opacity=".14"/>
      <circle cx="180" cy="150" r="128" fill="url(#aura)"/>
      <path d="M94 176c0-56 34-96 86-96 49 0 88 37 88 90 0 34-13 64-34 96l-19-11 2-56c1-32-16-56-38-56-28 0-51 22-52 56l-1 56-19 13c-9-14-13-31-13-49z" fill="url(#hair)"/>
      <path d="M169 95c-31 0-56 27-56 62 0 27 16 49 38 58l-6 30h70l-6-30c23-9 38-31 38-58 0-35-25-62-56-62h-22z" fill="url(#skin)"/>
      <path d="M110 136c0-46 33-79 80-79 42 0 76 29 76 77 0 17-4 32-11 45-11-16-25-27-43-35-18 12-44 19-78 19-9 0-17 1-24 3 0-11 0-20 0-30z" fill="url(#hair)"/>
      <path d="M144 153c10-9 23-12 36-8" fill="none" stroke="#4b2d36" stroke-width="4" stroke-linecap="round"/>
      <path d="M184 145c14-4 27-1 37 8" fill="none" stroke="#4b2d36" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="164" cy="157" rx="5.2" ry="6.4" fill="#2d3040"/>
      <ellipse cx="198" cy="157" rx="5.2" ry="6.4" fill="#2d3040"/>
      <circle cx="162.6" cy="155.4" r="1.4" fill="#fff" fill-opacity=".8"/>
      <circle cx="196.6" cy="155.4" r="1.4" fill="#fff" fill-opacity=".8"/>
      <path d="M176 171c2 2 5 3 9 2" fill="none" stroke="#c58e83" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M161 185c7 8 14 10 20 10 6 0 13-2 20-10" fill="none" stroke="#d07b7a" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M116 264c0-44 27-75 64-75 39 0 64 31 64 75v48H116v-48z" fill="url(#dress)"/>
      <path d="M132 314c22 16 39 23 52 23 15 0 34-6 56-17l20 70H98l34-76z" fill="#f8fbff" fill-opacity=".92"/>
      <path d="M150 336l-14 138h42l6-80 8 80h42l-16-138h-68z" fill="url(#dress)"/>
      <path d="M140 282l-26 98h40l22-74-36-24zm82 0l36 24 20 74h-40l-16-98z" fill="#ffd9cb" fill-opacity=".8"/>
      <path d="M86 180l-28 76 26 10 30-64-28-22zm188 0l28 76-26 10-30-64 28-22z" fill="#f8dbc9"/>
      <path d="M140 250l40 30 40-30v48h-80v-48z" fill="${config.ribbon}" fill-opacity=".78"/>
      <path d="M150 212h58" stroke="rgba(99,66,72,.42)" stroke-width="8" stroke-linecap="round"/>
      <path d="M118 110l22-18 18 18m74-6l18 18 20-16" fill="none" stroke="${config.glow}" stroke-width="6" stroke-linecap="round" stroke-opacity=".8"/>
      <circle cx="84" cy="126" r="6" fill="${config.glow}" fill-opacity=".55"/>
      <circle cx="282" cy="148" r="5" fill="${config.glow}" fill-opacity=".45"/>
      <circle cx="254" cy="90" r="4" fill="${config.glow}" fill-opacity=".55"/>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const SPRITE_PATHS = Array.from(new Set([
  HERO_ART,
  MONSTER_ART.goblin,
  MONSTER_ART.elite,
  ...ALL_BEAUTIES.flatMap((beauty) => [beauty.art.purified, beauty.art.corrupt || beauty.art.purified])
]));

const spriteCache = {};
const bossVoiceCache = {};
let progress = loadProgress();
let game = null;
let lastTimestamp = 0;
let pendingUpgrades = 0;
let resultContext = null;
let pendingStageId = null;
let storyState = null;
let bossIntroTimer = null;
let libraryBeautyIndex = 0;

const homeScreen = document.getElementById("homeScreen");
const equipmentScreen = document.getElementById("equipmentScreen");
const libraryScreen = document.getElementById("libraryScreen");
const libraryGalleryScreen = document.getElementById("libraryGalleryScreen");
const shopScreen = document.getElementById("shopScreen");
const battleScreen = document.getElementById("battleScreen");
const summaryStrip = document.getElementById("summaryStrip");
const currentCompanion = document.getElementById("currentCompanion");
const companionChoices = document.getElementById("companionChoices");
const openEquipmentButton = document.getElementById("openEquipmentButton");
const openLibraryButton = document.getElementById("openLibraryButton");
const openShopButton = document.getElementById("openShopButton");
const stageGrid = document.getElementById("stageGrid");
const equipmentBackButton = document.getElementById("equipmentBackButton");
const equipmentSummary = document.getElementById("equipmentSummary");
const equipmentStage = document.getElementById("equipmentStage");
const equipmentInventory = document.getElementById("equipmentInventory");
const libraryLanding = document.getElementById("libraryLanding");
const libraryBackButton = document.getElementById("libraryBackButton");
const libraryCounter = document.getElementById("libraryCounter");
const openLibraryGalleryButton = document.getElementById("openLibraryGalleryButton");
const libraryGalleryBackButton = document.getElementById("libraryGalleryBackButton");
const libraryGalleryCounter = document.getElementById("libraryGalleryCounter");
const beautyGallery = document.getElementById("beautyGallery");
const shopBackButton = document.getElementById("shopBackButton");
const shopWallet = document.getElementById("shopWallet");
const shopDrawDeck = document.getElementById("shopDrawDeck");
const shopGrid = document.getElementById("shopGrid");
const resetProgressButton = document.getElementById("resetProgressButton");
const retreatButton = document.getElementById("retreatButton");
const battleStageName = document.getElementById("battleStageName");
const battleCompanionStatus = document.getElementById("battleCompanionStatus");
const battleMessage = document.getElementById("battleMessage");
const hudHp = document.getElementById("hudHp");
const hudTimer = document.getElementById("hudTimer");
const hudLevel = document.getElementById("hudLevel");
const hudKills = document.getElementById("hudKills");
const hudXpText = document.getElementById("hudXpText");
const hudXpFill = document.getElementById("hudXpFill");
const upgradeModal = document.getElementById("upgradeModal");
const upgradeChoices = document.getElementById("upgradeChoices");
const battleSkillPanel = document.getElementById("battleSkillPanel");
const storyIntroModal = document.getElementById("storyIntroModal");
const storyIntroVisual = document.getElementById("storyIntroVisual");
const storyIntroLeftArt = document.getElementById("storyIntroLeftArt");
const storyIntroRightArt = document.getElementById("storyIntroRightArt");
const storyIntroTitle = document.getElementById("storyIntroTitle");
const storyIntroText = document.getElementById("storyIntroText");
const storyIntroMeta = document.getElementById("storyIntroMeta");
const storyIntroSkipButton = document.getElementById("storyIntroSkipButton");
const storyIntroNextButton = document.getElementById("storyIntroNextButton");
const stageIntroModal = document.getElementById("stageIntroModal");
const stageIntroArt = document.getElementById("stageIntroArt");
const stageIntroSceneArt = document.getElementById("stageIntroSceneArt");
const stageIntroTitle = document.getElementById("stageIntroTitle");
const stageIntroText = document.getElementById("stageIntroText");
const stageIntroMeta = document.getElementById("stageIntroMeta");
const stageIntroStartButton = document.getElementById("stageIntroStartButton");
const stageIntroCancelButton = document.getElementById("stageIntroCancelButton");
const bossIntroModal = document.getElementById("bossIntroModal");
const bossIntroArtWrap = document.getElementById("bossIntroArtWrap");
const bossIntroArt = document.getElementById("bossIntroArt");
const bossIntroTitle = document.getElementById("bossIntroTitle");
const bossIntroText = document.getElementById("bossIntroText");
const bossIntroTaunt = document.getElementById("bossIntroTaunt");
const bossIntroMeta = document.getElementById("bossIntroMeta");
const bossIntroStartButton = document.getElementById("bossIntroStartButton");
const resultModal = document.getElementById("resultModal");
const resultKicker = document.getElementById("resultKicker");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultStats = document.getElementById("resultStats");
const resultPrimaryButton = document.getElementById("resultPrimaryButton");
const resultSecondaryButton = document.getElementById("resultSecondaryButton");
const drawResultModal = document.getElementById("drawResultModal");
const drawResultBadge = document.getElementById("drawResultBadge");
const drawResultArt = document.getElementById("drawResultArt");
const drawResultKicker = document.getElementById("drawResultKicker");
const drawResultTitle = document.getElementById("drawResultTitle");
const drawResultText = document.getElementById("drawResultText");
const drawResultMeta = document.getElementById("drawResultMeta");
const drawResultConfirmButton = document.getElementById("drawResultConfirmButton");
const canvas = document.getElementById("battleCanvas");
const ctx = canvas.getContext("2d");
const sound = createSoundSystem();

preloadSprites();
bindEvents();
renderHome();
requestAnimationFrame(frame);

function preloadSprites() {
  SPRITE_PATHS.forEach((path) => {
    const image = new Image();
    image.src = path;
    spriteCache[path] = image;
  });
  Object.entries(BOSS_VOICE_PATHS).forEach(([id, path]) => {
    const audio = new Audio(path);
    audio.preload = "auto";
    bossVoiceCache[id] = audio;
  });
}

function bindEvents() {
  document.addEventListener("pointerdown", () => {
    sound.ensureStarted();
  }, { passive: true, once: true });

  resetProgressButton.addEventListener("click", () => {
    sound.ensureStarted();
    if (!window.confirm("确认清空所有净化记录与美女库吗？")) {
      return;
    }
    progress = createDefaultProgress();
    saveProgress();
    closeAllOverlays();
    game = null;
    renderHome();
  });

  retreatButton.addEventListener("click", () => {
    sound.ensureStarted();
    if (!game) {
      showScreen("home");
      return;
    }
    const shouldRetreat = game.ended || window.confirm("当前战斗会直接结束，确定返回主界面吗？");
    if (!shouldRetreat) {
      return;
    }
    closeAllOverlays();
    pendingUpgrades = 0;
    game = null;
    renderHome();
  });

  storyIntroSkipButton.addEventListener("click", () => {
    sound.ensureStarted();
    finishStoryIntro();
  });
  storyIntroNextButton.addEventListener("click", () => {
    sound.ensureStarted();
    advanceStoryIntro();
  });

  stageIntroStartButton.addEventListener("click", () => {
    sound.ensureStarted();
    if (!pendingStageId) {
      return;
    }
    const stageId = pendingStageId;
    closeStageIntro();
    launchStage(stageId);
  });

  stageIntroCancelButton.addEventListener("click", () => {
    sound.ensureStarted();
    closeStageIntro();
  });

  openLibraryButton.addEventListener("click", () => {
    sound.ensureStarted();
    openLibraryScreen();
  });

  openEquipmentButton.addEventListener("click", () => {
    sound.ensureStarted();
    openEquipmentScreen();
  });

  openShopButton.addEventListener("click", () => {
    sound.ensureStarted();
    openShopScreen();
  });

  equipmentBackButton.addEventListener("click", () => {
    sound.ensureStarted();
    renderHome();
  });

  libraryBackButton.addEventListener("click", () => {
    sound.ensureStarted();
    renderHome();
  });

  openLibraryGalleryButton.addEventListener("click", () => {
    sound.ensureStarted();
    openLibraryGalleryScreen();
  });

  libraryGalleryBackButton.addEventListener("click", () => {
    sound.ensureStarted();
    openLibraryScreen();
  });

  shopBackButton.addEventListener("click", () => {
    sound.ensureStarted();
    renderHome();
  });

  bossIntroStartButton.addEventListener("click", () => {
    return;
  });

  resultPrimaryButton.addEventListener("click", () => {
    sound.ensureStarted();
    closeResultModal();
    game = null;
    renderHome();
  });

  resultSecondaryButton.addEventListener("click", () => {
    sound.ensureStarted();
    if (!resultContext) {
      closeResultModal();
      game = null;
      renderHome();
      return;
    }
    const targetStageId = resultContext.nextStageId || resultContext.retryStageId;
    closeResultModal();
    game = null;
    renderHome();
    if (targetStageId) {
      requestStageStart(targetStageId);
    }
  });

  drawResultConfirmButton.addEventListener("click", () => {
    sound.ensureStarted();
    closeDrawResultModal();
  });
}

function createDefaultProgress() {
  return {
    rescued: [],
    recruitedBeautyIds: [],
    clearedStages: [],
    selectedCompanionId: null,
    introWatched: false,
    gold: 0,
    tickets: 24,
    inventoryItemIds: [],
    equippedItemIds: {
      weapon: null,
      armor: null,
      item: null
    }
  };
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY)
    || LEGACY_STORAGE_KEYS.map((key) => localStorage.getItem(key)).find(Boolean);
  if (!raw) {
    return createDefaultProgress();
  }

  try {
    const parsed = JSON.parse(raw);
    const inventoryItemIds = Array.isArray(parsed.inventoryItemIds)
      ? parsed.inventoryItemIds.filter((id) => SHOP_ITEMS.some((item) => item.id === id))
      : [];
    const recruitedBeautyIds = Array.isArray(parsed.recruitedBeautyIds)
      ? parsed.recruitedBeautyIds.filter((id) => SUMMON_BEAUTIES.some((beauty) => beauty.id === id))
      : [];
    const equippedItemIds = parsed.equippedItemIds && typeof parsed.equippedItemIds === "object"
      ? {
          weapon: inventoryItemIds.includes(parsed.equippedItemIds.weapon) ? parsed.equippedItemIds.weapon : null,
          armor: inventoryItemIds.includes(parsed.equippedItemIds.armor) ? parsed.equippedItemIds.armor : null,
          item: inventoryItemIds.includes(parsed.equippedItemIds.item) ? parsed.equippedItemIds.item : null
        }
      : {
          weapon: null,
          armor: null,
          item: null
        };
    return {
      rescued: Array.isArray(parsed.rescued) ? parsed.rescued.filter((id) => BEAUTIES.some((beauty) => beauty.id === id)) : [],
      recruitedBeautyIds,
      clearedStages: Array.isArray(parsed.clearedStages)
        ? parsed.clearedStages.filter((id) => STAGES.some((stage) => stage.id === id))
        : [],
      selectedCompanionId: isBeautyKnown(parsed.selectedCompanionId) ? parsed.selectedCompanionId : null,
      introWatched: Boolean(parsed.introWatched),
      gold: Math.max(0, Number(parsed.gold) || 0),
      tickets: parsed.tickets == null ? 24 : Math.max(0, Number(parsed.tickets) || 0),
      inventoryItemIds,
      equippedItemIds
    };
  } catch (_error) {
    return createDefaultProgress();
  }
}

function saveProgress() {
  if (progress.selectedCompanionId && !isBeautyOwned(progress.selectedCompanionId)) {
    progress.selectedCompanionId = null;
  }
  progress.rescued = Array.from(new Set(progress.rescued)).filter((id) => BEAUTIES.some((beauty) => beauty.id === id));
  progress.clearedStages = Array.from(new Set(progress.clearedStages)).filter((id) => STAGES.some((stage) => stage.id === id));
  progress.recruitedBeautyIds = Array.from(new Set(progress.recruitedBeautyIds)).filter((id) => SUMMON_BEAUTIES.some((beauty) => beauty.id === id));
  progress.inventoryItemIds = Array.from(new Set(progress.inventoryItemIds)).filter((id) => SHOP_ITEMS.some((item) => item.id === id));
  ["weapon", "armor", "item"].forEach((type) => {
    const equippedId = progress.equippedItemIds[type];
    if (!progress.inventoryItemIds.includes(equippedId)) {
      progress.equippedItemIds[type] = null;
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function isBeautyKnown(id) {
  return ALL_BEAUTIES.some((beauty) => beauty.id === id);
}

function isBeautyOwned(id) {
  const beauty = getBeauty(id);
  if (!beauty) {
    return false;
  }
  return beauty.source === "summon"
    ? progress.recruitedBeautyIds.includes(beauty.id)
    : progress.rescued.includes(beauty.id);
}

function getShopItem(id) {
  return SHOP_ITEMS.find((item) => item.id === id) || null;
}

function getQualityMeta(quality) {
  return QUALITY_META[quality] || QUALITY_META.common;
}

function getCompanionRankMeta(rank) {
  return COMPANION_RANK_META[rank] || COMPANION_RANK_META.c;
}

function getTypeLabel(type) {
  return ({
    weapon: "武器",
    armor: "防具",
    item: "道具"
  })[type] || "物品";
}

function getOwnedItems(type) {
  return progress.inventoryItemIds
    .map(getShopItem)
    .filter(Boolean)
    .filter((item) => !type || item.type === type);
}

function getEquippedItem(type) {
  return getShopItem(progress.equippedItemIds[type]);
}

function equipItem(itemId) {
  const item = getShopItem(itemId);
  if (!item || !progress.inventoryItemIds.includes(item.id)) {
    return false;
  }
  progress.equippedItemIds[item.type] = item.id;
  saveProgress();
  return true;
}

function grantInventoryItem(itemId) {
  if (!progress.inventoryItemIds.includes(itemId)) {
    progress.inventoryItemIds.push(itemId);
  }
  const item = getShopItem(itemId);
  if (item && !progress.equippedItemIds[item.type]) {
    progress.equippedItemIds[item.type] = item.id;
  }
}

function applyEquippedItems(state) {
  ["weapon", "armor", "item"].forEach((type) => {
    const item = getEquippedItem(type);
    if (item) {
      item.apply(state);
    }
  });
  state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp);
}

function getEquippedSummary() {
  return ["weapon", "armor", "item"].map((type) => {
    const item = getEquippedItem(type);
    return item ? `${getTypeLabel(type)}：${item.name}` : `${getTypeLabel(type)}：未装备`;
  });
}

function getOwnedBeauties() {
  return ALL_BEAUTIES.filter((beauty) => isBeautyOwned(beauty.id));
}

function rollQualityByStage(stageId) {
  const roll = Math.random();
  const white = Math.max(0.46, 0.66 - stageId * 0.02);
  const green = Math.min(0.34, 0.2 + stageId * 0.012);
  const blue = Math.min(0.18, 0.08 + stageId * 0.009);
  if (roll < white) {
    return "common";
  }
  if (roll < white + green) {
    return "uncommon";
  }
  if (roll < white + green + blue) {
    return "rare";
  }
  return "epic";
}

function rollVictoryReward(stageId, firstClear) {
  const gold = 88 + stageId * 26 + (firstClear ? 40 : 0);
  const tickets = firstClear ? 2 + Math.floor(stageId / 3) : stageId % 4 === 0 ? 1 : 0;
  let item = null;
  let duplicateGold = 0;
  if (Math.random() < 0.52) {
    const type = ["weapon", "armor", "item"][Math.floor(Math.random() * 3)];
    const quality = rollQualityByStage(stageId);
    item = SHOP_ITEMS.find((shopItem) => shopItem.type === type && shopItem.quality === quality) || null;
    if (item) {
      if (progress.inventoryItemIds.includes(item.id)) {
        duplicateGold = Math.round(item.price * 0.35);
        item = null;
      } else {
        grantInventoryItem(item.id);
      }
    }
  }
  progress.gold += gold + duplicateGold;
  progress.tickets += tickets;
  return {
    gold,
    tickets,
    item,
    duplicateGold
  };
}

function showScreen(name) {
  homeScreen.classList.toggle("screen-active", name === "home");
  equipmentScreen.classList.toggle("screen-active", name === "equipment");
  libraryScreen.classList.toggle("screen-active", name === "library");
  libraryGalleryScreen.classList.toggle("screen-active", name === "libraryGallery");
  shopScreen.classList.toggle("screen-active", name === "shop");
  battleScreen.classList.toggle("screen-active", name === "battle");
  sound.setScene(name === "battle" ? "battle" : "menu");
}

function renderHome() {
  showScreen("home");
  renderSummary();
  renderCompanions();
  renderStages();
  renderLibraryHub();
  renderLibraryGallery();
  renderEquipmentScreen();
  renderShop();
}

function renderSummary() {
  const rescuedCount = progress.rescued.length;
  const ownedBeautyCount = getOwnedBeauties().length;
  const clearedCount = progress.clearedStages.length;
  const selected = getSelectedCompanion();
  summaryStrip.innerHTML = `
    <div class="summary-chip"><span>已净化 Boss</span><strong>${rescuedCount}/${BEAUTIES.length}</strong></div>
    <div class="summary-chip"><span>已收录美女</span><strong>${ownedBeautyCount}/${ALL_BEAUTIES.length}</strong></div>
    <div class="summary-chip"><span>已通关关卡</span><strong>${clearedCount}/${STAGES.length}</strong></div>
    <div class="summary-chip"><span>当前辅佐</span><strong>${selected ? selected.name : "未携带"}</strong></div>
    <div class="summary-chip"><span>金币储备</span><strong>${progress.gold}</strong></div>
    <div class="summary-chip"><span>点券储备</span><strong>${progress.tickets}</strong></div>
  `;
}

function renderCompanions() {
  const selected = getSelectedCompanion();
  currentCompanion.className = "current-companion";

  if (!selected) {
    currentCompanion.classList.add("empty");
    currentCompanion.innerHTML = `
      <div>
        <strong>当前未携带美女辅佐</strong>
        <p>首次挑战可以单人出战。净化任意主线 Boss 后，即可从美女库中编入一名辅佐。</p>
      </div>
    `;
  } else {
    currentCompanion.innerHTML = `
      <div class="current-companion-layout">
        <img src="${selected.art.purified}" alt="${selected.name}净化形态" class="current-companion-art purified-portrait">
        <div>
          <p class="section-kicker">${selected.source === "summon" ? "已招募编组" : "已净化编组"}</p>
          <h3 style="margin: 0; color: ${selected.accent};">${selected.name} · ${selected.title}</h3>
          <p>${selected.profile}</p>
          <p><strong>${selected.skillName}</strong>：${selected.skillDesc}</p>
        </div>
      </div>
    `;
  }

  const buttons = [
    `
      <button class="choice-button none-button ${selected ? "" : "is-selected"}" data-beauty-id="">
        <span>单人挑战</span>
        <small>不携带辅佐，完全依赖主武器和抽卡成长。</small>
      </button>
    `
  ];

  getOwnedBeauties().forEach((beauty) => {
    const rankMeta = beauty.rank ? getCompanionRankMeta(beauty.rank) : null;
    buttons.push(`
      <button class="choice-button with-art ${progress.selectedCompanionId === beauty.id ? "is-selected" : ""}" data-beauty-id="${beauty.id}">
        <img src="${beauty.art.purified}" alt="${beauty.name}" class="choice-avatar purified-portrait">
        <div>
          <span>${beauty.name}${rankMeta ? ` · <em style="color:${rankMeta.color}; font-style:normal;">${rankMeta.label}</em>` : ""}</span>
          <small>${beauty.skillName}</small>
        </div>
      </button>
    `);
  });

  companionChoices.innerHTML = buttons.join("");
  companionChoices.querySelectorAll("[data-beauty-id]").forEach((button) => {
    button.addEventListener("click", () => {
      progress.selectedCompanionId = button.dataset.beautyId || null;
      saveProgress();
      renderCompanions();
      renderSummary();
    });
  });
}

function renderStages() {
  stageGrid.innerHTML = STAGES.map((stage) => {
    const unlocked = isStageUnlocked(stage.id);
    const cleared = progress.clearedStages.includes(stage.id);
    const sceneArt = getStageSceneArt(stage.id);
    return `
      <article class="stage-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(stage.accent, unlocked ? 0.18 : 0.08)};">
        <div class="stage-top">
          <span class="stage-number">第 ${stage.id} 章</span>
          <span class="stage-status">${!unlocked ? "未解锁" : cleared ? "已净化" : "待净化"}</span>
        </div>
        <div class="stage-art-wrap">
          <div class="stage-theme-panel ${stage.themeClass}">
            <img src="${sceneArt}" alt="${stage.sceneName}" class="stage-scene-art">
            <div class="scene-layer scene-layer-a"></div>
            <div class="scene-layer scene-layer-b"></div>
            <div class="scene-layer scene-layer-c"></div>
          </div>
          <div>
            <h3>${stage.name}</h3>
            <p>${unlocked ? stage.description : `需先完成第 ${stage.id - 1} 章，才能进入这一座哥布林之巢。`}</p>
            <div class="stage-meta">
              <span class="meta-pill">场景 ${stage.sceneName}</span>
              <span class="meta-pill">威胁 ${stage.danger}</span>
              <span class="meta-pill">恐怖巢穴</span>
            </div>
          </div>
        </div>
        <div class="stage-actions">
          <button class="solid-button" type="button" data-stage-start="${stage.id}" ${unlocked ? "" : "disabled"}>${cleared ? "再次挑战" : "查看作战"}</button>
          <button class="ghost-button" type="button" disabled>${stage.tip}</button>
        </div>
      </article>
    `;
  }).join("");

  stageGrid.querySelectorAll("[data-stage-start]").forEach((button) => {
    button.addEventListener("click", () => {
      requestStageStart(Number(button.dataset.stageStart));
    });
  });
}

function renderEquipmentScreen() {
  equipmentSummary.textContent = `已拥有 ${progress.inventoryItemIds.length}/${SHOP_ITEMS.length}`;
  const weapon = getEquippedItem("weapon");
  const armor = getEquippedItem("armor");
  const item = getEquippedItem("item");
  equipmentStage.innerHTML = `
    <div class="equipment-hero-card">
      <div class="equipment-caption">
        <p class="section-kicker">主角战备</p>
        <strong>虾仁</strong>
      </div>
      ${renderEquipmentSlot("weapon", "主武器", weapon, "weapon-slot")}
      ${renderEquipmentSlot("armor", "护具", armor, "armor-slot")}
      ${renderEquipmentSlot("item", "道具", item, "item-slot")}
      <img src="${HERO_ART}" alt="虾仁立绘" class="equipment-hero-art">
    </div>
  `;

  const inventory = getOwnedItems().filter((ownedItem) => progress.equippedItemIds[ownedItem.type] !== ownedItem.id);
  equipmentInventory.innerHTML = inventory.length ? inventory.map((ownedItem) => renderInventoryCard(ownedItem)).join("") : `
    <div class="bag-empty">
      <div>
        <strong>当前没有可切换的未装备物品</strong>
        <p>先去商城购买，或者通过主线通关和抽卡继续扩充装备仓库。</p>
      </div>
    </div>
  `;
  equipmentInventory.querySelectorAll("[data-equip-item]").forEach((button) => {
    button.addEventListener("click", () => {
      equipItem(button.dataset.equipItem);
      saveProgress();
      renderSummary();
      renderCompanions();
      renderEquipmentScreen();
    });
  });
}

function renderEquipmentSlot(type, label, item, extraClass) {
  const quality = item ? getQualityMeta(item.quality) : null;
  const icon = item ? createItemIcon(item) : "";
  return `
    <div class="equipment-slot ${extraClass} ${quality ? quality.className : ""}">
      <span class="equipment-slot-label">${label}</span>
      ${item ? `<img src="${icon}" alt="${item.name}" class="equipment-slot-icon">` : `<div class="equipment-slot-icon"></div>`}
      <strong class="equipment-slot-name">${item ? item.name : "未装备"}</strong>
      <span class="equipment-slot-desc">${item ? item.effectText : "前往下方背包栏切换当前装备。"}</span>
    </div>
  `;
}

function renderInventoryCard(item) {
  const quality = getQualityMeta(item.quality);
  return `
    <button class="bag-item-card ${quality.className}" type="button" data-equip-item="${item.id}">
      <img src="${createItemIcon(item)}" alt="${item.name}" class="equipment-bag-icon">
      <strong style="color:${quality.color};">${item.name}</strong>
      <small>${getTypeLabel(item.type)} · ${quality.label}</small>
      <small>${item.effectText}</small>
    </button>
  `;
}

function openEquipmentScreen() {
  renderEquipmentScreen();
  showScreen("equipment");
}

function renderLibraryHub() {
  const preview = [...getOwnedBeauties(), ...ALL_BEAUTIES.filter((beauty) => !isBeautyOwned(beauty.id))]
    .slice(0, 3);
  libraryCounter.textContent = `已收录 ${getOwnedBeauties().length}/${ALL_BEAUTIES.length}`;
  libraryLanding.innerHTML = `
    <article class="library-landing-card">
      <div class="library-collage">
        ${preview.map((beauty, index) => {
          const art = isBeautyOwned(beauty.id) ? beauty.art.purified : getCorruptArtPath(beauty);
          const cssClass = ["item-a", "item-b", "item-c"][index] || "item-c";
          const filterClass = isBeautyOwned(beauty.id) ? "purified-portrait" : beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : "";
          return `<img src="${art}" alt="${beauty.name}" class="library-collage-item ${cssClass} ${filterClass}">`;
        }).join("")}
      </div>
      <div class="library-collage-copy">
        <p class="section-kicker">美女库入口</p>
        <h3>先看大合照，再看总览画廊</h3>
        <p>这里会收录主线净化出来的美女，以及商城抽到的招募角色。进入下一页后，你可以直接滑动浏览全部美女，不再需要一张一张切换查看。</p>
        <div class="beauty-meta">
          <span class="meta-pill">已净化 Boss ${progress.rescued.length}/${BEAUTIES.length}</span>
          <span class="meta-pill">已招募角色 ${progress.recruitedBeautyIds.length}/${SUMMON_BEAUTIES.length}</span>
          <span class="meta-pill">总收录 ${getOwnedBeauties().length}/${ALL_BEAUTIES.length}</span>
        </div>
      </div>
    </article>
  `;
}

function renderLibraryGallery() {
  libraryGalleryCounter.textContent = `${getOwnedBeauties().length}/${ALL_BEAUTIES.length} 已收录`;
  beautyGallery.innerHTML = ALL_BEAUTIES.map((beauty) => {
    const unlocked = isBeautyOwned(beauty.id);
    const art = unlocked ? beauty.art.purified : getCorruptArtPath(beauty);
    const stage = getStage(beauty.stageId);
    const rankMeta = beauty.rank ? getCompanionRankMeta(beauty.rank) : null;
    const filterClass = unlocked ? "purified-portrait" : beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : "";
    return `
      <article class="beauty-gallery-card" style="box-shadow: inset 0 0 0 1px ${hexToRgba(beauty.accent, unlocked ? 0.22 : 0.08)};">
        <div class="beauty-gallery-art">
          <img src="${art}" alt="${unlocked ? beauty.name : beauty.bossName || beauty.name}" class="${filterClass}">
        </div>
        <span class="beauty-badge">${unlocked ? beauty.source === "summon" ? "已招募" : "已净化" : beauty.source === "summon" ? "待招募" : "待净化"}</span>
        <h3 style="color:${beauty.accent};">${beauty.name}</h3>
        <p>${unlocked ? beauty.title : beauty.source === "summon" ? `品级 ${rankMeta.label} 招募角色` : stage ? `第 ${stage.id} 章黑化目标` : "资料未解锁"}</p>
        <p>${unlocked ? beauty.skillName : beauty.source === "summon" ? "可在商城角色招募中获得。" : "完成对应主线后可净化并加入队伍。"}</p>
      </article>
    `;
  }).join("");
}

function openLibraryScreen() {
  renderLibraryHub();
  showScreen("library");
}

function openLibraryGalleryScreen() {
  renderLibraryGallery();
  showScreen("libraryGallery");
}

function pickWeighted(table) {
  const roll = Math.random();
  let cursor = 0;
  for (const [value, weight] of table) {
    cursor += weight;
    if (roll <= cursor) {
      return value;
    }
  }
  return table[table.length - 1][0];
}

function getCharacterDuplicateGold(rank) {
  return ({
    c: 120,
    b: 200,
    a: 360,
    s: 680
  })[rank] || 120;
}

function getDrawCurrencyLabel(currency) {
  return currency === "gold" ? "金币" : "点券";
}

function getCharacterDrawPool(currency) {
  const allowedRanks = currency === "gold" ? ["c", "b"] : ["b", "a", "s"];
  return SUMMON_BEAUTIES.filter((beauty) => allowedRanks.includes(beauty.rank));
}

function getEquipmentDrawPool(currency) {
  const allowedQualities = currency === "gold" ? ["common", "uncommon"] : ["uncommon", "rare", "epic"];
  return SHOP_ITEMS.filter((item) => allowedQualities.includes(item.quality));
}

function getItemGlyph(item) {
  return ({
    "weapon-rustfang": '<rect x="18" y="40" width="58" height="10" rx="5" fill="#eef7ff"/><rect x="47" y="32" width="16" height="7" rx="3" fill="#ffd67d"/><rect x="32" y="48" width="12" height="24" rx="6" fill="#1d2732"/><path d="M30 50L14 65l7 7 17-10V50z" fill="#334454"/>',
    "weapon-stormbite": '<rect x="16" y="38" width="62" height="12" rx="6" fill="#ecfdff"/><rect x="50" y="28" width="18" height="9" rx="4" fill="#fff0a6"/><rect x="30" y="49" width="14" height="25" rx="7" fill="#13212f"/><path d="M26 50L12 64l8 8 14-8V50z" fill="#5aa8b9"/>',
    "weapon-railfang": '<rect x="14" y="37" width="66" height="12" rx="6" fill="#f2f7ff"/><rect x="54" y="28" width="20" height="8" rx="4" fill="#7db8ff"/><rect x="34" y="49" width="14" height="26" rx="7" fill="#101926"/><path d="M34 38h24" stroke="#7db8ff" stroke-width="3" stroke-linecap="round"/><path d="M28 50L10 67l7 7 17-10V50z" fill="#36537a"/>',
    "weapon-phoenix": '<rect x="14" y="36" width="68" height="13" rx="6.5" fill="#fff6da"/><rect x="53" y="27" width="22" height="9" rx="4.5" fill="#ffc07d"/><rect x="35" y="49" width="15" height="27" rx="7" fill="#171d27"/><path d="M25 34l15-8 10 8m2 0l11-10 18 12" fill="none" stroke="#ff8c65" stroke-width="4" stroke-linecap="round"/><path d="M27 50L10 67l8 8 18-10V50z" fill="#783d31"/>',
    "armor-fieldvest": '<path d="M20 18l28-10 28 10v46L48 78 20 64V18z" fill="#eef6ff"/><path d="M33 22h30v28L48 59 33 50V22z" fill="#324556"/><path d="M37 28h22v10H37z" fill="#6fb7ff"/>',
    "armor-rampart": '<path d="M19 18l29-11 29 11v47L48 80 19 65V18z" fill="#f4fff8"/><path d="M32 22h32v29L48 61 32 51V22z" fill="#1c3527"/><path d="M36 28h24v11H36z" fill="#79e19d"/><path d="M26 60h44" stroke="#b0ffd0" stroke-width="4" stroke-linecap="round"/>',
    "armor-polaris": '<path d="M18 18l30-12 30 12v48L48 82 18 66V18z" fill="#f5f9ff"/><path d="M31 22h34v30L48 62 31 52V22z" fill="#1c2642"/><path d="M48 20v34M31 37h34" stroke="#90c9ff" stroke-width="4" stroke-linecap="round"/>',
    "armor-seraph": '<path d="M18 18l30-12 30 12v48L48 82 18 66V18z" fill="#fff4ff"/><path d="M31 22h34v30L48 62 31 52V22z" fill="#30203d"/><path d="M48 16l8 10 12 3-8 8 2 12-14-6-14 6 2-12-8-8 12-3 8-10z" fill="#d88cff" fill-opacity=".84"/>',
    "item-scopechip": '<rect x="18" y="18" width="60" height="60" rx="20" fill="#eef7ff"/><circle cx="48" cy="48" r="20" fill="#1c2a3a"/><circle cx="48" cy="48" r="12" fill="#9fe4ff"/><path d="M48 28v10m0 20v10m-20-20h10m20 0h10" stroke="#eaf9ff" stroke-width="4" stroke-linecap="round"/>',
    "item-powdercharm": '<path d="M48 12l12 18 22 5-15 16 3 23-22-10-22 10 3-23L14 35l22-5 12-18z" fill="#ffe094"/><path d="M36 42l7 8 17-18" fill="none" stroke="#8f4b2c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    "item-frostseal": '<circle cx="48" cy="48" r="28" fill="#eefdff"/><path d="M48 18v60M22 32l52 32M22 64l52-32" stroke="#8de3ff" stroke-width="5" stroke-linecap="round"/><circle cx="48" cy="48" r="9" fill="#baf0ff"/>',
    "item-overdrive": '<circle cx="48" cy="48" r="30" fill="#fff1ff"/><circle cx="48" cy="48" r="15" fill="#2c1932"/><path d="M48 18l7 12 14 1-9 10 2 14-14-6-14 6 2-14-9-10 14-1 7-12z" fill="#d48cff"/><circle cx="48" cy="48" r="6" fill="#ffd9ff"/>'
  })[item.id] || '<rect x="18" y="18" width="60" height="60" rx="20" fill="#eef6ff"/>';
}

function createItemIcon(item) {
  const quality = getQualityMeta(item.quality);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <defs>
        <radialGradient id="bg" cx=".5" cy=".24" r=".9">
          <stop offset="0" stop-color="${quality.color}" stop-opacity=".38"/>
          <stop offset=".5" stop-color="${quality.color}" stop-opacity=".08"/>
          <stop offset="1" stop-color="#0b1017" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill="#0d1520"/>
      <rect x="6" y="6" width="84" height="84" rx="20" fill="url(#bg)" stroke="rgba(255,255,255,.08)"/>
      ${getItemGlyph(item)}
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createShopItemArt(item) {
  return createItemIcon(item);
}

function renderDrawCard(category) {
  const isCharacter = category === "character";
  const title = isCharacter ? "角色招募" : "装备补给";
  const info = isCharacter
    ? "金币招募只会出现 B / C 品级美女，点券招募最低 B，最高 S。抽到后可直接进入美女库并出战。"
    : "金币补给只会出现白 / 绿装备，点券补给最低绿，最高紫。重复装备会自动折算金币。";
  const entries = isCharacter
    ? [
        { label: "金币池", detail: "C 58% / B 42%" },
        { label: "点券池", detail: "B 58% / A 31% / S 11%" }
      ]
    : [
        { label: "金币池", detail: "白 72% / 绿 28%" },
        { label: "点券池", detail: "绿 54% / 蓝 32% / 紫 14%" }
      ];
  const recruitCount = SUMMON_BEAUTIES.filter((beauty) => progress.recruitedBeautyIds.includes(beauty.id)).length;
  return `
    <article class="draw-card">
      <div class="draw-card-header">
        <div>
          <p class="section-kicker">${isCharacter ? "角色池" : "装备池"}</p>
          <h3>${title}</h3>
        </div>
        <div class="wallet-cluster">
          ${isCharacter ? `<span class="rank-pill rank-s">已招募 ${recruitCount}/${SUMMON_BEAUTIES.length}</span>` : `<span class="rank-pill rank-a">已拥有 ${progress.inventoryItemIds.length}/${SHOP_ITEMS.length}</span>`}
        </div>
      </div>
      <p class="draw-info">${info}</p>
      <ul class="draw-rate-list">
        ${entries.map((entry) => `<li class="draw-entry"><span>${entry.label}</span><strong>${entry.detail}</strong></li>`).join("")}
      </ul>
      <div class="draw-buttons">
        <button class="ghost-button" type="button" data-draw-category="${category}" data-draw-currency="gold" ${progress.gold >= DRAW_COSTS[category].gold ? "" : "disabled"}>金币抽卡 ${DRAW_COSTS[category].gold}</button>
        <button class="solid-button" type="button" data-draw-category="${category}" data-draw-currency="ticket" ${progress.tickets >= DRAW_COSTS[category].ticket ? "" : "disabled"}>点券抽卡 ${DRAW_COSTS[category].ticket}</button>
      </div>
    </article>
  `;
}

function rollCharacterDraw(currency) {
  const pool = getCharacterDrawPool(currency);
  const rank = pickWeighted(DRAW_TABLES.character[currency]);
  const candidates = pool.filter((beauty) => beauty.rank === rank);
  const beauty = (candidates.length ? candidates : pool)[Math.floor(Math.random() * (candidates.length ? candidates.length : pool.length))];
  const duplicate = progress.recruitedBeautyIds.includes(beauty.id);
  let duplicateGold = 0;
  if (duplicate) {
    duplicateGold = getCharacterDuplicateGold(beauty.rank);
    progress.gold += duplicateGold;
  } else {
    progress.recruitedBeautyIds.push(beauty.id);
    if (!progress.selectedCompanionId) {
      progress.selectedCompanionId = beauty.id;
    }
  }
  return {
    category: "character",
    currency,
    beauty,
    duplicateGold
  };
}

function rollEquipmentDraw(currency) {
  const pool = getEquipmentDrawPool(currency);
  const quality = pickWeighted(DRAW_TABLES.equipment[currency]);
  const candidates = pool.filter((item) => item.quality === quality);
  const item = (candidates.length ? candidates : pool)[Math.floor(Math.random() * (candidates.length ? candidates.length : pool.length))];
  const duplicate = progress.inventoryItemIds.includes(item.id);
  let duplicateGold = 0;
  if (duplicate) {
    duplicateGold = Math.round(item.price * 0.48);
    progress.gold += duplicateGold;
  } else {
    grantInventoryItem(item.id);
  }
  return {
    category: "equipment",
    currency,
    item,
    duplicateGold
  };
}

function openDrawResultModal(result) {
  if (result.category === "character") {
    const beauty = result.beauty;
    const rankMeta = getCompanionRankMeta(beauty.rank);
    drawResultBadge.textContent = "角色招募";
    drawResultArt.src = beauty.art.purified;
    drawResultArt.className = "draw-result-art purified-portrait";
    drawResultKicker.textContent = result.duplicateGold ? "重复招募" : "招募成功";
    drawResultTitle.textContent = result.duplicateGold ? `再次邂逅 ${beauty.name}` : `获得 ${beauty.name}`;
    drawResultText.textContent = result.duplicateGold
      ? `${beauty.name} 已在你的美女库中，本次自动折算为 ${result.duplicateGold} 金币。`
      : `${beauty.profile} 她已经直接加入美女库，并可在“出战辅佐”中编队。`;
    drawResultMeta.innerHTML = `
      <span class="meta-pill" style="color:${rankMeta.color};">品级 ${rankMeta.label}</span>
      <span class="meta-pill">${beauty.title}</span>
      <span class="meta-pill">${beauty.skillName}</span>
      <span class="meta-pill">${getDrawCurrencyLabel(result.currency)}招募</span>
    `;
  } else {
    const item = result.item;
    const quality = getQualityMeta(item.quality);
    drawResultBadge.textContent = "装备补给";
    drawResultArt.src = createShopItemArt(item);
    drawResultArt.className = "draw-result-art";
    drawResultKicker.textContent = result.duplicateGold ? "重复装备" : "补给到货";
    drawResultTitle.textContent = result.duplicateGold ? `重复获得 ${item.name}` : `获得 ${item.name}`;
    drawResultText.textContent = result.duplicateGold
      ? `${item.name} 已在仓库中，本次自动折算为 ${result.duplicateGold} 金币。`
      : `${item.description} 效果：${item.effectText}`;
    drawResultMeta.innerHTML = `
      <span class="meta-pill" style="color:${quality.color};">${quality.label}</span>
      <span class="meta-pill">${getTypeLabel(item.type)}</span>
      <span class="meta-pill">${getDrawCurrencyLabel(result.currency)}补给</span>
    `;
  }
  drawResultModal.classList.remove("hidden");
}

function closeDrawResultModal() {
  drawResultModal.classList.add("hidden");
}

function performDraw(category, currency) {
  const cost = DRAW_COSTS[category][currency];
  if (currency === "gold") {
    if (progress.gold < cost) {
      return;
    }
    progress.gold -= cost;
  } else {
    if (progress.tickets < cost) {
      return;
    }
    progress.tickets -= cost;
  }
  const result = category === "character" ? rollCharacterDraw(currency) : rollEquipmentDraw(currency);
  saveProgress();
  renderHome();
  openShopScreen();
  openDrawResultModal(result);
}

function renderShop() {
  shopWallet.innerHTML = `
    <div class="wallet-cluster">
      <span class="wallet-chip">金币 <strong>${progress.gold}</strong></span>
      <span class="wallet-chip">点券 <strong>${progress.tickets}</strong></span>
    </div>
  `;
  shopDrawDeck.innerHTML = `
    ${renderDrawCard("character")}
    ${renderDrawCard("equipment")}
  `;
  const grouped = ["weapon", "armor", "item"].map((type) => ({
    type,
    items: SHOP_ITEMS.filter((item) => item.type === type)
  }));

  shopGrid.innerHTML = grouped.map((group) => `
    <section class="shop-section">
      <h3>${getTypeLabel(group.type)}直购</h3>
      <div class="shop-cards">
        ${group.items.map((item) => renderShopCard(item)).join("")}
      </div>
    </section>
  `).join("");

  shopGrid.querySelectorAll("[data-shop-buy]").forEach((button) => {
    button.addEventListener("click", () => {
      purchaseItem(button.dataset.shopBuy);
    });
  });
  shopDrawDeck.querySelectorAll("[data-draw-category]").forEach((button) => {
    button.addEventListener("click", () => {
      performDraw(button.dataset.drawCategory, button.dataset.drawCurrency);
    });
  });
}

function renderShopCard(item) {
  const quality = getQualityMeta(item.quality);
  const owned = progress.inventoryItemIds.includes(item.id);
  const afford = progress.gold >= item.price;
  const actionLabel = owned ? "已拥有" : `购买 ${item.price}`;
  const actionAttr = owned ? "disabled" : `data-shop-buy="${item.id}" ${afford ? "" : "disabled"}`;
  return `
    <article class="shop-card ${quality.className}">
      <div class="shop-card-top">
        <div>
          <span class="type-pill">${getTypeLabel(item.type)}</span>
          <strong style="display:block; margin-top:8px; color:${quality.color};">${item.name}</strong>
        </div>
        <span class="quality-pill" style="color:${quality.color};">${quality.label}</span>
      </div>
      <div class="shop-card-body">
        <img src="${createItemIcon(item)}" alt="${item.name}" class="shop-item-icon">
        <div>
          <p>${item.description}</p>
          <p><strong style="font-size:14px; color:var(--ink);">${item.effectText}</strong></p>
        </div>
      </div>
      <div class="shop-price">
        <span class="wallet-chip"><strong>${item.price}</strong> 金币</span>
        <button class="solid-button" type="button" ${actionAttr}>${actionLabel}</button>
      </div>
    </article>
  `;
}

function purchaseItem(itemId) {
  const item = getShopItem(itemId);
  if (!item || progress.inventoryItemIds.includes(item.id) || progress.gold < item.price) {
    return;
  }
  progress.gold -= item.price;
  grantInventoryItem(item.id);
  saveProgress();
  renderHome();
  openShopScreen();
}

function openShopScreen() {
  renderShop();
  showScreen("shop");
}

function requestStageStart(stageId) {
  const stage = getStage(stageId);
  if (!stage || !isStageUnlocked(stageId)) {
    return;
  }
  sound.ensureStarted();
  if (stageId === 1) {
    openStoryIntro(stageId);
    return;
  }
  openStageIntro(stageId);
}

function getStorySlides() {
  return [
    {
      themeClass: THEMES.neon.className,
      title: "腐化魔王“渣男”现身",
      text: "渣男擅长用甜言蜜语和虚假的誓约接近各地的美少女，再用腐化魔力一点点吞噬她们的心象。",
      meta: ["魔王目标：情感操控", "腐化方式：黑雾誓约"],
      leftArt: HERO_ART,
      rightArt: getCorruptArtPath(getBeauty("hiyori")),
      rightFiltered: beautyNeedsCorruptFilter(getBeauty("hiyori"))
    },
    {
      themeClass: THEMES.steamdock.className,
      title: "哥布林之巢遍布各地",
      text: "被欺骗的少女会被拖进一座座哥布林之巢。那些巢穴会不断抽取她们的情感与意志，将痛苦放大成黑化力量。",
      meta: ["巢穴机制：囚禁与侵蚀", "怪潮来源：哥布林守卫"],
      leftArt: MONSTER_ART.elite,
      rightArt: getCorruptArtPath(getBeauty("lanwei")),
      rightFiltered: beautyNeedsCorruptFilter(getBeauty("lanwei"))
    },
    {
      themeClass: THEMES.abysslab.className,
      title: "痛苦最终化作 Boss",
      text: "当腐化突破极限，美少女会被迫爆发出失控力量，成为每一关守在巢穴最深处的黑化 Boss。",
      meta: ["净化目标：黑化美少女", "作战重点：扛过怪潮后击破 Boss"],
      leftArt: MONSTER_ART.goblin,
      rightArt: getCorruptArtPath(getBeauty("molan")),
      rightFiltered: beautyNeedsCorruptFilter(getBeauty("molan"))
    },
    {
      themeClass: THEMES.skycity.className,
      title: "虾仁的救援行动开始",
      text: "虾仁的任务，是闯入各地哥布林之巢，击退怪潮，净化 Boss，把美少女从黑化中救回来，并让她们成为你的战斗辅佐。",
      meta: ["作战方式：固守下方阵地", "首要任务：救下绯音"],
      leftArt: HERO_ART,
      rightArt: getBeauty("hiyori").art.purified,
      rightFiltered: false
    }
  ];
}

function openStoryIntro(stageId) {
  storyState = {
    stageId,
    index: 0
  };
  renderStorySlide();
  storyIntroModal.classList.remove("hidden");
}

function renderStorySlide() {
  if (!storyState) {
    return;
  }
  const slides = getStorySlides();
  const slide = slides[storyState.index];
  storyIntroVisual.className = `story-intro-visual ${slide.themeClass}`;
  storyIntroTitle.textContent = slide.title;
  storyIntroText.textContent = slide.text;
  storyIntroMeta.innerHTML = slide.meta.map((item) => `<span class="meta-pill">${item}</span>`).join("");
  storyIntroLeftArt.src = slide.leftArt;
  storyIntroLeftArt.className = "story-art story-art-left";
  storyIntroRightArt.src = slide.rightArt;
  storyIntroRightArt.className = `story-art story-art-right ${slide.rightFiltered ? "is-corrupt-filter" : ""}`;
  storyIntroNextButton.textContent = storyState.index >= slides.length - 1 ? "开始救援" : "下一幕";
}

function advanceStoryIntro() {
  if (!storyState) {
    return;
  }
  const slides = getStorySlides();
  if (storyState.index >= slides.length - 1) {
    finishStoryIntro();
    return;
  }
  storyState.index += 1;
  renderStorySlide();
}

function finishStoryIntro() {
  const nextStageId = storyState ? storyState.stageId : 1;
  storyState = null;
  storyIntroModal.classList.add("hidden");
  openStageIntro(nextStageId);
}

function openStageIntro(stageId) {
  const stage = getStage(stageId);
  if (!stage) {
    return;
  }
  pendingStageId = stageId;
  stageIntroArt.className = `stage-intro-art ${stage.themeClass}`;
  stageIntroSceneArt.src = getStageSceneArt(stage.id);
  stageIntroSceneArt.className = "stage-intro-scene";
  stageIntroTitle.textContent = `第 ${stage.id} 章 · ${stage.name}`;
  stageIntroText.textContent = stage.previewText;
  stageIntroMeta.innerHTML = `
    <span class="meta-pill">场景 ${stage.sceneName}</span>
    <span class="meta-pill">威胁 ${stage.danger}</span>
    <span class="meta-pill">恐怖巢穴</span>
    <span class="meta-pill">${stage.tip}</span>
  `;
  stageIntroModal.classList.remove("hidden");
}

function closeStageIntro() {
  pendingStageId = null;
  stageIntroModal.classList.add("hidden");
}

function openBossIntro(state) {
  const beauty = getBeauty(state.stage.bossBeautyId);
  bossIntroArtWrap.className = `boss-intro-art-wrap ${state.stage.themeClass}`;
  bossIntroArt.src = getCorruptArtPath(beauty);
  bossIntroArt.className = `boss-intro-art ${beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : ""}`;
  bossIntroTitle.textContent = beauty.bossName;
  bossIntroText.textContent = state.stage.bossWarning;
  bossIntroTaunt.textContent = beauty.taunt;
  bossIntroStartButton.disabled = true;
  bossIntroStartButton.textContent = "自动开战中...";
  bossIntroMeta.innerHTML = `
    <span class="meta-pill">主线第 ${state.stage.id} 章</span>
    <span class="meta-pill">${beauty.skillName}</span>
    <span class="meta-pill">${state.stage.danger}</span>
  `;
  sound.playBossAlert();
  sound.speakBossLine(beauty.taunt, beauty.id);
  bossIntroModal.classList.remove("hidden");
  if (bossIntroTimer) {
    window.clearTimeout(bossIntroTimer);
  }
  bossIntroTimer = window.setTimeout(() => {
    if (!game || game.ended || game.bossSpawned) {
      return;
    }
    closeBossIntro({ cancelSpeech: false });
    spawnBoss(game);
    game.paused = false;
    flashBattleMessage(`${beauty.bossName}：${beauty.taunt}`, 2);
  }, 2300);
}

function closeBossIntro(options = {}) {
  const { cancelSpeech = true } = options;
  if (bossIntroTimer) {
    window.clearTimeout(bossIntroTimer);
    bossIntroTimer = null;
  }
  if (cancelSpeech) {
    sound.cancelSpeech();
  }
  bossIntroModal.classList.add("hidden");
}

function closeUpgradeModal() {
  upgradeModal.classList.add("hidden");
}

function closeResultModal() {
  resultModal.classList.add("hidden");
}

function closeAllOverlays() {
  pendingStageId = null;
  storyState = null;
  storyIntroModal.classList.add("hidden");
  stageIntroModal.classList.add("hidden");
  bossIntroModal.classList.add("hidden");
  upgradeModal.classList.add("hidden");
  resultModal.classList.add("hidden");
  drawResultModal.classList.add("hidden");
  sound.cancelSpeech();
}

function launchStage(stageId) {
  const stage = getStage(stageId);
  if (!stage || !isStageUnlocked(stageId)) {
    return;
  }
  pendingUpgrades = 0;
  resultContext = null;
  closeAllOverlays();
  game = createGame(stage, getSelectedCompanion());
  battleStageName.textContent = `第 ${stage.id} 章 · ${stage.name}`;
  updateBattleHud();
  showScreen("battle");
  sound.playBattleStart();
  flashBattleMessage(`第 ${stage.id} 章开始：${stage.name}`, 2);
}

function createGame(stage, companion) {
  const state = {
    stage,
    theme: THEMES[stage.themeId],
    time: 0,
    ended: false,
    paused: false,
    spawnClock: 0,
    supportClock: 0,
    bossWarned: false,
    bossIntroShown: false,
    bossSpawned: false,
    bossDefeated: false,
    lastEliteAlertAt: -999,
    hero: {
      x: canvas.width / 2,
      y: canvas.height - 150,
      maxHp: 400,
      hp: 400,
      barrier: 0,
      fireRate: 4,
      damage: 26,
      bulletSpeed: 980,
      pierce: 1,
      projectiles: 1,
      critChance: 0.08,
      critMultiplier: 1.72,
      splash: 0,
      slowShots: false,
      slowDuration: 2.4,
      bulletLife: 1.4,
      bulletRadius: 6,
      bossBonus: 0,
      eliteBonus: 0,
      onKillRepair: 0,
      companionCooldownScale: 1,
      fireCooldown: 0,
      recoil: 0,
      muzzleTimer: 0,
      companionCastAt: -999
    },
    level: 1,
    xp: 0,
    nextXp: 100,
    killCount: 0,
    stats: {
      totalDamage: 0,
      bossDamage: 0,
      eliteKills: 0,
      moduleCasts: 0,
      companionCasts: 0,
      shotsFired: 0
    },
    bullets: [],
    bombs: [],
    monsters: [],
    effects: [],
    texts: [],
    zones: [],
    upgrades: {},
    modules: {},
    moduleCooldowns: {},
    droneClock: 0,
    droneAngle: Math.random() * Math.PI * 2,
    message: null,
    companion,
    stageAccent: stage.accent,
    bgPulse: Math.random() * Math.PI * 2
  };
  applyEquippedItems(state);
  return state;
}

function frame(timestamp) {
  const dt = Math.min(0.032, Math.max(0.001, (timestamp - lastTimestamp) / 1000 || 0.016));
  lastTimestamp = timestamp;

  if (game) {
    if (!game.paused && !game.ended) {
      updateGame(game, dt);
    }
    renderGame(game);
    updateBattleHud();
  }

  requestAnimationFrame(frame);
}

function updateGame(state, dt) {
  state.time += dt;
  state.bgPulse += dt;
  state.droneAngle += dt * 2.1;
  state.hero.recoil = Math.max(0, state.hero.recoil - dt * 7.5);
  state.hero.muzzleTimer = Math.max(0, state.hero.muzzleTimer - dt);
  state.hero.fireCooldown = Math.max(0, state.hero.fireCooldown - dt);

  updateSpawns(state, dt);
  updateCompanion(state);
  updateModules(state, dt);
  updateHeroFire(state);
  updateBullets(state, dt);
  updateBombs(state, dt);
  updateZones(state, dt);
  updateMonsters(state, dt);
  updateEffects(state, dt);
  updateTexts(state, dt);
  updateMessage(state);

  if (state.hero.hp <= 0) {
    finishBattle(false);
  }
}

function updateSpawns(state, dt) {
  if (!state.bossSpawned) {
    if (!state.bossWarned && state.time >= state.stage.bossAt - 6) {
      state.bossWarned = true;
      flashBattleMessage("BOSS ALERT · 黑化目标即将降临", 1.45);
    }

    state.spawnClock += dt;
    const interval = Math.max(0.34, 1.15 - state.time * 0.008 - state.stage.id * 0.045);
    if (state.spawnClock >= interval) {
      state.spawnClock = 0;
      spawnMonsterWave(state);
    }

    if (state.time >= state.stage.bossAt && !state.bossIntroShown) {
      if (pendingUpgrades > 0 || !upgradeModal.classList.contains("hidden")) {
        return;
      }
      state.bossIntroShown = true;
      state.paused = true;
      openBossIntro(state);
      return;
    }
  } else if (!state.bossDefeated) {
    state.supportClock += dt;
    const supportInterval = Math.max(1.1, 2.4 - state.stage.id * 0.09);
    if (state.supportClock >= supportInterval) {
      state.supportClock = 0;
      spawnMonster(state, pickMonsterKind(state, true));
    }
  }
}

function spawnMonsterWave(state) {
  let count = 1 + (Math.random() < 0.65 ? 1 : 0);
  if (state.stage.id >= 4 && Math.random() < 0.34) {
    count += 1;
  }
  if (state.stage.id >= 8 && Math.random() < 0.28) {
    count += 1;
  }
  for (let index = 0; index < count; index += 1) {
    spawnMonster(state, pickMonsterKind(state, false));
  }
}

function pickMonsterKind(state, duringBoss) {
  const eliteChance = 0.06 + state.stage.id * 0.024 + (duringBoss ? 0.06 : 0) + Math.min(0.08, state.time * 0.0013);
  const scoutChance = 0.24 + state.stage.id * 0.018;
  const roll = Math.random();
  if (roll < eliteChance) {
    return "elite";
  }
  if (roll < eliteChance + scoutChance) {
    return "scout";
  }
  return "goblin";
}

function spawnMonster(state, kind) {
  const scale = 1 + state.stage.id * 0.18 + state.time * 0.012;
  const configs = {
    goblin: {
      hp: 88 * scale,
      speed: 80 + state.stage.id * 4.5,
      radius: 30,
      damage: 10 + state.stage.id * 1.8,
      attackRate: 1.12,
      exp: 24,
      sprite: MONSTER_ART.goblin,
      width: 108,
      height: 132,
      elite: false,
      label: ""
    },
    scout: {
      hp: 68 * scale,
      speed: 108 + state.stage.id * 5.8,
      radius: 24,
      damage: 8 + state.stage.id * 1.45,
      attackRate: 0.9,
      exp: 22,
      sprite: MONSTER_ART.goblin,
      width: 90,
      height: 112,
      elite: false,
      label: ""
    },
    elite: {
      hp: 245 * scale,
      speed: 70 + state.stage.id * 4,
      radius: 40,
      damage: 18 + state.stage.id * 2.8,
      attackRate: 1.35,
      exp: 65,
      sprite: MONSTER_ART.elite,
      width: 134,
      height: 164,
      elite: true,
      label: "ELITE"
    }
  };

  const config = configs[kind];
  const spawnX = 90 + Math.random() * (canvas.width - 180);
  state.monsters.push({
    kind,
    x: spawnX,
    y: -80 - Math.random() * 120,
    laneX: spawnX,
    hp: config.hp,
    maxHp: config.hp,
    speed: config.speed,
    radius: config.radius,
    damage: config.damage,
    attackRate: config.attackRate,
    exp: config.exp,
    sprite: config.sprite,
    width: config.width,
    height: config.height,
    isElite: config.elite,
    isBoss: false,
    dead: false,
    attackCooldown: 0,
    slowUntil: 0,
    freezeUntil: 0,
    stunUntil: 0,
    burnUntil: 0,
    burnDps: 0,
    phase: Math.random() * Math.PI * 2,
    animSpeed: kind === "scout" ? 11.5 : config.elite ? 7.5 : 8.5,
    weave: kind === "scout" ? 22 : config.elite ? 16 : 12,
    hitFlash: 0,
    label: config.label
  });
  if (config.elite && state.time - state.lastEliteAlertAt > 8) {
    state.lastEliteAlertAt = state.time;
    flashBattleMessage("精英哥布林逼近", 1.1);
  }
}

function spawnBoss(state) {
  if (state.bossSpawned) {
    return;
  }
  const beauty = getBeauty(state.stage.bossBeautyId);
  const hp = 1600 + state.stage.id * 520;
  state.bossSpawned = true;
  state.spawnClock = 0;
  state.supportClock = 0;
  state.monsters.push({
    kind: "boss",
    x: canvas.width / 2,
    y: -220,
    laneX: canvas.width / 2,
    hp,
    maxHp: hp,
    speed: 42 + state.stage.id * 3.8,
    radius: 68,
    damage: 26 + state.stage.id * 4,
    attackRate: 1.02,
    exp: 0,
    sprite: getCorruptArtPath(beauty),
    filter: beautyNeedsCorruptFilter(beauty) ? "saturate(0.32) hue-rotate(300deg) brightness(0.58) contrast(1.12)" : "",
    width: 236,
    height: 324,
    isElite: false,
    isBoss: true,
    dead: false,
    attackCooldown: 0,
    slowUntil: 0,
    freezeUntil: 0,
    stunUntil: 0,
    burnUntil: 0,
    burnDps: 0,
    phase: Math.random() * Math.PI * 2,
    animSpeed: 3.2,
    weave: 40,
    hitFlash: 0,
    label: "BOSS"
  });
}

function updateCompanion(state) {
  if (!state.companion) {
    return;
  }
  const cooldown = getCompanionCooldown(state);
  if (state.time - state.hero.companionCastAt < cooldown) {
    return;
  }
  if (castCompanionSkill(state, state.companion)) {
    state.hero.companionCastAt = state.time;
    state.stats.companionCasts += 1;
  }
}

function updateModules(state, dt) {
  runModule(state, "thermobaric", dt, (level) => 8.6 - level * 0.55, (level) => castThermobaric(state, level));
  runModule(state, "fuelBomb", dt, (level) => 9.4 - level * 0.55, (level) => castFuelBomb(state, level));
  runModule(state, "dryIce", dt, (level) => 8.2 - level * 0.45, (level) => castDryIceBomb(state, level));
  runModule(state, "iceBurst", dt, (level) => 10.2 - level * 0.8, (level) => castIceBurst(state, level));
  runModule(state, "electroSpike", dt, (level) => 7.8 - level * 0.45, (level) => castElectroSpike(state, level));
  runModule(state, "highEnergyRay", dt, (level) => 9.2 - level * 0.55, (level) => castHighEnergyRay(state, level));
  runModule(state, "guidedLaser", dt, (level) => 8.8 - level * 0.55, (level) => castGuidedLaser(state, level));
  runModule(state, "cycloneCannon", dt, (level) => 6.5 - level * 0.28, (level) => castCycloneCannon(state, level));
  runModule(state, "airdrop", dt, (level) => 10.5 - level * 0.55, (level) => castAirdrop(state, level));
  updateDroneWing(state, dt);
}

function runModule(state, key, dt, cooldownFn, castFn) {
  const level = state.modules[key] || 0;
  if (!level) {
    return;
  }
  state.moduleCooldowns[key] = Math.max(0, (state.moduleCooldowns[key] || 0) - dt);
  if (state.moduleCooldowns[key] > 0 || !livingMonsters(state).length) {
    return;
  }
  if (castFn(level)) {
    state.stats.moduleCasts += 1;
    state.moduleCooldowns[key] = Math.max(1.2, cooldownFn(level));
  }
}

function updateHeroFire(state) {
  if (state.hero.fireCooldown > 0) {
    return;
  }
  const target = findPrimaryTarget(state);
  if (!target) {
    state.hero.fireCooldown = 0.1;
    return;
  }

  const angle = Math.atan2(target.y - (state.hero.y - 48), target.x - state.hero.x);
  const spread = state.hero.projectiles === 1 ? 0 : 0.13;
  const center = (state.hero.projectiles - 1) / 2;
  for (let index = 0; index < state.hero.projectiles; index += 1) {
    const bulletAngle = angle + (index - center) * spread;
    state.bullets.push({
      x: state.hero.x + Math.cos(bulletAngle) * 18,
      y: state.hero.y - 62 + Math.sin(bulletAngle) * 18,
      vx: Math.cos(bulletAngle) * state.hero.bulletSpeed,
      vy: Math.sin(bulletAngle) * state.hero.bulletSpeed,
      radius: state.hero.bulletRadius,
      damage: state.hero.damage,
      pierce: state.hero.pierce,
      color: "#ffe2b8",
      splash: state.hero.splash,
      slow: state.hero.slowShots,
      slowDuration: state.hero.slowDuration,
      fromHero: true,
      life: state.hero.bulletLife
    });
  }

  sound.playHeroShot();
  state.stats.shotsFired += state.hero.projectiles;
  state.hero.fireCooldown = 1 / state.hero.fireRate;
  state.hero.recoil = Math.min(1, state.hero.recoil + 0.9);
  state.hero.muzzleTimer = 0.08;
}

function updateBullets(state, dt) {
  state.bullets = state.bullets.filter((bullet) => {
    if (bullet.returnAfter && bullet.life < bullet.returnAfter) {
      bullet.vx *= 0.985;
      bullet.vy = Math.abs(bullet.vy) * 0.9;
    }

    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
    bullet.life -= dt;

    if (
      bullet.life <= 0
      || bullet.x < -80
      || bullet.x > canvas.width + 80
      || bullet.y < -140
      || bullet.y > canvas.height + 140
    ) {
      return false;
    }

    for (const monster of state.monsters) {
      if (monster.dead) {
        continue;
      }
      if (Math.hypot(bullet.x - monster.x, bullet.y - monster.y) > bullet.radius + monster.radius) {
        continue;
      }

      let damage = bullet.damage;
      let label = bullet.label || null;
      let color = bullet.color;
      if (bullet.fromHero && Math.random() < state.hero.critChance) {
        damage *= state.hero.critMultiplier;
        label = "暴击";
        color = "#fff19a";
      }
      if (monster.isBoss) {
        damage *= 1 + state.hero.bossBonus;
      }
      if (monster.isElite) {
        damage *= 1 + state.hero.eliteBonus;
      }
      if (bullet.slow) {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + (bullet.slowDuration || 2.4));
      }
      damageMonster(state, monster, damage, { color, label, fromCompanion: !bullet.fromHero });
      if (bullet.splash > 0) {
        applyAreaDamage(state, bullet.x, bullet.y, bullet.splash, damage * 0.36, {
          color: "#ffcf9a",
          label: "爆裂",
          silent: false
        });
      }
      bullet.pierce -= 1;
      if (bullet.pierce <= 0) {
        return false;
      }
    }
    return true;
  });
}

function updateBombs(state, dt) {
  state.bombs = state.bombs.filter((bomb) => {
    bomb.y += bomb.vy * dt;
    bomb.life -= dt;
    if (bomb.y >= bomb.targetY || bomb.life <= 0) {
      detonateBomb(state, bomb);
      return false;
    }
    return true;
  });
}

function updateZones(state, dt) {
  state.zones = state.zones.filter((zone) => {
    zone.life -= dt;
    zone.pulse += dt;
    livingMonsters(state).forEach((monster) => {
      if (Math.hypot(zone.x - monster.x, zone.y - monster.y) > zone.radius + monster.radius * 0.3) {
        return;
      }
      if (zone.type === "fire") {
        applyBurn(monster, state.time + 1.1, zone.dps);
      }
      if (zone.type === "sand") {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + 0.8);
        damageMonster(state, monster, zone.dps * dt, { silent: true });
      }
      if (zone.type === "bubble") {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + 1.05);
        damageMonster(state, monster, zone.dps * dt, { silent: true });
      }
    });
    return zone.life > 0;
  });
}

function updateMonsters(state, dt) {
  state.monsters.forEach((monster) => {
    if (monster.dead) {
      return;
    }

    monster.hitFlash = Math.max(0, monster.hitFlash - dt * 4.8);
    if (monster.burnUntil > state.time) {
      damageMonster(state, monster, monster.burnDps * dt, { silent: true });
      if (monster.dead) {
        return;
      }
    }

    const disabled = state.time < monster.freezeUntil || state.time < monster.stunUntil;
    if (disabled) {
      return;
    }

    const slowFactor = state.time < monster.slowUntil ? 0.52 : 1;
    const targetX = monster.isBoss
      ? state.hero.x + Math.sin(state.time * 1.8 + monster.phase) * monster.weave
      : monster.laneX + Math.sin(state.time * 2.6 + monster.phase) * monster.weave;
    const targetY = state.hero.y - (monster.isBoss ? 168 : 92);
    const dx = targetX - monster.x;
    const dy = targetY - monster.y;
    const distance = Math.hypot(dx, dy);
    const attackRange = monster.radius + (monster.isBoss ? 94 : 54);

    if (distance > attackRange) {
      monster.x += (dx / distance) * monster.speed * slowFactor * dt;
      monster.y += (dy / distance) * monster.speed * slowFactor * dt;
    } else {
      monster.attackCooldown -= dt;
      if (monster.attackCooldown <= 0) {
        takeHeroDamage(state, monster.damage * (monster.isBoss ? 1.12 : 1));
        monster.attackCooldown = monster.attackRate;
        spawnShockwave(state, state.hero.x, state.hero.y - 18, monster.isBoss ? 86 : 48, "rgba(255, 112, 112, 0.18)");
      }
    }
  });

  state.monsters = state.monsters.filter((monster) => !monster.dead);
}

function updateEffects(state, dt) {
  state.effects.forEach((effect) => {
    effect.life -= dt;
    if (effect.maxRadius) {
      effect.radius = effect.maxRadius * (1 - Math.max(0, effect.life) / effect.totalLife);
    }
    if (effect.type === "wave") {
      effect.offset += effect.speed * dt;
    }
  });
  state.effects = state.effects.filter((effect) => effect.life > 0);
}

function updateTexts(state, dt) {
  state.texts.forEach((text) => {
    text.y -= 42 * dt;
    text.life -= dt;
  });
  state.texts = state.texts.filter((text) => text.life > 0);
}

function updateMessage(state) {
  if (!state.message || state.time < state.message.until) {
    return;
  }
  state.message = null;
  battleMessage.classList.add("hidden");
}

function openUpgradeModal() {
  if (!game || pendingUpgrades <= 0 || game.ended) {
    return;
  }
  const choices = pickUpgradeChoices(game);
  if (!choices.length) {
    pendingUpgrades = 0;
    closeUpgradeModal();
    game.paused = false;
    return;
  }
  game.paused = true;
  upgradeModal.classList.remove("hidden");
  upgradeChoices.innerHTML = choices.map((choice) => {
    const nextLevel = getUpgradeLevel(game, choice.id) + 1;
    return `
      <button class="upgrade-card" type="button" data-upgrade-id="${choice.id}">
        <small>${choice.rarity} · Lv.${nextLevel}/${choice.maxLevel}</small>
        <h3>${choice.name}</h3>
        <p>${choice.describe(game, nextLevel)}</p>
      </button>
    `;
  }).join("");

  upgradeChoices.querySelectorAll("[data-upgrade-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const picked = UPGRADE_POOL.find((item) => item.id === button.dataset.upgradeId);
      if (!picked || !game) {
        return;
      }
      const nextLevel = getUpgradeLevel(game, picked.id) + 1;
      game.upgrades[picked.id] = nextLevel;
      picked.apply(game, nextLevel);
      pendingUpgrades -= 1;
      closeUpgradeModal();
      flashBattleMessage(`获得强化：${picked.name}`, 1.2);
      if (pendingUpgrades > 0) {
        openUpgradeModal();
      } else if (game && !bossIntroModal.classList.contains("hidden")) {
        game.paused = true;
      } else if (game) {
        game.paused = false;
      }
    });
  });
}

function pickUpgradeChoices(state) {
  const available = UPGRADE_POOL.filter((upgrade) => {
    const current = getUpgradeLevel(state, upgrade.id);
    if (current >= upgrade.maxLevel) {
      return false;
    }
    if (isBlockedByModuleSkillCap(state, upgrade)) {
      return false;
    }
    return upgrade.available ? upgrade.available(state, current + 1) : true;
  });

  const result = [];
  const pool = [...available];
  const hasNoCore = Object.values(state.modules).every((value) => !value);
  if (hasNoCore) {
    const corePool = pool.filter((item) => item.rarity === "核心卡");
    if (corePool.length) {
      const picked = corePool[Math.floor(Math.random() * corePool.length)];
      result.push(picked);
      pool.splice(pool.indexOf(picked), 1);
    }
  }

  while (result.length < 3 && pool.length) {
    const picked = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    result.push(picked);
  }
  return result;
}

function getOwnedModuleKeys(state) {
  return Object.entries(state.modules)
    .filter(([, level]) => level > 0)
    .map(([key]) => key);
}

function isBlockedByModuleSkillCap(state, upgrade) {
  const moduleKey = CORE_UPGRADE_TO_MODULE_KEY[upgrade.id];
  if (!moduleKey) {
    return false;
  }
  const ownedModuleKeys = getOwnedModuleKeys(state);
  return ownedModuleKeys.length >= MAX_MODULE_SKILL_TYPES && !ownedModuleKeys.includes(moduleKey);
}

function gainXp(state, amount) {
  state.xp += amount;
  while (state.xp >= state.nextXp) {
    state.xp -= state.nextXp;
    state.level += 1;
    state.nextXp = Math.round(state.nextXp * 1.28);
    pendingUpgrades += 1;
  }
  if (pendingUpgrades > 0 && !state.paused) {
    openUpgradeModal();
  }
}

function finishBattle(victory) {
  if (!game || game.ended) {
    return;
  }

  game.ended = true;
  game.paused = true;
  closeUpgradeModal();
  closeBossIntro();

  let unlockedBeauty = null;
  let rewards = null;
  if (victory) {
    const beauty = getBeauty(game.stage.bossBeautyId);
    const firstClear = !progress.clearedStages.includes(game.stage.id);
    if (!progress.rescued.includes(beauty.id)) {
      progress.rescued.push(beauty.id);
      unlockedBeauty = beauty;
    }
    if (firstClear) {
      progress.clearedStages.push(game.stage.id);
    }
    if (!progress.selectedCompanionId) {
      progress.selectedCompanionId = beauty.id;
    }
    rewards = rollVictoryReward(game.stage.id, firstClear);
    saveProgress();
  }

  if (victory) {
    sound.playVictory();
  } else {
    sound.playDefeat();
  }
  sound.setScene("menu");

  const nextStage = victory && game.stage.id < STAGES.length ? game.stage.id + 1 : null;
  resultContext = {
    nextStageId: nextStage,
    retryStageId: game.stage.id,
    rewards
  };

  resultKicker.textContent = victory ? "净化成功" : "防线失守";
  resultTitle.textContent = victory ? `成功净化 ${getBeauty(game.stage.bossBeautyId).bossName}` : "本次行动失败";
  resultText.textContent = victory
    ? (unlockedBeauty
      ? `${unlockedBeauty.name} 已加入美女库，并解锁专属技能【${unlockedBeauty.skillName}】。本次通关奖励已发放。`
      : "该 Boss 已完成净化，本次挑战的金币和掉落奖励已结算。")
    : "哥布林怪潮击穿了防线。调整编组和技能路线后，再试一次。";
  renderResultStats(game, rewards);
  resultPrimaryButton.textContent = "返回主界面";
  resultSecondaryButton.textContent = nextStage ? `挑战第 ${nextStage} 章` : victory ? "再次挑战" : "重整后再战";
  resultModal.classList.remove("hidden");
}

function renderResultStats(state, rewards = null) {
  const skillNames = getOwnedModuleKeys(state)
    .map((key) => MODULE_SKILLS[key]?.name)
    .filter(Boolean);
  resultStats.innerHTML = `
    <article class="result-stat">
      <span>战斗时长</span>
      <strong>${Math.max(1, Math.floor(state.time))}s</strong>
    </article>
    <article class="result-stat">
      <span>击杀总数</span>
      <strong>${state.killCount}</strong>
    </article>
    <article class="result-stat">
      <span>总伤害</span>
      <strong>${Math.round(state.stats.totalDamage)}</strong>
    </article>
    <article class="result-stat">
      <span>Boss 伤害</span>
      <strong>${Math.round(state.stats.bossDamage)}</strong>
    </article>
    <article class="result-stat">
      <span>精英击杀</span>
      <strong>${state.stats.eliteKills}</strong>
    </article>
    <article class="result-stat">
      <span>自动施放</span>
      <strong>${state.stats.moduleCasts + state.stats.companionCasts}</strong>
    </article>
    ${rewards ? `
      <article class="result-stat">
        <span>金币奖励</span>
        <strong>+${rewards.gold + rewards.duplicateGold}</strong>
      </article>
      <article class="result-stat">
        <span>点券奖励</span>
        <strong>+${rewards.tickets}</strong>
      </article>
      <article class="result-stat">
        <span>额外掉落</span>
        <strong>${rewards.item ? `${getQualityMeta(rewards.item.quality).label}${getTypeLabel(rewards.item.type)}` : rewards.duplicateGold ? "重复折现" : "本次仅金币"}</strong>
      </article>
    ` : ""}
    <article class="result-stat result-skill-summary">
      <span>本局成型技能</span>
      <p>${skillNames.length ? skillNames.join(" · ") : "本局主要依靠普通射击推进。"}${state.companion ? ` 辅佐：${state.companion.name}` : ""}${rewards?.item ? ` 掉落：${rewards.item.name}（${rewards.item.effectText}）` : rewards?.duplicateGold ? ` 掉落重复物品已折算金币。` : ""}${rewards?.tickets ? ` 另得点券：${rewards.tickets}。` : ""}</p>
    </article>
  `;
}

function updateBattleHud() {
  if (!game) {
    return;
  }

  hudHp.textContent = `${Math.ceil(game.hero.hp)} / ${game.hero.maxHp}${game.hero.barrier > 0 ? ` +${Math.ceil(game.hero.barrier)}` : ""}`;
  hudTimer.textContent = `${Math.floor(game.time)}s`;
  hudLevel.textContent = `Lv.${game.level}`;
  hudKills.textContent = `${game.killCount}`;
  hudXpText.textContent = `${Math.round(game.xp)} / ${game.nextXp}`;
  hudXpFill.style.width = `${Math.min(100, (game.xp / game.nextXp) * 100)}%`;
  renderBattleSkills(game);

  if (!game.companion) {
    battleCompanionStatus.innerHTML = `
      <p class="battle-companion-label">美女辅佐</p>
      <strong>当前未携带</strong>
      <p>这一局完全依赖虾仁的火力和升级卡成长。</p>
    `;
    return;
  }

  const cooldownLeft = Math.max(0, getCompanionCooldown(game) - (game.time - game.hero.companionCastAt));
  battleCompanionStatus.innerHTML = `
    <div class="companion-status-layout">
      <img src="${game.companion.art.purified}" alt="${game.companion.name}" class="companion-art purified-portrait">
      <div>
        <p class="battle-companion-label">美女辅佐</p>
        <h3 style="margin: 6px 0; color: ${game.companion.accent};">${game.companion.name}</h3>
        <p>${game.companion.skillName}</p>
        <p class="cooldown-label">${cooldownLeft > 0 ? `技能冷却 ${cooldownLeft.toFixed(1)}s` : "技能就绪"}</p>
      </div>
    </div>
  `;
}

function renderBattleSkills(state) {
  const skills = getOwnedModuleKeys(state)
    .slice(0, MAX_MODULE_SKILL_TYPES)
    .map((key) => {
      const meta = MODULE_SKILLS[key];
      const level = state.modules[key] || 0;
      const remaining = Math.max(0, state.moduleCooldowns[key] || 0);
      return {
        key,
        name: meta.name,
        icon: meta.icon,
        level,
        cooldownText: remaining > 0 ? remaining.toFixed(1) : "就绪",
        cooling: remaining > 0
      };
    });

  if (!skills.length) {
    battleSkillPanel.classList.add("hidden");
    battleSkillPanel.innerHTML = "";
    return;
  }

  battleSkillPanel.classList.remove("hidden");
  battleSkillPanel.innerHTML = `
    <div class="skill-list">
      ${skills.map((skill) => `
        <div class="skill-item" title="${skill.name}">
          <div class="skill-item-icon">
            <img src="${skill.icon}" alt="${skill.name}">
            ${skill.cooling ? `<div class="skill-item-cooling"><span class="skill-item-cd cooling">${skill.cooldownText}</span></div>` : '<span class="skill-item-ready"></span>'}
            <span class="skill-item-level">Lv.${skill.level}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function getCompanionCooldown(state) {
  return state.companion ? state.companion.cooldown * state.hero.companionCooldownScale : 999;
}

function castCompanionSkill(state, beauty) {
  const targets = livingMonsters(state);
  if (!targets.length) {
    return false;
  }

  sound.playCompanionSkill(beauty.id);

  switch (beauty.id) {
    case "hiyori": {
      [-54, 0, 54].forEach((offset, index) => {
        state.bullets.push({
          x: state.hero.x + offset,
          y: state.hero.y - 62,
          vx: offset * 0.35,
          vy: -980 - index * 20,
          radius: 12,
          damage: state.hero.damage * 3,
          pierce: 99,
          color: "#ffb777",
          splash: 24,
          label: "焰羽",
          fromHero: false,
          life: 1.1
        });
      });
      spawnShockwave(state, state.hero.x, state.hero.y - 48, 138, "rgba(255, 144, 105, 0.34)");
      flashBattleMessage("绯音发动【焰羽扫射】", 1.3);
      return true;
    }
    case "serin": {
      targets.forEach((monster) => {
        monster.freezeUntil = Math.max(monster.freezeUntil, state.time + 3.6);
        damageMonster(state, monster, 52 + state.stage.id * 11, {
          color: "#c0f6ff",
          label: "冰爆",
          fromCompanion: true
        });
      });
      state.effects.push({
        type: "nova",
        x: state.hero.x,
        y: state.hero.y - 24,
        radius: 0,
        maxRadius: 360,
        color: "rgba(126, 221, 248, 0.26)",
        life: 0.6,
        totalLife: 0.6
      });
      flashBattleMessage("澄澈展开【冰镜领域】", 1.4);
      return true;
    }
    case "yelan": {
      const selected = selectTargets(state, 5);
      const points = [{ x: state.hero.x, y: state.hero.y - 32 }];
      selected.forEach((monster, index) => {
        points.push({ x: monster.x, y: monster.y });
        damageMonster(state, monster, 84 + index * 18, {
          color: "#fff19a",
          label: "雷击",
          fromCompanion: true
        });
      });
      state.effects.push({
        type: "chain",
        points,
        life: 0.28,
        totalLife: 0.28
      });
      flashBattleMessage("夜岚引发【雷链裁决】", 1.25);
      return true;
    }
    case "mingsha": {
      const angles = [-0.46, -0.22, 0, 0.22, 0.46];
      angles.forEach((offset) => {
        const angle = -Math.PI / 2 + offset;
        state.bullets.push({
          x: state.hero.x,
          y: state.hero.y - 70,
          vx: Math.cos(angle) * 620,
          vy: Math.sin(angle) * 920,
          radius: 10,
          damage: state.hero.damage * 2.2,
          pierce: 4,
          color: "#ffc2cf",
          label: "樱刃",
          fromHero: false,
          life: 1
        });
      });
      flashBattleMessage("明纱释放【樱刃风暴】", 1.2);
      return true;
    }
    case "lanwei": {
      const target = findClusterTarget(state);
      if (!target) {
        return false;
      }
      [-28, 28].forEach((offset) => {
        spawnBomb(state, {
          x: target.x + offset,
          y: -80,
          targetY: target.y,
          vy: 840,
          damage: 110 + state.hero.damage * 1.3,
          radius: 82,
          color: "#f4bf7c",
          label: "蒸汽",
          slowDuration: 2.2
        });
      });
      flashBattleMessage("岚薇引爆【蒸汽爆缸】", 1.2);
      return true;
    }
    case "shali": {
      const target = findClusterTarget(state);
      if (!target) {
        return false;
      }
      state.zones.push({
        type: "sand",
        x: target.x,
        y: target.y,
        radius: 86,
        life: 4.8,
        dps: 32,
        pulse: 0,
        color: "rgba(255, 217, 138, 0.22)"
      });
      state.effects.push({
        type: "burst",
        x: target.x,
        y: target.y,
        radius: 0,
        maxRadius: 128,
        color: "rgba(255, 214, 140, 0.24)",
        life: 0.4,
        totalLife: 0.4
      });
      flashBattleMessage("砂璃铺开【流砂陷阱】", 1.2);
      return true;
    }
    case "yuege": {
      [-1, 1].forEach((dir) => {
        state.bullets.push({
          x: state.hero.x + dir * 28,
          y: state.hero.y - 64,
          vx: dir * 220,
          vy: -860,
          radius: 12,
          damage: state.hero.damage * 2.6,
          pierce: 6,
          color: "#ffd5c9",
          label: "月刃",
          fromHero: false,
          life: 1.2,
          returnAfter: 0.56
        });
      });
      flashBattleMessage("月歌起舞【弦月回旋】", 1.2);
      return true;
    }
    case "molan": {
      state.effects.push({
        type: "wave",
        y: state.hero.y - 220,
        height: 180,
        offset: 0,
        speed: 660,
        color: "rgba(134, 231, 238, 0.22)",
        life: 0.5,
        totalLife: 0.5
      });
      livingMonsters(state).forEach((monster) => {
        if (monster.y >= state.hero.y - 430) {
          damageMonster(state, monster, 78 + state.hero.damage * 1.25, {
            color: "#9aeff7",
            label: "潮汐",
            fromCompanion: true
          });
        }
      });
      flashBattleMessage("沫澜掀起【潮汐冲刷】", 1.2);
      return true;
    }
    case "xingkui": {
      const selected = selectTargets(state, 6);
      selected.forEach((monster, index) => {
        spawnBomb(state, {
          x: monster.x + (index % 2 === 0 ? -18 : 18),
          y: -90 - index * 18,
          targetY: monster.y,
          vy: 900,
          damage: 88 + state.hero.damage * 1.15,
          radius: 72,
          color: "#d9ff9f",
          label: "星孢"
        });
      });
      flashBattleMessage("星葵播撒【星孢花雨】", 1.25);
      return true;
    }
    case "cangya": {
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.maxHp * 0.16);
      state.hero.barrier += 120;
      selectTargets(state, 3).forEach((monster) => {
        state.effects.push({
          type: "beam",
          points: [{ x: monster.x, y: -10 }, { x: monster.x, y: monster.y }],
          width: 6,
          color: "rgba(220, 233, 255, 0.9)",
          life: 0.22,
          totalLife: 0.22
        });
        damageMonster(state, monster, 120 + state.hero.damage * 1.45, {
          color: "#eef5ff",
          label: "圣辉",
          fromCompanion: true
        });
      });
      flashBattleMessage("苍雅张开【圣辉屏障】", 1.3);
      return true;
    }
    case "qinglu": {
      [-0.36, -0.12, 0.12, 0.36].forEach((offset) => {
        const angle = -Math.PI / 2 + offset;
        state.bullets.push({
          x: state.hero.x,
          y: state.hero.y - 70,
          vx: Math.cos(angle) * 520,
          vy: Math.sin(angle) * 930,
          radius: 10,
          damage: state.hero.damage * 1.65,
          pierce: 2,
          color: "#c8ffd8",
          splash: 18,
          label: "花露",
          fromHero: false,
          life: 1.05
        });
      });
      flashBattleMessage("晴露抛出【花露散射】", 1.15);
      return true;
    }
    case "taoxi": {
      const target = findClusterTarget(state);
      if (!target) {
        return false;
      }
      state.zones.push({
        type: "bubble",
        x: target.x,
        y: target.y,
        radius: 92,
        life: 5.2,
        dps: 26,
        pulse: 0,
        color: "rgba(255, 185, 216, 0.22)"
      });
      livingMonsters(state).forEach((monster) => {
        if (Math.hypot(monster.x - target.x, monster.y - target.y) <= 112) {
          monster.slowUntil = Math.max(monster.slowUntil, state.time + 3.2);
        }
      });
      flashBattleMessage("桃汐展开【潮泡禁域】", 1.18);
      return true;
    }
    case "yunmi": {
      const selected = selectTargets(state, 4);
      if (!selected.length) {
        return false;
      }
      selected.forEach((monster, index) => {
        const dx = monster.x - state.hero.x;
        const dy = monster.y - (state.hero.y - 62);
        const length = Math.max(1, Math.hypot(dx, dy));
        state.bullets.push({
          x: state.hero.x + (index - 1.5) * 12,
          y: state.hero.y - 62,
          vx: dx / length * 760,
          vy: dy / length * 760,
          radius: 10,
          damage: state.hero.damage * 1.9,
          pierce: 1,
          color: "#cbf5ff",
          label: "羽针",
          fromHero: false,
          life: 0.9
        });
      });
      flashBattleMessage("云弥打出【追光羽针】", 1.18);
      return true;
    }
    case "luoye": {
      const selected = selectTargets(state, 4);
      selected.forEach((monster) => {
        monster.freezeUntil = Math.max(monster.freezeUntil, state.time + 2.8);
        damageMonster(state, monster, 72 + state.hero.damage * 0.65, {
          color: "#ddd2ff",
          label: "影缚",
          fromCompanion: true
        });
      });
      flashBattleMessage("洛夜施放【暮影禁锢】", 1.2);
      return true;
    }
    case "qinyao": {
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.maxHp * 0.1);
      state.hero.barrier += 42;
      const target = findClusterTarget(state);
      if (!target) {
        return true;
      }
      [-26, 26].forEach((offset) => {
        spawnBomb(state, {
          x: target.x + offset,
          y: -90,
          targetY: target.y,
          vy: 880,
          damage: 84 + state.hero.damage * 1.1,
          radius: 74,
          color: "#ffd796",
          label: "投送"
        });
      });
      flashBattleMessage("琴瑶完成【和声投送】", 1.2);
      return true;
    }
    case "ruolan": {
      if (!castHighEnergyRay(state, 2)) {
        return false;
      }
      flashBattleMessage("若澜展开【棱镜射界】", 1.22);
      return true;
    }
    case "aisha": {
      if (!castGuidedLaser(state, 2)) {
        return false;
      }
      flashBattleMessage("艾纱发动【星轨惩戒】", 1.22);
      return true;
    }
    case "jinse": {
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.maxHp * 0.14);
      state.hero.barrier += 96;
      if (!castGuidedLaser(state, 3)) {
        return false;
      }
      spawnShockwave(state, state.hero.x, state.hero.y - 48, 182, "rgba(255, 148, 207, 0.28)");
      flashBattleMessage("瑾瑟降下【凰羽圣裁】", 1.3);
      return true;
    }
    default:
      return false;
  }
}

function castThermobaric(state, level) {
  const target = findClusterTarget(state);
  if (!target) {
    return false;
  }
  spawnBomb(state, {
    x: target.x,
    y: -100,
    targetY: target.y,
    vy: 820,
    damage: 95 + level * 52 + state.hero.damage * 1.2,
    radius: 84 + level * 14,
    color: "#ffaf6a",
    label: "温压",
    burnDps: 18 + level * 7
  });
  return true;
}

function castFuelBomb(state, level) {
  const target = findClusterTarget(state);
  if (!target) {
    return false;
  }
  const count = 1 + level;
  for (let index = 0; index < count; index += 1) {
    spawnBomb(state, {
      x: target.x + (index - (count - 1) / 2) * 34,
      y: -80 - index * 18,
      targetY: target.y + index * 10,
      vy: 800,
      damage: 70 + level * 34,
      radius: 64 + level * 8,
      color: "#ff9966",
      label: "燃油",
      createZone: {
        type: "fire",
        life: 4 + level * 0.8,
        radius: 56 + level * 12,
        dps: 24 + level * 10
      }
    });
  }
  return true;
}

function castDryIceBomb(state, level) {
  const target = findPrimaryTarget(state);
  if (!target) {
    return false;
  }
  spawnBomb(state, {
    x: target.x,
    y: -100,
    targetY: target.y,
    vy: 860,
    damage: 84 + level * 36,
    radius: 72 + level * 12,
    color: "#c5f4ff",
    label: "干冰",
    slowDuration: 2.8 + level * 0.5,
    freezeDuration: 1.1 + level * 0.35
  });
  return true;
}

function castIceBurst(state, level) {
  const target = findClusterTarget(state);
  if (!target) {
    return false;
  }
  applyAreaDamage(state, target.x, target.y, 100 + level * 20, 72 + level * 34, {
    color: "#c0f6ff",
    label: "冰爆"
  });
  state.effects.push({
    type: "nova",
    x: target.x,
    y: target.y,
    radius: 0,
    maxRadius: 170 + level * 28,
    color: "rgba(192, 246, 255, 0.24)",
    life: 0.5,
    totalLife: 0.5
  });
  livingMonsters(state).forEach((monster) => {
    if (Math.hypot(monster.x - target.x, monster.y - target.y) <= 110 + level * 20) {
      monster.freezeUntil = Math.max(monster.freezeUntil, state.time + 1.3 + level * 0.35);
    }
  });
  return true;
}

function castElectroSpike(state, level) {
  const target = findPrimaryTarget(state);
  if (!target) {
    return false;
  }
  const points = [{ x: state.hero.x, y: state.hero.y - 36 }, { x: target.x, y: target.y }];
  state.effects.push({
    type: "beam",
    points,
    width: 6 + level * 2,
    color: "rgba(255, 236, 150, 0.88)",
    life: 0.2,
    totalLife: 0.2
  });
  damageLine(state, state.hero.x, state.hero.y - 36, target.x, target.y, 30 + level * 8, 92 + level * 34, {
    color: "#fff19a",
    label: "穿刺"
  });
  return true;
}

function castHighEnergyRay(state, level) {
  const target = findPrimaryTarget(state);
  if (!target) {
    return false;
  }
  const width = 38 + level * 10;
  state.effects.push({
    type: "beam",
    points: [{ x: state.hero.x, y: state.hero.y - 42 }, { x: target.x, y: target.y }],
    width: 10 + level * 3,
    color: "rgba(255, 168, 114, 0.86)",
    life: 0.28,
    totalLife: 0.28
  });
  damageLine(state, state.hero.x, state.hero.y - 42, target.x, target.y, width, 118 + level * 42, {
    color: "#ffd5a2",
    label: "射线"
  });
  forEachMonsterOnLine(state, state.hero.x, state.hero.y - 42, target.x, target.y, width, (monster) => {
    applyBurn(monster, state.time + 1.8 + level * 0.35, 28 + level * 12);
  });
  return true;
}

function castGuidedLaser(state, level) {
  const selected = selectTargets(state, 2 + level);
  if (!selected.length) {
    return false;
  }
  selected.forEach((monster) => {
    state.effects.push({
      type: "beam",
      points: [{ x: monster.x, y: -10 }, { x: monster.x, y: monster.y }],
      width: 5 + level,
      color: "rgba(255, 154, 154, 0.88)",
      life: 0.2,
      totalLife: 0.2
    });
    damageMonster(state, monster, 88 + level * 32 + state.hero.damage * 0.8, {
      color: "#ffd3d3",
      label: "制导"
    });
  });
  return true;
}

function castCycloneCannon(state, level) {
  const bullets = 5 + level * 2;
  const base = state.droneAngle;
  for (let index = 0; index < bullets; index += 1) {
    const angle = -Math.PI / 2 + Math.sin(base + index * 0.9) * 0.5 + (index - bullets / 2) * 0.08;
    state.bullets.push({
      x: state.hero.x + Math.cos(base + index) * 28,
      y: state.hero.y - 70 + Math.sin(base + index) * 12,
      vx: Math.cos(angle) * 520,
      vy: Math.sin(angle) * 920,
      radius: 8,
      damage: 34 + level * 12,
      pierce: 2 + level,
      color: "#ffd9b5",
      label: "旋风",
      fromHero: false,
      life: 1.05
    });
  }
  return true;
}

function castAirdrop(state, level) {
  const count = 3 + level;
  const targets = selectTargets(state, count);
  if (!targets.length) {
    return false;
  }
  targets.forEach((monster, index) => {
    spawnBomb(state, {
      x: monster.x + (index % 2 === 0 ? -24 : 24),
      y: -120 - index * 24,
      targetY: monster.y,
      vy: 960,
      damage: 78 + level * 28,
      radius: 70 + level * 8,
      color: "#ffc789",
      label: "空投"
    });
  });
  return true;
}

function updateDroneWing(state, dt) {
  const level = state.modules.droneWing || 0;
  if (!level) {
    return;
  }
  state.droneClock += dt;
  const interval = Math.max(0.45, 1.02 - level * 0.12);
  if (state.droneClock < interval) {
    return;
  }
  state.droneClock = 0;
  const target = findPrimaryTarget(state);
  if (!target) {
    return;
  }
  getDronePositions(state, level).forEach((position) => {
    const angle = Math.atan2(target.y - position.y, target.x - position.x);
    state.bullets.push({
      x: position.x,
      y: position.y,
      vx: Math.cos(angle) * 760,
      vy: Math.sin(angle) * 760,
      radius: 7,
      damage: 28 + level * 12,
      pierce: 1,
      color: "#9ef4ff",
      label: "无人机",
      fromHero: false,
      life: 1
    });
  });
}

function getDronePositions(state, level) {
  const count = Math.min(3, level);
  const positions = [];
  for (let index = 0; index < count; index += 1) {
    const angle = state.droneAngle + (index / count) * Math.PI * 2;
    positions.push({
      x: state.hero.x + Math.cos(angle) * (54 + level * 6),
      y: state.hero.y - 84 + Math.sin(angle) * 20
    });
  }
  return positions;
}

function spawnBomb(state, config) {
  state.bombs.push({
    x: config.x,
    y: config.y,
    targetY: config.targetY,
    vy: config.vy,
    damage: config.damage,
    radius: config.radius,
    color: config.color,
    label: config.label || "",
    slowDuration: config.slowDuration || 0,
    freezeDuration: config.freezeDuration || 0,
    burnDps: config.burnDps || 0,
    createZone: config.createZone || null,
    life: 3
  });
}

function detonateBomb(state, bomb) {
  applyAreaDamage(state, bomb.x, bomb.targetY, bomb.radius, bomb.damage, {
    color: bomb.color,
    label: bomb.label
  });
  if (bomb.freezeDuration > 0 || bomb.slowDuration > 0 || bomb.burnDps > 0) {
    livingMonsters(state).forEach((monster) => {
      const distance = Math.hypot(monster.x - bomb.x, monster.y - bomb.targetY);
      if (distance > bomb.radius + monster.radius * 0.4) {
        return;
      }
      if (bomb.slowDuration > 0) {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + bomb.slowDuration);
      }
      if (bomb.freezeDuration > 0) {
        monster.freezeUntil = Math.max(monster.freezeUntil, state.time + bomb.freezeDuration);
      }
      if (bomb.burnDps > 0) {
        applyBurn(monster, state.time + 2.6, bomb.burnDps);
      }
    });
  }
  if (bomb.createZone) {
    state.zones.push({
      type: bomb.createZone.type,
      x: bomb.x,
      y: bomb.targetY,
      radius: bomb.createZone.radius,
      life: bomb.createZone.life,
      dps: bomb.createZone.dps,
      pulse: 0,
      color: bomb.color
    });
  }
  state.effects.push({
    type: "burst",
    x: bomb.x,
    y: bomb.targetY,
    radius: 0,
    maxRadius: bomb.radius * 1.55,
    color: hexToRgba(bomb.color, 0.22),
    life: 0.3,
    totalLife: 0.3
  });
}

function takeHeroDamage(state, amount) {
  let remaining = amount;
  if (state.hero.barrier > 0) {
    const absorbed = Math.min(state.hero.barrier, remaining);
    state.hero.barrier -= absorbed;
    remaining -= absorbed;
  }
  if (remaining > 0) {
    state.hero.hp = Math.max(0, state.hero.hp - remaining);
  }
  state.texts.push({
    x: state.hero.x,
    y: state.hero.y - 98,
    text: `-${Math.round(amount)}`,
    color: "#ff9696",
    life: 0.55
  });
}

function livingMonsters(state) {
  return state.monsters.filter((monster) => !monster.dead);
}

function findPrimaryTarget(state) {
  return livingMonsters(state)
    .sort((a, b) => targetPriority(b, state.hero) - targetPriority(a, state.hero))[0];
}

function findClusterTarget(state) {
  const monsters = livingMonsters(state);
  if (!monsters.length) {
    return null;
  }
  return monsters
    .map((monster) => ({
      monster,
      score: monsters.reduce((total, other) => {
        const distance = Math.hypot(monster.x - other.x, monster.y - other.y);
        return total + (distance < 120 ? 1 : 0);
      }, 0) + targetPriority(monster, state.hero) * 0.01
    }))
    .sort((a, b) => b.score - a.score)[0].monster;
}

function selectTargets(state, count) {
  return livingMonsters(state)
    .sort((a, b) => targetPriority(b, state.hero) - targetPriority(a, state.hero))
    .slice(0, count);
}

function targetPriority(monster, hero) {
  return monster.y * 2 + (monster.isBoss ? 180 : 0) + (monster.isElite ? 70 : 0) - distanceToHero(monster, hero) * 0.2;
}

function damageMonster(state, monster, amount, options = {}) {
  if (monster.dead) {
    return;
  }
  const actualDamage = Math.min(monster.hp, amount);
  monster.hp -= amount;
  monster.hitFlash = 1;
  state.stats.totalDamage += actualDamage;
  if (monster.isBoss) {
    state.stats.bossDamage += actualDamage;
  }
  if (!options.silent) {
    state.texts.push({
      x: monster.x,
      y: monster.y - monster.radius - 8,
      text: options.label ? `${options.label} ${Math.round(amount)}` : `${Math.round(amount)}`,
      color: options.color || "#fff2c9",
      life: 0.55
    });
  }
  if (monster.hp <= 0) {
    handleMonsterDeath(state, monster);
  }
}

function handleMonsterDeath(state, monster) {
  if (monster.dead) {
    return;
  }
  monster.dead = true;
  if (monster.isBoss) {
    state.bossDefeated = true;
    spawnShockwave(state, monster.x, monster.y, 260, hexToRgba(state.stageAccent, 0.32));
    finishBattle(true);
    return;
  }
  sound.playMonsterDeath(monster.isElite);
  state.killCount += 1;
  if (monster.isElite) {
    state.stats.eliteKills += 1;
  }
  if (state.hero.onKillRepair > 0) {
    state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.onKillRepair);
  }
  gainXp(state, monster.exp);
  state.effects.push({
    type: "burst",
    x: monster.x,
    y: monster.y,
    radius: 0,
    maxRadius: monster.radius * 2.1,
    color: monster.isElite ? "rgba(255, 212, 110, 0.24)" : "rgba(173, 234, 126, 0.2)",
    life: 0.24,
    totalLife: 0.24
  });
}

function applyAreaDamage(state, x, y, radius, amount, options = {}) {
  livingMonsters(state).forEach((monster) => {
    const distance = Math.hypot(monster.x - x, monster.y - y);
    if (distance > radius + monster.radius * 0.3) {
      return;
    }
    const multiplier = 1 - Math.min(0.35, distance / Math.max(radius, 1) * 0.35);
    damageMonster(state, monster, amount * multiplier, options);
  });
}

function damageLine(state, x1, y1, x2, y2, width, amount, options = {}) {
  livingMonsters(state).forEach((monster) => {
    const distance = pointToSegmentDistance(monster.x, monster.y, x1, y1, x2, y2);
    if (distance > width + monster.radius * 0.2) {
      return;
    }
    damageMonster(state, monster, amount, options);
  });
}

function forEachMonsterOnLine(state, x1, y1, x2, y2, width, callback) {
  livingMonsters(state).forEach((monster) => {
    const distance = pointToSegmentDistance(monster.x, monster.y, x1, y1, x2, y2);
    if (distance > width + monster.radius * 0.2) {
      return;
    }
    callback(monster, distance);
  });
}

function applyBurn(monster, until, dps) {
  monster.burnUntil = Math.max(monster.burnUntil, until);
  monster.burnDps = Math.max(monster.burnDps || 0, dps);
}

function spawnShockwave(state, x, y, maxRadius, color) {
  state.effects.push({
    type: "burst",
    x,
    y,
    radius: 0,
    maxRadius,
    color,
    life: 0.34,
    totalLife: 0.34
  });
}

function flashBattleMessage(text, duration) {
  if (!game) {
    return;
  }
  game.message = { text, until: game.time + duration };
  battleMessage.textContent = text;
  battleMessage.classList.remove("hidden");
}

function renderGame(state) {
  drawBackground(state);
  drawZones(state);
  drawSpawnGate(state);
  state.effects.filter((effect) => effect.type === "wave").forEach(drawEffect);
  state.bombs.forEach(drawBomb);
  state.monsters.forEach((monster) => drawMonster(monster, state));
  state.effects.filter((effect) => effect.type !== "wave").forEach(drawEffect);
  state.bullets.forEach(drawBullet);
  drawDrones(state);
  drawCompanion(state);
  drawHero(state);
  state.texts.forEach(drawText);
  drawBossBar(state);
}

function drawBackground(state) {
  const theme = state.theme;
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, theme.top);
  gradient.addColorStop(0.56, theme.mid);
  gradient.addColorStop(1, theme.bottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = theme.haze;
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.5, canvas.height * 0.14, 240, 110, 0, 0, Math.PI * 2);
  ctx.fill();

  drawThemeScene(state);
  drawAtmosphere(state);

  ctx.fillStyle = "rgba(255,255,255,0.024)";
  roundRectPath(72, 20, canvas.width - 144, canvas.height - 80, 30);
  ctx.fill();

  ctx.strokeStyle = theme.lane;
  ctx.lineWidth = 4;
  roundRectPath(86, 36, canvas.width - 172, canvas.height - 132, 26);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.03)";
  for (let index = 0; index < 9; index += 1) {
    const y = ((index * 132) + (state.time * 110)) % (canvas.height + 120) - 60;
    ctx.fillRect(110, y, canvas.width - 220, 3);
  }

  const defenseGradient = ctx.createLinearGradient(0, canvas.height - 220, 0, canvas.height);
  defenseGradient.addColorStop(0, "rgba(0,0,0,0)");
  defenseGradient.addColorStop(1, hexToRgba(state.stageAccent, 0.18));
  ctx.fillStyle = defenseGradient;
  ctx.fillRect(0, canvas.height - 220, canvas.width, 220);

  ctx.strokeStyle = hexToRgba(state.stageAccent, 0.42);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(76, canvas.height - 174);
  ctx.lineTo(canvas.width - 76, canvas.height - 174);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height - 120, 132, 34, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawThemeScene(state) {
  ctx.save();
  switch (state.stage.themeId) {
    case "neon":
      drawNeonScene(state);
      break;
    case "frost":
      drawFrostScene(state);
      break;
    case "thunder":
      drawThunderScene(state);
      break;
    case "shrine":
      drawShrineScene(state);
      break;
    case "steamdock":
      drawSteamdockScene(state);
      break;
    case "desert":
      drawDesertScene(state);
      break;
    case "opera":
      drawOperaScene(state);
      break;
    case "abysslab":
      drawAbyssScene(state);
      break;
    case "greenhouse":
      drawGreenhouseScene(state);
      break;
    case "skycity":
      drawSkycityScene(state);
      break;
    default:
      break;
  }
  ctx.restore();
}

function drawAtmosphere(state) {
  const config = {
    neon: { count: 10, fall: 32, drift: 36, color: "rgba(255, 128, 180, 0.26)", shape: "spark" },
    frost: { count: 18, fall: 86, drift: 12, color: "rgba(218, 246, 255, 0.32)", shape: "snow" },
    thunder: { count: 14, fall: 120, drift: 8, color: "rgba(188, 204, 255, 0.18)", shape: "rain" },
    shrine: { count: 12, fall: 46, drift: 24, color: "rgba(255, 183, 207, 0.28)", shape: "petal" },
    steamdock: { count: 9, fall: 24, drift: 20, color: "rgba(255, 227, 190, 0.18)", shape: "steam" },
    desert: { count: 18, fall: 18, drift: 64, color: "rgba(255, 220, 156, 0.18)", shape: "sand" },
    opera: { count: 10, fall: 30, drift: 18, color: "rgba(255, 208, 188, 0.2)", shape: "dust" },
    abysslab: { count: 14, fall: 42, drift: 10, color: "rgba(143, 246, 255, 0.24)", shape: "bubble" },
    greenhouse: { count: 16, fall: 28, drift: 32, color: "rgba(213, 255, 166, 0.22)", shape: "spore" },
    skycity: { count: 12, fall: 36, drift: 18, color: "rgba(224, 236, 255, 0.22)", shape: "feather" }
  }[state.stage.themeId];

  if (!config) {
    return;
  }

  ctx.save();
  ctx.fillStyle = config.color;
  ctx.strokeStyle = config.color;
  ctx.lineWidth = 1.5;
  for (let index = 0; index < config.count; index += 1) {
    const x = (index * 61 + state.time * config.drift * (0.5 + (index % 4) * 0.18)) % (canvas.width + 100) - 50;
    const y = (index * 97 + state.time * config.fall * (0.9 + (index % 3) * 0.16)) % (canvas.height + 160) - 80;
    const size = 4 + (index % 4) * 1.8;
    drawAtmosphereParticle(config.shape, x + Math.sin(state.time * 0.8 + index) * 10, y, size, state.time + index);
  }
  ctx.restore();
}

function drawAtmosphereParticle(shape, x, y, size, phase) {
  switch (shape) {
    case "snow":
    case "spore":
    case "bubble":
      ctx.beginPath();
      ctx.arc(x, y, size * (shape === "bubble" ? 0.8 : 0.46), 0, Math.PI * 2);
      shape === "bubble" ? ctx.stroke() : ctx.fill();
      return;
    case "rain":
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x - size * 0.45, y + size * 1.7);
      ctx.stroke();
      return;
    case "petal":
    case "feather":
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.sin(phase * 2) * 0.4);
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.48, size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    case "steam":
      ctx.beginPath();
      ctx.arc(x, y, size * 0.54, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + size * 0.4, y - size * 0.45, size * 0.36, 0, Math.PI * 2);
      ctx.fill();
      return;
    case "sand":
    case "dust":
      ctx.fillRect(x, y, size * 0.7, size * 0.36);
      return;
    case "spark":
    default:
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.lineTo(x + size * 0.5, y);
      ctx.lineTo(x, y + size);
      ctx.lineTo(x - size * 0.5, y);
      ctx.closePath();
      ctx.fill();
  }
}

function drawNeonScene(state) {
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fillRect(18, 260, 82, 290);
  ctx.fillRect(500, 220, 82, 330);
  ctx.fillStyle = "rgba(255, 103, 138, 0.18)";
  ctx.fillRect(42, 300 + Math.sin(state.time * 2) * 8, 36, 88);
  ctx.fillStyle = "rgba(113, 218, 255, 0.18)";
  ctx.fillRect(520, 272, 40, 104);
}

function drawFrostScene(state) {
  ctx.fillStyle = "rgba(198, 238, 255, 0.14)";
  drawPolygon([[52, 590], [82, 468], [110, 590]]);
  drawPolygon([[488, 580], [526, 440], [566, 580]]);
  for (let index = 0; index < 18; index += 1) {
    const x = (index * 37 + state.time * 18) % canvas.width;
    const y = (index * 71 + state.time * 44) % canvas.height;
    ctx.fillRect(x, y, 2, 12);
  }
}

function drawThunderScene(state) {
  ctx.strokeStyle = "rgba(255, 226, 112, 0.18)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(70, 560);
  ctx.lineTo(82, 300);
  ctx.lineTo(118, 180);
  ctx.stroke();
  if (Math.sin(state.time * 5) > 0.5) {
    ctx.strokeStyle = "rgba(255, 238, 156, 0.36)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(452, 110);
    ctx.lineTo(496, 170);
    ctx.lineTo(466, 230);
    ctx.lineTo(514, 302);
    ctx.stroke();
  }
}

function drawShrineScene(_state) {
  ctx.fillStyle = "rgba(255, 198, 210, 0.12)";
  ctx.fillRect(166, 180, 268, 12);
  ctx.fillRect(208, 190, 18, 120);
  ctx.fillRect(374, 190, 18, 120);
  ctx.fillRect(186, 222, 228, 10);
  ctx.beginPath();
  ctx.arc(114, 250, 12, 0, Math.PI * 2);
  ctx.arc(486, 250, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawSteamdockScene(state) {
  ctx.strokeStyle = "rgba(240, 190, 120, 0.18)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(92, 560);
  ctx.lineTo(92, 250);
  ctx.lineTo(170, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(470, 590);
  ctx.lineTo(470, 260);
  ctx.lineTo(390, 220);
  ctx.stroke();
  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.beginPath();
  ctx.arc(174 + Math.sin(state.time * 1.4) * 10, 244, 18, 0, Math.PI * 2);
  ctx.arc(206 + Math.sin(state.time * 1.3) * 12, 214, 12, 0, Math.PI * 2);
  ctx.fill();
}

function drawDesertScene(state) {
  ctx.fillStyle = "rgba(255, 214, 140, 0.12)";
  ctx.beginPath();
  ctx.moveTo(0, 520);
  ctx.quadraticCurveTo(130, 474 + Math.sin(state.time) * 4, 280, 530);
  ctx.quadraticCurveTo(430, 578, 600, 504);
  ctx.lineTo(600, 620);
  ctx.lineTo(0, 620);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(76, 410, 18, 126);
  ctx.fillRect(504, 386, 22, 150);
}

function drawOperaScene(state) {
  ctx.fillStyle = "rgba(108, 18, 44, 0.22)";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(70, 120 + Math.sin(state.time * 1.6) * 6, 0, 340);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(canvas.width, 0);
  ctx.quadraticCurveTo(530, 120 - Math.sin(state.time * 1.6) * 6, canvas.width, 340);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 214, 170, 0.16)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 120, 34, 0, Math.PI * 2);
  ctx.stroke();
}

function drawAbyssScene(state) {
  ctx.strokeStyle = "rgba(142, 238, 244, 0.14)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(84, 180);
  ctx.lineTo(84, 520);
  ctx.moveTo(516, 180);
  ctx.lineTo(516, 520);
  ctx.stroke();
  ctx.fillStyle = "rgba(155, 239, 244, 0.12)";
  for (let index = 0; index < 8; index += 1) {
    const x = index % 2 === 0 ? 98 : 502;
    const y = 560 - (index * 48 + state.time * 40) % 360;
    ctx.beginPath();
    ctx.arc(x + (index % 3) * 8, y, 6 + (index % 3) * 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawGreenhouseScene(state) {
  ctx.strokeStyle = "rgba(197, 255, 174, 0.14)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(160, 420, 120, Math.PI * 0.9, Math.PI * 1.8);
  ctx.arc(440, 420, 120, Math.PI * 1.2, Math.PI * 2.1);
  ctx.stroke();
  ctx.fillStyle = "rgba(196, 248, 138, 0.14)";
  for (let index = 0; index < 10; index += 1) {
    const x = 120 + index * 38;
    const y = 220 + Math.sin(state.time * 2 + index) * 16;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawSkycityScene(state) {
  ctx.fillStyle = "rgba(222, 236, 255, 0.12)";
  ctx.beginPath();
  ctx.ellipse(140, 170 + Math.sin(state.time * 0.8) * 4, 58, 18, 0, 0, Math.PI * 2);
  ctx.ellipse(446, 128 + Math.sin(state.time * 0.9) * 4, 72, 20, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(222, 236, 255, 0.14)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(148, 176);
  ctx.lineTo(452, 140);
  ctx.stroke();
}

function drawSpawnGate(state) {
  const pulse = 1 + Math.sin(state.bgPulse * 2.2) * 0.05;
  ctx.save();
  ctx.translate(canvas.width / 2, 76);
  ctx.scale(pulse, pulse);
  ctx.fillStyle = hexToRgba(state.stageAccent, 0.18);
  ctx.beginPath();
  ctx.ellipse(0, 0, 112, 36, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(state.stageAccent, 0.5);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(0, 0, 98, 24, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawZones(state) {
  state.zones.forEach((zone) => {
    ctx.save();
    ctx.fillStyle = zone.type === "fire"
      ? "rgba(255, 136, 98, 0.18)"
      : zone.type === "bubble"
        ? "rgba(255, 184, 220, 0.16)"
        : "rgba(255, 220, 152, 0.16)";
    ctx.beginPath();
    ctx.arc(zone.x, zone.y, zone.radius + Math.sin(zone.pulse * 3) * 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawBomb(bomb) {
  ctx.save();
  ctx.strokeStyle = hexToRgba(bomb.color, 0.35);
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(bomb.x, bomb.y - 38);
  ctx.lineTo(bomb.x, bomb.y + 6);
  ctx.stroke();
  ctx.fillStyle = bomb.color;
  ctx.beginPath();
  ctx.arc(bomb.x, bomb.y, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMonster(monster, state) {
  const image = spriteCache[monster.sprite];
  const walk = Math.sin(state.time * monster.animSpeed + monster.phase);
  const bob = walk * (monster.isBoss ? 8 : monster.isElite ? 6 : 5);
  const rotation = monster.isBoss ? Math.sin(state.time * 2 + monster.phase) * 0.03 : walk * 0.04;

  ctx.save();
  ctx.fillStyle = monster.isBoss ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.2)";
  ctx.beginPath();
  ctx.ellipse(monster.x, monster.y + monster.height * 0.34, monster.width * 0.24, monster.isBoss ? 18 : 14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (monster.isBoss) {
    ctx.save();
    ctx.fillStyle = hexToRgba(state.stageAccent, 0.14);
    ctx.beginPath();
    ctx.arc(monster.x, monster.y, 88 + Math.sin(state.time * 2 + monster.phase) * 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawSprite(image, monster.x, monster.y + bob, monster.width, monster.height, {
    rotation,
    filter: monster.filter || ""
  });

  if (monster.hitFlash > 0) {
    ctx.save();
    ctx.globalAlpha = monster.hitFlash * 0.18;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(monster.x, monster.y, monster.radius * 1.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (state.time < monster.freezeUntil) {
    ctx.save();
    ctx.strokeStyle = "rgba(176, 242, 255, 0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(monster.x, monster.y, monster.radius * 1.24, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  const hpWidth = monster.isBoss ? 140 : monster.isElite ? 74 : 58;
  const hpY = monster.y - monster.height * 0.56;
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(monster.x - hpWidth / 2, hpY, hpWidth, 8);
  ctx.fillStyle = monster.isBoss ? state.stageAccent : monster.isElite ? "#ffd36d" : "#7de0bb";
  ctx.fillRect(monster.x - hpWidth / 2, hpY, hpWidth * Math.max(0, monster.hp / monster.maxHp), 8);
  if (monster.label) {
    drawPill(monster.x, hpY - 16, monster.label, monster.isBoss ? state.stageAccent : "#ffd36d");
  }
}

function drawBullet(bullet) {
  ctx.save();
  ctx.strokeStyle = bullet.label === "焰羽" ? "rgba(255, 173, 108, 0.35)" : "rgba(255, 231, 184, 0.22)";
  ctx.lineWidth = bullet.radius * 0.9;
  ctx.beginPath();
  ctx.moveTo(bullet.x - bullet.vx * 0.02, bullet.y - bullet.vy * 0.02);
  ctx.lineTo(bullet.x + bullet.vx * 0.006, bullet.y + bullet.vy * 0.006);
  ctx.stroke();
  ctx.fillStyle = bullet.color;
  ctx.beginPath();
  ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDrones(state) {
  const level = state.modules.droneWing || 0;
  if (!level) {
    return;
  }
  getDronePositions(state, level).forEach((position) => {
    ctx.save();
    ctx.fillStyle = "rgba(124, 227, 217, 0.18)";
    ctx.beginPath();
    ctx.ellipse(position.x, position.y + 12, 16, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#9ef4ff";
    roundRectPath(position.x - 10, position.y - 10, 20, 20, 8);
    ctx.fill();
    ctx.restore();
  });
}

function drawCompanion(state) {
  if (!state.companion) {
    return;
  }
  const image = spriteCache[state.companion.art.purified];
  const float = Math.sin(state.time * 3 + 1.2) * 7;
  const x = state.hero.x + 112;
  const y = state.hero.y - 42 + float;
  ctx.save();
  ctx.fillStyle = hexToRgba(state.companion.accent, 0.14);
  ctx.beginPath();
  ctx.ellipse(x, y + 54, 36, 14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  drawSprite(image, x, y, 116, 152, {
    rotation: Math.sin(state.time * 2.8) * 0.03
  });
}

function drawHero(state) {
  const image = spriteCache[HERO_ART];
  const idleBob = Math.sin(state.time * 4.4) * 3;
  const recoil = state.hero.recoil * 8;
  const y = state.hero.y + idleBob + recoil;

  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.24)";
  ctx.beginPath();
  ctx.ellipse(state.hero.x, state.hero.y + 120, 78, 24, 0, 0, Math.PI * 2);
  ctx.fill();
  if (state.hero.barrier > 0) {
    ctx.strokeStyle = "rgba(220, 236, 255, 0.26)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(state.hero.x, state.hero.y + 10, 88, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  drawSprite(image, state.hero.x, y, 178, 250, {
    rotation: -state.hero.recoil * 0.04
  });

  drawUnitHpBar(state.hero.x, y - 146, 104, state.hero.hp, state.hero.maxHp, "#7de0bb", state.hero.barrier);

  if (state.hero.muzzleTimer > 0) {
    const alpha = state.hero.muzzleTimer / 0.08;
    ctx.save();
    ctx.translate(state.hero.x + 62, state.hero.y - 70);
    ctx.rotate(-0.2);
    ctx.fillStyle = `rgba(255, 205, 120, ${0.75 * alpha})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(22, -10);
    ctx.lineTo(46, 0);
    ctx.lineTo(22, 10);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

function drawEffect(effect) {
  ctx.save();
  if (effect.type === "chain" || effect.type === "beam") {
    ctx.strokeStyle = effect.color || "rgba(255, 239, 157, 0.9)";
    ctx.lineWidth = effect.width || 4;
    ctx.beginPath();
    effect.points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
    ctx.restore();
    return;
  }

  if (effect.type === "wave") {
    ctx.fillStyle = effect.color;
    ctx.fillRect(96, effect.y - effect.height / 2 + Math.sin(effect.offset * 0.02) * 8, canvas.width - 192, effect.height);
    ctx.restore();
    return;
  }

  ctx.strokeStyle = effect.color;
  ctx.lineWidth = effect.type === "nova" ? 10 : 6;
  ctx.beginPath();
  ctx.arc(effect.x, effect.y, effect.radius || 12, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawText(text) {
  ctx.save();
  ctx.globalAlpha = Math.max(0, text.life * 1.8);
  ctx.fillStyle = text.color;
  ctx.font = "700 18px PingFang SC";
  ctx.textAlign = "center";
  ctx.fillText(text.text, text.x, text.y);
  ctx.restore();
}

function drawBossBar(state) {
  const boss = state.monsters.find((monster) => monster.isBoss && !monster.dead);
  if (!boss) {
    return;
  }
  const beauty = getBeauty(state.stage.bossBeautyId);
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.44)";
  roundRectPath(90, 28, canvas.width - 180, 22, 11);
  ctx.fill();
  ctx.fillStyle = state.stageAccent;
  roundRectPath(90, 28, (canvas.width - 180) * Math.max(0, boss.hp / boss.maxHp), 22, 11);
  ctx.fill();
  ctx.fillStyle = "#f7f0e8";
  ctx.font = "700 16px PingFang SC";
  ctx.textAlign = "left";
  ctx.fillText(beauty.bossName, 94, 20);
  ctx.restore();
}

function drawSprite(image, x, y, width, height, options = {}) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(options.rotation || 0);
  ctx.scale(options.scaleX || 1, options.scaleY || 1);
  if (options.filter) {
    ctx.filter = options.filter;
  }
  if (image && image.complete && image.naturalWidth) {
    ctx.drawImage(image, -width / 2, -height / 2, width, height);
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    roundRectPath(-width / 2, -height / 2, width, height, 20);
    ctx.fill();
  }
  ctx.restore();
}

function drawPill(x, y, text, color) {
  ctx.save();
  ctx.font = "700 12px PingFang SC";
  const width = ctx.measureText(text).width + 18;
  ctx.fillStyle = "rgba(9, 13, 20, 0.8)";
  roundRectPath(x - width / 2, y - 12, width, 22, 11);
  ctx.fill();
  ctx.strokeStyle = hexToRgba(color, 0.44);
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y - 1);
  ctx.restore();
}

function drawUnitHpBar(x, y, width, hp, maxHp, color, barrier = 0) {
  ctx.save();
  const safeRatio = Math.max(0, Math.min(1, hp / Math.max(1, maxHp)));
  roundRectPath(x - width / 2, y, width, 10, 5);
  ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
  ctx.fill();
  roundRectPath(x - width / 2, y, width * safeRatio, 10, 5);
  ctx.fillStyle = color;
  ctx.fill();
  if (barrier > 0) {
    const barrierWidth = Math.min(width * 0.32, (barrier / Math.max(1, maxHp)) * width);
    roundRectPath(x - width / 2 + width * safeRatio, y, barrierWidth, 10, 5);
    ctx.fillStyle = "rgba(220, 236, 255, 0.76)";
    ctx.fill();
  }
  ctx.restore();
}

function drawPolygon(points) {
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point[0], point[1]);
    } else {
      ctx.lineTo(point[0], point[1]);
    }
  });
  ctx.closePath();
  ctx.fill();
}

function createSoundSystem() {
  let ctx = null;
  let master = null;
  let compressor = null;
  let musicGain = null;
  let fxGain = null;
  let noiseBuffer = null;
  let desiredScene = "menu";
  let activeScene = null;
  let musicTimer = null;
  let musicLoopToken = 0;
  let lastShotAt = 0;
  let lastDeathAt = 0;
  let selectedVoice = null;
  let mandarinVoices = [];
  let activeBossVoice = null;
  const MASTER_GAIN = 0.34;
  const MUSIC_GAIN = 0.66;
  const FX_GAIN = 1.18;

  function ensureStarted() {
    if (!window.AudioContext && !window.webkitAudioContext) {
      return false;
    }
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
      master = ctx.createGain();
      master.gain.value = MASTER_GAIN;
      compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -18;
      compressor.knee.value = 16;
      compressor.ratio.value = 10;
      compressor.attack.value = 0.003;
      compressor.release.value = 0.18;
      musicGain = ctx.createGain();
      musicGain.gain.value = MUSIC_GAIN;
      fxGain = ctx.createGain();
      fxGain.gain.value = FX_GAIN;
      musicGain.connect(master);
      fxGain.connect(master);
      master.connect(compressor);
      compressor.connect(ctx.destination);
      noiseBuffer = createNoiseBuffer(ctx);
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    ensureVoiceLoaded();
    if (activeScene === desiredScene && musicTimer) {
      return true;
    }
    startMusic(desiredScene);
    return true;
  }

  function setScene(scene) {
    desiredScene = scene;
    if (ctx && ctx.state === "running") {
      startMusic(scene);
    }
  }

  function startMusic(scene) {
    if (!ctx) {
      return;
    }
    if (activeScene === scene && musicTimer) {
      return;
    }
    stopMusic();
    activeScene = scene;
    if (musicGain) {
      const now = ctx.currentTime;
      musicGain.gain.cancelScheduledValues(now);
      musicGain.gain.setValueAtTime(Math.min(musicGain.gain.value, MUSIC_GAIN * 0.45), now);
      musicGain.gain.linearRampToValueAtTime(MUSIC_GAIN, now + 0.24);
    }
    musicLoopToken += 1;
    queueMusic(scene, musicLoopToken);
  }

  function stopMusic() {
    if (musicTimer) {
      window.clearTimeout(musicTimer);
      musicTimer = null;
    }
    musicLoopToken += 1;
    if (ctx && musicGain) {
      const now = ctx.currentTime;
      musicGain.gain.cancelScheduledValues(now);
      musicGain.gain.setValueAtTime(MUSIC_GAIN, now);
    }
    activeScene = null;
  }

  function queueMusic(scene, token) {
    if (!ctx || activeScene !== scene || token !== musicLoopToken) {
      return;
    }
    const start = ctx.currentTime + 0.02;
    const loopSeconds = scene === "battle" ? 2.42 : 3.84;
    if (scene === "battle") {
      scheduleBattleLoop(start);
    } else {
      scheduleMenuLoop(start);
    }
    musicTimer = window.setTimeout(() => {
      if (activeScene === scene && token === musicLoopToken) {
        queueMusic(scene, token);
      }
    }, loopSeconds * 1000 - 120);
  }

  function scheduleMenuLoop(start) {
    const chords = [
      [60, 63, 67],
      [56, 60, 63],
      [62, 65, 68],
      [55, 58, 62]
    ];
    chords.forEach((chord, chordIndex) => {
      chord.forEach((note, noteIndex) => {
        playTone(midiToFreq(note), start + chordIndex * 0.96 + noteIndex * 0.12, 0.8, "sine", 0.038, musicGain, {
          attack: 0.06,
          release: 0.28
        });
      });
      playTone(midiToFreq(chord[0] - 12), start + chordIndex * 0.96, 0.92, "triangle", 0.046, musicGain, {
        attack: 0.03,
        release: 0.22
      });
    });
    playNoise(start + 0.06, 0.28, 0.012, musicGain, 1400);
  }

  function scheduleBattleLoop(start) {
    const bassline = [40, 40, 43, 40, 47, 40, 43, 40, 38, 38, 43, 38, 48, 43, 42, 35];
    bassline.forEach((note, index) => {
      const time = start + index * 0.15;
      const accented = index % 4 === 0 || index === 12;
      playTone(midiToFreq(note), time, accented ? 0.2 : 0.16, accented ? "sawtooth" : "triangle", accented ? 0.07 : 0.052, musicGain, {
        attack: 0.006,
        release: 0.06
      });
      playTone(midiToFreq(note - 12), time, 0.18, "sine", accented ? 0.04 : 0.028, musicGain, {
        attack: 0.008,
        release: 0.08
      });
      playNoise(time, accented ? 0.06 : 0.04, accented ? 0.034 : 0.018, musicGain, accented ? 170 : 900);
      if (index % 2 === 1) {
        playNoise(time + 0.055, 0.02, 0.008, musicGain, 3200);
      }
    });
    [64, 62, 60, 57].forEach((note, index) => {
      const time = start + index * 0.6 + 0.08;
      playTone(midiToFreq(note), time, 0.28, "sine", 0.032, musicGain, {
        attack: 0.03,
        release: 0.1
      });
    });
    [71, 72, 74].forEach((note, index) => {
      playTone(midiToFreq(note), start + 0.42 + index * 0.6, 0.18, "triangle", 0.024, musicGain, {
        attack: 0.01,
        release: 0.06
      });
    });
    playNoise(start + 0.02, 0.18, 0.018, musicGain, 140);
  }

  function playHeroShot() {
    if (!ensureStarted()) {
      return;
    }
    if (ctx.currentTime - lastShotAt < 0.05) {
      return;
    }
    lastShotAt = ctx.currentTime;
    playNoise(ctx.currentTime, 0.05, 0.2, fxGain, 1650);
    playTone(148, ctx.currentTime, 0.075, "triangle", 0.13, fxGain, {
      attack: 0.002,
      release: 0.06
    });
    playTone(520, ctx.currentTime + 0.005, 0.04, "sine", 0.045, fxGain, {
      attack: 0.003,
      release: 0.03
    });
    playNoise(ctx.currentTime + 0.008, 0.02, 0.028, fxGain, 4200);
  }

  function playMonsterDeath(isElite) {
    if (!ensureStarted()) {
      return;
    }
    if (ctx.currentTime - lastDeathAt < 0.04) {
      return;
    }
    lastDeathAt = ctx.currentTime;
    playNoise(ctx.currentTime, isElite ? 0.14 : 0.1, isElite ? 0.082 : 0.05, fxGain, isElite ? 420 : 640);
    playTone(isElite ? 104 : 132, ctx.currentTime, isElite ? 0.22 : 0.14, "sine", isElite ? 0.08 : 0.05, fxGain, {
      attack: 0.004,
      release: 0.09
    });
  }

  function playCompanionSkill(id) {
    if (!ensureStarted()) {
      return;
    }
    const roots = {
      hiyori: 75,
      serin: 74,
      yelan: 78,
      mingsha: 77,
      lanwei: 72,
      shali: 73,
      yuege: 76,
      molan: 74,
      xingkui: 79,
      cangya: 81,
      qinglu: 77,
      taoxi: 74,
      yunmi: 79,
      luoye: 71,
      qinyao: 76,
      ruolan: 80,
      aisha: 83,
      jinse: 86
    };
    playVocalCue(midiToFreq(roots[id] || 76), 0.34);
  }

  function playBattleStart() {
    if (!ensureStarted()) {
      return;
    }
    [69, 73, 78].forEach((note, index) => {
      playTone(midiToFreq(note), ctx.currentTime + index * 0.08, 0.24, "sine", 0.08, fxGain, {
        attack: 0.02,
        release: 0.08
      });
    });
    playNoise(ctx.currentTime, 0.1, 0.05, fxGain, 700);
  }

  function playBossAlert() {
    if (!ensureStarted()) {
      return;
    }
    duckMusic(0.66, 2.1);
    playNoise(ctx.currentTime, 0.24, 0.11, fxGain, 520);
    playTone(164, ctx.currentTime, 0.4, "triangle", 0.13, fxGain, {
      attack: 0.01,
      release: 0.12
    });
    playTone(246, ctx.currentTime + 0.18, 0.3, "sine", 0.085, fxGain, {
      attack: 0.01,
      release: 0.08
    });
  }

  function playVictory() {
    if (!ensureStarted()) {
      return;
    }
    [72, 76, 79, 84].forEach((note, index) => {
      playTone(midiToFreq(note), ctx.currentTime + index * 0.11, 0.32, "sine", 0.085, fxGain, {
        attack: 0.03,
        release: 0.1
      });
    });
  }

  function playDefeat() {
    if (!ensureStarted()) {
      return;
    }
    [58, 54, 49].forEach((note, index) => {
      playTone(midiToFreq(note), ctx.currentTime + index * 0.13, 0.34, "triangle", 0.085, fxGain, {
        attack: 0.02,
        release: 0.12
      });
    });
    playNoise(ctx.currentTime + 0.1, 0.22, 0.07, fxGain, 500);
  }

  function playVocalCue(frequency, duration) {
    const start = ctx.currentTime;
    const voiceGain = ctx.createGain();
    voiceGain.gain.value = 0;
    voiceGain.connect(fxGain);
    voiceGain.gain.linearRampToValueAtTime(0.13, start + 0.03);
    voiceGain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    [1, 2.02, 3.04].forEach((ratio, index) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = [850, 1220, 2550][index];
      filter.Q.value = 7;
      osc.type = index === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(frequency * ratio, start);
      osc.frequency.exponentialRampToValueAtTime(frequency * ratio * 1.07, start + duration * 0.6);
      osc.connect(filter);
      filter.connect(voiceGain);
      osc.start(start);
      osc.stop(start + duration);
    });
  }

  function playTone(frequency, start, duration, type, volume, destination, envelope = {}) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const attack = envelope.attack ?? 0.015;
    const release = envelope.release ?? 0.05;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + attack);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume * 0.42), Math.max(start + attack + 0.01, start + duration - release));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain);
    gain.connect(destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  }

  function playNoise(start, duration, volume, destination, filterFrequency) {
    if (!noiseBuffer) {
      return;
    }
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    source.buffer = noiseBuffer;
    filter.type = "bandpass";
    filter.frequency.value = filterFrequency;
    filter.Q.value = 0.8;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    source.start(start);
    source.stop(start + duration + 0.02);
  }

  function createNoiseBuffer(audioContext) {
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.6, audioContext.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let index = 0; index < channel.length; index += 1) {
      channel[index] = (Math.random() * 2 - 1) * 0.7;
    }
    return buffer;
  }

  function midiToFreq(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  function ensureVoiceLoaded() {
    if (!("speechSynthesis" in window) || selectedVoice) {
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
      window.speechSynthesis.onvoiceschanged = () => {
        const loadedVoices = window.speechSynthesis.getVoices();
        const resolved = resolveVoices(loadedVoices);
        mandarinVoices = resolved.mandarinVoices;
        selectedVoice = resolved.defaultVoice;
      };
      return;
    }
    const resolved = resolveVoices(voices);
    mandarinVoices = resolved.mandarinVoices;
    selectedVoice = resolved.defaultVoice;
  }

  function resolveVoices(voices) {
    const availableMandarinVoices = voices.filter((voice) => {
      const label = `${voice.name} ${voice.lang}`;
      return /(zh-CN|cmn-CN|cmn-Hans-CN|Mandarin|Putonghua|Xiaoyi|Tingting|Xiaoxiao|Xiaohan|Xiaomeng|Yunxi|Yunxia|Yunjian)/i.test(label)
        && !/(zh-HK|Cantonese|Yue|Sin-ji|HiuMaan|Mei-Jia)/i.test(label);
    });
    const defaultVoice = availableMandarinVoices.find((voice) => /female|xiaoyi|tingting|xiaoxiao|xiaohan|xiaomeng|mei|yan/i.test(voice.name))
      || availableMandarinVoices[0]
      || voices.find((voice) => /^zh(?!-HK)/i.test(voice.lang))
      || null;
    return {
      mandarinVoices: availableMandarinVoices,
      defaultVoice
    };
  }

  function getBossSpeechStyle(beautyId) {
    return ({
      hiyori: { pitch: 1.08, rate: 0.96, volume: 0.8, voiceIndex: 0 },
      serin: { pitch: 0.82, rate: 0.84, volume: 0.74, voiceIndex: 1 },
      yelan: { pitch: 0.9, rate: 0.92, volume: 0.8, voiceIndex: 2 },
      mingsha: { pitch: 1.02, rate: 0.9, volume: 0.77, voiceIndex: 3 },
      lanwei: { pitch: 0.76, rate: 0.82, volume: 0.76, voiceIndex: 4 },
      shali: { pitch: 0.95, rate: 0.86, volume: 0.79, voiceIndex: 5 },
      yuege: { pitch: 1.12, rate: 0.98, volume: 0.82, voiceIndex: 6 },
      molan: { pitch: 0.8, rate: 0.8, volume: 0.75, voiceIndex: 7 },
      xingkui: { pitch: 1.18, rate: 1.02, volume: 0.83, voiceIndex: 8 },
      cangya: { pitch: 0.72, rate: 0.78, volume: 0.78, voiceIndex: 9 }
    })[beautyId] || { pitch: 1, rate: 0.9, volume: 0.78, voiceIndex: 0 };
  }

  function speakBossLine(text, beautyId) {
    const voiceAsset = bossVoiceCache[beautyId];
    if (voiceAsset) {
      cancelSpeech();
      const clip = voiceAsset.cloneNode();
      clip.volume = 0.92;
      activeBossVoice = clip;
      clip.onended = () => {
        if (activeBossVoice === clip) {
          activeBossVoice = null;
        }
      };
      duckMusic(0.58, Math.max(2.4, (clip.duration || 2.8) + 0.3));
      clip.play().catch(() => {
        if (activeBossVoice === clip) {
          activeBossVoice = null;
        }
        playSynthBossLine(text, beautyId);
      });
      return;
    }
    playSynthBossLine(text, beautyId);
  }

  function playSynthBossLine(text, beautyId) {
    if (!("speechSynthesis" in window)) {
      return;
    }
    ensureVoiceLoaded();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const speechStyle = getBossSpeechStyle(beautyId);
    if (mandarinVoices.length) {
      utterance.voice = mandarinVoices[speechStyle.voiceIndex % mandarinVoices.length];
    } else if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.lang = "zh-CN";
    utterance.rate = speechStyle.rate;
    utterance.volume = speechStyle.volume;
    utterance.pitch = speechStyle.pitch;
    const estimatedDuration = Math.max(2.2, (text.length / Math.max(0.72, speechStyle.rate)) * 0.34);
    duckMusic(0.62, estimatedDuration + 0.2);
    window.speechSynthesis.speak(utterance);
  }

  function cancelSpeech() {
    if (activeBossVoice) {
      activeBossVoice.pause();
      activeBossVoice.currentTime = 0;
      activeBossVoice = null;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function duckMusic(ratio, duration) {
    if (!musicGain || !ctx) {
      return;
    }
    const now = ctx.currentTime;
    musicGain.gain.cancelScheduledValues(now);
    musicGain.gain.setValueAtTime(musicGain.gain.value, now);
    musicGain.gain.linearRampToValueAtTime(MUSIC_GAIN * ratio, now + 0.05);
    musicGain.gain.linearRampToValueAtTime(MUSIC_GAIN, now + duration);
  }

  return {
    ensureStarted,
    setScene,
    playHeroShot,
    playMonsterDeath,
    playCompanionSkill,
    playBattleStart,
    playBossAlert,
    speakBossLine,
    cancelSpeech,
    playVictory,
    playDefeat
  };
}

function createSkillIcon(label, startColor, endColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${startColor}"/>
          <stop offset="100%" stop-color="${endColor}"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="88" height="88" rx="24" fill="#081018"/>
      <rect x="8" y="8" width="80" height="80" rx="20" fill="url(#g)"/>
      <circle cx="48" cy="42" r="20" fill="rgba(255,255,255,0.14)"/>
      <path d="M24 62c10-9 16-13 24-13s14 4 24 13" fill="none" stroke="rgba(255,255,255,0.42)" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 30l12-10M66 30L54 20M48 18v12" fill="none" stroke="rgba(255,255,255,0.34)" stroke-width="4" stroke-linecap="round"/>
      <text x="48" y="74" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#081018">${label}</text>
      <text x="48" y="72" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="rgba(255,255,255,0.96)">${label}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createStageSceneIllustration(stage) {
  const preset = STAGE_SCENE_PRESETS[stage.themeId] || STAGE_SCENE_PRESETS.neon;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320">
      <defs>
        <linearGradient id="sky-${stage.id}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${preset.skyTop}"/>
          <stop offset="48%" stop-color="${preset.skyMid}"/>
          <stop offset="100%" stop-color="${preset.skyBottom}"/>
        </linearGradient>
        <radialGradient id="glow-${stage.id}" cx="50%" cy="20%" r="46%">
          <stop offset="0%" stop-color="${preset.glow}" stop-opacity=".42"/>
          <stop offset="55%" stop-color="${preset.glow}" stop-opacity=".08"/>
          <stop offset="100%" stop-color="${preset.glow}" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="mist-${stage.id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${preset.mist}" stop-opacity=".02"/>
          <stop offset="50%" stop-color="${preset.mist}" stop-opacity=".18"/>
          <stop offset="100%" stop-color="${preset.mist}" stop-opacity=".02"/>
        </linearGradient>
      </defs>
      <rect width="600" height="320" fill="url(#sky-${stage.id})"/>
      <rect width="600" height="320" fill="url(#glow-${stage.id})"/>
      <circle cx="458" cy="72" r="42" fill="${preset.moon}" opacity=".26"/>
      <circle cx="458" cy="72" r="64" fill="${preset.moon}" opacity=".08"/>
      <g opacity=".98">${preset.far}</g>
      <g opacity=".98">${preset.mid}</g>
      <path d="M0 224C72 206 146 246 228 220C312 194 382 246 460 220C526 198 566 214 600 206V320H0Z" fill="url(#mist-${stage.id})"/>
      <g opacity=".98">${preset.near}</g>
      <path d="M0 276C82 248 158 306 240 274C316 244 394 304 472 272C542 244 578 266 600 258V320H0Z" fill="rgba(255,255,255,.03)"/>
      <path d="M0 292C64 268 128 322 208 286C290 248 372 318 454 284C526 256 570 300 600 286V320H0Z" fill="rgba(0,0,0,.34)"/>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getStageSceneArt(stageId) {
  return STAGE_SCENE_ART[stageId] || STAGE_SCENE_ART[1];
}

function getSelectedCompanion() {
  return ALL_BEAUTIES.find((beauty) => beauty.id === progress.selectedCompanionId && isBeautyOwned(beauty.id)) || null;
}

function getBeauty(id) {
  return ALL_BEAUTIES.find((beauty) => beauty.id === id);
}

function getStage(id) {
  return STAGES.find((stage) => stage.id === id);
}

function getCorruptArtPath(beauty) {
  return beauty.art.corrupt || beauty.art.purified;
}

function beautyNeedsCorruptFilter(beauty) {
  return beauty.source !== "summon" && !beauty.art.corrupt;
}

function getUpgradeLevel(state, id) {
  return state.upgrades[id] || 0;
}

function isStageUnlocked(stageId) {
  if (!getStage(stageId)) {
    return false;
  }
  return stageId === 1 || progress.clearedStages.includes(stageId - 1);
}

function distanceToHero(monster, hero) {
  return Math.hypot(monster.x - hero.x, monster.y - hero.y);
}

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) {
    return Math.hypot(px - x1, py - y1);
  }
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
  const closestX = x1 + t * dx;
  const closestY = y1 + t * dy;
  return Math.hypot(px - closestX, py - closestY);
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const full = normalized.length === 3 ? normalized.split("").map((char) => char + char).join("") : normalized;
  const value = Number.parseInt(full, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function roundRectPath(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}
