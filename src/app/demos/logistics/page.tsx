import Link from "next/link";

const features = [
  { icon: "🗺️", title: "Route Optimization", desc: "Find the most efficient delivery routes" },
  { icon: "📦", title: "Inventory Management", desc: "Smart stock level predictions" },
  { icon: "🚚", title: "Fleet Management", desc: "Track and optimize vehicle usage" },
  { icon: "📊", title: "Demand Forecasting", desc: "Predict future logistics needs" },
  { icon: "⏱️", title: "Delivery Time Estimation", desc: "Accurate ETA predictions" },
  { icon: "🔄", title: "Returns Processing", desc: "Streamline reverse logistics" },
];

const stats = [
  { value: "35%", label: "Route Efficiency" },
  { value: "50%", label: "Faster Delivery" },
  { value: "20%", label: "Cost Reduction" },
  { value: "95%", label: "ETA Accuracy" },
];

export default function LogisticsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Logistics AI</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🚚</span>
            <span className="text-xs text-gray-300">Industrial AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Logistics <span className="gradient-text">AI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Supply chain optimization and intelligent logistics solutions. Route planning,
            inventory management, and demand forecasting powered by AI.
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

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/factory-systems" className="btn-secondary">← Factory Systems</Link>
          <Link href="/demos/urban-planning" className="btn-primary">Urban Planning →</Link>
        </div>
      </div>
    </div>
  );
}
