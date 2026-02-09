import Link from "next/link";

const features = [
  { icon: "🧬", title: "DNA Analysis", desc: "Sequence analysis and interpretation" },
  { icon: "💊", title: "Drug Discovery", desc: "AI-accelerated pharmaceutical research" },
  { icon: "🔬", title: "Protein Folding", desc: "Structure prediction modeling" },
  { icon: "🧪", title: "Gene Editing", desc: "CRISPR target identification" },
  { icon: "📊", title: "Biomarker Detection", desc: "Disease marker identification" },
  { icon: "🧠", title: "Personalized Medicine", desc: "Tailored treatment recommendations" },
];

const stats = [
  { value: "10B+", label: "Base Pairs Analyzed" },
  { value: "99.9%", label: "Accuracy" },
  { value: "100x", label: "Faster Analysis" },
  { value: "50+", label: "Disease Models" },
];

export default function GenomicsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/demos" className="hover:text-white transition-colors">Demos</Link>
          <span>/</span>
          <span className="text-white">Genomics AI</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
            <span className="text-lg">🧬</span>
            <span className="text-xs text-gray-300">Healthcare</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Genomics <span className="gradient-text">AI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            DNA analysis and drug discovery powered by advanced AI.
            Accelerating genomic research and personalized medicine.
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

        {/* Research Note */}
        <div className="glass rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Research <span className="gradient-text">Collaboration</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Partner with Deep Room for genomics research. We collaborate with
            universities, research institutions, and pharmaceutical companies.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Research Team
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/demos/crisis-simulation" className="btn-secondary">← Crisis Simulation</Link>
          <Link href="/demos" className="btn-primary">All Demos</Link>
        </div>
      </div>
    </div>
  );
}
