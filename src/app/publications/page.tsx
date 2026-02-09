import Link from "next/link";

const publications = [
  { title: "Scaling Laws for Neural Language Models", year: "2024", type: "Paper" },
  { title: "Efficient Training of Large Vision Models", year: "2024", type: "Paper" },
  { title: "Multi-Agent Systems for Complex Problem Solving", year: "2024", type: "Paper" },
  { title: "Deep Room Technical Report 2025", year: "2025", type: "Report" },
  { title: "AI Safety: A Comprehensive Guide", year: "2025", type: "Guide" },
];

export default function PublicationsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research <span className="gradient-text">Publications</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our latest research papers, technical reports, and guides.
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div key={i} className="bg-dark-100 border border-white/10 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold mb-1">{pub.title}</h3>
                <p className="text-gray-400 text-sm">{pub.year}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sm">{pub.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
