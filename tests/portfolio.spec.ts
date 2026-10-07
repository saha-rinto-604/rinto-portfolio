import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`layout, images, anchors and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto('/rinto-portfolio/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('I buildintelligentsystems.');
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const badImages = await page.locator('img').evaluateAll(images => images.filter(img => !(img as HTMLImageElement).complete || (img as HTMLImageElement).naturalWidth === 0).length);
    expect(badImages).toBe(0);
    expect(await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')!).filter(href => !document.getElementById(href.slice(1))))).toEqual([]);
    if (width <= 850) {
      const menu = page.getByRole('button', { name: /(?:Open|Close) navigation/ });
      await menu.click();
      await expect(menu).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(menu).toBeFocused();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
      await menu.click();
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
      await expect(page).toHaveURL(/#work$/);
    }
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.goto('/rinto-portfolio/');
    await page.screenshot({ path: `test-results/portfolio-${width}.png`, fullPage: true, animations: 'disabled' });
  });
}
test('keyboard access, project details, metadata and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/rinto-portfolio/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  const details = page.locator('details').first();
  await details.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await expect(details.getByRole('link', { name: /Report API/ })).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://saha-rinto-604.github.io/rinto-portfolio/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://saha-rinto-604.github.io/rinto-portfolio/branding/social-preview.png');
});
