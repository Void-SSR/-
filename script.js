const STORAGE_KEY = "rescue-beauties-save-v1";

const BEAUTIES = [
  {
    id: "hiyori",
    name: "绯音",
    title: "净火咏叹者",
    profile: "舞台女王被黑雾侵蚀后化为烈焰指挥官，净化后会用焰羽为防线扫清一整排敌军。",
    skillName: "焰羽扫射",
    skillDesc: "每 10 秒释放三道高伤焰羽弹，直线贯穿怪群。",
    accent: "#ff8e61",
    cooldown: 10,
    cast(game) {
      const offsets = [-48, 0, 48];
      offsets.forEach((offset, index) => {
        game.bullets.push({
          x: game.hero.x + 42,
          y: game.hero.y + offset,
          vx: 930,
          vy: offset * 0.15 + index * 6 - 6,
          radius: 12,
          damage: game.hero.damage * 3.1,
          pierce: 99,
          color: "#ffbc7c",
          fromCompanion: true,
          splash: 18,
          trail: "flame"
        });
      });
      spawnShockwave(game, game.hero.x + 45, game.hero.y, 132, "rgba(255, 154, 104, 0.34)");
      flashBattleMessage("绯音发动【焰羽扫射】", 1.4);
    }
  },
  {
    id: "serin",
    name: "澄澈",
    title: "霜镜审裁者",
    profile: "冰穹圣殿的巡礼少女，擅长冻结整片战场，为你的防线争取安全输出时间。",
    skillName: "冰镜领域",
    skillDesc: "每 11 秒冻结全场敌人 4 秒，并造成一次范围冰爆。",
    accent: "#7eddf8",
    cooldown: 11,
    cast(game) {
      let hitCount = 0;
      game.monsters.forEach((monster) => {
        if (monster.dead) {
          return;
        }
        hitCount += 1;
        monster.slowUntil = Math.max(monster.slowUntil, game.time + 4);
        dealDamage(game, monster, 48 + game.stage.id * 8, {
          fromCompanion: true,
          color: "#b7f7ff",
          label: "冰爆"
        });
      });
      if (hitCount > 0) {
        game.effects.push({
          type: "nova",
          x: game.hero.x + 10,
          y: game.hero.y,
          radius: 0,
          maxRadius: 320,
          color: "rgba(126, 221, 248, 0.25)",
          life: 0.55,
          totalLife: 0.55
        });
        flashBattleMessage("澄澈展开【冰镜领域】", 1.5);
      }
    }
  },
  {
    id: "yelan",
    name: "夜岚",
    title: "雷辉裁定者",
    profile: "被雷殿核心驱动的执刃少女，恢复理智后能够以链雷追击多个高威胁目标。",
    skillName: "雷链裁决",
    skillDesc: "每 9 秒锁定最多 5 个敌人，降下连锁雷击。",
    accent: "#ffe48a",
    cooldown: 9,
    cast(game) {
      const targets = [...game.monsters]
        .filter((monster) => !monster.dead)
        .sort((a, b) => distanceToHero(a, game.hero) - distanceToHero(b, game.hero))
        .slice(0, 5);

      if (!targets.length) {
        return;
      }

      const points = [{ x: game.hero.x + 12, y: game.hero.y }];
      targets.forEach((monster, index) => {
        points.push({ x: monster.x, y: monster.y });
        dealDamage(game, monster, 82 + index * 18, {
          fromCompanion: true,
          color: "#fff39d",
          label: "雷击"
        });
      });

      game.effects.push({
        type: "chain",
        points,
        life: 0.28,
        totalLife: 0.28
      });
      flashBattleMessage("夜岚引发【雷链裁决】", 1.3);
    }
  }
];

