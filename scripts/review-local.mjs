import { chromium } from "@playwright/test";
import { writeFile } from "node:fs/promises";
const browser = await chromium.launch({ headless: true });
const observations = [];
for (const width of [1440, 390]) {
  const page = await browser.newPage({
    viewport: { width, height: width === 1440 ? 1000 : 844 },
    deviceScaleFactor: 1,
  });
  await page.addInitScript(() => {
    window.__vitals = { lcp: 0, cls: 0 };
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) window.__vitals.lcp = e.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const e of list.getEntries())
        if (!e.hadRecentInput) window.__vitals.cls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto("http://127.0.0.1:4173/rinto-portfolio/", {
    waitUntil: "networkidle",
  });
  await page.screenshot({
    path: `docs/upgrade-${width}.png`,
    animations: "disabled",
  });
  await page
    .locator("#projects")
    .screenshot({
      path: `/tmp/rinto-projects-${width}.png`,
      animations: "disabled",
    });
  const result = await page.evaluate(() => ({
    width: innerWidth,
    overflow: document.documentElement.scrollWidth > innerWidth,
    portrait: {
      source: document.querySelector(".portrait-image").currentSrc,
      width: document.querySelector(".portrait-image").clientWidth,
      height: document.querySelector(".portrait-image").clientHeight,
    },
    ...window.__vitals,
    resources: performance
      .getEntriesByType("resource")
      .map((r) => ({ name: new URL(r.name).pathname, bytes: r.transferSize })),
  }));
  observations.push(result);
  await page.close();
}
await writeFile(
  "docs/local-performance.json",
  JSON.stringify(
    {
      note: "Single unthrottled local Chromium observation per viewport; not Lighthouse, field metrics, or an INP assessment.",
      observations,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify(
    observations.map(({ resources, ...r }) => ({
      ...r,
      resourceBytes: resources.reduce((sum, x) => sum + x.bytes, 0),
    })),
    null,
    2,
  ),
);
await browser.close();
