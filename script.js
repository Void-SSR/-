const STORAGE_KEY = "rescue-beauties-save-v3";
const LEGACY_STORAGE_KEYS = ["rescue-beauties-save-v2", "rescue-beauties-save-v1"];
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
      return `第 ${nextLevel} 级：命中后附加更大的小范围爆裂。`;
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
      return `第 ${nextLevel} 级：子弹附带减速，持续时间提升。`;
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
      return `第 ${nextLevel} 级：对 Boss 与精英的伤害提升。`;
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
      return `第 ${nextLevel} 级：击杀普通怪可回复少量生命。`;
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
      return nextLevel === 1 ? "解锁周期性温压爆弹，轰击密集怪群。" : `升至 ${nextLevel} 级：爆炸伤害、范围与灼烧同步提升。`;
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
      return nextLevel === 1 ? "解锁燃油弹，落地后形成持续灼烧区域。" : `升至 ${nextLevel} 级：燃烧区域变大且持续更久。`;
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
      return nextLevel === 1 ? "解锁干冰弹，对落点周围敌人造成冻结冲击。" : `升至 ${nextLevel} 级：冻结持续更久，伤害更高。`;
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
      return nextLevel === 1 ? "解锁冰爆发生器，周期性冻结前场。" : `升至 ${nextLevel} 级：冰爆半径和伤害同步提升。`;
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
      return nextLevel === 1 ? "解锁电磁穿刺，发射一条贯穿型能量刺线。" : `升至 ${nextLevel} 级：穿刺宽度和伤害提高。`;
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
      return nextLevel === 1 ? "解锁高能射线，锁定前方目标并持续灼烧一线。" : `升至 ${nextLevel} 级：射线更宽、伤害更高。`;
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
      return nextLevel === 1 ? "解锁制导激光，对高威胁敌人降下精准光束。" : `升至 ${nextLevel} 级：每轮打击更多目标。`;
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
      return nextLevel === 1 ? "解锁旋风加农，周期性发出旋转弹幕。" : `升至 ${nextLevel} 级：每轮弹数与伤害增加。`;
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
      return nextLevel === 1 ? "解锁空投轰炸，从上方多点投下爆弹。" : `升至 ${nextLevel} 级：轰炸点和范围提升。`;
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
      return nextLevel === 1 ? "解锁无人机伴飞，持续自动补枪。" : `升至 ${nextLevel} 级：无人机数量与火力同步提高。`;
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

const SPRITE_PATHS = Array.from(new Set([
  HERO_ART,
  MONSTER_ART.goblin,
  MONSTER_ART.elite,
  ...BEAUTIES.flatMap((beauty) => [beauty.art.purified, beauty.art.corrupt || beauty.art.purified])
]));

const spriteCache = {};
let progress = loadProgress();
let game = null;
let lastTimestamp = 0;
let pendingUpgrades = 0;
let resultContext = null;
let pendingStageId = null;
let storyState = null;
let bossIntroTimer = null;

const homeScreen = document.getElementById("homeScreen");
const battleScreen = document.getElementById("battleScreen");
const summaryStrip = document.getElementById("summaryStrip");
const currentCompanion = document.getElementById("currentCompanion");
const companionChoices = document.getElementById("companionChoices");
const stageGrid = document.getElementById("stageGrid");
const beautyLibrary = document.getElementById("beautyLibrary");
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
const stageIntroBossArt = document.getElementById("stageIntroBossArt");
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
const resultPrimaryButton = document.getElementById("resultPrimaryButton");
const resultSecondaryButton = document.getElementById("resultSecondaryButton");
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
}

function bindEvents() {
  document.addEventListener("pointerdown", () => {
    sound.ensureStarted();
  }, { passive: true });

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
}

function createDefaultProgress() {
  return {
    rescued: [],
    clearedStages: [],
    selectedCompanionId: null,
    introWatched: false
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
    return {
      rescued: Array.isArray(parsed.rescued) ? parsed.rescued.filter(isBeautyKnown) : [],
      clearedStages: Array.isArray(parsed.clearedStages)
        ? parsed.clearedStages.filter((id) => STAGES.some((stage) => stage.id === id))
        : [],
      selectedCompanionId: isBeautyKnown(parsed.selectedCompanionId) ? parsed.selectedCompanionId : null,
      introWatched: Boolean(parsed.introWatched)
    };
  } catch (_error) {
    return createDefaultProgress();
  }
}

