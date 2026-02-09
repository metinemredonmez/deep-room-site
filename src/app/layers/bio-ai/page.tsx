import Link from "next/link";

const features = [
  {
    icon: "🧬",
    title: "Genomics AI",
    description:
      "Advanced AI for genome analysis, variant interpretation, and personalized medicine.",
  },
  {
    icon: "💊",
    title: "Drug Discovery",
    description:
      "Accelerating pharmaceutical research through AI-powered molecule design and testing.",
  },
  {
    icon: "🧠",
    title: "Neuro Interfaces",
    description:
      "Brain-computer interfaces and neural signal processing for medical applications.",
  },
  {
    icon: "🖥️",
    title: "Bio Computing",
    description:
      "Hybrid computing systems combining biological and silicon-based processors.",
  },
  {
    icon: "🔬",
    title: "Protein Folding",
    description:
      "AI models predicting protein structures for drug development and disease understanding.",
  },
  {
    icon: "🏥",
    title: "Clinical AI",
    description:
      "Diagnostic and treatment recommendation systems for healthcare providers.",
  },
];

const researchAreas = [
  {
    name: "Genomic Medicine",
    progress: 75,
    description: "Personalized treatments based on genetic profiles",
  },
  {
    name: "Neural Decoding",
    progress: 45,
    description: "Understanding and interpreting brain signals",
  },
  {
    name: "Synthetic Biology",
    progress: 60,
    description: "Engineering biological systems with AI assistance",
  },
  {
    name: "Longevity Research",
    progress: 35,
    description: "AI-driven approaches to extending healthy lifespan",
  },
];

const applications = [
  "Cancer Treatment",
  "Rare Disease Diagnosis",
  "Drug Repurposing",
  "Epidemic Prediction",
  "Mental Health",
  "Regenerative Medicine",
];

export default function BioAIPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">🧬</span>
            <span className="text-sm text-gray-300">Layer 5</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Biological <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Genomics, drug discovery, neuro-AI interfaces, and biological system
            modeling for healthcare advancement.
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

        {/* Research Progress */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Research <span className="gradient-text">Progress</span>
          </h2>
          <div className="space-y-6">
            {researchAreas.map((area) => (
              <div key={area.name}>
                <div className="flex justify-between mb-2">
                  <div>
                    <span className="font-bold">{area.name}</span>
                    <span className="text-gray-400 text-sm ml-2">
                      {area.description}
                    </span>
                  </div>
                  <span className="text-primary font-medium">{area.progress}%</span>
                </div>
                <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full transition-all duration-500"
                    style={{ width: `${area.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Medical <span className="gradient-text">Applications</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="px-6 py-3 rounded-full glass hover:bg-white/5 transition-colors cursor-pointer"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="inline-block relative">
                <div className="text-9xl">🧬</div>
                <div className="absolute -top-2 -right-2 text-4xl animate-pulse">✨</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                The Future of <span className="gradient-text">Healthcare</span>
              </h2>
              <p className="text-gray-400 mb-6">
                We envision a future where AI-powered biological intelligence
                enables truly personalized medicine, early disease detection,
                and treatments that work at the molecular level.
              </p>
              <div className="space-y-4">
                {[
                  "Predict diseases before symptoms appear",
                  "Design drugs tailored to individual patients",
                  "Decode and interface with the human brain",
                  "Extend healthy human lifespan",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers/defense" className="btn-secondary mr-4">
            ← Defense & Sovereign AI
          </Link>
          <Link href="/layers" className="btn-primary">
            All Layers Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
