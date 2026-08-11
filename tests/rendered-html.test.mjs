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
  assert.match(html, /Products shaped from/);
  assert.doesNotMatch(html, /Sabian Pay/);
  assert.match(html, /Tools I use/);
  assert.match(html, /keneochine@gmail\.com/);
  assert.match(
    html,
    /https:\/\/www\.linkedin\.com\/in\/kenechukwu-okoye-chine-0a3918413\//,
  );
  assert.match(html, /https:\/\/github\.com\/KenechukwuDani7/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("server-renders the Mentra AI case study", async () => {
  const response = await render("/work/mentra");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Mentra AI Case Study \| Kenechukwu Okoye-Chine<\/title>/i);
  assert.match(html, /A study system that turns course material into/i);
  assert.match(html, /momentum/i);
  assert.match(html, /Ask Mentra/i);
  assert.match(html, /Expo \/ React Native/i);
  assert.match(html, /\/work\/mentra\/settings\.jpg/i);
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

test("keeps the portfolio responsive and touch-friendly", async () => {
  const [css, motion, page, layout] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/MotionLayer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /@media \(max-width: 1000px\)/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.match(css, /@media \(max-width: 420px\)/);
  assert.match(css, /@media \(max-width: 350px\)/);
  assert.match(css, /@media \(pointer: coarse\)/);
  assert.match(css, /overflow-x:\s*(?:hidden|clip)/);
  assert.match(css, /font-size:\s*clamp\(2\.9rem, 17vw, 4\.35rem\)/);
  assert.match(motion, /window\.innerWidth > 768/);
  assert.match(motion, /\(pointer: fine\)/);
  assert.match(page, /kenechukwu-okoye-chine-0a3918413/);
  assert.match(page, /github\.com\/KenechukwuDani7/);
  assert.match(layout, /alternates:\s*\{ canonical: "\/" \}/);
  assert.match(layout, /"@type": "ProfilePage"/);
  assert.match(layout, /alternateName/);
  assert.match(layout, /familyName: "Okoye-Chine"/);
  assert.match(layout, /<Analytics \/>/);
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
