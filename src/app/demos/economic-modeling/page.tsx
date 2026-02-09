import Link from "next/link";

const features = [
  { icon: "📈", title: "Market Analysis", desc: "Real-time market trends and predictions" },
  { icon: "💹", title: "Risk Assessment", desc: "Portfolio risk modeling" },
  { icon: "🏦", title: "Financial Planning", desc: "Long-term financial projections" },
  { icon: "📊", title: "Macro Economics", desc: "GDP and economic indicators" },
  { icon: "💰", title: "Investment Strategy", desc: "AI-driven investment insights" },
  { icon: "🔮", title: "Forecasting", desc: "Economic trend predictions" },
];

export default function EconomicModelingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Economic Modeling</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">📈</span>
            <span className="text-xs text-gray-300">Finance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Economic <span className="gradient-text">Modeling</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Market analysis and financial forecasting powered by AI.
            Make data-driven decisions with predictive economic models.
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
          <Link href="/demos/healthcare" className="btn-secondary">← Healthcare AI</Link>
          <Link href="/demos/crisis-simulation" className="btn-primary">Crisis Simulation →</Link>
        </div>
      </div>
    </div>
  );
}
