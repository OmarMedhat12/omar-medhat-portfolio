const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "public", "projects", "dar-senosi");
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

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  for (const item of pages) {
    console.log("Capturing", item.name, item.url);
    try {
      await page.goto(item.url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(2500);
      // dismiss cookie banners if any
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll("button"));
        const accept = buttons.find((b) =>
          /accept|agree|ok|got it/i.test(b.textContent || "")
        );
        accept?.click();
      });
      await page.waitForTimeout(500);
      const file = path.join(outDir, `${item.name}.jpg`);
      await page.screenshot({
        path: file,
        fullPage: item.fullPage,
        type: "jpeg",
        quality: 82,
      });
      console.log("Saved", file);
    } catch (err) {
      console.error("Failed", item.name, err.message);
    }
  }

  // Try to open a PDP from collections/all
  try {
    console.log("Capturing PDP...");
    await page.goto("https://darsenosi.com/collections/all", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2000);
    const productLink = await page.locator('a[href*="/products/"]').first();
    if (await productLink.count()) {
      await productLink.click();
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(2000);
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

  // Mobile homepage
  try {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("https://darsenosi.com/", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(outDir, "homepage-mobile.jpg"),
      type: "jpeg",
      quality: 82,
    });
    console.log("Saved mobile homepage");
  } catch (err) {
    console.error("Mobile failed", err.message);
  }

  await browser.close();
  console.log("Done");
})();
