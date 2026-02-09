"use client";

import Link from "next/link";
import { useState } from "react";

const demos = [
  {
    id: "speech-to-text",
    icon: "🎤",
    title: "Speech to Text",
    desc: "Whisper-powered voice recognition",
    category: "Voice AI",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "text-to-speech",
    icon: "🔊",
    title: "Text to Speech",
    desc: "Natural multilingual voices",
    category: "Voice AI",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "image-processing",
    icon: "🖼️",
    title: "Image Processing",
    desc: "Vision AI & analysis",
    category: "Computer Vision",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "emotional-ai",
    icon: "💬",
    title: "Emotional AI",
    desc: "Sentiment & emotion detection",
    category: "NLP",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "factory-systems",
    icon: "🏭",
    title: "Factory Systems",
    desc: "Industrial automation AI",
    category: "Industrial",
    color: "from-gray-500 to-zinc-500",
  },
  {
    id: "logistics",
    icon: "🚚",
    title: "Logistics AI",
    desc: "Supply chain optimization",
    category: "Industrial",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "urban-planning",
    icon: "🏙️",
    title: "Urban Planning",
    desc: "Traffic & city simulation",
    category: "Simulation",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "policy-simulation",
    icon: "📊",
    title: "Policy Simulation",
    desc: "Decision impact analysis",
    category: "Simulation",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare AI",
    desc: "Medical diagnostics support",
    category: "Healthcare",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "economic-modeling",
    icon: "📈",
    title: "Economic Modeling",
    desc: "Market & financial analysis",
    category: "Finance",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "crisis-simulation",
    icon: "🌍",
    title: "Crisis Simulation",
    desc: "Disaster & pandemic modeling",
    category: "Simulation",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "genomics",
    icon: "🧬",
    title: "Genomics AI",
    desc: "DNA analysis & drug discovery",
    category: "Healthcare",
    color: "from-cyan-500 to-blue-500",
  },
];

const categories = ["All", "Voice AI", "Computer Vision", "NLP", "Industrial", "Simulation", "Healthcare", "Finance"];

export default function DemosPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDemos = activeCategory === "All"
    ? demos
    : demos.filter(demo => demo.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Free AI Demos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI <span className="gradient-text">Tools & Demos</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience Deep Room AI capabilities firsthand. Free demos for developers,
            researchers, and enterprises. Try before you integrate.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-dark-100 border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemos.map((demo) => (
            <Link
              key={demo.id}
              href={`/demos/${demo.id}`}
              className="group bg-dark-100 border border-white/10 rounded-xl p-6 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {demo.icon}
                  </div>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-xs text-gray-400">
                    {demo.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{demo.desc}</p>
                <div className="flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                  <span>Try Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredDemos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No demos found in this category.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-dark-100 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">
              Need <span className="gradient-text">Custom Solutions?</span>
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Our team can build tailored AI solutions for your specific business needs.
              Enterprise-grade, scalable, and secure.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
