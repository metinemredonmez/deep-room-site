import Link from "next/link";

const features = [
  {
    icon: "🏛️",
    title: "Policy Testing",
    description:
      "Simulate policy implementations before real-world deployment to predict outcomes and side effects.",
  },
  {
    icon: "🌆",
    title: "Urban Planning",
    description:
      "Model city dynamics, traffic patterns, and resource allocation for smarter urban development.",
  },
  {
    icon: "📈",
    title: "Economic Modeling",
    description:
      "Simulate economic scenarios, market behaviors, and financial system interactions.",
  },
  {
    icon: "👥",
    title: "Behavioral Prediction",
    description:
      "Forecast collective human behavior patterns for better planning and intervention strategies.",
  },
  {
    icon: "🔄",
    title: "System Dynamics",
    description:
      "Model complex adaptive systems with feedback loops and emergent behaviors.",
  },
  {
    icon: "📊",
    title: "Data-Driven Insights",
    description:
      "Extract actionable insights from simulation results using advanced analytics.",
  },
];

const useCases = [
  {
    title: "Smart City Planning",
    description: "Optimize urban infrastructure, transportation, and services",
    icon: "🏙️",
  },
  {
    title: "Pandemic Response",
    description: "Model disease spread and evaluate intervention strategies",
    icon: "🦠",
  },
  {
    title: "Climate Adaptation",
    description: "Simulate environmental changes and mitigation policies",
    icon: "🌍",
  },
  {
    title: "Economic Policy",
    description: "Test fiscal and monetary policies before implementation",
    icon: "💰",
  },
];

const technologies = [
  "Agent-Based Modeling",
  "Multi-Agent Systems",
  "System Dynamics",
  "Monte Carlo Simulation",
  "Digital Twin Technology",
  "Real-time Data Integration",
];

export default function SocialSimulationPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">🏙️</span>
            <span className="text-sm text-gray-300">Layer 2</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Social <span className="gradient-text">Simulation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Testing policies, modeling societies, and simulating complex social
            dynamics at scale for better decision-making.
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

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Use <span className="gradient-text">Cases</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="glass rounded-2xl p-8 flex items-start gap-6"
              >
                <div className="text-5xl">{useCase.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "15+", label: "Simulation Models" },
            { value: "50+", label: "Policy Tests" },
            { value: "10", label: "Cities Modeled" },
            { value: "1M+", label: "Agents Simulated" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers/human-ai" className="btn-secondary mr-4">
            ← Human + AI
          </Link>
          <Link href="/layers/space-frontier" className="btn-primary">
            Next: Space & Frontier →
          </Link>
        </div>
      </div>
    </div>
  );
}
