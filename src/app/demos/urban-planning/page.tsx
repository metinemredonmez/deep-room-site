import Link from "next/link";

const features = [
  { icon: "🚗", title: "Traffic Simulation", desc: "Model and optimize traffic flow" },
  { icon: "🏗️", title: "Development Planning", desc: "Urban growth and zoning analysis" },
  { icon: "🌳", title: "Green Space Design", desc: "Optimize parks and public areas" },
  { icon: "🚇", title: "Transit Planning", desc: "Public transportation optimization" },
  { icon: "🏠", title: "Housing Analysis", desc: "Residential development insights" },
  { icon: "⚡", title: "Infrastructure Grid", desc: "Utilities and services planning" },
];

export default function UrbanPlanningPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Urban Planning</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🏙️</span>
            <span className="text-xs text-gray-300">Simulation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Urban <span className="gradient-text">Planning</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traffic simulation, city planning, and infrastructure optimization.
            Build smarter cities with AI-powered urban development tools.
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

        {/* Simulation Preview */}
        <div className="glass rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">City <span className="gradient-text">Simulation</span></h2>
          <div className="bg-dark-100 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-gray-400">Interactive city simulation coming soon</p>
            <p className="text-gray-500 text-sm mt-2">Model traffic, population, and infrastructure</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/logistics" className="btn-secondary">← Logistics AI</Link>
          <Link href="/demos/policy-simulation" className="btn-primary">Policy Simulation →</Link>
        </div>
      </div>
    </div>
  );
}
