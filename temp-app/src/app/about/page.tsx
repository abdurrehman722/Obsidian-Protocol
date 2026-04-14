"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import ParticleConstellation from "@/components/ParticleConstellation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: "2024", event: "PROTOCOL INITIATED", desc: "Founded with a single principle: security is not optional, it's structural." },
  { year: "2024", event: "FIRST DEPLOYMENT", desc: "Delivered first enterprise-grade system — full stack, zero incidents." },
  { year: "2025", event: "AI INTEGRATION", desc: "Expanded into AI-driven automation. Built custom LLM pipelines for operational intelligence." },
  { year: "2025", event: "OFFENSIVE SECURITY", desc: "Launched adversarial security division. Red team operations become core offering." },
  { year: "2026", event: "PROTOCOL V1.0", desc: "Seven core capabilities. Industrial scale. Global ambitions." },
];

const team = [
  { role: "FOUNDER & LEAD ENGINEER", focus: "Full Stack Architecture / Systems Design" },
  { role: "AI SYSTEMS ARCHITECT", focus: "LLM Pipelines / Neural Architecture" },
  { role: "OFFENSIVE SECURITY LEAD", focus: "Red Team / Vulnerability Research" },
  { role: "CREATIVE TECHNOLOGIST", focus: "Motion Systems / WebGL / GSAP" },
  { role: "DEVOPS & INFRASTRUCTURE", focus: "Cloud Architecture / CI/CD" },
  { role: "ENTERPRISE SOLUTIONS", focus: "SaaS / ERP / Legacy Migration" },
];

