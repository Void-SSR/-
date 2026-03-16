const STORAGE_KEY = "rescue-beauties-save-v2";
const LEGACY_STORAGE_KEYS = ["rescue-beauties-save-v1"];
const HERO_ART = "assets/hero-main.svg";
const MONSTER_ART = {
  goblin: "assets/goblin-grunt.svg",
  elite: "assets/goblin-elite.svg"
};

const BEAUTIES = [
  {
    id: "hiyori",
    name: "绯音",
    title: "净火咏叹者",
    bossName: "黑化·绯音",
    profile: "被黑雾腐蚀的舞台歌姬，净化后会以焰羽扫清正前方的大群目标。",
    skillName: "焰羽扫射",
    skillDesc: "每 10 秒向上打出三束高伤焰羽弹，贯穿怪群。",
    accent: "#ff8e61",
    cooldown: 10,
    art: {
      purified: "assets/hiyori-purified.svg",
      corrupt: "assets/hiyori-corrupt.svg"
    },
    cast(state) {
      if (!livingMonsters(state).length) {
        return false;
      }

      const offsets = [-54, 0, 54];
      offsets.forEach((offset, index) => {
        state.bullets.push({
          x: state.hero.x + offset,
          y: state.hero.y - 64,
          vx: offset * 0.35,
          vy: -980 - index * 25,
          radius: 13,
          damage: state.hero.damage * 3.1,
          pierce: 99,
          color: "#ffb777",
          fromCompanion: true,
          splash: 22,
          trail: "flame",
          life: 1.15
        });
      });
      spawnShockwave(state, state.hero.x, state.hero.y - 50, 142, "rgba(255, 144, 105, 0.34)");
      flashBattleMessage("绯音发动【焰羽扫射】", 1.35);
      return true;
    }
  },
  {
    id: "serin",
    name: "澄澈",
    title: "霜镜审裁者",
    bossName: "黑化·澄澈",
    profile: "曾经守护冰穹的巡礼少女，净化后擅长冻结整片战场，压住下落怪潮。",
    skillName: "冰镜领域",
    skillDesc: "每 11 秒冻结全场敌人 4 秒，并造成一次冰爆。",
    accent: "#7eddf8",
    cooldown: 11,
    art: {
      purified: "assets/serin-purified.svg",
      corrupt: "assets/serin-corrupt.svg"
    },
    cast(state) {
      const targets = livingMonsters(state);
      if (!targets.length) {
        return false;
      }

      targets.forEach((monster) => {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + 4);
        dealDamage(state, monster, 48 + state.stage.id * 10, {
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
      flashBattleMessage("澄澈展开【冰镜领域】", 1.45);
      return true;
    }
  },
  {
    id: "yelan",
    name: "夜岚",
    title: "雷辉裁定者",
    bossName: "黑化·夜岚",
    profile: "被雷辉核心侵染的裁定者，净化后会以链状雷击点杀高威胁敌人。",
    skillName: "雷链裁决",
    skillDesc: "每 9 秒锁定最多 5 个敌人，降下连锁雷击。",
    accent: "#ffe48a",
    cooldown: 9,
    art: {
      purified: "assets/yelan-purified.svg",
      corrupt: "assets/yelan-corrupt.svg"
    },
    cast(state) {
      const targets = livingMonsters(state)
        .sort((a, b) => targetPriority(b, state.hero) - targetPriority(a, state.hero))
        .slice(0, 5);

      if (!targets.length) {
        return false;
      }

      const points = [{ x: state.hero.x, y: state.hero.y - 32 }];
      targets.forEach((monster, index) => {
        points.push({ x: monster.x, y: monster.y });
        dealDamage(state, monster, 84 + index * 20, {
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
      flashBattleMessage("夜岚引发【雷链裁决】", 1.28);
      return true;
    }
  }
];

const STAGES = [
  {
    id: 1,
    name: "霓虹废区",
    danger: "低危",
    bossBeautyId: "hiyori",
    description: "哥布林拾荒队从高空通道倾泻而下，偶尔会混入狂化精英。",
    accent: "#ff8e61",
    bossAt: 40
  },
  {
    id: 2,
    name: "寒晶回廊",
    danger: "中危",
    bossBeautyId: "serin",
    description: "低温雾幕让怪潮更加耐打，精英哥布林会掩护黑化少女逼近防线。",
    accent: "#7eddf8",
    bossAt: 46
  },
  {
    id: 3,
    name: "雷落穹塔",
    danger: "高危",
    bossBeautyId: "yelan",
    description: "高塔雷暴覆盖整条下落轨道，Boss 会伴随多轮精英怪同时登场。",
    accent: "#ffe48a",
    bossAt: 52
  }
];

const UPGRADE_POOL = [
  {
    id: "rapid-trigger",
    name: "急速扳机",
    rarity: "战术卡",
    description: "攻击频率提升 28%。",
    apply(state) {
      state.hero.fireRate *= 1.28;
    }
  },
  {
    id: "armor-break",
    name: "穿甲实弹",
    rarity: "战术卡",
    description: "基础伤害 +14。",
    apply(state) {
      state.hero.damage += 14;
    }
  },
  {
    id: "double-wings",
    name: "双翼弹幕",
    rarity: "战术卡",
    description: "额外增加 2 枚散射子弹。",
    apply(state) {
      state.hero.projectiles = Math.min(7, state.hero.projectiles + 2);
    }
  },
  {
    id: "rail-pierce",
    name: "轨道穿透",
    rarity: "战术卡",
    description: "子弹穿透 +1。",
    apply(state) {
      state.hero.pierce += 1;
    }
  },
  {
    id: "scope",
    name: "弱点瞄具",
    rarity: "战术卡",
    description: "暴击率 +10%，暴击伤害 +25%。",
    apply(state) {
      state.hero.critChance += 0.1;
      state.hero.critMultiplier += 0.25;
    }
  },
  {
    id: "cryo-rounds",
    name: "寒霜弹芯",
    rarity: "战术卡",
    description: "命中目标后附带 35% 减速。",
    apply(state) {
      state.hero.slowShots = true;
    }
  },
  {
    id: "burst-core",
    name: "爆裂改装",
    rarity: "战术卡",
    description: "命中附加小范围溅射伤害。",
    apply(state) {
      state.hero.splash = Math.min(48, state.hero.splash + 14);
    }
  },
  {
    id: "field-repair",
    name: "紧急修复",
    rarity: "应急卡",
    description: "立即恢复 30% 基地生命。",
    apply(state) {
      state.hero.hp = Math.min(state.hero.maxHp, state.hero.hp + state.hero.maxHp * 0.3);
    }
  }
];

const SPRITE_PATHS = [
  HERO_ART,
  MONSTER_ART.goblin,
  MONSTER_ART.elite,
  ...BEAUTIES.flatMap((beauty) => [beauty.art.purified, beauty.art.corrupt])
];

const spriteCache = {};
let progress = loadProgress();
let game = null;
let lastTimestamp = 0;
let pendingUpgrades = 0;
let resultContext = null;

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
const resultModal = document.getElementById("resultModal");
const resultKicker = document.getElementById("resultKicker");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultPrimaryButton = document.getElementById("resultPrimaryButton");
const resultSecondaryButton = document.getElementById("resultSecondaryButton");
const canvas = document.getElementById("battleCanvas");
const ctx = canvas.getContext("2d");

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
  resetProgressButton.addEventListener("click", () => {
    const shouldReset = window.confirm("确认清空所有净化记录和美女库吗？");
    if (!shouldReset) {
      return;
    }
    progress = createDefaultProgress();
    saveProgress();
    renderHome();
  });

  retreatButton.addEventListener("click", () => {
    if (!game) {
      showScreen("home");
      return;
    }
    const shouldRetreat = game.ended || window.confirm("当前战斗会直接结束，确定返回主界面吗？");
    if (!shouldRetreat) {
      return;
    }
    closeUpgradeModal();
    closeResultModal();
    game = null;
    renderHome();
    showScreen("home");
  });

  resultPrimaryButton.addEventListener("click", () => {
    closeResultModal();
    game = null;
    renderHome();
    showScreen("home");
  });

  resultSecondaryButton.addEventListener("click", () => {
    if (!resultContext || !resultContext.nextStageId) {
      closeResultModal();
      game = null;
      renderHome();
      showScreen("home");
      return;
    }
    closeResultModal();
    startStage(resultContext.nextStageId);
  });
}

function createDefaultProgress() {
  return {
    rescued: [],
    clearedStages: [],
    selectedCompanionId: null
  };
}

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY) || LEGACY_STORAGE_KEYS.map((key) => localStorage.getItem(key)).find(Boolean);
  if (!raw) {
    return createDefaultProgress();
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      rescued: Array.isArray(parsed.rescued) ? parsed.rescued.filter(isBeautyKnown) : [],
      clearedStages: Array.isArray(parsed.clearedStages) ? parsed.clearedStages.filter((id) => STAGES.some((stage) => stage.id === id)) : [],
      selectedCompanionId: isBeautyKnown(parsed.selectedCompanionId) ? parsed.selectedCompanionId : null
    };
  } catch (error) {
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
        <p>首次挑战可以单人出战，净化首位 Boss 后即可编入队伍。</p>
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

  const unlockedBeauties = BEAUTIES.filter((beauty) => progress.rescued.includes(beauty.id));
  const buttons = [
    `
      <button class="choice-button none-button ${selected ? "" : "is-selected"}" data-beauty-id="">
        <span>单人挑战</span>
        <small>不携带美女辅佐，依赖纯火力硬守防线</small>
      </button>
    `
  ];

  unlockedBeauties.forEach((beauty) => {
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
      const nextId = button.dataset.beautyId || null;
      progress.selectedCompanionId = nextId;
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
    const statusText = !unlocked ? "未解锁" : cleared ? "已净化，可重战" : "待净化";
    const lockedCopy = unlocked ? stage.description : `需先通过第 ${stage.id - 1} 章才可挑战。`;

    return `
      <article class="stage-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(stage.accent, 0.14)};">
        <div class="stage-top">
          <span class="stage-number">第 ${stage.id} 章</span>
          <span class="stage-status">${statusText}</span>
        </div>
        <div class="stage-art-wrap">
          <img src="${beauty.art.corrupt}" alt="${beauty.bossName}" class="stage-boss-art">
          <div>
            <h3>${stage.name}</h3>
            <p>${lockedCopy}</p>
            <div class="stage-meta">
              <span class="meta-pill">威胁等级 ${stage.danger}</span>
              <span class="meta-pill">Boss ${beauty.bossName}</span>
              <span class="meta-pill">精英怪出没</span>
            </div>
          </div>
        </div>
        <div class="stage-actions">
          <button class="solid-button" type="button" data-stage-start="${stage.id}" ${unlocked ? "" : "disabled"}>${cleared ? "再次挑战" : "开始行动"}</button>
          <button class="ghost-button" type="button" disabled>${beauty.skillName}</button>
        </div>
      </article>
    `;
  }).join("");

  stageGrid.querySelectorAll("[data-stage-start]").forEach((button) => {
    button.addEventListener("click", () => {
      startStage(Number(button.dataset.stageStart));
    });
  });
}

function renderLibrary() {
  beautyLibrary.innerHTML = BEAUTIES.map((beauty, index) => {
    const unlocked = progress.rescued.includes(beauty.id);
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
            <img src="${beauty.art.corrupt}" alt="${beauty.bossName}">
            <div class="portrait-label">黑化 Boss</div>
          </div>
          <div class="portrait-state">
            <img src="${beauty.art.purified}" alt="${beauty.name}">
            <div class="portrait-label">净化辅佐</div>
          </div>
        </div>
        <p>${unlocked ? beauty.profile : "黑雾仍在覆盖她的记忆。通关对应章节后才能正式收录完整档案。"}</p>
        <div class="beauty-meta">
          <span class="meta-pill">${unlocked ? beauty.skillName : "技能未知"}</span>
          <span class="meta-pill">${unlocked ? "已可出战" : "待净化"}</span>
        </div>
        <p>${unlocked ? `${beauty.skillName}：${beauty.skillDesc}` : "击败黑化 Boss 后，她会以净化形态加入你的美女库，并在战斗中以专属技能支援你。 "}</p>
      </article>
    `;
  }).join("");
}

function startStage(stageId) {
  const stage = STAGES.find((item) => item.id === stageId);
  if (!stage || !isStageUnlocked(stageId)) {
    return;
  }

  const companion = getSelectedCompanion();
  pendingUpgrades = 0;
  resultContext = null;
  closeUpgradeModal();
  closeResultModal();
  game = createGame(stage, companion);
  battleStageName.textContent = `第 ${stage.id} 章 · ${stage.name}`;
  updateBattleHud();
  showScreen("battle");
  flashBattleMessage(`第 ${stage.id} 章开始：${stage.name}`, 2.1);
}

function createGame(stage, companion) {
  return {
    stage,
    time: 0,
    ended: false,
    paused: false,
    spawnClock: 0,
    supportClock: 0,
    bossWarned: false,
    bossSpawned: false,
    bossDefeated: false,
    hero: {
      x: canvas.width / 2,
      y: canvas.height - 150,
      maxHp: 360,
      hp: 360,
      fireRate: 3.8,
      damage: 24,
      bulletSpeed: 920,
      pierce: 1,
      projectiles: 1,
      critChance: 0.08,
      critMultiplier: 1.72,
      splash: 0,
      slowShots: false,
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
    monsters: [],
    effects: [],
    texts: [],
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
  state.hero.recoil = Math.max(0, state.hero.recoil - dt * 7);
  state.hero.muzzleTimer = Math.max(0, state.hero.muzzleTimer - dt);
  updateSpawns(state, dt);
  updateCompanion(state);
  updateHeroFire(state, dt);
  updateBullets(state, dt);
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
    if (!state.bossWarned && state.time >= state.stage.bossAt - 7) {
      state.bossWarned = true;
      flashBattleMessage("黑化 Boss 即将自上层降临", 1.5);
    }

    state.spawnClock += dt;
    const interval = Math.max(0.42, 1.18 - state.time * 0.012 - state.stage.id * 0.05);
    if (state.spawnClock >= interval) {
      state.spawnClock = 0;
      spawnMonsterWave(state);
    }

    if (state.time >= state.stage.bossAt) {
      spawnBoss(state);
    }
  } else if (!state.bossDefeated) {
    state.supportClock += dt;
    const supportInterval = Math.max(1.2, 2.8 - state.stage.id * 0.25);
    if (state.supportClock >= supportInterval) {
      state.supportClock = 0;
      spawnMonster(state, pickMonsterKind(state, true));
    }
  }
}

function spawnMonsterWave(state) {
  let count = 1 + (Math.random() < 0.6 ? 1 : 0);
  if (state.stage.id >= 2 && Math.random() < 0.22) {
    count += 1;
  }

  for (let index = 0; index < count; index += 1) {
    spawnMonster(state, pickMonsterKind(state, false));
  }
}

function pickMonsterKind(state, duringBoss) {
  const roll = Math.random();
  if (state.stage.id === 1) {
    if ((duringBoss && roll > 0.78) || (!duringBoss && state.time > 18 && roll > 0.88)) {
      return "elite";
    }
    return roll > 0.62 ? "scout" : "goblin";
  }
  if (state.stage.id === 2) {
    if ((duringBoss && roll > 0.68) || (!duringBoss && roll > 0.84)) {
      return "elite";
    }
    return roll > 0.52 ? "scout" : "goblin";
  }
  if ((duringBoss && roll > 0.55) || (!duringBoss && roll > 0.8)) {
    return "elite";
  }
  return roll > 0.46 ? "scout" : "goblin";
}

function spawnMonster(state, kind) {
  const scale = 1 + state.stage.id * 0.2 + state.time * 0.016;
  const configs = {
    goblin: {
      hp: 76 * scale,
      speed: 78 + state.stage.id * 5,
      radius: 30,
      damage: 10 + state.stage.id * 1.8,
      attackRate: 1.15,
      exp: 24,
      sprite: MONSTER_ART.goblin,
      width: 108,
      height: 132,
      elite: false,
      label: ""
    },
    scout: {
      hp: 58 * scale,
      speed: 104 + state.stage.id * 8,
      radius: 24,
      damage: 8 + state.stage.id * 1.4,
      attackRate: 0.92,
      exp: 20,
      sprite: MONSTER_ART.goblin,
      width: 92,
      height: 112,
      elite: false,
      label: ""
    },
    elite: {
      hp: 220 * scale,
      speed: 64 + state.stage.id * 4,
      radius: 40,
      damage: 19 + state.stage.id * 3,
      attackRate: 1.42,
      exp: 62,
      sprite: MONSTER_ART.elite,
      width: 134,
      height: 162,
      elite: true,
      label: "ELITE"
    }
  };

  const config = configs[kind];
  const spawnX = 90 + Math.random() * (canvas.width - 180);
  state.monsters.push({
    kind,
    x: spawnX,
    y: -80 - Math.random() * 90,
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
    phase: Math.random() * Math.PI * 2,
    animSpeed: kind === "scout" ? 11 : config.elite ? 7.2 : 8.2,
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
  const hp = 1350 + state.stage.id * 460;
  state.bossSpawned = true;
  state.spawnClock = 0;
  state.supportClock = 0;
  state.monsters.push({
    kind: "boss",
    x: canvas.width / 2,
    y: -180,
    hp,
    maxHp: hp,
    speed: 42 + state.stage.id * 4,
    radius: 66,
    damage: 24 + state.stage.id * 4,
    attackRate: 1.08,
    exp: 0,
    sprite: beauty.art.corrupt,
    width: 228,
    height: 314,
    isElite: false,
    isBoss: true,
    dead: false,
    attackCooldown: 0,
    slowUntil: 0,
    phase: Math.random() * Math.PI * 2,
    animSpeed: 3.4,
    weave: 48,
    hitFlash: 0,
    label: "BOSS"
  });
  flashBattleMessage(`${beauty.bossName} 登场`, 1.55);
}

function updateCompanion(state) {
  if (!state.companion) {
    return;
  }
  if (state.time - state.hero.companionCastAt < state.companion.cooldown) {
    return;
  }
  const didCast = state.companion.cast(state);
  if (didCast) {
    state.hero.companionCastAt = state.time;
  }
}

function updateHeroFire(state, dt) {
  state.hero.fireCooldown -= dt;
  if (state.hero.fireCooldown > 0) {
    return;
  }

  const target = findPrimaryTarget(state);
  if (!target) {
    state.hero.fireCooldown = 0.1;
    return;
  }

  const angle = Math.atan2(target.y - (state.hero.y - 48), target.x - state.hero.x);
  const shotCount = state.hero.projectiles;
  const spreadStep = 0.11;
  const center = (shotCount - 1) / 2;

  for (let index = 0; index < shotCount; index += 1) {
    const bulletAngle = angle + (index - center) * spreadStep;
    state.bullets.push({
      x: state.hero.x + Math.cos(bulletAngle) * 18,
      y: state.hero.y - 62 + Math.sin(bulletAngle) * 18,
      vx: Math.cos(bulletAngle) * state.hero.bulletSpeed,
      vy: Math.sin(bulletAngle) * state.hero.bulletSpeed,
      radius: 6,
      damage: state.hero.damage,
      pierce: state.hero.pierce,
      color: "#ffe2b8",
      fromCompanion: false,
      splash: state.hero.splash,
      slow: state.hero.slowShots,
      life: 1.4
    });
  }

  state.hero.fireCooldown = 1 / state.hero.fireRate;
  state.hero.recoil = Math.min(1, state.hero.recoil + 0.9);
  state.hero.muzzleTimer = 0.08;
}

function findPrimaryTarget(state) {
  return livingMonsters(state)
    .sort((a, b) => targetPriority(b, state.hero) - targetPriority(a, state.hero))[0];
}

function targetPriority(monster, hero) {
  return monster.y * 2 + (monster.isBoss ? 140 : 0) + (monster.isElite ? 60 : 0) - distanceToHero(monster, hero) * 0.25;
}

function updateBullets(state, dt) {
  state.bullets = state.bullets.filter((bullet) => {
    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
    bullet.life -= dt;

    if (
      bullet.life <= 0 ||
      bullet.x < -60 ||
      bullet.x > canvas.width + 60 ||
      bullet.y < -120 ||
      bullet.y > canvas.height + 120
    ) {
      return false;
    }

    for (const monster of state.monsters) {
      if (monster.dead) {
        continue;
      }

      const hit = Math.hypot(bullet.x - monster.x, bullet.y - monster.y) <= bullet.radius + monster.radius;
      if (!hit) {
        continue;
      }

      let damage = bullet.damage;
      let label = null;
      let color = bullet.color;
      if (!bullet.fromCompanion && Math.random() < state.hero.critChance) {
        damage *= state.hero.critMultiplier;
        label = "暴击";
        color = "#fff09f";
      }

      if (bullet.slow) {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + 2.4);
      }

      dealDamage(state, monster, damage, { color, label });

      if (bullet.splash > 0) {
        splashDamage(state, bullet, bullet.splash, damage * 0.35);
      }

      bullet.pierce -= 1;
      if (bullet.pierce <= 0) {
        return false;
      }
    }

    return true;
  });
}

function splashDamage(state, bullet, radius, amount) {
  state.monsters.forEach((monster) => {
    if (monster.dead) {
      return;
    }
    const distance = Math.hypot(bullet.x - monster.x, bullet.y - monster.y);
    if (distance > radius || distance < 2) {
      return;
    }
    dealDamage(state, monster, amount, {
      color: "#ffcf9a",
      label: "溅射"
    });
  });

  state.effects.push({
    type: "burst",
    x: bullet.x,
    y: bullet.y,
    radius: 0,
    maxRadius: radius * 1.6,
    color: "rgba(255, 180, 108, 0.28)",
    life: 0.22,
    totalLife: 0.22
  });
}

function updateMonsters(state, dt) {
  state.monsters.forEach((monster) => {
    if (monster.dead) {
      return;
    }

    monster.hitFlash = Math.max(0, monster.hitFlash - dt * 4);
    const slowFactor = state.time < monster.slowUntil ? 0.56 : 1;
    const targetX = state.hero.x + Math.sin(state.time * (monster.isBoss ? 1.8 : 2.8) + monster.phase) * monster.weave;
    const targetY = state.hero.y - (monster.isBoss ? 150 : 78);
    const dx = targetX - monster.x;
    const dy = targetY - monster.y;
    const distance = Math.hypot(dx, dy);
    const attackRange = monster.radius + (monster.isBoss ? 86 : 58);

    if (distance > attackRange) {
      monster.x += (dx / distance) * monster.speed * slowFactor * dt;
      monster.y += (dy / distance) * monster.speed * slowFactor * dt;
    } else {
      monster.attackCooldown -= dt;
      if (monster.attackCooldown <= 0) {
        const damage = monster.damage * (monster.isBoss ? 1.12 : 1);
        state.hero.hp = Math.max(0, state.hero.hp - damage);
        monster.attackCooldown = monster.attackRate;
        spawnShockwave(state, state.hero.x, state.hero.y - 18, monster.isBoss ? 72 : 48, "rgba(255, 112, 112, 0.18)");
        state.texts.push({
          x: state.hero.x,
          y: state.hero.y - 98,
          text: `-${Math.round(damage)}`,
          color: "#ff9696",
          life: 0.55
        });
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
  });
  state.effects = state.effects.filter((effect) => effect.life > 0);
}

function updateTexts(state, dt) {
  state.texts.forEach((text) => {
    text.y -= 44 * dt;
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

function livingMonsters(state) {
  return state.monsters.filter((monster) => !monster.dead);
}

function dealDamage(state, monster, amount, options = {}) {
  if (monster.dead) {
    return;
  }

  monster.hp -= amount;
  monster.hitFlash = 1;
  state.texts.push({
    x: monster.x,
    y: monster.y - monster.radius - 8,
    text: options.label ? `${options.label} ${Math.round(amount)}` : `${Math.round(amount)}`,
    color: options.color || "#fff2c9",
    life: 0.55
  });

  if (monster.hp <= 0) {
    monster.dead = true;
    if (monster.isBoss) {
      state.bossDefeated = true;
      spawnShockwave(state, monster.x, monster.y, 260, hexToRgba(state.stageAccent, 0.32));
      finishBattle(true);
    } else {
      state.killCount += 1;
      gainXp(state, monster.exp);
      state.effects.push({
        type: "burst",
        x: monster.x,
        y: monster.y,
        radius: 0,
        maxRadius: monster.radius * 2.2,
        color: monster.isElite ? "rgba(255, 212, 110, 0.24)" : "rgba(173, 234, 126, 0.2)",
        life: 0.24,
        totalLife: 0.24
      });
    }
  }
}

function gainXp(state, amount) {
  state.xp += amount;
  while (state.xp >= state.nextXp) {
    state.xp -= state.nextXp;
    state.level += 1;
    state.nextXp = Math.round(state.nextXp * 1.32);
    pendingUpgrades += 1;
  }
  if (pendingUpgrades > 0 && !state.paused) {
    openUpgradeModal();
  }
}

function openUpgradeModal() {
  if (!game || pendingUpgrades <= 0 || game.ended) {
    return;
  }
  game.paused = true;
  upgradeModal.classList.remove("hidden");
  const choices = pickUpgradeChoices();
  upgradeChoices.innerHTML = choices.map((choice) => `
    <button class="upgrade-card" type="button" data-upgrade-id="${choice.id}">
      <small>${choice.rarity}</small>
      <h3>${choice.name}</h3>
      <p>${choice.description}</p>
    </button>
  `).join("");

  upgradeChoices.querySelectorAll("[data-upgrade-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const picked = UPGRADE_POOL.find((item) => item.id === button.dataset.upgradeId);
      if (!picked || !game) {
        return;
      }
      picked.apply(game);
      pendingUpgrades -= 1;
      closeUpgradeModal();
      flashBattleMessage(`获得强化：${picked.name}`, 1.2);
      if (pendingUpgrades > 0) {
        openUpgradeModal();
      } else if (game) {
        game.paused = false;
      }
    });
  });
}

function closeUpgradeModal() {
  upgradeModal.classList.add("hidden");
}

function pickUpgradeChoices() {
  const pool = [...UPGRADE_POOL];
  const result = [];
  while (result.length < 3 && pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(index, 1)[0]);
  }
  return result;
}

function finishBattle(victory) {
  if (!game || game.ended) {
    return;
  }

  game.ended = true;
  game.paused = true;
  closeUpgradeModal();

  let unlockedBeauty = null;
  if (victory) {
    const beauty = getBeauty(game.stage.bossBeautyId);
    const wasRescued = progress.rescued.includes(beauty.id);
    if (!wasRescued) {
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

  const nextStageId = victory && isStageUnlocked(game.stage.id + 1) ? game.stage.id + 1 : null;
  resultContext = { nextStageId: nextStageId || game.stage.id };
  resultKicker.textContent = victory ? "净化成功" : "防线失守";
  resultTitle.textContent = victory ? `成功净化 ${getBeauty(game.stage.bossBeautyId).bossName}` : "本次行动失败";

  if (victory) {
    const beauty = getBeauty(game.stage.bossBeautyId);
    resultText.textContent = unlockedBeauty
      ? `${beauty.name} 已加入美女库，可在后续关卡中作为辅佐出战。她的专属技能是【${beauty.skillName}】。`
      : "该 Boss 已完成净化，本次战斗记入重战记录。";
  } else {
    resultText.textContent = "哥布林怪潮击穿了下方防线。返回主界面后重新编组，再次尝试净化行动。";
  }

  resultPrimaryButton.textContent = "返回主界面";
  resultSecondaryButton.textContent = nextStageId ? `挑战第 ${nextStageId} 章` : victory ? "再次挑战" : "重整后再战";
  resultModal.classList.remove("hidden");
}

function closeResultModal() {
  resultModal.classList.add("hidden");
}

function updateBattleHud() {
  if (!game) {
    return;
  }

  hudHp.textContent = `${Math.ceil(game.hero.hp)} / ${game.hero.maxHp}`;
  hudTimer.textContent = `${Math.floor(game.time)}s`;
  hudLevel.textContent = `Lv.${game.level}`;
  hudKills.textContent = `${game.killCount}`;
  hudXpText.textContent = `${Math.round(game.xp)} / ${game.nextXp}`;
  hudXpFill.style.width = `${Math.min(100, (game.xp / game.nextXp) * 100)}%`;

  if (!game.companion) {
    battleCompanionStatus.innerHTML = `
      <p class="battle-companion-label">美女辅佐</p>
      <strong>当前未携带</strong>
      <p>首关也能单人通关，但有辅佐时清怪与控场会稳定得多。</p>
    `;
    return;
  }

  const cooldownLeft = Math.max(0, game.companion.cooldown - (game.time - game.hero.companionCastAt));
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

function renderGame(state) {
  drawBackground(state);
  drawSpawnGate(state);
  state.effects.filter((effect) => effect.type === "nova").forEach(drawEffect);
  state.monsters.forEach((monster) => drawMonster(monster, state));
  state.effects.filter((effect) => effect.type !== "nova").forEach(drawEffect);
  state.bullets.forEach(drawBullet);
  drawCompanion(state);
  drawHero(state);
  state.texts.forEach(drawText);
  drawBossBar(state);
}

function drawBackground(state) {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#0a1118");
  gradient.addColorStop(0.58, hexToRgba(state.stageAccent, 0.08));
  gradient.addColorStop(1, "#111722");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.025)";
  ctx.fillRect(62, 0, canvas.width - 124, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.03)";
  for (let index = 0; index < 9; index += 1) {
    const y = ((index * 132) + (state.time * 110)) % (canvas.height + 120) - 60;
    ctx.fillRect(96, y, canvas.width - 192, 3);
  }

  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.fillRect(92, 0, 3, canvas.height);
  ctx.fillRect(canvas.width - 95, 0, 3, canvas.height);

  const defenseGradient = ctx.createLinearGradient(0, canvas.height - 210, 0, canvas.height);
  defenseGradient.addColorStop(0, "rgba(0,0,0,0)");
  defenseGradient.addColorStop(1, "rgba(255, 160, 120, 0.14)");
  ctx.fillStyle = defenseGradient;
  ctx.fillRect(0, canvas.height - 210, canvas.width, 210);

  ctx.strokeStyle = hexToRgba(state.stageAccent, 0.32);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(78, canvas.height - 170);
  ctx.lineTo(canvas.width - 78, canvas.height - 170);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height - 120, 132, 34, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawSpawnGate(state) {
  const pulse = 1 + Math.sin(state.bgPulse * 2.2) * 0.05;
  ctx.save();
  ctx.translate(canvas.width / 2, 74);
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
  ctx.restore();

  drawSprite(image, state.hero.x, y, 178, 250, {
    rotation: -state.hero.recoil * 0.04
  });

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

function drawBullet(bullet) {
  ctx.save();
  ctx.strokeStyle = bullet.trail === "flame" ? "rgba(255, 173, 108, 0.35)" : "rgba(255, 231, 184, 0.22)";
  ctx.lineWidth = bullet.radius * (bullet.trail === "flame" ? 1.1 : 0.8);
  ctx.beginPath();
  ctx.moveTo(bullet.x - bullet.vx * 0.025, bullet.y - bullet.vy * 0.025);
  ctx.lineTo(bullet.x + bullet.vx * 0.006, bullet.y + bullet.vy * 0.006);
  ctx.stroke();

  ctx.fillStyle = bullet.color;
  ctx.beginPath();
  ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMonster(monster, state) {
  const image = spriteCache[monster.sprite];
  const walk = Math.sin(state.time * monster.animSpeed + monster.phase);
  const bob = walk * (monster.isBoss ? 8 : monster.isElite ? 6 : 5);
  const rotation = monster.isBoss ? Math.sin(state.time * 2 + monster.phase) * 0.03 : walk * 0.04;
  const width = monster.width;
  const height = monster.height;

  ctx.save();
  ctx.fillStyle = monster.isBoss ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.2)";
  ctx.beginPath();
  ctx.ellipse(monster.x, monster.y + height * 0.34, width * 0.24, monster.isBoss ? 18 : 14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (monster.isBoss) {
    ctx.save();
    ctx.fillStyle = hexToRgba(state.stageAccent, 0.14);
    ctx.beginPath();
    ctx.arc(monster.x, monster.y - 6, 88 + Math.sin(state.time * 2 + monster.phase) * 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawSprite(image, monster.x, monster.y + bob, width, height, { rotation });

  if (monster.hitFlash > 0) {
    ctx.save();
    ctx.globalAlpha = monster.hitFlash * 0.18;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(monster.x, monster.y, monster.radius * 1.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (state.time < monster.slowUntil) {
    ctx.save();
    ctx.strokeStyle = "rgba(176, 242, 255, 0.45)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(monster.x, monster.y, monster.radius * 1.25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  const hpWidth = monster.isBoss ? 138 : monster.isElite ? 72 : 58;
  const hpY = monster.y - height * 0.55;
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(monster.x - hpWidth / 2, hpY, hpWidth, 8);
  ctx.fillStyle = monster.isBoss ? state.stageAccent : monster.isElite ? "#ffd36d" : "#7de0bb";
  ctx.fillRect(monster.x - hpWidth / 2, hpY, hpWidth * Math.max(0, monster.hp / monster.maxHp), 8);

  if (monster.label) {
    drawPill(monster.x, hpY - 16, monster.label, monster.isBoss ? state.stageAccent : "#ffd36d");
  }
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

function drawEffect(effect) {
  ctx.save();
  if (effect.type === "chain") {
    ctx.strokeStyle = "rgba(255, 239, 157, 0.9)";
    ctx.lineWidth = 4;
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

  if (image && image.complete && image.naturalWidth) {
    ctx.drawImage(image, -width / 2, -height / 2, width, height);
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    roundRectPath(-width / 2, -height / 2, width, height, 20);
    ctx.fill();
  }

  ctx.restore();
}

function spawnShockwave(state, x, y, maxRadius, color) {
  state.effects.push({
    type: "burst",
    x,
    y,
    radius: 0,
    maxRadius,
    color,
    life: 0.35,
    totalLife: 0.35
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

function getSelectedCompanion() {
  return BEAUTIES.find((beauty) => beauty.id === progress.selectedCompanionId && progress.rescued.includes(beauty.id)) || null;
}

function getBeauty(id) {
  return BEAUTIES.find((beauty) => beauty.id === id);
}

function isStageUnlocked(stageId) {
  if (!STAGES.some((stage) => stage.id === stageId)) {
    return false;
  }
  return stageId === 1 || progress.clearedStages.includes(stageId - 1);
}

function distanceToHero(monster, hero) {
  return Math.hypot(monster.x - hero.x, monster.y - hero.y);
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
