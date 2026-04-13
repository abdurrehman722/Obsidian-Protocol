"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MagneticNav() {
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Magnetic effect on logo
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.25;
      const deltaY = (e.clientY - centerY) * 0.25;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 120) {
        gsap.to(logo, {
          x: deltaX * 0.4,
          y: deltaY * 0.4,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(logo, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Protocol", href: "#protocol" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "frosted-glass py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Magnetic Logo */}
        <div ref={logoRef} className="cursor-pointer will-change-transform">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[var(--gold)] flex items-center justify-center relative">
              <span
                className="gold-gradient-text text-lg font-light tracking-widest"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                H
              </span>
              <div className="absolute -top-[1px] -right-[1px] w-2 h-2 bg-[var(--gold)]" />
            </div>
            <div className="hidden sm:block">
              <span className="fluid-caption text-[var(--gold)] block tracking-[0.25em]">
                HAMDANI
              </span>
              <span className="fluid-caption text-[var(--foreground)] opacity-40 block tracking-[0.2em]" style={{ fontSize: "0.55rem" }}>
                DIGITAL
              </span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="fluid-caption text-[var(--foreground)] opacity-50 hover:opacity-100 hover:text-[var(--gold)] transition-all duration-300 hidden md:block"
            >
              {link.label}
            </a>
          ))}
          <button className="frosted-glass px-5 py-2 fluid-caption text-[var(--gold)] hover:bg-[var(--gold-dim)] transition-all duration-300 cursor-pointer">
            Initialize
          </button>
        </div>
      </div>
    </nav>
  );
}
