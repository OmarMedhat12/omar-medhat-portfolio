import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects", "rhb");
fs.mkdirSync(outDir, { recursive: true });

const htmlPath = "D:/Freelance/Rohb/Prototype/rhb-prototype-v2.html";
const fileUrl = "file:///" + htmlPath;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.25,
});

await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1500);

const height = await page.evaluate(() => document.body.scrollHeight);
const steps = [
  { name: "hero", y: 0 },
  { name: "about", y: Math.min(900, height) },
  { name: "brands", y: Math.min(1800, height) },
  { name: "mid", y: Math.min(2700, height) },
  { name: "lower", y: Math.min(3600, height) },
  { name: "footer", y: Math.max(0, height - 900) },
];

for (const step of steps) {
  await page.evaluate((y) => window.scrollTo(0, y), step.y);
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outDir, `frame-${step.name}.jpg`),
    type: "jpeg",
    quality: 85,
  });
  console.log("Saved", step.name, "at", step.y);
}

await browser.close();
console.log("Done. height=", height);
