"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Reactive weight on the manifesto heading
      const heading = section.querySelector(".manifesto-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { fontWeight: 100, opacity: 0.2 },
          {
            fontWeight: 900,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              end: "top 15%",
              scrub: 1,
            },
          }
        );
      }

      // Reveal the body text
      const words = section.querySelectorAll(".manifesto-word");
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0.08 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: `top ${90 - i * 2}%`,
              end: `top ${60 - i * 2}%`,
              scrub: 1,
            },
          }
        );
      });

      // Stats reveal
      const stats = section.querySelectorAll(".stat-block");
      stats.forEach((stat) => {
        gsap.fromTo(
          stat,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 88%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const manifestoText = "We don't design websites. We engineer digital infrastructure. Every pixel is a decision. Every animation is a calculation. Every system we build is a fortress.";
  const words = manifestoText.split(" ");

  return (
    <section ref={sectionRef} className="relative w-full grid-border-b">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Statement */}
        <div className="p-6 md:p-10 lg:p-16 grid-border-r flex flex-col justify-center min-h-[60vh]">
          <span className="type-mono accent block mb-8">[ ABOUT ]</span>

          <h2
            className="manifesto-heading type-h2 text-white mb-10 leading-tight"
            style={{ fontWeight: 100 }}
          >
            WE BUILD SYSTEMS,
            <br />
            NOT WEBSITES.
          </h2>

          <p className="type-body leading-relaxed max-w-lg">
            {words.map((word, i) => (
              <span key={i} className="manifesto-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Right — Stats + Details */}
        <div className="flex flex-col">
          {/* Top stats row */}
          <div className="grid grid-cols-2">
            <div className="stat-block p-6 md:p-10 grid-border-b grid-border-r">
              <span className="type-mono text-[var(--muted)] block mb-4">FOUNDED</span>
              <span className="type-h2 text-white" style={{ fontWeight: 900 }}>2024</span>
            </div>
            <div className="stat-block p-6 md:p-10 grid-border-b">
              <span className="type-mono text-[var(--muted)] block mb-4">PROTOCOL</span>
              <span className="type-h2 accent" style={{ fontWeight: 900 }}>V1.0</span>
            </div>
          </div>

          {/* Middle stat */}
          <div className="stat-block p-6 md:p-10 grid-border-b">
            <span className="type-mono text-[var(--muted)] block mb-4">OPERATIONAL STATUS</span>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[var(--accent)] flicker" />
              <span className="type-h3 text-white">ALL SYSTEMS NOMINAL</span>
            </div>
          </div>

          {/* Bottom — Principles */}
          <div className="stat-block p-6 md:p-10 flex-1">
            <span className="type-mono text-[var(--muted)] block mb-6">PRINCIPLES</span>
            <div className="space-y-3">
              {[
                "Security is not a feature. It's the architecture.",
                "Performance is measured in milliseconds, not feelings.",
                "If it can be automated, it should be.",
                "Every system should outlive its creators.",
              ].map((principle, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="type-mono accent mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="type-body text-[var(--muted)]">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
