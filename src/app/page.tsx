"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const layers = [
  {
    id: "human-ai",
    title: "Human + AI",
    icon: "/icons/ai-brain.svg",
    color: "from-purple-500 to-pink-500",
    description:
      "Emotional AI companions, personalized decision-making systems, and human-AI collaboration frameworks.",
    features: [
      "Emotional Intelligence",
      "Personal AI Companions",
      "Decision Support",
      "Cognitive Enhancement",
    ],
  },
  {
    id: "social-simulation",
    title: "Social Simulation",
    icon: "/icons/buildings.svg",
    color: "from-blue-500 to-cyan-500",
    description:
      "Testing policies, modeling societies, and simulating complex social dynamics at scale.",
    features: [
      "Policy Testing",
      "Urban Planning",
      "Economic Modeling",
      "Behavioral Prediction",
    ],
  },
  {
    id: "space-frontier",
    title: "Space & Frontier",
    icon: "/icons/rocket.svg",
    color: "from-orange-500 to-red-500",
    description:
      "Satellites, robotics, deep space exploration, and autonomous systems for frontier environments.",
    features: [
      "Satellite AI",
      "Space Robotics",
      "Mission Planning",
      "Resource Extraction",
    ],
  },
  {
    id: "defense",
    title: "Defense & Sovereign AI",
    icon: "/icons/cyber-security.svg",
    color: "from-green-500 to-emerald-500",
    description:
      "National security applications, strategic autonomy, and sovereign AI infrastructure.",
    features: [
      "Threat Analysis",
      "Cyber Defense",
      "Strategic Planning",
      "Autonomous Systems",
    ],
  },
  {
    id: "bio-ai",
    title: "Biological Intelligence",
    icon: "/icons/dna.svg",
    color: "from-teal-500 to-blue-500",
    description:
      "Genomics, drug discovery, neuro-AI interfaces, and biological system modeling.",
    features: [
      "Genomics AI",
      "Drug Discovery",
      "Neuro Interfaces",
      "Bio Computing",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Compute",
    icon: "/icons/cloud-server.svg",
    color: "from-yellow-500 to-orange-500",
    description:
      "Scalable AI infrastructure, distributed computing, and high-performance systems for global deployment.",
    features: [
      "Cloud Computing",
      "Edge AI",
      "Data Centers",
      "GPU Clusters",
    ],
  },
];