const STAGES = [
  {
    id: 1,
    name: "霓虹残街",
    danger: "低危",
    bossBeautyId: "hiyori",
    bossName: "黑化·绯音",
    description: "被黑雾侵蚀的歌姬盘踞在霓虹废墟。坚守防线，扛过第一波尸潮。",
    accent: "#ff8e61",
    bossAt: 42
  },
  {
    id: 2,
    name: "寒晶回廊",
    danger: "中危",
    bossBeautyId: "serin",
    bossName: "黑化·澄澈",
    description: "失控的霜镜少女会冻结弹道，你需要更强的清场能力。",
    accent: "#7eddf8",
    bossAt: 47
  },
  {
    id: 3,
    name: "雷落穹塔",
    danger: "高危",
    bossBeautyId: "yelan",
    bossName: "黑化·夜岚",
    description: "穹塔顶端不断落下雷辉残响，精英怪和 Boss 会同时压上来。",
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
    apply(game) {
      game.hero.fireRate *= 1.28;
    }
  },
  {
    id: "armor-break",
    name: "穿甲实弹",
    rarity: "战术卡",
    description: "基础伤害 +14。",
    apply(game) {
      game.hero.damage += 14;
    }
  },
  {
    id: "double-wings",
    name: "双翼弹幕",
    rarity: "战术卡",
    description: "额外增加 2 枚散射子弹。",
    apply(game) {
      game.hero.projectiles = Math.min(7, game.hero.projectiles + 2);
    }
  },
  {
    id: "rail-pierce",
    name: "轨道穿透",
    rarity: "战术卡",
    description: "子弹穿透 +1。",
    apply(game) {
      game.hero.pierce += 1;
    }
  },
  {
    id: "scope",
    name: "弱点瞄具",
    rarity: "战术卡",
    description: "暴击率 +10%，暴击伤害 +25%。",
    apply(game) {
      game.hero.critChance += 0.1;
      game.hero.critMultiplier += 0.25;
    }
  },
  {
    id: "cryo-rounds",
    name: "寒霜弹芯",
    rarity: "战术卡",
    description: "命中目标后附带 35% 减速。",
    apply(game) {
      game.hero.slowShots = true;
    }
  },
  {
    id: "burst-core",
    name: "爆裂改装",
    rarity: "战术卡",
    description: "命中附加小范围溅射伤害。",
    apply(game) {
      game.hero.splash = Math.min(44, game.hero.splash + 14);
    }
  },
  {
    id: "field-repair",
    name: "紧急修复",
    rarity: "应急卡",
    description: "立即恢复 30% 基地生命。",
    apply(game) {
      game.hero.hp = Math.min(game.hero.maxHp, game.hero.hp + game.hero.maxHp * 0.3);
    }
  }
];

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

