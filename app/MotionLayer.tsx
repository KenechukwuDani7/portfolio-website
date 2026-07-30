"use client";

import { useEffect } from "react";

export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    reveals.forEach((element) => observer.observe(element));

    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax], [data-speed]"),
    );
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max ? y / max : 0})`;
        parallax.forEach((element) => {
          const factor = Number(element.dataset.parallax ?? element.dataset.speed ?? 0);
          element.style.setProperty("--parallax-y", `${y * factor}px`);
        });
      });
    };

    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let cursorFrame = 0;

    const animateCursor = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      dot?.style.setProperty("transform", `translate3d(${mouseX}px, ${mouseY}px, 0)`);
      ring?.style.setProperty("transform", `translate3d(${ringX}px, ${ringY}px, 0)`);
      cursorFrame = requestAnimationFrame(animateCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const interactive = Array.from(
      document.querySelectorAll<HTMLElement>("a, button, .tilt-card"),
    );
    const enter = () => root.classList.add("cursor-active");
    const leave = () => root.classList.remove("cursor-active");
    interactive.forEach((element) => {
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
    });

    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>(".tilt-card"));
    const tiltMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rotate-y", `${x * 3.5}deg`);
      card.style.setProperty("--rotate-x", `${y * -3.5}deg`);
      card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
    };
    const tiltReset = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--rotate-x", "0deg");
    };
    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", tiltMove);
      card.addEventListener("pointerleave", tiltReset);
    });

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    updateScroll();
    animateCursor();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(cursorFrame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", onPointerMove);
      interactive.forEach((element) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
      tiltCards.forEach((card) => {
        card.removeEventListener("pointermove", tiltMove);
        card.removeEventListener("pointerleave", tiltReset);
      });
    };
  }, []);

  return null;
}
