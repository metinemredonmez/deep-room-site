import Link from "next/link";

const features = [
  {
    icon: "🛰️",
    title: "Satellite AI",
    description:
      "Intelligent satellite systems for Earth observation, communication, and space monitoring.",
  },
  {
    icon: "🤖",
    title: "Space Robotics",
    description:
      "Autonomous robots for maintenance, construction, and exploration in space environments.",
  },
  {
    icon: "🗺️",
    title: "Mission Planning",
    description:
      "AI-powered mission design, trajectory optimization, and resource management.",
  },
  {
    icon: "⛏️",
    title: "Resource Extraction",
    description:
      "Autonomous systems for mining and processing resources on asteroids and planetary bodies.",
  },
  {
    icon: "🔧",
    title: "In-Space Manufacturing",
    description:
      "AI-controlled manufacturing systems operating in microgravity environments.",
  },
  {
    icon: "📡",
    title: "Deep Space Communication",
    description:
      "Advanced communication protocols for long-distance space operations.",
  },
];

const missions = [
  {
    name: "Orbital Sentinel",
    type: "Earth Observation",
    status: "Operational",
    description: "AI-powered satellite network for environmental monitoring",
  },
  {
    name: "Lunar Constructor",
    type: "Robotics",
    status: "Development",
    description: "Autonomous construction systems for lunar base development",
  },
  {
    name: "Asteroid Scout",
    type: "Exploration",
    status: "Planning",
    description: "AI-guided probes for asteroid mapping and analysis",
  },
];

const technologies = [
  "Autonomous Navigation",
  "Radiation-Hardened AI",
  "Swarm Intelligence",
  "Predictive Maintenance",
  "Resource Optimization",
  "Remote Operations",
];

export default function SpaceFrontierPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-3xl -z-10" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-sm text-gray-300">Layer 3</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Space & <span className="gradient-text">Frontier</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Satellites, robotics, deep space exploration, and autonomous systems
            for frontier environments beyond Earth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Active Missions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Active <span className="gradient-text">Missions</span>
          </h2>
          <div className="space-y-4">
            {missions.map((mission) => (
              <div
                key={mission.name}
                className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{mission.name}</h3>
                    <span className="px-3 py-1 rounded-full text-sm bg-orange-500/20 text-orange-300">
                      {mission.type}
                    </span>
                  </div>
                  <p className="text-gray-400">{mission.description}</p>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg text-center ${
                    mission.status === "Operational"
                      ? "bg-green-500/20 text-green-400"
                      : mission.status === "Development"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {mission.status}
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
                className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Frontier <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            By 2050, we envision AI-powered systems enabling permanent human
            presence beyond Earth, sustainable space resource utilization, and
            exploration of the outer solar system.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="glass rounded-xl p-4">
              <div className="text-2xl mb-2">🌙</div>
              <div className="text-sm text-gray-400">Moon Base</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-2xl mb-2">🔴</div>
              <div className="text-sm text-gray-400">Mars Colony</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-2xl mb-2">🪐</div>
              <div className="text-sm text-gray-400">Deep Space</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers/social-simulation" className="btn-secondary mr-4">
            ← Social Simulation
          </Link>
          <Link href="/layers/defense" className="btn-primary">
            Next: Defense & Sovereign AI →
          </Link>
        </div>
      </div>
    </div>
  );
}
