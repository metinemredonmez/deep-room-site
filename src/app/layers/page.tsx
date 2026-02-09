import Link from "next/link";

const layers = [
  {
    id: "human-ai",
    title: "Human + AI",
    icon: "👤",
    color: "from-purple-500 to-pink-500",
    description:
      "Emotional AI companions, personalized decision-making systems, and human-AI collaboration frameworks that enhance human capabilities.",
    stats: [
      { label: "Research Areas", value: "12+" },
      { label: "Active Projects", value: "8" },
      { label: "Publications", value: "25+" },
    ],
  },
  {
    id: "social-simulation",
    title: "Social Simulation",
    icon: "🏙️",
    color: "from-blue-500 to-cyan-500",
    description:
      "Testing policies, modeling societies, and simulating complex social dynamics at scale for better decision-making.",
    stats: [
      { label: "Simulation Models", value: "15+" },
      { label: "Policy Tests", value: "50+" },
      { label: "Cities Modeled", value: "10" },
    ],
  },
  {
    id: "space-frontier",
    title: "Space & Frontier",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
    description:
      "Satellites, robotics, deep space exploration, and autonomous systems for frontier environments beyond Earth.",
    stats: [
      { label: "Mission Types", value: "6" },
      { label: "Robotics Systems", value: "12" },
      { label: "Partnerships", value: "5" },
    ],
  },
  {
    id: "defense",
    title: "Defense & Sovereign AI",
    icon: "🛡️",
    color: "from-green-500 to-emerald-500",
    description:
      "National security applications, strategic autonomy, and sovereign AI infrastructure for critical systems.",
    stats: [
      { label: "Security Domains", value: "8" },
      { label: "Defense Systems", value: "10+" },
      { label: "Nations Served", value: "3" },
    ],
  },
  {
    id: "bio-ai",
    title: "Biological Intelligence",
    icon: "🧬",
    color: "from-teal-500 to-blue-500",
    description:
      "Genomics, drug discovery, neuro-AI interfaces, and biological system modeling for healthcare advancement.",
    stats: [
      { label: "Research Labs", value: "4" },
      { label: "Discoveries", value: "15+" },
      { label: "Clinical Trials", value: "3" },
    ],
  },
];

export default function LayersPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Deep Room <span className="gradient-text">Layers</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our architecture consists of five interconnected layers, each
            representing a major domain of AI application and research. Together,
            they form a unified knowledge system designed for long-term impact.
          </p>
        </div>

        {/* Layer Cards */}
        <div className="space-y-8">
          {layers.map((layer, index) => (
            <Link
              key={layer.id}
              href={`/layers/${layer.id}`}
              className="group block"
            >
              <div
                className={`glass rounded-3xl p-8 md:p-12 relative overflow-hidden hover:scale-[1.01] transition-all duration-300 ${
                  index % 2 === 1 ? "md:ml-12" : "md:mr-12"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${layer.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                <div className="relative grid md:grid-cols-3 gap-8 items-center">
                  {/* Icon & Title */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl">{layer.icon}</span>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Layer {index + 1}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                          {layer.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-400 text-lg mb-6">
                      {layer.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                      <span className="font-medium">Explore this layer</span>
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

                  {/* Stats */}
                  <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                    {layer.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center md:text-right"
                      >
                        <div className="text-2xl md:text-3xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Integration Section */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unified <span className="gradient-text">Integration</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            All five layers work together, sharing data, insights, and
            capabilities to create a comprehensive AI ecosystem.
          </p>

          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className="aspect-square rounded-xl glass flex items-center justify-center text-3xl hover:scale-110 transition-transform cursor-pointer"
                >
                  {layer.icon}
                </div>
              ))}
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full mb-8" />
            <p className="text-gray-400">
              Cross-layer communication enables breakthrough discoveries and
              applications that no single domain could achieve alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
