import Link from "next/link";

const features = [
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure for AI workloads with global distribution.",
  },
  {
    icon: "📱",
    title: "Edge AI",
    description:
      "On-device AI processing for low-latency applications and privacy.",
  },
  {
    icon: "🏢",
    title: "Data Centers",
    description:
      "Purpose-built facilities optimized for AI training and inference.",
  },
  {
    icon: "🎮",
    title: "GPU Clusters",
    description:
      "High-performance computing clusters for large-scale model training.",
  },
  {
    icon: "🔄",
    title: "Distributed Systems",
    description:
      "Fault-tolerant architectures for reliable AI service delivery.",
  },
  {
    icon: "📊",
    title: "MLOps Platform",
    description:
      "End-to-end machine learning operations and model lifecycle management.",
  },
];

const technologies = [
  "Kubernetes",
  "TensorRT",
  "CUDA",
  "Apache Spark",
  "Ray",
  "Horovod",
  "NVIDIA Triton",
  "Docker",
];

const stats = [
  { value: "10K+", label: "GPUs" },
  { value: "99.99%", label: "Uptime" },
  { value: "50+", label: "Regions" },
  { value: "1ms", label: "Latency" },
];

export default function InfrastructurePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">⚡</span>
            <span className="text-sm text-gray-300">Layer 6</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Infrastructure & <span className="gradient-text">Compute</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Scalable AI infrastructure, distributed computing, and high-performance
            systems for global deployment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-5 hover:bg-white/5 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Global <span className="gradient-text">Architecture</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-1">Multi-Region</h3>
              <p className="text-gray-400 text-sm">Deployed across 50+ global regions</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold mb-1">Secure</h3>
              <p className="text-gray-400 text-sm">End-to-end encryption & compliance</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-1">Fast</h3>
              <p className="text-gray-400 text-sm">Sub-millisecond inference latency</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/layers/bio-ai" className="btn-secondary mr-4">
            ← Biological Intelligence
          </Link>
          <Link href="/layers" className="btn-primary">
            All Layers Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