bindEvents();
renderHome();
requestAnimationFrame(frame);

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
  const raw = localStorage.getItem(STORAGE_KEY);
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
      <p class="section-kicker">已编组</p>
      <h3 style="margin: 0; color: ${selected.accent};">${selected.name} · ${selected.title}</h3>
      <p>${selected.profile}</p>
      <p><strong>${selected.skillName}</strong>：${selected.skillDesc}</p>
    `;
  }

  const unlockedBeauties = BEAUTIES.filter((beauty) => progress.rescued.includes(beauty.id));
  const buttons = [
    `
      <button class="choice-button none-button ${selected ? "" : "is-selected"}" data-beauty-id="">
        <span>单人挑战</span>
        <small>不携带美女辅佐，依赖纯火力通关</small>
      </button>
    `
  ];

  unlockedBeauties.forEach((beauty) => {
    buttons.push(`
      <button class="choice-button ${progress.selectedCompanionId === beauty.id ? "is-selected" : ""}" data-beauty-id="${beauty.id}">
        <span>${beauty.name}</span>
        <small>${beauty.skillName}</small>
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
    const unlocked = isStageUnlocked(stage.id);
    const cleared = progress.clearedStages.includes(stage.id);
    const bossBeauty = BEAUTIES.find((beauty) => beauty.id === stage.bossBeautyId);
    const statusText = !unlocked ? "未解锁" : cleared ? "已净化，可重战" : "待净化";
    const startLabel = cleared ? "再次挑战" : "开始行动";
    const lockedCopy = unlocked ? stage.description : `需先通过第 ${stage.id - 1} 章才可挑战。`;

    return `
      <article class="stage-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(stage.accent, 0.14)};">
        <div class="stage-top">
          <div>
            <span class="stage-number">第 ${stage.id} 章</span>
            <h3>${stage.name}</h3>
          </div>
          <span class="stage-status">${statusText}</span>
        </div>
        <p>${lockedCopy}</p>
        <div class="stage-meta">
          <span class="meta-pill">威胁等级 ${stage.danger}</span>
          <span class="meta-pill">Boss ${bossBeauty.name}</span>
        </div>
        <div class="stage-actions">
          <button class="solid-button" type="button" data-stage-start="${stage.id}" ${unlocked ? "" : "disabled"}>${startLabel}</button>
          <button class="ghost-button" type="button" disabled>${bossBeauty.skillName}</button>
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
    const label = unlocked ? "已净化" : `目标 ${index + 1}`;
    return `
      <article class="beauty-card ${unlocked ? "" : "locked"}" style="box-shadow: inset 0 0 0 1px ${hexToRgba(beauty.accent, unlocked ? 0.22 : 0.06)};">
        <div class="beauty-top">
          <div class="beauty-portrait" style="background: linear-gradient(160deg, ${hexToRgba(beauty.accent, unlocked ? 0.42 : 0.16)}, rgba(255,255,255,0.04));"></div>
          <span class="beauty-badge">${label}</span>
        </div>
        <h3>${unlocked ? beauty.name : "未净化目标"}</h3>
        <p>${unlocked ? beauty.profile : "黑雾仍在覆盖她的记忆。通关对应章节后可查看完整资料。"}</p>
        <div class="beauty-meta">
          <span class="meta-pill">${unlocked ? beauty.title : "资料封锁中"}</span>
          <span class="meta-pill">${unlocked ? beauty.skillName : "技能未知"}</span>
        </div>
        <p>${unlocked ? `${beauty.skillName}：${beauty.skillDesc}` : "击败黑化 Boss 并完成净化后，这位美少女会成为你后续关卡的辅佐。 "}</p>
      </article>
    `;
  }).join("");
}

function showScreen(name) {
  homeScreen.classList.toggle("screen-active", name === "home");
  battleScreen.classList.toggle("screen-active", name === "battle");
}

function startStage(stageId) {
  const stage = STAGES.find((item) => item.id === stageId);
  if (!stage || !isStageUnlocked(stageId)) {
    return;
  }

  const selectedCompanion = getSelectedCompanion();
  pendingUpgrades = 0;
  closeUpgradeModal();
  closeResultModal();
  resultContext = null;
  game = createGame(stage, selectedCompanion);
  battleStageName.textContent = `第 ${stage.id} 章 · ${stage.name}`;
  updateBattleHud();
  showScreen("battle");
  flashBattleMessage(`第 ${stage.id} 章开始：${stage.name}`, 2.2);
}

function createGame(stage, companion) {
  const stageAccent = stage.accent;
  const bossColor = BEAUTIES.find((beauty) => beauty.id === stage.bossBeautyId)?.accent || stage.accent;
  return {
    stage,
    time: 0,
    ended: false,
    paused: false,
    spawnClock: 0,
    bossSpawned: false,
    bossWarned: false,
    bossDefeated: false,
    hero: {
      x: 118,
      y: canvas.height / 2,
      maxHp: 320,
      hp: 320,
      fireRate: 3.6,
      damage: 24,
      bulletSpeed: 850,
      pierce: 1,
      projectiles: 1,
      critChance: 0.08,
      critMultiplier: 1.7,
      splash: 0,
      slowShots: false,
      fireCooldown: 0,
      companionCastAt: 0
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
    stageAccent,
    bossColor
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
  updateSpawns(state, dt);
  updateCompanion(state, dt);
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
    if (!state.bossWarned && state.time >= state.stage.bossAt - 6) {
      state.bossWarned = true;
      flashBattleMessage("黑化 Boss 即将现身", 1.5);
    }

    state.spawnClock += dt;
    const interval = Math.max(0.34, 1.1 - state.time * 0.012 - state.stage.id * 0.05);
    if (state.spawnClock >= interval) {
      state.spawnClock = 0;
      spawnMonsterWave(state);
    }

    if (state.time >= state.stage.bossAt) {
      spawnBoss(state);
    }
  } else if (state.bossSpawned && !state.bossDefeated) {
    state.spawnClock += dt;
    const supportInterval = Math.max(1.1, 2.7 - state.stage.id * 0.2);
    if (state.spawnClock >= supportInterval) {
      state.spawnClock = 0;
      spawnMonster(state, pickMonsterKind(state, true));
    }
  }
}

function spawnMonsterWave(state) {
  const amount = state.stage.id === 1 ? 1 + Math.random() * 1.2 : 1 + Math.random() * 1.8;
  const count = Math.floor(amount);
  for (let index = 0; index < count; index += 1) {
    spawnMonster(state, pickMonsterKind(state, false));
  }
}

function pickMonsterKind(state, duringBoss) {
  const roll = Math.random();
  if (state.stage.id === 1) {
    return roll > 0.76 ? "runner" : "grunt";
  }
  if (state.stage.id === 2) {
    if (duringBoss && roll > 0.7) {
      return "tank";
    }
    return roll > 0.58 ? "runner" : roll > 0.18 ? "grunt" : "tank";
  }
  if (roll > 0.72) {
    return "runner";
  }
  return roll > 0.28 ? "grunt" : "tank";
}

function spawnMonster(state, kind) {
  const scale = 1 + state.stage.id * 0.22 + state.time * 0.016;
  const spawnY = 100 + Math.random() * (canvas.height - 180);
  const config = {
    grunt: {
      hp: 72 * scale,
      speed: 46 + state.stage.id * 6,
      radius: 20,
      damage: 10 + state.stage.id * 1.8,
      attackRate: 1.2,
      exp: 24,
      color: "#b6d8d1"
    },
    runner: {
      hp: 58 * scale,
      speed: 74 + state.stage.id * 8,
      radius: 16,
      damage: 9 + state.stage.id * 1.4,
      attackRate: 1.0,
      exp: 20,
      color: "#ffd78c"
    },
    tank: {
      hp: 116 * scale,
      speed: 34 + state.stage.id * 4,
      radius: 26,
      damage: 13 + state.stage.id * 2.4,
      attackRate: 1.5,
      exp: 36,
      color: "#ff8b79"
    }
  }[kind];

  state.monsters.push({
    kind,
    x: canvas.width + 48 + Math.random() * 120,
    y: spawnY,
    hp: config.hp,
    maxHp: config.hp,
    speed: config.speed,
    radius: config.radius,
    damage: config.damage,
    attackRate: config.attackRate,
    exp: config.exp,
    color: config.color,
    attackCooldown: 0,
    slowUntil: 0,
    dead: false,
    isBoss: false,
    halo: Math.random() * Math.PI * 2
  });
}

function spawnBoss(state) {
  if (state.bossSpawned) {
    return;
  }
  state.bossSpawned = true;
  state.spawnClock = 0;
  const beauty = BEAUTIES.find((item) => item.id === state.stage.bossBeautyId);
  const hp = 1150 + state.stage.id * 420;
  state.monsters.push({
    kind: "boss",
    x: canvas.width + 90,
    y: canvas.height / 2,
    hp,
    maxHp: hp,
    speed: 28 + state.stage.id * 3,
    radius: 46,
    damage: 22 + state.stage.id * 4,
    attackRate: 1.1,
    exp: 0,
    color: beauty.accent,
    attackCooldown: 0,
    slowUntil: 0,
    dead: false,
    isBoss: true,
    halo: 0
  });
}

function updateCompanion(state) {
  if (!state.companion) {
    return;
  }
  if (state.time - state.hero.companionCastAt < state.companion.cooldown) {
    return;
  }
  state.hero.companionCastAt = state.time;
  state.companion.cast(state);
}

function updateHeroFire(state, dt) {
  state.hero.fireCooldown -= dt;
  if (state.hero.fireCooldown > 0) {
    return;
  }

  const target = findPrimaryTarget(state);
  if (!target) {
    state.hero.fireCooldown = 0.12;
    return;
  }

  const angle = Math.atan2(target.y - state.hero.y, target.x - state.hero.x);
  const shotCount = state.hero.projectiles;
  const spreadStep = 0.13;
  const center = (shotCount - 1) / 2;

  for (let index = 0; index < shotCount; index += 1) {
    const bulletAngle = angle + (index - center) * spreadStep;
    state.bullets.push({
      x: state.hero.x + 35,
      y: state.hero.y,
      vx: Math.cos(bulletAngle) * state.hero.bulletSpeed,
      vy: Math.sin(bulletAngle) * state.hero.bulletSpeed,
      radius: 5.5,
      damage: state.hero.damage,
      pierce: state.hero.pierce,
      color: "#ffe2b8",
      fromCompanion: false,
      splash: state.hero.splash,
      slow: state.hero.slowShots
    });
  }

  state.hero.fireCooldown = 1 / state.hero.fireRate;
}

function findPrimaryTarget(state) {
  return [...state.monsters]
    .filter((monster) => !monster.dead)
    .sort((a, b) => distanceToHero(a, state.hero) - distanceToHero(b, state.hero))[0];
}

function updateBullets(state, dt) {
  state.bullets.forEach((bullet) => {
    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
  });

  state.bullets = state.bullets.filter((bullet) => {
    if (bullet.x < -30 || bullet.x > canvas.width + 30 || bullet.y < -30 || bullet.y > canvas.height + 30) {
      return false;
    }

    for (const monster of state.monsters) {
      if (monster.dead) {
        continue;
      }
      const collision = Math.hypot(bullet.x - monster.x, bullet.y - monster.y) <= bullet.radius + monster.radius;
      if (!collision) {
        continue;
      }

      let damage = bullet.damage;
      let label = null;
      let color = bullet.color;
      if (!bullet.fromCompanion && Math.random() < state.hero.critChance) {
        damage *= state.hero.critMultiplier;
        label = "暴击";
        color = "#fff29c";
      }

      if (bullet.slow) {
        monster.slowUntil = Math.max(monster.slowUntil, state.time + 2.5);
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
      color: "#ffc79a",
      label: "溅射"
    });
  });

  state.effects.push({
    type: "burst",
    x: bullet.x,
    y: bullet.y,
    radius: 0,
    maxRadius: radius * 1.6,
    color: "rgba(255, 177, 110, 0.28)",
    life: 0.22,
    totalLife: 0.22
  });
}

function updateMonsters(state, dt) {
  state.monsters.forEach((monster) => {
    if (monster.dead) {
      return;
    }

    monster.halo += dt * 1.2;
    const slowFactor = state.time < monster.slowUntil ? 0.6 : 1;
    const dx = state.hero.x + 18 - monster.x;
    const dy = state.hero.y - monster.y;
    const distance = Math.hypot(dx, dy);
    const attackRange = monster.radius + 42;

    if (distance > attackRange) {
      monster.x += (dx / distance) * monster.speed * slowFactor * dt;
      monster.y += (dy / distance) * monster.speed * slowFactor * dt;
    } else {
      monster.attackCooldown -= dt;
      if (monster.attackCooldown <= 0) {
        const damage = monster.damage * (monster.isBoss ? 1.1 : 1);
        state.hero.hp = Math.max(0, state.hero.hp - damage);
        monster.attackCooldown = monster.attackRate;
        spawnShockwave(state, state.hero.x + 5, state.hero.y, 40, "rgba(255, 110, 110, 0.18)");
        state.texts.push({
          x: state.hero.x + 10,
          y: state.hero.y - 34,
          text: `-${Math.round(damage)}`,
          color: "#ff8f8f",
          life: 0.5
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

function dealDamage(state, monster, amount, options = {}) {
  if (monster.dead) {
    return;
  }
  monster.hp -= amount;
  state.texts.push({
    x: monster.x,
    y: monster.y - monster.radius,
    text: options.label ? `${options.label} ${Math.round(amount)}` : `${Math.round(amount)}`,
    color: options.color || "#fff2c9",
    life: 0.55
  });

  if (monster.hp <= 0) {
    monster.dead = true;
    if (monster.isBoss) {
      state.bossDefeated = true;
      spawnShockwave(state, monster.x, monster.y, 230, hexToRgba(state.bossColor, 0.3));
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
        color: "rgba(255, 227, 177, 0.18)",
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
      const picked = UPGRADE_POOL.find((upgrade) => upgrade.id === button.dataset.upgradeId);
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
    const beauty = BEAUTIES.find((item) => item.id === game.stage.bossBeautyId);
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
  resultContext = { nextStageId };
  resultKicker.textContent = victory ? "净化成功" : "防线失守";
  resultTitle.textContent = victory ? `成功净化 ${game.stage.bossName}` : "本次行动失败";

  if (victory) {
    resultText.textContent = unlockedBeauty
      ? `${unlockedBeauty.name} 已加入美女库，可在后续关卡中作为辅佐出战。她的专属技能是【${unlockedBeauty.skillName}】。`
      : "该 Boss 已完成净化，本次战斗记入重战记录。";
  } else {
    resultText.textContent = "黑雾怪潮突破了防线。回到主界面后重新选择关卡和美女辅佐，再试一次。";
  }

  resultPrimaryButton.textContent = "返回主界面";
  resultSecondaryButton.textContent = nextStageId ? `挑战第 ${nextStageId} 章` : victory ? "再次挑战" : "重整后再战";
  resultModal.classList.remove("hidden");

  if (!nextStageId) {
    resultContext.nextStageId = game.stage.id;
  }
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
      <p>首关也能单人通关，但携带已净化美少女会让清场更轻松。</p>
    `;
    return;
  }

  const cooldownLeft = Math.max(0, game.companion.cooldown - (game.time - game.hero.companionCastAt));
  battleCompanionStatus.innerHTML = `
    <p class="battle-companion-label">美女辅佐</p>
    <h3 style="margin: 6px 0; color: ${game.companion.accent};">${game.companion.name}</h3>
    <p>${game.companion.skillName}</p>
    <p class="cooldown-label">技能冷却 ${cooldownLeft.toFixed(1)}s</p>
  `;
}

