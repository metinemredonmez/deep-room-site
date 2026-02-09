import Link from "next/link";

const features = [
  { icon: "🩺", title: "Diagnostics", desc: "AI-assisted disease detection and diagnosis" },
  { icon: "🔬", title: "Lab Analysis", desc: "Automated test result interpretation" },
  { icon: "💊", title: "Drug Interaction", desc: "Check medication compatibility" },
  { icon: "📋", title: "Patient Records", desc: "Intelligent medical record analysis" },
  { icon: "🏥", title: "Hospital Management", desc: "Optimize healthcare operations" },
  { icon: "🧪", title: "Clinical Trials", desc: "Accelerate research processes" },
];

const stats = [
  { value: "95%", label: "Diagnostic Accuracy" },
  { value: "60%", label: "Time Saved" },
  { value: "1M+", label: "Patients Helped" },
  { value: "24/7", label: "Availability" },
];

export default function HealthcarePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Healthcare AI</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🏥</span>
            <span className="text-xs text-gray-300">Healthcare</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Healthcare <span className="gradient-text">AI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Medical diagnostics support and healthcare optimization.
            AI-powered tools for better patient outcomes.
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

        {/* Disclaimer */}
        <div className="glass rounded-2xl p-6 mb-16 border border-yellow-500/20">
          <div className="flex items-start gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-bold mb-2">Important Notice</h3>
              <p className="text-gray-400 text-sm">
                AI tools are designed to assist healthcare professionals, not replace them.
                Always consult with qualified medical practitioners for diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/policy-simulation" className="btn-secondary">← Policy Simulation</Link>
          <Link href="/demos/economic-modeling" className="btn-primary">Economic Modeling →</Link>
        </div>
      </div>
    </div>
  );
}
