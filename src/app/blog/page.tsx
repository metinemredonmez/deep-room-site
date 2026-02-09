"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "AI Research", "Industry", "Tutorials", "Company News"];

const blogPosts = [
  {
    slug: "future-of-emotional-ai",
    title: "The Future of Emotional AI: How Machines Learn to Understand Us",
    excerpt: "Exploring the revolutionary advances in affective computing and how AI systems are becoming capable of understanding, interpreting, and responding to human emotions.",
    category: "AI Research",
    date: "February 5, 2025",
    readTime: "8 min read",
    image: "/icons/ai-brain.svg",
    featured: true,
    layer: "Human + AI"
  },
  {
    slug: "social-simulation-urban-planning",
    title: "How Social Simulation is Revolutionizing Urban Planning",
    excerpt: "Cities around the world are using AI-powered social simulations to test policies before implementation. Here's how it works and why it matters.",
    category: "Industry",
    date: "February 3, 2025",
    readTime: "6 min read",
    image: "/icons/buildings.svg",
    featured: true,
    layer: "Social Simulation"
  },
  {
    slug: "ai-in-space-exploration",
    title: "AI in Space: The Next Frontier of Autonomous Exploration",
    excerpt: "From satellite operations to Mars rovers, artificial intelligence is becoming essential for space exploration. Deep Room's approach to frontier AI.",
    category: "AI Research",
    date: "January 28, 2025",
    readTime: "10 min read",
    image: "/icons/rocket.svg",
    featured: true,
    layer: "Space & Frontier"
  },
  {
    slug: "sovereign-ai-national-security",
    title: "Sovereign AI: Building National AI Infrastructure for Security",
    excerpt: "Why nations need their own AI capabilities and how Deep Room is helping build secure, sovereign AI infrastructure.",
    category: "Industry",
    date: "January 25, 2025",
    readTime: "7 min read",
    image: "/icons/cyber-security.svg",
    layer: "Defense & Sovereign AI"
  },
  {
    slug: "genomics-ai-drug-discovery",
    title: "AI-Powered Drug Discovery: From Genomics to Clinical Trials",
    excerpt: "How biological intelligence and AI are accelerating the journey from genetic insights to life-saving treatments.",
    category: "AI Research",
    date: "January 20, 2025",
    readTime: "9 min read",
    image: "/icons/dna.svg",
    layer: "Biological Intelligence"
  },
  {
    slug: "building-scalable-ai-infrastructure",
    title: "Building Scalable AI Infrastructure: Lessons from Deep Room",
    excerpt: "A deep dive into the technical architecture that powers enterprise-grade AI systems at global scale.",
    category: "Tutorials",
    date: "January 15, 2025",
    readTime: "12 min read",
    image: "/icons/cloud-server.svg",
    layer: "Infrastructure"
  },
  {
    slug: "voice-ai-enterprise",
    title: "Voice AI in the Enterprise: Beyond Simple Assistants",
    excerpt: "From customer service to industrial automation, voice AI is transforming how businesses operate. Real-world use cases and implementation strategies.",
    category: "Industry",
    date: "January 10, 2025",
    readTime: "6 min read",
    image: "/icons/microphone.svg"
  },
  {
    slug: "computer-vision-manufacturing",
    title: "Computer Vision in Manufacturing: Quality Control at Scale",
    excerpt: "How AI-powered visual inspection is reducing defects and improving efficiency in modern factories.",
    category: "Industry",
    date: "January 5, 2025",
    readTime: "7 min read",
    image: "/icons/view.svg"
  },
  {
    slug: "deep-room-2025-vision",
    title: "Deep Room 2025: Our Vision for the Year Ahead",
    excerpt: "CEO letter outlining Deep Room's strategic priorities, new partnerships, and exciting developments coming this year.",
    category: "Company News",
    date: "January 1, 2025",
    readTime: "5 min read",
    image: "/logo.png"
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-gray-300">Deep Room Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Insights & <span className="gradient-text">Research</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore the latest in AI research, industry applications, and Deep Room developments.
            Stay informed about the technologies shaping our future.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative">
                  <Image src={post.image} alt={post.title} width={80} height={80} className="opacity-60 group-hover:scale-110 transition-transform" />
                  {post.layer && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {post.layer}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-primary">{post.category}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-dark-100 border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-dark-100 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                <Image src={post.image} alt={post.title} width={60} height={60} className="opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-primary font-medium">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-primary text-sm">
                  <span>Read more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay <span className="gradient-text">Updated</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest research updates, industry insights, and Deep Room news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl bg-dark border border-white/10 focus:border-primary focus:outline-none"
            />
            <button type="submit" className="btn-primary px-8 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
