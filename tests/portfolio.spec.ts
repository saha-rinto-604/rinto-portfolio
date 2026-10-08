import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`layout, images, anchors and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await page.goto('/rinto-portfolio/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('RintoSaha.');
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => undefined)));
    });
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
      await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects', exact: true }).click();
      await expect(menu).toHaveAttribute('aria-expanded', 'false');
      await expect(page).toHaveURL(/#projects$/);
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

test('CV sections, contact links, legacy anchors and real PDF download', async ({ page, request }) => {
  await page.goto('/rinto-portfolio/');
  await expect(page.locator('main > section')).toHaveCount(10);
  await expect(page.locator('#experience')).toContainText('Undergraduate Teaching Assistant');
  await expect(page.locator('#experience')).toContainText('IEEE UIU Student Branch WIE Affinity Group');
  await expect(page.locator('#education')).toContainText('CGPA 3.94 / 4.00');
  await expect(page.locator('#education')).toContainText('100% × 4 · 50% × 3 · 25% × 4');
  await expect(page.locator('#achievements article')).toHaveCount(6);
  await expect(page.locator('#research li')).toHaveCount(4);
  await expect(page.locator('#contact a[href="mailto:rintosaha604@gmail.com"]')).toBeVisible();
  await expect(page.locator('#contact a[href^="https://www.linkedin.com/in/"]')).toHaveAttribute('href', 'https://www.linkedin.com/in/rinto-saha-7853522ab/');
  await expect(page.locator('.projects .project-copy > a')).toHaveCount(3);
  const downloadLink = page.getByRole('link', { name: 'Download Resume', exact: true });
  const href = await downloadLink.getAttribute('href');
  const response = await request.get(href!);
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/pdf');
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const downloadEvent = page.waitForEvent('download');
  await downloadLink.click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('Rinto_Saha_Resume.pdf');
  expect(await download.failure()).toBeNull();
  for (const anchor of ['work', 'github']) {
    await page.goto(`/rinto-portfolio/#${anchor}`);
    await expect(page.locator(`#${anchor}`)).toBeAttached();
  }
  await expect(page).toHaveTitle('Rinto Saha | Computer Science & Software Development');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const navigation = page.getByRole('navigation', { name: 'Main navigation', exact: true });
  for (const link of await navigation.getByRole('link').all()) {
    const target = await link.getAttribute('href');
    await link.click();
    const header = await page.locator('.site-header').boundingBox();
    const heading = page.locator(target!).getByRole('heading', { level: 2 });
    await expect.poll(async () => (await heading.boundingBox())!.y, { message: `${target} heading clears the fixed header` }).toBeGreaterThanOrEqual(header!.height);
    await expect.poll(async () => (await heading.boundingBox())!.y).toBeLessThan(page.viewportSize()!.height);
  }
});
