# Assumptions - Obsidian Protocol

## Phase 1: Initial Setup (Completed - Previous)
- Next.js 16 (App Router, TypeScript, Tailwind) in `temp-app/`
- Deps: gsap, lenis, @studio-freight/lenis

## Phase 2: COMPLETE REDESIGN - Technical Brutalism (Current)
- Brand: OBSIDIAN PROTOCOL (not Hamdani Digital)
- Aesthetic: basement.studio inspired — Brutalist, high-contrast, visible grids
- Palette: #000000 (black), #FFFFFF (white), #FF4F00 (Safety Orange accent)
- Typography: Inter Tight, massive ultra-bold, screen-edge-bleeding
- ALL animations scroll-driven via ScrollTrigger — ZERO auto-play
- Lenis lerp: 0.05 for heavy cinematic feel
- SVG noise filter over entire body
- Reactive typography: font-weight changes Thin→Black on scroll

## Services (7):
1. Creative Engineering & Immersive Motion
2. AI-Driven Automation & Intelligent Systems
3. Adversarial Security & Offensive Defense
4. Industrial-Scale Full Stack Architecture
5. Enterprise-Grade Systems (Ground-Up)
6. High-End Digital Security Systems
7. Operational Process Automation

## Sections (scroll order):
1. Hero - "OBSIDIAN PROTOCOL" stagger-reveal, "Live Status: Secure" indicator
2. Marquee - Fast horizontal ticker of capabilities
3. Services Bento Grid - 7 services, thick borders, hover invert
4. Manifesto/About - Brutalist statement block
5. Footer - "INITIATE PROTOCOL" giant CTA

## Components to rewrite:
- globals.css, layout.tsx, SmoothScroll, Hero, Marquee, ServicesGrid, Manifesto, Footer, page.tsx
- DELETE: MagneticNav, TelemetricStreams, ProtocolSection (old theme)
