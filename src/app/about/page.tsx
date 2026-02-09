import Link from "next/link";
import Image from "next/image";

const team = [
  {
    name: "Dr. Alex Morgan",
    role: "Founder & CEO",
    bio: "20+ years in AI research, former lead at major tech companies.",
    avatar: "👨‍💼",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Science Officer",
    bio: "Pioneer in emotional AI and human-computer interaction.",
    avatar: "👩‍🔬",
  },
  {
    name: "Marcus Webb",
    role: "Head of Social Simulation",
    bio: "Expert in urban dynamics and complex systems modeling.",
    avatar: "👨‍💻",
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "Space AI Director",
    bio: "Former NASA researcher, specialist in autonomous systems.",
    avatar: "👩‍🚀",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Mission-Driven",
    description: "Every decision is guided by our long-term vision for beneficial AI.",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    description: "We believe the best solutions emerge from diverse perspectives working together.",
  },
  {
    icon: "🔬",
    title: "Rigorous",
    description: "Scientific rigor and evidence-based approaches underpin everything we do.",
  },
  {
    icon: "⚖️",
    title: "Ethical",
    description: "We prioritize responsible AI development with transparency and accountability.",
  },
];

const milestones = [
  { year: "2020", event: "Deep Room founded with initial vision" },
  { year: "2021", event: "First research partnerships established" },
  { year: "2022", event: "Five-layer architecture conceptualized" },
  { year: "2023", event: "Key technology breakthroughs achieved" },
  { year: "2024", event: "Platform beta launch and expansion" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            About <span className="gradient-text">Deep Room</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building the future of AI through unified, multi-domain architecture
            backed by 20+ years of software expertise.
          </p>
        </div>

        {/* Mission */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Deep Room exists to create AI systems that genuinely serve
                humanity across every frontier—from personal wellbeing to social
                harmony, from planetary sustainability to cosmic exploration.
              </p>
              <p className="text-gray-400 text-lg">
                We believe the next century of AI development will be defined not
                by isolated breakthroughs, but by the integration of knowledge
                across domains. That's why we're building a unified architecture
                that connects human cognition, social dynamics, space exploration,
                national security, and biological intelligence.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/logo.png"
                alt="Deep Room"
                width={180}
                height={180}
                className="mx-auto mb-4"
              />
              <div className="text-2xl font-bold gradient-text">
                Connecting Domains
              </div>
              <p className="text-gray-400">Enabling Futures</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-center gap-4 mb-6 last:mb-0"
              >
                <div className="w-16 text-right">
                  <span className="font-bold gradient-text">{milestone.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full gradient-primary" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-1 h-8 bg-white/10" />
                  )}
                </div>
                <div className="flex-1 text-gray-300">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <div className="text-primary text-sm mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We're always looking for talented individuals who share our vision
            for the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/research" className="btn-secondary">
              Explore Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
