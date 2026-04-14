"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import ParticleConstellation from "@/components/ParticleConstellation";
import Navigation from "@/components/Navigation";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "> OBSIDIAN PROTOCOL // CONTACT TERMINAL",
    "> STATUS: AWAITING INPUT...",
  ]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      const heroTitle = page.querySelector(".contact-hero-title");
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
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      // Form fields reveal
      const fields = page.querySelectorAll(".form-field");
      fields.forEach((field, i) => {
        gsap.fromTo(
          field,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: field,
              start: `top ${90 - i * 3}%`,
              end: `top ${70 - i * 3}%`,
              scrub: 1,
            },
          }
        );
      });

      // Info panel
      const infos = page.querySelectorAll(".info-block");
      infos.forEach((info) => {
        gsap.fromTo(
          info,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: info,
              start: "top 88%",
              end: "top 65%",
              scrub: 1,
            },
          }
        );
      });
    }, page);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTerminalLines((prev) => [
      ...prev,
      `> NAME: ${formState.name}`,
      `> EMAIL: ${formState.email}`,
      `> SERVICE: ${formState.service || "GENERAL INQUIRY"}`,
      "> PROCESSING...",
      "> PROTOCOL INITIATED SUCCESSFULLY.",
      "> WE WILL RESPOND WITHIN 24 HOURS.",
      "> STATUS: COMPLETE ✓",
    ]);
  };

  return (
    <SmoothScroll>
      <ParticleConstellation />
      <NoiseOverlay />
      <Navigation />

      <div ref={pageRef}>
        {/* Hero */}
        <section className="min-h-[70vh] flex flex-col justify-center px-4 md:px-8 pt-20 grid-border-b">
          <span className="type-mono accent block mb-6">[ CONTACT ]</span>
          <h1
            className="contact-hero-title type-display text-white leading-none"
            style={{ fontWeight: 100 }}
          >
            INITIATE
            <br />
            PROTOCOL
          </h1>
          <p className="type-body text-[var(--muted)] max-w-lg mt-8">
            Ready to build something that lasts? Every engagement begins with a
            conversation. Tell us what you need — we&apos;ll tell you how we&apos;d engineer it.
          </p>
        </section>

        {/* Form + Info */}
        <section className="grid-border-b">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Form */}
            <div className="lg:col-span-7 p-6 md:p-10 lg:p-16 grid-border-r">
              <span className="type-mono accent block mb-8">[ TRANSMISSION FORM ]</span>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="form-field">
                    <label className="type-mono text-[var(--muted)] block mb-3">
                      NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="ENTER YOUR NAME"
                      className="w-full bg-transparent grid-border-strong px-4 py-3 text-white type-body placeholder:text-[var(--dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="type-mono text-[var(--muted)] block mb-3">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="YOUR@EMAIL.COM"
                      className="w-full bg-transparent grid-border-strong px-4 py-3 text-white type-body placeholder:text-[var(--dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    />
                  </div>

                  {/* Service */}
                  <div className="form-field">
                    <label className="type-mono text-[var(--muted)] block mb-3">
                      PROTOCOL
                    </label>
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-black grid-border-strong px-4 py-3 text-white type-body focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    >
                      <option value="">SELECT SERVICE</option>
                      <option value="creative">CREATIVE ENGINEERING</option>
                      <option value="ai">AI AUTOMATION</option>
                      <option value="security">ADVERSARIAL SECURITY</option>
                      <option value="fullstack">FULL STACK ARCHITECTURE</option>
                      <option value="enterprise">ENTERPRISE SYSTEMS</option>
                      <option value="digital-security">DIGITAL SECURITY</option>
                      <option value="automation">PROCESS AUTOMATION</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-field">
                    <label className="type-mono text-[var(--muted)] block mb-3">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="DESCRIBE YOUR PROJECT, OBJECTIVES, AND TIMELINE..."
                      className="w-full bg-transparent grid-border-strong px-4 py-3 text-white type-body placeholder:text-[var(--dim)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black type-h3 tracking-[0.1em] hover:bg-[var(--accent)] hover:text-black transition-colors duration-300 cursor-pointer"
                  >
                    TRANSMIT
                  </button>
                </form>
              ) : (
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 bg-[var(--accent)] mx-auto mb-6" />
                    <h3 className="type-h2 text-white mb-4">TRANSMITTED</h3>
                    <p className="type-body text-[var(--muted)]">
                      Protocol initiated. We&apos;ll respond within 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Info + Terminal */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Direct contact */}
              <div className="info-block p-6 md:p-10 grid-border-b">
                <span className="type-mono text-[var(--muted)] block mb-6">DIRECT</span>
                <div className="space-y-4">
                  <div>
                    <span className="type-mono accent block mb-1">EMAIL</span>
                    <a
                      href="mailto:abdurrhman72276@gmail.com"
                      className="type-body text-white hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      abdurrhman72276@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="type-mono accent block mb-1">PHONE</span>
                    <a
                      href="tel:+61456610488"
                      className="type-body text-white hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      +61 456 610 488
                    </a>
                  </div>
                  <div>
                    <span className="type-mono accent block mb-1">SECURE</span>
                    <span className="type-body text-[var(--muted)]">
                      PGP key available upon request
                    </span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="info-block p-6 md:p-10 grid-border-b">
                <span className="type-mono text-[var(--muted)] block mb-6">CHANNELS</span>
                <div className="space-y-3">
                  {[
                    { label: "GITHUB", handle: "@obsidianprotocol" },
                    { label: "LINKEDIN", handle: "/obsidian-protocol" },
                    { label: "TWITTER / X", handle: "@obsidianproto" },
                  ].map((channel) => (
                    <div key={channel.label} className="flex items-center justify-between">
                      <span className="type-mono text-[var(--muted)]">{channel.label}</span>
                      <a
                        href="#"
                        className="type-mono text-white hover:text-[var(--accent)] transition-colors duration-200"
                      >
                        {channel.handle}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal output */}
              <div className="info-block p-6 md:p-10 flex-1 bg-black/50">
                <span className="type-mono text-[var(--muted)] block mb-4">TERMINAL</span>
                <div
                  className="font-mono text-xs leading-6 text-[var(--accent)] overflow-hidden"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {terminalLines.map((line, i) => (
                    <div key={i} className={i === terminalLines.length - 1 ? "flicker" : ""}>
                      {line}
                    </div>
                  ))}
                  <span className="inline-block w-2 h-4 bg-[var(--accent)] ml-1 flicker" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom bar */}
        <footer className="px-4 md:px-8 py-6 grid-border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--accent)]" />
              <span className="type-label text-white tracking-[0.2em]">OBSIDIAN PROTOCOL</span>
            </div>
            <span className="type-mono text-[var(--muted)]">
              © {new Date().getFullYear()} — All systems reserved.
            </span>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
