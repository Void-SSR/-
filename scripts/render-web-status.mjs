import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const docsDir = path.join(projectRoot, "docs");
const sourcePath = path.join(docsDir, "web-project-status.json");
const mdPath = path.join(docsDir, "WEB-DEVLOG.md");
const htmlPath = path.join(docsDir, "WEB-PROJECT-DASHBOARD.html");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function runGit(args) {
  try {
    return execFileSync("git", args, {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
  } catch {
    return "";
  }
}

function readStatus(inputPath = sourcePath) {
  return JSON.parse(fs.readFileSync(inputPath, "utf8"));
}

function withRuntimeMetadata(data) {
  const enriched = clone(data);
  const shortCommit = runGit(["rev-parse", "--short", "HEAD"]);
  const exactTag = runGit(["describe", "--tags", "--exact-match"]);

  if ((!enriched.current.gitCommit || enriched.current.gitCommit === "自动读取") && shortCommit) {
    enriched.current.gitCommit = shortCommit;
  }

  if ((!enriched.current.gitTag || enriched.current.gitTag === "待定") && exactTag) {
    enriched.current.gitTag = exactTag;
  }

  return enriched;
}

function renderMarkdown(data) {
  const moduleLines = data.modules
    .map((item) => `| ${item.name} | ${item.status} | ${item.note} |`)
    .join("\n");

  const historyBlocks = data.history.length
    ? data.history.map((item) => {
        const summary = item.summary.map((line) => `- ${line}`).join("\n");
        return `## ${item.tag} · ${item.title}

- 日期：${item.date}
- 提交：${item.commit}
- 可回滚：${item.rollbackReady ? "是" : "否"}

${summary}`;
      }).join("\n\n")
    : "当前还没有正式版本里程碑。";

  const activationRule = data.tagRule.activationRule.map((line) => `- ${line}`).join("\n");
  const nextSteps = data.nextSteps.map((line, index) => `${index + 1}. ${line}`).join("\n");
  const usageNotes = data.usageNotes.map((line) => `- ${line}`).join("\n");
  const errorLibraryBlock = data.errorLibrary
    ? `## 错误库

- 路径：${data.errorLibrary.path}
- 作用：${data.errorLibrary.purpose}
`
    : "";

  return `# Web 版开发日志

> 本文件由 \`docs/web-project-status.json\` 自动生成，请不要把它当作唯一真相源直接手改。

## 项目概览

- 项目：${data.project.name}
- 版本线：${data.project.edition}
- 引擎：${data.project.engine}
- 目标平台：${data.project.platform}
- 当前阶段：${data.current.title}
- 当前状态：${data.current.status}
- 当前版本标签号：${data.current.gitTag}
- 当前Git提交号：${data.current.gitCommit}
- 最近更新：${data.current.updatedAt}
- 下一个标签：${data.tagRule.nextTag}

## 当前摘要

${data.current.summary}

## 版本标签规则

- 前缀：${data.tagRule.prefix}
- 格式：${data.tagRule.format}
- 当前序号：${data.tagRule.currentSequence}
- 当前版本标签号：${data.tagRule.currentTag}
- 下一个标签：${data.tagRule.nextTag}
- 说明：${data.tagRule.notes}

## 下一个版本标签启用规则

${activationRule}

## 模块状态

| 模块 | 状态 | 说明 |
| --- | --- | --- |
${moduleLines}

## 版本记录

${historyBlocks}

## 下一步

${nextSteps}

## 使用说明

${usageNotes}

${errorLibraryBlock}
`;
}

function renderHtml(data) {
  const moduleCards = data.modules.map((item) => `
    <article class="module-card">
      <div class="module-head">
        <h3>${escapeHtml(item.name)}</h3>
        <span class="status-chip">${escapeHtml(item.status)}</span>
      </div>
      <p>${escapeHtml(item.note)}</p>
    </article>
  `).join("");

  const historyCards = data.history.length
    ? data.history.map((item) => `
      <article class="history-card">
        <div class="history-head">
          <strong>${escapeHtml(item.tag)}</strong>
          <span>${escapeHtml(item.date)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="meta">提交：${escapeHtml(item.commit)} | 可回滚：${item.rollbackReady ? "是" : "否"}</p>
        <ul>${item.summary.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </article>
    `).join("")
    : `<article class="history-empty"><p>当前还没有正式版本里程碑。</p></article>`;

  const nextSteps = data.nextSteps.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const usageNotes = data.usageNotes.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const activationRule = data.tagRule.activationRule.map((line) => `<li>${escapeHtml(line)}</li>`).join("");
  const errorLibrarySection = data.errorLibrary
    ? `
      <section class="muted-section notes">
        <h2>错误库</h2>
        <ul>
          <li>路径：${escapeHtml(data.errorLibrary.path)}</li>
          <li>作用：${escapeHtml(data.errorLibrary.purpose)}</li>
        </ul>
      </section>
    `
    : "";

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(data.project.name)} · Web 版项目看板</title>
  <style>
    :root {
      --bg: #07111e;
      --bg-soft: #0f1930;
      --panel: rgba(13, 22, 39, 0.9);
      --panel-strong: rgba(17, 28, 47, 0.96);
      --line: rgba(138, 168, 235, 0.22);
      --text: #f2f6ff;
      --muted: #92a3c8;
      --accent: #78d5ff;
      --gold: #f4cf83;
      --danger: #ff9aa6;
      --shadow: 0 24px 60px rgba(0, 0, 0, 0.32);
      --radius: 24px;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", sans-serif;
      background:
        radial-gradient(circle at top, rgba(61, 108, 185, 0.22), transparent 35%),
        linear-gradient(180deg, #060d18 0%, var(--bg) 100%);
      color: var(--text);
    }
    .wrap {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
      padding: 28px 0 56px;
    }
    .hero, .section, .muted-section {
      border: 1px solid var(--line);
      border-radius: 28px;
      box-shadow: var(--shadow);
    }
    .hero, .section {
      background: linear-gradient(180deg, rgba(17, 28, 47, 0.98), rgba(11, 19, 33, 0.92));
    }
    .muted-section {
      background: linear-gradient(180deg, rgba(21, 28, 42, 0.88), rgba(14, 20, 31, 0.8));
      border-style: dashed;
    }
    .hero {
      padding: 28px;
      margin-bottom: 20px;
    }
    .eyebrow {
      margin: 0 0 10px;
      color: var(--gold);
      font-size: 12px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    h1, h2, h3, p { margin: 0; }
    h1 { font-size: 34px; line-height: 1.1; margin-bottom: 8px; }
    .hero p { color: var(--muted); line-height: 1.7; }
    .meta-grid,
    .module-grid,
    .history-grid,
    .foot-grid {
      display: grid;
      gap: 16px;
    }
    .meta-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-top: 18px;
    }
    .meta-card, .module-card, .history-card, .history-empty {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px;
      padding: 18px;
    }
    .meta-card strong {
      display: block;
      margin-top: 8px;
      font-size: 20px;
    }
    .section {
      padding: 24px;
      margin-bottom: 18px;
    }
    .section-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 16px;
    }
    .section-head p {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .module-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .module-head, .history-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
      margin-bottom: 10px;
    }
    .module-card p, .history-card li, .history-empty p {
      color: var(--muted);
      line-height: 1.7;
    }
    .status-chip {
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(120, 213, 255, 0.14);
      color: var(--accent);
      font-size: 12px;
      white-space: nowrap;
    }
    .history-card h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }
    .history-card .meta {
      margin-bottom: 10px;
      color: var(--muted);
      font-size: 13px;
    }
    .history-card ul,
    .notes ul {
      margin: 0;
      padding-left: 20px;
    }
    .history-grid {
      grid-template-columns: 1fr;
    }
    .foot-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .muted-section {
      padding: 24px;
      margin-top: 18px;
    }
    .muted-section h2 {
      margin-bottom: 14px;
    }
    .notes li {
      color: var(--muted);
      line-height: 1.75;
    }
    @media (max-width: 860px) {
      .meta-grid, .module-grid, .foot-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <section class="hero">
      <p class="eyebrow">Web 版项目看板</p>
      <h1>${escapeHtml(data.project.name)} · ${escapeHtml(data.project.edition)}</h1>
      <p>${escapeHtml(data.current.summary)}</p>
      <div class="meta-grid">
        <article class="meta-card">
          <span>当前阶段</span>
          <strong>${escapeHtml(data.current.title)}</strong>
        </article>
        <article class="meta-card">
          <span>当前状态</span>
          <strong>${escapeHtml(data.current.status)}</strong>
        </article>
        <article class="meta-card">
          <span>当前版本标签号</span>
          <strong>${escapeHtml(data.current.gitTag)}</strong>
        </article>
        <article class="meta-card">
          <span>当前Git提交号</span>
          <strong>${escapeHtml(data.current.gitCommit)}</strong>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">模块状态</p>
          <h2>当前开发板块</h2>
        </div>
        <p>Web 版与 Cocos 版独立记录，当前以 Web 版为主开发线。</p>
      </div>
      <div class="module-grid">${moduleCards}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">版本记录</p>
          <h2>正式里程碑</h2>
        </div>
        <p>只有形成新的正式里程碑时，才启用下一个版本标签。</p>
      </div>
      <div class="history-grid">${historyCards}</div>
    </section>

    <section class="section notes">
      <div class="section-head">
        <div>
          <p class="eyebrow">下一步</p>
          <h2>近期推进重点</h2>
        </div>
      </div>
      <ul>${nextSteps}</ul>
    </section>

    <div class="foot-grid">
      <section class="muted-section">
        <h2>版本标签规则</h2>
        <ul class="notes">
          <li>前缀：${escapeHtml(data.tagRule.prefix)}</li>
          <li>格式：${escapeHtml(data.tagRule.format)}</li>
          <li>当前序号：${escapeHtml(data.tagRule.currentSequence)}</li>
          <li>当前版本标签号：${escapeHtml(data.tagRule.currentTag)}</li>
          <li>下一个标签：${escapeHtml(data.tagRule.nextTag)}</li>
          <li>${escapeHtml(data.tagRule.notes)}</li>
          ${activationRule}
        </ul>
      </section>
      <section class="muted-section notes">
        <h2>使用说明</h2>
        <ul>${usageNotes}</ul>
      </section>
      ${errorLibrarySection}
    </div>
  </main>
</body>
</html>`;
}

function writeOutputs(data) {
  fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(mdPath, renderMarkdown(data), "utf8");
  fs.writeFileSync(htmlPath, renderHtml(data), "utf8");
}

const status = withRuntimeMetadata(readStatus());
writeOutputs(status);
