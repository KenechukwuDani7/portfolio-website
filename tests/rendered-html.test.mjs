import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /<title>Kenechukwu Okoye — Product Designer &amp; Developer<\/title>/i);
  assert.match(html, /Products shaped from/);
  assert.match(html, /Tools I use/);
  assert.match(html, /keneochine@gmail\.com/);
  assert.match(
    html,
    /https:\/\/www\.linkedin\.com\/in\/kenechukwu-okoye-chine-0a3918413\//,
  );
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
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
  assert.match(layout, /<Analytics \/>/);
});
