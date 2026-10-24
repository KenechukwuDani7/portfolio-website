"use client";

import { useEffect } from "react";

// Drives the homepage motion: the curtain opening with scroll, elements
// arriving as they enter the viewport, and paths that draw themselves.
export default function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const stage = document.querySelector<HTMLElement>(".stage");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((element) => observer.observe(element));

    const drawn = Array.from(document.querySelectorAll<SVGPathElement>("[data-draw]"));
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = window.innerHeight;
        // The curtain is fully open after scrolling about one screen.
        const open = reducedMotion.matches ? 1 : Math.min(1, Math.max(0, window.scrollY / (height * 0.95)));
        stage?.style.setProperty("--open", open.toFixed(4));
        root.classList.toggle("curtain-open", open > 0.9);
        // The top bar turns solid once the stage (and its valance) has scrolled away.
        root.classList.toggle("past-stage", !!stage && stage.getBoundingClientRect().bottom < 70);

        drawn.forEach((path) => {
          const box = path.ownerSVGElement?.getBoundingClientRect();
          if (!box) return;
          const progress = reducedMotion.matches
            ? 1
            : Math.min(1, Math.max(0, (height * 0.85 - box.top) / (box.height + height * 0.35)));
          path.style.strokeDashoffset = String(1 - progress);
        });
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    reducedMotion.addEventListener("change", update);
    root.classList.add("motion-ready");
    update();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reducedMotion.removeEventListener("change", update);
      root.classList.remove("motion-ready", "curtain-open", "past-stage");
    };
  }, []);

  return null;
}
