import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kenechukwu Okoye-Chine \| Product Designer &amp; Developer<\/title>/i);
  assert.match(html, /<h1[^>]*class="hero-title"/i);
  assert.match(html, /rel="canonical" href="https:\/\/kenechukwuokoye\.vercel\.app\/?"/i);
  assert.match(
    html,
    /name="google-site-verification" content="0XYMnU1dN57XCMeWDUliv_v61zovfX6QOpiOMABZ1Cg"/i,
  );
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /Kenechukwu Okoye-Chine/);
  assert.match(html, /Koda the Great/);
  assert.match(html, /Things I’ve designed, and built\./);
  assert.match(html, /class="curtain" aria-hidden="true"/);
  assert.match(html, /Admit one/);
  assert.match(html, /aria-label="View Mentra case study"/);
  assert.match(html, /aria-label="View OSUKO Construction case study"/);
  assert.match(html, /aria-label="View Golden Bills case study"/);
  assert.doesNotMatch(html, /aria-label="View Chow Now case study"/);
  assert.doesNotMatch(html, /Sabian Pay/);
  assert.match(html, /Tools I use/);
  assert.match(html, /Building &amp; shipping/);
  assert.doesNotMatch(html, /[↗↘↓↑✦]/);
  assert.match(html, /React/);
  assert.match(html, /Expo/);
  assert.match(html, /TypeScript/);
  assert.match(html, /Vercel/);
  assert.match(html, /keneochine@gmail\.com/);
  assert.doesNotMatch(html, /linkedin\.com|x\.com\/koda_thegreat7/);
  assert.match(html, /https:\/\/github\.com\/KenechukwuDani7/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the Mentra AI case study", async () => {
  const response = await render("/work/mentra");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Mentra AI Learning Platform Case Study \| Kenechukwu Okoye-Chine<\/title>/i);
  assert.match(html, /From uploaded material to/i);
  assert.match(html, /real learning progress/i);
  assert.match(html, /Grounded tutoring/i);
  assert.match(html, /Expo 54, React Native 0\.81, React 19 and TypeScript 5\.9/i);
  assert.match(html, /Supabase Edge Function/i);
  assert.match(html, /Groq API/i);
  assert.match(html, /https:\/\/learnwithmentra\.vercel\.app\//i);
  assert.match(html, /\/work\/mentra\/website-cover-1440\.webp/i);
  assert.match(html, /\/work\/mentra\/website-features-1440\.webp/i);
  assert.match(html, /\/work\/mentra\/website-workflow-1440\.webp/i);
  assert.match(html, /\/work\/mentra\/website-grounded-1440\.webp/i);
  assert.doesNotMatch(html, /\/work\/mentra\/(?:home|library|practice|planner|settings|ai-tutor)\.(?:jpg|png)/i);
  assert.match(html, /rel="canonical" href="https:\/\/kenechukwuokoye\.vercel\.app\/work\/mentra"/i);
});

test("server-renders the OSUKO Construction case study", async () => {
  const response = await render("/work/osuko");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>OSUKO Construction Website Case Study \| Kenechukwu Okoye-Chine<\/title>/i);
  assert.match(html, /A digital foundation for a company that builds/i);
  assert.match(html, /what lasts/i);
  assert.match(html, /https:\/\/osukoconstruction\.vercel\.app\//i);
  assert.match(html, /Next\.js \/ React/i);
  assert.match(html, /\/work\/osuko\/contact-desktop\.webp/i);
  assert.match(html, /rel="canonical" href="https:\/\/kenechukwuokoye\.vercel\.app\/work\/osuko"/i);
});

test("server-renders the Golden Bills case study", async () => {
  const response = await render("/work/golden-bills");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Golden Bills Fintech Case Study \| Kenechukwu Okoye-Chine<\/title>/i);
  assert.match(html, /Everyday payments, organised into one/i);
  assert.match(html, /dependable system/i);
  assert.match(html, /\/work\/golden-bills\/dashboard\.webp/i);
  assert.match(html, /\/work\/golden-bills\/transactions\.webp/i);
  assert.doesNotMatch(html, /Visit live website/i);
  assert.match(html, /rel="canonical" href="https:\/\/kenechukwuokoye\.vercel\.app\/work\/golden-bills"/i);
});

test("keeps the portfolio responsive, flat and motion-safe", async () => {
  const [globals, css, motion, page, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/home.css", import.meta.url), "utf8"),
    readFile(new URL("../app/HomeMotion.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /@media \(max-width: 1000px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /@media \(max-width: 420px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(globals, /overflow-x:\s*(?:hidden|clip)/);
  // Flat 2D look: no soft gradients, glows or blur.
  assert.doesNotMatch(css, /linear-gradient\((?!90deg, #)|backdrop-filter|blur\(/);
  assert.match(motion, /prefers-reduced-motion: reduce/);
  assert.match(page, /<noscript>/);
  assert.doesNotMatch(page, /kenechukwu-okoye-chine-0a3918413/);
  assert.match(page, /github\.com\/KenechukwuDani7/);
  assert.match(layout, /alternates:\s*\{ canonical: "\/" \}/);
  assert.match(layout, /"@type": "ProfilePage"/);
  assert.match(layout, /alternateName/);
  assert.match(layout, /familyName: "Okoye-Chine"/);
  assert.match(layout, /<Analytics \/>/);
});

test("serves the GitHub mark in the footer and links project artwork", async () => {
  const [pageSource, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/home.css", import.meta.url), "utf8"),
  ]);

  assert.match(pageSource, /\/tools\/brands\/github\.svg/);
  assert.match(css, /\.finale-links img\s*\{[^}]*filter:\s*brightness\(0\) invert\(1\)/s);
  assert.match(pageSource, /aria-label=\{`View \$\{project\.title\} case study`\}/);
  assert.match(css, /\.button:focus-visible/);
});

test("publishes search-engine discovery files", async () => {
  const [sitemap, robots] = await Promise.all([
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
  ]);

  assert.match(sitemap, /kenechukwuokoye\.vercel\.app/);
  assert.match(sitemap, /work\/mentra/);
  assert.match(sitemap, /work\/osuko/);
  assert.match(sitemap, /work\/golden-bills/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(robots, /allow: "\/"/);
});
