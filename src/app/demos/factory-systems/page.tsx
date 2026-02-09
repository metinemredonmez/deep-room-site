import Link from "next/link";

const features = [
  { icon: "🔧", title: "Predictive Maintenance", desc: "Forecast equipment failures before they happen" },
  { icon: "📊", title: "Quality Control", desc: "AI-powered defect detection and analysis" },
  { icon: "⚙️", title: "Process Optimization", desc: "Improve efficiency and reduce waste" },
  { icon: "🤖", title: "Robotics Integration", desc: "Smart automation and robot control" },
  { icon: "📈", title: "Production Planning", desc: "Demand forecasting and scheduling" },
  { icon: "🔒", title: "Safety Monitoring", desc: "Real-time hazard detection" },
];

const stats = [
  { value: "40%", label: "Downtime Reduction" },
  { value: "25%", label: "Quality Improvement" },
  { value: "30%", label: "Cost Savings" },
  { value: "99%", label: "Accuracy" },
];

export default function FactorySystemsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Factory Systems</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🏭</span>
            <span className="text-xs text-gray-300">Industrial AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Factory <span className="gradient-text">Systems</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industrial automation and smart manufacturing solutions. Predictive maintenance,
            quality control, and production optimization powered by AI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
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

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-3">Ready to Modernize Your Factory?</h2>
          <p className="text-gray-400 text-sm mb-6">Contact us for a custom demo tailored to your manufacturing needs.</p>
          <Link href="/contact" className="btn-primary">Request Demo</Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/emotional-ai" className="btn-secondary">← Emotional AI</Link>
          <Link href="/demos/logistics" className="btn-primary">Logistics AI →</Link>
        </div>
      </div>
    </div>
  );
}
