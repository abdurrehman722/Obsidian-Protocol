"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const line2LettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Stagger-reveal each letter of "OBSIDIAN" — scroll driven
      gsap.fromTo(
        lettersRef.current,
        { y: 120, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Stagger-reveal "PROTOCOL" — slightly delayed
      gsap.fromTo(
        line2LettersRef.current,
        { y: 120, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        }
      );

      // Subtitle reveal
      const sub = section.querySelector(".hero-sub");
      if (sub) {
        gsap.fromTo(
          sub,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const line1 = "OBSIDIAN";
  const line2 = "PROTOCOL";

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden grid-border-b"
    >
      {/* Status indicator — top right */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-[var(--accent)] flicker" />
        <span className="type-mono text-[var(--muted)]">
          Live Status: Secure
        </span>
      </div>

      {/* Top-left label */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
        <span className="type-mono text-[var(--muted)]">
          © 2024
        </span>
      </div>

      {/* Main title — massive, edge-bleeding */}
      <div className="px-4 md:px-8 w-full">
        <h1 className="type-display text-white leading-none overflow-hidden" style={{ perspective: "600px" }}>
          <div className="flex flex-wrap">
            {line1.split("").map((char, i) => (
              <span
                key={`l1-${i}`}
                ref={(el) => {
                  if (el) lettersRef.current[i] = el;
                }}
                className="inline-block will-change-transform"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </span>
            ))}
          </div>
        </h1>
        <h1 className="type-display text-white leading-none overflow-hidden mt-[-0.02em]" style={{ perspective: "600px" }}>
          <div className="flex flex-wrap">
            {line2.split("").map((char, i) => (
              <span
                key={`l2-${i}`}
                ref={(el) => {
                  if (el) line2LettersRef.current[i] = el;
                }}
                className="inline-block will-change-transform"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </span>
            ))}
          </div>
        </h1>
      </div>

      {/* Subtitle */}
      <div className="hero-sub px-4 md:px-8 mt-8 md:mt-12 flex items-center justify-between">
        <p className="type-body text-[var(--muted)] max-w-md">
          High-end digital project development. We engineer systems that are
          secure, performant, and built to outlast.
        </p>
        <div className="hidden md:flex items-center gap-6">
          <span className="type-mono text-[var(--muted)]">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </div>
      </div>

      {/* Grid decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--border)]" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[var(--border)] opacity-30 hidden lg:block" />
    </section>
  );
}
