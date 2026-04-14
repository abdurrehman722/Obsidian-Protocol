"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  "CREATIVE ENGINEERING",
  "AI AUTOMATION",
  "ADVERSARIAL SECURITY",
  "FULL STACK",
  "ENTERPRISE SYSTEMS",
  "DIGITAL SECURITY",
  "PROCESS AUTOMATION",
  "0-DAY VULNERABILITY TESTING",
];

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Scroll-triggered horizontal movement — moves faster as user scrolls
      gsap.to(track, {
        x: () => -(track.scrollWidth / 2),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const items = [...capabilities, ...capabilities, ...capabilities, ...capabilities];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-6 md:py-8 overflow-hidden grid-border-b grid-border-t"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-0 whitespace-nowrap will-change-transform"
      >
        {items.map((cap, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="type-h2 text-white px-4 md:px-6 shrink-0">
              {cap}
            </span>
            <span className="text-[var(--accent)] text-2xl md:text-3xl font-light shrink-0">
              //
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
