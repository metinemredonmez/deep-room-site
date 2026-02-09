import Link from "next/link";
import Image from "next/image";

const partnerTypes = [
  {
    title: "Research Institutions",
    desc: "Universities and research labs advancing AI frontiers",
    icon: "/icons/ai-brain.svg",
    benefits: ["Joint research programs", "Access to datasets", "Publication opportunities"]
  },
  {
    title: "Enterprise",
    desc: "Large corporations seeking AI transformation",
    icon: "/icons/buildings.svg",
    benefits: ["Custom AI solutions", "Integration support", "Dedicated team"]
  },
  {
    title: "Startups",
    desc: "Innovative AI startups building the future",
    icon: "/icons/rocket.svg",
    benefits: ["Technology partnerships", "Co-development", "Market access"]
  },
  {
    title: "Government",
    desc: "Public sector organizations serving citizens",
    icon: "/icons/cyber-security.svg",
    benefits: ["Sovereign AI solutions", "Compliance ready", "Security focused"]
  },
];

const collaborationAreas = [
  {
    title: "Research & Development",
    description: "Joint R&D projects in cutting-edge AI domains including emotional AI, social simulation, and space exploration.",
    icon: "/icons/ai-brain.svg",
  },
  {
    title: "Technology Integration",
    description: "Integrate Deep Room's AI capabilities into your existing systems and workflows.",
    icon: "/icons/cloud-server.svg",
  },
  {
    title: "Data Partnerships",
    description: "Collaborate on data sharing initiatives to advance AI research while maintaining privacy.",
    icon: "/icons/3d-report.svg",
  },
  {
    title: "Education & Training",
    description: "Develop AI literacy programs and training curricula for your organization.",
    icon: "/icons/file.svg",
  },
];

const benefits = [
  "Access to cutting-edge AI technology",
  "Dedicated partnership team",
  "Custom solutions for your needs",
  "Early access to new features",
  "Joint marketing opportunities",
  "Priority support and SLAs",
];

export default function CollaboratePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Collaborate</span> With Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Partner with Deep Room to advance AI research, develop innovative solutions,
            and shape the future of intelligent systems together.
          </p>
        </div>

        {/* Partner Types */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Who We <span className="gradient-text">Partner With</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type) => (
              <div key={type.title} className="bg-dark-100 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all">
                <Image src={type.icon} alt={type.title} width={48} height={48} className="mb-4" />
                <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{type.desc}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Collaboration <span className="gradient-text">Areas</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {collaborationAreas.map((area) => (
              <div key={area.title} className="glass rounded-xl p-6 flex gap-4 hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0">
                  <Image src={area.icon} alt={area.title} width={40} height={40} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Partnership <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Join a growing network of organizations pushing the boundaries of AI.
                Our partners gain exclusive access to resources, technology, and expertise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/logo.png"
                alt="Deep Room"
                width={200}
                height={200}
                className="mx-auto mb-6"
              />
              <div className="text-xl font-bold gradient-text mb-2">Deep Room AI</div>
              <p className="text-gray-400">The Thinking Machine</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can work together to achieve your AI goals.
            Book a meeting with our partnerships team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="btn-primary">
              Book a Meeting
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
