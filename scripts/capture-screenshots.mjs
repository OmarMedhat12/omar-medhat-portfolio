import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function captureDarSenosi() {
  const outDir = path.join(root, "public", "projects", "dar-senosi");
  fs.mkdirSync(outDir, { recursive: true });

  const pages = [
    { name: "homepage", url: "https://darsenosi.com/", fullPage: false },
    { name: "homepage-full", url: "https://darsenosi.com/", fullPage: true },
    { name: "collections", url: "https://darsenosi.com/collections", fullPage: false },
    { name: "doors", url: "https://darsenosi.com/collections/doors", fullPage: false },
    { name: "artists", url: "https://darsenosi.com/pages/artists", fullPage: false },
    { name: "experiences", url: "https://darsenosi.com/pages/experiences", fullPage: false },
    { name: "search", url: "https://darsenosi.com/search", fullPage: false },
  ];

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.25,
  });
  const page = await context.newPage();

  for (const item of pages) {
    console.log("Capturing", item.name);
    try {
      await page.goto(item.url, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(3500);
      await page.screenshot({
        path: path.join(outDir, `${item.name}.jpg`),
        fullPage: item.fullPage,
        type: "jpeg",
        quality: 82,
      });
      console.log("Saved", item.name);
    } catch (err) {
      console.error("Failed", item.name, err.message);
    }
  }

  try {
    await page.goto("https://darsenosi.com/collections/all", {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(3000);
    const href = await page.locator('a[href*="/products/"]').first().getAttribute("href");
    if (href) {
      await page.goto(new URL(href, "https://darsenosi.com").toString(), {
        waitUntil: "domcontentloaded",
        timeout: 90000,
      });
      await page.waitForTimeout(3000);
      await page.screenshot({
        path: path.join(outDir, "pdp.jpg"),
        type: "jpeg",
        quality: 82,
      });
      console.log("Saved PDP");
    }
  } catch (err) {
    console.error("PDP failed", err.message);
  }

  try {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("https://darsenosi.com/", {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    await page.waitForTimeout(3000);
    await page.screenshot({
      path: path.join(outDir, "homepage-mobile.jpg"),
      type: "jpeg",
      quality: 82,
    });
    console.log("Saved mobile");
  } catch (err) {
    console.error("Mobile failed", err.message);
  }

  await browser.close();
}

async function captureRhbPrototype() {
  const outDir = path.join(root, "public", "projects", "rhb");
  fs.mkdirSync(outDir, { recursive: true });
  const htmlPath = path.join(
    "D:",
    "Freelance",
    "Rohb",
    "Prototype",
    "rhb-prototype-v2.html"
  );

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.25,
  });

  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
  console.log("Opening RHB prototype", fileUrl);
  await page.goto(fileUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(outDir, "prototype-desktop.jpg"),
    type: "jpeg",
    quality: 85,
  });
  await page.screenshot({
    path: path.join(outDir, "prototype-full.jpg"),
    fullPage: true,
    type: "jpeg",
    quality: 80,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(outDir, "prototype-mobile.jpg"),
    type: "jpeg",
    quality: 85,
  });

  await browser.close();
  console.log("Saved RHB prototype shots");
}

async function captureDarSenosiMockup() {
  const outDir = path.join(root, "public", "projects", "dar-senosi");
  const mockup = path.join(
    "D:",
    "Freelance",
    "Dar Senosi",
    "Mockups",
    "dar-senosi-homepage-mockup.html"
  );
  if (!fs.existsSync(mockup)) return;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.25,
  });
  const fileUrl = "file:///" + mockup.replace(/\\/g, "/");
  await page.goto(fileUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(outDir, "mockup-homepage.jpg"),
    type: "jpeg",
    quality: 82,
  });
  await browser.close();
  console.log("Saved Dar Senosi mockup");
}

await captureDarSenosi();
await captureRhbPrototype();
await captureDarSenosiMockup();
console.log("All captures complete");