function saveProgress() {
  if (progress.selectedCompanionId && !progress.rescued.includes(progress.selectedCompanionId)) {
    progress.selectedCompanionId = null;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function isBeautyKnown(id) {
  return BEAUTIES.some((beauty) => beauty.id === id);
}

function showScreen(name) {
  homeScreen.classList.toggle("screen-active", name === "home");
  battleScreen.classList.toggle("screen-active", name === "battle");
  sound.setScene(name === "battle" ? "battle" : "menu");
}

function renderHome() {
  showScreen("home");
  renderSummary();
  renderCompanions();
  renderStages();
  renderLibrary();
}

function renderSummary() {
  const rescuedCount = progress.rescued.length;
  const clearedCount = progress.clearedStages.length;
  const selected = getSelectedCompanion();
  summaryStrip.innerHTML = `
    <div class="summary-chip"><span>已净化 Boss</span><strong>${rescuedCount}/${BEAUTIES.length}</strong></div>
    <div class="summary-chip"><span>已通关关卡</span><strong>${clearedCount}/${STAGES.length}</strong></div>
    <div class="summary-chip"><span>当前辅佐</span><strong>${selected ? selected.name : "未携带"}</strong></div>
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
        <img src="${selected.art.purified}" alt="${selected.name}净化形态" class="current-companion-art">
        <div>
          <p class="section-kicker">已编组</p>
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

  BEAUTIES.filter((beauty) => progress.rescued.includes(beauty.id)).forEach((beauty) => {
    buttons.push(`
      <button class="choice-button with-art ${progress.selectedCompanionId === beauty.id ? "is-selected" : ""}" data-beauty-id="${beauty.id}">
        <img src="${beauty.art.purified}" alt="${beauty.name}" class="choice-avatar">
        <div>
          <span>${beauty.name}</span>
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
    const beauty = getBeauty(stage.bossBeautyId);
    const unlocked = isStageUnlocked(stage.id);
    const cleared = progress.clearedStages.includes(stage.id);
    const bossArt = getCorruptArtPath(beauty);
    const filterClass = beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : "";
    return `
      <article class="stage-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(stage.accent, unlocked ? 0.18 : 0.08)};">
        <div class="stage-top">
          <span class="stage-number">第 ${stage.id} 章</span>
          <span class="stage-status">${!unlocked ? "未解锁" : cleared ? "已净化" : "待净化"}</span>
        </div>
        <div class="stage-art-wrap">
          <div class="stage-theme-panel ${stage.themeClass}">
            <div class="scene-layer scene-layer-a"></div>
            <div class="scene-layer scene-layer-b"></div>
            <div class="scene-layer scene-layer-c"></div>
            <img src="${bossArt}" alt="${beauty.bossName}" class="stage-boss-art ${filterClass}">
          </div>
          <div>
            <h3>${stage.name}</h3>
            <p>${unlocked ? stage.description : `需先完成第 ${stage.id - 1} 章，才能进入这一座哥布林之巢。`}</p>
            <div class="stage-meta">
              <span class="meta-pill">场景 ${stage.sceneName}</span>
              <span class="meta-pill">威胁 ${stage.danger}</span>
              <span class="meta-pill">Boss ${beauty.bossName}</span>
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

function renderLibrary() {
  beautyLibrary.innerHTML = BEAUTIES.map((beauty, index) => {
    const unlocked = progress.rescued.includes(beauty.id);
    const stage = getStage(beauty.stageId);
    const bossArt = getCorruptArtPath(beauty);
    const filterClass = beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : "";
    return `
      <article class="beauty-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(beauty.accent, unlocked ? 0.22 : 0.08)};">
        <div class="beauty-top">
          <div>
            <span class="beauty-badge">${unlocked ? "已净化" : `目标 ${index + 1}`}</span>
            <h3>${unlocked ? beauty.name : "未净化目标"}</h3>
          </div>
          <span class="meta-pill">${unlocked ? beauty.title : "资料封锁中"}</span>
        </div>
        <div class="portrait-strip">
          <div class="portrait-state">
            <img src="${bossArt}" alt="${beauty.bossName}" class="${filterClass}">
            <div class="portrait-label">黑化 Boss</div>
          </div>
          <div class="portrait-state">
            <img src="${beauty.art.purified}" alt="${beauty.name}">
            <div class="portrait-label">净化辅佐</div>
          </div>
        </div>
        <p>${unlocked ? beauty.profile : "她仍被困在哥布林之巢深处。通关对应主线后，才能完整收录这一位美少女的档案。"}</p>
        <div class="beauty-meta">
          <span class="meta-pill">${stage ? stage.name : "未知关卡"}</span>
          <span class="meta-pill">${unlocked ? beauty.skillName : "技能未知"}</span>
          <span class="meta-pill">${unlocked ? "已可出战" : "待净化"}</span>
        </div>
        <p>${unlocked ? `${beauty.skillName}：${beauty.skillDesc}` : "净化后，她会以辅佐身份加入队伍，并在战斗中自动施放专属技能。"}</p>
      </article>
    `;
  }).join("");
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
      title: "英雄的救援行动开始",
      text: "你的任务，是闯入各地哥布林之巢，击退怪潮，净化 Boss，把美少女从黑化中救回来，并让她们成为你的战斗辅佐。",
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
  const beauty = getBeauty(stage.bossBeautyId);
  const bossArt = getCorruptArtPath(beauty);
  pendingStageId = stageId;
  stageIntroArt.className = `stage-intro-art ${stage.themeClass}`;
  stageIntroBossArt.src = bossArt;
  stageIntroBossArt.className = `stage-intro-boss-art ${beautyNeedsCorruptFilter(beauty) ? "is-corrupt-filter" : ""}`;
  stageIntroTitle.textContent = `第 ${stage.id} 章 · ${stage.name}`;
  stageIntroText.textContent = stage.previewText;
  stageIntroMeta.innerHTML = `
    <span class="meta-pill">场景 ${stage.sceneName}</span>
    <span class="meta-pill">威胁 ${stage.danger}</span>
    <span class="meta-pill">Boss ${beauty.bossName}</span>
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
    closeBossIntro();
    spawnBoss(game);
    game.paused = false;
    flashBattleMessage(`${beauty.bossName}：${beauty.taunt}`, 2);
  }, 2300);
}