function renderGame(state) {
  drawBackground(state);
  drawHero(state.hero, state.companion, state.stageAccent);
  state.bullets.forEach(drawBullet);
  state.monsters.forEach((monster) => drawMonster(monster, state));
  state.effects.forEach((effect) => drawEffect(effect));
  state.texts.forEach(drawText);
  drawBossBar(state);
}

function drawBackground(state) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#0a1016");
  gradient.addColorStop(0.55, hexToRgba(state.stageAccent, 0.14));
  gradient.addColorStop(1, "#111822");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.02)";
  for (let index = 0; index < 6; index += 1) {
    const y = 110 + index * 84;
    ctx.fillRect(0, y, canvas.width, 1);
  }

  ctx.fillStyle = "rgba(246, 207, 145, 0.14)";
  ctx.fillRect(94, 60, 6, canvas.height - 120);

  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.beginPath();
  ctx.arc(92, canvas.height / 2, 56, 0, Math.PI * 2);
  ctx.fill();
}

function drawHero(hero, companion, accent) {
  ctx.save();
  ctx.translate(hero.x, hero.y);

  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  ctx.beginPath();
  ctx.arc(-6, 0, 62, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f3e7d7";
  ctx.beginPath();
  ctx.arc(0, -34, 18, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#151d27";
  ctx.beginPath();
  ctx.moveTo(-18, 12);
  ctx.lineTo(18, 12);
  ctx.lineTo(28, 56);
  ctx.lineTo(-28, 56);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#ffdbc3";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(6, -8);
  ctx.lineTo(42, -18);
  ctx.stroke();

  if (companion) {
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = hexToRgba(companion.accent, 0.22);
    ctx.beginPath();
    ctx.arc(-22, -6, 28, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = companion.accent;
    ctx.beginPath();
    ctx.arc(-22, -18, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-29, -10, 14, 26);
  }

  ctx.strokeStyle = hexToRgba(accent, 0.9);
  ctx.lineWidth = 2;
  ctx.strokeRect(-45, -68, 92, 140);
  ctx.restore();
}

function drawBullet(bullet) {
  ctx.save();
  if (bullet.trail === "flame") {
    ctx.strokeStyle = "rgba(255, 184, 108, 0.32)";
    ctx.lineWidth = bullet.radius;
    ctx.beginPath();
    ctx.moveTo(bullet.x - 26, bullet.y);
    ctx.lineTo(bullet.x + 10, bullet.y);
    ctx.stroke();
  }
  ctx.fillStyle = bullet.color;
  ctx.beginPath();
  ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawMonster(monster, state) {
  ctx.save();
  ctx.translate(monster.x, monster.y);

  if (monster.isBoss) {
    const pulse = 1 + Math.sin(monster.halo * 3) * 0.06;
    ctx.scale(pulse, pulse);
    ctx.fillStyle = hexToRgba(monster.color, 0.14);
    ctx.beginPath();
    ctx.arc(0, 0, monster.radius * 1.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = hexToRgba(monster.color, 0.75);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -28, 26, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = "#f5e8dc";
    ctx.beginPath();
    ctx.arc(0, -18, 18, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#201620";
    ctx.beginPath();
    ctx.moveTo(-26, 14);
    ctx.quadraticCurveTo(0, -4, 26, 14);
    ctx.lineTo(34, 56);
    ctx.lineTo(-34, 56);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = hexToRgba(monster.color, 0.88);
    ctx.fillRect(-34, 18, 68, 12);
  } else {
    ctx.fillStyle = hexToRgba(monster.color, 0.1);
    ctx.beginPath();
    ctx.arc(0, 0, monster.radius * 1.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = monster.color;
    ctx.beginPath();
    ctx.arc(0, -8, monster.radius * 0.58, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#1b232b";
    ctx.beginPath();
    ctx.moveTo(-monster.radius * 0.8, monster.radius * 0.2);
    ctx.lineTo(monster.radius * 0.8, monster.radius * 0.2);
    ctx.lineTo(monster.radius, monster.radius * 1.2);
    ctx.lineTo(-monster.radius, monster.radius * 1.2);
    ctx.closePath();
    ctx.fill();
  }

  const hpWidth = monster.isBoss ? 120 : 54;
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  ctx.fillRect(-hpWidth / 2, -monster.radius - 30, hpWidth, 8);
  ctx.fillStyle = monster.isBoss ? state.bossColor : "#7ce3d9";
  ctx.fillRect(-hpWidth / 2, -monster.radius - 30, hpWidth * Math.max(0, monster.hp / monster.maxHp), 8);

  ctx.restore();
}

function drawEffect(effect) {
  ctx.save();
  if (effect.type === "chain") {
    ctx.strokeStyle = "rgba(255, 239, 157, 0.85)";
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
  ctx.font = "600 18px PingFang SC";
  ctx.textAlign = "center";
  ctx.fillText(text.text, text.x, text.y);
  ctx.restore();
}

function drawBossBar(state) {
  const boss = state.monsters.find((monster) => monster.isBoss && !monster.dead);
  if (!boss) {
    return;
  }
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.fillRect(240, 28, canvas.width - 320, 18);
  ctx.fillStyle = state.bossColor;
  ctx.fillRect(240, 28, (canvas.width - 320) * Math.max(0, boss.hp / boss.maxHp), 18);
  ctx.fillStyle = "#f4ede4";
  ctx.font = "600 16px PingFang SC";
  ctx.fillText(state.stage.bossName, 240, 20);
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
