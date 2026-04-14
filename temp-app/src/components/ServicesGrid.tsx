"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "001",
    title: "Creative Engineering & Immersive Motion",
    desc: "Scroll-driven narratives, WebGL experiences, and motion systems that turn interfaces into cinematic events.",
    span: "col-span-2 row-span-1", // wide
  },
  {
    id: "002",
    title: "AI-Driven Automation & Intelligent Systems",
    desc: "Custom LLM pipelines, autonomous workflows, and neural architectures engineered for operational dominance.",
    span: "col-span-1 row-span-2", // tall
  },
  {
    id: "003",
    title: "Adversarial Security & Offensive Defense",
    desc: "Red team operations, zero-day research, and penetration testing. We think like attackers so you don't have to.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "004",
    title: "Industrial-Scale Full Stack Architecture",
    desc: "Production-grade systems from database to pixel. Type-safe, performant, and obsessively engineered.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "005",
    title: "Enterprise-Grade Systems (Ground-Up)",
    desc: "Bespoke platforms built from the metal up. No templates, no shortcuts—pure engineering.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "006",
    title: "High-End Digital Security Systems",
    desc: "Military-grade encryption, zero-trust infrastructure, and hardened defense perimeters for critical assets.",
    span: "col-span-1 row-span-1",
  },
  {
    id: "007",
    title: "Operational Process Automation",
    desc: "Eliminate friction. Automate the mundane. We build systems that run themselves.",
    span: "col-span-2 row-span-1", // wide
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cells = section.querySelectorAll(".service-cell");

      // Each cell reveals on scroll
      cells.forEach((cell) => {
        gsap.fromTo(
          cell,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cell,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      // Reactive typography — font-weight morphs as user scrolls through section
      const titles = section.querySelectorAll(".reactive-title");
      titles.forEach((title) => {
        gsap.fromTo(
          title,
          { fontWeight: 100 },
          {
            fontWeight: 900,
            ease: "none",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full grid-border-b">
      {/* Section header */}
      <div className="px-4 md:px-8 py-10 md:py-16 grid-border-b">
        <div className="flex items-center justify-between">
          <div>
            <span className="type-mono accent block mb-3">[ CAPABILITIES ]</span>
            <h2 className="type-h1 text-white">SERVICES</h2>
          </div>
          <span className="type-mono text-[var(--muted)] hidden md:block">
            007 PROTOCOLS
          </span>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-cell ${service.span} grid-border p-6 md:p-8 lg:p-10 invert-hover group cursor-crosshair min-h-[200px] md:min-h-[260px] flex flex-col justify-between`}
          >
            {/* Top: ID */}
            <div className="flex items-center justify-between mb-6">
              <span className="type-mono text-[var(--muted)] group-hover:text-black/50 transition-colors duration-300">
                {service.id}
              </span>
              <svg
                className="w-4 h-4 text-[var(--accent)] group-hover:text-black transition-colors duration-300 opacity-0 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>

            {/* Middle: Title (reactive weight) */}
            <h3 className="reactive-title type-h3 text-white group-hover:text-black transition-colors duration-300 mb-4" style={{ fontWeight: 100 }}>
              {service.title}
            </h3>

            {/* Bottom: Description */}
            <p className="type-body text-[var(--muted)] group-hover:text-black/60 transition-colors duration-300">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
