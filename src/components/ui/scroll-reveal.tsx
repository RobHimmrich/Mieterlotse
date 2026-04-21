"use client";

import { useEffect } from "react";

/**
 * Observes all elements with `.ml-reveal` and toggles `.is-visible` as they
 * enter the viewport. Mount once in the root layout — not per section.
 */
export function ScrollRevealRoot() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".ml-reveal");
    if (nodes.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
