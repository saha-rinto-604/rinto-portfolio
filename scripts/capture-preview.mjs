import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
await page.goto('http://127.0.0.1:4173/rinto-portfolio/');
await page.evaluate(() => document.fonts.ready);
await mkdir('docs', { recursive: true });
await page.screenshot({ path: 'docs/portfolio-preview.png', animations: 'disabled' });
await page.screenshot({ path: 'test-results/desktop-full.png', fullPage: true, animations: 'disabled' });
await page.setViewportSize({ width: 375, height: 850 });
await page.screenshot({ path: 'test-results/mobile-hero.png', animations: 'disabled' });
await page.screenshot({ path: 'test-results/mobile-full.png', fullPage: true, animations: 'disabled' });
for (const width of [375, 768, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  for (const section of ['experience', 'education', 'achievements', 'contact']) {
    await page.locator(`#${section}`).screenshot({ path: `test-results/${section}-${width}.png`, animations: 'disabled', style: '.site-header, .skip-link { visibility: hidden !important; }' });
  }
}
await browser.close();
console.log('Captured desktop preview and full desktop/mobile views.');
