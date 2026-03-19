import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const sourceDir = path.join(projectRoot, "docs");
const outputDir = path.join(projectRoot, "output", "web-status-site");

fs.mkdirSync(outputDir, { recursive: true });

for (const fileName of ["web-project-status.json", "WEB-DEVLOG.md", "WEB-PROJECT-DASHBOARD.html"]) {
  fs.copyFileSync(path.join(sourceDir, fileName), path.join(outputDir, fileName));
}

fs.copyFileSync(
  path.join(sourceDir, "WEB-PROJECT-DASHBOARD.html"),
  path.join(outputDir, "index.html")
);

console.log(`Exported Web status site to ${outputDir}`);
