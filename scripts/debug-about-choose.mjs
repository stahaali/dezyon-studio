import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto("http://localhost:3000/about", {
  waitUntil: "networkidle",
  timeout: 60000,
});
await page.waitForTimeout(2500);

const before = await page.evaluate(() => {
  const scene = document.querySelector('[class*="stackScene"]');
  const items = [...(scene?.querySelectorAll('[class*="stackItem"]') ?? [])];
  return {
    itemCount: items.length,
    sceneHeight: scene?.offsetHeight,
    stageHeight: scene?.querySelector('[class*="stackStage"]')?.offsetHeight,
    cards: items.map((el, i) => ({
      index: i,
      height: el.offsetHeight,
      transform: getComputedStyle(el).transform,
      zIndex: getComputedStyle(el).zIndex,
      title: el.querySelector("h3")?.textContent?.slice(0, 40),
    })),
    scrollTriggers: window.ScrollTrigger?.getAll?.().map((st) => ({
      start: st.start,
      end: st.end,
      scrollLength: st.end - st.start,
      progress: st.progress,
      pin: Boolean(st.pin),
      triggerClass: st.trigger?.className,
    })),
  };
});

const sceneBox = await page.locator('[class*="stackScene"]').boundingBox();
if (sceneBox) {
  await page.mouse.wheel(0, sceneBox.y + 2000);
}
await page.waitForTimeout(500);

const mid = await page.evaluate(() => {
  const scene = document.querySelector('[class*="stackScene"]');
  const items = [...(scene?.querySelectorAll('[class*="stackItem"]') ?? [])];
  const st = window.ScrollTrigger?.getAll?.().find((t) => t.trigger === scene);
  return {
    scrollY: window.scrollY,
    progress: st?.progress,
    cards: items.map((el) => ({
      transform: getComputedStyle(el).transform,
      title: el.querySelector("h3")?.textContent?.slice(0, 40),
    })),
  };
});

// scroll to max pin progress
await page.evaluate(() => {
  const scene = document.querySelector('[class*="stackScene"]');
  const st = window.ScrollTrigger?.getAll?.().find((t) => t.trigger === scene);
  if (st) window.scrollTo(0, st.end);
});
await page.waitForTimeout(800);

const end = await page.evaluate(() => {
  const scene = document.querySelector('[class*="stackScene"]');
  const items = [...(scene?.querySelectorAll('[class*="stackItem"]') ?? [])];
  const st = window.ScrollTrigger?.getAll?.().find((t) => t.trigger === scene);
  return {
    scrollY: window.scrollY,
    progress: st?.progress,
    scrollLength: st ? st.end - st.start : null,
    cards: items.map((el) => ({
      transform: getComputedStyle(el).transform,
      matrixY: (() => {
        const m = getComputedStyle(el).transform;
        if (!m || m === "none") return 0;
        const parts = m.match(/matrix.*\((.+)\)/)?.[1]?.split(", ");
        return parts ? Number(parts[5]) : 0;
      })(),
      title: el.querySelector("h3")?.textContent?.slice(0, 40),
    })),
  };
});

console.log(JSON.stringify({ before, mid, end }, null, 2));
await browser.close();
