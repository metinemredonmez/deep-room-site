import Link from "next/link";

const features = [
  {
    icon: "🔍",
    title: "Threat Analysis",
    description:
      "Advanced AI systems for real-time threat detection, assessment, and prediction.",
  },
  {
    icon: "🛡️",
    title: "Cyber Defense",
    description:
      "Autonomous cybersecurity systems protecting critical infrastructure and networks.",
  },
  {
    icon: "📋",
    title: "Strategic Planning",
    description:
      "AI-assisted decision support for complex strategic and tactical scenarios.",
  },
  {
    icon: "🤖",
    title: "Autonomous Systems",
    description:
      "Unmanned platforms with intelligent decision-making for defense operations.",
  },
  {
    icon: "📡",
    title: "Intelligence Processing",
    description:
      "Multi-source intelligence fusion and analysis at unprecedented scale.",
  },
  {
    icon: "🔐",
    title: "Sovereign Infrastructure",
    description:
      "National AI infrastructure ensuring strategic autonomy and data sovereignty.",
  },
];

const domains = [
  { name: "Cyber Security", icon: "💻" },
  { name: "Border Security", icon: "🚧" },
  { name: "Maritime Defense", icon: "⚓" },
  { name: "Aerospace", icon: "✈️" },
  { name: "Critical Infrastructure", icon: "🏭" },
  { name: "Communication Security", icon: "📶" },
];

const principles = [
  {
    title: "Human Oversight",
    description: "All autonomous systems maintain human-in-the-loop for critical decisions",
  },
  {
    title: "Ethical Framework",
    description: "Strict adherence to international humanitarian law and ethical guidelines",
  },
  {
    title: "Transparency",
    description: "Explainable AI ensuring accountability in decision-making processes",
  },
  {
    title: "Proportionality",
    description: "Systems designed to minimize collateral impact and ensure proportional response",
  },
];

export default function DefensePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">🛡️</span>
            <span className="text-sm text-gray-300">Layer 4</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Defense & <span className="gradient-text">Sovereign AI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            National security applications, strategic autonomy, and sovereign AI
            infrastructure for critical systems.
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

        {/* Domains */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Security <span className="gradient-text">Domains</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {domains.map((domain) => (
              <div
                key={domain.name}
                className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-3">{domain.icon}</div>
                <div className="font-medium text-sm">{domain.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Principles */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Ethical <span className="gradient-text">Principles</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5"
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{principle.title}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereign AI */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Sovereign <span className="gradient-text">AI Infrastructure</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Building independent, secure AI infrastructure that ensures
                national technological sovereignty while enabling international
                collaboration within trusted frameworks.
              </p>
              <ul className="space-y-3">
                {[
                  "Data sovereignty and protection",
                  "Independent compute infrastructure",
                  "Secure supply chain management",
                  "National AI talent development",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-9xl">🏛️</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers/space-frontier" className="btn-secondary mr-4">
            ← Space & Frontier
          </Link>
          <Link href="/layers/bio-ai" className="btn-primary">
            Next: Biological Intelligence →
          </Link>
        </div>
      </div>
    </div>
  );
}
