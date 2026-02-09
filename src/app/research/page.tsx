import Link from "next/link";

const researchPrograms = [
  {
    title: "Emotional AI Lab",
    layer: "Human + AI",
    status: "Active",
    description:
      "Developing AI systems that understand and respond to human emotions with nuance and empathy.",
    lead: "Dr. Sarah Chen",
    publications: 12,
  },
  {
    title: "Urban Dynamics Center",
    layer: "Social Simulation",
    status: "Active",
    description:
      "Modeling complex urban systems to test policies and predict societal changes.",
    lead: "Prof. Marcus Webb",
    publications: 8,
  },
  {
    title: "Orbital AI Systems",
    layer: "Space & Frontier",
    status: "Active",
    description:
      "Creating autonomous AI for satellite operations and deep space missions.",
    lead: "Dr. Yuki Tanaka",
    publications: 15,
  },
  {
    title: "Sovereign Tech Initiative",
    layer: "Defense",
    status: "Classified",
    description:
      "Building national AI infrastructure with strategic autonomy and security.",
    lead: "Restricted",
    publications: 3,
  },
  {
    title: "BioAI Research Hub",
    layer: "Biological Intelligence",
    status: "Active",
    description:
      "Advancing genomics, drug discovery, and brain-computer interfaces.",
    lead: "Dr. Elena Rodriguez",
    publications: 22,
  },
];

const publications = [
  {
    title: "Toward Emotional Resonance in AI Companions",
    authors: "Chen, S., et al.",
    journal: "Nature Machine Intelligence",
    year: 2024,
  },
  {
    title: "Multi-Agent Urban Simulation at Scale",
    authors: "Webb, M., Johnson, K.",
    journal: "Computational Social Science",
    year: 2024,
  },
  {
    title: "Autonomous Navigation in Deep Space Environments",
    authors: "Tanaka, Y., et al.",
    journal: "Journal of Aerospace Computing",
    year: 2024,
  },
  {
    title: "AI-Driven Drug Discovery: A Decade in Review",
    authors: "Rodriguez, E., Park, J.",
    journal: "Nature Reviews Drug Discovery",
    year: 2024,
  },
];

const collaborations = [
  { name: "MIT AI Lab", type: "Academic" },
  { name: "Stanford HAI", type: "Academic" },
  { name: "ESA", type: "Space Agency" },
  { name: "NIH", type: "Government" },
  { name: "DeepMind", type: "Industry" },
  { name: "OpenAI", type: "Industry" },
];

export default function ResearchPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Research & <span className="gradient-text">Innovation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pushing the boundaries of AI across five interconnected domains,
            from emotional intelligence to space exploration.
          </p>
        </div>

        {/* Research Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Research <span className="gradient-text">Programs</span>
          </h2>
          <div className="space-y-6">
            {researchPrograms.map((program) => (
              <div
                key={program.title}
                className="glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{program.title}</h3>
                      <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
                        {program.layer}
                      </span>
                    </div>
                    <p className="text-gray-400">{program.description}</p>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-lg text-center flex-shrink-0 ${
                      program.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {program.status}
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>Lead: {program.lead}</span>
                  <span>Publications: {program.publications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Publications */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8">
            Recent <span className="gradient-text">Publications</span>
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="font-bold mb-2">{pub.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>{pub.authors}</span>
                  <span>•</span>
                  <span className="text-primary">{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-secondary">
              View All Articles
            </Link>
          </div>
        </div>

        {/* Collaborations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Global <span className="gradient-text">Collaborations</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collaborations.map((collab) => (
              <div
                key={collab.name}
                className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
              >
                <div className="font-bold mb-1">{collab.name}</div>
                <div className="text-sm text-gray-400">{collab.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="gradient-text">Research</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We're always looking for talented researchers and collaborators to
            push the boundaries of AI.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