const faqItems = [
  {
    question: "What is Deep Room AI?",
    answer:
      "Deep Room AI is a unified, multi-domain, multi-layer knowledge architecture designed for a 10-to-30-year horizon. It connects Human + AI, Social Simulation, Space & Frontier Technologies, Defense & Sovereign AI, and Biological Intelligence into one visionary platform.",
  },
  {
    question: "How can I collaborate with Deep Room?",
    answer:
      "We welcome collaborations from researchers, institutions, and organizations. You can reach out through our contact form, explore our open-source repositories, or apply to our research programs.",
  },
  {
    question: "Is Deep Room AI open source?",
    answer:
      "Yes, many of our core components and research tools are open source. We believe in transparent development and community-driven innovation. Check our GitHub for available repositories.",
  },
  {
    question: "What industries can benefit from Deep Room?",
    answer:
      "Deep Room serves multiple sectors including healthcare, defense, space exploration, urban planning, education, and research institutions. Our modular architecture allows customization for specific industry needs.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Our AI assistant uses advanced language models with speech-to-text and text-to-speech capabilities. It can help you explore our platform, understand our research, and guide you through our offerings.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">
              Building the Future of AI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Deep Room</span>
            <br />
            <span className="text-gray-300">AI Architecture</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            A unified, multi-domain, multi-layer knowledge architecture
            connecting{" "}
            <span className="text-white font-medium">Human + AI</span>,{" "}
            <span className="text-white font-medium">Social Simulation</span>,
            and{" "}
            <span className="text-white font-medium">Space & Frontier</span>{" "}
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/layers" className="btn-primary px-6 py-3">
              Explore Layers
            </Link>
            <Link
              href="#vision"
              className="btn-secondary px-6 py-3 glass"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "5", label: "Core Layers" },
              { value: "30+", label: "Research Areas" },
              { value: "10-30", label: "Year Horizon" },
              { value: "∞", label: "Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-base text-gray-400 mb-6">
                Deep Room envisions a future where artificial intelligence
                seamlessly integrates with human cognition, social systems, and
                frontier exploration—creating a unified knowledge architecture
                that spans decades of innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Multi-domain knowledge integration",
                  "Long-term strategic planning (10-30 years)",
                  "Open research and collaboration",
                  "Ethical AI development",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl glass p-8 relative overflow-hidden">
                {/* Background Image - Abstract AI Network */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-900/50 to-dark/90" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold gradient-text">
                      Unified Intelligence
                    </div>
                    <p className="text-gray-300 text-sm mt-2">
                      Connecting domains, enabling futures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layers Section */}
      <section id="layers" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Six <span className="gradient-text">Core Layers</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Deep Room architecture consists of six interconnected layers,
              each representing a major domain of AI application and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layers.map((layer) => (
              <Link
                key={layer.id}
                href={`/layers/${layer.id}`}
                className="group relative rounded-xl bg-dark-100 border border-white/10 p-6 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                <div className="relative">
                  <Image src={layer.icon} alt={layer.title} width={48} height={48} className="mb-3" />
                  <h3 className="text-lg font-bold mb-2">{layer.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{layer.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm group-hover:gap-3 transition-all">
                    <span>Explore Layer</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Focus <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Our research spans multiple disciplines, creating bridges between
              theoretical foundations and practical applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🔬", title: "Research", desc: "Cutting-edge AI studies" },
              { icon: "📚", title: "Education", desc: "Knowledge transfer" },
              { icon: "🌐", title: "Open Source", desc: "Community-driven" },
              { icon: "🤝", title: "Collaboration", desc: "Global partnerships" },
              { icon: "⚖️", title: "Ethics", desc: "Responsible AI" },
              { icon: "🏗️", title: "Architecture", desc: "System design" },
              { icon: "📊", title: "Analytics", desc: "Data insights" },
              { icon: "🔮", title: "Future", desc: "Long-term vision" },
            ].map((area) => (
              <div
                key={area.title}
                className="glass rounded-xl p-4 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-2xl mb-2">{area.icon}</div>
                <div className="font-medium text-sm mb-0.5">{area.title}</div>
                <div className="text-xs text-gray-400">{area.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demos Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Try Our <span className="gradient-text">AI Tools</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Experience our AI capabilities firsthand. Free demos for developers and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: "/icons/microphone.svg", title: "Speech to Text", desc: "Whisper-powered voice recognition", href: "/demos/speech-to-text" },
              { icon: "/icons/microphone.svg", title: "Text to Speech", desc: "Natural multilingual voices", href: "/demos/text-to-speech" },
              { icon: "/icons/view.svg", title: "Image Processing", desc: "Vision AI & analysis", href: "/demos/image-processing" },
              { icon: "/icons/ai-brain.svg", title: "Emotional AI", desc: "Sentiment & emotion detection", href: "/demos/emotional-ai" },
            ].map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                className="glass rounded-xl p-4 text-center hover:bg-white/5 hover:scale-105 transition-all group"
              >
                <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Image src={demo.icon} alt={demo.title} width={40} height={40} />
                </div>
                <div className="font-medium text-sm mb-0.5">{demo.title}</div>
                <div className="text-xs text-gray-400">{demo.desc}</div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { icon: "/icons/conveyor-belt.svg", title: "Factory Systems", desc: "Industrial automation AI", href: "/demos/factory-systems" },
              { icon: "/icons/delivery-truck.svg", title: "Logistics AI", desc: "Supply chain optimization", href: "/demos/logistics" },
              { icon: "/icons/buildings.svg", title: "Urban Planning", desc: "Traffic & city simulation", href: "/demos/urban-planning" },
              { icon: "/icons/3d-report.svg", title: "Policy Simulation", desc: "Decision impact analysis", href: "/demos/policy-simulation" },
            ].map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                className="glass rounded-xl p-4 text-center hover:bg-white/5 hover:scale-105 transition-all group"
              >
                <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Image src={demo.icon} alt={demo.title} width={40} height={40} />
                </div>
                <div className="font-medium text-sm mb-0.5">{demo.title}</div>
                <div className="text-xs text-gray-400">{demo.desc}</div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "/icons/heart-attack.svg", title: "Healthcare AI", desc: "Medical diagnostics support", href: "/demos/healthcare" },
              { icon: "/icons/3d-report.svg", title: "Economic Modeling", desc: "Market & financial analysis", href: "/demos/economic-modeling" },
              { icon: "/icons/eco.svg", title: "Crisis Simulation", desc: "Disaster & pandemic modeling", href: "/demos/crisis-simulation" },
              { icon: "/icons/dna.svg", title: "Genomics AI", desc: "DNA analysis & drug discovery", href: "/demos/genomics" },
            ].map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                className="glass rounded-xl p-4 text-center hover:bg-white/5 hover:scale-105 transition-all group"
              >
                <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Image src={demo.icon} alt={demo.title} width={40} height={40} />
                </div>
                <div className="font-medium text-sm mb-0.5">{demo.title}</div>
                <div className="text-xs text-gray-400">{demo.desc}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/demos" className="btn-primary">
              View All Demos
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-sm text-gray-400">
              Find answers to common questions about Deep Room AI.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-4 py-3 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-sm">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-3 text-gray-400 text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Ready to explore the future of AI? Contact us to learn more about
                Deep Room or discuss collaboration opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="mailto:contact@deeproomai.com" className="glass rounded-xl p-4 hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/icons/mail.svg" alt="Email" width={20} height={20} />
                    <span className="text-sm text-gray-500">Email</span>
                  </div>
                  <div className="text-white group-hover:text-primary transition-colors text-xs sm:text-sm break-all">
                    contact@deeproomai.com
                  </div>
                </a>

                <a href="https://deeproomai.com" target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-4 hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="text-sm text-gray-500">Website</span>
                  </div>
                  <div className="text-white group-hover:text-primary transition-colors text-sm">
                    deeproomai.com
                  </div>
                </a>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
                    <span className="text-sm text-gray-500">Location</span>
                  </div>
                  <div className="text-white text-sm">Global / Remote</div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
              <p className="text-sm text-gray-400 mb-6">
                Join our newsletter for updates on research and developments.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We will be in touch soon.");
                  setEmail("");
                }}
              >
                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                  <button type="submit" className="w-full btn-primary py-3">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
