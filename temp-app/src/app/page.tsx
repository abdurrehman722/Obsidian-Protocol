"use client";

import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import ParticleConstellation from "@/components/ParticleConstellation";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesGrid from "@/components/ServicesGrid";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Particle constellation background */}
      <ParticleConstellation />

      {/* SVG Noise texture overlay */}
      <NoiseOverlay />

      {/* Global navigation */}
      <Navigation />

      {/* Main content — all scroll-driven */}
      <main>
        <Hero />
        <Marquee />
        <ServicesGrid />
        <Manifesto />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
