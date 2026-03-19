import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "web-status-fixture-"));

function createFixture(name, status) {
  const fixtureRoot = path.join(tempRoot, name);
  fs.mkdirSync(path.join(fixtureRoot, "docs"), { recursive: true });
  fs.mkdirSync(path.join(fixtureRoot, "scripts"), { recursive: true });

  fs.copyFileSync(
    path.join(projectRoot, "scripts", "render-web-status.mjs"),
    path.join(fixtureRoot, "scripts", "render-web-status.mjs")
  );
  fs.copyFileSync(
    path.join(projectRoot, "scripts", "export-web-status-site.mjs"),
    path.join(fixtureRoot, "scripts", "export-web-status-site.mjs")
  );

  fs.writeFileSync(
    path.join(fixtureRoot, "docs", "web-project-status.json"),
    `${JSON.stringify(status, null, 2)}\n`,
    "utf8"
  );

  return fixtureRoot;
}

const fixtures = [
  {
    schemaVersion: 1,
    project: {
      name: "拯救美少女",
      edition: "Web 版",
      engine: "HTML / CSS / JavaScript",
      platform: "手机竖屏网页 / 小程序过渡版",
      sourceOfTruth: "docs/web-project-status.json"
    },
    tagRule: {
      prefix: "ssgw",
      format: "ssgw-01, ssgw-02, ssgw-03 ...",
      currentSequence: 0,
      currentTag: "尚未建立",
      nextTag: "ssgw-01",
      notes: "测试标签规则",
      activationRule: ["形成正式里程碑后再启用新标签。"]
    },
    current: {
      title: "测试基线 A",
      status: "进行中",
      gitTag: "待定",
      gitCommit: "自动读取",
      updatedAt: "2026-03-17",
      summary: "测试数据 A"
    },
    modules: [
      { id: "home", name: "首页", status: "进行中", note: "测试模块 A" }
    ],
    history: [],
    nextSteps: ["继续推进测试 A"],
    usageNotes: ["测试说明 A"]
  },
  {
    schemaVersion: 1,
    project: {
      name: "拯救美少女",
      edition: "Web 版",
      engine: "HTML / CSS / JavaScript",
      platform: "手机竖屏网页 / 小程序过渡版",
      sourceOfTruth: "docs/web-project-status.json"
    },
    tagRule: {
      prefix: "ssgw",
      format: "ssgw-01, ssgw-02, ssgw-03 ...",
      currentSequence: 2,
      currentTag: "ssgw-02",
      nextTag: "ssgw-03",
      notes: "测试标签规则 B",
      activationRule: ["形成正式里程碑后再启用新标签。"]
    },
    current: {
      title: "测试基线 B",
      status: "已完成",
      gitTag: "ssgw-02",
      gitCommit: "abc1234",
      updatedAt: "2026-03-18",
      summary: "测试数据 B"
    },
    modules: [
      { id: "battle", name: "战斗", status: "已完成", note: "测试模块 B" }
    ],
    history: [
      {
        sequence: 2,
        tag: "ssgw-02",
        date: "2026-03-18",
        title: "测试里程碑 B",
        commit: "abc1234",
        rollbackReady: true,
        summary: ["测试历史 B"]
      }
    ],
    nextSteps: ["继续推进测试 B"],
    usageNotes: ["测试说明 B"]
  }
];

fixtures.forEach((status, index) => {
  const fixtureRoot = createFixture(`fixture-${index + 1}`, status);
  execFileSync("node", [path.join(fixtureRoot, "scripts", "render-web-status.mjs")], {
    cwd: fixtureRoot,
    stdio: "ignore"
  });
  execFileSync("node", [path.join(fixtureRoot, "scripts", "export-web-status-site.mjs")], {
    cwd: fixtureRoot,
    stdio: "ignore"
  });

  const markdown = fs.readFileSync(path.join(fixtureRoot, "docs", "WEB-DEVLOG.md"), "utf8");
  const html = fs.readFileSync(path.join(fixtureRoot, "docs", "WEB-PROJECT-DASHBOARD.html"), "utf8");
  const exportedHtml = fs.readFileSync(path.join(fixtureRoot, "output", "web-status-site", "index.html"), "utf8");

  if (!markdown.includes(status.current.title)) {
    throw new Error(`Fixture ${index + 1} markdown missing current title`);
  }
  if (!html.includes(status.project.edition)) {
    throw new Error(`Fixture ${index + 1} html missing edition`);
  }
  if (!exportedHtml.includes("<!DOCTYPE html>")) {
    throw new Error(`Fixture ${index + 1} export missing html doctype`);
  }
});

console.log(`Web status workflow test passed for ${fixtures.length} fixtures.`);
