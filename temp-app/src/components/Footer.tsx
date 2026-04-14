"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Reactive weight on the CTA text
      const cta = section.querySelector(".cta-text");
      if (cta) {
        gsap.fromTo(
          cta,
          { fontWeight: 100, scale: 0.9, opacity: 0.15 },
          {
            fontWeight: 900,
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 10%",
              scrub: 1,
            },
          }
        );
      }

      // Bottom bar slide up
      const bar = section.querySelector(".footer-bar");
      if (bar) {
        gsap.fromTo(
          bar,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 95%",
              end: "top 75%",
              scrub: 1,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="relative w-full bg-black">
      {/* Giant CTA */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 grid-border-b cursor-pointer invert-hover group">
        <a
          href="mailto:abdurrhman72276@gmail.com"
          className="text-center w-full"
        >
          <span className="type-mono accent block mb-6 group-hover:text-black transition-colors duration-300">
            [ READY? ]
          </span>
          <h2
            className="cta-text type-display text-white group-hover:text-black transition-colors duration-300 leading-none"
            style={{ fontWeight: 100 }}
          >
            INITIATE
            <br />
            PROTOCOL
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <svg
              className="w-5 h-5 text-[var(--accent)] group-hover:text-black transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="type-mono text-[var(--muted)] group-hover:text-black/50 transition-colors duration-300">
              abdurrhman72276@gmail.com
            </span>
          </div>
        </a>
      </div>

      {/* Footer bar */}
      <div className="footer-bar px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[var(--accent)]" />
            <span className="type-label text-white tracking-[0.2em]">
              OBSIDIAN PROTOCOL
            </span>
          </div>

          {/* Page Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "SERVICES", href: "/services" },
              { label: "ABOUT", href: "/about" },
              { label: "CONTACT", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="type-mono text-[var(--muted)] hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="type-mono text-[var(--muted)] hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <span className="type-mono text-[var(--muted)]">
            © {new Date().getFullYear()} — All systems reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
