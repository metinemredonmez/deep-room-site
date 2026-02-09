import Link from "next/link";

const features = [
  { icon: "🌪️", title: "Disaster Modeling", desc: "Natural disaster impact prediction" },
  { icon: "🦠", title: "Pandemic Simulation", desc: "Disease spread modeling" },
  { icon: "🔥", title: "Wildfire Prediction", desc: "Fire spread and evacuation planning" },
  { icon: "🌊", title: "Flood Analysis", desc: "Flood risk assessment" },
  { icon: "🚨", title: "Emergency Response", desc: "Resource allocation optimization" },
  { icon: "📡", title: "Early Warning", desc: "Real-time threat detection" },
];

export default function CrisisSimulationPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Crisis Simulation</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🌍</span>
            <span className="text-xs text-gray-300">Simulation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Crisis <span className="gradient-text">Simulation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Disaster and pandemic modeling for emergency preparedness.
            Simulate crisis scenarios to improve response strategies.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-xl p-5 hover:bg-white/5 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/economic-modeling" className="btn-secondary">← Economic Modeling</Link>
          <Link href="/demos/genomics" className="btn-primary">Genomics AI →</Link>
        </div>
      </div>
    </div>
  );
}
