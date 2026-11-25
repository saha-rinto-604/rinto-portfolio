import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 360, 375, 390, 430, 768, 1024, 1440]) {
  test(`layout, images, anchors and accessibility at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/rinto-portfolio/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Rinto Saha.",
    );
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        document
          .getAnimations()
          .map((animation) => animation.finished.catch(() => undefined)),
      );
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    for (const img of await page.locator("main img:not(dialog img)").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0);
    }
    await page.evaluate(() => scrollTo(0, 0));
    expect(
      await page
        .locator('a[href^="#"]')
        .evaluateAll((links) =>
          links
            .map((link) => link.getAttribute("href")!)
            .filter((href) => !document.getElementById(href.slice(1))),
        ),
    ).toEqual([]);
    if (width <= 850) {
      const menu = page.getByRole("button", {
        name: /(?:Open|Close) navigation/,
      });
      await menu.click();
      await expect(menu).toHaveAttribute("aria-expanded", "true");
      await page.keyboard.press("Escape");
      await expect(menu).toBeFocused();
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await menu.click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Projects", exact: true })
        .click();
      await expect(menu).toHaveAttribute("aria-expanded", "false");
      await expect(page).toHaveURL(/#projects$/);
    }
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.goto("/rinto-portfolio/");
    await page.screenshot({
      path: `test-results/portfolio-${width}.png`,
      fullPage: true,
      animations: "disabled",
    });
  });
}
test("keyboard access, project details, metadata and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/rinto-portfolio/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  const details = page.locator("details").nth(1);
  await details.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(details).toHaveAttribute("open", "");
  await expect(details.getByRole("link", { name: /Report API/ })).toBeVisible();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://saha-rinto-604.github.io/rinto-portfolio/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://saha-rinto-604.github.io/rinto-portfolio/branding/social-preview.png",
  );
});

test("verified content, contact links, legacy anchors and certificates", async ({
  page,
  request,
}) => {
  await page.goto("/rinto-portfolio/");
  await expect(page.locator("main > section")).toHaveCount(10);
  await expect(page.locator("#experience")).toContainText(
    "Undergraduate Teaching Assistant",
  );
  await expect(page.locator("#experience")).toContainText(
    "IEEE UIU Student Branch WIE Affinity Group",
  );
  await expect(page.locator("#education")).toContainText("CGPA 3.94 / 4.00");
  await expect(page.locator("#education")).toContainText(
    "12 Consecutive Trimesters",
  );
  await expect(page.locator("#achievements article")).toHaveCount(6);
  await expect(page.locator("#research article")).toHaveCount(6);
  await expect(
    page.locator('#contact a[href="mailto:rintosaha604@gmail.com"]'),
  ).toBeVisible();
  await expect(
    page.locator('#contact a[href^="https://www.linkedin.com/in/"]'),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/rinto-saha-7853522ab/",
  );
  await expect(page.locator(".projects .project-copy > a")).toHaveCount(4);
  await expect(page.locator("#achievements a")).toHaveCount(4);
  await expect(
    page.getByText("Certificate pending", { exact: true }),
  ).toBeVisible();
  await expect(page.locator("#research article").first()).toContainText(
    "Where Trust Breaks: A Comparative Framework for Software Supply-Chain Compromise",
  );
  await expect(page.locator("#research article").first()).toContainText(
    "ICEEICT 2027 — Submitted — Under Review",
  );
  await expect(page.locator("a[download]")).toHaveCount(1);
  const response = await request.get(
    "/rinto-portfolio/branding/social-preview.png",
  );
  expect(response.status()).toBe(200);
  await expect(page.locator("main")).not.toContainText("100%");
  for (const anchor of ["work", "github"]) {
    await page.goto(`/rinto-portfolio/#${anchor}`);
    await expect(page.locator(`#${anchor}`)).toBeAttached();
  }
  await expect(page).toHaveTitle(
    "Rinto Saha | Researcher & Software Developer",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  const navigation = page.getByRole("navigation", {
    name: "Main navigation",
    exact: true,
  });
  for (const link of await navigation.getByRole("link").all()) {
    const target = await link.getAttribute("href");
    await link.click();
    const header = await page.locator(".site-header").boundingBox();
    const heading = page.locator(target!).getByRole("heading", { level: 2 });
    await expect
      .poll(async () => (await heading.boundingBox())!.y, {
        message: `${target} heading clears the fixed header`,
      })
      .toBeGreaterThanOrEqual(header!.height);
    await expect
      .poll(async () => (await heading.boundingBox())!.y)
      .toBeLessThan(page.viewportSize()!.height);
  }
});

