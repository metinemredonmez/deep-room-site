import Link from "next/link";

const features = [
  {
    icon: "💭",
    title: "Emotional Intelligence",
    description:
      "AI systems that understand, interpret, and respond to human emotions with empathy and nuance.",
  },
  {
    icon: "🤝",
    title: "Personal AI Companions",
    description:
      "Customized AI assistants that learn individual preferences and provide personalized support.",
  },
  {
    icon: "🧭",
    title: "Decision Support Systems",
    description:
      "AI-powered frameworks that help humans make better decisions in complex scenarios.",
  },
  {
    icon: "🧠",
    title: "Cognitive Enhancement",
    description:
      "Tools and interfaces that augment human cognitive capabilities through AI assistance.",
  },
  {
    icon: "🎯",
    title: "Behavioral Prediction",
    description:
      "Models that anticipate human behavior patterns for improved interaction design.",
  },
  {
    icon: "💬",
    title: "Natural Communication",
    description:
      "Advanced NLP systems enabling seamless human-AI dialogue and understanding.",
  },
];

const researchAreas = [
  "Affective Computing",
  "Human-Robot Interaction",
  "Cognitive Architecture",
  "Personalization Algorithms",
  "Trust in AI Systems",
  "Ethical AI Companions",
];

const projects = [
  {
    name: "EmpathAI",
    status: "Active",
    description: "Emotional recognition and response system for healthcare applications",
  },
  {
    name: "CogniPartner",
    status: "Beta",
    description: "Personal AI assistant with learning capabilities",
  },
  {
    name: "DecisionLens",
    status: "Research",
    description: "AI-assisted decision-making for complex scenarios",
  },
];

export default function HumanAIPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">👤</span>
            <span className="text-sm text-gray-300">Layer 1</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Human + <span className="gradient-text">AI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging the gap between human cognition and artificial intelligence
            through emotional AI, companions, and decision-making systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Research <span className="gradient-text">Areas</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Active <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Beta"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers" className="btn-secondary mr-4">
            ← All Layers
          </Link>
          <Link href="/layers/social-simulation" className="btn-primary">
            Next: Social Simulation →
          </Link>
        </div>
      </div>
    </div>
  );
}
