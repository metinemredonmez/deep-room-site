"use client";

import Link from "next/link";
import { useState } from "react";

const layers = [
  { id: 1, name: "Human + AI", href: "human-ai", icon: "👤", color: "purple" },
  { id: 2, name: "Social Simulation", href: "social-simulation", icon: "🏙️", color: "blue" },
  { id: 3, name: "Space & Frontier", href: "space-frontier", icon: "🚀", color: "orange" },
  { id: 4, name: "Defense & Sovereign AI", href: "defense", icon: "🛡️", color: "green" },
  { id: 5, name: "Biological Intelligence", href: "bio-ai", icon: "🧬", color: "teal" },
];

const coreComponents = [
  {
    name: "Knowledge Graph",
    description: "Unified knowledge representation across all domains",
    icon: "🔗",
  },
  {
    name: "Multi-Modal Processing",
    description: "Text, image, audio, and video understanding",
    icon: "🎯",
  },
  {
    name: "Distributed Computing",
    description: "Scalable infrastructure for massive parallel processing",
    icon: "⚡",
  },
  {
    name: "Secure Data Pipeline",
    description: "End-to-end encrypted data flow with privacy preservation",
    icon: "🔐",
  },
  {
    name: "Federated Learning",
    description: "Collaborative learning without centralized data",
    icon: "🌐",
  },
  {
    name: "Explainable AI",
    description: "Transparent decision-making with interpretable outputs",
    icon: "💡",
  },
];

const designPrinciples = [
  {
    title: "Modularity",
    description:
      "Each layer operates independently while seamlessly integrating with others through well-defined interfaces.",
  },
  {
    title: "Scalability",
    description:
      "Architecture designed to handle growth from prototype to planetary scale without fundamental redesign.",
  },
  {
    title: "Resilience",
    description:
      "Fault-tolerant systems with graceful degradation and automatic recovery mechanisms.",
  },
  {
    title: "Interoperability",
    description:
      "Open standards and APIs enabling integration with external systems and future technologies.",
  },
];

const techStack = [
  { category: "Core AI", items: ["PyTorch", "TensorFlow", "JAX", "Transformers"] },
  { category: "Infrastructure", items: ["Kubernetes", "Docker", "Ray", "Spark"] },
  { category: "Data", items: ["PostgreSQL", "Neo4j", "Redis", "Elasticsearch"] },
  { category: "Security", items: ["Vault", "Keycloak", "TLS 1.3", "Zero Trust"] },
];

export default function ArchitecturePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            System <span className="gradient-text">Architecture</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A unified, multi-domain, multi-layer knowledge architecture designed
            for long-term scalability and integration.
          </p>
        </div>

        {/* Layer Diagram */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Five-Layer <span className="gradient-text">Model</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className={`flex items-center gap-4 p-4 rounded-xl mb-2 hover:bg-white/5 transition-colors ${
                  index === 0 ? "bg-purple-500/10" :
                  index === 1 ? "bg-blue-500/10" :
                  index === 2 ? "bg-orange-500/10" :
                  index === 3 ? "bg-green-500/10" :
                  "bg-teal-500/10"
                }`}
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl">
                  {layer.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold">Layer {layer.id}</div>
                  <div className="text-gray-400">{layer.name}</div>
                </div>
                <Link
                  href={`/layers/${layer.href}`}
                  className="text-primary hover:underline"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block h-1 w-48 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full" />
            <p className="text-gray-400 mt-4">
              Cross-layer integration enables breakthrough capabilities
            </p>
          </div>
        </div>

        {/* Core Components */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Core <span className="gradient-text">Components</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreComponents.map((component) => (
              <div
                key={component.name}
                className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-xl font-bold mb-2">{component.name}</h3>
                <p className="text-gray-400">{component.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Principles */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Design <span className="gradient-text">Principles</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {designPrinciples.map((principle) => (
              <div key={principle.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">{principle.title[0]}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="glass rounded-2xl p-6">
                <h3 className="font-bold mb-4 text-primary">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            {[
              { year: "2024", milestone: "Foundation Layer Complete" },
              { year: "2025", milestone: "Cross-Layer Integration" },
              { year: "2027", milestone: "Full Platform Launch" },
              { year: "2030", milestone: "Global Scale Operations" },
              { year: "2035+", milestone: "Next-Gen Architecture" },
            ].map((item, index) => (
              <div key={item.year} className="flex items-center gap-4 mb-6 last:mb-0">
                <div className="w-20 text-right">
                  <span className="font-bold gradient-text">{item.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full gradient-primary flex-shrink-0" />
                <div className="flex-1 glass rounded-xl p-4">
                  <span className="text-gray-300">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Build <span className="gradient-text">Together</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Interested in our architecture or want to collaborate on building
                the future of AI? Get in touch with our team.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:contact@deeproomai.com" className="text-white hover:text-primary transition-colors">
                      contact@deeproomai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Website</div>
                    <a href="https://deeproomai.com" className="text-white hover:text-primary transition-colors">
                      deeproomai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <span className="text-white">Global / Remote</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We will be in touch soon.");
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1.5 block">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