function closeBossIntro() {
  if (bossIntroTimer) {
    window.clearTimeout(bossIntroTimer);
    bossIntroTimer = null;
  }
  sound.cancelSpeech();
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
  return {
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
  if (victory) {
    const beauty = getBeauty(game.stage.bossBeautyId);
    if (!progress.rescued.includes(beauty.id)) {
      progress.rescued.push(beauty.id);
      unlockedBeauty = beauty;
    }
    if (!progress.clearedStages.includes(game.stage.id)) {
      progress.clearedStages.push(game.stage.id);
    }
    if (!progress.selectedCompanionId) {
      progress.selectedCompanionId = beauty.id;
    }
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
    retryStageId: game.stage.id
  };

  resultKicker.textContent = victory ? "净化成功" : "防线失守";
  resultTitle.textContent = victory ? `成功净化 ${getBeauty(game.stage.bossBeautyId).bossName}` : "本次行动失败";
  resultText.textContent = victory
    ? (unlockedBeauty
      ? `${unlockedBeauty.name} 已加入美女库，并解锁专属技能【${unlockedBeauty.skillName}】。下一章已开放。`
      : "该 Boss 已完成净化，本次挑战会记入重战记录。")
    : "哥布林怪潮击穿了防线。调整编组和技能路线后，再试一次。";
  resultPrimaryButton.textContent = "返回主界面";
  resultSecondaryButton.textContent = nextStage ? `挑战第 ${nextStage} 章` : victory ? "再次挑战" : "重整后再战";
  resultModal.classList.remove("hidden");
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
      <p>这一局完全依赖主角火力和升级卡成长。</p>
    `;
    return;
  }

  const cooldownLeft = Math.max(0, getCompanionCooldown(game) - (game.time - game.hero.companionCastAt));
  battleCompanionStatus.innerHTML = `
    <div class="companion-status-layout">
      <img src="${game.companion.art.purified}" alt="${game.companion.name}" class="companion-art">
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
        description: meta.description,
        cooldownText: remaining > 0 ? `${remaining.toFixed(1)}s` : "自动就绪",
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
        <div class="skill-item">
          <div class="skill-item-icon">
            <img src="${skill.icon}" alt="${skill.name}">
            <span class="skill-item-level">Lv.${skill.level}</span>
          </div>
          <div class="skill-item-main">
            <strong>${skill.name}</strong>
            <span>${skill.description}</span>
          </div>
          <div class="skill-item-cd ${skill.cooling ? "cooling" : ""}">${skill.cooldownText}</div>
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
  state.effects.push({
    type: "beam",
    points: [{ x: state.hero.x, y: state.hero.y - 42 }, { x: target.x, y: target.y }],
    width: 10 + level * 3,
    color: "rgba(255, 168, 114, 0.86)",
    life: 0.28,
    totalLife: 0.28
  });
  damageLine(state, state.hero.x, state.hero.y - 42, target.x, target.y, 38 + level * 10, 118 + level * 42, {
    color: "#ffd5a2",
    label: "射线"
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
  monster.hp -= amount;
  monster.hitFlash = 1;
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
  let musicGain = null;
  let fxGain = null;
  let noiseBuffer = null;
  let desiredScene = "menu";
  let activeScene = null;
  let musicTimer = null;
  let lastShotAt = 0;
  let lastDeathAt = 0;
  let selectedVoice = null;

  function ensureStarted() {
    if (!window.AudioContext && !window.webkitAudioContext) {
      return false;
    }
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
      master = ctx.createGain();
      master.gain.value = 0.22;
      musicGain = ctx.createGain();
      musicGain.gain.value = 0.46;
      fxGain = ctx.createGain();
      fxGain.gain.value = 0.92;
      musicGain.connect(master);
      fxGain.connect(master);
      master.connect(ctx.destination);
      noiseBuffer = createNoiseBuffer(ctx);
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    ensureVoiceLoaded();
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
    if (!ctx || activeScene === scene) {
      return;
    }
    stopMusic();
    activeScene = scene;
    queueMusic(scene);
  }

  function stopMusic() {
    if (musicTimer) {
      window.clearTimeout(musicTimer);
      musicTimer = null;
    }
    activeScene = null;
  }

  function queueMusic(scene) {
    if (!ctx || activeScene !== scene) {
      return;
    }
    const start = ctx.currentTime + 0.02;
    const loopSeconds = scene === "battle" ? 2.7 : 3.6;
    if (scene === "battle") {
      scheduleBattleLoop(start);
    } else {
      scheduleMenuLoop(start);
    }
    musicTimer = window.setTimeout(() => {
      if (activeScene === scene) {
        queueMusic(scene);
      }
    }, loopSeconds * 1000 - 120);
  }

  function scheduleMenuLoop(start) {
    const chords = [
      [62, 66, 69],
      [59, 62, 66],
      [64, 67, 71],
      [57, 61, 64]
    ];
    chords.forEach((chord, chordIndex) => {
      chord.forEach((note, noteIndex) => {
        playTone(midiToFreq(note), start + chordIndex * 0.92 + noteIndex * 0.14, 0.74, "sine", 0.028, musicGain, {
          attack: 0.08,
          release: 0.24
        });
      });
      playTone(midiToFreq(chord[0] - 12), start + chordIndex * 0.92, 0.88, "triangle", 0.03, musicGain, {
        attack: 0.03,
        release: 0.2
      });
    });
    playNoise(start + 0.06, 0.2, 0.006, musicGain, 1800);
  }

  function scheduleBattleLoop(start) {
    const sequence = [45, 45, 48, 50, 52, 50, 48, 45];
    sequence.forEach((note, index) => {
      const time = start + index * 0.3;
      playTone(midiToFreq(note), time, 0.2, "triangle", 0.04, musicGain, {
        attack: 0.01,
        release: 0.08
      });
      if (index % 2 === 0) {
        playTone(midiToFreq(note + 12), time + 0.08, 0.18, "sine", 0.018, musicGain, {
          attack: 0.02,
          release: 0.08
        });
      }
      playNoise(time, 0.05, 0.02, musicGain, 170);
    });
    [57, 60, 64, 67].forEach((note, index) => {
      playTone(midiToFreq(note), start + 0.15 + index * 0.6, 0.34, "sine", 0.022, musicGain, {
        attack: 0.04,
        release: 0.14
      });
    });
    playNoise(start + 0.02, 0.11, 0.012, musicGain, 900);
  }

  function playHeroShot() {
    if (!ensureStarted()) {
      return;
    }
    if (ctx.currentTime - lastShotAt < 0.05) {
      return;
    }
    lastShotAt = ctx.currentTime;
    playNoise(ctx.currentTime, 0.045, 0.12, fxGain, 2100);
    playTone(180, ctx.currentTime, 0.06, "triangle", 0.08, fxGain, {
      attack: 0.002,
      release: 0.05
    });
    playTone(760, ctx.currentTime + 0.004, 0.03, "sine", 0.03, fxGain, {
      attack: 0.003,
      release: 0.02
    });
  }

  function playMonsterDeath(isElite) {
    if (!ensureStarted()) {
      return;
    }
    if (ctx.currentTime - lastDeathAt < 0.04) {
      return;
    }
    lastDeathAt = ctx.currentTime;
    playNoise(ctx.currentTime, isElite ? 0.12 : 0.08, isElite ? 0.055 : 0.035, fxGain, isElite ? 540 : 760);
    playTone(isElite ? 120 : 150, ctx.currentTime, isElite ? 0.18 : 0.12, "sine", isElite ? 0.055 : 0.035, fxGain, {
      attack: 0.004,
      release: 0.08
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
      cangya: 81
    };
    playVocalCue(midiToFreq(roots[id] || 76), 0.34);
  }

  function playBattleStart() {
    if (!ensureStarted()) {
      return;
    }
    [69, 73, 78].forEach((note, index) => {
      playTone(midiToFreq(note), ctx.currentTime + index * 0.08, 0.22, "sine", 0.05, fxGain, {
        attack: 0.02,
        release: 0.08
      });
    });
    playNoise(ctx.currentTime, 0.08, 0.03, fxGain, 700);
  }

  function playBossAlert() {
    if (!ensureStarted()) {
      return;
    }
    duckMusic(0.4, 2.1);
    playNoise(ctx.currentTime, 0.2, 0.07, fxGain, 560);
    playTone(164, ctx.currentTime, 0.36, "triangle", 0.09, fxGain, {
      attack: 0.01,
      release: 0.12
    });
    playTone(246, ctx.currentTime + 0.18, 0.28, "sine", 0.06, fxGain, {
      attack: 0.01,
      release: 0.08
    });
  }

  function playVictory() {
    if (!ensureStarted()) {
      return;
    }
    [72, 76, 79, 84].forEach((note, index) => {
      playTone(midiToFreq(note), ctx.currentTime + index * 0.11, 0.32, "sine", 0.06, fxGain, {
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
      playTone(midiToFreq(note), ctx.currentTime + index * 0.13, 0.34, "triangle", 0.06, fxGain, {
        attack: 0.02,
        release: 0.12
      });
    });
    playNoise(ctx.currentTime + 0.1, 0.22, 0.05, fxGain, 500);
  }

  function playVocalCue(frequency, duration) {
    const start = ctx.currentTime;
    const voiceGain = ctx.createGain();
    voiceGain.gain.value = 0;
    voiceGain.connect(fxGain);
    voiceGain.gain.linearRampToValueAtTime(0.08, start + 0.03);
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
        selectedVoice = pickVoice(loadedVoices) || null;
      };
      return;
    }
    selectedVoice = pickVoice(voices) || null;
  }

  function pickVoice(voices) {
    return voices.find((voice) => /zh/i.test(voice.lang) && /female|xiaoyi|tingting|mei|yan/i.test(voice.name))
      || voices.find((voice) => /zh/i.test(voice.lang))
      || voices[0];
  }

  function speakBossLine(text, beautyId) {
    if (!("speechSynthesis" in window)) {
      return;
    }
    ensureVoiceLoaded();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      utterance.lang = selectedVoice.lang || "zh-CN";
    } else {
      utterance.lang = "zh-CN";
    }
    utterance.rate = 0.96;
    utterance.volume = 0.94;
    utterance.pitch = ({
      hiyori: 1.08,
      serin: 0.9,
      yelan: 0.92,
      mingsha: 1.02,
      lanwei: 0.88,
      shali: 0.95,
      yuege: 1.06,
      molan: 0.9,
      xingkui: 1.1,
      cangya: 0.86
    })[beautyId] || 1;
    duckMusic(0.26, 1.8);
    window.speechSynthesis.speak(utterance);
  }

  function cancelSpeech() {
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
    musicGain.gain.linearRampToValueAtTime(0.46 * ratio, now + 0.05);
    musicGain.gain.linearRampToValueAtTime(0.46, now + duration);
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

function getSelectedCompanion() {
  return BEAUTIES.find((beauty) => beauty.id === progress.selectedCompanionId && progress.rescued.includes(beauty.id)) || null;
}

function getBeauty(id) {
  return BEAUTIES.find((beauty) => beauty.id === id);
}

function getStage(id) {
  return STAGES.find((stage) => stage.id === id);
}

function getCorruptArtPath(beauty) {
  return beauty.art.corrupt || beauty.art.purified;
}

function beautyNeedsCorruptFilter(beauty) {
  return !beauty.art.corrupt;
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