test("prominent portrait and actual public PDF view/download", async ({
  page,
  request,
}) => {
  await page.goto("/rinto-portfolio/");
  const portrait = page.locator(".portrait-image");
  await expect(portrait).toBeVisible();
  expect((await portrait.boundingBox())!.width).toBeGreaterThan(250);
  const view = page.locator("#home").getByRole("link", { name: /View CV/ });
  const download = page.getByRole("link", { name: "Download CV", exact: true });
  const href = await view.getAttribute("href");
  await expect(download).toHaveAttribute("href", href!);
  const response = await request.get(href!);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const event = page.waitForEvent("download");
  await download.click();
  const file = await event;
  expect(file.suggestedFilename()).toBe("Rinto_Saha_CV.pdf");
  expect(await file.failure()).toBeNull();
  await expect(view).toHaveAttribute("target", "_blank");
  for (const path of [
    "robots.txt",
    "sitemap.xml",
    "images/rinto-portrait-480.webp",
    "images/rinto-portrait-800.webp",
    "images/rinto-portrait-1200.webp",
  ]) {
    expect((await request.get("/rinto-portfolio/" + path)).status()).toBe(200);
  }
});

test("content, photograph and CV remain usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/rinto-portfolio/");
  await expect(page.locator(".portrait-image")).toBeVisible();
  const portrait = (await page.locator(".portrait-image").boundingBox())!;
  expect(portrait.y).toBeLessThan(450);
  expect(portrait.height).toBeGreaterThan(250);
  await expect(page.locator("#research article")).toHaveCount(6);
  await expect(page.locator("#projects .project")).toHaveCount(4);
  await expect(
    page.getByRole("link", { name: "Download CV", exact: true }),
  ).toBeVisible();
  await context.close();
});

test("certificate previews and illustrative map remain keyboard accessible", async ({
  page,
}) => {
  await page.goto("/rinto-portfolio/");
  const preview = page.getByRole("button", {
    name: "Enlarge 1st Runner Up — DBMS Lab, Spring 2025",
  });
  await preview.click();
  const dialog = page.getByRole("dialog", {
    name: "1st Runner Up — DBMS Lab, Spring 2025",
  });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Close preview" }),
  ).toBeFocused();
  await expect(dialog.getByRole("img")).toBeVisible();
  await dialog.getByRole("button", { name: "Zoom image", exact: true }).click();
  await expect(
    dialog.getByRole("button", { name: "Fit image", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    await dialog
      .locator(".evidence-full")
      .evaluate((el) => el.scrollWidth > el.clientWidth),
  ).toBe(true);
  await dialog.getByRole("button", { name: "Fit image", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(preview).toBeFocused();
  await expect(page.locator("#achievements")).toContainText("2016");
  const map = page.getByRole("group", {
    name: "Illustrative ResQher location workflow; select a marker",
  });
  await map
    .getByRole("button", { name: "Volunteer availability", exact: true })
    .click();
  await expect(
    map.getByRole("button", { name: "Volunteer availability", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".map-explanation")).toContainText(
    "availability and location updates",
  );
  const previewResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(previewResults.violations).toEqual([]);
  await preview.click();
  const dialogResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(dialogResults.violations).toEqual([]);
});