const stats = [
  { value: "99.9%", label: "UPTIME SLA" },
  { value: "<50ms", label: "AVG RESPONSE" },
  { value: "256-BIT", label: "ENCRYPTION" },
  { value: "24/7", label: "MONITORING" },
  { value: "0", label: "BREACHES" },
  { value: "∞", label: "AMBITION" },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Hero reactive weight
      const heroTitle = page.querySelector(".about-hero-title");
      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { fontWeight: 100, opacity: 0.15 },
          {
            fontWeight: 900,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroTitle,
              start: "top 90%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }

      // Philosophy words reveal
      const words = page.querySelectorAll(".philo-word");
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0.06 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: `top ${92 - i * 0.8}%`,
              end: `top ${65 - i * 0.8}%`,
              scrub: 1,
            },
          }
        );
      });

      // Timeline items
      const timelineItems = page.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, i) => {
        gsap.fromTo(
          item,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      // Timeline line grows
      const line = page.querySelector(".timeline-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );
      }

      // Stats reveal
      const statBlocks = page.querySelectorAll(".stat-cell");
      statBlocks.forEach((stat) => {
        gsap.fromTo(
          stat,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });

      // Team blocks
      const teamBlocks = page.querySelectorAll(".team-cell");
      teamBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              end: "top 70%",
              scrub: 1,
            },
          }
        );
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const philosophyText =
    "We exist at the intersection of engineering and paranoia. Every system we build assumes it will be attacked. Every interface we craft assumes it will be judged. We don't optimize for launch day — we optimize for the day everything goes wrong. Because that's the day architecture matters.";
  const philoWords = philosophyText.split(" ");

  return (
    <SmoothScroll>
      <ParticleConstellation />
      <NoiseOverlay />
      <Navigation />

      <div ref={pageRef}>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20 grid-border-b">
          <span className="type-mono accent block mb-6">[ ABOUT ]</span>
          <h1
            className="about-hero-title type-display text-white leading-none"
            style={{ fontWeight: 100 }}
          >
            WE ARE
            <br />
            OBSIDIAN
            <br />
            PROTOCOL
          </h1>
        </section>

        {/* Philosophy */}
        <section className="grid-border-b">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10 lg:p-16 grid-border-r min-h-[50vh] flex flex-col justify-center">
              <span className="type-mono accent block mb-8">[ PHILOSOPHY ]</span>
              <h2 className="type-h2 text-white mb-8" style={{ fontWeight: 800 }}>
                ENGINEERING
                <br />
                IS DEFENSE.
              </h2>
            </div>
            <div className="p-6 md:p-10 lg:p-16 flex items-center">
              <p className="type-body leading-relaxed text-2xl md:text-3xl font-light">
                {philoWords.map((word, i) => (
                  <span
                    key={i}
                    className="philo-word inline-block mr-[0.35em] text-[var(--muted)]"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid-border-b">
          <div className="px-4 md:px-8 py-10 grid-border-b">
            <span className="type-mono accent">[ METRICS ]</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-cell p-6 md:p-8 grid-border text-center invert-hover cursor-default"
              >
                <span
                  className="block text-white mb-2"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 900,
                  }}
                >
                  {stat.value}
                </span>
                <span className="type-mono text-[var(--muted)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="grid-border-b py-16 md:py-24">
          <div className="px-4 md:px-8 mb-16">
            <span className="type-mono accent block mb-4">[ TIMELINE ]</span>
            <h2 className="type-h1 text-white">THE PROTOCOL</h2>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-8">
            {/* Vertical line */}
            <div
              className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border-strong)]"
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-16 md:space-y-20">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`timeline-item relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--accent)] z-10" style={{ top: "6px" }} />

                  {/* Content */}
                  <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="type-mono accent block mb-2">{item.year}</span>
                    <h3 className="type-h3 text-white mb-2">{item.event}</h3>
                    <p className="type-body text-[var(--muted)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Operators (Team) */}
        <section className="grid-border-b">
          <div className="px-4 md:px-8 py-10 grid-border-b">
            <div className="flex items-center justify-between">
              <div>
                <span className="type-mono accent block mb-3">[ THE OPERATORS ]</span>
                <h2 className="type-h1 text-white">TEAM</h2>
              </div>
              <span className="type-mono text-[var(--muted)] hidden md:block">
                {String(team.length).padStart(2, "0")} OPERATORS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="team-cell p-6 md:p-10 grid-border invert-hover group cursor-default min-h-[180px] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="type-mono text-[var(--muted)] group-hover:text-black/50 transition-colors duration-300">
                    OP-{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-2 h-2 bg-[var(--accent)] group-hover:bg-black transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="type-h3 text-white group-hover:text-black transition-colors duration-300 mb-2" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}>
                    {member.role}
                  </h3>
                  <p className="type-mono text-[var(--muted)] group-hover:text-black/50 transition-colors duration-300">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Principles (expanded) */}
        <section className="grid-border-b">
          <div className="px-4 md:px-8 py-10 grid-border-b">
            <span className="type-mono accent">[ CORE PRINCIPLES ]</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              { title: "SECURITY FIRST", body: "Security is not a feature bolted on at the end. It's the foundation. Every design decision, every line of code, every infrastructure choice begins with the question: how can this be broken?" },
              { title: "PERFORMANCE IS TRUTH", body: "We don't hide behind subjective opinions about design. We measure. Response times, lighthouse scores, time-to-interactive — the numbers either validate or condemn." },
              { title: "AUTOMATE THE MUNDANE", body: "If a task is performed more than twice, it should be automated. Human intelligence is too valuable to waste on repetitive operations." },
              { title: "BUILD TO OUTLAST", body: "Trends change. Frameworks die. Our systems are architected to survive migrations, scale shifts, and the inevitable march of technological obsolescence." },
              { title: "ZERO COMPROMISE", body: "We don't cut corners. We don't ship 'good enough.' Every pixel, every API response, every deployment step is engineered to the same standard." },
              { title: "OFFENSIVE MINDSET", body: "We assume everything will be attacked. We assume the worst-case scenario. Then we engineer systems that thrive under those conditions." },
            ].map((principle, i) => (
              <div key={i} className="p-6 md:p-10 grid-border invert-hover group cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <span className="type-mono accent group-hover:text-black transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="type-h3 text-white group-hover:text-black transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                <p className="type-body text-[var(--muted)] group-hover:text-black/60 transition-colors duration-300 leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
