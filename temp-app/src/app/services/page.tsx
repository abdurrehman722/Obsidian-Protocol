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

const services = [
  {
    id: "001",
    title: "CREATIVE ENGINEERING & IMMERSIVE MOTION",
    tagline: "Where code becomes cinema.",
    description:
      "We don't just animate — we choreograph. Scroll-driven narratives, WebGL experiences, GSAP-powered motion systems, and Three.js environments that transform static pages into interactive events. Every frame is intentional. Every transition is engineered to hold attention.",
    capabilities: [
      "Scroll-driven storytelling & parallax systems",
      "WebGL / Three.js 3D environments",
      "GSAP + ScrollTrigger animation architecture",
      "Lenis smooth scrolling integration",
      "Canvas-based generative art & particle systems",
      "Micro-interaction design & implementation",
    ],
    stack: ["GSAP", "Three.js", "WebGL", "Lenis", "Canvas API", "Framer Motion"],
  },
  {
    id: "002",
    title: "AI-DRIVEN AUTOMATION & INTELLIGENT SYSTEMS",
    tagline: "Intelligence that operates.",
    description:
      "From custom LLM pipelines to autonomous decision engines — we build AI systems that don't just respond, they reason. Our architectures integrate seamlessly into existing infrastructure, transforming data into operational intelligence at scale.",
    capabilities: [
      "Custom LLM fine-tuning & deployment",
      "RAG (Retrieval-Augmented Generation) pipelines",
      "Autonomous workflow orchestration",
      "Natural language processing systems",
      "Predictive analytics & pattern recognition",
      "AI-powered content generation engines",
    ],
    stack: ["Python", "LangChain", "OpenAI", "Hugging Face", "TensorFlow", "Vector DBs"],
  },
  {
    id: "003",
    title: "ADVERSARIAL SECURITY & OFFENSIVE DEFENSE",
    tagline: "We think like attackers.",
    description:
      "Our security team operates offensively. Zero-day vulnerability research, red team operations, and adversarial testing that exposes weaknesses before they become breaches. We don't just build firewalls — we break them to prove they hold.",
    capabilities: [
      "Penetration testing & vulnerability assessment",
      "Zero-day vulnerability research",
      "Red team / Blue team operations",
      "Social engineering assessment",
      "Security architecture review & hardening",
      "Incident response protocol design",
    ],
    stack: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark", "Nessus", "Custom tooling"],
  },
  {
    id: "004",
    title: "INDUSTRIAL-SCALE FULL STACK ARCHITECTURE",
    tagline: "From database to pixel. Nothing in between.",
    description:
      "We architect entire systems — API layers, database schemas, server infrastructure, and frontend interfaces — as a single cohesive unit. Type-safe, test-covered, CI/CD-deployed. Built to serve millions without breaking a sweat.",
    capabilities: [
      "Next.js / React production applications",
      "Node.js / Express API architecture",
      "PostgreSQL / MongoDB database design",
      "GraphQL & REST API development",
      "Docker & Kubernetes orchestration",
      "CI/CD pipeline automation",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS / GCP"],
  },
  {
    id: "005",
    title: "ENTERPRISE-GRADE SYSTEMS (GROUND-UP)",
    tagline: "No templates. No shortcuts. Pure engineering.",
    description:
      "When off-the-shelf doesn't cut it, we build from scratch. Custom CMS platforms, ERP integrations, multi-tenant SaaS architectures, and internal tooling that operates at enterprise scale with startup speed.",
    capabilities: [
      "Custom CMS & admin panel development",
      "Multi-tenant SaaS architecture",
      "ERP & CRM system integration",
      "Real-time data processing pipelines",
      "Microservices architecture design",
      "Legacy system modernization & migration",
    ],
    stack: ["TypeScript", "Python", "Go", "Kafka", "Redis", "Terraform"],
  },
  {
    id: "006",
    title: "HIGH-END DIGITAL SECURITY SYSTEMS",
    tagline: "The fortress is the architecture.",
    description:
      "Military-grade encryption, zero-trust network architecture, and SOC/SIEM implementation. We build security into the DNA of every system — not as an afterthought, but as the foundation everything else rests on.",
    capabilities: [
      "Zero-trust network architecture",
      "End-to-end encryption implementation",
      "SOC / SIEM deployment & monitoring",
      "Identity & access management (IAM)",
      "Compliance auditing (SOC 2, ISO 27001)",
      "DDoS mitigation & traffic analysis",
    ],
    stack: ["AWS Security Hub", "Cloudflare", "Vault", "OAuth 2.0", "mTLS", "WAF"],
  },
  {
    id: "007",
    title: "OPERATIONAL PROCESS AUTOMATION",
    tagline: "Eliminate friction. Automate everything.",
    description:
      "We identify bottlenecks, map workflows, and replace manual processes with automated pipelines. From invoice processing to deployment workflows — if a human is doing it repeatedly, a machine should be doing it better.",
    capabilities: [
      "Business process analysis & mapping",
      "Robotic Process Automation (RPA)",
      "Automated testing & QA pipelines",
      "Deployment automation & DevOps",
      "Document processing & OCR systems",
      "Notification & alerting systems",
    ],
    stack: ["n8n", "Zapier", "Python", "Selenium", "GitHub Actions", "Ansible"],
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Hero title reactive weight
      const heroTitle = page.querySelector(".services-hero-title");
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

      // Each service block reveals
      const blocks = page.querySelectorAll(".service-block");
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 88%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );

        // Reactive title weight within each block
        const title = block.querySelector(".service-block-title");
        if (title) {
          gsap.fromTo(
            title,
            { fontWeight: 100 },
            {
              fontWeight: 900,
              ease: "none",
              scrollTrigger: {
                trigger: title,
                start: "top 85%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        }
      });

      // Capability lines stagger
      const capGroups = page.querySelectorAll(".cap-list");
      capGroups.forEach((group) => {
        const items = group.querySelectorAll("li");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: `top ${92 - i * 2}%`,
                end: `top ${75 - i * 2}%`,
                scrub: 1,
              },
            }
          );
        });
      });
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <ParticleConstellation />
      <NoiseOverlay />
      <Navigation />

      <div ref={pageRef}>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-20 grid-border-b">
          <span className="type-mono accent block mb-6">[ 007 PROTOCOLS ]</span>
          <h1
            className="services-hero-title type-display text-white leading-none"
            style={{ fontWeight: 100 }}
          >
            WHAT WE
            <br />
            ENGINEER
          </h1>
          <p className="type-body text-[var(--muted)] max-w-lg mt-8">
            Seven core protocols. Each one a discipline. Each one a weapon.
            We don&apos;t offer &quot;services&quot; — we deploy capabilities.
          </p>
        </section>

        {/* Service blocks */}
        {services.map((service, idx) => (
          <section
            key={service.id}
            className="service-block grid-border-b"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left: Number + Title */}
              <div className="lg:col-span-5 p-6 md:p-10 lg:p-16 grid-border-r flex flex-col justify-between min-h-[50vh]">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="type-mono text-[var(--muted)]">
                      PROTOCOL {service.id}
                    </span>
                    <span className="type-mono accent">
                      {String(idx + 1).padStart(2, "0")} / 07
                    </span>
                  </div>
                  <h2
                    className="service-block-title type-h2 text-white leading-tight mb-6"
                    style={{ fontWeight: 100 }}
                  >
                    {service.title}
                  </h2>
                  <p className="type-h3 accent mb-6" style={{ fontWeight: 400 }}>
                    {service.tagline}
                  </p>
                </div>
                <p className="type-body text-[var(--muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right: Capabilities + Stack */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Capabilities */}
                <div className="p-6 md:p-10 lg:p-16 grid-border-b flex-1">
                  <span className="type-mono text-[var(--muted)] block mb-6">
                    CAPABILITIES
                  </span>
                  <ul className="cap-list space-y-4">
                    {service.capabilities.map((cap, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 type-body text-white"
                      >
                        <span className="type-mono accent mt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="p-6 md:p-10 lg:px-16 lg:py-8">
                  <span className="type-mono text-[var(--muted)] block mb-4">
                    STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="type-mono text-white px-3 py-1 grid-border-strong hover:bg-white hover:text-black transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <Footer />
      </div>
    </SmoothScroll>
  );
}
